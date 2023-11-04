import "./logo.scss";

import avengers from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";

const Logo = () => {
  return (
    <div className="app__logo">
      <img src={avengers} alt="Avengers" />
      <img src={avengersLogo} alt="Avengers logo" />
    </div>
  );
};

export default Logo;
