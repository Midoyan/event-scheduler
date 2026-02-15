import { Navigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../contexts/AuthContext";

const SignInPage = () => {
    const { isAuthenticated, login } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const result = await login(e.target.email.value, e.target.password.value);
        const prefix = result.ok ? "" : "Error: ";
        alert(prefix + result.message);
    }

    return (
        <AuthForm onSubmit={handleSubmit} isLogin={true} />
    )
}

export default SignInPage;