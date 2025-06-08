import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import CustomerLayout from "./roles/customer/customerLayout/CustomerLayout";
import AllProducts from "./roles/customer/customerPages/AllProducts";
import ContactUs from "./roles/customer/customerPages/ContactUs";
import HomePage from "./roles/customer/customerPages/HomePage";
import AboutUs from "./roles/customer/customerPages/AboutUs";
import FAQs from "./roles/customer/customerPages/FAQs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />

      {/* Customer routes */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<HomePage />} />
        <Route path="allproducts" element={<AllProducts />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faqs" element={<FAQs />} />
      </Route>

    </Routes>

  )
}