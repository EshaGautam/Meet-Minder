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

const HomePage = () => {
  return (
    <>
     <MeetupList meetups={meetupArr}/>
    </>
   
  )
}

export default HomePage 