"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function a(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}a('.attributeLabel {\n  width: 100%;\n  height: 38px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: auto;\n  background: black;\n  margin: auto;\n  color: white;\n  border-radius: 5px;\n}\n\n.attributeInput {\n  width: 95%;\n  margin: auto;\n  height: 50px;\n  user-select: auto;\n  border-radius: 5px;\n  /* box-shadow: 1px 1px 1px 1px #000; */\n}\n\n.inputContainer2Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\n.inputContainer3Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n}\n\n/* SwitchInput */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  margin: auto;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchspan {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switchspan:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .switchspan {\n  background-color: #2196f3;\n}\n\ninput:focus + .switchspan {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .switchspan:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n');var r=function(e){var n=e.label,a=e.value,r=e.onChange,i=e.onToggle,o=e.toggleValue,l=e.id,u=e.toggleId;return t.default.createElement("div",{className:"inputContainer3Wide"},t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},n||l)),t.default.createElement("label",{className:"switch"},t.default.createElement("input",{type:"checkbox",checked:o,onChange:i,id:u}),t.default.createElement("span",{className:"switchspan round"})),t.default.createElement("input",{id:l,disabled:!o,type:"color",value:a,onChange:r,className:"attributeInput"}))};a('.attributeLabel {\n  width: 100%;\n  height: 38px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: auto;\n  background: black;\n  margin: auto;\n  color: white;\n  border-radius: 5px;\n}\n\n.attributeInput {\n  width: 95%;\n  margin: auto;\n  height: 50px;\n  user-select: auto;\n  border-radius: 5px;\n  /* box-shadow: 1px 1px 1px 1px #000; */\n}\n\n.inputContainer2Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\n.inputContainer3Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n}\n\n/* SwitchInput */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  margin: auto;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchspan {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switchspan:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .switchspan {\n  background-color: #2196f3;\n}\n\ninput:focus + .switchspan {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .switchspan:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* SliderInput */\n.sliderInput {\n  grid-column: 1/3;\n\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 95%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  margin: auto;\n  /* margin-bottom: 10px; */\n  cursor: pointer;\n\n  /* background: white; */\n\n  background: rgba(0, 0, 0, 0.7);\n\n  /* background: linear-gradient(to right, blue 0%, red 100%); */\n  border-radius: 10px;\n  height: 50px;\n}\n\n.sliderInput:focus {\n  outline: none;\n}\n\n.sliderInput::-ms-track {\n  width: 95%;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n.sliderInput::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  background: orange;\n  height: 60px;\n  cursor: pointer;\n  color: #ffffff;\n  width: 20px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  touch-action: auto;\n  user-select: auto;\n}\n');var i=function(n){var a=n.id,r=n.label,i=n.value,o=n.onChange,l=n.min,u=n.max,d=n.step;return e.useRef(i),t.default.createElement("div",{className:"inputContainer2Wide"},t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},r||a)),t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},i)),t.default.createElement("input",{id:a,className:"sliderInput",type:"range",min:l||0,max:u||100,step:d||1,value:i||0,onChange:o}))};a('.attributeLabel {\n  width: 100%;\n  height: 38px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: auto;\n  background: black;\n  margin: auto;\n  color: white;\n  border-radius: 5px;\n}\n\n.attributeInput {\n  width: 95%;\n  margin: auto;\n  height: 50px;\n  user-select: auto;\n  border-radius: 5px;\n  /* box-shadow: 1px 1px 1px 1px #000; */\n}\n\n.inputContainer2Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\n.inputContainer3Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n}\n\n/* SwitchInput */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  margin: auto;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchspan {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switchspan:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .switchspan {\n  background-color: #2196f3;\n}\n\ninput:focus + .switchspan {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .switchspan:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n');var o=function(e){var n=e.id,a=e.label,r=e.value,i=e.items,o=e.onChange;return t.default.createElement("div",{className:"inputContainer2Wide"},t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},a||n)),t.default.createElement("select",{id:n,value:r,onChange:o,className:"attributeInput"},i.map((function(e){return t.default.createElement("option",{value:e,key:e},e)}))))},l=function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */a('.attributeLabel {\n  width: 100%;\n  height: 38px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: auto;\n  background: black;\n  margin: auto;\n  color: white;\n  border-radius: 5px;\n}\n\n.attributeInput {\n  width: 95%;\n  margin: auto;\n  height: 50px;\n  user-select: auto;\n  border-radius: 5px;\n  /* box-shadow: 1px 1px 1px 1px #000; */\n}\n\n.inputContainer2Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\n.inputContainer3Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n}\n\n/* SwitchInput */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin: auto;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchspan {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switchspan:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .switchspan {\n  background-color: #2196f3;\n}\n\ninput:focus + .switchspan {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .switchspan:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}');var u=function(e){var n=e.round,a=void 0===n||n,r=e.color,i=void 0===r?"#2196f3":r,o=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t}(e,["round","color"]),l=o.id,u=o.label,d=o.value,s=o.onChange,c={backgroundColor:i};return t.default.createElement("div",{className:"inputContainer2Wide"},u?t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},u||l)):null,t.default.createElement("label",{className:"switch"},t.default.createElement("input",{type:"checkbox",checked:d,onChange:s,id:l}),t.default.createElement("span",{className:"switchspan ".concat(a?"round":""),style:c})))};a('.attributeLabel {\n  width: 100%;\n  height: 38px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: auto;\n  background: black;\n  margin: auto;\n  color: white;\n  border-radius: 5px;\n}\n\n.attributeInput {\n  width: 95%;\n  margin: auto;\n  height: 50px;\n  user-select: auto;\n  border-radius: 5px;\n  /* box-shadow: 1px 1px 1px 1px #000; */\n}\n\n.inputContainer2Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\n.inputContainer3Wide {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n}\n\n/* SwitchInput */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  margin: auto;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switchspan {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switchspan:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .switchspan {\n  background-color: #2196f3;\n}\n\ninput:focus + .switchspan {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .switchspan:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n');var d=function(e){var n=e.id,a=e.label,r=e.value,i=e.onChange;return t.default.createElement("div",{className:"inputContainer2Wide"},t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},a)),t.default.createElement("input",{id:n,type:"text",value:r,onChange:i,className:"attributeInput"}))},s=require("react-konva"),c=s.Stage,p=s.Layer,g=require("@react-spring/konva"),h=g.animated,f=g.useSpring;require("react-konva").Rect;var b=function(e){var n=e.handleClick,a=e.draggable,r=e.x,i=e.y,o=e.width,u=e.height,d=e.fill,s=e.stroke,c=e.strokeWidth,p=e.rotation,g=e.offsetX,b=e.offsetY,m=e.fillEnabled,x=e.strokeEnabled,k=f({x:r,y:i,width:o,height:u,fill:d,stroke:s,strokeWidth:c,rotation:p,offsetX:g,offsetY:b}),v=f({x:r,y:i,immediate:e.immediateXY||!1});return t.default.createElement(h.Rect,l({},k,v,{fillEnabled:m,strokeEnabled:x,draggable:a,onClick:n,onDragStart:e.handleDrag,onDragEnd:e.handleDrag}))},m=require("@react-spring/konva"),x=m.animated,k=m.useSpring;require("react-konva").Circle;var v=function(e){var n=e.x,a=e.y,r=e.radius,i=e.fill,o=e.stroke,u=e.fillEnabled,d=e.strokeEnabled,s=e.strokeWidth,c=k({radius:r,fill:i,stroke:o,strokeWidth:s}),p=k({x:n,y:a,immediate:e.immediateXY||!1});return t.default.createElement(x.Circle,l({},c,p,{draggable:e.draggable,fillEnabled:u,strokeEnabled:d,onClick:e.handleClick,onDragStart:e.handleDrag,onDragEnd:e.handleDrag}))},w=require("@react-spring/konva"),E=w.animated,y=w.useSpring,C=require("use-image");require("react-konva").Image;var S=require("@react-spring/konva"),O=S.animated,I=S.useSpring,j=require("react-konva").Group;exports.Board=function(n){return e.useEffect((function(){console.log("using effect")}),[]),console.log(n),t.default.createElement(c,{width:n.width,height:n.height},t.default.createElement(p,null,n.children))},exports.ColorPicker=function(e){var n=e.id,a=e.label,r=e.value,i=e.onChange;return t.default.createElement("div",{className:"inputContainer2Wide"},t.default.createElement("label",{className:"attributeLabel"},t.default.createElement("span",{style:{margin:"auto"}},a||n)),t.default.createElement("input",{id:n,type:"color",value:r,onChange:i,className:"attributeInput"}))},exports.ColorPickerSwitch=r,exports.ColorSetters=function(e){var n=e.selectedContentID,a=e.contentObject,i=e.updateContent,o=e.attributes;if(""===n)return null;var u=a.contentObject[n],d=u.props,s=d.fill,c=d.stroke,p=d.fillEnabled,g=d.strokeEnabled,h=d.innerFill,f=d.outerFill,b=d.innerStroke,m=d.outerStroke,x=d.innerStrokeEnabled,k=d.outerStrokeEnabled,v=d.innerFillEnabled,w=d.outerFillEnabled,E=function(e){var t,r,o=e.target.id,d=e.target.value,s=u.props;i(l(l({},a),{contentObject:l(l({},a.contentObject),(t={},t[n]=l(l({},u),{props:l(l({},s),(r={},r[o]=d,r))}),t))}))},y=function(e){var t,r,o=e.target.id,d=e.target.checked,s=u.props;i(l(l({},a),{contentObject:l(l({},a.contentObject),(t={},t[n]=l(l({},u),{props:l(l({},s),(r={},r[o]=d,r))}),t))}))},C={fill:t.default.createElement(r,{id:"fill",label:"Fill",value:s,onChange:E,toggleId:"fillEnabled",toggleValue:p,onToggle:y}),stroke:t.default.createElement(r,{id:"stroke",label:"Stroke",value:c,onChange:E,toggleId:"strokeEnabled",toggleValue:g,onToggle:y}),innerFill:t.default.createElement(r,{id:"innerFill",label:"InnerFill",value:h,onChange:E,toggleId:"innerFillEnabled",toggleValue:v,onToggle:y}),innerStroke:t.default.createElement(r,{id:"innerStroke",label:"InnerStroke",value:b,onChange:E,toggleId:"innerStrokeEnabled",toggleValue:x,onToggle:y}),outerFill:t.default.createElement(r,{id:"outerFill",label:"OuterFill",value:f,onChange:E,toggleId:"outerFillEnabled",toggleValue:w,onToggle:y}),outerStroke:t.default.createElement(r,{id:"outerStroke",label:"OuterStroke",value:m,onChange:E,toggleId:"outerStrokeEnabled",toggleValue:k,onToggle:y})};return t.default.createElement(t.default.Fragment,null,o.map((function(e){return Object.keys(C).includes(e)?C[e]:null})))},exports.Eye=function(e){var n=e.x,a=e.y,r=e.width,i=e.height,o=e.outerSize,u=e.outerShape,d=e.outerFill,s=e.outerStroke,c=e.outerRotation,p=e.innerSize,g=e.innerShape,h=e.innerFill,f=e.innerStroke,m=e.innerRotation,x=e.focalPoint,k=e.disableClip,w=e.sensitivity,E=e.movementFactor,y=e.w2h;e.handleClick;var C,S,W,_,F,N=e.innerFillEnabled,X=e.innerStrokeEnabled,R=e.outerFillEnabled,D=e.outerStrokeEnabled,T=e.innerStrokeWidth,L=e.outerStrokeWidth,M=e.draggable,Y=function(e){var n=e.ratio,t=e.sum;return[n*t/(n+1),t/(n+1)]}({ratio:y||1,sum:2}),q=(C=x.x-n,S=x.y-a,{x:(_=C/r*w*(W=o*E))>W?W:_<-W?-W:_,y:(F=S/i*w*W)>W?W:F<-W?-W:F}),z={offsetX:0,offsetY:0,clipFunc:k?null:"Circle"===u?function(e){return e.arc(0,0,o,0,2*Math.PI)}:"Rect"===u?function(e){return e.rect(-o,-o,2*o,2*o)}:null},P=I({scaleX:Y[0],scaleY:Y[1],rotation:c||0,x:n,y:a,immediate:["x","y"]}),V={x:0,y:0,fill:d,fillEnabled:R},A={x:0,y:0,stroke:s,strokeEnabled:D,strokeWidth:L,listening:!1},B={x:q.x||0,y:q.y||0,fill:h,stroke:f,fillEnabled:N,strokeEnabled:X,strokeWidth:T,immediateXY:!1,dragable:!1,rotation:m||0},G="Circle"===u?t.default.createElement(v,l({},V,{radius:o})):"Rect"===u?t.default.createElement(b,l({},V,{width:2*o,height:2*o,offsetX:o,offsetY:o})):null,H="Circle"===u?t.default.createElement(v,l({},A,{radius:o})):"Rect"===u?t.default.createElement(b,l({},A,{width:2*o,height:2*o,offsetX:o,offsetY:o})):null,J="Circle"===g?t.default.createElement(v,l({},B,{radius:p})):"Rect"===g?t.default.createElement(b,l({},B,{width:2*p,height:2*p,offsetX:p,offsetY:p})):null;return t.default.createElement(O.Group,l({},P,{onDragStart:e.handleDrag,onDragEnd:e.handleDrag,onClick:e.handleClick,draggable:M}),t.default.createElement(j,l({},z),G,J),D?H:null)},exports.MyCircle=v,exports.MyImage=function(e){var n=C(e.src),a=n[0];n[1];var r=e.x,i=e.y,o=e.width,u=e.height,d=e.rotation,s=e.offsetX,c=e.offsetY,p=y({x:r,y:i,width:o,height:u,rotation:d,offsetX:s,offsetY:c,immediate:["x","y"]}),g={fill:e.fill&&e.fillEnabled?e.fill:null,stroke:e.stroke&&e.strokeEnabled?e.stroke:null,strokeWidth:e.strokeWidth&&e.strokeEnabled?e.strokeWidth:null};return t.default.createElement(E.Image,l({},p,g,{onClick:null==e?void 0:e.handleClick,draggable:null==e?void 0:e.draggable,canvasRef:null==e?void 0:e.canvasRef,image:a,onDragStart:e.handleDrag,onDragEnd:e.handleDrag}))},exports.MyRect=b,exports.NumberInput=i,exports.NumberSetters=function(e){var n=e.selectedContentID,a=e.contentObject,r=e.updateContent,o=e.attributes;if(""===n)return null;var u=a.contentObject[n],d=u.relatives,s=u.props,c=s.rotation,p=s.w2h,g=s.sensitivity,h=s.movementFactor,f=s.innerRotation,b=s.outerRotation,m=d.r_x,x=d.r_y,k=d.r_width,v=d.r_height,w=d.r_outerSize,E=d.r_outer2inner,y=d.r_strokeWidth,C=function(e,t){var i,o;console.log(u,e,t),r(l(l({},a),{contentObject:l(l({},a.contentObject),(i={},i[n]=l(l({},u),{props:l(l({},s),(o={},o[t]=Number(e),o))}),i))}))},S=function(e,t){var i,o;console.log(u,e,t),r(l(l({},a),{contentObject:l(l({},a.contentObject),(i={},i[n]=l(l({},u),{relatives:l(l({},d),(o={},o[t]=e,o))}),i))}))},O={r_x:t.default.createElement(i,{id:"r_x",label:"X-Axis",value:Math.round(100*(m-.5)),onChange:function(e){var n=e.target.value;S(n/100+.5,"r_x")},min:-100,max:100,step:1}),r_y:t.default.createElement(i,{id:"r_y",label:"Y-Axis",value:Math.round(100*(x-.5)),onChange:function(e){var n=e.target.value;S(n/100+.5,"r_y")},min:-100,max:100,step:1}),r_width:t.default.createElement(i,{id:"r_width",label:"Width",value:Math.round(100*k),onChange:function(e){var n=e.target.value;S(n/100,"r_width")},min:0,max:200,step:1}),r_height:t.default.createElement(i,{id:"r_height",label:"Height",value:Math.round(100*v),onChange:function(e){var n=e.target.value;S(n/100,"r_height")},min:0,max:200,step:1}),r_strokeWidth:t.default.createElement(i,{id:"r_strokeWidth",label:"StrokeWidth",value:Math.round(100*y),onChange:function(e){var n=e.target.value;S(n/100,"r_strokeWidth")},min:0,max:100,step:1}),rotation:t.default.createElement(i,{id:"rotation",label:"Rotation",value:c,onChange:function(e){return C(Number(e.target.value),"rotation")},min:-180,max:180,step:1}),w2h:t.default.createElement(i,{id:"w2h",label:"w2h",value:p,onChange:function(e){return C(e.target.value,"w2h")},min:.5,max:2,step:.1}),sensitivity:t.default.createElement(i,{id:"sensitivity",label:"Sensitivity",value:g,onChange:function(e){return C(e.target.value,"sensitivity")},min:0,max:2,step:.25}),movementFactor:t.default.createElement(i,{id:"movementFactor",label:"Movement Range",value:h,onChange:function(e){return C(e.target.value,"movementFactor")},min:0,max:2,step:.25}),r_outerSize:t.default.createElement(i,{id:"r_outerSize",label:"Eye Size",value:Math.round(200*w),onChange:function(e){var n=e.target.value;S(n/200,"r_outerSize")},min:0,max:100,step:1}),r_outer2inner:t.default.createElement(i,{id:"r_outer2inner",label:"Inner Size",value:Math.round(100*E),onChange:function(e){var n=e.target.value;S(n/100,"r_outer2inner")},min:0,max:100,step:1}),innerRotation:t.default.createElement(i,{id:"innerRotation",label:"InnerRotation",value:f,onChange:function(e){return C(e.target.value,"innerRotation")},min:-180,max:180,step:1}),outerRotation:t.default.createElement(i,{id:"outerRotation",label:"OuterRotation",value:b,onChange:function(e){return C(e.target.value,"outerRotation")},min:-180,max:180,step:1})};return t.default.createElement(t.default.Fragment,null,o.map((function(e){return Object.keys(O).includes(e)?O[e]:null})))},exports.SelectAttribute=o,exports.SelectionSetters=function(e){var n=e.selectedContentID,a=e.contentObject,r=e.updateContent,i=e.attributes;if(""===n)return null;var u=function(e){var t,i,o=e.target.id,u=e.target.value,s=d.props;r(l(l({},a),{contentObject:l(l({},a.contentObject),(t={},t[n]=l(l({},d),{props:l(l({},s),(i={},i[o]=u,i))}),t))}))},d=a.contentObject[n],s=d.props,c=s.innerShape,p=s.outerShape,g=["Circle","Rect"],h={innerShape:t.default.createElement(o,{label:"innerShape",id:"innerShape",value:c,items:g,onChange:u}),outerShape:t.default.createElement(o,{label:"outerShape",id:"outerShape",value:p,items:g,onChange:u})};return t.default.createElement(t.default.Fragment,null,i.map((function(e){return Object.keys(h).includes(e)?h[e]:null})))},exports.TextInput=d,exports.TextSetters=function(e){var n=e.selectedContentID,a=e.contentObject,r=e.updateContent,i=e.attributes;if(""===n)return null;var o=a.contentObject[n],u=o.props.src,s={src:t.default.createElement(d,{id:"src",label:"Image url",onChange:function(e){var t,i,u=e.target.id,d=e.target.value,s=o.props;r(l(l({},a),{contentObject:l(l({},a.contentObject),(t={},t[n]=l(l({},o),{props:l(l({},s),(i={},i[u]=d,i))}),t))}))},value:u})};return t.default.createElement(t.default.Fragment,null,i.map((function(e){return Object.keys(s).includes(e)?s[e]:null})))},exports.ToggleSetters=function(e){var n=e.selectedContentID,a=e.contentObject,r=e.updateContent,i=e.attributes;if(""===n)return null;var o=function(e){var t,i,o=e.target.id,u=e.target.checked,s=d.props;r(l(l({},a),{contentObject:l(l({},a.contentObject),(t={},t[n]=l(l({},d),{props:l(l({},s),(i={},i[o]=u,i))}),t))}))},d=a.contentObject[n],s=d.props,c=s.draggable,p=s.strokeEnabled,g=s.fillEnabled,h={draggable:t.default.createElement(u,{id:"draggable",label:"draggable",value:c,onChange:o}),fillEnabled:t.default.createElement(u,{id:"fillEnabled",label:"fillEnabled",value:g,onChange:o}),strokeEnabled:t.default.createElement(u,{id:"strokeEnabled",label:"strokeEnabled",value:p,onChange:o})};return t.default.createElement(t.default.Fragment,null,i.map((function(e){return Object.keys(h).includes(e)?h[e]:null})))},exports.ToggleSwitch=u;
//# sourceMappingURL=index.js.map
