export interface fitTextLineProps {
    parameters: any;
    size: {
        width: number;
        height: number;
    };
    canvasRef: any;
}
export interface fitTextBox {
    parameters: any;
    size: any;
    canvasRef: any;
}
export interface getTextLinesProps {
    box: any;
    content: any;
    canvasRef: any;
}
export declare const getTextLines: (props: getTextLinesProps) => {
    fontSize: number;
    minFontSize: number;
    maxFontSize: any;
    width: any;
    y: number;
}[] | null;
