const express = require('express');
const morgan = require('morgan')
const app = express();


app.use(morgan('tiny'))

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users', (req,res) => {
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id', (req,res) => {
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


app.listen(8000,function(){
  console.log("server is running")
  })