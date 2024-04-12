import MeetupList from '../components/meetups/MeetupList'



const meetupArr = [
    {
        id:'m1',
        image:'/photo-1471039497385-b6d6ba609f9c.avif',
        title:'MEETUP-1',
        address:'xyz street'
    },
    {
        id:'m2',
        image:'/photo-1471039497385-b6d6ba609f9c.avif',
        title:'MEETUP-2',
        address:'xyz street'
    },
    {
        id:'m3',
        image:'/photo-1471039497385-b6d6ba609f9c.avif',
        title:'MEETUP-3',
        address:'xyz street'
    },
    {
        id:'m4',
        image:'/photo-1471039497385-b6d6ba609f9c.avif',
        title:'MEETUP-4',
        address:'xyz street'
    },
    {
        id:'m5',
        image:'/photo-1471039497385-b6d6ba609f9c.avif',
        title:'MEETUP-5',
        address:'xyz street'
    }
]

const HomePage = (props) => {
  return (
    <>
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

    //will always return an object which contains props that has data
    return {
        props: {
            meetups: meetupArr
        },
        revalidate:10

    }

}

export default HomePage 