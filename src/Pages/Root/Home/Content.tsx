
import HeroStoryCard from "../../../Components/PageSections/HeroStoryCard"
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard"
import ArtsSection from "../../../Components/PageSections/ArtsSection"

import StoriesSection from "../../../Components/PageSections/StoriesSection"
import Arts from "../../Arts/Arts"
import Stories from "../../Stories/Stories"
import RootLayout from "../RootLayout"
import BooksSection from "../../../Components/PageSections/BooksSection"
import Books from "../../Books/Books"
import InstScopeSection from "../../../Components/PageSections/InstScopesSection"
import NBLInst from "../../Inst/NBLInst/0_Repo"
import Info from "./Info"

export default function Content() {

  // console.log(Stories.NBL_Story1)
  return (<>
    <RootLayout headline={Stories.Story_VRLibrary} info={Info} showHeader={false}>

      <StoriesSection
        label = "產品"
        quote = "學問之道無他，全在求真"
        quoteFrom = "《農政全書》（徐光啓著）"

        stories = {[
          Stories.Story_DigitalLibrary,
          Stories.Story_ExhibitionOfSpecialBookCollections,
          Stories.Story_BibliographyOfEssentialWorks,
          Stories.Story_VRLibrary,
          Stories.Story_ARMR,
          Stories.Story_AITools,
          Stories.Story_HandicraftsLessons,
          Stories.Story_Hardware,
        ]}
      />

      <WarriorStoryCard label="活動推薦" story={Stories.Story_ExhibitionOfSpecialBookCollections} />

      <BooksSection
        label = "敦煌奇遇"
        quote = "凡經高昌至北庭，北行千餘里至于敦煌"
        quoteFrom = "《大唐西域記》（玄奘著）"

        books={[
        Books.Book_Nahan_LuXun,
        Books.Book_Hamlet,
        Books.Book_TheCelticTwilight,
        Books.Book_TheSocialContract,
      ]} />

      <WarriorStoryCard label="活動推薦" story={Stories.Story_ExhibitionOfSpecialBookCollections} />


      <StoriesSection
        label = "近期文章"
        quote = "學問之道無他，全在求真"
        quoteFrom = "《農政全書》（徐光啓著）"

        stories = {[
          Stories.Story_ExhibitionOfSpecialBookCollections,
          Stories.Story_DigitalLibrary,
          Stories.Story_BibliographyOfEssentialWorks,
        ]}
      />
      

      <HeroStoryCard story={Stories.Story_VRLibrary} />


      <ArtsSection
        label = "中國紋樣"
        quote = "文以達其道，理以明其文"
        quoteFrom = "《文心雕龍》（劉勰著）"
        arts = {[
          Arts.Art_Art1,
          Arts.Art_Art2,
          Arts.Art_Art3,
          Arts.Art_Art4,
          Arts.Art_Art5,
        ]}
      />

      <InstScopeSection
        label="發現"
        quote="博物多趣，於感無窮"
        quoteFrom="《游蓮華山記》（孫綽著）"

        insts = {[
          NBLInst,
          NBLInst,
          NBLInst,
          NBLInst,
        ]}
      />

    </RootLayout>
  </>)
}