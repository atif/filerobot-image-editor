import React,{useCallback,useEffect,useMemo}from"react";import{SELECT_TOOL}from"../../actions";import{TABS_TOOLS,TOOLS_ITEMS}from"../tools/tools.constants";import{TABS_IDS}from"../../utils/constants";import{useStore}from"../../hooks";import Carousel from"../common/Carousel";import{StyledToolsBar,StyledToolsBarItems}from"./ToolsBar.styled";import ToolsBarItemOptionsWrapper from"./ToolsBarItemOptionsWrapper";var style={maxWidth:"100%",width:"100%"},ToolsBar=function(a){var b,c=a.isPhoneScreen,d=useStore(),e=d.t,f=d.dispatch,g=d.tabId,h=d.toolId,i=d.annotations,j=d.selectionsIds,k=void 0===j?[]:j,l=d.config,m=l.defaultTabId,n=l.defaultToolId,o=l.useCloudimage,p=g||m,q=h||n||(null===(b=TABS_TOOLS[p])||void 0===b?void 0:b[0]),r=useMemo(function(){return TABS_TOOLS[p]||[]},[p]),s=useCallback(function(a){f({type:SELECT_TOOL,payload:{toolId:a}})},[]),t=useMemo(function(){return r.map(function(a){var b=TOOLS_ITEMS[a],c=b.Item,d=b.hideFn;return c&&(!d||!d({useCloudimage:o}))&&React.createElement(c,{key:a,selectTool:s,t:e,isSelected:q===a})})},[r,q]),u=useMemo(function(){var a,b,c;if(!q)return!1;if(p===TABS_IDS.ANNOTATE){var d=k.length;if(1===d){var e,f=i[k[0]];return null===(e=TOOLS_ITEMS[f.name])||void 0===e?void 0:e.ItemOptions}if(1<d)return null}return p&&q&&TABS_TOOLS[p].includes(q)&&(!(null!==(a=TOOLS_ITEMS[h])&&void 0!==a&&a.hideFn)||!(null!==(b=TOOLS_ITEMS[h])&&void 0!==b&&b.hideFn({useCloudimage:o})))&&(null===(c=TOOLS_ITEMS[h])||void 0===c?void 0:c.ItemOptions)},[p,q,i,k]);return useEffect(function(){!h&&q&&f({type:SELECT_TOOL,payload:{toolId:q}})},[]),React.createElement(StyledToolsBar,{className:"FIE_tools-bar-wrapper"},React.createElement(ToolsBarItemOptionsWrapper,{isPhoneScreen:c},u&&React.createElement(u,{t:e})),t&&React.createElement(StyledToolsBarItems,{className:"FIE_tools-bar",isPhoneScreen:c},p===TABS_IDS.WATERMARK?t:React.createElement(Carousel,{className:"FIE_tools",style:style},t)))};ToolsBar.defaultProps={isPhoneScreen:!1};export default ToolsBar;