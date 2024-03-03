import FormWrapper from './form-wrapper'

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title='account'>
      <label htmlFor=''>email</label>
      <input
        type='email'
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor=''>password</label>
      <input
        type='password'
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}

export default AccountForm
