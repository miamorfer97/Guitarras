
  const express = require('express')
  const cookieParser = require('cookie-parser')
  const  { User } = require('./models/user')
  const app = express()
  const mongoose = require('mongoose')
  
  require('dotenv').config()
  
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true },
      (err) => {
      if(err) return err
      console.log("Conectado a MongoDB")
  })
  
  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(cookieParser())
  
  const port = process.env.PORT || 3002
  
  app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
  })