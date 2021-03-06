import Joi from '../libs/joi'
import * as types from '../joi/types'
import * as rules from '../joi/rules'

const length = {
  validate: (value, options) => {
    return !rules.length(types.string(), options[0])
      .validate(value).error
  }
}

const max = {
  validate: (value, options) => {
    return !rules.max(types.string(), options[0])
      .validate(value).error
  }
}

const maxValue = {
  validate: (value, options) => {
    return !rules.max(types.number(), options[0])
      .validate(value).error
  }
}

const min = {
  validate: (value, options) => {
    return !rules.min(types.string(), options[0])
      .validate(value).error
  }
}

const minValue = {
  validate: (value, options) => {
    return !rules.min(types.number(), options[0])
      .validate(value).error
  }
}

const oneOf = {
  validate: (value, options) => {
    return !rules.oneOf(types.string(), options.join(','))
      .validate(value).error
  }
}

const required = {
  computesRequired: true,
  params: [],
  validate: (value) => ({
    valid: !rules.required(Joi.any())
      .validate(value).error,
    required: true
  })
}

export {
  length,
  max,
  maxValue,
  min,
  minValue,
  oneOf,
  required,
}
