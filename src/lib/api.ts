export interface LeadPayload {
  formType: 'contact' | 'growth_audit';
  fullName: string;
  email: string;
  whatsapp: string;
  companyName: string;
  websiteUrl?: string;
  objective: string;
  budget: string;
  notes?: string;
  honeypot?: string;
}

export async function submitLead(payload: LeadPayload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error || 'We could not submit your request. Please try again.');
  }

  return data;
}
