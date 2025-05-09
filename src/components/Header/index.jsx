import { Logo } from "../Logo";
import { Searcher } from "../Searcher";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Searcher />
    </header>
  );
};
