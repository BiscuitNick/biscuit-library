/// <reference types="react" />
export interface BiscuitProps {
    width?: number;
    height?: number;
    contentIDs: string[];
    contentObject: {
        [key: string]: any;
    };
}
declare const BiscuitBoard: (props: BiscuitProps) => JSX.Element;
export default BiscuitBoard;
