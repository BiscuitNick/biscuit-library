/// <reference types="react" />
export interface SelectAttributeProps {
    id: string;
    label?: string;
    value: string;
    items: string[];
    onChange: any;
}
export declare const SelectAttribute: (props: SelectAttributeProps) => JSX.Element;
export default SelectAttribute;
