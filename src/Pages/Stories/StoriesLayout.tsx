/* eslint-disable @typescript-eslint/no-explicit-any */
import Article from "../../Components/Article/Article";
import PageHeader from "../../Components/Heading/PageHeader";
import Footer from "../../Components/Navigations/Footer";
import Nav from "../../Components/Navigations/Nav";
import SiteRoof from "../../Components/Navigations/SiteRoof";

export default function StoriesLayout(props: any) {
  const info = props.info

  return (<>
    <SiteRoof />
    <Nav />

    <PageHeader info={info} align={`left`} />

    <Article>
      <figure>
        <img src={info.cover} />
      </figure>
      {props.children}
    </Article>

    <Footer />
  </>)
}