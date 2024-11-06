import { IWidgetField } from "./types"

export type WidgetFieldRendererProps = () => {
  field: IWidgetField;
}

export const WidgetFieldRenderer = () => {
  return <div></div>
}