import { useNavigate, useOutletContext } from "react-router-dom";
import NewEventForm from "../components/NewEventForm";
import { newEvent } from "../api/eventsApi";

const NewEventPage = () => {

    const navigate = useNavigate();
    const { setReloadFlag } = useOutletContext();

    async function handleSubmit(e) {
        e.preventDefault();

        let ne={};

        ne.title= e.target.title.value;
        ne.date= e.target.title.value;
        ne.description= e.target.description.value;
        ne.location= e.target.location.value;
        ne.latitude= e.target.latitude.value;
        ne.longitude= e.target.longitude.value;
        ne.date=new Date(e.target.date.value).toISOString();

        const result = await newEvent(ne);

        if (result.ok) {
            setReloadFlag(prev => !prev);
            navigate("/");
        } else {
            alert("problem with new event");
            return null;
        }
    }

    return (
        <NewEventForm onSubmit={handleSubmit}/>
    )

}

export default NewEventPage;