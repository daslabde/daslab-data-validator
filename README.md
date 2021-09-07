# Daslab Data Validator
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)

## About
This library is a set of basic validation rules which you can use on FE and BE. It's good integrated with `vee-validate` FE library, because you can extend those rules in `vee-validate`. 

We use `joi` library under the hood for defining rules and validate them. 

The idea of creation of this library: 
- one source of truth for validation
- not duplicate the same code on FE and BE
- don't care what is under the hood, just use what you need for validation

## Installation

### Using PAT (personal access token)
**1. Create PAT**

Follow the link from [github documentation](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and create your PAT with `read:packages` permission

**2. Authorize your PAT from github**

Create `.npmrc` file in the same directory you have `package.json`

```
@daslabde:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<Your personal access token>
```

**3. Install library**

```
npm install @daslabde/daslab-data-validator
```

### Without using PAT
```
npm install https://github.com/daslabde/daslab-data-validator.git
```

## Usage
### For FE
```js
import { extend } from 'vee-validate'
import {
  number,
  string,
  min,
  max,
  oneOf,
  required,
} from '@daslabde/daslab-data-validator'

extend('number', number)
extend('string', string)
extend('min', min)
extend('max', max)
extend('oneOf', oneOf)
extend('required', required)
```

### For BE
```
import { validate } from '@daslabde/daslab-data-validator'

const rules = {
  firstName: 'string|min:2|max:100|required',
  gender: 'string|oneOf:male,female,other|required',
  notes: 'string|max:250'
}

const data = {
  firstName: '',
  gender: '',
  notes: ''
}

const result = validate(rules, data)

console.log(result)
```

## Methods
- validate
- boolean
- date
- email
- number
- phone
- string
- dateFormat
- length
- max
- maxValue
- min
- minValue
- oneOf
- required
