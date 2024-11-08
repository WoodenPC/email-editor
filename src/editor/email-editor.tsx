import { observer } from 'mobx-react'
import { EmailFrame } from "./email-frame"
import { useEditorStore } from './hooks/useEditorStore'
import { Button } from '@/ui/button';
import { WidgetTypeEnum } from './widgets/types';
import { WidgetPropertyGrid } from './widgets/widget-property-grid';

export const EmailEditor = observer(() => {
  const editorStore = useEditorStore();


  const handleCreateWidget = (widgetType: WidgetTypeEnum) => {
    return () => {
      editorStore.addWidget(widgetType);
    }
  }


  return <div className='grid grid-cols-12 w-full h-full'>
    <div className='col-span-4 bg-slate-300 p-5'>
      <WidgetPropertyGrid />
    </div>
    <div className='col-span-8 p-5'>
    <div className='flex gap-2'>
      <Button onClick={handleCreateWidget(WidgetTypeEnum.Text)}>Добавить виджет текста</Button>
    </div>
    <EmailFrame />
    </div>
  </div>
})