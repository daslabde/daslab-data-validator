const MIN_LENGTH = 1;
const MAX_LENGTH = 250;

const dateFormat = (Joi, options) => {
  return Joi.format(options[0])
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

const required = (Joi) => {
  return Joi.invalid(null, '', false)
    .required()
}

export {
  dateFormat,
  length,
  max,
  min,
  oneOf,
  required,
}
