export const getTextWidgetSchema = () => {
  const textWidgetSchema = {
    description: 'Text widget schema',
    title: 'TextWidget',
    type: 'object',
    properties: {
      text: {
        description: 'Text',
        type: 'string'
      }
    }
  } as const;

  return textWidgetSchema
}
