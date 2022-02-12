import React, { useEffect } from "react";

const Konva = require("react-konva");
const { Stage, Layer } = Konva;

const getStageData = (canvasRef: any) => {
  if (!canvasRef) {
    return null;
  }
  if (!canvasRef.current) return null;
  else {
    const stageData = canvasRef.current.getStage();
    return stageData;
  }
};

export interface BoardProps {
  width: number;
  height: number;

  // canvasRef?: object;
  children?: any;
}

const Board = (props: BoardProps) => {
  useEffect(() => {
    console.log("using effect");
  }, []);

  console.log(props);

  return (
    <Stage width={props.width} height={props.height}>
      <Layer>{props.children}</Layer>
    </Stage>
  );
};

export default Board;
