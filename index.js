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

        app.get('/PostData', async (req, res) => {
            const query = {};
            const result = await PostDataCollection.find(query).toArray();
            res.send(result);
        })

        app.post('/like', (req, res) => {
            const { id } = req.body
            db.collection('posts').findOneAndUpdate(
                { _id: new mongodb.ObjectId(id) },
                { $inc: { likes: 1 } },
                { returnOriginal: false },
                (error, result) => {
                    if (error) {
                        console.error(error)
                        return res.sendStatus(500)
                    }

                    res.send(result.value)
                }
            )
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
