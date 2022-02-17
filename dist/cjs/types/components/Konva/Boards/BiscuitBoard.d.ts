/// <reference types="react" />
export interface biscuitParams {
    width?: number;
    height?: number;
    contentIDs: string[];
    contentObject: {
        [key: string]: any;
    };
}
declare const BiscuitBoard: (props: biscuitParams) => JSX.Element;
export default BiscuitBoard;
