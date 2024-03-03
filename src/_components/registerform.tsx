'use client'
import { useMultiStepForm } from './use-multi-step-form'
import UserForm from './user-form'
import AddressForm from './address-form'
import AccountForm from './account-form'
import { FormEvent, useState } from 'react'

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

const RegisterForm = () => {
  const [data, setData] = useState(INITIAL_DATA)
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm key={'1'} {...data} updateFields={updateFields} />,
      <AddressForm key={'2'} {...data} updateFields={updateFields} />,
      <AccountForm key={'3'} {...data} updateFields={updateFields} />,
    ])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('성공')
  }
  return (
    <div className='relative bg-slate-100 border p-10'>
      <form action='' onSubmit={onSubmit}>
        <div className='absolute top-2 right-2'>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className='mt-4 flex gap-x-2 justify-end'>
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}
          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
