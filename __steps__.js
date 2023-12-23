/**
 * modgodb connection
 * mongo atlas continue with google
 * express server create -> express, cors, mongodb
 * scripts add -> "start": "node index.js"
 * setup mongo  detail in notion
 * mongo config code set in index
 * replace password to uri link instead of <password> 
 * 
 * client input data crate and send to server 
 * CRUD operation document check & set into server
 * server to send mongoDB /Crate data
 * create some components in client side
 * 
 * get data & res.send with server
 * 
 * fetch data from main.jsx -> <Users/> and show UI
 * 
 * -----Delete Data---------
 * add delete button
 * server to database delete operation
 * 
 *
 */

/**
 * ----------------
 * MongoDB Connection
 * ----------------
 * 1. create account
 * 2. crate an user with password 
 * 3. whitelist IP Address
 * 4. database > connect > driver > Node >view full code > 
 * 5. changed the password in the uri
 * -----------------------------
 * 1. CREATE ----POST
 * 2. app.post('/users', async (req, res) => {})
 * 3. Make a function async to use await inside it.
 * 4. Make sure you use the express.json() middleware
 * 5. access data from body const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * CLIENT
 * -------------------
 * CREATE
 * ------------------
 * 1. crate fetch
 * 2. add second parameter /options
 * 3. Provide Method "POST"
 * 4. add header : {"content-type": "application/json"}
 * 5. add body: json.stringify(user)
 *
 * 
 * -------------------
 * READ MANY
 * -------------------
 * crate a cursor = userCollection.find()
 * const result = await cursor.toArray();
 * 
 * -----------------------
 * DELETE
 * --------------------
 * crate app.delete('/users/id', async(req, res) => {})
 * specify unique ObjectId to delete the right user
 * const query = {_id: ObjectId(id)}
 * const result = await movies.deleteOne(query);
 * 
 * ClIENT
 * 
 * create dynamic url with id
 * mention the DELETE method
 * 
 * User delete from UI
 * crate a state & initial state is loaded users
 * user filter with id & remaining users set to users State
 *  
 * ----------
 * UPDATE
 * ----------
 * create add.put('/user/:id', async(req,res)) => {})
 * need unique id &  get user of this id.
 * create filter = {_id: new ObjectId(id)} for DB update
 * and crate options = {upsert: true}
 * which things I will update of the user
 * const updatedUser = {$set: {name: user.name, email: user.email}}
 * send to DB collection of Specific data for Update
 * const result = await collectionUser.updateOne(updatedUser)
 * and send to client res.send(result);
 * 
 * client: 
 * crate a component & set dynamic route
 * fetch specific user id wise 
 * crate a form depend of user information,
 * handle update user function 
 * send id wise data to server 
 * option method: 'PUT', header: 'content-type': 'application/json', body: JSON.stringify(updatedUser)
 * 
 * 
 * 
 * 
 *  */

