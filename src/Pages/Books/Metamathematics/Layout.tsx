// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import Book_Metamathematics from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={Book_Metamathematics} ep={props.ep}>
      {props.children}
    </BookPageLayout>
  </>)
}