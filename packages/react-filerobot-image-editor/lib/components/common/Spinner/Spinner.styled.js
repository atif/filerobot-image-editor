import{Loading}from"@scaleflex/icons";import styled,{keyframes}from"styled-components";import{Color as PC}from"@scaleflex/ui/utils/types/palette";var spin=keyframes(["to{transform:rotate(360deg);}"]),StyledSpinnerWrapper=styled.div.withConfig({componentId:"sc-m42fbk-0"})(["background:",";display:flex;align-items:center;justify-content:center;position:absolute;z-index:11111;top:0;bottom:0;right:0;left:0;flex-direction:column;user-select:none;"],function(a){var b=a.theme.palette;return b[PC.BackgroundStateless]}),StyledSpinner=styled(Loading).withConfig({componentId:"sc-m42fbk-1"})(["animation:"," 1.2s infinite;"],spin);export{StyledSpinnerWrapper,StyledSpinner};