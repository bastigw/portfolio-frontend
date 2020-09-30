(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,e,n){"use strict";n.r(e);var r={props:["title","subtitle"]},l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.subtitle?n("p",{staticClass:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r={props:["projects"],data:function(){return{apiRoute:"http://localhost:1337"}}},l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!=t.projects.length?n("div",t._l(t.projects,(function(e){return n("section",{key:e.id,staticClass:"bg-white overflow-hidden"},[n("div",{staticClass:"relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen"}),t._v(" "),n("div",{staticClass:"mx-auto text-base lg:max-w-none"},[n("NuxtLink",{staticClass:"text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150",attrs:{to:"/categories/"+e.category.slug}},[t._v(t._s(e.category.name))]),t._v(" "),n("h1",{staticClass:"mt-4 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},[t._v("\n          "+t._s(e.name)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-8"},[n("div",{staticClass:"relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2"},[n("svg",{staticClass:"hidden lg:block absolute top-0 right-0 -mt-20 -mr-20",attrs:{width:"404",height:"384",fill:"none",viewBox:"0 0 404 384"}},[n("defs",[n("pattern",{attrs:{id:"de316486-4a29-4312-bdfc-fbce2132a2c1",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[n("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),n("rect",{attrs:{width:"404",height:"384",fill:"url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"}})]),t._v(" "),n("div",{staticClass:"relative text-base mx-auto lg:max-w-none content-center"},[n("figure",{staticClass:"mb-4"},[n("div",{staticClass:"relative pb-7/12 lg:pb-0"},[n("img",{staticClass:"rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto",attrs:{src:t.apiRoute+e.main_image.url,alt:e.name,loading:"lazy"}})]),t._v(" "),e.image_caption?n("figcaption",{staticClass:"flex mt-3 text-sm text-gray-500"},[n("svg",{staticClass:"flex-none w-5 h-5 mr-2 text-gray-400",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"}})]),t._v("\n                "+t._s(e.image_caption)+"\n              ")]):t._e()]),t._v(" "),t._l(e.technologies,(function(e){return n("NuxtLink",{key:e.id,staticClass:"text-base leading-6 text-indigo-600 font-semibold tracking-wide py-1 px-3 mr-2 mb-2 rounded-lg uppercase hover:text-indigo-500 hover:bg-white transition ease-in-out duration-150",attrs:{to:"/technologies/"+e.slug}},[t._v("\n              "+t._s(e.name)+"\n            ")])}))],2)]),t._v(" "),n("div",[n("div",{staticClass:"text-base mx-auto lg:max-w-none"},[n("p",{staticClass:"text-lg leading-7 text-gray-500 mb-5"},[t._v("\n              "+t._s(e.introduction)+"\n            ")])]),t._v(" "),n("div",{staticClass:"prose text-gray-500 mx-auto max-w-none lg:row-start-1 lg:col-start-1 mb-5",domProps:{innerHTML:t._s(t.$md.render(e.description))}}),t._v(" "),n("NuxtLink",{staticClass:"text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{to:"/projects/"+e.slug}},[t._v("View more details")])],1)])])])})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);n(40);var r=n(7),l={data:function(){return{projectPage:{},apiRoute:"http://localhost:1337",projects:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/projects");case 2:return t.projects=e.sent,e.next=5,t.$axios.$get("/projects-page");case 5:t.projectPage=e.sent;case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.projectPage.title,meta:[{hid:this.projectPage.title,name:this.projectPage.title,content:this.projectPage.meta_description}]}},fetchOnServer:!0},o=n(17),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("PageHeader",{attrs:{title:this.projectPage.title,subtitle:this.projectPage.subtitle}}),this._v(" "),e("ProjectList",{attrs:{projects:this.projects}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(287).default,ProjectList:n(289).default})}}]);