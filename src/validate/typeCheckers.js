const boolean = (rule) => {
  return rule === 'boolean'
}

const email = (rule) => {
  return rule === 'email'
}

const date = (rule) => {
  return rule === 'date'
}

const number = (rule) => {
  return rule === 'number'
}

const phone = (rule) => {
  return rule === 'phone'
}

const string = (rule) => {
  return rule === 'string'
}

export {
  boolean,
  email,
  date,
  number,
  phone,
  string,
}
