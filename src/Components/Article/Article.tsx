import "./Article.scss"

export default function Article(props: any) {
  const isInner = props.isInner

  const theClass = `${isInner == true ? "inner" : "page-section-big"}`

  const font = props.font

  return (<>
    <div className={`nbl-plus-article ${theClass} ${props?.className} ${font == null ? "font-article" : `font-${font}`}`}>
      <article className="nbl-plus-article-container">
        {props.children}
      </article>
    </div>
  </>)
}