/* import ProjectCard from "../components/ProjectCard"; */
/* import ProjectExperiences from "../components/ProjectExperiences"; */
/* import { getProjects } from "../lib/firebase"; */

export default function Home() {
  /* const projects = await getProjects(); */

  return (
    <main>
      <section>
        <div>
          <div>
            <h1 className="headerText">Web utvikler,</h1>
            <h1 className="headerTextBold">Victor Aareskjold</h1>
          </div>
          <p>Jeg kunne hvertfall ønske at jeg var det..</p>
        </div>
        <a href="">Min CV</a>
      </section>
      <div>
        <p>hei</p>
      </div>

      <section>
        <h2>Mine Prosjekter</h2>
        {/* <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div> */}
      </section>

      <section>
        <h2>Min erfaring</h2>
        {/* <div>
          {projects.map((project) => (
            <ProjectExperiences key={project.id} project={project} />
          ))}
        </div> */}
      </section>
    </main>
  );
}
