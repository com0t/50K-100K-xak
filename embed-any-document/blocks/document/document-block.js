!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"getFileSource",value:function(e){var t="internal",n=emebeder.site_url;return-1===e.indexOf(n)&&(t=-1!==e.indexOf("dropbox.com")?"dropbox":"external"),t}},{key:"parseShortcode",value:function(e){var t={};return e.match(/[\w-]+=".+?"/g).forEach((function(e){e=e.match(/([\w-]+)="(.+?)"/),t[e[1]]=e[2]})),t}},{key:"getFileExtension",value:function(e){return("."+e.split(".").pop()).split("?")[0]}},{key:"isValidMSExtension",value:function(e){var t=emebeder.msextension.split(",");return-1!==jQuery.inArray(this.getFileExtension(e),t)}},{key:"isPDF",value:function(e){return".pdf"===this.getFileExtension(e)}}],(n=null)&&r(t.prototype,n),o&&r(t,o),e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=wp.i18n.__,m=wp.element.Component,b=wp.editor.InspectorControls,h=wp.components,y=h.PanelBody,v=h.TextControl,w=h.SelectControl,g=h.ToggleControl,O=h.Disabled,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,e);var t,n,r,i=u(s);function s(){var e;l(this,s),(e=i.apply(this,arguments)).downloadControlhandle=e.downloadControlhandle.bind(d(e)),e.viewerControlHandle=e.viewerControlHandle.bind(d(e));var t=e.props.attributes,n=t.download,r=t.viewer;return e.state={downloadDisabled:"none"===n,cacheHidden:"google"!==r},e}return t=s,(n=[{key:"downloadControlhandle",value:function(e){this.setState({downloadDisabled:"none"===e}),this.props.setAttributes({download:e})}},{key:"viewerControlHandle",value:function(e){this.setState({cacheHidden:"google"!==e}),this.props.setAttributes({viewer:e})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=t.url,r=t.width,i=t.height,l=t.text,c=t.download,a=t.viewer,u=t.cache,s=e.setAttributes,d=[],p=null;if(a&&-1!==jQuery.inArray(a,emebeder.viewers)){d=[{value:"google",label:f("Google Docs Viewer","embed-any-document")}],o.isValidMSExtension(n)&&d.push({value:"microsoft",label:f("Microsoft Office Online","embed-any-document")});var m=o.getFileSource(n);o.isPDF(n)&&"dropbox"!==m&&(d.push({value:"browser",label:f("Browser Based","embed-any-document")}),-1!==jQuery.inArray("built-in",emebeder.viewers)&&"internal"===m&&d.push({value:"built-in",label:f("Built-In Viewer","embed-any-document")})),p=wp.element.createElement(v,{label:f("Download Text","embed-any-document"),help:f("Default download button text","embed-any-document"),value:l,onChange:function(e){return s({text:e})}}),this.state.downloadDisabled&&(p=wp.element.createElement(O,null,p))}return wp.element.createElement(b,null,wp.element.createElement(y,null,wp.element.createElement(v,{label:f("Width","embed-any-document"),help:f("Width of document either in px or in %","embed-any-document"),value:r,onChange:function(e){return s({width:e})}})),wp.element.createElement(y,null,wp.element.createElement(v,{label:f("Height","embed-any-document"),help:f("Height of document either in px or in %","embed-any-document"),value:i,onChange:function(e){return s({height:e})}})),wp.element.createElement(y,null,wp.element.createElement(w,{label:f("Show Download Link","embed-any-document"),options:[{value:"all",label:f("For all users","embed-any-document")},{value:"logged",label:f("For Logged-in users","embed-any-document")},{value:"none",label:f("No Download","embed-any-document")}],value:c,onChange:this.downloadControlhandle})),wp.element.createElement(y,null,p),wp.element.createElement(y,null,wp.element.createElement(w,{label:f("Viewer","embed-any-document"),options:d,value:a,onChange:this.viewerControlHandle})),!this.state.cacheHidden&&wp.element.createElement(y,null,wp.element.createElement(g,{label:f("Cache","embed-any-document"),checked:u,onChange:function(e){return s({cache:e})}})))}}])&&c(t.prototype,n),r&&c(t,r),s}(m),P={block:wp.element.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",class:"dashicon dashicons-media-document",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement("path",{d:"M12 2l4 4v12H4V2h8zM5 3v1h6V3H5zm7 3h3l-3-3v3zM5 5v1h6V5H5zm10 3V7H5v1h10zM5 9v1h4V9H5zm10 3V9h-5v3h5zM5 11v1h4v-1H5zm10 3v-1H5v1h10zm-3 2v-1H5v1h7z"}))};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=wp.i18n,A=H.__,N=H.sprintf,T=wp.element,V=T.Component,z=T.createRef,B=wp.apiFetch,Q=wp.url.addQueryArgs,L=wp.components,U=L.Placeholder,q=L.Spinner,I=lodash,W=I.isEqual,J=I.debounce;var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,o=D(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={response:null},t.eadRef=z(),t}return t=i,(n=[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.fetch(this.props),this.fetch=J(this.fetch,500)}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"componentDidUpdate",value:function(e,t){if(W(e,this.props)||this.fetch(this.props),this.state.response!==t.response&&null!==this.eadRef.current){var n=this.props.attributes,r=void 0===n?null:n;if(null!==r&&r&&("google"===r.viewer||"browser"===r.viewer||"built-in"===r.viewer)){var o=r.viewer,i=this.eadRef.current,l=jQuery(i).find(".ead-document"),c=l.find(".ead-iframe");if("google"!==o&&"browser"!==o||("google"===o&&c.css("visibility","visible"),c.on("load",(function(){jQuery(this).parents(".ead-document").find(".ead-document-loading").css("display","none")}))),"browser"===o||"built-in"===o){var a=l.data("pdfSrc");o=void 0!==a&&a.length>0&&o.length>0&&o;var u="pdfjs"in eadPublic&&eadPublic.pdfjs&&eadPublic.pdfjs.length>0&&"built-in"===o;if(o&&("browser"===o||u))if(PDFObject.supportsPDFs||u){var s={};s=u?{forcePDFJS:!0,PDFJS_URL:eadPublic.pdfjs}:{width:c.css("width"),height:c.css("height")},PDFObject.embed(a,l,s)}else c.css("visibility","visible")}}}}},{key:"fetch",value:function(e){var t=this;if(this.isStillMounted){null!==this.state.response&&this.setState({response:null});var n=e.block,r=e.attributes,o=void 0===r?null:r,i=e.urlQueryArgs,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Q("/wp/v2/block-renderer/".concat(e),M(M({context:"edit"},null!==t?{attributes:t}:{}),n))}(n,o,void 0===i?{}:i),c=this.currentFetchRequest=B({path:l}).then((function(e){t.isStillMounted&&c===t.currentFetchRequest&&e&&t.setState({response:e.rendered})})).catch((function(e){t.isStillMounted&&c===t.currentFetchRequest&&t.setState({response:{error:!0,errorMsg:e.message}})}));return c}}},{key:"render",value:function(){var e=this.state.response,t=this.props,n=t.className,r=t.EmptyResponsePlaceholder,o=t.ErrorResponsePlaceholder,i=t.LoadingResponsePlaceholder;if(""===e)return wp.element.createElement(r,S({response:e},this.props));if(!e)return wp.element.createElement(i,S({response:e},this.props));if(e.error)return wp.element.createElement(o,S({response:e},this.props));var l=void 0!==n&&n?"ead-block-content-wrapper "+n:"ead-block-content-wrapper";return wp.element.createElement("div",{ref:this.eadRef,className:l,dangerouslySetInnerHTML:{__html:e}})}}])&&k(t.prototype,n),r&&k(t,r),i}(V);G.defaultProps={EmptyResponsePlaceholder:function(e){var t=e.className;return wp.element.createElement(U,{label:A("Document","embed-any-document"),icon:P.block,className:t},A("No document found!","embed-any-document"))},ErrorResponsePlaceholder:function(e){var t=e.response,n=e.className,r=N(A("Error loading the document: %s","embed-any-document"),t.errorMsg);return wp.element.createElement(U,{label:A("Document","embed-any-document"),icon:P.block,className:n},r)},LoadingResponsePlaceholder:function(e){var t=e.className;return wp.element.createElement(U,{className:t},wp.element.createElement(q,null))}};var K=G;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=wp.i18n.__,ee=wp.blocks.registerBlockType,te=wp.components,ne=te.Placeholder,re=te.Button;ee("embed-any-document/document",{title:$("Document","embed-any-document"),description:$("Upload and Embed your documents.","embed-any-document"),icon:P.block,category:"embed",keywords:[$("add document","embed-any-document"),$("embed document","embed-any-document"),$("embed any document","embed-any-document")],edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.shortcode,i=null;return jQuery("body").on("click","#embed-popup #insert-doc",(function(){var e=jQuery("#embed-popup #shortcode").text(),t=o.parseShortcode(e),n=t.url,r=t.width,l=void 0===r?emebeder.width:r,c=t.height,a=void 0===c?emebeder.height:c,u=t.download,s=void 0===u?emebeder.download:u,d=t.viewer,p=void 0===d?emebeder.provider:d,f=t.text,m=void 0===f?emebeder.text:f,b=t.cache,h=void 0===b||b;null!==i&&!0===i.activeEadBlock&&(i.activeEadBlock=!1,p=-1!==jQuery.inArray(p,emebeder.viewers)?p:"google",i.setAttributes({shortcode:e,url:n,width:l,height:a,download:s,text:m,viewer:p,cache:"off"!==h}))})),void 0!==r?[wp.element.createElement(j,Y({setAttributes:n},e)),wp.element.createElement(K,{block:"embed-any-document/document",attributes:t})]:wp.element.createElement(ne,{label:$("Document","embed-any-document"),instructions:$("Upload and Embed your documents.","embed-any-document"),icon:P.block,className:"ead-block-wrapper"},wp.element.createElement(re,{className:"awsm-embed",onClick:function(){(i=e).activeEadBlock=!0},isSecondary:!0,isLarge:!0},$("Add Document","embed-any-document")))},save:function(e){return e.attributes.shortcode}})}]);