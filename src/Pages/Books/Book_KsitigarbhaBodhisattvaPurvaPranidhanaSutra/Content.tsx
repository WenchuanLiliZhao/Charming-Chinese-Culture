
import Tip from "../../../Components/Article/Tip";
import BookInfoLayout from "../../../Components/Layouts/BookInfoLayout";
import EP_000 from "./EPs/EP_000/0_Repo";
import Info from "./Info";

export default function Content() {

  return (<>
    <BookInfoLayout info={Info} startReading={EP_000}>
      <p>《地藏菩薩本願經》是佛教中極為重要的一部經典。它不僅在宗教信仰層面上有深遠的影響，也是了解佛教思想和中國傳統文化不可或缺的文獻。這本文獻主要記載了地藏菩薩為救度眾生所發的宏願，以及他所行的種種善行。以下是對《地藏菩薩本願經》的詳細介紹，旨在為讀者提供一個全面的認識。</p>

      <Tip title="關於作者及其翻譯的謎團">
      <p>明朝莲池祩宏大师，为本经所作的题跋中，称此经由唐代实叉难陀译，而当时明朝流通本，译者多半题为法灯、法炬，此二人的生平及时代皆已不可考。但在唐智昇《开元释教录》与《贞元新定释教目录》中所记载实叉难陀译出经典共十九部，其中并没有包括本书。因此是否由实叉难陀所译，历来受到许多质疑。</p>

      <p>——<a href="https://zh.wikipedia.org/wiki/%E5%9C%B0%E8%97%8F%E8%8F%A9%E8%90%A8%E6%9C%AC%E6%84%BF%E7%BB%8F">《維基百科 - 地藏菩薩願本經》</a></p>
      </Tip>

      <p>《地藏菩薩本願經》是大乘佛教的重要經典之一。全經分為十三品，詳細記述了地藏菩薩在過去、現在及未來世中的救度行為。這部經典最早由唐代的高僧實叉難陀譯出漢字，流傳至今已有千年以上的歷史。地藏菩薩名因“地之堅固持重，藏之安隱深邃”而得名，象徵其無盡的慈悲和不動搖的誓願精神。</p>

      <p>全文主要圍繞地藏菩薩的誓願以及地藏菩薩的行願功德的主題所展開。強調善惡有報、因果相循的佛教基本思想。經文中眾多善行善報、惡行惡報的故事，意在教育眾生謹行善事、遠離惡業。</p>

      <p>《地藏菩薩本願經》在中國乃至整個東亞佛教文化圈中都有深遠影響。它對民間宗教信仰及儀式有著直接影響，例如果報壇、地藏法會等等。其次，經文提倡的孝道觀念在傳統倫理中占有主要地位，成為儒釋道三家融合的重要一環。無論是在宗教信仰、文化傳承還是現代人生中，《地藏菩薩本願經》有著無法替代的重要地位。</p>
    </BookInfoLayout>
  </>)
}