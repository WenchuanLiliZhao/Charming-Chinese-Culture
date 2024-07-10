import FileCard from "../../../Components/Cards/InArticle/FileCard";
import NGrid from "../../../Components/Cards/InArticle/NGrid";
import StoriesLayout from "../StoriesLayout";
import Info from "./Info";

export default function Content() {
  return (<>
    <StoriesLayout info={Info}>
      <p>5G新閱讀基於人工智能、虛擬數字人、超高清視頻等關鍵技術，適配全球主流的VR、MR等各類終端，透過聚合優質傳統出版物資源，打造出虛擬場景與互動內容相融合的體驗空間。其製作原理是通過對傳統書籍、繪本進行創意加工，將原作品中的文字、2D形象進行三維設計建模，將動作在專業動畫製作軟件中逐幀修正，使主體形象更藝術化、真實化。</p>

      <p>在場景打造上，透過立體技術重新再造具有中華文化色彩的沉浸式虛擬空間。基於「5G內容雲」平台，用戶可將全景內容適配至LED螢幕、VR閱讀一體機「5G閱讀樹」、VR眼鏡、裸眼3D平板等新一代終端觀看，傳統圖書被「活化」，打造身臨其境、跨越時空的視覺觀感與閱讀體驗。</p>

      <p>中華文化VR資源庫共收錄作品200餘部，包含中華文化通識、近代歷史、傳統節日與習俗、書畫藝術、北京城市印象、中華文化美育課堂、天宮空間站、走遍中國等專題。已成功推出「永樂大典」、「張大千」等知名作家和作品IP；與地方特色文化相結合，製作出「文物古蹟」、「城市印象」等系列VR專輯；為展現國家科技發展成就，推出了「天宮號」太空站同名的「天宮元宇宙」VR互動遊戲。</p>

      <NGrid columnsCount={2}>
        <FileCard
          title = "中華傳統節日·七夕節"
          cover = "https://i.pinimg.com/originals/4d/29/6a/4d296adaf62de8e220ec081e1149b12f.jpg"
          fileLink = "https://library.reaker.net/detail?id=315"
        />

        <FileCard
          title = "槽運千帆·運河歷史"
          cover = "https://i.pinimg.com/originals/f7/69/8f/f7698f94d871fbd59942a0c5ad3c3bb2.jpg"
          fileLink = "https://library.reaker.net/detail?id=315"
        />

        <FileCard
          title = "中華傳統節日·清明節"
          cover = "https://i.pinimg.com/originals/72/e8/03/72e803a52fcb37d221fed5cf32fbf1a4.jpg"
          fileLink = "https://library.reaker.net/detail?id=347"
        />

        <FileCard
          title = "中華傳統節日·端午"
          cover = "https://i.pinimg.com/originals/37/62/2e/37622e67a5cee59d72d1d994dfe13f74.jpg"
          fileLink = "https://library.reaker.net/detail?id=346"
        />

        <FileCard
          title = "墨·中國-顧閎中與韓熙載夜宴圖下"
          cover = "https://i.pinimg.com/originals/8a/26/7e/8a267e6302710a941da362b20acb6a6f.jpg"
          fileLink = "https://library.reaker.net/detail?id=345"
        />

        <FileCard
          title = "千里江山圖"
          cover = "https://i.pinimg.com/originals/c9/50/86/c9508673584c6cf77adca55d08bea212.jpg"
          fileLink = "https://library.reaker.net/detail?id=319"
        />

        <FileCard
          title = "福聚八閩 文庫流芳"
          cover = "https://i.pinimg.com/originals/ea/23/d1/ea23d1ae1f1dd69c5b2d944a23a8865b.jpg"
          fileLink = "https://library.reaker.net/detail?id=318"
        />

        <FileCard
          title = "中華傳統節日·重陽節"
          cover = "https://i.pinimg.com/originals/43/40/8d/43408d05e8169af02e058ca33d4dd4ed.jpg"
          fileLink = "https://library.reaker.net/detail?id=317"
        />

      </NGrid>
    </StoriesLayout>
  </>)
}