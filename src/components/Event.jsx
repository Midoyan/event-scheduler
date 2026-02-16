import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchOneEvent} from "../api/eventsApi";
import ViewEvent from '../ViewEvent';


const Event = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let active = true;

    async function load() {
      try {
        const data = await fetchOneEvent(id);
        if (active) {
          setEvent(data);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Error while loading events");
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []); //for now only while mounting


  if (loading) return <div>Loading event...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <>
      <ViewEvent event={event} reducedView={false} />
    </>
  )
}

export default Event

