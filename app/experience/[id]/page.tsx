import { getExperience } from "../../utils/firebaseFunctions";
import { Experience } from "../../../types";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { id } = params;

  const experiences = await getExperience();
  const experience = experiences.find((exp) => exp.id === id) || null;

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: experience.title }} />
      <div dangerouslySetInnerHTML={{ __html: experience.description }} />
    </main>
  );
}
