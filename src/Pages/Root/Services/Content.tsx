import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";


export default function Content() {
  return (<>
    <RootLayout info={Info}>

      <WarriorStoryCard story={Stories.Story_VRLibrary} />

      <StoriesSection
        stories = {[
          Stories.Story_ExhibitionOfSpecialBookCollections,
          Stories.Story_DigitalLibrary,
          Stories.Story_BibliographyOfEssentialWorks,
          Stories.Story_VRLibrary,
          Stories.Story_ExhibitionOfSpecialBookCollections,
        ]}
      />
    </RootLayout>
  </>)
}