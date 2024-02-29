import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[60px] px-[40px] bg-red-200 text-[20px] md:px-[80px] lg:px-[120px] flex justify-end gap-x-[40px] items-center">
      <Link to="/">მთავარი</Link> 
      <Link to="/history">ისტორია</Link>
    </nav>
  );
};

export default Navbar;
