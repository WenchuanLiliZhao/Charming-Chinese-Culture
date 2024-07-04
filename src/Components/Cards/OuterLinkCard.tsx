import "./OuterLinkCard.scss";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function OuterLinkCard(props: any) {
  const title = props.title;
  const brief = props.brief;
  const link = props.link;
  const cover = props.cover;

  return (
    <a href={link} target="_blank">
      <figure className="lili-outer-link-card">
        {cover != null ? (
          <div className="lili-outer-link-cover">
            <div className="lili-outer-link-cover-container" style={{backgroundImage: `url(${cover})`}}>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="lili-outer-link-text">
          <div className="deco-icon">
            
          </div>

          <div className="lili-outer-link-title">
            {title != null ? title : ""}
          </div>
          <div className="lili-outer-link-brief">
            {brief != null ? brief : ""}
          </div>
        </div>
      </figure>
    </a>
  );
}
