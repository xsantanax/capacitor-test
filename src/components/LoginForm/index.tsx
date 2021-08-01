import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Button from 'components/Button'
import Input from 'components/Input'
import * as S from './styles'

interface FormValues {
  email: string
  password: string
}

const formSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid e-mail').required('Please enter your e-mail'),
  password: yup.string().required('Please enter your password')
})

const LoginForm = () => {
  const [loading, setLoading] = useState(false)

  const submit = async ({ email, password }: FormValues) => {
    setLoading(true)
    console.log(email, password)
    setLoading(false)
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: submit,
    validationSchema: formSchema
  })

  return (
    <S.Container>
      <S.Content>
        <S.Title>Account Sign In</S.Title>
        <Input
          label="Email"
          name="email"
          htmlType="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          onPressEnter={handleSubmit}
          maxWidth={400}
        />
        <Input
          label="Password"
          name="password"
          htmlType="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          onPressEnter={handleSubmit}
          maxWidth={400}
        />
        <Button label="Submit" onClick={handleSubmit} loading={loading} />
        <S.Forgot>Forgot your password?</S.Forgot>
      </S.Content>
      <S.Register>
        Don&apos;t have and account? <a>Register</a>
      </S.Register>
    </S.Container>
  )
}

export default LoginForm
