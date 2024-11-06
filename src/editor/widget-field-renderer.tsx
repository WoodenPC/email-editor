import { IWidgetField } from "./widgets/types"

export type WidgetFieldRendererProps = () => {
  field: IWidgetField;
}

export const WidgetFieldRenderer = () => {
  return <div></div>
}