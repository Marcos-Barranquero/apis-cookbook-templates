import { ValidationPasswordError, ValidationUserError } from './errors'
import { validateUser } from './validations'

class User {
  username: string
  password: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}
export function receiveUser(user: User) {
  try {
    validateUser(user.username, user.password)
  } catch (e) {
    if (e instanceof ValidationUserError) {
      console.log('ValidationUserError', e.message)
    } else if (e instanceof ValidationPasswordError) {
      console.log('ValidationPasswordError', e.message)
    } else {
      console.log('Unknown Error', e.message)
    }
  }
}
