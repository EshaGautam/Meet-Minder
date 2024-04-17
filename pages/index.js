import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head'
import { MongoClient } from 'mongodb'



// const meetupArr = [
//     {
//         id:'m1',
//         image:'/photo-1471039497385-b6d6ba609f9c.avif',
//         title:'MEETUP-1',
//         address:'xyz street'
//     },
//     {
//         id:'m2',
//         image:'/photo-1471039497385-b6d6ba609f9c.avif',
//         title:'MEETUP-2',
//         address:'xyz street'
//     },
//     {
//         id:'m3',
//         image:'/photo-1471039497385-b6d6ba609f9c.avif',
//         title:'MEETUP-3',
//         address:'xyz street'
//     },
//     {
//         id:'m4',
//         image:'/photo-1471039497385-b6d6ba609f9c.avif',
//         title:'MEETUP-4',
//         address:'xyz street'
//     },
//     {
//         id:'m5',
//         image:'/photo-1471039497385-b6d6ba609f9c.avif',
//         title:'MEETUP-5',
//         address:'xyz street'
//     }
// ]

const HomePage = (props) => {
  return (
    <>
    <Head>
      <title>Meet-Minder</title>
      <meta name='description' content='Browse all the meetup held near by'></meta>
    </Head>
     <MeetupList meetups={props.meetups}/>
    </>
   
  )
}

// export async function getServerSideProps(){
//     //here data will be fetched 
//     return{
//         props:{
//             meetups: meetupArr
//         }
//     }
// }

export async function getStaticProps(){
    //here data gets fetched during build or before the page get render

    const client = await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    // Accessing the meetups collection
    const meetupCollection = db.collection('new-meetups');

    const meetupArr = await meetupCollection.find().toArray()
    //will always return an object which contains props that has data
    client.close()
    return {
        props: {
            meetups: meetupArr.map(meetup=>({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                description:meetup.description,
                id:meetup._id.toString()

            }))
        },
        revalidate:1

    }

}

export default HomePage 