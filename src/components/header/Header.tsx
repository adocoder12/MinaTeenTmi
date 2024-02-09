import { NavLink, Link, useLocation } from "react-router-dom";

//css
import style from "./header.module.css";
import { useEffect, useState } from "react";
//icons

export default function Header() {
  const [url, setUrl] = useState<string>("");
  // const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);

    () => {
      console.log("cleaned up");
      setUrl("");
    };
  }, [location.pathname]);

  const navLinks = [
    { name: "Etusivu", path: "/" },
    { name: "Ota Yhteyttä", path: "/ota-yhteytta" },
    { name: "Minustä", path: "/minusta" },
  ];

  console.log(location.pathname === navLinks[0].path ? "true " : "false");
  return (
    <>
      <header className={`${style.header}`}>
        <nav className={style.navBar}>
          <div className={style.logo}>
            <Link to={"/"}>MinäTeen</Link>
          </div>

          <div className={`${style.menuClass}`}>
            <ul className={style.navLinks}>
              {navLinks.map((link, index) => (
                <li className={style.userList} key={index}>
                  <NavLink
                    className={location.pathname === url ? "active " : ""}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
