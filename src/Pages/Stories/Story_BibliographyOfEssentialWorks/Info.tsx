// import Authors from "../../Authors/Authors"
import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"
// import Editors from "../../Editors/Editors"

const Info = {
  title: "常備書目",

  update: [2024,6,30],

  key: `Story_BibliographyOfEssentialWorks`,
  cover: "https://lh3.google.com/u/0/d/1LaWNGQ6IHDWh4jrFfUE46lwSUkonPXl2=w1860-h1908-iv1",

  authors: [
    {
      data: Editors.Editor_Team,
      role: "编辑"
    }
  ],

  relatedBooks: [
    Books.Book_Nahan_LuXun,
  ], // 不能没有

  relatedArts: [], // 不能没有

  brief: "博大精深的中華文化由眾多領域構成，包括哲學思想、文學藝術、歷史發展、社會結構、宗教信仰、科技成就、民俗風情、對外交流、當代傳承等。我們分別為中學和小學定製了內容豐富、主題多元的「中華文化常備書目」，為青少年讀者學習中華文化提供適切的內容。",
}

export default Info