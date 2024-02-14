import React from"react";import restrictNumber from"../../../utils/restrictNumber";import ColorInput from"../ColorInput";import{StyledSpacedOptionFields}from"./AnnotationOptions.styled";import Slider from"../Slider";var MIN_PERCENTANGE=0,MAX_PERCENTANGE=100,StrokeFields=function(a){var b=a.annotation,c=a.updateAnnotation,d=b.stroke,e=b.strokeWidth;return React.createElement(StyledSpacedOptionFields,null,React.createElement(Slider,{annotation:"px",onChange:function changeStrokeWidth(a){c({strokeWidth:restrictNumber(a,MIN_PERCENTANGE,MAX_PERCENTANGE)})},value:e,noMargin:!0}),React.createElement(ColorInput,{color:d,onChange:function changeStrokeColor(a){c({stroke:a})},colorFor:"stroke"}))};export default StrokeFields;