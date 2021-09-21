import Joi from '../libs/joi'

const DATE_FORMAT = 'DD-MM-YYYY'
const PHONE_MIN = 5
const PHONE_PATTERN = /^\+?\d*$/

const boolean = () => {
  return Joi.boolean()
}

const date = (options) => {
  return Joi.date()
    .format(options || [DATE_FORMAT])
}

const email = () => {
  return Joi.string()
    .trim()
    .email({ tlds: false })
}

const number = () => {
  return Joi.number()
}

const phone = () => {
  return Joi.string()
    .trim()
    .min(PHONE_MIN)
    .pattern(PHONE_PATTERN)
}

const string = () => {
  return Joi.string()
    .trim()
}

export {
  boolean,
  date,
  email,
  number,
  phone,
  string,
}
