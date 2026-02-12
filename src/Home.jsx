import React from 'react'
import { useState, useEffect } from 'react';
//import { useParams, Link } from "react-router-dom";
import {  Link } from "react-router-dom";
import {fetchEvents} from "./srv/swagger";
import EventCard from "./EventCard.jsx";

const Home = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let active = true;

    async function load() {
      try {
        const data = await fetchEvents(1, 50);
        if (active) {
          const normalized = data.results.map(ev => ({
            ...ev,
            createdAt: new Date(ev.createdAt),
            updatedAt: new Date(ev.updatedAt),
            date: new Date(ev.date)
          }));
          setEvents(normalized);
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


  if (loading) return <div>Lade Events...</div>;
  if (error) return <div>Fehler: {error}</div>;


  return (
    <>
    <h1> home</h1>

    <ul>
        <li>
          <Link to="/event/1">Event 1</Link>
        </li>
        <li>
          <Link to="/event/42">Event 42</Link>
        </li>
      </ul>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            <div>
            <EventCard event={event} />
             </div>
          </li>
        ))}
      </ul>

      {events.length === 0 && <p>Keine Events gefunden.</p>}


    </>
  )
}

export default Home;
