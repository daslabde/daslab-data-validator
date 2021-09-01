const dateFormat = (rule) => {
  return /^dateFormat:/.test(rule)
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

const required = (rule) => {
  return rule === 'required'
}

export {
  dateFormat,
  length,
  max,
  min,
  oneOf,
  required,
}
