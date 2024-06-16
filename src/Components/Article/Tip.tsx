import "./Tip.scss"

export default function Tips(props: any) {
  return (<>
    <div className="article-el-tips">
      <h3 className="article-el-tips-title">{props.title}</h3>
      {props.children}
    </div>
  </>)
}