(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["groupedChunk"],{"04d1":function(e,t,n){var r=n("342f"),o=r.match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),i=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?i.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"4df4":function(e,t,n){"use strict";var r=n("0366"),o=n("7b0b"),a=n("9bdd"),i=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");e.exports=function(e){var t,n,l,d,b,f,m=o(e),g="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,h=void 0!==v,O=u(m),j=0;if(h&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==O||g==Array&&i(O))for(t=c(m.length),n=new g(t);t>j;j++)f=h?v(m[j],j):m[j],s(n,j,f);else for(d=O.call(m),b=d.next,n=new g;!(l=b.call(d)).done;j++)f=h?a(d,v,[l.value,j],!0):l.value,s(n,j,f);return n.length=j,n}},"4e82":function(e,t,n){"use strict";var r=n("23e7"),o=n("1c0b"),a=n("7b0b"),i=n("50c4"),c=n("d039"),s=n("addb"),u=n("a640"),l=n("04d1"),d=n("d998"),b=n("2d00"),f=n("512c"),m=[],g=m.sort,p=c((function(){m.sort(void 0)})),v=c((function(){m.sort(null)})),h=u("sort"),O=!c((function(){if(b)return b<70;if(!(l&&l>3)){if(d)return!0;if(f)return f<603;var e,t,n,r,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:t+r,v:n})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}})),j=p||!v||!h||!O,x=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:String(t)>String(n)?1:-1}};r({target:"Array",proto:!0,forced:j},{sort:function(e){void 0!==e&&o(e);var t=a(this);if(O)return void 0===e?g.call(t):g.call(t,e);var n,r,c=[],u=i(t.length);for(r=0;r<u;r++)r in t&&c.push(t[r]);c=s(c,x(e)),n=c.length,r=0;while(r<n)t[r]=c[r++];while(r<u)delete t[r++];return t}})},"512c":function(e,t,n){var r=n("342f"),o=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(e,i),e}},"8dc3":function(e,t,n){"use strict";n.r(t);n("4e82"),n("b0c0");var r=n("7a23"),o={class:"w-full mb-8 py-14 text-center text-white relative"},a=Object(r["i"])("div",{class:"absolute inset-0 w-full h-full box-border bg-contain music-bg",style:{"background-image":"url(/assets/img/song-header.png)"}},null,-1),i={class:"container mx-auto flex items-center"},c=Object(r["i"])("i",{class:"fas fa-play"},null,-1),s={class:"z-50 text-left ml-8"},u={class:"text-3xl font-bold"},l={class:"container mx-auto mt-6",id:"comments"},d={class:"bg-white rounded border border-gray-200 relative flex flex-col"},b={class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},f={class:"card-title"},m=Object(r["i"])("i",{class:"fa fa-comments float-right text-green-400 text-2xl"},null,-1),g={class:"p-6"},p=Object(r["i"])("option",{value:"1"},"Latest",-1),v=Object(r["i"])("option",{value:"2"},"Oldest",-1),h={class:"container mx-auto"},O={class:"mb-5"},j={class:"font-bold"};function x(e,t,n,x,y,w){var _=Object(r["A"])("vee-field"),S=Object(r["A"])("ErrorMessage"),k=Object(r["A"])("vee-form");return Object(r["v"])(),Object(r["e"])("div",null,[Object(r["i"])("section",o,[a,Object(r["i"])("div",i,[Object(r["i"])("button",{type:"button",class:"z-50 h-24 w-24 text-3xl bg-white text-black rounded-full\n        focus:outline-none",onClick:t[1]||(t[1]=Object(r["N"])((function(t){return e.newSong(y.song)}),["prevent"]))},[c]),Object(r["i"])("div",s,[Object(r["i"])("div",u,Object(r["E"])(y.song.modified_name),1),Object(r["i"])("div",null,Object(r["E"])(y.song.genre),1)])])]),Object(r["i"])("section",l,[Object(r["i"])("div",d,[Object(r["i"])("div",b,[Object(r["i"])("span",f,"Comments ("+Object(r["E"])(y.song.comment_count)+")",1),m]),Object(r["i"])("div",g,[y.comment_show_alert?(Object(r["v"])(),Object(r["e"])("div",{key:0,class:["text-white text-center font-bold p-4 mb-4",y.comment_alert_variant]},Object(r["E"])(y.comment_alert_message),3)):Object(r["f"])("",!0),e.userLoggedIn?(Object(r["v"])(),Object(r["e"])(k,{key:1,"validation-schema":y.schema,onSubmit:w.addComment},{default:Object(r["L"])((function(){return[Object(r["i"])(_,{as:"textarea",name:"comment",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition\n              duration-500 focus:outline-none focus:border-black rounded mb-4",placeholder:"Your comment here..."}),Object(r["i"])(S,{class:"text-red-600",name:"comment"}),Object(r["i"])("button",{type:"submit",class:"py-1.5 px-3 rounded text-white bg-green-600 block",disabled:y.comment_in_submission}," Submit ",8,["disabled"])]})),_:1},8,["validation-schema","onSubmit"])):Object(r["f"])("",!0),Object(r["M"])(Object(r["i"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return y.sort=e}),class:"block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition\n          duration-500 focus:outline-none focus:border-black rounded"},[p,v],512),[[r["H"],y.sort]])])])]),Object(r["i"])("ul",h,[(Object(r["v"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(w.sortedComments,(function(e){return Object(r["v"])(),Object(r["e"])("li",{class:"p-6 bg-gray-50 border border-gray-200",key:e.docID},[Object(r["i"])("div",O,[Object(r["i"])("div",j,Object(r["E"])(e.name),1),Object(r["i"])("time",null,Object(r["E"])(e.datePosted),1)]),Object(r["i"])("p",null,Object(r["E"])(e.content),1)])})),128))])])}var y=n("1da1"),w=n("5530"),_=(n("96cf"),n("fb6a"),n("d3b7"),n("25f0"),n("159b"),n("b79f")),S=n("5502"),k={name:"Song",data:function(){return{song:{},schema:{comment:"required|min:3"},comment_in_submission:!1,comment_show_alert:!1,comment_alert_variant:"bg-blue-500",comment_alert_message:"Please wait! Your comment is being submitted",comments:[],sort:"1"}},computed:Object(w["a"])(Object(w["a"])({},Object(S["e"])({userLoggedIn:function(e){return e.auth.userLoggedIn}})),{},{sortedComments:function(){var e=this;return this.comments.slice().sort((function(t,n){return"1"===e.sort?new Date(n.datePosted)-new Date(t.datePosted):new Date(t.datePosted)-new Date(n.datePosted)}))}}),watch:{sort:function(e){e!==this.$route.query.sort&&this.$router.push({query:{sort:e}})}},beforeRouteEnter:function(e,t,n){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["c"].doc(e.params.id).get();case 2:r=t.sent,n((function(e){if(r.exists){var t=e.$route.query.sort;e.sort="1"===t||"2"===t?t:"1",e.song=r.data(),e.getComments()}else e.$router.push({name:"home"})}));case 4:case"end":return t.stop()}}),t)})))()},methods:Object(w["a"])(Object(w["a"])({},Object(S["b"])(["newSong"])),{},{addComment:function(e,t){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.resetForm,n.comment_in_submission=!0,n.comment_show_alert=!0,n.comment_alert_variant="bg-blue-500",n.comment_alert_message="Please wait! Your comment is being submitted",a={content:e.comment,datePosted:(new Date).toString(),sid:n.$route.params.id,name:_["a"].currentUser.displayName,uid:_["a"].currentUser.uid},r.next=8,_["b"].add(a);case 8:return n.song.comment_count+=1,r.next=11,_["c"].doc(n.$route.params.id).update({comment_count:n.song.comment_count});case 11:n.getComments(),n.comment_in_submission=!1,n.comment_alert_variant="bg-green-500",n.comment_alert_message="Comment added!",o();case 16:case"end":return r.stop()}}),r)})))()},getComments:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["b"].where("sid","==",e.$route.params.id).get();case 2:n=t.sent,e.comments=[],n.forEach((function(t){return[e.comments.push(Object(w["a"])({docID:t.id},t.data()))]}));case 5:case"end":return t.stop()}}),t)})))()}})};k.render=x;t["default"]=k},"9bdd":function(e,t,n){var r=n("825a"),o=n("2a62");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(i){throw o(e),i}}},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),i=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),b=Math.max,f=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,l,d,p,v,h=c(this),O=i(h.length),j=o(e,O),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=O-j):(n=x-2,r=f(b(a(t),0),O-j)),O+n-r>m)throw TypeError(g);for(l=s(h,r),d=0;d<r;d++)p=j+d,p in h&&u(l,d,h[p]);if(l.length=r,n<r){for(d=j;d<O-r;d++)p=d+r,v=d+n,p in h?h[v]=h[p]:delete h[v];for(d=O;d>O-r+n;d--)delete h[d-1]}else if(n>r)for(d=O-r;d>j;d--)p=d+r-1,v=d+n-1,p in h?h[v]=h[p]:delete h[v];for(d=0;d<n;d++)h[d+j]=arguments[d+2];return h.length=O-r+n,l}})},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),i=!a((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:o})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),a=n("94ca"),i=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,m=n("06cf").f,g=n("9bf2").f,p=n("58a8").trim,v="Number",h=o[v],O=h.prototype,j=s(b(O))==v,x=function(e){var t,n,r,o,a,i,c,s,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=p(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(a=u.slice(2),i=a.length,c=0;c<i;c++)if(s=a.charCodeAt(c),s<48||s>o)return NaN;return parseInt(a,r)}return+u};if(a(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var y,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(j?d((function(){O.valueOf.call(n)})):s(n)!=v)?u(new h(x(t)),n,w):x(t)},_=r?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;_.length>S;S++)c(h,y=_[S])&&!c(w,y)&&g(w,y,m(h,y));w.prototype=O,O.constructor=w,i(o,v,w)}},addb:function(e,t){var n=Math.floor,r=function(e,t){var i=e.length,c=n(i/2);return i<8?o(e,t):a(r(e.slice(0,c),t),r(e.slice(c),t),t)},o=function(e,t){var n,r,o=e.length,a=1;while(a<o){r=a,n=e[a];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==a++&&(e[r]=n)}return e},a=function(e,t,n){var r=e.length,o=t.length,a=0,i=0,c=[];while(a<r||i<o)a<r&&i<o?c.push(n(e[a],t[i])<=0?e[a++]:t[i++]):c.push(a<r?e[a++]:t[i++]);return c};e.exports=r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},e01a:function(e,t,n){"use strict";var r=n("23e7"),o=n("83ab"),a=n("da84"),i=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),l=a.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new l(e):void 0===e?l():l(e);return""===e&&(d[t]=!0),t};u(b,l);var f=b.prototype=l.prototype;f.constructor=b;var m=f.toString,g="Symbol(test)"==String(l("test")),p=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(i(d,e))return"";var n=g?t.slice(7,-1):t.replace(p,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:b})}},f74b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"container mx-auto mt-6"},a={class:"md:grid md:grid-cols-3 md:gap-4"},i={class:"col-span-1"},c={class:"col-span-2"},s={class:"bg-white rounded border border-gray-200 relative flex flex-col"},u=Object(r["i"])("div",{class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},[Object(r["i"])("span",{class:"card-title"},"My Songs"),Object(r["i"])("i",{class:"fa fa-compact-disc float-right text-green-400 text-2xl"})],-1),l={class:"p-6"};function d(e,t,n,d,b,f){var m=Object(r["A"])("app-upload"),g=Object(r["A"])("composition-item");return Object(r["v"])(),Object(r["e"])("section",o,[Object(r["i"])("div",a,[Object(r["i"])("div",i,[Object(r["i"])(m,{ref:"upload",onAddSong:f.addSong},null,8,["onAddSong"])]),Object(r["i"])("div",c,[Object(r["i"])("div",s,[u,Object(r["i"])("div",l,[(Object(r["v"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(b.songs,(function(e,t){return Object(r["v"])(),Object(r["e"])(g,{key:e.docID,song:e,onUpdateSong:f.updateSong,index:t,onRemoveSong:f.removeSong,onUpdateUnsavedFlag:f.updateUnsavedFlag},null,8,["song","onUpdateSong","index","onRemoveSong","onUpdateUnsavedFlag"])})),128))])])])])])}var b=n("5530"),f=n("1da1"),m=(n("96cf"),n("159b"),n("a434"),n("b0c0"),{class:"bg-white rounded border border-gray-200 relative flex flex-col"}),g=Object(r["i"])("div",{class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},[Object(r["i"])("span",{class:"card-title"},"Upload"),Object(r["i"])("i",{class:"fas fa-upload float-right text-green-400 text-2xl"})],-1),p={class:"p-6"},v=Object(r["i"])("h5",null,"Drop your files here",-1),h=Object(r["i"])("hr",{class:"my-6"},null,-1),O={class:"flex h-4 overflow-hidden bg-gray-200 rounded"};function j(e,t,n,o,a,i){return Object(r["v"])(),Object(r["e"])("div",m,[g,Object(r["i"])("div",p,[Object(r["i"])("div",{class:["w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed\n                border-gray-400 text-gray-400 transition duration-500 hover:text-white\n                hover:bg-green-400 hover:border-green-400 hover:border-solid",{"bg-green-400 border-green-400 border-solid":a.is_dragover}],onDrag:t[1]||(t[1]=Object(r["N"])((function(){}),["prevent","stop"])),onDragstart:t[2]||(t[2]=Object(r["N"])((function(){}),["prevent","stop"])),onDragend:t[3]||(t[3]=Object(r["N"])((function(e){return a.is_dragover=!1}),["prevent","stop"])),onDragover:t[4]||(t[4]=Object(r["N"])((function(e){return a.is_dragover=!0}),["prevent","stop"])),onDragenter:t[5]||(t[5]=Object(r["N"])((function(e){return a.is_dragover=!0}),["prevent","stop"])),onDragleave:t[6]||(t[6]=Object(r["N"])((function(e){return a.is_dragover=!1}),["prevent","stop"])),onDrop:t[7]||(t[7]=Object(r["N"])((function(e){return i.upload(e)}),["prevent","stop"])),onClick:t[8]||(t[8]=Object(r["N"])((function(t){return e.$refs.fileInput.click()}),["prevent","stop"]))},[v],34),Object(r["i"])("input",{ref:"fileInput",type:"file",multiple:"",onChange:t[9]||(t[9]=function(e){return i.upload(e)})},null,544),h,(Object(r["v"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(a.uploads,(function(e){return Object(r["v"])(),Object(r["e"])("div",{class:"mb-4",key:e.name},[Object(r["i"])("div",{class:["font-bold text-sm",e.text_class]},[Object(r["i"])("i",{class:e.icon},null,2),Object(r["h"])(" "+Object(r["E"])(e.name),1)],2),Object(r["i"])("div",O,[Object(r["i"])("div",{class:["transition-all progress-bar",e.variant],style:{width:e.current_progress+"%"}},null,6)])])})),128))])])}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){if(Array.isArray(e))return x(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function w(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a");function _(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e){return y(e)||w(e)||_(e)||S()}var A=n("b79f"),E={name:"Upload",data:function(){return{is_dragover:!1,uploads:[]}},methods:{upload:function(e){var t=this;this.is_dragover=!1;var n=e.dataTransfer?k(e.dataTransfer.files):k(e.target.files);n.forEach((function(e){if("audio/mpeg"===e.type)if(navigator.onLine){var n=A["d"].ref(),r=n.child("songs/".concat(e.name)),o=r.put(e),a=t.uploads.push({task:o,current_progress:0,name:e.name,variant:"bg-blue-400",icon:"fas fa-spinner fa-spin",text_class:""})-1;o.on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;t.uploads[a].current_progress=n}),(function(e){t.uploads[a].variant="bg-red-400",t.uploads[a].icon="fas fa-times",t.uploads[a].text_class="text-red-400",console.error(e)}),Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={uid:A["a"].currentUser.uid,display_name:A["a"].currentUser.displayName,original_name:o.snapshot.ref.name,modified_name:o.snapshot.ref.name,genre:"",comment_count:0},e.next=3,o.snapshot.ref.getDownloadURL();case 3:return n.url=e.sent,e.next=6,A["c"].add(n);case 6:return r=e.sent,e.next=9,r.get();case 9:i=e.sent,t.$emit("addSong",i),t.uploads[a].variant="bg-green-400",t.uploads[a].icon="fas fa-check",t.uploads[a].text_class="text-green-400";case 14:case"end":return e.stop()}}),e)}))))}else t.uploads.push({task:{},current_progress:100,name:e.name,variant:"bg-red-400",icon:"fas fa-times",text_class:"text-red-400"})}))},cancelUploads:function(){this.uploads.forEach((function(e){e.task.cancel()}))}},beforeUnmount:function(){this.uploads.forEach((function(e){e.task.cancel()}))}};E.render=j;var I=E,N={class:"border border-gray-200 p-3 mb-4 rounded"},U={class:"inline-block text-2xl font-bold"},F=Object(r["i"])("i",{class:"fa fa-times"},null,-1),C=Object(r["i"])("i",{class:"fa fa-pencil-alt"},null,-1),R={class:"mb-3"},D=Object(r["i"])("label",{class:"inline-block mb-2"},"Song Title",-1),M={class:"mb-3"},$=Object(r["i"])("label",{class:"inline-block mb-2"},"Genre",-1);function T(e,t,n,o,a,i){var c=Object(r["A"])("vee-field"),s=Object(r["A"])("ErrorMessage"),u=Object(r["A"])("vee-form");return Object(r["v"])(),Object(r["e"])("div",N,[Object(r["M"])(Object(r["i"])("div",null,[Object(r["i"])("h4",U,Object(r["E"])(n.song.modified_name),1),Object(r["i"])("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right",onClick:t[1]||(t[1]=function(){return i.deleteSong&&i.deleteSong.apply(i,arguments)})},[F]),Object(r["i"])("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right",onClick:t[2]||(t[2]=Object(r["N"])((function(e){return a.showForm=!a.showForm}),["prevent"]))},[C])],512),[[r["I"],!a.showForm]]),Object(r["M"])(Object(r["i"])("div",null,[a.show_alert?(Object(r["v"])(),Object(r["e"])("div",{key:0,class:["text-white text-center font-bold p-4 mb-4",a.alert_variant]},Object(r["E"])(a.alert_message),3)):Object(r["f"])("",!0),Object(r["i"])(u,{"validation-schema":a.schema,"initial-values":n.song,onSubmit:i.edit},{default:Object(r["L"])((function(){return[Object(r["i"])("div",R,[D,Object(r["i"])(c,{type:"text",name:"modified_name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n                        transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Song Title",onInput:t[3]||(t[3]=function(e){return i.updateUnsavedFlag(!0)})}),Object(r["i"])(s,{class:"text-red-600",name:"modified_name"})]),Object(r["i"])("div",M,[$,Object(r["i"])(c,{type:"text",name:"genre",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n                        transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Genre",onInput:t[4]||(t[4]=function(e){return i.updateUnsavedFlag(!0)})}),Object(r["i"])(s,{class:"text-red-600",name:"genre"})]),Object(r["i"])("button",{type:"submit",class:"py-1.5 px-3 rounded text-white bg-green-600",disabled:a.in_submission}," Submit ",8,["disabled"]),Object(r["i"])("button",{type:"button",class:"py-1.5 px-3 rounded text-white bg-gray-600",disabled:a.in_submission,onClick:t[5]||(t[5]=Object(r["N"])((function(e){return a.showForm=!1}),["prevent"]))}," Go Back ",8,["disabled"])]})),_:1},8,["validation-schema","initial-values","onSubmit"])],512),[[r["I"],a.showForm]])])}n("a9e3");var L={name:"CompositionItem",props:{song:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{showForm:!1,schema:{modified_name:"required",genre:"alpha_spaces"},in_submission:!1,show_alert:!1,alert_variant:"bg-blue-500",alert_message:"Please wait! Updating song info."}},methods:{edit:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.in_submission=!0,t.show_alert=!0,t.alert_variant="bg-blue-500",t.alert_message="Please wait! Updating song info.",n.prev=4,n.next=7,A["c"].doc(t.song.docID).update(e);case 7:n.next=15;break;case 9:n.prev=9,n.t0=n["catch"](4),console.error(n.t0),t.in_submission=!1,t.alert_variant="bg-red-500",t.alert_message="Something went wrong! Try again later.";case 15:t.$emit("updateSong",t.index,e),t.updateUnsavedFlag(!1),t.in_submission=!1,t.alert_variant="bg-green-500",t.alert_message="Success!",t.showForm=!1;case 21:case"end":return n.stop()}}),n,null,[[4,9]])})))()},deleteSong:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=A["d"].ref(),r=n.child("songs/".concat(e.song.original_name)),t.next=4,r.delete();case 4:return t.next=6,A["c"].doc(e.song.docID).delete();case 6:e.$emit("removeSong",e.index);case 7:case"end":return t.stop()}}),t)})))()},updateUnsavedFlag:function(e){this.$emit("updateUnsavedFlag",e)}}};L.render=T;var P=L,q={name:"Manage",components:{AppUpload:I,CompositionItem:P},data:function(){return{songs:[],unsavedFlag:!1}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A["c"].where("uid","==",A["a"].currentUser.uid).get();case 2:n=t.sent,n.forEach(e.addSong);case 4:case"end":return t.stop()}}),t)})))()},methods:{addSong:function(e){var t=Object(b["a"])(Object(b["a"])({},e.data()),{},{docID:e.id});this.songs.push(t)},updateSong:function(e,t){this.songs[e].modified_name=t.modified_name,this.songs[e].genre=t.genre},removeSong:function(e){console.log(e),this.songs.splice(e,1)},updateUnsavedFlag:function(e){this.unsavedFlag=e}},beforeRouteLeave:function(e,t,n){if(this.unsavedFlag){var r=confirm("You have unsaved changes. Are you sure you want to leave?");n(r)}else n()}};q.render=d;t["default"]=q},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),i=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),b=d("slice"),f=l("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var n,r,l,d=s(this),b=c(d.length),p=i(e,b),v=i(void 0===t?b:t,b);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,p,v);for(r=new(void 0===n?Array:n)(g(v-p,0)),l=0;p<v;p++,l++)p in d&&u(r,l,d[p]);return r.length=l,r}})}}]);
//# sourceMappingURL=groupedChunk.5758889a.js.map