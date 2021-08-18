const dateFormat = (rule) => {
  return /^dateFormat:/.test(rule)
}

const email = (rule) => {
  return rule === 'email'
}

const length = (rule) => {
  return /^length:\d+$/.test(rule)
}

const max = (rule) => {
  return /^(max|maxValue):\d+$/.test(rule)
}

const min = (rule) => {
  return /^(min|minValue):\d+$/.test(rule)
}

const oneOf = (rule) => {
  return /^oneOf:/.test(rule)
}

const phone = (rule) => {
  return rule === 'phone'
}

const required = (rule) => {
  return rule === 'required'
}

export {
  dateFormat,
  email,
  length,
  max,
  min,
  oneOf,
  phone,
  required,
}
