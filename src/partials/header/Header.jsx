import { Fragment, useState, useEffect } from "react";
import Logo from "../../components/logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
// import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
// import Btn from '../../components/Btn/Btn';
import MobileMenu from "../../components/NavBar/MobileMenu";
import MainSearch from "../../components/NavBar/MainSearch";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";


const Header = () => {
  // const [language, setLanguage] = useState('Language')

  const { t, i18n } = useTranslation();

  const changeLanguage = (ln) => {
    i18n.changeLanguage(ln);

    localStorage.setItem("lang", ln);
  };

  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const [searchbarShow, setSearchbarShow] = useState(false);
  const onSearchHandler = () => {
    setSearchbarShow((prev) => !prev);
  };
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header-section");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <Fragment>
      <div
        className={`header-section header-transparent sticky-header section ${
          scroll > headerTop ? "is-sticky" : ""
        }`}
      >
        <div className="header-inner">
          <div className="container position-relative">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-2 col-auto order-0">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/logo2.png`}
                />
              </div>
              <div className="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                <div className="menu-column-area d-none d-xl-block position-static">
                  <NavBar />
                </div>
                {/* <div className="header-search-area ml-xl-7 ml-0">

                                    <HeaderSearch onClick={onSearchHandler}/>
                                </div> */}

                <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                  <button
                    type="button"
                    className="toggle"
                    onClick={onCanvasHandler}
                  >
                    <i className="icon-top"></i>
                    <i className="icon-middle"></i>
                    <i className="icon-bottom"></i>
                  </button>
                </div>
              </div>

              <div className="lang-toggle col-xl-2 col d-sm-flex justify-content-end order-1 order-xl-2">
                <DropdownButton
                  alignRight
                  title={t("language")}
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item
                    onClick={() => {
                      changeLanguage("en");
                      window.location.reload(true);
                    }}
                  >
                    English
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      changeLanguage("ja");
                      window.location.reload(true);
                    }}
                  >
                    {t("japanese")}
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
      <MainSearch show={searchbarShow} onClose={onSearchHandler} />
    </Fragment>
  );
};

export default Header;
