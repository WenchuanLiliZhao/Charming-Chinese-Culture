import Arts from "../../Arts/Arts"
import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"

const Info = {
  title: "電子圖書館",

  update: [2024,7,4],
  
  key: `Story_ChineseCultureDigitalLibrary`,
  cover: "https://lh3.google.com/u/0/d/1-fW9XraBolw5ChiQ1dLPWZlprVe3sn5W=w1860-h1908-iv1",

  coverFrom: "Susan Q Yin @ Unsplash",

  authors: [
    {
      data: Editors.Editor_Team,
      role: "编辑"
    }
  ],

  relatedBooks: [
    Books.Book_Nahan_LuXun,
    Books.Book_KsitigarbhaBodhisattvaPurvaPranidhanaSutra,
  ], // 不能没有

  relatedArts: [
    Arts.Art_Art1
  ], // 不能没有

  brief: "「知書閱聽圖書館」是一個為機構提供全方位電子閱讀解決方案的平台，已被400多家機構採用。平台涵蓋電子書、有聲書、視頻等多媒體資源，具備在線閱讀、AI朗讀等功能，並推出中華文化專題電子圖書館，弘揚儒家思想及傳統文化。",
}

export default Info