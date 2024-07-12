'use client'

import { RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { useTranslations, useMessages } from 'next-intl'
import countries from '../../../lib/countries.json'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { sendMail } from '@/actions/sendMail'

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
type IContact = z.infer<typeof formSchema>

const Contact = () => {
  const t = useTranslations('contact')
  const messages: any = useMessages()

  const form = useForm<IContact>({
    defaultValues: {
      // name: 'Abbas Lamouri',
      // email: 'abbaslamouri@yrlus.com',
      // country: 'United States',
      // phone: '216-502-6378',
      // subject: 'Test',
      // message: 'You have a new message from PPF Tech',
      name: '',
      email: '',
      country: '',
      phone: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: IContact) => {
    const result = (await sendMail(data)) as { status: string; message: string }

    if (result?.status == 'fail')
      form.setError('root', { message: 'We are not able to send your message.  Please try again later' })
    if (result.status === 'success') toast.success('Your email was submitted successfuly.', { duration: 10000 })
  }

  return (
    <div
      className="app-container bg-no-repeat bg-cover bg-center py-24 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/leaf-picture.png"`,
      }}
    >
      <div className="mx-auto  space-y-6 sm:w-[650px]  ">
        <div className="flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl font-bold">{messages?.contact?.title}</h1>
          <p className="text-start">{messages?.contact?.description}</p>
        </div>
        {/* <div className="grid gap-6"> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('formFields.name')} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('formFields.name')} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('formFields.email')} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('formFields.email')} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('formFields.country')} <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('formFields.country')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((c: any, i: number) => (
                        <SelectItem value={c.countryName} key={i}>
                          {c.countryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                      You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> {t('formFields.phone')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('formFields.phone')} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {' '}
                    {t('formFields.subject')} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('formFields.subject')} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('formFields.message')} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('formFields.message')} className="resize-none" rows={5} {...field} />
                  </FormControl>
                  {/* <FormDescription>
                      You can <span>@mention</span> other users and organizations.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
            <Button type="submit" className="" disabled={form.formState.isSubmitting}>
              <RefreshCw
                className={cn({
                  hidden: !form.formState.isSubmitting,
                  'visible animate-spin': form.formState.isSubmitting,
                })}
              />
              {form.formState.isSubmitting ? messages?.contact?.submitBtnMsgs + '...' : messages?.contact?.submitBtn}
            </Button>
          </form>
        </Form>
        {form?.formState?.errors?.root && (
          <p className="text-sm text-red-500 bg-red-200 p-2">{form?.formState?.errors?.root?.message}</p>
        )}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact
