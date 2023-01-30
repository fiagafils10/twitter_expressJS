const mongoose = require ('mongoose')
const schema = mongoose.Schema

const tweetSchema = schema({
    content:{
        type:String,
        maxlength:[300, 'texte trop long'],
        minlength:[5, 'ecrire du contenu'],
        required:[true, 'champs requis']
    }
})

const Tweet = mongoose.model('tweet', tweetSchema)

module.exports = Tweet    