# Bank Customers Account Actions - React Redux

A modern banking application built with React, TypeScript, and Redux for managing customer accounts, deposits, withdrawals, and loans. Features a beautiful, responsive UI with real-time currency conversion.

## 🚀 Features

### Customer Management

- Create new customer accounts with full name and National ID
- Welcome screen with customer information

### Account Operations

- **Deposit**: Deposit money in multiple currencies (USD, EUR, GBP) with automatic conversion to USD
- **Withdraw**: Withdraw funds with balance validation
- **Request Loan**: Request loans with purpose specification
- **Pay Loan**: Pay off existing loans

### User Experience

- Modern, bank-style UI with gradient cards and smooth animations
- Real-time error messages and validation feedback
- Responsive design for mobile and desktop
- Dark mode support
- Loading states for async operations

## 🛠️ Technologies

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Redux 5.0.1** - State management
- **React-Redux 9.1.2** - React bindings for Redux
- **Redux Thunk 3.1.0** - Async action creators
- **Vite 5.4.1** - Build tool and dev server

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Bank-Customers-Account-actions-React-Redux
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 🏗️ Project Structure

```
src/
├── features/
│   ├── accounts/
│   │   ├── AccountOperations.tsx    # Main operations UI
│   │   ├── AccountOperations.css    # Operations styling
│   │   ├── accountSlice.ts          # Account Redux slice
│   │   ├── BalanceDisplay.tsx       # Balance display component
│   │   └── BalanceDisplay.css       # Balance styling
│   └── customers/
│       ├── CreateCustomer.tsx       # Customer creation form
│       ├── CreateCustomer.css       # Form styling
│       ├── Customer.tsx             # Customer welcome component
│       ├── Customer.css             # Customer styling
│       └── customerSlice.ts         # Customer Redux slice
├── App.tsx                          # Main app component
├── store.ts                         # Redux store configuration
└── main.tsx                         # Application entry point
```

## 💻 Usage

### Creating a Customer

1. When you first open the app, you'll see the customer creation form
2. Enter your full name and National ID
3. Click "Create Account" to proceed

### Account Operations

#### Deposit

- Enter the amount you want to deposit
- Select currency (USD, EUR, or GBP)
- Click "Deposit" - non-USD currencies are automatically converted

#### Withdraw

- Enter the withdrawal amount
- Click "Withdraw" - the system validates sufficient balance

#### Request Loan

- Enter the loan amount
- Specify the loan purpose
- Click "Request Loan" - only one active loan is allowed

#### Pay Loan

- Click "Pay Loan" to pay off your active loan
- The button is disabled if no loan exists

## 🎨 Features Highlights

- **Error Handling**: Comprehensive error messages for invalid operations
- **Validation**: Input validation for all operations
- **Currency Conversion**: Real-time conversion using Frankfurter API
- **State Management**: Centralized state with Redux
- **Type Safety**: Full TypeScript support
- **Modern UI**: Gradient cards, smooth animations, and responsive design

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Configuration

The app uses Redux for state management with the following slices:

- **account**: Manages balance, loans, and account operations
- **customer**: Manages customer information

## 🌐 API Integration

The application uses the [Frankfurter API](https://www.frankfurter.app/) for currency conversion when depositing non-USD currencies.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and not licensed for public use.

## 👤 Author

**Tamara Tava**

- LinkedIn: [https://www.linkedin.com/in/tamara-tava/](https://www.linkedin.com/in/tamara-tava/)

---

Made with ❤️ using React, TypeScript, and Redux
