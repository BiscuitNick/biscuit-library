/// <reference types="react" />
interface AnimatedTextProps {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
    align?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeWidthFactor?: number;
    handleClick?: any;
    handleDrag?: any;
    contentID: string;
    box: {
        width: number;
        height: number;
    };
    canvasRef: any;
    draggable?: boolean;
    immediateXY?: boolean;
    listening?: boolean;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    textBoxStrokeEnabled?: boolean;
    textBoxFillEnabled?: boolean;
    fontFamily?: string;
    fontStyle?: string;
    textContent?: string;
    minLines?: number;
    maxLines?: number;
    textBoxStroke?: string;
    textBoxFill?: string;
}
declare const AnimatedText: (props: AnimatedTextProps) => JSX.Element;
export default AnimatedText;
