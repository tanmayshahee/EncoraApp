(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{40:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=function(){return a.a.createElement("div",{className:"title"},"G Notes")},l=r(15),c=r(6),i=function(e){return{type:c.a.TOGGLE_TOAST,payload:e}},s=r(38);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s.a;var b=Object(l.b)((function(e,t){return p(p({},t),{},{notes:e.addEditNotes.notes})}),{deleteNote:function(e){return{type:c.a.DELETE_NOTE,payload:e}},toggleToast:i})((function(e){return a.a.createElement("div",{className:"list-view-parent"},e.notes.length>0?e.notes.map((function(t,r){return a.a.createElement("div",{className:"list-item-wrapper",key:t.key},a.a.createElement("div",{className:"item-content"},a.a.createElement("div",{className:"item-title"},t.title),a.a.createElement("div",{className:"item-body"},t.body)),a.a.createElement("div",{className:"icon-cross",onClick:function(){return function(t,r){var n=p({},t);n.deletedIndex=r,console.log(n),e.deleteNote(n),e.toggleToast({showToast:!0,message:"Note Deleted"})}(t,r)}},a.a.createElement(s.a,null)))})):a.a.createElement("div",{className:"no-notes"},"No Notes Present"))})),m=r(33),f=r(34);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=Object(l.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)}),{addNote:function(e){return{type:c.a.ADD_NOTE,payload:e}},toggleToast:i})((function(e){var t=g(Object(n.useState)(!1),2),r=t[0],o=t[1],l=g(Object(n.useState)(""),2),c=l[0],i=l[1],s=g(Object(n.useState)(""),2),u=s[0],p=s[1],d=function(){i(""),p("")},b=function(e){"title"===e.target.name?i(e.target.value):p(e.target.value)};return a.a.createElement("div",{className:"add-edit-list-main"},a.a.createElement("div",{className:"button-wrapper"},a.a.createElement("div",{className:"button-title",onClick:d},"Add Note")),a.a.createElement("div",{className:"add-edit-list-form"},a.a.createElement(m.a,{noValidate:!0,validated:r,onSubmit:function(t){if(event.preventDefault(),event.stopPropagation(),!1===event.currentTarget.checkValidity())console.log("validation failed"),o(!0);else{console.log("validation success"),o(!1);var r={key:(new Date).getTime(),title:c,body:u};e.addNote(r),e.toggleToast({showToast:!0,message:"Note Added"}),d()}}},a.a.createElement(m.a.Group,null,a.a.createElement(m.a.Label,null,"Title"),a.a.createElement(m.a.Control,{type:"text",onChange:b,value:c,name:"title",placeholder:"title",required:!0}),a.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter Title.")),a.a.createElement(m.a.Group,null,a.a.createElement(m.a.Label,null,"Body"),a.a.createElement(m.a.Control,{as:"textarea",onChange:b,value:u,name:"body",rows:"3",required:!0}),a.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter Body.")),a.a.createElement("div",{className:"button-wrapper"},a.a.createElement(f.a,{type:"submit",variant:"primary"},"Save")))))})),E=r(37);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=Object(l.b)((function(e,t){return h(h({},t),{},{showToast:e.toast.showToast,message:e.toast.message})}),{toggleToast:i})((function(e){return a.a.createElement("div",{style:{position:"absolute",top:e.showToast?"65px":"-75px",right:e.showToast?"50%":"-75px",minHeight:"40px",width:"150px",borderRadius:"8px"}},a.a.createElement(E.a,{onClose:function(){return e.toggleToast({showToast:!1})},show:e.showToast,delay:3e3,autohide:!0},a.a.createElement(E.a.Body,null,e.message)))}));t.default=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null),a.a.createElement(o,null),a.a.createElement("div",{className:"add-edit-notes-body"},a.a.createElement(b,null),a.a.createElement(w,null)))}}}]);
//# sourceMappingURL=2.main.js.map