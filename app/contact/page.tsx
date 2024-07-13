'use client'

import { CheckCheck, ChevronsUpDown, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
// import { useTranslations, useMessages } from 'next-intl'
import countries from '@/lib/countries.json'
import { Button } from '@/components/ui/button'
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

// import { Textarea } from '@/components/ui/textarea'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { toast } from 'sonner'
// import { sendMail } from '@/actions/sendMail'
import { Resend } from 'resend'
import { useFormState } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'
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

// const sendMail = async (data: any) => {
//   const resend = new Resend(process.env.RESENE_API_KEY)

//   const html = `
//     <h1>You have receibed an email from PPF Tech site</h1>
//     <p>name: ${data.name}</p>
//     <p>country: ${data.country}</p>
//     <p>Phone: ${data.phone}</p>
//     <p>Subject: ${data.subject}</p>
//     <p>Message: ${data.message}</p>
//     <p>Date: ${new Date()}</p>
//     `
//   const result = await resend.emails.send({
//     from: 'YRL Consulting <support@yrl-tech.com>',
//     to: data?.email,
//     subject: 'Email message from PPF Tech ',
//     html,
//   })
//   console.log('ERROR', result)
//   if (result.error) return { status: 'fail' }
//   return { status: 'success' }
// }

const Contact = () => {
  const [state, formAction] = useFormState(sendMail, null)
  const [open, setOpen] = useState(false)
  const [countryName, setCountryName] = useState('')

  // const t = useTranslations('contact')
  // const messages: any = useMessages()

  // const form = useForm<IContact>({
  //   defaultValues: {
  //     // name: 'Abbas Lamouri',
  //     // email: 'abbaslamouri@yrlus.com',
  //     // country: 'United States',
  //     // phone: '216-502-6378',
  //     // subject: 'Test',
  //     // message: 'You have a new message from PPF Tech',
  //     name: '',
  //     email: '',
  //     country: '',
  //     phone: '',
  //     subject: '',
  //     message: '',
  //   },
  //   resolver: zodResolver(formSchema),
  // })

  const onSubmit = async (data: IContact) => {
    // const result = (await sendMail(data)) as { status: string; message: string }
    // if (result?.status == 'fail')
    //   form.setError('root', { message: 'We are not able to send your message.  Please try again later' })
    // if (result.status === 'success') toast.success('Your email was submitted successfuly.', { duration: 10000 })
  }

  return (
    <div
      className="app-container bg-no-repeat bg-cover bg-center py-24 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/leaf-picture.png"`,
      }}
    >
      <div className="mx-auto  space-y-6 sm:w-[650px]  ">
        ppppp{JSON.stringify(countryName)}
        <div className="flex-col items-center space-y-2 text-center">
          {/* <h1 className="text-2xl font-bold">{messages?.contact?.title}</h1>
          <p className="text-start">{messages?.contact?.description}</p> */}
        </div>
        {/* <div className="grid gap-6"> */}
        {/* <Form action={formAction}> */}
        <form onSubmit={formAction} className="space-y-4 ">
          <Input type="hidden" id="country" name="country" defaultValue={countryName} />
          <div className=" flex-1 space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" defaultValue={'Abbas Lamouri'} />
            <div className="text-destructive">
              {/* {state?.status === 'error' ? state?.details?.name?._errors.join(', ') : ''} */}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="sku">Email</Label>
            <Input type="text" id="skemailu" name="email" defaultValue={'abbaslamouri@yrlus.com'} />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="country">Country</Label>
            <div className="border-red">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {countryName
                      ? countries?.find((country) => country?.countryName === countryName)?.countryName
                      : 'Select Country...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="border-orange w-full">
                  <Command className="border-green w-full">
                    <CommandInput placeholder="Search framework..." />
                    <CommandList className="max-h-[200px] overflow-y-scroll border-red">
                      <CommandEmpty>No Country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          // <div key={country.countryName}>{country?.countryName}</div>
                          <CommandItem
                            className={cn('', countryName === country?.countryName ? 'bg-primary/10' : '')}
                            key={country.countryName}
                            value={country.countryName}
                            onSelect={(currentValue) => {
                              console.log('KKKKKK', currentValue)
                              setCountryName(currentValue)
                              setOpen(false)
                            }}
                          >
                            <CheckCheck
                              className={cn(
                                'mr-2 h-4 w-4',
                                countryName === country?.countryName ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {country.countryName}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        {/* </Form> */}
        {/* {form?.formState?.errors?.root && (
          <p className="text-sm text-red-500 bg-red-200 p-2">{form?.formState?.errors?.root?.message}</p>
        )} */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact
