import React from"react";import{Ellipse as EllipseIcon}from"@scaleflex/icons/ellipse";import ToolsBarItemButton from"../../ToolsBar/ToolsBarItemButton";import{TOOLS_IDS}from"../../../utils/constants";var EllipseButton=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return React.createElement(ToolsBarItemButton,{className:"FIE_ellipse-tool-button",id:TOOLS_IDS.ELLIPSE,label:d("ellipseTool"),Icon:EllipseIcon,onClick:b,isSelected:c})};EllipseButton.defaultProps={isSelected:!1};export default EllipseButton;