type LeadPayload = {
  formType?: string;
  fullName?: string;
  email?: string;
  whatsapp?: string;
  companyName?: string;
  websiteUrl?: string;
  objective?: string;
  budget?: string;
  notes?: string;
  honeypot?: string;
};

const json = (res: any, status: number, body: Record<string, unknown>) => {
  res.status(status).json(body);
};

const clean = (value: unknown, max = 2000) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { error: 'Method not allowed.' });
  }

  const body = (req.body || {}) as LeadPayload;

  // Silent honeypot for simple bot protection.
  if (clean(body.honeypot, 200)) {
    return json(res, 200, { success: true });
  }

  const formType = body.formType === 'growth_audit' ? 'growth_audit' : 'contact';
  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 254);
  const whatsapp = clean(body.whatsapp, 40);
  const companyName = clean(body.companyName, 160);
  const whatsappDigits = whatsapp.replace(/\\D/g, '');
  const websiteUrl = clean(body.websiteUrl, 500);
  const objective = clean(body.objective, 300);
  const budget = clean(body.budget, 100);
  const notes = clean(body.notes, 4000);

  if (!fullName || !email || !whatsapp || !companyName || !objective) {
    return json(res, 400, { error: 'Please complete all required fields.' });
  }

  if (!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i.test(email)) {
    return json(res, 400, { error: 'Please provide a valid email address.' });
  }

  if (!/^(?:91)?[6-9]\\d{9}$/.test(whatsappDigits)) {
    return json(res, 400, { error: 'Please provide a valid 10-digit Indian WhatsApp number.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase server environment variables.');
    return json(res, 500, { error: 'Lead system is not configured yet.' });
  }

  const lead = {
    form_type: formType,
    full_name: fullName,
    email,
    whatsapp,
    company_name: companyName,
    website_url: websiteUrl || null,
    objective,
    budget,
    notes: notes || null,
    source_url: req.headers.referer || null,
    user_agent: req.headers['user-agent'] || null,
  };

  try {
    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
    });

    if (!dbResponse.ok) {
      const errorText = await dbResponse.text();
      console.error('Supabase lead insert failed:', errorText);
      return json(res, 500, { error: 'We could not save your request. Please try again.' });
    }

    // Email notification is optional until RESEND_API_KEY is configured.
    // The database remains the source of truth, so a mail-provider issue will not lose the lead.
    if (process.env.RESEND_API_KEY) {
      const recipients = ['hello@1mediasolution.com', '1mediasolution98@gmail.com'];
      const subjectPrefix = formType === 'growth_audit' ? 'Growth Audit' : 'Website Enquiry';
      const html = `
        <h2>New ${subjectPrefix} — 1 Media Solution</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
        <p><strong>Company:</strong> ${escapeHtml(companyName)}</p>
        <p><strong>Website:</strong> ${escapeHtml(websiteUrl || 'Not provided')}</p>
        <p><strong>Objective:</strong> ${escapeHtml(objective)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Notes:</strong><br />${escapeHtml(notes || 'Not provided').replace(/\\n/g, '<br />')}</p>
      `;

      const mailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || '1 Media Solution <onboarding@resend.dev>',
          to: recipients,
          subject: `${subjectPrefix}: ${fullName} — ${companyName}`,
          html,
          reply_to: email,
        }),
      });

      if (!mailResponse.ok) {
        console.error('Resend notification failed:', await mailResponse.text());
      }
    }

    return json(res, 200, { success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return json(res, 500, { error: 'Something went wrong. Please try again.' });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
