import { Text, TextProps } from '@react-email/components'
import { ITextWidgetModel } from './text-widget.model';
import { observer } from 'mobx-react';

interface TextWidgetComponentProps extends TextProps {
  model: ITextWidgetModel;
}

export const TextWidgetComponent = observer((props: TextWidgetComponentProps) => {
  const { model, ...rest } = props;

  return <Text {...rest} >{model.value}</Text>
});