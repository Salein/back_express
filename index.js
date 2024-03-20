import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const PORT = 4000
const DB = 'mongodb+srv://salein:12345@cluster0.bnxqevn.mongodb.net/'

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {

    try {
        const { author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    } catch(e) {
        res.status(500).json(e)
    }
    
})

async function startApp() {
    try {
       await mongoose.connect(DB)
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT ' + PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

startApp()