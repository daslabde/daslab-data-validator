import Joi from '../libs/joi'
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
      const ruleFragments = rule ? rule.split(':') : []
      const ruleOptions = ruleFragments.length > 1 ? ruleFragments[1] : null

      SUPPORTED_TYPES.forEach((name) => {
        if (typeCheckers && typeCheckers[name](rule) && types[name]) {
          joiValue = types[name](ruleOptions)
        }
      })

      SUPPORTED_RULES.forEach((name) => {
        if (ruleCheckers && ruleCheckers[name](rule) && rules[name]) {
          joiValue = rules[name](joiValue, ruleOptions)
        }
      })

      return joiValue
    }, {})
}

const _parseVeeObject = (veeObject) => {
  return Object
    .entries(veeObject)
    .reduce((joiObject, [key, value]) => {
      switch(typeof value) {
        case 'string':
          joiObject[key] = _parseVeeString(value)
          break

        case 'object':
          joiObject[key] = _parseVeeObject(value)
          break

        default:
          break
      }

      return joiObject
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

const isValid = (veeObject, dataObject) => {
  const { error } = validate(veeObject, dataObject)

  return !error
}

export {
  validate,
  isValid,
  SUPPORTED_TYPES,
  SUPPORTED_RULES,
}
