import { useState, useEffect } from 'react';
import { fetchEvents } from "../api/eventsApi";
import EventCard from "../components/EventCard.jsx";

const HomePage = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let active = true;

    async function load() {
      try {
        const data = await fetchEvents(1, 50);
        if (active) {
          setEvents(data.results);
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


  if (loading) return <div>Loading Events...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Upcoming Events</h1>

      {events.length === 0 && (
        <p className="text-sm opacity-70">No Events Found</p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;
