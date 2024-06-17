import Arts from "../../Arts/Arts"
import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"

const Info = {
  title: "《幾何原本》的中國之旅",

  update: [2023,1,10],
  
  key: `a-journey-of-elements-in-china`,
  cover: "https://i.pinimg.com/originals/86/b7/6b/86b76b21b24f6f7f9b45374a4a2ab695.jpg",

  authors: [
    {
      data: Editors.Editor_ZhaoWenchuan,
      role: "作者"
    },
  ],

  relatedBooks: [
    Books.Book_Nahan_LuXun,
    Books.Book_Metamathematics,
  ], // 不能没有

  relatedArts: [
    Arts.Art_Art1
  ], // 不能没有

  brief: "明朝時期，中國嚴格的海禁政策對沿海民眾經濟造成重大影響，並引發大量海盜活動。1583年，利瑪竇帶來歐幾里德的《幾何原本》，與徐光啟合作將其翻譯成中文，對明代的工程發展產生了深遠影響。徐光啟在數學、天文和農業領域做出了重要貢獻，體現了中國學者對西方科技的積極學習態度。然而，明清之際的政治動蕩使這些科技文化交流的成果未能持續，最終在清朝的閉關鎖國政策下被中斷。",
}

export default Info