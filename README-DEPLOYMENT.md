# 1 Media Solution — Deployment

This project is designed for GitHub -> Vercel with Supabase as the lead database.

## One-time setup

1. In Supabase, open SQL Editor and run `supabase/leads.sql`.
2. In Vercel, open the project -> Settings -> Environment Variables.
3. Add:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - RESEND_API_KEY (after email setup)
   - LEAD_FROM_EMAIL
4. Redeploy from the main branch.

Never put SUPABASE_SERVICE_ROLE_KEY in frontend code or a VITE_ variable.

## Forms

Both the Contact form and Growth Audit modal submit to `/api/leads`.

The API stores every lead in Supabase. If RESEND_API_KEY is configured, it also sends a notification to:
- hello@1mediasolution.com
- 1mediasolution98@gmail.com

The database is the source of truth, so an email delivery failure does not discard the lead.
