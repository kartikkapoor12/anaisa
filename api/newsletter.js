import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
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
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person subscribed via the "Stay in the Edit" form on the homepage.</p>
      `
    })

    res.status(200).json({ success: true, message: 'Subscribed successfully' })
  } catch (err) {
    console.error('Newsletter email error:', err)
    res.status(500).json({ error: 'Failed to subscribe' })
  }
}
