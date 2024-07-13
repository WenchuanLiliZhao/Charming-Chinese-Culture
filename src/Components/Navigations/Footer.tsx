/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Footer.scss";
import SiteInfo from "../../SiteInfo";
import RootPages from "../../Pages/Root/RootPages";
import { Link } from "react-router-dom";

export default function Footer() {
  const rootPages = [
    // RootPages.RootPage_Contact,
    // RootPages.RootPage_Submit,
    RootPages.RootPage_About,
    RootPages.RootPage_Home,
    RootPages.RootPage_Products,
    RootPages.RootPage_Stories,
    // RootPages.RootPage_Books,
  ];

  return (
    <>
      <footer className="site-footer page-section-fullwidth-alone">
        <section className="site-footer-content page-section-big">
          <div className="site-footer-content-container">
            <div className="site-footer-about">
              <Link to="/" className="site-footer-title font-article">
                {SiteInfo.title}
              </Link>
              <div className="site-footer-brief p">{SiteInfo.brief}</div>
            </div>

            <div className="site-footer-links">
              <div className="site-footer-list">
                <div className="site-footer-list-title">頻道</div>

                <ul className="site-footer-list-container">
                  {rootPages.map((item: any, i: number) => (
                    <li key={`${item}${i}`}>
                      <Link to={`/${item.info.key}`}>{item.info.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-footer-list">
                <div className="site-footer-list-title">聯繫方式</div>

                <ul className="site-footer-list-container">
                  <p>
                    <span className="material-symbols-outlined">mail</span>{" "}
                    info@suep.com / marketing@suep.com
                  </p>

                  <p>
                    <span className="material-symbols-outlined">call</span>{" "}
                    (852) 2597 8415 / (852)9824 9587
                  </p>
                </ul>
              </div>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>
              &copy;2024 中國文化有意思（Charming Chinese Culture）保留所有權利
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
