"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form" 
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"


export enum FormFieldType
{
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneinput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = ()  => {
    const router = useRouter();
    const [isLoading,setIsLoading]= useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
       // const userData = {name,email,phone};
        //const user = await createUser(userData);
        //if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
       console.log(error); 
    }
  }
  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 text-white">
        <section className="mb-12 space-y-4">
            <h1 className="header text-white">Hi there 👋</h1>
            <p className="text-white">Schedule your first appointment.</p>
        </section>
        
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Derick Muluka"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
         />

         <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="mulukaderick@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
         />
         <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+254795299592"
          iconSrc="/assets/icons/email.svg"
          iconAlt="phone"
         />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
    </div>
  )
}

export default PatientForm