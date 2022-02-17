/// <reference types="react" />
export interface CircleProps {
    x: number;
    y: number;
    radius: number;
    fill?: string;
    stroke?: string;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    strokeWidth?: number;
    canvasRef?: object;
    draggable?: boolean;
    handleClick?: any;
    handleDrag?: any;
    immediateXY?: boolean;
    listening?: boolean;
    id?: string;
    box?: {
        width: number;
        height: number;
    };
}
declare const AnimatedCircle: (props: CircleProps) => JSX.Element;
export default AnimatedCircle;
