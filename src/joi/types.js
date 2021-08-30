import Joi from 'joi'

const boolean = () => {
  return Joi.boolean()
}

const date = () => {
  return Joi.date()
}

const number = () => {
  return Joi.number()
}

const string = () => {
  return Joi.string()
}

export {
  boolean,
  date,
  number,
  string,
}
