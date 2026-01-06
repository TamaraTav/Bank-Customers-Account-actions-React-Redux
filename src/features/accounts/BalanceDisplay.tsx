import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./BalanceDisplay.css";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function BalanceDisplay() {
  const { balance, loan, loanPurpose } = useSelector(
    (store: RootState) => store.account
  );

  return (
    <div className="balance-display">
      <div className="balance-card">
        <div className="balance-label">Account Balance</div>
        <div className="balance-amount">{formatCurrency(balance)}</div>
      </div>
      {loan > 0 && (
        <div className="loan-card">
          <div className="loan-label">Active Loan</div>
          <div className="loan-amount">{formatCurrency(loan)}</div>
          <div className="loan-purpose">Purpose: {loanPurpose}</div>
        </div>
      )}
    </div>
  );
}
