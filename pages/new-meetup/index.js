
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const newMeetupHandler = (enteredData) => {
    console.log(enteredData);
    const sendDataToDB = async () => {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredData)
      });
      const data = await response.json();
    };
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
