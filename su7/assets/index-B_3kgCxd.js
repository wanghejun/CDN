import{S as _,A as u,B as x,M as g,a as l,b as L,P as M,c as v,d as B,W as H,O as b}from"./OrbitControls-B9pferb2.js";import{r as k,o as y,a as p,c as E,b as P}from"./index-CmDgAfmp.js";const W={__name:"learnThree",setup(m){const o=k(null);function r(){const e=new _,i=new u(150);e.add(i);const c=new x(100,100,100),w=new g({color:16711680,transparent:!0,opacity:0}),s=new l(c,w);s.position.set(0,10,0),e.add(s);const f=new L({}),d=new l(c,f);d.position.set(10,10,0),e.add(d);const a=new M(16777215,5e4);a.position.set(100,100,100),e.add(a);const h=new v(a,10);e.add(h);const n=new B(75,window.innerWidth/window.innerHeight,1,3e3);n.position.set(200,200,200),n.lookAt(s.position);const t=new H;t.setSize(window.innerWidth,window.innerHeight),t.render(e,n),new b(n,t.domElement).addEventListener("change",function(){t.render(e,n)}),o.value.appendChild(t.domElement)}return y(()=>{r()}),(e,i)=>(p(),E("div",{ref_key:"canvasDom",ref:o},null,512))}},D={__name:"index",setup(m){return(o,r)=>(p(),P(W))}};export{D as default};
