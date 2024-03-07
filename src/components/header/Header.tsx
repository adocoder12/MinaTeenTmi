import { NavLink, Link, useLocation } from "react-router-dom";

//css
import style from "./header.module.css";
import { useEffect, useState } from "react";
//icons
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Header() {
  const [url, setUrl] = useState<string>("");
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [menuClass, setMenuClass] = useState<string>("menu hidden");
  const location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);

    () => {
      console.log("cleaned up");
      setUrl("");
    };
  }, [location]);

  const navLinks = [
    { name: "Etusivu", path: "/" },
    { name: "Palvelut", path: "/palvelut" },
    { name: "Ota Yhteyttä", path: "/ota-yhteytta" },
    { name: "Minusta", path: "/minusta" },
  ];
  const handleShowLinks = () => {
    if (!showLinks) {
      setMenuClass(`${style.menu} ${style.visible}`);
    } else {
      setMenuClass(`${style.menu} ${style.hidden}`);
    }
    setShowLinks(!showLinks);
  };

  console.log("url " + url);
  console.log("path " + navLinks[1].path);

  console.log("showLinks ", url === "/minusta");

  return (
    <>
      <header className={`${style.header}`}>
        <nav className={style.navBar}>
          <div className={style.logo}>
            <Link to={"/"}>MinäTeenTmi</Link>
          </div>
          <>
            <FaBars
              size={30}
              color="rgb(159, 159, 159)"
              className={style.burguerMenu}
              onClick={handleShowLinks}
            />
            {showLinks && (
              <div className={`${menuClass}`}>
                <FaX
                  size={25}
                  color="rgb(159, 159, 159)"
                  className={style.closeMenu}
                  onClick={handleShowLinks}
                />
                <ul className={style.navLinks}>
                  {navLinks.map((link, index) => (
                    <li className={style.userList} key={index}>
                      <NavLink
                        // className={link.path === url ? `${style.active}` : ""}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={link.path}
                        onClick={handleShowLinks}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
          <div className={`${style["menuClass__on__navBar"]}`}>
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
