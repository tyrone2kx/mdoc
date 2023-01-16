
import logo from "assets/images/mdoc-logo.png";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import MenuItem from "components/MenuItem/MenuItem";

const Header = () => {
  return (
    <>
      <div
        className="w-full py-4 px-12 2xl:px-36 flex flex-row justify-between"
        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.08)" }}
      >
        <div className="h-[50px]">
          <img className="h-full w-full" src={logo} alt="placeholder-pic" />
        </div>

        <div className="md:flex hidden w-[60%] items-center">
          <MenuItem title="About Us" isDropdown />
          <MenuItem title="Resources" isDropdown />
          <MenuItem title="Self-care plans" />
          <MenuItem title="Careers" />
          <MenuItem title="Contact" />
        </div>

        <div className="flex items-center">
          <p className="hidden md:block mr-8">Login</p>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Header;
