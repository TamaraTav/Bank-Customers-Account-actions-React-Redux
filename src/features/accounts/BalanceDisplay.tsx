import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
    <div>
      <h1>Balance: {formatCurrency(balance)}</h1>
      {loan > 0 && (
        <h2>
          Loan: {formatCurrency(loan)} (Purpose: {loanPurpose})
        </h2>
      )}
    </div>
  );
}
