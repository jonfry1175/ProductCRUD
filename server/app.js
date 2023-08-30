const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const Router = require('./routes')
app.use(Router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})