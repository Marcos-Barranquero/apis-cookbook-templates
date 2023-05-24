const createErrorFactory = function (name: string) {
  return class BusinessError extends Error {
    constructor(message: string) {
      super(message)
      this.name = name
    }
  }
}

export const ValidationUserError = createErrorFactory('ConnectionError')
export const ValidationPasswordError = createErrorFactory('ValidationError')

// Override the stack trace

export class NoStackError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BusinessError'
    this.stack = ''
  }
}

// throw new ConnectionError('the database is not available')
