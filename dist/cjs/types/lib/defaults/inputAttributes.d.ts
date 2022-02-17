interface inputAttributes {
    [key: string]: {
        inputType: "number" | "colorSwitch" | "toggle" | "selection" | "text";
        label: string;
        scaleCenter?: number;
        scaleFactor?: number;
        min?: number;
        max?: number;
        step?: number;
        toggleId?: string;
        items?: string[];
    };
}
declare const inputAttributes: inputAttributes;
export default inputAttributes;
