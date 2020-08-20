const express = require('express') ;
const getDb = require('./database').getDb ;


const mongoConnect = require('./database').mongoConnect ;
const Todo = require('./models/todo.model') ;

const app = express() ;

app.use(express.json()) ;

// SAVE A TODO 
app.post('/save-todo', (req, res, next) => {
	const title = req.body.title ;
	const description = req.body.description ;

	if(!title || !description){
		res.status(500).json({
			message : "Missing fields"
		});
		return ;
	}
    
    const newTodo = new Todo(title, description) ;
	newTodo.save(title, description).then(newTodo => {
		res.status(200).json({
			todo : newTodo.ops[0],
			status : 'created'
		})
	}).catch(err => console.log(err)) ;
});


// GET ALL TODOS
app.get('/all-todos', (req, res, next) => {
	Todo.fetchAll().then(todos => {
		res.status(200).json({
			data : todos
		});
	}).catch(err => console.log(err));
});



// UPDATE A TODO
app.post('/update-todo', (req, res, next) => {
	const id = req.headers.id ;
	const title = req.body.title ;
	const description = req.body.description ;

	if(!id || !title || !description){
		res.status(500).json({
			message : "Missing fields"
		});
		return ;
	}

	const updatedTodo = new Todo(title ,description) ;
	updatedTodo.update(id).then(updatedTodo => {
		res.status(200).json({
			status: "updated"
		})
	}).catch(err => console.log(err)) ;
});



// DELETE A TODO
app.get('/delete-todo', (req, res, next) => {
	const id = req.headers.id ;
	
	if(!id){
		res.status(500).json({
			message : "Missing fields"
		});
		return ;
	}

	Todo.delete(id).then(deleted => {
		res.status(200).json({
			status: 'Deleted'
		});
	}).catch(err => console.log(err)) ;
});



// PAGE NOT FOUND
app.use((req, res, next) => {
	res.status(404).json({
		message : 'Page Not Found'
	});
});



mongoConnect(() => {
	console.log('connected') ;
	app.listen(3000) ;
});