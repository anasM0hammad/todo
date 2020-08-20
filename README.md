# Todo API
A basic todo app api with all CRUD operations

### Project Files 
1. app.js : server is created in this file using express. All the end points are also coded here
2. database.js : Mongodb client is configured in this file. I used Atlas and connect with db using URL. You need to put your own url of db in URL variable.
3. models/todo.model.js : the todo model in describe in this file. A todo consist of a title and description with by default mongodb id. All the CRUD functions are coded in Todo class

### Steps :
1. npm install
2. place your url of mongodb database in database.js file in URL variable.
3. in command line : npm start or npm run dev
4. your todo app server will run on 3000 port i.e localhost:3000

### End points :
1. To save a todo
     end point: /save-todo
     type : POST Request
     body : {
              "title" : "Any Title",
              "description" : "Any"
            }
     
2. To Get all Todo
      end point : /all-todos
      type : GET
      
3. To Update a Todo
      end point : /update-todo
      type: POST
      body : SAME AS /save-todo
      headers : {
                "id" : mongodb ObjectId
                }
                
4. To delete a todo
      end point: /delete-todo
      type: GET
      headers : {
                  "id" : mongodb ObjectId
                }
                
