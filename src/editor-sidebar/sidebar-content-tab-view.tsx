import { ReactNode } from "react"
import { Image } from 'lucide-react'

const ContentWidgetBlock = ({ icon }: { icon: ReactNode }) => {
  return <div className="w-[100px] h-8 flex justify-center items-center p-5">
    {icon}
  </div>
}


export const SidebarContentTabView = () => {
  return <div>
    <h2>Виджеты</h2>
      <div className="grid grid-cols-3 gap-2">
        <ContentWidgetBlock icon={<Image />} />
      </div>
  </div>
}