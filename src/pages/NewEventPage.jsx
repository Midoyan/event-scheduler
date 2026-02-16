import { useNavigate } from "react-router-dom";
import NewEventForm from "../components/NewEventForm";
import { fetchCurrentUser } from "../api/authApi";

const NewEventPage = () => {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        let ne={};

        ne.title= e.target.title.value;
        ne.date= e.target.title.value;
        ne.description= e.target.description.value;
        ne.location= e.target.location.value;
        ne.latitude= e.target.latitude.value;
        ne.longitude= e.target.longitude.value;

        console.log(e.target.date.value);

        ne.date=new Date(e.target.date.value).toISOString();

        const hh=await fetchCurrentUser();
        if (!hh) return;
        ne.id=hh.id;

        ne.createdAt=new Date().toISOString();
        ne.updatedAt=ne.createdAt;

        console.log("new event 1");
        console.log(ne);
        console.log("new event 2");
        navigate("/");
    }


    return (
        <NewEventForm onSubmit={handleSubmit}/>
    )

}

export default NewEventPage;