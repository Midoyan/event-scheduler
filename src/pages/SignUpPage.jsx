import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../api/authApi";

const SignUpPage = () => {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        const result = await registerUser(e.target.email.value, e.target.password.value);
        const prefix = result.ok ? "" : "Error: ";
        alert(prefix + result.message);
        if (result.ok) {
            navigate("/");
        }
    }

    return (
        <AuthForm onSubmit={handleSubmit} isLogin={false} />
    )
}

export default SignUpPage;