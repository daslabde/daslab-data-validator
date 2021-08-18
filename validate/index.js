import * as types from '../joi/types'
import * as rules from '../joi/rules'
import * as typeCheckers from './typeCheckers'
import * as ruleCheckers from './ruleCheckers'

const TYPES_NAMES = Object.keys(types)
const RULES_NAMES = Object.keys(rules)

const _parseVeeString = (veeString) => {
  return veeString
    .split('|')
    .reduce((joiValue, rule) => {
      TYPES_NAMES.forEach((name) => {
        if (typeCheckers?.[name](rule)) {
          joiValue = types?.[name]()

          return
        }
      })

      RULES_NAMES.forEach((name) => {
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

export default validate
