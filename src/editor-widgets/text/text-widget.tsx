import { Text } from '@react-email/components'

type TextWidgetProps = {
  text: string;
}

export const TextWidget = (props: TextWidgetProps) => {
  const { text } = props;
  return <Text>{text}</Text>
}