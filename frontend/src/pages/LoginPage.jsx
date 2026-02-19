import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import LoginForm from "../components/login/LoginForm";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { useGuest } from "../hooks/useGuest";

function LoginPage() {
  const { guest } = useGuest();
  if (guest) {
    return <Navigate to="/Home" replace />;
  }

  const { login, loading } = useLogin();

  const [formData, setFormData] = useState({
    treatment: "mr",
    firstName: "",
    lastName: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-96 text-white">
          <LoginForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default LoginPage;

