const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().min(8).max(32).alphanum().required()
    }).with('email', 'password')
    // eslint-disable-next-line no-unused-vars
    const { error, value } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid Email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password requires following rules:
            <br>
            1.must only contain alphabet letters and numbers
            <br>
            2.password length should be within the range of 8-32 characters`
          })
          break
        default:
          res.status(400).send({
            error: 'invalid information'
          })
          break
      }
    } else {
      next()
    }
  }
}
