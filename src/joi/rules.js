const MIN_LENGTH = 1
const MAX_LENGTH = 250
const ONE_OF_SEPARATOR = ','
const REQUIRED_INVALID = [null, '', false]

const length = (Joi, option) => {
  return Joi.length(parseInt(option, 10))
}

const max = (Joi, option) => {
  return Joi.max(parseInt(option, 10) || MAX_LENGTH)
}

const min = (Joi, option) => {
  return Joi.min(parseInt(option, 10) || MIN_LENGTH)
}

const oneOf = (Joi, option) => {
  return Joi.valid(...option.split(ONE_OF_SEPARATOR))
}

const required = (Joi) => {
  return Joi
    .invalid(...REQUIRED_INVALID)
    .required()
}

export {
  length,
  max,
  min,
  oneOf,
  required,
}
