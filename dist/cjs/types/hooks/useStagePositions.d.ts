export interface StagePositions {
    canvasRef: any;
    delay?: number;
}
declare const useStagePositions: ({ canvasRef, delay }: StagePositions) => {
    x: number;
    y: number;
};
export default useStagePositions;
