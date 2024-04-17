import { MongoClient,ObjectId } from 'mongodb';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const Details = (props) => {
  return (
    <MeetupDetails meetupData={props.meetupData} />
  );
};

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  // Accessing the meetups collection
  const meetupCollection = db.collection('new-meetups');
  const meetups = await meetupCollection.find({},{_id:1}).toArray()
  
  client.close()

  
  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() }
  }));

  return {
    fallback: true,
    paths:paths
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
 
  const client = await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  // Accessing the meetups collection
  const meetupCollection = db.collection('new-meetups');
  const selectedMeetups = await meetupCollection.findOne({_id:new ObjectId(meetupId)})
  client.close()
 
  return {
    props: {
      meetupData: {
        id:selectedMeetups._id.toString(),
        title:selectedMeetups.title,
        image:selectedMeetups.image,
        address:selectedMeetups.address,
        description:selectedMeetups.description,
    }
  },
  revalidate:1
}
}

export default Details;
