'use server'

import { contactFormSchema, IServerResponse } from '@/types'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send mail
 * @param formData
 * @returns object
 */
export const sendMail = async (prevState: unknown, formData: FormData): Promise<IServerResponse<{}>> => {
  // console.log('FD', formData)
  const parsed = contactFormSchema.safeParse(Object.fromEntries(formData.entries()))
  // console.log('Parsed', parsed)
  if (parsed.success === false)
    return {
      status: 'error',
      error: {
        message: 'Please correct the errors below',
        data: parsed?.error.format(),
      },
    }

  const html = `
    <h1>You have a message from PPF Tech</h1>
    <p>name: ${formData.get('name')}</p>
    <p>email: ${formData.get('email')}</p>
    <p>Country: ${formData.get('country')}</p>
    <p>Phone number: ${formData.get('phone')}</p>
    <p>Subject: ${formData.get('subject')}</p>
    <p>Message: ${formData.get('message')}</p>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    `
  const { data, error } = await resend.emails.send({
    from: 'PPF Tech <support@ppf-tech.com>',
    // from: "Artelas Quilts <support@yrl-tech.com>",
    to: 'steve@ppf-tech.com',
    // to:"abbaslamouri@yrlus.com",
    subject: 'Email message from PPF Tech ',
    html,
  })

  console.log(error)

  if (error) redirect('/contact?emailSent=error')
  redirect('/contact?emailSent=success')
}
