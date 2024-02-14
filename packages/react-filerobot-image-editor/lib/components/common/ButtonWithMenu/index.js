import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React,{useEffect,useState,useRef}from"react";import{MenuItemLabel}from"@scaleflex/ui/core/menu-item";import{useStore}from"../../../hooks";import{StyledMainButton,StyledButtonWrapper,StyledMenu,StyledMenuItem,StyledMenuIcon}from"./ButtonWithMenu.styled";var ButtonWithMenu=function(a){var b=a.onClick,c=a.title,d=a.label,e=a.color,f=a.menuFromBtn,g=a.menuItems,h=a.menuPosition,i=void 0===h?"bottom":h,j=a.disabled,k=void 0!==j&&j,l=a.className,m=a.menuStyle,n=a.wrapperStyle,o=a.buttonRef,p=a.noMargin,q=useStore(),r=q.t,s=useRef(!0),t=useState(null),u=_slicedToArray(t,2),v=u[0],w=u[1],x="sm",y=g.filter(Boolean),z=1<y.length,A=function(a){s.current&&w(a.currentTarget)},B=function(){s.current&&w(null)},C=function(a){"function"==typeof a&&a(),B()};return useEffect(function(){return s.current=!0,function(){s.current=!1}},[]),React.createElement(React.Fragment,null,React.createElement(StyledButtonWrapper,{className:"".concat(l,"-wrapper"),style:n,ref:o,noMargin:p},React.createElement(StyledMainButton,{className:"".concat(l,"-button"),color:e,size:x,title:c,onClick:k?void 0:function handleButtonClick(a){var c;return f&&z?void A(a):void("function"==typeof b?b():null!==(c=y[0])&&void 0!==c&&c.onClick&&y[0].onClick())},disabled:k},d||r("saveAs"))),z&&React.createElement(StyledMenu,{className:"".concat(l,"-menu"),anchorEl:v,onClose:B,open:!0,style:m,position:i},g.map(function(a){return a&&React.createElement(StyledMenuItem,{className:"".concat(l,"-menu-item"),key:a.key,active:a.isActive,onClick:function(){return C(a.onClick)},size:x},a.icon&&React.createElement(StyledMenuIcon,{size:x},"string"==typeof a.icon?React.createElement("span",{dangerouslySetInnerHTML:{__html:a.icon}}):React.createElement(a.icon,null)),React.createElement(MenuItemLabel,null,a.label))})))};ButtonWithMenu.defaultProps={title:"",label:"",color:"primary",menuFromBtn:!1,noMargin:!1,menuPosition:"bottom",onClick:void 0,disabled:!1,menuStyle:void 0,wrapperStyle:void 0,buttonRef:void 0};export default ButtonWithMenu;