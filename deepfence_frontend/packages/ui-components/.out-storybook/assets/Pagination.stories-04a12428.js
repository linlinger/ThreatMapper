import{r as q,R as v}from"./index-f1f749bf.js";import{P as i}from"./Pagination-bef9afc0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./index.esm-22bc1784.js";import"./iconBase-cb3f8daa.js";import"./twmerge-41391f84.js";import"./default-config-640333b7.js";const Q={title:"Components/Pagination",component:i,argTypes:{onPageChange:{action:"onPageChange"}}},a={args:{currentPage:1,onPageChange:e=>e+"",totalRows:30}},r={args:{currentPage:5,onPageChange:e=>e+"",totalRows:90}},t={args:{currentPage:2,onPageChange:e=>e+"",totalRows:100}},n={args:{currentPage:15,onPageChange:e=>e+"",totalRows:200,approximatePagination:!0}},o={args:{currentPage:15,onPageChange:e=>e+"",totalRows:200}},s={args:{currentPage:100,onPageChange:e=>e+"",totalRows:2e5,pageSize:100}},g=()=>{const[e,u]=q.useState(1);return v.createElement(i,{currentPage:e,onPageChange:p=>u(p),siblingCount:2,pageSize:10,totalRows:100})},c=()=>{const[e,u]=q.useState(1);return v.createElement(i,{currentPage:e,onPageChange:p=>u(p),siblingCount:2,pageSize:10,totalRows:100})};var P,m,l;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 30
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var C,d,h;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 90
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var R,S,w;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 100
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,b,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    currentPage: 15,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 200,
    approximatePagination: true
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,z,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 15,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 200
  }
}`,...(E=(z=o.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,T,_;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    currentPage: 100,
    onPageChange: (page: number) => {
      return page + '';
    },
    totalRows: 200000,
    pageSize: 100
  }
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,N,y;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination currentPage={currentPage} onPageChange={page => setCurrentPage(page)} siblingCount={2} pageSize={10} totalRows={100} />;
}`,...(y=(N=g.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var O,j,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination currentPage={currentPage} onPageChange={page => setCurrentPage(page)} siblingCount={2} pageSize={10} totalRows={100} />;
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const U=["NoDots","LeftDots","RightDots","ApproximatePagination","LeftRightDots","TwoDigits","ExactPageData","SinglePageData"];export{n as ApproximatePagination,g as ExactPageData,r as LeftDots,o as LeftRightDots,a as NoDots,t as RightDots,c as SinglePageData,s as TwoDigits,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Pagination.stories-04a12428.js.map
