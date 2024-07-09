
// import StoriesSection from "../../../Components/PageSections/StoriesSection";
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";

export default function Content() {
  return (<>
    <RootLayout info={Info}>

      <WarriorStoryCard story={Stories.Story_ExhibitionOfSpecialBookCollections} />

      <WarriorStoryCard story={Stories.Story_DigitalLibrary} />

      <WarriorStoryCard story={Stories.Story_BibliographyOfEssentialWorks} />

      <WarriorStoryCard story={Stories.Story_HandicraftsLessons} />

      <WarriorStoryCard story={Stories.Story_VRLibrary} />

      <WarriorStoryCard story={Stories.Story_ARMR} />

      <WarriorStoryCard story={Stories.Story_AITools} />

      <WarriorStoryCard story={Stories.Story_Hardware} />

    </RootLayout>
  </>)
}