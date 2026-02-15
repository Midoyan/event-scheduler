import { createContext, useState, useContext } from "react";
import { loginUser } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    async function login(email, password) {
        const result = await loginUser(email, password);
        if (result.ok && result.token) {
            localStorage.setItem("token", result.token);
            setIsAuthenticated(true);
        }
        return { ok: result.ok, message: result.message };
    }

    function logout() {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}