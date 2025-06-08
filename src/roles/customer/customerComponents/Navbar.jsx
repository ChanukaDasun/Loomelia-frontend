import { useState } from "react";
import { Link } from "react-router";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { loomeliaLogo, shoppingCart, wishlistImg } from "../../../assets/Assets";
import "./Navbar.css"; 

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [open, setOpen] = useState(false);

  const items = [
    { label: <Link to="/customer">Home</Link>, key: "home" },
    { label: <Link to="/customer/allproducts">Shop</Link>, key: "shop" },
    { label: <Link to="/customer/aboutus">About</Link>, key: "about" },
    { label: <Link to="/customer/contactus">Contact</Link>, key: "contact" },
    { label: <Link to="/customer/faqs">FAQs</Link>, key: "faqs" },
  ];

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={loomeliaLogo} alt="loomeliaLogo" />
      </div>
      <div>
        <h3>LOOMELIA</h3>
      </div>
      <div className="navbar-desktop">
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="navbar-menu"
        >
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>

        <div className="navbar-buttons">
          <Link to='/'>
            <Button shape="round">
              Login
            </Button>
          </Link>
          <Button shape="round">
            Sign up
          </Button>
          <img src={shoppingCart} alt="shoppingCart" className="navbar-icon" />
          <img src={wishlistImg} alt="wishlistImg" className="navbar-icon" />
        </div>
      </div>

      <div className="navbar-mobile-menu">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="vertical"
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
