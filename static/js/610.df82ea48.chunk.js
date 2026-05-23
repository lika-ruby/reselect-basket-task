"use strict";(globalThis.webpackChunkreselect_basket_task=globalThis.webpackChunkreselect_basket_task||[]).push([[610],{610(r,e,o){o.r(e),o.d(e,{default:()=>g});var d=o(668),t=o(3),n=o(43),s=o(517),c=o(844),i=o(820);const l=i.Ay.li`
  border: 2px solid #1976d2;
  border-radius: 12px;
  padding: 15px;
  background-color: white;
  width: 400px;
`,a=i.Ay.p`
  font-size: 20px;
  font-weight: bold;
  color: #0d47a1;
`,p=i.Ay.p`
  color: #333;
`,u=i.Ay.button`
  margin-top: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0d47a1;
  }
`;var x=o(579);const b=r=>{let{id:e,name:o,price:n,description:s,image:i}=r;const b=(0,t.wA)(),h=(0,t.d4)(d.H).includes(e);return(0,x.jsxs)(l,{children:[(0,x.jsx)(a,{children:o}),(0,x.jsx)(p,{children:n}),(0,x.jsx)(p,{children:s}),(0,x.jsx)(u,{onClick:()=>{h||b((0,c.H4)(e))},children:"Add to basket"})]})},h=i.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  list-style: none;
  padding: 0;
`,k=()=>{const r=(0,t.wA)(),e=(0,t.d4)(d.V);return(0,n.useEffect)(()=>{r((0,s.j)())},[r]),(0,x.jsx)(h,{children:e.map(r=>(0,x.jsx)(b,{...r},r.id))})},g=()=>(0,x.jsx)("div",{children:(0,x.jsx)(k,{})})},668(r,e,o){o.d(e,{H:()=>t,V:()=>d});const d=r=>r.products.products,t=r=>{const e=r.products.basketProducts;return r.products.products.map(r=>{const o=e.find(e=>e.id===r.id);return o?{...r,count:o.count}:null}).filter(Boolean)}}}]);
//# sourceMappingURL=610.df82ea48.chunk.js.map