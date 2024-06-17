import Authors from "../../Authors/Authors"
import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"

const Info = {
  title: "《中國科學技術史》序言",

  update: [2023,1,10],

  key: `story3`,
  cover: "https://i.pinimg.com/originals/5f/28/ab/5f28ab53da07b5c8f68b48b7b5ce8c97.jpg",

  authors: [
    {
      data: Authors.Author_JosephNeedham,
      role: "作者",
    },

    {
      data: Editors.Editor_ZhaoWenchuan,
      role: "翻譯",
      display: false,
    },
  ],

  relatedBooks: [
    Books.Book_Nahan_LuXun,
  ], // 不能没有

  relatedArts: [], // 不能没有

  brief: "「中國對人類理解自然及其控制自然做出了貢獻，而且這是偉大的貢獻。或許伽利略和維薩里等人是歐洲人的這一事實根本不取決於歐洲人民的任何內在優越性，而是依賴於環境因素，這些因素在其他擁有不同地理環境和社會演變的文明中沒有也無法運作。無論如何，這個問題值得調查。可以肯定的是，沒有任何民族或民族群體在科學發展的貢獻上擁有壟斷地位。他們的成就應該相互承認，並以普世兄弟情誼之手自由地慶祝。」——李約瑟",
}

export default Info