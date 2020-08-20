const mongodb = require('mongodb') ;
const getDb = require('../database.js').getDb ;


class Todo{
	constructor(title, description){
		this.title = title ;
		this.description = description ;
	}

	save(){
		const db = getDb() ;
		return db.collection('todos').insertOne(this);
	}

	static fetchAll(){
		const db = getDb();
		return db.collection('todos').find({}).toArray() ;
	}

	update(id){
		const db = getDb() ;
		return db.collection('todos').updateOne({_id: new mongodb.ObjectId(id)}, {$set : this}) ;
	} 


	static delete(id){
		const db = getDb() ;
		return db.collection('todos').deleteOne({_id: new mongodb.ObjectId(id)}) ;
	}

}

module.exports = Todo ;
