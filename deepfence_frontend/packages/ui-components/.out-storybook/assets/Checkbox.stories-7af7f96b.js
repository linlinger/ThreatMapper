import{r as x,R as u}from"./index-f1f749bf.js";import{C as s}from"./Checkbox-24840782.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.module-5f5d9e91.js";import"./extends-98964cd2.js";import"./index-96c5f47c.js";import"./index.module-6eb1676d.js";import"./index.module-fc0a1cc7.js";import"./index.module-480dfb46.js";import"./index.module-76792500.js";import"./index-74f03c09.js";import"./isNil-c75b1b34.js";const w={title:"Components/Checkbox",component:s},e={args:{label:"Default checkbox"}},g=t=>{const[a,c]=x.useState(!1);return u.createElement(s,{...t,checked:a,onCheckedChange:n=>{c(n)}})},r={render:g,args:{label:"Controlled checkbox"}},f=t=>{const[a,c]=x.useState("indeterminate");return u.createElement(s,{...t,name:"isGoodCheckbox",checked:a,onCheckedChange:n=>{c(n)}})},o={render:f,args:{label:"Indeterminate checkbox"}};var m,l,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Default checkbox'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,i,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ControlledCheckboxTemplate,
  args: {
    label: 'Controlled checkbox'
  }
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var C,b,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: IndeterminateCheckboxTemplate,
  args: {
    label: 'Indeterminate checkbox'
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const y=["Default","ControlledCheckbox","IndeterminateCheckbox"];export{r as ControlledCheckbox,e as Default,o as IndeterminateCheckbox,y as __namedExportsOrder,w as default};
//# sourceMappingURL=Checkbox.stories-7af7f96b.js.map
