
import Article from "../../../Components/Article/Article";
import NGrid from "../../../Components/Cards/InArticle/NGrid";

import RootLayout from "../RootLayout";
import Info from "./Info";

export default function Content() {

  const imgStyle = {border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "16px"}

  return (<>
    <RootLayout info={Info} align="left">
      <Article>

        <p>「中華⽂化有意思」是⼀個以數字科技之⼒向全球傳播中華⽂化的品牌。我們順應WEB3.0時代傳播新特徵，線上線下結合，通過紙本書、電⼦書、有聲書、視頻、AR/VR/MR、⽂創等多種形態，向大眾尤其是青少年群體展現中華⽂化的美好和趣味，激發受眾帶著驚嘆與樂趣學習了解中華⽂化的豐富內涵。從經典詩詞到唐宋漢服；從書畫藝術到⾮遺⼿⼯；從器物雅玩到草⽊⿂蟲，我們⽤技術展現中華⽂化有意思的地方，由有意思⽽有內涵，由有內涵⽽致久遠。</p>        

        <h2>社交媒體 & App</h2>
        
        <NGrid columnsCount={3}>
          <figure>
            <img style={imgStyle} src="https://i.pinimg.com/originals/31/f2/04/31f2049f76297fd8649f37cba4c8fd85.png" alt="" />

            <figcaption style={{textAlign: "center"}} >中華文化有意思 Facebook</figcaption>
          </figure>

          <figure>
            <img style={imgStyle} src="https://i.pinimg.com/originals/82/bb/ad/82bbad605465800b0039c9f7bb3a6482.jpg" alt="" />

            <figcaption style={{textAlign: "center"}} >知书HK微信公眾號</figcaption>
          </figure>

          <figure>
            <img style={imgStyle} src="https://i.pinimg.com/originals/ac/06/23/ac06234cb2bd5aeb19ae438107a1e065.png" alt="" />

            <figcaption style={{textAlign: "center"}} >知書 Instagram</figcaption>
          </figure>

          <figure>
            <img style={imgStyle} src="https://i.pinimg.com/originals/f9/e4/db/f9e4dbade47f4c6ca572074cabd406a8.jpg" alt="" />

            <figcaption style={{textAlign: "center"}} >知書APP下載</figcaption>
          </figure>

          <figure>
            <img style={imgStyle} src="https://i.pinimg.com/736x/78/17/8b/78178b74f39469561cc54440c332092a.jpg" alt="" />

            <figcaption style={{textAlign: "center"}} >知書閱聽圖書館 Facebook</figcaption>
          </figure>
        </NGrid>

        <hr />

        <h2>聯繫方式</h2>

        <p><span className="material-symbols-outlined">mail</span> info@suep.com / marketing@suep.com</p>

        <p><span className="material-symbols-outlined">call</span> (852) 2597 8415 / (852)9824 9587</p>

      </Article>
    </RootLayout>
  </>)
}