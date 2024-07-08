/* eslint-disable @typescript-eslint/no-explicit-any */
import "./NGrid.scss"

export default function NGrid(props: any) {
  const columnsCount = props.columnsCount

  return (
    <>
      <div className="lili-n-grid" style={{gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`}}>
        {props.children}
      </div>
    </>
  )
}