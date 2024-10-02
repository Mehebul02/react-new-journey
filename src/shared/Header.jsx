
import { logo } from "../assets/images";
import Container from "./Container";
import { Link } from "react-router-dom";
const Header = () => {
const navigation = [
    {title:'Home', link:'/'},
    {title:'About Us', link:'/about'},
    {title:'Contact US', link:'/contact'},
    {title:'Blog', link:'/blog'},
]

  return (
   <div className="bg-green-700">
     <Container className="">
      {/* main container  */}
      <div className="flex justify-between items-center">
        {/* logo */}
        <Link to='/'>
          <img src={logo} alt="logo" className="w-16" />
        </Link>
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
   </div>
  );
};

export default Header;
