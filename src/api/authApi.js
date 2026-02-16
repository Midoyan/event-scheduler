const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function parseJsonSafe(response) {
    try {
        return await response.json();
    } catch {
        return {};
    }
}

async function postJson(path, payload) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await parseJsonSafe(response);
    return { ok: response.ok, data, status: response.status };
}

export async function loginUser(email, password) {
    const result = await postJson("/auth/login", { email, password });

    if (result.ok && result.data.token) {
        return { ok: true, token: result.data.token, message: "User signed in successfully" };
    }

    return { ok: false, message: result.data.error || "Unknown error" };
}

export async function registerUser(email, password) {
    const result = await postJson("/users", { email, password });

    if (result.ok) {
        return { ok: true, message: "User created successfully" };
    }

    return { ok: false, message: result.data.error || "Unknown error" };
}

// ######################

export async function fetchCurrentUser() {

  const DEV_TOKEN = localStorage.getItem("token");
  if (!DEV_TOKEN)  {
    throw new Error("Could not load API token");
  }

  const res = await fetch(
    `${BASE_URL}/auth/profile`,
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
  return data;
};
