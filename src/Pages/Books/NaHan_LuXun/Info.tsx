import Authors from "../../Authors/Authors"

const Info = {
  title: "吶喊",
  key: "na-han",

  copyRight: "公共領域",

  language: "漢語",
  // originalLanguage: "漢語",

  // originalPublishDate: [1923,1,1],
  era: "1932年",

  // 这个需要做成数据库 obj 但也可以是 string
  originalPublisher: "北京新潮社",

  // isbn: "0395977274, 9780395977279",
  isAudioBook: true,

  update: [2024,4,1],
  
  cover: "https://i.pinimg.com/564x/2f/24/ab/2f24abee10cc1342cd16553ee3d49a48.jpg",

  authors: [
    {
      role: "作者",
      data: Authors.Author_LuXun,
    },
  ],

  catagories: {},

  brief: (<>
    <p>我翻開歷史一查，這歷史沒有年代，歪歪斜斜的每頁上都寫著『仁義道德』幾個字。我橫豎睡不著，仔細看了半夜，才從字縫裡看出字來，滿本都寫著兩個字是『吃人』！</p>
  </>),
}

export default Info