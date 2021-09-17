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
      SUPPORTED_TYPES.forEach((name) => {
        if (typeCheckers && typeCheckers[name](rule)) {
          if (types[name]) {
            let typeOptions
            try {
               typeOptions = rule.split(':')[1]
            } catch (error) {}
            joiValue = types[name](typeOptions)
          }
        }
      })

      SUPPORTED_RULES.forEach((name) => {
        if (ruleCheckers && ruleCheckers[name](rule)) {
          let ruleOptions
          if (rules[name]) {
            try {
              ruleOptions = rule.split(':')[1]
            } catch (error) {}
            joiValue = rules[name](joiValue, ruleOptions)
          }
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

export {
  validate,
  SUPPORTED_TYPES,
  SUPPORTED_RULES,
}
