function validationError(msg) {
  const error = new Error(msg)
  error.status = 422
  return error
}

function isNull(params) {
  if (params === "" || params === undefined || params === null)
  return true
}

function validateUser(req, res, next) {
  const {name, email, password} = req.body

    // (!name) will check if its all null, undefined, empty string etc.
  // TODO: turn it into a function "isBlakn(name) - write a method"
  if (isNull(name)) { 
    throw validationError("Name is required")
  } else if (isNull(email)) {
    throw validationError("Email is required")
  } else if (isNull(password)) {
    throw validationError("Password is required")
  } else if (password.length < 8) {
    throw validationError("Password needs to be at least 8 characters long")
  } else if (!(/[A-Z]/.test(password))) {
    throw validationError("Password must contain at least one uppercase")
  } else if (!(/[0-9]/.test(password))) {
    throw validationError("Password must contain one number")
  }

  next()
}

module.exports = validateUser