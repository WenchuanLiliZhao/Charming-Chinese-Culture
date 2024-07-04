import Arts from "../../Arts/Arts"
import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"

const Info = {
  title: "中華文化電子圖書館",

  update: [2024,7,4],
  
  key: `ChineseCultureDigitalLibrary`,
  cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  coverFrom: "Susan Q Yin @ Unsplash",

  authors: [
    {
      data: Editors.Editor_WangChen,
      role: "撰文",
    },

    {
      data: Editors.Editor_ZhouSheng,
      role: "校稿",
    },
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