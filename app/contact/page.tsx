'use client'

import { CheckCheck, ChevronsUpDown, CircleCheck, RefreshCw, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import countries from '@/lib/countries.json'
import { Button } from '@/components/ui/button'
import { useFormState, useFormStatus } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'
import { sendMail } from '@/actions/sendMail'
import { Textarea } from '@/components/ui/textarea'
import { useSearchParams } from 'next/navigation'

const ContactPage = ({ searchParams }: any) => {
  const { pending } = useFormStatus()
  console.log(searchParams)
  const [state, formAction] = useFormState(sendMail, null)
  const [open, setOpen] = useState(false)
  const [countryName, setCountryName] = useState('')

  const contact = {
    title: "Let's get in touch!",
    description:
      'We are here to serve. From energy audits and lighting designs to fixture specification and optimization, our lighting designers, engineers and service teams are here to deliver quality solutions with shortest return on investment. Let us know how we can help you!',
    formFields: {
      name: 'Name',
      email: 'Email',
      country: 'Country',
      phone: 'Phone number (optional)',
      subject: 'Subject',
      message: 'Message',
    },
    submitBtn: 'Submit',
    submitBtnMsgs: 'Submitting',
  }

  return (
    <div
      className=" bg-no-repeat bg-cover bg-center py-24 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/leaf-picture.png"`,
      }}
    >
      <div className="container mx-auto space-y-6 sm:w-[650px]  ">
        <div className="flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl font-bold">{contact?.title}</h1>
          <p className="text-start">{contact?.description}</p>
        </div>
        <form action={formAction} className="space-y-4 ">
          <Input type="hidden" id="country" name="country" defaultValue={countryName} />
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className={state?.status === 'error' && state?.error?.data?.name ? 'ring ring-red-500' : ''}
                type="text"
                id="name"
                name="name"
                defaultValue={''}
              />
              <div className="text-destructive">
                {state?.status === 'error' ? state?.error?.data?.name?._errors.join(', ') : ''}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Label htmlFor="sku">Email</Label>
              <Input
                className={state?.status === 'error' && state?.error?.data?.email ? 'ring ring-red-500' : ''}
                type="text"
                id="email"
                name="email"
                defaultValue={''}
              />
              <div className="text-destructive">
                {state?.status === 'error' ? state?.error?.data?.email?._errors.join(', ') : ''}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Label htmlFor="country">Country</Label>
              <div className={state?.status === 'error' && state?.error?.data?.country ? 'ring ring-red-500' : ''}>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                      {countryName
                        ? countries?.find((country) => country?.countryName === countryName)?.countryName
                        : 'Select Country...'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=" w-full">
                    <Command className=" w-full">
                      <CommandInput placeholder="Search framework..." />
                      <CommandList className="max-h-[200px] overflow-y-scroll ">
                        <CommandEmpty>No Country found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((country) => (
                            <CommandItem
                              className={cn('', countryName === country?.countryName ? 'bg-primary/10' : '')}
                              key={country.countryName}
                              value={country.countryName}
                              onSelect={(currentValue) => {
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
              <div className="text-destructive">
                {state?.status === 'error' ? state?.error?.data?.country?._errors.join(', ') : ''}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                className={state?.status === 'error' && state?.error?.data?.phone ? 'ring ring-red-500' : ''}
                type="text"
                id="phone"
                name="phone"
                defaultValue={''}
              />
              <div className="text-destructive">
                {state?.status === 'error' ? state?.error?.data?.phone?._errors.join(', ') : ''}
              </div>
            </div>
          </div>
          <div className=" space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              className={state?.status === 'error' && state?.error?.data?.subject ? 'ring ring-red-500' : ''}
              type="text"
              id="subject"
              name="subject"
              defaultValue={''}
            />
            <div className="text-destructive">
              {state?.status === 'error' ? state?.error?.data?.subject?._errors.join(', ') : ''}
            </div>
          </div>
          <div className=" space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className={state?.status === 'error' && state?.error?.data?.message ? 'ring ring-red-500' : ''}
              id="message"
              name="message"
            />
            <div className="text-destructive">
              {state?.status === 'error' ? state?.error?.data?.message?._errors.join(', ') : ''}
            </div>
          </div>
          <Button type="submit" className=" flex items-center gap-2" aria-disabled={pending}>
            <RefreshCw
              className={cn('size-4', {
                hidden: !pending,
                'visible animate-spin': pending,
              })}
            />
            {pending ? 'Submitting ...' : 'Submit'}
          </Button>
        </form>
        {searchParams?.emailSent === 'success' && (
          <div className="p-3 rounded-md flex items-center gap-2 text-sm text-emerald-500 bg-emerald-500/15">
            <CircleCheck className="size-4" />
            <p>Email sent</p>
          </div>
        )}
        {searchParams?.emailSent === 'error' && (
          <div className="p-3 rounded-md flex items-center gap-2 text-sm text-destructive bg-destructive/15">
            <TriangleAlert className="size-4" />
            <p>Your email was not sent. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactPage
