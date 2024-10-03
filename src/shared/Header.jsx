
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
console.log(navigation)
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
           {
            navigation.map((item)=>(
              <li key={item.title} className="text-md text-white">{item.title}</li>
            ))
           }
      
          <button className="text-md text-black font-medium bg-yellow-400 px-4 py-2 rounded-lg ">Contact</button>
          </ul>
        </div>
      </div>
      <div></div>
    </Container>
   </div>
  );
};

export default Header;
