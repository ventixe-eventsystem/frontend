export function validate(name, value, form) {
  let error = ''

  if (name === 'email') {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) error = 'Email is requierd'
    else if (!regEx.test(value)) error = 'Invalid email format'
  }

  if (name === 'password') {
    if (!value) error = 'Password is required'
    else if (value.length < 6) error = 'Password must be at least 6 characters'
  }

  if (name === 'confirmPassword') {
    if (value !== form.password) error = 'Password do not match'
  }

  return error
}

