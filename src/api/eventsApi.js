// base url from .env file
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchEvents = async (page, N) => {

  const DEV_TOKEN = localStorage.getItem("token");
  if (!DEV_TOKEN)  {
    throw new Error("Could not load API token");
  }

  console.log("token: ");
  console.log(DEV_TOKEN);


  const res = await fetch(
    `${BASE_URL}/events?page=${page}&limit=${N}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${DEV_TOKEN}`
      }
    }
  );

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  const data = await res.json();
  console.log(data);

  const normalized = data.results.map(ev => ({
    ...ev,
    date: new Date(ev.date),
    createdAt: new Date(ev.createdAt),
    updatedAt: new Date(ev.updatedAt)
  }));

  const sorted = normalized.sort((a, b) => b.date - a.date);

  const finalized = { ...data, results: sorted };

  return finalized;
};

const fetchOneEvent = async (id) => {

  const DEV_TOKEN = localStorage.getItem("token");
  if (!DEV_TOKEN)  {
    throw new Error("Could not load API token");
  }

  const res = await fetch(
    `${BASE_URL}/events/${id}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${DEV_TOKEN}`
      }
    }
  );

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  const data = await res.json();
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
    date: new Date(data.date)
  };
};

export { fetchEvents, fetchOneEvent };
