import {RuleItem} from './Rule.type'

type FormElementType = 'cascader' | 'checkbox' | 'date-picker' | 'input' | 'radio' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'upload';
interface FormItemType{
    label: string;
    value: any;
    element: FormElementType;
    prop: string;
    rule?:RuleItem; 
    children?:FormItemType[];
    attrs?: any
}

export default FormItemType