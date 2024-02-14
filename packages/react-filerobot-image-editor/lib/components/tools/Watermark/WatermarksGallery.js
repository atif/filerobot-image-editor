import React,{useMemo}from"react";import{useStore}from"../../../hooks";import{TOOLS_IDS,WATERMARK_ANNOTATION_ID}from"../../../utils/constants";import Carousel from"../../common/Carousel";import{SET_FEEDBACK}from"../../../actions";import{StyledWatermarkGalleryItem}from"./Watermark.styled";var WatermarksGallery=function(a){var b=a.addImgWatermark,c=a.loadAndSetWatermarkImg,d=a.style,e=useStore(),f=e.config,g=e.annotations,h=e.dispatch,i=e.t,j=useMemo(function(){var a;return null===(a=(g[WATERMARK_ANNOTATION_ID]||{}).image)||void 0===a?void 0:a.src},[g[WATERMARK_ANNOTATION_ID]]),k=function(a){var c=a.currentTarget.children[0];if(c.complete){if(!c.naturalWidth)return void h({type:SET_FEEDBACK,payload:{feedback:{message:i("mutualizedFailedToLoadImg"),duration:2e3}}});b(c)}},l=f[TOOLS_IDS.WATERMARK]||{},m=l.gallery,n=void 0===m?[]:m;return 0===n.length?null:React.createElement(Carousel,{className:"FIE_watermark-gallery",style:d},n.map(function(a){var b=(null===a||void 0===a?void 0:a.url)||a,d=(null===a||void 0===a?void 0:a.previewUrl)||b;return React.createElement(StyledWatermarkGalleryItem,{className:"FIE_watermark-selected-item",onClick:function onClick(a){return b===d?k(a):c(b)},key:b,"aria-selected":b===j},React.createElement("img",{src:d,alt:"Failed to load.",crossOrigin:"Anonymous",draggable:!1}))}))};WatermarksGallery.defaultProps={style:void 0};export default WatermarksGallery;