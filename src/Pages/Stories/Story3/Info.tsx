import Books from "../../Books/Books"
import Editors from "../../Editors/Editors"

const Info = {
  title: "地圖，哦地圖！",

  update: [2023,1,10],

  key: `story3`,
  cover: "https://i.pinimg.com/564x/f9/6f/86/f96f863f35f237875ac9f611fdec6d2d.jpg",

  authors: [
    {
      data: Editors.Editor_ShaoQianwen,
      role: "撰文"
    },

    {
      data: Editors.Editor_ZhaoWenchuan,
      role: "插圖"
    },
  ],

  relatedBooks: [
    Books.Book_Nahan_LuXun,
  ],

  brief: "今日的敦煌在努力保護其文化遺產的同時，也在通過國際文化交流活動讓世界認識和欣賞這片土地的獨特魅力。",
}

export default Info