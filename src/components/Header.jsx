import headerLogo from "../assets/logo.png";
import "../components/Header.css";

function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />
      <h1 className="header__title">Hello Vite!</h1>
    </div>
  );
}

export default Header;
