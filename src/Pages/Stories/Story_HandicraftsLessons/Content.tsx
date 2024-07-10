
import OuterLinkCard from "../../../Components/Cards/InArticle/OuterLinkCard";
import StoriesLayout from "../StoriesLayout";
import Info from "./Info";

export default function Content() {
  return (
    <>
      <StoriesLayout info={Info}>
        <h2>動手體驗中華文化中的造物智慧</h2>
        
        <p>中華優秀傳統文化是中華民族賴以發展的根基，是涵養文化自信的沃土，非物質文化遺產是其中重要的組成部分。「中華非遺手工課」介紹了非遺文化中的淵源故事、傳統技藝及其蘊含的東方美學，將會豐富青少年對中華燦爛文化的認識，增強對國家的認同感和歸屬感。</p>

        <OuterLinkCard
         title="中華非遺手工課套材"

         brief="中華優秀傳統文化是我們民族賴以發展的根基，是涵養文化自信的沃土，非物質文化遺產是中華深厚文化積澱的重要組成部分，凝聚了數千年來無數先輩的心血與智慧。然而，這些獨特且極具代表性的文化傳承因為社會的發展變化和其他因素的影響正面臨失傳和逐漸消失的危險。保護和弘揚非遺文化，讓人們重新體會到其獨特的魅力與價值，正是我們的信念與初衷。"

         cover = "https://i.pinimg.com/originals/6c/ec/7a/6cec7a0577d798c48eaea786b7f65dd1.jpg"

         link = "https://drive.google.com/file/d/1vu0hXaFKHY_ucla9XatzvzNMGeYQG2-M/view"
        />

        <p>「中華非遺手工課」在遵循傳統非遺技藝的基礎上，提供了難易兩種程度的DIY體驗模式。課程包括：淺顯易懂的操作流程說明書、詳細的教學視頻、全套製作工具並配備專業導師入校上堂。</p>

        <figure>
          <img src="https://i.pinimg.com/originals/f9/42/af/f942af0b2d7f35ed49818c0a514a8516.jpg" alt="" />

          <figcaption>
          「中華非遺手工課」之《手工皮影》
          </figcaption>
        </figure>

        <figure>
          <img src="https://i.pinimg.com/originals/fb/4c/ed/fb4cedb5d6b0593ffdba8842fafbacce.jpg" alt="" />

          <figcaption>
          「中華非遺手工課」之《景泰藍》
          </figcaption>
        </figure>

        <figure>
          <img src="https://i.pinimg.com/originals/35/7d/48/357d48c0ebc17d040ec0490c84a0da8b.jpg" alt="" />

          <figcaption>
          「中華非遺手工課」之《織造術》
          </figcaption>
        </figure>

        <figure>
          <img src="https://i.pinimg.com/originals/71/24/56/712456c88facdba762d59e6a03331f63.jpg" alt="" />

          <figcaption>
          「中華非遺手工課」全系列課程
          </figcaption>
        </figure>
      </StoriesLayout>
    </>
  );
}
