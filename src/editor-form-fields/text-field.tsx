import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormTextFieldProps = {
  label?: string;
  description?: string;
};

export const FormTextField = (props: FormTextFieldProps) => {
  const { label, description } = props;
  return (
    <FormItem>
      {!!label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input placeholder="shadcn" />
      </FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
