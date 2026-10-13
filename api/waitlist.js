import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: `"Anaisa Website" <${process.env.SMTP_USER}>`,
      to: 'sakshi@anaisa.com.au',
      subject: `New Jewellery Waitlist Registration — ${name}`,
      html: `
        <h2>New Jewellery Waitlist Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person has registered interest in the Anaisa Jewellery Edit.</p>
      `
    })

    res.status(200).json({ success: true, message: 'Registered successfully' })
  } catch (err) {
    console.error('Waitlist email error:', err)
    res.status(500).json({ error: 'Failed to register' })
  }
}
