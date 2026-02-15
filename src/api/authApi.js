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
