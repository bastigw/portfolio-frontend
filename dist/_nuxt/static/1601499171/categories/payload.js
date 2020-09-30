__NUXT_JSONP__("/categories", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{}],fetch:[{categoryPage:{id:d,title:"Categories",subtitle:"View various categories of projects and posts.",meta_description:"Read up to date content and view real-world applications built with these categories.",created_by:{id:d,firstname:m,lastname:l,username:a},updated_by:{id:d,firstname:m,lastname:l,username:a},created_at:"2020-09-30T16:40:28.820Z",updated_at:"2020-09-30T16:40:28.849Z"},apiRoute:"http:\u002F\u002Flocalhost:1337",categories:[{id:d,name:"Laravel Web Development",description:a,slug:"laravel-web-development",created_by:{id:d,firstname:m,lastname:l,username:a},updated_by:{id:d,firstname:m,lastname:l,username:a},created_at:"2020-09-16T01:56:41.415Z",updated_at:"2020-09-30T17:36:15.093Z",posts:[],projects:[]},{id:f,name:"Full-Stack Development",description:a,slug:"full-stack-development",created_by:{id:d,firstname:m,lastname:l,username:a},updated_by:{id:d,firstname:m,lastname:l,username:a},created_at:"2020-09-30T16:41:57.425Z",updated_at:"2020-09-30T17:50:49.504Z",posts:[{id:d,title:"Laravel 8 and Laravel Jetstream- Initial Reactions",body:"\nToday I was exploring the newly released Laravel 8 framework and found the fresh composer package that Laravel developed for authentication view scaffolding.\n\nI was initially a little concerned about the move away from React & Vue, but I decided to give it a try anyway.\n\nI was very happily surprised that Jetstream looks like a wonderful improvement for the Laravel framework.\n\nHere are some awesome features that come with Jetstream, for free, right out of the box:\n\n- Profile Updates\n- Two Factor Authentication\n- Configurable API tokens\n- Teams\n- TailwindCss configured for you\n\nJetstream even comes with profile images out of the box!\nOne thing that I am still unsure about is Inertia.js. For my apps, I want to separate the backend from the views to be able to have an API for the backend that all my frontend applications use. *mobile and web.\n\nIt looks like with the Jetstream approach, I will still be needing to have to build some of the routes separately for the API, but we will see.\n\nOther than that, I really like Jetstream. Good work, Laravel Team!",seo_description:o,category:f,published_at:"2020-09-06",preview:o,slug:"laravel-8-and-laravel-jetstream-initial-reactions",created_by:d,updated_by:d,created_at:"2020-09-16T01:54:30.422Z",updated_at:p,image:{id:d,name:"laravel-jetstream-profile-view.jpg",alternativeText:e,caption:e,width:1619,height:822,formats:{thumbnail:{name:"thumbnail_laravel-jetstream-profile-view.jpg",hash:"thumbnail_laravel_jetstream_profile_view_639ae9f673",ext:b,mime:c,width:g,height:124,size:2.19,path:a,url:"\u002Fuploads\u002Fthumbnail_laravel_jetstream_profile_view_639ae9f673.jpg"},large:{name:"large_laravel-jetstream-profile-view.jpg",hash:"large_laravel_jetstream_profile_view_639ae9f673",ext:b,mime:c,width:i,height:508,size:17.89,path:a,url:"\u002Fuploads\u002Flarge_laravel_jetstream_profile_view_639ae9f673.jpg"},medium:{name:"medium_laravel-jetstream-profile-view.jpg",hash:"medium_laravel_jetstream_profile_view_639ae9f673",ext:b,mime:c,width:j,height:381,size:12.04,path:a,url:"\u002Fuploads\u002Fmedium_laravel_jetstream_profile_view_639ae9f673.jpg"},small:{name:"small_laravel-jetstream-profile-view.jpg",hash:"small_laravel_jetstream_profile_view_639ae9f673",ext:b,mime:c,width:k,height:254,size:n,path:a,url:"\u002Fuploads\u002Fsmall_laravel_jetstream_profile_view_639ae9f673.jpg"}},hash:"laravel_jetstream_profile_view_639ae9f673",ext:b,mime:c,size:39.02,url:"\u002Fuploads\u002Flaravel_jetstream_profile_view_639ae9f673.jpg",previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:"2020-09-16T01:54:03.395Z",updated_at:"2020-09-16T01:54:03.476Z"}},{id:f,title:"How to fetch items by slug again",body:"This past week, I spent some time experimenting with the new CMS Strapi. I really like how easy it is to build api's for web apps and mobile apps in Strapi, and I wanted to give it a try. I was considering using it for a project, but I think I will hold off for now.\n\nOne thing we do very often in web apps and websites is we fetch different content from a database based upon the url that the user is visiting. That way, we design one template for all of our blog pages, and they are accessed at a url like \"\u002Fblog\u002Fmy-awesome-article\".\n\nWhen building a website with Strapi, you will have api endpoints to fetch items from the url right out of the box generated for you, but your api endpoints will be set up to fetch by the id of the article or item instead of a slug.\n\nThis is great for many cases as you may be accessing the data from a mobile app, and you won't need a user friendly slug anyways, or if you are wanting to update an item, you normally want to update items based on the id as this ensures you will only update the specific item you want to edit. (Id's are unique and auto generated.)\n\nIn my case, I was considering using Strapi as a backend for a web app, and I want users to be able to access pages from SEO friendly and user friendly slugs.\n\nTherefore, I did some research and implemented this feature in my project. In this article, I will go into how to set up content types in Strapi to be accessible from a \u002Fslug uri versus the \u002Fid uri that is built in.\n\nMy tech choice was Nuxt for the front end, Strapi for the backend, and GraphQl for my query language.\n\nNuxt has built in functionality for Axios, and probably if I did an actual project with Strapi, I would just use Axios, as I am a fan of the Restful API convention, but I will leave that for another article.\n\nPrerequisites for your app:\nYou need to have a Strapi app configured and with the GraphGl plugin already installed. I won't go into this.\nYou also need to have your Nuxt front end already set up and configured with the Apollo GraphQl module.\nIf you want to learn how to do both of these things, then I recommend this tutorial series.\n\nIt will also help if you know Vue, and how to create content types in Strapi. If not, you may have trouble with this.",seo_description:"test",category:f,published_at:a,preview:"Test",slug:"how-to-fetch-items-by-slug-again",created_by:d,updated_by:d,created_at:"2020-09-30T17:07:20.290Z",updated_at:p,image:a}],projects:[{id:d,name:"MyJourney",description:"In July, I was accepted to a Software Development program at Western Governors University. I was pumped, and I wanted to share with others how I fell into Software Development.\n\nI wanted to share my journey on a timeline, so people could see how I really didn't plan to be a Software Engineer, and maybe help other people on their journeys.\n\nWhile I was planning this project out, I realized I should build a website where anyone could share their journeys, which led me to build MyJourney, a place where people can share journeys on a timeline.\n\n**This project was awesome. Here are some of the things I built for it.**\n\n- Laravel 7 Application.\n- VueJs components for mobile menus, dropdowns, and functionality to keep from having to do a full refresh when sending some API requests.\n- Implementing \u003Ccontenteditable\u003E on the journey pages so that users can easily update their journey.\n- API routes for some Vue Components.",introduction:"My Journey is a place where you can share journeys you have taken in life on a timeline.",image_caption:"Screenshot of the MyJourney Dashboard",slug:"myjourney",category:f,created_by:d,updated_by:d,created_at:"2020-09-28T21:09:45.229Z",updated_at:q,images:[{id:r,name:s,alternativeText:e,caption:e,width:t,height:u,formats:{thumbnail:{name:v,hash:w,ext:b,mime:c,width:g,height:x,size:y,path:a,url:z},large:{name:A,hash:B,ext:b,mime:c,width:i,height:C,size:D,path:a,url:E},medium:{name:F,hash:G,ext:b,mime:c,width:j,height:H,size:I,path:a,url:J},small:{name:K,hash:au,ext:b,mime:c,width:k,height:M,size:N,path:a,url:O}},hash:P,ext:b,mime:c,size:Q,url:R,previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:S,updated_at:T}],main_image:{id:r,name:s,alternativeText:e,caption:e,width:t,height:u,formats:{thumbnail:{name:v,hash:w,ext:b,mime:c,width:g,height:x,size:y,path:a,url:z},large:{name:A,hash:B,ext:b,mime:c,width:i,height:C,size:D,path:a,url:E},medium:{name:F,hash:G,ext:b,mime:c,width:j,height:H,size:I,path:a,url:J},small:{name:K,hash:au,ext:b,mime:c,width:k,height:M,size:N,path:a,url:O}},hash:P,ext:b,mime:c,size:Q,url:R,previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:S,updated_at:T}},{id:f,name:"NurseryPeople",description:"For the Nursery People website, I took an outdated site and completely rebuilt it with Laravel, and Webflow for styling and design.",introduction:"Nursery People is a website for landscapers and nursery people.",image_caption:"Nursery People Home Hero.",slug:"nurserypeople",category:f,created_by:d,updated_by:d,created_at:"2020-09-28T21:50:32.359Z",updated_at:q,images:[{id:U,name:"favorite-plants.jpg",alternativeText:e,caption:e,width:1497,height:850,formats:{thumbnail:{name:"thumbnail_favorite-plants.jpg",hash:"thumbnail_favorite_plants_392728fe4e",ext:b,mime:c,width:g,height:139,size:U,path:a,url:"\u002Fuploads\u002Fthumbnail_favorite_plants_392728fe4e.jpg"},large:{name:"large_favorite-plants.jpg",hash:"large_favorite_plants_392728fe4e",ext:b,mime:c,width:i,height:568,size:43.57,path:a,url:"\u002Fuploads\u002Flarge_favorite_plants_392728fe4e.jpg"},medium:{name:"medium_favorite-plants.jpg",hash:"medium_favorite_plants_392728fe4e",ext:b,mime:c,width:j,height:426,size:27.79,path:a,url:"\u002Fuploads\u002Fmedium_favorite_plants_392728fe4e.jpg"},small:{name:"small_favorite-plants.jpg",hash:"small_favorite_plants_392728fe4e",ext:b,mime:c,width:k,height:284,size:14.01,path:a,url:"\u002Fuploads\u002Fsmall_favorite_plants_392728fe4e.jpg"}},hash:"favorite_plants_392728fe4e",ext:b,mime:c,size:75.46,url:"\u002Fuploads\u002Ffavorite_plants_392728fe4e.jpg",previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:"2020-09-28T21:49:27.559Z",updated_at:"2020-09-28T21:49:27.950Z"},{id:n,name:V,alternativeText:e,caption:e,width:W,height:X,formats:{thumbnail:{name:Y,hash:Z,ext:b,mime:c,width:g,height:_,size:$,path:a,url:aa},large:{name:ab,hash:ac,ext:b,mime:c,width:i,height:ad,size:ae,path:a,url:af},medium:{name:ag,hash:ah,ext:b,mime:c,width:j,height:ai,size:aj,path:a,url:ak},small:{name:al,hash:am,ext:b,mime:c,width:k,height:an,size:ao,path:a,url:ap}},hash:aq,ext:b,mime:c,size:ar,url:as,previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:at,updated_at:L},{id:7,name:"nurserypeople-search-plants.jpg",alternativeText:e,caption:e,width:1490,height:793,formats:{thumbnail:{name:"thumbnail_nurserypeople-search-plants.jpg",hash:"thumbnail_nurserypeople_search_plants_08830452f7",ext:b,mime:c,width:g,height:130,size:4.98,path:a,url:"\u002Fuploads\u002Fthumbnail_nurserypeople_search_plants_08830452f7.jpg"},large:{name:"large_nurserypeople-search-plants.jpg",hash:"large_nurserypeople_search_plants_08830452f7",ext:b,mime:c,width:i,height:532,size:44.95,path:a,url:"\u002Fuploads\u002Flarge_nurserypeople_search_plants_08830452f7.jpg"},medium:{name:"medium_nurserypeople-search-plants.jpg",hash:"medium_nurserypeople_search_plants_08830452f7",ext:b,mime:c,width:j,height:399,size:29.71,path:a,url:"\u002Fuploads\u002Fmedium_nurserypeople_search_plants_08830452f7.jpg"},small:{name:"small_nurserypeople-search-plants.jpg",hash:"small_nurserypeople_search_plants_08830452f7",ext:b,mime:c,width:k,height:266,size:15.58,path:a,url:"\u002Fuploads\u002Fsmall_nurserypeople_search_plants_08830452f7.jpg"}},hash:"nurserypeople_search_plants_08830452f7",ext:b,mime:c,size:82.58,url:"\u002Fuploads\u002Fnurserypeople_search_plants_08830452f7.jpg",previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:"2020-09-28T21:49:27.762Z",updated_at:"2020-09-28T21:49:28.209Z"}],main_image:{id:n,name:V,alternativeText:e,caption:e,width:W,height:X,formats:{thumbnail:{name:Y,hash:Z,ext:b,mime:c,width:g,height:_,size:$,path:a,url:aa},large:{name:ab,hash:ac,ext:b,mime:c,width:i,height:ad,size:ae,path:a,url:af},medium:{name:ag,hash:ah,ext:b,mime:c,width:j,height:ai,size:aj,path:a,url:ak},small:{name:al,hash:am,ext:b,mime:c,width:k,height:an,size:ao,path:a,url:ap}},hash:aq,ext:b,mime:c,size:ar,url:as,previewUrl:a,provider:h,provider_metadata:a,created_by:d,updated_by:d,created_at:at,updated_at:L}}]}]}],mutations:void 0}}(null,".jpg","image\u002Fjpeg",1,"",2,245,"local",1000,750,500,"Wray","Chris",6,"Today I was exploring the newly released Laravel 8 framework and found the fresh composer package that Laravel developed for authentication view scaffolding. I was initially a little concerned about the move away from React & Vue, but I decided to give it a try anyway. I was very happily surprised that Jetstream looks like a wonderful improvement for the Laravel framework.","2020-09-30T17:50:49.425Z","2020-09-30T17:50:49.426Z",8,"screenshot-myjourney-dashboard.jpg",1576,942,"thumbnail_screenshot-myjourney-dashboard.jpg","thumbnail_screenshot_myjourney_dashboard_5bb289c3bb",146,5.5,"\u002Fuploads\u002Fthumbnail_screenshot_myjourney_dashboard_5bb289c3bb.jpg","large_screenshot-myjourney-dashboard.jpg","large_screenshot_myjourney_dashboard_5bb289c3bb",598,48.15,"\u002Fuploads\u002Flarge_screenshot_myjourney_dashboard_5bb289c3bb.jpg","medium_screenshot-myjourney-dashboard.jpg","medium_screenshot_myjourney_dashboard_5bb289c3bb",448,29.63,"\u002Fuploads\u002Fmedium_screenshot_myjourney_dashboard_5bb289c3bb.jpg","small_screenshot-myjourney-dashboard.jpg","2020-09-28T21:49:28.085Z",299,17.32,"\u002Fuploads\u002Fsmall_screenshot_myjourney_dashboard_5bb289c3bb.jpg","screenshot_myjourney_dashboard_5bb289c3bb",94.29,"\u002Fuploads\u002Fscreenshot_myjourney_dashboard_5bb289c3bb.jpg","2020-09-29T15:05:00.255Z","2020-09-29T15:05:39.378Z",5,"og-image-nurserypeople.jpg",1200,630,"thumbnail_og-image-nurserypeople.jpg","thumbnail_og_image_nurserypeople_2c36200165",129,6.06,"\u002Fuploads\u002Fthumbnail_og_image_nurserypeople_2c36200165.jpg","large_og-image-nurserypeople.jpg","large_og_image_nurserypeople_2c36200165",525,41.64,"\u002Fuploads\u002Flarge_og_image_nurserypeople_2c36200165.jpg","medium_og-image-nurserypeople.jpg","medium_og_image_nurserypeople_2c36200165",394,28.91,"\u002Fuploads\u002Fmedium_og_image_nurserypeople_2c36200165.jpg","small_og-image-nurserypeople.jpg","small_og_image_nurserypeople_2c36200165",263,15.45,"\u002Fuploads\u002Fsmall_og_image_nurserypeople_2c36200165.jpg","og_image_nurserypeople_2c36200165",53.64,"\u002Fuploads\u002Fog_image_nurserypeople_2c36200165.jpg","2020-09-28T21:49:27.671Z","small_screenshot_myjourney_dashboard_5bb289c3bb")));