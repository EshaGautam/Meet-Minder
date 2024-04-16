import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const newMeetupHandler = (enteredData) => {
        console.log(enteredData);
        const sendDataToDB = async () => {
            try {
                const response = await fetch("/api/new-meetup", {
                    method: "POST",
                    body: JSON.stringify(enteredData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data); 
            } catch (error) {
                console.error("Error:", error);
            }
        };

        sendDataToDB()
    };

    return (
        <div>
            <NewMeetupForm onAddMeetup={newMeetupHandler} />
        </div>
    );
};

export default NewMeetup;
