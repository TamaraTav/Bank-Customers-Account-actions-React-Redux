import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./Customer.css";

export default function Customer() {
  const customer = useSelector((store: RootState) => store.customer);
  return (
    <div className="customer-welcome">
      <h1>Welcome back, {customer.fullName}!</h1>
      <p className="customer-id">ID: {customer.nationalID}</p>
    </div>
  );
}
