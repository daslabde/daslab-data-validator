import Joi from 'joi'

const PHONE_PATTERN = /^\+?[0-9]*$/

const any = () => {
  return Joi.any()
}

const boolean = () => {
  return Joi.boolean()
}

const date = () => {
  return Joi.date()
}

const email = () => {
  return Joi.string().email({ tlds: false })
}

const number = () => {
  return Joi.number()
}

const phone = () => {
  return Joi.string().pattern(PHONE_PATTERN)
}

const string = () => {
  return Joi.string()
}

export {
  any,
  boolean,
  date,
  email,
  number,
  phone,
  string,
}
