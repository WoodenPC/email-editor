import { IWidgetModel, WidgetTypeEnum } from '@/editor/types';
import { makeAutoObservable } from 'mobx';
import { z } from 'zod';

const textWidgetSchema = z.object({
  widgetType: z.literal(WidgetTypeEnum.Text),
  version: z.string(),
  id: z.string(),
  value: z.string()
});

type TextWidgetData = z.infer<typeof textWidgetSchema>;

export interface ITextWidgetModel extends IWidgetModel {
  value: string;
}

export class TextWidgetModel implements ITextWidgetModel {
  private version: string = '0.0.1';
  readonly widgetType = WidgetTypeEnum.Text;
  readonly id: string;
  value: string;

  constructor(id: string, value: string) {
    makeAutoObservable(this);
    this.version = '0.0.1';
    this.id = id;
    this.value = value;
  }

  public static fromJson<T extends object>(object: T): TextWidgetModel {
    const parsed = textWidgetSchema.parse(object);
    const instance = new TextWidgetModel(parsed.id, parsed.value);
    return instance
  }

  public toJson(): TextWidgetData {
    return {
      widgetType: this.widgetType,
      version: this.version,
      id: this.id,
      value: this.value
    }
  }
}