const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Express server')
})

app.use('/api', (req, res, next) => {
    res.send('Solicitud a la api')
		next()
})

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})