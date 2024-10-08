import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-gray-300 px-8 py-5 bg-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto mr-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
