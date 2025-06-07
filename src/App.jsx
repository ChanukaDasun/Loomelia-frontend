import MainProductCard from "./roles/customer/customerComponents/MainProductCard";
import Navbar from "./roles/customer/customerComponents/Navbar";
import { loomeliaLogo, keyTagDollImage } from "./assets/Assets";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={keyTagDollImage} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
      </div>
    </div>
  )
}
