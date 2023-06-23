import Joi from 'joi'

const registerSchema = Joi.object({
  nickName: Joi.string().trim().required().messages({
    'string.empty': 'Nickname is required.',
  }),
  email: Joi.string().email({ tlds: false }).messages({
    'string.empty': 'Invalid email address.',
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.pattern.base':
        'Password must be at least 6 characters and contain only alphabet and number.',
    }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
    'any.only': 'Password and confirm password did not match.',
    'string.empty': 'Confirm password is required.',
  }),
})

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false })
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message
      return acc
    }, {})
  }
}

export default validateRegister
