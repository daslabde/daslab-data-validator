import * as types from '../joi/types'
import * as rules from '../joi/rules'

const dateFormat = {
  validate: (value, options) => {
    return !rules.dateFormat(types.date(), options).validate(value).error
  }
}

const length = {
  validate: (value, options) => {
    return !rules.length(types.string(), options).validate(value).error
  }
}

const max = {
  validate: (value, options) => {
    return !rules.max(types.string(), options).validate(value).error
  }
}

const maxValue = {
  validate: (value, options) => {
    return !rules.max(types.number(), options).validate(value).error
  }
}

const min = {
  validate: (value, options) => {
    return !rules.min(types.string(), options).validate(value).error
  }
}

const minValue = {
  validate: (value, options) => {
    return !rules.min(types.number(), options).validate(value).error
  }
}

const oneOf = {
  validate: (value, options) => {
    return !rules.oneOf(types.string(), options).validate(value).error
  }
}

const required = {
  computesRequired: true,
  params: [],
  validate: (value) => ({
    valid: !rules.required().validate(value).error,
    required: true
  })
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
