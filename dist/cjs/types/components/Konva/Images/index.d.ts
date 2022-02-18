/// <reference types="react" />
export interface ImageProps {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX?: number;
    offsetY?: number;
    strokeWidth?: number;
    fill?: string;
    stroke?: string;
    preserveAspect?: boolean;
    rotation?: number;
    src: string;
    canvasRef?: object;
    handleClick?: any;
    handleDrag?: any;
    contentID: string;
    box?: {
        width: number;
        height: number;
    };
    draggable?: boolean;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
}
declare const AnimatedImage: (props: ImageProps) => JSX.Element;
export default AnimatedImage;
