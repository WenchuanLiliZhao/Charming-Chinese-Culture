// import FileCard from "../../../Components/Cards/InArticle/FileCard";
// import NGrid from "../../../Components/Cards/InArticle/NGrid";
import YouTubeVideo from "../../../Components/Cards/InArticle/Video";
import StoriesLayout from "../StoriesLayout";
import Info from "./Info";

export default function Content() {
  return (
    <>
      <StoriesLayout info={Info}>
        <h2>中華文化MR混合實境互動遊戲——廿四節氣</h2>

        <p>
          以廿四節氣知識體系為主線，結合AR、VR、MR
          等尖端技術，利用元宇宙全景視角生動呈現節氣時令文化、傳統習俗、科普知識等內容，通過互動功能全面展示廿四節氣的起源及演變、生產生活與民俗節慶系統的表現，啟發讀者思考廿四節氣在當代社會的實踐與文化傳承意義，實現沉浸式3D空間互動體驗。
        </p>

        <p>
          系統透過中文（普通話、廣東話）及英文，將廿四節氣中蘊含的古代智慧與充滿生機的中國氣韻融為一體，讓中華文化以全新的形式被海內外讀者接受和欣賞。
        </p>

        <YouTubeVideo src="https://www.youtube.com/embed/gJpK08fBP0U" />

        <h2>中華文化AR人機體感著裝互動遊戲</h2>

        <p>
          中華文化AR平台採用創新科技，結合增強現實、人臉識別、體感、動作追蹤、360度全景等前沿技術，打造寓教於樂的數字交互體驗。平台內置有「互動科普」、「數字非遺」、「逐夢航天」、「經典傳承」等八大主題、近百款優質AR互動內容，為學校、圖書館等場景帶來科技升級。
        </p>

        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Wang_Xi_Meng_Panoramic_Landscape_Part.jpg"
            alt=""
          />

          <figcaption>
            故宮博物院鎮館之寶《千里江山圖》，綿延逶迤的大宋美好江山栩栩如生地展現出來，體驗者可化身宋徽宗，感受這畫卷中的一草一木。
          </figcaption>
        </figure>

        <figure>
          <img
            src="https://lh3.google.com/u/0/d/1V-wZexnB2nW3__EifeZKHRI9eISAA2Bn=w2822-h2010-iv1"
            alt=""
          />

          <figcaption>
            《喚醒兵馬俑》，用AR技術展現兵馬俑從破碎到還原的過程，講述世界第八大奇蹟的故事。
          </figcaption>
        </figure>

        <figure>
          <img src="https://lh3.google.com/u/0/d/1nhLvdZ2MgdYMUAo-nRkWwJNDF51fLQmJ=w2822-h2010-iv1" alt="" />

          <figcaption>
          通過互動學習，體驗者利用AR技術穿越時空，體驗「活」起來的國寶文物、傳統習俗。
          </figcaption>
        </figure>
      </StoriesLayout>
    </>
  );
}
