import{r as n,R as e}from"./index-f1f749bf.js";import{M as r,a as s}from"./Button-2b4f743d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./index.esm-6031b14f.js";/* empty css              */import"./Accordion-88030c27.js";import"./index.module-5f5d9e91.js";import"./extends-98964cd2.js";import"./index-96c5f47c.js";import"./index.module-6eb1676d.js";import"./index.module-fc0a1cc7.js";import"./index.module-21d9e4b4.js";import"./index.esm-22bc1784.js";import"./iconBase-cb3f8daa.js";import"./Typography-890c1ea0.js";import"./tw-merge-44e5a3a6.js";import"./default-config-640333b7.js";import"./Avatar-516c8ee2.js";import"./index.module-76792500.js";import"./Breadcrumb-818b92da.js";import"./twmerge-41391f84.js";import"./Card-4dc868c2.js";import"./Checkbox-24840782.js";import"./index.module-480dfb46.js";import"./isNil-c75b1b34.js";import"./index.module-2a91f5b4.js";import"./TextInputArea-e84ea96a.js";import"./Pagination-bef9afc0.js";import"./Radio-c36abef7.js";import"./Select-4f028970.js";import"./CircleSpinner-f66792ac.js";import"./Tabs-d0b24e54.js";const fe={title:"Components/Modal",component:r,argTypes:{onOpenChange:{action:"onOpenChange"}}},l=()=>{const[,o]=n.useState(!1);return e.createElement(r,{defaultOpen:!0,onOpenChange:()=>o(!1)},"This is a content")},i=()=>{const[o,t]=n.useState(!1),a=n.useRef(null);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0),ref:a},"Click to open"),e.createElement(r,{title:"Modal Title",footer:e.createElement("div",{className:""},"This is Footer"),open:o,onOpenChange:()=>t(!1),elementToFocusOnCloseRef:a},e.createElement("div",{className:"dark:text-white"},"This is a content")))},c=()=>{const[o,t]=n.useState(!1),a=n.useRef(null);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0),ref:a},"Click to open"),e.createElement(r,{footer:e.createElement("div",{className:""},"This is Footer"),open:o,onOpenChange:()=>t(!1),elementToFocusOnCloseRef:a},e.createElement("div",{className:"dark:text-white"},"This is a content")))},p=()=>{const[o,t]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0)},"Click to open"),e.createElement(r,{title:"Modal Title",open:o,onOpenChange:()=>t(!1)},e.createElement("div",{className:"dark:text-white"},"This is a content")))},m=()=>{const[o,t]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0)},"Click to open"),e.createElement(r,{open:o,onOpenChange:()=>t(!1)},e.createElement("div",{className:"dark:text-white"},"This is a content")))},d=()=>{const[o,t]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0)},"Click to open"),e.createElement(r,{title:"Modal Title",open:o,footer:e.createElement("div",{className:""},"This is Footer"),onOpenChange:()=>t(!1)},e.createElement("div",{className:"dark:text-white"},Array.from(Array(20).keys()).map(a=>e.createElement("p",{key:a},"This is a content")))))},u=()=>{const[o,t]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{color:"default",onClick:()=>t(!0)},"Click to open"),e.createElement(r,{title:"Modal Title",open:o,footer:e.createElement("div",{className:""},"This is Footer"),onOpenChange:()=>t(!1),width:"w-full"},e.createElement("div",{className:"dark:text-white"},Array.from(Array(10).keys()).map(a=>e.createElement("p",{className:"text-center",key:a},"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout")))))};var f,h,O;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  return <Modal defaultOpen={true} onOpenChange={() => setOpen(false)}>
      This is a content
    </Modal>;
}`,...(O=(h=l.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var k,C,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return <>
      <Button color="default" onClick={() => setOpen(true)} ref={ref}>
        Click to open
      </Button>
      <Modal title="Modal Title" footer={<div className={''}>This is Footer</div>} open={open} onOpenChange={() => setOpen(false)} elementToFocusOnCloseRef={ref}>
        <div className="dark:text-white">This is a content</div>
      </Modal>
    </>;
}`,...(g=(C=i.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,E,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return <>
      <Button color="default" onClick={() => setOpen(true)} ref={ref}>
        Click to open
      </Button>
      <Modal footer={<div className={''}>This is Footer</div>} open={open} onOpenChange={() => setOpen(false)} elementToFocusOnCloseRef={ref}>
        <div className="dark:text-white">This is a content</div>
      </Modal>
    </>;
}`,...(v=(E=c.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var M,F,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button color="default" onClick={() => setOpen(true)}>
        Click to open
      </Button>
      <Modal title="Modal Title" open={open} onOpenChange={() => setOpen(false)}>
        <div className="dark:text-white">This is a content</div>
      </Modal>
    </>;
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var y,S,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button color="default" onClick={() => setOpen(true)}>
        Click to open
      </Button>
      <Modal open={open} onOpenChange={() => setOpen(false)}>
        <div className="dark:text-white">This is a content</div>
      </Modal>
    </>;
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,B,R;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button color="default" onClick={() => setOpen(true)}>
        Click to open
      </Button>
      <Modal title="Modal Title" open={open} footer={<div className={''}>This is Footer</div>} onOpenChange={() => setOpen(false)}>
        <div className="dark:text-white">
          {Array.from(Array(20).keys()).map(k => <p key={k}>This is a content</p>)}
        </div>
      </Modal>
    </>;
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var W,b,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button color="default" onClick={() => setOpen(true)}>
        Click to open
      </Button>
      <Modal title="Modal Title" open={open} footer={<div className={''}>This is Footer</div>} onOpenChange={() => setOpen(false)} width="w-full">
        <div className="dark:text-white">
          {Array.from(Array(10).keys()).map(k => <p className="text-center" key={k}>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout
            </p>)}
        </div>
      </Modal>
    </>;
}`,...(A=(b=u.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const he=["DefaultOpenModal","ModalWithTrigger","WithoutTitle","WithoutFooter","JustContentWithTrigger","LongContent","FullWidth"];export{l as DefaultOpenModal,u as FullWidth,m as JustContentWithTrigger,d as LongContent,i as ModalWithTrigger,p as WithoutFooter,c as WithoutTitle,he as __namedExportsOrder,fe as default};
//# sourceMappingURL=Modal.stories-153e4da8.js.map
