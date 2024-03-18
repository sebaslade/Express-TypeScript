import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping',(_req, res) => {
    console.log('alguien realizo un ping aquí ' + new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT,()=>{
    console.log(`Server runing on port http://localhost:${PORT}`)
})