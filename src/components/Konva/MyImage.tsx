import React from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const useImage = require("use-image");
const Konva = require("react-konva");
const { Image } = Konva;

export interface ImageProps {
  //Size & Position
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

  //Interactions
  canvasRef?: object;
  handleClick?: any;
  handleDrag?: any;

  id?: string;

  draggable?: boolean;
  fillEnabled?: boolean;
  strokeEnabled?: boolean;
}

const MyImage = (props: ImageProps) => {
  const [image, status] = useImage(props.src);
  const { x, y, width, height, rotation, offsetX, offsetY } = props;
  const imageSpring = useSpring({
    x,
    y,
    width,
    height,
    rotation,
    offsetX,
    offsetY,
    immediate: ["x", "y"],
  });

  //const {x,y,width,height} = props;

  // if (status === "loading") {
  //   console.log(status, image);
  // }
  // if (status === "loaded") {
  //   //Apply Resizing after loaded.
  //   //We can again skip Wrapper...
  //   console.log(status, image.naturalWidth, image.naturalHeight);
  // }

  const colorProps = {
    fill: props.fill && props.fillEnabled ? props.fill : null,
    stroke: props.stroke && props.strokeEnabled ? props.stroke : null,
    strokeWidth:
      props.strokeWidth && props.strokeEnabled ? props.strokeWidth : null,
  };

  return (
    <animated.Image
      {...imageSpring}
      {...colorProps}
      // x={props.x}
      // y={props.y}
      // width={props.width}
      // height={props.height}
      // offsetX={props.offsetX}
      // offsetY={props.offsetY}
      // rotation={props.rotation}
      onClick={props?.handleClick}
      draggable={props?.draggable}
      canvasRef={props?.canvasRef}
      image={image}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
    />
  );
};

export default MyImage;