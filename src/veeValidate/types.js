import * as types from '../joi/types'

const boolean = (value) => {
  return !types.boolean().validate(value).error
}

const date = (value) => {
  return !types.date().validate(value).error
}

const email = (value) => {
  return !types.email().validate(value).error
}

const number = (value) => {
  return !types.number().validate(value).error
}

const phone = (value) => {
  return !types.phone().validate(value).error
}

const string = (value) => {
  return !types.string().validate(value).error
}

export {
  boolean,
  date,
  email,
  number,
  phone,
  string,
}
