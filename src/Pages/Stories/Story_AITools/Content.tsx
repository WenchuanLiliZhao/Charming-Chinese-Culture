
import YouTubeVideo from "../../../Components/Cards/InArticle/Video";
import StoriesLayout from "../StoriesLayout";
import Info from "./Info";

export default function Content() {
  return (
    <>
      <StoriesLayout info={Info}>
        <h2>智能伴學機械人</h2>

        <p>智能伴學機械人是聯合電子打磨出的一款港澳地區校園級入口教育解決方案，它擁有可愛的類人外型，在聲音、視覺、運動等方面都頗具特色，易於激發青少年兒童主動學習和探索的興趣，真正將機械人升級為「學生夥伴」。</p>

        <p>機械人基於AI大語言模型及自然語言處理技術，兼容普通話、廣東話及英文對話功能，可與使用者時實互動並回答問題。其內置的編程模塊既是互動遊戲，也是統整學科資源的工具。學生可以利用編程功能呈現多元的學習結果，增強與機械人的互動交流能力。</p>

        <p>「音樂伴學課程」收錄了「培生音樂教材」，內置卡拉OK、音樂舞蹈、音樂遊戲、樂譜等功能充分激活了機械人全身的靈活運動功能，具備良好的三維互動交互效果。它們即將走進課堂成為音樂小助教，與學生們共度藝術時光。此外，機械人開放的生態系統支持自由安裝近千款應用程式，極大地豐富了機械人在校園中的使用場景。</p>

        <figure>
          <img src="https://lh3.google.com/u/0/d/1BgzpktuKxzu4-zFZMJlVpniobmjosEov=w2638-h1908-iv1" alt="" />
        </figure>

        <h2>智能交互數字人 Miss So</h2>

        <p>作為香港首位來自虛擬世界的數字人教師蘇怡文（Miss So），可以用多種語言講解課程知識、品鑒詩詞歌賦、還原化學實驗、探究科學原理，加深同學們對於自然知識的了解；她還能展現古詩文所描繪的畫面，帶領學生進入詩句所描繪的絢爛世界。</p>

        <figure>
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZMcCiD2IrRQ0W8-0rqLfXGUvxtn9UsTs0Rt212c-h_O4ahzbkDHbBAkRC9yVmtlliecEl1aGuIFUgtH1CL9D2l27hCtJvqqMw=w2790-h2010-rw-v1" alt="" />
        </figure>

        <p>未來，她將能夠24小時在線互動交流，結合每位同學的特點做到針對性預習、練習和複習，發展每個孩子的特長，陪伴同學們愉快地學習與成長。</p>

        <YouTubeVideo
          src="https://drive.google.com/file/d/1eZMY55UCcRW58Wy0FzrEnP4VOspQ_cmx/preview"
          caption="個人介紹"
        />

        <YouTubeVideo
          src="https://drive.google.com/file/d/1R7G4wC9mSDnefER6OKvIlDjdAhaJoCCb/preview"
          caption="Miss So 薦書（粵語）"
        />

        <YouTubeVideo
          src="https://drive.google.com/file/d/17cJfenbK0Rr-QiOojhNPzHZZLvK7YXNa/preview"
          caption="Miss So薦書（普通話）"
        />
      </StoriesLayout>
    </>
  );
}
