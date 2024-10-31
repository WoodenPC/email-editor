import { observer } from 'mobx-react'
import { EmailFrame } from "./email-frame"
import { useEditorStore } from './hooks/useEditorStore'
import { Button } from '@/ui/button';
import { WidgetTypeEnum } from './types';
import { WidgetPropertyGrid } from './widget-property-grid';

export const EmailEditor = observer(() => {
  const editorStore = useEditorStore();


  const handleCreateWidget = (widgetType: WidgetTypeEnum) => {
    return () => {
      editorStore.addWidget(widgetType);
    }
  }


  return <div className='grid grid-cols-12 w-full h-full'>
    <div className='col-span-4 bg-slate-300'>
      <WidgetPropertyGrid />
    </div>
    <div className='col-span-8'>
    <div className='flex gap-2'>
      <Button onClick={handleCreateWidget(WidgetTypeEnum.Text)}>add text widget</Button>
    </div>
    <EmailFrame />
    </div>
  </div>
})