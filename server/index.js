const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routers/userRouter')
const appointmentRouter = require('./routers/appointmentRouter')
const availableAppointmentRouter = require('./routers/availableAppointmentRouter')
const paymentRouter = require('./routers/paymentRouter')

const app = express()
app.use(express.json())
app.use(cors())

try{
    mongoose.connect('mongodb://127.0.0.1:27017/dental', { useNewUrlParser: true, useUnifiedTopology: true })
} catch(err){
    res.json({
        message: err.message
    })
}

app.use('/api/users', userRouter)
app.use('/api/appointments', appointmentRouter)
app.use('/api/available-appointments', availableAppointmentRouter)
app.use('/api/payment', paymentRouter)

app.all('*', (req,res) => {
    res.status(404).json({ message: 'Not Found' })
})

app.listen(4000, () => console.log('Server started...'))