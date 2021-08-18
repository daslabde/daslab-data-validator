const PHONE_PATTERN = /^\+?[0-9]*$/
const MIN_LENGTH = 1;
const MAX_LENGTH = 250;

const dateFormat = (Joi, options) => {
  return Joi.format(options[0])
}

const email = (Joi) => {
  return Joi.email()
}

const length = (Joi, options) => {
  return Joi.length(parseInt(options[0], 10))
}

const max = (Joi, options) => {
  return Joi.max(parseInt(options[0], 10) || MAX_LENGTH)
}

const min = (Joi, options) => {
  return Joi.min(parseInt(options[0], 10) || MIN_LENGTH)
}

const oneOf = (Joi, options) => {
  return Joi.valid(...options)
}

const phone = (Joi) => {
  return Joi.pattern(PHONE_PATTERN)
}

const required = (Joi) => {
  return Joi.required()
}

export {
  dateFormat,
  email,
  length,
  max,
  min,
  oneOf,
  phone,
  required,
}
