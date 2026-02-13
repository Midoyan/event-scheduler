import React from 'react'

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {fetchOneEvent} from "./srv/swagger";
import ViewEvent from './ViewEvent';

//import ViewEvent from './ViewEvent';

const Event = () => {

    const { id } = useParams();

    const [event, setEvent] = useState([]);
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


  if (loading) return <div>Lade Event...</div>;
  if (error) return <div>Fehler: {error}</div>;

//console.log("event ",event)



  return (
    <>
    <ViewEvent event={event} reducedView={false}/>
    </>
  )
}

export default Event

