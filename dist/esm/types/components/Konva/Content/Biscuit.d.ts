/// <reference types="react" />
export interface BiscuitProps {
    contentObject: {
        [key: string]: any;
    };
    contentIDs: string[];
    box: {
        width: number;
        height: number;
        x?: number;
        y?: number;
    };
    canvasRef: any;
    handleClick: any;
    handleDrag: any;
    id: string;
}
declare const Biscuit: (props: BiscuitProps) => JSX.Element;
export default Biscuit;
