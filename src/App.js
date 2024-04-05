import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Index";
import Dashboard from "./Pages/Dashboard/Index";
import CompanyAccount from "./Pages/Accounts/Sub-Pages/CompanyAccount/Index"
import CustomerAccount from "./Pages/Accounts/Sub-Pages/CustomerAccount/Index"
import Payments from "./Pages/Accounts/Sub-Pages/Payments/Index"
import Topbar from "./components/Topbar/Index";
import Sidebar from "./components/Sidebar/Index";
import CompanyForm from "./Pages/Accounts/Sub-Pages/CompanyAccount/Form/Index";
import CustomerForm from "./Pages/Accounts/Sub-Pages/CustomerAccount/Form/Index";
import PaymentForm from "./Pages/Accounts/Sub-Pages/Payments/Form/Index";

function App() {
  return (
    <div id="pageBody">
      <Topbar />
      <div id="contentWrapper">
        <Sidebar />
        <div id="mainContent">
          <BrowserRouter>
            <Routes>
              {/* <Route path='/' element={<Login />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/company-account" element={<CompanyAccount />} />
              <Route path="/customer-account" element={<CustomerAccount />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/add-company-data" element={<CompanyForm />} />
              <Route path="/add-customer-data" element={<CustomerForm />} />
              <Route path="/add-payment-data" element={<PaymentForm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
