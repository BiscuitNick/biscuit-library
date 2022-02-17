/// <reference types="react" />
export interface EyeProps {
    x: number;
    y: number;
    width: number;
    height: number;
    w2h?: number;
    outerSize: number;
    outerShape: string;
    outerFill?: string;
    outerStroke?: string;
    outerRotation?: number;
    innerSize: number;
    innerShape: string;
    innerFill?: string;
    innerStroke?: string;
    innerRotation?: number;
    innerStrokeWidth?: number;
    outerStrokeWidth?: number;
    innerXY: {
        x: number;
        y: number;
    };
    disableClip?: boolean;
    handleClick?: any;
    handleDrag?: any;
    draggable?: boolean;
    innerFillEnabled?: boolean;
    innerStrokeEnabled?: boolean;
    outerFillEnabled?: boolean;
    outerStrokeEnabled?: boolean;
    id?: string;
    box?: {
        width: number;
        height: number;
    };
}
declare const Eye: (props: EyeProps) => JSX.Element;
export default Eye;
