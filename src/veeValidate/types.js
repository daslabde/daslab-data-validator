import * as types from '../joi/types'

const boolean = {
  validate: (value) => {
    return !types.boolean()
      .validate(value).error
  }
}

const date = {
  validate: (value, options) => {
    return !types.date(options)
      .validate(value).error
  }
}

const email = {
  validate: (value) => {
    return !types.email()
      .validate(value).error
  }
}

const number = {
  validate: (value) => {
    return !types.number()
      .validate(value).error
  }
}

const phone = {
  validate: (value) => {
    return !types.phone()
      .validate(value).error
  }
}

const string = {
  validate: (value) => {
    return !types.string()
      .validate(value).error
  }
}

export {
  boolean,
  date,
  email,
  number,
  phone,
  string,
}
