
// import EP_YiJianXiaoShi_NaHan from "./EPs/EP_YiJianXiaoShi_NaHan/0_Repo";
import BookInfoLayout from "../../../Components/Layouts/BookInfoLayout"
import EP_ZiXu_NaHan from "./EPs/EP_ZiXu_NaHan/0_Repo"
import Info from "./Info"
// import TableOfContents from "./TableOfContents"

export default function Content() {
  return (<>
    <BookInfoLayout info={Info} startReading={EP_ZiXu_NaHan}>
      <p>
        魯迅的《吶喊》是中國現代文學史上一部重要的小說集，首次出版於1923年。這本作品集是魯迅早期作品的精選，包含了他從1918年至1922年間創作的多篇短篇小說。
      </p>

      <figure>
        <img src="https://i.pinimg.com/564x/bb/1c/f4/bb1cf4c94f73136af831ca72c6a737ad.jpg" alt="" />
        <figcaption>
          魯迅 @pinterest
        </figcaption>
      </figure>

      <p>
        《吶喊》中的小說以深刻的社會批判和對舊社會的鞭撻而著稱。魯迅透過這些小說，揭露了舊中國的黑暗面，反映了當時社會的壓抑和矛盾。他的筆觸尖銳而有力，語言充滿激情，因此《吶喊》中的作品常常能引起讀者的共鳴和思考。
      </p>
      <p>
        《吶喊》中的幾篇代表性作品包括〈狂人日記〉、〈孔乙己〉、〈藥〉和〈阿Q正傳〉等。〈狂人日記〉是一篇以現代心理學為基礎的作品，被認為是中國現代文學的里程碑；〈孔乙己〉通過一位窮書生的形象，批判了科舉制度的腐敗與社會的冷漠。
      </p>
      <p>
        魯迅在《吶喊》中的創作風格多樣，有的作品帶有濃厚的象徵主義色彩，有的則採用了寫實主義和現代主義的手法。他的作品不僅僅是對舊社會的抨擊，更是一種對人性本質的探究和對新社會的嚮往。
      </p>
      <p>
        總的來說，魯迅的《吶喊》不僅僅是一部文學作品集，更是一部充滿思想深度和社會意義的文化瑰寶。它在中國現代文學史上佔有舉足輕重的地位，也對後來的文學創作產生了深遠的影響。
      </p>
    </BookInfoLayout>
  
  </>)
}