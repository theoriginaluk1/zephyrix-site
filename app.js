(()=>{var k_=Object.create;var cm=Object.defineProperty;var B_=Object.getOwnPropertyDescriptor;var z_=Object.getOwnPropertyNames;var V_=Object.getPrototypeOf,H_=Object.prototype.hasOwnProperty;var xr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var G_=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of z_(e))!H_.call(t,r)&&r!==n&&cm(t,r,{get:()=>e[r],enumerable:!(i=B_(e,r))||i.enumerable});return t};var um=(t,e,n)=>(n=t!=null?k_(V_(t)):{},G_(e||!t||!t.__esModule?cm(n,"default",{value:t,enumerable:!0}):n,t));var Sm=xr(ze=>{"use strict";var xo=Symbol.for("react.element"),W_=Symbol.for("react.portal"),X_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),J_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),j_=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),hm=Symbol.iterator;function ex(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function ts(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vm(){}vm.prototype=ts.prototype;function xu(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}var Mu=xu.prototype=new vm;Mu.constructor=xu;mm(Mu,ts.prototype);Mu.isPureReactComponent=!0;var dm=Array.isArray,ym=Object.prototype.hasOwnProperty,Su={current:null},_m={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ym.call(e,i)&&!_m.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xo,type:t,key:s,ref:o,props:r,_owner:Su.current}}function tx(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wu(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function nx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nx(""+t.key):e.toString(36)}function Ha(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case W_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_u(o,0):i,dm(r)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),Ha(r,e,n,"",function(c){return c})):r!=null&&(wu(r)&&(r=tx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_u(s,a);o+=Ha(s,e,n,l,r)}else if(l=ex(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_u(s,a++),o+=Ha(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Ha(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ix(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ga={transition:null},rx={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:Su};function Mm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!wu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=ts;ze.Fragment=X_;ze.Profiler=Y_;ze.PureComponent=xu;ze.StrictMode=q_;ze.Suspense=K_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx;ze.act=Mm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Su.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ym.call(e,l)&&!_m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xo,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$_,_context:t},t.Consumer=t};ze.createElement=xm;ze.createFactory=function(t){var e=xm.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:J_,render:t}};ze.isValidElement=wu;ze.lazy=function(t){return{$$typeof:Q_,_payload:{_status:-1,_result:t},_init:ix}};ze.memo=function(t,e){return{$$typeof:j_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ga.transition;Ga.transition={};try{t()}finally{Ga.transition=e}};ze.unstable_act=Mm;ze.useCallback=function(t,e){return qt.current.useCallback(t,e)};ze.useContext=function(t){return qt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return qt.current.useEffect(t,e)};ze.useId=function(){return qt.current.useId()};ze.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return qt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};ze.useRef=function(t){return qt.current.useRef(t)};ze.useState=function(t){return qt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return qt.current.useTransition()};ze.version="18.3.1"});var Eu=xr((Jb,wm)=>{"use strict";wm.exports=Sm()});var Nm=xr(st=>{"use strict";function Cu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Wa(r,e))t[i]=e,t[n]=r,n=i;else break e}}function kn(t){return t.length===0?null:t[0]}function qa(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Wa(a,n))l<r&&0>Wa(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Wa(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Wa(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Em=performance,st.unstable_now=function(){return Em.now()}):(Tu=Date,Tm=Tu.now(),st.unstable_now=function(){return Tu.now()-Tm});var Em,Tu,Tm,jn=[],zi=[],sx=1,wn=null,Ot=3,Ya=!1,Mr=!1,So=!1,Cm=typeof setTimeout=="function"?setTimeout:null,Pm=typeof clearTimeout=="function"?clearTimeout:null,Am=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Pu(t){for(var e=kn(zi);e!==null;){if(e.callback===null)qa(zi);else if(e.startTime<=t)qa(zi),e.sortIndex=e.expirationTime,Cu(jn,e);else break;e=kn(zi)}}function Iu(t){if(So=!1,Pu(t),!Mr)if(kn(jn)!==null)Mr=!0,Lu(Ru);else{var e=kn(zi);e!==null&&Nu(Iu,e.startTime-t)}}function Ru(t,e){Mr=!1,So&&(So=!1,Pm(wo),wo=-1),Ya=!0;var n=Ot;try{for(Pu(e),wn=kn(jn);wn!==null&&(!(wn.expirationTime>e)||t&&!Lm());){var i=wn.callback;if(typeof i=="function"){wn.callback=null,Ot=wn.priorityLevel;var r=i(wn.expirationTime<=e);e=st.unstable_now(),typeof r=="function"?wn.callback=r:wn===kn(jn)&&qa(jn),Pu(e)}else qa(jn);wn=kn(jn)}if(wn!==null)var s=!0;else{var o=kn(zi);o!==null&&Nu(Iu,o.startTime-e),s=!1}return s}finally{wn=null,Ot=n,Ya=!1}}var $a=!1,Xa=null,wo=-1,Im=5,Rm=-1;function Lm(){return!(st.unstable_now()-Rm<Im)}function Au(){if(Xa!==null){var t=st.unstable_now();Rm=t;var e=!0;try{e=Xa(!0,t)}finally{e?Mo():($a=!1,Xa=null)}}else $a=!1}var Mo;typeof Am=="function"?Mo=function(){Am(Au)}:typeof MessageChannel!="undefined"?(bu=new MessageChannel,bm=bu.port2,bu.port1.onmessage=Au,Mo=function(){bm.postMessage(null)}):Mo=function(){Cm(Au,0)};var bu,bm;function Lu(t){Xa=t,$a||($a=!0,Mo())}function Nu(t,e){wo=Cm(function(){t(st.unstable_now())},e)}st.unstable_IdlePriority=5;st.unstable_ImmediatePriority=1;st.unstable_LowPriority=4;st.unstable_NormalPriority=3;st.unstable_Profiling=null;st.unstable_UserBlockingPriority=2;st.unstable_cancelCallback=function(t){t.callback=null};st.unstable_continueExecution=function(){Mr||Ya||(Mr=!0,Lu(Ru))};st.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Im=0<t?Math.floor(1e3/t):5};st.unstable_getCurrentPriorityLevel=function(){return Ot};st.unstable_getFirstCallbackNode=function(){return kn(jn)};st.unstable_next=function(t){switch(Ot){case 1:case 2:case 3:var e=3;break;default:e=Ot}var n=Ot;Ot=e;try{return t()}finally{Ot=n}};st.unstable_pauseExecution=function(){};st.unstable_requestPaint=function(){};st.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Ot;Ot=t;try{return e()}finally{Ot=n}};st.unstable_scheduleCallback=function(t,e,n){var i=st.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:sx++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Cu(zi,t),kn(jn)===null&&t===kn(zi)&&(So?(Pm(wo),wo=-1):So=!0,Nu(Iu,n-i))):(t.sortIndex=r,Cu(jn,t),Mr||Ya||(Mr=!0,Lu(Ru))),t};st.unstable_shouldYield=Lm;st.unstable_wrapCallback=function(t){var e=Ot;return function(){var n=Ot;Ot=e;try{return t.apply(this,arguments)}finally{Ot=n}}}});var Um=xr((jb,Dm)=>{"use strict";Dm.exports=Nm()});var Bv=xr(mn=>{"use strict";var ox=Eu(),fn=Um();function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hg=new Set,Xo={};function Dr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Xo[t]=e,t=0;t<e.length;t++)Hg.add(e[t])}var yi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),nh=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Om={};function lx(t){return nh.call(Om,t)?!0:nh.call(Fm,t)?!1:ax.test(t)?Om[t]=!0:(Fm[t]=!0,!1)}function cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e=="undefined"||cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,Zh);Dt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,Zh);Dt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,Zh);Dt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),Xg=Symbol.for("react.offscreen"),km=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Du;function Lo(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Uu=!1;function Fu(t,e){if(!t||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function hx(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case ih:return"Profiler";case Kh:return"StrictMode";case rh:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function dx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fx(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=fx(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $g(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function lh(t,e){$g(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(No(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Zg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,Kg=(function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mx=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,vs=null,ys=null;function Gm(t){if(t=ua(t)){if(typeof mh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=jl(e),mh(t.stateNode,t.type,e))}}function e0(t){vs?ys?ys.push(t):ys=[t]:vs=t}function t0(){if(vs){var t=vs,e=ys;if(ys=vs=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function n0(t,e){return t(e)}function i0(){}var Ou=!1;function r0(t,e,n){if(Ou)return t(e,n);Ou=!0;try{return n0(t,e,n)}finally{Ou=!1,(vs!==null||ys!==null)&&(i0(),t0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var gh=!1;if(yi)try{ns={},Object.defineProperty(ns,"passive",{get:function(){gh=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{gh=!1}var ns;function gx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Oo=!1,Tl=null,Al=!1,vh=null,vx={onError:function(t){Oo=!0,Tl=t}};function yx(t,e,n,i,r,s,o,a,l){Oo=!1,Tl=null,gx.apply(vx,arguments)}function _x(t,e,n,i,r,s,o,a,l){if(yx.apply(this,arguments),Oo){if(Oo){var c=Tl;Oo=!1,Tl=null}else throw Error(te(198));Al||(Al=!0,vh=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Ur(t)!==t)throw Error(te(188))}function xx(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wm(r),t;if(s===i)return Wm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function o0(t){return t=xx(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=fn.unstable_scheduleCallback,Xm=fn.unstable_cancelCallback,Mx=fn.unstable_shouldYield,Sx=fn.unstable_requestPaint,Mt=fn.unstable_now,wx=fn.unstable_getCurrentPriorityLevel,td=fn.unstable_ImmediatePriority,c0=fn.unstable_UserBlockingPriority,bl=fn.unstable_NormalPriority,Ex=fn.unstable_LowPriority,u0=fn.unstable_IdlePriority,$l=null,ni=null;function Tx(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:Cx,Ax=Math.log,bx=Math.LN2;function Cx(t){return t>>>=0,t===0?32:31-(Ax(t)/bx|0)|0}var ja=64,Qa=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=n&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=ja;return ja<<=1,(ja&4194240)===0&&(ja=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function Rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function d0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var f0,id,p0,m0,g0,_h=!1,el=[],$i=null,Zi=null,Ji=null,$o=new Map,Zo=new Map,Wi=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nx(t,e,n,i,r){switch(e){case"focusin":return $i=To($i,t,e,n,i,r),!0;case"dragenter":return Zi=To(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=To(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,To($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,To(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function v0(t){var e=Er(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ph=i,n.target.dispatchEvent(i),ph=null}else return e=ua(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){pl(t)&&n.delete(e)}function Dx(){_h=!1,$i!==null&&pl($i)&&($i=null),Zi!==null&&pl(Zi)&&(Zi=null),Ji!==null&&pl(Ji)&&(Ji=null),$o.forEach(Ym),Zo.forEach(Ym)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,Dx)))}function Jo(t){function e(r){return Ao(r,t)}if(0<el.length){Ao(el[0],t);for(var n=1;n<el.length;n++){var i=el[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&Ao($i,t),Zi!==null&&Ao(Zi,t),Ji!==null&&Ao(Ji,t),$o.forEach(e),Zo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&Wi.shift()}var _s=Si.ReactCurrentBatchConfig,Pl=!0;function Ux(t,e,n,i){var r=Qe,s=_s.transition;_s.transition=null;try{Qe=1,rd(t,e,n,i)}finally{Qe=r,_s.transition=s}}function Fx(t,e,n,i){var r=Qe,s=_s.transition;_s.transition=null;try{Qe=4,rd(t,e,n,i)}finally{Qe=r,_s.transition=s}}function rd(t,e,n,i){if(Pl){var r=xh(t,e,n,i);if(r===null)Xu(t,e,i,Il,n),qm(t,i);else if(Nx(r,t,e,n,i))i.stopPropagation();else if(qm(t,i),e&4&&-1<Lx.indexOf(t)){for(;r!==null;){var s=ua(r);if(s!==null&&f0(s),s=xh(t,e,n,i),s===null&&Xu(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xu(t,e,i,null,n)}}var Il=null;function xh(t,e,n,i){if(Il=null,t=ed(i),t=Er(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case td:return 1;case c0:return 4;case bl:case Ex:return 16;case u0:return 536870912;default:return 16}default:return 16}}var qi=null,sd=null,ml=null;function _0(){if(ml)return ml;var t,e=sd,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function $m(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:$m,this.isPropagationStopped=$m,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=pn(Ps),ca=yt({},Ps,{view:0,detail:0}),Ox=pn(ca),Bu,zu,bo,Zl=yt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Bu=t.screenX-bo.screenX,zu=t.screenY-bo.screenY):zu=Bu=0,bo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Zm=pn(Zl),kx=yt({},Zl,{dataTransfer:0}),Bx=pn(kx),zx=yt({},ca,{relatedTarget:0}),Vu=pn(zx),Vx=yt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=pn(Vx),Gx=yt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=pn(Gx),Xx=yt({},Ps,{data:0}),Jm=pn(Xx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$x[t])?!!e[t]:!1}function ad(){return Zx}var Jx=yt({},ca,{key:function(t){if(t.key){var e=qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=pn(Jx),jx=yt({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=pn(jx),Qx=yt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),eM=pn(Qx),tM=yt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),nM=pn(tM),iM=yt({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rM=pn(iM),sM=[9,13,27,32],ld=yi&&"CompositionEvent"in window,ko=null;yi&&"documentMode"in document&&(ko=document.documentMode);var oM=yi&&"TextEvent"in window&&!ko,x0=yi&&(!ld||ko&&8<ko&&11>=ko),jm=" ",Qm=!1;function M0(t,e){switch(t){case"keyup":return sM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function aM(t,e){switch(t){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(Qm=!0,jm);case"textInput":return t=e.data,t===jm&&Qm?null:t;default:return null}}function lM(t,e){if(os)return t==="compositionend"||!ld&&M0(t,e)?(t=_0(),ml=sd=qi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x0&&e.locale!=="ko"?null:e.data;default:return null}}var cM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cM[t.type]:e==="textarea"}function w0(t,e,n,i){e0(i),e=Rl(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bo=null,Ko=null;function uM(t){D0(t,0)}function Jl(t){var e=cs(t);if(Yg(e))return t}function hM(t,e){if(t==="change")return e}var E0=!1;yi&&(yi?(il="oninput"in document,il||(Hu=document.createElement("div"),Hu.setAttribute("oninput","return;"),il=typeof Hu.oninput=="function"),nl=il):nl=!1,E0=nl&&(!document.documentMode||9<document.documentMode));var nl,il,Hu;function tg(){Bo&&(Bo.detachEvent("onpropertychange",T0),Ko=Bo=null)}function T0(t){if(t.propertyName==="value"&&Jl(Ko)){var e=[];w0(e,Ko,t,ed(t)),r0(uM,e)}}function dM(t,e,n){t==="focusin"?(tg(),Bo=e,Ko=n,Bo.attachEvent("onpropertychange",T0)):t==="focusout"&&tg()}function fM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Ko)}function pM(t,e){if(t==="click")return Jl(e)}function mM(t,e){if(t==="input"||t==="change")return Jl(e)}function gM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:gM;function jo(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nh.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=ng(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b0(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vM(t){var e=b0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(i!==null&&cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ig(n,s);var o=ig(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yM=yi&&"documentMode"in document&&11>=document.documentMode,as=null,Mh=null,zo=null,Sh=!1;function rg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||as==null||as!==El(i)||(i=as,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zo&&jo(zo,i)||(zo=i,i=Rl(Mh,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Gu={},C0={};yi&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Kl(t){if(Gu[t])return Gu[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C0)return Gu[t]=e[n];return t}var P0=Kl("animationend"),I0=Kl("animationiteration"),R0=Kl("animationstart"),L0=Kl("transitionend"),N0=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){N0.set(t,e),Dr(e,[t])}for(sl=0;sl<sg.length;sl++)ol=sg[sl],og=ol.toLowerCase(),ag=ol[0].toUpperCase()+ol.slice(1),rr(og,"on"+ag);var ol,og,ag,sl;rr(P0,"onAnimationEnd");rr(I0,"onAnimationIteration");rr(R0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(L0,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function lg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_x(i,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lg(r,a,c),s=l}}}if(Al)throw t=vh,Al=!1,vh=null,t}function ut(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var i=t+"__bubble";n.has(i)||(U0(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),U0(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[al]){t[al]=!0,Hg.forEach(function(n){n!=="selectionchange"&&(_M.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Wu("selectionchange",!1,e))}}function U0(t,e,n,i){switch(y0(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=rd}n=r.bind(null,e,n,t),r=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xu(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}r0(function(){var c=s,u=ed(n),p=[];e:{var d=N0.get(t);if(d!==void 0){var m=od,y=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":m=Kx;break;case"focusin":y="focus",m=Vu;break;case"focusout":y="blur",m=Vu;break;case"beforeblur":case"afterblur":m=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=eM;break;case P0:case I0:case R0:m=Hx;break;case L0:m=nM;break;case"scroll":m=Ox;break;case"wheel":m=rM;break;case"copy":case"cut":case"paste":m=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Km}var v=(e&4)!==0,g=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=Yo(_,h),M!=null&&v.push(ea(_,M,x)))),g)break;_=_.return}0<v.length&&(d=new m(d,y,null,n,u),p.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ph&&(y=n.relatedTarget||n.fromElement)&&(Er(y)||y[_i]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Er(y):null,y!==null&&(g=Ur(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=Zm,M="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Km,M="onPointerLeave",h="onPointerEnter",_="pointer"),g=m==null?d:cs(m),x=y==null?d:cs(y),d=new v(M,_+"leave",m,n,u),d.target=g,d.relatedTarget=x,M=null,Er(u)===c&&(v=new v(h,_+"enter",y,n,u),v.target=x,v.relatedTarget=g,M=v),g=M,m&&y)t:{for(v=m,h=y,_=0,x=v;x;x=is(x))_++;for(x=0,M=h;M;M=is(M))x++;for(;0<_-x;)v=is(v),_--;for(;0<x-_;)h=is(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=is(v),h=is(h)}v=null}else v=null;m!==null&&cg(p,d,m,v,!1),y!==null&&g!==null&&cg(p,g,y,v,!0)}}e:{if(d=c?cs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=hM;else if(eg(d))if(E0)P=mM;else{P=fM;var b=dM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=pM);if(P&&(P=P(t,c))){w0(p,P,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&ch(d,"number",d.value)}switch(b=c?cs(c):window,t){case"focusin":(eg(b)||b.contentEditable==="true")&&(as=b,Mh=c,zo=null);break;case"focusout":zo=Mh=as=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,rg(p,n,u);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":rg(p,n,u)}var C;if(ld)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else os?M0(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(x0&&n.locale!=="ko"&&(os||I!=="onCompositionStart"?I==="onCompositionEnd"&&os&&(C=_0()):(qi=u,sd="value"in qi?qi.value:qi.textContent,os=!0)),b=Rl(c,I),0<b.length&&(I=new Jm(I,t,null,n,u),p.push({event:I,listeners:b}),C?I.data=C:(C=S0(n),C!==null&&(I.data=C)))),(C=oM?aM(t,n):lM(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(u=new Jm("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:c}),u.data=C))}D0(p,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(ea(t,s,r)),s=Yo(t,e),s!=null&&i.push(ea(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(n,s),l!=null&&o.unshift(ea(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(MM,"")}function ll(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(te(425))}function Ll(){}var wh=null,Eh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof hg!="undefined"?function(t){return hg.resolve(null).then(t).catch(EM)}:Ah;function EM(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),ti="__reactFiber$"+Is,ta="__reactProps$"+Is,_i="__reactContainer$"+Is,bh="__reactEvents$"+Is,TM="__reactListeners$"+Is,AM="__reactHandles$"+Is;function Er(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[ti])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[ti]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function jl(t){return t[ta]||null}var Ch=[],us=-1;function sr(t){return{current:t}}function ht(t){0>us||(t.current=Ch[us],Ch[us]=null,us--)}function ot(t,e){us++,Ch[us]=t.current,t.current=e}var ir={},Vt=sr(ir),nn=sr(!1),Pr=ir;function ws(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Nl(){ht(nn),ht(Vt)}function fg(t,e,n){if(Vt.current!==ir)throw Error(te(168));ot(Vt,e),ot(nn,n)}function F0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,dx(t)||"Unknown",r));return yt({},n,i)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Pr=Vt.current,ot(Vt,t),ot(nn,nn.current),!0}function pg(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=F0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ht(nn),ht(Vt),ot(Vt,t)):ht(nn),ot(nn,n)}var pi=null,Ql=!1,Yu=!1;function O0(t){pi===null?pi=[t]:pi.push(t)}function bM(t){Ql=!0,O0(t)}function or(){if(!Yu&&pi!==null){Yu=!0;var t=0,e=Qe;try{var n=pi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,Ql=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),l0(td,or),r}finally{Qe=e,Yu=!1}}return null}var hs=[],ds=0,Ul=null,Fl=0,En=[],Tn=0,Ir=null,mi=1,gi="";function Sr(t,e){hs[ds++]=Fl,hs[ds++]=Ul,Ul=t,Fl=e}function k0(t,e,n){En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ir,Ir=t;var i=mi;t=gi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-Gn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function ud(t){t.return!==null&&(Sr(t,1),k0(t,1,0))}function hd(t){for(;t===Ul;)Ul=hs[--ds],hs[ds]=null,Fl=hs[--ds],hs[ds]=null;for(;t===Ir;)Ir=En[--Tn],En[Tn]=null,gi=En[--Tn],En[Tn]=null,mi=En[--Tn],En[Tn]=null}var dn=null,hn=null,ft=!1,Hn=null;function B0(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,hn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,hn=null,!0):!1;default:return!1}}function Ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ih(t){if(ft){var e=hn;if(e){var n=e;if(!mg(t,e)){if(Ph(t))throw Error(te(418));e=Ki(n.nextSibling);var i=dn;e&&mg(t,e)?B0(i,n):(t.flags=t.flags&-4097|2,ft=!1,dn=t)}}else{if(Ph(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,dn=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function cl(t){if(t!==dn)return!1;if(!ft)return gg(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=hn)){if(Ph(t))throw z0(),Error(te(418));for(;e;)B0(t,e),e=Ki(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=dn?Ki(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=hn;t;)t=Ki(t.nextSibling)}function Es(){hn=dn=null,ft=!1}function dd(t){Hn===null?Hn=[t]:Hn.push(t)}var CM=Si.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function V0(t){function e(h,_){if(t){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=tr(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,x,M){return _===null||_.tag!==6?(_=eh(x,h.mode,M),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,M){var P=x.type;return P===ss?u(h,_,x.props.children,M,x.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&vg(P)===_.type)?(M=r(_,x.props),M.ref=Co(h,_,x),M.return=h,M):(M=wl(x.type,x.key,x.props,null,h.mode,M),M.ref=Co(h,_,x),M.return=h,M)}function c(h,_,x,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=th(x,h.mode,M),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function u(h,_,x,M,P){return _===null||_.tag!==7?(_=Cr(x,h.mode,M,P),_.return=h,_):(_=r(_,x),_.return=h,_)}function p(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=eh(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:return x=wl(_.type,_.key,_.props,null,h.mode,x),x.ref=Co(h,null,_),x.return=h,x;case rs:return _=th(_,h.mode,x),_.return=h,_;case Hi:var M=_._init;return p(h,M(_._payload),x)}if(No(_)||Eo(_))return _=Cr(_,h.mode,x,null),_.return=h,_;ul(h,_)}return null}function d(h,_,x,M){var P=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(h,_,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===P?l(h,_,x,M):null;case rs:return x.key===P?c(h,_,x,M):null;case Hi:return P=x._init,d(h,_,P(x._payload),M)}if(No(x)||Eo(x))return P!==null?null:u(h,_,x,M,null);ul(h,x)}return null}function m(h,_,x,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,a(_,h,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Za:return h=h.get(M.key===null?x:M.key)||null,l(_,h,M,P);case rs:return h=h.get(M.key===null?x:M.key)||null,c(_,h,M,P);case Hi:var b=M._init;return m(h,_,x,b(M._payload),P)}if(No(M)||Eo(M))return h=h.get(x)||null,u(_,h,M,P,null);ul(_,M)}return null}function y(h,_,x,M){for(var P=null,b=null,C=_,I=_=0,T=null;C!==null&&I<x.length;I++){C.index>I?(T=C,C=null):T=C.sibling;var w=d(h,C,x[I],M);if(w===null){C===null&&(C=T);break}t&&C&&w.alternate===null&&e(h,C),_=s(w,_,I),b===null?P=w:b.sibling=w,b=w,C=T}if(I===x.length)return n(h,C),ft&&Sr(h,I),P;if(C===null){for(;I<x.length;I++)C=p(h,x[I],M),C!==null&&(_=s(C,_,I),b===null?P=C:b.sibling=C,b=C);return ft&&Sr(h,I),P}for(C=i(h,C);I<x.length;I++)T=m(C,h,I,x[I],M),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?I:T.key),_=s(T,_,I),b===null?P=T:b.sibling=T,b=T);return t&&C.forEach(function(R){return e(h,R)}),ft&&Sr(h,I),P}function v(h,_,x,M){var P=Eo(x);if(typeof P!="function")throw Error(te(150));if(x=P.call(x),x==null)throw Error(te(151));for(var b=P=null,C=_,I=_=0,T=null,w=x.next();C!==null&&!w.done;I++,w=x.next()){C.index>I?(T=C,C=null):T=C.sibling;var R=d(h,C,w.value,M);if(R===null){C===null&&(C=T);break}t&&C&&R.alternate===null&&e(h,C),_=s(R,_,I),b===null?P=R:b.sibling=R,b=R,C=T}if(w.done)return n(h,C),ft&&Sr(h,I),P;if(C===null){for(;!w.done;I++,w=x.next())w=p(h,w.value,M),w!==null&&(_=s(w,_,I),b===null?P=w:b.sibling=w,b=w);return ft&&Sr(h,I),P}for(C=i(h,C);!w.done;I++,w=x.next())w=m(C,h,I,w.value,M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?I:w.key),_=s(w,_,I),b===null?P=w:b.sibling=w,b=w);return t&&C.forEach(function(W){return e(h,W)}),ft&&Sr(h,I),P}function g(h,_,x,M){if(typeof x=="object"&&x!==null&&x.type===ss&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var P=x.key,b=_;b!==null;){if(b.key===P){if(P=x.type,P===ss){if(b.tag===7){n(h,b.sibling),_=r(b,x.props.children),_.return=h,h=_;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&vg(P)===b.type){n(h,b.sibling),_=r(b,x.props),_.ref=Co(h,b,x),_.return=h,h=_;break e}n(h,b);break}else e(h,b);b=b.sibling}x.type===ss?(_=Cr(x.props.children,h.mode,M,x.key),_.return=h,h=_):(M=wl(x.type,x.key,x.props,null,h.mode,M),M.ref=Co(h,_,x),M.return=h,h=M)}return o(h);case rs:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=th(x,h.mode,M),_.return=h,h=_}return o(h);case Hi:return b=x._init,g(h,_,b(x._payload),M)}if(No(x))return y(h,_,x,M);if(Eo(x))return v(h,_,x,M);ul(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,x),_.return=h,h=_):(n(h,_),_=eh(x,h.mode,M),_.return=h,h=_),o(h)):n(h,_)}return g}var Ts=V0(!0),H0=V0(!1),Ol=sr(null),kl=null,fs=null,fd=null;function pd(){fd=fs=kl=null}function md(t){var e=Ol.current;ht(Ol),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){kl=t,fd=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(kl===null)throw Error(te(308));fs=t,kl.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var Tr=null;function gd(t){Tr===null?Tr=[t]:Tr.push(t)}function G0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(qe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}function yg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(m,p,d);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,p,d):y,d==null)break e;p=yt({},p,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=p):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=p}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var ha={},ii=sr(ha),na=sr(ha),ia=sr(ha);function Ar(t){if(t===ha)throw Error(te(174));return t}function yd(t,e){switch(ot(ia,e),ot(na,t),ot(ii,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hh(e,t)}ht(ii),ot(ii,e)}function As(){ht(ii),ht(na),ht(ia)}function X0(t){Ar(ia.current);var e=Ar(ii.current),n=hh(e,t.type);e!==n&&(ot(na,t),ot(ii,n))}function _d(t){na.current===t&&(ht(ii),ht(na))}var gt=sr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function xd(){for(var t=0;t<$u.length;t++)$u[t]._workInProgressVersionPrimary=null;$u.length=0}var yl=Si.ReactCurrentDispatcher,Zu=Si.ReactCurrentBatchConfig,Rr=0,vt=null,Et=null,Ct=null,Vl=!1,Vo=!1,ra=0,PM=0;function kt(){throw Error(te(321))}function Md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,s){if(Rr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?NM:DM,t=n(i,r),Vo){s=0;do{if(Vo=!1,ra=0,25<=s)throw Error(te(301));s+=1,Ct=Et=null,e.updateQueue=null,yl.current=UM,t=n(i,r)}while(Vo)}if(yl.current=Hl,e=Et!==null&&Et.next!==null,Rr=0,Ct=Et=vt=null,Vl=!1,e)throw Error(te(300));return t}function wd(){var t=ra!==0;return ra=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?vt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Pn(){if(Et===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Ct===null?vt.memoizedState:Ct.next;if(e!==null)Ct=e,Et=t;else{if(t===null)throw Error(te(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Ct===null?vt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function sa(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=Pn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Rr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,vt.lanes|=u,Lr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=Pn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function q0(){}function Y0(t,e){var n=vt,i=Pn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Ed(J0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,oa(9,Z0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(te(349));(Rr&30)!==0||$0(n,e,r)}return r}function $0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,i){e.value=n,e.getSnapshot=i,K0(e)&&j0(t)}function J0(t,e,n){return n(function(){K0(e)&&j0(t)})}function K0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function j0(t){var e=xi(t,1);e!==null&&Wn(e,t,1,-1)}function xg(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=LM.bind(null,vt,t),[e.memoizedState,t]}function oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Q0(){return Pn().memoizedState}function _l(t,e,n,i){var r=ei();vt.flags|=t,r.memoizedState=oa(1|e,n,void 0,i===void 0?null:i)}function ec(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Md(i,o.deps)){r.memoizedState=oa(e,n,s,i);return}}vt.flags|=t,r.memoizedState=oa(1|e,n,s,i)}function Mg(t,e){return _l(8390656,8,t,e)}function Ed(t,e){return ec(2048,8,t,e)}function ev(t,e){return ec(4,2,t,e)}function tv(t,e){return ec(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,nv.bind(null,e,t),n)}function Td(){}function rv(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n):(Xn(n,e)||(n=h0(),vt.lanes|=n,Lr|=n,t.baseState=!0),e)}function IM(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{Qe=n,Zu.transition=i}}function av(){return Pn().memoizedState}function RM(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))cv(e,n);else if(n=G0(t,e,n,i),n!==null){var r=$t();Wn(n,t,i,r),uv(n,e,i)}}function LM(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))cv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}n=G0(t,e,r,i),n!==null&&(r=$t(),Wn(n,t,i,r),uv(n,e,i))}}function lv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function cv(t,e){Vo=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}var Hl={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},NM={readContext:Cn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RM.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:Td,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=IM.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ei();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Pt===null)throw Error(te(349));(Rr&30)!==0||$0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mg(J0.bind(null,i,s,t),[t]),i.flags|=2048,oa(9,Z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Pt.identifierPrefix;if(ft){var n=gi,i=mi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DM={readContext:Cn,useCallback:rv,useContext:Cn,useEffect:Ed,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Ju,useRef:Q0,useState:function(){return Ju(sa)},useDebugValue:Td,useDeferredValue:function(t){var e=Pn();return ov(e,Et.memoizedState,t)},useTransition:function(){var t=Ju(sa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:Y0,useId:av,unstable_isNewReconciler:!1},UM={readContext:Cn,useCallback:rv,useContext:Cn,useEffect:Ed,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Ku,useRef:Q0,useState:function(){return Ku(sa)},useDebugValue:Td,useDeferredValue:function(t){var e=Pn();return Et===null?e.memoizedState=t:ov(e,Et.memoizedState,t)},useTransition:function(){var t=Ku(sa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:Y0,useId:av,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=er(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Wn(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=er(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Wn(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=er(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Wn(e,t,i,n),vl(e,t,i))}};function Sg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function hv(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Pr:Vt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Nh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Pr:Vt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=hx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ju(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FM=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,Wh=i),Dh(t,e)},n}function fv(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new FM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JM.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var OM=Si.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?H0(e,null,n,i):Ts(e,t.child,n,i)}function bg(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=Sd(t,e,n,i,s,r),n=wd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ft&&n&&ud(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Cg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pv(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function pv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(tn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Uh(t,e,n,i,r)}function mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ms,un),un|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ms,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ms,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ms,un),un|=i;return Yt(t,e,r,n),e.child}function gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,i,r){var s=rn(n)?Pr:Vt.current;return s=ws(e,s),xs(e,r),n=Sd(t,e,n,i,s,r),i=wd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ft&&i&&ud(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Pg(t,e,n,i,r){if(rn(n)){var s=!0;Dl(e)}else s=!1;if(xs(e,r),e.stateNode===null)xl(t,e),hv(e,n,i),Nh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?Pr:Vt.current,c=ws(e,c));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wg(e,o,i,c),Gi=!1;var d=e.memoizedState;o.state=d,Bl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||nn.current||Gi?(typeof u=="function"&&(Lh(e,n,u,i),l=e.memoizedState),(a=Gi||Sg(e,n,a,i,d,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Pr:Vt.current,l=ws(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&wg(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,Bl(e,i,o,r);var y=e.memoizedState;a!==p||d!==y||nn.current||Gi?(typeof m=="function"&&(Lh(e,n,m,i),y=e.memoizedState),(c=Gi||Sg(e,n,c,i,d,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Fh(t,e,n,i,s,r)}function Fh(t,e,n,i,r,s){gv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pg(e,n,!1),Mi(t,e,s);i=e.stateNode,OM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&pg(e,n,!0),e.child}function vv(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),yd(t,e.containerInfo)}function Ig(t,e,n,i,r){return Es(),dd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(gt,r&1),t===null)return Ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kh(n),e.memoizedState=Oh,t):Ad(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ad(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&dd(i),Ts(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ju(Error(te(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ts(e,t.child,null,o),e.child.memoizedState=kh(o),e.memoizedState=Oh,s);if((e.mode&1)===0)return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=ju(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Wn(i,t,r,-1))}return Ld(),i=ju(Error(te(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=KM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Ki(r.nextSibling),dn=e,ft=!0,Hn=null,t!==null&&(En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ir,mi=t.id,gi=t.overflow,Ir=e),e=Ad(e,i.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rh(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=gt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(gt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BM(t,e,n){switch(e.tag){case 3:vv(e),Es();break;case 5:X0(e);break;case 1:rn(e.type)&&Dl(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(gt,gt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?yv(t,e,n):(ot(gt,gt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);ot(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,mv(t,e,n)}return Mi(t,e,n)}var xv,Bh,Mv,Sv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};Mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ii.current);var s=null;switch(n){case"input":r=ah(t,r),i=ah(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=uh(t,r),i=uh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ll)}dh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zM(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&Nl(),Bt(e),null;case 3:return i=e.stateNode,As(),ht(nn),ht(Vt),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hn!==null&&(Yh(Hn),Hn=null))),Bh(t,e),Bt(e),null;case 5:_d(e);var r=Ar(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Bt(e),null}if(t=Ar(ii.current),cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[ta]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)ut(Uo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Bm(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Vm(i,s),ut("invalid",i)}dh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ja(i),zm(i,s,!0);break;case"textarea":Ja(i),Hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[ta]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)ut(Uo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Bm(t,i),r=ah(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Vm(t,i),r=uh(t,i),ut("invalid",t);break;default:r=i}dh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Jh(t,s,l,o))}switch(n){case"input":Ja(t),zm(t,i,!1);break;case"textarea":Ja(t),Hm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ar(ia.current),Ar(ii.current),cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Bt(e),null;case 13:if(ht(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)z0(),Es(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ti]=e}else Es(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Hn!==null&&(Yh(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(gt.current&1)!==0?Tt===0&&(Tt=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return As(),Bh(t,e),t===null&&Qo(e.stateNode.containerInfo),Bt(e),null;case 10:return md(e.type._context),Bt(e),null;case 17:return rn(e.type)&&Nl(),Bt(e),null;case 19:if(ht(gt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Tt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Cs&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Bt(e),null}else 2*Mt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=gt.current,ot(gt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(un&1073741824)!==0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function VM(t,e){switch(hd(e),e.tag){case 1:return rn(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),ht(nn),ht(Vt),xd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(ht(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(gt),null;case 4:return As(),null;case 10:return md(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var dl=!1,zt=!1,HM=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function zh(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Lg=!1;function GM(t,e){if(wh=Pl,t=b0(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},Pl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,g=y.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){xt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return y=Lg,Lg=!1,y}function Ho(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zh(e,n,s)}r=r.next}while(r!==i)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ta],delete e[bh],delete e[TM],delete e[AM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(i!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function Gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}var Lt=null,Vn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:zt||ps(n,e);case 6:var i=Lt,r=Vn;Lt=null,Vi(t,e,n),Lt=i,Vn=r,Lt!==null&&(Vn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Vn?(t=Lt,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),Jo(t)):qu(Lt,n.stateNode));break;case 4:i=Lt,r=Vn,Lt=n.stateNode.containerInfo,Vn=!0,Vi(t,e,n),Lt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&zh(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!zt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Vi(t,e,n),zt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HM),e.forEach(function(i){var r=jM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Vn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Lt===null)throw Error(te(160));Tv(s,o,r),Lt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Av(e,t),e=e.sibling}function Av(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),Qn(t),i&4){try{Ho(3,t,t.return),nc(3,t)}catch(v){xt(t,t.return,v)}try{Ho(5,t,t.return)}catch(v){xt(t,t.return,v)}}break;case 1:Bn(e,t),Qn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Bn(e,t),Qn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(v){xt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$g(r,s),fh(a,o);var c=fh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],p=l[o+1];u==="style"?Qg(r,p):u==="dangerouslySetInnerHTML"?Kg(r,p):u==="children"?qo(r,p):Jh(r,u,p,c)}switch(a){case"input":lh(r,s);break;case"textarea":Zg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ta]=s}catch(v){xt(t,t.return,v)}}break;case 6:if(Bn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){xt(t,t.return,v)}}break;case 3:if(Bn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(v){xt(t,t.return,v)}break;case 4:Bn(e,t),Qn(t);break;case 13:Bn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pd=Mt())),i&4&&Dg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||u,Bn(e,t),zt=c):Bn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(ge=t,u=t.child;u!==null;){for(p=ge=u;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ho(4,d,d.return);break;case 1:ps(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){xt(i,n,v)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){Fg(p);continue}}m!==null?(m.return=d,ge=m):Fg(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jg("display",o))}catch(v){xt(t,t.return,v)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){xt(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),Qn(t),i&4&&Dg(t);break;case 21:break;default:Bn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=Ng(t);Gh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ng(t);Hh(t,a,o);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WM(t,e,n){ge=t,bv(t,e,n)}function bv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=dl;var c=zt;if(dl=o,(zt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Og(r):l!==null?(l.return=o,ge=l):Og(r);for(;s!==null;)ge=s,bv(s,e,n),s=s.sibling;ge=r,dl=a,zt=c}Ug(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ge=s):Ug(t,e,n)}}function Ug(t){for(;ge!==null;){var e=ge;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:zt||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}zt||e.flags&512&&Vh(e)}catch(d){xt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Fg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Og(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Vh(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Vh(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var XM=Math.ceil,Gl=Si.ReactCurrentDispatcher,bd=Si.ReactCurrentOwner,bn=Si.ReactCurrentBatchConfig,qe=0,Pt=null,St=null,Nt=0,un=0,ms=sr(0),Tt=0,aa=null,Lr=0,ic=0,Cd=0,Go=null,en=null,Pd=0,Cs=1/0,fi=null,Wl=!1,Wh=null,Qi=null,fl=!1,Yi=null,Xl=0,Wo=0,Xh=null,Ml=-1,Sl=0;function $t(){return(qe&6)!==0?Mt():Ml!==-1?Ml:Ml=Mt()}function er(t){return(t.mode&1)===0?1:(qe&2)!==0&&Nt!==0?Nt&-Nt:CM.transition!==null?(Sl===0&&(Sl=h0()),Sl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t)}function Wn(t,e,n,i){if(50<Wo)throw Wo=0,Xh=null,Error(te(185));la(t,n,i),((qe&2)===0||t!==Pt)&&(t===Pt&&((qe&2)===0&&(ic|=n),Tt===4&&Xi(t,Nt)),sn(t,i),n===1&&qe===0&&(e.mode&1)===0&&(Cs=Mt()+500,Ql&&or()))}function sn(t,e){var n=t.callbackNode;Ix(t,e);var i=Cl(t,t===Pt?Nt:0);if(i===0)n!==null&&Xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xm(n),e===1)t.tag===0?bM(kg.bind(null,t)):O0(kg.bind(null,t)),wM(function(){(qe&6)===0&&or()}),n=null;else{switch(d0(i)){case 1:n=td;break;case 4:n=c0;break;case 16:n=bl;break;case 536870912:n=u0;break;default:n=bl}n=Uv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(Ml=-1,Sl=0,(qe&6)!==0)throw Error(te(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=Cl(t,t===Pt?Nt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=ql(t,i);else{e=i;var r=qe;qe|=2;var s=Iv();(Pt!==t||Nt!==e)&&(fi=null,Cs=Mt()+500,br(t,e));do try{$M();break}catch(a){Pv(t,a)}while(!0);pd(),Gl.current=s,qe=r,St!==null?e=0:(Pt=null,Nt=0,e=Tt)}if(e!==0){if(e===2&&(r=yh(t),r!==0&&(i=r,e=qh(t,r))),e===1)throw n=aa,br(t,0),Xi(t,i),sn(t,Mt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!qM(r)&&(e=ql(t,i),e===2&&(s=yh(t),s!==0&&(i=s,e=qh(t,s))),e===1))throw n=aa,br(t,0),Xi(t,i),sn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:wr(t,en,fi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Pd+500-Mt(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ah(wr.bind(null,t,en,fi),e);break}wr(t,en,fi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XM(i/1960))-i,10<i){t.timeoutHandle=Ah(wr.bind(null,t,en,fi),i);break}wr(t,en,fi);break;case 5:wr(t,en,fi);break;default:throw Error(te(329))}}}return sn(t,Mt()),t.callbackNode===n?Cv.bind(null,t):null}function qh(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=ql(t,e),t!==2&&(e=en,en=n,e!==null&&Yh(e)),t}function Yh(t){en===null?en=t:en.push.apply(en,t)}function qM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Cd,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function kg(t){if((qe&6)!==0)throw Error(te(327));Ms();var e=Cl(t,0);if((e&1)===0)return sn(t,Mt()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=yh(t);i!==0&&(e=i,n=qh(t,i))}if(n===1)throw n=aa,br(t,0),Xi(t,e),sn(t,Mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,en,fi),sn(t,Mt()),null}function Id(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Cs=Mt()+500,Ql&&or())}}function Nr(t){Yi!==null&&Yi.tag===0&&(qe&6)===0&&Ms();var e=qe;qe|=1;var n=bn.transition,i=Qe;try{if(bn.transition=null,Qe=1,t)return t()}finally{Qe=i,bn.transition=n,qe=e,(qe&6)===0&&or()}}function Rd(){un=ms.current,ht(ms)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SM(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:As(),ht(nn),ht(Vt),xd();break;case 5:_d(i);break;case 4:As();break;case 13:ht(gt);break;case 19:ht(gt);break;case 10:md(i.type._context);break;case 22:case 23:Rd()}n=n.return}if(Pt=t,St=t=tr(t.current,null),Nt=un=e,Tt=0,aa=null,Cd=ic=Lr=0,en=Go=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function Pv(t,e){do{var n=St;try{if(pd(),yl.current=Hl,Vl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Rr=0,Ct=Et=vt=null,Vo=!1,ra=0,bd.current=null,n===null||n.return===null){Tt=1,aa=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,p=u.tag;if((u.mode&1)===0&&(p===0||p===11||p===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Tg(o);if(m!==null){m.flags&=-257,Ag(m,o,a,s,e),m.mode&1&&Eg(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Eg(s,c,e),Ld();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var g=Tg(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),Ag(g,o,a,s,e),dd(bs(l,a));break e}}s=l=bs(l,a),Tt!==4&&(Tt=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=dv(s,l,e);yg(s,h);break e;case 1:a=l;var _=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qi===null||!Qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=fv(s,a,e);yg(s,M);break e}}s=s.return}while(s!==null)}Lv(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Iv(){var t=Gl.current;return Gl.current=Hl,t===null?Hl:t}function Ld(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||(Lr&268435455)===0&&(ic&268435455)===0||Xi(Pt,Nt)}function ql(t,e){var n=qe;qe|=2;var i=Iv();(Pt!==t||Nt!==e)&&(fi=null,br(t,e));do try{YM();break}catch(r){Pv(t,r)}while(!0);if(pd(),qe=n,Gl.current=i,St!==null)throw Error(te(261));return Pt=null,Nt=0,Tt}function YM(){for(;St!==null;)Rv(St)}function $M(){for(;St!==null&&!Mx();)Rv(St)}function Rv(t){var e=Dv(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?Lv(t):St=e,bd.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=zM(n,e,un),n!==null){St=n;return}}else{if(n=VM(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function wr(t,e,n){var i=Qe,r=bn.transition;try{bn.transition=null,Qe=1,ZM(t,e,n,i)}finally{bn.transition=r,Qe=i}return null}function ZM(t,e,n,i){do Ms();while(Yi!==null);if((qe&6)!==0)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rx(t,s),t===Pt&&(St=Pt=null,Nt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fl||(fl=!0,Uv(bl,function(){return Ms(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=bn.transition,bn.transition=null;var o=Qe;Qe=1;var a=qe;qe|=4,bd.current=null,GM(t,n),Av(n,t),vM(Eh),Pl=!!wh,Eh=wh=null,t.current=n,WM(n,t,r),Sx(),qe=a,Qe=o,bn.transition=s}else t.current=n;if(fl&&(fl=!1,Yi=t,Xl=r),s=t.pendingLanes,s===0&&(Qi=null),Tx(n.stateNode,i),sn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=Wh,Wh=null,t;return(Xl&1)!==0&&t.tag!==0&&Ms(),s=t.pendingLanes,(s&1)!==0?t===Xh?Wo++:(Wo=0,Xh=t):Wo=0,or(),null}function Ms(){if(Yi!==null){var t=d0(Xl),e=bn.transition,n=Qe;try{if(bn.transition=null,Qe=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Xl=0,(qe&6)!==0)throw Error(te(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if((ge.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Ho(8,u,s)}var p=u.child;if(p!==null)p.return=u,ge=p;else for(;ge!==null;){u=ge;var d=u.sibling,m=u.return;if(wv(u),u===c){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}ge=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var _=t.current;for(ge=_;ge!==null;){o=ge;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ge=x;else e:for(o=_;ge!==null;){if(a=ge,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(P){xt(a,a.return,P)}if(a===o){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(qe=r,or(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Qe=n,bn.transition=e}}return!1}function Bg(t,e,n){e=bs(n,e),e=dv(t,e,1),t=ji(t,e,1),e=$t(),t!==null&&(la(t,1,e),sn(t,e))}function xt(t,e,n){if(t.tag===3)Bg(t,t,n);else for(;e!==null;){if(e.tag===3){Bg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=bs(n,t),t=fv(e,t,1),e=ji(e,t,1),t=$t(),e!==null&&(la(e,1,t),sn(e,t));break}}e=e.return}}function JM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Nt&n)===n&&(Tt===4||Tt===3&&(Nt&130023424)===Nt&&500>Mt()-Pd?br(t,0):Cd|=n),sn(t,e)}function Nv(t,e){e===0&&((t.mode&1)===0?e=1:(e=Qa,Qa<<=1,(Qa&130023424)===0&&(Qa=4194304)));var n=$t();t=xi(t,e),t!==null&&(la(t,e,n),sn(t,n))}function KM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nv(t,n)}function jM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Nv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return tn=!1,BM(t,e,n);tn=(t.flags&131072)!==0}else tn=!1,ft&&(e.flags&1048576)!==0&&k0(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=ws(e,Vt.current);xs(e,n),r=Sd(null,e,i,t,r,n);var s=wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vd(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,Nh(e,i,t,n),e=Fh(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&ud(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eS(i),t=zn(i,t),r){case 0:e=Uh(null,e,i,t,n);break e;case 1:e=Pg(null,e,i,t,n);break e;case 11:e=bg(null,e,i,t,n);break e;case 14:e=Cg(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Uh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Pg(t,e,i,r,n);case 3:e:{if(vv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W0(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(te(423)),e),e=Ig(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(te(424)),e),e=Ig(t,e,i,n,r);break e}else for(hn=Ki(e.stateNode.containerInfo.firstChild),dn=e,ft=!0,Hn=null,n=H0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=Mi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return X0(e),t===null&&Ih(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Th(i,r)?o=null:s!==null&&Th(i,s)&&(e.flags|=32),gv(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Ih(e),null;case 13:return yv(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),bg(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Ol,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!nn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Cn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Cg(t,e,i,r,n);case 15:return pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),xl(t,e),e.tag=1,rn(i)?(t=!0,Dl(e)):t=!1,xs(e,n),hv(e,i,r),Nh(e,i,r,n),Fh(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return mv(t,e,n)}throw Error(te(156,e.tag))};function Uv(t,e){return l0(t,e)}function QM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new QM(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jh)return 11;if(t===Qh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Cr(n.children,r,s,e);case Kh:o=8,r|=8;break;case ih:return t=An(12,n,e,r|2),t.elementType=ih,t.lanes=s,t;case rh:return t=An(13,n,e,r),t.elementType=rh,t.lanes=s,t;case sh:return t=An(19,n,e,r),t.elementType=sh,t.lanes=s,t;case Xg:return rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case Wg:o=9;break e;case jh:o=11;break e;case Qh:o=14;break e;case Hi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function rc(t,e,n,i){return t=An(22,t,i,e),t.elementType=Xg,t.lanes=n,t.stateNode={isHidden:!1},t}function eh(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function th(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,s,o,a,l){return t=new tS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),t}function nS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return ir;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(rn(n))return F0(t,n,e)}return e}function Ov(t,e,n,i,r,s,o,a,l){return t=Dd(n,i,!0,t,r,s,o,a,l),t.context=Fv(null),n=t.current,i=$t(),r=er(n),s=vi(i,r),s.callback=e!=null?e:null,ji(n,s,r),t.current.lanes=r,la(t,r,i),sn(t,i),t}function sc(t,e,n,i){var r=e.current,s=$t(),o=er(r);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,o),t!==null&&(Wn(t,r,o,s),vl(t,r,o)),o}function Yl(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function iS(){return null}var kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}oc.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));sc(t,e,null,null)};oc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){sc(null,t,null,null)}),e[_i]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&v0(t)}};function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function rS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yl(o);s.call(c)}}var o=Ov(e,i,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[_i]=o.current,Qo(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yl(l);a.call(c)}}var l=Dd(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=l,t[_i]=l.current,Qo(t.nodeType===8?t.parentNode:t),Nr(function(){sc(e,l,n,i)}),l}function lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yl(o);a.call(l)}}sc(e,o,t,r)}else o=rS(n,e,t,r,i);return Yl(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(nd(e,n|1),sn(e,Mt()),(qe&6)===0&&(Cs=Mt()+500,or()))}break;case 13:Nr(function(){var i=xi(t,1);if(i!==null){var r=$t();Wn(i,t,1,r)}}),Ud(t,1)}};id=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=$t();Wn(e,t,134217728,n)}Ud(t,134217728)}};p0=function(t){if(t.tag===13){var e=er(t),n=xi(t,e);if(n!==null){var i=$t();Wn(n,t,e,i)}Ud(t,e)}};m0=function(){return Qe};g0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=jl(i);if(!r)throw Error(te(90));Yg(i),lh(i,r)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};n0=Id;i0=Nr;var sS={usingClientEntryPoint:!1,Events:[ua,cs,jl,e0,t0,Id]},Io={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ro.isDisabled&&Ro.supportsFiber))try{$l=Ro.inject(oS),ni=Ro}catch{}var Ro;mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(e))throw Error(te(200));return nS(t,e,null,n)};mn.createRoot=function(t,e){if(!Od(t))throw Error(te(299));var n=!1,i="",r=kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Fd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Nr(t)};mn.hydrate=function(t,e,n){if(!ac(e))throw Error(te(200));return lc(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Od(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ov(e,null,t,1,n!=null?n:null,r,!1,s,o),t[_i]=e.current,Qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new oc(e)};mn.render=function(t,e,n){if(!ac(e))throw Error(te(200));return lc(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(te(40));return t._reactRootContainer?(Nr(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};mn.unstable_batchedUpdates=Id;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return lc(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426"});var Hv=xr((eC,Vv)=>{"use strict";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),Vv.exports=Bv()});var Wv=xr(kd=>{"use strict";var Gv=Hv();kd.createRoot=Gv.createRoot,kd.hydrateRoot=Gv.hydrateRoot;var tC});var f=um(Eu()),R_=um(Wv());var aS=0,Xv=1,lS=2;var Qy=1,cS=2,Ci=3,gr=0,an=1,Ii=2,pr=0,$s=1,qv=2,Yv=3,$v=4,uS=5,Gr=100,hS=101,dS=102,fS=103,pS=104,mS=200,gS=201,vS=202,yS=203,Mf=204,Sf=205,_S=206,xS=207,MS=208,SS=209,wS=210,ES=211,TS=212,AS=213,bS=214,wf=0,Ef=1,Tf=2,js=3,Af=4,bf=5,Cf=6,Pf=7,e_=0,CS=1,PS=2,mr=0,IS=1,RS=2,LS=3,NS=4,DS=5,US=6,FS=7;var t_=300,Qs=301,eo=302,If=303,Rf=304,hu=306,Lf=1e3,qr=1001,Nf=1002,_n=1003,OS=1004;var cc=1005;var si=1006,Bd=1007;var Yr=1008;var Ni=1009,n_=1010,i_=1011,wa=1012,zp=1013,$r=1014,oi=1015,Pa=1016,Vp=1017,Hp=1018,to=1020,r_=35902,s_=1021,o_=1022,Zn=1023,a_=1024,l_=1025,Zs=1026,no=1027,Gp=1028,Wp=1029,c_=1030,Xp=1031;var qp=1033,Oc=33776,kc=33777,Bc=33778,zc=33779,Df=35840,Uf=35841,Ff=35842,Of=35843,kf=36196,Bf=37492,zf=37496,Vf=37808,Hf=37809,Gf=37810,Wf=37811,Xf=37812,qf=37813,Yf=37814,$f=37815,Zf=37816,Jf=37817,Kf=37818,jf=37819,Qf=37820,ep=37821,Vc=36492,tp=36494,np=36495,u_=36283,ip=36284,rp=36285,sp=36286;var Hc=2300,op=2301,zd=2302,Zv=2400,Jv=2401,Kv=2402;var kS=3200,BS=3201;var h_=0,zS=1,fr="",Rn="srgb",uo="srgb-linear",du="linear",nt="srgb";var Rs=7680;var jv=519,VS=512,HS=513,GS=514,d_=515,WS=516,XS=517,qS=518,YS=519,Qv=35044;var ey="300 es",Ri=2e3,Gc=2001,vr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vd=Math.PI/180,ap=180/Math.PI;function Ia(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function $S(t,e){return(t%e+e)%e}function Hd(t,e,n){return(1-n)*t+n*e}function da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var $e=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],m=i[5],y=i[8],v=r[0],g=r[3],h=r[6],_=r[1],x=r[4],M=r[7],P=r[2],b=r[5],C=r[8];return s[0]=o*v+a*_+l*P,s[3]=o*g+a*x+l*b,s[6]=o*h+a*M+l*C,s[1]=c*v+u*_+p*P,s[4]=c*g+u*x+p*b,s[7]=c*h+u*M+p*C,s[2]=d*v+m*_+y*P,s[5]=d*g+m*x+y*b,s[8]=d*h+m*M+y*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,d=a*l-u*s,m=c*s-o*l,y=n*p+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=p*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gd.makeScale(e,n)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gd=new De;function f_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZS(){let t=Wc("canvas");return t.style.display="block",t}var ty={};function xa(t){t in ty||(ty[t]=!0,console.warn(t))}function JS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function KS(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jS(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ye={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===nt&&(t.r=Li(t.r),t.g=Li(t.g),t.b=Li(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===nt&&(t.r=Js(t.r),t.g=Js(t.g),t.b=Js(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===fr?du:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ny=[.64,.33,.3,.6,.15,.06],iy=[.2126,.7152,.0722],ry=[.3127,.329],sy=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oy=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[uo]:{primaries:ny,whitePoint:ry,transfer:du,toXYZ:sy,fromXYZ:oy,luminanceCoefficients:iy,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:ny,whitePoint:ry,transfer:nt,toXYZ:sy,fromXYZ:oy,luminanceCoefficients:iy,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});var Ls,lp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Wc("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let n=Wc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},QS=0,Xc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wd(r[o].image)):s.push(Wd(r[o]))}else s=Wd(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Wd(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?lp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var e1=0,xn=class t extends vr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=qr,r=qr,s=si,o=Yr,a=Zn,l=Ni,c=t.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ia(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=t_;xn.DEFAULT_ANISOTROPY=1;var dt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],m=l[5],y=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,M=(m+1)/2,P=(h+1)/2,b=(u+d)/4,C=(p+v)/4,I=(y+g)/4;return x>M&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=C/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=I/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=I/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-y)*(g-y)+(p-v)*(p-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-y)/_,this.y=(p-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cp=class extends vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Xc(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends cp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},qc=class extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var up=class extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3],d=s[o+0],m=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=y,e[n+3]=v;return}if(p!==v||l!==d||c!==m||u!==y){let g=1-a,h=l*d+c*m+u*y+p*v,_=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){let P=Math.sqrt(x),b=Math.atan2(P,h*_);g=Math.sin(g*b)/P,a=Math.sin(a*b)/P}let M=a*_;if(l=l*g+d*M,c=c*g+m*M,u=u*g+y*M,p=p*g+v*M,g===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=P,c*=P,u*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+u*p+l*m-c*d,e[n+1]=l*y+u*d+c*p-a*m,e[n+2]=c*y+u*m+a*d-l*p,e[n+3]=u*y-a*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),p=a(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*u*p+c*m*y,this._y=c*m*p-d*u*y,this._z=c*u*y+d*m*p,this._w=c*u*p-d*m*y;break;case"YXZ":this._x=d*u*p+c*m*y,this._y=c*m*p-d*u*y,this._z=c*u*y-d*m*p,this._w=c*u*p+d*m*y;break;case"ZXY":this._x=d*u*p-c*m*y,this._y=c*m*p+d*u*y,this._z=c*u*y+d*m*p,this._w=c*u*p-d*m*y;break;case"ZYX":this._x=d*u*p-c*m*y,this._y=c*m*p+d*u*y,this._z=c*u*y-d*m*p,this._w=c*u*p+d*m*y;break;case"YZX":this._x=d*u*p+c*m*y,this._y=c*m*p+d*u*y,this._z=c*u*y-d*m*p,this._w=c*u*p-d*m*y;break;case"XZY":this._x=d*u*p-c*m*y,this._y=c*m*p-d*u*y,this._z=c*u*y+d*m*p,this._w=c*u*p+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],p=n[10],d=i+a+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){let m=2*Math.sqrt(1+i-a-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){let m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ay.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ay.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*u,this.y=i+l*u+a*c-s*p,this.z=r+l*p+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xd=new F,ay=new li,Ui=class{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uc.copy(i.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),hc.subVectors(this.max,fa),Ns.subVectors(e.a,fa),Ds.subVectors(e.b,fa),Us.subVectors(e.c,fa),ar.subVectors(Ds,Ns),lr.subVectors(Us,Ds),Fr.subVectors(Ns,Us);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Fr.z,Fr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Fr.z,0,-Fr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Fr.y,Fr.x,0];return!qd(n,Ns,Ds,Us,hc)||(n=[1,0,0,0,1,0,0,0,1],!qd(n,Ns,Ds,Us,hc))?!1:(dc.crossVectors(ar,lr),n=[dc.x,dc.y,dc.z],qd(n,Ns,Ds,Us,hc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,uc=new Ui,Ns=new F,Ds=new F,Us=new F,ar=new F,lr=new F,Fr=new F,fa=new F,hc=new F,dc=new F,Or=new F;function qd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);let a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var t1=new Ui,pa=new F,Yd=new F,Fi=class{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):t1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let n=pa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Yd)),this.expandByPoint(pa.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new F,$d=new F,fc=new F,cr=new F,Zd=new F,pc=new F,Jd=new F,Ea=class{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$d.copy(e).add(n).multiplyScalar(.5),fc.copy(n).sub(e).normalize(),cr.copy(this.origin).sub($d);let s=e.distanceTo(n)*.5,o=-this.direction.dot(fc),a=cr.dot(this.direction),l=-cr.dot(fc),c=cr.lengthSq(),u=Math.abs(1-o*o),p,d,m,y;if(u>0)if(p=o*l-a,d=o*a-l,y=s*u,p>=0)if(d>=-y)if(d<=y){let v=1/u;p*=v,d*=v,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d<=-y?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=y?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy($d).addScaledVector(fc,d),m}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){Zd.subVectors(n,e),pc.subVectors(i,e),Jd.crossVectors(Zd,pc);let o=this.direction.dot(Jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);let l=a*this.direction.dot(pc.crossVectors(cr,pc));if(l<0)return null;let c=a*this.direction.dot(Zd.cross(cr));if(c<0||l+c>o)return null;let u=-a*cr.dot(Jd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class t{constructor(e,n,i,r,s,o,a,l,c,u,p,d,m,y,v,g){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,p,d,m,y,v,g)}set(e,n,i,r,s,o,a,l,c,u,p,d,m,y,v,g){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=y,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*p,y=a*u,v=a*p;n[0]=l*u,n[4]=-l*p,n[8]=c,n[1]=m+y*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*p,y=c*u,v=c*p;n[0]=d+v*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*u,n[9]=-a,n[2]=m*a-y,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*p,y=c*u,v=c*p;n[0]=d-v*a,n[4]=-o*p,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*p,y=a*u,v=a*p;n[0]=l*u,n[4]=y*c-m,n[8]=d*c+v,n[1]=l*p,n[5]=v*c+d,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,y=a*l,v=a*c;n[0]=l*u,n[4]=v-d*p,n[8]=y*p+m,n[1]=p,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*p+y,n[10]=d-v*p}else if(e.order==="XZY"){let d=o*l,m=o*c,y=a*l,v=a*c;n[0]=l*u,n[4]=-p,n[8]=c*u,n[1]=d*p+v,n[5]=o*u,n[9]=m*p-y,n[2]=y*p-m,n[6]=a*u,n[10]=v*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n1,e,i1)}lookAt(e,n,i){let r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ur.crossVectors(i,gn),ur.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ur.crossVectors(i,gn)),ur.normalize(),mc.crossVectors(gn,ur),r[0]=ur.x,r[4]=mc.x,r[8]=gn.x,r[1]=ur.y,r[5]=mc.y,r[9]=gn.y,r[2]=ur.z,r[6]=mc.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],m=i[13],y=i[2],v=i[6],g=i[10],h=i[14],_=i[3],x=i[7],M=i[11],P=i[15],b=r[0],C=r[4],I=r[8],T=r[12],w=r[1],R=r[5],W=r[9],V=r[13],X=r[2],Q=r[6],q=r[10],ie=r[14],H=r[3],K=r[7],ne=r[11],j=r[15];return s[0]=o*b+a*w+l*X+c*H,s[4]=o*C+a*R+l*Q+c*K,s[8]=o*I+a*W+l*q+c*ne,s[12]=o*T+a*V+l*ie+c*j,s[1]=u*b+p*w+d*X+m*H,s[5]=u*C+p*R+d*Q+m*K,s[9]=u*I+p*W+d*q+m*ne,s[13]=u*T+p*V+d*ie+m*j,s[2]=y*b+v*w+g*X+h*H,s[6]=y*C+v*R+g*Q+h*K,s[10]=y*I+v*W+g*q+h*ne,s[14]=y*T+v*V+g*ie+h*j,s[3]=_*b+x*w+M*X+P*H,s[7]=_*C+x*R+M*Q+P*K,s[11]=_*I+x*W+M*q+P*ne,s[15]=_*T+x*V+M*ie+P*j,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],m=e[14],y=e[3],v=e[7],g=e[11],h=e[15];return y*(+s*l*p-r*c*p-s*a*d+i*c*d+r*a*m-i*l*m)+v*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+g*(+n*c*p-n*a*m-s*o*p+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-n*l*p+n*a*d+r*o*p-i*o*d+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],y=e[12],v=e[13],g=e[14],h=e[15],_=p*g*c-v*d*c+v*l*m-a*g*m-p*l*h+a*d*h,x=y*d*c-u*g*c-y*l*m+o*g*m+u*l*h-o*d*h,M=u*v*c-y*p*c+y*a*m-o*v*m-u*a*h+o*p*h,P=y*p*l-u*v*l-y*a*d+o*v*d+u*a*g-o*p*g,b=n*_+i*x+r*M+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=_*C,e[1]=(v*d*s-p*g*s-v*r*m+i*g*m+p*r*h-i*d*h)*C,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*h+i*l*h)*C,e[3]=(p*l*s-a*d*s-p*r*c+i*d*c+a*r*m-i*l*m)*C,e[4]=x*C,e[5]=(u*g*s-y*d*s+y*r*m-n*g*m-u*r*h+n*d*h)*C,e[6]=(y*l*s-o*g*s-y*r*c+n*g*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*C,e[8]=M*C,e[9]=(y*p*s-u*v*s-y*i*m+n*v*m+u*i*h-n*p*h)*C,e[10]=(o*v*s-y*a*s+y*i*c-n*v*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*p*s-u*i*c+n*p*c+o*i*m-n*a*m)*C,e[12]=P*C,e[13]=(u*v*r-y*p*r+y*i*d-n*v*d-u*i*g+n*p*g)*C,e[14]=(y*a*r-o*v*r-y*i*l+n*v*l+o*i*g-n*a*g)*C,e[15]=(o*p*r-u*a*r+u*i*l-n*p*l-o*i*d+n*a*d)*C,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,p=a+a,d=s*c,m=s*u,y=s*p,v=o*u,g=o*p,h=a*p,_=l*c,x=l*u,M=l*p,P=i.x,b=i.y,C=i.z;return r[0]=(1-(v+h))*P,r[1]=(m+M)*P,r[2]=(y-x)*P,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(d+h))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(y+x)*C,r[9]=(g-_)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Fs.set(r[0],r[1],r[2]).length(),o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);let c=1/s,u=1/o,p=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=p,Yn.elements[9]*=p,Yn.elements[10]*=p,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r),m,y;if(a===Ri)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Gc)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){let l=this.elements,c=1/(n-e),u=1/(i-r),p=1/(o-s),d=(n+e)*c,m=(i+r)*u,y,v;if(a===Ri)y=(o+s)*p,v=-2*p;else if(a===Gc)y=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Fs=new F,Yn=new et,n1=new F(0,0,0),i1=new F(1,1,1),ur=new F,mc=new F,gn=new F,ly=new et,cy=new li,Ln=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ly.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ly,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cy.setFromEuler(this),this.setFromQuaternion(cy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Yc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r1=0,uy=new F,Os=new li,Ti=new et,gc=new F,ma=new F,s1=new F,o1=new li,hy=new F(1,0,0),dy=new F(0,1,0),fy=new F(0,0,1),py={type:"added"},a1={type:"removed"},ks={type:"childadded",child:null},Kd={type:"childremoved",child:null},Xt=class t extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new F,n=new Ln,i=new li,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(hy,e)}rotateY(e){return this.rotateOnAxis(dy,e)}rotateZ(e){return this.rotateOnAxis(fy,e)}translateOnAxis(e,n){return uy.copy(e).applyQuaternion(this.quaternion),this.position.add(uy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hy,e)}translateY(e){return this.translateOnAxis(dy,e)}translateZ(e){return this.translateOnAxis(fy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gc.copy(e):gc.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ma,gc,this.up):Ti.lookAt(gc,ma,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Ti),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(py),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a1),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(py),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Xt.DEFAULT_UP=new F(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new F,Ai=new F,jd=new F,bi=new F,Bs=new F,zs=new F,my=new F,Qd=new F,ef=new F,tf=new F,nf=new dt,rf=new dt,sf=new dt,Wr=class t{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ai.subVectors(i,n),jd.subVectors(e,n);let o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(jd),c=Ai.dot(Ai),u=Ai.dot(jd),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;let d=1/p,m=(c*l-a*u)*d,y=(o*u-a*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,n),rf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ai.subVectors(e,n),$n.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Bs.subVectors(r,i),zs.subVectors(s,i),Qd.subVectors(e,i);let l=Bs.dot(Qd),c=zs.dot(Qd);if(l<=0&&c<=0)return n.copy(i);ef.subVectors(e,r);let u=Bs.dot(ef),p=zs.dot(ef);if(u>=0&&p<=u)return n.copy(r);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Bs,o);tf.subVectors(e,s);let m=Bs.dot(tf),y=zs.dot(tf);if(y>=0&&m<=y)return n.copy(s);let v=m*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(zs,a);let g=u*y-m*p;if(g<=0&&p-u>=0&&m-y>=0)return my.subVectors(s,r),a=(p-u)/(p-u+(m-y)),n.copy(r).addScaledVector(my,a);let h=1/(g+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},vc={h:0,s:0,l:0};function of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ve=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=$S(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){let i=p_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ye.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Wt(Gt.r*255,0,255))*65536+Math.round(Wt(Gt.g*255,0,255))*256+Math.round(Wt(Gt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Gt.copy(this),n);let i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Rn){Ye.fromWorkingColorSpace(Gt.copy(this),e);let n=Gt.r,i=Gt.g,r=Gt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(vc);let i=Hd(hr.h,vc.h,n),r=Hd(hr.s,vc.s,n),s=Hd(hr.l,vc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ve;Ve.NAMES=p_;var l1=0,Oi=class extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Ia(),this.name="",this.blending=$s,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Sf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$c=class extends Oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=e_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new F,yc=new $e,Ut=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qv,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yc.fromBufferAttribute(this,n),yc.applyMatrix3(e),this.setXY(n,yc.x,yc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=da(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=da(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=da(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qv&&(e.usage=this.usage),e}};var Zc=class extends Ut{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Jc=class extends Ut{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var ai=class extends Ut{constructor(e,n,i){super(new Float32Array(e),n,i)}},c1=0,In=new et,af=new Xt,Vs=new F,vn=new Ui,ga=new Ui,It=new F,ln=class t extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(i,3))}else{for(let i=0,r=n.count;i<r;i++){let s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(vn.min,ga.min),vn.expandByPoint(It),It.addVectors(vn.max,ga.max),vn.expandByPoint(It)):(vn.expandByPoint(ga.min),vn.expandByPoint(ga.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),It.add(Vs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new F,l[I]=new F;let c=new F,u=new F,p=new F,d=new $e,m=new $e,y=new $e,v=new F,g=new F;function h(I,T,w){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,T),p.fromBufferAttribute(i,w),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,T),y.fromBufferAttribute(s,w),u.sub(c),p.sub(c),m.sub(d),y.sub(d);let R=1/(m.x*y.y-y.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(R),g.copy(p).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(R),a[I].add(v),a[T].add(v),a[w].add(v),l[I].add(g),l[T].add(g),l[w].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,T=_.length;I<T;++I){let w=_[I],R=w.start,W=w.count;for(let V=R,X=R+W;V<X;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let x=new F,M=new F,P=new F,b=new F;function C(I){P.fromBufferAttribute(r,I),b.copy(P);let T=a[I];x.copy(T),x.sub(P.multiplyScalar(P.dot(T))).normalize(),M.crossVectors(b,T);let R=M.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,R)}for(let I=0,T=_.length;I<T;++I){let w=_[I],R=w.start,W=w.count;for(let V=R,X=R+W;V<X;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,p=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,p=a.normalized,d=new c.constructor(l.length*u),m=0,y=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)d[y++]=c[m++]}return new Ut(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){let d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],p=s[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gy=new et,kr=new Ea,_c=new Fi,vy=new F,xc=new F,Mc=new F,Sc=new F,lf=new F,wc=new F,yy=new F,Ec=new F,Kt=class extends Xt{constructor(e=new ln,n=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){wc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],p=s[l];u!==0&&(lf.fromBufferAttribute(p,e),o?wc.addScaledVector(lf,u):wc.addScaledVector(lf.sub(n),u))}n.add(wc)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(_c.containsPoint(kr.origin)===!1&&(kr.intersectSphere(_c,vy)===null||kr.origin.distanceToSquared(vy)>(e.far-e.near)**2))&&(gy.copy(s).invert(),kr.copy(e.ray).applyMatrix4(gy),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){let g=d[y],h=o[g.materialIndex],_=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=_,P=x;M<P;M+=3){let b=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);r=Tc(this,h,e,i,c,u,p,b,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=y,h=v;g<h;g+=3){let _=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Tc(this,o,e,i,c,u,p,_,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){let g=d[y],h=o[g.materialIndex],_=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=_,P=x;M<P;M+=3){let b=M,C=M+1,I=M+2;r=Tc(this,h,e,i,c,u,p,b,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=y,h=v;g<h;g+=3){let _=g,x=g+1,M=g+2;r=Tc(this,o,e,i,c,u,p,_,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function u1(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Ec.copy(a),Ec.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ec);return c<n.near||c>n.far?null:{distance:c,point:Ec.clone(),object:t}}function Tc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,xc),t.getVertexPosition(l,Mc),t.getVertexPosition(c,Sc);let u=u1(t,e,n,i,xc,Mc,Sc,yy);if(u){let p=new F;Wr.getBarycoord(yy,xc,Mc,Sc,p),r&&(u.uv=Wr.getInterpolatedAttribute(r,a,l,c,p,new $e)),s&&(u.uv1=Wr.getInterpolatedAttribute(s,a,l,c,p,new $e)),o&&(u.normal=Wr.getInterpolatedAttribute(o,a,l,c,p,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Wr.getNormal(xc,Mc,Sc,d.normal),u.face=d,u.barycoord=p}return u}var yr=class t extends ln{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],p=[],d=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(p,2));function y(v,g,h,_,x,M,P,b,C,I,T){let w=M/C,R=P/I,W=M/2,V=P/2,X=b/2,Q=C+1,q=I+1,ie=0,H=0,K=new F;for(let ne=0;ne<q;ne++){let j=ne*R-V;for(let oe=0;oe<Q;oe++){let ue=oe*w-W;K[v]=ue*_,K[g]=j*x,K[h]=X,c.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[h]=b>0?1:-1,u.push(K.x,K.y,K.z),p.push(oe/C),p.push(1-ne/I),ie+=1}}for(let ne=0;ne<I;ne++)for(let j=0;j<C;j++){let oe=d+j+Q*ne,ue=d+j+Q*(ne+1),B=d+(j+1)+Q*(ne+1),$=d+(j+1)+Q*ne;l.push(oe,ue,$),l.push(ue,B,$),H+=6}a.addGroup(m,H,T),m+=H,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function io(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){let e={};for(let n=0;n<t.length;n++){let i=io(t[n]);for(let r in i)e[r]=i[r]}return e}function h1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var d1={clone:io,merge:Jt},f1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ro=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dr=new F,_y=new $e,xy=new $e,yn=class extends ro{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,_y,xy),n.subVectors(xy,_y)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Vd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Hs=-90,Gs=1,hp=class extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(Hs,Gs,e,n);r.layers=this.layers,this.add(r);let s=new yn(Hs,Gs,e,n);s.layers=this.layers,this.add(s);let o=new yn(Hs,Gs,e,n);o.layers=this.layers,this.add(o);let a=new yn(Hs,Gs,e,n);a.layers=this.layers,this.add(a);let l=new yn(Hs,Gs,e,n);l.layers=this.layers,this.add(l);let c=new yn(Hs,Gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(p,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Kc=class extends xn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dp=class extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yr(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:pr});s.uniforms.tEquirect.value=n;let o=new Kt(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=si),new hp(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},cf=new F,m1=new F,g1=new De,Pi=class{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=cf.subVectors(i,n).cross(m1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||g1.getNormalMatrix(e),r=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new Fi,Ac=new F,Ta=class{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],p=r[6],d=r[7],m=r[8],y=r[9],v=r[10],g=r[11],h=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,g-m,M-h).normalize(),i[1].setComponents(l+s,d+c,g+m,M+h).normalize(),i[2].setComponents(l+o,d+u,g+y,M+_).normalize(),i[3].setComponents(l-o,d-u,g-y,M-_).normalize(),i[4].setComponents(l-a,d-p,g-v,M-x).normalize(),n===Ri)i[5].setComponents(l+a,d+p,g+v,M+x).normalize();else if(n===Gc)i[5].setComponents(a,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Ac.x=r.normal.x>0?e.max.x:e.min.x,Ac.y=r.normal.y>0?e.max.y:e.min.y,Ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function g_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function v1(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){let u=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,u);else{p.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<p.length;m++){let y=p[d],v=p[m];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++d,p[d]=v)}p.length=d+1;for(let m=0,y=p.length;m<y;m++){let v=p[m];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var jc=class t extends ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,p=e/a,d=n/l,m=[],y=[],v=[],g=[];for(let h=0;h<u;h++){let _=h*d-o;for(let x=0;x<c;x++){let M=x*p-s;y.push(M,-_,0),v.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){let x=_+c*h,M=_+c*(h+1),P=_+1+c*(h+1),b=_+1+c*h;m.push(x,M,b),m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new ai(y,3)),this.setAttribute("normal",new ai(v,3)),this.setAttribute("uv",new ai(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ww=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:y1,alphahash_pars_fragment:_1,alphamap_fragment:x1,alphamap_pars_fragment:M1,alphatest_fragment:S1,alphatest_pars_fragment:w1,aomap_fragment:E1,aomap_pars_fragment:T1,batching_pars_vertex:A1,batching_vertex:b1,begin_vertex:C1,beginnormal_vertex:P1,bsdfs:I1,iridescence_fragment:R1,bumpmap_pars_fragment:L1,clipping_planes_fragment:N1,clipping_planes_pars_fragment:D1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:F1,color_fragment:O1,color_pars_fragment:k1,color_pars_vertex:B1,color_vertex:z1,common:V1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:G1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:q1,emissivemap_pars_fragment:Y1,colorspace_fragment:$1,colorspace_pars_fragment:Z1,envmap_fragment:J1,envmap_common_pars_fragment:K1,envmap_pars_fragment:j1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:uw,envmap_vertex:ew,fog_vertex:tw,fog_pars_vertex:nw,fog_fragment:iw,fog_pars_fragment:rw,gradientmap_pars_fragment:sw,lightmap_pars_fragment:ow,lights_lambert_fragment:aw,lights_lambert_pars_fragment:lw,lights_pars_begin:cw,lights_toon_fragment:hw,lights_toon_pars_fragment:dw,lights_phong_fragment:fw,lights_phong_pars_fragment:pw,lights_physical_fragment:mw,lights_physical_pars_fragment:gw,lights_fragment_begin:vw,lights_fragment_maps:yw,lights_fragment_end:_w,logdepthbuf_fragment:xw,logdepthbuf_pars_fragment:Mw,logdepthbuf_pars_vertex:Sw,logdepthbuf_vertex:ww,map_fragment:Ew,map_pars_fragment:Tw,map_particle_fragment:Aw,map_particle_pars_fragment:bw,metalnessmap_fragment:Cw,metalnessmap_pars_fragment:Pw,morphinstance_vertex:Iw,morphcolor_vertex:Rw,morphnormal_vertex:Lw,morphtarget_pars_vertex:Nw,morphtarget_vertex:Dw,normal_fragment_begin:Uw,normal_fragment_maps:Fw,normal_pars_fragment:Ow,normal_pars_vertex:kw,normal_vertex:Bw,normalmap_pars_fragment:zw,clearcoat_normal_fragment_begin:Vw,clearcoat_normal_fragment_maps:Hw,clearcoat_pars_fragment:Gw,iridescence_pars_fragment:Ww,opaque_fragment:Xw,packing:qw,premultiplied_alpha_fragment:Yw,project_vertex:$w,dithering_fragment:Zw,dithering_pars_fragment:Jw,roughnessmap_fragment:Kw,roughnessmap_pars_fragment:jw,shadowmap_pars_fragment:Qw,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:hE,transmission_pars_fragment:dE,uv_pars_fragment:fE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:vE,background_frag:yE,backgroundCube_vert:_E,backgroundCube_frag:xE,cube_vert:ME,cube_frag:SE,depth_vert:wE,depth_frag:EE,distanceRGBA_vert:TE,distanceRGBA_frag:AE,equirect_vert:bE,equirect_frag:CE,linedashed_vert:PE,linedashed_frag:IE,meshbasic_vert:RE,meshbasic_frag:LE,meshlambert_vert:NE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:FE,meshnormal_vert:OE,meshnormal_frag:kE,meshphong_vert:BE,meshphong_frag:zE,meshphysical_vert:VE,meshphysical_frag:HE,meshtoon_vert:GE,meshtoon_frag:WE,points_vert:XE,points_frag:qE,shadow_vert:YE,shadow_frag:$E,sprite_vert:ZE,sprite_frag:JE},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ri={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ri.physical={uniforms:Jt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var bc={r:0,b:0,g:0},zr=new Ln,KE=new et;function jE(t,e,n,i,r,s,o){let a=new Ve(0),l=s===!0?0:1,c,u,p=null,d=0,m=null;function y(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1,M=y(_);M===null?h(a,l):M&&M.isColor&&(h(M,1),x=!0);let P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,x){let M=y(x);M&&(M.isCubeTexture||M.mapping===hu)?(u===void 0&&(u=new Kt(new yr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:io(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zr.copy(x.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(zr)),u.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,(p!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Kt(new jc(2,2),new Nn({name:"BackgroundMaterial",uniforms:io(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,x){_.getRGB(bc,m_(t)),i.buffers.color.setClear(bc.r,bc.g,bc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:v,addToRenderList:g}}function QE(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(w,R,W,V,X){let Q=!1,q=p(V,W,R);s!==q&&(s=q,c(s.object)),Q=m(w,V,W,X),Q&&y(w,V,W,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(w,R,W,V),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function p(w,R,W){let V=W.wireframe===!0,X=i[w.id];X===void 0&&(X={},i[w.id]=X);let Q=X[R.id];Q===void 0&&(Q={},X[R.id]=Q);let q=Q[V];return q===void 0&&(q=d(l()),Q[V]=q),q}function d(w){let R=[],W=[],V=[];for(let X=0;X<n;X++)R[X]=0,W[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:V,object:w,attributes:{},index:null}}function m(w,R,W,V){let X=s.attributes,Q=R.attributes,q=0,ie=W.getAttributes();for(let H in ie)if(ie[H].location>=0){let ne=X[H],j=Q[H];if(j===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),ne===void 0||ne.attribute!==j||j&&ne.data!==j.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function y(w,R,W,V){let X={},Q=R.attributes,q=0,ie=W.getAttributes();for(let H in ie)if(ie[H].location>=0){let ne=Q[H];ne===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor));let j={};j.attribute=ne,ne&&ne.data&&(j.data=ne.data),X[H]=j,q++}s.attributes=X,s.attributesNum=q,s.index=V}function v(){let w=s.newAttributes;for(let R=0,W=w.length;R<W;R++)w[R]=0}function g(w){h(w,0)}function h(w,R){let W=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;W[w]=1,V[w]===0&&(t.enableVertexAttribArray(w),V[w]=1),X[w]!==R&&(t.vertexAttribDivisor(w,R),X[w]=R)}function _(){let w=s.newAttributes,R=s.enabledAttributes;for(let W=0,V=R.length;W<V;W++)R[W]!==w[W]&&(t.disableVertexAttribArray(W),R[W]=0)}function x(w,R,W,V,X,Q,q){q===!0?t.vertexAttribIPointer(w,R,W,X,Q):t.vertexAttribPointer(w,R,W,V,X,Q)}function M(w,R,W,V){v();let X=V.attributes,Q=W.getAttributes(),q=R.defaultAttributeValues;for(let ie in Q){let H=Q[ie];if(H.location>=0){let K=X[ie];if(K===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),K!==void 0){let ne=K.normalized,j=K.itemSize,oe=e.get(K);if(oe===void 0)continue;let ue=oe.buffer,B=oe.type,$=oe.bytesPerElement,ae=B===t.INT||B===t.UNSIGNED_INT||K.gpuType===zp;if(K.isInterleavedBufferAttribute){let le=K.data,be=le.stride,ye=K.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)h(H.location+Fe,le.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)g(H.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Fe=0;Fe<H.locationSize;Fe++)x(H.location+Fe,j/H.locationSize,B,ne,be*$,(ye+j/H.locationSize*Fe)*$,ae)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)h(H.location+le,K.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let le=0;le<H.locationSize;le++)x(H.location+le,j/H.locationSize,B,ne,j*$,j/H.locationSize*le*$,ae)}}else if(q!==void 0){let ne=q[ie];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(H.location,ne);break;case 3:t.vertexAttrib3fv(H.location,ne);break;case 4:t.vertexAttrib4fv(H.location,ne);break;default:t.vertexAttrib1fv(H.location,ne)}}}}_()}function P(){I();for(let w in i){let R=i[w];for(let W in R){let V=R[W];for(let X in V)u(V[X].object),delete V[X];delete R[W]}delete i[w]}}function b(w){if(i[w.id]===void 0)return;let R=i[w.id];for(let W in R){let V=R[W];for(let X in V)u(V[X].object),delete V[X];delete R[W]}delete i[w.id]}function C(w){for(let R in i){let W=i[R];if(W[w.id]===void 0)continue;let V=W[w.id];for(let X in V)u(V[X].object),delete V[X];delete W[w.id]}}function I(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function eT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function a(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let m=0;for(let y=0;y<p;y++)m+=u[y];n.update(m,i,1)}function l(c,u,p,d){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)o(c[y],u[y],d[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,p);let y=0;for(let v=0;v<p;v++)y+=u[v]*d[v];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ni&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!I)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function nT(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Pi,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=u(p,d,0)},this.setState=function(p,d,m){let y=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,h=t.get(p);if(!r||y===null||y.length===0||s&&!g)s?u(null):c();else{let _=s?0:i,x=_*4,M=h.clippingState||null;l.value=M,M=u(y,d,x,m);for(let P=0;P!==x;++P)M[P]=n[P];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,y){let v=p!==null?p.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let h=m+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,M=m;x!==v;++x,M+=4)o.copy(p[x]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function iT(t){let e=new WeakMap;function n(o,a){return a===If?o.mapping=Qs:a===Rf&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===If||a===Rf)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dp(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var so=class extends ro{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},qs=4,My=[.125,.215,.35,.446,.526,.582],Xr=20,uf=new so,Sy=new Ve,hf=null,df=0,ff=0,pf=!1,Hr=(1+Math.sqrt(5))/2,Ws=1/Hr,wy=[new F(-Hr,Ws,0),new F(Hr,Ws,0),new F(-Ws,0,Hr),new F(Ws,0,Hr),new F(0,Hr,-Ws),new F(0,Hr,Ws),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hf=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ty(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hf,df,ff),this._renderer.xr.enabled=pf,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hf=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Pa,format:Zn,colorSpace:uo,depthBuffer:!1},r=Ey(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ey(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(s)),this._blurMaterial=sT(s,e,n)}return r}_compileMaterial(e){let n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,uf)}_sceneToCubeUV(e,n,i,r){let a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Sy),u.toneMapping=mr,u.autoClear=!1;let m=new $c({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),y=new Kt(new yr,m),v=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Sy),v=!0);for(let h=0;h<6;h++){let _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let x=this._cubeSize;Cc(r,_*x,h>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=g}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Qs||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ty());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Cc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,uf)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wy[(r-s-1)%wy.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,p=new Kt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xr-1),v=s/y,g=isFinite(s)?1+Math.floor(u*v):Xr;g>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xr}`);let h=[],_=0;for(let C=0;C<Xr;++C){let I=C/v,T=Math.exp(-I*I/2);h.push(T),C===0?_+=T:C<g&&(_+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=y,d.mipInt.value=x-i;let M=this._sizeLods[r],P=3*M*(r>x-qs?r-x+qs:0),b=4*(this._cubeSize-M);Cc(n,P,b,3*M,2*M),l.setRenderTarget(n),l.render(p,uf)}};function rT(t){let e=[],n=[],i=[],r=t,s=t-qs+1+My.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qs?l=My[o-t+qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,y=6,v=3,g=2,h=1,_=new Float32Array(v*y*m),x=new Float32Array(g*y*m),M=new Float32Array(h*y*m);for(let b=0;b<m;b++){let C=b%3*2/3-1,I=b>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(T,v*y*b),x.set(d,g*y*b);let w=[b,b,b,b,b,b];M.set(w,h*y*b)}let P=new ln;P.setAttribute("position",new Ut(_,v)),P.setAttribute("uv",new Ut(x,g)),P.setAttribute("faceIndex",new Ut(M,h)),e.push(P),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ey(t,e,n){let i=new Di(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sT(t,e,n){let i=new Float32Array(Xr),r=new F(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ty(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ay(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===If||l===Rf,u=l===Qs||l===eo;if(c||u){let p=e.get(a),d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Qc(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Qc(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&xa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lT(t,e,n,i){let r={},s=new WeakMap;function o(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,h=v.length;g<h;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){let d=p.attributes;for(let y in d)e.update(d[y],t.ARRAY_BUFFER);let m=p.morphAttributes;for(let y in m){let v=m[y];for(let g=0,h=v.length;g<h;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(p){let d=[],m=p.index,y=p.attributes.position,v=0;if(m!==null){let _=m.array;v=m.version;for(let x=0,M=_.length;x<M;x+=3){let P=_[x+0],b=_[x+1],C=_[x+2];d.push(P,b,b,C,C,P)}}else if(y!==void 0){let _=y.array;v=y.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let P=x+0,b=x+1,C=x+2;d.push(P,b,b,C,C,P)}}else return;let g=new(f_(d)?Jc:Zc)(d,1);g.version=v;let h=s.get(p);h&&e.remove(h),s.set(p,g)}function u(p){let d=s.get(p);if(d){let m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function cT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,y){y!==0&&(t.drawElementsInstanced(i,m,s,d*o,y),n.update(m,i,y))}function u(d,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,y);let g=0;for(let h=0;h<y;h++)g+=m[h];n.update(g,i,1)}function p(d,m,y,v){if(y===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,y);let h=0;for(let _=0;_<y;_++)h+=m[_]*v[_];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function uT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hT(t,e,n){let i=new WeakMap,r=new dt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==p){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;m===!0&&(x=1),y===!0&&(x=2),v===!0&&(x=3);let M=a.attributes.position.count*x,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*P*4*p),C=new qc(b,M,P,p);C.type=oi,C.needsUpdate=!0;let I=x*4;for(let w=0;w<p;w++){let R=g[w],W=h[w],V=_[w],X=M*P*4*w;for(let Q=0;Q<R.count;Q++){let q=Q*I;m===!0&&(r.fromBufferAttribute(R,Q),b[X+q+0]=r.x,b[X+q+1]=r.y,b[X+q+2]=r.z,b[X+q+3]=0),y===!0&&(r.fromBufferAttribute(W,Q),b[X+q+4]=r.x,b[X+q+5]=r.y,b[X+q+6]=r.z,b[X+q+7]=0),v===!0&&(r.fromBufferAttribute(V,Q),b[X+q+8]=r.x,b[X+q+9]=r.y,b[X+q+10]=r.z,b[X+q+11]=V.itemSize===4?r.w:1)}}d={count:p,texture:C,size:new $e(M,P)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function dT(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var eu=class extends xn{constructor(e,n,i,r,s,o,a,l,c,u=Zs){if(u!==Zs&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zs&&(i=$r),i===void 0&&u===no&&(i=to),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},v_=new xn,by=new eu(1,1),y_=new qc,__=new up,x_=new Kc,Cy=[],Py=[],Iy=new Float32Array(16),Ry=new Float32Array(9),Ly=new Float32Array(4);function ho(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Cy[r];if(s===void 0&&(s=new Float32Array(r),Cy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=Py[e];n===void 0&&(n=new Int32Array(e),Py[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function mT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function gT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function vT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;Ly.set(i),t.uniformMatrix2fv(this.addr,!1,Ly),bt(n,i)}}function yT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;Ry.set(i),t.uniformMatrix3fv(this.addr,!1,Ry),bt(n,i)}}function _T(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;Iy.set(i),t.uniformMatrix4fv(this.addr,!1,Iy),bt(n,i)}}function xT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function ST(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function wT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function ET(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function AT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function bT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function CT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(by.compareFunction=d_,s=by):s=v_,n.setTexture2D(e||s,r)}function PT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||__,r)}function IT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||x_,r)}function RT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||y_,r)}function LT(t){switch(t){case 5126:return fT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return vT;case 35675:return yT;case 35676:return _T;case 5124:case 35670:return xT;case 35667:case 35671:return MT;case 35668:case 35672:return ST;case 35669:case 35673:return wT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return RT}}function NT(t,e){t.uniform1fv(this.addr,e)}function DT(t,e){let n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function UT(t,e){let n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function FT(t,e){let n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function OT(t,e){let n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kT(t,e){let n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BT(t,e){let n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zT(t,e){t.uniform1iv(this.addr,e)}function VT(t,e){t.uniform2iv(this.addr,e)}function HT(t,e){t.uniform3iv(this.addr,e)}function GT(t,e){t.uniform4iv(this.addr,e)}function WT(t,e){t.uniform1uiv(this.addr,e)}function XT(t,e){t.uniform2uiv(this.addr,e)}function qT(t,e){t.uniform3uiv(this.addr,e)}function YT(t,e){t.uniform4uiv(this.addr,e)}function $T(t,e,n){let i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||v_,s[o])}function ZT(t,e,n){let i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||__,s[o])}function JT(t,e,n){let i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||x_,s[o])}function KT(t,e,n){let i=this.cache,r=e.length,s=fu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||y_,s[o])}function jT(t){switch(t){case 5126:return NT;case 35664:return DT;case 35665:return UT;case 35666:return FT;case 35674:return OT;case 35675:return kT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return VT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return XT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return KT}}var fp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LT(n.type)}},pp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}},mp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},mf=/(\w+)(\])?(\[|\.)?/g;function Ny(t,e){t.seq.push(e),t.map[e.id]=e}function QT(t,e,n){let i=t.name,r=i.length;for(mf.lastIndex=0;;){let s=mf.exec(i),o=mf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ny(n,c===void 0?new fp(a,t,e):new pp(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new mp(a),Ny(n,p)),n=p}}}var Ks=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);QT(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Dy(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var eA=37297,tA=0;function nA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Uy=new De;function iA(t){Ye._getMatrix(Uy,Ye.workingColorSpace,t);let e=`mat3( ${Uy.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case du:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fy(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+nA(t.getShaderSource(e),o)}else return r}function rA(t,e){let n=iA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sA(t,e){let n;switch(e){case IS:n="Linear";break;case RS:n="Reinhard";break;case LS:n="Cineon";break;case NS:n="ACESFilmic";break;case US:n="AgX";break;case FS:n="Neutral";break;case DS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Pc=new F;function oA(){Ye.getLuminanceCoefficients(Pc);let t=Pc.x.toFixed(4),e=Pc.y.toFixed(4),n=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function lA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ma(t){return t!==""}function Oy(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ky(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(t){return t.replace(uA,dA)}var hA=new Map;function dA(t,e){let n=ke[e];if(n===void 0){let i=hA.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gp(n)}var fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function By(t){return t.replace(fA,pA)}function pA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zy(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function gA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case eo:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vA(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===eo&&(e="ENVMAP_MODE_REFRACTION"),e}function yA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e_:e="ENVMAP_BLENDING_MULTIPLY";break;case CS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function _A(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function xA(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=mA(n),c=gA(n),u=vA(n),p=yA(n),d=_A(n),m=aA(n),y=lA(s),v=r.createProgram(),g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ma).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ma).join(`
`),h.length>0&&(h+=`
`)):(g=[zy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),h=[zy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?ke.tonemapping_pars_fragment:"",n.toneMapping!==mr?sA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,rA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),o=gp(o),o=Oy(o,n),o=ky(o,n),a=gp(a),a=Oy(a,n),a=ky(a,n),o=By(o),a=By(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===ey?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ey?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=_+g+o,M=_+h+a,P=Dy(r,r.VERTEX_SHADER,x),b=Dy(r,r.FRAGMENT_SHADER,M);r.attachShader(v,P),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(R){if(t.debug.checkShaderErrors){let W=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(b).trim(),Q=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,b);else{let ie=Fy(r,P,"vertex"),H=Fy(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+ie+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||X==="")&&(q=!1);q&&(R.diagnostics={runnable:Q,programLog:W,vertexShader:{log:V,prefix:g},fragmentShader:{log:X,prefix:h}})}r.deleteShader(P),r.deleteShader(b),I=new Ks(r,v),T=cA(r,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,eA)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=b,this}var MA=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new yp(e),n.set(e,i)),i}},yp=class{constructor(e){this.id=MA++,this.code=e,this.usedTimes=0}};function SA(t,e,n,i,r,s,o){let a=new Yc,l=new vp,c=new Set,u=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,w,R,W,V){let X=W.fog,Q=V.geometry,q=T.isMeshStandardMaterial?W.environment:null,ie=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),H=ie&&ie.mapping===hu?ie.image.height:null,K=y[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let ne=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,j=ne!==void 0?ne.length:0,oe=0;Q.morphAttributes.position!==void 0&&(oe=1),Q.morphAttributes.normal!==void 0&&(oe=2),Q.morphAttributes.color!==void 0&&(oe=3);let ue,B,$,ae;if(K){let je=ri[K];ue=je.vertexShader,B=je.fragmentShader}else ue=T.vertexShader,B=T.fragmentShader,l.update(T),$=l.getVertexShaderID(T),ae=l.getFragmentShaderID(T);let le=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),ye=V.isInstancedMesh===!0,Fe=V.isBatchedMesh===!0,tt=!!T.map,Be=!!T.matcap,mt=!!ie,N=!!T.aoMap,Mn=!!T.lightMap,He=!!T.bumpMap,Ge=!!T.normalMap,Ce=!!T.displacementMap,at=!!T.emissiveMap,Ae=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,O=T.clearcoat>0,Z=T.dispersion>0,ee=T.iridescence>0,Y=T.sheen>0,Ee=T.transmission>0,de=S&&!!T.anisotropyMap,ve=O&&!!T.clearcoatMap,Xe=O&&!!T.clearcoatNormalMap,re=O&&!!T.clearcoatRoughnessMap,_e=ee&&!!T.iridescenceMap,Pe=ee&&!!T.iridescenceThicknessMap,Ie=Y&&!!T.sheenColorMap,xe=Y&&!!T.sheenRoughnessMap,We=!!T.specularMap,Oe=!!T.specularColorMap,it=!!T.specularIntensityMap,L=Ee&&!!T.transmissionMap,he=Ee&&!!T.thicknessMap,G=!!T.gradientMap,J=!!T.alphaMap,me=T.alphaTest>0,fe=!!T.alphaHash,Le=!!T.extensions,_t=mr;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=t.toneMapping);let Ft={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:ue,fragmentShader:B,defines:T.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&V._colorsTexture!==null,instancing:ye,instancingColor:ye&&V.instanceColor!==null,instancingMorph:ye&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:uo,alphaToCoverage:!!T.alphaToCoverage,map:tt,matcap:Be,envMap:mt,envMapMode:mt&&ie.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:Mn,bumpMap:He,normalMap:Ge,displacementMap:d&&Ce,emissiveMap:at,normalMapObjectSpace:Ge&&T.normalMapType===zS,normalMapTangentSpace:Ge&&T.normalMapType===h_,metalnessMap:Ae,roughnessMap:A,anisotropy:S,anisotropyMap:de,clearcoat:O,clearcoatMap:ve,clearcoatNormalMap:Xe,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:Y,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:We,specularColorMap:Oe,specularIntensityMap:it,transmission:Ee,transmissionMap:L,thicknessMap:he,gradientMap:G,opaque:T.transparent===!1&&T.blending===$s&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:fe,combine:T.combine,mapUv:tt&&v(T.map.channel),aoMapUv:N&&v(T.aoMap.channel),lightMapUv:Mn&&v(T.lightMap.channel),bumpMapUv:He&&v(T.bumpMap.channel),normalMapUv:Ge&&v(T.normalMap.channel),displacementMapUv:Ce&&v(T.displacementMap.channel),emissiveMapUv:at&&v(T.emissiveMap.channel),metalnessMapUv:Ae&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:de&&v(T.anisotropyMap.channel),clearcoatMapUv:ve&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(T.sheenRoughnessMap.channel),specularMapUv:We&&v(T.specularMap.channel),specularColorMapUv:Oe&&v(T.specularColorMap.channel),specularIntensityMapUv:it&&v(T.specularIntensityMap.channel),transmissionMapUv:L&&v(T.transmissionMap.channel),thicknessMapUv:he&&v(T.thicknessMap.channel),alphaMapUv:J&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ge||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(tt||J),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:tt&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:at&&T.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ii,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function h(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let R in T.defines)w.push(R),w.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(_(w,T),x(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function _(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function x(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let w=y[T.type],R;if(w){let W=ri[w];R=d1.clone(W.uniforms)}else R=T.uniforms;return R}function P(T,w){let R;for(let W=0,V=u.length;W<V;W++){let X=u[W];if(X.cacheKey===w){R=X,++R.usedTimes;break}}return R===void 0&&(R=new xA(t,w,T,s),u.push(R)),R}function b(T){if(--T.usedTimes===0){let w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:I}}function wA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hy(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,d,m,y,v,g){let h=t[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:y,renderOrder:p.renderOrder,z:v,group:g},t[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=y,h.renderOrder=p.renderOrder,h.z=v,h.group=g),e++,h}function a(p,d,m,y,v,g){let h=o(p,d,m,y,v,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(p,d,m,y,v,g){let h=o(p,d,m,y,v,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(p,d){n.length>1&&n.sort(p||EA),i.length>1&&i.sort(d||Vy),r.length>1&&r.sort(d||Vy)}function u(){for(let p=e,d=t.length;p<d;p++){let m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TA(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Hy,t.set(i,[o])):r>=s.length?(o=new Hy,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ve};break;case"SpotLight":n={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function bA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var CA=0;function PA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IA(t){let e=new AA,n=bA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let r=new F,s=new et,o=new et;function a(c){let u=0,p=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,y=0,v=0,g=0,h=0,_=0,x=0,M=0,P=0,b=0,C=0;c.sort(PA);for(let T=0,w=c.length;T<w;T++){let R=c[T],W=R.color,V=R.intensity,X=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=W.r*V,p+=W.g*V,d+=W.b*V;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],V);C++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ie=R.shadow,H=n.get(R);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=R.shadow.matrix,_++}i.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(W).multiplyScalar(V),q.distance=X,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[v]=q;let ie=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,ie.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[v]=ie.matrix,R.castShadow){let H=n.get(R);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Q,M++}v++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(W).multiplyScalar(V),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=q,g++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let ie=R.shadow,H=n.get(R);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,i.pointShadow[y]=H,i.pointShadowMap[y]=Q,i.pointShadowMatrix[y]=R.shadow.matrix,x++}i.point[y]=q,y++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(V),q.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[h]=q,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==m||I.pointLength!==y||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==h||I.numDirectionalShadows!==_||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==P||I.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,I.directionalLength=m,I.pointLength=y,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=h,I.numDirectionalShadows=_,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=P,I.numLightProbes=C,i.version=CA++)}function l(c,u){let p=0,d=0,m=0,y=0,v=0,g=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){let x=c[h];if(x.isDirectionalLight){let M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Gy(t){let e=new IA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RA(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Gy(t),e.set(r,[a])):s>=o.length?(a=new Gy(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var _p=class extends Oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xp=class extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(t,e,n){let i=new Ta,r=new $e,s=new $e,o=new dt,a=new _p({depthPacking:BS}),l=new xp,c={},u=n.maxTextureSize,p={[gr]:an,[an]:gr,[Ii]:Ii},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:LA,fragmentShader:NA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new ln;y.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Kt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qy;let h=this.type;this.render=function(b,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let T=t.getRenderTarget(),w=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),W=t.state;W.setBlending(pr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let V=h!==Ci&&this.type===Ci,X=h===Ci&&this.type!==Ci;for(let Q=0,q=b.length;Q<q;Q++){let ie=b[Q],H=ie.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let K=H.getFrameExtents();if(r.multiply(K),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,H.mapSize.y=s.y)),H.map===null||V===!0||X===!0){let j=this.type!==Ci?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new Di(r.x,r.y,j),H.map.texture.name=ie.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();let ne=H.getViewportCount();for(let j=0;j<ne;j++){let oe=H.getViewport(j);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),W.viewport(o),H.updateMatrices(ie,j),i=H.getFrustum(),M(C,I,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Ci&&_(H,I),H.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(T,w,R)};function _(b,C){let I=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Di(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,I,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,I,m,v,null)}function x(b,C,I,T){let w=null,R=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)w=R;else if(w=I.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let W=w.uuid,V=C.uuid,X=c[W];X===void 0&&(X={},c[W]=X);let Q=X[V];Q===void 0&&(Q=w.clone(),X[V]=Q,C.addEventListener("dispose",P)),w=Q}if(w.visible=C.visible,w.wireframe=C.wireframe,T===Ci?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:p[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=t.properties.get(w);W.light=I}return w}function M(b,C,I,T,w){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Ci)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let V=e.update(b),X=b.material;if(Array.isArray(X)){let Q=V.groups;for(let q=0,ie=Q.length;q<ie;q++){let H=Q[q],K=X[H.materialIndex];if(K&&K.visible){let ne=x(b,K,T,w);b.onBeforeShadow(t,b,C,I,V,ne,H),t.renderBufferDirect(I,null,V,ne,b,H),b.onAfterShadow(t,b,C,I,V,ne,H)}}}else if(X.visible){let Q=x(b,X,T,w);b.onBeforeShadow(t,b,C,I,V,Q,null),t.renderBufferDirect(I,null,V,Q,b,null),b.onAfterShadow(t,b,C,I,V,Q,null)}}let W=b.children;for(let V=0,X=W.length;V<X;V++)M(W[V],C,I,T,w)}function P(b){b.target.removeEventListener("dispose",P);for(let I in c){let T=c[I],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var UA={[wf]:Ef,[Tf]:Cf,[Af]:Pf,[js]:bf,[Ef]:wf,[Cf]:Tf,[Pf]:Af,[bf]:js};function FA(t,e){function n(){let L=!1,he=new dt,G=null,J=new dt(0,0,0,0);return{setMask:function(me){G!==me&&!L&&(t.colorMask(me,me,me,me),G=me)},setLocked:function(me){L=me},setClear:function(me,fe,Le,_t,Ft){Ft===!0&&(me*=_t,fe*=_t,Le*=_t),he.set(me,fe,Le,_t),J.equals(he)===!1&&(t.clearColor(me,fe,Le,_t),J.copy(he))},reset:function(){L=!1,G=null,J.set(-1,0,0,0)}}}function i(){let L=!1,he=!1,G=null,J=null,me=null;return{setReversed:function(fe){if(he!==fe){let Le=e.get("EXT_clip_control");he?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let _t=me;me=null,this.setClear(_t)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?le(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(fe){G!==fe&&!L&&(t.depthMask(fe),G=fe)},setFunc:function(fe){if(he&&(fe=UA[fe]),J!==fe){switch(fe){case wf:t.depthFunc(t.NEVER);break;case Ef:t.depthFunc(t.ALWAYS);break;case Tf:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Af:t.depthFunc(t.EQUAL);break;case bf:t.depthFunc(t.GEQUAL);break;case Cf:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=fe}},setLocked:function(fe){L=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),t.clearDepth(fe),me=fe)},reset:function(){L=!1,G=null,J=null,me=null,he=!1}}}function r(){let L=!1,he=null,G=null,J=null,me=null,fe=null,Le=null,_t=null,Ft=null;return{setTest:function(je){L||(je?le(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(je){he!==je&&!L&&(t.stencilMask(je),he=je)},setFunc:function(je,Fn,hi){(G!==je||J!==Fn||me!==hi)&&(t.stencilFunc(je,Fn,hi),G=je,J=Fn,me=hi)},setOp:function(je,Fn,hi){(fe!==je||Le!==Fn||_t!==hi)&&(t.stencilOp(je,Fn,hi),fe=je,Le=Fn,_t=hi)},setLocked:function(je){L=je},setClear:function(je){Ft!==je&&(t.clearStencil(je),Ft=je)},reset:function(){L=!1,he=null,G=null,J=null,me=null,fe=null,Le=null,_t=null,Ft=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},p={},d=new WeakMap,m=[],y=null,v=!1,g=null,h=null,_=null,x=null,M=null,P=null,b=null,C=new Ve(0,0,0),I=0,T=!1,w=null,R=null,W=null,V=null,X=null,Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=ie>=1):H.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=ie>=2);let K=null,ne={},j=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ue=new dt().fromArray(j),B=new dt().fromArray(oe);function $(L,he,G,J){let me=new Uint8Array(4),fe=t.createTexture();t.bindTexture(L,fe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<G;Le++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(he+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return fe}let ae={};ae[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(js),He(!1),Ge(Xv),le(t.CULL_FACE),N(pr);function le(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function ye(L,he){return p[L]!==he?(t.bindFramebuffer(L,he),p[L]=he,L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Fe(L,he){let G=m,J=!1;if(L){G=d.get(he),G===void 0&&(G=[],d.set(he,G));let me=L.textures;if(G.length!==me.length||G[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Le=me.length;fe<Le;fe++)G[fe]=t.COLOR_ATTACHMENT0+fe;G.length=me.length,J=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,J=!0);J&&t.drawBuffers(G)}function tt(L){return y!==L?(t.useProgram(L),y=L,!0):!1}let Be={[Gr]:t.FUNC_ADD,[hS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};Be[fS]=t.MIN,Be[pS]=t.MAX;let mt={[mS]:t.ZERO,[gS]:t.ONE,[vS]:t.SRC_COLOR,[Mf]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[MS]:t.DST_COLOR,[_S]:t.DST_ALPHA,[yS]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[SS]:t.ONE_MINUS_DST_COLOR,[xS]:t.ONE_MINUS_DST_ALPHA,[ES]:t.CONSTANT_COLOR,[TS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[bS]:t.ONE_MINUS_CONSTANT_ALPHA};function N(L,he,G,J,me,fe,Le,_t,Ft,je){if(L===pr){v===!0&&(be(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),L!==uS){if(L!==g||je!==T){if((h!==Gr||M!==Gr)&&(t.blendEquation(t.FUNC_ADD),h=Gr,M=Gr),je)switch(L){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qv:t.blendFunc(t.ONE,t.ONE);break;case Yv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $v:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Yv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $v:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,x=null,P=null,b=null,C.set(0,0,0),I=0,g=L,T=je}return}me=me||he,fe=fe||G,Le=Le||J,(he!==h||me!==M)&&(t.blendEquationSeparate(Be[he],Be[me]),h=he,M=me),(G!==_||J!==x||fe!==P||Le!==b)&&(t.blendFuncSeparate(mt[G],mt[J],mt[fe],mt[Le]),_=G,x=J,P=fe,b=Le),(_t.equals(C)===!1||Ft!==I)&&(t.blendColor(_t.r,_t.g,_t.b,Ft),C.copy(_t),I=Ft),g=L,T=!1}function Mn(L,he){L.side===Ii?be(t.CULL_FACE):le(t.CULL_FACE);let G=L.side===an;he&&(G=!G),He(G),L.blending===$s&&L.transparent===!1?N(pr):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function Ge(L){L!==aS?(le(t.CULL_FACE),L!==R&&(L===Xv?t.cullFace(t.BACK):L===lS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),R=L}function Ce(L){L!==W&&(q&&t.lineWidth(L),W=L)}function at(L,he,G){L?(le(t.POLYGON_OFFSET_FILL),(V!==he||X!==G)&&(t.polygonOffset(he,G),V=he,X=G)):be(t.POLYGON_OFFSET_FILL)}function Ae(L){L?le(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function A(L){L===void 0&&(L=t.TEXTURE0+Q-1),K!==L&&(t.activeTexture(L),K=L)}function S(L,he,G){G===void 0&&(K===null?G=t.TEXTURE0+Q-1:G=K);let J=ne[G];J===void 0&&(J={type:void 0,texture:void 0},ne[G]=J),(J.type!==L||J.texture!==he)&&(K!==G&&(t.activeTexture(G),K=G),t.bindTexture(L,he||ae[L]),J.type=L,J.texture=he)}function O(){let L=ne[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){ue.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function xe(L){B.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),B.copy(L))}function We(L,he){let G=c.get(he);G===void 0&&(G=new WeakMap,c.set(he,G));let J=G.get(L);J===void 0&&(J=t.getUniformBlockIndex(he,L.name),G.set(L,J))}function Oe(L,he){let J=c.get(he).get(L);l.get(he)!==J&&(t.uniformBlockBinding(he,J,L.__bindingPointIndex),l.set(he,J))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},K=null,ne={},p={},d=new WeakMap,m=[],y=null,v=!1,g=null,h=null,_=null,x=null,M=null,P=null,b=null,C=new Ve(0,0,0),I=0,T=!1,w=null,R=null,W=null,V=null,X=null,ue.set(0,0,t.canvas.width,t.canvas.height),B.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:ye,drawBuffers:Fe,useProgram:tt,setBlending:N,setMaterial:Mn,setFlipSided:He,setCullFace:Ge,setLineWidth:Ce,setPolygonOffset:at,setScissorTest:Ae,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Xe,texStorage3D:re,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ie,viewport:xe,reset:it}}function Wy(t,e,n,i){let r=OA(i);switch(n){case s_:return t*e;case a_:return t*e;case l_:return t*e*2;case Gp:return t*e/r.components*r.byteLength;case Wp:return t*e/r.components*r.byteLength;case c_:return t*e*2/r.components*r.byteLength;case Xp:return t*e*2/r.components*r.byteLength;case o_:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case qp:return t*e*4/r.components*r.byteLength;case Oc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Of:return Math.max(t,16)*Math.max(e,8)/4;case Df:case Ff:return Math.max(t,8)*Math.max(e,8)/2;case kf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ep:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vc:case tp:case np:return Math.ceil(t/4)*Math.ceil(e/4)*16;case u_:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OA(t){switch(t){case Ni:case n_:return{byteLength:1,components:1};case wa:case i_:case Pa:return{byteLength:2,components:1};case Vp:case Hp:return{byteLength:2,components:4};case $r:case zp:case oi:return{byteLength:4,components:1};case r_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function kA(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,p,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return m?new OffscreenCanvas(A,S):Wc("canvas")}function v(A,S,O){let Z=1,ee=Ae(A);if((ee.width>O||ee.height>O)&&(Z=O/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Y=Math.floor(Z*ee.width),Ee=Math.floor(Z*ee.height);p===void 0&&(p=y(Y,Ee));let de=S?y(Y,Ee):p;return de.width=Y,de.height=Ee,de.getContext("2d").drawImage(A,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ee+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function g(A){return A.generateMipmaps}function h(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,S,O,Z,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===t.RED&&(O===t.FLOAT&&(Y=t.R32F),O===t.HALF_FLOAT&&(Y=t.R16F),O===t.UNSIGNED_BYTE&&(Y=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.R8UI),O===t.UNSIGNED_SHORT&&(Y=t.R16UI),O===t.UNSIGNED_INT&&(Y=t.R32UI),O===t.BYTE&&(Y=t.R8I),O===t.SHORT&&(Y=t.R16I),O===t.INT&&(Y=t.R32I)),S===t.RG&&(O===t.FLOAT&&(Y=t.RG32F),O===t.HALF_FLOAT&&(Y=t.RG16F),O===t.UNSIGNED_BYTE&&(Y=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RG8UI),O===t.UNSIGNED_SHORT&&(Y=t.RG16UI),O===t.UNSIGNED_INT&&(Y=t.RG32UI),O===t.BYTE&&(Y=t.RG8I),O===t.SHORT&&(Y=t.RG16I),O===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),O===t.UNSIGNED_INT&&(Y=t.RGB32UI),O===t.BYTE&&(Y=t.RGB8I),O===t.SHORT&&(Y=t.RGB16I),O===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),O===t.UNSIGNED_INT&&(Y=t.RGBA32UI),O===t.BYTE&&(Y=t.RGBA8I),O===t.SHORT&&(Y=t.RGBA16I),O===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),S===t.RGBA){let Ee=ee?du:Ye.getTransfer(Z);O===t.FLOAT&&(Y=t.RGBA32F),O===t.HALF_FLOAT&&(Y=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Y=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,S){let O;return A?S===null||S===$r||S===to?O=t.DEPTH24_STENCIL8:S===oi?O=t.DEPTH32F_STENCIL8:S===wa&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$r||S===to?O=t.DEPTH_COMPONENT24:S===oi?O=t.DEPTH_COMPONENT32F:S===wa&&(O=t.DEPTH_COMPONENT16),O}function P(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==si?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){let S=A.target;S.removeEventListener("dispose",b),I(S),S.isVideoTexture&&u.delete(S)}function C(A){let S=A.target;S.removeEventListener("dispose",C),w(S)}function I(A){let S=i.get(A);if(S.__webglInit===void 0)return;let O=A.source,Z=d.get(O);if(Z){let ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys(Z).length===0&&d.delete(O)}i.remove(A)}function T(A){let S=i.get(A);t.deleteTexture(S.__webglTexture);let O=A.source,Z=d.get(O);delete Z[S.__cacheKey],o.memory.textures--}function w(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=A.textures;for(let Z=0,ee=O.length;Z<ee;Z++){let Y=i.get(O[Z]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(A)}let R=0;function W(){R=0}function V(){let A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function X(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Q(A,S){let O=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,A,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function q(A,S){let O=i.get(A);if(A.version>0&&O.__version!==A.version){B(O,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function ie(A,S){let O=i.get(A);if(A.version>0&&O.__version!==A.version){B(O,A,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function H(A,S){let O=i.get(A);if(A.version>0&&O.__version!==A.version){$(O,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}let K={[Lf]:t.REPEAT,[qr]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},ne={[_n]:t.NEAREST,[OS]:t.NEAREST_MIPMAP_NEAREST,[cc]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[Bd]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},j={[VS]:t.NEVER,[YS]:t.ALWAYS,[HS]:t.LESS,[d_]:t.LEQUAL,[GS]:t.EQUAL,[qS]:t.GEQUAL,[WS]:t.GREATER,[XS]:t.NOTEQUAL};function oe(A,S){if(S.type===oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===si||S.magFilter===Bd||S.magFilter===cc||S.magFilter===Yr||S.minFilter===si||S.minFilter===Bd||S.minFilter===cc||S.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ne[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,j[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==cc&&S.minFilter!==Yr||S.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ue(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));let Z=S.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let Y=X(S);if(Y!==A.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[Y].usedTimes++;let Ee=ee[A.__cacheKey];Ee!==void 0&&(ee[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(S)),A.__cacheKey=Y,A.__webglTexture=ee[Y].texture}return O}function B(A,S,O){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);let ee=ue(A,S),Y=S.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+O);let Ee=i.get(Y);if(Y.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);let de=Ye.getPrimaries(Ye.workingColorSpace),ve=S.colorSpace===fr?null:Ye.getPrimaries(S.colorSpace),Xe=S.colorSpace===fr||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let re=v(S.image,!1,r.maxTextureSize);re=at(S,re);let _e=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),Ie=x(S.internalFormat,_e,Pe,S.colorSpace,S.isVideoTexture);oe(Z,S);let xe,We=S.mipmaps,Oe=S.isVideoTexture!==!0,it=Ee.__version===void 0||ee===!0,L=Y.dataReady,he=P(S,re);if(S.isDepthTexture)Ie=M(S.format===no,S.type),it&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,_e,Pe,null));else if(S.isDataTexture)if(We.length>0){Oe&&it&&n.texStorage2D(t.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let G=0,J=We.length;G<J;G++)xe=We[G],Oe?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,Pe,xe.data):n.texImage2D(t.TEXTURE_2D,G,Ie,xe.width,xe.height,0,_e,Pe,xe.data);S.generateMipmaps=!1}else Oe?(it&&n.texStorage2D(t.TEXTURE_2D,he,Ie,re.width,re.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,Pe,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,_e,Pe,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ie,We[0].width,We[0].height,re.depth);for(let G=0,J=We.length;G<J;G++)if(xe=We[G],S.format!==Zn)if(_e!==null)if(Oe){if(L)if(S.layerUpdates.size>0){let me=Wy(xe.width,xe.height,S.format,S.type);for(let fe of S.layerUpdates){let Le=xe.data.subarray(fe*me/xe.data.BYTES_PER_ELEMENT,(fe+1)*me/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,fe,xe.width,xe.height,1,_e,Le)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,re.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Ie,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,re.depth,_e,Pe,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Ie,xe.width,xe.height,re.depth,0,_e,Pe,xe.data)}else{Oe&&it&&n.texStorage2D(t.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let G=0,J=We.length;G<J;G++)xe=We[G],S.format!==Zn?_e!==null?Oe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,_e,Pe,xe.data):n.texImage2D(t.TEXTURE_2D,G,Ie,xe.width,xe.height,0,_e,Pe,xe.data)}else if(S.isDataArrayTexture)if(Oe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ie,re.width,re.height,re.depth),L)if(S.layerUpdates.size>0){let G=Wy(re.width,re.height,S.format,S.type);for(let J of S.layerUpdates){let me=re.data.subarray(J*G/re.data.BYTES_PER_ELEMENT,(J+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,_e,Pe,me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Pe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,_e,Pe,re.data);else if(S.isData3DTexture)Oe?(it&&n.texStorage3D(t.TEXTURE_3D,he,Ie,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Pe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,_e,Pe,re.data);else if(S.isFramebufferTexture){if(it)if(Oe)n.texStorage2D(t.TEXTURE_2D,he,Ie,re.width,re.height);else{let G=re.width,J=re.height;for(let me=0;me<he;me++)n.texImage2D(t.TEXTURE_2D,me,Ie,G,J,0,_e,Pe,null),G>>=1,J>>=1}}else if(We.length>0){if(Oe&&it){let G=Ae(We[0]);n.texStorage2D(t.TEXTURE_2D,he,Ie,G.width,G.height)}for(let G=0,J=We.length;G<J;G++)xe=We[G],Oe?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e,Pe,xe):n.texImage2D(t.TEXTURE_2D,G,Ie,_e,Pe,xe);S.generateMipmaps=!1}else if(Oe){if(it){let G=Ae(re);n.texStorage2D(t.TEXTURE_2D,he,Ie,G.width,G.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Pe,re)}else n.texImage2D(t.TEXTURE_2D,0,Ie,_e,Pe,re);g(S)&&h(Z),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,O){if(S.image.length!==6)return;let Z=ue(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);let Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);let Ee=Ye.getPrimaries(Ye.workingColorSpace),de=S.colorSpace===fr?null:Ye.getPrimaries(S.colorSpace),ve=S.colorSpace===fr||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Xe&&!re?_e[J]=v(S.image[J],!0,r.maxCubemapSize):_e[J]=re?S.image[J].image:S.image[J],_e[J]=at(S,_e[J]);let Pe=_e[0],Ie=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),We=x(S.internalFormat,Ie,xe,S.colorSpace),Oe=S.isVideoTexture!==!0,it=Y.__version===void 0||Z===!0,L=ee.dataReady,he=P(S,Pe);oe(t.TEXTURE_CUBE_MAP,S);let G;if(Xe){Oe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,Pe.width,Pe.height);for(let J=0;J<6;J++){G=_e[J].mipmaps;for(let me=0;me<G.length;me++){let fe=G[me];S.format!==Zn?Ie!==null?Oe?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Ie,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,We,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Ie,xe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,We,fe.width,fe.height,0,Ie,xe,fe.data)}}}else{if(G=S.mipmaps,Oe&&it){G.length>0&&he++;let J=Ae(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,J.width,J.height)}for(let J=0;J<6;J++)if(re){Oe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ie,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,_e[J].width,_e[J].height,0,Ie,xe,_e[J].data);for(let me=0;me<G.length;me++){let Le=G[me].image[J].image;Oe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Le.width,Le.height,Ie,xe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,We,Le.width,Le.height,0,Ie,xe,Le.data)}}else{Oe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ie,xe,_e[J]);for(let me=0;me<G.length;me++){let fe=G[me];Oe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ie,xe,fe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,We,Ie,xe,fe.image[J])}}}g(S)&&h(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ae(A,S,O,Z,ee,Y){let Ee=s.convert(O.format,O.colorSpace),de=s.convert(O.type),ve=x(O.internalFormat,Ee,de,O.colorSpace),Xe=i.get(S),re=i.get(O);if(re.__renderTarget=S,!Xe.__hasExternalTextures){let _e=Math.max(1,S.width>>Y),Pe=Math.max(1,S.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,ve,_e,Pe,S.depth,0,Ee,de,null):n.texImage2D(ee,Y,ve,_e,Pe,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,re.__webglTexture,0,He(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,re.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(A,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=M(S.stencilBuffer,ee),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=He(S);Ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Y,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Y,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{let Z=S.textures;for(let ee=0;ee<Z.length;ee++){let Y=Z[ee],Ee=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ve=x(Y.internalFormat,Ee,de,Y.colorSpace),Xe=He(S);O&&Ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ve,S.width,S.height):Ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ve,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ve,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);let ee=Z.__webglTexture,Y=He(S);if(S.depthTexture.format===Zs)Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(S.depthTexture.format===no)Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ye(A){let S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),le(S.__webglDepthbuffer[Z],A,!1);else{let ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),le(S.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(A,S,O){let Z=i.get(A);S!==void 0&&ae(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&ye(A)}function tt(A){let S=A.texture,O=i.get(A),Z=i.get(S);A.addEventListener("dispose",C);let ee=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ve=0;ve<S.mipmaps.length;ve++)O.__webglFramebuffer[de][ve]=t.createFramebuffer()}else O.__webglFramebuffer[de]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[de]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,ve=ee.length;de<ve;de++){let Xe=i.get(ee[de]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ge(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){let ve=ee[de];O.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[de]);let Xe=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),_e=x(ve.internalFormat,Xe,re,ve.colorSpace,A.isXRRenderTarget===!0),Pe=He(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,_e,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,O.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),le(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ae(O.__webglFramebuffer[de][ve],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ae(O.__webglFramebuffer[de],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,ve=ee.length;de<ve;de++){let Xe=ee[de],re=i.get(Xe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Xe),ae(O.__webglFramebuffer,A,Xe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(Xe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Z.__webglTexture),oe(de,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ae(O.__webglFramebuffer[ve],A,S,t.COLOR_ATTACHMENT0,de,ve);else ae(O.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,de,0);g(S)&&h(de),n.unbindTexture()}A.depthBuffer&&ye(A)}function Be(A){let S=A.textures;for(let O=0,Z=S.length;O<Z;O++){let ee=S[O];if(g(ee)){let Y=_(A),Ee=i.get(ee).__webglTexture;n.bindTexture(Y,Ee),h(Y),n.unbindTexture()}}}let mt=[],N=[];function Mn(A){if(A.samples>0){if(Ge(A)===!1){let S=A.textures,O=A.width,Z=A.height,ee=t.COLOR_BUFFER_BIT,Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),de=S.length>1;if(de)for(let ve=0;ve<S.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);let Xe=i.get(S[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,ee,t.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(mt.push(Y),N.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<S.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);let Xe=i.get(S[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function He(A){return Math.min(r.maxSamples,A.samples)}function Ge(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(A){let S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function at(A,S){let O=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==uo&&O!==fr&&(Ye.getTransfer(O)===nt?(Z!==Zn||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ae(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=H,this.rebindTextures=Fe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ge}function BA(t,e){function n(i,r=fr){let s,o=Ye.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===Vp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n_)return t.BYTE;if(i===i_)return t.SHORT;if(i===wa)return t.UNSIGNED_SHORT;if(i===zp)return t.INT;if(i===$r)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Pa)return t.HALF_FLOAT;if(i===s_)return t.ALPHA;if(i===o_)return t.RGB;if(i===Zn)return t.RGBA;if(i===a_)return t.LUMINANCE;if(i===l_)return t.LUMINANCE_ALPHA;if(i===Zs)return t.DEPTH_COMPONENT;if(i===no)return t.DEPTH_STENCIL;if(i===Gp)return t.RED;if(i===Wp)return t.RED_INTEGER;if(i===c_)return t.RG;if(i===Xp)return t.RG_INTEGER;if(i===qp)return t.RGBA_INTEGER;if(i===Oc||i===kc||i===Bc||i===zc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Df||i===Uf||i===Ff||i===Of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Bf||i===zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kf||i===Bf)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===qf||i===Yf||i===$f||i===Zf||i===Jf||i===Kf||i===jf||i===Qf||i===ep)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$f)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ep)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===tp||i===np)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vc)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===np)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u_||i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Mp=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ys=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zA={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=n.getJointPose(v,i),h=this._getHandJoint(c,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new xn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Nn({vertexShader:VA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wp=class extends vr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,y=null,v=new Sp,g=n.getContextAttributes(),h=null,_=null,x=[],M=[],P=new $e,b=null,C=new yn;C.viewport=new dt;let I=new yn;I.viewport=new dt;let T=[C,I],w=new Mp,R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=x[B];return $===void 0&&($=new Sa,x[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=x[B];return $===void 0&&($=new Sa,x[B]=$),$.getGripSpace()},this.getHand=function(B){let $=x[B];return $===void 0&&($=new Sa,x[B]=$),$.getHandSpace()};function V(B){let $=M.indexOf(B.inputSource);if($===-1)return;let ae=x[$];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let B=0;B<x.length;B++){let $=M[B];$!==null&&(M[B]=null,x[B].disconnect($))}R=null,W=null,v.reset(),e.setRenderTarget(h),m=null,d=null,p=null,r=null,_=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Di(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,ae=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=g.stencil?no:Zs,ae=g.stencil?to:$r);let be={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Di(d.textureWidth,d.textureHeight,{format:Zn,type:Ni,depthTexture:new eu(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(B){for(let $=0;$<B.removed.length;$++){let ae=B.removed[$],le=M.indexOf(ae);le>=0&&(M[le]=null,x[le].disconnect(ae))}for(let $=0;$<B.added.length;$++){let ae=B.added[$],le=M.indexOf(ae);if(le===-1){for(let ye=0;ye<x.length;ye++)if(ye>=M.length){M.push(ae),le=ye;break}else if(M[ye]===null){M[ye]=ae,le=ye;break}if(le===-1)break}let be=x[le];be&&be.connect(ae)}}let q=new F,ie=new F;function H(B,$,ae){q.setFromMatrixPosition($.matrixWorld),ie.setFromMatrixPosition(ae.matrixWorld);let le=q.distanceTo(ie),be=$.projectionMatrix.elements,ye=ae.projectionMatrix.elements,Fe=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),Be=(be[9]+1)/be[5],mt=(be[9]-1)/be[5],N=(be[8]-1)/be[0],Mn=(ye[8]+1)/ye[0],He=Fe*N,Ge=Fe*Mn,Ce=le/(-N+Mn),at=Ce*-N;if($.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(at),B.translateZ(Ce),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),be[10]===-1)B.projectionMatrix.copy($.projectionMatrix),B.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ae=Fe+Ce,A=tt+Ce,S=He-at,O=Ge+(le-at),Z=Be*tt/A*Ae,ee=mt*tt/A*Ae;B.projectionMatrix.makePerspective(S,O,Z,ee,Ae,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function K(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let $=B.near,ae=B.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(ae=v.depthFar)),w.near=I.near=C.near=$,w.far=I.far=C.far=ae,(R!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,W=w.far),C.layers.mask=B.layers.mask|2,I.layers.mask=B.layers.mask|4,w.layers.mask=C.layers.mask|I.layers.mask;let le=B.parent,be=w.cameras;K(w,le);for(let ye=0;ye<be.length;ye++)K(be[ye],le);be.length===2?H(w,C,I):w.projectionMatrix.copy(C.projectionMatrix),ne(B,w,le)};function ne(B,$,ae){ae===null?B.matrix.copy($.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply($.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy($.projectionMatrix),B.projectionMatrixInverse.copy($.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ap*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let j=null;function oe(B,$){if(u=$.getViewerPose(c||o),y=$,u!==null){let ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,le=!0);for(let ye=0;ye<ae.length;ye++){let Fe=ae[ye],tt=null;if(m!==null)tt=m.getViewport(Fe);else{let mt=p.getViewSubImage(d,Fe);tt=mt.viewport,ye===0&&(e.setRenderTargetTextures(_,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(_))}let Be=T[ye];Be===void 0&&(Be=new yn,Be.layers.enable(ye),Be.viewport=new dt,T[ye]=Be),Be.matrix.fromArray(Fe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Fe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),ye===0&&(w.matrix.copy(Be.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),le===!0&&w.cameras.push(Be)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){let ye=p.getDepthInformation(ae[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,r.renderState)}}for(let ae=0;ae<x.length;ae++){let le=M[ae],be=x[ae];le!==null&&be!==void 0&&be.update(le,$,c||o)}j&&j(B,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),y=null}let ue=new g_;ue.setAnimationLoop(oe),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}},Vr=new Ln,GA=new et;function WA(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,m_(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,_,x,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),p(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&m(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),y(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,_,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===an&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===an&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let _=e.get(h),x=_.envMap,M=_.envMapRotation;x&&(g.envMap.value=x,Vr.copy(M),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(Vr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,_,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){let _=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XA(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=r[_.id];M===void 0&&(y(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",g));let P=x.program;i.updateUBOMapping(_,P);let b=e.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function u(_){let x=p();_.__bindingPointIndex=x;let M=t.createBuffer(),P=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,C=M.length;b<C;b++){let I=Array.isArray(M[b])?M[b]:[M[b]];for(let T=0,w=I.length;T<w;T++){let R=I[T];if(m(R,b,T,P)===!0){let W=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],X=0;for(let Q=0;Q<V.length;Q++){let q=V[Q],ie=v(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,W+X,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,X),X+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,x,M,P){let b=_.value,C=x+"_"+M;if(P[C]===void 0)return typeof b=="number"||typeof b=="boolean"?P[C]=b:P[C]=b.clone(),!0;{let I=P[C];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return P[C]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function y(_){let x=_.uniforms,M=0,P=16;for(let C=0,I=x.length;C<I;C++){let T=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,R=T.length;w<R;w++){let W=T[w],V=Array.isArray(W.value)?W.value:[W.value];for(let X=0,Q=V.length;X<Q;X++){let q=V[X],ie=v(q),H=M%P,K=H%ie.boundary,ne=H+K;M+=K,ne!==0&&P-ne<ie.storage&&(M+=P-ne),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=ie.storage}}}let b=M%P;return b>0&&(M+=P-b),_.__size=M,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(let _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var oo=class{constructor(e={}){let{canvas:n=ZS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=new Uint32Array(4),v=new Int32Array(4),g=null,h=null,_=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=mr,this.toneMappingExposure=1;let M=this,P=!1,b=0,C=0,I=null,T=-1,w=null,R=new dt,W=new dt,V=null,X=new Ve(0),Q=0,q=n.width,ie=n.height,H=1,K=null,ne=null,j=new dt(0,0,q,ie),oe=new dt(0,0,q,ie),ue=!1,B=new Ta,$=!1,ae=!1,le=new et,be=new et,ye=new F,Fe=new dt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function mt(){return I===null?H:1}let N=i;function Mn(E,D){return n.getContext(E,D)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r170"),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",fe,!1),N===null){let D="webgl2";if(N=Mn(D,E),N===null)throw Mn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,Ge,Ce,at,Ae,A,S,O,Z,ee,Y,Ee,de,ve,Xe,re,_e,Pe,Ie,xe,We,Oe,it,L;function he(){He=new aT(N),He.init(),Oe=new BA(N,He),Ge=new tT(N,He,e,Oe),Ce=new FA(N,He),Ge.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),at=new uT(N),Ae=new wA,A=new kA(N,He,Ce,Ae,Ge,Oe,at),S=new iT(M),O=new oT(M),Z=new v1(N),it=new QE(N,Z),ee=new lT(N,Z,at,it),Y=new dT(N,ee,Z,at),Ie=new hT(N,Ge,A),re=new nT(Ae),Ee=new SA(M,S,O,He,Ge,it,re),de=new WA(M,Ae),ve=new TA,Xe=new RA(He),Pe=new jE(M,S,O,Ce,Y,m,l),_e=new DA(M,Y,Ge),L=new XA(N,at,Ge,Ce),xe=new eT(N,He,at),We=new cT(N,He,at),at.programs=Ee.programs,M.capabilities=Ge,M.extensions=He,M.properties=Ae,M.renderLists=ve,M.shadowMap=_e,M.state=Ce,M.info=at}he();let G=new wp(M,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(q,ie,!1))},this.getSize=function(E){return E.set(q,ie)},this.setSize=function(E,D,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,ie=D,n.width=Math.floor(E*H),n.height=Math.floor(D*H),k===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(q*H,ie*H).floor()},this.setDrawingBufferSize=function(E,D,k){q=E,ie=D,H=k,n.width=Math.floor(E*k),n.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,D,k,z){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,D,k,z),Ce.viewport(R.copy(j).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,D,k,z){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,D,k,z),Ce.scissor(W.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){Ce.setScissorTest(ue=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,D=!0,k=!0){let z=0;if(E){let U=!1;if(I!==null){let se=I.texture.format;U=se===qp||se===Xp||se===Wp}if(U){let se=I.texture.type,pe=se===Ni||se===$r||se===wa||se===to||se===Vp||se===Hp,Me=Pe.getClearColor(),Se=Pe.getClearAlpha(),Re=Me.r,Ne=Me.g,we=Me.b;pe?(y[0]=Re,y[1]=Ne,y[2]=we,y[3]=Se,N.clearBufferuiv(N.COLOR,0,y)):(v[0]=Re,v[1]=Ne,v[2]=we,v[3]=Se,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),Xe.dispose(),Ae.dispose(),S.dispose(),O.dispose(),Y.dispose(),it.dispose(),L.dispose(),Ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",tm),G.removeEventListener("sessionend",nm),_r.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=at.autoReset,D=_e.enabled,k=_e.autoUpdate,z=_e.needsUpdate,U=_e.type;he(),at.autoReset=E,_e.enabled=D,_e.autoUpdate=k,_e.needsUpdate=z,_e.type=U}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){let D=E.target;D.removeEventListener("dispose",Le),_t(D)}function _t(E){Ft(E),Ae.remove(E)}function Ft(E){let D=Ae.get(E).programs;D!==void 0&&(D.forEach(function(k){Ee.releaseProgram(k)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,z,U,se){D===null&&(D=tt);let pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=U_(E,D,k,z,U);Ce.setMaterial(z,pe);let Se=k.index,Re=1;if(z.wireframe===!0){if(Se=ee.getWireframeAttribute(k),Se===void 0)return;Re=2}let Ne=k.drawRange,we=k.attributes.position,Ze=Ne.start*Re,rt=(Ne.start+Ne.count)*Re;se!==null&&(Ze=Math.max(Ze,se.start*Re),rt=Math.min(rt,(se.start+se.count)*Re)),Se!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Se.count)):we!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,we.count));let lt=rt-Ze;if(lt<0||lt===1/0)return;it.setup(U,z,Me,k,Se);let Qt,Je=xe;if(Se!==null&&(Qt=Z.get(Se),Je=We,Je.setIndex(Qt)),U.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*mt()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(U.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*mt()),U.isLineSegments?Je.setMode(N.LINES):U.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else U.isPoints?Je.setMode(N.POINTS):U.isSprite&&Je.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Te=U._multiDrawStarts,di=U._multiDrawCounts,Ke=U._multiDrawCount,On=Se?Z.get(Se).bytesPerElement:1,es=Ae.get(z).currentProgram.getUniforms();for(let cn=0;cn<Ke;cn++)es.setValue(N,"_gl_DrawID",cn),Je.render(Te[cn]/On,di[cn])}else if(U.isInstancedMesh)Je.renderInstances(Ze,lt,U.count);else if(k.isInstancedBufferGeometry){let Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,di=Math.min(k.instanceCount,Te);Je.renderInstances(Ze,lt,di)}else Je.render(Ze,lt)};function je(E,D,k){E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,za(E,D,k),E.side=gr,E.needsUpdate=!0,za(E,D,k),E.side=Ii):za(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),h=Xe.get(k),h.init(D),x.push(h),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();let z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){let Me=se[pe];je(Me,k,U),z.add(Me)}else je(se,k,U),z.add(se)}),x.pop(),h=null,z},this.compileAsync=function(E,D,k=null){let z=this.compile(E,D,k);return new Promise(U=>{function se(){if(z.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){U(E);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Fn=null;function hi(E){Fn&&Fn(E)}function tm(){_r.stop()}function nm(){_r.start()}let _r=new g_;_r.setAnimationLoop(hi),typeof self!="undefined"&&_r.setContext(self),this.setAnimationLoop=function(E){Fn=E,G.setAnimationLoop(E),E===null?_r.stop():_r.start()},G.addEventListener("sessionstart",tm),G.addEventListener("sessionend",nm),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,D,I),h=Xe.get(E,x.length),h.init(D),x.push(h),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(be),ae=this.localClippingEnabled,$=re.init(this.clippingPlanes,ae),g=ve.get(E,_.length),g.init(),_.push(g),G.enabled===!0&&G.isPresenting===!0){let se=M.xr.getDepthSensingMesh();se!==null&&yu(se,D,-1/0,M.sortObjects)}yu(E,D,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(K,ne),Be=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Be&&Pe.addToRenderList(g,E),this.info.render.frame++,$===!0&&re.beginShadows();let k=h.state.shadowsArray;_e.render(k,E,D),$===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,U=g.transmissive;if(h.setupLights(),D.isArrayCamera){let se=D.cameras;if(U.length>0)for(let pe=0,Me=se.length;pe<Me;pe++){let Se=se[pe];rm(z,U,E,Se)}Be&&Pe.render(E);for(let pe=0,Me=se.length;pe<Me;pe++){let Se=se[pe];im(g,E,Se,Se.viewport)}}else U.length>0&&rm(z,U,E,D),Be&&Pe.render(E),im(g,E,D);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(M,E,D),it.resetDefaultState(),T=-1,w=null,x.pop(),x.length>0?(h=x[x.length-1],$===!0&&re.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function yu(E,D,k,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){z&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);let pe=Y.update(E),Me=E.material;Me.visible&&g.push(E,pe,Me,k,Fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||B.intersectsObject(E))){let pe=Y.update(E),Me=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Fe.copy(pe.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){let Se=pe.groups;for(let Re=0,Ne=Se.length;Re<Ne;Re++){let we=Se[Re],Ze=Me[we.materialIndex];Ze&&Ze.visible&&g.push(E,pe,Ze,k,Fe.z,we)}}else Me.visible&&g.push(E,pe,Me,k,Fe.z,null)}}let se=E.children;for(let pe=0,Me=se.length;pe<Me;pe++)yu(se[pe],D,k,z)}function im(E,D,k,z){let U=E.opaque,se=E.transmissive,pe=E.transparent;h.setupLightsView(k),$===!0&&re.setGlobalState(M.clippingPlanes,k),z&&Ce.viewport(R.copy(z)),U.length>0&&Ba(U,D,k),se.length>0&&Ba(se,D,k),pe.length>0&&Ba(pe,D,k),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function rm(E,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Di(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Pa:Ni,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let se=h.state.transmissionRenderTarget[z.id],pe=z.viewport||R;se.setSize(pe.z,pe.w);let Me=M.getRenderTarget();M.setRenderTarget(se),M.getClearColor(X),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Be&&Pe.render(k);let Se=M.toneMapping;M.toneMapping=mr;let Re=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),$===!0&&re.setGlobalState(M.clippingPlanes,z),Ba(E,k,z),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let we=0,Ze=D.length;we<Ze;we++){let rt=D[we],lt=rt.object,Qt=rt.geometry,Je=rt.material,Te=rt.group;if(Je.side===Ii&&lt.layers.test(z.layers)){let di=Je.side;Je.side=an,Je.needsUpdate=!0,sm(lt,k,z,Qt,Je,Te),Je.side=di,Je.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}M.setRenderTarget(Me),M.setClearColor(X,Q),Re!==void 0&&(z.viewport=Re),M.toneMapping=Se}function Ba(E,D,k){let z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,se=E.length;U<se;U++){let pe=E[U],Me=pe.object,Se=pe.geometry,Re=z===null?pe.material:z,Ne=pe.group;Me.layers.test(k.layers)&&sm(Me,D,k,Se,Re,Ne)}}function sm(E,D,k,z,U,se){E.onBeforeRender(M,D,k,z,U,se),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(M,D,k,z,E,se),U.transparent===!0&&U.side===Ii&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,M.renderBufferDirect(k,D,z,U,E,se),U.side=gr,U.needsUpdate=!0,M.renderBufferDirect(k,D,z,U,E,se),U.side=Ii):M.renderBufferDirect(k,D,z,U,E,se),E.onAfterRender(M,D,k,z,U,se)}function za(E,D,k){D.isScene!==!0&&(D=tt);let z=Ae.get(E),U=h.state.lights,se=h.state.shadowsArray,pe=U.state.version,Me=Ee.getParameters(E,U.state,se,D,k),Se=Ee.getProgramCacheKey(Me),Re=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Le),Re=new Map,z.programs=Re);let Ne=Re.get(Se);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===pe)return am(E,Me),Ne}else Me.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Me,M),Ne=Ee.acquireProgram(Me,Se),Re.set(Se,Ne),z.uniforms=Me.uniforms;let we=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),am(E,Me),z.needsLights=O_(E),z.lightsStateVersion=pe,z.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function om(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Ks.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function am(E,D){let k=Ae.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function U_(E,D,k,z,U){D.isScene!==!0&&(D=tt),A.resetTextureUnits();let se=D.fog,pe=z.isMeshStandardMaterial?D.environment:null,Me=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:uo,Se=(z.isMeshStandardMaterial?O:S).get(z.envMap||pe),Re=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color,lt=mr;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(lt=M.toneMapping);let Qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=Qt!==void 0?Qt.length:0,Te=Ae.get(z),di=h.state.lights;if($===!0&&(ae===!0||E!==w)){let Sn=E===w&&z.id===T;re.setState(z,E,Sn)}let Ke=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==di.state.version||Te.outputColorSpace!==Me||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||z.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Ne||Te.morphTargets!==we||Te.morphNormals!==Ze||Te.morphColors!==rt||Te.toneMapping!==lt||Te.morphTargetsCount!==Je)&&(Ke=!0):(Ke=!0,Te.__version=z.version);let On=Te.currentProgram;Ke===!0&&(On=za(z,D,U));let es=!1,cn=!1,yo=!1,ct=On.getUniforms(),Kn=Te.uniforms;if(Ce.useProgram(On.program)&&(es=!0,cn=!0,yo=!0),z.id!==T&&(T=z.id,cn=!0),es||w!==E){Ce.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),KS(le),jS(le),ct.setValue(N,"projectionMatrix",le)):ct.setValue(N,"projectionMatrix",E.projectionMatrix),ct.setValue(N,"viewMatrix",E.matrixWorldInverse);let ki=ct.map.cameraPosition;ki!==void 0&&ki.setValue(N,ye.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,cn=!0,yo=!0)}if(U.isSkinnedMesh){ct.setOptional(N,U,"bindMatrix"),ct.setOptional(N,U,"bindMatrixInverse");let Sn=U.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ct.setValue(N,"boneTexture",Sn.boneTexture,A))}U.isBatchedMesh&&(ct.setOptional(N,U,"batchingTexture"),ct.setValue(N,"batchingTexture",U._matricesTexture,A),ct.setOptional(N,U,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",U._indirectTexture,A),ct.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",U._colorsTexture,A));let _o=k.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Ie.update(U,k,On),(cn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,ct.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Kn.envMap.value=Se,Kn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Kn.envMapIntensity.value=D.environmentIntensity),cn&&(ct.setValue(N,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&F_(Kn,yo),se&&z.fog===!0&&de.refreshFogUniforms(Kn,se),de.refreshMaterialUniforms(Kn,z,H,ie,h.state.transmissionRenderTarget[E.id]),Ks.upload(N,om(Te),Kn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ks.upload(N,om(Te),Kn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(N,"center",U.center),ct.setValue(N,"modelViewMatrix",U.modelViewMatrix),ct.setValue(N,"normalMatrix",U.normalMatrix),ct.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Sn=z.uniformsGroups;for(let ki=0,Bi=Sn.length;ki<Bi;ki++){let lm=Sn[ki];L.update(lm,On),L.bind(lm,On)}}return On}function F_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function O_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,D,k){Ae.get(E.texture).__webglTexture=D,Ae.get(E.depthTexture).__webglTexture=k;let z=Ae.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let k=Ae.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){I=E,b=D,C=k;let z=!0,U=null,se=!1,pe=!1;if(E){let Se=Ae.get(E);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Se.__hasExternalTextures)A.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let we=E.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ae.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(pe=!0);let Ne=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?U=Ne[D][k]:U=Ne[D],se=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[k]:U=Ne,R.copy(E.viewport),W.copy(E.scissor),V=E.scissorTest}else R.copy(j).multiplyScalar(H).floor(),W.copy(oe).multiplyScalar(H).floor(),V=ue;if(Ce.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&Ce.drawBuffers(E,U),Ce.viewport(R),Ce.scissor(W),Ce.setScissorTest(V),se){let Se=Ae.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,k)}else if(pe){let Se=Ae.get(E.texture),Re=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Re)}T=-1},this.readRenderTargetPixels=function(E,D,k,z,U,se,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Ce.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Se=E.texture,Re=Se.format,Ne=Se.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&k>=0&&k<=E.height-U&&N.readPixels(D,k,z,U,Oe.convert(Re),Oe.convert(Ne),se)}finally{let Se=I!==null?Ae.get(I).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,z,U,se,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){let Se=E.texture,Re=Se.format,Ne=Se.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-z&&k>=0&&k<=E.height-U){Ce.bindFramebuffer(N.FRAMEBUFFER,Me);let we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(D,k,z,U,Oe.convert(Re),Oe.convert(Ne),0);let Ze=I!==null?Ae.get(I).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Ze);let rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await JS(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(we),N.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let z=Math.pow(2,-k),U=Math.floor(E.image.width*z),se=Math.floor(E.image.height*z),pe=D!==null?D.x:0,Me=D!==null?D.y:0;A.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,pe,Me,U,se),Ce.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,z=null,U=0){E.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let se,pe,Me,Se,Re,Ne,we,Ze,rt,lt=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(se=k.max.x-k.min.x,pe=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,Se=k.min.x,Re=k.min.y,Ne=k.isBox3?k.min.z:0):(se=lt.width,pe=lt.height,Me=lt.depth||1,Se=0,Re=0,Ne=0),z!==null?(we=z.x,Ze=z.y,rt=z.z):(we=0,Ze=0,rt=0);let Qt=Oe.convert(D.format),Je=Oe.convert(D.type),Te;D.isData3DTexture?(A.setTexture3D(D,0),Te=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Te=N.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Te=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let di=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),On=N.getParameter(N.UNPACK_SKIP_PIXELS),es=N.getParameter(N.UNPACK_SKIP_ROWS),cn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne);let yo=E.isDataArrayTexture||E.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Kn=Ae.get(E),_o=Ae.get(D),Sn=Ae.get(Kn.__renderTarget),ki=Ae.get(_o.__renderTarget);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Bi=0;Bi<Me;Bi++)yo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(E).__webglTexture,U,Ne+Bi),E.isDepthTexture?(ct&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(D).__webglTexture,U,rt+Bi),N.blitFramebuffer(Se,Re,se,pe,we,Ze,se,pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):ct?N.copyTexSubImage3D(Te,U,we,Ze,rt+Bi,Se,Re,se,pe):N.copyTexSubImage2D(Te,U,we,Ze,rt+Bi,Se,Re,se,pe);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Te,U,we,Ze,rt,se,pe,Me,Qt,Je,lt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,U,we,Ze,rt,se,pe,Me,Qt,lt.data):N.texSubImage3D(Te,U,we,Ze,rt,se,pe,Me,Qt,Je,lt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,we,Ze,se,pe,Qt,Je,lt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,we,Ze,lt.width,lt.height,Qt,lt.data):N.texSubImage2D(N.TEXTURE_2D,U,we,Ze,se,pe,Qt,Je,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,di),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,On),N.pixelStorei(N.UNPACK_SKIP_ROWS,es),N.pixelStorei(N.UNPACK_SKIP_IMAGES,cn),U===0&&D.generateMipmaps&&N.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,z=null,U=0){return E.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0),xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,k,z,U)},this.initRenderTarget=function(E){Ae.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){b=0,C=0,I=null,Ce.reset(),it.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}};var ao=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Ep=class extends xn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=_n,u=_n,p,d){super(null,o,a,l,c,u,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tu=class extends Ut{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new et,Xy=new et,Ic=[],qy=new Ui,qA=new et,va=new Kt,ya=new Fi,nu=class extends Kt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new tu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,qA)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Xs),qy.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(qy)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Xs),ya.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(ya)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xs),Xy.multiplyMatrices(i,Xs),va.matrixWorld=Xy,va.raycast(e,Ic);for(let o=0,a=Ic.length;o<a;o++){let l=Ic[o];l.instanceId=s,l.object=this,n.push(l)}Ic.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new tu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ep(new Float32Array(r*this.count),r,this.count,Gp,oi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var lo=class extends Oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},iu=new F,ru=new F,Yy=new et,_a=new Ea,Rc=new Fi,gf=new F,$y=new F,Aa=class extends Xt{constructor(e=new ln,n=new lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)iu.fromBufferAttribute(n,r-1),ru.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=iu.distanceTo(ru);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;Yy.copy(r).invert(),_a.copy(e.ray).applyMatrix4(Yy);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let m=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let v=m,g=y-1;v<g;v+=c){let h=u.getX(v),_=u.getX(v+1),x=Lc(this,e,_a,l,h,_);x&&n.push(x)}if(this.isLineLoop){let v=u.getX(y-1),g=u.getX(m),h=Lc(this,e,_a,l,v,g);h&&n.push(h)}}else{let m=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let v=m,g=y-1;v<g;v+=c){let h=Lc(this,e,_a,l,v,v+1);h&&n.push(h)}if(this.isLineLoop){let v=Lc(this,e,_a,l,y-1,m);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Lc(t,e,n,i,r,s){let o=t.geometry.attributes.position;if(iu.fromBufferAttribute(o,r),ru.fromBufferAttribute(o,s),n.distanceSqToSegment(iu,ru,gf,$y)>i)return;gf.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(gf);if(!(l<e.near||l>e.far))return{distance:l,point:$y.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var su=class extends Aa{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},Tp=class extends Oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zy=new et,Ap=new Ea,Nc=new Fi,Dc=new F,ou=class extends Xt{constructor(e=new ln,n=new Tp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;Zy.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(Zy);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=d,v=m;y<v;y++){let g=c.getX(y);Dc.fromBufferAttribute(p,g),Jy(Dc,g,l,r,e,n,this)}}else{let d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let y=d,v=m;y<v;y++)Dc.fromBufferAttribute(p,y),Jy(Dc,y,l,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Jy(t,e,n,i,r,s,o){let a=Ap.distanceSqToPoint(t);if(a<n){let l=new F;Ap.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bp=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,m=(o-u)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new $e:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new F,r=[],s=[],o=[],a=new F,l=new et;for(let m=0;m<=e;m++){let y=m/e;r[m]=this.getTangentAt(y,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Wt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,y))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Wt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],m*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function $p(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,p){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+p)+(l-a)/p;d*=u,m*=u,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Uc=new F,vf=new $p,yf=new $p,_f=new $p,au=class extends bp{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Uc.subVectors(r[0],r[1]).add(r[0]),c=Uc);let p=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Uc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Uc),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(p),m),v=Math.pow(p.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),vf.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,y,v,g),yf.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,y,v,g),_f.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,y,v,g)}else this.curveType==="catmullrom"&&(vf.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),yf.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),_f.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return i.set(vf.calc(l),yf.calc(l),_f.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ba=class extends Oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h_,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function YA(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var co=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cp=class extends co{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zv,endingEnd:Zv}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jv:s=e,a=2*n-i;break;case Kv:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jv:o=e,l=2*i-n;break;case Kv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-n)/(r-n),v=y*y,g=v*y,h=-d*g+2*d*v-d*y,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,x=(-1-m)*g+(1.5+m)*v+.5*y,M=m*g-m*v;for(let P=0;P!==a;++P)s[P]=h*o[u+P]+_*o[c+P]+x*o[l+P]+M*o[p+P];return s}},Pp=class extends co{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),p=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*p+o[l+d]*u;return s}},Ip=class extends co{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fc(n,this.TimeBufferType),this.values=Fc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Fc(e.times,Array),values:Fc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Hc:n=this.InterpolantFactoryMethodDiscrete;break;case op:n=this.InterpolantFactoryMethodLinear;break;case zd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hc;case this.InterpolantFactoryMethodLinear:return op;case this.InterpolantFactoryMethodSmooth:return zd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&YA(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===zd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let p=a*i,d=p-i,m=p+i;for(let y=0;y!==i;++y){let v=n[p+y];if(v!==n[d+y]||v!==n[m+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*i,d=o*i;for(let m=0;m!==i;++m)n[d+m]=n[p+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=op;var Zr=class extends Jn{constructor(e,n,i){super(e,n,i)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Hc;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rp=class extends Jn{};Rp.prototype.ValueTypeName="color";var Lp=class extends Jn{};Lp.prototype.ValueTypeName="number";var Np=class extends co{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)li.slerpFlat(s,0,o,c-a,o,c,l);return s}},lu=class extends Jn{InterpolantFactoryMethodLinear(e){return new Np(this.times,this.values,this.getValueSize(),e)}};lu.prototype.ValueTypeName="quaternion";lu.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Jn{constructor(e,n,i){super(e,n,i)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Hc;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dp=class extends Jn{};Dp.prototype.ValueTypeName="vector";var Up=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let m=c[p],y=c[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}},$A=new Up,Fp=class{constructor(e){this.manager=e!==void 0?e:$A,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fp.DEFAULT_MATERIAL_NAME="__DEFAULT";var cu=class extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var xf=new et,Ky=new F,jy=new F,Op=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Ky.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ky),jy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jy),n.updateMatrixWorld(),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kp=class extends Op{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends cu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},uu=class extends cu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zp="\\[\\]\\.:\\/",ZA=new RegExp("["+Zp+"]","g"),Jp="[^"+Zp+"]",JA="[^"+Zp.replace("\\.","")+"]",KA=/((?:WC+[\/:])*)/.source.replace("WC",Jp),jA=/(WCOD+)?/.source.replace("WCOD",JA),QA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jp),eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jp),tb=new RegExp("^"+KA+jA+QA+eb+"$"),nb=["material","materials","bones","map"],Bp=class{constructor(e,n,i){let r=i||pt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},pt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZA,"")}static parseTrackName(e){let n=tb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);nb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Bp;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iC=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pu=Math.PI,Ra=[1,1,1],Kp=[.03,.9,.84],S_=[1,.33,.06];function ib(t,e,n){return t>.28&&t>e*1.3&&t>n*1.3?S_:e>.22&&e>t*1.2&&n>t*1.05?Kp:Ra}function w_(t,e,n,i=.11){let r=[],s=e/n;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=(o*e+a)*4,c=t[l]/255,u=t[l+1]/255,p=t[l+2]/255,d=Math.max(c,u,p)*.6+(c+u+p)/3*.4;if(d<i)continue;let m=ib(c,u,p),y=m===Ra?.55+.45*d:1;r.push({x:((a+.5)/e*2-1)*s,y:1-(o+.5)/n*2,s:[.4,.58,.76,.94][Math.min(3,Math.floor(Math.pow(d,.8)*4))],c:[m[0]*y,m[1]*y,m[2]*y]})}return{pts:r,cell:2/n,flow:0}}function rb(t,e){let n=Math.round(e*t.naturalWidth/t.naturalHeight),i=document.createElement("canvas");i.width=n,i.height=e;let r=i.getContext("2d",{willReadFrequently:!0});return r.drawImage(t,0,0,n,e),w_(r.getImageData(0,0,n,e).data,n,e)}function sb(t){let e=document.createElement("canvas");e.width=t,e.height=t;let n=e.getContext("2d",{willReadFrequently:!0});n.scale(t/600,t/600);let i=n.createLinearGradient(0,0,600,600);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#6f7473"),n.fillStyle=i,["M30 37H300V220A290.7 290.7 0 0 1 30 37Z","M42 580A383 383 0 0 1 425 197V337A243 243 0 0 0 182 580Z","M267 402V580H530A283 283 0 0 0 267 402Z"].forEach(s=>n.fill(new Path2D(s)));let r=n.createRadialGradient(435,85,10,462,113,95);return r.addColorStop(0,"#ff7a45"),r.addColorStop(1,"#b83208"),n.fillStyle=r,n.beginPath(),n.arc(462,113,92,0,2*pu),n.fill(),w_(n.getImageData(0,0,t,t).data,t,t,.05)}function ob(){let t=[],e=new F(-.5,.55,.67).normalize();for(let n=-84;n<=84;n+=4.2){let i=Math.cos(n*pu/180),r=Math.max(1,Math.round(i*86));for(let s=0;s<r;s++){let o=s/r*2*pu+n*.21,a=i*Math.cos(o);if(a<-.05)continue;let l=i*Math.sin(o),c=Math.sin(n*pu/180),u=Math.max(0,l*e.x+c*e.y+a*e.z);t.push({x:l,y:c,s:.34+u*.66,c:u>.7?S_:u<.16?Kp:Ra})}}return{pts:t,cell:.03,flow:0}}function ab(t){let e=[],n=Array.from({length:11},(i,r)=>({y:-1.05+r*.21+(Math.random()-.5)*.08,f:.9+Math.random()*1.6,p:Math.random()*6,a:.05+Math.random()*.09}));for(let i=0;i<t;i++){let r=n[i%n.length],s=(Math.random()*2-1)*2.6;e.push({x:s,y:r.y+Math.sin(s*r.f+r.p)*r.a+(Math.random()-.5)*.035,s:.16+Math.random()*.42,c:Math.random()>.93?Kp:Ra})}return{pts:e,cell:.02,flow:1}}function lb(t,e){let n=t.pts.slice();for(let s=n.length-1;s>0;s--){let o=Math.random()*(s+1)|0;[n[s],n[o]]=[n[o],n[s]]}let i=new Float32Array(e*3),r=new Float32Array(e*3);for(let s=0;s<e;s++){let o=n[s]||{x:(Math.random()*2-1)*2.6,y:(Math.random()*2-1)*1.15,s:Math.random()>.7?.08+Math.random()*.1:0,c:Ra,dust:1};i[s*3]=o.x,i[s*3+1]=o.y,i[s*3+2]=o.dust?-o.s:o.s,r.set(o.c,s*3)}return{a:i,c:r,cell:t.cell,flow:t.flow}}var cb=`
attribute vec3 aA; attribute vec3 aB; attribute vec3 aCA; attribute vec3 aCB; attribute vec3 aR;
uniform float uK, uT, uAsp, uH, uVel, uFlowA, uFlowB, uCellA, uCellB;
uniform vec4 uLA, uLB; // x, y, scale, alpha
uniform vec2 uMouse;
varying vec3 vC; varying float vA;
vec2 place(vec3 s, vec4 L, float flow){
  vec2 p = s.xy;
  if (s.z < 0.0) { p.x = mod(p.x + uT * (0.02 + aR.y * 0.05) + 2.6, 5.2) - 2.6; return vec2(p.x * uAsp / 1.78, p.y); }
  if (flow > 0.5) { p.x = mod(p.x + uT * (0.03 + aR.y * 0.07) + 2.6, 5.2) - 2.6; p.y += sin(uT * 0.5 + p.x * 2.0 + aR.z * 6.28) * 0.012; return vec2(p.x * uAsp / 1.78, p.y); }
  return p * L.z + L.xy;
}
void main(){
  float d = aR.x * 0.45 + (aA.x * 0.2 + 0.5) * 0.3;
  float k = smoothstep(d, d + 0.35, uK * 1.12);
  vec2 a = place(aA, uLA, uFlowA), b = place(aB, uLB, uFlowB);
  vec2 p = mix(a, b, k);
  float w = sin(k * 3.14159);
  // the gust turns into a vortex: dots spiral round the midpoint while they travel
  vec2 cc = mix(uLA.xy, uLB.xy, k);
  float ang = w * (2.2 + aR.x * 2.6) * (1.0 - 0.6 * max(uFlowA, uFlowB));
  vec2 q = (p - cc) * (1.0 - w * 0.3);
  p = cc + vec2(q.x * cos(ang) - q.y * sin(ang), q.x * sin(ang) + q.y * cos(ang));
  p.x += w * (0.12 + aR.y * 0.45);                                   // carried east
  p.y += w * (sin(aR.z * 6.28 + k * 7.0 + uT) * 0.16 + (aR.y - 0.5) * 0.35);
  p += vec2(sin(uT * 1.3 + aR.z * 40.0), cos(uT * 1.1 + aR.x * 40.0)) * 0.0011;
  float loose = step(0.978, aR.y) * (1.0 - w);                        // a few dots always trail off downwind
  float tr = fract(uT * (0.05 + aR.x * 0.08) + aR.z);
  p.x += loose * tr * 0.9; p.y += loose * sin(tr * 9.0 + aR.z * 20.0) * 0.05;
  p.x += uVel * (aR.y - 0.2) * 0.25;
  vec2 dm = p - uMouse; float f = exp(-dot(dm, dm) * 18.0);
  p += normalize(dm + 0.0001) * f * 0.09;
  float sa = abs(aA.z), sb = abs(aB.z);
  float ca = aA.z < 0.0 ? 0.012 : uCellA * uLA.z, cb = aB.z < 0.0 ? 0.012 : uCellB * uLB.z;
  if (uFlowA > 0.5) ca = 0.014; if (uFlowB > 0.5) cb = 0.014;
  float px = mix(sa * ca, sb * cb, k) * uH * 0.5;
  gl_PointSize = max(px * (1.0 - w * 0.35) * (1.0 - loose * tr), 0.0);
  gl_Position = vec4(p.x / uAsp, p.y, 0.0, 1.0);
  vC = mix(aCA, aCB, k);
  float aa = aA.z < 0.0 ? min(0.2, uLA.w) : uLA.w, ab = aB.z < 0.0 ? min(0.2, uLB.w) : uLB.w;
  vA = mix(aa, ab, k) * (1.0 - loose * tr * 0.8);
}`,ub="precision mediump float; varying vec3 vC; varying float vA; void main(){ gl_FragColor = vec4(vC, vA); }";function E_(t){let e;try{e=new oo({canvas:t,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}let n=Math.min(window.devicePixelRatio||1,2);e.setPixelRatio(n);let i=new ao,r=new ro,s=Math.min(window.innerWidth,window.innerHeight)<700,o=s?.72:1,a=!1,l=null,c=0,u,p,d=0,m=K=>new Promise(ne=>{let j=new Image;j.onload=()=>ne(j),j.onerror=()=>ne(null),j.src=K});Promise.all(["sculpture","decode","design","deploy","distill"].map(K=>m(`img/${K}.jpg`))).then(K=>{if(a)return;let ne={logo:sb(Math.round(122*o)),globe:ob()};["sculpture","decode","design","deploy","distill"].forEach((ue,B)=>{ne[ue]=K[B]?rb(K[B],Math.round((ue==="sculpture"?196:152)*o)):ne.logo}),c=Math.max(...Object.values(ne).map(ue=>ue.pts.length))+(s?1200:2600),ne.streams=ab(Math.round(c*.8)),l={};for(let ue in ne)l[ue]=lb(ne[ue],c);u=new ln;let j=new Float32Array(c*3);for(let ue=0;ue<c*3;ue++)j[ue]=Math.random();u.setAttribute("position",new Ut(new Float32Array(c*3),3)),["aA","aB","aCA","aCB"].forEach(ue=>u.setAttribute(ue,new Ut(new Float32Array(c*3),3))),u.setAttribute("aR",new Ut(j,3)),p=new Nn({vertexShader:cb,fragmentShader:ub,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uK:{value:0},uT:{value:0},uAsp:{value:1},uH:{value:1},uVel:{value:0},uFlowA:{value:0},uFlowB:{value:0},uCellA:{value:.02},uCellB:{value:.02},uLA:{value:new dt(0,0,1,1)},uLB:{value:new dt(0,0,1,1)},uMouse:{value:new $e(9,9)}}});let oe=new ou(u,p);oe.frustumCulled=!1,i.add(oe),t.classList.add("ready")});let y=1,v=1,g=1,h=!1,_=()=>{y=window.innerWidth,v=window.innerHeight,e.setSize(y,v,!1),g=y/v,h=g<.85};_(),window.addEventListener("resize",_);let x=K=>{let ne={sculpture:h?[0,-.5,.42,1]:[.6,-.04,.72,1],step:h?[0,.47,.3,1]:[.46,0,.62,1],globe:h?[0,.05,.36,1]:[0,-.08,.5,1],logo:h?[0,.47,.3,1]:[-.5,0,.62,1],logoR:h?[.45,.62,.16,.9]:[.6,.12,.42,1],streams:[0,0,1,h?.26:.32],quiet:[0,0,1,.1]},j=ne[K]?K:K==="streams"?"streams":"step",oe=ne[j];return[oe[0]*g,oe[1],oe[2],oe[3]]},M=K=>K==="logoR"?"logo":K==="quiet"?"streams":K,P=[],b=()=>{let K=[];document.querySelectorAll("[data-stage]").forEach(ne=>{let j=ne.getBoundingClientRect(),oe=j.top+window.scrollY,ue=ne.dataset.stage.split(",");if(j.height>v*1.5){let B=oe+v/2,$=oe+j.height-v/2;ue.length===1?K.push({y:B,name:ue[0]},{y:$,name:ue[0]}):ue.forEach((ae,le)=>K.push({y:B+($-B)*(le/(ue.length-1)),name:ae}))}else K.push({y:oe+j.height/2,name:ue[0]})}),P=K.sort((ne,j)=>ne.y-j.y)};b();let C=setInterval(b,400),I={x:9,y:9},T=K=>{I.x=(K.clientX/y*2-1)*g,I.y=1-K.clientY/v*2};window.addEventListener("pointermove",T,{passive:!0});let w=null,R=null,W=window.scrollY,V=0,X=performance.now(),Q=window.matchMedia("(prefers-reduced-motion: reduce)").matches,q=performance.now(),ie=(K,ne,j)=>{let oe=l[M(j)]||l.streams;return u.attributes[K].array.set(oe.a),u.attributes[K].needsUpdate=!0,u.attributes[ne].array.set(oe.c),u.attributes[ne].needsUpdate=!0,oe},H=()=>{if(d=requestAnimationFrame(H),!l||document.hidden||!P.length)return;let K=performance.now(),ne=Math.min(.1,(K-X)/1e3);X=K;let j=window.scrollY+v/2,oe=P[0],ue=P[0],B=0;if(j>=P[P.length-1].y)oe=ue=P[P.length-1];else for(let ae=0;ae<P.length-1;ae++)if(j>=P[ae].y&&j<P[ae+1].y){oe=P[ae],ue=P[ae+1],B=(j-oe.y)/(ue.y-oe.y);break}oe.name===ue.name&&(B=0);let $=p.uniforms;if(oe.name!==w){let ae=ie("aA","aCA",oe.name);$.uFlowA.value=ae.flow,$.uCellA.value=ae.cell,w=oe.name}if(ue.name!==R){let ae=ie("aB","aCB",ue.name);$.uFlowB.value=ae.flow,$.uCellB.value=ae.cell,R=ue.name}$.uLA.value.fromArray(x(oe.name)),$.uLB.value.fromArray(x(ue.name)),$.uK.value=B,$.uT.value=Q?0:(K-q)/1e3,$.uAsp.value=g,$.uH.value=v*n,V=V+((window.scrollY-W)/Math.max(ne,.001)/2500-V)*.12,W=window.scrollY,$.uVel.value=Q?0:Math.max(-1,Math.min(1,V)),$.uMouse.value.set(I.x,I.y),e.render(i,r)};return H(),()=>{a=!0,cancelAnimationFrame(d),clearInterval(C),window.removeEventListener("resize",_),window.removeEventListener("pointermove",T),u&&u.dispose(),p&&p.dispose(),e.dispose()}}var Ue={white:15526629,grey:9079432,dark:2829099,tile:1447446,orange:15418641,teal:45737},mu=t=>(t=Math.min(1,Math.max(0,t)),t*t*(3-2*t));function hb(){let t=(l,c,u,p,d,m,y)=>({x:l,y:c,z:u,sx:p,sy:d,sz:m,c:y}),e=(l,c,u,p,d=.2)=>{let m=[],y=Math.round(2*Math.PI*l/u);for(let v=0;v<y;v++){let g=v/y*2*Math.PI;m.push(t(Math.cos(g)*l,d,Math.sin(g)*l,c,c,c,p))}return m},n=[...e(2.6,.34,.72,Ue.white),...e(4.3,.34,.72,Ue.grey)];for(let l=0;l<4;l++)n.push(t(0,.5+l*.85,0,.36,.85,.36,Ue.grey));for(let l=0;l<8;l++)n.push(t((l&1)*.72-.36,4.2+(l>>1&1)*.72,(l>>2&1)*.72-.36,.68,.68,.68,l%3?Ue.orange:Ue.white));for(let l=0;l<4;l++)for(let c=0;c<3;c++)n.push(t(-4.2+c*.95,.6+l*.95,-3.4,.9,.9,.22,l===2&&c<2?Ue.white:l===1&&c===0?Ue.orange:Ue.dark));let i=[];[-4,0,4].forEach((l,c)=>{for(let u=0;u<5;u++)for(let p=0;p<3;p++){let d=Ue.dark;u===4?d=Ue.grey:c===0&&u===2&&p<2?d=Ue.white:c===1&&u>=2&&u<=3&&p===1?d=Ue.orange:c===2&&u<=1?d=p===2&&u===1?Ue.orange:Ue.white:c===2&&u===3&&p>0&&(d=Ue.orange),i.push(t(l-.95+p*.95,.6+u*.95,-1+c*.6,.9,.9,.24,d))}});let r=[...e(3,.3,.68,Ue.grey)];for(let l=0;l<2;l++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++)r.push(t(c*.9,.5+l*.9,u*.9,.86,.86,.86,l?Ue.orange:Ue.white));r.push(t(0,2.7,0,.4,1,.4,Ue.grey),t(0,3.5,0,.9,.5,.9,Ue.orange));for(let l=0;l<6;l++){let c=l/6*2*Math.PI+.3,u=Math.cos(c)*4.7,p=Math.sin(c)*4.7;r.push(t(u,.5,p,.9,.9,.9,Ue.white),t(u,1.4,p,.9,.9,.9,Ue.white),t(u,2.05,p,.4,.4,.4,Ue.orange))}let s=[];[2,4,1,3,5,2,1,3,2].forEach((l,c)=>{let u=(c%3-1)*3.2,p=(Math.floor(c/3)-1)*3.2;for(let d=0;d<l;d++)s.push(t(u,.45+d*.82,p,1.7,.78,1.7,l===5&&d===l-1?Ue.orange:d===l-1?Ue.white:Ue.grey))});let o=[];[1,1,2,2,3,4,5,6,7].forEach((l,c)=>{let u=-4.8+c*1.2;for(let p=0;p<l;p++)o.push(t(u,.45+p*.82,.6,1,.78,1.7,c>=6?Ue.orange:p===l-1?Ue.white:Ue.grey));o.push(t(u,1.6+l*.82,.6,.3,.3,.3,Ue.orange))});let a=[...e(4.7,.34,.72,Ue.grey)];for(let l=0;l<4;l++)for(let c=0;c<5;c++)for(let u=0;u<5;u++){let p=c===0||c===4||u===0||u===4;a.push(t((c-2)*.98,1+l*1.15,(u-2)*.98,.95,.28,.95,l===3?p?Ue.orange:Ue.white:l%2?Ue.grey:Ue.dark))}return[n,i,r,s,o,a]}function T_(t,e){let n;try{n=new oo({canvas:t,antialias:!0,alpha:!0})}catch{return null}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let i=new ao,r=new so(-10,10,10,-10,.1,400);i.add(new uu(16777215,1.5));let s=new Ca(16777215,2.4);s.position.set(-6,22,12),i.add(s);let o=new Ca(45737,.8);o.position.set(14,6,-14),i.add(o);let a=hb(),l=a.length,c=j=>new F(j*25,0,j*4.5),u=[];a.forEach((j,oe)=>{let ue=c(oe);for(let B=0;B<12;B++)for(let $=0;$<12;$++){let ae=$===11&&B>=7&&B<=10;u.push({s:oe,tile:1,t:new F(ue.x+B-5.5,-.14,ue.z+$-5.5),sc:new F(.93,.26,.93),c:ae?Ue.orange:(B+$)%2?Ue.tile:1776411,d:(B+$)/44})}j.forEach(B=>u.push({s:oe,t:new F(ue.x+B.x,B.y,ue.z+B.z),sc:new F(B.sx,B.sy,B.sz),c:B.c,d:.25+Math.random()*.75,r:[Math.random(),Math.random(),Math.random()]}))});let p=new nu(new yr(1,1,1),new ba({roughness:.62,metalness:.05}),u.length),d=new Ve;u.forEach((j,oe)=>{p.setColorAt(oe,d.setHex(j.c))}),p.instanceColor.needsUpdate=!0,p.frustumCulled=!1,i.add(p);let m=new au(Array.from({length:l+2},(j,oe)=>{let ue=c(oe-1);return new F(ue.x-1.5+(oe%2?1.5:-1.5),.05,ue.z+8.2)})),y=new Aa(new ln().setFromPoints(m.getPoints(240)),new lo({color:Ue.orange,transparent:!0,opacity:.85}));i.add(y);let v=new Kt(new yr(.95,.95,.95),new ba({color:Ue.orange,emissive:Ue.orange,emissiveIntensity:.35,roughness:.4}));i.add(v);let g=new su(new ln().setFromPoints([[-1.7,-1.7],[1.7,-1.7],[1.7,1.7],[-1.7,1.7]].map(([j,oe])=>new F(j,0,oe))),new lo({color:Ue.orange}));i.add(g);let h=1,_=1,x=1,M=!1,P=()=>{h=t.clientWidth||1,_=t.clientHeight||1,n.setSize(h,_,!1),x=h/_,M=x<1;let j=M?Math.max(24,21/x):27;r.left=-j*x/2,r.right=j*x/2,r.top=j/2,r.bottom=-j/2,r.updateProjectionMatrix()};P();let b=new ResizeObserver(P);b.observe(t);let C=new F(1,0,-1).normalize(),I=new F(-1,2,-1).normalize(),T=new et,w=new li,R=new Ln,W=new F,V=new F,X=new F,Q=performance.now(),q=0,ie=!0,H=new IntersectionObserver(([j])=>{ie=j.isIntersecting});H.observe(t);let K=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ne=()=>{if(q=requestAnimationFrame(ne),!ie||document.hidden)return;let j=(performance.now()-Q)/1e3,oe=Math.min(l-1,Math.max(0,e())),ue=Math.min(l-2,Math.floor(oe)),B=oe-ue,$=mu((B-.18)/.6),ae=ye=>K?1:ye===0?Math.min(1,j/1.6):ye<=ue?1:ye===ue+1?mu((B-.3)/.6):0;u.forEach((ye,Fe)=>{let tt=ae(ye.s);if(tt<=0){T.makeScale(0,0,0),p.setMatrixAt(Fe,T);return}if(ye.tile){let Be=mu(tt*1.6-ye.d);W.copy(ye.t),W.y-=(1-Be)*2,V.copy(ye.sc).multiplyScalar(Be),w.identity()}else{let Be=mu(tt*1.75-ye.d*.75),mt=1-Math.pow(1-Be,3),N=1-mt;W.copy(ye.t),W.x-=N*(9+ye.r[0]*9),W.y+=N*(3+ye.r[1]*7)+Math.sin(j*2+ye.r[2]*9)*N*.6,W.z+=N*(ye.r[2]-.5)*12,R.set(N*ye.r[0]*6,N*ye.r[1]*6,N*ye.r[2]*6),w.setFromEuler(R),V.copy(ye.sc).multiplyScalar(Math.min(1,Be*1.4)),tt>=1&&(W.y+=Math.sin(j*1.1+ye.r[0]*12)*.035)}T.compose(W,w,V),p.setMatrixAt(Fe,T)}),p.instanceMatrix.needsUpdate=!0,X.copy(c(ue)).lerp(c(ue+1),$),X.y=1.6;let le=r.right-r.left,be=r.top-r.bottom;M?X.addScaledVector(I,-be*.02):X.addScaledVector(C,-le*.15),r.position.copy(X).add(new F(30,26,30)),r.lookAt(X),m.getPointAt((1+ue+$)/(l+1),v.position),g.position.copy(v.position),v.position.y=.75+Math.sin(j*2.2)*.12,v.rotation.y=j*.8,n.render(i,r)};return ne(),()=>{cancelAnimationFrame(q),b.disconnect(),H.disconnect(),p.geometry.dispose(),p.material.dispose(),n.dispose()}}var jt={name:"Zephyrix",tagline:"Hype fades. Systems last.",email:"info@zephyrix.io",phone:"+1 (302) 205-0032",address:"1111B S Governors Ave STE 40852, Dover, DE 19904",social:[["LinkedIn","https://www.linkedin.com/company/zephyrixdigital"],["Instagram","https://www.instagram.com/zephyrix.digital"],["Facebook","https://www.facebook.com/zephyrixxdigital/"]]},Kr=["META ADS","GOOGLE ADS","SEO","GEO","AEO","PAY PER CALL","GBP OPTIMIZATION","AI VOICE AGENTS","AI CHAT AGENTS","VIDEO ADS","STATIC ADS","LANDING PAGES","FUNNEL DESIGN","UI/UX","PAID MEDIA","BRAND REPUTATION","CRM AUTOMATION","BRAND IDENTITY","DIGITAL PRESENCE","WEBSITES","NEXT AND NODE JS","ASO","LSA"],po=[{k:"DECODE",img:"img/decode.jpg",t:"It starts with a FREE audit. We trace your funnel end-to-end, expose where leads and revenue are leaking, and show you exactly what's capping your growth."},{k:"DESIGN",img:"img/design.jpg",t:"Custom-built, not copy-pasted. We design your AI agents, CRM pipelines, ad funnels, and automations from the ground up, engineered around your business, not a template."},{k:"DEPLOY",img:"img/deploy.jpg",t:"100% done-for-you, start to finish. No missed leads, no slow follow-ups. Your system runs 24/7, booking calls and closing gaps automatically. Paid ads on Meta and Google bring leads in fast, while SEO compounds traffic over time."},{k:"DISTILL",img:"img/distill.jpg",t:"We make sure your system runs sharper every month. We A/B test everything, deliver transparent reporting, and keep your growth compounding, not just spiking on day one."}],jr={h:"Work That Moves The Needle",p:"Paid ads and automations built to produce measurable growth, not vanity metrics. Here are a few examples of the outcomes we deliver across Meta and Google.",cards:[{tag:"Meta Ads",h:"How we cut cost per lead for a local service brand",p:"Full funnel Meta Ads build with new offer angles and refreshed creative..."},{tag:"Google Ads",h:"How we scaled Google Ads without wasting budget",p:"Search and precision Max restructuring with tighter intent targeting..."},{tag:"Automation",h:"How we revived cold leads with automated nurture",p:"Re engagement campaigns paired with multi touch email and SMS sequences..."},{tag:"Meta Ads + Automation",h:"How we grew Meta Ads lead gen with faster follow up",p:"Meta lead gen campaigns paired with instant routing, reminders, and missed call text back automation..."}]},A_=["Meta Ads","Google Ads","GA4","Looker Studio","CRM Integrations","Automation Platforms"],gu=[{k:"Performance Marketing",route:"performance-marketing",p:"Full-stack growth across Paid Media, SEO, AEO & GEO, App Store Optimization, and Brand Reputation Management, all working together to bring you qualified leads and solid revenue.",li:["Funnel design","Lead-Focused Paid Media","SEO, AEO & GEO Reach","App Ranking and Growth","Brand Reputation That Converts"]},{k:"AI Automation",route:"ai-automations",p:"We automate workflows, build AI voice agents, and chat agents that respond to leads instantly, route them to the right person, and follow up until they convert. No manual effort required.",li:["Automated follow-up","Instant lead response sequence","CRM updates and pipeline automation","Auto-appointment booking"]},{k:"Add-Ons",route:"add-ons",p:"Services that strengthen your systems and elevate your performance marketing and automation.",li:["UI/UX","Brand Strategy","Ad creatives, video and static","Social Media management","Landing pages","High-conversion websites"]}],b_=[["What platforms do you manage?","We specialize in Meta Ads (Facebook and Instagram) and Google Ads (Search, YouTube, and Performance Max). We also build automations across CRMs, email, SMS, and scheduling platforms."],["What industries do you work with?","We work with service businesses, healthcare practices, law firms, auto services, home services, lawn care companies, event venues, and more."],["How do automations help my ad campaigns?","Automations ensure every lead from your ads gets an instant response, proper routing, and consistent follow-up. This dramatically improves lead-to-customer conversion rates."],["Do you require long-term contracts?","No. We work month-to-month. Our results and communication keep clients, not contracts."],["What does the free audit include?","We review your ad accounts, landing pages, follow-up process, and automation gaps. You receive actionable recommendations regardless of whether we work together."]],ci=(t,e,n,i)=>({name:t,sub:e,outcomes:n,deliverables:i}),fo=(t,e,n)=>({name:t,sub:e,list:n}),jp={"performance-marketing":{h:"Performance Marketing That Drives Revenue",p:"Full-stack growth across Paid Media, SEO, AEO & GEO, App Store Optimization, and Brand Reputation Management. Every channel managed to one goal, qualified leads and measurable revenue.",sections:[ci("Paid Media","Meta Ads & Google Ads: Full Campaign Management",["Consistent pipeline of qualified leads from paid channels","Lower cost per lead through continuous optimization","Structured campaigns with clear audience segmentation","Scalable spend with predictable performance benchmarks","Full-funnel visibility across Meta and Google"],["Full campaign management across Meta and Google","Audience research and segmentation","Creative strategy and A/B testing","Budget allocation and bid optimization","Weekly performance analysis and reporting"]),ci("SEO","Technical SEO, Content Strategy & Local SEO",["Higher organic rankings for target keywords","Increased organic traffic and conversions","Improved site health and crawlability","Stronger local search presence","Compounding visibility over time"],["Technical SEO audit and implementation","On-page optimization and schema markup","Content strategy and keyword mapping","Internal linking architecture","Monthly ranking and traffic reports"]),ci("AEO & GEO","Answer Engine Optimization & Generative Engine Optimization",["AI-generated answers and voice search visibility","Improved entity recognition across knowledge graphs","Structured data that feeds AI models","Cited presence in ChatGPT and Google AI Overviews"],["Entity audit and knowledge graph optimization","Structured data and schema implementation","Content hub creation for topical authority","AI search monitoring and visibility tracking"]),ci("App Store Optimization (ASO)","Turn App Store Searches Into Installs",["Higher rankings for target keywords in app stores","Increased organic installs without ad spend","Better visibility in category and search results","Improved conversion rate on app listing pages"],["Keyword research and optimization for title and description","App listing optimization (icons, screenshots, preview reel)","A/B testing of creatives and copy to improve conversion","Competitor analysis and ranking tracking"]),ci("Brand Reputation Management","Turn Local Searches Into Qualified Leads",["Higher rankings in Google Maps","Increased calls, direction requests, and website visits","Consistent lead flow from near me searches","Improved visibility against local competitors","Stronger review profile driving higher conversion"],["Google Business Profile optimization","Review generation system with automated follow-ups","Weekly posting and activity optimization on GMB","Local keyword targeting and on-page SEO fixes","Competitor tracking and local ranking reports"]),fo("A/B Testing","Structured tests. Scalable winners.",["Hook and messaging angle testing","Format testing across static, video and carousel","Audience-specific creative variations","Iterative design based on performance data","Creative briefs and production coordination"]),fo("Optimization and Reporting","Weekly KPIs, bi-weekly strategy calls, monthly deep-dives.",["Bid and budget optimization based on real-time data","Audience refinement and exclusion management","Landing page recommendations for conversion improvement","Monthly strategic roadmaps"])]},"ai-automations":{h:"AI Automation That Keep Leads From Falling",p:"We automate workflows, build AI voice agents, and chat agents that respond to leads instantly, route them to the right person, and follow up until they convert. No manual effort required.",sections:[fo("CRM and Follow Up Automations","Everything your business needs to capture, manage, and nurture leads through one unified system.",["CRM setup and full account configuration, done for you","Lead capture system with forms, funnels, and landing pages","Appointment booking and calendar automation","Multi touch follow up via email and SMS, including missed call text back","Pipeline dashboard with visual lead tracking at every stage","Seasonal, promotional, and re engagement campaign automation"]),fo("AI Chat Agent Integrations","An AI powered front door for your website visitors.",["AI chat widget for your website to capture and qualify leads","Instant answers for FAQs and service questions","Lead qualification and routing into your CRM pipeline","Appointment booking assistance and follow up handoff","Human handoff when needed"]),fo("AI Voice Agent Integrations","An AI powered voice agent for your inbound calls.",["Answers calls instantly and handles peak hour overflow","Qualifies callers with key questions and captures lead details","Routes urgent calls to a human, otherwise books or creates a follow up","Sends SMS follow ups after missed calls to recover leads","Logs call summaries and outcomes into your CRM pipeline","Escalates to a human when confidence is low or requests are complex"]),fo("Reporting and Strategy","Clear visibility into pipeline health and campaign outcomes.",["Monthly performance reports","Bi-weekly or weekly strategy calls based on tier","Pipeline health reviews"])]},"add-ons":{h:"Every Add-On Pays For Itself",p:"Services that strengthen your systems and elevate your performance marketing and automation.",sections:[ci("Creative Services","Ad Creatives, Video Editing & UGC",["Higher CTR and engagement across ad platforms","Structured creative testing with clear winners","Consistent creative pipeline","Improved user journeys that reduce landing page exits"],["Brand Identity and Logo Design","Static ad design in multiple formats","Video editing and motion graphics for ads","UGC style content editing and formatting","Creative strategy and hook frameworks","Iterative variations for A/B testing","UI/UX design for landing pages, funnels, and product interfaces"]),ci("Landing Pages","High Converting, CRO Focused Pages",["Higher conversion rates from paid traffic","Lower cost per acquisition","Data driven iterations based on user behavior"],["Web page and landing page design and development","Conversion focused copywriting","A/B testing setup and management","Page speed optimization","Heatmap and session recording analysis"]),ci("High Conversion Website","Fast, Mobile First, Built to Convert",["More calls, form fills, and bookings from every traffic source","A fast, mobile-first experience that keeps people engaged","Clear service positioning and trust elements that reduce hesitation"],["High-conversion web pages built for lead generation","Conversion-focused layouts, messaging, and calls to action","Mobile-first responsive design across devices","Speed optimization and performance tuning (Core Web Vitals)","Ongoing updates and maintenance as an option"]),ci("Social Media Management","Consistent content that drives engagement and leads",["Consistent brand presence across social platforms","Higher engagement through structured content","Steady follower growth from targeted posting"],["Monthly content calendar and posting plan","Post creation including graphics and captions","Scheduling, publishing, and platform management","Basic engagement handling and inbox responses","Performance tracking with monthly reports"]),ci("Shopify Development","Custom Shopify stores built for growth",["Faster and smoother shopping experience","Higher conversion rates and sales","Mobile-friendly storefront performance","Improved customer shopping journey","Scalable store ready for growth"],["Custom Shopify store development","Theme setup and customization","Product, collection, and app integration","Payment and shipping configuration","Store testing and launch support"])]}},La={h:"About Us",story:["We started Zephyrix Digital because we were tired of marketing that looked busy but delivered nothing. Too many agencies chase vanity metrics, run disconnected campaigns, and call it a strategy. We do the opposite.","We build systems. End-to-end, data-driven, growth systems that drive solid revenue and scale businesses. We stand for accountability over activity. Results over reports. And long-term growth over short-term noise.","We get it, we're not the biggest agency in the room, but we're the most intentional one. Every decision we make is tied to one question, does this move the needle for our client?"],close:"That's why we say Hype fades. Systems last.",team:[["Pira Rafique","CEO"],["Carlos Castrejon","COO"],["Jorge L\xE1zaro","CFO"],["Juan Rodr\xEDguez","CTO"]],values:[["Systems","Foundation","We believe real growth is built on structure, not hype. Every decision, every process, every move is designed with intention and built to last."],["Clarity","Communication","Clear thinking drives everything we do. We bring clarity to strategy, communication, and execution, so nothing gets lost in the noise."],["Accountability","Ownership","We hold ourselves to full accountability and responsibility for what we put our name on. No shortcuts, no excuses."],["Results","Growth","We don't measure success in vanity metrics. Revenue, sustainable growth, and quality outcomes that compound over time. That's what we stand by."]]},ui={h:"Campaigns That Deliver Results",p:"Strategies built to convert, optimized for ROI, and backed by data you can actually use.",cards:[{tags:["Paid Social","Local Services"],h:"Home-based Services",p:"Plumbing, Lawn Care, flooring, insulation & HVAC campaigns delivering consistent leads for home service businesses.",chips:["Plumbing","Lawn Care","Flooring","Insulation & HVAC"],stats:[["Total Leads","913"],["Best CPL","$5.42"]]},{tags:["Paid Social","Healthcare Services"],h:"Medical Wellness Clinic",p:"High cost per lead with inconsistent booking rates",stats:[["Leads","129"],["CPL","$22.80"]]},{tags:["Paid Social","Legal"],h:"Law Firm",p:"Extremely competitive advertising costs in legal vertical",stats:[["Leads","103"],["CPL","$23.95"]]},{tags:["Paid Social","Events"],h:"Event Venue",p:"Limited digital exposure in a competitive wedding market",stats:[["Leads","1,005"],["CPL","$9.30"]]},{tags:["Paid Social","Lead Generation"],h:"Automobile Company",p:"Generated steady, cost-efficient vehicle leads in Austin through a tightly managed Meta lead generation campaign.",stats:[["Leads","278"],["CPL","$5.74"]]},{tags:["Google Ads","Search Campaign"],h:"WooCommerce Marketplace",p:"Drove high-intent search traffic for a WooCommerce marketplace with efficient clicks and a strong CTR.",stats:[["Clicks","122"],["Avg. CPC","$0.64"]]},{tags:["Google Ads","Subscription Growth"],h:"AI SaaS Tool",p:"Scaled paid acquisition for a subscription-based AI creative tool, generating strong conversion volume from search traffic.",stats:[["Conversions","272"],["Clicks","4,016"]]},{tags:["Paid Social","E-commerce"],h:"E-commerce",p:"Drove consistent website purchase volume across multiple product campaigns for a growing e-commerce store.",stats:[["Purchases","3,229"],["Campaigns","15"]]},{tags:["Paid Social","Real Estate"],h:"Real Estate",p:"Generated property leads and messaging enquiries across multiple real estate campaigns with strong reach and efficient cost per result.",stats:[["Leads","95"],["Cost per Lead","Rs331.49"]]}]},vu={h:"Latest Insights",p:"Strategies, trends, and frameworks shaping the future of search and digital marketing.",posts:[{cat:"META ADS",read:"12 min read",date:"June 1, 2026",h:"How Meta Ads Can Transform Your Lead Pipeline in 2026?",p:"Most businesses running Meta Ads are generating leads. Far fewer are generating the right leads at a cost that holds up commercially. The gap between the two is almost always structural, not a budget problem..."},{cat:"PAID ADVERTISING",read:"10 min read",date:"June 2, 2026",h:"Google Ads vs Meta Ads: Which Platform Delivers Better ROI for Your Business?",p:"The most common version of this question is binary: Google Ads or Meta Ads? The more useful version is: at which stage of my customer's decision process does each platform generate the best return?"}]},Na={h:"Let's Talk Growth",p:"Get a free audit of your business or book a strategy call. Typically responds within 1 business day.",consent:"By checking this box, you consent to receive SMS messages from Zephyrix about your inquiry, updates, and offers. Msg & data rates may apply, frequency varies, consent not required to purchase. See our Privacy Policy and Terms of Service.",next:[["We Review","A strategist reviews your submission within 24 hours."],["Discovery Call","We schedule a call to discuss your goals and current setup."],["Custom Proposal","You receive a tailored strategy and proposal within 3 to 5 business days."]]};var Qp=({size:t=40})=>f.default.createElement("svg",{viewBox:"0 0 600 600",width:t,height:t,role:"img","aria-label":"Zephyrix"},f.default.createElement("path",{fill:"#fff",d:"M30 37H300V220A290.7 290.7 0 0 1 30 37Z"}),f.default.createElement("path",{fill:"#fff",d:"M42 580A383 383 0 0 1 425 197V337A243 243 0 0 0 182 580Z"}),f.default.createElement("path",{fill:"#fff",d:"M267 402V580H530A283 283 0 0 0 267 402Z"}),f.default.createElement("circle",{fill:"#EB4511",cx:"462",cy:"113",r:"92"})),db=t=>{window.location.hash=t?"#"+t:"#home"},Rt=({to:t,className:e,children:n})=>f.default.createElement("a",{href:"#"+(t||"home"),className:e},n),Fa=()=>f.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},f.default.createElement("path",{d:"M5 12h14M13 6l6 6-6 6"})),Qr=({to:t,children:e,solid:n})=>f.default.createElement(Rt,{to:t,className:"btn"+(n?" btn-solid":"")},f.default.createElement("span",{className:"btn-ico"},f.default.createElement(Fa,null)),f.default.createElement("span",null,e));function fb(t=9){let e=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let n=e.current;if(!n||window.matchMedia("(hover: none)").matches)return;let i=s=>{let o=n.getBoundingClientRect(),a=(s.clientX-o.left)/o.width,l=(s.clientY-o.top)/o.height;n.style.setProperty("--ry",((a-.5)*2*t).toFixed(2)+"deg"),n.style.setProperty("--rx",((.5-l)*2*t).toFixed(2)+"deg"),n.style.setProperty("--mx",(a*100).toFixed(1)+"%"),n.style.setProperty("--my",(l*100).toFixed(1)+"%")},r=()=>{n.style.setProperty("--ry","0deg"),n.style.setProperty("--rx","0deg")};return n.addEventListener("pointermove",i),n.addEventListener("pointerleave",r),()=>{n.removeEventListener("pointermove",i),n.removeEventListener("pointerleave",r)}},[t]),e}function Un({children:t,delay:e=0,className:n=""}){let i=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let r=i.current,s=new IntersectionObserver(([o])=>{o.isIntersecting&&(r.classList.add("in"),s.disconnect())},{threshold:.12});return s.observe(r),()=>s.disconnect()},[]),f.default.createElement("div",{ref:i,className:"reveal "+n,style:{transitionDelay:e+"ms"}},t)}var Ua=({className:t="",max:e,children:n})=>{let i=fb(e);return f.default.createElement("div",{ref:i,className:"tilt "+t},f.default.createElement("div",{className:"tilt-in"},n))},vo=({n:t,children:e})=>f.default.createElement("div",{className:"slug"},f.default.createElement("b",null,t),f.default.createElement("i",null),e),em=({text:t,words:e=1})=>{let n=t.split(" ");return f.default.createElement(f.default.Fragment,null,n.slice(0,-e).join(" ")," ",f.default.createElement("em",{className:"serif"},n.slice(-e).join(" ")))},L_=()=>f.default.createElement("span",{className:"marks","aria-hidden":"true"},f.default.createElement("i",null),f.default.createElement("i",null),f.default.createElement("i",null),f.default.createElement("i",null));function N_({value:t}){let e=(0,f.useRef)(null),[n,i]=(0,f.useState)(t);return(0,f.useEffect)(()=>{let r=t.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);if(!r||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=parseFloat(r[2].replace(/,/g,"")),o=(r[2].split(".")[1]||"").length,a=u=>r[1]+u.toLocaleString("en-US",{minimumFractionDigits:o,maximumFractionDigits:o})+r[3];i(a(0));let l,c=new IntersectionObserver(([u])=>{if(!u.isIntersecting)return;c.disconnect();let p=performance.now(),d=m=>{let y=Math.min(1,(m-p)/1700);i(a(s*(1-Math.pow(1-y,4)))),y<1?l=requestAnimationFrame(d):i(t)};l=requestAnimationFrame(d)},{threshold:.4});return c.observe(e.current),()=>{c.disconnect(),cancelAnimationFrame(l)}},[t]),f.default.createElement("b",{ref:e,className:"count"},n)}function pb({route:t}){let[e,n]=(0,f.useState)(!1),[i,r]=(0,f.useState)(!1);(0,f.useEffect)(()=>{let a=()=>r(window.scrollY>24);return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,f.useEffect)(()=>n(!1),[t]);let s=gu.some(a=>a.route===t),o=(a,l)=>f.default.createElement(Rt,{to:a,className:"nav-a"+(t===a?" on":"")},l);return f.default.createElement("header",{className:"nav"+(i?" scrolled":"")+(e?" open":"")},f.default.createElement(Rt,{to:"",className:"nav-logo"},f.default.createElement(Qp,{size:42})),f.default.createElement("nav",{className:"nav-links"},o("","Home"),f.default.createElement("div",{className:"nav-drop"},f.default.createElement("button",{className:"nav-a"+(s?" on":""),"aria-haspopup":"true"},"Services ",f.default.createElement("svg",{width:"10",height:"6",viewBox:"0 0 10 6","aria-hidden":"true"},f.default.createElement("path",{d:"M1 1l4 4 4-4",fill:"none",stroke:"currentColor",strokeWidth:"1.6"}))),f.default.createElement("div",{className:"nav-menu"},f.default.createElement(Rt,{to:"performance-marketing"},"Performance marketing"),f.default.createElement(Rt,{to:"ai-automations"},"AI automations"),f.default.createElement(Rt,{to:"add-ons"},"Add-ons"))),o("about","About"),o("portfolio","Portfolio"),o("insights","Insights"),f.default.createElement(Rt,{to:"contact",className:"nav-cta"},"Contact Us")),f.default.createElement("button",{className:"burger","aria-label":"Menu","aria-expanded":e,onClick:()=>n(!e)},f.default.createElement("span",null),f.default.createElement("span",null)))}function mb(){return f.default.createElement("footer",{className:"footer"},f.default.createElement("div",{className:"footer-word","aria-hidden":"true"},"ZEPHYRIX"),f.default.createElement("div",{className:"wrap footer-grid"},f.default.createElement("div",null,f.default.createElement(Qp,{size:64}),f.default.createElement("p",{className:"footer-tag"},"Hype fades. ",f.default.createElement("em",{className:"serif"},"Systems last."))),f.default.createElement("div",null,f.default.createElement("h4",null,"Contact"),f.default.createElement("a",{href:"mailto:"+jt.email},jt.email),f.default.createElement("a",{href:"tel:"+jt.phone.replace(/[^+\d]/g,"")},jt.phone),f.default.createElement("p",null,jt.address),f.default.createElement("div",{className:"social"},jt.social.map(([t,e])=>f.default.createElement("a",{key:t,href:e,target:"_blank",rel:"noreferrer"},t)))),f.default.createElement("div",null,f.default.createElement("h4",null,"Company"),f.default.createElement("button",{className:"linkish",onClick:()=>{db(""),setTimeout(()=>{var t;return(t=document.getElementById("services"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},80)}},"Services"),f.default.createElement(Rt,{to:"portfolio"},"Portfolio"),f.default.createElement(Rt,{to:"insights"},"Insights"),f.default.createElement(Rt,{to:"about"},"About"),f.default.createElement(Rt,{to:"contact"},"Contact")),f.default.createElement("div",null,f.default.createElement("h4",null,"Services"),f.default.createElement(Rt,{to:"performance-marketing"},"Performance Marketing"),f.default.createElement(Rt,{to:"ai-automations"},"AI Automations"),f.default.createElement(Rt,{to:"add-ons"},"Add-ons"))),f.default.createElement("div",{className:"wrap footer-base"},f.default.createElement("span",null,"Privacy Policy \xA0|\xA0 Terms of Use"),f.default.createElement("span",null,"\xA9 2026 Zephyrix. All rights reserved.")))}function Oa(){return f.default.createElement("section",{className:"cta","data-stage":"logo"},f.default.createElement("div",{className:"wrap cta-in"},f.default.createElement("div",{className:"cta-space","aria-hidden":"true"}),f.default.createElement(Un,{className:"cta-copy"},f.default.createElement(vo,{n:"\u2192"},"Free audit"),f.default.createElement("h2",{className:"display"},"Ready To ",f.default.createElement("em",{className:"serif"},"Scale?")),f.default.createElement("p",null,"Get a free audit of your business."),f.default.createElement(Qr,{to:"contact",solid:!0},"Book a free consultation"))))}var gb=16;function vb({ch:t,delay:e}){let[n,i]=(0,f.useState)(t),[r,s]=(0,f.useState)(t),[o,a]=(0,f.useState)(0);return(0,f.useEffect)(()=>{if(t===n)return;let l=setTimeout(()=>{s(n),i(t),a(c=>c+1)},e);return()=>clearTimeout(l)},[t]),f.default.createElement("span",{className:"flap"},f.default.createElement("span",{className:"f f-top"},n),f.default.createElement("span",{className:"f f-bot"},r),o>0&&f.default.createElement("span",{key:"a"+o,className:"f f-top fold-a"},r),o>0&&f.default.createElement("span",{key:"b"+o,className:"f f-bot fold-b",onAnimationEnd:()=>s(n)},n))}function yb(){let[t,e]=(0,f.useState)(0);(0,f.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i=setInterval(()=>e(r=>(r+1)%Kr.length),2600);return()=>clearInterval(i)},[]);let n=Kr[t].padEnd(gb," ");return f.default.createElement("div",{className:"board","aria-label":"We do "+Kr.join(", ")},f.default.createElement("span",{className:"board-k"},"WE DO"),f.default.createElement("span",{className:"board-cells","aria-hidden":"true"},n.split("").map((i,r)=>f.default.createElement(vb,{key:r,ch:i,delay:r*45}))))}function _b(){return f.default.createElement("section",{className:"hero","data-stage":"sculpture"},f.default.createElement("div",{className:"wrap hero-in"},f.default.createElement("div",{className:"masthead"},f.default.createElement("span",null,"Performance Marketing & AI Automation Agency"),f.default.createElement("span",{className:"mast-mid"},jt.tagline),f.default.createElement("span",null,"Dover, DE")),f.default.createElement("h1",{className:"hero-h"},f.default.createElement("span",{className:"hero-l1"},"HELLO, WE ARE"),f.default.createElement("span",{className:"hero-l2","aria-label":"ZEPHYRIX"},"ZEPHYRIX".split("").map((t,e)=>f.default.createElement("b",{key:e,style:{animationDelay:1500+e*70+"ms"},"aria-hidden":"true"},t)))),f.default.createElement("div",{className:"hero-row"},f.default.createElement(Qr,{to:"contact"},"Get in Touch"),f.default.createElement(yb,null))),f.default.createElement("div",{className:"hero-hint","aria-hidden":"true"},f.default.createElement("i",null),"Scroll \u2014 the west wind carries it"))}function xb(){let t=Math.ceil(Kr.length/2),e=[Kr.slice(0,t),Kr.slice(t)];return f.default.createElement("section",{className:"marquee","aria-hidden":"true"},f.default.createElement("div",{className:"marquee-plane"},e.map((n,i)=>f.default.createElement("div",{key:i,className:"marquee-row"+(i?" rev":"")},f.default.createElement("div",{className:"marquee-track"},[...n,...n,...n].map((r,s)=>f.default.createElement("span",{key:s,className:s%3===1?"fill":""},r,f.default.createElement("i",null))))))))}function Mb(){let t=(0,f.useRef)(null),[e,n]=(0,f.useState)(0);(0,f.useEffect)(()=>{let o=0,a=()=>{o=0;let c=t.current.getBoundingClientRect(),u=c.height-window.innerHeight,p=Math.min(1,Math.max(0,-c.top/u));n(p)},l=()=>{o||(o=requestAnimationFrame(a))};return a(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l),cancelAnimationFrame(o)}},[]);let i=Math.min(3.999,e*4),r=Math.floor(i),s=i-r;return f.default.createElement("section",{className:"appr",ref:t,"data-stage":"decode,design,deploy,distill"},f.default.createElement("div",{className:"appr-pin"},f.default.createElement("div",{className:"wrap appr-grid"},f.default.createElement("div",{className:"appr-copy"},f.default.createElement(vo,{n:"01"},"Our Approach"),f.default.createElement("div",{className:"appr-steps"},po.map((o,a)=>f.default.createElement("div",{key:o.k,className:"appr-step"+(a===r?" on":""),"aria-hidden":a!==r},f.default.createElement("span",{className:"appr-n"},"0"+(a+1),f.default.createElement("small",null,"/04")),f.default.createElement("h2",null,o.k),f.default.createElement("p",null,o.t)))),f.default.createElement("div",{className:"appr-rail","aria-hidden":"true"},po.map((o,a)=>f.default.createElement("span",{key:o.k,className:a<=r?"on":""},f.default.createElement("i",{style:{transform:`scaleX(${a<r?1:a===r?s:0})`}}),o.k)))),f.default.createElement("div",{className:"appr-space","aria-hidden":"true"}))))}var Sb=[ui.cards[0],ui.cards[3],ui.cards[7],ui.cards[6]],wb=["cream","orange","teal","ink"];function Eb(){let t=(0,f.useRef)(null),[e,n]=(0,f.useState)(0);(0,f.useEffect)(()=>{let d=0,m=()=>{d=0;let v=t.current.getBoundingClientRect();n(Math.min(1,Math.max(0,-v.top/(v.height-window.innerHeight))))},y=()=>{d||(d=requestAnimationFrame(m))};return m(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),()=>{window.removeEventListener("scroll",y),window.removeEventListener("resize",y),cancelAnimationFrame(d)}},[]);let i=d=>(d=Math.min(1,Math.max(0,d)),d*d*(3-2*d)),r=jr.cards.length,s=e*(r-1),o=Math.min(r-2,Math.floor(s)),a=o+i((s-o-.3)/.45),l=Math.round(a),c=66,u=-c+a/(r-1)*2*c,p=(d,m)=>[200+m*Math.sin(d*Math.PI/180),205-m*Math.cos(d*Math.PI/180)];return f.default.createElement(f.default.Fragment,null,f.default.createElement("section",{className:"wk",ref:t,"data-stage":"quiet"},f.default.createElement("div",{className:"wk-pin"},f.default.createElement("div",{className:"wrap wk-grid"},f.default.createElement("div",{className:"wk-copy"},f.default.createElement(vo,{n:"02"},"Work"),f.default.createElement("h2",{className:"display"},f.default.createElement(em,{text:jr.h,words:2})),f.default.createElement("p",{className:"lede"},jr.p),f.default.createElement("div",{className:"wk-gauge","aria-hidden":"true"},f.default.createElement("svg",{viewBox:"0 0 400 232"},Array.from({length:41},(d,m)=>{let y=-78+m*3.9,v=m%5===0,[g,h]=p(y,v?150:158),[_,x]=p(y,170);return f.default.createElement("line",{key:m,x1:g,y1:h,x2:_,y2:x,className:y<=u+1?"lit":"",strokeWidth:v?2.4:1.2})}),jr.cards.map((d,m)=>{let y=-c+m/(r-1)*2*c,[v,g]=p(y,192);return f.default.createElement("text",{key:m,x:v,y:g+4,textAnchor:"middle",className:m===l?"on":""},"0"+(m+1))}),f.default.createElement("g",{style:{transform:`rotate(${u}deg)`,transformOrigin:"200px 205px"}},f.default.createElement("path",{className:"needle",d:"M200 214L195.5 70L200 44L204.5 70Z"})),f.default.createElement("circle",{cx:"200",cy:"205",r:"11",className:"hub"}),f.default.createElement("circle",{cx:"200",cy:"205",r:"3.5",fill:"#000"})),f.default.createElement("div",{className:"wk-read"},f.default.createElement("b",null,"0"+(l+1),f.default.createElement("small",null,"/0",r)),f.default.createElement("span",{key:l},jr.cards[l].tag))),f.default.createElement(Qr,{to:"portfolio"},"See our work")),f.default.createElement("div",{className:"wk-deck"},jr.cards.map((d,m)=>{let y=m-a,v=y<0?Math.min(1,-y*1.5):0,g=Math.max(0,y),h=v?`translate(${v*135}%, ${-v*26}%) rotate(${v*26}deg) scale(${1-v*.1})`:`translate(${g*20}px, ${g*16}px) rotate(${g*2.2}deg) scale(${1-g*.045})`;return f.default.createElement(Rt,{key:m,to:"portfolio",className:"wk-card "+wb[m%4]+(m===l?" on":"")},f.default.createElement("article",{style:{transform:h,opacity:1-v,zIndex:r-m,filter:g?`brightness(${1-Math.min(.5,g*.22)})`:"none",pointerEvents:m===l?"auto":"none"}},f.default.createElement(L_,null),f.default.createElement("div",{className:"wk-top"},f.default.createElement("span",null,d.tag),f.default.createElement("b",null,"0"+(m+1))),f.default.createElement("span",{className:"wk-num","aria-hidden":"true"},"0"+(m+1)),f.default.createElement("h3",null,d.h),f.default.createElement("p",null,d.p),f.default.createElement("span",{className:"wk-go"},"Read case ",f.default.createElement(Fa,null))))}))))),f.default.createElement("section",{className:"sec tight","data-stage":"streams"},f.default.createElement("div",{className:"wrap"},f.default.createElement("div",{className:"ledger"},Sb.map((d,m)=>f.default.createElement(Un,{key:d.h,delay:m*110},f.default.createElement(Rt,{to:"portfolio",className:"ledger-row"},f.default.createElement("span",{className:"ledger-name"},d.h),f.default.createElement("span",{className:"ledger-tags"},d.tags.join(" \xB7 ")),d.stats.map(([y,v])=>f.default.createElement("span",{key:y,className:"ledger-stat"},f.default.createElement(N_,{value:v}),f.default.createElement("small",null,y))))))))))}var Da=[["Wireframe","The board is drawn in lines"],["Funnel map","Ad to booking, mapped end to end"],["Pipeline","Navigation docks, the frame fills in"],["Signal","Results punch through the grid"],["Lead flow","Leads by week take shape"],["Ledger","Every lead lands in a row"],["Follow-up","Missed call, text back, booked"],["Launch","On the machine, running 24/7"]],mo=ui.cards[0];function Tb({value:t,on:e}){let[n,i]=(0,f.useState)(t);return(0,f.useEffect)(()=>{let r=t.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);if(!e||!r||window.matchMedia("(prefers-reduced-motion: reduce)").matches){i(t);return}let s=parseFloat(r[2].replace(/,/g,"")),o=(r[2].split(".")[1]||"").length,a=p=>r[1]+p.toLocaleString("en-US",{minimumFractionDigits:o,maximumFractionDigits:o})+r[3],l,c=performance.now(),u=p=>{let d=Math.min(1,(p-c)/1100);i(d<1?a(s*(1-Math.pow(1-d,3))):t),d<1&&(l=requestAnimationFrame(u))};return l=requestAnimationFrame(u),()=>cancelAnimationFrame(l)},[e,t]),f.default.createElement("b",null,e?n:"0")}function Ab(){let t=(0,f.useRef)(null),[e,n]=(0,f.useState)(0);(0,f.useEffect)(()=>{let v=0,g=()=>{v=0;let _=t.current.getBoundingClientRect();n(Math.min(1,Math.max(0,-_.top/(_.height-window.innerHeight))))},h=()=>{v||(v=requestAnimationFrame(g))};return g(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h),cancelAnimationFrame(v)}},[]);let i=Da.length,r=e*(i+2),s=Math.max(0,Math.min(i,Math.floor(r))),o=v=>(v=Math.min(1,Math.max(0,v)),v*v*(3-2*v)),a=o((r-(i-1.4))/1.5),l=o((r-(i+1.05))/.6),c=1-o((r-.55)/.4),u=v=>s>=v,p="board"+Array.from({length:s},(v,g)=>" c"+(g+1)).join(""),d=[mo.stats[0],mo.stats[1],["Service lines",String(mo.chips.length)]],m=mo.chips.map((v,g)=>[v,"Meta Ads",["Booked","Contacted","New","Booked"][g]]),y=[.34,.5,.42,.66,.58,.8,1];return f.default.createElement("section",{className:"build",ref:t,"data-stage":"quiet"},f.default.createElement("div",{className:"build-pin"},f.default.createElement("div",{className:"wrap build-intro",style:{opacity:c,visibility:c<.02?"hidden":"visible"}},f.default.createElement(vo,{n:"03"},"The build"),f.default.createElement("h2",{className:"display xl"},"Custom-built, not ",f.default.createElement("em",{className:"serif"},"copy-pasted.")),f.default.createElement("p",{className:"lede"},"We design your AI agents, CRM pipelines, ad funnels, and automations from the ground up, engineered around your business, not a template."),f.default.createElement("span",{className:"build-cue"},"Keep scrolling \u2193")),f.default.createElement("div",{className:"build-stage",style:{"--flat":a,"--out":l,opacity:o((r-.35)/.5)}},f.default.createElement("div",{className:"monitor","aria-hidden":"true"},f.default.createElement("i",null),f.default.createElement("b",null)),f.default.createElement("div",{className:p,"aria-hidden":"true"},f.default.createElement("div",{className:"blk b-top"+(u(8)?" on":"")},f.default.createElement("span",{className:"dots"},f.default.createElement("i",null),f.default.createElement("i",null),f.default.createElement("i",null)),f.default.createElement("span",null,"zephyrix.io / system"),f.default.createElement("em",null,"\u25CF Live")),f.default.createElement("aside",{className:"blk b-side"+(u(3)?" on":"")},f.default.createElement("strong",null,f.default.createElement("i",null),"Zephyrix"),["Overview","Campaigns","Leads","Automations","Reports"].map((v,g)=>f.default.createElement("span",{key:v,className:g===1?"act":""},f.default.createElement("i",null),v))),f.default.createElement("div",{className:"b-main"},f.default.createElement("div",{className:"blk b-head"+(u(3)?" on":"")},f.default.createElement("h4",null,mo.h),f.default.createElement("span",null,mo.tags.join(" \xB7 "))),f.default.createElement("div",{className:"b-kpis"},d.map(([v,g],h)=>f.default.createElement("div",{key:v,className:"blk b-kpi"+(u(4)?" on":""),style:{transitionDelay:h*90+"ms"}},f.default.createElement("small",null,v),f.default.createElement(Tb,{value:g,on:u(4)})))),f.default.createElement("div",{className:"blk b-map"+(u(2)?" on":"")},f.default.createElement("small",null,"Funnel map"),f.default.createElement("div",{className:"nodes"},["Meta Ads","Landing page","Lead form","CRM","Booking"].map(v=>f.default.createElement("span",{key:v},v)))),f.default.createElement("div",{className:"blk b-chart"+(u(5)?" on":"")},f.default.createElement("small",null,"Leads by week"),f.default.createElement("div",{className:"bars"},y.map((v,g)=>f.default.createElement("i",{key:g,style:{"--h":v,transitionDelay:g*60+"ms"}})))),f.default.createElement("div",{className:"blk b-table"+(u(6)?" on":"")},f.default.createElement("div",{className:"tr th"},f.default.createElement("span",null,"Service line"),f.default.createElement("span",null,"Source"),f.default.createElement("span",null,"Status")),m.map((v,g)=>f.default.createElement("div",{className:"tr",key:v[0],style:{transitionDelay:g*80+"ms"}},f.default.createElement("span",null,v[0]),f.default.createElement("span",null,v[1]),f.default.createElement("span",null,f.default.createElement("em",{className:"st "+v[2].toLowerCase()},v[2]))))),f.default.createElement("div",{className:"b-toast"+(u(7)?" on":"")},f.default.createElement("i",null),"Missed call \u2192 text back sent")))),f.default.createElement("div",{className:"build-hud",style:{opacity:s>=1&&l<.5?1:0},"aria-hidden":"true"},f.default.createElement("span",{className:"hud-n"},"0"+Math.max(1,s)),f.default.createElement("span",{className:"hud-t"},f.default.createElement("b",null,Da[Math.max(1,s)-1][0]),f.default.createElement("small",null,Da[Math.max(1,s)-1][1]))),f.default.createElement("div",{className:"build-dots","aria-hidden":"true"},Da.map((v,g)=>f.default.createElement("i",{key:g,className:s===g+1?"on":""}))),f.default.createElement("div",{className:"wrap build-outro",style:{opacity:l,visibility:l<.02?"hidden":"visible"}},f.default.createElement("h2",{className:"display"},"One system. Built to ",f.default.createElement("em",{className:"serif"},"work together.")),f.default.createElement("p",{className:"lede"},"Illustrative dashboard, using the Home-based Services campaign figures from our portfolio."),f.default.createElement("div",{className:"build-method"},po.map((v,g)=>f.default.createElement("span",{key:v.k},f.default.createElement("b",null,"0"+(g+1)),v.k))),f.default.createElement(Qr,{to:"contact",solid:!0},"Book a free consultation")),f.default.createElement("ol",{className:"sr-only"},Da.map(v=>f.default.createElement("li",{key:v[0]},v[0],": ",v[1])))))}function bb({gl:t}){return f.default.createElement("section",{className:"plat","data-stage":"globe"},f.default.createElement("div",{className:"wrap"},f.default.createElement(Un,null,f.default.createElement(vo,{n:"04"},"Stack"),f.default.createElement("h2",{className:"display"},f.default.createElement(em,{text:"Platforms We Work With",words:2})))),f.default.createElement("ul",{className:"chips plat-list wrap"},A_.map(e=>f.default.createElement("li",{key:e},e))))}var Cb=["cream","orange","teal"],Pb=[f.default.createElement("svg",{key:"a",viewBox:"0 0 24 24"},f.default.createElement("path",{d:"M3 17l6-6 4 4 8-8M15 7h6v6"})),f.default.createElement("svg",{key:"b",viewBox:"0 0 24 24"},f.default.createElement("circle",{cx:"12",cy:"5",r:"2.3"}),f.default.createElement("circle",{cx:"5",cy:"18.5",r:"2.3"}),f.default.createElement("circle",{cx:"19",cy:"18.5",r:"2.3"}),f.default.createElement("path",{d:"M12 7.5v4M12 11.5l-5.4 5M12 11.5l5.4 5"})),f.default.createElement("svg",{key:"c",viewBox:"0 0 24 24"},f.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8"}),f.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8"}),f.default.createElement("path",{d:"M17 3v8M13 7h8"}))],Ib=Array.from({length:78},(t,e)=>{let n=e/78;return[728+n*462+e*37%23,150+Math.sin(e*1.7)*78*(.25+n)+e*53%17-8,Math.max(1.3,9.5*(1-n)*(.5+e*29%10/14))]}),Rb=({i:t,n:e})=>f.default.createElement("svg",{viewBox:`${t*1200/e} 0 ${1200/e} 300`,preserveAspectRatio:"xMidYMid slice","aria-hidden":"true"},f.default.createElement("g",{fill:"none",stroke:"#0b0b0b",strokeLinecap:"round"},f.default.createElement("path",{strokeWidth:"13",d:"M-30 196C190 120 380 250 610 176S980 92 1230 156"}),f.default.createElement("path",{strokeWidth:"5",d:"M-30 244C220 206 420 290 650 224S1000 156 1230 210"}),f.default.createElement("path",{strokeWidth:"8",d:"M-30 112C150 74 300 150 452 104c96-28 118-102 56-110c-52-7-70 52-18 62"}),f.default.createElement("path",{strokeWidth:"4",d:"M700 76C830 34 980 104 1230 52"}),f.default.createElement("path",{strokeWidth:"7",d:"M60 284C200 262 320 300 420 262c60-24 44-70 6-60c-30 8-24 44 8 40"}),f.default.createElement("path",{strokeWidth:"6",d:"M836 262C950 282 1050 250 1072 206c16-32-30-54-46-22"})),f.default.createElement("g",{transform:"translate(468 24) scale(.42)",fill:"#0b0b0b"},f.default.createElement("path",{d:"M30 37H300V220A290.7 290.7 0 0 1 30 37Z"}),f.default.createElement("path",{d:"M42 580A383 383 0 0 1 425 197V337A243 243 0 0 0 182 580Z"}),f.default.createElement("path",{d:"M267 402V580H530A283 283 0 0 0 267 402Z"}),f.default.createElement("circle",{fill:"#EFEBE4",cx:"462",cy:"113",r:"92"})),f.default.createElement("g",{fill:"#0b0b0b"},Ib.map(([n,i,r],s)=>f.default.createElement("circle",{key:s,cx:n,cy:i,r}))));function Lb(){let t=(0,f.useRef)(null),[e,n]=(0,f.useState)(0);(0,f.useEffect)(()=>{let y=0,v=()=>{y=0;let h=t.current.getBoundingClientRect();n(Math.min(1,Math.max(0,-h.top/(h.height-window.innerHeight))))},g=()=>{y||(y=requestAnimationFrame(v))};return v(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g),cancelAnimationFrame(y)}},[]);let i=y=>(y=Math.min(1,Math.max(0,y)),y*y*(3-2*y)),r=gu.length,s=.5,o=i((e-.06)/.08),a=i((e-s)/.06),l=i((e-.13)/.06)*(1-i((e-.2)/.05)),c=y=>i((e-.2-y*.03)/.22),u=Math.sin(Math.PI*Math.min(1,Math.max(0,(e-.17)/.33))),p=Math.min(r-1,Math.max(0,Math.floor((e-s)/(1-s)*r))),d=typeof window!="undefined"&&window.innerWidth<800,m=y=>{let v=t.current.getBoundingClientRect();window.scrollTo({top:v.top+window.scrollY+(v.height-window.innerHeight)*(s+(y+.5)/r*(1-s)),behavior:"smooth"})};return f.default.createElement("section",{className:"svx",id:"services",ref:t,"data-stage":"quiet"},f.default.createElement("div",{className:"svx-pin"},f.default.createElement("div",{className:"svx-head",style:{opacity:1-o*.86}},f.default.createElement("div",{className:"slug"},f.default.createElement("b",null,"05"),f.default.createElement("i",null),"Services"),f.default.createElement("h2",{className:"display"},"Services ",f.default.createElement("em",{className:"serif"},"We Offer")),f.default.createElement("p",null,"One system. Built to work together.")),f.default.createElement("div",{className:"svx-row",style:{"--split":o}},f.default.createElement("svg",{className:"svx-twister",viewBox:"0 0 400 300",style:{opacity:u},"aria-hidden":"true"},Array.from({length:11},(y,v)=>{let g=v/10,h=16+g*g*170+g*20;return f.default.createElement("ellipse",{key:v,cx:200+Math.sin(v*.9+e*26)*(6+g*16),cy:286-g*270,rx:h,ry:h*.17,stroke:["#fff","#00B2A9","#fff","#EB4511"][v%4],strokeDasharray:`${h*1.5} ${h*1.1} ${h*.4} ${h*1.4}`,strokeDashoffset:-e*5200-v*70})})),f.default.createElement("div",{className:"svx-gusts","aria-hidden":"true"},Array.from({length:12},(y,v)=>{let g=Math.min(1,Math.max(0,(e-.1)/.4*1.9-v*37%12/13));return f.default.createElement("i",{key:v,style:{top:4+v*53%92+"%",width:60+v*29%150+"px",left:-20+g*140+"%",opacity:Math.sin(Math.PI*g)*.8}})})),gu.map((y,v)=>{let g=a>.5&&v===p,h=a>.5&&!g,_=c(v),x=Math.sin(Math.PI*_),M=_*Math.PI*2.5+v*Math.PI*2/3,P=v-(r-1)/2,b=Math.sin(M)*x*(d?26:58)-(d?0:P*86*x),C=-x*(d?0:20)-(d?P*86*x:0)+Math.cos(M)*x*6,I=(1-x*.42)*(1+Math.cos(M)*x*.2),T=`translate(${b+l*3}%, ${C}%) rotate(${Math.sin(M)*x*14+l*[-1.5,1,-2][v]}deg) skewX(${-l*9}deg) scale(${I})`;return f.default.createElement("div",{key:y.k,className:"svc-card "+Cb[v]+(g?" on":"")+(h?" slim":""),style:{flexGrow:1+a*(v===p?d?3:4.4:d?-.45:-.72),transform:T,zIndex:Math.round(10+Math.cos(M)*x*5)},onClick:()=>_>.95&&m(v)},f.default.createElement("div",{className:"svc-in",style:{transform:`rotateY(${_*540}deg)`}},f.default.createElement("div",{className:"svc-front"},f.default.createElement(Rb,{i:v,n:r})),f.default.createElement("div",{className:"svc-back"},f.default.createElement("div",{className:"svc-top"},f.default.createElement("span",{className:"svc-ico"},Pb[v]),f.default.createElement("b",null,"0"+(v+1))),f.default.createElement("div",{className:"svc-main"},f.default.createElement("h3",null,y.k),f.default.createElement("p",null,y.p)),f.default.createElement("div",{className:"svc-more"},f.default.createElement("small",null,"What we offer"),f.default.createElement("ul",null,y.li.map(w=>f.default.createElement("li",{key:w},w))),f.default.createElement(Rt,{to:y.route,className:"svc-go"},"Explore ",y.k," ",f.default.createElement(Fa,null))))))}))))}function C_({to:t,from:e,into:n}){let i=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),o=(0,f.useRef)(null),a=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let l=0,c=!1,u=new IntersectionObserver(([v])=>{c=v.isIntersecting});u.observe(i.current);let p=Array.from({length:7},(v,g)=>({f:1.3+g*1.7+Math.random(),a:(.5+Math.random())/(g+1.5),s:.3+Math.random()*.7,ph:Math.random()*6})),d=[.12,.37,.74,.9].map(v=>({x:v+Math.random()*.05,h:.5+Math.random()*.5,w:.014+Math.random()*.02,ph:Math.random()*6})),m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=()=>{if(l=requestAnimationFrame(y),!c)return;let v=i.current.getBoundingClientRect(),g=Math.min(1,Math.max(0,-v.top/(v.height-window.innerHeight))),h=100-g*122;r.current.style.transform=`translate3d(0,${h}vh,0)`,a.current.style.transform=`translate3d(0,${-h}vh,0)`,o.current.style.transform=`translate3d(${g*9}vw,0,0) skewX(${-g*10}deg)`,o.current.style.opacity=(1-g*.6).toFixed(2);let _=m?0:performance.now()/1e3,x=.35+.65*Math.sin(Math.PI*g),M="M0 100";for(let P=0;P<=80;P++){let b=P/80,C=0;p.forEach(T=>{C+=T.a*Math.sin(T.f*b*6.283+_*T.s+T.ph)});let I=0;d.forEach(T=>{I+=T.h*Math.exp(-Math.pow((b-T.x)/T.w,2))*(.6+.4*Math.sin(_*.8+T.ph))}),M+=`L${(b*1e3).toFixed(1)} ${Math.max(2,74-(C*13+I*58)*x).toFixed(1)}`}s.current.setAttribute("d",M+"L1000 100Z")};return y(),()=>{cancelAnimationFrame(l),u.disconnect()}},[]),f.default.createElement("div",{className:"flood to-"+t,ref:i},f.default.createElement("div",{className:"flood-pin"},f.default.createElement("div",{className:"flood-words"},f.default.createElement("p",{ref:o},e)),f.default.createElement("div",{className:"flood-fill",ref:r},f.default.createElement("svg",{viewBox:"0 0 1000 100",preserveAspectRatio:"none","aria-hidden":"true"},f.default.createElement("path",{ref:s})),f.default.createElement("div",{className:"flood-clip"},f.default.createElement("div",{className:"flood-words",ref:a},f.default.createElement("p",null,n[0]," ",f.default.createElement("em",null,n[1])))))))}function Nb(){let[t,e]=(0,f.useState)(0);return f.default.createElement("section",{className:"sec light","data-stage":"quiet"},f.default.createElement("div",{className:"wrap faq"},f.default.createElement(Un,{className:"faq-side"},f.default.createElement(vo,{n:"06"},"Questions"),f.default.createElement("h2",{className:"display"},"FAQ"),f.default.createElement("div",{className:"faq-mark","aria-hidden":"true"},"?")),f.default.createElement("div",{className:"faq-list"},b_.map(([n,i],r)=>f.default.createElement(Un,{key:n,delay:r*60,className:"faq-item"+(t===r?" on":"")},f.default.createElement("button",{"aria-expanded":t===r,onClick:()=>e(t===r?-1:r)},f.default.createElement("b",null,"0"+(r+1)),f.default.createElement("span",null,n),f.default.createElement("i",null)),f.default.createElement("div",{className:"faq-a"},f.default.createElement("div",null,f.default.createElement("p",null,i))))))))}var Db=({gl:t})=>f.default.createElement(f.default.Fragment,null,f.default.createElement(_b,null),f.default.createElement(xb,null),f.default.createElement(Mb,null),f.default.createElement(Eb,null),f.default.createElement(Ab,null),f.default.createElement(bb,{gl:t}),f.default.createElement(Lb,null),f.default.createElement(C_,{to:"light",from:"Hype fades.",into:["Systems","last."]}),f.default.createElement(Nb,null),f.default.createElement(C_,{to:"dark",from:"Accountability over activity.",into:["Results over","reports."]}),f.default.createElement(Oa,null));function ka({h:t,p:e,children:n,art:i=!0}){return f.default.createElement("section",{className:"phero","data-stage":"logoR"},f.default.createElement("div",{className:"wrap phero-in"},f.default.createElement("div",null,f.default.createElement("h1",{className:"display xl"},f.default.createElement(em,{text:t,words:t.split(" ").length>3?2:1})),e&&f.default.createElement("p",{className:"lede"},e),n),i&&f.default.createElement("div",{className:"phero-space","aria-hidden":"true"})))}var P_=t=>"s-"+t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+$/,"");function Ub({id:t}){let e=jp[t],n=i=>{var r;return(r=document.getElementById(P_(i)))==null?void 0:r.scrollIntoView({behavior:"smooth",block:"start"})};return f.default.createElement(f.default.Fragment,null,f.default.createElement(ka,{h:e.h,p:e.p},f.default.createElement("div",{className:"pills"},e.sections.map(i=>f.default.createElement("button",{key:i.name,onClick:()=>n(i.name)},i.name)))),f.default.createElement("section",{className:"sec tight"},f.default.createElement("div",{className:"wrap stack"},e.sections.map((i,r)=>f.default.createElement(Un,{key:i.name},f.default.createElement("article",{className:"svcblock",id:P_(i.name)},f.default.createElement("div",{className:"svcblock-h"},f.default.createElement("span",{className:"big-n"},"0",r+1),f.default.createElement("div",null,f.default.createElement("h2",null,i.name),f.default.createElement("p",null,i.sub))),i.outcomes?f.default.createElement("div",{className:"od"},f.default.createElement(Ua,{className:"od-card o",max:5},f.default.createElement("h4",null,"OUTCOMES"),f.default.createElement("ul",null,i.outcomes.map(s=>f.default.createElement("li",{key:s},s)))),f.default.createElement(Ua,{className:"od-card d",max:5},f.default.createElement("h4",null,"DELIVERABLES"),f.default.createElement("ul",null,i.deliverables.map(s=>f.default.createElement("li",{key:s},s))))):f.default.createElement("ul",{className:"chips"},i.list.map(s=>f.default.createElement("li",{key:s},s)))))))),f.default.createElement(Oa,null))}function Fb(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(ka,{h:La.h},f.default.createElement("div",{className:"story"},La.story.map(t=>f.default.createElement("p",{key:t},t)),f.default.createElement("p",{className:"story-close"},"That's why we say ",f.default.createElement("em",{className:"serif"},"Hype fades. Systems last.")),f.default.createElement(Qr,{to:"contact"},"Talk to a Strategist"))),f.default.createElement("section",{className:"sec tight"},f.default.createElement("div",{className:"wrap"},f.default.createElement(Un,null,f.default.createElement("h2",{className:"display"},"Brains Behind Zephyrix")),f.default.createElement("div",{className:"team"},La.team.map(([t,e],n)=>f.default.createElement(Un,{key:t,delay:n*80},f.default.createElement(Ua,{className:"tcard",max:12},f.default.createElement("div",{className:"tcard-mono","aria-hidden":"true"},t.split(" ").map(i=>i[0]).join("")),f.default.createElement("span",{className:"tcard-r"},e),f.default.createElement("h3",null,t))))))),f.default.createElement("section",{className:"sec tight"},f.default.createElement("div",{className:"wrap"},f.default.createElement(Un,null,f.default.createElement("h2",{className:"display"},"Our Values")),f.default.createElement("div",{className:"values"},La.values.map(([t,e,n],i)=>f.default.createElement(Un,{key:t,delay:i*80,className:"value"},f.default.createElement("span",{className:"big-n"},"0",i+1),f.default.createElement("div",null,f.default.createElement("h3",null,t),f.default.createElement("span",{className:"value-sub"},e)),f.default.createElement("p",null,n)))))),f.default.createElement(Oa,null))}var Dn=ui.cards,go=[{k:"The audit",eye:"Decode",h:["It starts with","a free audit."],p:po[0].t},{k:"Design",eye:"Design",h:["Custom-built,","not copy-pasted."],p:po[1].t},{k:"Paid social",eye:"Deploy \xB7 Paid Social",h:["Leads in","fast."],cases:[0,1,2,3,4,8],stat:[Dn[3].stats[0][1],Dn[3].stats[0][0]+" \xB7 "+Dn[3].h]},{k:"Google Ads",eye:"Deploy \xB7 Google Ads",h:["High-intent","search."],cases:[5,6],stat:[Dn[5].stats[1][1],Dn[5].stats[1][0]+" \xB7 "+Dn[5].h]},{k:"E-commerce",eye:"Distill \xB7 E-commerce",h:["Growth,","compounding."],cases:[7],stat:[Dn[7].stats[0][1],Dn[7].stats[0][0]+" \xB7 "+Dn[7].h]},{k:"The work",eye:"The work",h:["Nine campaigns.","Step inside."],go:!0}];function Ob(){let t=(0,f.useRef)(null),e=(0,f.useRef)(null),n=(0,f.useRef)(0),[i,r]=(0,f.useState)(0),[s,o]=(0,f.useState)(!0);(0,f.useEffect)(()=>{let c=0,u=()=>{c=0;let m=t.current.getBoundingClientRect(),y=Math.min(1,Math.max(0,-m.top/(m.height-window.innerHeight)))*(go.length-1);n.current=y,r(y)},p=()=>{c||(c=requestAnimationFrame(u))};u(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p);let d=T_(e.current,()=>n.current);return d||o(!1),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p),cancelAnimationFrame(c),d&&d()}},[]);let a=Math.min(go.length-1,Math.floor(i+.42)),l=c=>{let u=t.current.getBoundingClientRect();window.scrollTo({top:u.top+window.scrollY+(u.height-window.innerHeight)*(c/(go.length-1)),behavior:"smooth"})};return f.default.createElement("section",{className:"jny",ref:t,"data-stage":"quiet"},f.default.createElement("div",{className:"jny-pin"},s&&f.default.createElement("canvas",{ref:e,"aria-hidden":"true"}),f.default.createElement("div",{className:"jny-copy"},go.map((c,u)=>f.default.createElement("div",{key:c.k,className:"jny-st"+(u===a?" on":""),"aria-hidden":u!==a},f.default.createElement("div",{className:"slug"},f.default.createElement("b",null,"0"+u),f.default.createElement("i",null),c.eye),f.default.createElement("h2",{className:"display"},c.h[0]," ",f.default.createElement("em",{className:"serif"},c.h[1])),c.p&&f.default.createElement("p",{className:"lede"},c.p),c.cases&&f.default.createElement("ul",{className:"jny-list"},c.cases.map((p,d)=>f.default.createElement("li",{key:p},f.default.createElement("b",null,String(d+1).padStart(2,"0")),f.default.createElement("span",null,Dn[p].h),f.default.createElement("em",null,Dn[p].stats[0][1]," ",Dn[p].stats[0][0].replace("Total ",""))))),c.stat&&f.default.createElement("div",{className:"jny-stat"},f.default.createElement("b",null,c.stat[0]),f.default.createElement("small",null,c.stat[1])),c.go&&f.default.createElement("button",{className:"btn btn-solid",onClick:()=>{var p;return(p=document.getElementById("campaigns"))==null?void 0:p.scrollIntoView({behavior:"smooth"})}},f.default.createElement("span",{className:"btn-ico"},f.default.createElement(Fa,null)),f.default.createElement("span",null,"See all nine campaigns"))))),f.default.createElement("ol",{className:"jny-index"},go.map((c,u)=>f.default.createElement("li",{key:c.k,className:u===a?"on":""},f.default.createElement("button",{onClick:()=>l(u)},c.k,f.default.createElement("b",null,"0"+u))))),f.default.createElement("div",{className:"jny-tag","aria-hidden":"true"},f.default.createElement("i",null),"Station ","0"+a," \xB7 ",go[a].k)))}function kb(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(ka,{h:ui.h,p:ui.p},f.default.createElement(Qr,{to:"contact",solid:!0},"Book a Call")),f.default.createElement(Ob,null),f.default.createElement("section",{className:"sec tight",id:"campaigns","data-stage":"streams"},f.default.createElement("div",{className:"wrap pgrid"},ui.cards.map((t,e)=>f.default.createElement(Un,{key:t.h,delay:e%3*80,className:e===0?"wide":""},f.default.createElement(Ua,{className:"pcard",max:6},f.default.createElement("div",{className:"acard-glare"}),f.default.createElement(L_,null),f.default.createElement("div",{className:"tags"},t.tags.map(n=>f.default.createElement("span",{key:n},n))),f.default.createElement("h3",null,t.h),f.default.createElement("p",null,t.p),t.chips&&f.default.createElement("ul",{className:"chips sm"},t.chips.map(n=>f.default.createElement("li",{key:n},n))),f.default.createElement("div",{className:"stats"},t.stats.map(([n,i])=>f.default.createElement("div",{key:n},f.default.createElement(N_,{value:i}),f.default.createElement("span",null,n))))))))),f.default.createElement(Oa,null))}function Bb(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(ka,{h:vu.h,p:vu.p},f.default.createElement(Qr,{to:"contact",solid:!0},"Book a Call")),f.default.createElement("section",{className:"sec tight"},f.default.createElement("div",{className:"wrap igrid"},vu.posts.map((t,e)=>f.default.createElement(Un,{key:t.h,delay:e*100},f.default.createElement(Ua,{className:"icard",max:6},f.default.createElement("div",{className:"acard-glare"}),f.default.createElement("div",{className:"icard-top"},f.default.createElement("span",{className:"cat"},t.cat),f.default.createElement("span",null,t.read)),f.default.createElement("h3",null,t.h),f.default.createElement("p",null,t.p),f.default.createElement("time",null,t.date)))))),f.default.createElement(Oa,null))}function zb(){let[t,e]=(0,f.useState)(5e3),[n,i]=(0,f.useState)(!1),r=t>=5e4?"$50,000+":"$"+t.toLocaleString("en-US");return f.default.createElement(f.default.Fragment,null,f.default.createElement(ka,{h:Na.h,p:Na.p,art:!1}),f.default.createElement("section",{className:"sec tight"},f.default.createElement("div",{className:"wrap cgrid"},f.default.createElement("form",{className:"form",onSubmit:s=>{s.preventDefault(),i(!0)}},f.default.createElement("label",null,"Name *",f.default.createElement("input",{required:!0,name:"name",autoComplete:"name"})),f.default.createElement("div",{className:"two"},f.default.createElement("label",null,"Email *",f.default.createElement("input",{required:!0,type:"email",name:"email",autoComplete:"email"})),f.default.createElement("label",null,"Phone number *",f.default.createElement("input",{required:!0,type:"tel",name:"phone",autoComplete:"tel"}))),f.default.createElement("label",null,"Website Link",f.default.createElement("input",{name:"website",placeholder:"https://"})),f.default.createElement("label",null,"Goals",f.default.createElement("input",{name:"goals"})),f.default.createElement("label",null,"Monthly Budget Range ",f.default.createElement("b",{className:"budget"},r),f.default.createElement("input",{type:"range",min:"500",max:"50000",step:"500",value:t,onChange:s=>e(+s.target.value)}),f.default.createElement("span",{className:"range-ends"},f.default.createElement("i",null,"$500"),f.default.createElement("i",null,"$50,000+"))),f.default.createElement("label",null,"Message *",f.default.createElement("textarea",{required:!0,rows:"4",name:"message"})),f.default.createElement("label",{className:"check"},f.default.createElement("input",{type:"checkbox",name:"sms"}),f.default.createElement("span",null,Na.consent)),f.default.createElement("button",{className:"btn btn-solid",type:"submit"},f.default.createElement("span",{className:"btn-ico"},f.default.createElement(Fa,null)),f.default.createElement("span",null,"Send message")),n&&f.default.createElement("p",{className:"form-note",role:"status"},"This preview isn't connected to an inbox yet, so nothing was sent. Reach the team at ",jt.email," or ",jt.phone,".")),f.default.createElement("aside",{className:"caside"},f.default.createElement("div",{className:"direct"},f.default.createElement("span",null,"Prefer to talk directly?"),f.default.createElement("a",{href:"tel:"+jt.phone.replace(/[^+\d]/g,"")},jt.phone),f.default.createElement("a",{href:"mailto:"+jt.email},jt.email),f.default.createElement("p",null,jt.address)),f.default.createElement("h3",null,"What Happens Next"),f.default.createElement("ol",{className:"next"},Na.next.map(([s,o],a)=>f.default.createElement("li",{key:s},f.default.createElement("span",{className:"big-n"},"0",a+1),f.default.createElement("div",null,f.default.createElement("h4",null,s),f.default.createElement("p",null,o)))))))))}var Vb=["performance-marketing","ai-automations","add-ons","about","portfolio","insights","contact"],I_=()=>{let t=window.location.hash.replace(/^#/,"");return Vb.includes(t)?t:""},D_=({className:t=""})=>f.default.createElement("svg",{className:"twister "+t,viewBox:"0 0 400 300","aria-hidden":"true"},Array.from({length:11},(e,n)=>{let i=n/10,r=16+i*i*170+i*20;return f.default.createElement("ellipse",{key:n,cx:200+Math.sin(n*.9)*(6+i*16),cy:286-i*270,rx:r,ry:r*.17,stroke:["#fff","#00B2A9","#fff","#EB4511"][n%4],strokeDasharray:`${r*1.5} ${r*1.1} ${r*.4} ${r*1.4}`,style:{animationDuration:.7+i*.9+"s"}})}));function Hb(){let t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=0,n=[],i=()=>{n=[...document.querySelectorAll("main section")].map(c=>c.getBoundingClientRect().top+window.scrollY).filter(c=>c>200)};i();let r=setInterval(i,600),s=[...t.current.querySelectorAll("i")],o=t.current.querySelector("svg"),a=()=>{e=0;let c=window.innerHeight,u=window.scrollY+c*.62,p=1e9,d=-1e9;for(let y of n){let v=Math.abs(u-y);v<p&&(p=v,d=y)}let m=Math.min(1,Math.max(0,(u-d)/(c*.8)+.5));s.forEach((y,v)=>{let g=Math.min(1,Math.max(0,m*1.7-v%7/10));y.style.transform=`translate3d(${-30+g*150}vw,0,0)`,y.style.opacity=(Math.sin(Math.PI*g)*.75).toFixed(2)}),o.style.transform=`translate3d(${-18+m*130}vw,0,0)`,o.style.opacity=(Math.sin(Math.PI*m)*.9).toFixed(2)},l=()=>{e||(e=requestAnimationFrame(a))};return a(),window.addEventListener("scroll",l,{passive:!0}),()=>{clearInterval(r),cancelAnimationFrame(e),window.removeEventListener("scroll",l)}},[]),f.default.createElement("div",{className:"gusts",ref:t,"aria-hidden":"true"},Array.from({length:14},(e,n)=>f.default.createElement("i",{key:n,style:{top:6+n*53%88+"%",width:70+n*29%190+"px"}})),f.default.createElement(D_,null))}var Gb=()=>f.default.createElement("div",{className:"pagewind","aria-hidden":"true"},f.default.createElement("b",null),Array.from({length:9},(t,e)=>f.default.createElement("i",{key:e,style:{top:8+e*47%84+"%",width:120+e*31%260+"px",animationDelay:e%5*60+"ms"}})),f.default.createElement(D_,null));function Wb(){let t=(0,f.useRef)(null),e=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(window.matchMedia("(hover: none)").matches)return;document.documentElement.classList.add("has-cursor");let n=-200,i=-200,r=-200,s=-200,o,a=u=>{n=u.clientX,i=u.clientY,t.current.style.transform=`translate3d(${n}px,${i}px,0)`},l=u=>e.current.classList.toggle("big",!!u.target.closest("a,button,.dcard,input,textarea")),c=()=>{r+=(n-r)*.16,s+=(i-s)*.16,e.current.style.transform=`translate3d(${r}px,${s}px,0)`,o=requestAnimationFrame(c)};return c(),window.addEventListener("pointermove",a,{passive:!0}),window.addEventListener("pointerover",l,{passive:!0}),()=>{cancelAnimationFrame(o),window.removeEventListener("pointermove",a),window.removeEventListener("pointerover",l)}},[]),f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:"cur-dot",ref:t,"aria-hidden":"true"}),f.default.createElement("div",{className:"cur-ring",ref:e,"aria-hidden":"true"},f.default.createElement("i",null)))}function Xb(){let[t,e]=(0,f.useState)(0),[n,i]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=performance.now(),o=r?1:1300,a,l=c=>{let u=Math.min(1,(c-s)/o);e(Math.round(100*(1-Math.pow(1-u,3)))),u<1?a=requestAnimationFrame(l):setTimeout(()=>i(!0),150)};return a=requestAnimationFrame(l),()=>cancelAnimationFrame(a)},[]),f.default.createElement("div",{className:"loader"+(n?" gone":""),"aria-hidden":"true"},f.default.createElement("div",{className:"loader-half t"}),f.default.createElement("div",{className:"loader-half b"}),f.default.createElement("div",{className:"loader-in"},f.default.createElement("span",{className:"loader-mark"},f.default.createElement(Qp,{size:46}),f.default.createElement("b",null,"ZEPHYRIX")),f.default.createElement("span",{className:"loader-n"},t,"%"),f.default.createElement("span",{className:"loader-bar"},f.default.createElement("i",{style:{transform:`scaleX(${t/100})`}})),f.default.createElement("small",null,"Hype fades. Systems last.")))}function qb({onFail:t}){let e=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let n=E_(e.current);return n||t(),()=>n&&n()},[]),f.default.createElement("div",{className:"stage","aria-hidden":"true"},f.default.createElement("canvas",{ref:e}))}function Yb(){let[t,e]=(0,f.useState)(I_),[n,i]=(0,f.useState)(!0),r=(0,f.useCallback)(()=>{e(I_()),window.scrollTo(0,0)},[]);(0,f.useEffect)(()=>(window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)),[r]);let s;return jp[t]?s=f.default.createElement(Ub,{id:t,key:t}):t==="about"?s=f.default.createElement(Fb,null):t==="portfolio"?s=f.default.createElement(kb,null):t==="insights"?s=f.default.createElement(Bb,null):t==="contact"?s=f.default.createElement(zb,null):s=f.default.createElement(Db,{gl:n}),f.default.createElement(f.default.Fragment,null,f.default.createElement(Xb,null),n?f.default.createElement(qb,{onFail:()=>i(!1)}):f.default.createElement("img",{className:"stage-fallback",src:"img/sculpture.jpg",alt:""}),f.default.createElement("div",{className:"grain","aria-hidden":"true"}),f.default.createElement(Wb,null),f.default.createElement(Rt,{to:"contact",className:"rail"},"Contact Us"),f.default.createElement(Hb,null),f.default.createElement(Gb,{key:"pw"+t}),f.default.createElement(pb,{route:t}),f.default.createElement("main",{key:t,className:"page"},s),f.default.createElement(mb,null))}(0,R_.createRoot)(document.getElementById("root")).render(f.default.createElement(Yb,null));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
