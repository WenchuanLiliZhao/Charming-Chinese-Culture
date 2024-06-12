import SiteInfo from "../../../SiteInfo";
import RootPage_Home from "../Home/0_Repo";
import "./Styles.scss";

export default function Content() {  

  return (
    <>
      <div className="site-welcome">
        <div className="site-welcome-container">
          <p className="site-name font-article">
            <a href={`/${RootPage_Home.info.key}`}>進入{SiteInfo.title}</a>
          </p>
        </div>
      </div>
    </>
  );
}
