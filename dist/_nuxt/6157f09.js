(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(t,e,n){"use strict";n.r(e);var l={props:["title","subtitle"]},o=n(17),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.subtitle?n("p",{staticClass:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);n(28),n(15);var l={data:function(){return{loading:!1,success:!1,errored:!1,name:"",email:"",phone:"",message:""}},methods:{sendMessage:function(form){var t=this;this.loading=!0,this.$axios.post("/messages",{name:this.name,email:this.email,phone:this.phone,message:this.message}).then((function(e){t.success=!0,t.errored=!1})).catch((function(e){t.errored=!0})).finally((function(){t.loading=!1}))}},computed:{submitText:function(){this.loading}}},o=n(17),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.success?n("div",{staticClass:"rounded bg-indigo-500 text-white text-lg p-4"},[t._v("\n    Great! Your message has been sent successfully. I will try to respond\n    quickly.\n  ")]):n("form",{staticClass:"grid grid-cols-1 gap-y-6",on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[t.errored?n("div",{staticClass:"rounded bg-red-200 text-lg p-4"},[t._v("\n      Bummer, Something went wrong. Did you fill out all of the fields?\n    ")]):t._e(),t._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"full_name"}},[t._v("Full name*")]),t._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"name",id:"full_name",placeholder:"Full name*"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email*")]),t._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"email",id:"email",type:"email",placeholder:"Email*"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{name:"phone",id:"phone",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"message",id:"message",rows:"4",placeholder:"Message*"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._v(" "),n("div",{},[n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("button",{staticClass:"inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._v("\n          "+t._s(t.loading?"Loading...":"Submit")+"\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(40);var l=n(7),o={data:function(){return{contactPage:{},apiRoute:"http://localhost:1337"}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/contact-page");case 2:t.contactPage=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.contactPage.title,meta:[{hid:this.contactPage.title,name:this.contactPage.title,content:this.contactPage.meta_description}]}},fetchOnServer:!0},r=n(17),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageHeader",{attrs:{title:t.contactPage.title,subtitle:t.contactPage.subtitle}}),t._v(" "),n("div",{staticClass:"relative bg-white"},[t._m(0),t._v(" "),n("div",{staticClass:"relative max-w-7xl mx-auto lg:grid lg:grid-cols-5"},[n("div",{staticClass:"py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"},[n("div",{staticClass:" mx-auto"},[n("h2",{staticClass:"text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9"},[t._v("\n            "+t._s(t.contactPage.subheading)+"\n          ")]),t._v(" "),n("p",{staticClass:"mt-3 text-lg leading-6 text-gray-500"},[t._v("\n            "+t._s(t.contactPage.contact_text)+"\n          ")]),t._v(" "),n("dl",{staticClass:"mt-8 text-base leading-6 text-gray-500"},[n("div",[n("dt",{staticClass:"sr-only"},[t._v("Phone number")]),t._v(" "),n("dd",{staticClass:"flex"},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]),t._v(" "),n("span",{staticClass:"ml-3"},[t._v(t._s(t.contactPage.phone))])])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("dt",{staticClass:"sr-only"},[t._v("Email")]),t._v(" "),n("dd",{staticClass:"flex"},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),n("span",{staticClass:"ml-3"},[t._v(" "+t._s(t.contactPage.email)+" ")])])])])])]),t._v(" "),n("div",{staticClass:"bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"},[n("div",{staticClass:"mx-auto lg:max-w-none"},[n("ContactForm")],1)])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute inset-0"},[e("div",{staticClass:"absolute inset-y-0 left-0 w-1/2"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(287).default,ContactForm:n(290).default})}}]);