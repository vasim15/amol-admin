import{G as u,r as s,A as x,j as n,L as v,a as e,B as z,b as M,u as L,N as p,M as B,S,c as D,d as E,e as H,f as A,g as O,h as $,i as w,F as R,k as j,l as q,O as F}from"./index-3a23c635.js";function Q(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"}}]})(t)}const U=()=>{const[t,i]=s.useState(!1);s.useContext(x);const d=s.useRef(null),o=s.useRef(null);return s.useEffect(()=>{const a=({target:c})=>{o.current&&(!t||o.current.contains(c)||d.current.contains(c)||i(!1))};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)}),s.useEffect(()=>{const a=({keyCode:c})=>{!t||c!==27||i(!1)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),s.useContext(x),n("div",{className:"relative",children:[n(v,{ref:d,onClick:()=>i(!t),className:"flex items-center gap-4",to:"#",children:[n("span",{className:"hidden text-right lg:block",children:[e("span",{className:"block text-sm font-medium text-black dark:text-white",children:"Amol Das"}),e("span",{className:"block text-xs lowercase",children:"amoldas@gmail.com"})]}),e("span",{className:"h-12 w-12 rounded-full",children:e("div",{className:" relative inline-flex h-10 w-10  items-center justify-center overflow-hidden rounded-full bg-danger p-1 ",children:e("span",{className:"font-medium text-white",children:"A"})})}),e("span",{className:`${t?"rotate-180":""}`,children:e(Q,{size:32})})]}),n("div",{ref:o,onFocus:()=>i(!0),onBlur:()=>i(!1),className:`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${t===!0?"block":"hidden"}`,children:[e("ul",{className:"flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark",children:e("li",{children:n(v,{to:"/change-password",className:"flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",children:[e(z,{size:22}),"Change Password"]})})}),n("button",{className:"flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",children:[e(M,{size:22}),"Log Out"]})]})]})},V=t=>e("header",{className:"sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",children:n("div",{className:"flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11",children:[e("div",{className:"flex items-center gap-2 sm:gap-4 lg:hidden",children:e("button",{"aria-controls":"sidebar",onClick:i=>{i.stopPropagation(),t.setSidebarOpen(!t.sidebarOpen)},className:`
            z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden`,children:n("span",{className:"relative block h-5.5 w-5.5 cursor-pointer",children:[n("span",{className:"du-block absolute right-0 h-full w-full",children:[e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!t.sidebarOpen&&"!w-full delay-300"}`}),e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!t.sidebarOpen&&"delay-400 !w-full"}`}),e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!t.sidebarOpen&&"!w-full delay-500"}`})]}),n("span",{className:"absolute right-0 h-full w-full rotate-45",children:[e("span",{className:`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!t.sidebarOpen&&"!h-0 !delay-[0]"}`}),e("span",{className:`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!t.sidebarOpen&&"!h-0 !delay-200"}`})]})]})})}),e("div",{className:"hidden sm:block",children:e("form",{onSubmit:i=>{i.preventDefault()},children:n("div",{className:"relative",children:[e("button",{className:"absolute top-1/2 left-0 -translate-y-1/2",children:n("svg",{className:"fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",fill:""}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",fill:""})]})}),e("input",{type:"text",placeholder:"Type to search...",className:"w-full bg-transparent pr-4 pl-9 focus:outline-none"})]})})}),n("div",{className:"flex items-center gap-3 2xsm:gap-7",children:[e("ul",{className:"flex items-center gap-2 2xsm:gap-4"}),e(U,{})]})]})});function T(t){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z"}}]})(t)}function Z(t){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"}}]})(t)}function G(t){return u({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(t)}function I(t){return u({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(t)}const P=({children:t,activeCondition:i})=>{const[d,o]=s.useState(i);return e("li",{children:t(()=>{o(!d)},d)})};function K(t){return u({tag:"svg",attr:{version:"1.1",viewBox:"0 0 18 16"},child:[{tag:"path",attr:{d:"M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"}},{tag:"path",attr:{d:"M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"}},{tag:"path",attr:{d:"M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"}},{tag:"path",attr:{d:"M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"}}]})(t)}function J(t){return u({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"}}]})(t)}const W=({sidebarOpen:t,setSidebarOpen:i})=>{const d=L(),{pathname:o}=d;console.log();const a=s.useRef(null),c=s.useRef(null),k=localStorage.getItem("sidebar-expanded"),[h,y]=s.useState(k===null?!1:k==="true");return s.useEffect(()=>{const l=({target:r})=>{!c.current||!a.current||!t||c.current.contains(r)||a.current.contains(r)||i(!1)};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)}),s.useEffect(()=>{const l=({keyCode:r})=>{!t||r!==27||i(!1)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)}),s.useEffect(()=>{var l,r;localStorage.setItem("sidebar-expanded",h.toString()),h?(l=document.querySelector("body"))==null||l.classList.add("sidebar-expanded"):(r=document.querySelector("body"))==null||r.classList.remove("sidebar-expanded")},[h]),n("aside",{ref:c,className:`absolute left-0 top-0 z-[10] flex h-screen w-72.5 flex-col overflow-y-hidden
bg-white
       duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${t?"translate-x-0":"-translate-x-full"}`,children:[n("div",{className:"flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5",children:[e(p,{to:"/",children:e("h1",{className:"my-0  text-3xl font-bold",children:"Amol.M.Das"})}),e("button",{ref:a,onClick:()=>i(!t),"aria-controls":"sidebar","aria-expanded":t,className:"block lg:hidden",children:e("svg",{className:"fill-current",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",fill:""})})})]}),e("div",{className:"no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",children:e("nav",{className:"mt-5 py-4 px-4 lg:mt-9 lg:px-6",children:n("div",{children:[e("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"MENU"}),e("ul",{className:"mb-6 flex flex-col gap-1.5",children:[{link:"/",title:"Dashboard",icon:e(B,{})},{link:"/users",title:"Users (Done)",icon:e(I,{}),subMenu:[{link:"/users",title:"Users List"},{link:"/users/institutes",title:"Institutes List"}]},{link:"/book",title:"Book (Done)",icon:e(K,{}),subMenu:[{link:"/book",title:"Books"},{link:"/book/orders",title:"Books Order"}]},{link:"/course",title:"Courses",icon:e(G,{}),subMenu:[{link:"/course",title:"Courses"},{link:"/course/enroll",title:"Enroll Courses"}]},{link:"/counseling",title:"Counseling",icon:e(S,{}),subMenu:[{link:"/counseling",title:"Counselings"},{link:"/counseling/bookings",title:"Booking Counseling"}]},{link:"/questions",title:"Questions",icon:e(Z,{}),subMenu:[{link:"/questions",title:"Questions"}]},{link:"/contest ",title:"Contest (Done)",icon:e(T,{})},{link:"/crp",title:"CRP",icon:e(D,{})},{link:"/transaction",title:"Transaction",icon:e(E,{})},{link:"/questions",title:"Questions Bank",icon:e(J,{})},{link:"/quizzes",title:"Quizzes",icon:e(H,{})},{link:"/coupon",title:"Coupons (Done)",icon:e(A,{})},{link:"/testimonial",title:"Testimonial (Done)",icon:e(O,{})},{link:"/support",title:"Support enquiry",icon:e($,{}),subMenu:[{link:"/support",title:"Support List"},{link:"/support/key-note",title:"Keynote List"}]},{link:"/policy",title:"Policy (Done)",icon:e(w,{})},{link:"/terms",title:"Terms & Conditions (Done)",icon:e(w,{})}].map((l,r)=>{var g;return n("li",{children:[!((g=l==null?void 0:l.subMenu)!=null&&g.length)&&n(p,{to:l.link,className:({isActive:f})=>`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:text-white ${f&&"bg-primary text-white"}`,children:[l.icon,l.title]}),l.subMenu&&e(P,{activeCondition:o.includes(l.link),children:(f,b)=>n(R,{children:[n(p,{to:"#",className:()=>`group relative flex items-center justify-between gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:text-white ${o.includes(l.link)&&"bg-primary text-white"}`,onClick:m=>{m.preventDefault(),h?f():y(!0)},children:[n("div",{className:"flex items-center justify-between gap-3",children:[l.icon,l.title]}),b?e(j,{size:12}):e(q,{size:12})]}),console.log(b),e("div",{className:`translate transform overflow-hidden ${!b&&"hidden"}`,children:e("ul",{className:" mt-2 space-y-1",children:l.subMenu.map((m,N)=>e("li",{children:e(p,{end:!0,to:m.link,className:({isActive:C})=>`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:text-white ${C?"font-medium text-primary":""}`,children:m.title})},N))})})]})})]},r)})})]})})})]})},Y=()=>{const[t,i]=s.useState(!1);return e("div",{className:"dark:bg-boxdark-2 dark:text-bodydark",children:n("div",{className:"flex h-screen overflow-hidden",children:[e(W,{sidebarOpen:t,setSidebarOpen:i}),n("div",{className:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",children:[e(V,{sidebarOpen:t,setSidebarOpen:i}),e("main",{children:e("div",{className:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",children:e(F,{})})})]})]})})};export{Y as default};
