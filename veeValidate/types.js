/* eslint-disable */
import * as joiTypes from '../joi/types'

const boolean = (value) => {
  return joiTypes['boolean']().validate(value)
}

const date = (value) => {
  return joiTypes['date']().validate(value)
}

const number = (value) => {
  return joiTypes['number']().validate(value)
}

const string = (value) => {
  return joiTypes['string']().validate(value)
}

export {
  boolean,
  date,
  number,
  string,
}
