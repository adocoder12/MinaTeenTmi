import footer from "./footer.module.css";
import footer_logo from "@assets/images/logo/logo.png";
//
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.footerInfoWrapper}>
          <div className={footer.leftFooter}>
            <img src={footer_logo} className={footer["footer__logo"]} alt="" />
          </div>
          <div className={footer.rigthFooter}>
            <div className={footer["pages__footer"]}>
              <h3>Pikalinkit</h3>
              <ul className={footer["list_menu_footer"]}>
                <li>
                  <Link to="/">Etusivu </Link>
                </li>
                <li>
                  <Link to="/ota-yhteytta">Ota Yhteyttä</Link>
                </li>
                <li>
                  <Link to="/minusta">Minustä</Link>
                </li>
              </ul>
            </div>
            <div className={footer["pages__footer"]}>
              <h3>Yhteystiedot</h3>
              <ul className={footer["list_menu_footer"]}>
                <li>MINATEENTMI Oy</li>
                <li>Asematie 4</li>
                <li>Siilinjärvi, 71800</li>
                <li>
                  <a href="mailto:minateentmi@gmail.com">
                    minateentmi@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={footer.bottonFooter}>
          <br />
          <h3>©2023 Adonay D'agosto - Tietosuojaseloste</h3>
        </div>
      </footer>
    </>
  );
}
