import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
import { AppDispatch } from "../../store";
import "./CreateCustomer.css";

export default function CreateCustomer() {
  const [fullName, setFullName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleCreateCustomer = () => {
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name");
      return;
    }

    if (!nationalId.trim()) {
      setErrorMessage("Please enter your National ID");
      return;
    }

    setErrorMessage("");
    dispatch(createCustomer(fullName, nationalId));
  };

  return (
    <div className="create-customer">
      <div className="customer-card">
        <div className="customer-header">
          <h2>Welcome to Our Bank</h2>
          <p>Create your account to get started</p>
        </div>

        {errorMessage && (
          <div className="error-message" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="customer-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateCustomer();
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="nationalId">National ID</label>
            <input
              type="text"
              id="nationalId"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              placeholder="Enter your National ID"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateCustomer();
              }}
            />
          </div>

          <button className="btn btn-primary" onClick={handleCreateCustomer}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
