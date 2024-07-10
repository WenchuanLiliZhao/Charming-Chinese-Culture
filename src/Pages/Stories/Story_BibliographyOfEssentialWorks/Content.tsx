import FileCard from "../../../Components/Cards/InArticle/FileCard";
import NGrid from "../../../Components/Cards/InArticle/NGrid";
import OuterLinkCard from "../../../Components/Cards/InArticle/OuterLinkCard";
import StoriesLayout from "../StoriesLayout";
import Info from "./Info";

export default function Content() {
  return (
    <>
      <StoriesLayout info={Info}>
        <p>
          博大精深的中華文化由眾多領域構成，包括哲學思想、文學藝術、歷史發展、社會結構、宗教信仰、科技成就、民俗風情、對外交流、當代傳承等。我們分別為中學和小學定製了內容豐富、主題多元的「中華文化常備書目」，為青少年讀者學習中華文化提供適切的內容。
        </p>

        <NGrid columnsCount={2}>
          <FileCard
            cover="https://i.pinimg.com/originals/82/89/5c/82895c688acb485ed400b53b59db992d.png"
            title="中華文化開館包（中學）"
            fileLink="https://docs.google.com/spreadsheets/d/1ci0hN9CAEo47Cq_iBA_qHCWTcAwi3bP2/edit?gid=2023734986#gid=2023734986"
          />

          <FileCard
            cover="https://i.pinimg.com/originals/29/4b/8c/294b8c46fe60f460445f91ae947040d3.png"
            title="中華文化開館包（小學）"
            fileLink="https://docs.google.com/spreadsheets/d/1sniiAhHNVxXUhEATSqWXUeMLcL_QaIfa/edit?gid=1062212633#gid=1062212633"
          />
        </NGrid>

        <p>
          對青少年身心健康、人文素養、公民意識、身份認同、國家情懷的培養，都與中華文化的傳承和創新密切相關。我們在深入了解中小學課程結構及教學需求的基礎上，推出中學組主題書單，涵蓋中文、公民與社會發展、資訊及通訊科技、健康管理與社會關懷、歷史、地理、倫理與宗教、國家安全教育等學科和領域。
        </p>

        <NGrid columnsCount={2}>
          <FileCard
            title="中學中文科"
            cover="https://i.pinimg.com/originals/c5/e0/61/c5e0610ba7236e7981c7143074c73f95.png"
          />

          <FileCard
            title="中學公民與社會發展科"
            cover="https://i.pinimg.com/originals/10/23/98/1023987d1e694be9a31072f92d2403db.png"
          />

          <FileCard
            title="中學資訊及通訊科技"
            cover="https://i.pinimg.com/originals/6f/1d/2c/6f1d2c31ea02067f0b07331fd083a539.png"
          />

          <FileCard
            title="國家安全教育（中學）"
            cover="https://i.pinimg.com/originals/d5/9a/c0/d59ac08e6435059f7b135b0027b94962.png"
          />
        </NGrid>

        <p>
          同步推出小學組主題書單，涵蓋中國語文、科學科、人文科、國家安全教育等學科和領域。
        </p>

        <NGrid columnsCount={2}>
          <FileCard
            title="小學中國語文科"
            cover="https://i.pinimg.com/originals/1b/f1/da/1bf1da174db5e65d3b50cb55aa8f8eb8.png"
          />

          <FileCard
            title="小學科學科"
            cover="https://i.pinimg.com/originals/c0/29/66/c029665ce0a81dc77225bf273513f525.png"
          />

          <FileCard
            title="小學人文科"
            cover="https://i.pinimg.com/originals/7a/39/ac/7a39aca0e5e19470685117fea2e32f0f.png"
          />

          <FileCard
            title="國家安全教育（小學）"
            cover="https://i.pinimg.com/originals/49/a8/cf/49a8cf1d9bfa6e9e8ae7da0d38983144.png"
          />
        </NGrid>

        <p>
          「開館包」及「主題閱讀包」訂購方式靈活，可提供電子書、紙本書等產品，支持年租或買斷的服務模式。主題書單將會陸續更新，亦可根據用戶需要提供定製服務。
        </p>

        <OuterLinkCard
          link="https://www.nblib.com/"
          title="知書閱聽圖書館"
          brief="知書Nowbook是香港電子閱讀領導品牌，「知書閱聽圖書館」由香港聯合出版（集團）子公司聯合電子出版有限公司建立的電子閱讀服務專業平台，專為學校、圖書館及個人用戶提供內容豐富、功能完善、線上線下相結合的一站式電子閱讀服務。聯合電子出版同時也是港澳公共圖書館、高校圖書館及中小學電子圖書館的優質供應商。"
          cover="https://res.youuu.com/zjres/2023/2/15/9m4IxDipTI40QJVWAIroKoQM93lXYGDxjzg.jpeg"
        />
      </StoriesLayout>
    </>
  );
}
