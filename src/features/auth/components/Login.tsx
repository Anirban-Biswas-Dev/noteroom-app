import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend later
    console.log("Login attempt:", { email, password });
  };

  return (
    <AuthLayout imageSrc="/auth-imgs/login-page-img.png">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back to NoteRoom</h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <AuthBtn label="Login" />

          <p className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
