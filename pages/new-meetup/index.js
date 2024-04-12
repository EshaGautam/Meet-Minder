import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    const newMeetupHandler=(enteredData)=>{
     console.log(enteredData)
    }

  return (
    <div>
    <NewMeetupForm onAddMeetup={newMeetupHandler}/>
    </div>
  )
}

export default NewMeetup