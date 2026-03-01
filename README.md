# avantasphere_frontend

avantasphere front end

## Environment Variables

The project relies on several variables defined in `.env.local` or `.env`.
Make sure to create the file and include your Supabase credentials.

> **Important:** do **not** wrap the `NEXT_PUBLIC_SUPABASE_URL` or
> `NEXT_PUBLIC_SUPABASE_ANON_KEY` values in quotes. Quoted values were causing
> connection errors (a `fetch failed` timeout) until the client started stripping
> them automatically. Use plain text lines like:
>
> ```dotenv
> NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
> NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
> ```

## Database Migrations

Run the Supabase CLI or SQL editor to apply the migrations located in
`supabase/migrations/`.

The latest scripts add:

- `username` column to `profiles` + `public` role value
- `app_users` table with hashed passwords and RLS policies
- updated categories/products policies allowing public read

Ensure your Supabase project is up-to-date before starting the application.
