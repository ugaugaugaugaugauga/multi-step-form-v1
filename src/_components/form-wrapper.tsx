import { ReactNode } from 'react'

interface FormWrapperProps {
  title: string
  children: ReactNode
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className='text-center mb-4 text-3xl font-bold'>{title}</h2>
      <div
        style={{
          display: 'grid',
          gap: '1rem .5rem',
          justifyContent: 'flex-start',
          gridTemplateColumns: 'auto minmax(auto, 400px)',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default FormWrapper
