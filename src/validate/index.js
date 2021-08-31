import Joi from 'joi'
import * as types from '../joi/types'
import * as rules from '../joi/rules'
import * as typeCheckers from './typeCheckers'
import * as ruleCheckers from './ruleCheckers'

const SUPPORTED_TYPES = Object.keys(types)
const SUPPORTED_RULES = Object.keys(rules)

const _parseVeeString = (veeString) => {
  return veeString
    .split('|')
    .reduce((joiValue, rule) => {
      SUPPORTED_TYPES.forEach((name) => {
        if (typeCheckers?.[name](rule)) {
          joiValue = types?.[name]()

          return
        }
      })

      SUPPORTED_RULES.forEach((name) => {
        if (ruleCheckers?.[name](rule)) {
          joiValue = rules?.[name](joiValue, rule.split(':')[1])

          return
        }
      })
    }, null)
}

const _parseVeeObject = (veeObject) => {
  return Object
    .entries(veeObject)
    .reduce((joiObject, [key, value]) => {
      let joiValue

      switch(typeof value) {
        case 'string':
          joiValue = _parseVeeString(value)

        case 'object':
          joiValue = _parseVeeObject(value)
      }

      return {
        ...joiObject,
        [key]: joiValue
      }
    }, {})
}

const _generateJoiSchema = (veeObject) => {
  const joiObject = _parseVeeObject(veeObject)

  return Joi
    .object(joiObject)
    .options({ 
      abortEarly: false, 
      convert: true 
    })
}

const validate = (veeObject, dataObject) => {
  const joiSchema = _generateJoiSchema(veeObject)

  return joiSchema.validate(dataObject)
}

export {
  validate,
  SUPPORTED_TYPES,
  SUPPORTED_RULES,
}
