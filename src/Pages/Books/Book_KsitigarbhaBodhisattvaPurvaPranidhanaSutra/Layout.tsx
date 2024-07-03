/* eslint-disable @typescript-eslint/no-explicit-any */
// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import Book_KsitigarbhaBodhisattvaPurvaPranidhanaSutra from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={Book_KsitigarbhaBodhisattvaPurvaPranidhanaSutra} ep={props.ep}>
      {props.children}
    </BookPageLayout>
  </>)
}