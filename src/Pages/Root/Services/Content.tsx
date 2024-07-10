
import WarriorStoryCard from "../../../Components/PageSections/WarriorStoryCard";
import Stories from "../../Stories/Stories";
import RootLayout from "../RootLayout";
import Info from "./Info";


export default function Content() {
  return (<>
    <RootLayout info={Info}>

      <WarriorStoryCard story={Stories.Story_Post0002} label="服務資訊" />

      <WarriorStoryCard story={Stories.Story_Post0001} label="服務資訊" />

      <WarriorStoryCard story={Stories.Story_Post0003} label="服務資訊" />

      <WarriorStoryCard story={Stories.Story_Post0004} label="服務資訊" />
    </RootLayout>
  </>)
}