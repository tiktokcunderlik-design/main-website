document.querySelector('.cta-btn').addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, business })
    })
    const data = await res.json()
    if (data.success) showThankYou()
  })

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  const SUPABASE_URL = 'https://jwlhxzftreyjunfahqqu.supabase.co'      // ← paste here
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bGh4emZ0cmV5anVuZmFocXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MTQwMTQsImV4cCI6MjA5NDA5MDAxNH0.yGxhAh_DM6StJOeSfZy09WhiP5S6MihEGDknhFe1t_k'  // ← paste here
