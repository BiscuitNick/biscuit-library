import React from "react";

import { stringToWordArray, stringToWordRows } from "../lib/helpers";

export interface fitTextLineProps {
  parameters: any;
  size: { width: number; height: number };
  canvasRef: any;
}

const fitTextLine = (props: fitTextLineProps): any => {
  // console.log("fitTextLine", props);

  const { parameters, size, canvasRef } = props;
  if (!canvasRef || canvasRef.current === null) return null;
  const { width, height } = size;

  if (!width || !height) {
    return null;
  }

  const {
    fontSize,
    maxHeight,
    maxWidth,
    textContent,
    fontFamily,
    fontStyle,
    //fontWeight: initWeight, //fontstyle ??
    //passthruprops ?
  } = parameters;

  // const fontWeight = initWeight ? initWeight : "";

  const ctx = canvasRef.current.getContext();
  const testFontSize = fontSize + (maxHeight - fontSize) / 2;

  const fontstring = fontStyle
    ? fontStyle + " " + testFontSize + "px " + fontFamily
    : testFontSize + "px " + fontFamily;

  ctx.font = fontstring;
  const textmetrics = ctx.measureText(textContent);
  const textwidth = textmetrics.width;

  if (maxHeight - fontSize < 1 && textwidth < maxWidth) {
    //Round FontSize Down
    parameters.fontSize = Math.floor(fontSize - 0.5);
    parameters.textmetrics = textmetrics;

    return parameters;
  }

  if (textwidth >= maxWidth) {
    //TOO Large ==> Reducing MaxHeight
    parameters.maxHeight = testFontSize;
    return fitTextLine({ parameters, size, canvasRef });
  }
  if (textwidth < maxWidth) {
    //TOO SMALL ==> Increasing FontSize
    parameters.fontSize = testFontSize;
    return fitTextLine({ parameters, size, canvasRef });
  }
};

export interface fitTextBox {
  parameters: any;
  size: any;
  canvasRef: any;
}

const fitTextBox = ({ parameters, size, canvasRef }: fitTextBox) => {
  const { strokeWidthFactor: r_check } = parameters; //verticalAlign

  const r_strokeWidth = r_check || 0;
  const verticalAlign = "middle";

  if (!canvasRef || canvasRef.current === null) return null;

  // console.log(parameters, size, canvasRef);

  const { textContent, maxHeight } = parameters;
  const { width, height } = size;

  const words = stringToWordArray(textContent);
  const minrows = parameters.minrows || 1;
  const maxrows = parameters.maxrows || words.length;
  var optimaltextrows = null;
  var optimalsize = 0;

  for (let i = minrows; i <= maxrows; i++) {
    const wordrows = stringToWordRows(textContent, i);
    const fitwordrows = wordrows.map((row) => {
      const rowtext = row.join(" ");
      const rowfit = fitTextLine({
        parameters: {
          ...parameters,
          maxHeight: maxHeight / i,
          text: rowtext,
        },
        size,
        canvasRef,
      });
      return rowfit;
    });

    let minFontSize = Math.min(
      ...fitwordrows.map((r: { fontSize: any }) => {
        if (r) return r.fontSize;
      })
    );

    if (minFontSize > optimalsize) {
      optimalsize = minFontSize;
      const usedHeight = optimalsize * fitwordrows.length;
      const unusedHeight = height - usedHeight;

      const heightOffSet =
        verticalAlign === "middle"
          ? (height - usedHeight) / 2
          : verticalAlign === "top"
          ? 0
          : verticalAlign === "bottom"
          ? unusedHeight
          : (height - usedHeight) / 2; //default to middle

      optimaltextrows = fitwordrows.map((r: { fontSize: any }, i: number) => {
        return {
          ...r,
          fontSize: minFontSize, // - Math.round((r_strokeWidth * minFontSize) / 2),
          minFontSize: minFontSize,
          maxFontSize: r.fontSize,
          width: width, //must have width prop for align to work  ==> shouldn't also use X if using this
          //TODO, no width paramater, use X...

          y: heightOffSet + i * optimalsize,

          // strokeWidth: Math.round(r_strokeWidth * minFontSize),

          // strokeWidth: r.rStrokeWidth ? r.rStrokeWidth * minFontSize : 0,
        };
      });
    }
  }

  return optimaltextrows;
};

export interface getTextLinesProps {
  box: any;
  content: any;
  canvasRef: any;
}

export const getTextLines = (props: getTextLinesProps) => {
  const { box, content, canvasRef } = props;

  if (!canvasRef || canvasRef.current === null) return null;
  const { width, height } = box;

  const { textContent, fontFamily, fontStyle, verticalAlign } = content;

  const readyTexts = fitTextBox({
    parameters: {
      ...content,
      fontSize: 0,
      text: textContent ? textContent : "",
      maxHeight: height ? height : 0,
      maxWidth: width ? width : 0,
      fontStyle,
      //fontWeight: fontStyle || "bold",
      // fontFamily: fontFamily ? fontFamily : "Roboto",
      // anchor,
    },
    size: box,
    canvasRef,
  });

  // console.log(readyTexts);

  return readyTexts;
};
