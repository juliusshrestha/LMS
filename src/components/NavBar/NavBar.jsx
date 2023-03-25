import React from "react";
import { NavLink } from "react-router-dom";
// import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useTranslation } from "react-i18next";
// import i18n from '../../i18n'

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="site-main-menu">
      <ul>
        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Homepage</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home One</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Home Two</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Home Three</span></NavLink></li>
                    </ul>
                </li> */}
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/home"}>
            <span className="menu-text">{t("navbar.home")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">{t("navbar.about")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text">{t("navbar.service")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/work"}>
            <span className="menu-text">{t("navbar.portfolio")}</span>
          </NavLink>
        </li>
        {/* <span className="menu-toggle"><i className="far fa-angle-down"></i></span> */}
        {/* <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul> */}

        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog Grid</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-classic"}><span className="menu-text">Blog classic</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/blog-details/1`}><span className="menu-text">Blog Details</span></NavLink></li>
                    </ul>
                </li> */}
        <li>
          <NavLink to={process.env.PUBLIC_URL + `/blogs`}>
            <span className="menu-text">{t("navbar.blog")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/career"}>
            <span className="menu-text">{t("navbar.career")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/team"}>
            <span className="menu-text">{t("navbar.team")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/notice"}>
            <span className="menu-text">{t("navbar.notice")}</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={process.env.PUBLIC_URL + "/contact"}>
            <span className="menu-text">{t("navbar.contact")}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
