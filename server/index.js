import express from 'express'
import 'dotenv/config'
import cors from "cors";
import tableRouter from './routes/table.routes.js'

const PORT = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use(cors())
app.use('/api', tableRouter)

const startApp = () => {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
}

startApp()
