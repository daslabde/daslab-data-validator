import * as types from '../joi/types'
import * as rules from '../joi/rules'

const dateFormat = (value, options) => {
  return !rules.dateFormat(types.date(), options).validate(value).error
}

const length = (value, options) => {
  return !rules.length(types.string(), options).validate(value).error
}

const max = (value, options) => {
  return !rules.max(types.string(), options).validate(value).error
}

const maxValue = (value, options) => {
  return !rules.max(types.number(), options).validate(value).error
}

const min = (value, options) => {
  return !rules.min(types.string(), options).validate(value).error
}

const minValue = (value, options) => {
  return !rules.min(types.number(), options).validate(value).error
}

const oneOf = (value, options) => {
  return !rules.oneOf(types.string(), options).validate(value).error
}

const required = (value) => {
  return !rules.required(types.any()).validate(value).error
}

export {
  dateFormat,
  length,
  max,
  maxValue,
  min,
  minValue,
  oneOf,
  required,
}
