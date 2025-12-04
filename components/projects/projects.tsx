import Divider from "@/components/shared/divider";
import ProjectTile from "@/components/projects/project-tile";
import { projectData } from "@/lib/data";

export default function Projects() {
    return (
        <main className='w-responsive mt-10 flex flex-col justify-center items-center gap-10'>
            {
                projectData.map(project => (
                    <div key={project.id} className='w-full flex flex-col gap-10'>
                        <ProjectTile
                            project={project}
                        />
                        {
                            project.id !== projectData.length && <Divider />
                        }
                    </div>
                ))
            }
        </main>
    )
}