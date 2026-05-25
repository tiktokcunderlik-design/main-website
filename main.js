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
