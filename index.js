const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json())

//user-password of mongodb
//তবে id & password এভাবে রাখা যাবে না।

//user: shahinaisbd
//password: rxQAAZbUz4e2slnn


//mongodb config. 

const uri = "mongodb+srv://shahinaisbd:rxQAAZbUz4e2slnn@cluster0.throxid.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// async, try, catch, finally understanding 

/* 
    async function app(){
        //await in the middle
    }
    app().catch(error => console.log(error)) //async function .catch kore error dhora jay

    try{
        // এখানে কোনো কিছু থাকলে এবং সঠিক হরে finally তে যাবে এবং error থাকলে catch এ যাবে।
    }
    catch{
        //error ধরবে
    }
    finally{
        // process শেষে কি হবে। তা ডিফাইন করতে হবে।
    }
*/

app.get('/', (req, res) => {
    res.send('Simple CRUD server is running')
})

app.listen(port, () => {
    console.log(`Simple CRUD server running on ${port}`)
})