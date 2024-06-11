import SiteInfo from "../../../SiteInfo";
import "./Styles.scss"

export default function Content() {

  const poem = [
    "關關雎鳩",
    "在河之洲",
    "窈窕淑女",
    "君子好逑",
  ];  

  const poemHTML = (
    <div className="welcome-poem font-article">
      {poem.reverse().map((line, index) => (
        <p 
          className="line"
          key={`${line}${index}`}
          
        >
          {Array.from(line).map((char, charIndex) => (
            <span className="char" key={charIndex}>{char}</span>
          ))}
        </p>
      ))}
    </div>
  );


  return (<>
    <div className="site-welcome">
      <div className="site-welcome-container">
        <div className="site-name font-article">
          {SiteInfo.title}
        </div>

        {poemHTML}
      </div>
    </div>
  </>)
}