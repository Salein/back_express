import express from "express"
import mongoose from "mongoose"
import router from "./router.js"

const PORT = 4000
const DB = "mongodb+srv://salein:12345@cluster0.bnxqevn.mongodb.net/"

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT " + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()
