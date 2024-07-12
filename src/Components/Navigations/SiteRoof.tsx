import "./SiteRoof.scss";
import SiteInfo from "../../SiteInfo";

export default function SiteRoof() {
  return (<>
    <div className="site-roof">
      <div className="site-names">
        <div className="site-name-tc">
          <a href="/">{SiteInfo.title}</a>
        </div>
        {/* <div className="site-name-en">
        {SiteInfo.title_en}
        </div> */}
      </div>
    </div>
  </>)
}


