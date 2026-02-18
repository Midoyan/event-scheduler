import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchOneEvent} from "../api/eventsApi";
import ViewEvent from '../ViewEvent';
import NotFound from "../pages/NotFound";

import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const Event = () => {

  const { id } = useParams();

  const { isAuthenticated } = useAuth();


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
          setError(err.message || "Error while loading event");
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []); //only while mounting

console.log("dibngs", isAuthenticated);


  if (loading)  return <div>Loading event...</div>;

  console.log("dibngs", isAuthenticated);

  if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

  if (error)    return  <NotFound /> ;

  if (event) {
  return (
    <>
      <ViewEvent event={event} reducedView={false} />
    </>
  )
  } else return false;
}

export default Event

