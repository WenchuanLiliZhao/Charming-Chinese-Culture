import "./FileCard.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FileCard(props: any) {
  const title = props.title;
  const brief = props.brief;
  const fileLink = props.fileLink;
  const linkText = "查看文件";

  return (
    <>
      <figure className="lili-file-card">
        <img className="lili-file-card-cover" src={props.cover} alt="" />

        <div className="lili-file-card-caption">
          <div className="title-and-brief">
            <div className="lili-file-card-title">
              {title != null ? title : ""}
            </div>

            <div className="lili-file-card-brief">
              {brief != null ? brief : ""}
            </div>
          </div>
          <div className="lili-file-card-link">
            {fileLink != null ? (
              <>
                <a href={fileLink} target="_blank">
                  <span className="material-symbols-outlined icon">description</span>
                  {linkText}
                </a>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </figure>
    </>
  );
}
