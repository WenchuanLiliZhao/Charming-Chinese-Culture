/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NavLink } from "react-router-dom"
import RootPages from "../../Pages/Root/RootPages"
import "./Nav.scss"
import NavLink2Top from "../Links/NavLink2Top"

export default function Nav(props: any) {
  const mode = props.mode
  // single

  return (<>
    <div className={`site-nav mode-${mode}`}>
      <div className="site-nav-container">
        <NavLink2Top to={`/${RootPages.RootPage_Home.info.key}`} className="item">
          {RootPages.RootPage_Home.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_Products.info.key}`} className="item">
          {RootPages.RootPage_Products.info.title}
        </NavLink2Top>

        <NavLink2Top to={`/${RootPages.RootPage_Stories.info.key}`} className="item">
          {RootPages.RootPage_Stories.info.title}
        </NavLink2Top>

        {/* <NavLink2Top to={`/${RootPages.RootPage_Books.info.key}`} className="item">
          {RootPages.RootPage_Books.info.title}
        </NavLink2Top> */}

        <NavLink2Top to={`/${RootPages.RootPage_About.info.key}`} className="item">
          {RootPages.RootPage_About.info.title}
        </NavLink2Top>
      </div>
    </div>
  </>)
}