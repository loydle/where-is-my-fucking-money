const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')


const app = express()

app.listen(3000, () => {
	console.log('server listening on port 3000')
})

app.get('/', (req, res) => {
	res.json({
			hello: 'world'
	})
})
