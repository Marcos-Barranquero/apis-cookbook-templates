import { ValidationPasswordError, ValidationUserError } from './errors'

export const validateUser = (username: string = '', password: string = '') => {
  if (!username) throw new ValidationUserError('username is required')
  if (!password) throw new ValidationPasswordError('password is required')
}
