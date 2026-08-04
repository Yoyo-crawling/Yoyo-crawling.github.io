import { experiences } from "../../experience-data";
import { ExperienceDetailPage } from "../ExperienceDetail";

const experience = experiences.find((item) => item.slug === "shanghai-metals-market")!;

export const metadata = { title: `${experience.company}｜董慕含` };

export default function Page() {
  return <ExperienceDetailPage experience={experience} />;
}
