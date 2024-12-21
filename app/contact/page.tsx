
import ContactForm from './ContactForm';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


const ContactPage = async ( props: {searchParams: SearchParams}) => {
  const searchParams = await props.searchParams
  const emailSent = searchParams.emailSent

  return (
   <ContactForm emailSent={emailSent as string}/>
  
  )
}

export default ContactPage
