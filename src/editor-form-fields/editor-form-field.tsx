import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { EditorFieldType } from "./types";

type EditorFormFieldProps = {
  fieldType: EditorFieldType;
  fieldValue: unknown;
  fieldDescription?: string;
  fieldLabel?: string;
  onChangeField: () => void;
};

const EditorFormFieldInner = (props: EditorFormFieldProps) => {
  const { fieldType } = props;

  switch (fieldType) {
    case "text":
      return null;
    default:
      return null;
  }
};

export const EditorFormField = (props: EditorFormFieldProps) => {
  const { fieldDescription, fieldLabel } = props;
  return (
    <FormItem>
      <FormLabel>{fieldLabel}</FormLabel>
      <FormControl>
        <EditorFormFieldInner {...props} />
      </FormControl>
      <FormDescription>{fieldDescription}</FormDescription>
    </FormItem>
  );
};
