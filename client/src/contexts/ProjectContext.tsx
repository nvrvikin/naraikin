import { createContext, useState, useEffect, ReactNode } from 'react'

import projectsList, { IProject } from '../data/projectsList'

export interface IProjectContext {
    project?: IProject,
    isViewShown?: boolean,
    setCurrentProject?: (newProjectId: string) => void,
    hideView?: () => void
}

const STORAGE_KEY = 'project'

export const ProjectContext = createContext<IProjectContext>({})

function ProjectProvider({ children }: { children: ReactNode }) {
    const [project, setProject] = useState<IProject>(projectsList[0])
    const [isViewShown, setIsViewShown] = useState(false)

    useEffect(() => {
        const currentProjectId =  localStorage.getItem(STORAGE_KEY)

        if(!currentProjectId) {
            localStorage.setItem(STORAGE_KEY, projectsList[0].id + '')
        } else {
            const storagedProject = projectsList.find(proj => proj.id === currentProjectId)
            if( storagedProject ) {
                setProject(storagedProject)
            }
        }
    }, [])

    useEffect(() => {

    }, [project])

    function setCurrentProject(newProjectId: string): void {
        const storagedProject = projectsList.find(proj => proj.id === newProjectId)
            if( storagedProject ) {
                setProject(storagedProject)
                setIsViewShown(true)
                localStorage.setItem(STORAGE_KEY, newProjectId)
            }
    }

    function hideView() {
        setIsViewShown(false)
    }

    return (
        <ProjectContext.Provider value={{
            project,
            isViewShown,
            setCurrentProject,
            hideView
        }}>
            { children }
        </ProjectContext.Provider>
    )
}

export default ProjectProvider