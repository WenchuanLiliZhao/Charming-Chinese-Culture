import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";


export default function Content() {
  return (<>
    <RootLayout info={Info}>

      <WarriorStoryCard story={Stories.NBL_Story4} />

      <StoriesSection
        stories = {[
          Stories.Story_ExhibitionOfSpecialBookCollections,
          Stories.Story_BibliographyOfEssentialWorks,
          Stories.NBL_ScienceAndCivilizationInChina,
          Stories.NBL_Story4,
          Stories.Story_ExhibitionOfSpecialBookCollections,
        ]}
      />
    </RootLayout>
  </>)
}