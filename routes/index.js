const router = require('express').Router()


router.get('/tweet/new', (req, res)=> {
    res.render('../views/tweets/tweet-form.pug')
})

router.get('/', (req,res)=> {
    res.render('../views/tweets/tweet-list.pug') //venant de pug, enfaite cette route va nous diriger vers la page d'acceuil
})

module.exports  = router