export interface getInnerPositionParams {
    focalPoint: {
        x: number;
        y: number;
    };
    x: number;
    y: number;
    width: number;
    height: number;
    movementFactor: number;
    outerSize: number;
    sensitivity: number;
}
declare const getInnerPosition: (params: getInnerPositionParams) => {
    x: number;
    y: number;
};
export default getInnerPosition;
