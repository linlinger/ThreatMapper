import{r as l,R as e}from"./index-f1f749bf.js";import{S as r,a as c,e as m,f as u,g as p,h as R}from"./Button-2b4f743d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./index.esm-6031b14f.js";/* empty css              */import"./Accordion-88030c27.js";import"./index.module-5f5d9e91.js";import"./extends-98964cd2.js";import"./index-96c5f47c.js";import"./index.module-6eb1676d.js";import"./index.module-fc0a1cc7.js";import"./index.module-21d9e4b4.js";import"./index.esm-22bc1784.js";import"./iconBase-cb3f8daa.js";import"./Typography-890c1ea0.js";import"./tw-merge-44e5a3a6.js";import"./default-config-640333b7.js";import"./Avatar-516c8ee2.js";import"./index.module-76792500.js";import"./Breadcrumb-818b92da.js";import"./twmerge-41391f84.js";import"./Card-4dc868c2.js";import"./Checkbox-24840782.js";import"./index.module-480dfb46.js";import"./isNil-c75b1b34.js";import"./index.module-2a91f5b4.js";import"./TextInputArea-e84ea96a.js";import"./Pagination-bef9afc0.js";import"./Radio-c36abef7.js";import"./Select-4f028970.js";import"./CircleSpinner-f66792ac.js";import"./Tabs-d0b24e54.js";const ae={title:"Components/SlidingModal",component:r,argTypes:{onOpenChange:{action:"onOpenChange"}}},a=()=>{const[o,n]=l.useState(!1),t=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{color:"default",onClick:()=>n(!0),ref:t},"Click to open"),e.createElement(r,{open:o,onOpenChange:()=>n(!1),elementToFocusOnCloseRef:t},e.createElement(m,null),e.createElement(u,null,e.createElement("div",null,"Modal Header")),e.createElement(p,null,e.createElement("div",{className:"dark:text-white"},"This is a content"))))},i=()=>{const[o,n]=l.useState(!1),t=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{color:"default",onClick:()=>n(!0),ref:t},"Click to open"),e.createElement(r,{open:o,onOpenChange:()=>n(!1),elementToFocusOnCloseRef:t,direction:"left"},e.createElement(m,null),e.createElement(u,null,e.createElement("div",null,"Modal Title")),e.createElement(p,null,e.createElement("div",{className:"dark:text-white"},"This is a content")),e.createElement(R,null,e.createElement("div",null,"Modal Footer"))))},s=()=>{const[o,n]=l.useState(!1),t=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{color:"default",onClick:()=>n(!0),ref:t},"Click to open"),e.createElement(r,{open:o,onOpenChange:()=>n(!1),elementToFocusOnCloseRef:t},e.createElement(p,null,e.createElement("div",{className:"dark:text-white"},"This is a content"))))},d=()=>{const[o,n]=l.useState(!1);return e.createElement(e.Fragment,null,e.createElement(c,{color:"default",onClick:()=>n(!0)},"Click to open"),e.createElement(r,{open:o,onOpenChange:()=>n(!1)},e.createElement(m,null),e.createElement(u,null,"Modal Title"),e.createElement(p,null,Array.from(Array(300).keys()).map(t=>e.createElement("p",{key:t},"This is a content"))),e.createElement(R,null,"Modal Footer")))};var g,f,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return <>
      <Button color="default" onClick={() => setOpen(true)} ref={ref}>
        Click to open
      </Button>
      <SlidingModal open={open} onOpenChange={() => setOpen(false)} elementToFocusOnCloseRef={ref}>
        <SlidingModalCloseButton />
        <SlidingModalHeader>
          <div>Modal Header</div>
        </SlidingModalHeader>
        <SlidingModalContent>
          <div className="dark:text-white">This is a content</div>
        </SlidingModalContent>
      </SlidingModal>
    </>;
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,M,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return <>
      <Button color="default" onClick={() => setOpen(true)} ref={ref}>
        Click to open
      </Button>
      <SlidingModal open={open} onOpenChange={() => setOpen(false)} elementToFocusOnCloseRef={ref} direction="left">
        <SlidingModalCloseButton />

        <SlidingModalHeader>
          <div>Modal Title</div>
        </SlidingModalHeader>
        <SlidingModalContent>
          <div className="dark:text-white">This is a content</div>
        </SlidingModalContent>
        <SlidingModalFooter>
          <div>Modal Footer</div>
        </SlidingModalFooter>
      </SlidingModal>
    </>;
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var O,h,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return <>
      <Button color="default" onClick={() => setOpen(true)} ref={ref}>
        Click to open
      </Button>
      <SlidingModal open={open} onOpenChange={() => setOpen(false)} elementToFocusOnCloseRef={ref}>
        <SlidingModalContent>
          <div className="dark:text-white">This is a content</div>
        </SlidingModalContent>
      </SlidingModal>
    </>;
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var T,F,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button color="default" onClick={() => setOpen(true)}>
        Click to open
      </Button>
      <SlidingModal open={open} onOpenChange={() => setOpen(false)}>
        <SlidingModalCloseButton />
        <SlidingModalHeader>Modal Title</SlidingModalHeader>
        <SlidingModalContent>
          {Array.from(Array(300).keys()).map(k => <p key={k}>This is a content</p>)}
        </SlidingModalContent>
        <SlidingModalFooter>Modal Footer</SlidingModalFooter>
      </SlidingModal>
    </>;
}`,...(v=(F=d.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const ie=["ModalWithTrigger","TriggerFromLeft","WithoutTitle","LongContent"];export{d as LongContent,a as ModalWithTrigger,i as TriggerFromLeft,s as WithoutTitle,ie as __namedExportsOrder,ae as default};
//# sourceMappingURL=SlidingModal.stories-1e13ae0c.js.map
