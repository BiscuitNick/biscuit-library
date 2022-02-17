export interface eyeBuild {
    focalPoint: any;
    innerRotation?: number;
    outerRotation?: number;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill?: string;
    outerFill?: string;
    innerStroke?: string;
    outerStroke?: string;
    disableClip?: boolean;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_outerStrokeWidth?: number;
    r_innerStrokeWidth?: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
}
declare const buildEyeProps: (params: eyeBuild) => {
    outerSize: number;
    innerSize: number;
    innerStrokeWidth: number;
    outerStrokeWidth: number;
    x: number;
    y: number;
    box: {
        x?: number | undefined;
        y?: number | undefined;
        width: number;
        height: number;
    };
    width: number;
    height: number;
    focalPoint: any;
    innerRotation?: number | undefined;
    outerRotation?: number | undefined;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill?: string | undefined;
    outerFill?: string | undefined;
    innerStroke?: string | undefined;
    outerStroke?: string | undefined;
    disableClip?: boolean | undefined;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_outerStrokeWidth?: number | undefined;
    r_innerStrokeWidth?: number | undefined;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
};
export default buildEyeProps;
