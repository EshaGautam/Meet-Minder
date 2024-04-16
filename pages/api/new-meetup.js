import { MongoClient } from "mongodb"

const handler=async(req,res)=>{

if(req.method === 'POST'){
    const data = req.body
    const {title,image,address,description} = data

    // connetiong to client using
   const client= await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
   const db = client.db()

//   accessing all the meetups in the collections
   const meetupCollection = db.collection('new-meetups')

// sending data to db 
   const result = await meetupCollection.insertOne(data)
   client.close()

//  sending response to client
   res.status(201).json({message:'Data is successfully inserted'})
}

}
export default handler