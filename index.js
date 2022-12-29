const express = require('express');
const app = express()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rx4i6uo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const PostDataCollection = client.db('GatherUp').collection('PostData');

        app.post('/PostData', async (req, res) => {
            const post = req.body;
            const result = await PostDataCollection.insertOne(post);
            res.send(result);
        })
    }
    finally {

    }
}
run().catch(error => console.error);
app.get('/', (req, res) => {
    res.send('social media');
})

app.listen(port, () => {
    console.log(`new social media website coming soon${port}`)
})
