import MainProductCard from "../customerComponents/MainProductCard";
import SaleProductCard from "../customerComponents/SaleProductCard";
import { loomeliaLogo, keyTagDollImage } from "../../../assets/Assets";
import Footer from "../customerComponents/Footer";

const HomePage = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={keyTagDollImage} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
        <MainProductCard productCode={'P0001'} productImage={loomeliaLogo} productPrice={42} productName={'Test product'} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
        <SaleProductCard productImage={loomeliaLogo} productName={"Abc product"} productNewPrice={42} productPrevPrice={60} />
        <SaleProductCard productImage={loomeliaLogo} productName={"Abc product"} productNewPrice={42} productPrevPrice={60} />
        <SaleProductCard productImage={loomeliaLogo} productName={"Abc product"} productNewPrice={42} productPrevPrice={60} />
      </div>
      {/* <LoginPage /> */}
    </div>
  )
}

export default HomePage;
