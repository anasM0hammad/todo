# Todo API <br>
A basic todo app api with all CRUD operations

### Project Files <br> 
1. app.js : server is created in this file using express. All the end points are also coded here
2. database.js : Mongodb client is configured in this file. I used Atlas and connect with db using URL. You need to put your own url of db in URL variable.
3. models/todo.model.js : the todo model in describe in this file. A todo consist of a title and description with by default mongodb id. All the CRUD functions are coded in Todo class

### Steps :
1. npm install
2. place your url of mongodb database in database.js file in URL variable.
3. in command line : npm start or npm run dev
4. your todo app server will run on 3000 port i.e localhost:3000

### End points :
1. To save a todo <br>
     &nbsp; end point: /save-todo <br>
     &nbsp; type : POST Request <br>
     &nbsp; body : { <br>
           &nbsp; &nbsp;   "title" : "Any Title" , <br>
           &nbsp; &nbsp;   "description" : "Any" <br>
           &nbsp; &nbsp; } <br>
     
2. To Get all Todo <br>
      &nbsp; end point : /all-todos <br>
      &nbsp; type : GET <br>
      
3. To Update a Todo <br>
      &nbsp; end point : /update-todo <br>
      &nbsp; type: POST <br>
      &nbsp; body : SAME AS /save-todo <br>
      &nbsp; headers : { <br>
              &nbsp;  &nbsp;   "id" : mongodb ObjectId <br>
               &nbsp;  } <br>
                
4. To delete a todo <br>
       &nbsp; end point: /delete-todo <br>
       &nbsp; type: GET <br>
       &nbsp; headers : { <br>
               &nbsp;  &nbsp;     "id" : mongodb ObjectId <br>
                &nbsp;  &nbsp;  } <br>
                
