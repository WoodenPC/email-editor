import { Text, TextProps } from '@react-email/components'
import { ITextWidgetModel } from './text-widget.model';

interface TextWidgetComponentProps extends TextProps {
  model: ITextWidgetModel;
}

export const TextWidgetComponent = (props: TextWidgetComponentProps) => {
  const { model, ...rest } = props;

  return <Text {...rest} >{model.value}</Text>
}