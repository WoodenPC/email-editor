import { ReactNode } from "react";

const EditorLayoutSidebar = ({ children }: { children: ReactNode }) => {
  return <div className='col-span-3'>{children}</div>
}

const EditorLayoutCanvas = ({ children }: { children: ReactNode }) => {
  return <div className='col-span-9'>{children}</div>
}

const EditorLayoutBase = ({ children }: { children: ReactNode }) => {
  return <div className='grid grid-cols-12 w-full min-h-screen divide-x'>{children}</div>
}

export const EditorLayout = Object.assign(EditorLayoutBase, {
  Sidebar: EditorLayoutSidebar,
  Canvas: EditorLayoutCanvas
})