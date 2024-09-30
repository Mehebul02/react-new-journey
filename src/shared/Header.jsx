import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import Container from "./Container";

const Header = () => {
const navigation = [
    {title:'Home', link:'/'},
    {title:'About Us', link:'/about'},
    {title:'Contact US', link:'/contact'},
    {title:'Blog', link:'/blog'},
]

  return (
    <Container className="mt-6">
      {/* main container  */}
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <img src={logo} alt="logo" className="w-10" />
        </div>
        {/* menu ber  */}
        <div>
          <ul className="flex items-center gap-6 font-semibold cursor-pointer">
            <li>Home</li>
            <li>Career</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Blog</li>
      
          </ul>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Header;
