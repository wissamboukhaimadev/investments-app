import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route } from 'react-router-dom'

//components
import { Register,Login,Home,Profile,Transactions,PersonalInfo, ReferalIncome,ReferalProram,BankInfo,Withdraw,AboutUs } from "./components";
import LoginDash from "./components/dashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Investment from "./components/dashboard/Investment";
import Users from "./components/dashboard/Users";
import AdminWithdraw from "./components/dashboard/Withdraw";

import EditInvesment from "./components/dashboard/EditInvesment";
import AddInvestment from "./components/dashboard/AddInvestment";
import BankDetails from "./helper/dashboard/BankDetails";
import UserDetails from "./helper/dashboard/UserDetails";
function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/info' element={<PersonalInfo />} />
          <Route path='/referalprogram' element={<ReferalProram />} />
          <Route path='/referalincome' element={<ReferalIncome />} />
          <Route path='/bankinfo' element={<BankInfo />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/investements' element={<Transactions />} />
          <Route path='/dashboardlogin' element={<LoginDash />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/adminusers' element={<Users />} />
          <Route path='/admininvestments' element={<Investment />} />
          <Route path='/adminwihdraw' element={<AdminWithdraw />} />
          <Route path='/editinvest' element={<EditInvesment />} />
          <Route path='/addinvest' element={<AddInvestment />} />
          <Route path='/bankdetails' element={<BankDetails />} />
          <Route path='/userdetails' element={<UserDetails />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
