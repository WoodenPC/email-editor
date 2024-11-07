import { TextPropertyComponent } from "./text-property/text-property.ui";
import { IProperty, ITextProperty, PropertyTypeEnum } from "./types";

export type WidgetFieldRendererProps = {
  property: IProperty<any>;
}

export const PropertyRenderer = (props: WidgetFieldRendererProps) => {
  const { property } = props;
  
  switch (property.propertyType) {
    case PropertyTypeEnum.Text:
      return <TextPropertyComponent property={property as ITextProperty} />
    default:
      return null;
  }
}