const {createUser} = require('../queries/users.queries')

exports.signup = (req,res, next) => {
res.render('users/user-form', {errors:null})
}

exports.signupForm = async (req,res, next) => {
   const body = req.body
    try {
        const user = await createUser(body)
    } catch (error) {
        
    }
}