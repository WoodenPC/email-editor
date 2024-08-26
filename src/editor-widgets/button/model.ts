import { BaseWidgetModel } from "../types";
import { nanoid } from 'nanoid'

export const buttonModel: BaseWidgetModel = {
  version: '0.0.0',
}

type ButtonModel = BaseWidgetModel & {

}

export const createButtonModel = (): ButtonModel => {
  return {
    version: '0.0.0'
  }
}

export class ButtonNode {
  
}