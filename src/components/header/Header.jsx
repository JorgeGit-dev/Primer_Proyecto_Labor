import logo from "../../assets/react.svg";
import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <head>
      <img src={logo} alt="logo react" />
      <Nav />
    </head>
  );
};