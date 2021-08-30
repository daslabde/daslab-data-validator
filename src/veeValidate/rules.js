import * as joiTypes from '../joi/types'
import * as joiRules from '../joi/rules'

const dateFormat = (type, value, options) => {
  return joiRules['dateFormat'](joiTypes[type], options).validate(value)
}

const email = (type, value) => {
  return joiRules['email'](joiTypes[type]).validate(value)
}

const length = (type, value, options) => {
  return joiRules['length'](joiTypes[type], options).validate(value)
}

const max = (type, value, options) => {
  return joiRules['max'](joiTypes[type], options).validate(value)
}

const min = (type, value, options) => {
  return joiRules['min'](joiTypes[type], options).validate(value)
}

const oneOf = (type, value, options) => {
  return joiRules['oneOf'](joiTypes[type], options).validate(value)
}

const phone = (type, value) => {
  return joiRules['phone'](joiTypes[type]).validate(value)
}

const required = (type, value) => {
  return joiRules['required'](joiTypes[type]).validate(value)
}

export {
  dateFormat,
  email,
  length,
  max,
  max as maxValue,
  min,
  min as minValue,
  oneOf,
  phone,
  required,
}
