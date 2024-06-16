import "./Footer.scss"
import SiteInfo from "../../SiteInfo"
import RootPages from "../../Pages/Root/RootPages"
import { Link } from "react-router-dom"


export default function Footer() {
  const rootPages = [
    RootPages.RootPage_Contact,
    RootPages.RootPage_Submit,
    RootPages.RootPage_About,
    RootPages.RootPage_Home,
    RootPages.RootPage_Activities,
    RootPages.RootPage_Stories,
    RootPages.RootPage_Books,
  ]

  return (<>
    <footer className="site-footer page-section-fullwidth-alone">
      <section className="site-footer-content page-section-big">
        
        <div className="site-footer-content-container">
          <div className="site-footer-about">
            <Link to="/" className="site-footer-title font-article">
              {SiteInfo.title}
            </Link>
            <div className="site-footer-brief p">
              {SiteInfo.brief}
            </div>
          </div>

          <div className="site-footer-links">
            <div className="site-footer-list">
              <div className="site-footer-list-title">
                頻道
              </div>

              <ul className="site-footer-list-container">
                {rootPages.map((item: any, i: number) => (
                  <li key={`${item}${i}`}>
                    <Link to={`/${item.info.key}`}>
                      {item.info.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="site-footer-list">
              <div className="site-footer-list-title">
                社交账号
              </div>

              <ul className="site-footer-list-container">
                {Object.values(SiteInfo.socialMedia).map((item: any, i: number) => (
                  <li key={`${item}${i}`}>
                    <Link to={`${item.url}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>&copy;2024 中國文化有意思（Charming Chinese Culture）保留所有權利</p>
        </div>
      </section>
    </footer>
  </>)
}