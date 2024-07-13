import z from 'zod'

export const formSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(1, { message: 'Name is reqired' }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is reqired' }),
  country: z
    .string({
      required_error: 'Country is required',
      invalid_type_error: 'Country must be a string',
    })
    .min(1, { message: 'Country is reqired' }),
  phone: z.string().optional(),
  subject: z
    .string({
      required_error: 'Subject is required',
      invalid_type_error: 'Subject must be a string',
    })
    .min(1, { message: 'Subject is reqired' }),
  message: z
    .string({
      required_error: 'Message is required',
      invalid_type_error: 'Message must be a string',
    })
    .min(1, { message: 'Message is reqired' }),
})
export type IContact = z.infer<typeof formSchema>
