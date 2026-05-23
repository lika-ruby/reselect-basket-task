"use strict";(globalThis.webpackChunkreselect_basket_task=globalThis.webpackChunkreselect_basket_task||[]).push([[67],{67(i,n,e){e.r(n),e.d(n,{default:()=>m});var r=e(668),o=e(3),s=e(844),c=e(820);const d=c.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,t=c.Ay.h2`
  margin: 0;
  color: #1565c0;
  font-size: 32px;
`,l=c.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`,a=c.Ay.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #dbeafe;
`,p=c.Ay.h3`
  margin: 0;
  color: #1565c0;
  font-size: 24px;
`,x=c.Ay.p`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
`,h=c.Ay.p`
  margin: 0;
  color: #475569;
  line-height: 1.5;
`,u=c.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`,g=c.Ay.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`,f=c.Ay.button`
  padding: 8px 14px;
  border: none;
  border-radius: 10px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #1259a7;
  }
`;var b=e(579);const k=()=>{const i=(0,o.wA)(),n=(0,o.d4)(r.H);return(0,b.jsxs)(d,{children:[(0,b.jsx)(t,{children:"Basket"}),(0,b.jsx)(l,{children:n.map(n=>(0,b.jsxs)(a,{children:[(0,b.jsx)(p,{children:n.name}),(0,b.jsx)(x,{children:n.price}),(0,b.jsx)(h,{children:n.description}),(0,b.jsxs)(u,{children:[(0,b.jsx)(f,{onClick:()=>i((0,s.V4)(n.id)),children:"-"}),(0,b.jsx)(g,{children:n.count}),(0,b.jsx)(f,{onClick:()=>i((0,s.H4)(n.id)),children:"+"}),(0,b.jsx)(f,{onClick:()=>i((0,s.h3)(n.id)),children:"x"})]})]},n.id))})]})},m=()=>(0,b.jsx)("div",{children:(0,b.jsx)(k,{})})},668(i,n,e){e.d(n,{H:()=>o,V:()=>r});const r=i=>i.products.products,o=i=>{const n=i.products.basketProducts;return i.products.products.map(i=>{const e=n.find(n=>n.id===i.id);return e?{...i,count:e.count}:null}).filter(Boolean)}}}]);
//# sourceMappingURL=67.f387b780.chunk.js.map