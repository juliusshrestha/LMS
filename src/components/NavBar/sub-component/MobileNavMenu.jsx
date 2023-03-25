import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };
  return (
    <nav className="site-mobile-menu">
      <ul>
        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Homepage</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home</span></NavLink></li>
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
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "/work"}>
            <span className="menu-text">{t("navbar.portfolio")}</span>
          </NavLink>
          <span className="menu-toggle" onClick={onClickHandler}></span>
          <ul className="sub-menu">
            <p>
              <NavLink to={process.env.PUBLIC_URL + "/work"}>
                <span className="menu-text">Work</span>
              </NavLink>
            </p>
            {/* <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li> */}
          </ul>
        </li>
        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog Grid</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-classic"}><span className="menu-text">Blog Classic</span></NavLink></li>
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

export default MobileNavMenu;
