
import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";


export default function Content() {
  return (<>
    <RootLayout info={Info}>

      <WarriorStoryCard label="活動推薦" story={Stories.Story_ExhibitionOfSpecialBookCollections} />

      <WarriorStoryCard label="活動推薦" story={Stories.Story_BibliographyOfEssentialWorks} />

      <WarriorStoryCard label="活動推薦" story={Stories.NBL_ScienceAndCivilizationInChina} />

      <StoriesSection
        label = "往期活動"
        quote = "學問之道無他，全在求真"
        quoteFrom = "《農政全書》（徐光啓著）"

        stories = {[
          Stories.Story_ExhibitionOfSpecialBookCollections,
          Stories.Story_BibliographyOfEssentialWorks,
          Stories.NBL_ScienceAndCivilizationInChina,
          Stories.NBL_Story4,
        ]}
      />

    </RootLayout>
  </>)
}