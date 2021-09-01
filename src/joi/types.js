import Joi from '../libs/joi'

const PHONE_MIN = 5
const PHONE_PATTERN = /^\+?\d*$/

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
  return Joi.string().min(PHONE_MIN).pattern(PHONE_PATTERN)
}

const string = () => {
  return Joi.string()
}

export {
  boolean,
  date,
  email,
  number,
  phone,
  string,
}
