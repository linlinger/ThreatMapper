import{r as F,R as e}from"./index-f1f749bf.js";import{b as M}from"./index.esm-22bc1784.js";import{B as g,a as w}from"./Button-2b4f743d.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconBase-cb3f8daa.js";import"./index-74f03c09.js";import"./index.esm-6031b14f.js";/* empty css              */import"./Accordion-88030c27.js";import"./index.module-5f5d9e91.js";import"./extends-98964cd2.js";import"./index-96c5f47c.js";import"./index.module-6eb1676d.js";import"./index.module-fc0a1cc7.js";import"./index.module-21d9e4b4.js";import"./Typography-890c1ea0.js";import"./tw-merge-44e5a3a6.js";import"./default-config-640333b7.js";import"./Avatar-516c8ee2.js";import"./index.module-76792500.js";import"./Breadcrumb-818b92da.js";import"./twmerge-41391f84.js";import"./Card-4dc868c2.js";import"./Checkbox-24840782.js";import"./index.module-480dfb46.js";import"./isNil-c75b1b34.js";import"./index.module-2a91f5b4.js";import"./TextInputArea-e84ea96a.js";import"./Pagination-bef9afc0.js";import"./Radio-c36abef7.js";import"./Select-4f028970.js";import"./CircleSpinner-f66792ac.js";import"./Tabs-d0b24e54.js";const xe={title:"Components/Badge",component:g,argTypes:{onClick:{action:"onClick"}}},l={args:{label:"Badge sm"}},m={args:{label:"Badge sm",color:"primary"}},i={args:{label:"Badge sm",color:"success"}},c={args:{label:"Badge sm",color:"danger"}},n={args:{label:"Badge sm",color:"danger",size:"lg"}},d=()=>{const r=[{id:"default",value:"default",label:"Default"},{id:"primary",value:"primary",label:"Primary"},{id:"success",value:"success",label:"Success"},{id:"danger",value:"danger",label:"Danger"}],[a,s]=F.useState(r);return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex gap-2"},a.map(({id:p,label:o,value:t},W)=>e.createElement(g,{key:W,label:o,id:p,value:t,color:t,size:"lg",icon:e.createElement(M,null),isRemove:!0,onRemove:O=>{const j=a.findIndex(q=>q.id===O.id);a.splice(j,1),s([...a])}}))),e.createElement("div",{className:"mt-5"},e.createElement(w,{size:"sm",outline:!0,onClick:()=>s(r)},"Reset remove")))},u=()=>{const r=[{id:"default",value:"default",label:"Default"}],[a]=F.useState(r);return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex gap-2"},a.map(({id:s,label:p,value:o},t)=>e.createElement(g,{key:t,label:p,id:s,value:o,color:o,size:"lg",icon:e.createElement(M,null),isRemove:!0,className:"bg-lime-700 text-teal-300"}))))};var b,v,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Badge sm'
  }
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,B,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Badge sm',
    color: 'primary'
  }
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var S,x,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Badge sm',
    color: 'success'
  }
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var E,R,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Badge sm',
    color: 'danger'
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var z,N,I;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Badge sm',
    color: 'danger',
    size: 'lg'
  }
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,P,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const dummy = [{
    id: 'default',
    value: 'default',
    label: 'Default'
  }, {
    id: 'primary',
    value: 'primary',
    label: 'Primary'
  }, {
    id: 'success',
    value: 'success',
    label: 'Success'
  }, {
    id: 'danger',
    value: 'danger',
    label: 'Danger'
  }];
  const [badges, setBadges] = useState(dummy);
  return <>
      <div className="flex gap-2">
        {badges.map(({
        id,
        label,
        value
      }, i) => <Badge key={i} label={label} id={id} value={value} color={(value as ColorType)} size="lg" icon={<HiInformationCircle />} isRemove={true} onRemove={badge => {
        const index = badges.findIndex(_badge => _badge.id === badge.id);
        badges.splice(index, 1);
        setBadges([...badges]);
      }} />)}
      </div>
      <div className="mt-5">
        <Button size="sm" outline onClick={() => setBadges(dummy)}>
          Reset remove
        </Button>
      </div>
    </>;
}`,...(H=(P=d.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var T,h,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const dummy = [{
    id: 'default',
    value: 'default',
    label: 'Default'
  }];
  const [badges] = useState(dummy);
  return <>
      <div className="flex gap-2">
        {badges.map(({
        id,
        label,
        value
      }, i) => <Badge key={i} label={label} id={id} value={value} color={(value as ColorType)} size="lg" icon={<HiInformationCircle />} isRemove={true} className={'bg-lime-700 text-teal-300'} />)}
      </div>
    </>;
}`,...(A=(h=u.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const De=["Default","Primary","Success","Danger","MediumDanger","WithCloseAction","CustomColor"];export{u as CustomColor,c as Danger,l as Default,n as MediumDanger,m as Primary,i as Success,d as WithCloseAction,De as __namedExportsOrder,xe as default};
//# sourceMappingURL=Badge.stories-64ab2aa5.js.map
