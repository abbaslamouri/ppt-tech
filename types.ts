import z from 'zod'

export type IServerResponse<T> =
  | {
      status: 'error'
      error: { message: string; data?: any }
    }
  | {
      status: 'success'
      data: T
    }

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  country: z.string().min(1, { message: 'Please select a country' }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
})
export type IContact = z.infer<typeof contactFormSchema>
