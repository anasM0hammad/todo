const mongodb = require('mongodb') ;
const mongoClient = mongodb.MongoClient ;
const URL = 'ENTER YOUR DATABASE URL HERE' ;

let _db ;

const mongoConnect = (cb) => {
	mongoClient.connect(URL ,  { useUnifiedTopology: true }).then(client => {
	  console.log('connected')	;
	  _db = client.db() ;
	  cb() ;
	}).catch(err => {
		console.log(err) ;
	})
}

const getDb = () => {
	if(_db){
		return _db ;
	}
}

exports.mongoConnect = mongoConnect ;
exports.getDb = getDb ;