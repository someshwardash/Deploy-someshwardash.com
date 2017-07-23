webpackJsonp([0],{"./app/components/A/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  color: #41addd;\n\n  &:hover {\n    color: #6cc0e5;\n  }\n"],["\n  color: #41addd;\n\n  &:hover {\n    color: #6cc0e5;\n  }\n"]),a=r.a.a(i);n.a=a},"./app/components/H2/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  font-size: 1.5em;\n"],["\n  font-size: 1.5em;\n"]),a=r.a.h2(i);n.a=a},"./app/components/IssueIcon/index.js":function(e,n,t){"use strict";function o(e){return i("svg",{height:"1em",width:"0.875em",className:e.className},void 0,a)}var r=t("./node_modules/react/react.js"),i=(t.n(r),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}()),a=i("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});n.a=o},"./app/components/List/Ul.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"],["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"]),a=r.a.ul(i);n.a=a},"./app/components/List/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"],["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"]),a=r.a.div(i);n.a=a},"./app/components/List/index.js":function(e,n,t){"use strict";function o(e){var n=e.component,t=c;return t=e.items?e.items.map(function(e,t){return s(n,{item:e},"item-"+t)}):s(n,{}),s(a.a,{},void 0,s(i.a,{},void 0,t))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/List/Ul.js")),a=t("./app/components/List/Wrapper.js"),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),c=s("div",{});n.a=o},"./app/components/ListItem/Item.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"],["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"]),a=r.a.div(i);n.a=a},"./app/components/ListItem/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"],["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"]),a=r.a.li(i);n.a=a},"./app/components/ListItem/index.js":function(e,n,t){"use strict";function o(e){return s(a.a,{},void 0,s(i.a,{},void 0,e.item))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/ListItem/Item.js")),a=t("./app/components/ListItem/Wrapper.js"),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}();n.a=o},"./app/components/LoadingIndicator/Circle.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),s=o(["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"],["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"]),c=o(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ","\n\n    &:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: "," 1.2s infinite ease-in-out both;\n      ","\n    }\n  "],["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ","\n\n    &:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: "," 1.2s infinite ease-in-out both;\n      ","\n    }\n  "]),p=t.i(i.b)(s),l=function(e){var n=i.a.div(c,e.rotate&&"\n      -webkit-transform: rotate("+e.rotate+"deg);\n      -ms-transform: rotate("+e.rotate+"deg);\n      transform: rotate("+e.rotate+"deg);\n    ",p,e.delay&&"\n        -webkit-animation-delay: "+e.delay+"s;\n        animation-delay: "+e.delay+"s;\n      ");return a(n,{})};n.a=l},"./app/components/LoadingIndicator/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n"],["\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n"]),a=r.a.div(i);n.a=a},"./app/components/LoadingIndicator/index.js":function(e,n,t){"use strict";var o=t("./node_modules/react/react.js"),r=(t.n(o),t("./app/components/LoadingIndicator/Circle.js")),i=t("./app/components/LoadingIndicator/Wrapper.js"),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),s=a(r.a,{}),c=function(){return a(i.a,{},void 0,s,a(r.a,{rotate:30,delay:-1.1}),a(r.a,{rotate:60,delay:-1}),a(r.a,{rotate:90,delay:-.9}),a(r.a,{rotate:120,delay:-.8}),a(r.a,{rotate:150,delay:-.7}),a(r.a,{rotate:180,delay:-.6}),a(r.a,{rotate:210,delay:-.5}),a(r.a,{rotate:240,delay:-.4}),a(r.a,{rotate:270,delay:-.3}),a(r.a,{rotate:300,delay:-.2}),a(r.a,{rotate:330,delay:-.1}))};n.a=c},"./app/components/ReposList/index.js":function(e,n,t){"use strict";function o(e){var n=e.loading,t=e.error,o=e.repos;if(n)return l;if(!1!==t){var r=function(){return u};return p(i.a,{component:r})}return!1!==o?p(i.a,{items:o,component:c.a}):null}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/List/index.js")),a=t("./app/components/ListItem/index.js"),s=t("./app/components/LoadingIndicator/index.js"),c=t("./app/containers/RepoListItem/index.js"),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),l=p(i.a,{component:s.a}),u=p(a.a,{item:"Something went wrong, please try again!"});n.a=o},"./app/containers/App/actions.js":function(e,n,t){"use strict";function o(){return{type:a.b}}function r(e,n){return{type:a.c,repos:e,username:n}}function i(e){return{type:a.d,error:e}}var a=t("./app/containers/App/constants.js");n.a=o,n.b=r,n.c=i},"./app/containers/HomePage/AtPrefix.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  color: black;\n  margin-left: 0.4em;\n"],["\n  color: black;\n  margin-left: 0.4em;\n"]),a=r.a.span(i);n.a=a},"./app/containers/HomePage/CenteredSection.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/containers/HomePage/Section.js"),a=o(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),s=t.i(r.a)(i.a)(a);n.a=s},"./app/containers/HomePage/Form.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]),a=r.a.form(i);n.a=a},"./app/containers/HomePage/Input.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"],["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"]),a=r.a.input(i);n.a=a},"./app/containers/HomePage/Section.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"],["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"]),a=r.a.section(i);n.a=a},"./app/containers/HomePage/actions.js":function(e,n,t){"use strict";function o(e){return{type:r.a,name:e}}var r=t("./app/containers/HomePage/constants.js");n.a=o},"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/HomePage/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return{onChangeUsername:function(n){return e(t.i(O.a)(n.target.value))},onSubmitForm:function(n){void 0!==n&&n.preventDefault&&n.preventDefault(),e(t.i(_.a)())}}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/react/react.js"),c=t.n(s),p=t("./node_modules/react-helmet/lib/Helmet.js"),l=t.n(p),u=t("./node_modules/react-intl/lib/index.es.js"),d=t("./node_modules/react-redux/lib/index.js"),f=(t.n(d),t("./node_modules/reselect/es/index.js")),m=t("./app/containers/App/selectors.js"),y=t("./app/components/H2/index.js"),b=t("./app/components/ReposList/index.js"),j=t("./app/containers/HomePage/AtPrefix.js"),v=t("./app/containers/HomePage/CenteredSection.js"),h=t("./app/containers/HomePage/Form.js"),g=t("./app/containers/HomePage/Input.js"),w=t("./app/containers/HomePage/Section.js"),P=t("./app/containers/HomePage/messages.js"),_=t("./app/containers/App/actions.js"),O=t("./app/containers/HomePage/actions.js"),x=t("./app/containers/HomePage/selectors.js");t.d(n,"HomePage",function(){return H}),n.mapDispatchToProps=a;var S=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),z=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),H=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),z(n,[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){var e=this.props,n=e.loading,t=e.error,o=e.repos,r={loading:n,error:t,repos:o};return S("article",{},void 0,S(l.a,{title:"Home Page",meta:[{name:"description",content:"A React.js Boilerplate application homepage"}]}),S("div",{},void 0,S(v.a,{},void 0,S(y.a,{},void 0,c.a.createElement(u.c,P.a.startProjectHeader)),S("p",{},void 0,c.a.createElement(u.c,P.a.startProjectMessage))),S(w.a,{},void 0,S(y.a,{},void 0,c.a.createElement(u.c,P.a.trymeHeader)),S(h.a,{onSubmit:this.props.onSubmitForm},void 0,S("label",{htmlFor:"username"},void 0,c.a.createElement(u.c,P.a.trymeMessage),S(j.a,{},void 0,c.a.createElement(u.c,P.a.trymeAtPrefix)),S(g.a,{id:"username",type:"text",placeholder:"mxstbr",value:this.props.username,onChange:this.props.onChangeUsername}))),c.a.createElement(b.a,r))))}}]),n}(c.a.PureComponent),I=t.i(f.b)({repos:t.i(m.b)(),username:t.i(x.a)(),loading:t.i(m.c)(),error:t.i(m.d)()});n.default=t.i(d.connect)(I,a)(H)},"./app/containers/HomePage/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({startProjectHeader:{id:"boilerplate.containers.HomePage.start_project.header",defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"boilerplate.containers.HomePage.start_project.message",defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"boilerplate.containers.HomePage.tryme.header",defaultMessage:"Try me!"},trymeMessage:{id:"boilerplate.containers.HomePage.tryme.message",defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"boilerplate.containers.HomePage.tryme.atPrefix",defaultMessage:"@"}})},"./app/containers/HomePage/selectors.js":function(e,n,t){"use strict";var o=t("./node_modules/reselect/es/index.js");t.d(n,"a",function(){return i});var r=function(e){return e.get("home")},i=function(){return t.i(o.a)(r,function(e){return e.get("username")})}},"./app/containers/RepoListItem/IssueIcon.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/IssueIcon/index.js"),a=o(["\n  fill: #ccc;\n  margin-right: 0.25em;\n"],["\n  fill: #ccc;\n  margin-right: 0.25em;\n"]),s=t.i(r.a)(i.a)(a);n.a=s},"./app/containers/RepoListItem/IssueLink.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/A/index.js"),a=o(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]),s=t.i(r.a)(i.a)(a);n.a=s},"./app/containers/RepoListItem/RepoLink.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=t("./app/components/A/index.js"),a=o(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]),s=t.i(r.a)(i.a)(a);n.a=s},"./app/containers/RepoListItem/Wrapper.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),i=o(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"]),a=r.a.div(i);n.a=a},"./app/containers/RepoListItem/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t("./node_modules/react/react.js"),s=t.n(a),c=t("./node_modules/react-redux/lib/index.js"),p=(t.n(c),t("./node_modules/reselect/es/index.js")),l=t("./node_modules/react-intl/lib/index.es.js"),u=t("./app/containers/App/selectors.js"),d=t("./app/components/ListItem/index.js"),f=t("./app/containers/RepoListItem/IssueIcon.js"),m=t("./app/containers/RepoListItem/IssueLink.js"),y=t("./app/containers/RepoListItem/RepoLink.js"),b=t("./app/containers/RepoListItem/Wrapper.js"),j=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),h=j(f.a,{}),g=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),v(n,[{key:"render",value:function(){var e=this.props.item,n="";e.owner.login!==this.props.currentUser&&(n=e.owner.login+"/");var t=j(b.a,{},void 0,j(y.a,{href:e.html_url,target:"_blank"},void 0,n+e.name),j(m.a,{href:e.html_url+"/issues",target:"_blank"},void 0,h,j(l.e,{value:e.open_issues_count})));return j(d.a,{item:t},"repo-list-item-"+e.full_name)}}]),n}(s.a.PureComponent);n.a=t.i(c.connect)(t.i(p.b)({currentUser:t.i(u.e)()}))(g)}});