import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import "./AccountOperations.css";

export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<string | number>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string | number>("");
  const [loanAmount, setLoanAmount] = useState<string | number>("");
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { isLoading, balance, loan } = useSelector(
    (store: RootState) => store.account
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleDeposit = () => {
    if (!depositAmount || +depositAmount <= 0) {
      setErrorMessage("Please enter a valid deposit amount");
      return;
    }

    setErrorMessage("");
    dispatch(deposit(+depositAmount, currency));
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || +withdrawAmount <= 0) {
      setErrorMessage("Please enter a valid withdrawal amount");
      return;
    }

    if (+withdrawAmount > balance) {
      setErrorMessage("Insufficient balance");
      return;
    }

    setErrorMessage("");
    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  };

  const handleRequestLoan = () => {
    if (!loanAmount || +loanAmount <= 0) {
      setErrorMessage("Please enter a valid loan amount");
      return;
    }

    if (!loanPurpose.trim()) {
      setErrorMessage("Please enter a loan purpose");
      return;
    }

    if (loan > 0) {
      setErrorMessage(
        "You already have an active loan. Please pay it off first."
      );
      return;
    }

    setErrorMessage("");
    dispatch(requestLoan(+loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    if (balance < loan) {
      setErrorMessage("Insufficient balance to pay off the loan");
      return;
    }

    setErrorMessage("");
    dispatch(payLoan());
  };

  return (
    <div className="account-operations">
      <h2 className="operations-title">Account Operations</h2>

      {errorMessage && (
        <div className="error-message" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="operations-grid">
        <div className="operation-card">
          <div className="operation-header">
            <h3>Deposit</h3>
          </div>
          <div className="operation-content">
            <div className="input-group">
              <label htmlFor="deposit">Amount</label>
              <input
                id="deposit"
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(+e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            <div className="input-group">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleDeposit}
              disabled={isLoading}
            >
              {isLoading ? "Converting..." : "Deposit"}
            </button>
          </div>
        </div>

        <div className="operation-card">
          <div className="operation-header">
            <h3>Withdraw</h3>
          </div>
          <div className="operation-content">
            <div className="input-group">
              <label htmlFor="withdraw">Amount</label>
              <input
                id="withdraw"
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(+e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            <button className="btn btn-secondary" onClick={handleWithdraw}>
              Withdraw
            </button>
          </div>
        </div>

        <div className="operation-card">
          <div className="operation-header">
            <h3>Request Loan</h3>
          </div>
          <div className="operation-content">
            <div className="input-group">
              <label htmlFor="loan-amount">Amount</label>
              <input
                id="loan-amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            <div className="input-group">
              <label htmlFor="loan-purpose">Purpose</label>
              <input
                id="loan-purpose"
                type="text"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                placeholder="e.g., Buy a car"
              />
            </div>
            <button className="btn btn-accent" onClick={handleRequestLoan}>
              Request Loan
            </button>
          </div>
        </div>

        <div className="operation-card">
          <div className="operation-header">
            <h3>Pay Loan</h3>
          </div>
          <div className="operation-content">
            <p className="loan-info">
              {loan > 0
                ? `Pay off your loan of $${loan.toFixed(2)}`
                : "No active loan"}
            </p>
            <button
              className="btn btn-warning"
              onClick={handlePayLoan}
              disabled={loan === 0}
            >
              Pay Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
