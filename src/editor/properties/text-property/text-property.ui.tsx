import { Textarea } from "@/components/ui/textarea";
import { ITextProperty } from "../types";
import { observer } from "mobx-react";
import { Label } from "@/components/ui/label";

type TextPropertyComponentProps = {
  property: ITextProperty;
};

export const TextPropertyComponent = observer((props: TextPropertyComponentProps) => {
  const { property } = props;
  return (
    <div className="grid w-full gap-1.5">
    <Label htmlFor={property.id}>{property.name}</Label>
    <Textarea
      id={property.id}
      value={property.value}
      onChange={(e) => {
        property.updateValue(e.target.value);
      }}
    ></Textarea>
    </div>
  );
});
