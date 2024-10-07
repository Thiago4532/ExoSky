(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="169",nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},tn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,Ha=1,El=2,Go=1,Al=2,rr=3,Tr=0,Tt=1,nr=2,_r=0,sn=1,Ca=2,Oa=3,Ra=4,Dl=5,Pr=100,Ll=101,yl=102,Il=103,Pl=104,Hl=200,Cl=201,Ol=202,Rl=203,ds=204,fs=205,wl=206,Gl=207,Ul=208,Nl=209,Bl=210,Fl=211,zl=212,Wl=213,Vl=214,Ks=0,ms=1,_s=2,ln=3,gs=4,Ts=5,Ss=6,vs=7,Uo=0,kl=1,Xl=2,gr=0,Jl=1,Yl=2,ql=3,Zl=4,jl=5,$l=6,Ql=7,No=300,un=301,cn=302,Ms=303,xs=304,Mi=306,Es=1e3,Cr=1001,As=1002,Ct=1003,eu=1004,wn=1005,Bt=1006,wi=1007,Or=1008,or=1009,Bo=1010,Fo=1011,Dn=1012,sa=1013,Rr=1014,sr=1015,yn=1016,aa=1017,oa=1018,pn=1020,zo=35902,Wo=1021,Vo=1022,zt=1023,ko=1024,Xo=1025,an=1026,bn=1027,Jo=1028,la=1029,Yo=1030,ua=1031,ca=1033,li=33776,ui=33777,ci=33778,pi=33779,Ds=35840,Ls=35841,ys=35842,Is=35843,Ps=36196,Hs=37492,Cs=37496,Os=37808,Rs=37809,ws=37810,Gs=37811,Us=37812,Ns=37813,Bs=37814,Fs=37815,zs=37816,Ws=37817,Vs=37818,ks=37819,Xs=37820,Js=37821,bi=36492,Ys=36494,qs=36495,qo=36283,Zs=36284,js=36285,$s=36286,tu=3200,ru=3201,nu=0,iu=1,mr="",Vt="srgb",vr="srgb-linear",pa="display-p3",xi="display-p3-linear",fi="linear",$e="srgb",Ki="rec709",mi="p3",Br=7680,wa=519,su=512,au=513,ou=514,Zo=515,lu=516,uu=517,cu=518,pu=519,Ga=35044,Ua="300 es",ar=2e3,_i=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Na=1234567;const En=Math.PI/180,Ln=180/Math.PI;function fn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function ba(n,e){return(n%e+e)%e}function bu(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function hu(n,e,t){return n!==e?(t-n)/(e-n):0}function An(n,e,t){return(1-t)*n+t*e}function du(n,e,t,r){return An(n,e,1-Math.exp(-t*r))}function fu(n,e=1){return e-Math.abs(ba(n,e*2)-e)}function Ku(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _u(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gu(n,e){return n+Math.random()*(e-n)}function Tu(n){return n*(.5-Math.random())}function Su(n){n!==void 0&&(Na=n);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vu(n){return n*En}function Mu(n){return n*Ln}function xu(n){return(n&n-1)===0&&n!==0}function Eu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Au(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Du(n,e,t,r,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+r)/2),p=a((e+r)/2),d=s((e-r)/2),h=a((e-r)/2),f=s((r-e)/2),_=a((r-e)/2);switch(i){case"XYX":n.set(o*p,l*d,l*h,o*u);break;case"YZY":n.set(l*h,o*p,l*d,o*u);break;case"ZXZ":n.set(l*d,l*h,o*p,o*u);break;case"XZX":n.set(o*p,l*_,l*f,o*u);break;case"YXY":n.set(l*f,o*p,l*_,o*u);break;case"ZYZ":n.set(l*_,l*f,o*p,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lu={DEG2RAD:En,RAD2DEG:Ln,generateUUID:fn,clamp:ht,euclideanModulo:ba,mapLinear:bu,inverseLerp:hu,lerp:An,damp:du,pingpong:fu,smoothstep:Ku,smootherstep:mu,randInt:_u,randFloat:gu,randFloatSpread:Tu,seededRandom:Su,degToRad:vu,radToDeg:Mu,isPowerOfTwo:xu,ceilPowerOfTwo:Eu,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Du,normalize:ft,denormalize:en};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*i+e.x,this.y=s*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,r,i,s,a,o,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,a,o,l,u)}set(e,t,r,i,s,a,o,l,u){const p=this.elements;return p[0]=e,p[1]=i,p[2]=o,p[3]=t,p[4]=s,p[5]=l,p[6]=r,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,a=r[0],o=r[3],l=r[6],u=r[1],p=r[4],d=r[7],h=r[2],f=r[5],_=r[8],S=i[0],b=i[3],c=i[6],x=i[1],v=i[4],E=i[7],G=i[2],y=i[5],A=i[8];return s[0]=a*S+o*x+l*G,s[3]=a*b+o*v+l*y,s[6]=a*c+o*E+l*A,s[1]=u*S+p*x+d*G,s[4]=u*b+p*v+d*y,s[7]=u*c+p*E+d*A,s[2]=h*S+f*x+_*G,s[5]=h*b+f*v+_*y,s[8]=h*c+f*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8];return t*a*p-t*o*u-r*s*p+r*o*l+i*s*u-i*a*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8],d=p*a-o*u,h=o*l-p*s,f=u*s-a*l,_=t*d+r*h+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(i*u-p*r)*S,e[2]=(o*r-i*a)*S,e[3]=h*S,e[4]=(p*t-i*l)*S,e[5]=(i*s-o*t)*S,e[6]=f*S,e[7]=(r*l-u*t)*S,e[8]=(a*t-r*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(r*l,r*u,-r*(l*a+u*o)+a+e,-i*u,i*l,-i*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gi.makeScale(e,t)),this}rotate(e){return this.premultiply(Gi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gi=new Ie;function jo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yu(){const n=gi("canvas");return n.style.display="block",n}const Ba={};function hi(n){n in Ba||(Ba[n]=!0,console.warn(n))}function Iu(n,e,t){return new Promise(function(r,i){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:r()}}setTimeout(s,t)})}function Pu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fa=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),za=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_n={[vr]:{transfer:fi,primaries:Ki,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:$e,primaries:Ki,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xi]:{transfer:fi,primaries:mi,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(za),fromReference:n=>n.applyMatrix3(Fa)},[pa]:{transfer:$e,primaries:mi,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(za),fromReference:n=>n.applyMatrix3(Fa).convertLinearToSRGB()}},Cu=new Set([vr,xi]),We={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=_n[e].toReference,i=_n[t].fromReference;return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _n[n].primaries},getTransfer:function(n){return n===mr?fi:_n[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(_n[e].luminanceCoefficients)}};function on(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ui(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fr;class Ou{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=gi("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gi("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=on(s[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(on(t[r]/255)*255):t[r]=on(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ru=0;class $o{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ni(i[a].image)):s.push(Ni(i[a]))}else s=Ni(i);r.url=s}return t||(e.images[this.uuid]=r),r}}function Ni(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wu=0;class St extends Ur{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,r=Cr,i=Cr,s=Bt,a=Or,o=zt,l=or,u=St.DEFAULT_ANISOTROPY,p=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=fn(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=No;St.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,r=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,s;const l=e.elements,u=l[0],p=l[4],d=l[8],h=l[1],f=l[5],_=l[9],S=l[2],b=l[6],c=l[10];if(Math.abs(p-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-b)<.01){if(Math.abs(p+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+b)<.1&&Math.abs(u+f+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,E=(f+1)/2,G=(c+1)/2,y=(p+h)/4,A=(d+S)/4,w=(_+b)/4;return v>E&&v>G?v<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(v),i=y/r,s=A/r):E>G?E<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),r=y/i,s=w/i):G<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(G),r=A/s,i=w/s),this.set(r,i,s,t),this}let x=Math.sqrt((b-_)*(b-_)+(d-S)*(d-S)+(h-p)*(h-p));return Math.abs(x)<.001&&(x=1),this.x=(b-_)/x,this.y=(d-S)/x,this.z=(h-p)/x,this.w=Math.acos((u+f+c-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends Ur{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new St(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Gu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qo extends St{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends St{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,s,a,o){let l=r[i+0],u=r[i+1],p=r[i+2],d=r[i+3];const h=s[a+0],f=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=p,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=S;return}if(d!==S||l!==h||u!==f||p!==_){let b=1-o;const c=l*h+u*f+p*_+d*S,x=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const G=Math.sqrt(v),y=Math.atan2(G,c*x);b=Math.sin(b*y)/G,o=Math.sin(o*y)/G}const E=o*x;if(l=l*b+h*E,u=u*b+f*E,p=p*b+_*E,d=d*b+S*E,b===1-o){const G=1/Math.sqrt(l*l+u*u+p*p+d*d);l*=G,u*=G,p*=G,d*=G}}e[t]=l,e[t+1]=u,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,s,a){const o=r[i],l=r[i+1],u=r[i+2],p=r[i+3],d=s[a],h=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+p*d+l*f-u*h,e[t+1]=l*_+p*h+u*d-o*f,e[t+2]=u*_+p*f+o*h-l*d,e[t+3]=p*_-o*d-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(r/2),p=o(i/2),d=o(s/2),h=l(r/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*p*d+u*f*_,this._y=u*f*d-h*p*_,this._z=u*p*_+h*f*d,this._w=u*p*d-h*f*_;break;case"YXZ":this._x=h*p*d+u*f*_,this._y=u*f*d-h*p*_,this._z=u*p*_-h*f*d,this._w=u*p*d+h*f*_;break;case"ZXY":this._x=h*p*d-u*f*_,this._y=u*f*d+h*p*_,this._z=u*p*_+h*f*d,this._w=u*p*d-h*f*_;break;case"ZYX":this._x=h*p*d-u*f*_,this._y=u*f*d+h*p*_,this._z=u*p*_-h*f*d,this._w=u*p*d+h*f*_;break;case"YZX":this._x=h*p*d+u*f*_,this._y=u*f*d+h*p*_,this._z=u*p*_-h*f*d,this._w=u*p*d-h*f*_;break;case"XZY":this._x=h*p*d-u*f*_,this._y=u*f*d-h*p*_,this._z=u*p*_+h*f*d,this._w=u*p*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],p=t[6],d=t[10],h=r+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(p-l)*f,this._y=(s-u)*f,this._z=(a-i)*f}else if(r>o&&r>d){const f=2*Math.sqrt(1+r-o-d);this._w=(p-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+u)/f}else if(o>d){const f=2*Math.sqrt(1+o-r-d);this._w=(s-u)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+p)/f}else{const f=2*Math.sqrt(1+d-r-o);this._w=(a-i)/f,this._x=(s+u)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,p=t._w;return this._x=r*p+a*o+i*u-s*l,this._y=i*p+a*l+s*o-r*u,this._z=s*p+a*u+r*l-i*o,this._w=a*p-r*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+r*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*r+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),p=Math.atan2(u,o),d=Math.sin((1-t)*p)/u,h=Math.sin(t*p)/u;return this._w=a*d+this._w*h,this._x=r*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*i,this.y=s[1]*t+s[4]*r+s[7]*i,this.z=s[2]*t+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*r+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*r+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*i-o*r),p=2*(o*t-s*i),d=2*(s*r-a*t);return this.x=t+l*u+a*d-o*p,this.y=r+l*p+o*u-s*d,this.z=i+l*d+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i,this.y=s[1]*t+s[5]*r+s[9]*i,this.z=s[2]*t+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-r*l,this.z=r*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bi.copy(this).projectOnVector(e),this.sub(Bi)}reflect(e){return this.sub(Bi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bi=new H,Wa=new Gr;class In{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gn.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gn.copy(r.boundingBox)),Gn.applyMatrix4(e.matrixWorld),this.union(Gn)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gn),Un.subVectors(this.max,gn),zr.subVectors(e.a,gn),Wr.subVectors(e.b,gn),Vr.subVectors(e.c,gn),cr.subVectors(Wr,zr),pr.subVectors(Vr,Wr),xr.subVectors(zr,Vr);let t=[0,-cr.z,cr.y,0,-pr.z,pr.y,0,-xr.z,xr.y,cr.z,0,-cr.x,pr.z,0,-pr.x,xr.z,0,-xr.x,-cr.y,cr.x,0,-pr.y,pr.x,0,-xr.y,xr.x,0];return!Fi(t,zr,Wr,Vr,Un)||(t=[1,0,0,0,1,0,0,0,1],!Fi(t,zr,Wr,Vr,Un))?!1:(Nn.crossVectors(cr,pr),t=[Nn.x,Nn.y,Nn.z],Fi(t,zr,Wr,Vr,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new H,new H,new H,new H,new H,new H,new H,new H],Gt=new H,Gn=new In,zr=new H,Wr=new H,Vr=new H,cr=new H,pr=new H,xr=new H,gn=new H,Un=new H,Nn=new H,Er=new H;function Fi(n,e,t,r,i){for(let s=0,a=n.length-3;s<=a;s+=3){Er.fromArray(n,s);const o=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),l=e.dot(Er),u=t.dot(Er),p=r.dot(Er);if(Math.max(-Math.max(l,u,p),Math.min(l,u,p))>o)return!1}return!0}const Nu=new In,Tn=new H,zi=new H;class Ei{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Nu.setFromPoints(e).getCenter(r);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tn.subVectors(e,this.center);const t=Tn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Tn,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tn.copy(e.center).add(zi)),this.expandByPoint(Tn.copy(e.center).sub(zi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new H,Wi=new H,Bn=new H,br=new H,Vi=new H,Fn=new H,ki=new H;class Ai{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Wi.copy(e).add(t).multiplyScalar(.5),Bn.copy(t).sub(e).normalize(),br.copy(this.origin).sub(Wi);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Bn),o=br.dot(this.direction),l=-br.dot(Bn),u=br.lengthSq(),p=Math.abs(1-a*a);let d,h,f,_;if(p>0)if(d=a*l-o,h=a*o-l,_=s*p,d>=0)if(h>=-_)if(h<=_){const S=1/p;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+u}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+u):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+u);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wi).addScaledVector(Bn,h),f}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const r=$t.dot(this.direction),i=$t.dot($t)-r*r,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,s,a,o,l;const u=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(r=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(r=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),p>=0?(s=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),r>a||s>i||((s>r||isNaN(r))&&(r=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,r,i,s){Vi.subVectors(t,e),Fn.subVectors(r,e),ki.crossVectors(Vi,Fn);let a=this.direction.dot(ki),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;br.subVectors(this.origin,e);const l=o*this.direction.dot(Fn.crossVectors(br,Fn));if(l<0)return null;const u=o*this.direction.dot(Vi.cross(br));if(u<0||l+u>a)return null;const p=-o*br.dot(ki);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,r,i,s,a,o,l,u,p,d,h,f,_,S,b){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,a,o,l,u,p,d,h,f,_,S,b)}set(e,t,r,i,s,a,o,l,u,p,d,h,f,_,S,b){const c=this.elements;return c[0]=e,c[4]=t,c[8]=r,c[12]=i,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=p,c[10]=d,c[14]=h,c[3]=f,c[7]=_,c[11]=S,c[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(i),u=Math.sin(i),p=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*p,f=a*d,_=o*p,S=o*d;t[0]=l*p,t[4]=-l*d,t[8]=u,t[1]=f+_*u,t[5]=h-S*u,t[9]=-o*l,t[2]=S-h*u,t[6]=_+f*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*p,f=l*d,_=u*p,S=u*d;t[0]=h+S*o,t[4]=_*o-f,t[8]=a*u,t[1]=a*d,t[5]=a*p,t[9]=-o,t[2]=f*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*p,f=l*d,_=u*p,S=u*d;t[0]=h-S*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*p,t[9]=S-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*p,f=a*d,_=o*p,S=o*d;t[0]=l*p,t[4]=_*u-f,t[8]=h*u+S,t[1]=l*d,t[5]=S*u+h,t[9]=f*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*u,_=o*l,S=o*u;t[0]=l*p,t[4]=S-h*d,t[8]=_*d+f,t[1]=d,t[5]=a*p,t[9]=-o*p,t[2]=-u*p,t[6]=f*d+_,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*l,f=a*u,_=o*l,S=o*u;t[0]=l*p,t[4]=-d,t[8]=u*p,t[1]=h*d+S,t[5]=a*p,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*p,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bu,e,Fu)}lookAt(e,t,r){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),hr.crossVectors(r,At),hr.lengthSq()===0&&(Math.abs(r.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),hr.crossVectors(r,At)),hr.normalize(),zn.crossVectors(At,hr),i[0]=hr.x,i[4]=zn.x,i[8]=At.x,i[1]=hr.y,i[5]=zn.y,i[9]=At.y,i[2]=hr.z,i[6]=zn.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,a=r[0],o=r[4],l=r[8],u=r[12],p=r[1],d=r[5],h=r[9],f=r[13],_=r[2],S=r[6],b=r[10],c=r[14],x=r[3],v=r[7],E=r[11],G=r[15],y=i[0],A=i[4],w=i[8],ee=i[12],K=i[1],T=i[5],z=i[9],N=i[13],X=i[2],q=i[6],F=i[10],Y=i[14],B=i[3],oe=i[7],le=i[11],Ke=i[15];return s[0]=a*y+o*K+l*X+u*B,s[4]=a*A+o*T+l*q+u*oe,s[8]=a*w+o*z+l*F+u*le,s[12]=a*ee+o*N+l*Y+u*Ke,s[1]=p*y+d*K+h*X+f*B,s[5]=p*A+d*T+h*q+f*oe,s[9]=p*w+d*z+h*F+f*le,s[13]=p*ee+d*N+h*Y+f*Ke,s[2]=_*y+S*K+b*X+c*B,s[6]=_*A+S*T+b*q+c*oe,s[10]=_*w+S*z+b*F+c*le,s[14]=_*ee+S*N+b*Y+c*Ke,s[3]=x*y+v*K+E*X+G*B,s[7]=x*A+v*T+E*q+G*oe,s[11]=x*w+v*z+E*F+G*le,s[15]=x*ee+v*N+E*Y+G*Ke,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],p=e[2],d=e[6],h=e[10],f=e[14],_=e[3],S=e[7],b=e[11],c=e[15];return _*(+s*l*d-i*u*d-s*o*h+r*u*h+i*o*f-r*l*f)+S*(+t*l*f-t*u*h+s*a*h-i*a*f+i*u*p-s*l*p)+b*(+t*u*d-t*o*f-s*a*d+r*a*f+s*o*p-r*u*p)+c*(-i*o*p-t*l*d+t*o*h+i*a*d-r*a*h+r*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8],d=e[9],h=e[10],f=e[11],_=e[12],S=e[13],b=e[14],c=e[15],x=d*b*u-S*h*u+S*l*f-o*b*f-d*l*c+o*h*c,v=_*h*u-p*b*u-_*l*f+a*b*f+p*l*c-a*h*c,E=p*S*u-_*d*u+_*o*f-a*S*f-p*o*c+a*d*c,G=_*d*l-p*S*l-_*o*h+a*S*h+p*o*b-a*d*b,y=t*x+r*v+i*E+s*G;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=x*A,e[1]=(S*h*s-d*b*s-S*i*f+r*b*f+d*i*c-r*h*c)*A,e[2]=(o*b*s-S*l*s+S*i*u-r*b*u-o*i*c+r*l*c)*A,e[3]=(d*l*s-o*h*s-d*i*u+r*h*u+o*i*f-r*l*f)*A,e[4]=v*A,e[5]=(p*b*s-_*h*s+_*i*f-t*b*f-p*i*c+t*h*c)*A,e[6]=(_*l*s-a*b*s-_*i*u+t*b*u+a*i*c-t*l*c)*A,e[7]=(a*h*s-p*l*s+p*i*u-t*h*u-a*i*f+t*l*f)*A,e[8]=E*A,e[9]=(_*d*s-p*S*s-_*r*f+t*S*f+p*r*c-t*d*c)*A,e[10]=(a*S*s-_*o*s+_*r*u-t*S*u-a*r*c+t*o*c)*A,e[11]=(p*o*s-a*d*s-p*r*u+t*d*u+a*r*f-t*o*f)*A,e[12]=G*A,e[13]=(p*S*i-_*d*i+_*r*h-t*S*h-p*r*b+t*d*b)*A,e[14]=(_*o*i-a*S*i-_*r*l+t*S*l+a*r*b-t*o*b)*A,e[15]=(a*d*i-p*o*i+p*r*l-t*d*l-a*r*h+t*o*h)*A,this}scale(e){const t=this.elements,r=e.x,i=e.y,s=e.z;return t[0]*=r,t[4]*=i,t[8]*=s,t[1]*=r,t[5]*=i,t[9]*=s,t[2]*=r,t[6]*=i,t[10]*=s,t[3]*=r,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),s=1-r,a=e.x,o=e.y,l=e.z,u=s*a,p=s*o;return this.set(u*a+r,u*o-i*l,u*l+i*o,0,u*o+i*l,p*o+r,p*l-i*a,0,u*l-i*o,p*l+i*a,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,s,a){return this.set(1,r,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,p=a+a,d=o+o,h=s*u,f=s*p,_=s*d,S=a*p,b=a*d,c=o*d,x=l*u,v=l*p,E=l*d,G=r.x,y=r.y,A=r.z;return i[0]=(1-(S+c))*G,i[1]=(f+E)*G,i[2]=(_-v)*G,i[3]=0,i[4]=(f-E)*y,i[5]=(1-(h+c))*y,i[6]=(b+x)*y,i[7]=0,i[8]=(_+v)*A,i[9]=(b-x)*A,i[10]=(1-(h+S))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let s=kr.set(i[0],i[1],i[2]).length();const a=kr.set(i[4],i[5],i[6]).length(),o=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const u=1/s,p=1/a,d=1/o;return Ut.elements[0]*=u,Ut.elements[1]*=u,Ut.elements[2]*=u,Ut.elements[4]*=p,Ut.elements[5]*=p,Ut.elements[6]*=p,Ut.elements[8]*=d,Ut.elements[9]*=d,Ut.elements[10]*=d,t.setFromRotationMatrix(Ut),r.x=s,r.y=a,r.z=o,this}makePerspective(e,t,r,i,s,a,o=ar){const l=this.elements,u=2*s/(t-e),p=2*s/(r-i),d=(t+e)/(t-e),h=(r+i)/(r-i);let f,_;if(o===ar)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_i)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,s,a,o=ar){const l=this.elements,u=1/(t-e),p=1/(r-i),d=1/(a-s),h=(t+e)*u,f=(r+i)*p;let _,S;if(o===ar)_=(a+s)*d,S=-2*d;else if(o===_i)_=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const kr=new H,Ut=new et,Bu=new H(0,0,0),Fu=new H(1,1,1),hr=new H,zn=new H,At=new H,Va=new et,ka=new Gr;class lr{constructor(e=0,t=0,r=0,i=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],u=i[5],p=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zu=0;const Xa=new H,Xr=new Gr,Qt=new et,Wn=new H,Sn=new H,Wu=new H,Vu=new Gr,Ja=new H(1,0,0),Ya=new H(0,1,0),qa=new H(0,0,1),Za={type:"added"},ku={type:"removed"},Jr={type:"childadded",child:null},Xi={type:"childremoved",child:null};class vt extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new lr,r=new Gr,i=new H(1,1,1);function s(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Ie}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Ya,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Ya,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Wn.copy(e):Wn.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Sn,Wn,this.up):Qt.lookAt(Wn,Sn,this.up),this.quaternion.setFromRotationMatrix(Qt),i&&(Qt.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(Qt),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Za),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Za),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,Vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,p=l.length;u<p;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),p=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),p.length>0&&(r.images=p),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=i,r;function a(o){const l=[];for(const u in o){const p=o[u];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new H,er=new H,Ji=new H,tr=new H,Yr=new H,qr=new H,ja=new H,Yi=new H,qi=new H,Zi=new H,ji=new rt,$i=new rt,Qi=new rt;class Ft{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Nt.subVectors(e,t),i.cross(Nt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,r,i,s){Nt.subVectors(i,t),er.subVectors(r,t),Ji.subVectors(e,t);const a=Nt.dot(Nt),o=Nt.dot(er),l=Nt.dot(Ji),u=er.dot(er),p=er.dot(Ji),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(u*l-o*p)*h,_=(a*p-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,i,s,a,o,l){return this.getBarycoord(e,t,r,i,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,t,r,i,s,a){return ji.setScalar(0),$i.setScalar(0),Qi.setScalar(0),ji.fromBufferAttribute(e,t),$i.fromBufferAttribute(e,r),Qi.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ji,s.x),a.addScaledVector($i,s.y),a.addScaledVector(Qi,s.z),a}static isFrontFacing(e,t,r,i){return Nt.subVectors(r,t),er.subVectors(e,t),Nt.cross(er).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Nt.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,s){return Ft.getInterpolation(e,this.a,this.b,this.c,t,r,i,s)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,s=this.c;let a,o;Yr.subVectors(i,r),qr.subVectors(s,r),Yi.subVectors(e,r);const l=Yr.dot(Yi),u=qr.dot(Yi);if(l<=0&&u<=0)return t.copy(r);qi.subVectors(e,i);const p=Yr.dot(qi),d=qr.dot(qi);if(p>=0&&d<=p)return t.copy(i);const h=l*d-p*u;if(h<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(r).addScaledVector(Yr,a);Zi.subVectors(e,s);const f=Yr.dot(Zi),_=qr.dot(Zi);if(_>=0&&f<=_)return t.copy(s);const S=f*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(r).addScaledVector(qr,o);const b=p*_-f*d;if(b<=0&&d-p>=0&&f-_>=0)return ja.subVectors(s,i),o=(d-p)/(d-p+(f-_)),t.copy(i).addScaledVector(ja,o);const c=1/(b+S+h);return a=S*c,o=h*c,t.copy(r).addScaledVector(Yr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function es(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=r,We.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=We.workingColorSpace){if(e=ba(e,1),t=ht(t,0,1),r=ht(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,a=2*r-s;this.r=es(a,s,e+1/3),this.g=es(a,s,e),this.b=es(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const r=el[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return We.fromWorkingColorSpace(bt.copy(this),e),Math.round(ht(bt.r*255,0,255))*65536+Math.round(ht(bt.g*255,0,255))*256+Math.round(ht(bt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(bt.copy(this),t);const r=bt.r,i=bt.g,s=bt.b,a=Math.max(r,i,s),o=Math.min(r,i,s);let l,u;const p=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=p<=.5?d/(a+o):d/(2-a-o),a){case r:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-r)/d+2;break;case s:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=p,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Vt){We.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,r=bt.g,i=bt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Vn);const r=An(dr.h,Vn.h,t),i=An(dr.s,Vn.s,t),s=An(dr.l,Vn.l,t);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*i,this.g=s[1]*t+s[4]*r+s[7]*i,this.b=s[2]*t+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Xe;Xe.NAMES=el;let Xu=0;class Pn extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=sn,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ds,this.blendDst=fs,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ln,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==sn&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ds&&(r.blendSrc=this.blendSrc),this.blendDst!==fs&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ln&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(r.textures=s),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class da extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new H,kn=new Pe;class Jt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ga,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix3(e),this.setXY(t,kn.x,kn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=en(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class tl extends Jt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rl extends Jt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wt extends Jt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ju=0;const It=new et,ts=new vt,Zr=new H,Dt=new In,vn=new In,lt=new H;class Rt extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?rl:tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ie().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,r){return It.makeTranslation(e,t,r),this.applyMatrix4(It),this}scale(e,t,r){return It.makeScale(e,t,r),this.applyMatrix4(It),this}lookAt(e){return ts.lookAt(e),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const s=t[r];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Dt.min,vn.min),Dt.expandByPoint(lt),lt.addVectors(Dt.max,vn.max),Dt.expandByPoint(lt)):(Dt.expandByPoint(vn.min),Dt.expandByPoint(vn.max))}Dt.getCenter(r);let i=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)lt.fromBufferAttribute(o,u),l&&(Zr.fromBufferAttribute(e,u),lt.add(Zr)),i=Math.max(i,r.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<r.count;w++)o[w]=new H,l[w]=new H;const u=new H,p=new H,d=new H,h=new Pe,f=new Pe,_=new Pe,S=new H,b=new H;function c(w,ee,K){u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,ee),d.fromBufferAttribute(r,K),h.fromBufferAttribute(s,w),f.fromBufferAttribute(s,ee),_.fromBufferAttribute(s,K),p.sub(u),d.sub(u),f.sub(h),_.sub(h);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(S.copy(p).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(T),b.copy(d).multiplyScalar(f.x).addScaledVector(p,-_.x).multiplyScalar(T),o[w].add(S),o[ee].add(S),o[K].add(S),l[w].add(b),l[ee].add(b),l[K].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,ee=x.length;w<ee;++w){const K=x[w],T=K.start,z=K.count;for(let N=T,X=T+z;N<X;N+=3)c(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new H,E=new H,G=new H,y=new H;function A(w){G.fromBufferAttribute(i,w),y.copy(G);const ee=o[w];v.copy(ee),v.sub(G.multiplyScalar(G.dot(ee))).normalize(),E.crossVectors(y,ee);const T=E.dot(l[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,T)}for(let w=0,ee=x.length;w<ee;++w){const K=x[w],T=K.start,z=K.count;for(let N=T,X=T+z;N<X;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,f=r.count;h<f;h++)r.setXYZ(h,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,u=new H,p=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),S=e.getX(h+1),b=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,b),p.subVectors(a,s),d.subVectors(i,s),p.cross(d),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,S),u.fromBufferAttribute(r,b),o.add(p),l.add(p),u.add(p),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(S,l.x,l.y,l.z),r.setXYZ(b,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,s),d.subVectors(i,s),p.cross(d),r.setXYZ(h+0,p.x,p.y,p.z),r.setXYZ(h+1,p.x,p.y,p.z),r.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const u=o.array,p=o.itemSize,d=o.normalized,h=new u.constructor(l.length*p);let f=0,_=0;for(let S=0,b=l.length;S<b;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*p;for(let c=0;c<p;c++)h[_++]=u[f++]}return new Jt(h,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,r);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let p=0,d=u.length;p<d;p++){const h=u[p],f=e(h,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],p=[];for(let d=0,h=u.length;d<h;d++){const f=u[d];p.push(f.toJSON(e.data))}p.length>0&&(i[l]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const u in i){const p=i[u];this.setAttribute(u,p.clone(t))}const s=e.morphAttributes;for(const u in s){const p=[],d=s[u];for(let h=0,f=d.length;h<f;h++)p.push(d[h].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new et,Ar=new Ai,Xn=new Ei,Qa=new H,Jn=new H,Yn=new H,qn=new H,rs=new H,Zn=new H,eo=new H,jn=new H;class Xt extends vt{constructor(e=new Rt,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Zn.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const p=o[l],d=s[l];p!==0&&(rs.fromBufferAttribute(d,e),a?Zn.addScaledVector(rs,p):Zn.addScaledVector(rs.sub(t),p))}t.add(Zn)}return t}raycast(e,t){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xn.copy(r.boundingSphere),Xn.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Xn.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Xn,Qa)===null||Ar.origin.distanceToSquared(Qa)>(e.far-e.near)**2))&&($a.copy(s).invert(),Ar.copy(e.ray).applyMatrix4($a),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,r){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const b=h[_],c=a[b.materialIndex],x=Math.max(b.start,f.start),v=Math.min(o.count,Math.min(b.start+b.count,f.start+f.count));for(let E=x,G=v;E<G;E+=3){const y=o.getX(E),A=o.getX(E+1),w=o.getX(E+2);i=$n(this,c,e,r,u,p,d,y,A,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let b=_,c=S;b<c;b+=3){const x=o.getX(b),v=o.getX(b+1),E=o.getX(b+2);i=$n(this,a,e,r,u,p,d,x,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const b=h[_],c=a[b.materialIndex],x=Math.max(b.start,f.start),v=Math.min(l.count,Math.min(b.start+b.count,f.start+f.count));for(let E=x,G=v;E<G;E+=3){const y=E,A=E+1,w=E+2;i=$n(this,c,e,r,u,p,d,y,A,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let b=_,c=S;b<c;b+=3){const x=b,v=b+1,E=b+2;i=$n(this,a,e,r,u,p,d,x,v,E),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}}function Yu(n,e,t,r,i,s,a,o){let l;if(e.side===Tt?l=r.intersectTriangle(a,s,i,!0,o):l=r.intersectTriangle(i,s,a,e.side===Tr,o),l===null)return null;jn.copy(o),jn.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(jn);return u<t.near||u>t.far?null:{distance:u,point:jn.clone(),object:n}}function $n(n,e,t,r,i,s,a,o,l,u){n.getVertexPosition(o,Jn),n.getVertexPosition(l,Yn),n.getVertexPosition(u,qn);const p=Yu(n,e,t,r,Jn,Yn,qn,eo);if(p){const d=new H;Ft.getBarycoord(eo,Jn,Yn,qn,d),i&&(p.uv=Ft.getInterpolatedAttribute(i,o,l,u,d,new Pe)),s&&(p.uv1=Ft.getInterpolatedAttribute(s,o,l,u,d,new Pe)),a&&(p.normal=Ft.getInterpolatedAttribute(a,o,l,u,d,new H),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new H,materialIndex:0};Ft.getNormal(Jn,Yn,qn,h.normal),p.face=h,p.barycoord=d}return p}class Hn extends Rt{constructor(e=1,t=1,r=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],p=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,r,t,e,a,s,0),_("z","y","x",1,-1,r,t,-e,a,s,1),_("x","z","y",1,1,e,r,t,i,a,2),_("x","z","y",1,-1,e,r,-t,i,a,3),_("x","y","z",1,-1,e,t,r,i,s,4),_("x","y","z",-1,-1,e,t,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(d,2));function _(S,b,c,x,v,E,G,y,A,w,ee){const K=E/A,T=G/w,z=E/2,N=G/2,X=y/2,q=A+1,F=w+1;let Y=0,B=0;const oe=new H;for(let le=0;le<F;le++){const Ke=le*T-N;for(let Ne=0;Ne<q;Ne++){const Ve=Ne*K-z;oe[S]=Ve*x,oe[b]=Ke*v,oe[c]=X,u.push(oe.x,oe.y,oe.z),oe[S]=0,oe[b]=0,oe[c]=y>0?1:-1,p.push(oe.x,oe.y,oe.z),d.push(Ne/A),d.push(1-le/w),Y+=1}}for(let le=0;le<w;le++)for(let Ke=0;Ke<A;Ke++){const Ne=h+Ke+q*le,Ve=h+Ke+q*(le+1),W=h+(Ke+1)+q*(le+1),j=h+(Ke+1)+q*le;l.push(Ne,Ve,j),l.push(Ve,W,j),B+=6}o.addGroup(f,B,ee),f+=B,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hn(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const r=hn(n[t]);for(const i in r)e[i]=r[i]}return e}function qu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Zu={clone:hn,merge:Kt};var ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hn(e.uniforms),this.uniformsGroups=qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class il extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new H,to=new Pe,ro=new Pe;class Ht extends il{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(En*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(En*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,to,ro),t.subVectors(ro,to)}setViewOffset(e,t,r,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(En*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*r/u,i*=a.width/l,r*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,$r=1;class Qu extends vt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(jr,$r,e,t);i.layers=this.layers,this.add(i);const s=new Ht(jr,$r,e,t);s.layers=this.layers,this.add(s);const a=new Ht(jr,$r,e,t);a.layers=this.layers,this.add(a);const o=new Ht(jr,$r,e,t);o.layers=this.layers,this.add(o);const l=new Ht(jr,$r,e,t);l.layers=this.layers,this.add(l);const u=new Ht(jr,$r,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===ar)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_i)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,p]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,s),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,o),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,u),r.texture.generateMipmaps=S,e.setRenderTarget(r,5,i),e.render(t,p),e.setRenderTarget(d,h,f),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class sl extends St{constructor(e,t,r,i,s,a,o,l,u,p){e=e!==void 0?e:[],t=t!==void 0?t:un,super(e,t,r,i,s,a,o,l,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hn(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:hn(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tt,blending:_r});s.uniforms.tEquirect.value=t;const a=new Xt(i,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=Bt),new Qu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(s)}}const ns=new H,tc=new H,rc=new Ie;class Kr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=ns.subVectors(r,t).cross(tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ns),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||rc.getNormalMatrix(e),i=this.coplanarPoint(ns).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Ei,Qn=new H;class al{constructor(e=new Kr,t=new Kr,r=new Kr,i=new Kr,s=new Kr,a=new Kr){this.planes=[e,t,r,i,s,a]}set(e,t,r,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ar){const r=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],u=i[4],p=i[5],d=i[6],h=i[7],f=i[8],_=i[9],S=i[10],b=i[11],c=i[12],x=i[13],v=i[14],E=i[15];if(r[0].setComponents(l-s,h-u,b-f,E-c).normalize(),r[1].setComponents(l+s,h+u,b+f,E+c).normalize(),r[2].setComponents(l+a,h+p,b+_,E+x).normalize(),r[3].setComponents(l-a,h-p,b-_,E-x).normalize(),r[4].setComponents(l-o,h-d,b-S,E-v).normalize(),t===ar)r[5].setComponents(l+o,h+d,b+S,E+v).normalize();else if(t===_i)r[5].setComponents(o,d,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Qn.x=i.normal.x>0?e.max.x:e.min.x,Qn.y=i.normal.y>0?e.max.y:e.min.y,Qn.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let n=null,e=!1,t=null,r=null;function i(s,a){t(s,a),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nc(n){const e=new WeakMap;function t(o,l){const u=o.array,p=o.usage,d=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,p),o.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,u){const p=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,p);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const S=d[f];n.bufferSubData(u,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:a}}class Di extends Rt{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(r),l=Math.floor(i),u=o+1,p=l+1,d=e/o,h=t/l,f=[],_=[],S=[],b=[];for(let c=0;c<p;c++){const x=c*h-a;for(let v=0;v<u;v++){const E=v*d-s;_.push(E,-x,0),S.push(0,0,1),b.push(v/o),b.push(1-c/l)}}for(let c=0;c<l;c++)for(let x=0;x<o;x++){const v=x+u*c,E=x+u*(c+1),G=x+1+u*(c+1),y=x+1+u*c;f.push(v,E,y),f.push(E,G,y)}this.setIndex(f),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(S,3)),this.setAttribute("uv",new Wt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sc=`#ifdef USE_ALPHAHASH
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
#endif`,ac=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cc=`#ifdef USE_AOMAP
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
#endif`,pc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bc=`#ifdef USE_BATCHING
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
#endif`,hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mc=`#ifdef USE_IRIDESCENCE
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
#endif`,_c=`#ifdef USE_BUMPMAP
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
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dc=`#define PI 3.141592653589793
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
} // validated`,Lc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yc=`vec3 transformedNormal = objectNormal;
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
#endif`,Ic=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wc=`#ifdef USE_ENVMAP
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
#endif`,Gc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uc=`#ifdef USE_ENVMAP
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
#endif`,Nc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,Fc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
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
}`,Xc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qc=`uniform bool receiveShadow;
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
#endif`,Zc=`#ifdef USE_ENVMAP
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
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$c=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,cb=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,bb=`#define DISTANCE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
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
}`,Sb=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
}`,xb=`#define NORMAL
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
}`,Eb=`#define PHONG
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
}`,Ab=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,yb=`#define TOON
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
}`,Ib=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Cb=`#include <common>
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
}`,Ob=`uniform vec3 color;
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
}`,Rb=`uniform float rotation;
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
}`,wb=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:ic,alphahash_pars_fragment:sc,alphamap_fragment:ac,alphamap_pars_fragment:oc,alphatest_fragment:lc,alphatest_pars_fragment:uc,aomap_fragment:cc,aomap_pars_fragment:pc,batching_pars_vertex:bc,batching_vertex:hc,begin_vertex:dc,beginnormal_vertex:fc,bsdfs:Kc,iridescence_fragment:mc,bumpmap_pars_fragment:_c,clipping_planes_fragment:gc,clipping_planes_pars_fragment:Tc,clipping_planes_pars_vertex:Sc,clipping_planes_vertex:vc,color_fragment:Mc,color_pars_fragment:xc,color_pars_vertex:Ec,color_vertex:Ac,common:Dc,cube_uv_reflection_fragment:Lc,defaultnormal_vertex:yc,displacementmap_pars_vertex:Ic,displacementmap_vertex:Pc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Cc,colorspace_fragment:Oc,colorspace_pars_fragment:Rc,envmap_fragment:wc,envmap_common_pars_fragment:Gc,envmap_pars_fragment:Uc,envmap_pars_vertex:Nc,envmap_physical_pars_fragment:Zc,envmap_vertex:Bc,fog_vertex:Fc,fog_pars_vertex:zc,fog_fragment:Wc,fog_pars_fragment:Vc,gradientmap_pars_fragment:kc,lightmap_pars_fragment:Xc,lights_lambert_fragment:Jc,lights_lambert_pars_fragment:Yc,lights_pars_begin:qc,lights_toon_fragment:jc,lights_toon_pars_fragment:$c,lights_phong_fragment:Qc,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:rp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:up,map_fragment:cp,map_pars_fragment:pp,map_particle_fragment:bp,map_particle_pars_fragment:hp,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:Kp,morphcolor_vertex:mp,morphnormal_vertex:_p,morphtarget_pars_vertex:gp,morphtarget_vertex:Tp,normal_fragment_begin:Sp,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:xp,normal_vertex:Ep,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ip,opaque_fragment:Pp,packing:Hp,premultiplied_alpha_fragment:Cp,project_vertex:Op,dithering_fragment:Rp,dithering_pars_fragment:wp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Bp,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Wp,skinning_pars_vertex:Vp,skinning_vertex:kp,skinnormal_vertex:Xp,specularmap_fragment:Jp,specularmap_pars_fragment:Yp,tonemapping_fragment:qp,tonemapping_pars_fragment:Zp,transmission_fragment:jp,transmission_pars_fragment:$p,uv_pars_fragment:Qp,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:rb,background_vert:nb,background_frag:ib,backgroundCube_vert:sb,backgroundCube_frag:ab,cube_vert:ob,cube_frag:lb,depth_vert:ub,depth_frag:cb,distanceRGBA_vert:pb,distanceRGBA_frag:bb,equirect_vert:hb,equirect_frag:db,linedashed_vert:fb,linedashed_frag:Kb,meshbasic_vert:mb,meshbasic_frag:_b,meshlambert_vert:gb,meshlambert_frag:Tb,meshmatcap_vert:Sb,meshmatcap_frag:vb,meshnormal_vert:Mb,meshnormal_frag:xb,meshphong_vert:Eb,meshphong_frag:Ab,meshphysical_vert:Db,meshphysical_frag:Lb,meshtoon_vert:yb,meshtoon_frag:Ib,points_vert:Pb,points_frag:Hb,shadow_vert:Cb,shadow_frag:Ob,sprite_vert:Rb,sprite_frag:wb},te={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},kt={basic:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Kt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Kt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Kt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Kt([te.points,te.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Kt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Kt([te.common,te.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Kt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Kt([te.sprite,te.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Kt([te.common,te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Kt([te.lights,te.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};kt.physical={uniforms:Kt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const ei={r:0,b:0,g:0},Lr=new lr,Gb=new et;function Ub(n,e,t,r,i,s,a){const o=new Xe(0);let l=s===!0?0:1,u,p,d=null,h=0,f=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function S(x){let v=!1;const E=_(x);E===null?c(o,l):E&&E.isColor&&(c(E,1),v=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,a):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Mi)?(p===void 0&&(p=new Xt(new Hn(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:hn(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),Lr.copy(v.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),p.material.uniforms.envMap.value=E,p.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(Lr)),p.material.toneMapped=We.getTransfer(E.colorSpace)!==$e,(d!==E||h!==E.version||f!==n.toneMapping)&&(p.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Xt(new Di(2,2),new Sr({name:"BackgroundMaterial",uniforms:hn(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=We.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function c(x,v){x.getRGB(ei,nl(n)),r.buffers.color.setClear(ei.r,ei.g,ei.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,c(o,l)},render:S,addToRenderList:b}}function Nb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=h(null);let s=i,a=!1;function o(K,T,z,N,X){let q=!1;const F=d(N,z,T);s!==F&&(s=F,u(s.object)),q=f(K,N,z,X),q&&_(K,N,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(K,T,z,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(K){return n.bindVertexArray(K)}function p(K){return n.deleteVertexArray(K)}function d(K,T,z){const N=z.wireframe===!0;let X=r[K.id];X===void 0&&(X={},r[K.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let F=q[N];return F===void 0&&(F=h(l()),q[N]=F),F}function h(K){const T=[],z=[],N=[];for(let X=0;X<t;X++)T[X]=0,z[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:N,object:K,attributes:{},index:null}}function f(K,T,z,N){const X=s.attributes,q=T.attributes;let F=0;const Y=z.getAttributes();for(const B in Y)if(Y[B].location>=0){const le=X[B];let Ke=q[B];if(Ke===void 0&&(B==="instanceMatrix"&&K.instanceMatrix&&(Ke=K.instanceMatrix),B==="instanceColor"&&K.instanceColor&&(Ke=K.instanceColor)),le===void 0||le.attribute!==Ke||Ke&&le.data!==Ke.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function _(K,T,z,N){const X={},q=T.attributes;let F=0;const Y=z.getAttributes();for(const B in Y)if(Y[B].location>=0){let le=q[B];le===void 0&&(B==="instanceMatrix"&&K.instanceMatrix&&(le=K.instanceMatrix),B==="instanceColor"&&K.instanceColor&&(le=K.instanceColor));const Ke={};Ke.attribute=le,le&&le.data&&(Ke.data=le.data),X[B]=Ke,F++}s.attributes=X,s.attributesNum=F,s.index=N}function S(){const K=s.newAttributes;for(let T=0,z=K.length;T<z;T++)K[T]=0}function b(K){c(K,0)}function c(K,T){const z=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;z[K]=1,N[K]===0&&(n.enableVertexAttribArray(K),N[K]=1),X[K]!==T&&(n.vertexAttribDivisor(K,T),X[K]=T)}function x(){const K=s.newAttributes,T=s.enabledAttributes;for(let z=0,N=T.length;z<N;z++)T[z]!==K[z]&&(n.disableVertexAttribArray(z),T[z]=0)}function v(K,T,z,N,X,q,F){F===!0?n.vertexAttribIPointer(K,T,z,X,q):n.vertexAttribPointer(K,T,z,N,X,q)}function E(K,T,z,N){S();const X=N.attributes,q=z.getAttributes(),F=T.defaultAttributeValues;for(const Y in q){const B=q[Y];if(B.location>=0){let oe=X[Y];if(oe===void 0&&(Y==="instanceMatrix"&&K.instanceMatrix&&(oe=K.instanceMatrix),Y==="instanceColor"&&K.instanceColor&&(oe=K.instanceColor)),oe!==void 0){const le=oe.normalized,Ke=oe.itemSize,Ne=e.get(oe);if(Ne===void 0)continue;const Ve=Ne.buffer,W=Ne.type,j=Ne.bytesPerElement,de=W===n.INT||W===n.UNSIGNED_INT||oe.gpuType===sa;if(oe.isInterleavedBufferAttribute){const ue=oe.data,De=ue.stride,Se=oe.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<B.locationSize;Oe++)c(B.location+Oe,ue.meshPerAttribute);K.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<B.locationSize;Oe++)b(B.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<B.locationSize;Oe++)v(B.location+Oe,Ke/B.locationSize,W,le,De*j,(Se+Ke/B.locationSize*Oe)*j,de)}else{if(oe.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)c(B.location+ue,oe.meshPerAttribute);K.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ue=0;ue<B.locationSize;ue++)b(B.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ue=0;ue<B.locationSize;ue++)v(B.location+ue,Ke/B.locationSize,W,le,Ke*j,Ke/B.locationSize*ue*j,de)}}else if(F!==void 0){const le=F[Y];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(B.location,le);break;case 3:n.vertexAttrib3fv(B.location,le);break;case 4:n.vertexAttrib4fv(B.location,le);break;default:n.vertexAttrib1fv(B.location,le)}}}}x()}function G(){w();for(const K in r){const T=r[K];for(const z in T){const N=T[z];for(const X in N)p(N[X].object),delete N[X];delete T[z]}delete r[K]}}function y(K){if(r[K.id]===void 0)return;const T=r[K.id];for(const z in T){const N=T[z];for(const X in N)p(N[X].object),delete N[X];delete T[z]}delete r[K.id]}function A(K){for(const T in r){const z=r[T];if(z[K.id]===void 0)continue;const N=z[K.id];for(const X in N)p(N[X].object),delete N[X];delete z[K.id]}}function w(){ee(),a=!0,s!==i&&(s=i,u(s.object))}function ee(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:ee,dispose:G,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:b,disableUnusedAttributes:x}}function Bb(n,e,t){let r;function i(u){r=u}function s(u,p){n.drawArrays(r,u,p),t.update(p,r,1)}function a(u,p,d){d!==0&&(n.drawArraysInstanced(r,u,p,d),t.update(p,r,d))}function o(u,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,p,0,d);let f=0;for(let _=0;_<d;_++)f+=p[_];t.update(f,r,1)}function l(u,p,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u.length;_++)a(u[_],p[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(r,u,0,p,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=p[S];for(let S=0;S<h.length;S++)t.update(_,r,h[S])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fb(n,e,t,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==zt&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==or&&r.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sr&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),c=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=_>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:b,maxAttributes:c,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:G,maxSamples:y}}function zb(n){const e=this;let t=null,r=0,i=!1,s=!1;const a=new Kr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||r!==0||i;return i=h,r=d.length,f},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=p(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,S=d.clipIntersection,b=d.clipShadows,c=n.get(d);if(!i||_===null||_.length===0||s&&!b)s?p(null):u();else{const x=s?0:r,v=x*4;let E=c.clippingState||null;l.value=E,E=p(_,h,v,f);for(let G=0;G!==v;++G)E[G]=t[G];c.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(d,h,f,_){const S=d!==null?d.length:0;let b=null;if(S!==0){if(b=l.value,_!==!0||b===null){const c=f+S*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(b===null||b.length<c)&&(b=new Float32Array(c));for(let v=0,E=f;v!==S;++v,E+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(b,E),b[E+3]=a.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,b}}function Wb(n){let e=new WeakMap;function t(a,o){return o===Ms?a.mapping=un:o===xs&&(a.mapping=cn),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ms||o===xs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new ec(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class Vb extends il{constructor(e=-1,t=1,r=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,a=r+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rn=4,no=[.125,.215,.35,.446,.526,.582],Hr=20,is=new Vb,io=new Xe;let ss=null,as=0,os=0,ls=!1;const Ir=(1+Math.sqrt(5))/2,Qr=1/Ir,so=[new H(-Ir,Qr,0),new H(Ir,Qr,0),new H(-Qr,0,Ir),new H(Qr,0,Ir),new H(0,Ir,-Qr),new H(0,Ir,Qr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,as,os),this._renderer.xr.enabled=ls,e.scissorTest=!1,ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===un||e.mapping===cn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:yn,format:zt,colorSpace:vr,depthBuffer:!1},i=oo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(s)),this._blurMaterial=Xb(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,r,i){const o=new Ht(90,1,t,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,h=p.toneMapping;p.getClearColor(io),p.toneMapping=gr,p.autoClear=!1;const f=new da({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),_=new Xt(new Hn,f);let S=!1;const b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,S=!0):(f.color.copy(io),S=!0);for(let c=0;c<6;c++){const x=c%3;x===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):x===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const v=this._cubeSize;ti(i,x*v,c>2?v:0,v,v),p.setRenderTarget(i),S&&p.render(_,o),p.render(e,o)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=h,p.autoClear=d,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===un||e.mapping===cn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ti(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,is)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=so[(i-s-1)%so.length];this._blur(e,s-1,s,a,o)}t.autoClear=r}_blur(e,t,r,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",s),this._halfBlur(a,e,r,r,i,"longitudinal",s)}_halfBlur(e,t,r,i,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Xt(this._lodPlanes[i],u),h=u.uniforms,f=this._sizeLods[r]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),S=s/_,b=isFinite(s)?1+Math.floor(p*S):Hr;b>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Hr}`);const c=[];let x=0;for(let A=0;A<Hr;++A){const w=A/S,ee=Math.exp(-w*w/2);c.push(ee),A===0?x+=ee:A<b&&(x+=2*ee)}for(let A=0;A<c.length;A++)c[A]=c[A]/x;h.envMap.value=e.texture,h.samples.value=b,h.weights.value=c,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-r;const E=this._sizeLods[i],G=3*E*(i>v-rn?i-v+rn:0),y=4*(this._cubeSize-E);ti(t,G,y,3*E,2*E),l.setRenderTarget(t),l.render(d,is)}}function kb(n){const e=[],t=[],r=[];let i=n;const s=n-rn+1+no.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>n-rn?l=no[a-n+rn-1]:a===0&&(l=0),r.push(l);const u=1/(o-2),p=-u,d=1+u,h=[p,p,d,p,d,d,p,p,d,d,p,d],f=6,_=6,S=3,b=2,c=1,x=new Float32Array(S*_*f),v=new Float32Array(b*_*f),E=new Float32Array(c*_*f);for(let y=0;y<f;y++){const A=y%3*2/3-1,w=y>2?0:-1,ee=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];x.set(ee,S*_*y),v.set(h,b*_*y);const K=[y,y,y,y,y,y];E.set(K,c*_*y)}const G=new Rt;G.setAttribute("position",new Jt(x,S)),G.setAttribute("uv",new Jt(v,b)),G.setAttribute("faceIndex",new Jt(E,c)),e.push(G),i>rn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function oo(n,e,t){const r=new wr(n,e,t);return r.texture.mapping=Mi,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ti(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Xb(n,e,t){const r=new Float32Array(Hr),i=new H(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function lo(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function uo(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Jb(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ms||l===xs,p=l===un||l===cn;if(u||p){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new ao(n)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return u&&f&&f.height>0||p&&f&&i(f)?(t===null&&(t=new ao(n)),d=u?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const u=6;for(let p=0;p<u;p++)o[p]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function Yb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&hi("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function qb(n,e,t,r){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let b=0,c=S.length;b<c;b++)e.remove(S[b])}h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const S=f[_];for(let b=0,c=S.length;b<c;b++)e.update(S[b],n.ARRAY_BUFFER)}}function u(d){const h=[],f=d.index,_=d.attributes.position;let S=0;if(f!==null){const x=f.array;S=f.version;for(let v=0,E=x.length;v<E;v+=3){const G=x[v+0],y=x[v+1],A=x[v+2];h.push(G,y,y,A,A,G)}}else if(_!==void 0){const x=_.array;S=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const G=v+0,y=v+1,A=v+2;h.push(G,y,y,A,A,G)}}else return;const b=new(jo(h)?rl:tl)(h,1);b.version=S;const c=s.get(d);c&&e.remove(c),s.set(d,b)}function p(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:p}}function Zb(n,e,t){let r;function i(h){r=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(r,f,s,h*a),t.update(f,r,1)}function u(h,f,_){_!==0&&(n.drawElementsInstanced(r,f,s,h*a,_),t.update(f,r,_))}function p(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,f,0,s,h,0,_);let b=0;for(let c=0;c<_;c++)b+=f[c];t.update(b,r,1)}function d(h,f,_,S){if(_===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let c=0;c<h.length;c++)u(h[c]/a,f[c],S[c]);else{b.multiDrawElementsInstancedWEBGL(r,f,0,s,h,0,S,0,_);let c=0;for(let x=0;x<_;x++)c+=f[x];for(let x=0;x<S.length;x++)t.update(c,r,S[x])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function jb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function $b(n,e,t){const r=new WeakMap,i=new rt;function s(a,o,l){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=p!==void 0?p.length:0;let h=r.get(o);if(h===void 0||h.count!==d){let K=function(){w.dispose(),r.delete(o),o.removeEventListener("dispose",K)};var f=K;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),b===!0&&(E=3);let G=o.attributes.position.count*E,y=1;G>e.maxTextureSize&&(y=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const A=new Float32Array(G*y*4*d),w=new Qo(A,G,y,d);w.type=sr,w.needsUpdate=!0;const ee=E*4;for(let T=0;T<d;T++){const z=c[T],N=x[T],X=v[T],q=G*y*4*T;for(let F=0;F<z.count;F++){const Y=F*ee;_===!0&&(i.fromBufferAttribute(z,F),A[q+Y+0]=i.x,A[q+Y+1]=i.y,A[q+Y+2]=i.z,A[q+Y+3]=0),S===!0&&(i.fromBufferAttribute(N,F),A[q+Y+4]=i.x,A[q+Y+5]=i.y,A[q+Y+6]=i.z,A[q+Y+7]=0),b===!0&&(i.fromBufferAttribute(X,F),A[q+Y+8]=i.x,A[q+Y+9]=i.y,A[q+Y+10]=i.z,A[q+Y+11]=X.itemSize===4?i.w:1)}}h={count:d,texture:w,size:new Pe(G,y)},r.set(o,h),o.addEventListener("dispose",K)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let b=0;b<u.length;b++)_+=u[b];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Qb(n,e,t,r){let i=new WeakMap;function s(l){const u=r.render.frame,p=l.geometry,d=e.get(l,p);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return d}function a(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class ll extends St{constructor(e,t,r,i,s,a,o,l,u,p=an){if(p!==an&&p!==bn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===an&&(r=Rr),r===void 0&&p===bn&&(r=pn),super(null,i,s,a,o,l,p,r,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ul=new St,co=new ll(1,1),cl=new Qo,pl=new Uu,bl=new sl,po=[],bo=[],ho=new Float32Array(16),fo=new Float32Array(9),Ko=new Float32Array(4);function Kn(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let s=po[i];if(s===void 0&&(s=new Float32Array(i),po[i]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Li(n,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function i1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,r))return;Ko.set(r),n.uniformMatrix2fv(this.addr,!1,Ko),ot(t,r)}}function s1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,r))return;fo.set(r),n.uniformMatrix3fv(this.addr,!1,fo),ot(t,r)}}function a1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,r))return;ho.set(r),n.uniformMatrix4fv(this.addr,!1,ho),ot(t,r)}}function o1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function p1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function f1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?(co.compareFunction=Zo,s=co):s=ul,t.setTexture2D(e||s,i)}function K1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||pl,i)}function m1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||bl,i)}function _1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||cl,i)}function g1(n){switch(n){case 5126:return e1;case 35664:return t1;case 35665:return r1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return p1;case 36294:return b1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return _1}}function T1(n,e){n.uniform1fv(this.addr,e)}function S1(n,e){const t=Kn(e,this.size,2);n.uniform2fv(this.addr,t)}function v1(n,e){const t=Kn(e,this.size,3);n.uniform3fv(this.addr,t)}function M1(n,e){const t=Kn(e,this.size,4);n.uniform4fv(this.addr,t)}function x1(n,e){const t=Kn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function E1(n,e){const t=Kn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A1(n,e){const t=Kn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D1(n,e){n.uniform1iv(this.addr,e)}function L1(n,e){n.uniform2iv(this.addr,e)}function y1(n,e){n.uniform3iv(this.addr,e)}function I1(n,e){n.uniform4iv(this.addr,e)}function P1(n,e){n.uniform1uiv(this.addr,e)}function H1(n,e){n.uniform2uiv(this.addr,e)}function C1(n,e){n.uniform3uiv(this.addr,e)}function O1(n,e){n.uniform4uiv(this.addr,e)}function R1(n,e,t){const r=this.cache,i=e.length,s=Li(t,i);at(r,s)||(n.uniform1iv(this.addr,s),ot(r,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ul,s[a])}function w1(n,e,t){const r=this.cache,i=e.length,s=Li(t,i);at(r,s)||(n.uniform1iv(this.addr,s),ot(r,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pl,s[a])}function G1(n,e,t){const r=this.cache,i=e.length,s=Li(t,i);at(r,s)||(n.uniform1iv(this.addr,s),ot(r,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bl,s[a])}function U1(n,e,t){const r=this.cache,i=e.length,s=Li(t,i);at(r,s)||(n.uniform1iv(this.addr,s),ot(r,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cl,s[a])}function N1(n){switch(n){case 5126:return T1;case 35664:return S1;case 35665:return v1;case 35666:return M1;case 35674:return x1;case 35675:return E1;case 35676:return A1;case 5124:case 35670:return D1;case 35667:case 35671:return L1;case 35668:case 35672:return y1;case 35669:case 35673:return I1;case 5125:return P1;case 36294:return H1;case 36295:return C1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return U1}}class B1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=g1(t.type)}}class F1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],r)}}}const us=/(\w+)(\])?(\[|\.)?/g;function mo(n,e){n.seq.push(e),n.map[e.id]=e}function W1(n,e,t){const r=n.name,i=r.length;for(us.lastIndex=0;;){const s=us.exec(r),a=us.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===i){mo(t,u===void 0?new B1(o,n,e):new F1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new z1(o),mo(t,d)),t=d}}}class di{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);W1(s,a,this)}}setValue(e,t,r,i){const s=this.map[t];s!==void 0&&s.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&r.push(a)}return r}}function _o(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const V1=37297;let k1=0;function X1(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}function J1(n){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(n);let r;switch(e===t?r="":e===mi&&t===Ki?r="LinearDisplayP3ToLinearSRGB":e===Ki&&t===mi&&(r="LinearSRGBToLinearDisplayP3"),n){case vr:case xi:return[r,"LinearTransferOETF"];case Vt:case pa:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function go(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+X1(n.getShaderSource(e),a)}else return i}function Y1(n,e){const t=J1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function q1(n,e){let t;switch(e){case Jl:t="Linear";break;case Yl:t="Reinhard";break;case ql:t="Cineon";break;case Zl:t="ACESFilmic";break;case $l:t="AgX";break;case Ql:t="Neutral";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ri=new H;function Z1(){We.getLuminanceCoefficients(ri);const n=ri.x.toFixed(4),e=ri.y.toFixed(4),t=ri.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xn).join(`
`)}function $1(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Q1(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=n.getActiveAttrib(e,i),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xn(n){return n!==""}function To(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function So(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qs(n){return n.replace(eh,rh)}const th=new Map;function rh(n,e){let t=ye[e];if(t===void 0){const r=th.get(e);if(r!==void 0)t=ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qs(t)}const nh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(n){return n.replace(nh,ih)}function ih(n,e,t,r){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sh(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Go?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function ah(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case un:case cn:e="ENVMAP_TYPE_CUBE";break;case Mi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oh(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cn:e="ENVMAP_MODE_REFRACTION";break}return e}function lh(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case kl:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function uh(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function ch(n,e,t,r){const i=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sh(t),u=ah(t),p=oh(t),d=lh(t),h=uh(t),f=j1(t),_=$1(s),S=i.createProgram();let b,c,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xn).join(`
`),b.length>0&&(b+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xn).join(`
`),c.length>0&&(c+=`
`)):(b=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xn).join(`
`),c=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?ye.tonemapping_pars_fragment:"",t.toneMapping!==gr?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),Z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xn).join(`
`)),a=Qs(a),a=To(a,t),a=So(a,t),o=Qs(o),o=To(o,t),o=So(o,t),a=vo(a),o=vo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,c=["#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=x+b+a,E=x+c+o,G=_o(i,i.VERTEX_SHADER,v),y=_o(i,i.FRAGMENT_SHADER,E);i.attachShader(S,G),i.attachShader(S,y),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function A(T){if(n.debug.checkShaderErrors){const z=i.getProgramInfoLog(S).trim(),N=i.getShaderInfoLog(G).trim(),X=i.getShaderInfoLog(y).trim();let q=!0,F=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,S,G,y);else{const Y=go(i,G,"vertex"),B=go(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+Y+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||X==="")&&(F=!1);F&&(T.diagnostics={runnable:q,programLog:z,vertexShader:{log:N,prefix:b},fragmentShader:{log:X,prefix:c}})}i.deleteShader(G),i.deleteShader(y),w=new di(i,S),ee=Q1(i,S)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let ee;this.getAttributes=function(){return ee===void 0&&A(this),ee};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=i.getProgramParameter(S,V1)),K},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=G,this.fragmentShader=y,this}let ph=0;class bh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hh(e),t.set(e,r)),r}}class hh{constructor(e){this.id=ph++,this.code=e,this.usedTimes=0}}function dh(n,e,t,r,i,s,a){const o=new ha,l=new bh,u=new Set,p=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,f=i.vertexTextures;let _=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(K){return u.add(K),K===0?"uv":`uv${K}`}function c(K,T,z,N,X){const q=N.fog,F=X.geometry,Y=K.isMeshStandardMaterial?N.environment:null,B=(K.isMeshStandardMaterial?t:e).get(K.envMap||Y),oe=B&&B.mapping===Mi?B.image.height:null,le=S[K.type];K.precision!==null&&(_=i.getMaxPrecision(K.precision),_!==K.precision&&console.warn("THREE.WebGLProgram.getParameters:",K.precision,"not supported, using",_,"instead."));const Ke=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ne=Ke!==void 0?Ke.length:0;let Ve=0;F.morphAttributes.position!==void 0&&(Ve=1),F.morphAttributes.normal!==void 0&&(Ve=2),F.morphAttributes.color!==void 0&&(Ve=3);let W,j,de,ue;if(le){const _t=kt[le];W=_t.vertexShader,j=_t.fragmentShader}else W=K.vertexShader,j=K.fragmentShader,l.update(K),de=l.getVertexShaderID(K),ue=l.getFragmentShaderID(K);const De=n.getRenderTarget(),Se=X.isInstancedMesh===!0,Oe=X.isBatchedMesh===!0,Je=!!K.map,Re=!!K.matcap,D=!!B,Mt=!!K.aoMap,He=!!K.lightMap,Ge=!!K.bumpMap,Me=!!K.normalMap,Ze=!!K.displacementMap,Ae=!!K.emissiveMap,M=!!K.metalnessMap,m=!!K.roughnessMap,C=K.anisotropy>0,k=K.clearcoat>0,Z=K.dispersion>0,V=K.iridescence>0,me=K.sheen>0,re=K.transmission>0,ce=C&&!!K.anisotropyMap,Ue=k&&!!K.clearcoatMap,$=k&&!!K.clearcoatNormalMap,pe=k&&!!K.clearcoatRoughnessMap,xe=V&&!!K.iridescenceMap,Ee=V&&!!K.iridescenceThicknessMap,be=me&&!!K.sheenColorMap,Ce=me&&!!K.sheenRoughnessMap,Le=!!K.specularMap,qe=!!K.specularColorMap,L=!!K.specularIntensityMap,se=re&&!!K.transmissionMap,U=re&&!!K.thicknessMap,J=!!K.gradientMap,ne=!!K.alphaMap,ae=K.alphaTest>0,we=!!K.alphaHash,nt=!!K.extensions;let mt=gr;K.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Be={shaderID:le,shaderType:K.type,shaderName:K.name,vertexShader:W,fragmentShader:j,defines:K.defines,customVertexShaderID:de,customFragmentShaderID:ue,isRawShaderMaterial:K.isRawShaderMaterial===!0,glslVersion:K.glslVersion,precision:_,batching:Oe,batchingColor:Oe&&X._colorsTexture!==null,instancing:Se,instancingColor:Se&&X.instanceColor!==null,instancingMorph:Se&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:vr,alphaToCoverage:!!K.alphaToCoverage,map:Je,matcap:Re,envMap:D,envMapMode:D&&B.mapping,envMapCubeUVHeight:oe,aoMap:Mt,lightMap:He,bumpMap:Ge,normalMap:Me,displacementMap:f&&Ze,emissiveMap:Ae,normalMapObjectSpace:Me&&K.normalMapType===iu,normalMapTangentSpace:Me&&K.normalMapType===nu,metalnessMap:M,roughnessMap:m,anisotropy:C,anisotropyMap:ce,clearcoat:k,clearcoatMap:Ue,clearcoatNormalMap:$,clearcoatRoughnessMap:pe,dispersion:Z,iridescence:V,iridescenceMap:xe,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:be,sheenRoughnessMap:Ce,specularMap:Le,specularColorMap:qe,specularIntensityMap:L,transmission:re,transmissionMap:se,thicknessMap:U,gradientMap:J,opaque:K.transparent===!1&&K.blending===sn&&K.alphaToCoverage===!1,alphaMap:ne,alphaTest:ae,alphaHash:we,combine:K.combine,mapUv:Je&&b(K.map.channel),aoMapUv:Mt&&b(K.aoMap.channel),lightMapUv:He&&b(K.lightMap.channel),bumpMapUv:Ge&&b(K.bumpMap.channel),normalMapUv:Me&&b(K.normalMap.channel),displacementMapUv:Ze&&b(K.displacementMap.channel),emissiveMapUv:Ae&&b(K.emissiveMap.channel),metalnessMapUv:M&&b(K.metalnessMap.channel),roughnessMapUv:m&&b(K.roughnessMap.channel),anisotropyMapUv:ce&&b(K.anisotropyMap.channel),clearcoatMapUv:Ue&&b(K.clearcoatMap.channel),clearcoatNormalMapUv:$&&b(K.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&b(K.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&b(K.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(K.iridescenceThicknessMap.channel),sheenColorMapUv:be&&b(K.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(K.sheenRoughnessMap.channel),specularMapUv:Le&&b(K.specularMap.channel),specularColorMapUv:qe&&b(K.specularColorMap.channel),specularIntensityMapUv:L&&b(K.specularIntensityMap.channel),transmissionMapUv:se&&b(K.transmissionMap.channel),thicknessMapUv:U&&b(K.thicknessMap.channel),alphaMapUv:ne&&b(K.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||C),vertexColors:K.vertexColors,vertexAlphas:K.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!F.attributes.uv&&(Je||ne),fog:!!q,useFog:K.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:K.flatShading===!0,sizeAttenuation:K.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:K.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Je&&K.map.isVideoTexture===!0&&We.getTransfer(K.map.colorSpace)===$e,premultipliedAlpha:K.premultipliedAlpha,doubleSided:K.side===nr,flipSided:K.side===Tt,useDepthPacking:K.depthPacking>=0,depthPacking:K.depthPacking||0,index0AttributeName:K.index0AttributeName,extensionClipCullDistance:nt&&K.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&K.extensions.multiDraw===!0||Oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:K.customProgramCacheKey()};return Be.vertexUv1s=u.has(1),Be.vertexUv2s=u.has(2),Be.vertexUv3s=u.has(3),u.clear(),Be}function x(K){const T=[];if(K.shaderID?T.push(K.shaderID):(T.push(K.customVertexShaderID),T.push(K.customFragmentShaderID)),K.defines!==void 0)for(const z in K.defines)T.push(z),T.push(K.defines[z]);return K.isRawShaderMaterial===!1&&(v(T,K),E(T,K),T.push(n.outputColorSpace)),T.push(K.customProgramCacheKey),T.join()}function v(K,T){K.push(T.precision),K.push(T.outputColorSpace),K.push(T.envMapMode),K.push(T.envMapCubeUVHeight),K.push(T.mapUv),K.push(T.alphaMapUv),K.push(T.lightMapUv),K.push(T.aoMapUv),K.push(T.bumpMapUv),K.push(T.normalMapUv),K.push(T.displacementMapUv),K.push(T.emissiveMapUv),K.push(T.metalnessMapUv),K.push(T.roughnessMapUv),K.push(T.anisotropyMapUv),K.push(T.clearcoatMapUv),K.push(T.clearcoatNormalMapUv),K.push(T.clearcoatRoughnessMapUv),K.push(T.iridescenceMapUv),K.push(T.iridescenceThicknessMapUv),K.push(T.sheenColorMapUv),K.push(T.sheenRoughnessMapUv),K.push(T.specularMapUv),K.push(T.specularColorMapUv),K.push(T.specularIntensityMapUv),K.push(T.transmissionMapUv),K.push(T.thicknessMapUv),K.push(T.combine),K.push(T.fogExp2),K.push(T.sizeAttenuation),K.push(T.morphTargetsCount),K.push(T.morphAttributeCount),K.push(T.numDirLights),K.push(T.numPointLights),K.push(T.numSpotLights),K.push(T.numSpotLightMaps),K.push(T.numHemiLights),K.push(T.numRectAreaLights),K.push(T.numDirLightShadows),K.push(T.numPointLightShadows),K.push(T.numSpotLightShadows),K.push(T.numSpotLightShadowsWithMaps),K.push(T.numLightProbes),K.push(T.shadowMapType),K.push(T.toneMapping),K.push(T.numClippingPlanes),K.push(T.numClipIntersection),K.push(T.depthPacking)}function E(K,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),K.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),K.push(o.mask)}function G(K){const T=S[K.type];let z;if(T){const N=kt[T];z=Zu.clone(N.uniforms)}else z=K.uniforms;return z}function y(K,T){let z;for(let N=0,X=p.length;N<X;N++){const q=p[N];if(q.cacheKey===T){z=q,++z.usedTimes;break}}return z===void 0&&(z=new ch(n,T,K,s),p.push(z)),z}function A(K){if(--K.usedTimes===0){const T=p.indexOf(K);p[T]=p[p.length-1],p.pop(),K.destroy()}}function w(K){l.remove(K)}function ee(){l.dispose()}return{getParameters:c,getProgramCacheKey:x,getUniforms:G,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:p,dispose:ee}}function fh(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function r(a){n.delete(a)}function i(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:s}}function Kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eo(){const n=[];let e=0;const t=[],r=[],i=[];function s(){e=0,t.length=0,r.length=0,i.length=0}function a(d,h,f,_,S,b){let c=n[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:S,group:b},n[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=f,c.groupOrder=_,c.renderOrder=d.renderOrder,c.z=S,c.group=b),e++,c}function o(d,h,f,_,S,b){const c=a(d,h,f,_,S,b);f.transmission>0?r.push(c):f.transparent===!0?i.push(c):t.push(c)}function l(d,h,f,_,S,b){const c=a(d,h,f,_,S,b);f.transmission>0?r.unshift(c):f.transparent===!0?i.unshift(c):t.unshift(c)}function u(d,h){t.length>1&&t.sort(d||Kh),r.length>1&&r.sort(h||xo),i.length>1&&i.sort(h||xo)}function p(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:i,init:s,push:o,unshift:l,finish:p,sort:u}}function mh(){let n=new WeakMap;function e(r,i){const s=n.get(r);let a;return s===void 0?(a=new Eo,n.set(r,[a])):i>=s.length?(a=new Eo,s.push(a)):a=s[i],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function _h(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Xe};break;case"SpotLight":t={position:new H,direction:new H,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function gh(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Th=0;function Sh(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vh(n){const e=new _h,t=gh(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const i=new H,s=new et,a=new et;function o(u){let p=0,d=0,h=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let f=0,_=0,S=0,b=0,c=0,x=0,v=0,E=0,G=0,y=0,A=0;u.sort(Sh);for(let ee=0,K=u.length;ee<K;ee++){const T=u[ee],z=T.color,N=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)p+=z.r*N,d+=z.g*N,h+=z.b*N;else if(T.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(T.sh.coefficients[F],N);A++}else if(T.isDirectionalLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,B=t.get(T);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,r.directionalShadow[f]=B,r.directionalShadowMap[f]=q,r.directionalShadowMatrix[f]=T.shadow.matrix,x++}r.directional[f]=F,f++}else if(T.isSpotLight){const F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(z).multiplyScalar(N),F.distance=X,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,r.spot[S]=F;const Y=T.shadow;if(T.map&&(r.spotLightMap[G]=T.map,G++,Y.updateMatrices(T),T.castShadow&&y++),r.spotLightMatrix[S]=Y.matrix,T.castShadow){const B=t.get(T);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,r.spotShadow[S]=B,r.spotShadowMap[S]=q,E++}S++}else if(T.isRectAreaLight){const F=e.get(T);F.color.copy(z).multiplyScalar(N),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),r.rectArea[b]=F,b++}else if(T.isPointLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const Y=T.shadow,B=t.get(T);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,r.pointShadow[_]=B,r.pointShadowMap[_]=q,r.pointShadowMatrix[_]=T.shadow.matrix,v++}r.point[_]=F,_++}else if(T.isHemisphereLight){const F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(N),F.groundColor.copy(T.groundColor).multiplyScalar(N),r.hemi[c]=F,c++}}b>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=d,r.ambient[2]=h;const w=r.hash;(w.directionalLength!==f||w.pointLength!==_||w.spotLength!==S||w.rectAreaLength!==b||w.hemiLength!==c||w.numDirectionalShadows!==x||w.numPointShadows!==v||w.numSpotShadows!==E||w.numSpotMaps!==G||w.numLightProbes!==A)&&(r.directional.length=f,r.spot.length=S,r.rectArea.length=b,r.point.length=_,r.hemi.length=c,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=E+G-y,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=A,w.directionalLength=f,w.pointLength=_,w.spotLength=S,w.rectAreaLength=b,w.hemiLength=c,w.numDirectionalShadows=x,w.numPointShadows=v,w.numSpotShadows=E,w.numSpotMaps=G,w.numLightProbes=A,r.version=Th++)}function l(u,p){let d=0,h=0,f=0,_=0,S=0;const b=p.matrixWorldInverse;for(let c=0,x=u.length;c<x;c++){const v=u[c];if(v.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),d++}else if(v.isSpotLight){const E=r.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(b),f++}else if(v.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),a.identity(),s.copy(v.matrixWorld),s.premultiply(b),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=r.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(b),h++}else if(v.isHemisphereLight){const E=r.hemi[S];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(b),S++}}}return{setup:o,setupView:l,state:r}}function Ao(n){const e=new vh(n),t=[],r=[];function i(p){u.camera=p,t.length=0,r.length=0}function s(p){t.push(p)}function a(p){r.push(p)}function o(){e.setup(t)}function l(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Mh(n){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ao(n),e.set(i,[o])):s>=a.length?(o=new Ao(n),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class xh extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eh extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ah=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dh=`uniform sampler2D shadow_pass;
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
}`;function Lh(n,e,t){let r=new al;const i=new Pe,s=new Pe,a=new rt,o=new xh({depthPacking:ru}),l=new Eh,u={},p=t.maxTextureSize,d={[Tr]:Tt,[Tt]:Tr,[nr]:nr},h=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Ah,fragmentShader:Dh}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new Rt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Xt(_,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let c=this.type;this.render=function(y,A,w){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||y.length===0)return;const ee=n.getRenderTarget(),K=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),z=n.state;z.setBlending(_r),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=c!==rr&&this.type===rr,X=c===rr&&this.type!==rr;for(let q=0,F=y.length;q<F;q++){const Y=y[q],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const oe=B.getFrameExtents();if(i.multiply(oe),s.copy(B.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/oe.x),i.x=s.x*oe.x,B.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/oe.y),i.y=s.y*oe.y,B.mapSize.y=s.y)),B.map===null||N===!0||X===!0){const Ke=this.type!==rr?{minFilter:Ct,magFilter:Ct}:{};B.map!==null&&B.map.dispose(),B.map=new wr(i.x,i.y,Ke),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const le=B.getViewportCount();for(let Ke=0;Ke<le;Ke++){const Ne=B.getViewport(Ke);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),z.viewport(a),B.updateMatrices(Y,Ke),r=B.getFrustum(),E(A,w,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===rr&&x(B,w),B.needsUpdate=!1}c=this.type,b.needsUpdate=!1,n.setRenderTarget(ee,K,T)};function x(y,A){const w=e.update(S);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wr(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,w,h,S,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,w,f,S,null)}function v(y,A,w,ee){let K=null;const T=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)K=T;else if(K=w.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=K.uuid,N=A.uuid;let X=u[z];X===void 0&&(X={},u[z]=X);let q=X[N];q===void 0&&(q=K.clone(),X[N]=q,A.addEventListener("dispose",G)),K=q}if(K.visible=A.visible,K.wireframe=A.wireframe,ee===rr?K.side=A.shadowSide!==null?A.shadowSide:A.side:K.side=A.shadowSide!==null?A.shadowSide:d[A.side],K.alphaMap=A.alphaMap,K.alphaTest=A.alphaTest,K.map=A.map,K.clipShadows=A.clipShadows,K.clippingPlanes=A.clippingPlanes,K.clipIntersection=A.clipIntersection,K.displacementMap=A.displacementMap,K.displacementScale=A.displacementScale,K.displacementBias=A.displacementBias,K.wireframeLinewidth=A.wireframeLinewidth,K.linewidth=A.linewidth,w.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const z=n.properties.get(K);z.light=w}return K}function E(y,A,w,ee,K){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&K===rr)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const N=e.update(y),X=y.material;if(Array.isArray(X)){const q=N.groups;for(let F=0,Y=q.length;F<Y;F++){const B=q[F],oe=X[B.materialIndex];if(oe&&oe.visible){const le=v(y,oe,ee,K);y.onBeforeShadow(n,y,A,w,N,le,B),n.renderBufferDirect(w,null,N,le,y,B),y.onAfterShadow(n,y,A,w,N,le,B)}}}else if(X.visible){const q=v(y,X,ee,K);y.onBeforeShadow(n,y,A,w,N,q,null),n.renderBufferDirect(w,null,N,q,y,null),y.onAfterShadow(n,y,A,w,N,q,null)}}const z=y.children;for(let N=0,X=z.length;N<X;N++)E(z[N],A,w,ee,K)}function G(y){y.target.removeEventListener("dispose",G);for(const w in u){const ee=u[w],K=y.target.uuid;K in ee&&(ee[K].dispose(),delete ee[K])}}}const yh={[Ks]:ms,[_s]:Ss,[gs]:vs,[ln]:Ts,[ms]:Ks,[Ss]:_s,[vs]:gs,[Ts]:ln};function Ih(n){function e(){let L=!1;const se=new rt;let U=null;const J=new rt(0,0,0,0);return{setMask:function(ne){U!==ne&&!L&&(n.colorMask(ne,ne,ne,ne),U=ne)},setLocked:function(ne){L=ne},setClear:function(ne,ae,we,nt,mt){mt===!0&&(ne*=nt,ae*=nt,we*=nt),se.set(ne,ae,we,nt),J.equals(se)===!1&&(n.clearColor(ne,ae,we,nt),J.copy(se))},reset:function(){L=!1,U=null,J.set(-1,0,0,0)}}}function t(){let L=!1,se=!1,U=null,J=null,ne=null;return{setReversed:function(ae){se=ae},setTest:function(ae){ae?de(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ae){U!==ae&&!L&&(n.depthMask(ae),U=ae)},setFunc:function(ae){if(se&&(ae=yh[ae]),J!==ae){switch(ae){case Ks:n.depthFunc(n.NEVER);break;case ms:n.depthFunc(n.ALWAYS);break;case _s:n.depthFunc(n.LESS);break;case ln:n.depthFunc(n.LEQUAL);break;case gs:n.depthFunc(n.EQUAL);break;case Ts:n.depthFunc(n.GEQUAL);break;case Ss:n.depthFunc(n.GREATER);break;case vs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ae}},setLocked:function(ae){L=ae},setClear:function(ae){ne!==ae&&(n.clearDepth(ae),ne=ae)},reset:function(){L=!1,U=null,J=null,ne=null}}}function r(){let L=!1,se=null,U=null,J=null,ne=null,ae=null,we=null,nt=null,mt=null;return{setTest:function(Be){L||(Be?de(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Be){se!==Be&&!L&&(n.stencilMask(Be),se=Be)},setFunc:function(Be,_t,Zt){(U!==Be||J!==_t||ne!==Zt)&&(n.stencilFunc(Be,_t,Zt),U=Be,J=_t,ne=Zt)},setOp:function(Be,_t,Zt){(ae!==Be||we!==_t||nt!==Zt)&&(n.stencilOp(Be,_t,Zt),ae=Be,we=_t,nt=Zt)},setLocked:function(Be){L=Be},setClear:function(Be){mt!==Be&&(n.clearStencil(Be),mt=Be)},reset:function(){L=!1,se=null,U=null,J=null,ne=null,ae=null,we=null,nt=null,mt=null}}}const i=new e,s=new t,a=new r,o=new WeakMap,l=new WeakMap;let u={},p={},d=new WeakMap,h=[],f=null,_=!1,S=null,b=null,c=null,x=null,v=null,E=null,G=null,y=new Xe(0,0,0),A=0,w=!1,ee=null,K=null,T=null,z=null,N=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,F=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=F>=2);let B=null,oe={};const le=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),Ne=new rt().fromArray(le),Ve=new rt().fromArray(Ke);function W(L,se,U,J){const ne=new Uint8Array(4),ae=n.createTexture();n.bindTexture(L,ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<U;we++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(se+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return ae}const j={};j[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(n.DEPTH_TEST),s.setFunc(ln),He(!1),Ge(Ha),de(n.CULL_FACE),D(_r);function de(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ue(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function De(L,se){return p[L]!==se?(n.bindFramebuffer(L,se),p[L]=se,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Se(L,se){let U=h,J=!1;if(L){U=d.get(se),U===void 0&&(U=[],d.set(se,U));const ne=L.textures;if(U.length!==ne.length||U[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,we=ne.length;ae<we;ae++)U[ae]=n.COLOR_ATTACHMENT0+ae;U.length=ne.length,J=!0}}else U[0]!==n.BACK&&(U[0]=n.BACK,J=!0);J&&n.drawBuffers(U)}function Oe(L){return f!==L?(n.useProgram(L),f=L,!0):!1}const Je={[Pr]:n.FUNC_ADD,[Ll]:n.FUNC_SUBTRACT,[yl]:n.FUNC_REVERSE_SUBTRACT};Je[Il]=n.MIN,Je[Pl]=n.MAX;const Re={[Hl]:n.ZERO,[Cl]:n.ONE,[Ol]:n.SRC_COLOR,[ds]:n.SRC_ALPHA,[Bl]:n.SRC_ALPHA_SATURATE,[Ul]:n.DST_COLOR,[wl]:n.DST_ALPHA,[Rl]:n.ONE_MINUS_SRC_COLOR,[fs]:n.ONE_MINUS_SRC_ALPHA,[Nl]:n.ONE_MINUS_DST_COLOR,[Gl]:n.ONE_MINUS_DST_ALPHA,[Fl]:n.CONSTANT_COLOR,[zl]:n.ONE_MINUS_CONSTANT_COLOR,[Wl]:n.CONSTANT_ALPHA,[Vl]:n.ONE_MINUS_CONSTANT_ALPHA};function D(L,se,U,J,ne,ae,we,nt,mt,Be){if(L===_r){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(de(n.BLEND),_=!0),L!==Dl){if(L!==S||Be!==w){if((b!==Pr||v!==Pr)&&(n.blendEquation(n.FUNC_ADD),b=Pr,v=Pr),Be)switch(L){case sn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFunc(n.ONE,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ra:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ra:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}c=null,x=null,E=null,G=null,y.set(0,0,0),A=0,S=L,w=Be}return}ne=ne||se,ae=ae||U,we=we||J,(se!==b||ne!==v)&&(n.blendEquationSeparate(Je[se],Je[ne]),b=se,v=ne),(U!==c||J!==x||ae!==E||we!==G)&&(n.blendFuncSeparate(Re[U],Re[J],Re[ae],Re[we]),c=U,x=J,E=ae,G=we),(nt.equals(y)===!1||mt!==A)&&(n.blendColor(nt.r,nt.g,nt.b,mt),y.copy(nt),A=mt),S=L,w=!1}function Mt(L,se){L.side===nr?ue(n.CULL_FACE):de(n.CULL_FACE);let U=L.side===Tt;se&&(U=!U),He(U),L.blending===sn&&L.transparent===!1?D(_r):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){ee!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),ee=L)}function Ge(L){L!==xl?(de(n.CULL_FACE),L!==K&&(L===Ha?n.cullFace(n.BACK):L===El?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),K=L}function Me(L){L!==T&&(q&&n.lineWidth(L),T=L)}function Ze(L,se,U){L?(de(n.POLYGON_OFFSET_FILL),(z!==se||N!==U)&&(n.polygonOffset(se,U),z=se,N=U)):ue(n.POLYGON_OFFSET_FILL)}function Ae(L){L?de(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function M(L){L===void 0&&(L=n.TEXTURE0+X-1),B!==L&&(n.activeTexture(L),B=L)}function m(L,se,U){U===void 0&&(B===null?U=n.TEXTURE0+X-1:U=B);let J=oe[U];J===void 0&&(J={type:void 0,texture:void 0},oe[U]=J),(J.type!==L||J.texture!==se)&&(B!==U&&(n.activeTexture(U),B=U),n.bindTexture(L,se||j[L]),J.type=L,J.texture=se)}function C(){const L=oe[B];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){Ne.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function be(L){Ve.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Ce(L,se){let U=l.get(se);U===void 0&&(U=new WeakMap,l.set(se,U));let J=U.get(L);J===void 0&&(J=n.getUniformBlockIndex(se,L.name),U.set(L,J))}function Le(L,se){const J=l.get(se).get(L);o.get(se)!==J&&(n.uniformBlockBinding(se,J,L.__bindingPointIndex),o.set(se,J))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},B=null,oe={},p={},d=new WeakMap,h=[],f=null,_=!1,S=null,b=null,c=null,x=null,v=null,E=null,G=null,y=new Xe(0,0,0),A=0,w=!1,ee=null,K=null,T=null,z=null,N=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:de,disable:ue,bindFramebuffer:De,drawBuffers:Se,useProgram:Oe,setBlending:D,setMaterial:Mt,setFlipSided:He,setCullFace:Ge,setLineWidth:Me,setPolygonOffset:Ze,setScissorTest:Ae,activeTexture:M,bindTexture:m,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:Z,texImage2D:pe,texImage3D:xe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:$,texSubImage2D:V,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:Ee,viewport:be,reset:qe}}function Do(n,e,t,r){const i=Ph(r);switch(t){case Wo:return n*e;case ko:return n*e;case Xo:return n*e*2;case Jo:return n*e/i.components*i.byteLength;case la:return n*e/i.components*i.byteLength;case Yo:return n*e*2/i.components*i.byteLength;case ua:return n*e*2/i.components*i.byteLength;case Vo:return n*e*3/i.components*i.byteLength;case zt:return n*e*4/i.components*i.byteLength;case ca:return n*e*4/i.components*i.byteLength;case li:case ui:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ci:case pi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ls:case Is:return Math.max(n,16)*Math.max(e,8)/4;case Ds:case ys:return Math.max(n,8)*Math.max(e,8)/2;case Ps:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ws:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Us:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ks:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Js:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bi:case Ys:case qs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qo:case Zs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case js:case $s:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ph(n){switch(n){case or:case Bo:return{byteLength:1,components:1};case Dn:case Fo:case yn:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case Rr:case sa:case sr:return{byteLength:4,components:1};case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hh(n,e,t,r,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,p=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,m){return f?new OffscreenCanvas(M,m):gi("canvas")}function S(M,m,C){let k=1;const Z=Ae(M);if((Z.width>C||Z.height>C)&&(k=C/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(k*Z.width),me=Math.floor(k*Z.height);d===void 0&&(d=_(V,me));const re=m?_(V,me):d;return re.width=V,re.height=me,re.getContext("2d").drawImage(M,0,0,V,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+me+")."),re}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function b(M){return M.generateMipmaps&&M.minFilter!==Ct&&M.minFilter!==Bt}function c(M){n.generateMipmap(M)}function x(M,m,C,k,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=m;if(m===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),m===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),m===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),m===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),m===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),m===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),m===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),m===n.RGBA){const me=Z?fi:We.getTransfer(k);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=me===$e?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(M,m){let C;return M?m===null||m===Rr||m===pn?C=n.DEPTH24_STENCIL8:m===sr?C=n.DEPTH32F_STENCIL8:m===Dn&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Rr||m===pn?C=n.DEPTH_COMPONENT24:m===sr?C=n.DEPTH_COMPONENT32F:m===Dn&&(C=n.DEPTH_COMPONENT16),C}function E(M,m){return b(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Bt?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function G(M){const m=M.target;m.removeEventListener("dispose",G),A(m),m.isVideoTexture&&p.delete(m)}function y(M){const m=M.target;m.removeEventListener("dispose",y),ee(m)}function A(M){const m=r.get(M);if(m.__webglInit===void 0)return;const C=M.source,k=h.get(C);if(k){const Z=k[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(M),Object.keys(k).length===0&&h.delete(C)}r.remove(M)}function w(M){const m=r.get(M);n.deleteTexture(m.__webglTexture);const C=M.source,k=h.get(C);delete k[m.__cacheKey],a.memory.textures--}function ee(M){const m=r.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let Z=0;Z<m.__webglFramebuffer[k].length;Z++)n.deleteFramebuffer(m.__webglFramebuffer[k][Z]);else n.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)n.deleteFramebuffer(m.__webglFramebuffer[k]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const C=M.textures;for(let k=0,Z=C.length;k<Z;k++){const V=r.get(C[k]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),r.remove(C[k])}r.remove(M)}let K=0;function T(){K=0}function z(){const M=K;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),K+=1,M}function N(M){const m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function X(M,m){const C=r.get(M);if(M.isVideoTexture&&Me(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(C,M,m);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+m)}function q(M,m){const C=r.get(M);if(M.version>0&&C.__version!==M.version){Ve(C,M,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+m)}function F(M,m){const C=r.get(M);if(M.version>0&&C.__version!==M.version){Ve(C,M,m);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+m)}function Y(M,m){const C=r.get(M);if(M.version>0&&C.__version!==M.version){W(C,M,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+m)}const B={[Es]:n.REPEAT,[Cr]:n.CLAMP_TO_EDGE,[As]:n.MIRRORED_REPEAT},oe={[Ct]:n.NEAREST,[eu]:n.NEAREST_MIPMAP_NEAREST,[wn]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[wi]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},le={[su]:n.NEVER,[pu]:n.ALWAYS,[au]:n.LESS,[Zo]:n.LEQUAL,[ou]:n.EQUAL,[cu]:n.GEQUAL,[lu]:n.GREATER,[uu]:n.NOTEQUAL};function Ke(M,m){if(m.type===sr&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Bt||m.magFilter===wi||m.magFilter===wn||m.magFilter===Or||m.minFilter===Bt||m.minFilter===wi||m.minFilter===wn||m.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,B[m.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,B[m.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,B[m.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,oe[m.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,oe[m.minFilter]),m.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,le[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ct||m.minFilter!==wn&&m.minFilter!==Or||m.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||r.get(m).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,i.getMaxAnisotropy())),r.get(m).__currentAnisotropy=m.anisotropy}}}function Ne(M,m){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",G));const k=m.source;let Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));const V=N(m);if(V!==M.__cacheKey){Z[V]===void 0&&(Z[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),Z[V].usedTimes++;const me=Z[M.__cacheKey];me!==void 0&&(Z[M.__cacheKey].usedTimes--,me.usedTimes===0&&w(m)),M.__cacheKey=V,M.__webglTexture=Z[V].texture}return C}function Ve(M,m,C){let k=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=n.TEXTURE_3D);const Z=Ne(M,m),V=m.source;t.bindTexture(k,M.__webglTexture,n.TEXTURE0+C);const me=r.get(V);if(V.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+C);const re=We.getPrimaries(We.workingColorSpace),ce=m.colorSpace===mr?null:We.getPrimaries(m.colorSpace),Ue=m.colorSpace===mr||re===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let $=S(m.image,!1,i.maxTextureSize);$=Ze(m,$);const pe=s.convert(m.format,m.colorSpace),xe=s.convert(m.type);let Ee=x(m.internalFormat,pe,xe,m.colorSpace,m.isVideoTexture);Ke(k,m);let be;const Ce=m.mipmaps,Le=m.isVideoTexture!==!0,qe=me.__version===void 0||Z===!0,L=V.dataReady,se=E(m,$);if(m.isDepthTexture)Ee=v(m.format===bn,m.type),qe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Ee,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,pe,xe,null));else if(m.isDataTexture)if(Ce.length>0){Le&&qe&&t.texStorage2D(n.TEXTURE_2D,se,Ee,Ce[0].width,Ce[0].height);for(let U=0,J=Ce.length;U<J;U++)be=Ce[U],Le?L&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,be.width,be.height,pe,xe,be.data):t.texImage2D(n.TEXTURE_2D,U,Ee,be.width,be.height,0,pe,xe,be.data);m.generateMipmaps=!1}else Le?(qe&&t.texStorage2D(n.TEXTURE_2D,se,Ee,$.width,$.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,pe,xe,$.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,$.width,$.height,0,pe,xe,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Le&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ee,Ce[0].width,Ce[0].height,$.depth);for(let U=0,J=Ce.length;U<J;U++)if(be=Ce[U],m.format!==zt)if(pe!==null)if(Le){if(L)if(m.layerUpdates.size>0){const ne=Do(be.width,be.height,m.format,m.type);for(const ae of m.layerUpdates){const we=be.data.subarray(ae*ne/be.data.BYTES_PER_ELEMENT,(ae+1)*ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,U,0,0,ae,be.width,be.height,1,pe,we,0,0)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,$.depth,pe,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,U,Ee,be.width,be.height,$.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,$.depth,pe,xe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,U,Ee,be.width,be.height,$.depth,0,pe,xe,be.data)}else{Le&&qe&&t.texStorage2D(n.TEXTURE_2D,se,Ee,Ce[0].width,Ce[0].height);for(let U=0,J=Ce.length;U<J;U++)be=Ce[U],m.format!==zt?pe!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,U,0,0,be.width,be.height,pe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,U,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,be.width,be.height,pe,xe,be.data):t.texImage2D(n.TEXTURE_2D,U,Ee,be.width,be.height,0,pe,xe,be.data)}else if(m.isDataArrayTexture)if(Le){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ee,$.width,$.height,$.depth),L)if(m.layerUpdates.size>0){const U=Do($.width,$.height,m.format,m.type);for(const J of m.layerUpdates){const ne=$.data.subarray(J*U/$.data.BYTES_PER_ELEMENT,(J+1)*U/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,pe,xe,ne)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,pe,xe,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,$.width,$.height,$.depth,0,pe,xe,$.data);else if(m.isData3DTexture)Le?(qe&&t.texStorage3D(n.TEXTURE_3D,se,Ee,$.width,$.height,$.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,pe,xe,$.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,$.width,$.height,$.depth,0,pe,xe,$.data);else if(m.isFramebufferTexture){if(qe)if(Le)t.texStorage2D(n.TEXTURE_2D,se,Ee,$.width,$.height);else{let U=$.width,J=$.height;for(let ne=0;ne<se;ne++)t.texImage2D(n.TEXTURE_2D,ne,Ee,U,J,0,pe,xe,null),U>>=1,J>>=1}}else if(Ce.length>0){if(Le&&qe){const U=Ae(Ce[0]);t.texStorage2D(n.TEXTURE_2D,se,Ee,U.width,U.height)}for(let U=0,J=Ce.length;U<J;U++)be=Ce[U],Le?L&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,pe,xe,be):t.texImage2D(n.TEXTURE_2D,U,Ee,pe,xe,be);m.generateMipmaps=!1}else if(Le){if(qe){const U=Ae($);t.texStorage2D(n.TEXTURE_2D,se,Ee,U.width,U.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,xe,$)}else t.texImage2D(n.TEXTURE_2D,0,Ee,pe,xe,$);b(m)&&c(k),me.__version=V.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function W(M,m,C){if(m.image.length!==6)return;const k=Ne(M,m),Z=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const V=r.get(Z);if(Z.version!==V.__version||k===!0){t.activeTexture(n.TEXTURE0+C);const me=We.getPrimaries(We.workingColorSpace),re=m.colorSpace===mr?null:We.getPrimaries(m.colorSpace),ce=m.colorSpace===mr||me===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ue=m.isCompressedTexture||m.image[0].isCompressedTexture,$=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Ue&&!$?pe[J]=S(m.image[J],!0,i.maxCubemapSize):pe[J]=$?m.image[J].image:m.image[J],pe[J]=Ze(m,pe[J]);const xe=pe[0],Ee=s.convert(m.format,m.colorSpace),be=s.convert(m.type),Ce=x(m.internalFormat,Ee,be,m.colorSpace),Le=m.isVideoTexture!==!0,qe=V.__version===void 0||k===!0,L=Z.dataReady;let se=E(m,xe);Ke(n.TEXTURE_CUBE_MAP,m);let U;if(Ue){Le&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ce,xe.width,xe.height);for(let J=0;J<6;J++){U=pe[J].mipmaps;for(let ne=0;ne<U.length;ne++){const ae=U[ne];m.format!==zt?Ee!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,ae.width,ae.height,Ee,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,Ce,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,ae.width,ae.height,Ee,be,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,Ce,ae.width,ae.height,0,Ee,be,ae.data)}}}else{if(U=m.mipmaps,Le&&qe){U.length>0&&se++;const J=Ae(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ce,J.width,J.height)}for(let J=0;J<6;J++)if($){Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Ee,be,pe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,pe[J].width,pe[J].height,0,Ee,be,pe[J].data);for(let ne=0;ne<U.length;ne++){const we=U[ne].image[J].image;Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,we.width,we.height,Ee,be,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,Ce,we.width,we.height,0,Ee,be,we.data)}}else{Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,be,pe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Ee,be,pe[J]);for(let ne=0;ne<U.length;ne++){const ae=U[ne];Le?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,Ee,be,ae.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,Ce,Ee,be,ae.image[J])}}}b(m)&&c(n.TEXTURE_CUBE_MAP),V.__version=Z.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function j(M,m,C,k,Z,V){const me=s.convert(C.format,C.colorSpace),re=s.convert(C.type),ce=x(C.internalFormat,me,re,C.colorSpace);if(!r.get(m).__hasExternalTextures){const $=Math.max(1,m.width>>V),pe=Math.max(1,m.height>>V);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,V,ce,$,pe,m.depth,0,me,re,null):t.texImage2D(Z,V,ce,$,pe,0,me,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Ge(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Z,r.get(C).__webglTexture,0,He(m)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Z,r.get(C).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(M,m,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),m.depthBuffer){const k=m.depthTexture,Z=k&&k.isDepthTexture?k.type:null,V=v(m.stencilBuffer,Z),me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=He(m);Ge(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,V,m.width,m.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,V,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,V,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,M)}else{const k=m.textures;for(let Z=0;Z<k.length;Z++){const V=k[Z],me=s.convert(V.format,V.colorSpace),re=s.convert(V.type),ce=x(V.internalFormat,me,re,V.colorSpace),Ue=He(m);C&&Ge(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ce,m.width,m.height):Ge(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ce,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,ce,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(M,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(m.depthTexture).__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X(m.depthTexture,0);const k=r.get(m.depthTexture).__webglTexture,Z=He(m);if(m.depthTexture.format===an)Ge(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(m.depthTexture.format===bn)Ge(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function De(M){const m=r.get(M),C=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){const k=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=k}if(M.depthTexture&&!m.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");ue(m.__webglFramebuffer,M)}else if(C){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=n.createRenderbuffer(),de(m.__webglDepthbuffer[k],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),de(m.__webglDepthbuffer,M,!1);else{const k=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(M,m,C){const k=r.get(M);m!==void 0&&j(k.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&De(M)}function Oe(M){const m=M.texture,C=r.get(M),k=r.get(m);M.addEventListener("dispose",y);const Z=M.textures,V=M.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=m.version,a.memory.textures++),V){C.__webglFramebuffer=[];for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer[re]=[];for(let ce=0;ce<m.mipmaps.length;ce++)C.__webglFramebuffer[re][ce]=n.createFramebuffer()}else C.__webglFramebuffer[re]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer=[];for(let re=0;re<m.mipmaps.length;re++)C.__webglFramebuffer[re]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(me)for(let re=0,ce=Z.length;re<ce;re++){const Ue=r.get(Z[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Ge(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const ce=Z[re];C.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[re]);const Ue=s.convert(ce.format,ce.colorSpace),$=s.convert(ce.type),pe=x(ce.internalFormat,Ue,$,ce.colorSpace,M.isXRRenderTarget===!0),xe=He(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,C.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),de(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,m);for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0)for(let ce=0;ce<m.mipmaps.length;ce++)j(C.__webglFramebuffer[re][ce],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else j(C.__webglFramebuffer[re],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);b(m)&&c(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let re=0,ce=Z.length;re<ce;re++){const Ue=Z[re],$=r.get(Ue);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),Ke(n.TEXTURE_2D,Ue),j(C.__webglFramebuffer,M,Ue,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),b(Ue)&&c(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(re=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,k.__webglTexture),Ke(re,m),m.mipmaps&&m.mipmaps.length>0)for(let ce=0;ce<m.mipmaps.length;ce++)j(C.__webglFramebuffer[ce],M,m,n.COLOR_ATTACHMENT0,re,ce);else j(C.__webglFramebuffer,M,m,n.COLOR_ATTACHMENT0,re,0);b(m)&&c(re),t.unbindTexture()}M.depthBuffer&&De(M)}function Je(M){const m=M.textures;for(let C=0,k=m.length;C<k;C++){const Z=m[C];if(b(Z)){const V=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=r.get(Z).__webglTexture;t.bindTexture(V,me),c(V),t.unbindTexture()}}}const Re=[],D=[];function Mt(M){if(M.samples>0){if(Ge(M)===!1){const m=M.textures,C=M.width,k=M.height;let Z=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=r.get(M),re=m.length>1;if(re)for(let ce=0;ce<m.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ce=0;ce<m.length;ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ce]);const Ue=r.get(m[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,Z,n.NEAREST),l===!0&&(Re.length=0,D.length=0,Re.push(n.COLOR_ATTACHMENT0+ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Re.push(V),D.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<m.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,me.__webglColorRenderbuffer[ce]);const Ue=r.get(m[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const m=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function He(M){return Math.min(i.maxSamples,M.samples)}function Ge(M){const m=r.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Me(M){const m=a.render.frame;p.get(M)!==m&&(p.set(M,m),M.update())}function Ze(M,m){const C=M.colorSpace,k=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==vr&&C!==mr&&(We.getTransfer(C)===$e?(k!==zt||Z!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),m}function Ae(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=Se,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ge}function Ch(n,e){function t(r,i=mr){let s;const a=We.getTransfer(i);if(r===or)return n.UNSIGNED_BYTE;if(r===aa)return n.UNSIGNED_SHORT_4_4_4_4;if(r===oa)return n.UNSIGNED_SHORT_5_5_5_1;if(r===zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Bo)return n.BYTE;if(r===Fo)return n.SHORT;if(r===Dn)return n.UNSIGNED_SHORT;if(r===sa)return n.INT;if(r===Rr)return n.UNSIGNED_INT;if(r===sr)return n.FLOAT;if(r===yn)return n.HALF_FLOAT;if(r===Wo)return n.ALPHA;if(r===Vo)return n.RGB;if(r===zt)return n.RGBA;if(r===ko)return n.LUMINANCE;if(r===Xo)return n.LUMINANCE_ALPHA;if(r===an)return n.DEPTH_COMPONENT;if(r===bn)return n.DEPTH_STENCIL;if(r===Jo)return n.RED;if(r===la)return n.RED_INTEGER;if(r===Yo)return n.RG;if(r===ua)return n.RG_INTEGER;if(r===ca)return n.RGBA_INTEGER;if(r===li||r===ui||r===ci||r===pi)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===li)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ui)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ci)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===li)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ui)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ci)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pi)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ds||r===Ls||r===ys||r===Is)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ds)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ls)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Is)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ps||r===Hs||r===Cs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ps||r===Hs)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Cs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Os||r===Rs||r===ws||r===Gs||r===Us||r===Ns||r===Bs||r===Fs||r===zs||r===Ws||r===Vs||r===ks||r===Xs||r===Js)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Os)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ws)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Us)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ns)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ws)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ks)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Js)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bi||r===Ys||r===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===bi)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ys)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qo||r===Zs||r===js||r===$s)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===bi)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Zs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$s)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pn?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class Oh extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ni extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rh={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const b=t.getJointPose(S,r),c=this._getHandJoint(u,S);b!==null&&(c.matrix.fromArray(b.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=b.radius),c.visible=b!==null}const p=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=p.position.distanceTo(d.position),f=.02,_=.005;u.inputState.pinching&&h>f+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ni;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const wh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gh=`
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

}`;class Uh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new St,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Sr({vertexShader:wh,fragmentShader:Gh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Di(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nh extends Ur{constructor(e,t){super();const r=this;let i=null,s=1,a=null,o="local-floor",l=1,u=null,p=null,d=null,h=null,f=null,_=null;const S=new Uh,b=t.getContextAttributes();let c=null,x=null;const v=[],E=[],G=new Pe;let y=null;const A=new Ht;A.layers.enable(1),A.viewport=new rt;const w=new Ht;w.layers.enable(2),w.viewport=new rt;const ee=[A,w],K=new Oh;K.layers.enable(1),K.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=v[W];return j===void 0&&(j=new cs,v[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=v[W];return j===void 0&&(j=new cs,v[W]=j),j.getGripSpace()},this.getHand=function(W){let j=v[W];return j===void 0&&(j=new cs,v[W]=j),j.getHandSpace()};function N(W){const j=E.indexOf(W.inputSource);if(j===-1)return;const de=v[j];de!==void 0&&(de.update(W.inputSource,W.frame,u||a),de.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let W=0;W<v.length;W++){const j=E[W];j!==null&&(E[W]=null,v[W].disconnect(j))}T=null,z=null,S.reset(),e.setRenderTarget(c),f=null,h=null,d=null,i=null,x=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(y),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(c=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(G),i.renderState.layers===void 0){const j={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wr(f.framebufferWidth,f.framebufferHeight,{format:zt,type:or,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let j=null,de=null,ue=null;b.depth&&(ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=b.stencil?bn:an,de=b.stencil?pn:Rr);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(De),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new wr(h.textureWidth,h.textureHeight,{format:zt,type:or,depthTexture:new ll(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(W){for(let j=0;j<W.removed.length;j++){const de=W.removed[j],ue=E.indexOf(de);ue>=0&&(E[ue]=null,v[ue].disconnect(de))}for(let j=0;j<W.added.length;j++){const de=W.added[j];let ue=E.indexOf(de);if(ue===-1){for(let Se=0;Se<v.length;Se++)if(Se>=E.length){E.push(de),ue=Se;break}else if(E[Se]===null){E[Se]=de,ue=Se;break}if(ue===-1)break}const De=v[ue];De&&De.connect(de)}}const F=new H,Y=new H;function B(W,j,de){F.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ue=F.distanceTo(Y),De=j.projectionMatrix.elements,Se=de.projectionMatrix.elements,Oe=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),Re=(De[9]+1)/De[5],D=(De[9]-1)/De[5],Mt=(De[8]-1)/De[0],He=(Se[8]+1)/Se[0],Ge=Oe*Mt,Me=Oe*He,Ze=ue/(-Mt+He),Ae=Ze*-Mt;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ae),W.translateZ(Ze),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),De[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const M=Oe+Ze,m=Je+Ze,C=Ge-Ae,k=Me+(ue-Ae),Z=Re*Je/m*M,V=D*Je/m*M;W.projectionMatrix.makePerspective(C,k,Z,V,M,m),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let j=W.near,de=W.far;S.texture!==null&&(S.depthNear>0&&(j=S.depthNear),S.depthFar>0&&(de=S.depthFar)),K.near=w.near=A.near=j,K.far=w.far=A.far=de,(T!==K.near||z!==K.far)&&(i.updateRenderState({depthNear:K.near,depthFar:K.far}),T=K.near,z=K.far);const ue=W.parent,De=K.cameras;oe(K,ue);for(let Se=0;Se<De.length;Se++)oe(De[Se],ue);De.length===2?B(K,A,w):K.projectionMatrix.copy(A.projectionMatrix),le(W,K,ue)};function le(W,j,de){de===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ln*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)};let Ke=null;function Ne(W,j){if(p=j.getViewerPose(u||a),_=j,p!==null){const de=p.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ue=!1;de.length!==K.cameras.length&&(K.cameras.length=0,ue=!0);for(let Se=0;Se<de.length;Se++){const Oe=de[Se];let Je=null;if(f!==null)Je=f.getViewport(Oe);else{const D=d.getViewSubImage(h,Oe);Je=D.viewport,Se===0&&(e.setRenderTargetTextures(x,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let Re=ee[Se];Re===void 0&&(Re=new Ht,Re.layers.enable(Se),Re.viewport=new rt,ee[Se]=Re),Re.matrix.fromArray(Oe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Oe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Je.x,Je.y,Je.width,Je.height),Se===0&&(K.matrix.copy(Re.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ue===!0&&K.cameras.push(Re)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const Se=d.getDepthInformation(de[0]);Se&&Se.isValid&&Se.texture&&S.init(e,Se,i.renderState)}}for(let de=0;de<v.length;de++){const ue=E[de],De=v[de];ue!==null&&De!==void 0&&De.update(ue,j,u||a)}Ke&&Ke(W,j),j.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ve=new ol;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(W){Ke=W},this.dispose=function(){}}}const yr=new lr,Bh=new et;function Fh(n,e){function t(b,c){b.matrixAutoUpdate===!0&&b.updateMatrix(),c.value.copy(b.matrix)}function r(b,c){c.color.getRGB(b.fogColor.value,nl(n)),c.isFog?(b.fogNear.value=c.near,b.fogFar.value=c.far):c.isFogExp2&&(b.fogDensity.value=c.density)}function i(b,c,x,v,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(b,c):c.isMeshToonMaterial?(s(b,c),d(b,c)):c.isMeshPhongMaterial?(s(b,c),p(b,c)):c.isMeshStandardMaterial?(s(b,c),h(b,c),c.isMeshPhysicalMaterial&&f(b,c,E)):c.isMeshMatcapMaterial?(s(b,c),_(b,c)):c.isMeshDepthMaterial?s(b,c):c.isMeshDistanceMaterial?(s(b,c),S(b,c)):c.isMeshNormalMaterial?s(b,c):c.isLineBasicMaterial?(a(b,c),c.isLineDashedMaterial&&o(b,c)):c.isPointsMaterial?l(b,c,x,v):c.isSpriteMaterial?u(b,c):c.isShadowMaterial?(b.color.value.copy(c.color),b.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(b,c){b.opacity.value=c.opacity,c.color&&b.diffuse.value.copy(c.color),c.emissive&&b.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(b.map.value=c.map,t(c.map,b.mapTransform)),c.alphaMap&&(b.alphaMap.value=c.alphaMap,t(c.alphaMap,b.alphaMapTransform)),c.bumpMap&&(b.bumpMap.value=c.bumpMap,t(c.bumpMap,b.bumpMapTransform),b.bumpScale.value=c.bumpScale,c.side===Tt&&(b.bumpScale.value*=-1)),c.normalMap&&(b.normalMap.value=c.normalMap,t(c.normalMap,b.normalMapTransform),b.normalScale.value.copy(c.normalScale),c.side===Tt&&b.normalScale.value.negate()),c.displacementMap&&(b.displacementMap.value=c.displacementMap,t(c.displacementMap,b.displacementMapTransform),b.displacementScale.value=c.displacementScale,b.displacementBias.value=c.displacementBias),c.emissiveMap&&(b.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,b.emissiveMapTransform)),c.specularMap&&(b.specularMap.value=c.specularMap,t(c.specularMap,b.specularMapTransform)),c.alphaTest>0&&(b.alphaTest.value=c.alphaTest);const x=e.get(c),v=x.envMap,E=x.envMapRotation;v&&(b.envMap.value=v,yr.copy(E),yr.x*=-1,yr.y*=-1,yr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),b.envMapRotation.value.setFromMatrix4(Bh.makeRotationFromEuler(yr)),b.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=c.reflectivity,b.ior.value=c.ior,b.refractionRatio.value=c.refractionRatio),c.lightMap&&(b.lightMap.value=c.lightMap,b.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,b.lightMapTransform)),c.aoMap&&(b.aoMap.value=c.aoMap,b.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,b.aoMapTransform))}function a(b,c){b.diffuse.value.copy(c.color),b.opacity.value=c.opacity,c.map&&(b.map.value=c.map,t(c.map,b.mapTransform))}function o(b,c){b.dashSize.value=c.dashSize,b.totalSize.value=c.dashSize+c.gapSize,b.scale.value=c.scale}function l(b,c,x,v){b.diffuse.value.copy(c.color),b.opacity.value=c.opacity,b.size.value=c.size*x,b.scale.value=v*.5,c.map&&(b.map.value=c.map,t(c.map,b.uvTransform)),c.alphaMap&&(b.alphaMap.value=c.alphaMap,t(c.alphaMap,b.alphaMapTransform)),c.alphaTest>0&&(b.alphaTest.value=c.alphaTest)}function u(b,c){b.diffuse.value.copy(c.color),b.opacity.value=c.opacity,b.rotation.value=c.rotation,c.map&&(b.map.value=c.map,t(c.map,b.mapTransform)),c.alphaMap&&(b.alphaMap.value=c.alphaMap,t(c.alphaMap,b.alphaMapTransform)),c.alphaTest>0&&(b.alphaTest.value=c.alphaTest)}function p(b,c){b.specular.value.copy(c.specular),b.shininess.value=Math.max(c.shininess,1e-4)}function d(b,c){c.gradientMap&&(b.gradientMap.value=c.gradientMap)}function h(b,c){b.metalness.value=c.metalness,c.metalnessMap&&(b.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,b.metalnessMapTransform)),b.roughness.value=c.roughness,c.roughnessMap&&(b.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,b.roughnessMapTransform)),c.envMap&&(b.envMapIntensity.value=c.envMapIntensity)}function f(b,c,x){b.ior.value=c.ior,c.sheen>0&&(b.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),b.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(b.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,b.sheenColorMapTransform)),c.sheenRoughnessMap&&(b.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,b.sheenRoughnessMapTransform))),c.clearcoat>0&&(b.clearcoat.value=c.clearcoat,b.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(b.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,b.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(b.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Tt&&b.clearcoatNormalScale.value.negate())),c.dispersion>0&&(b.dispersion.value=c.dispersion),c.iridescence>0&&(b.iridescence.value=c.iridescence,b.iridescenceIOR.value=c.iridescenceIOR,b.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(b.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,b.iridescenceMapTransform)),c.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),c.transmission>0&&(b.transmission.value=c.transmission,b.transmissionSamplerMap.value=x.texture,b.transmissionSamplerSize.value.set(x.width,x.height),c.transmissionMap&&(b.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,b.transmissionMapTransform)),b.thickness.value=c.thickness,c.thicknessMap&&(b.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=c.attenuationDistance,b.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(b.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(b.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=c.specularIntensity,b.specularColor.value.copy(c.specularColor),c.specularColorMap&&(b.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,b.specularColorMapTransform)),c.specularIntensityMap&&(b.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,c){c.matcap&&(b.matcap.value=c.matcap)}function S(b,c){const x=e.get(c).light;b.referencePosition.value.setFromMatrixPosition(x.matrixWorld),b.nearDistance.value=x.shadow.camera.near,b.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zh(n,e,t,r){let i={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;r.uniformBlockBinding(x,E)}function u(x,v){let E=i[x.id];E===void 0&&(_(x),E=p(x),i[x.id]=E,x.addEventListener("dispose",b));const G=v.program;r.updateUBOMapping(x,G);const y=e.render.frame;s[x.id]!==y&&(h(x),s[x.id]=y)}function p(x){const v=d();x.__bindingPointIndex=v;const E=n.createBuffer(),G=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,G,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],E=x.uniforms,G=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,A=E.length;y<A;y++){const w=Array.isArray(E[y])?E[y]:[E[y]];for(let ee=0,K=w.length;ee<K;ee++){const T=w[ee];if(f(T,y,ee,G)===!0){const z=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<N.length;q++){const F=N[q],Y=S(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,z+X,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,E,G){const y=x.value,A=v+"_"+E;if(G[A]===void 0)return typeof y=="number"||typeof y=="boolean"?G[A]=y:G[A]=y.clone(),!0;{const w=G[A];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return G[A]=y,!0}else if(w.equals(y)===!1)return w.copy(y),!0}return!1}function _(x){const v=x.uniforms;let E=0;const G=16;for(let A=0,w=v.length;A<w;A++){const ee=Array.isArray(v[A])?v[A]:[v[A]];for(let K=0,T=ee.length;K<T;K++){const z=ee[K],N=Array.isArray(z.value)?z.value:[z.value];for(let X=0,q=N.length;X<q;X++){const F=N[X],Y=S(F),B=E%G,oe=B%Y.boundary,le=B+oe;E+=oe,le!==0&&G-le<Y.storage&&(E+=G-le),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Y.storage}}}const y=E%G;return y>0&&(E+=G-y),x.__size=E,x.__cache={},this}function S(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function b(x){const v=x.target;v.removeEventListener("dispose",b);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function c(){for(const x in i)n.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:u,dispose:c}}class Wh{constructor(e={}){const{canvas:t=yu(),context:r=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),_=new Int32Array(4);let S=null,b=null;const c=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let E=!1,G=0,y=0,A=null,w=-1,ee=null;const K=new rt,T=new rt;let z=null;const N=new Xe(0);let X=0,q=t.width,F=t.height,Y=1,B=null,oe=null;const le=new rt(0,0,q,F),Ke=new rt(0,0,q,F);let Ne=!1;const Ve=new al;let W=!1,j=!1;const de=new et,ue=new et,De=new H,Se=new rt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Re(){return A===null?Y:1}let D=r;function Mt(g,I){return t.getContext(g,I)}try{const g={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const I="webgl2";if(D=Mt(I,g),D===null)throw Mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let He,Ge,Me,Ze,Ae,M,m,C,k,Z,V,me,re,ce,Ue,$,pe,xe,Ee,be,Ce,Le,qe,L;function se(){He=new Yb(D),He.init(),Le=new Ch(D,He),Ge=new Fb(D,He,e,Le),Me=new Ih(D),Ge.reverseDepthBuffer&&Me.buffers.depth.setReversed(!0),Ze=new jb(D),Ae=new fh,M=new Hh(D,He,Me,Ae,Ge,Le,Ze),m=new Wb(v),C=new Jb(v),k=new nc(D),qe=new Nb(D,k),Z=new qb(D,k,Ze,qe),V=new Qb(D,Z,k,Ze),Ee=new $b(D,Ge,M),$=new zb(Ae),me=new dh(v,m,C,He,Ge,qe,$),re=new Fh(v,Ae),ce=new mh,Ue=new Mh(He),xe=new Ub(v,m,C,Me,V,h,l),pe=new Lh(v,V,Ge),L=new zh(D,Ze,Ge,Me),be=new Bb(D,He,Ze),Ce=new Zb(D,He,Ze),Ze.programs=me.programs,v.capabilities=Ge,v.extensions=He,v.properties=Ae,v.renderLists=ce,v.shadowMap=pe,v.state=Me,v.info=Ze}se();const U=new Nh(v,D);this.xr=U,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const g=He.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=He.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(g){g!==void 0&&(Y=g,this.setSize(q,F,!1))},this.getSize=function(g){return g.set(q,F)},this.setSize=function(g,I,O=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=g,F=I,t.width=Math.floor(g*Y),t.height=Math.floor(I*Y),O===!0&&(t.style.width=g+"px",t.style.height=I+"px"),this.setViewport(0,0,g,I)},this.getDrawingBufferSize=function(g){return g.set(q*Y,F*Y).floor()},this.setDrawingBufferSize=function(g,I,O){q=g,F=I,Y=O,t.width=Math.floor(g*O),t.height=Math.floor(I*O),this.setViewport(0,0,g,I)},this.getCurrentViewport=function(g){return g.copy(K)},this.getViewport=function(g){return g.copy(le)},this.setViewport=function(g,I,O,R){g.isVector4?le.set(g.x,g.y,g.z,g.w):le.set(g,I,O,R),Me.viewport(K.copy(le).multiplyScalar(Y).round())},this.getScissor=function(g){return g.copy(Ke)},this.setScissor=function(g,I,O,R){g.isVector4?Ke.set(g.x,g.y,g.z,g.w):Ke.set(g,I,O,R),Me.scissor(T.copy(Ke).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(g){Me.setScissorTest(Ne=g)},this.setOpaqueSort=function(g){B=g},this.setTransparentSort=function(g){oe=g},this.getClearColor=function(g){return g.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(g=!0,I=!0,O=!0){let R=0;if(g){let P=!1;if(A!==null){const Q=A.texture.format;P=Q===ca||Q===ua||Q===la}if(P){const Q=A.texture.type,ie=Q===or||Q===Rr||Q===Dn||Q===pn||Q===aa||Q===oa,he=xe.getClearColor(),fe=xe.getClearAlpha(),Te=he.r,ve=he.g,_e=he.b;ie?(f[0]=Te,f[1]=ve,f[2]=_e,f[3]=fe,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=Te,_[1]=ve,_[2]=_e,_[3]=fe,D.clearBufferiv(D.COLOR,0,_))}else R|=D.COLOR_BUFFER_BIT}I&&(R|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(R|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Ue.dispose(),Ae.dispose(),m.dispose(),C.dispose(),V.dispose(),qe.dispose(),L.dispose(),me.dispose(),U.dispose(),U.removeEventListener("sessionstart",xa),U.removeEventListener("sessionend",Ea),Mr.stop()};function J(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const g=Ze.autoReset,I=pe.enabled,O=pe.autoUpdate,R=pe.needsUpdate,P=pe.type;se(),Ze.autoReset=g,pe.enabled=I,pe.autoUpdate=O,pe.needsUpdate=R,pe.type=P}function ae(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function we(g){const I=g.target;I.removeEventListener("dispose",we),nt(I)}function nt(g){mt(g),Ae.remove(g)}function mt(g){const I=Ae.get(g).programs;I!==void 0&&(I.forEach(function(O){me.releaseProgram(O)}),g.isShaderMaterial&&me.releaseShaderCache(g))}this.renderBufferDirect=function(g,I,O,R,P,Q){I===null&&(I=Oe);const ie=P.isMesh&&P.matrixWorld.determinant()<0,he=Tl(g,I,O,R,P);Me.setMaterial(R,ie);let fe=O.index,Te=1;if(R.wireframe===!0){if(fe=Z.getWireframeAttribute(O),fe===void 0)return;Te=2}const ve=O.drawRange,_e=O.attributes.position;let ke=ve.start*Te,je=(ve.start+ve.count)*Te;Q!==null&&(ke=Math.max(ke,Q.start*Te),je=Math.min(je,(Q.start+Q.count)*Te)),fe!==null?(ke=Math.max(ke,0),je=Math.min(je,fe.count)):_e!=null&&(ke=Math.max(ke,0),je=Math.min(je,_e.count));const Qe=je-ke;if(Qe<0||Qe===1/0)return;qe.setup(P,R,he,O,fe);let xt,Fe=be;if(fe!==null&&(xt=k.get(fe),Fe=Ce,Fe.setIndex(xt)),P.isMesh)R.wireframe===!0?(Me.setLineWidth(R.wireframeLinewidth*Re()),Fe.setMode(D.LINES)):Fe.setMode(D.TRIANGLES);else if(P.isLine){let ge=R.linewidth;ge===void 0&&(ge=1),Me.setLineWidth(ge*Re()),P.isLineSegments?Fe.setMode(D.LINES):P.isLineLoop?Fe.setMode(D.LINE_LOOP):Fe.setMode(D.LINE_STRIP)}else P.isPoints?Fe.setMode(D.POINTS):P.isSprite&&Fe.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Fe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Fe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const ge=P._multiDrawStarts,ut=P._multiDrawCounts,ze=P._multiDrawCount,wt=fe?k.get(fe).bytesPerElement:1,Nr=Ae.get(R).currentProgram.getUniforms();for(let Et=0;Et<ze;Et++)Nr.setValue(D,"_gl_DrawID",Et),Fe.render(ge[Et]/wt,ut[Et])}else if(P.isInstancedMesh)Fe.renderInstances(ke,Qe,P.count);else if(O.isInstancedBufferGeometry){const ge=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ut=Math.min(O.instanceCount,ge);Fe.renderInstances(ke,Qe,ut)}else Fe.render(ke,Qe)};function Be(g,I,O){g.transparent===!0&&g.side===nr&&g.forceSinglePass===!1?(g.side=Tt,g.needsUpdate=!0,Rn(g,I,O),g.side=Tr,g.needsUpdate=!0,Rn(g,I,O),g.side=nr):Rn(g,I,O)}this.compile=function(g,I,O=null){O===null&&(O=g),b=Ue.get(O),b.init(I),x.push(b),O.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(b.pushLight(P),P.castShadow&&b.pushShadow(P))}),g!==O&&g.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(b.pushLight(P),P.castShadow&&b.pushShadow(P))}),b.setupLights();const R=new Set;return g.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Q=P.material;if(Q)if(Array.isArray(Q))for(let ie=0;ie<Q.length;ie++){const he=Q[ie];Be(he,O,P),R.add(he)}else Be(Q,O,P),R.add(Q)}),x.pop(),b=null,R},this.compileAsync=function(g,I,O=null){const R=this.compile(g,I,O);return new Promise(P=>{function Q(){if(R.forEach(function(ie){Ae.get(ie).currentProgram.isReady()&&R.delete(ie)}),R.size===0){P(g);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let _t=null;function Zt(g){_t&&_t(g)}function xa(){Mr.stop()}function Ea(){Mr.start()}const Mr=new ol;Mr.setAnimationLoop(Zt),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(g){_t=g,U.setAnimationLoop(g),g===null?Mr.stop():Mr.start()},U.addEventListener("sessionstart",xa),U.addEventListener("sessionend",Ea),this.render=function(g,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(I),I=U.getCamera()),g.isScene===!0&&g.onBeforeRender(v,g,I,A),b=Ue.get(g,x.length),b.init(I),x.push(b),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(ue),j=this.localClippingEnabled,W=$.init(this.clippingPlanes,j),S=ce.get(g,c.length),S.init(),c.push(S),U.enabled===!0&&U.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&Hi(Q,I,-1/0,v.sortObjects)}Hi(g,I,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(B,oe),Je=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Je&&xe.addToRenderList(S,g),this.info.render.frame++,W===!0&&$.beginShadows();const O=b.state.shadowsArray;pe.render(O,g,I),W===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=S.opaque,P=S.transmissive;if(b.setupLights(),I.isArrayCamera){const Q=I.cameras;if(P.length>0)for(let ie=0,he=Q.length;ie<he;ie++){const fe=Q[ie];Da(R,P,g,fe)}Je&&xe.render(g);for(let ie=0,he=Q.length;ie<he;ie++){const fe=Q[ie];Aa(S,g,fe,fe.viewport)}}else P.length>0&&Da(R,P,g,I),Je&&xe.render(g),Aa(S,g,I);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),g.isScene===!0&&g.onAfterRender(v,g,I),qe.resetDefaultState(),w=-1,ee=null,x.pop(),x.length>0?(b=x[x.length-1],W===!0&&$.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,c.pop(),c.length>0?S=c[c.length-1]:S=null};function Hi(g,I,O,R){if(g.visible===!1)return;if(g.layers.test(I.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(I);else if(g.isLight)b.pushLight(g),g.castShadow&&b.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Ve.intersectsSprite(g)){R&&Se.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ue);const ie=V.update(g),he=g.material;he.visible&&S.push(g,ie,he,O,Se.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Ve.intersectsObject(g))){const ie=V.update(g),he=g.material;if(R&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Se.copy(g.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Se.copy(ie.boundingSphere.center)),Se.applyMatrix4(g.matrixWorld).applyMatrix4(ue)),Array.isArray(he)){const fe=ie.groups;for(let Te=0,ve=fe.length;Te<ve;Te++){const _e=fe[Te],ke=he[_e.materialIndex];ke&&ke.visible&&S.push(g,ie,ke,O,Se.z,_e)}}else he.visible&&S.push(g,ie,he,O,Se.z,null)}}const Q=g.children;for(let ie=0,he=Q.length;ie<he;ie++)Hi(Q[ie],I,O,R)}function Aa(g,I,O,R){const P=g.opaque,Q=g.transmissive,ie=g.transparent;b.setupLightsView(O),W===!0&&$.setGlobalState(v.clippingPlanes,O),R&&Me.viewport(K.copy(R)),P.length>0&&On(P,I,O),Q.length>0&&On(Q,I,O),ie.length>0&&On(ie,I,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Da(g,I,O,R){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[R.id]===void 0&&(b.state.transmissionRenderTarget[R.id]=new wr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?yn:or,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const Q=b.state.transmissionRenderTarget[R.id],ie=R.viewport||K;Q.setSize(ie.z,ie.w);const he=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(N),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Je&&xe.render(O);const fe=v.toneMapping;v.toneMapping=gr;const Te=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),b.setupLightsView(R),W===!0&&$.setGlobalState(v.clippingPlanes,R),On(g,O,R),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let _e=0,ke=I.length;_e<ke;_e++){const je=I[_e],Qe=je.object,xt=je.geometry,Fe=je.material,ge=je.group;if(Fe.side===nr&&Qe.layers.test(R.layers)){const ut=Fe.side;Fe.side=Tt,Fe.needsUpdate=!0,La(Qe,O,R,xt,Fe,ge),Fe.side=ut,Fe.needsUpdate=!0,ve=!0}}ve===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}v.setRenderTarget(he),v.setClearColor(N,X),Te!==void 0&&(R.viewport=Te),v.toneMapping=fe}function On(g,I,O){const R=I.isScene===!0?I.overrideMaterial:null;for(let P=0,Q=g.length;P<Q;P++){const ie=g[P],he=ie.object,fe=ie.geometry,Te=R===null?ie.material:R,ve=ie.group;he.layers.test(O.layers)&&La(he,I,O,fe,Te,ve)}}function La(g,I,O,R,P,Q){g.onBeforeRender(v,I,O,R,P,Q),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),P.onBeforeRender(v,I,O,R,g,Q),P.transparent===!0&&P.side===nr&&P.forceSinglePass===!1?(P.side=Tt,P.needsUpdate=!0,v.renderBufferDirect(O,I,R,P,g,Q),P.side=Tr,P.needsUpdate=!0,v.renderBufferDirect(O,I,R,P,g,Q),P.side=nr):v.renderBufferDirect(O,I,R,P,g,Q),g.onAfterRender(v,I,O,R,P,Q)}function Rn(g,I,O){I.isScene!==!0&&(I=Oe);const R=Ae.get(g),P=b.state.lights,Q=b.state.shadowsArray,ie=P.state.version,he=me.getParameters(g,P.state,Q,I,O),fe=me.getProgramCacheKey(he);let Te=R.programs;R.environment=g.isMeshStandardMaterial?I.environment:null,R.fog=I.fog,R.envMap=(g.isMeshStandardMaterial?C:m).get(g.envMap||R.environment),R.envMapRotation=R.environment!==null&&g.envMap===null?I.environmentRotation:g.envMapRotation,Te===void 0&&(g.addEventListener("dispose",we),Te=new Map,R.programs=Te);let ve=Te.get(fe);if(ve!==void 0){if(R.currentProgram===ve&&R.lightsStateVersion===ie)return Ia(g,he),ve}else he.uniforms=me.getUniforms(g),g.onBeforeCompile(he,v),ve=me.acquireProgram(he,fe),Te.set(fe,ve),R.uniforms=he.uniforms;const _e=R.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(_e.clippingPlanes=$.uniform),Ia(g,he),R.needsLights=vl(g),R.lightsStateVersion=ie,R.needsLights&&(_e.ambientLightColor.value=P.state.ambient,_e.lightProbe.value=P.state.probe,_e.directionalLights.value=P.state.directional,_e.directionalLightShadows.value=P.state.directionalShadow,_e.spotLights.value=P.state.spot,_e.spotLightShadows.value=P.state.spotShadow,_e.rectAreaLights.value=P.state.rectArea,_e.ltc_1.value=P.state.rectAreaLTC1,_e.ltc_2.value=P.state.rectAreaLTC2,_e.pointLights.value=P.state.point,_e.pointLightShadows.value=P.state.pointShadow,_e.hemisphereLights.value=P.state.hemi,_e.directionalShadowMap.value=P.state.directionalShadowMap,_e.directionalShadowMatrix.value=P.state.directionalShadowMatrix,_e.spotShadowMap.value=P.state.spotShadowMap,_e.spotLightMatrix.value=P.state.spotLightMatrix,_e.spotLightMap.value=P.state.spotLightMap,_e.pointShadowMap.value=P.state.pointShadowMap,_e.pointShadowMatrix.value=P.state.pointShadowMatrix),R.currentProgram=ve,R.uniformsList=null,ve}function ya(g){if(g.uniformsList===null){const I=g.currentProgram.getUniforms();g.uniformsList=di.seqWithValue(I.seq,g.uniforms)}return g.uniformsList}function Ia(g,I){const O=Ae.get(g);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Tl(g,I,O,R,P){I.isScene!==!0&&(I=Oe),M.resetTextureUnits();const Q=I.fog,ie=R.isMeshStandardMaterial?I.environment:null,he=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vr,fe=(R.isMeshStandardMaterial?C:m).get(R.envMap||ie),Te=R.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ve=!!O.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),_e=!!O.morphAttributes.position,ke=!!O.morphAttributes.normal,je=!!O.morphAttributes.color;let Qe=gr;R.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Qe=v.toneMapping);const xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Fe=xt!==void 0?xt.length:0,ge=Ae.get(R),ut=b.state.lights;if(W===!0&&(j===!0||g!==ee)){const yt=g===ee&&R.id===w;$.setState(R,g,yt)}let ze=!1;R.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ut.state.version||ge.outputColorSpace!==he||P.isBatchedMesh&&ge.batching===!1||!P.isBatchedMesh&&ge.batching===!0||P.isBatchedMesh&&ge.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&ge.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&ge.instancing===!1||!P.isInstancedMesh&&ge.instancing===!0||P.isSkinnedMesh&&ge.skinning===!1||!P.isSkinnedMesh&&ge.skinning===!0||P.isInstancedMesh&&ge.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ge.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ge.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ge.instancingMorph===!1&&P.morphTexture!==null||ge.envMap!==fe||R.fog===!0&&ge.fog!==Q||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==$.numPlanes||ge.numIntersection!==$.numIntersection)||ge.vertexAlphas!==Te||ge.vertexTangents!==ve||ge.morphTargets!==_e||ge.morphNormals!==ke||ge.morphColors!==je||ge.toneMapping!==Qe||ge.morphTargetsCount!==Fe)&&(ze=!0):(ze=!0,ge.__version=R.version);let wt=ge.currentProgram;ze===!0&&(wt=Rn(R,I,P));let Nr=!1,Et=!1,Ci=!1;const tt=wt.getUniforms(),ur=ge.uniforms;if(Me.useProgram(wt.program)&&(Nr=!0,Et=!0,Ci=!0),R.id!==w&&(w=R.id,Et=!0),Nr||ee!==g){Ge.reverseDepthBuffer?(de.copy(g.projectionMatrix),Pu(de),Hu(de),tt.setValue(D,"projectionMatrix",de)):tt.setValue(D,"projectionMatrix",g.projectionMatrix),tt.setValue(D,"viewMatrix",g.matrixWorldInverse);const yt=tt.map.cameraPosition;yt!==void 0&&yt.setValue(D,De.setFromMatrixPosition(g.matrixWorld)),Ge.logarithmicDepthBuffer&&tt.setValue(D,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&tt.setValue(D,"isOrthographic",g.isOrthographicCamera===!0),ee!==g&&(ee=g,Et=!0,Ci=!0)}if(P.isSkinnedMesh){tt.setOptional(D,P,"bindMatrix"),tt.setOptional(D,P,"bindMatrixInverse");const yt=P.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),tt.setValue(D,"boneTexture",yt.boneTexture,M))}P.isBatchedMesh&&(tt.setOptional(D,P,"batchingTexture"),tt.setValue(D,"batchingTexture",P._matricesTexture,M),tt.setOptional(D,P,"batchingIdTexture"),tt.setValue(D,"batchingIdTexture",P._indirectTexture,M),tt.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&tt.setValue(D,"batchingColorTexture",P._colorsTexture,M));const Oi=O.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Ee.update(P,O,wt),(Et||ge.receiveShadow!==P.receiveShadow)&&(ge.receiveShadow=P.receiveShadow,tt.setValue(D,"receiveShadow",P.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(ur.envMap.value=fe,ur.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&I.environment!==null&&(ur.envMapIntensity.value=I.environmentIntensity),Et&&(tt.setValue(D,"toneMappingExposure",v.toneMappingExposure),ge.needsLights&&Sl(ur,Ci),Q&&R.fog===!0&&re.refreshFogUniforms(ur,Q),re.refreshMaterialUniforms(ur,R,Y,F,b.state.transmissionRenderTarget[g.id]),di.upload(D,ya(ge),ur,M)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(di.upload(D,ya(ge),ur,M),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&tt.setValue(D,"center",P.center),tt.setValue(D,"modelViewMatrix",P.modelViewMatrix),tt.setValue(D,"normalMatrix",P.normalMatrix),tt.setValue(D,"modelMatrix",P.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const yt=R.uniformsGroups;for(let Ri=0,Ml=yt.length;Ri<Ml;Ri++){const Pa=yt[Ri];L.update(Pa,wt),L.bind(Pa,wt)}}return wt}function Sl(g,I){g.ambientLightColor.needsUpdate=I,g.lightProbe.needsUpdate=I,g.directionalLights.needsUpdate=I,g.directionalLightShadows.needsUpdate=I,g.pointLights.needsUpdate=I,g.pointLightShadows.needsUpdate=I,g.spotLights.needsUpdate=I,g.spotLightShadows.needsUpdate=I,g.rectAreaLights.needsUpdate=I,g.hemisphereLights.needsUpdate=I}function vl(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(g,I,O){Ae.get(g.texture).__webglTexture=I,Ae.get(g.depthTexture).__webglTexture=O;const R=Ae.get(g);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=O===void 0,R.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,I){const O=Ae.get(g);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(g,I=0,O=0){A=g,G=I,y=O;let R=!0,P=null,Q=!1,ie=!1;if(g){const fe=Ae.get(g);if(fe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),R=!1;else if(fe.__webglFramebuffer===void 0)M.setupRenderTarget(g);else if(fe.__hasExternalTextures)M.rebindTextures(g,Ae.get(g.texture).__webglTexture,Ae.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const _e=g.depthTexture;if(fe.__boundDepthTexture!==_e){if(_e!==null&&Ae.has(_e)&&(g.width!==_e.image.width||g.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(g)}}const Te=g.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ie=!0);const ve=Ae.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(ve[I])?P=ve[I][O]:P=ve[I],Q=!0):g.samples>0&&M.useMultisampledRTT(g)===!1?P=Ae.get(g).__webglMultisampledFramebuffer:Array.isArray(ve)?P=ve[O]:P=ve,K.copy(g.viewport),T.copy(g.scissor),z=g.scissorTest}else K.copy(le).multiplyScalar(Y).floor(),T.copy(Ke).multiplyScalar(Y).floor(),z=Ne;if(Me.bindFramebuffer(D.FRAMEBUFFER,P)&&R&&Me.drawBuffers(g,P),Me.viewport(K),Me.scissor(T),Me.setScissorTest(z),Q){const fe=Ae.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,O)}else if(ie){const fe=Ae.get(g.texture),Te=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,O||0,Te)}w=-1},this.readRenderTargetPixels=function(g,I,O,R,P,Q,ie){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ae.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ie!==void 0&&(he=he[ie]),he){Me.bindFramebuffer(D.FRAMEBUFFER,he);try{const fe=g.texture,Te=fe.format,ve=fe.type;if(!Ge.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=g.width-R&&O>=0&&O<=g.height-P&&D.readPixels(I,O,R,P,Le.convert(Te),Le.convert(ve),Q)}finally{const fe=A!==null?Ae.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(g,I,O,R,P,Q,ie){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ae.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ie!==void 0&&(he=he[ie]),he){const fe=g.texture,Te=fe.format,ve=fe.type;if(!Ge.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=g.width-R&&O>=0&&O<=g.height-P){Me.bindFramebuffer(D.FRAMEBUFFER,he);const _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(I,O,R,P,Le.convert(Te),Le.convert(ve),0);const ke=A!==null?Ae.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ke);const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Iu(D,je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(_e),D.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,I=null,O=0){g.isTexture!==!0&&(hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,g=arguments[1]);const R=Math.pow(2,-O),P=Math.floor(g.image.width*R),Q=Math.floor(g.image.height*R),ie=I!==null?I.x:0,he=I!==null?I.y:0;M.setTexture2D(g,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,ie,he,P,Q),Me.unbindTexture()},this.copyTextureToTexture=function(g,I,O=null,R=null,P=0){g.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,g=arguments[1],I=arguments[2],P=arguments[3]||0,O=null);let Q,ie,he,fe,Te,ve;O!==null?(Q=O.max.x-O.min.x,ie=O.max.y-O.min.y,he=O.min.x,fe=O.min.y):(Q=g.image.width,ie=g.image.height,he=0,fe=0),R!==null?(Te=R.x,ve=R.y):(Te=0,ve=0);const _e=Le.convert(I.format),ke=Le.convert(I.type);M.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xt=D.getParameter(D.UNPACK_SKIP_PIXELS),Fe=D.getParameter(D.UNPACK_SKIP_ROWS),ge=D.getParameter(D.UNPACK_SKIP_IMAGES),ut=g.isCompressedTexture?g.mipmaps[P]:g.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,fe),g.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,P,Te,ve,Q,ie,_e,ke,ut.data):g.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,P,Te,ve,ut.width,ut.height,_e,ut.data):D.texSubImage2D(D.TEXTURE_2D,P,Te,ve,Q,ie,_e,ke,ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ge),P===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(g,I,O=null,R=null,P=0){g.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,R=arguments[1]||null,g=arguments[2],I=arguments[3],P=arguments[4]||0);let Q,ie,he,fe,Te,ve,_e,ke,je;const Qe=g.isCompressedTexture?g.mipmaps[P]:g.image;O!==null?(Q=O.max.x-O.min.x,ie=O.max.y-O.min.y,he=O.max.z-O.min.z,fe=O.min.x,Te=O.min.y,ve=O.min.z):(Q=Qe.width,ie=Qe.height,he=Qe.depth,fe=0,Te=0,ve=0),R!==null?(_e=R.x,ke=R.y,je=R.z):(_e=0,ke=0,je=0);const xt=Le.convert(I.format),Fe=Le.convert(I.type);let ge;if(I.isData3DTexture)M.setTexture3D(I,0),ge=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)M.setTexture2DArray(I,0),ge=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wt=D.getParameter(D.UNPACK_SKIP_PIXELS),Nr=D.getParameter(D.UNPACK_SKIP_ROWS),Et=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ve),g.isDataTexture||g.isData3DTexture?D.texSubImage3D(ge,P,_e,ke,je,Q,ie,he,xt,Fe,Qe.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,P,_e,ke,je,Q,ie,he,xt,Qe.data):D.texSubImage3D(ge,P,_e,ke,je,Q,ie,he,xt,Fe,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et),P===0&&I.generateMipmaps&&D.generateMipmap(ge),Me.unbindTexture()},this.initRenderTarget=function(g){Ae.get(g).__webglFramebuffer===void 0&&M.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?M.setTextureCube(g,0):g.isData3DTexture?M.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?M.setTexture2DArray(g,0):M.setTexture2D(g,0),Me.unbindTexture()},this.resetState=function(){G=0,y=0,A=null,Me.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pa?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===xi?"display-p3":"srgb"}}class Vh extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yi extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ti=new H,Si=new H,Lo=new et,Mn=new Ai,ii=new Ei,ps=new H,yo=new H;class Ka extends vt{constructor(e=new Rt,t=new yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,s=t.count;i<s;i++)Ti.fromBufferAttribute(t,i-1),Si.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=Ti.distanceTo(Si);e.setAttribute("lineDistance",new Wt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ii.copy(r.boundingSphere),ii.applyMatrix4(i),ii.radius+=s,e.ray.intersectsSphere(ii)===!1)return;Lo.copy(i).invert(),Mn.copy(e.ray).applyMatrix4(Lo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,p=r.index,h=r.attributes.position;if(p!==null){const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let S=f,b=_-1;S<b;S+=u){const c=p.getX(S),x=p.getX(S+1),v=si(this,e,Mn,l,c,x);v&&t.push(v)}if(this.isLineLoop){const S=p.getX(_-1),b=p.getX(f),c=si(this,e,Mn,l,S,b);c&&t.push(c)}}else{const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=f,b=_-1;S<b;S+=u){const c=si(this,e,Mn,l,S,S+1);c&&t.push(c)}if(this.isLineLoop){const S=si(this,e,Mn,l,_-1,f);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function si(n,e,t,r,i,s){const a=n.geometry.attributes.position;if(Ti.fromBufferAttribute(a,i),Si.fromBufferAttribute(a,s),t.distanceSqToSegment(Ti,Si,ps,yo)>r)return;ps.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ps);if(!(l<e.near||l>e.far))return{distance:l,point:yo.clone().applyMatrix4(n.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:n}}class ma extends Rt{constructor(e=1,t=32,r=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(a+o,Math.PI);let u=0;const p=[],d=new H,h=new H,f=[],_=[],S=[],b=[];for(let c=0;c<=r;c++){const x=[],v=c/r;let E=0;c===0&&a===0?E=.5/t:c===r&&l===Math.PI&&(E=-.5/t);for(let G=0;G<=t;G++){const y=G/t;d.x=-e*Math.cos(i+y*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+y*s)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),b.push(y+E,1-v),x.push(u++)}p.push(x)}for(let c=0;c<r;c++)for(let x=0;x<t;x++){const v=p[c][x+1],E=p[c][x],G=p[c+1][x],y=p[c+1][x+1];(c!==0||a>0)&&f.push(v,E,y),(c!==r-1||l<Math.PI)&&f.push(E,G,y)}this.setIndex(f),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(S,3)),this.setAttribute("uv",new Wt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Io=new et;class hl{constructor(e,t,r=0,i=1/0){this.ray=new Ai(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Io.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Io),this}intersectObject(e,t=!0,r=[]){return ea(e,this,r,t),r.sort(Po),r}intersectObjects(e,t=!0,r=[]){for(let i=0,s=e.length;i<s;i++)ea(e[i],this,r,t);return r.sort(Po),r}}function Po(n,e){return n.distance-e.distance}function ea(n,e,t,r){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&r===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ea(s[a],e,t,!0)}}class Ho{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kh extends Ur{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const Co={type:"change"},_a={type:"start"},dl={type:"end"},ai=new Ai,Oo=new Kr,Xh=Math.cos(70*Lu.DEG2RAD),st=new H,gt=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bs=1e-6;class Jh extends kh{constructor(e,t=null){super(e,t),this.state=Ye.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN},this.touches={ONE:tn.ROTATE,TWO:tn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Gr,this._lastTargetPosition=new H,this._quat=new Gr().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ho,this._sphericalDelta=new Ho,this._scale=1,this._panOffset=new H,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new H,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qh.bind(this),this._onPointerDown=Yh.bind(this),this._onPointerUp=Zh.bind(this),this._onContextMenu=nd.bind(this),this._onMouseWheel=Qh.bind(this),this._onKeyDown=ed.bind(this),this._onTouchStart=td.bind(this),this._onTouchMove=rd.bind(this),this._onMouseDown=jh.bind(this),this._onMouseMove=$h.bind(this),this._interceptControlDown=id.bind(this),this._interceptControlUp=sd.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Co),this.update(),this.state=Ye.NONE}update(e=null){const t=this.object.position;st.copy(t).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=gt:r>Math.PI&&(r-=gt),i<-Math.PI?i+=gt:i>Math.PI&&(i-=gt),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),t.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=st.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new H(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ai.origin.copy(this.object.position),ai.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ai.direction))<Xh?this.object.lookAt(this.target):(Oo.setFromNormalAndCoplanarPoint(this.object.up,this.target),ai.intersectPlane(Oo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bs||this._lastTargetPosition.distanceToSquared(this.target)>bs?(this.dispatchEvent(Co),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gt/60*this.autoRotateSpeed*e:gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){st.setFromMatrixColumn(t,0),st.multiplyScalar(-e),this._panOffset.add(st)}_panUp(e,t){this.screenSpacePanning===!0?st.setFromMatrixColumn(t,1):(st.setFromMatrixColumn(t,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(e),this._panOffset.add(st)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;st.copy(i).sub(this.target);let s=st.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/r.clientHeight,this.object.matrix),this._panUp(2*t*s/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),i=e-r.left,s=t-r.top,a=r.width,o=r.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(r*r+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),s=.5*(e.pageY+r.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Yh(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qh(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zh(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dl),this.state=Ye.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jh(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ye.DOLLY;break;case nn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ye.ROTATE}break;case nn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(_a)}function $h(n){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Qh(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(n.preventDefault(),this.dispatchEvent(_a),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(dl))}function ed(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function td(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ye.TOUCH_ROTATE;break;case tn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case tn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ye.TOUCH_DOLLY_PAN;break;case tn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(_a)}function rd(n){switch(this._trackPointer(n),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ye.NONE}}function nd(n){this.enabled!==!1&&n.preventDefault()}function id(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sd(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ad{constructor(e,t,r){this.domElement=e,this.camera=t,this.scene=r,this.isClicking=!1,this.clickListeners=[],this.raycaster=new hl,this.domElement.addEventListener("mousedown",this.onMouseDown.bind(this)),this.domElement.addEventListener("mousemove",this.onMouseMove.bind(this)),this.domElement.addEventListener("mouseup",this.onMouseUp.bind(this))}onMouseDown(e){this.isClicking=!0}onMouseMove(e){this.isClicking=!1}onMouseUp(e){if(!this.isClicking)return;this.isClicking=!1;const t=this.raycaster,r=new Pe,i=this.domElement.getBoundingClientRect();r.x=(e.clientX-i.left)/i.width*2-1,r.y=-((e.clientY-i.top)/i.height)*2+1,t.setFromCamera(r,this.camera);const s=t.intersectObjects(this.scene.children);for(let a=0;a<s.length;a++){const o=s[a].object;if(o.type==="star"){console.log("Clicked:",o),this.clickListeners.forEach(l=>l(o));break}}}addListener(e){this.clickListeners.push(e)}}const od={"11 Com b":!0,"11 UMi b":!0,"14 And b":!0,"14 Her b":!0,"16 Cyg B b":!0,"17 Sco b":!0,"18 Del b":!0,"1RXS J160929.1-210524 b":!0,"24 Boo b":!0,"24 Sex b":!0,"24 Sex c":!0,"2M0437 b":!0,"2MASS J01033563-5515561 AB b":!0,"2MASS J01225093-2439505 b":!0,"2MASS J02192210-3925225 b":!0,"2MASS J0249-0557 c":!0,"2MASS J03590986+2009361 b":!0,"2MASS J04414489+2301513 b":!0,"2MASS J11550485-7919108 b":!0,"2MASS J12073346-3932539 b":!0,"2MASS J19383260+4603591 b":!0,"2MASS J21252752-8138278 b":!0,"2MASS J22362452+4751425 b":!0,"30 Ari B b":!0,"4 UMa b":!0,"42 Dra b":!0,"47 UMa b":!0,"47 UMa c":!0,"47 UMa d":!0,"51 Eri b":!0,"51 Peg b":!0,"55 Cnc b":!0,"55 Cnc c":!0,"55 Cnc d":!0,"55 Cnc e":!0,"55 Cnc f":!0,"6 Lyn b":!0,"61 Vir b":!0,"61 Vir c":!0,"61 Vir d":!0,"7 CMa b":!0,"7 CMa c":!0,"70 Vir b":!0,"75 Cet b":!0,"75 Cet c":!0,"8 UMi b":!0,"81 Cet b":!0,"91 Aqr b":!0,"AB Aur b":!0,"AB Pic b":!0,"AF Lep b":!0,"AU Mic b":!0,"AU Mic c":!0,"AU Mic d":!0,"BD+03 2562 b":!0,"BD+14 4559 b":!0,"BD+15 2375 b":!0,"BD+15 2940 b":!0,"BD+20 2457 b":!0,"BD+20 2457 c":!0,"BD+20 274 b":!0,"BD+20 594 b":!0,"BD+45 564 b":!0,"BD+48 738 b":!0,"BD+48 740 b":!0,"BD+49 828 b":!0,"BD+55 362 b":!0,"BD+60 1417 b":!0,"BD+63 1405 b":!0,"BD-06 1339 b":!0,"BD-06 1339 c":!0,"BD-08 2823 b":!0,"BD-08 2823 c":!0,"BD-10 3166 b":!0,"BD-11 4672 b":!0,"BD-11 4672 c":!0,"BD-13 2130 b":!0,"BD-14 3065 b":!0,"BD-17 63 b":!0,"BD-210397 b":!0,"BD-210397 c":!0,"CD Cet b":!0,"CFBDSIR J145829+101343 b":!0,"CHXR 73 b":!0,"CI Tau c":!0,"COCONUTS-2 b":!0,"CT Cha b":!0,"CoRoT-1 b":!0,"CoRoT-10 b":!0,"CoRoT-11 b":!0,"CoRoT-12 b":!0,"CoRoT-13 b":!0,"CoRoT-14 b":!0,"CoRoT-16 b":!0,"CoRoT-17 b":!0,"CoRoT-18 b":!0,"CoRoT-19 b":!0,"CoRoT-2 b":!0,"CoRoT-20 b":!0,"CoRoT-20 c":!0,"CoRoT-21 b":!0,"CoRoT-22 b":!0,"CoRoT-23 b":!0,"CoRoT-24 b":!0,"CoRoT-24 c":!0,"CoRoT-25 b":!0,"CoRoT-26 b":!0,"CoRoT-27 b":!0,"CoRoT-28 b":!0,"CoRoT-29 b":!0,"CoRoT-3 b":!0,"CoRoT-30 b":!0,"CoRoT-31 b":!0,"CoRoT-35 b":!0,"CoRoT-36 b":!0,"CoRoT-4 b":!0,"CoRoT-5 b":!0,"CoRoT-6 b":!0,"CoRoT-7 b":!0,"CoRoT-7 c":!0,"CoRoT-7 d":!0,"CoRoT-8 b":!0,"CoRoT-9 b":!0,"CoRoTID 223977153 b":!0,"DE CVn b":!0,"DENIS-P J082303.1-491201 b":!0,"DH Tau b":!0,"DMPP-1 b":!0,"DMPP-1 c":!0,"DMPP-1 d":!0,"DMPP-1 e":!0,"DMPP-2 b":!0,"DMPP-3 A b":!0,"DMPP-4 b":!0,"DP Leo b":!0,"DS Tuc A b":!0,"EPIC 201170410.02":!0,"EPIC 201238110 b":!0,"EPIC 201427007 b":!0,"EPIC 201497682 b":!0,"EPIC 201595106 b":!0,"EPIC 201615463 c":!0,"EPIC 201754305 d":!0,"EPIC 201757695.02":!0,"EPIC 201833600 c":!0,"EPIC 201841433 b":!0,"EPIC 205950854 c":!0,"EPIC 206024342 b":!0,"EPIC 206024342 c":!0,"EPIC 206024342 d":!0,"EPIC 206032309 b":!0,"EPIC 206042996 b":!0,"EPIC 206042996 c":!0,"EPIC 206215704 b":!0,"EPIC 206317286 b":!0,"EPIC 206317286 c":!0,"EPIC 211822797 b":!0,"EPIC 211945201 b":!0,"EPIC 212297394 b":!0,"EPIC 212297394 c":!0,"EPIC 212424622 b":!0,"EPIC 212499991 b":!0,"EPIC 212587672 b":!0,"EPIC 212587672 c":!0,"EPIC 212624936 b":!0,"EPIC 212624936 c":!0,"EPIC 212737443 b":!0,"EPIC 212737443 c":!0,"EPIC 220492298 b":!0,"EPIC 220554210 c":!0,"EPIC 220674823 b":!0,"EPIC 220674823 c":!0,"EPIC 228836835 b":!0,"EPIC 229004835 b":!0,"EPIC 246851721 b":!0,"EPIC 248847494 b":!0,"EPIC 249893012 b":!0,"EPIC 249893012 c":!0,"EPIC 249893012 d":!0,"FU Tau b":!0,"G 196-3 b":!0,"G 264-012 b":!0,"G 264-012 c":!0,"G 9-40 b":!0,"GJ 1002 b":!0,"GJ 1002 c":!0,"GJ 1061 b":!0,"GJ 1061 c":!0,"GJ 1061 d":!0,"GJ 1132 b":!0,"GJ 1132 c":!0,"GJ 1148 b":!0,"GJ 1148 c":!0,"GJ 1151 c":!0,"GJ 1214 b":!0,"GJ 1252 b":!0,"GJ 1265 b":!0,"GJ 143 b":!0,"GJ 15 A b":!0,"GJ 15 A c":!0,"GJ 160.2 b":!0,"GJ 163 b":!0,"GJ 163 c":!0,"GJ 163 d":!0,"GJ 179 b":!0,"GJ 180 b":!0,"GJ 180 c":!0,"GJ 180 d":!0,"GJ 2030 b":!0,"GJ 2030 c":!0,"GJ 2056 b":!0,"GJ 229 A c":!0,"GJ 229 b":!0,"GJ 238 b":!0,"GJ 251 b":!0,"GJ 27.1 b":!0,"GJ 273 b":!0,"GJ 273 c":!0,"GJ 3021 b":!0,"GJ 3082 b":!0,"GJ 3090 b":!0,"GJ 3138 b":!0,"GJ 3138 c":!0,"GJ 3138 d":!0,"GJ 317 b":!0,"GJ 317 c":!0,"GJ 3222 b":!0,"GJ 328 b":!0,"GJ 328 c":!0,"GJ 3293 b":!0,"GJ 3293 c":!0,"GJ 3293 d":!0,"GJ 3293 e":!0,"GJ 3323 b":!0,"GJ 3323 c":!0,"GJ 3341 b":!0,"GJ 338 B b":!0,"GJ 3470 b":!0,"GJ 3473 b":!0,"GJ 3473 c":!0,"GJ 3512 b":!0,"GJ 3512 c":!0,"GJ 357 b":!0,"GJ 357 c":!0,"GJ 357 d":!0,"GJ 3634 b":!0,"GJ 367 b":!0,"GJ 367 c":!0,"GJ 367 d":!0,"GJ 3779 b":!0,"GJ 3929 b":!0,"GJ 3929 c":!0,"GJ 393 b":!0,"GJ 3942 b":!0,"GJ 3988 b":!0,"GJ 3998 b":!0,"GJ 3998 c":!0,"GJ 411 b":!0,"GJ 414 A b":!0,"GJ 414 A c":!0,"GJ 422 b":!0,"GJ 4276 b":!0,"GJ 433 b":!0,"GJ 433 c":!0,"GJ 433 d":!0,"GJ 436 b":!0,"GJ 463 b":!0,"GJ 480 b":!0,"GJ 486 b":!0,"GJ 504 b":!0,"GJ 514 b":!0,"GJ 536 b":!0,"GJ 581 b":!0,"GJ 581 c":!0,"GJ 581 e":!0,"GJ 625 b":!0,"GJ 649 b":!0,"GJ 667 C b":!0,"GJ 667 C c":!0,"GJ 667 C e":!0,"GJ 667 C f":!0,"GJ 667 C g":!0,"GJ 674 b":!0,"GJ 676 A b":!0,"GJ 676 A c":!0,"GJ 676 A d":!0,"GJ 676 A e":!0,"GJ 680 b":!0,"GJ 682 b":!0,"GJ 682 c":!0,"GJ 685 b":!0,"GJ 687 b":!0,"GJ 687 c":!0,"GJ 720 A b":!0,"GJ 724 b":!0,"GJ 740 b":!0,"GJ 806 b":!0,"GJ 806 c":!0,"GJ 832 b":!0,"GJ 849 b":!0,"GJ 849 c":!0,"GJ 86 b":!0,"GJ 876 b":!0,"GJ 876 c":!0,"GJ 876 d":!0,"GJ 876 e":!0,"GJ 887 b":!0,"GJ 887 c":!0,"GJ 896 A b":!0,"GJ 900 b":!0,"GJ 9066 c":!0,"GJ 9404 b":!0,"GJ 96 b":!0,"GJ 9689 b":!0,"GJ 9714 b":!0,"GJ 9827 b":!0,"GJ 9827 c":!0,"GJ 9827 d":!0,"GPX-1 b":!0,"GQ Lup b":!0,"GSC 06214-00210 b":!0,"GU Psc b":!0,"Gaia-1 b":!0,"Gaia-2 b":!0,"Gaia22dkvL b":!0,"Gl 378 b":!0,"Gl 49 b":!0,"Gl 686 b":!0,"Gliese 12 b":!0,"HAT-P-1 b":!0,"HAT-P-11 b":!0,"HAT-P-11 c":!0,"HAT-P-12 b":!0,"HAT-P-13 b":!0,"HAT-P-13 c":!0,"HAT-P-14 b":!0,"HAT-P-15 b":!0,"HAT-P-16 b":!0,"HAT-P-17 b":!0,"HAT-P-17 c":!0,"HAT-P-18 b":!0,"HAT-P-19 b":!0,"HAT-P-2 b":!0,"HAT-P-2 c":!0,"HAT-P-20 b":!0,"HAT-P-21 b":!0,"HAT-P-22 b":!0,"HAT-P-23 b":!0,"HAT-P-24 b":!0,"HAT-P-25 b":!0,"HAT-P-26 b":!0,"HAT-P-27 b":!0,"HAT-P-28 b":!0,"HAT-P-29 b":!0,"HAT-P-3 b":!0,"HAT-P-30 b":!0,"HAT-P-31 b":!0,"HAT-P-32 b":!0,"HAT-P-33 b":!0,"HAT-P-34 b":!0,"HAT-P-35 b":!0,"HAT-P-36 b":!0,"HAT-P-37 b":!0,"HAT-P-38 b":!0,"HAT-P-39 b":!0,"HAT-P-4 b":!0,"HAT-P-40 b":!0,"HAT-P-41 b":!0,"HAT-P-42 b":!0,"HAT-P-43 b":!0,"HAT-P-44 b":!0,"HAT-P-44 c":!0,"HAT-P-45 b":!0,"HAT-P-46 b":!0,"HAT-P-49 b":!0,"HAT-P-5 b":!0,"HAT-P-50 b":!0,"HAT-P-51 b":!0,"HAT-P-52 b":!0,"HAT-P-53 b":!0,"HAT-P-54 b":!0,"HAT-P-55 b":!0,"HAT-P-56 b":!0,"HAT-P-57 b":!0,"HAT-P-58 b":!0,"HAT-P-59 b":!0,"HAT-P-6 b":!0,"HAT-P-60 b":!0,"HAT-P-61 b":!0,"HAT-P-62 b":!0,"HAT-P-63 b":!0,"HAT-P-64 b":!0,"HAT-P-65 b":!0,"HAT-P-66 b":!0,"HAT-P-67 b":!0,"HAT-P-68 b":!0,"HAT-P-69 b":!0,"HAT-P-7 b":!0,"HAT-P-70 b":!0,"HAT-P-8 b":!0,"HAT-P-9 b":!0,"HATS-1 b":!0,"HATS-10 b":!0,"HATS-11 b":!0,"HATS-12 b":!0,"HATS-13 b":!0,"HATS-14 b":!0,"HATS-15 b":!0,"HATS-16 b":!0,"HATS-17 b":!0,"HATS-18 b":!0,"HATS-2 b":!0,"HATS-22 b":!0,"HATS-23 b":!0,"HATS-24 b":!0,"HATS-25 b":!0,"HATS-26 b":!0,"HATS-27 b":!0,"HATS-28 b":!0,"HATS-29 b":!0,"HATS-3 b":!0,"HATS-30 b":!0,"HATS-31 b":!0,"HATS-32 b":!0,"HATS-33 b":!0,"HATS-34 b":!0,"HATS-35 b":!0,"HATS-36 b":!0,"HATS-37 A b":!0,"HATS-38 b":!0,"HATS-39 b":!0,"HATS-4 b":!0,"HATS-40 b":!0,"HATS-41 b":!0,"HATS-42 b":!0,"HATS-43 b":!0,"HATS-44 b":!0,"HATS-45 b":!0,"HATS-46 b":!0,"HATS-47 b":!0,"HATS-48 A b":!0,"HATS-49 b":!0,"HATS-5 b":!0,"HATS-50 b":!0,"HATS-51 b":!0,"HATS-52 b":!0,"HATS-53 b":!0,"HATS-54 b":!0,"HATS-55 b":!0,"HATS-56 b":!0,"HATS-57 b":!0,"HATS-58 A b":!0,"HATS-59 b":!0,"HATS-59 c":!0,"HATS-6 b":!0,"HATS-60 b":!0,"HATS-61 b":!0,"HATS-62 b":!0,"HATS-63 b":!0,"HATS-64 b":!0,"HATS-65 b":!0,"HATS-66 b":!0,"HATS-67 b":!0,"HATS-68 b":!0,"HATS-69 b":!0,"HATS-7 b":!0,"HATS-70 b":!0,"HATS-71 b":!0,"HATS-72 b":!0,"HATS-74 A b":!0,"HATS-75 b":!0,"HATS-76 b":!0,"HATS-77 b":!0,"HATS-8 b":!0,"HATS-9 b":!0,"HD 100546 b":!0,"HD 100655 b":!0,"HD 100777 b":!0,"HD 10180 c":!0,"HD 10180 d":!0,"HD 10180 e":!0,"HD 10180 f":!0,"HD 10180 g":!0,"HD 10180 h":!0,"HD 101930 b":!0,"HD 102117 b":!0,"HD 102195 b":!0,"HD 102272 b":!0,"HD 102329 b":!0,"HD 102329 c":!0,"HD 102365 b":!0,"HD 102843 b":!0,"HD 102956 b":!0,"HD 103197 b":!0,"HD 103720 b":!0,"HD 103774 b":!0,"HD 103891 b":!0,"HD 103949 b":!0,"HD 104067 b":!0,"HD 104067 c":!0,"HD 10442 b":!0,"HD 104985 b":!0,"HD 105618 b":!0,"HD 105618 c":!0,"HD 105779 b":!0,"HD 106252 b":!0,"HD 106270 b":!0,"HD 106315 b":!0,"HD 106315 c":!0,"HD 10647 b":!0,"HD 106515 A b":!0,"HD 106906 b":!0,"HD 10697 b":!0,"HD 107148 b":!0,"HD 107148 c":!0,"HD 108147 b":!0,"HD 108202 b":!0,"HD 108236 b":!0,"HD 108236 c":!0,"HD 108236 d":!0,"HD 108236 e":!0,"HD 108236 f":!0,"HD 108341 b":!0,"HD 108863 b":!0,"HD 108874 b":!0,"HD 108874 c":!0,"HD 109246 b":!0,"HD 109271 b":!0,"HD 109271 c":!0,"HD 109286 b":!0,"HD 109749 b":!0,"HD 10975 b":!0,"HD 109833 b":!0,"HD 109833 c":!0,"HD 109988 b":!0,"HD 110014 b":!0,"HD 110067 b":!0,"HD 110067 c":!0,"HD 110067 d":!0,"HD 110067 e":!0,"HD 110067 f":!0,"HD 110067 g":!0,"HD 110082 b":!0,"HD 110113 b":!0,"HD 110113 c":!0,"HD 110537 b":!0,"HD 11112 b":!0,"HD 111232 b":!0,"HD 111232 c":!0,"HD 111591 b":!0,"HD 111998 b":!0,"HD 112300 b":!0,"HD 112570 b":!0,"HD 112640 b":!0,"HD 113337 b":!0,"HD 113337 c":!0,"HD 11343 c":!0,"HD 113538 b":!0,"HD 113538 c":!0,"HD 113996 b":!0,"HD 114082 b":!0,"HD 114386 b":!0,"HD 114729 b":!0,"HD 114783 b":!0,"HD 114783 c":!0,"HD 11505 b":!0,"HD 11506 b":!0,"HD 11506 c":!0,"HD 11506 d":!0,"HD 115404 A b":!0,"HD 115404 A c":!0,"HD 115954 b":!0,"HD 116029 b":!0,"HD 116029 c":!0,"HD 117207 b":!0,"HD 11755 b":!0,"HD 117618 b":!0,"HD 118203 b":!0,"HD 118203 c":!0,"HD 11964 b":!0,"HD 11964 c":!0,"HD 11977 b":!0,"HD 120084 b":!0,"HD 121504 b":!0,"HD 12235 b":!0,"HD 12235 c":!0,"HD 122562 c":!0,"HD 124330 b":!0,"HD 12484 b":!0,"HD 125271 b":!0,"HD 125390 b":!0,"HD 125595 b":!0,"HD 125612 b":!0,"HD 125612 c":!0,"HD 125612 d":!0,"HD 12648 b":!0,"HD 126525 b":!0,"HD 12661 b":!0,"HD 12661 c":!0,"HD 126614 b":!0,"HD 127506 b":!0,"HD 128311 b":!0,"HD 128311 c":!0,"HD 128356 b":!0,"HD 129445 b":!0,"HD 130322 b":!0,"HD 131496 b":!0,"HD 13167 b":!0,"HD 13189 b":!0,"HD 132406 b":!0,"HD 132563 b":!0,"HD 133131 A b":!0,"HD 133131 A c":!0,"HD 133131 B b":!0,"HD 134060 b":!0,"HD 134060 c":!0,"HD 134606 b":!0,"HD 134606 c":!0,"HD 134606 d":!0,"HD 134606 e":!0,"HD 134606 f":!0,"HD 134987 b":!0,"HD 134987 c":!0,"HD 135625 b":!0,"HD 135694 b":!0,"HD 135872 b":!0,"HD 136118 b":!0,"HD 136352 b":!0,"HD 136352 c":!0,"HD 136352 d":!0,"HD 136418 b":!0,"HD 136925 b":!0,"HD 13724 c":!0,"HD 137388 b":!0,"HD 137496 b":!0,"HD 137496 c":!0,"HD 13808 b":!0,"HD 13808 c":!0,"HD 13908 b":!0,"HD 13908 c":!0,"HD 13931 b":!0,"HD 139357 b":!0,"HD 1397 b":!0,"HD 14067 b":!0,"HD 140901 b":!0,"HD 140901 c":!0,"HD 141004 b":!0,"HD 141399 b":!0,"HD 141399 c":!0,"HD 141399 d":!0,"HD 141399 e":!0,"HD 141937 b":!0,"HD 142 A d":!0,"HD 142 b":!0,"HD 142 c":!0,"HD 142022 A b":!0,"HD 142245 b":!0,"HD 142415 b":!0,"HD 143105 b":!0,"HD 143361 b":!0,"HD 144899 b":!0,"HD 145377 b":!0,"HD 145457 b":!0,"HD 145675 c":!0,"HD 145934 b":!0,"HD 1461 b":!0,"HD 1461 c":!0,"HD 147018 b":!0,"HD 147018 c":!0,"HD 147379 b":!0,"HD 147513 b":!0,"HD 14787 b":!0,"HD 147873 b":!0,"HD 147873 c":!0,"HD 148156 b":!0,"HD 148164 b":!0,"HD 148164 c":!0,"HD 148427 b":!0,"HD 149026 b":!0,"HD 149143 b":!0,"HD 149806 b":!0,"HD 150010 b":!0,"HD 1502 b":!0,"HD 150706 b":!0,"HD 151450 b":!0,"HD 151450 c":!0,"HD 152079 b":!0,"HD 152581 b":!0,"HD 152843 b":!0,"HD 152843 c":!0,"HD 15337 b":!0,"HD 15337 c":!0,"HD 153557 b":!0,"HD 153557 c":!0,"HD 153557 d":!0,"HD 153950 b":!0,"HD 154088 b":!0,"HD 154345 b":!0,"HD 154391 b":!0,"HD 154672 b":!0,"HD 154857 b":!0,"HD 154857 c":!0,"HD 155193 b":!0,"HD 155358 b":!0,"HD 155358 c":!0,"HD 155918 b":!0,"HD 155918 c":!0,"HD 156098 b":!0,"HD 156098 c":!0,"HD 156279 b":!0,"HD 156279 c":!0,"HD 156411 b":!0,"HD 156668 b":!0,"HD 156668 c":!0,"HD 156846 b":!0,"HD 158038 b":!0,"HD 158259 b":!0,"HD 158259 c":!0,"HD 158259 d":!0,"HD 158259 e":!0,"HD 158259 f":!0,"HD 158996 b":!0,"HD 15906 b":!0,"HD 15906 c":!0,"HD 159243 b":!0,"HD 159243 c":!0,"HD 159868 b":!0,"HD 159868 c":!0,"HD 1605 b":!0,"HD 1605 c":!0,"HD 160691 b":!0,"HD 160691 c":!0,"HD 160691 d":!0,"HD 160691 e":!0,"HD 161178 b":!0,"HD 16141 b":!0,"HD 16175 b":!0,"HD 162020 b":!0,"HD 163607 b":!0,"HD 163607 c":!0,"HD 16417 b":!0,"HD 164509 b":!0,"HD 164595 b":!0,"HD 164604 b":!0,"HD 164922 b":!0,"HD 164922 c":!0,"HD 164922 d":!0,"HD 164922 e":!0,"HD 165131 b":!0,"HD 165155 b":!0,"HD 1666 b":!0,"HD 166724 b":!0,"HD 167042 b":!0,"HD 167677 b":!0,"HD 167768 b":!0,"HD 168009 b":!0,"HD 168443 b":!0,"HD 168443 c":!0,"HD 168746 b":!0,"HD 168863 b":!0,"HD 1690 b":!0,"HD 16905 b":!0,"HD 169142 b":!0,"HD 169830 b":!0,"HD 169830 c":!0,"HD 170469 b":!0,"HD 17092 b":!0,"HD 171028 b":!0,"HD 171238 b":!0,"HD 17156 b":!0,"HD 173416 b":!0,"HD 174205 b":!0,"HD 175167 b":!0,"HD 175541 b":!0,"HD 175607 b":!0,"HD 17674 b":!0,"HD 176986 b":!0,"HD 176986 c":!0,"HD 177565 b":!0,"HD 177830 b":!0,"HD 177830 c":!0,"HD 178911 B b":!0,"HD 179079 b":!0,"HD 179949 b":!0,"HD 180053 b":!0,"HD 18015 b":!0,"HD 180314 b":!0,"HD 180617 b":!0,"HD 180902 b":!0,"HD 181234 b":!0,"HD 181342 b":!0,"HD 18143 b":!0,"HD 18143 c":!0,"HD 181433 b":!0,"HD 181433 c":!0,"HD 181433 d":!0,"HD 181720 b":!0,"HD 183263 b":!0,"HD 183263 c":!0,"HD 183579 b":!0,"HD 184010 b":!0,"HD 184010 c":!0,"HD 184010 d":!0,"HD 18438 b":!0,"HD 185269 b":!0,"HD 185283 b":!0,"HD 18599 b":!0,"HD 187085 b":!0,"HD 187123 b":!0,"HD 187123 c":!0,"HD 18742 b":!0,"HD 188015 b":!0,"HD 188641 b":!0,"HD 189567 b":!0,"HD 189567 c":!0,"HD 189733 b":!0,"HD 190007 b":!0,"HD 190228 b":!0,"HD 190360 b":!0,"HD 190360 c":!0,"HD 190647 b":!0,"HD 190984 b":!0,"HD 191806 b":!0,"HD 191939 b":!0,"HD 191939 c":!0,"HD 191939 d":!0,"HD 191939 e":!0,"HD 191939 f":!0,"HD 191939 g":!0,"HD 192263 b":!0,"HD 192310 b":!0,"HD 192310 c":!0,"HD 192699 b":!0,"HD 194490 b":!0,"HD 195019 b":!0,"HD 196050 b":!0,"HD 196067 b":!0,"HD 19615 b":!0,"HD 196885 A b":!0,"HD 197037 b":!0,"HD 199509 b":!0,"HD 19994 b":!0,"HD 20003 b":!0,"HD 20003 c":!0,"HD 200964 b":!0,"HD 200964 c":!0,"HD 202206 c":!0,"HD 202696 b":!0,"HD 202696 c":!0,"HD 202772 A b":!0,"HD 203030 b":!0,"HD 20329 b":!0,"HD 203387 b":!0,"HD 203387 c":!0,"HD 2039 b":!0,"HD 204313 b":!0,"HD 204313 c":!0,"HD 204313 e":!0,"HD 204941 b":!0,"HD 205158 b":!0,"HD 205739 b":!0,"HD 206255 b":!0,"HD 206610 b":!0,"HD 206893 b":!0,"HD 206893 c":!0,"HD 207496 b":!0,"HD 20781 b":!0,"HD 20781 c":!0,"HD 20781 d":!0,"HD 20781 e":!0,"HD 20782 b":!0,"HD 207832 b":!0,"HD 207832 c":!0,"HD 207897 b":!0,"HD 20794 b":!0,"HD 20794 c":!0,"HD 20794 d":!0,"HD 20794 e":!0,"HD 208487 b":!0,"HD 208527 b":!0,"HD 20868 b":!0,"HD 208897 b":!0,"HD 209458 b":!0,"HD 210193 b":!0,"HD 210277 b":!0,"HD 210702 b":!0,"HD 211403 b":!0,"HD 211810 b":!0,"HD 211970 b":!0,"HD 212301 b":!0,"HD 212771 b":!0,"HD 213240 b":!0,"HD 213472 b":!0,"HD 213519 b":!0,"HD 213885 b":!0,"HD 213885 c":!0,"HD 21411 b":!0,"HD 214823 b":!0,"HD 215152 b":!0,"HD 215152 c":!0,"HD 215152 d":!0,"HD 215152 e":!0,"HD 21520 b":!0,"HD 215497 b":!0,"HD 215497 c":!0,"HD 216435 b":!0,"HD 216437 b":!0,"HD 216520 b":!0,"HD 216520 c":!0,"HD 216536 b":!0,"HD 216770 b":!0,"HD 21693 b":!0,"HD 21693 c":!0,"HD 217107 b":!0,"HD 217107 c":!0,"HD 21749 c":!0,"HD 217786 b":!0,"HD 217786 c":!0,"HD 217958 b":!0,"HD 218566 b":!0,"HD 219077 b":!0,"HD 219134 b":!0,"HD 219134 c":!0,"HD 219134 d":!0,"HD 219134 f":!0,"HD 219134 g":!0,"HD 219134 h":!0,"HD 219139 b":!0,"HD 219415 b":!0,"HD 219666 b":!0,"HD 219828 b":!0,"HD 219828 c":!0,"HD 220074 b":!0,"HD 220197 b":!0,"HD 220689 b":!0,"HD 220773 b":!0,"HD 220842 b":!0,"HD 221287 b":!0,"HD 221416 b":!0,"HD 221420 b":!0,"HD 221585 b":!0,"HD 222076 b":!0,"HD 222155 b":!0,"HD 222237 b":!0,"HD 222582 b":!0,"HD 224538 b":!0,"HD 224693 b":!0,"HD 22496 b":!0,"HD 22532 b":!0,"HD 22781 b":!0,"HD 22946 d":!0,"HD 23079 b":!0,"HD 23127 b":!0,"HD 231701 b":!0,"HD 233604 b":!0,"HD 233832 b":!0,"HD 23472 b":!0,"HD 23472 c":!0,"HD 23472 d":!0,"HD 23472 e":!0,"HD 23472 f":!0,"HD 235088 b":!0,"HD 23596 b":!0,"HD 238090 b":!0,"HD 238914 b":!0,"HD 240210 b":!0,"HD 240237 b":!0,"HD 24040 b":!0,"HD 24040 c":!0,"HD 24064 b":!0,"HD 24085 b":!0,"HD 25015 b":!0,"HD 25171 b":!0,"HD 25463 b":!0,"HD 25463 c":!0,"HD 25723 b":!0,"HD 25912 b":!0,"HD 25912 c":!0,"HD 260655 b":!0,"HD 260655 c":!0,"HD 26161 b":!0,"HD 2638 b":!0,"HD 2685 b":!0,"HD 27442 b":!0,"HD 27631 b":!0,"HD 27894 b":!0,"HD 27894 c":!0,"HD 27894 d":!0,"HD 27969 b":!0,"HD 28109 b":!0,"HD 28109 c":!0,"HD 28109 d":!0,"HD 28185 b":!0,"HD 28185 c":!0,"HD 28192 b":!0,"HD 28254 b":!0,"HD 284149 AB b":!0,"HD 285507 b":!0,"HD 285968 b":!0,"HD 28678 b":!0,"HD 29021 b":!0,"HD 290327 b":!0,"HD 29399 b":!0,"HD 2952 b":!0,"HD 29985 b":!0,"HD 30177 b":!0,"HD 30177 c":!0,"HD 30562 b":!0,"HD 30669 b":!0,"HD 30856 b":!0,"HD 31253 b":!0,"HD 31527 b":!0,"HD 31527 c":!0,"HD 31527 d":!0,"HD 3167 b":!0,"HD 3167 c":!0,"HD 3167 d":!0,"HD 3167 e":!0,"HD 32518 b":!0,"HD 32963 b":!0,"HD 330075 b":!0,"HD 331093 b":!0,"HD 33142 b":!0,"HD 33142 c":!0,"HD 33142 d":!0,"HD 332231 b":!0,"HD 33283 b":!0,"HD 33564 b":!0,"HD 33844 b":!0,"HD 33844 c":!0,"HD 34445 b":!0,"HD 34445 c":!0,"HD 34445 d":!0,"HD 34445 e":!0,"HD 34445 f":!0,"HD 34445 g":!0,"HD 35759 b":!0,"HD 360 b":!0,"HD 36384 b":!0,"HD 3651 b":!0,"HD 37124 b":!0,"HD 37124 c":!0,"HD 37124 d":!0,"HD 37605 b":!0,"HD 37605 c":!0,"HD 3765 b":!0,"HD 38283 b":!0,"HD 38529 b":!0,"HD 38529 c":!0,"HD 38801 b":!0,"HD 39091 b":!0,"HD 39194 b":!0,"HD 39194 c":!0,"HD 39194 d":!0,"HD 39855 b":!0,"HD 40307 b":!0,"HD 40307 c":!0,"HD 40307 d":!0,"HD 40307 f":!0,"HD 40307 g":!0,"HD 40956 b":!0,"HD 40979 b":!0,"HD 41004 A b":!0,"HD 41004 B b":!0,"HD 4113 b":!0,"HD 42012 b":!0,"HD 4203 b":!0,"HD 4203 c":!0,"HD 4208 b":!0,"HD 42618 b":!0,"HD 42813 b":!0,"HD 4308 b":!0,"HD 4313 b":!0,"HD 43197 b":!0,"HD 43197 c":!0,"HD 43691 b":!0,"HD 44219 b":!0,"HD 45184 b":!0,"HD 45184 c":!0,"HD 45350 b":!0,"HD 45364 b":!0,"HD 45364 c":!0,"HD 45652 b":!0,"HD 457 b":!0,"HD 46375 b":!0,"HD 47186 b":!0,"HD 47186 c":!0,"HD 4732 b":!0,"HD 4732 c":!0,"HD 47366 b":!0,"HD 47366 c":!0,"HD 47536 b":!0,"HD 4760 b":!0,"HD 48265 b":!0,"HD 48948 b":!0,"HD 48948 c":!0,"HD 48948 d":!0,"HD 4917 b":!0,"HD 49674 b":!0,"HD 50499 b":!0,"HD 50499 c":!0,"HD 50554 b":!0,"HD 51608 b":!0,"HD 51608 c":!0,"HD 52265 b":!0,"HD 5278 b":!0,"HD 5278 c":!0,"HD 5319 b":!0,"HD 5319 c":!0,"HD 55696 b":!0,"HD 5583 b":!0,"HD 5608 b":!0,"HD 564 b":!0,"HD 56414 b":!0,"HD 56957 b":!0,"HD 5891 b":!0,"HD 59686 A b":!0,"HD 60292 b":!0,"HD 60532 b":!0,"HD 60532 c":!0,"HD 6061 b":!0,"HD 62364 b":!0,"HD 62364 c":!0,"HD 62509 b":!0,"HD 62549 b":!0,"HD 63433 b":!0,"HD 63433 c":!0,"HD 63433 d":!0,"HD 63454 b":!0,"HD 63765 b":!0,"HD 63935 b":!0,"HD 63935 c":!0,"HD 64114 b":!0,"HD 64121 b":!0,"HD 6434 b":!0,"HD 65216 b":!0,"HD 65216 c":!0,"HD 66141 b":!0,"HD 66428 b":!0,"HD 66428 c":!0,"HD 67087 b":!0,"HD 67087 c":!0,"HD 6718 b":!0,"HD 68402 b":!0,"HD 6860 b":!0,"HD 68988 b":!0,"HD 68988 c":!0,"HD 69123 b":!0,"HD 69830 b":!0,"HD 69830 c":!0,"HD 69830 d":!0,"HD 70573 b":!0,"HD 70642 b":!0,"HD 7199 b":!0,"HD 72490 b":!0,"HD 72659 b":!0,"HD 72659 c":!0,"HD 72892 b":!0,"HD 73256 c":!0,"HD 73267 b":!0,"HD 73267 c":!0,"HD 73344 b":!0,"HD 73526 b":!0,"HD 73526 c":!0,"HD 73534 b":!0,"HD 73583 b":!0,"HD 73583 c":!0,"HD 74156 b":!0,"HD 74156 c":!0,"HD 7449 b":!0,"HD 74698 b":!0,"HD 74698 c":!0,"HD 75289 b":!0,"HD 75302 b":!0,"HD 75784 b":!0,"HD 75784 c":!0,"HD 75898 b":!0,"HD 76700 b":!0,"HD 76920 b":!0,"HD 77338 b":!0,"HD 77946 b":!0,"HD 79181 b":!0,"HD 7924 b":!0,"HD 7924 c":!0,"HD 7924 d":!0,"HD 79498 b":!0,"HD 80606 b":!0,"HD 80653 b":!0,"HD 80869 b":!0,"HD 80883 b":!0,"HD 80913 b":!0,"HD 81040 b":!0,"HD 81688 b":!0,"HD 81817 b":!0,"HD 81817 c":!0,"HD 82886 b":!0,"HD 82943 b":!0,"HD 82943 c":!0,"HD 8326 b":!0,"HD 83443 b":!0,"HD 83443 c":!0,"HD 8535 b":!0,"HD 85390 b":!0,"HD 8574 b":!0,"HD 86065 b":!0,"HD 86081 b":!0,"HD 86226 b":!0,"HD 86226 c":!0,"HD 86264 b":!0,"HD 8673 b":!0,"HD 86950 b":!0,"HD 87646 b":!0,"HD 87883 b":!0,"HD 88072 b":!0,"HD 88133 b":!0,"HD 88986 b":!0,"HD 89307 b":!0,"HD 89345 b":!0,"HD 89744 b":!0,"HD 89839 b":!0,"HD 90156 b":!0,"HD 9174 b":!0,"HD 92788 b":!0,"HD 92788 c":!0,"HD 93083 b":!0,"HD 93351 b":!0,"HD 93351 c":!0,"HD 93385 b":!0,"HD 93385 c":!0,"HD 93385 d":!0,"HD 93963 A b":!0,"HD 93963 A c":!0,"HD 9446 b":!0,"HD 9446 c":!0,"HD 94771 b":!0,"HD 94834 b":!0,"HD 95086 b":!0,"HD 95089 b":!0,"HD 95089 c":!0,"HD 95127 b":!0,"HD 95338 b":!0,"HD 95544 b":!0,"HD 95735 c":!0,"HD 95872 b":!0,"HD 96063 b":!0,"HD 96127 b":!0,"HD 96167 b":!0,"HD 96700 b":!0,"HD 96700 c":!0,"HD 96700 d":!0,"HD 96992 b":!0,"HD 97037 b":!0,"HD 97048 b":!0,"HD 97658 b":!0,"HD 98219 b":!0,"HD 98649 b":!0,"HD 98736 b":!0,"HD 99109 b":!0,"HD 99283 b":!0,"HD 99492 b":!0,"HD 99492 c":!0,"HD 99706 b":!0,"HD 99706 c":!0,"HIP 105854 b":!0,"HIP 107772 b":!0,"HIP 107773 b":!0,"HIP 109384 b":!0,"HIP 109600 b":!0,"HIP 113103 b":!0,"HIP 113103 c":!0,"HIP 114933 b":!0,"HIP 116454 b":!0,"HIP 12961 b":!0,"HIP 14810 b":!0,"HIP 14810 c":!0,"HIP 14810 d":!0,"HIP 19976 b":!0,"HIP 21152 b":!0,"HIP 29442 c":!0,"HIP 29442 d":!0,"HIP 34222 b":!0,"HIP 35173 b":!0,"HIP 35965 b":!0,"HIP 38594 b":!0,"HIP 38594 c":!0,"HIP 39017 b":!0,"HIP 41378 b":!0,"HIP 41378 c":!0,"HIP 41378 d":!0,"HIP 41378 e":!0,"HIP 41378 f":!0,"HIP 4845 b":!0,"HIP 48714 b":!0,"HIP 5158 b":!0,"HIP 5158 c":!0,"HIP 54373 b":!0,"HIP 54373 c":!0,"HIP 54597 b":!0,"HIP 55507 b":!0,"HIP 56640 b":!0,"HIP 57274 b":!0,"HIP 57274 c":!0,"HIP 57274 d":!0,"HIP 5763 b":!0,"HIP 63242 b":!0,"HIP 65 A b":!0,"HIP 65407 b":!0,"HIP 65407 c":!0,"HIP 65426 b":!0,"HIP 65891 b":!0,"HIP 66074 b":!0,"HIP 67522 b":!0,"HIP 67522 c":!0,"HIP 67537 b":!0,"HIP 67851 b":!0,"HIP 67851 c":!0,"HIP 70849 b":!0,"HIP 71135 b":!0,"HIP 74890 b":!0,"HIP 75092 b":!0,"HIP 77900 b":!0,"HIP 78530 b":!0,"HIP 79098 AB b":!0,"HIP 79431 b":!0,"HIP 81208 C b":!0,"HIP 8152 b":!0,"HIP 8152 c":!0,"HIP 8541 b":!0,"HIP 86221 b":!0,"HIP 90988 b":!0,"HIP 91258 b":!0,"HIP 94235 b":!0,"HIP 948 b":!0,"HIP 9618 b":!0,"HIP 9618 c":!0,"HIP 97166 b":!0,"HIP 97166 c":!0,"HIP 97233 b":!0,"HIP 99770 b":!0,"HN Lib b":!0,"HN Peg b":!0,"HR 2562 b":!0,"HR 5183 b":!0,"HR 810 b":!0,"HR 858 b":!0,"HR 858 c":!0,"HR 858 d":!0,"HR 8799 b":!0,"HR 8799 c":!0,"HR 8799 d":!0,"HR 8799 e":!0,"HS Psc b":!0,"HU Aqr AB b":!0,"HU Aqr AB c":!0,"IC 4651 9122 b":!0,"ITG 15 b":!0,"K2-10 b":!0,"K2-100 b":!0,"K2-101 b":!0,"K2-102 b":!0,"K2-104 b":!0,"K2-105 b":!0,"K2-107 b":!0,"K2-108 b":!0,"K2-11 b":!0,"K2-110 b":!0,"K2-111 b":!0,"K2-111 c":!0,"K2-113 b":!0,"K2-114 b":!0,"K2-115 b":!0,"K2-116 b":!0,"K2-117 b":!0,"K2-117 c":!0,"K2-118 b":!0,"K2-119 b":!0,"K2-12 b":!0,"K2-120 b":!0,"K2-121 b":!0,"K2-122 b":!0,"K2-123 b":!0,"K2-124 b":!0,"K2-125 b":!0,"K2-126 b":!0,"K2-127 b":!0,"K2-128 b":!0,"K2-129 b":!0,"K2-13 b":!0,"K2-130 b":!0,"K2-131 b":!0,"K2-132 b":!0,"K2-133 b":!0,"K2-133 c":!0,"K2-133 d":!0,"K2-133 e":!0,"K2-136 b":!0,"K2-136 c":!0,"K2-136 d":!0,"K2-137 b":!0,"K2-138 b":!0,"K2-138 c":!0,"K2-138 d":!0,"K2-138 e":!0,"K2-138 f":!0,"K2-138 g":!0,"K2-139 b":!0,"K2-14 b":!0,"K2-140 b":!0,"K2-141 b":!0,"K2-141 c":!0,"K2-146 b":!0,"K2-146 c":!0,"K2-147 b":!0,"K2-148 b":!0,"K2-148 c":!0,"K2-148 d":!0,"K2-149 b":!0,"K2-15 b":!0,"K2-150 b":!0,"K2-151 b":!0,"K2-152 b":!0,"K2-153 b":!0,"K2-154 b":!0,"K2-154 c":!0,"K2-155 b":!0,"K2-155 c":!0,"K2-155 d":!0,"K2-156 b":!0,"K2-157 b":!0,"K2-158 b":!0,"K2-158 c":!0,"K2-159 b":!0,"K2-16 b":!0,"K2-16 c":!0,"K2-160 b":!0,"K2-161 b":!0,"K2-162 b":!0,"K2-163 b":!0,"K2-164 b":!0,"K2-165 b":!0,"K2-165 c":!0,"K2-165 d":!0,"K2-166 b":!0,"K2-167 b":!0,"K2-168 b":!0,"K2-169 b":!0,"K2-17 b":!0,"K2-170 b":!0,"K2-170 c":!0,"K2-171 b":!0,"K2-172 b":!0,"K2-172 c":!0,"K2-173 b":!0,"K2-174 b":!0,"K2-175 b":!0,"K2-176 b":!0,"K2-177 b":!0,"K2-178 b":!0,"K2-179 b":!0,"K2-18 b":!0,"K2-18 c":!0,"K2-180 b":!0,"K2-181 b":!0,"K2-182 b":!0,"K2-183 b":!0,"K2-183 c":!0,"K2-183 d":!0,"K2-184 b":!0,"K2-185 b":!0,"K2-185 c":!0,"K2-186 b":!0,"K2-187 b":!0,"K2-187 c":!0,"K2-187 d":!0,"K2-187 e":!0,"K2-188 b":!0,"K2-188 c":!0,"K2-189 b":!0,"K2-189 c":!0,"K2-19 b":!0,"K2-19 c":!0,"K2-19 d":!0,"K2-190 b":!0,"K2-190 c":!0,"K2-191 b":!0,"K2-192 b":!0,"K2-193 b":!0,"K2-194 b":!0,"K2-195 b":!0,"K2-195 c":!0,"K2-196 b":!0,"K2-197 b":!0,"K2-198 b":!0,"K2-198 c":!0,"K2-198 d":!0,"K2-199 b":!0,"K2-199 c":!0,"K2-200 b":!0,"K2-201 b":!0,"K2-201 c":!0,"K2-2016-BLG-0005L b":!0,"K2-202 b":!0,"K2-203 b":!0,"K2-204 b":!0,"K2-205 b":!0,"K2-206 b":!0,"K2-207 b":!0,"K2-208 b":!0,"K2-209 b":!0,"K2-21 b":!0,"K2-21 c":!0,"K2-210 b":!0,"K2-211 b":!0,"K2-212 b":!0,"K2-213 b":!0,"K2-214 b":!0,"K2-215 b":!0,"K2-216 b":!0,"K2-217 b":!0,"K2-218 b":!0,"K2-219 b":!0,"K2-219 c":!0,"K2-219 d":!0,"K2-22 b":!0,"K2-220 b":!0,"K2-221 b":!0,"K2-222 b":!0,"K2-223 b":!0,"K2-223 c":!0,"K2-224 b":!0,"K2-224 c":!0,"K2-225 b":!0,"K2-226 b":!0,"K2-227 b":!0,"K2-228 b":!0,"K2-229 b":!0,"K2-229 c":!0,"K2-230 b":!0,"K2-231 b":!0,"K2-232 b":!0,"K2-233 b":!0,"K2-233 c":!0,"K2-233 d":!0,"K2-237 b":!0,"K2-238 b":!0,"K2-239 b":!0,"K2-239 c":!0,"K2-239 d":!0,"K2-24 b":!0,"K2-24 c":!0,"K2-240 b":!0,"K2-240 c":!0,"K2-241 b":!0,"K2-242 b":!0,"K2-243 b":!0,"K2-243 c":!0,"K2-244 b":!0,"K2-245 b":!0,"K2-246 b":!0,"K2-247 b":!0,"K2-247 c":!0,"K2-248 b":!0,"K2-249 b":!0,"K2-25 b":!0,"K2-250 b":!0,"K2-251 b":!0,"K2-252 b":!0,"K2-253 b":!0,"K2-254 b":!0,"K2-254 c":!0,"K2-255 b":!0,"K2-257 b":!0,"K2-258 b":!0,"K2-259 b":!0,"K2-26 b":!0,"K2-260 b":!0,"K2-261 b":!0,"K2-263 b":!0,"K2-264 b":!0,"K2-264 c":!0,"K2-265 b":!0,"K2-266 b":!0,"K2-266 c":!0,"K2-266 d":!0,"K2-266 e":!0,"K2-268 b":!0,"K2-268 c":!0,"K2-268 d":!0,"K2-268 e":!0,"K2-268 f":!0,"K2-269 b":!0,"K2-27 b":!0,"K2-270 b":!0,"K2-270 c":!0,"K2-271 b":!0,"K2-272 b":!0,"K2-273 b":!0,"K2-274 b":!0,"K2-275 b":!0,"K2-275 c":!0,"K2-276 b":!0,"K2-277 b":!0,"K2-278 b":!0,"K2-279 b":!0,"K2-28 b":!0,"K2-280 b":!0,"K2-281 b":!0,"K2-282 b":!0,"K2-283 b":!0,"K2-284 b":!0,"K2-285 b":!0,"K2-285 c":!0,"K2-285 d":!0,"K2-285 e":!0,"K2-286 b":!0,"K2-287 b":!0,"K2-288 B b":!0,"K2-289 b":!0,"K2-29 b":!0,"K2-290 b":!0,"K2-290 c":!0,"K2-291 b":!0,"K2-292 b":!0,"K2-293 b":!0,"K2-294 b":!0,"K2-295 b":!0,"K2-3 b":!0,"K2-3 c":!0,"K2-3 d":!0,"K2-30 b":!0,"K2-308 b":!0,"K2-31 b":!0,"K2-312 c":!0,"K2-315 b":!0,"K2-316 b":!0,"K2-316 c":!0,"K2-317 b":!0,"K2-318 b":!0,"K2-319 b":!0,"K2-32 b":!0,"K2-32 c":!0,"K2-32 d":!0,"K2-32 e":!0,"K2-320 b":!0,"K2-321 b":!0,"K2-322 b":!0,"K2-323 b":!0,"K2-324 b":!0,"K2-325 b":!0,"K2-326 b":!0,"K2-329 b":!0,"K2-33 b":!0,"K2-330 b":!0,"K2-331 b":!0,"K2-331 c":!0,"K2-332 b":!0,"K2-333 b":!0,"K2-334 b":!0,"K2-335 b":!0,"K2-336 b":!0,"K2-337 b":!0,"K2-338 b":!0,"K2-339 b":!0,"K2-34 b":!0,"K2-340 b":!0,"K2-341 b":!0,"K2-342 b":!0,"K2-343 b":!0,"K2-343 c":!0,"K2-344 b":!0,"K2-345 b":!0,"K2-346 b":!0,"K2-347 b":!0,"K2-348 b":!0,"K2-348 c":!0,"K2-349 b":!0,"K2-35 b":!0,"K2-35 c":!0,"K2-350 b":!0,"K2-350 c":!0,"K2-351 b":!0,"K2-352 b":!0,"K2-352 c":!0,"K2-352 d":!0,"K2-353 b":!0,"K2-354 b":!0,"K2-355 b":!0,"K2-356 b":!0,"K2-357 b":!0,"K2-358 b":!0,"K2-36 b":!0,"K2-36 c":!0,"K2-365 b":!0,"K2-366 b":!0,"K2-367 b":!0,"K2-368 b":!0,"K2-368 c":!0,"K2-368 d":!0,"K2-369 b":!0,"K2-37 b":!0,"K2-37 c":!0,"K2-37 d":!0,"K2-370 b":!0,"K2-371 b":!0,"K2-372 b":!0,"K2-373 b":!0,"K2-374 b":!0,"K2-374 c":!0,"K2-375 b":!0,"K2-376 b":!0,"K2-377 b":!0,"K2-378 b":!0,"K2-379 b":!0,"K2-38 b":!0,"K2-38 c":!0,"K2-380 b":!0,"K2-381 b":!0,"K2-381 c":!0,"K2-381 d":!0,"K2-382 b":!0,"K2-383 b":!0,"K2-384 b":!0,"K2-384 c":!0,"K2-384 d":!0,"K2-384 e":!0,"K2-384 f":!0,"K2-385 b":!0,"K2-386 b":!0,"K2-387 b":!0,"K2-388 b":!0,"K2-389 b":!0,"K2-389 c":!0,"K2-39 b":!0,"K2-390 b":!0,"K2-391 b":!0,"K2-392 b":!0,"K2-393 b":!0,"K2-394 b":!0,"K2-395 b":!0,"K2-395 c":!0,"K2-396 b":!0,"K2-396 c":!0,"K2-397 b":!0,"K2-398 b":!0,"K2-398 c":!0,"K2-4 b":!0,"K2-400 b":!0,"K2-401 b":!0,"K2-402 b":!0,"K2-403 b":!0,"K2-404 b":!0,"K2-405 b":!0,"K2-406 b":!0,"K2-407 b":!0,"K2-407 c":!0,"K2-408 b":!0,"K2-409 b":!0,"K2-411 b":!0,"K2-412 b":!0,"K2-413 b":!0,"K2-413 c":!0,"K2-414 b":!0,"K2-414 c":!0,"K2-415 b":!0,"K2-416 b":!0,"K2-417 b":!0,"K2-419 A b":!0,"K2-42 b":!0,"K2-43 b":!0,"K2-43 c":!0,"K2-44 b":!0,"K2-45 b":!0,"K2-46 b":!0,"K2-47 b":!0,"K2-48 b":!0,"K2-49 b":!0,"K2-5 b":!0,"K2-5 c":!0,"K2-50 b":!0,"K2-52 b":!0,"K2-53 b":!0,"K2-54 b":!0,"K2-55 b":!0,"K2-57 b":!0,"K2-58 b":!0,"K2-58 c":!0,"K2-58 d":!0,"K2-59 b":!0,"K2-59 c":!0,"K2-6 b":!0,"K2-60 b":!0,"K2-61 b":!0,"K2-62 b":!0,"K2-62 c":!0,"K2-63 b":!0,"K2-63 c":!0,"K2-64 b":!0,"K2-65 b":!0,"K2-66 b":!0,"K2-68 b":!0,"K2-69 b":!0,"K2-7 b":!0,"K2-70 b":!0,"K2-71 b":!0,"K2-72 b":!0,"K2-72 c":!0,"K2-72 d":!0,"K2-72 e":!0,"K2-73 b":!0,"K2-74 b":!0,"K2-75 b":!0,"K2-75 c":!0,"K2-77 b":!0,"K2-79 b":!0,"K2-8 b":!0,"K2-8 c":!0,"K2-80 b":!0,"K2-80 c":!0,"K2-80 d":!0,"K2-81 b":!0,"K2-83 b":!0,"K2-83 c":!0,"K2-84 b":!0,"K2-84 c":!0,"K2-85 b":!0,"K2-86 b":!0,"K2-87 b":!0,"K2-88 b":!0,"K2-89 b":!0,"K2-9 b":!0,"K2-90 b":!0,"K2-90 c":!0,"K2-91 b":!0,"K2-95 b":!0,"K2-97 b":!0,"K2-98 b":!0,"K2-99 b":!0,"KELT-1 b":!0,"KELT-10 b":!0,"KELT-11 b":!0,"KELT-12 b":!0,"KELT-14 b":!0,"KELT-15 b":!0,"KELT-16 b":!0,"KELT-17 b":!0,"KELT-18 b":!0,"KELT-19 A b":!0,"KELT-2 A b":!0,"KELT-20 b":!0,"KELT-21 b":!0,"KELT-23 A b":!0,"KELT-24 b":!0,"KELT-3 b":!0,"KELT-4 A b":!0,"KELT-6 b":!0,"KELT-6 c":!0,"KELT-7 b":!0,"KELT-8 b":!0,"KELT-9 b":!0,"KIC 10001893 b":!0,"KIC 10001893 c":!0,"KIC 10001893 d":!0,"KIC 10068024 b":!0,"KIC 10525077 b":!0,"KIC 3526061 b":!0,"KIC 3558849 b":!0,"KIC 5437945 b":!0,"KIC 5479689 b":!0,"KIC 7917485 b":!0,"KIC 8121913 b":!0,"KIC 8540376 b":!0,"KIC 8540376 c":!0,"KIC 9663113 b":!0,"KMT-2016-BLG-0212L b":!0,"KMT-2016-BLG-1105L b":!0,"KMT-2016-BLG-1107L b":!0,"KMT-2016-BLG-1397L b":!0,"KMT-2016-BLG-1820L b":!0,"KMT-2016-BLG-1836L b":!0,"KMT-2016-BLG-2142L b":!0,"KMT-2016-BLG-2364L b":!0,"KMT-2016-BLG-2397L b":!0,"KMT-2016-BLG-2605L b":!0,"KMT-2017-BLG-0165L b":!0,"KMT-2017-BLG-0428L b":!0,"KMT-2017-BLG-0673L b":!0,"KMT-2017-BLG-1003L b":!0,"KMT-2017-BLG-1038L b":!0,"KMT-2017-BLG-1146L b":!0,"KMT-2017-BLG-1194L b":!0,"KMT-2017-BLG-2509L b":!0,"KMT-2018-BLG-0029L b":!0,"KMT-2018-BLG-0030L b":!0,"KMT-2018-BLG-0087L b":!0,"KMT-2018-BLG-0247L b":!0,"KMT-2018-BLG-0748L b":!0,"KMT-2018-BLG-0885L b":!0,"KMT-2018-BLG-1025L b":!0,"KMT-2018-BLG-1292L b":!0,"KMT-2018-BLG-1743L b":!0,"KMT-2018-BLG-1976L b":!0,"KMT-2018-BLG-1988L b":!0,"KMT-2018-BLG-1990L b":!0,"KMT-2018-BLG-1996L b":!0,"KMT-2018-BLG-2602L b":!0,"KMT-2019-BLG-0253L b":!0,"KMT-2019-BLG-0297L b":!0,"KMT-2019-BLG-0298L b":!0,"KMT-2019-BLG-0335L b":!0,"KMT-2019-BLG-0371L b":!0,"KMT-2019-BLG-0414L b":!0,"KMT-2019-BLG-0842L b":!0,"KMT-2019-BLG-0953L b":!0,"KMT-2019-BLG-1042L b":!0,"KMT-2019-BLG-1216L b":!0,"KMT-2019-BLG-1339L b":!0,"KMT-2019-BLG-1367L b":!0,"KMT-2019-BLG-1552L b":!0,"KMT-2019-BLG-1715L b":!0,"KMT-2019-BLG-1806L b":!0,"KMT-2019-BLG-1953L b":!0,"KMT-2019-BLG-2783L b":!0,"KMT-2019-BLG-2974L b":!0,"KMT-2020-BLG-0414L b":!0,"KMT-2020-BLG-0414L c":!0,"KMT-2021-BLG-0119L b":!0,"KMT-2021-BLG-0171L b":!0,"KMT-2021-BLG-0192L b":!0,"KMT-2021-BLG-0240L b":!0,"KMT-2021-BLG-0320L b":!0,"KMT-2021-BLG-0322L b":!0,"KMT-2021-BLG-0712L b":!0,"KMT-2021-BLG-0748L b":!0,"KMT-2021-BLG-0909L b":!0,"KMT-2021-BLG-0912L b":!0,"KMT-2021-BLG-1077L b":!0,"KMT-2021-BLG-1077L c":!0,"KMT-2021-BLG-1105L b":!0,"KMT-2021-BLG-1150L b":!0,"KMT-2021-BLG-1253L b":!0,"KMT-2021-BLG-1303L b":!0,"KMT-2021-BLG-1372L b":!0,"KMT-2021-BLG-1391L b":!0,"KMT-2021-BLG-1547L b":!0,"KMT-2021-BLG-1554L b":!0,"KMT-2021-BLG-1689L b":!0,"KMT-2021-BLG-1770L b":!0,"KMT-2021-BLG-1898L b":!0,"KMT-2021-BLG-2010L b":!0,"KMT-2021-BLG-2294L b":!0,"KMT-2021-BLG-2478L b":!0,"KMT-2022-BLG-0371L b":!0,"KMT-2022-BLG-0440L b":!0,"KMT-2022-BLG-1013L b":!0,"KMT-2023-BLG-0416L b":!0,"KMT-2023-BLG-0469L b":!0,"KMT-2023-BLG-0735L b":!0,"KMT-2023-BLG-1431L b":!0,"KMT-2023-BLG-1454L b":!0,"KMT-2023-BLG-1642L b":!0,"KOI-12 b":!0,"KOI-1257 b":!0,"KOI-13 b":!0,"KOI-142 b":!0,"KOI-142 c":!0,"KOI-1599.01":!0,"KOI-1599.02":!0,"KOI-1783.01":!0,"KOI-1783.02":!0,"KOI-1831 d":!0,"KOI-1833 d":!0,"KOI-217 b":!0,"KOI-2513.01":!0,"KOI-3503 b":!0,"KOI-3503 c":!0,"KOI-351 b":!0,"KOI-351 c":!0,"KOI-351 d":!0,"KOI-351 e":!0,"KOI-351 f":!0,"KOI-351 g":!0,"KOI-351 h":!0,"KOI-3680 b":!0,"KOI-4777.01":!0,"KOI-55 b":!0,"KOI-55 c":!0,"KOI-7368 b":!0,"KOI-7913 b":!0,"KOI-94 b":!0,"KOI-94 c":!0,"KOI-94 d":!0,"KOI-94 e":!0,"KOI-984 b":!0,"KOI-984 c":!0,"KPS-1 b":!0,"Kapteyn c":!0,"Kepler-10 b":!0,"Kepler-10 c":!0,"Kepler-10 d":!0,"Kepler-100 b":!0,"Kepler-100 c":!0,"Kepler-100 d":!0,"Kepler-100 e":!0,"Kepler-1000 b":!0,"Kepler-1001 b":!0,"Kepler-1001 c":!0,"Kepler-1002 b":!0,"Kepler-1003 b":!0,"Kepler-1004 b":!0,"Kepler-1005 b":!0,"Kepler-1006 b":!0,"Kepler-1007 b":!0,"Kepler-1008 b":!0,"Kepler-1009 b":!0,"Kepler-101 b":!0,"Kepler-101 c":!0,"Kepler-1010 b":!0,"Kepler-1011 b":!0,"Kepler-1012 b":!0,"Kepler-1013 b":!0,"Kepler-1014 b":!0,"Kepler-1015 b":!0,"Kepler-1016 b":!0,"Kepler-1016 c":!0,"Kepler-1017 b":!0,"Kepler-1018 b":!0,"Kepler-1019 b":!0,"Kepler-102 b":!0,"Kepler-102 c":!0,"Kepler-102 d":!0,"Kepler-102 e":!0,"Kepler-102 f":!0,"Kepler-1020 b":!0,"Kepler-1021 b":!0,"Kepler-1022 b":!0,"Kepler-1023 b":!0,"Kepler-1024 b":!0,"Kepler-1025 b":!0,"Kepler-1026 b":!0,"Kepler-1027 b":!0,"Kepler-1028 b":!0,"Kepler-1029 b":!0,"Kepler-103 b":!0,"Kepler-103 c":!0,"Kepler-1030 b":!0,"Kepler-1031 b":!0,"Kepler-1032 b":!0,"Kepler-1033 b":!0,"Kepler-1034 b":!0,"Kepler-1035 b":!0,"Kepler-1036 b":!0,"Kepler-1037 b":!0,"Kepler-1038 b":!0,"Kepler-1038 c":!0,"Kepler-1039 b":!0,"Kepler-104 b":!0,"Kepler-104 c":!0,"Kepler-104 d":!0,"Kepler-1040 b":!0,"Kepler-1041 b":!0,"Kepler-1042 b":!0,"Kepler-1043 b":!0,"Kepler-1044 b":!0,"Kepler-1045 b":!0,"Kepler-1046 b":!0,"Kepler-1047 b":!0,"Kepler-1047 c":!0,"Kepler-1048 b":!0,"Kepler-1049 b":!0,"Kepler-105 b":!0,"Kepler-105 c":!0,"Kepler-1050 b":!0,"Kepler-1050 c":!0,"Kepler-1051 b":!0,"Kepler-1052 b":!0,"Kepler-1052 c":!0,"Kepler-1053 b":!0,"Kepler-1054 b":!0,"Kepler-1055 b":!0,"Kepler-1056 b":!0,"Kepler-1057 b":!0,"Kepler-1058 b":!0,"Kepler-1059 b":!0,"Kepler-106 b":!0,"Kepler-106 c":!0,"Kepler-106 d":!0,"Kepler-106 e":!0,"Kepler-1060 b":!0,"Kepler-1061 b":!0,"Kepler-1062 b":!0,"Kepler-1063 b":!0,"Kepler-1064 b":!0,"Kepler-1065 b":!0,"Kepler-1065 c":!0,"Kepler-1066 b":!0,"Kepler-1067 b":!0,"Kepler-1067 c":!0,"Kepler-1068 b":!0,"Kepler-1069 b":!0,"Kepler-107 b":!0,"Kepler-107 c":!0,"Kepler-107 d":!0,"Kepler-107 e":!0,"Kepler-1070 b":!0,"Kepler-1071 b":!0,"Kepler-1072 b":!0,"Kepler-1073 b":!0,"Kepler-1073 c":!0,"Kepler-1073 d":!0,"Kepler-1074 b":!0,"Kepler-1075 b":!0,"Kepler-1076 b":!0,"Kepler-1077 b":!0,"Kepler-1078 b":!0,"Kepler-1079 b":!0,"Kepler-108 b":!0,"Kepler-108 c":!0,"Kepler-1080 b":!0,"Kepler-1081 b":!0,"Kepler-1082 b":!0,"Kepler-1083 b":!0,"Kepler-1084 b":!0,"Kepler-1085 b":!0,"Kepler-1085 c":!0,"Kepler-1086 b":!0,"Kepler-1086 c":!0,"Kepler-1087 b":!0,"Kepler-1088 b":!0,"Kepler-1089 b":!0,"Kepler-109 b":!0,"Kepler-109 c":!0,"Kepler-1090 b":!0,"Kepler-1090 c":!0,"Kepler-1091 b":!0,"Kepler-1092 b":!0,"Kepler-1093 b":!0,"Kepler-1093 c":!0,"Kepler-1094 b":!0,"Kepler-1095 b":!0,"Kepler-1096 b":!0,"Kepler-1097 b":!0,"Kepler-1098 b":!0,"Kepler-1099 b":!0,"Kepler-11 b":!0,"Kepler-11 c":!0,"Kepler-11 d":!0,"Kepler-11 e":!0,"Kepler-11 f":!0,"Kepler-11 g":!0,"Kepler-110 b":!0,"Kepler-110 c":!0,"Kepler-1100 b":!0,"Kepler-1101 b":!0,"Kepler-1102 b":!0,"Kepler-1103 b":!0,"Kepler-1104 b":!0,"Kepler-1105 b":!0,"Kepler-1106 b":!0,"Kepler-1107 b":!0,"Kepler-1108 b":!0,"Kepler-1109 b":!0,"Kepler-111 b":!0,"Kepler-111 c":!0,"Kepler-1110 b":!0,"Kepler-1111 b":!0,"Kepler-1112 b":!0,"Kepler-1113 b":!0,"Kepler-1114 b":!0,"Kepler-1115 b":!0,"Kepler-1116 b":!0,"Kepler-1117 b":!0,"Kepler-1118 b":!0,"Kepler-1119 b":!0,"Kepler-112 b":!0,"Kepler-112 c":!0,"Kepler-1120 b":!0,"Kepler-1121 b":!0,"Kepler-1122 b":!0,"Kepler-1123 b":!0,"Kepler-1124 b":!0,"Kepler-1125 b":!0,"Kepler-1126 b":!0,"Kepler-1126 c":!0,"Kepler-1127 b":!0,"Kepler-1128 b":!0,"Kepler-1129 b":!0,"Kepler-1129 c":!0,"Kepler-113 b":!0,"Kepler-113 c":!0,"Kepler-1130 b":!0,"Kepler-1130 c":!0,"Kepler-1130 d":!0,"Kepler-1131 b":!0,"Kepler-1132 b":!0,"Kepler-1133 b":!0,"Kepler-1134 b":!0,"Kepler-1135 b":!0,"Kepler-1136 b":!0,"Kepler-1137 b":!0,"Kepler-1138 b":!0,"Kepler-1139 b":!0,"Kepler-114 b":!0,"Kepler-114 c":!0,"Kepler-114 d":!0,"Kepler-1140 b":!0,"Kepler-1141 b":!0,"Kepler-1142 b":!0,"Kepler-1143 b":!0,"Kepler-1143 c":!0,"Kepler-1144 b":!0,"Kepler-1145 b":!0,"Kepler-1146 b":!0,"Kepler-1147 b":!0,"Kepler-1148 b":!0,"Kepler-1149 b":!0,"Kepler-115 b":!0,"Kepler-115 c":!0,"Kepler-1150 b":!0,"Kepler-1151 b":!0,"Kepler-1152 b":!0,"Kepler-1153 b":!0,"Kepler-1154 b":!0,"Kepler-1154 c":!0,"Kepler-1155 b":!0,"Kepler-1156 b":!0,"Kepler-1157 b":!0,"Kepler-1158 b":!0,"Kepler-1159 b":!0,"Kepler-116 b":!0,"Kepler-116 c":!0,"Kepler-1160 b":!0,"Kepler-1161 b":!0,"Kepler-1162 b":!0,"Kepler-1162 c":!0,"Kepler-1163 b":!0,"Kepler-1164 b":!0,"Kepler-1165 b":!0,"Kepler-1165 c":!0,"Kepler-1166 b":!0,"Kepler-1167 b":!0,"Kepler-1168 b":!0,"Kepler-1169 b":!0,"Kepler-117 b":!0,"Kepler-117 c":!0,"Kepler-1170 b":!0,"Kepler-1171 b":!0,"Kepler-1172 b":!0,"Kepler-1173 b":!0,"Kepler-1174 b":!0,"Kepler-1175 b":!0,"Kepler-1176 b":!0,"Kepler-1177 b":!0,"Kepler-1178 b":!0,"Kepler-1179 b":!0,"Kepler-118 b":!0,"Kepler-118 c":!0,"Kepler-1180 b":!0,"Kepler-1181 b":!0,"Kepler-1181 c":!0,"Kepler-1182 b":!0,"Kepler-1183 b":!0,"Kepler-1184 b":!0,"Kepler-1185 b":!0,"Kepler-1186 b":!0,"Kepler-1187 b":!0,"Kepler-1188 b":!0,"Kepler-1189 b":!0,"Kepler-119 b":!0,"Kepler-119 c":!0,"Kepler-1190 b":!0,"Kepler-1191 b":!0,"Kepler-1192 b":!0,"Kepler-1193 b":!0,"Kepler-1194 b":!0,"Kepler-1195 b":!0,"Kepler-1196 b":!0,"Kepler-1197 b":!0,"Kepler-1198 b":!0,"Kepler-1199 b":!0,"Kepler-12 b":!0,"Kepler-120 b":!0,"Kepler-120 c":!0,"Kepler-1200 b":!0,"Kepler-1201 b":!0,"Kepler-1202 b":!0,"Kepler-1203 b":!0,"Kepler-1204 b":!0,"Kepler-1205 b":!0,"Kepler-1206 b":!0,"Kepler-1207 b":!0,"Kepler-1208 b":!0,"Kepler-1209 b":!0,"Kepler-121 b":!0,"Kepler-121 c":!0,"Kepler-1210 b":!0,"Kepler-1211 b":!0,"Kepler-1212 b":!0,"Kepler-1213 b":!0,"Kepler-1214 b":!0,"Kepler-1215 b":!0,"Kepler-1216 b":!0,"Kepler-1217 b":!0,"Kepler-1218 b":!0,"Kepler-1219 b":!0,"Kepler-122 b":!0,"Kepler-122 c":!0,"Kepler-122 d":!0,"Kepler-122 e":!0,"Kepler-122 f":!0,"Kepler-1220 b":!0,"Kepler-1221 b":!0,"Kepler-1222 b":!0,"Kepler-1223 b":!0,"Kepler-1224 b":!0,"Kepler-1225 b":!0,"Kepler-1226 b":!0,"Kepler-1227 b":!0,"Kepler-1228 b":!0,"Kepler-1229 b":!0,"Kepler-123 b":!0,"Kepler-123 c":!0,"Kepler-1230 b":!0,"Kepler-1231 b":!0,"Kepler-1232 b":!0,"Kepler-1233 b":!0,"Kepler-1234 b":!0,"Kepler-1235 b":!0,"Kepler-1236 b":!0,"Kepler-1237 b":!0,"Kepler-1238 b":!0,"Kepler-1239 b":!0,"Kepler-124 b":!0,"Kepler-124 c":!0,"Kepler-124 d":!0,"Kepler-1240 b":!0,"Kepler-1241 b":!0,"Kepler-1242 b":!0,"Kepler-1243 b":!0,"Kepler-1244 b":!0,"Kepler-1245 b":!0,"Kepler-1245 c":!0,"Kepler-1246 b":!0,"Kepler-1247 b":!0,"Kepler-1248 b":!0,"Kepler-1249 b":!0,"Kepler-125 b":!0,"Kepler-125 c":!0,"Kepler-1250 b":!0,"Kepler-1251 b":!0,"Kepler-1252 b":!0,"Kepler-1253 b":!0,"Kepler-1254 b":!0,"Kepler-1254 c":!0,"Kepler-1254 d":!0,"Kepler-1255 b":!0,"Kepler-1256 b":!0,"Kepler-1257 b":!0,"Kepler-1258 b":!0,"Kepler-1259 b":!0,"Kepler-126 b":!0,"Kepler-126 c":!0,"Kepler-126 d":!0,"Kepler-1260 b":!0,"Kepler-1261 b":!0,"Kepler-1262 b":!0,"Kepler-1263 b":!0,"Kepler-1264 b":!0,"Kepler-1265 b":!0,"Kepler-1266 b":!0,"Kepler-1266 c":!0,"Kepler-1267 b":!0,"Kepler-1268 b":!0,"Kepler-1269 b":!0,"Kepler-127 b":!0,"Kepler-127 c":!0,"Kepler-127 d":!0,"Kepler-1270 b":!0,"Kepler-1271 b":!0,"Kepler-1272 b":!0,"Kepler-1273 b":!0,"Kepler-1274 b":!0,"Kepler-1275 b":!0,"Kepler-1276 b":!0,"Kepler-1277 b":!0,"Kepler-1278 b":!0,"Kepler-1279 b":!0,"Kepler-128 b":!0,"Kepler-128 c":!0,"Kepler-1280 b":!0,"Kepler-1281 b":!0,"Kepler-1282 b":!0,"Kepler-1283 b":!0,"Kepler-1284 b":!0,"Kepler-1285 b":!0,"Kepler-1286 b":!0,"Kepler-1287 b":!0,"Kepler-1288 b":!0,"Kepler-1289 b":!0,"Kepler-129 b":!0,"Kepler-129 c":!0,"Kepler-129 d":!0,"Kepler-1290 b":!0,"Kepler-1291 b":!0,"Kepler-1292 b":!0,"Kepler-1293 b":!0,"Kepler-1294 b":!0,"Kepler-1295 b":!0,"Kepler-1296 b":!0,"Kepler-1297 b":!0,"Kepler-1298 b":!0,"Kepler-1299 b":!0,"Kepler-130 b":!0,"Kepler-130 c":!0,"Kepler-130 d":!0,"Kepler-1300 b":!0,"Kepler-1301 b":!0,"Kepler-1302 b":!0,"Kepler-1303 b":!0,"Kepler-1304 b":!0,"Kepler-1305 b":!0,"Kepler-1306 b":!0,"Kepler-1307 b":!0,"Kepler-1308 b":!0,"Kepler-1309 b":!0,"Kepler-131 b":!0,"Kepler-131 c":!0,"Kepler-1310 b":!0,"Kepler-1311 b":!0,"Kepler-1311 c":!0,"Kepler-1311 d":!0,"Kepler-1312 b":!0,"Kepler-1312 c":!0,"Kepler-1313 b":!0,"Kepler-1314 b":!0,"Kepler-1315 b":!0,"Kepler-1315 c":!0,"Kepler-1316 b":!0,"Kepler-1317 b":!0,"Kepler-1318 b":!0,"Kepler-1319 b":!0,"Kepler-132 b":!0,"Kepler-132 c":!0,"Kepler-132 d":!0,"Kepler-132 e":!0,"Kepler-1320 b":!0,"Kepler-1321 b":!0,"Kepler-1321 c":!0,"Kepler-1321 d":!0,"Kepler-1322 b":!0,"Kepler-1322 c":!0,"Kepler-1323 b":!0,"Kepler-1324 b":!0,"Kepler-1325 b":!0,"Kepler-1326 b":!0,"Kepler-1327 b":!0,"Kepler-1328 b":!0,"Kepler-1329 b":!0,"Kepler-133 b":!0,"Kepler-133 c":!0,"Kepler-1330 b":!0,"Kepler-1331 b":!0,"Kepler-1332 b":!0,"Kepler-1333 b":!0,"Kepler-1334 b":!0,"Kepler-1335 b":!0,"Kepler-1336 b":!0,"Kepler-1336 c":!0,"Kepler-1337 b":!0,"Kepler-1338 b":!0,"Kepler-1339 b":!0,"Kepler-134 b":!0,"Kepler-134 c":!0,"Kepler-1340 b":!0,"Kepler-1341 b":!0,"Kepler-1342 b":!0,"Kepler-1343 b":!0,"Kepler-1344 b":!0,"Kepler-1345 b":!0,"Kepler-1346 b":!0,"Kepler-1347 b":!0,"Kepler-1348 b":!0,"Kepler-1349 b":!0,"Kepler-135 b":!0,"Kepler-135 c":!0,"Kepler-1350 b":!0,"Kepler-1350 c":!0,"Kepler-1351 b":!0,"Kepler-1352 b":!0,"Kepler-1353 b":!0,"Kepler-1354 b":!0,"Kepler-1355 b":!0,"Kepler-1356 b":!0,"Kepler-1357 b":!0,"Kepler-1358 b":!0,"Kepler-1359 b":!0,"Kepler-136 b":!0,"Kepler-136 c":!0,"Kepler-1360 b":!0,"Kepler-1361 b":!0,"Kepler-1362 b":!0,"Kepler-1363 b":!0,"Kepler-1364 b":!0,"Kepler-1365 b":!0,"Kepler-1365 c":!0,"Kepler-1366 b":!0,"Kepler-1367 b":!0,"Kepler-1368 b":!0,"Kepler-1369 b":!0,"Kepler-137 b":!0,"Kepler-137 c":!0,"Kepler-1370 b":!0,"Kepler-1370 c":!0,"Kepler-1371 b":!0,"Kepler-1371 c":!0,"Kepler-1372 b":!0,"Kepler-1373 b":!0,"Kepler-1374 b":!0,"Kepler-1375 b":!0,"Kepler-1376 b":!0,"Kepler-1377 b":!0,"Kepler-1378 b":!0,"Kepler-1379 b":!0,"Kepler-138 b":!0,"Kepler-138 c":!0,"Kepler-138 d":!0,"Kepler-138 e":!0,"Kepler-1380 b":!0,"Kepler-1381 b":!0,"Kepler-1382 b":!0,"Kepler-1383 b":!0,"Kepler-1384 b":!0,"Kepler-1385 b":!0,"Kepler-1386 b":!0,"Kepler-1387 b":!0,"Kepler-1388 b":!0,"Kepler-1388 c":!0,"Kepler-1388 d":!0,"Kepler-1388 e":!0,"Kepler-1389 b":!0,"Kepler-139 b":!0,"Kepler-139 c":!0,"Kepler-139 d":!0,"Kepler-139 e":!0,"Kepler-1390 b":!0,"Kepler-1391 b":!0,"Kepler-1392 b":!0,"Kepler-1393 b":!0,"Kepler-1394 b":!0,"Kepler-1395 b":!0,"Kepler-1396 b":!0,"Kepler-1397 b":!0,"Kepler-1398 b":!0,"Kepler-1398 c":!0,"Kepler-1399 b":!0,"Kepler-14 b":!0,"Kepler-140 b":!0,"Kepler-140 c":!0,"Kepler-1400 b":!0,"Kepler-1401 b":!0,"Kepler-1402 b":!0,"Kepler-1403 b":!0,"Kepler-1404 b":!0,"Kepler-1405 b":!0,"Kepler-1406 b":!0,"Kepler-1407 b":!0,"Kepler-1408 b":!0,"Kepler-1409 b":!0,"Kepler-141 b":!0,"Kepler-141 c":!0,"Kepler-1410 b":!0,"Kepler-1411 b":!0,"Kepler-1412 b":!0,"Kepler-1413 b":!0,"Kepler-1414 b":!0,"Kepler-1415 b":!0,"Kepler-1416 b":!0,"Kepler-1417 b":!0,"Kepler-1418 b":!0,"Kepler-1419 b":!0,"Kepler-142 b":!0,"Kepler-142 c":!0,"Kepler-142 d":!0,"Kepler-1420 b":!0,"Kepler-1421 b":!0,"Kepler-1422 b":!0,"Kepler-1423 b":!0,"Kepler-1424 b":!0,"Kepler-1425 b":!0,"Kepler-1426 b":!0,"Kepler-1427 b":!0,"Kepler-1428 b":!0,"Kepler-1429 b":!0,"Kepler-143 b":!0,"Kepler-143 c":!0,"Kepler-1430 b":!0,"Kepler-1431 b":!0,"Kepler-1432 b":!0,"Kepler-1433 b":!0,"Kepler-1434 b":!0,"Kepler-1435 b":!0,"Kepler-1436 b":!0,"Kepler-1437 b":!0,"Kepler-1438 b":!0,"Kepler-1439 b":!0,"Kepler-144 b":!0,"Kepler-144 c":!0,"Kepler-1440 b":!0,"Kepler-1441 b":!0,"Kepler-1442 b":!0,"Kepler-1443 b":!0,"Kepler-1444 b":!0,"Kepler-1445 b":!0,"Kepler-1446 b":!0,"Kepler-1447 b":!0,"Kepler-1448 b":!0,"Kepler-1449 b":!0,"Kepler-145 b":!0,"Kepler-145 c":!0,"Kepler-1450 b":!0,"Kepler-1451 b":!0,"Kepler-1452 b":!0,"Kepler-1453 b":!0,"Kepler-1454 b":!0,"Kepler-1455 b":!0,"Kepler-1456 b":!0,"Kepler-1457 b":!0,"Kepler-1458 b":!0,"Kepler-1459 b":!0,"Kepler-146 b":!0,"Kepler-146 c":!0,"Kepler-1460 b":!0,"Kepler-1461 b":!0,"Kepler-1462 b":!0,"Kepler-1463 b":!0,"Kepler-1464 b":!0,"Kepler-1464 c":!0,"Kepler-1465 b":!0,"Kepler-1466 b":!0,"Kepler-1467 b":!0,"Kepler-1468 b":!0,"Kepler-1468 c":!0,"Kepler-1468 d":!0,"Kepler-1469 b":!0,"Kepler-147 b":!0,"Kepler-147 c":!0,"Kepler-1470 b":!0,"Kepler-1471 b":!0,"Kepler-1471 c":!0,"Kepler-1472 b":!0,"Kepler-1473 b":!0,"Kepler-1474 b":!0,"Kepler-1475 b":!0,"Kepler-1476 b":!0,"Kepler-1477 b":!0,"Kepler-1478 b":!0,"Kepler-1479 b":!0,"Kepler-148 b":!0,"Kepler-148 c":!0,"Kepler-148 d":!0,"Kepler-1480 b":!0,"Kepler-1481 b":!0,"Kepler-1482 b":!0,"Kepler-1483 b":!0,"Kepler-1484 b":!0,"Kepler-1485 b":!0,"Kepler-1486 b":!0,"Kepler-1487 b":!0,"Kepler-1487 c":!0,"Kepler-1488 b":!0,"Kepler-1488 c":!0,"Kepler-1489 b":!0,"Kepler-149 b":!0,"Kepler-149 c":!0,"Kepler-149 d":!0,"Kepler-1490 b":!0,"Kepler-1491 b":!0,"Kepler-1491 c":!0,"Kepler-1492 b":!0,"Kepler-1493 b":!0,"Kepler-1494 b":!0,"Kepler-1495 b":!0,"Kepler-1496 b":!0,"Kepler-1497 b":!0,"Kepler-1498 b":!0,"Kepler-1499 b":!0,"Kepler-15 b":!0,"Kepler-150 b":!0,"Kepler-150 c":!0,"Kepler-150 d":!0,"Kepler-150 e":!0,"Kepler-150 f":!0,"Kepler-1500 b":!0,"Kepler-1501 b":!0,"Kepler-1502 b":!0,"Kepler-1503 b":!0,"Kepler-1504 b":!0,"Kepler-1505 b":!0,"Kepler-1506 b":!0,"Kepler-1507 b":!0,"Kepler-1508 b":!0,"Kepler-1509 b":!0,"Kepler-151 b":!0,"Kepler-151 c":!0,"Kepler-1510 b":!0,"Kepler-1511 b":!0,"Kepler-1512 b":!0,"Kepler-1513 b":!0,"Kepler-1513 c":!0,"Kepler-1514 b":!0,"Kepler-1514 c":!0,"Kepler-1515 b":!0,"Kepler-1516 b":!0,"Kepler-1517 b":!0,"Kepler-1518 b":!0,"Kepler-1518 c":!0,"Kepler-1519 b":!0,"Kepler-152 b":!0,"Kepler-152 c":!0,"Kepler-1520 b":!0,"Kepler-1521 b":!0,"Kepler-1522 b":!0,"Kepler-1523 b":!0,"Kepler-1524 b":!0,"Kepler-1525 b":!0,"Kepler-1526 b":!0,"Kepler-1527 b":!0,"Kepler-1528 b":!0,"Kepler-1529 b":!0,"Kepler-153 b":!0,"Kepler-153 c":!0,"Kepler-1530 b":!0,"Kepler-1530 c":!0,"Kepler-1530 d":!0,"Kepler-1531 b":!0,"Kepler-1532 b":!0,"Kepler-1533 b":!0,"Kepler-1534 b":!0,"Kepler-1535 b":!0,"Kepler-1536 b":!0,"Kepler-1537 b":!0,"Kepler-1538 b":!0,"Kepler-1539 b":!0,"Kepler-154 b":!0,"Kepler-154 c":!0,"Kepler-154 d":!0,"Kepler-154 e":!0,"Kepler-154 f":!0,"Kepler-1540 b":!0,"Kepler-1541 b":!0,"Kepler-1542 b":!0,"Kepler-1542 c":!0,"Kepler-1542 d":!0,"Kepler-1542 e":!0,"Kepler-1543 b":!0,"Kepler-1544 b":!0,"Kepler-1545 b":!0,"Kepler-1546 b":!0,"Kepler-1547 b":!0,"Kepler-1548 b":!0,"Kepler-1549 b":!0,"Kepler-155 b":!0,"Kepler-155 c":!0,"Kepler-1550 b":!0,"Kepler-1551 b":!0,"Kepler-1552 b":!0,"Kepler-1553 b":!0,"Kepler-1554 b":!0,"Kepler-1555 b":!0,"Kepler-1556 b":!0,"Kepler-1557 b":!0,"Kepler-1558 b":!0,"Kepler-1559 b":!0,"Kepler-156 b":!0,"Kepler-156 c":!0,"Kepler-1560 b":!0,"Kepler-1561 b":!0,"Kepler-1562 b":!0,"Kepler-1563 b":!0,"Kepler-1564 b":!0,"Kepler-1565 b":!0,"Kepler-1566 b":!0,"Kepler-1567 b":!0,"Kepler-1568 b":!0,"Kepler-1569 b":!0,"Kepler-157 b":!0,"Kepler-157 c":!0,"Kepler-157 d":!0,"Kepler-1570 b":!0,"Kepler-1571 b":!0,"Kepler-1572 b":!0,"Kepler-1573 b":!0,"Kepler-1574 b":!0,"Kepler-1575 b":!0,"Kepler-1576 b":!0,"Kepler-1577 b":!0,"Kepler-1578 b":!0,"Kepler-1579 b":!0,"Kepler-158 b":!0,"Kepler-158 c":!0,"Kepler-1580 b":!0,"Kepler-1581 b":!0,"Kepler-1582 b":!0,"Kepler-1583 b":!0,"Kepler-1584 b":!0,"Kepler-1585 b":!0,"Kepler-1586 b":!0,"Kepler-1587 b":!0,"Kepler-1588 b":!0,"Kepler-1589 b":!0,"Kepler-159 b":!0,"Kepler-159 c":!0,"Kepler-1590 b":!0,"Kepler-1591 b":!0,"Kepler-1592 b":!0,"Kepler-1593 b":!0,"Kepler-1594 b":!0,"Kepler-1595 b":!0,"Kepler-1596 b":!0,"Kepler-1597 b":!0,"Kepler-1598 b":!0,"Kepler-1599 b":!0,"Kepler-16 b":!0,"Kepler-160 b":!0,"Kepler-160 c":!0,"Kepler-160 d":!0,"Kepler-1600 b":!0,"Kepler-1600 c":!0,"Kepler-1601 b":!0,"Kepler-1602 b":!0,"Kepler-1603 b":!0,"Kepler-1604 b":!0,"Kepler-1605 b":!0,"Kepler-1606 b":!0,"Kepler-1607 b":!0,"Kepler-1608 b":!0,"Kepler-1609 b":!0,"Kepler-161 b":!0,"Kepler-161 c":!0,"Kepler-1610 b":!0,"Kepler-1610 c":!0,"Kepler-1611 b":!0,"Kepler-1612 b":!0,"Kepler-1613 b":!0,"Kepler-1614 b":!0,"Kepler-1615 b":!0,"Kepler-1616 b":!0,"Kepler-1617 b":!0,"Kepler-1618 b":!0,"Kepler-1619 b":!0,"Kepler-162 b":!0,"Kepler-162 c":!0,"Kepler-1620 b":!0,"Kepler-1621 b":!0,"Kepler-1622 b":!0,"Kepler-1623 b":!0,"Kepler-1624 b":!0,"Kepler-1625 b":!0,"Kepler-1626 b":!0,"Kepler-1627 b":!0,"Kepler-1628 b":!0,"Kepler-1629 b":!0,"Kepler-163 b":!0,"Kepler-163 c":!0,"Kepler-1630 b":!0,"Kepler-1631 b":!0,"Kepler-1632 b":!0,"Kepler-1633 b":!0,"Kepler-1634 b":!0,"Kepler-1635 b":!0,"Kepler-1636 b":!0,"Kepler-1637 b":!0,"Kepler-1638 b":!0,"Kepler-1639 b":!0,"Kepler-164 b":!0,"Kepler-164 c":!0,"Kepler-164 d":!0,"Kepler-164 e":!0,"Kepler-1640 b":!0,"Kepler-1641 b":!0,"Kepler-1641 c":!0,"Kepler-1642 b":!0,"Kepler-1642 c":!0,"Kepler-1643 b":!0,"Kepler-1644 b":!0,"Kepler-1645 b":!0,"Kepler-1646 b":!0,"Kepler-1647 b":!0,"Kepler-1649 b":!0,"Kepler-1649 c":!0,"Kepler-165 b":!0,"Kepler-165 c":!0,"Kepler-1650 b":!0,"Kepler-1651 b":!0,"Kepler-1652 b":!0,"Kepler-1653 b":!0,"Kepler-1654 b":!0,"Kepler-1655 b":!0,"Kepler-1656 b":!0,"Kepler-1656 c":!0,"Kepler-1658 b":!0,"Kepler-166 b":!0,"Kepler-166 c":!0,"Kepler-166 d":!0,"Kepler-1660 AB b":!0,"Kepler-1661 b":!0,"Kepler-1663 b":!0,"Kepler-1664 b":!0,"Kepler-1665 b":!0,"Kepler-1666 b":!0,"Kepler-1666 c":!0,"Kepler-1667 b":!0,"Kepler-1668 b":!0,"Kepler-1669 b":!0,"Kepler-1669 c":!0,"Kepler-1669 d":!0,"Kepler-167 b":!0,"Kepler-167 c":!0,"Kepler-167 d":!0,"Kepler-167 e":!0,"Kepler-1670 b":!0,"Kepler-1671 b":!0,"Kepler-1672 b":!0,"Kepler-1673 b":!0,"Kepler-1674 b":!0,"Kepler-1675 b":!0,"Kepler-1677 b":!0,"Kepler-1678 b":!0,"Kepler-1679 b":!0,"Kepler-168 b":!0,"Kepler-168 c":!0,"Kepler-1680 b":!0,"Kepler-1681 b":!0,"Kepler-1682 b":!0,"Kepler-1683 b":!0,"Kepler-1684 b":!0,"Kepler-1685 b":!0,"Kepler-1686 b":!0,"Kepler-1687 b":!0,"Kepler-1688 b":!0,"Kepler-1689 b":!0,"Kepler-169 b":!0,"Kepler-169 c":!0,"Kepler-169 d":!0,"Kepler-169 e":!0,"Kepler-169 f":!0,"Kepler-1690 b":!0,"Kepler-1691 b":!0,"Kepler-1692 b":!0,"Kepler-1693 b":!0,"Kepler-1693 c":!0,"Kepler-1694 b":!0,"Kepler-1695 b":!0,"Kepler-1696 b":!0,"Kepler-1697 b":!0,"Kepler-1698 b":!0,"Kepler-1699 b":!0,"Kepler-17 b":!0,"Kepler-170 b":!0,"Kepler-170 c":!0,"Kepler-1700 b":!0,"Kepler-1701 b":!0,"Kepler-1702 b":!0,"Kepler-1704 b":!0,"Kepler-1705 b":!0,"Kepler-1705 c":!0,"Kepler-1708 b":!0,"Kepler-1709 b":!0,"Kepler-171 b":!0,"Kepler-171 c":!0,"Kepler-171 d":!0,"Kepler-1710 b":!0,"Kepler-1711 b":!0,"Kepler-1712 b":!0,"Kepler-1713 b":!0,"Kepler-1714 b":!0,"Kepler-1715 b":!0,"Kepler-1716 b":!0,"Kepler-1717 b":!0,"Kepler-1718 b":!0,"Kepler-1719 b":!0,"Kepler-172 b":!0,"Kepler-172 c":!0,"Kepler-172 d":!0,"Kepler-172 e":!0,"Kepler-1720 b":!0,"Kepler-1721 b":!0,"Kepler-1722 b":!0,"Kepler-1723 b":!0,"Kepler-1724 b":!0,"Kepler-1725 b":!0,"Kepler-1726 b":!0,"Kepler-1727 b":!0,"Kepler-1728 b":!0,"Kepler-1729 b":!0,"Kepler-173 b":!0,"Kepler-173 c":!0,"Kepler-1730 b":!0,"Kepler-1731 b":!0,"Kepler-1732 b":!0,"Kepler-1733 b":!0,"Kepler-1734 b":!0,"Kepler-1735 b":!0,"Kepler-1736 b":!0,"Kepler-1738 b":!0,"Kepler-1739 b":!0,"Kepler-174 b":!0,"Kepler-174 c":!0,"Kepler-174 d":!0,"Kepler-1740 b":!0,"Kepler-1741 b":!0,"Kepler-1742 b":!0,"Kepler-1743 b":!0,"Kepler-1744 b":!0,"Kepler-1745 b":!0,"Kepler-1746 b":!0,"Kepler-1747 b":!0,"Kepler-1748 b":!0,"Kepler-1749 b":!0,"Kepler-175 b":!0,"Kepler-175 c":!0,"Kepler-1750 b":!0,"Kepler-1751 b":!0,"Kepler-1752 b":!0,"Kepler-1753 b":!0,"Kepler-1754 b":!0,"Kepler-1755 b":!0,"Kepler-1757 b":!0,"Kepler-1758 b":!0,"Kepler-1759 b":!0,"Kepler-176 b":!0,"Kepler-176 c":!0,"Kepler-176 d":!0,"Kepler-176 e":!0,"Kepler-1761 b":!0,"Kepler-1762 b":!0,"Kepler-1763 b":!0,"Kepler-1764 b":!0,"Kepler-1765 b":!0,"Kepler-1766 b":!0,"Kepler-1767 b":!0,"Kepler-1768 b":!0,"Kepler-1769 b":!0,"Kepler-177 b":!0,"Kepler-177 c":!0,"Kepler-1770 b":!0,"Kepler-1771 b":!0,"Kepler-1772 b":!0,"Kepler-1773 b":!0,"Kepler-1774 b":!0,"Kepler-1775 b":!0,"Kepler-1776 b":!0,"Kepler-1777 b":!0,"Kepler-1778 b":!0,"Kepler-1779 b":!0,"Kepler-178 b":!0,"Kepler-178 c":!0,"Kepler-178 d":!0,"Kepler-1780 b":!0,"Kepler-1781 b":!0,"Kepler-1782 b":!0,"Kepler-1783 b":!0,"Kepler-1784 b":!0,"Kepler-1785 b":!0,"Kepler-1786 b":!0,"Kepler-1787 b":!0,"Kepler-1788 b":!0,"Kepler-1789 b":!0,"Kepler-179 b":!0,"Kepler-179 c":!0,"Kepler-1790 b":!0,"Kepler-1791 b":!0,"Kepler-1792 b":!0,"Kepler-1793 b":!0,"Kepler-1794 b":!0,"Kepler-1796 b":!0,"Kepler-1797 b":!0,"Kepler-1798 b":!0,"Kepler-1799 b":!0,"Kepler-18 b":!0,"Kepler-18 c":!0,"Kepler-18 d":!0,"Kepler-180 b":!0,"Kepler-180 c":!0,"Kepler-1800 b":!0,"Kepler-1801 b":!0,"Kepler-1801 c":!0,"Kepler-1802 b":!0,"Kepler-1802 c":!0,"Kepler-1804 b":!0,"Kepler-1805 b":!0,"Kepler-1806 b":!0,"Kepler-1807 b":!0,"Kepler-1808 b":!0,"Kepler-1809 b":!0,"Kepler-181 b":!0,"Kepler-181 c":!0,"Kepler-1810 b":!0,"Kepler-1811 b":!0,"Kepler-1812 b":!0,"Kepler-1814 b":!0,"Kepler-1814 c":!0,"Kepler-1815 b":!0,"Kepler-1816 b":!0,"Kepler-1817 b":!0,"Kepler-1818 b":!0,"Kepler-1819 b":!0,"Kepler-182 b":!0,"Kepler-182 c":!0,"Kepler-1820 b":!0,"Kepler-1821 b":!0,"Kepler-1822 b":!0,"Kepler-1823 b":!0,"Kepler-1824 b":!0,"Kepler-1825 b":!0,"Kepler-1826 b":!0,"Kepler-1827 b":!0,"Kepler-1828 b":!0,"Kepler-1829 b":!0,"Kepler-183 b":!0,"Kepler-183 c":!0,"Kepler-1830 b":!0,"Kepler-1831 b":!0,"Kepler-1832 b":!0,"Kepler-1833 b":!0,"Kepler-1834 b":!0,"Kepler-1834 c":!0,"Kepler-1835 b":!0,"Kepler-1836 b":!0,"Kepler-1837 b":!0,"Kepler-1838 b":!0,"Kepler-1839 b":!0,"Kepler-184 b":!0,"Kepler-184 c":!0,"Kepler-184 d":!0,"Kepler-1840 b":!0,"Kepler-1841 b":!0,"Kepler-1842 b":!0,"Kepler-1843 b":!0,"Kepler-1844 b":!0,"Kepler-1845 b":!0,"Kepler-1846 b":!0,"Kepler-1847 b":!0,"Kepler-1848 b":!0,"Kepler-1849 b":!0,"Kepler-185 b":!0,"Kepler-185 c":!0,"Kepler-1850 b":!0,"Kepler-1851 b":!0,"Kepler-1852 b":!0,"Kepler-1853 b":!0,"Kepler-1854 b":!0,"Kepler-1856 b":!0,"Kepler-1857 b":!0,"Kepler-1858 b":!0,"Kepler-1859 b":!0,"Kepler-1859 c":!0,"Kepler-186 b":!0,"Kepler-186 c":!0,"Kepler-186 d":!0,"Kepler-186 e":!0,"Kepler-186 f":!0,"Kepler-1860 b":!0,"Kepler-1861 b":!0,"Kepler-1862 b":!0,"Kepler-1863 b":!0,"Kepler-1864 b":!0,"Kepler-1865 b":!0,"Kepler-1866 b":!0,"Kepler-1867 b":!0,"Kepler-1868 b":!0,"Kepler-1869 b":!0,"Kepler-1869 c":!0,"Kepler-187 b":!0,"Kepler-187 c":!0,"Kepler-1870 b":!0,"Kepler-1871 b":!0,"Kepler-1872 b":!0,"Kepler-1873 b":!0,"Kepler-1874 b":!0,"Kepler-1875 b":!0,"Kepler-1876 b":!0,"Kepler-1877 b":!0,"Kepler-1878 b":!0,"Kepler-1879 b":!0,"Kepler-188 b":!0,"Kepler-188 c":!0,"Kepler-1880 b":!0,"Kepler-1881 b":!0,"Kepler-1882 b":!0,"Kepler-1883 b":!0,"Kepler-1884 b":!0,"Kepler-1885 b":!0,"Kepler-1886 b":!0,"Kepler-1887 b":!0,"Kepler-1888 b":!0,"Kepler-1889 b":!0,"Kepler-189 b":!0,"Kepler-189 c":!0,"Kepler-1890 b":!0,"Kepler-1891 b":!0,"Kepler-1892 b":!0,"Kepler-1893 b":!0,"Kepler-1894 b":!0,"Kepler-1894 c":!0,"Kepler-1895 b":!0,"Kepler-1896 b":!0,"Kepler-1897 b":!0,"Kepler-1898 b":!0,"Kepler-1899 b":!0,"Kepler-19 b":!0,"Kepler-19 c":!0,"Kepler-19 d":!0,"Kepler-190 b":!0,"Kepler-190 c":!0,"Kepler-1900 b":!0,"Kepler-1901 b":!0,"Kepler-1902 b":!0,"Kepler-1903 b":!0,"Kepler-1904 b":!0,"Kepler-1905 b":!0,"Kepler-1906 b":!0,"Kepler-1907 b":!0,"Kepler-1907 c":!0,"Kepler-1909 b":!0,"Kepler-191 b":!0,"Kepler-191 c":!0,"Kepler-191 d":!0,"Kepler-1911 b":!0,"Kepler-1912 b":!0,"Kepler-1913 b":!0,"Kepler-1914 b":!0,"Kepler-1915 b":!0,"Kepler-1916 b":!0,"Kepler-1917 b":!0,"Kepler-1918 b":!0,"Kepler-1919 b":!0,"Kepler-192 b":!0,"Kepler-192 c":!0,"Kepler-192 d":!0,"Kepler-1920 b":!0,"Kepler-1921 b":!0,"Kepler-1921 c":!0,"Kepler-1922 b":!0,"Kepler-1923 b":!0,"Kepler-1924 b":!0,"Kepler-1925 b":!0,"Kepler-1926 b":!0,"Kepler-1927 b":!0,"Kepler-1928 b":!0,"Kepler-1929 b":!0,"Kepler-193 b":!0,"Kepler-193 c":!0,"Kepler-1930 b":!0,"Kepler-1931 b":!0,"Kepler-1932 b":!0,"Kepler-1933 b":!0,"Kepler-1934 b":!0,"Kepler-1935 b":!0,"Kepler-1936 b":!0,"Kepler-1937 b":!0,"Kepler-1938 b":!0,"Kepler-1939 b":!0,"Kepler-194 b":!0,"Kepler-194 c":!0,"Kepler-194 d":!0,"Kepler-1940 b":!0,"Kepler-1941 b":!0,"Kepler-1942 b":!0,"Kepler-1943 b":!0,"Kepler-1944 b":!0,"Kepler-1946 b":!0,"Kepler-1947 b":!0,"Kepler-1948 b":!0,"Kepler-1949 b":!0,"Kepler-195 b":!0,"Kepler-195 c":!0,"Kepler-1950 b":!0,"Kepler-1951 b":!0,"Kepler-1952 b":!0,"Kepler-1953 b":!0,"Kepler-1954 b":!0,"Kepler-1955 b":!0,"Kepler-1956 b":!0,"Kepler-1957 b":!0,"Kepler-1958 b":!0,"Kepler-1959 b":!0,"Kepler-196 b":!0,"Kepler-196 c":!0,"Kepler-196 d":!0,"Kepler-1960 b":!0,"Kepler-1961 b":!0,"Kepler-1962 b":!0,"Kepler-1963 b":!0,"Kepler-1965 b":!0,"Kepler-1966 b":!0,"Kepler-1967 b":!0,"Kepler-1968 b":!0,"Kepler-1969 b":!0,"Kepler-197 b":!0,"Kepler-197 c":!0,"Kepler-197 d":!0,"Kepler-197 e":!0,"Kepler-1972 b":!0,"Kepler-1972 c":!0,"Kepler-1976 b":!0,"Kepler-1977 b":!0,"Kepler-1978 b":!0,"Kepler-1979 b":!0,"Kepler-198 b":!0,"Kepler-198 c":!0,"Kepler-198 d":!0,"Kepler-1980 b":!0,"Kepler-1981 b":!0,"Kepler-1982 b":!0,"Kepler-1983 b":!0,"Kepler-1986 b":!0,"Kepler-1987 b":!0,"Kepler-1987 c":!0,"Kepler-1987 d":!0,"Kepler-1987 e":!0,"Kepler-1988 b":!0,"Kepler-1989 b":!0,"Kepler-199 b":!0,"Kepler-199 c":!0,"Kepler-1990 b":!0,"Kepler-1990 c":!0,"Kepler-1991 b":!0,"Kepler-1991 c":!0,"Kepler-1992 b":!0,"Kepler-1993 b":!0,"Kepler-1994 b":!0,"Kepler-1995 b":!0,"Kepler-1996 b":!0,"Kepler-1996 c":!0,"Kepler-1997 b":!0,"Kepler-1998 b":!0,"Kepler-1999 b":!0,"Kepler-20 b":!0,"Kepler-20 c":!0,"Kepler-20 d":!0,"Kepler-20 e":!0,"Kepler-20 f":!0,"Kepler-20 g":!0,"Kepler-200 b":!0,"Kepler-200 c":!0,"Kepler-2000 b":!0,"Kepler-2000 c":!0,"Kepler-2001 b":!0,"Kepler-2001 c":!0,"Kepler-201 b":!0,"Kepler-201 c":!0,"Kepler-202 b":!0,"Kepler-202 c":!0,"Kepler-203 b":!0,"Kepler-203 c":!0,"Kepler-203 d":!0,"Kepler-204 b":!0,"Kepler-204 c":!0,"Kepler-205 b":!0,"Kepler-205 c":!0,"Kepler-206 b":!0,"Kepler-206 c":!0,"Kepler-206 d":!0,"Kepler-207 b":!0,"Kepler-207 c":!0,"Kepler-207 d":!0,"Kepler-208 b":!0,"Kepler-208 c":!0,"Kepler-208 d":!0,"Kepler-208 e":!0,"Kepler-209 b":!0,"Kepler-209 c":!0,"Kepler-21 b":!0,"Kepler-210 b":!0,"Kepler-210 c":!0,"Kepler-211 b":!0,"Kepler-211 c":!0,"Kepler-212 b":!0,"Kepler-212 c":!0,"Kepler-213 b":!0,"Kepler-213 c":!0,"Kepler-214 b":!0,"Kepler-214 c":!0,"Kepler-215 b":!0,"Kepler-215 c":!0,"Kepler-215 d":!0,"Kepler-215 e":!0,"Kepler-216 b":!0,"Kepler-216 c":!0,"Kepler-217 b":!0,"Kepler-217 c":!0,"Kepler-217 d":!0,"Kepler-218 b":!0,"Kepler-218 c":!0,"Kepler-218 d":!0,"Kepler-219 b":!0,"Kepler-219 c":!0,"Kepler-219 d":!0,"Kepler-22 b":!0,"Kepler-220 b":!0,"Kepler-220 c":!0,"Kepler-220 d":!0,"Kepler-220 e":!0,"Kepler-221 b":!0,"Kepler-221 c":!0,"Kepler-221 d":!0,"Kepler-221 e":!0,"Kepler-222 b":!0,"Kepler-222 c":!0,"Kepler-222 d":!0,"Kepler-223 b":!0,"Kepler-223 c":!0,"Kepler-223 d":!0,"Kepler-223 e":!0,"Kepler-224 b":!0,"Kepler-224 c":!0,"Kepler-224 d":!0,"Kepler-224 e":!0,"Kepler-225 b":!0,"Kepler-225 c":!0,"Kepler-226 b":!0,"Kepler-226 c":!0,"Kepler-226 d":!0,"Kepler-227 b":!0,"Kepler-227 c":!0,"Kepler-228 b":!0,"Kepler-228 c":!0,"Kepler-228 d":!0,"Kepler-229 b":!0,"Kepler-229 c":!0,"Kepler-229 d":!0,"Kepler-23 b":!0,"Kepler-23 c":!0,"Kepler-23 d":!0,"Kepler-230 b":!0,"Kepler-230 c":!0,"Kepler-231 b":!0,"Kepler-231 c":!0,"Kepler-232 b":!0,"Kepler-232 c":!0,"Kepler-233 b":!0,"Kepler-233 c":!0,"Kepler-234 b":!0,"Kepler-234 c":!0,"Kepler-235 b":!0,"Kepler-235 c":!0,"Kepler-235 d":!0,"Kepler-235 e":!0,"Kepler-236 b":!0,"Kepler-236 c":!0,"Kepler-237 b":!0,"Kepler-237 c":!0,"Kepler-238 b":!0,"Kepler-238 c":!0,"Kepler-238 d":!0,"Kepler-238 e":!0,"Kepler-238 f":!0,"Kepler-239 b":!0,"Kepler-239 c":!0,"Kepler-24 b":!0,"Kepler-24 c":!0,"Kepler-24 d":!0,"Kepler-24 e":!0,"Kepler-240 b":!0,"Kepler-240 c":!0,"Kepler-241 b":!0,"Kepler-241 c":!0,"Kepler-242 b":!0,"Kepler-242 c":!0,"Kepler-243 b":!0,"Kepler-243 c":!0,"Kepler-244 b":!0,"Kepler-244 c":!0,"Kepler-244 d":!0,"Kepler-245 b":!0,"Kepler-245 c":!0,"Kepler-245 d":!0,"Kepler-245 e":!0,"Kepler-246 b":!0,"Kepler-246 c":!0,"Kepler-247 b":!0,"Kepler-247 c":!0,"Kepler-247 d":!0,"Kepler-248 b":!0,"Kepler-248 c":!0,"Kepler-249 b":!0,"Kepler-249 c":!0,"Kepler-249 d":!0,"Kepler-25 b":!0,"Kepler-25 c":!0,"Kepler-25 d":!0,"Kepler-250 b":!0,"Kepler-250 c":!0,"Kepler-250 d":!0,"Kepler-251 b":!0,"Kepler-251 c":!0,"Kepler-251 d":!0,"Kepler-251 e":!0,"Kepler-252 b":!0,"Kepler-252 c":!0,"Kepler-253 b":!0,"Kepler-253 c":!0,"Kepler-253 d":!0,"Kepler-254 b":!0,"Kepler-254 c":!0,"Kepler-254 d":!0,"Kepler-255 b":!0,"Kepler-255 c":!0,"Kepler-255 d":!0,"Kepler-256 b":!0,"Kepler-256 c":!0,"Kepler-256 d":!0,"Kepler-256 e":!0,"Kepler-257 b":!0,"Kepler-257 c":!0,"Kepler-257 d":!0,"Kepler-258 b":!0,"Kepler-258 c":!0,"Kepler-259 b":!0,"Kepler-259 c":!0,"Kepler-26 b":!0,"Kepler-26 c":!0,"Kepler-26 d":!0,"Kepler-26 e":!0,"Kepler-260 b":!0,"Kepler-260 c":!0,"Kepler-261 b":!0,"Kepler-261 c":!0,"Kepler-262 b":!0,"Kepler-262 c":!0,"Kepler-263 b":!0,"Kepler-263 c":!0,"Kepler-264 b":!0,"Kepler-264 c":!0,"Kepler-265 b":!0,"Kepler-265 c":!0,"Kepler-265 d":!0,"Kepler-265 e":!0,"Kepler-266 b":!0,"Kepler-266 c":!0,"Kepler-267 b":!0,"Kepler-267 c":!0,"Kepler-267 d":!0,"Kepler-268 b":!0,"Kepler-268 c":!0,"Kepler-269 b":!0,"Kepler-269 c":!0,"Kepler-27 b":!0,"Kepler-27 c":!0,"Kepler-27 d":!0,"Kepler-270 b":!0,"Kepler-270 c":!0,"Kepler-271 b":!0,"Kepler-271 c":!0,"Kepler-271 d":!0,"Kepler-272 b":!0,"Kepler-272 c":!0,"Kepler-272 d":!0,"Kepler-273 b":!0,"Kepler-273 c":!0,"Kepler-274 b":!0,"Kepler-274 c":!0,"Kepler-275 b":!0,"Kepler-275 c":!0,"Kepler-275 d":!0,"Kepler-276 b":!0,"Kepler-276 c":!0,"Kepler-276 d":!0,"Kepler-277 b":!0,"Kepler-277 c":!0,"Kepler-278 b":!0,"Kepler-278 c":!0,"Kepler-279 b":!0,"Kepler-279 c":!0,"Kepler-279 d":!0,"Kepler-28 b":!0,"Kepler-28 c":!0,"Kepler-280 b":!0,"Kepler-280 c":!0,"Kepler-281 b":!0,"Kepler-281 c":!0,"Kepler-281 d":!0,"Kepler-282 b":!0,"Kepler-282 c":!0,"Kepler-282 d":!0,"Kepler-282 e":!0,"Kepler-283 b":!0,"Kepler-283 c":!0,"Kepler-284 b":!0,"Kepler-284 c":!0,"Kepler-285 b":!0,"Kepler-285 c":!0,"Kepler-286 b":!0,"Kepler-286 c":!0,"Kepler-286 d":!0,"Kepler-286 e":!0,"Kepler-287 b":!0,"Kepler-287 c":!0,"Kepler-288 b":!0,"Kepler-288 c":!0,"Kepler-288 d":!0,"Kepler-289 b":!0,"Kepler-289 c":!0,"Kepler-289 d":!0,"Kepler-29 b":!0,"Kepler-29 c":!0,"Kepler-290 b":!0,"Kepler-290 c":!0,"Kepler-290 d":!0,"Kepler-291 b":!0,"Kepler-291 c":!0,"Kepler-292 b":!0,"Kepler-292 c":!0,"Kepler-292 d":!0,"Kepler-292 e":!0,"Kepler-292 f":!0,"Kepler-293 b":!0,"Kepler-293 c":!0,"Kepler-294 b":!0,"Kepler-294 c":!0,"Kepler-295 b":!0,"Kepler-295 c":!0,"Kepler-295 d":!0,"Kepler-296 b":!0,"Kepler-296 c":!0,"Kepler-296 d":!0,"Kepler-296 e":!0,"Kepler-296 f":!0,"Kepler-297 b":!0,"Kepler-297 c":!0,"Kepler-297 d":!0,"Kepler-298 b":!0,"Kepler-298 c":!0,"Kepler-298 d":!0,"Kepler-299 b":!0,"Kepler-299 c":!0,"Kepler-299 d":!0,"Kepler-299 e":!0,"Kepler-30 b":!0,"Kepler-30 c":!0,"Kepler-30 d":!0,"Kepler-300 b":!0,"Kepler-300 c":!0,"Kepler-301 b":!0,"Kepler-301 c":!0,"Kepler-301 d":!0,"Kepler-302 b":!0,"Kepler-302 c":!0,"Kepler-303 b":!0,"Kepler-303 c":!0,"Kepler-304 b":!0,"Kepler-304 c":!0,"Kepler-304 d":!0,"Kepler-304 e":!0,"Kepler-305 b":!0,"Kepler-305 c":!0,"Kepler-305 d":!0,"Kepler-305 e":!0,"Kepler-306 b":!0,"Kepler-306 c":!0,"Kepler-306 d":!0,"Kepler-306 e":!0,"Kepler-307 b":!0,"Kepler-307 c":!0,"Kepler-308 b":!0,"Kepler-308 c":!0,"Kepler-309 b":!0,"Kepler-309 c":!0,"Kepler-31 b":!0,"Kepler-31 c":!0,"Kepler-31 d":!0,"Kepler-310 b":!0,"Kepler-310 c":!0,"Kepler-310 d":!0,"Kepler-311 b":!0,"Kepler-311 c":!0,"Kepler-311 d":!0,"Kepler-312 b":!0,"Kepler-312 c":!0,"Kepler-313 b":!0,"Kepler-313 c":!0,"Kepler-314 b":!0,"Kepler-314 c":!0,"Kepler-315 b":!0,"Kepler-315 c":!0,"Kepler-316 b":!0,"Kepler-316 c":!0,"Kepler-317 b":!0,"Kepler-317 c":!0,"Kepler-318 b":!0,"Kepler-318 c":!0,"Kepler-319 b":!0,"Kepler-319 c":!0,"Kepler-319 d":!0,"Kepler-32 b":!0,"Kepler-32 c":!0,"Kepler-32 d":!0,"Kepler-32 e":!0,"Kepler-32 f":!0,"Kepler-320 b":!0,"Kepler-320 c":!0,"Kepler-321 b":!0,"Kepler-321 c":!0,"Kepler-322 b":!0,"Kepler-322 c":!0,"Kepler-323 b":!0,"Kepler-323 c":!0,"Kepler-324 b":!0,"Kepler-324 c":!0,"Kepler-324 e":!0,"Kepler-325 b":!0,"Kepler-325 c":!0,"Kepler-325 d":!0,"Kepler-326 b":!0,"Kepler-326 c":!0,"Kepler-326 d":!0,"Kepler-327 b":!0,"Kepler-327 c":!0,"Kepler-327 d":!0,"Kepler-328 b":!0,"Kepler-328 c":!0,"Kepler-329 b":!0,"Kepler-329 c":!0,"Kepler-33 b":!0,"Kepler-33 c":!0,"Kepler-33 d":!0,"Kepler-33 e":!0,"Kepler-33 f":!0,"Kepler-330 b":!0,"Kepler-330 c":!0,"Kepler-331 b":!0,"Kepler-331 c":!0,"Kepler-331 d":!0,"Kepler-332 b":!0,"Kepler-332 c":!0,"Kepler-332 d":!0,"Kepler-333 b":!0,"Kepler-333 c":!0,"Kepler-334 b":!0,"Kepler-334 c":!0,"Kepler-334 d":!0,"Kepler-335 b":!0,"Kepler-335 c":!0,"Kepler-336 b":!0,"Kepler-336 c":!0,"Kepler-336 d":!0,"Kepler-337 b":!0,"Kepler-337 c":!0,"Kepler-338 b":!0,"Kepler-338 c":!0,"Kepler-338 d":!0,"Kepler-338 e":!0,"Kepler-339 b":!0,"Kepler-339 c":!0,"Kepler-339 d":!0,"Kepler-34 b":!0,"Kepler-340 b":!0,"Kepler-340 c":!0,"Kepler-341 b":!0,"Kepler-341 c":!0,"Kepler-341 d":!0,"Kepler-341 e":!0,"Kepler-342 b":!0,"Kepler-342 c":!0,"Kepler-342 d":!0,"Kepler-342 e":!0,"Kepler-343 b":!0,"Kepler-343 c":!0,"Kepler-344 b":!0,"Kepler-344 c":!0,"Kepler-345 b":!0,"Kepler-345 c":!0,"Kepler-346 b":!0,"Kepler-346 c":!0,"Kepler-347 b":!0,"Kepler-347 c":!0,"Kepler-347 d":!0,"Kepler-348 b":!0,"Kepler-348 c":!0,"Kepler-349 b":!0,"Kepler-349 c":!0,"Kepler-35 b":!0,"Kepler-350 b":!0,"Kepler-350 c":!0,"Kepler-350 d":!0,"Kepler-351 b":!0,"Kepler-351 c":!0,"Kepler-351 d":!0,"Kepler-352 b":!0,"Kepler-352 c":!0,"Kepler-352 d":!0,"Kepler-353 b":!0,"Kepler-353 c":!0,"Kepler-354 b":!0,"Kepler-354 c":!0,"Kepler-354 d":!0,"Kepler-355 b":!0,"Kepler-355 c":!0,"Kepler-356 b":!0,"Kepler-356 c":!0,"Kepler-357 b":!0,"Kepler-357 c":!0,"Kepler-357 d":!0,"Kepler-358 b":!0,"Kepler-358 c":!0,"Kepler-359 b":!0,"Kepler-359 c":!0,"Kepler-359 d":!0,"Kepler-36 b":!0,"Kepler-36 c":!0,"Kepler-360 b":!0,"Kepler-360 c":!0,"Kepler-361 b":!0,"Kepler-361 c":!0,"Kepler-362 b":!0,"Kepler-362 c":!0,"Kepler-363 b":!0,"Kepler-363 c":!0,"Kepler-363 d":!0,"Kepler-364 b":!0,"Kepler-364 c":!0,"Kepler-365 b":!0,"Kepler-365 c":!0,"Kepler-366 b":!0,"Kepler-366 c":!0,"Kepler-367 b":!0,"Kepler-367 c":!0,"Kepler-368 b":!0,"Kepler-368 c":!0,"Kepler-369 b":!0,"Kepler-369 c":!0,"Kepler-37 b":!0,"Kepler-37 c":!0,"Kepler-37 d":!0,"Kepler-37 e":!0,"Kepler-370 b":!0,"Kepler-370 c":!0,"Kepler-371 b":!0,"Kepler-371 c":!0,"Kepler-372 b":!0,"Kepler-372 c":!0,"Kepler-372 d":!0,"Kepler-373 b":!0,"Kepler-373 c":!0,"Kepler-374 b":!0,"Kepler-374 c":!0,"Kepler-374 d":!0,"Kepler-375 b":!0,"Kepler-375 c":!0,"Kepler-376 b":!0,"Kepler-376 c":!0,"Kepler-377 b":!0,"Kepler-377 c":!0,"Kepler-378 b":!0,"Kepler-378 c":!0,"Kepler-379 b":!0,"Kepler-379 c":!0,"Kepler-38 b":!0,"Kepler-380 b":!0,"Kepler-380 c":!0,"Kepler-381 b":!0,"Kepler-381 c":!0,"Kepler-381 d":!0,"Kepler-382 b":!0,"Kepler-382 c":!0,"Kepler-383 b":!0,"Kepler-383 c":!0,"Kepler-384 b":!0,"Kepler-384 c":!0,"Kepler-385 b":!0,"Kepler-385 c":!0,"Kepler-385 d":!0,"Kepler-386 b":!0,"Kepler-386 c":!0,"Kepler-387 b":!0,"Kepler-387 c":!0,"Kepler-388 b":!0,"Kepler-388 c":!0,"Kepler-389 b":!0,"Kepler-389 c":!0,"Kepler-39 b":!0,"Kepler-390 b":!0,"Kepler-390 c":!0,"Kepler-391 b":!0,"Kepler-391 c":!0,"Kepler-392 b":!0,"Kepler-392 c":!0,"Kepler-393 b":!0,"Kepler-393 c":!0,"Kepler-394 b":!0,"Kepler-394 c":!0,"Kepler-394 d":!0,"Kepler-395 b":!0,"Kepler-395 c":!0,"Kepler-396 b":!0,"Kepler-396 c":!0,"Kepler-397 b":!0,"Kepler-397 c":!0,"Kepler-398 b":!0,"Kepler-398 c":!0,"Kepler-398 d":!0,"Kepler-399 b":!0,"Kepler-399 c":!0,"Kepler-399 d":!0,"Kepler-4 b":!0,"Kepler-40 b":!0,"Kepler-400 b":!0,"Kepler-400 c":!0,"Kepler-401 b":!0,"Kepler-401 c":!0,"Kepler-401 d":!0,"Kepler-402 b":!0,"Kepler-402 c":!0,"Kepler-402 d":!0,"Kepler-402 e":!0,"Kepler-403 b":!0,"Kepler-403 c":!0,"Kepler-403 d":!0,"Kepler-404 b":!0,"Kepler-404 c":!0,"Kepler-405 b":!0,"Kepler-405 c":!0,"Kepler-406 b":!0,"Kepler-406 c":!0,"Kepler-407 b":!0,"Kepler-407 c":!0,"Kepler-408 b":!0,"Kepler-409 b":!0,"Kepler-41 b":!0,"Kepler-410 A b":!0,"Kepler-411 b":!0,"Kepler-411 c":!0,"Kepler-411 d":!0,"Kepler-411 e":!0,"Kepler-412 b":!0,"Kepler-413 b":!0,"Kepler-414 b":!0,"Kepler-414 c":!0,"Kepler-415 b":!0,"Kepler-415 c":!0,"Kepler-416 b":!0,"Kepler-416 c":!0,"Kepler-416 d":!0,"Kepler-417 b":!0,"Kepler-417 c":!0,"Kepler-418 b":!0,"Kepler-418 c":!0,"Kepler-419 b":!0,"Kepler-419 c":!0,"Kepler-42 b":!0,"Kepler-42 c":!0,"Kepler-42 d":!0,"Kepler-421 b":!0,"Kepler-422 b":!0,"Kepler-423 b":!0,"Kepler-424 b":!0,"Kepler-424 c":!0,"Kepler-425 b":!0,"Kepler-426 b":!0,"Kepler-427 b":!0,"Kepler-428 b":!0,"Kepler-43 b":!0,"Kepler-430 b":!0,"Kepler-430 c":!0,"Kepler-431 b":!0,"Kepler-431 c":!0,"Kepler-431 d":!0,"Kepler-432 b":!0,"Kepler-432 c":!0,"Kepler-433 b":!0,"Kepler-434 b":!0,"Kepler-435 b":!0,"Kepler-436 b":!0,"Kepler-436 c":!0,"Kepler-437 b":!0,"Kepler-438 b":!0,"Kepler-439 b":!0,"Kepler-44 b":!0,"Kepler-440 b":!0,"Kepler-441 b":!0,"Kepler-442 b":!0,"Kepler-443 b":!0,"Kepler-444 b":!0,"Kepler-444 c":!0,"Kepler-444 d":!0,"Kepler-444 e":!0,"Kepler-444 f":!0,"Kepler-445 b":!0,"Kepler-445 c":!0,"Kepler-445 d":!0,"Kepler-446 b":!0,"Kepler-446 c":!0,"Kepler-446 d":!0,"Kepler-447 b":!0,"Kepler-448 c":!0,"Kepler-449 b":!0,"Kepler-449 c":!0,"Kepler-45 b":!0,"Kepler-450 b":!0,"Kepler-450 c":!0,"Kepler-450 d":!0,"Kepler-451 c":!0,"Kepler-451 d":!0,"Kepler-452 b":!0,"Kepler-453 b":!0,"Kepler-454 b":!0,"Kepler-454 c":!0,"Kepler-454 d":!0,"Kepler-457 d":!0,"Kepler-458 c":!0,"Kepler-46 b":!0,"Kepler-46 c":!0,"Kepler-46 d":!0,"Kepler-460 c":!0,"Kepler-461 b":!0,"Kepler-462 b":!0,"Kepler-462 c":!0,"Kepler-463 b":!0,"Kepler-464 b":!0,"Kepler-465 b":!0,"Kepler-466 b":!0,"Kepler-466 c":!0,"Kepler-467 b":!0,"Kepler-468 b":!0,"Kepler-47 b":!0,"Kepler-47 c":!0,"Kepler-47 d":!0,"Kepler-471 b":!0,"Kepler-472 b":!0,"Kepler-473 b":!0,"Kepler-474 b":!0,"Kepler-475 b":!0,"Kepler-476 b":!0,"Kepler-477 b":!0,"Kepler-478 b":!0,"Kepler-479 b":!0,"Kepler-48 b":!0,"Kepler-48 c":!0,"Kepler-48 d":!0,"Kepler-48 e":!0,"Kepler-48 f":!0,"Kepler-480 b":!0,"Kepler-481 b":!0,"Kepler-482 b":!0,"Kepler-483 b":!0,"Kepler-484 b":!0,"Kepler-485 b":!0,"Kepler-487 b":!0,"Kepler-487 c":!0,"Kepler-487 d":!0,"Kepler-489 b":!0,"Kepler-49 b":!0,"Kepler-49 c":!0,"Kepler-49 d":!0,"Kepler-49 e":!0,"Kepler-490 b":!0,"Kepler-491 b":!0,"Kepler-493 b":!0,"Kepler-495 b":!0,"Kepler-495 c":!0,"Kepler-496 b":!0,"Kepler-497 b":!0,"Kepler-498 b":!0,"Kepler-499 b":!0,"Kepler-5 b":!0,"Kepler-50 b":!0,"Kepler-50 c":!0,"Kepler-500 b":!0,"Kepler-501 b":!0,"Kepler-501 c":!0,"Kepler-502 b":!0,"Kepler-504 b":!0,"Kepler-505 b":!0,"Kepler-506 b":!0,"Kepler-507 b":!0,"Kepler-508 b":!0,"Kepler-509 b":!0,"Kepler-51 b":!0,"Kepler-51 c":!0,"Kepler-51 d":!0,"Kepler-510 b":!0,"Kepler-511 b":!0,"Kepler-511 c":!0,"Kepler-512 b":!0,"Kepler-513 b":!0,"Kepler-514 b":!0,"Kepler-515 b":!0,"Kepler-516 b":!0,"Kepler-517 b":!0,"Kepler-518 b":!0,"Kepler-519 b":!0,"Kepler-52 b":!0,"Kepler-52 c":!0,"Kepler-52 d":!0,"Kepler-520 b":!0,"Kepler-520 c":!0,"Kepler-521 b":!0,"Kepler-522 b":!0,"Kepler-523 b":!0,"Kepler-524 b":!0,"Kepler-524 c":!0,"Kepler-525 b":!0,"Kepler-526 b":!0,"Kepler-527 b":!0,"Kepler-528 b":!0,"Kepler-529 b":!0,"Kepler-529 c":!0,"Kepler-529 d":!0,"Kepler-53 b":!0,"Kepler-53 c":!0,"Kepler-53 d":!0,"Kepler-530 b":!0,"Kepler-531 b":!0,"Kepler-532 b":!0,"Kepler-533 b":!0,"Kepler-534 b":!0,"Kepler-534 c":!0,"Kepler-535 b":!0,"Kepler-536 b":!0,"Kepler-537 b":!0,"Kepler-538 b":!0,"Kepler-539 b":!0,"Kepler-539 c":!0,"Kepler-54 b":!0,"Kepler-54 c":!0,"Kepler-54 d":!0,"Kepler-540 b":!0,"Kepler-541 b":!0,"Kepler-542 b":!0,"Kepler-543 b":!0,"Kepler-544 b":!0,"Kepler-545 b":!0,"Kepler-546 b":!0,"Kepler-547 b":!0,"Kepler-548 b":!0,"Kepler-549 b":!0,"Kepler-549 c":!0,"Kepler-549 d":!0,"Kepler-55 b":!0,"Kepler-55 c":!0,"Kepler-55 d":!0,"Kepler-55 e":!0,"Kepler-55 f":!0,"Kepler-550 b":!0,"Kepler-551 b":!0,"Kepler-552 b":!0,"Kepler-553 b":!0,"Kepler-553 c":!0,"Kepler-554 b":!0,"Kepler-555 b":!0,"Kepler-556 b":!0,"Kepler-557 b":!0,"Kepler-558 b":!0,"Kepler-559 b":!0,"Kepler-56 b":!0,"Kepler-56 c":!0,"Kepler-56 d":!0,"Kepler-560 b":!0,"Kepler-561 b":!0,"Kepler-561 c":!0,"Kepler-562 b":!0,"Kepler-563 b":!0,"Kepler-564 b":!0,"Kepler-565 b":!0,"Kepler-566 b":!0,"Kepler-567 b":!0,"Kepler-568 b":!0,"Kepler-569 b":!0,"Kepler-57 b":!0,"Kepler-57 c":!0,"Kepler-570 b":!0,"Kepler-571 b":!0,"Kepler-572 b":!0,"Kepler-573 b":!0,"Kepler-574 b":!0,"Kepler-575 b":!0,"Kepler-576 b":!0,"Kepler-577 b":!0,"Kepler-578 b":!0,"Kepler-579 b":!0,"Kepler-58 b":!0,"Kepler-58 c":!0,"Kepler-58 d":!0,"Kepler-58 e":!0,"Kepler-580 b":!0,"Kepler-581 b":!0,"Kepler-582 b":!0,"Kepler-583 b":!0,"Kepler-584 b":!0,"Kepler-585 b":!0,"Kepler-586 b":!0,"Kepler-587 b":!0,"Kepler-588 b":!0,"Kepler-589 b":!0,"Kepler-589 c":!0,"Kepler-59 b":!0,"Kepler-59 c":!0,"Kepler-590 b":!0,"Kepler-591 b":!0,"Kepler-592 b":!0,"Kepler-593 b":!0,"Kepler-594 b":!0,"Kepler-595 b":!0,"Kepler-595 c":!0,"Kepler-596 b":!0,"Kepler-597 b":!0,"Kepler-598 b":!0,"Kepler-598 c":!0,"Kepler-599 b":!0,"Kepler-6 b":!0,"Kepler-60 b":!0,"Kepler-60 c":!0,"Kepler-60 d":!0,"Kepler-600 b":!0,"Kepler-601 b":!0,"Kepler-602 b":!0,"Kepler-603 b":!0,"Kepler-603 c":!0,"Kepler-603 d":!0,"Kepler-604 b":!0,"Kepler-605 b":!0,"Kepler-605 c":!0,"Kepler-606 b":!0,"Kepler-607 b":!0,"Kepler-607 c":!0,"Kepler-608 b":!0,"Kepler-609 b":!0,"Kepler-61 b":!0,"Kepler-610 b":!0,"Kepler-610 c":!0,"Kepler-611 b":!0,"Kepler-612 b":!0,"Kepler-613 b":!0,"Kepler-614 b":!0,"Kepler-615 b":!0,"Kepler-616 b":!0,"Kepler-616 c":!0,"Kepler-616 d":!0,"Kepler-617 b":!0,"Kepler-618 b":!0,"Kepler-619 b":!0,"Kepler-619 c":!0,"Kepler-619 d":!0,"Kepler-62 b":!0,"Kepler-62 c":!0,"Kepler-62 d":!0,"Kepler-62 e":!0,"Kepler-62 f":!0,"Kepler-620 b":!0,"Kepler-621 b":!0,"Kepler-622 b":!0,"Kepler-623 b":!0,"Kepler-624 b":!0,"Kepler-625 b":!0,"Kepler-625 c":!0,"Kepler-626 b":!0,"Kepler-627 b":!0,"Kepler-629 b":!0,"Kepler-63 b":!0,"Kepler-630 b":!0,"Kepler-631 b":!0,"Kepler-632 b":!0,"Kepler-633 b":!0,"Kepler-633 c":!0,"Kepler-634 b":!0,"Kepler-635 b":!0,"Kepler-636 b":!0,"Kepler-637 b":!0,"Kepler-638 b":!0,"Kepler-639 b":!0,"Kepler-640 b":!0,"Kepler-641 b":!0,"Kepler-642 b":!0,"Kepler-643 b":!0,"Kepler-644 b":!0,"Kepler-645 b":!0,"Kepler-646 b":!0,"Kepler-647 b":!0,"Kepler-647 c":!0,"Kepler-648 b":!0,"Kepler-649 b":!0,"Kepler-65 b":!0,"Kepler-65 c":!0,"Kepler-65 d":!0,"Kepler-65 e":!0,"Kepler-650 b":!0,"Kepler-651 b":!0,"Kepler-652 b":!0,"Kepler-653 b":!0,"Kepler-653 c":!0,"Kepler-654 b":!0,"Kepler-655 b":!0,"Kepler-656 b":!0,"Kepler-656 c":!0,"Kepler-657 b":!0,"Kepler-658 b":!0,"Kepler-659 b":!0,"Kepler-66 b":!0,"Kepler-660 b":!0,"Kepler-661 b":!0,"Kepler-662 b":!0,"Kepler-663 b":!0,"Kepler-664 b":!0,"Kepler-665 b":!0,"Kepler-666 b":!0,"Kepler-667 b":!0,"Kepler-668 b":!0,"Kepler-669 b":!0,"Kepler-67 b":!0,"Kepler-670 b":!0,"Kepler-671 b":!0,"Kepler-672 b":!0,"Kepler-673 b":!0,"Kepler-674 b":!0,"Kepler-675 b":!0,"Kepler-676 b":!0,"Kepler-677 b":!0,"Kepler-678 b":!0,"Kepler-679 b":!0,"Kepler-68 b":!0,"Kepler-68 c":!0,"Kepler-68 d":!0,"Kepler-68 e":!0,"Kepler-680 b":!0,"Kepler-681 b":!0,"Kepler-682 b":!0,"Kepler-683 b":!0,"Kepler-684 b":!0,"Kepler-685 b":!0,"Kepler-686 b":!0,"Kepler-687 b":!0,"Kepler-688 b":!0,"Kepler-689 b":!0,"Kepler-69 b":!0,"Kepler-69 c":!0,"Kepler-690 b":!0,"Kepler-691 b":!0,"Kepler-692 b":!0,"Kepler-693 b":!0,"Kepler-694 b":!0,"Kepler-695 b":!0,"Kepler-696 b":!0,"Kepler-697 b":!0,"Kepler-698 b":!0,"Kepler-7 b":!0,"Kepler-700 b":!0,"Kepler-701 b":!0,"Kepler-702 b":!0,"Kepler-703 b":!0,"Kepler-704 b":!0,"Kepler-705 b":!0,"Kepler-707 b":!0,"Kepler-708 b":!0,"Kepler-709 b":!0,"Kepler-710 b":!0,"Kepler-711 b":!0,"Kepler-712 b":!0,"Kepler-712 c":!0,"Kepler-713 b":!0,"Kepler-714 b":!0,"Kepler-715 b":!0,"Kepler-716 b":!0,"Kepler-716 c":!0,"Kepler-717 b":!0,"Kepler-718 b":!0,"Kepler-719 b":!0,"Kepler-720 b":!0,"Kepler-721 b":!0,"Kepler-722 b":!0,"Kepler-722 c":!0,"Kepler-723 b":!0,"Kepler-724 b":!0,"Kepler-725 b":!0,"Kepler-726 b":!0,"Kepler-727 b":!0,"Kepler-728 b":!0,"Kepler-729 b":!0,"Kepler-730 b":!0,"Kepler-730 c":!0,"Kepler-731 b":!0,"Kepler-732 b":!0,"Kepler-732 c":!0,"Kepler-733 b":!0,"Kepler-734 b":!0,"Kepler-735 b":!0,"Kepler-736 b":!0,"Kepler-737 b":!0,"Kepler-738 b":!0,"Kepler-739 b":!0,"Kepler-74 b":!0,"Kepler-740 b":!0,"Kepler-741 b":!0,"Kepler-742 b":!0,"Kepler-743 b":!0,"Kepler-744 b":!0,"Kepler-745 b":!0,"Kepler-746 b":!0,"Kepler-747 b":!0,"Kepler-748 b":!0,"Kepler-749 b":!0,"Kepler-75 b":!0,"Kepler-750 b":!0,"Kepler-750 c":!0,"Kepler-751 b":!0,"Kepler-752 b":!0,"Kepler-753 b":!0,"Kepler-754 b":!0,"Kepler-755 b":!0,"Kepler-755 c":!0,"Kepler-756 b":!0,"Kepler-757 b":!0,"Kepler-758 b":!0,"Kepler-758 c":!0,"Kepler-758 d":!0,"Kepler-758 e":!0,"Kepler-759 b":!0,"Kepler-76 b":!0,"Kepler-760 b":!0,"Kepler-760 c":!0,"Kepler-761 b":!0,"Kepler-762 b":!0,"Kepler-763 b":!0,"Kepler-763 c":!0,"Kepler-763 d":!0,"Kepler-764 b":!0,"Kepler-765 b":!0,"Kepler-766 b":!0,"Kepler-767 b":!0,"Kepler-768 b":!0,"Kepler-769 b":!0,"Kepler-769 c":!0,"Kepler-77 b":!0,"Kepler-770 b":!0,"Kepler-770 c":!0,"Kepler-770 d":!0,"Kepler-771 b":!0,"Kepler-772 b":!0,"Kepler-773 b":!0,"Kepler-774 b":!0,"Kepler-775 b":!0,"Kepler-776 b":!0,"Kepler-777 b":!0,"Kepler-778 b":!0,"Kepler-779 b":!0,"Kepler-78 b":!0,"Kepler-780 b":!0,"Kepler-781 b":!0,"Kepler-782 b":!0,"Kepler-783 b":!0,"Kepler-783 c":!0,"Kepler-784 b":!0,"Kepler-784 c":!0,"Kepler-785 b":!0,"Kepler-786 b":!0,"Kepler-787 b":!0,"Kepler-788 b":!0,"Kepler-789 b":!0,"Kepler-79 b":!0,"Kepler-79 c":!0,"Kepler-79 d":!0,"Kepler-79 e":!0,"Kepler-790 b":!0,"Kepler-791 b":!0,"Kepler-792 b":!0,"Kepler-793 b":!0,"Kepler-794 b":!0,"Kepler-795 b":!0,"Kepler-796 b":!0,"Kepler-797 b":!0,"Kepler-798 b":!0,"Kepler-799 b":!0,"Kepler-799 c":!0,"Kepler-8 b":!0,"Kepler-80 b":!0,"Kepler-80 c":!0,"Kepler-80 d":!0,"Kepler-80 e":!0,"Kepler-80 f":!0,"Kepler-80 g":!0,"Kepler-800 b":!0,"Kepler-801 b":!0,"Kepler-802 b":!0,"Kepler-803 b":!0,"Kepler-804 b":!0,"Kepler-804 c":!0,"Kepler-805 b":!0,"Kepler-806 b":!0,"Kepler-808 b":!0,"Kepler-809 b":!0,"Kepler-81 b":!0,"Kepler-81 c":!0,"Kepler-81 d":!0,"Kepler-810 b":!0,"Kepler-811 b":!0,"Kepler-812 b":!0,"Kepler-813 b":!0,"Kepler-814 b":!0,"Kepler-815 b":!0,"Kepler-816 b":!0,"Kepler-817 b":!0,"Kepler-818 b":!0,"Kepler-819 b":!0,"Kepler-82 b":!0,"Kepler-82 c":!0,"Kepler-82 d":!0,"Kepler-82 e":!0,"Kepler-82 f":!0,"Kepler-820 b":!0,"Kepler-821 b":!0,"Kepler-822 b":!0,"Kepler-823 b":!0,"Kepler-824 b":!0,"Kepler-825 b":!0,"Kepler-825 c":!0,"Kepler-826 b":!0,"Kepler-827 b":!0,"Kepler-828 b":!0,"Kepler-829 b":!0,"Kepler-83 b":!0,"Kepler-83 c":!0,"Kepler-83 d":!0,"Kepler-830 b":!0,"Kepler-831 b":!0,"Kepler-832 b":!0,"Kepler-833 b":!0,"Kepler-834 b":!0,"Kepler-835 b":!0,"Kepler-836 b":!0,"Kepler-837 b":!0,"Kepler-838 b":!0,"Kepler-839 b":!0,"Kepler-84 b":!0,"Kepler-84 c":!0,"Kepler-84 d":!0,"Kepler-84 e":!0,"Kepler-84 f":!0,"Kepler-841 b":!0,"Kepler-842 b":!0,"Kepler-843 b":!0,"Kepler-844 b":!0,"Kepler-845 b":!0,"Kepler-846 b":!0,"Kepler-847 b":!0,"Kepler-848 b":!0,"Kepler-849 b":!0,"Kepler-85 b":!0,"Kepler-85 c":!0,"Kepler-85 d":!0,"Kepler-85 e":!0,"Kepler-850 b":!0,"Kepler-851 b":!0,"Kepler-852 b":!0,"Kepler-853 b":!0,"Kepler-855 b":!0,"Kepler-856 b":!0,"Kepler-857 b":!0,"Kepler-858 b":!0,"Kepler-859 b":!0,"Kepler-860 b":!0,"Kepler-861 b":!0,"Kepler-862 b":!0,"Kepler-863 b":!0,"Kepler-864 b":!0,"Kepler-864 c":!0,"Kepler-865 b":!0,"Kepler-865 c":!0,"Kepler-866 b":!0,"Kepler-867 b":!0,"Kepler-868 b":!0,"Kepler-869 b":!0,"Kepler-87 b":!0,"Kepler-87 c":!0,"Kepler-870 b":!0,"Kepler-871 b":!0,"Kepler-872 b":!0,"Kepler-873 b":!0,"Kepler-874 b":!0,"Kepler-875 b":!0,"Kepler-876 b":!0,"Kepler-877 b":!0,"Kepler-878 b":!0,"Kepler-879 b":!0,"Kepler-88 d":!0,"Kepler-880 b":!0,"Kepler-880 c":!0,"Kepler-881 b":!0,"Kepler-882 b":!0,"Kepler-883 b":!0,"Kepler-884 b":!0,"Kepler-885 b":!0,"Kepler-886 b":!0,"Kepler-887 b":!0,"Kepler-887 c":!0,"Kepler-888 b":!0,"Kepler-889 b":!0,"Kepler-890 b":!0,"Kepler-891 b":!0,"Kepler-892 b":!0,"Kepler-893 b":!0,"Kepler-894 b":!0,"Kepler-895 b":!0,"Kepler-896 b":!0,"Kepler-896 c":!0,"Kepler-897 b":!0,"Kepler-898 b":!0,"Kepler-899 b":!0,"Kepler-9 b":!0,"Kepler-9 c":!0,"Kepler-9 d":!0,"Kepler-90 i":!0,"Kepler-900 b":!0,"Kepler-901 b":!0,"Kepler-902 b":!0,"Kepler-903 b":!0,"Kepler-903 c":!0,"Kepler-904 b":!0,"Kepler-905 b":!0,"Kepler-906 b":!0,"Kepler-907 b":!0,"Kepler-908 b":!0,"Kepler-909 b":!0,"Kepler-91 b":!0,"Kepler-910 b":!0,"Kepler-911 b":!0,"Kepler-912 b":!0,"Kepler-913 b":!0,"Kepler-913 c":!0,"Kepler-914 b":!0,"Kepler-915 b":!0,"Kepler-916 b":!0,"Kepler-917 b":!0,"Kepler-918 b":!0,"Kepler-919 b":!0,"Kepler-92 b":!0,"Kepler-92 c":!0,"Kepler-92 d":!0,"Kepler-920 b":!0,"Kepler-920 c":!0,"Kepler-921 b":!0,"Kepler-922 b":!0,"Kepler-923 b":!0,"Kepler-924 b":!0,"Kepler-925 b":!0,"Kepler-926 b":!0,"Kepler-927 b":!0,"Kepler-928 b":!0,"Kepler-929 b":!0,"Kepler-93 b":!0,"Kepler-93 c":!0,"Kepler-930 b":!0,"Kepler-931 b":!0,"Kepler-932 b":!0,"Kepler-933 b":!0,"Kepler-934 b":!0,"Kepler-935 b":!0,"Kepler-936 b":!0,"Kepler-937 b":!0,"Kepler-937 c":!0,"Kepler-938 b":!0,"Kepler-939 b":!0,"Kepler-94 b":!0,"Kepler-94 c":!0,"Kepler-940 b":!0,"Kepler-941 b":!0,"Kepler-942 b":!0,"Kepler-943 b":!0,"Kepler-944 b":!0,"Kepler-945 b":!0,"Kepler-946 b":!0,"Kepler-947 b":!0,"Kepler-948 b":!0,"Kepler-949 b":!0,"Kepler-949 c":!0,"Kepler-95 b":!0,"Kepler-950 b":!0,"Kepler-951 b":!0,"Kepler-952 b":!0,"Kepler-953 b":!0,"Kepler-953 c":!0,"Kepler-954 b":!0,"Kepler-955 b":!0,"Kepler-956 b":!0,"TOI-1052 c":!0,"Kepler-957 b":!0,"Kepler-958 b":!0,"Kepler-959 b":!0,"Kepler-96 b":!0,"Kepler-960 b":!0,"Kepler-961 b":!0,"Kepler-962 b":!0,"Kepler-963 b":!0,"Kepler-964 b":!0,"Kepler-965 b":!0,"Kepler-966 b":!0,"Kepler-967 b":!0,"Kepler-967 c":!0,"Kepler-968 b":!0,"Kepler-968 c":!0,"Kepler-969 b":!0,"Kepler-969 c":!0,"Kepler-97 b":!0,"Kepler-97 c":!0,"Kepler-970 b":!0,"Kepler-971 b":!0,"Kepler-972 b":!0,"Kepler-973 b":!0,"Kepler-974 b":!0,"Kepler-975 b":!0,"Kepler-975 c":!0,"Kepler-976 b":!0,"Kepler-977 b":!0,"Kepler-978 b":!0,"Kepler-979 b":!0,"Kepler-98 b":!0,"Kepler-980 b":!0,"Kepler-981 b":!0,"Kepler-982 b":!0,"Kepler-983 b":!0,"Kepler-984 b":!0,"Kepler-985 b":!0,"Kepler-986 b":!0,"Kepler-987 b":!0,"Kepler-988 b":!0,"Kepler-989 b":!0,"Kepler-99 b":!0,"Kepler-990 b":!0,"Kepler-990 c":!0,"Kepler-991 b":!0,"Kepler-992 b":!0,"Kepler-993 b":!0,"Kepler-994 b":!0,"Kepler-995 b":!0,"Kepler-996 b":!0,"Kepler-997 b":!0,"Kepler-998 b":!0,"Kepler-999 b":!0,"L 168-9 b":!0,"L 363-38 b":!0,"L 98-59 b":!0,"L 98-59 c":!0,"L 98-59 d":!0,"L 98-59 e":!0,"LHS 1140 b":!0,"LHS 1140 c":!0,"LHS 1478 b":!0,"LHS 1678 b":!0,"LHS 1678 c":!0,"LHS 1678 d":!0,"LHS 1815 b":!0,"LHS 3154 b":!0,"LHS 3844 b":!0,"LHS 475 b":!0,"LP 714-47 b":!0,"LP 791-18 b":!0,"LP 791-18 c":!0,"LP 791-18 d":!0,"LP 890-9 b":!0,"LP 890-9 c":!0,"LSPM J2116+0234 b":!0,"LTT 1445 A b":!0,"LTT 1445 A c":!0,"LTT 3780 b":!0,"LTT 3780 c":!0,"LTT 9779 b":!0,"LkCa 15 b":!0,"LkCa 15 c":!0,"Lupus-TR-3 b":!0,"MASCARA-1 b":!0,"MASCARA-4 b":!0,"MOA-2007-BLG-192L b":!0,"MOA-2007-BLG-400L b":!0,"MOA-2008-BLG-310L b":!0,"MOA-2008-BLG-379L b":!0,"MOA-2009-BLG-266L b":!0,"MOA-2009-BLG-319L b":!0,"MOA-2009-BLG-387L b":!0,"MOA-2010-BLG-073L b":!0,"MOA-2010-BLG-117L b":!0,"MOA-2010-BLG-328L b":!0,"MOA-2010-BLG-353L b":!0,"MOA-2010-BLG-477L b":!0,"MOA-2011-BLG-028L b":!0,"MOA-2011-BLG-262L b":!0,"MOA-2011-BLG-291L b":!0,"MOA-2011-BLG-293L b":!0,"MOA-2011-BLG-322L b":!0,"MOA-2012-BLG-006L b":!0,"MOA-2012-BLG-505L b":!0,"MOA-2013-BLG-220L b":!0,"MOA-2013-BLG-605L b":!0,"MOA-2015-BLG-337L b":!0,"MOA-2016-BLG-227L b":!0,"MOA-2016-BLG-319L b":!0,"MOA-2019-BLG-008L b":!0,"MOA-2020-BLG-135L b":!0,"MOA-2020-BLG-208L b":!0,"MOA-2022-BLG-249L b":!0,"MOA-2022-BLG-563L b":!0,"MOA-bin-1L b":!0,"MOA-bin-29 b":!0,"MWC 758 c":!0,"NGC 2682 Sand 1429 b":!0,"NGC 2682 Sand 364 b":!0,"NGC 2682 Sand 978 b":!0,"NGC 2682 YBP 1194 b":!0,"NGC 2682 YBP 1514 b":!0,"NGC 2682 YBP 401 b":!0,"NGTS-1 b":!0,"NGTS-10 b":!0,"NGTS-11 b":!0,"NGTS-12 b":!0,"NGTS-13 b":!0,"NGTS-14 A b":!0,"NGTS-15 b":!0,"NGTS-16 b":!0,"NGTS-17 b":!0,"NGTS-18 b":!0,"NGTS-2 b":!0,"NGTS-20 b":!0,"NGTS-21 b":!0,"NGTS-23 b":!0,"NGTS-24 b":!0,"NGTS-25 b":!0,"NGTS-26 b":!0,"NGTS-27 b":!0,"NGTS-3 A b":!0,"NGTS-30 b":!0,"NGTS-4 b":!0,"NGTS-5 b":!0,"NGTS-6 b":!0,"NGTS-8 b":!0,"NGTS-9 b":!0,"NN Ser c":!0,"NN Ser d":!0,"NSVS 14256825 b":!0,"NY Vir b":!0,"NY Vir c":!0,"OGLE-2003-BLG-235L b":!0,"OGLE-2005-BLG-071L b":!0,"OGLE-2005-BLG-169L b":!0,"OGLE-2005-BLG-390L b":!0,"OGLE-2006-BLG-109L b":!0,"OGLE-2006-BLG-109L c":!0,"OGLE-2006-BLG-284L A b":!0,"OGLE-2007-BLG-349L AB c":!0,"OGLE-2007-BLG-368L b":!0,"OGLE-2008-BLG-092L b":!0,"OGLE-2008-BLG-355L b":!0,"OGLE-2011-BLG-0173L b":!0,"OGLE-2011-BLG-0251L b":!0,"OGLE-2011-BLG-0265L b":!0,"OGLE-2012-BLG-0026L b":!0,"OGLE-2012-BLG-0026L c":!0,"OGLE-2012-BLG-0358L b":!0,"OGLE-2012-BLG-0406L b":!0,"OGLE-2012-BLG-0563L b":!0,"OGLE-2012-BLG-0724L b":!0,"OGLE-2012-BLG-0838L b":!0,"OGLE-2012-BLG-0950L b":!0,"OGLE-2013-BLG-0102L b":!0,"OGLE-2013-BLG-0132L b":!0,"OGLE-2013-BLG-0341L B b":!0,"OGLE-2013-BLG-0911L b":!0,"OGLE-2013-BLG-1721L b":!0,"OGLE-2013-BLG-1761L b":!0,"OGLE-2014-BLG-0124L b":!0,"OGLE-2014-BLG-0221L b":!0,"OGLE-2014-BLG-0319L b":!0,"OGLE-2014-BLG-0676L b":!0,"OGLE-2014-BLG-1722L b":!0,"OGLE-2014-BLG-1722L c":!0,"OGLE-2014-BLG-1760L b":!0,"OGLE-2015-BLG-0051L b":!0,"OGLE-2015-BLG-0954L b":!0,"OGLE-2015-BLG-0966L b":!0,"OGLE-2015-BLG-1649L b":!0,"OGLE-2015-BLG-1670L b":!0,"OGLE-2015-BLG-1771L b":!0,"OGLE-2016-BLG-0263L b":!0,"OGLE-2016-BLG-0613L AB b":!0,"OGLE-2016-BLG-1067L b":!0,"OGLE-2016-BLG-1093L b":!0,"OGLE-2016-BLG-1190L b":!0,"OGLE-2016-BLG-1195L b":!0,"OGLE-2017-BLG-0173L b":!0,"OGLE-2017-BLG-0373L b":!0,"OGLE-2017-BLG-0406L b":!0,"OGLE-2017-BLG-0448L b":!0,"OGLE-2017-BLG-0482L b":!0,"OGLE-2017-BLG-0604L b":!0,"OGLE-2017-BLG-0640L b":!0,"OGLE-2017-BLG-1049L b":!0,"OGLE-2017-BLG-1099L b":!0,"OGLE-2017-BLG-1237L b":!0,"OGLE-2017-BLG-1275L b":!0,"OGLE-2017-BLG-1375L b":!0,"OGLE-2017-BLG-1434L b":!0,"OGLE-2017-BLG-1522L b":!0,"OGLE-2017-BLG-1691L b":!0,"OGLE-2017-BLG-1806L b":!0,"OGLE-2018-BLG-0298L b":!0,"OGLE-2018-BLG-0383L b":!0,"OGLE-2018-BLG-0506L b":!0,"OGLE-2018-BLG-0516L b":!0,"OGLE-2018-BLG-0532L b":!0,"OGLE-2018-BLG-0567L b":!0,"OGLE-2018-BLG-0596L b":!0,"OGLE-2018-BLG-0677L b":!0,"OGLE-2018-BLG-0740L b":!0,"OGLE-2018-BLG-0799L b":!0,"OGLE-2018-BLG-0932L b":!0,"OGLE-2018-BLG-0962L b":!0,"OGLE-2018-BLG-0977L b":!0,"OGLE-2018-BLG-1011L b":!0,"OGLE-2018-BLG-1011L c":!0,"OGLE-2018-BLG-1119L b":!0,"OGLE-2018-BLG-1126L b":!0,"OGLE-2018-BLG-1185L b":!0,"OGLE-2018-BLG-1212L b":!0,"OGLE-2018-BLG-1269L b":!0,"OGLE-2018-BLG-1367L b":!0,"OGLE-2018-BLG-1428L b":!0,"OGLE-2018-BLG-1647L b":!0,"OGLE-2018-BLG-1700L b":!0,"OGLE-2019-BLG-0249L b":!0,"OGLE-2019-BLG-0299L b":!0,"OGLE-2019-BLG-0304L b":!0,"OGLE-2019-BLG-0362L b":!0,"OGLE-2019-BLG-0468L b":!0,"OGLE-2019-BLG-0468L c":!0,"OGLE-2019-BLG-0679L b":!0,"OGLE-2019-BLG-0954L b":!0,"OGLE-2019-BLG-0960L b":!0,"OGLE-2019-BLG-1053L b":!0,"OGLE-2019-BLG-1180L b":!0,"OGLE-2019-BLG-1470L AB c":!0,"OGLE-2019-BLG-1492L b":!0,"OGLE-2023-BLG-0836L b":!0,"OGLE-TR-10 b":!0,"OGLE-TR-111 b":!0,"OGLE-TR-113 b":!0,"OGLE-TR-132 b":!0,"OGLE-TR-182 b":!0,"OGLE-TR-211 b":!0,"OGLE-TR-56 b":!0,"OGLE2-TR-L9 b":!0,"Oph 11 b":!0,"PDS 70 b":!0,"PDS 70 c":!0,"PH1 b":!0,"PH2 b":!0,"POTS-1 b":!0,"PSR B0329+54 b":!0,"PSR B1257+12 b":!0,"PSR B1257+12 c":!0,"PSR B1257+12 d":!0,"PSR J1719-1438 b":!0,"PSR J2322-2650 b":!0,"PZ Tel b":!0,"Pr0201 b":!0,"Pr0211 b":!0,"Pr0211 c":!0,"Proxima Cen b":!0,"Qatar-1 b":!0,"Qatar-10 b":!0,"Qatar-2 b":!0,"Qatar-3 b":!0,"Qatar-4 b":!0,"Qatar-5 b":!0,"Qatar-6 b":!0,"Qatar-7 b":!0,"Qatar-8 b":!0,"Qatar-9 b":!0,"ROXs 12 b":!0,"ROXs 42 B b":!0,"RR Cae b":!0,"Ross 128 b":!0,"Ross 458 c":!0,"Ross 508 b":!0,"SR 12 AB c":!0,"SWEEPS-11 b":!0,"SWEEPS-4 b":!0,"TAP 26 b":!0,"TCP J05074264+2447555 b":!0,"TIC 139270665 b":!0,"TIC 139270665 c":!0,"TIC 172900988 b":!0,"TIC 237913194 b":!0,"TIC 241249530 b":!0,"TIC 257060897 b":!0,"TIC 279401253 b":!0,"TIC 279401253 c":!0,"TIC 365102760 b":!0,"TIC 393818343 b":!0,"TIC 46432937 b":!0,"TIC 4672985 b":!0,"TOI-1052 b":!0,"TOI-1062 b":!0,"TOI-1062 c":!0,"TOI-1064 b":!0,"TOI-1064 c":!0,"TOI-1075 b":!0,"TOI-1107 b":!0,"TOI-1130 b":!0,"TOI-1130 c":!0,"TOI-1135 b":!0,"TOI-1136 b":!0,"TOI-1136 c":!0,"TOI-1136 d":!0,"TOI-1136 e":!0,"TOI-1136 f":!0,"TOI-1136 g":!0,"TOI-1173 b":!0,"TOI-1174 b":!0,"TOI-1180 b":!0,"TOI-1181 b":!0,"TOI-1184 b":!0,"TOI-1194 b":!0,"TOI-1199 b":!0,"TOI-1201 b":!0,"TOI-122 b":!0,"TOI-1221 b":!0,"TOI-1224 b":!0,"TOI-1224 c":!0,"TOI-1227 b":!0,"TOI-1231 b":!0,"TOI-1235 b":!0,"TOI-1244 b":!0,"TOI-1246 b":!0,"TOI-1246 c":!0,"TOI-1246 d":!0,"TOI-1246 e":!0,"TOI-1248 b":!0,"TOI-1249 b":!0,"TOI-125 b":!0,"TOI-125 c":!0,"TOI-125 d":!0,"TOI-1259 A b":!0,"TOI-1260 b":!0,"TOI-1260 c":!0,"TOI-1260 d":!0,"TOI-1266 b":!0,"TOI-1266 c":!0,"TOI-1268 b":!0,"TOI-1269 b":!0,"TOI-1272 b":!0,"TOI-1272 c":!0,"TOI-1273 b":!0,"TOI-1278 b":!0,"TOI-1279 b":!0,"TOI-128.01":!0,"TOI-1288 b":!0,"TOI-1288 c":!0,"TOI-1294 b":!0,"TOI-1294 c":!0,"TOI-1296 b":!0,"TOI-1298 b":!0,"TOI-132 b":!0,"TOI-1333 b":!0,"TOI-1338 b":!0,"TOI-1338 c":!0,"TOI-1347 b":!0,"TOI-1347 c":!0,"TOI-1386 b":!0,"TOI-1386 c":!0,"TOI-139 b":!0,"TOI-1408 b":!0,"TOI-1408 c":!0,"TOI-1410 c":!0,"TOI-1410.01":!0,"TOI-1411 b":!0,"TOI-1416 b":!0,"TOI-1420 b":!0,"TOI-1422 b":!0,"TOI-1431 b":!0,"TOI-1437 b":!0,"TOI-1439 b":!0,"TOI-1442 b":!0,"TOI-1443 b":!0,"TOI-1444 b":!0,"TOI-1448 b":!0,"TOI-1450 A b":!0,"TOI-1450 A c":!0,"TOI-1451 b":!0,"TOI-1452 b":!0,"TOI-1467 b":!0,"TOI-1468 b":!0,"TOI-1468 c":!0,"TOI-1470 b":!0,"TOI-1470 c":!0,"TOI-1472 b":!0,"TOI-1478 b":!0,"TOI-150.01":!0,"TOI-1516 b":!0,"TOI-1518 b":!0,"TOI-157 b":!0,"TOI-1601 b":!0,"TOI-163 b":!0,"TOI-1634 b":!0,"TOI-1634 c":!0,"TOI-1669 b":!0,"TOI-1669 c":!0,"TOI-1670 b":!0,"TOI-1670 c":!0,"TOI-1680 b":!0,"TOI-1683.01":!0,"TOI-1685 b":!0,"TOI-169 b":!0,"TOI-1691 b":!0,"TOI-1693 b":!0,"TOI-1694 b":!0,"TOI-1694 c":!0,"TOI-1695 b":!0,"TOI-1696 b":!0,"TOI-1710 b":!0,"TOI-172 b":!0,"TOI-1723 b":!0,"TOI-1728 b":!0,"TOI-1736 b":!0,"TOI-1736 c":!0,"TOI-1739 b":!0,"TOI-1742 b":!0,"TOI-1749 b":!0,"TOI-1749 c":!0,"TOI-1749 d":!0,"TOI-1751 b":!0,"TOI-1753 b":!0,"TOI-1758 b":!0,"TOI-1759 b":!0,"TOI-1775 b":!0,"TOI-1776 b":!0,"TOI-178 b":!0,"TOI-178 c":!0,"TOI-178 d":!0,"TOI-178 e":!0,"TOI-178 f":!0,"TOI-178 g":!0,"TOI-1789 b":!0,"TOI-1794 b":!0,"TOI-1798.01":!0,"TOI-1798.02":!0,"TOI-1799 b":!0,"TOI-1801 b":!0,"TOI-1806.01":!0,"TOI-1807 b":!0,"TOI-181 b":!0,"TOI-1811 b":!0,"TOI-1820 b":!0,"TOI-1823 b":!0,"TOI-1824 b":!0,"TOI-1836 b":!0,"TOI-1836 c":!0,"TOI-1842 b":!0,"TOI-1853 b":!0,"TOI-1855 b":!0,"TOI-1859 b":!0,"TOI-1860 b":!0,"TOI-1898 b":!0,"TOI-1899 b":!0,"TOI-1937 A b":!0,"TOI-198 b":!0,"TOI-199 b":!0,"TOI-199 c":!0,"TOI-1994 b":!0,"TOI-2000 b":!0,"TOI-2000 c":!0,"TOI-201 b":!0,"TOI-2010 b":!0,"TOI-2015 b":!0,"TOI-2018 b":!0,"TOI-2019 b":!0,"TOI-2025 b":!0,"TOI-2046 b":!0,"TOI-2048 b":!0,"TOI-206 b":!0,"TOI-2068 b":!0,"TOI-2076 b":!0,"TOI-2076 c":!0,"TOI-2076 d":!0,"TOI-2081 b":!0,"TOI-2084 b":!0,"TOI-2088 b":!0,"TOI-2095 b":!0,"TOI-2095 c":!0,"TOI-2096 b":!0,"TOI-2096 c":!0,"TOI-2107 b":!0,"TOI-2109 b":!0,"TOI-2120 b":!0,"TOI-2128 b":!0,"TOI-2134 b":!0,"TOI-2134 c":!0,"TOI-2136 b":!0,"TOI-2141 b":!0,"TOI-2145 b":!0,"TOI-2152 A b":!0,"TOI-2154 b":!0,"TOI-2158 b":!0,"TOI-216.01":!0,"TOI-216.02":!0,"TOI-2180 b":!0,"TOI-2184 b":!0,"TOI-2193 A b":!0,"TOI-2194 b":!0,"TOI-2196 b":!0,"TOI-220 b":!0,"TOI-2202 b":!0,"TOI-2202 c":!0,"TOI-2207 b":!0,"TOI-2236 b":!0,"TOI-2257 b":!0,"TOI-2260 b":!0,"TOI-2266 b":!0,"TOI-2285 b":!0,"TOI-2337 b":!0,"TOI-2338 b":!0,"TOI-2364 b":!0,"TOI-2368 b":!0,"TOI-237 b":!0,"TOI-2373 b":!0,"TOI-2374 b":!0,"TOI-2379 b":!0,"TOI-238 b":!0,"TOI-238 c":!0,"TOI-2384 b":!0,"TOI-2406 b":!0,"TOI-2411 b":!0,"TOI-2416 b":!0,"TOI-2421 b":!0,"TOI-2427 b":!0,"TOI-244 b":!0,"TOI-2443 b":!0,"TOI-2445 b":!0,"TOI-2447 b":!0,"TOI-2459 b":!0,"TOI-2497 b":!0,"TOI-2498 b":!0,"TOI-251 b":!0,"TOI-2524 b":!0,"TOI-2525 b":!0,"TOI-2525 c":!0,"TOI-2529 b":!0,"TOI-2545 b":!0,"TOI-2567 b":!0,"TOI-257 b":!0,"TOI-2570 b":!0,"TOI-2583 A b":!0,"TOI-2587 A b":!0,"TOI-2589 b":!0,"TOI-260 b":!0,"TOI-261.01":!0,"TOI-262 b":!0,"TOI-2641 b":!0,"TOI-2669 b":!0,"TOI-269 b":!0,"TOI-270 b":!0,"TOI-270 c":!0,"TOI-270 d":!0,"TOI-2714 b":!0,"TOI-277 b":!0,"TOI-2796 b":!0,"TOI-2803 A b":!0,"TOI-2818 b":!0,"TOI-2842 b":!0,"TOI-286 b":!0,"TOI-286 c":!0,"TOI-2981 b":!0,"TOI-3023 b":!0,"TOI-3071 b":!0,"TOI-3082 b":!0,"TOI-3235 b":!0,"TOI-3261 b":!0,"TOI-329 b":!0,"TOI-332 b":!0,"TOI-3321 b":!0,"TOI-3331 A b":!0,"TOI-3353.01":!0,"TOI-3362 b":!0,"TOI-3364 b":!0,"TOI-3568 b":!0,"TOI-3629 b":!0,"TOI-3688 A b":!0,"TOI-3693 b":!0,"TOI-3714 b":!0,"TOI-3757 b":!0,"TOI-3785 b":!0,"TOI-3807 b":!0,"TOI-3819 b":!0,"TOI-3884 b":!0,"TOI-3894 b":!0,"TOI-3912 b":!0,"TOI-3919 b":!0,"TOI-3976 A b":!0,"TOI-3984 A b":!0,"TOI-4010 b":!0,"TOI-4010 c":!0,"TOI-4010 d":!0,"TOI-4010 e":!0,"TOI-406.01":!0,"TOI-4087 b":!0,"TOI-411 b":!0,"TOI-411 c":!0,"TOI-4127 b":!0,"TOI-4137 b":!0,"TOI-4145 A b":!0,"TOI-4153 b":!0,"TOI-4184 b":!0,"TOI-4201 b":!0,"TOI-421 b":!0,"TOI-421 c":!0,"TOI-4308 b":!0,"TOI-431 b":!0,"TOI-431 c":!0,"TOI-431 d":!0,"TOI-4329 b":!0,"TOI-4336 A b":!0,"TOI-4342 b":!0,"TOI-4342 c":!0,"TOI-4377 b":!0,"TOI-4379 b":!0,"TOI-4406 b":!0,"TOI-4438 b":!0,"TOI-444 b":!0,"TOI-4443.01":!0,"TOI-4463 A b":!0,"TOI-4479 b":!0,"TOI-4495.01":!0,"TOI-451 b":!0,"TOI-451 c":!0,"TOI-451 d":!0,"TOI-4515 b":!0,"TOI-4527.01":!0,"TOI-4551 b":!0,"TOI-4559 b":!0,"TOI-4562 b":!0,"TOI-4562 c":!0,"TOI-4582 b":!0,"TOI-4600 b":!0,"TOI-4600 c":!0,"TOI-4602.01":!0,"TOI-4603 b":!0,"TOI-4633 c":!0,"TOI-4641 b":!0,"TOI-470 b":!0,"TOI-4791 b":!0,"TOI-480 b":!0,"TOI-481 b":!0,"TOI-4860 b":!0,"TOI-4914 b":!0,"TOI-500 b":!0,"TOI-500 c":!0,"TOI-500 d":!0,"TOI-500 e":!0,"TOI-5076 b":!0,"TOI-5082.01":!0,"TOI-5126 b":!0,"TOI-5126 c":!0,"TOI-5153 b":!0,"TOI-5174 b":!0,"TOI-519 b":!0,"TOI-5205 b":!0,"TOI-5218 b":!0,"TOI-5232 b":!0,"TOI-5238 b":!0,"TOI-5293 A b":!0,"TOI-530 b":!0,"TOI-5301 b":!0,"TOI-532 b":!0,"TOI-5344 b":!0,"TOI-5388.01":!0,"TOI-5398 b":!0,"TOI-5398 c":!0,"TOI-540 b":!0,"TOI-544 b":!0,"TOI-544 c":!0,"TOI-5542 b":!0,"TOI-558 b":!0,"TOI-559 b":!0,"TOI-561 b":!0,"TOI-561 c":!0,"TOI-561 d":!0,"TOI-561 e":!0,"TOI-5616 b":!0,"TOI-5634 A b":!0,"TOI-564 b":!0,"TOI-5678 b":!0,"TOI-5704 b":!0,"TOI-5720 b":!0,"TOI-5799 b":!0,"TOI-5803 b":!0,"TOI-6008 b":!0,"TOI-6029 b":!0,"TOI-6034 b":!0,"TOI-6086 b":!0,"TOI-615 b":!0,"TOI-620 b":!0,"TOI-622 b":!0,"TOI-6255 b":!0,"TOI-628 b":!0,"TOI-640 b":!0,"TOI-654.01":!0,"TOI-663 b":!0,"TOI-663 c":!0,"TOI-663 d":!0,"TOI-669 b":!0,"TOI-672 b":!0,"TOI-674 b":!0,"TOI-677 b":!0,"TOI-700 b":!0,"TOI-700 c":!0,"TOI-700 d":!0,"TOI-700 e":!0,"TOI-712 b":!0,"TOI-712 c":!0,"TOI-712 d":!0,"TOI-715 b":!0,"TOI-733 b":!0,"TOI-757 b":!0,"TOI-762 A b":!0,"TOI-763 b":!0,"TOI-763 c":!0,"TOI-771 b":!0,"TOI-776 b":!0,"TOI-776 c":!0,"TOI-778 b":!0,"TOI-782 b":!0,"TOI-784 b":!0,"TOI-813 b":!0,"TOI-815 b":!0,"TOI-815 c":!0,"TOI-824 b":!0,"TOI-833 b":!0,"TOI-836 b":!0,"TOI-836 c":!0,"TOI-837 b":!0,"TOI-849 b":!0,"TOI-858 B b":!0,"TOI-871 b":!0,"TOI-880.02":!0,"TOI-892 b":!0,"TOI-904 b":!0,"TOI-904 c":!0,"TOI-905 b":!0,"TOI-907.01":!0,"TOI-908 b":!0,"TOI-913 b":!0,"TOI-942 b":!0,"TOI-942 c":!0,"TOI-954 b":!0,"TOI-969 b":!0,"TOI-969 c":!0,"TRAPPIST-1 b":!0,"TRAPPIST-1 c":!0,"TRAPPIST-1 d":!0,"TRAPPIST-1 e":!0,"TRAPPIST-1 f":!0,"TRAPPIST-1 g":!0,"TRAPPIST-1 h":!0,"TYC 0434-04538-1 b":!0,"TYC 1422-614-1 b":!0,"TYC 1422-614-1 c":!0,"TYC 2187-512-1 b":!0,"TYC 3318-01333-1 b":!0,"TYC 3667-1280-1 b":!0,"TYC 4282-00605-1 b":!0,"TYC 8998-760-1 b":!0,"TYC 8998-760-1 c":!0,"Teegarden's Star b":!0,"Teegarden's Star c":!0,"Teegarden's Star d":!0,"TrES-1 b":!0,"TrES-2 b":!0,"TrES-3 b":!0,"TrES-4 b":!0,"TrES-5 b":!0,"UCAC3 113-933 b":!0,"UCAC4 328-061594 b":!0,"UKIRT-2017-BLG-001L b":!0,"USco CTIO 108 b":!0,"USco1556 b":!0,"USco1621 b":!0,"UZ For b":!0,"UZ For c":!0,"V0391 Peg b":!0,"V1298 Tau b":!0,"V1298 Tau c":!0,"V1298 Tau d":!0,"V1298 Tau e":!0,"V830 Tau b":!0,"VHS J125601.92-125723.9 b":!0,"WASP-1 b":!0,"WASP-10 b":!0,"WASP-100 b":!0,"WASP-101 b":!0,"WASP-103 b":!0,"WASP-104 b":!0,"WASP-105 b":!0,"WASP-106 b":!0,"WASP-107 b":!0,"WASP-107 c":!0,"WASP-11 b":!0,"WASP-110 b":!0,"WASP-113 b":!0,"WASP-114 b":!0,"WASP-117 b":!0,"WASP-118 b":!0,"WASP-119 b":!0,"WASP-12 b":!0,"WASP-120 b":!0,"WASP-121 b":!0,"WASP-123 b":!0,"WASP-124 b":!0,"WASP-126 b":!0,"WASP-126 c":!0,"WASP-127 b":!0,"WASP-129 b":!0,"WASP-13 b":!0,"WASP-130 b":!0,"WASP-131 b":!0,"WASP-132 b":!0,"WASP-132 c":!0,"WASP-133 b":!0,"WASP-135 b":!0,"WASP-136 b":!0,"WASP-138 b":!0,"WASP-139 b":!0,"WASP-14 b":!0,"WASP-140 b":!0,"WASP-141 b":!0,"WASP-142 b":!0,"WASP-144 b":!0,"WASP-145 A b":!0,"WASP-147 b":!0,"WASP-148 b":!0,"WASP-148 c":!0,"WASP-15 b":!0,"WASP-150 b":!0,"WASP-151 b":!0,"WASP-153 b":!0,"WASP-156 b":!0,"WASP-157 b":!0,"WASP-158 b":!0,"WASP-159 b":!0,"WASP-16 b":!0,"WASP-160 B b":!0,"WASP-161 b":!0,"WASP-162 b":!0,"WASP-163 b":!0,"WASP-164 b":!0,"WASP-165 b":!0,"WASP-166 b":!0,"WASP-167 b":!0,"WASP-168 b":!0,"WASP-169 b":!0,"WASP-17 b":!0,"WASP-170 b":!0,"WASP-171 b":!0,"WASP-172 b":!0,"WASP-173 A b":!0,"WASP-174 b":!0,"WASP-175 b":!0,"WASP-176 b":!0,"WASP-177 b":!0,"WASP-178 b":!0,"WASP-18 b":!0,"WASP-18 c":!0,"WASP-180 A b":!0,"WASP-181 b":!0,"WASP-182 b":!0,"WASP-183 b":!0,"WASP-184 b":!0,"WASP-185 b":!0,"WASP-186 b":!0,"WASP-187 b":!0,"WASP-189 b":!0,"WASP-19 b":!0,"WASP-190 b":!0,"WASP-192 b":!0,"WASP-193 b":!0,"WASP-2 b":!0,"WASP-20 b":!0,"WASP-21 b":!0,"WASP-22 b":!0,"WASP-23 b":!0,"WASP-24 b":!0,"WASP-25 b":!0,"WASP-26 b":!0,"WASP-28 b":!0,"WASP-29 b":!0,"WASP-3 b":!0,"WASP-31 b":!0,"WASP-32 b":!0,"WASP-33 b":!0,"WASP-34 b":!0,"WASP-35 b":!0,"WASP-36 b":!0,"WASP-37 b":!0,"WASP-38 b":!0,"WASP-39 b":!0,"WASP-4 b":!0,"WASP-41 b":!0,"WASP-41 c":!0,"WASP-42 b":!0,"WASP-43 b":!0,"WASP-44 b":!0,"WASP-45 b":!0,"WASP-46 b":!0,"WASP-47 b":!0,"WASP-47 c":!0,"WASP-47 d":!0,"WASP-47 e":!0,"WASP-48 b":!0,"WASP-49 b":!0,"WASP-5 b":!0,"WASP-50 b":!0,"WASP-52 b":!0,"WASP-53 b":!0,"WASP-53 c":!0,"WASP-54 b":!0,"WASP-55 b":!0,"WASP-56 b":!0,"WASP-57 b":!0,"WASP-58 b":!0,"WASP-59 b":!0,"WASP-6 b":!0,"WASP-60 b":!0,"WASP-61 b":!0,"WASP-62 b":!0,"WASP-63 b":!0,"WASP-64 b":!0,"WASP-65 b":!0,"WASP-66 b":!0,"WASP-67 b":!0,"WASP-68 b":!0,"WASP-69 b":!0,"WASP-7 b":!0,"WASP-70 A b":!0,"WASP-71 b":!0,"WASP-72 b":!0,"WASP-73 b":!0,"WASP-74 b":!0,"WASP-75 b":!0,"WASP-76 b":!0,"WASP-77 A b":!0,"WASP-78 b":!0,"WASP-79 b":!0,"WASP-8 b":!0,"WASP-8 c":!0,"WASP-80 b":!0,"WASP-81 b":!0,"WASP-82 b":!0,"WASP-83 b":!0,"WASP-84 b":!0,"WASP-84 c":!0,"WASP-85 A b":!0,"WASP-87 b":!0,"WASP-88 b":!0,"WASP-89 b":!0,"WASP-90 b":!0,"WASP-91 b":!0,"WASP-92 b":!0,"WASP-93 b":!0,"WASP-94 A b":!0,"WASP-94 B b":!0,"WASP-95 b":!0,"WASP-96 b":!0,"WASP-97 b":!0,"WASP-98 b":!0,"WASP-99 b":!0,"WD 0806-661 b":!0,"WD 1856+534 b":!0,"WISEP J121756.91+162640.2 A b":!0,"WTS-1 b":!0,"WTS-2 b":!0,"Wendelstein-1 b":!0,"Wendelstein-2 b":!0,"Wolf 1061 b":!0,"Wolf 1061 c":!0,"Wolf 1061 d":!0,"Wolf 1069 b":!0,"Wolf 327 b":!0,"Wolf 503 b":!0,"XO-1 b":!0,"XO-2 N b":!0,"XO-2 S b":!0,"XO-2 S c":!0,"XO-3 b":!0,"XO-4 b":!0,"XO-5 b":!0,"XO-6 b":!0,"XO-7 b":!0,"YSES 2 b":!0,"YZ Cet b":!0,"YZ Cet c":!0,"YZ Cet d":!0,"alf Ari b":!0,"alf Tau b":!0,"b Cen AB b":!0,"bet Cnc b":!0,"bet Pic b":!0,"bet Pic c":!0,"bet UMi b":!0,"eps CrB b":!0,"eps Eri b":!0,"eps Ind A b":!0,"eps Tau b":!0,"gam Cep b":!0,"gam Lib b":!0,"gam Lib c":!0,"gam Psc b":!0,"gam1 Leo b":!0,"iot Dra b":!0,"iot Dra c":!0,"kap And b":!0,"kap CrB b":!0,"mu Leo b":!0,"nu Oct A b":!0,"nu Oph b":!0,"nu Oph c":!0,"ome Ser b":!0,"omi CrB b":!0,"omi UMa b":!0,"pi Men c":!0,"pi Men d":!0,"psi1 Dra B b":!0,"rho CrB b":!0,"rho CrB c":!0,"rho CrB d":!0,"rho CrB e":!0,"tau Boo b":!0,"tau Cet e":!0,"tau Cet f":!0,"tau Cet g":!0,"tau Cet h":!0,"tau Gem b":!0,"ups And b":!0,"ups And c":!0,"ups And d":!0,"ups Leo b":!0,"xi Aql b":!0,Earth:!0},ta=["11 Com b","11 UMi b","14 And b","14 Her b","16 Cyg B b","17 Sco b","18 Del b","1RXS J160929.1-210524 b","24 Boo b","24 Sex b","24 Sex c","2M0437 b","2MASS J01033563-5515561 AB b","2MASS J01225093-2439505 b","2MASS J02192210-3925225 b","2MASS J0249-0557 c","2MASS J03590986+2009361 b","2MASS J04414489+2301513 b","2MASS J11550485-7919108 b","2MASS J12073346-3932539 b","2MASS J19383260+4603591 b","2MASS J21252752-8138278 b","2MASS J22362452+4751425 b","30 Ari B b","4 UMa b","42 Dra b","47 UMa b","47 UMa c","47 UMa d","51 Eri b","51 Peg b","55 Cnc b","55 Cnc c","55 Cnc d","55 Cnc e","55 Cnc f","6 Lyn b","61 Vir b","61 Vir c","61 Vir d","7 CMa b","7 CMa c","70 Vir b","75 Cet b","75 Cet c","8 UMi b","81 Cet b","91 Aqr b","AB Aur b","AB Pic b","AF Lep b","AU Mic b","AU Mic c","AU Mic d","BD+03 2562 b","BD+14 4559 b","BD+15 2375 b","BD+15 2940 b","BD+20 2457 b","BD+20 2457 c","BD+20 274 b","BD+20 594 b","BD+45 564 b","BD+48 738 b","BD+48 740 b","BD+49 828 b","BD+55 362 b","BD+60 1417 b","BD+63 1405 b","BD-06 1339 b","BD-06 1339 c","BD-08 2823 b","BD-08 2823 c","BD-10 3166 b","BD-11 4672 b","BD-11 4672 c","BD-13 2130 b","BD-14 3065 b","BD-17 63 b","BD-210397 b","BD-210397 c","CD Cet b","CFBDSIR J145829+101343 b","CHXR 73 b","CI Tau c","COCONUTS-2 b","CT Cha b","CoRoT-1 b","CoRoT-10 b","CoRoT-11 b","CoRoT-12 b","CoRoT-13 b","CoRoT-14 b","CoRoT-16 b","CoRoT-17 b","CoRoT-18 b","CoRoT-19 b","CoRoT-2 b","CoRoT-20 b","CoRoT-20 c","CoRoT-21 b","CoRoT-22 b","CoRoT-23 b","CoRoT-24 b","CoRoT-24 c","CoRoT-25 b","CoRoT-26 b","CoRoT-27 b","CoRoT-28 b","CoRoT-29 b","CoRoT-3 b","CoRoT-30 b","CoRoT-31 b","CoRoT-35 b","CoRoT-36 b","CoRoT-4 b","CoRoT-5 b","CoRoT-6 b","CoRoT-7 b","CoRoT-7 c","CoRoT-7 d","CoRoT-8 b","CoRoT-9 b","CoRoTID 223977153 b","DE CVn b","DENIS-P J082303.1-491201 b","DH Tau b","DMPP-1 b","DMPP-1 c","DMPP-1 d","DMPP-1 e","DMPP-2 b","DMPP-3 A b","DMPP-4 b","DP Leo b","DS Tuc A b","EPIC 201170410.02","EPIC 201238110 b","EPIC 201427007 b","EPIC 201497682 b","EPIC 201595106 b","EPIC 201615463 c","EPIC 201754305 d","EPIC 201757695.02","EPIC 201833600 c","EPIC 201841433 b","EPIC 205950854 c","EPIC 206024342 b","EPIC 206024342 c","EPIC 206024342 d","EPIC 206032309 b","EPIC 206042996 b","EPIC 206042996 c","EPIC 206215704 b","EPIC 206317286 b","EPIC 206317286 c","EPIC 211822797 b","EPIC 211945201 b","EPIC 212297394 b","EPIC 212297394 c","EPIC 212424622 b","EPIC 212499991 b","EPIC 212587672 b","EPIC 212587672 c","EPIC 212624936 b","EPIC 212624936 c","EPIC 212737443 b","EPIC 212737443 c","EPIC 220492298 b","EPIC 220554210 c","EPIC 220674823 b","EPIC 220674823 c","EPIC 228836835 b","EPIC 229004835 b","EPIC 246851721 b","EPIC 248847494 b","EPIC 249893012 b","EPIC 249893012 c","EPIC 249893012 d","FU Tau b","G 196-3 b","G 264-012 b","G 264-012 c","G 9-40 b","GJ 1002 b","GJ 1002 c","GJ 1061 b","GJ 1061 c","GJ 1061 d","GJ 1132 b","GJ 1132 c","GJ 1148 b","GJ 1148 c","GJ 1151 c","GJ 1214 b","GJ 1252 b","GJ 1265 b","GJ 143 b","GJ 15 A b","GJ 15 A c","GJ 160.2 b","GJ 163 b","GJ 163 c","GJ 163 d","GJ 179 b","GJ 180 b","GJ 180 c","GJ 180 d","GJ 2030 b","GJ 2030 c","GJ 2056 b","GJ 229 A c","GJ 229 b","GJ 238 b","GJ 251 b","GJ 27.1 b","GJ 273 b","GJ 273 c","GJ 3021 b","GJ 3082 b","GJ 3090 b","GJ 3138 b","GJ 3138 c","GJ 3138 d","GJ 317 b","GJ 317 c","GJ 3222 b","GJ 328 b","GJ 328 c","GJ 3293 b","GJ 3293 c","GJ 3293 d","GJ 3293 e","GJ 3323 b","GJ 3323 c","GJ 3341 b","GJ 338 B b","GJ 3470 b","GJ 3473 b","GJ 3473 c","GJ 3512 b","GJ 3512 c","GJ 357 b","GJ 357 c","GJ 357 d","GJ 3634 b","GJ 367 b","GJ 367 c","GJ 367 d","GJ 3779 b","GJ 3929 b","GJ 3929 c","GJ 393 b","GJ 3942 b","GJ 3988 b","GJ 3998 b","GJ 3998 c","GJ 411 b","GJ 414 A b","GJ 414 A c","GJ 422 b","GJ 4276 b","GJ 433 b","GJ 433 c","GJ 433 d","GJ 436 b","GJ 463 b","GJ 480 b","GJ 486 b","GJ 504 b","GJ 514 b","GJ 536 b","GJ 581 b","GJ 581 c","GJ 581 e","GJ 625 b","GJ 649 b","GJ 667 C b","GJ 667 C c","GJ 667 C e","GJ 667 C f","GJ 667 C g","GJ 674 b","GJ 676 A b","GJ 676 A c","GJ 676 A d","GJ 676 A e","GJ 680 b","GJ 682 b","GJ 682 c","GJ 685 b","GJ 687 b","GJ 687 c","GJ 720 A b","GJ 724 b","GJ 740 b","GJ 806 b","GJ 806 c","GJ 832 b","GJ 849 b","GJ 849 c","GJ 86 b","GJ 876 b","GJ 876 c","GJ 876 d","GJ 876 e","GJ 887 b","GJ 887 c","GJ 896 A b","GJ 900 b","GJ 9066 c","GJ 9404 b","GJ 96 b","GJ 9689 b","GJ 9714 b","GJ 9827 b","GJ 9827 c","GJ 9827 d","GPX-1 b","GQ Lup b","GSC 06214-00210 b","GU Psc b","Gaia-1 b","Gaia-2 b","Gaia22dkvL b","Gl 378 b","Gl 49 b","Gl 686 b","Gliese 12 b","HAT-P-1 b","HAT-P-11 b","HAT-P-11 c","HAT-P-12 b","HAT-P-13 b","HAT-P-13 c","HAT-P-14 b","HAT-P-15 b","HAT-P-16 b","HAT-P-17 b","HAT-P-17 c","HAT-P-18 b","HAT-P-19 b","HAT-P-2 b","HAT-P-2 c","HAT-P-20 b","HAT-P-21 b","HAT-P-22 b","HAT-P-23 b","HAT-P-24 b","HAT-P-25 b","HAT-P-26 b","HAT-P-27 b","HAT-P-28 b","HAT-P-29 b","HAT-P-3 b","HAT-P-30 b","HAT-P-31 b","HAT-P-32 b","HAT-P-33 b","HAT-P-34 b","HAT-P-35 b","HAT-P-36 b","HAT-P-37 b","HAT-P-38 b","HAT-P-39 b","HAT-P-4 b","HAT-P-40 b","HAT-P-41 b","HAT-P-42 b","HAT-P-43 b","HAT-P-44 b","HAT-P-44 c","HAT-P-45 b","HAT-P-46 b","HAT-P-49 b","HAT-P-5 b","HAT-P-50 b","HAT-P-51 b","HAT-P-52 b","HAT-P-53 b","HAT-P-54 b","HAT-P-55 b","HAT-P-56 b","HAT-P-57 b","HAT-P-58 b","HAT-P-59 b","HAT-P-6 b","HAT-P-60 b","HAT-P-61 b","HAT-P-62 b","HAT-P-63 b","HAT-P-64 b","HAT-P-65 b","HAT-P-66 b","HAT-P-67 b","HAT-P-68 b","HAT-P-69 b","HAT-P-7 b","HAT-P-70 b","HAT-P-8 b","HAT-P-9 b","HATS-1 b","HATS-10 b","HATS-11 b","HATS-12 b","HATS-13 b","HATS-14 b","HATS-15 b","HATS-16 b","HATS-17 b","HATS-18 b","HATS-2 b","HATS-22 b","HATS-23 b","HATS-24 b","HATS-25 b","HATS-26 b","HATS-27 b","HATS-28 b","HATS-29 b","HATS-3 b","HATS-30 b","HATS-31 b","HATS-32 b","HATS-33 b","HATS-34 b","HATS-35 b","HATS-36 b","HATS-37 A b","HATS-38 b","HATS-39 b","HATS-4 b","HATS-40 b","HATS-41 b","HATS-42 b","HATS-43 b","HATS-44 b","HATS-45 b","HATS-46 b","HATS-47 b","HATS-48 A b","HATS-49 b","HATS-5 b","HATS-50 b","HATS-51 b","HATS-52 b","HATS-53 b","HATS-54 b","HATS-55 b","HATS-56 b","HATS-57 b","HATS-58 A b","HATS-59 b","HATS-59 c","HATS-6 b","HATS-60 b","HATS-61 b","HATS-62 b","HATS-63 b","HATS-64 b","HATS-65 b","HATS-66 b","HATS-67 b","HATS-68 b","HATS-69 b","HATS-7 b","HATS-70 b","HATS-71 b","HATS-72 b","HATS-74 A b","HATS-75 b","HATS-76 b","HATS-77 b","HATS-8 b","HATS-9 b","HD 100546 b","HD 100655 b","HD 100777 b","HD 10180 c","HD 10180 d","HD 10180 e","HD 10180 f","HD 10180 g","HD 10180 h","HD 101930 b","HD 102117 b","HD 102195 b","HD 102272 b","HD 102329 b","HD 102329 c","HD 102365 b","HD 102843 b","HD 102956 b","HD 103197 b","HD 103720 b","HD 103774 b","HD 103891 b","HD 103949 b","HD 104067 b","HD 104067 c","HD 10442 b","HD 104985 b","HD 105618 b","HD 105618 c","HD 105779 b","HD 106252 b","HD 106270 b","HD 106315 b","HD 106315 c","HD 10647 b","HD 106515 A b","HD 106906 b","HD 10697 b","HD 107148 b","HD 107148 c","HD 108147 b","HD 108202 b","HD 108236 b","HD 108236 c","HD 108236 d","HD 108236 e","HD 108236 f","HD 108341 b","HD 108863 b","HD 108874 b","HD 108874 c","HD 109246 b","HD 109271 b","HD 109271 c","HD 109286 b","HD 109749 b","HD 10975 b","HD 109833 b","HD 109833 c","HD 109988 b","HD 110014 b","HD 110067 b","HD 110067 c","HD 110067 d","HD 110067 e","HD 110067 f","HD 110067 g","HD 110082 b","HD 110113 b","HD 110113 c","HD 110537 b","HD 11112 b","HD 111232 b","HD 111232 c","HD 111591 b","HD 111998 b","HD 112300 b","HD 112570 b","HD 112640 b","HD 113337 b","HD 113337 c","HD 11343 c","HD 113538 b","HD 113538 c","HD 113996 b","HD 114082 b","HD 114386 b","HD 114729 b","HD 114783 b","HD 114783 c","HD 11505 b","HD 11506 b","HD 11506 c","HD 11506 d","HD 115404 A b","HD 115404 A c","HD 115954 b","HD 116029 b","HD 116029 c","HD 117207 b","HD 11755 b","HD 117618 b","HD 118203 b","HD 118203 c","HD 11964 b","HD 11964 c","HD 11977 b","HD 120084 b","HD 121504 b","HD 12235 b","HD 12235 c","HD 122562 c","HD 124330 b","HD 12484 b","HD 125271 b","HD 125390 b","HD 125595 b","HD 125612 b","HD 125612 c","HD 125612 d","HD 12648 b","HD 126525 b","HD 12661 b","HD 12661 c","HD 126614 b","HD 127506 b","HD 128311 b","HD 128311 c","HD 128356 b","HD 129445 b","HD 130322 b","HD 131496 b","HD 13167 b","HD 13189 b","HD 132406 b","HD 132563 b","HD 133131 A b","HD 133131 A c","HD 133131 B b","HD 134060 b","HD 134060 c","HD 134606 b","HD 134606 c","HD 134606 d","HD 134606 e","HD 134606 f","HD 134987 b","HD 134987 c","HD 135625 b","HD 135694 b","HD 135872 b","HD 136118 b","HD 136352 b","HD 136352 c","HD 136352 d","HD 136418 b","HD 136925 b","HD 13724 c","HD 137388 b","HD 137496 b","HD 137496 c","HD 13808 b","HD 13808 c","HD 13908 b","HD 13908 c","HD 13931 b","HD 139357 b","HD 1397 b","HD 14067 b","HD 140901 b","HD 140901 c","HD 141004 b","HD 141399 b","HD 141399 c","HD 141399 d","HD 141399 e","HD 141937 b","HD 142 A d","HD 142 b","HD 142 c","HD 142022 A b","HD 142245 b","HD 142415 b","HD 143105 b","HD 143361 b","HD 144899 b","HD 145377 b","HD 145457 b","HD 145675 c","HD 145934 b","HD 1461 b","HD 1461 c","HD 147018 b","HD 147018 c","HD 147379 b","HD 147513 b","HD 14787 b","HD 147873 b","HD 147873 c","HD 148156 b","HD 148164 b","HD 148164 c","HD 148427 b","HD 149026 b","HD 149143 b","HD 149806 b","HD 150010 b","HD 1502 b","HD 150706 b","HD 151450 b","HD 151450 c","HD 152079 b","HD 152581 b","HD 152843 b","HD 152843 c","HD 15337 b","HD 15337 c","HD 153557 b","HD 153557 c","HD 153557 d","HD 153950 b","HD 154088 b","HD 154345 b","HD 154391 b","HD 154672 b","HD 154857 b","HD 154857 c","HD 155193 b","HD 155358 b","HD 155358 c","HD 155918 b","HD 155918 c","HD 156098 b","HD 156098 c","HD 156279 b","HD 156279 c","HD 156411 b","HD 156668 b","HD 156668 c","HD 156846 b","HD 158038 b","HD 158259 b","HD 158259 c","HD 158259 d","HD 158259 e","HD 158259 f","HD 158996 b","HD 15906 b","HD 15906 c","HD 159243 b","HD 159243 c","HD 159868 b","HD 159868 c","HD 1605 b","HD 1605 c","HD 160691 b","HD 160691 c","HD 160691 d","HD 160691 e","HD 161178 b","HD 16141 b","HD 16175 b","HD 162020 b","HD 163607 b","HD 163607 c","HD 16417 b","HD 164509 b","HD 164595 b","HD 164604 b","HD 164922 b","HD 164922 c","HD 164922 d","HD 164922 e","HD 165131 b","HD 165155 b","HD 1666 b","HD 166724 b","HD 167042 b","HD 167677 b","HD 167768 b","HD 168009 b","HD 168443 b","HD 168443 c","HD 168746 b","HD 168863 b","HD 1690 b","HD 16905 b","HD 169142 b","HD 169830 b","HD 169830 c","HD 170469 b","HD 17092 b","HD 171028 b","HD 171238 b","HD 17156 b","HD 173416 b","HD 174205 b","HD 175167 b","HD 175541 b","HD 175607 b","HD 17674 b","HD 176986 b","HD 176986 c","HD 177565 b","HD 177830 b","HD 177830 c","HD 178911 B b","HD 179079 b","HD 179949 b","HD 180053 b","HD 18015 b","HD 180314 b","HD 180617 b","HD 180902 b","HD 181234 b","HD 181342 b","HD 18143 b","HD 18143 c","HD 181433 b","HD 181433 c","HD 181433 d","HD 181720 b","HD 183263 b","HD 183263 c","HD 183579 b","HD 184010 b","HD 184010 c","HD 184010 d","HD 18438 b","HD 185269 b","HD 185283 b","HD 18599 b","HD 187085 b","HD 187123 b","HD 187123 c","HD 18742 b","HD 188015 b","HD 188641 b","HD 189567 b","HD 189567 c","HD 189733 b","HD 190007 b","HD 190228 b","HD 190360 b","HD 190360 c","HD 190647 b","HD 190984 b","HD 191806 b","HD 191939 b","HD 191939 c","HD 191939 d","HD 191939 e","HD 191939 f","HD 191939 g","HD 192263 b","HD 192310 b","HD 192310 c","HD 192699 b","HD 194490 b","HD 195019 b","HD 196050 b","HD 196067 b","HD 19615 b","HD 196885 A b","HD 197037 b","HD 199509 b","HD 19994 b","HD 20003 b","HD 20003 c","HD 200964 b","HD 200964 c","HD 202206 c","HD 202696 b","HD 202696 c","HD 202772 A b","HD 203030 b","HD 20329 b","HD 203387 b","HD 203387 c","HD 2039 b","HD 204313 b","HD 204313 c","HD 204313 e","HD 204941 b","HD 205158 b","HD 205739 b","HD 206255 b","HD 206610 b","HD 206893 b","HD 206893 c","HD 207496 b","HD 20781 b","HD 20781 c","HD 20781 d","HD 20781 e","HD 20782 b","HD 207832 b","HD 207832 c","HD 207897 b","HD 20794 b","HD 20794 c","HD 20794 d","HD 20794 e","HD 208487 b","HD 208527 b","HD 20868 b","HD 208897 b","HD 209458 b","HD 210193 b","HD 210277 b","HD 210702 b","HD 211403 b","HD 211810 b","HD 211970 b","HD 212301 b","HD 212771 b","HD 213240 b","HD 213472 b","HD 213519 b","HD 213885 b","HD 213885 c","HD 21411 b","HD 214823 b","HD 215152 b","HD 215152 c","HD 215152 d","HD 215152 e","HD 21520 b","HD 215497 b","HD 215497 c","HD 216435 b","HD 216437 b","HD 216520 b","HD 216520 c","HD 216536 b","HD 216770 b","HD 21693 b","HD 21693 c","HD 217107 b","HD 217107 c","HD 21749 c","HD 217786 b","HD 217786 c","HD 217958 b","HD 218566 b","HD 219077 b","HD 219134 b","HD 219134 c","HD 219134 d","HD 219134 f","HD 219134 g","HD 219134 h","HD 219139 b","HD 219415 b","HD 219666 b","HD 219828 b","HD 219828 c","HD 220074 b","HD 220197 b","HD 220689 b","HD 220773 b","HD 220842 b","HD 221287 b","HD 221416 b","HD 221420 b","HD 221585 b","HD 222076 b","HD 222155 b","HD 222237 b","HD 222582 b","HD 224538 b","HD 224693 b","HD 22496 b","HD 22532 b","HD 22781 b","HD 22946 d","HD 23079 b","HD 23127 b","HD 231701 b","HD 233604 b","HD 233832 b","HD 23472 b","HD 23472 c","HD 23472 d","HD 23472 e","HD 23472 f","HD 235088 b","HD 23596 b","HD 238090 b","HD 238914 b","HD 240210 b","HD 240237 b","HD 24040 b","HD 24040 c","HD 24064 b","HD 24085 b","HD 25015 b","HD 25171 b","HD 25463 b","HD 25463 c","HD 25723 b","HD 25912 b","HD 25912 c","HD 260655 b","HD 260655 c","HD 26161 b","HD 2638 b","HD 2685 b","HD 27442 b","HD 27631 b","HD 27894 b","HD 27894 c","HD 27894 d","HD 27969 b","HD 28109 b","HD 28109 c","HD 28109 d","HD 28185 b","HD 28185 c","HD 28192 b","HD 28254 b","HD 284149 AB b","HD 285507 b","HD 285968 b","HD 28678 b","HD 29021 b","HD 290327 b","HD 29399 b","HD 2952 b","HD 29985 b","HD 30177 b","HD 30177 c","HD 30562 b","HD 30669 b","HD 30856 b","HD 31253 b","HD 31527 b","HD 31527 c","HD 31527 d","HD 3167 b","HD 3167 c","HD 3167 d","HD 3167 e","HD 32518 b","HD 32963 b","HD 330075 b","HD 331093 b","HD 33142 b","HD 33142 c","HD 33142 d","HD 332231 b","HD 33283 b","HD 33564 b","HD 33844 b","HD 33844 c","HD 34445 b","HD 34445 c","HD 34445 d","HD 34445 e","HD 34445 f","HD 34445 g","HD 35759 b","HD 360 b","HD 36384 b","HD 3651 b","HD 37124 b","HD 37124 c","HD 37124 d","HD 37605 b","HD 37605 c","HD 3765 b","HD 38283 b","HD 38529 b","HD 38529 c","HD 38801 b","HD 39091 b","HD 39194 b","HD 39194 c","HD 39194 d","HD 39855 b","HD 40307 b","HD 40307 c","HD 40307 d","HD 40307 f","HD 40307 g","HD 40956 b","HD 40979 b","HD 41004 A b","HD 41004 B b","HD 4113 b","HD 42012 b","HD 4203 b","HD 4203 c","HD 4208 b","HD 42618 b","HD 42813 b","HD 4308 b","HD 4313 b","HD 43197 b","HD 43197 c","HD 43691 b","HD 44219 b","HD 45184 b","HD 45184 c","HD 45350 b","HD 45364 b","HD 45364 c","HD 45652 b","HD 457 b","HD 46375 b","HD 47186 b","HD 47186 c","HD 4732 b","HD 4732 c","HD 47366 b","HD 47366 c","HD 47536 b","HD 4760 b","HD 48265 b","HD 48948 b","HD 48948 c","HD 48948 d","HD 4917 b","HD 49674 b","HD 50499 b","HD 50499 c","HD 50554 b","HD 51608 b","HD 51608 c","HD 52265 b","HD 5278 b","HD 5278 c","HD 5319 b","HD 5319 c","HD 55696 b","HD 5583 b","HD 5608 b","HD 564 b","HD 56414 b","HD 56957 b","HD 5891 b","HD 59686 A b","HD 60292 b","HD 60532 b","HD 60532 c","HD 6061 b","HD 62364 b","HD 62364 c","HD 62509 b","HD 62549 b","HD 63433 b","HD 63433 c","HD 63433 d","HD 63454 b","HD 63765 b","HD 63935 b","HD 63935 c","HD 64114 b","HD 64121 b","HD 6434 b","HD 65216 b","HD 65216 c","HD 66141 b","HD 66428 b","HD 66428 c","HD 67087 b","HD 67087 c","HD 6718 b","HD 68402 b","HD 6860 b","HD 68988 b","HD 68988 c","HD 69123 b","HD 69830 b","HD 69830 c","HD 69830 d","HD 70573 b","HD 70642 b","HD 7199 b","HD 72490 b","HD 72659 b","HD 72659 c","HD 72892 b","HD 73256 c","HD 73267 b","HD 73267 c","HD 73344 b","HD 73526 b","HD 73526 c","HD 73534 b","HD 73583 b","HD 73583 c","HD 74156 b","HD 74156 c","HD 7449 b","HD 74698 b","HD 74698 c","HD 75289 b","HD 75302 b","HD 75784 b","HD 75784 c","HD 75898 b","HD 76700 b","HD 76920 b","HD 77338 b","HD 77946 b","HD 79181 b","HD 7924 b","HD 7924 c","HD 7924 d","HD 79498 b","HD 80606 b","HD 80653 b","HD 80869 b","HD 80883 b","HD 80913 b","HD 81040 b","HD 81688 b","HD 81817 b","HD 81817 c","HD 82886 b","HD 82943 b","HD 82943 c","HD 8326 b","HD 83443 b","HD 83443 c","HD 8535 b","HD 85390 b","HD 8574 b","HD 86065 b","HD 86081 b","HD 86226 b","HD 86226 c","HD 86264 b","HD 8673 b","HD 86950 b","HD 87646 b","HD 87883 b","HD 88072 b","HD 88133 b","HD 88986 b","HD 89307 b","HD 89345 b","HD 89744 b","HD 89839 b","HD 90156 b","HD 9174 b","HD 92788 b","HD 92788 c","HD 93083 b","HD 93351 b","HD 93351 c","HD 93385 b","HD 93385 c","HD 93385 d","HD 93963 A b","HD 93963 A c","HD 9446 b","HD 9446 c","HD 94771 b","HD 94834 b","HD 95086 b","HD 95089 b","HD 95089 c","HD 95127 b","HD 95338 b","HD 95544 b","HD 95735 c","HD 95872 b","HD 96063 b","HD 96127 b","HD 96167 b","HD 96700 b","HD 96700 c","HD 96700 d","HD 96992 b","HD 97037 b","HD 97048 b","HD 97658 b","HD 98219 b","HD 98649 b","HD 98736 b","HD 99109 b","HD 99283 b","HD 99492 b","HD 99492 c","HD 99706 b","HD 99706 c","HIP 105854 b","HIP 107772 b","HIP 107773 b","HIP 109384 b","HIP 109600 b","HIP 113103 b","HIP 113103 c","HIP 114933 b","HIP 116454 b","HIP 12961 b","HIP 14810 b","HIP 14810 c","HIP 14810 d","HIP 19976 b","HIP 21152 b","HIP 29442 c","HIP 29442 d","HIP 34222 b","HIP 35173 b","HIP 35965 b","HIP 38594 b","HIP 38594 c","HIP 39017 b","HIP 41378 b","HIP 41378 c","HIP 41378 d","HIP 41378 e","HIP 41378 f","HIP 4845 b","HIP 48714 b","HIP 5158 b","HIP 5158 c","HIP 54373 b","HIP 54373 c","HIP 54597 b","HIP 55507 b","HIP 56640 b","HIP 57274 b","HIP 57274 c","HIP 57274 d","HIP 5763 b","HIP 63242 b","HIP 65 A b","HIP 65407 b","HIP 65407 c","HIP 65426 b","HIP 65891 b","HIP 66074 b","HIP 67522 b","HIP 67522 c","HIP 67537 b","HIP 67851 b","HIP 67851 c","HIP 70849 b","HIP 71135 b","HIP 74890 b","HIP 75092 b","HIP 77900 b","HIP 78530 b","HIP 79098 AB b","HIP 79431 b","HIP 81208 C b","HIP 8152 b","HIP 8152 c","HIP 8541 b","HIP 86221 b","HIP 90988 b","HIP 91258 b","HIP 94235 b","HIP 948 b","HIP 9618 b","HIP 9618 c","HIP 97166 b","HIP 97166 c","HIP 97233 b","HIP 99770 b","HN Lib b","HN Peg b","HR 2562 b","HR 5183 b","HR 810 b","HR 858 b","HR 858 c","HR 858 d","HR 8799 b","HR 8799 c","HR 8799 d","HR 8799 e","HS Psc b","HU Aqr AB b","HU Aqr AB c","IC 4651 9122 b","ITG 15 b","K2-10 b","K2-100 b","K2-101 b","K2-102 b","K2-104 b","K2-105 b","K2-107 b","K2-108 b","K2-11 b","K2-110 b","K2-111 b","K2-111 c","K2-113 b","K2-114 b","K2-115 b","K2-116 b","K2-117 b","K2-117 c","K2-118 b","K2-119 b","K2-12 b","K2-120 b","K2-121 b","K2-122 b","K2-123 b","K2-124 b","K2-125 b","K2-126 b","K2-127 b","K2-128 b","K2-129 b","K2-13 b","K2-130 b","K2-131 b","K2-132 b","K2-133 b","K2-133 c","K2-133 d","K2-133 e","K2-136 b","K2-136 c","K2-136 d","K2-137 b","K2-138 b","K2-138 c","K2-138 d","K2-138 e","K2-138 f","K2-138 g","K2-139 b","K2-14 b","K2-140 b","K2-141 b","K2-141 c","K2-146 b","K2-146 c","K2-147 b","K2-148 b","K2-148 c","K2-148 d","K2-149 b","K2-15 b","K2-150 b","K2-151 b","K2-152 b","K2-153 b","K2-154 b","K2-154 c","K2-155 b","K2-155 c","K2-155 d","K2-156 b","K2-157 b","K2-158 b","K2-158 c","K2-159 b","K2-16 b","K2-16 c","K2-160 b","K2-161 b","K2-162 b","K2-163 b","K2-164 b","K2-165 b","K2-165 c","K2-165 d","K2-166 b","K2-167 b","K2-168 b","K2-169 b","K2-17 b","K2-170 b","K2-170 c","K2-171 b","K2-172 b","K2-172 c","K2-173 b","K2-174 b","K2-175 b","K2-176 b","K2-177 b","K2-178 b","K2-179 b","K2-18 b","K2-18 c","K2-180 b","K2-181 b","K2-182 b","K2-183 b","K2-183 c","K2-183 d","K2-184 b","K2-185 b","K2-185 c","K2-186 b","K2-187 b","K2-187 c","K2-187 d","K2-187 e","K2-188 b","K2-188 c","K2-189 b","K2-189 c","K2-19 b","K2-19 c","K2-19 d","K2-190 b","K2-190 c","K2-191 b","K2-192 b","K2-193 b","K2-194 b","K2-195 b","K2-195 c","K2-196 b","K2-197 b","K2-198 b","K2-198 c","K2-198 d","K2-199 b","K2-199 c","K2-200 b","K2-201 b","K2-201 c","K2-2016-BLG-0005L b","K2-202 b","K2-203 b","K2-204 b","K2-205 b","K2-206 b","K2-207 b","K2-208 b","K2-209 b","K2-21 b","K2-21 c","K2-210 b","K2-211 b","K2-212 b","K2-213 b","K2-214 b","K2-215 b","K2-216 b","K2-217 b","K2-218 b","K2-219 b","K2-219 c","K2-219 d","K2-22 b","K2-220 b","K2-221 b","K2-222 b","K2-223 b","K2-223 c","K2-224 b","K2-224 c","K2-225 b","K2-226 b","K2-227 b","K2-228 b","K2-229 b","K2-229 c","K2-230 b","K2-231 b","K2-232 b","K2-233 b","K2-233 c","K2-233 d","K2-237 b","K2-238 b","K2-239 b","K2-239 c","K2-239 d","K2-24 b","K2-24 c","K2-240 b","K2-240 c","K2-241 b","K2-242 b","K2-243 b","K2-243 c","K2-244 b","K2-245 b","K2-246 b","K2-247 b","K2-247 c","K2-248 b","K2-249 b","K2-25 b","K2-250 b","K2-251 b","K2-252 b","K2-253 b","K2-254 b","K2-254 c","K2-255 b","K2-257 b","K2-258 b","K2-259 b","K2-26 b","K2-260 b","K2-261 b","K2-263 b","K2-264 b","K2-264 c","K2-265 b","K2-266 b","K2-266 c","K2-266 d","K2-266 e","K2-268 b","K2-268 c","K2-268 d","K2-268 e","K2-268 f","K2-269 b","K2-27 b","K2-270 b","K2-270 c","K2-271 b","K2-272 b","K2-273 b","K2-274 b","K2-275 b","K2-275 c","K2-276 b","K2-277 b","K2-278 b","K2-279 b","K2-28 b","K2-280 b","K2-281 b","K2-282 b","K2-283 b","K2-284 b","K2-285 b","K2-285 c","K2-285 d","K2-285 e","K2-286 b","K2-287 b","K2-288 B b","K2-289 b","K2-29 b","K2-290 b","K2-290 c","K2-291 b","K2-292 b","K2-293 b","K2-294 b","K2-295 b","K2-3 b","K2-3 c","K2-3 d","K2-30 b","K2-308 b","K2-31 b","K2-312 c","K2-315 b","K2-316 b","K2-316 c","K2-317 b","K2-318 b","K2-319 b","K2-32 b","K2-32 c","K2-32 d","K2-32 e","K2-320 b","K2-321 b","K2-322 b","K2-323 b","K2-324 b","K2-325 b","K2-326 b","K2-329 b","K2-33 b","K2-330 b","K2-331 b","K2-331 c","K2-332 b","K2-333 b","K2-334 b","K2-335 b","K2-336 b","K2-337 b","K2-338 b","K2-339 b","K2-34 b","K2-340 b","K2-341 b","K2-342 b","K2-343 b","K2-343 c","K2-344 b","K2-345 b","K2-346 b","K2-347 b","K2-348 b","K2-348 c","K2-349 b","K2-35 b","K2-35 c","K2-350 b","K2-350 c","K2-351 b","K2-352 b","K2-352 c","K2-352 d","K2-353 b","K2-354 b","K2-355 b","K2-356 b","K2-357 b","K2-358 b","K2-36 b","K2-36 c","K2-365 b","K2-366 b","K2-367 b","K2-368 b","K2-368 c","K2-368 d","K2-369 b","K2-37 b","K2-37 c","K2-37 d","K2-370 b","K2-371 b","K2-372 b","K2-373 b","K2-374 b","K2-374 c","K2-375 b","K2-376 b","K2-377 b","K2-378 b","K2-379 b","K2-38 b","K2-38 c","K2-380 b","K2-381 b","K2-381 c","K2-381 d","K2-382 b","K2-383 b","K2-384 b","K2-384 c","K2-384 d","K2-384 e","K2-384 f","K2-385 b","K2-386 b","K2-387 b","K2-388 b","K2-389 b","K2-389 c","K2-39 b","K2-390 b","K2-391 b","K2-392 b","K2-393 b","K2-394 b","K2-395 b","K2-395 c","K2-396 b","K2-396 c","K2-397 b","K2-398 b","K2-398 c","K2-4 b","K2-400 b","K2-401 b","K2-402 b","K2-403 b","K2-404 b","K2-405 b","K2-406 b","K2-407 b","K2-407 c","K2-408 b","K2-409 b","K2-411 b","K2-412 b","K2-413 b","K2-413 c","K2-414 b","K2-414 c","K2-415 b","K2-416 b","K2-417 b","K2-419 A b","K2-42 b","K2-43 b","K2-43 c","K2-44 b","K2-45 b","K2-46 b","K2-47 b","K2-48 b","K2-49 b","K2-5 b","K2-5 c","K2-50 b","K2-52 b","K2-53 b","K2-54 b","K2-55 b","K2-57 b","K2-58 b","K2-58 c","K2-58 d","K2-59 b","K2-59 c","K2-6 b","K2-60 b","K2-61 b","K2-62 b","K2-62 c","K2-63 b","K2-63 c","K2-64 b","K2-65 b","K2-66 b","K2-68 b","K2-69 b","K2-7 b","K2-70 b","K2-71 b","K2-72 b","K2-72 c","K2-72 d","K2-72 e","K2-73 b","K2-74 b","K2-75 b","K2-75 c","K2-77 b","K2-79 b","K2-8 b","K2-8 c","K2-80 b","K2-80 c","K2-80 d","K2-81 b","K2-83 b","K2-83 c","K2-84 b","K2-84 c","K2-85 b","K2-86 b","K2-87 b","K2-88 b","K2-89 b","K2-9 b","K2-90 b","K2-90 c","K2-91 b","K2-95 b","K2-97 b","K2-98 b","K2-99 b","KELT-1 b","KELT-10 b","KELT-11 b","KELT-12 b","KELT-14 b","KELT-15 b","KELT-16 b","KELT-17 b","KELT-18 b","KELT-19 A b","KELT-2 A b","KELT-20 b","KELT-21 b","KELT-23 A b","KELT-24 b","KELT-3 b","KELT-4 A b","KELT-6 b","KELT-6 c","KELT-7 b","KELT-8 b","KELT-9 b","KIC 10001893 b","KIC 10001893 c","KIC 10001893 d","KIC 10068024 b","KIC 10525077 b","KIC 3526061 b","KIC 3558849 b","KIC 5437945 b","KIC 5479689 b","KIC 7917485 b","KIC 8121913 b","KIC 8540376 b","KIC 8540376 c","KIC 9663113 b","KMT-2016-BLG-0212L b","KMT-2016-BLG-1105L b","KMT-2016-BLG-1107L b","KMT-2016-BLG-1397L b","KMT-2016-BLG-1820L b","KMT-2016-BLG-1836L b","KMT-2016-BLG-2142L b","KMT-2016-BLG-2364L b","KMT-2016-BLG-2397L b","KMT-2016-BLG-2605L b","KMT-2017-BLG-0165L b","KMT-2017-BLG-0428L b","KMT-2017-BLG-0673L b","KMT-2017-BLG-1003L b","KMT-2017-BLG-1038L b","KMT-2017-BLG-1146L b","KMT-2017-BLG-1194L b","KMT-2017-BLG-2509L b","KMT-2018-BLG-0029L b","KMT-2018-BLG-0030L b","KMT-2018-BLG-0087L b","KMT-2018-BLG-0247L b","KMT-2018-BLG-0748L b","KMT-2018-BLG-0885L b","KMT-2018-BLG-1025L b","KMT-2018-BLG-1292L b","KMT-2018-BLG-1743L b","KMT-2018-BLG-1976L b","KMT-2018-BLG-1988L b","KMT-2018-BLG-1990L b","KMT-2018-BLG-1996L b","KMT-2018-BLG-2602L b","KMT-2019-BLG-0253L b","KMT-2019-BLG-0297L b","KMT-2019-BLG-0298L b","KMT-2019-BLG-0335L b","KMT-2019-BLG-0371L b","KMT-2019-BLG-0414L b","KMT-2019-BLG-0842L b","KMT-2019-BLG-0953L b","KMT-2019-BLG-1042L b","KMT-2019-BLG-1216L b","KMT-2019-BLG-1339L b","KMT-2019-BLG-1367L b","KMT-2019-BLG-1552L b","KMT-2019-BLG-1715L b","KMT-2019-BLG-1806L b","KMT-2019-BLG-1953L b","KMT-2019-BLG-2783L b","KMT-2019-BLG-2974L b","KMT-2020-BLG-0414L b","KMT-2020-BLG-0414L c","KMT-2021-BLG-0119L b","KMT-2021-BLG-0171L b","KMT-2021-BLG-0192L b","KMT-2021-BLG-0240L b","KMT-2021-BLG-0320L b","KMT-2021-BLG-0322L b","KMT-2021-BLG-0712L b","KMT-2021-BLG-0748L b","KMT-2021-BLG-0909L b","KMT-2021-BLG-0912L b","KMT-2021-BLG-1077L b","KMT-2021-BLG-1077L c","KMT-2021-BLG-1105L b","KMT-2021-BLG-1150L b","KMT-2021-BLG-1253L b","KMT-2021-BLG-1303L b","KMT-2021-BLG-1372L b","KMT-2021-BLG-1391L b","KMT-2021-BLG-1547L b","KMT-2021-BLG-1554L b","KMT-2021-BLG-1689L b","KMT-2021-BLG-1770L b","KMT-2021-BLG-1898L b","KMT-2021-BLG-2010L b","KMT-2021-BLG-2294L b","KMT-2021-BLG-2478L b","KMT-2022-BLG-0371L b","KMT-2022-BLG-0440L b","KMT-2022-BLG-1013L b","KMT-2023-BLG-0416L b","KMT-2023-BLG-0469L b","KMT-2023-BLG-0735L b","KMT-2023-BLG-1431L b","KMT-2023-BLG-1454L b","KMT-2023-BLG-1642L b","KOI-12 b","KOI-1257 b","KOI-13 b","KOI-142 b","KOI-142 c","KOI-1599.01","KOI-1599.02","KOI-1783.01","KOI-1783.02","KOI-1831 d","KOI-1833 d","KOI-217 b","KOI-2513.01","KOI-3503 b","KOI-3503 c","KOI-351 b","KOI-351 c","KOI-351 d","KOI-351 e","KOI-351 f","KOI-351 g","KOI-351 h","KOI-3680 b","KOI-4777.01","KOI-55 b","KOI-55 c","KOI-7368 b","KOI-7913 b","KOI-94 b","KOI-94 c","KOI-94 d","KOI-94 e","KOI-984 b","KOI-984 c","KPS-1 b","Kapteyn c","Kepler-10 b","Kepler-10 c","Kepler-10 d","Kepler-100 b","Kepler-100 c","Kepler-100 d","Kepler-100 e","Kepler-1000 b","Kepler-1001 b","Kepler-1001 c","Kepler-1002 b","Kepler-1003 b","Kepler-1004 b","Kepler-1005 b","Kepler-1006 b","Kepler-1007 b","Kepler-1008 b","Kepler-1009 b","Kepler-101 b","Kepler-101 c","Kepler-1010 b","Kepler-1011 b","Kepler-1012 b","Kepler-1013 b","Kepler-1014 b","Kepler-1015 b","Kepler-1016 b","Kepler-1016 c","Kepler-1017 b","Kepler-1018 b","Kepler-1019 b","Kepler-102 b","Kepler-102 c","Kepler-102 d","Kepler-102 e","Kepler-102 f","Kepler-1020 b","Kepler-1021 b","Kepler-1022 b","Kepler-1023 b","Kepler-1024 b","Kepler-1025 b","Kepler-1026 b","Kepler-1027 b","Kepler-1028 b","Kepler-1029 b","Kepler-103 b","Kepler-103 c","Kepler-1030 b","Kepler-1031 b","Kepler-1032 b","Kepler-1033 b","Kepler-1034 b","Kepler-1035 b","Kepler-1036 b","Kepler-1037 b","Kepler-1038 b","Kepler-1038 c","Kepler-1039 b","Kepler-104 b","Kepler-104 c","Kepler-104 d","Kepler-1040 b","Kepler-1041 b","Kepler-1042 b","Kepler-1043 b","Kepler-1044 b","Kepler-1045 b","Kepler-1046 b","Kepler-1047 b","Kepler-1047 c","Kepler-1048 b","Kepler-1049 b","Kepler-105 b","Kepler-105 c","Kepler-1050 b","Kepler-1050 c","Kepler-1051 b","Kepler-1052 b","Kepler-1052 c","Kepler-1053 b","Kepler-1054 b","Kepler-1055 b","Kepler-1056 b","Kepler-1057 b","Kepler-1058 b","Kepler-1059 b","Kepler-106 b","Kepler-106 c","Kepler-106 d","Kepler-106 e","Kepler-1060 b","Kepler-1061 b","Kepler-1062 b","Kepler-1063 b","Kepler-1064 b","Kepler-1065 b","Kepler-1065 c","Kepler-1066 b","Kepler-1067 b","Kepler-1067 c","Kepler-1068 b","Kepler-1069 b","Kepler-107 b","Kepler-107 c","Kepler-107 d","Kepler-107 e","Kepler-1070 b","Kepler-1071 b","Kepler-1072 b","Kepler-1073 b","Kepler-1073 c","Kepler-1073 d","Kepler-1074 b","Kepler-1075 b","Kepler-1076 b","Kepler-1077 b","Kepler-1078 b","Kepler-1079 b","Kepler-108 b","Kepler-108 c","Kepler-1080 b","Kepler-1081 b","Kepler-1082 b","Kepler-1083 b","Kepler-1084 b","Kepler-1085 b","Kepler-1085 c","Kepler-1086 b","Kepler-1086 c","Kepler-1087 b","Kepler-1088 b","Kepler-1089 b","Kepler-109 b","Kepler-109 c","Kepler-1090 b","Kepler-1090 c","Kepler-1091 b","Kepler-1092 b","Kepler-1093 b","Kepler-1093 c","Kepler-1094 b","Kepler-1095 b","Kepler-1096 b","Kepler-1097 b","Kepler-1098 b","Kepler-1099 b","Kepler-11 b","Kepler-11 c","Kepler-11 d","Kepler-11 e","Kepler-11 f","Kepler-11 g","Kepler-110 b","Kepler-110 c","Kepler-1100 b","Kepler-1101 b","Kepler-1102 b","Kepler-1103 b","Kepler-1104 b","Kepler-1105 b","Kepler-1106 b","Kepler-1107 b","Kepler-1108 b","Kepler-1109 b","Kepler-111 b","Kepler-111 c","Kepler-1110 b","Kepler-1111 b","Kepler-1112 b","Kepler-1113 b","Kepler-1114 b","Kepler-1115 b","Kepler-1116 b","Kepler-1117 b","Kepler-1118 b","Kepler-1119 b","Kepler-112 b","Kepler-112 c","Kepler-1120 b","Kepler-1121 b","Kepler-1122 b","Kepler-1123 b","Kepler-1124 b","Kepler-1125 b","Kepler-1126 b","Kepler-1126 c","Kepler-1127 b","Kepler-1128 b","Kepler-1129 b","Kepler-1129 c","Kepler-113 b","Kepler-113 c","Kepler-1130 b","Kepler-1130 c","Kepler-1130 d","Kepler-1131 b","Kepler-1132 b","Kepler-1133 b","Kepler-1134 b","Kepler-1135 b","Kepler-1136 b","Kepler-1137 b","Kepler-1138 b","Kepler-1139 b","Kepler-114 b","Kepler-114 c","Kepler-114 d","Kepler-1140 b","Kepler-1141 b","Kepler-1142 b","Kepler-1143 b","Kepler-1143 c","Kepler-1144 b","Kepler-1145 b","Kepler-1146 b","Kepler-1147 b","Kepler-1148 b","Kepler-1149 b","Kepler-115 b","Kepler-115 c","Kepler-1150 b","Kepler-1151 b","Kepler-1152 b","Kepler-1153 b","Kepler-1154 b","Kepler-1154 c","Kepler-1155 b","Kepler-1156 b","Kepler-1157 b","Kepler-1158 b","Kepler-1159 b","Kepler-116 b","Kepler-116 c","Kepler-1160 b","Kepler-1161 b","Kepler-1162 b","Kepler-1162 c","Kepler-1163 b","Kepler-1164 b","Kepler-1165 b","Kepler-1165 c","Kepler-1166 b","Kepler-1167 b","Kepler-1168 b","Kepler-1169 b","Kepler-117 b","Kepler-117 c","Kepler-1170 b","Kepler-1171 b","Kepler-1172 b","Kepler-1173 b","Kepler-1174 b","Kepler-1175 b","Kepler-1176 b","Kepler-1177 b","Kepler-1178 b","Kepler-1179 b","Kepler-118 b","Kepler-118 c","Kepler-1180 b","Kepler-1181 b","Kepler-1181 c","Kepler-1182 b","Kepler-1183 b","Kepler-1184 b","Kepler-1185 b","Kepler-1186 b","Kepler-1187 b","Kepler-1188 b","Kepler-1189 b","Kepler-119 b","Kepler-119 c","Kepler-1190 b","Kepler-1191 b","Kepler-1192 b","Kepler-1193 b","Kepler-1194 b","Kepler-1195 b","Kepler-1196 b","Kepler-1197 b","Kepler-1198 b","Kepler-1199 b","Kepler-12 b","Kepler-120 b","Kepler-120 c","Kepler-1200 b","Kepler-1201 b","Kepler-1202 b","Kepler-1203 b","Kepler-1204 b","Kepler-1205 b","Kepler-1206 b","Kepler-1207 b","Kepler-1208 b","Kepler-1209 b","Kepler-121 b","Kepler-121 c","Kepler-1210 b","Kepler-1211 b","Kepler-1212 b","Kepler-1213 b","Kepler-1214 b","Kepler-1215 b","Kepler-1216 b","Kepler-1217 b","Kepler-1218 b","Kepler-1219 b","Kepler-122 b","Kepler-122 c","Kepler-122 d","Kepler-122 e","Kepler-122 f","Kepler-1220 b","Kepler-1221 b","Kepler-1222 b","Kepler-1223 b","Kepler-1224 b","Kepler-1225 b","Kepler-1226 b","Kepler-1227 b","Kepler-1228 b","Kepler-1229 b","Kepler-123 b","Kepler-123 c","Kepler-1230 b","Kepler-1231 b","Kepler-1232 b","Kepler-1233 b","Kepler-1234 b","Kepler-1235 b","Kepler-1236 b","Kepler-1237 b","Kepler-1238 b","Kepler-1239 b","Kepler-124 b","Kepler-124 c","Kepler-124 d","Kepler-1240 b","Kepler-1241 b","Kepler-1242 b","Kepler-1243 b","Kepler-1244 b","Kepler-1245 b","Kepler-1245 c","Kepler-1246 b","Kepler-1247 b","Kepler-1248 b","Kepler-1249 b","Kepler-125 b","Kepler-125 c","Kepler-1250 b","Kepler-1251 b","Kepler-1252 b","Kepler-1253 b","Kepler-1254 b","Kepler-1254 c","Kepler-1254 d","Kepler-1255 b","Kepler-1256 b","Kepler-1257 b","Kepler-1258 b","Kepler-1259 b","Kepler-126 b","Kepler-126 c","Kepler-126 d","Kepler-1260 b","Kepler-1261 b","Kepler-1262 b","Kepler-1263 b","Kepler-1264 b","Kepler-1265 b","Kepler-1266 b","Kepler-1266 c","Kepler-1267 b","Kepler-1268 b","Kepler-1269 b","Kepler-127 b","Kepler-127 c","Kepler-127 d","Kepler-1270 b","Kepler-1271 b","Kepler-1272 b","Kepler-1273 b","Kepler-1274 b","Kepler-1275 b","Kepler-1276 b","Kepler-1277 b","Kepler-1278 b","Kepler-1279 b","Kepler-128 b","Kepler-128 c","Kepler-1280 b","Kepler-1281 b","Kepler-1282 b","Kepler-1283 b","Kepler-1284 b","Kepler-1285 b","Kepler-1286 b","Kepler-1287 b","Kepler-1288 b","Kepler-1289 b","Kepler-129 b","Kepler-129 c","Kepler-129 d","Kepler-1290 b","Kepler-1291 b","Kepler-1292 b","Kepler-1293 b","Kepler-1294 b","Kepler-1295 b","Kepler-1296 b","Kepler-1297 b","Kepler-1298 b","Kepler-1299 b","Kepler-130 b","Kepler-130 c","Kepler-130 d","Kepler-1300 b","Kepler-1301 b","Kepler-1302 b","Kepler-1303 b","Kepler-1304 b","Kepler-1305 b","Kepler-1306 b","Kepler-1307 b","Kepler-1308 b","Kepler-1309 b","Kepler-131 b","Kepler-131 c","Kepler-1310 b","Kepler-1311 b","Kepler-1311 c","Kepler-1311 d","Kepler-1312 b","Kepler-1312 c","Kepler-1313 b","Kepler-1314 b","Kepler-1315 b","Kepler-1315 c","Kepler-1316 b","Kepler-1317 b","Kepler-1318 b","Kepler-1319 b","Kepler-132 b","Kepler-132 c","Kepler-132 d","Kepler-132 e","Kepler-1320 b","Kepler-1321 b","Kepler-1321 c","Kepler-1321 d","Kepler-1322 b","Kepler-1322 c","Kepler-1323 b","Kepler-1324 b","Kepler-1325 b","Kepler-1326 b","Kepler-1327 b","Kepler-1328 b","Kepler-1329 b","Kepler-133 b","Kepler-133 c","Kepler-1330 b","Kepler-1331 b","Kepler-1332 b","Kepler-1333 b","Kepler-1334 b","Kepler-1335 b","Kepler-1336 b","Kepler-1336 c","Kepler-1337 b","Kepler-1338 b","Kepler-1339 b","Kepler-134 b","Kepler-134 c","Kepler-1340 b","Kepler-1341 b","Kepler-1342 b","Kepler-1343 b","Kepler-1344 b","Kepler-1345 b","Kepler-1346 b","Kepler-1347 b","Kepler-1348 b","Kepler-1349 b","Kepler-135 b","Kepler-135 c","Kepler-1350 b","Kepler-1350 c","Kepler-1351 b","Kepler-1352 b","Kepler-1353 b","Kepler-1354 b","Kepler-1355 b","Kepler-1356 b","Kepler-1357 b","Kepler-1358 b","Kepler-1359 b","Kepler-136 b","Kepler-136 c","Kepler-1360 b","Kepler-1361 b","Kepler-1362 b","Kepler-1363 b","Kepler-1364 b","Kepler-1365 b","Kepler-1365 c","Kepler-1366 b","Kepler-1367 b","Kepler-1368 b","Kepler-1369 b","Kepler-137 b","Kepler-137 c","Kepler-1370 b","Kepler-1370 c","Kepler-1371 b","Kepler-1371 c","Kepler-1372 b","Kepler-1373 b","Kepler-1374 b","Kepler-1375 b","Kepler-1376 b","Kepler-1377 b","Kepler-1378 b","Kepler-1379 b","Kepler-138 b","Kepler-138 c","Kepler-138 d","Kepler-138 e","Kepler-1380 b","Kepler-1381 b","Kepler-1382 b","Kepler-1383 b","Kepler-1384 b","Kepler-1385 b","Kepler-1386 b","Kepler-1387 b","Kepler-1388 b","Kepler-1388 c","Kepler-1388 d","Kepler-1388 e","Kepler-1389 b","Kepler-139 b","Kepler-139 c","Kepler-139 d","Kepler-139 e","Kepler-1390 b","Kepler-1391 b","Kepler-1392 b","Kepler-1393 b","Kepler-1394 b","Kepler-1395 b","Kepler-1396 b","Kepler-1397 b","Kepler-1398 b","Kepler-1398 c","Kepler-1399 b","Kepler-14 b","Kepler-140 b","Kepler-140 c","Kepler-1400 b","Kepler-1401 b","Kepler-1402 b","Kepler-1403 b","Kepler-1404 b","Kepler-1405 b","Kepler-1406 b","Kepler-1407 b","Kepler-1408 b","Kepler-1409 b","Kepler-141 b","Kepler-141 c","Kepler-1410 b","Kepler-1411 b","Kepler-1412 b","Kepler-1413 b","Kepler-1414 b","Kepler-1415 b","Kepler-1416 b","Kepler-1417 b","Kepler-1418 b","Kepler-1419 b","Kepler-142 b","Kepler-142 c","Kepler-142 d","Kepler-1420 b","Kepler-1421 b","Kepler-1422 b","Kepler-1423 b","Kepler-1424 b","Kepler-1425 b","Kepler-1426 b","Kepler-1427 b","Kepler-1428 b","Kepler-1429 b","Kepler-143 b","Kepler-143 c","Kepler-1430 b","Kepler-1431 b","Kepler-1432 b","Kepler-1433 b","Kepler-1434 b","Kepler-1435 b","Kepler-1436 b","Kepler-1437 b","Kepler-1438 b","Kepler-1439 b","Kepler-144 b","Kepler-144 c","Kepler-1440 b","Kepler-1441 b","Kepler-1442 b","Kepler-1443 b","Kepler-1444 b","Kepler-1445 b","Kepler-1446 b","Kepler-1447 b","Kepler-1448 b","Kepler-1449 b","Kepler-145 b","Kepler-145 c","Kepler-1450 b","Kepler-1451 b","Kepler-1452 b","Kepler-1453 b","Kepler-1454 b","Kepler-1455 b","Kepler-1456 b","Kepler-1457 b","Kepler-1458 b","Kepler-1459 b","Kepler-146 b","Kepler-146 c","Kepler-1460 b","Kepler-1461 b","Kepler-1462 b","Kepler-1463 b","Kepler-1464 b","Kepler-1464 c","Kepler-1465 b","Kepler-1466 b","Kepler-1467 b","Kepler-1468 b","Kepler-1468 c","Kepler-1468 d","Kepler-1469 b","Kepler-147 b","Kepler-147 c","Kepler-1470 b","Kepler-1471 b","Kepler-1471 c","Kepler-1472 b","Kepler-1473 b","Kepler-1474 b","Kepler-1475 b","Kepler-1476 b","Kepler-1477 b","Kepler-1478 b","Kepler-1479 b","Kepler-148 b","Kepler-148 c","Kepler-148 d","Kepler-1480 b","Kepler-1481 b","Kepler-1482 b","Kepler-1483 b","Kepler-1484 b","Kepler-1485 b","Kepler-1486 b","Kepler-1487 b","Kepler-1487 c","Kepler-1488 b","Kepler-1488 c","Kepler-1489 b","Kepler-149 b","Kepler-149 c","Kepler-149 d","Kepler-1490 b","Kepler-1491 b","Kepler-1491 c","Kepler-1492 b","Kepler-1493 b","Kepler-1494 b","Kepler-1495 b","Kepler-1496 b","Kepler-1497 b","Kepler-1498 b","Kepler-1499 b","Kepler-15 b","Kepler-150 b","Kepler-150 c","Kepler-150 d","Kepler-150 e","Kepler-150 f","Kepler-1500 b","Kepler-1501 b","Kepler-1502 b","Kepler-1503 b","Kepler-1504 b","Kepler-1505 b","Kepler-1506 b","Kepler-1507 b","Kepler-1508 b","Kepler-1509 b","Kepler-151 b","Kepler-151 c","Kepler-1510 b","Kepler-1511 b","Kepler-1512 b","Kepler-1513 b","Kepler-1513 c","Kepler-1514 b","Kepler-1514 c","Kepler-1515 b","Kepler-1516 b","Kepler-1517 b","Kepler-1518 b","Kepler-1518 c","Kepler-1519 b","Kepler-152 b","Kepler-152 c","Kepler-1520 b","Kepler-1521 b","Kepler-1522 b","Kepler-1523 b","Kepler-1524 b","Kepler-1525 b","Kepler-1526 b","Kepler-1527 b","Kepler-1528 b","Kepler-1529 b","Kepler-153 b","Kepler-153 c","Kepler-1530 b","Kepler-1530 c","Kepler-1530 d","Kepler-1531 b","Kepler-1532 b","Kepler-1533 b","Kepler-1534 b","Kepler-1535 b","Kepler-1536 b","Kepler-1537 b","Kepler-1538 b","Kepler-1539 b","Kepler-154 b","Kepler-154 c","Kepler-154 d","Kepler-154 e","Kepler-154 f","Kepler-1540 b","Kepler-1541 b","Kepler-1542 b","Kepler-1542 c","Kepler-1542 d","Kepler-1542 e","Kepler-1543 b","Kepler-1544 b","Kepler-1545 b","Kepler-1546 b","Kepler-1547 b","Kepler-1548 b","Kepler-1549 b","Kepler-155 b","Kepler-155 c","Kepler-1550 b","Kepler-1551 b","Kepler-1552 b","Kepler-1553 b","Kepler-1554 b","Kepler-1555 b","Kepler-1556 b","Kepler-1557 b","Kepler-1558 b","Kepler-1559 b","Kepler-156 b","Kepler-156 c","Kepler-1560 b","Kepler-1561 b","Kepler-1562 b","Kepler-1563 b","Kepler-1564 b","Kepler-1565 b","Kepler-1566 b","Kepler-1567 b","Kepler-1568 b","Kepler-1569 b","Kepler-157 b","Kepler-157 c","Kepler-157 d","Kepler-1570 b","Kepler-1571 b","Kepler-1572 b","Kepler-1573 b","Kepler-1574 b","Kepler-1575 b","Kepler-1576 b","Kepler-1577 b","Kepler-1578 b","Kepler-1579 b","Kepler-158 b","Kepler-158 c","Kepler-1580 b","Kepler-1581 b","Kepler-1582 b","Kepler-1583 b","Kepler-1584 b","Kepler-1585 b","Kepler-1586 b","Kepler-1587 b","Kepler-1588 b","Kepler-1589 b","Kepler-159 b","Kepler-159 c","Kepler-1590 b","Kepler-1591 b","Kepler-1592 b","Kepler-1593 b","Kepler-1594 b","Kepler-1595 b","Kepler-1596 b","Kepler-1597 b","Kepler-1598 b","Kepler-1599 b","Kepler-16 b","Kepler-160 b","Kepler-160 c","Kepler-160 d","Kepler-1600 b","Kepler-1600 c","Kepler-1601 b","Kepler-1602 b","Kepler-1603 b","Kepler-1604 b","Kepler-1605 b","Kepler-1606 b","Kepler-1607 b","Kepler-1608 b","Kepler-1609 b","Kepler-161 b","Kepler-161 c","Kepler-1610 b","Kepler-1610 c","Kepler-1611 b","Kepler-1612 b","Kepler-1613 b","Kepler-1614 b","Kepler-1615 b","Kepler-1616 b","Kepler-1617 b","Kepler-1618 b","Kepler-1619 b","Kepler-162 b","Kepler-162 c","Kepler-1620 b","Kepler-1621 b","Kepler-1622 b","Kepler-1623 b","Kepler-1624 b","Kepler-1625 b","Kepler-1626 b","Kepler-1627 b","Kepler-1628 b","Kepler-1629 b","Kepler-163 b","Kepler-163 c","Kepler-1630 b","Kepler-1631 b","Kepler-1632 b","Kepler-1633 b","Kepler-1634 b","Kepler-1635 b","Kepler-1636 b","Kepler-1637 b","Kepler-1638 b","Kepler-1639 b","Kepler-164 b","Kepler-164 c","Kepler-164 d","Kepler-164 e","Kepler-1640 b","Kepler-1641 b","Kepler-1641 c","Kepler-1642 b","Kepler-1642 c","Kepler-1643 b","Kepler-1644 b","Kepler-1645 b","Kepler-1646 b","Kepler-1647 b","Kepler-1649 b","Kepler-1649 c","Kepler-165 b","Kepler-165 c","Kepler-1650 b","Kepler-1651 b","Kepler-1652 b","Kepler-1653 b","Kepler-1654 b","Kepler-1655 b","Kepler-1656 b","Kepler-1656 c","Kepler-1658 b","Kepler-166 b","Kepler-166 c","Kepler-166 d","Kepler-1660 AB b","Kepler-1661 b","Kepler-1663 b","Kepler-1664 b","Kepler-1665 b","Kepler-1666 b","Kepler-1666 c","Kepler-1667 b","Kepler-1668 b","Kepler-1669 b","Kepler-1669 c","Kepler-1669 d","Kepler-167 b","Kepler-167 c","Kepler-167 d","Kepler-167 e","Kepler-1670 b","Kepler-1671 b","Kepler-1672 b","Kepler-1673 b","Kepler-1674 b","Kepler-1675 b","Kepler-1677 b","Kepler-1678 b","Kepler-1679 b","Kepler-168 b","Kepler-168 c","Kepler-1680 b","Kepler-1681 b","Kepler-1682 b","Kepler-1683 b","Kepler-1684 b","Kepler-1685 b","Kepler-1686 b","Kepler-1687 b","Kepler-1688 b","Kepler-1689 b","Kepler-169 b","Kepler-169 c","Kepler-169 d","Kepler-169 e","Kepler-169 f","Kepler-1690 b","Kepler-1691 b","Kepler-1692 b","Kepler-1693 b","Kepler-1693 c","Kepler-1694 b","Kepler-1695 b","Kepler-1696 b","Kepler-1697 b","Kepler-1698 b","Kepler-1699 b","Kepler-17 b","Kepler-170 b","Kepler-170 c","Kepler-1700 b","Kepler-1701 b","Kepler-1702 b","Kepler-1704 b","Kepler-1705 b","Kepler-1705 c","Kepler-1708 b","Kepler-1709 b","Kepler-171 b","Kepler-171 c","Kepler-171 d","Kepler-1710 b","Kepler-1711 b","Kepler-1712 b","Kepler-1713 b","Kepler-1714 b","Kepler-1715 b","Kepler-1716 b","Kepler-1717 b","Kepler-1718 b","Kepler-1719 b","Kepler-172 b","Kepler-172 c","Kepler-172 d","Kepler-172 e","Kepler-1720 b","Kepler-1721 b","Kepler-1722 b","Kepler-1723 b","Kepler-1724 b","Kepler-1725 b","Kepler-1726 b","Kepler-1727 b","Kepler-1728 b","Kepler-1729 b","Kepler-173 b","Kepler-173 c","Kepler-1730 b","Kepler-1731 b","Kepler-1732 b","Kepler-1733 b","Kepler-1734 b","Kepler-1735 b","Kepler-1736 b","Kepler-1738 b","Kepler-1739 b","Kepler-174 b","Kepler-174 c","Kepler-174 d","Kepler-1740 b","Kepler-1741 b","Kepler-1742 b","Kepler-1743 b","Kepler-1744 b","Kepler-1745 b","Kepler-1746 b","Kepler-1747 b","Kepler-1748 b","Kepler-1749 b","Kepler-175 b","Kepler-175 c","Kepler-1750 b","Kepler-1751 b","Kepler-1752 b","Kepler-1753 b","Kepler-1754 b","Kepler-1755 b","Kepler-1757 b","Kepler-1758 b","Kepler-1759 b","Kepler-176 b","Kepler-176 c","Kepler-176 d","Kepler-176 e","Kepler-1761 b","Kepler-1762 b","Kepler-1763 b","Kepler-1764 b","Kepler-1765 b","Kepler-1766 b","Kepler-1767 b","Kepler-1768 b","Kepler-1769 b","Kepler-177 b","Kepler-177 c","Kepler-1770 b","Kepler-1771 b","Kepler-1772 b","Kepler-1773 b","Kepler-1774 b","Kepler-1775 b","Kepler-1776 b","Kepler-1777 b","Kepler-1778 b","Kepler-1779 b","Kepler-178 b","Kepler-178 c","Kepler-178 d","Kepler-1780 b","Kepler-1781 b","Kepler-1782 b","Kepler-1783 b","Kepler-1784 b","Kepler-1785 b","Kepler-1786 b","Kepler-1787 b","Kepler-1788 b","Kepler-1789 b","Kepler-179 b","Kepler-179 c","Kepler-1790 b","Kepler-1791 b","Kepler-1792 b","Kepler-1793 b","Kepler-1794 b","Kepler-1796 b","Kepler-1797 b","Kepler-1798 b","Kepler-1799 b","Kepler-18 b","Kepler-18 c","Kepler-18 d","Kepler-180 b","Kepler-180 c","Kepler-1800 b","Kepler-1801 b","Kepler-1801 c","Kepler-1802 b","Kepler-1802 c","Kepler-1804 b","Kepler-1805 b","Kepler-1806 b","Kepler-1807 b","Kepler-1808 b","Kepler-1809 b","Kepler-181 b","Kepler-181 c","Kepler-1810 b","Kepler-1811 b","Kepler-1812 b","Kepler-1814 b","Kepler-1814 c","Kepler-1815 b","Kepler-1816 b","Kepler-1817 b","Kepler-1818 b","Kepler-1819 b","Kepler-182 b","Kepler-182 c","Kepler-1820 b","Kepler-1821 b","Kepler-1822 b","Kepler-1823 b","Kepler-1824 b","Kepler-1825 b","Kepler-1826 b","Kepler-1827 b","Kepler-1828 b","Kepler-1829 b","Kepler-183 b","Kepler-183 c","Kepler-1830 b","Kepler-1831 b","Kepler-1832 b","Kepler-1833 b","Kepler-1834 b","Kepler-1834 c","Kepler-1835 b","Kepler-1836 b","Kepler-1837 b","Kepler-1838 b","Kepler-1839 b","Kepler-184 b","Kepler-184 c","Kepler-184 d","Kepler-1840 b","Kepler-1841 b","Kepler-1842 b","Kepler-1843 b","Kepler-1844 b","Kepler-1845 b","Kepler-1846 b","Kepler-1847 b","Kepler-1848 b","Kepler-1849 b","Kepler-185 b","Kepler-185 c","Kepler-1850 b","Kepler-1851 b","Kepler-1852 b","Kepler-1853 b","Kepler-1854 b","Kepler-1856 b","Kepler-1857 b","Kepler-1858 b","Kepler-1859 b","Kepler-1859 c","Kepler-186 b","Kepler-186 c","Kepler-186 d","Kepler-186 e","Kepler-186 f","Kepler-1860 b","Kepler-1861 b","Kepler-1862 b","Kepler-1863 b","Kepler-1864 b","Kepler-1865 b","Kepler-1866 b","Kepler-1867 b","Kepler-1868 b","Kepler-1869 b","Kepler-1869 c","Kepler-187 b","Kepler-187 c","Kepler-1870 b","Kepler-1871 b","Kepler-1872 b","Kepler-1873 b","Kepler-1874 b","Kepler-1875 b","Kepler-1876 b","Kepler-1877 b","Kepler-1878 b","Kepler-1879 b","Kepler-188 b","Kepler-188 c","Kepler-1880 b","Kepler-1881 b","Kepler-1882 b","Kepler-1883 b","Kepler-1884 b","Kepler-1885 b","Kepler-1886 b","Kepler-1887 b","Kepler-1888 b","Kepler-1889 b","Kepler-189 b","Kepler-189 c","Kepler-1890 b","Kepler-1891 b","Kepler-1892 b","Kepler-1893 b","Kepler-1894 b","Kepler-1894 c","Kepler-1895 b","Kepler-1896 b","Kepler-1897 b","Kepler-1898 b","Kepler-1899 b","Kepler-19 b","Kepler-19 c","Kepler-19 d","Kepler-190 b","Kepler-190 c","Kepler-1900 b","Kepler-1901 b","Kepler-1902 b","Kepler-1903 b","Kepler-1904 b","Kepler-1905 b","Kepler-1906 b","Kepler-1907 b","Kepler-1907 c","Kepler-1909 b","Kepler-191 b","Kepler-191 c","Kepler-191 d","Kepler-1911 b","Kepler-1912 b","Kepler-1913 b","Kepler-1914 b","Kepler-1915 b","Kepler-1916 b","Kepler-1917 b","Kepler-1918 b","Kepler-1919 b","Kepler-192 b","Kepler-192 c","Kepler-192 d","Kepler-1920 b","Kepler-1921 b","Kepler-1921 c","Kepler-1922 b","Kepler-1923 b","Kepler-1924 b","Kepler-1925 b","Kepler-1926 b","Kepler-1927 b","Kepler-1928 b","Kepler-1929 b","Kepler-193 b","Kepler-193 c","Kepler-1930 b","Kepler-1931 b","Kepler-1932 b","Kepler-1933 b","Kepler-1934 b","Kepler-1935 b","Kepler-1936 b","Kepler-1937 b","Kepler-1938 b","Kepler-1939 b","Kepler-194 b","Kepler-194 c","Kepler-194 d","Kepler-1940 b","Kepler-1941 b","Kepler-1942 b","Kepler-1943 b","Kepler-1944 b","Kepler-1946 b","Kepler-1947 b","Kepler-1948 b","Kepler-1949 b","Kepler-195 b","Kepler-195 c","Kepler-1950 b","Kepler-1951 b","Kepler-1952 b","Kepler-1953 b","Kepler-1954 b","Kepler-1955 b","Kepler-1956 b","Kepler-1957 b","Kepler-1958 b","Kepler-1959 b","Kepler-196 b","Kepler-196 c","Kepler-196 d","Kepler-1960 b","Kepler-1961 b","Kepler-1962 b","Kepler-1963 b","Kepler-1965 b","Kepler-1966 b","Kepler-1967 b","Kepler-1968 b","Kepler-1969 b","Kepler-197 b","Kepler-197 c","Kepler-197 d","Kepler-197 e","Kepler-1972 b","Kepler-1972 c","Kepler-1976 b","Kepler-1977 b","Kepler-1978 b","Kepler-1979 b","Kepler-198 b","Kepler-198 c","Kepler-198 d","Kepler-1980 b","Kepler-1981 b","Kepler-1982 b","Kepler-1983 b","Kepler-1986 b","Kepler-1987 b","Kepler-1987 c","Kepler-1987 d","Kepler-1987 e","Kepler-1988 b","Kepler-1989 b","Kepler-199 b","Kepler-199 c","Kepler-1990 b","Kepler-1990 c","Kepler-1991 b","Kepler-1991 c","Kepler-1992 b","Kepler-1993 b","Kepler-1994 b","Kepler-1995 b","Kepler-1996 b","Kepler-1996 c","Kepler-1997 b","Kepler-1998 b","Kepler-1999 b","Kepler-20 b","Kepler-20 c","Kepler-20 d","Kepler-20 e","Kepler-20 f","Kepler-20 g","Kepler-200 b","Kepler-200 c","Kepler-2000 b","Kepler-2000 c","Kepler-2001 b","Kepler-2001 c","Kepler-201 b","Kepler-201 c","Kepler-202 b","Kepler-202 c","Kepler-203 b","Kepler-203 c","Kepler-203 d","Kepler-204 b","Kepler-204 c","Kepler-205 b","Kepler-205 c","Kepler-206 b","Kepler-206 c","Kepler-206 d","Kepler-207 b","Kepler-207 c","Kepler-207 d","Kepler-208 b","Kepler-208 c","Kepler-208 d","Kepler-208 e","Kepler-209 b","Kepler-209 c","Kepler-21 b","Kepler-210 b","Kepler-210 c","Kepler-211 b","Kepler-211 c","Kepler-212 b","Kepler-212 c","Kepler-213 b","Kepler-213 c","Kepler-214 b","Kepler-214 c","Kepler-215 b","Kepler-215 c","Kepler-215 d","Kepler-215 e","Kepler-216 b","Kepler-216 c","Kepler-217 b","Kepler-217 c","Kepler-217 d","Kepler-218 b","Kepler-218 c","Kepler-218 d","Kepler-219 b","Kepler-219 c","Kepler-219 d","Kepler-22 b","Kepler-220 b","Kepler-220 c","Kepler-220 d","Kepler-220 e","Kepler-221 b","Kepler-221 c","Kepler-221 d","Kepler-221 e","Kepler-222 b","Kepler-222 c","Kepler-222 d","Kepler-223 b","Kepler-223 c","Kepler-223 d","Kepler-223 e","Kepler-224 b","Kepler-224 c","Kepler-224 d","Kepler-224 e","Kepler-225 b","Kepler-225 c","Kepler-226 b","Kepler-226 c","Kepler-226 d","Kepler-227 b","Kepler-227 c","Kepler-228 b","Kepler-228 c","Kepler-228 d","Kepler-229 b","Kepler-229 c","Kepler-229 d","Kepler-23 b","Kepler-23 c","Kepler-23 d","Kepler-230 b","Kepler-230 c","Kepler-231 b","Kepler-231 c","Kepler-232 b","Kepler-232 c","Kepler-233 b","Kepler-233 c","Kepler-234 b","Kepler-234 c","Kepler-235 b","Kepler-235 c","Kepler-235 d","Kepler-235 e","Kepler-236 b","Kepler-236 c","Kepler-237 b","Kepler-237 c","Kepler-238 b","Kepler-238 c","Kepler-238 d","Kepler-238 e","Kepler-238 f","Kepler-239 b","Kepler-239 c","Kepler-24 b","Kepler-24 c","Kepler-24 d","Kepler-24 e","Kepler-240 b","Kepler-240 c","Kepler-241 b","Kepler-241 c","Kepler-242 b","Kepler-242 c","Kepler-243 b","Kepler-243 c","Kepler-244 b","Kepler-244 c","Kepler-244 d","Kepler-245 b","Kepler-245 c","Kepler-245 d","Kepler-245 e","Kepler-246 b","Kepler-246 c","Kepler-247 b","Kepler-247 c","Kepler-247 d","Kepler-248 b","Kepler-248 c","Kepler-249 b","Kepler-249 c","Kepler-249 d","Kepler-25 b","Kepler-25 c","Kepler-25 d","Kepler-250 b","Kepler-250 c","Kepler-250 d","Kepler-251 b","Kepler-251 c","Kepler-251 d","Kepler-251 e","Kepler-252 b","Kepler-252 c","Kepler-253 b","Kepler-253 c","Kepler-253 d","Kepler-254 b","Kepler-254 c","Kepler-254 d","Kepler-255 b","Kepler-255 c","Kepler-255 d","Kepler-256 b","Kepler-256 c","Kepler-256 d","Kepler-256 e","Kepler-257 b","Kepler-257 c","Kepler-257 d","Kepler-258 b","Kepler-258 c","Kepler-259 b","Kepler-259 c","Kepler-26 b","Kepler-26 c","Kepler-26 d","Kepler-26 e","Kepler-260 b","Kepler-260 c","Kepler-261 b","Kepler-261 c","Kepler-262 b","Kepler-262 c","Kepler-263 b","Kepler-263 c","Kepler-264 b","Kepler-264 c","Kepler-265 b","Kepler-265 c","Kepler-265 d","Kepler-265 e","Kepler-266 b","Kepler-266 c","Kepler-267 b","Kepler-267 c","Kepler-267 d","Kepler-268 b","Kepler-268 c","Kepler-269 b","Kepler-269 c","Kepler-27 b","Kepler-27 c","Kepler-27 d","Kepler-270 b","Kepler-270 c","Kepler-271 b","Kepler-271 c","Kepler-271 d","Kepler-272 b","Kepler-272 c","Kepler-272 d","Kepler-273 b","Kepler-273 c","Kepler-274 b","Kepler-274 c","Kepler-275 b","Kepler-275 c","Kepler-275 d","Kepler-276 b","Kepler-276 c","Kepler-276 d","Kepler-277 b","Kepler-277 c","Kepler-278 b","Kepler-278 c","Kepler-279 b","Kepler-279 c","Kepler-279 d","Kepler-28 b","Kepler-28 c","Kepler-280 b","Kepler-280 c","Kepler-281 b","Kepler-281 c","Kepler-281 d","Kepler-282 b","Kepler-282 c","Kepler-282 d","Kepler-282 e","Kepler-283 b","Kepler-283 c","Kepler-284 b","Kepler-284 c","Kepler-285 b","Kepler-285 c","Kepler-286 b","Kepler-286 c","Kepler-286 d","Kepler-286 e","Kepler-287 b","Kepler-287 c","Kepler-288 b","Kepler-288 c","Kepler-288 d","Kepler-289 b","Kepler-289 c","Kepler-289 d","Kepler-29 b","Kepler-29 c","Kepler-290 b","Kepler-290 c","Kepler-290 d","Kepler-291 b","Kepler-291 c","Kepler-292 b","Kepler-292 c","Kepler-292 d","Kepler-292 e","Kepler-292 f","Kepler-293 b","Kepler-293 c","Kepler-294 b","Kepler-294 c","Kepler-295 b","Kepler-295 c","Kepler-295 d","Kepler-296 b","Kepler-296 c","Kepler-296 d","Kepler-296 e","Kepler-296 f","Kepler-297 b","Kepler-297 c","Kepler-297 d","Kepler-298 b","Kepler-298 c","Kepler-298 d","Kepler-299 b","Kepler-299 c","Kepler-299 d","Kepler-299 e","Kepler-30 b","Kepler-30 c","Kepler-30 d","Kepler-300 b","Kepler-300 c","Kepler-301 b","Kepler-301 c","Kepler-301 d","Kepler-302 b","Kepler-302 c","Kepler-303 b","Kepler-303 c","Kepler-304 b","Kepler-304 c","Kepler-304 d","Kepler-304 e","Kepler-305 b","Kepler-305 c","Kepler-305 d","Kepler-305 e","Kepler-306 b","Kepler-306 c","Kepler-306 d","Kepler-306 e","Kepler-307 b","Kepler-307 c","Kepler-308 b","Kepler-308 c","Kepler-309 b","Kepler-309 c","Kepler-31 b","Kepler-31 c","Kepler-31 d","Kepler-310 b","Kepler-310 c","Kepler-310 d","Kepler-311 b","Kepler-311 c","Kepler-311 d","Kepler-312 b","Kepler-312 c","Kepler-313 b","Kepler-313 c","Kepler-314 b","Kepler-314 c","Kepler-315 b","Kepler-315 c","Kepler-316 b","Kepler-316 c","Kepler-317 b","Kepler-317 c","Kepler-318 b","Kepler-318 c","Kepler-319 b","Kepler-319 c","Kepler-319 d","Kepler-32 b","Kepler-32 c","Kepler-32 d","Kepler-32 e","Kepler-32 f","Kepler-320 b","Kepler-320 c","Kepler-321 b","Kepler-321 c","Kepler-322 b","Kepler-322 c","Kepler-323 b","Kepler-323 c","Kepler-324 b","Kepler-324 c","Kepler-324 e","Kepler-325 b","Kepler-325 c","Kepler-325 d","Kepler-326 b","Kepler-326 c","Kepler-326 d","Kepler-327 b","Kepler-327 c","Kepler-327 d","Kepler-328 b","Kepler-328 c","Kepler-329 b","Kepler-329 c","Kepler-33 b","Kepler-33 c","Kepler-33 d","Kepler-33 e","Kepler-33 f","Kepler-330 b","Kepler-330 c","Kepler-331 b","Kepler-331 c","Kepler-331 d","Kepler-332 b","Kepler-332 c","Kepler-332 d","Kepler-333 b","Kepler-333 c","Kepler-334 b","Kepler-334 c","Kepler-334 d","Kepler-335 b","Kepler-335 c","Kepler-336 b","Kepler-336 c","Kepler-336 d","Kepler-337 b","Kepler-337 c","Kepler-338 b","Kepler-338 c","Kepler-338 d","Kepler-338 e","Kepler-339 b","Kepler-339 c","Kepler-339 d","Kepler-34 b","Kepler-340 b","Kepler-340 c","Kepler-341 b","Kepler-341 c","Kepler-341 d","Kepler-341 e","Kepler-342 b","Kepler-342 c","Kepler-342 d","Kepler-342 e","Kepler-343 b","Kepler-343 c","Kepler-344 b","Kepler-344 c","Kepler-345 b","Kepler-345 c","Kepler-346 b","Kepler-346 c","Kepler-347 b","Kepler-347 c","Kepler-347 d","Kepler-348 b","Kepler-348 c","Kepler-349 b","Kepler-349 c","Kepler-35 b","Kepler-350 b","Kepler-350 c","Kepler-350 d","Kepler-351 b","Kepler-351 c","Kepler-351 d","Kepler-352 b","Kepler-352 c","Kepler-352 d","Kepler-353 b","Kepler-353 c","Kepler-354 b","Kepler-354 c","Kepler-354 d","Kepler-355 b","Kepler-355 c","Kepler-356 b","Kepler-356 c","Kepler-357 b","Kepler-357 c","Kepler-357 d","Kepler-358 b","Kepler-358 c","Kepler-359 b","Kepler-359 c","Kepler-359 d","Kepler-36 b","Kepler-36 c","Kepler-360 b","Kepler-360 c","Kepler-361 b","Kepler-361 c","Kepler-362 b","Kepler-362 c","Kepler-363 b","Kepler-363 c","Kepler-363 d","Kepler-364 b","Kepler-364 c","Kepler-365 b","Kepler-365 c","Kepler-366 b","Kepler-366 c","Kepler-367 b","Kepler-367 c","Kepler-368 b","Kepler-368 c","Kepler-369 b","Kepler-369 c","Kepler-37 b","Kepler-37 c","Kepler-37 d","Kepler-37 e","Kepler-370 b","Kepler-370 c","Kepler-371 b","Kepler-371 c","Kepler-372 b","Kepler-372 c","Kepler-372 d","Kepler-373 b","Kepler-373 c","Kepler-374 b","Kepler-374 c","Kepler-374 d","Kepler-375 b","Kepler-375 c","Kepler-376 b","Kepler-376 c","Kepler-377 b","Kepler-377 c","Kepler-378 b","Kepler-378 c","Kepler-379 b","Kepler-379 c","Kepler-38 b","Kepler-380 b","Kepler-380 c","Kepler-381 b","Kepler-381 c","Kepler-381 d","Kepler-382 b","Kepler-382 c","Kepler-383 b","Kepler-383 c","Kepler-384 b","Kepler-384 c","Kepler-385 b","Kepler-385 c","Kepler-385 d","Kepler-386 b","Kepler-386 c","Kepler-387 b","Kepler-387 c","Kepler-388 b","Kepler-388 c","Kepler-389 b","Kepler-389 c","Kepler-39 b","Kepler-390 b","Kepler-390 c","Kepler-391 b","Kepler-391 c","Kepler-392 b","Kepler-392 c","Kepler-393 b","Kepler-393 c","Kepler-394 b","Kepler-394 c","Kepler-394 d","Kepler-395 b","Kepler-395 c","Kepler-396 b","Kepler-396 c","Kepler-397 b","Kepler-397 c","Kepler-398 b","Kepler-398 c","Kepler-398 d","Kepler-399 b","Kepler-399 c","Kepler-399 d","Kepler-4 b","Kepler-40 b","Kepler-400 b","Kepler-400 c","Kepler-401 b","Kepler-401 c","Kepler-401 d","Kepler-402 b","Kepler-402 c","Kepler-402 d","Kepler-402 e","Kepler-403 b","Kepler-403 c","Kepler-403 d","Kepler-404 b","Kepler-404 c","Kepler-405 b","Kepler-405 c","Kepler-406 b","Kepler-406 c","Kepler-407 b","Kepler-407 c","Kepler-408 b","Kepler-409 b","Kepler-41 b","Kepler-410 A b","Kepler-411 b","Kepler-411 c","Kepler-411 d","Kepler-411 e","Kepler-412 b","Kepler-413 b","Kepler-414 b","Kepler-414 c","Kepler-415 b","Kepler-415 c","Kepler-416 b","Kepler-416 c","Kepler-416 d","Kepler-417 b","Kepler-417 c","Kepler-418 b","Kepler-418 c","Kepler-419 b","Kepler-419 c","Kepler-42 b","Kepler-42 c","Kepler-42 d","Kepler-421 b","Kepler-422 b","Kepler-423 b","Kepler-424 b","Kepler-424 c","Kepler-425 b","Kepler-426 b","Kepler-427 b","Kepler-428 b","Kepler-43 b","Kepler-430 b","Kepler-430 c","Kepler-431 b","Kepler-431 c","Kepler-431 d","Kepler-432 b","Kepler-432 c","Kepler-433 b","Kepler-434 b","Kepler-435 b","Kepler-436 b","Kepler-436 c","Kepler-437 b","Kepler-438 b","Kepler-439 b","Kepler-44 b","Kepler-440 b","Kepler-441 b","Kepler-442 b","Kepler-443 b","Kepler-444 b","Kepler-444 c","Kepler-444 d","Kepler-444 e","Kepler-444 f","Kepler-445 b","Kepler-445 c","Kepler-445 d","Kepler-446 b","Kepler-446 c","Kepler-446 d","Kepler-447 b","Kepler-448 c","Kepler-449 b","Kepler-449 c","Kepler-45 b","Kepler-450 b","Kepler-450 c","Kepler-450 d","Kepler-451 c","Kepler-451 d","Kepler-452 b","Kepler-453 b","Kepler-454 b","Kepler-454 c","Kepler-454 d","Kepler-457 d","Kepler-458 c","Kepler-46 b","Kepler-46 c","Kepler-46 d","Kepler-460 c","Kepler-461 b","Kepler-462 b","Kepler-462 c","Kepler-463 b","Kepler-464 b","Kepler-465 b","Kepler-466 b","Kepler-466 c","Kepler-467 b","Kepler-468 b","Kepler-47 b","Kepler-47 c","Kepler-47 d","Kepler-471 b","Kepler-472 b","Kepler-473 b","Kepler-474 b","Kepler-475 b","Kepler-476 b","Kepler-477 b","Kepler-478 b","Kepler-479 b","Kepler-48 b","Kepler-48 c","Kepler-48 d","Kepler-48 e","Kepler-48 f","Kepler-480 b","Kepler-481 b","Kepler-482 b","Kepler-483 b","Kepler-484 b","Kepler-485 b","Kepler-487 b","Kepler-487 c","Kepler-487 d","Kepler-489 b","Kepler-49 b","Kepler-49 c","Kepler-49 d","Kepler-49 e","Kepler-490 b","Kepler-491 b","Kepler-493 b","Kepler-495 b","Kepler-495 c","Kepler-496 b","Kepler-497 b","Kepler-498 b","Kepler-499 b","Kepler-5 b","Kepler-50 b","Kepler-50 c","Kepler-500 b","Kepler-501 b","Kepler-501 c","Kepler-502 b","Kepler-504 b","Kepler-505 b","Kepler-506 b","Kepler-507 b","Kepler-508 b","Kepler-509 b","Kepler-51 b","Kepler-51 c","Kepler-51 d","Kepler-510 b","Kepler-511 b","Kepler-511 c","Kepler-512 b","Kepler-513 b","Kepler-514 b","Kepler-515 b","Kepler-516 b","Kepler-517 b","Kepler-518 b","Kepler-519 b","Kepler-52 b","Kepler-52 c","Kepler-52 d","Kepler-520 b","Kepler-520 c","Kepler-521 b","Kepler-522 b","Kepler-523 b","Kepler-524 b","Kepler-524 c","Kepler-525 b","Kepler-526 b","Kepler-527 b","Kepler-528 b","Kepler-529 b","Kepler-529 c","Kepler-529 d","Kepler-53 b","Kepler-53 c","Kepler-53 d","Kepler-530 b","Kepler-531 b","Kepler-532 b","Kepler-533 b","Kepler-534 b","Kepler-534 c","Kepler-535 b","Kepler-536 b","Kepler-537 b","Kepler-538 b","Kepler-539 b","Kepler-539 c","Kepler-54 b","Kepler-54 c","Kepler-54 d","Kepler-540 b","Kepler-541 b","Kepler-542 b","Kepler-543 b","Kepler-544 b","Kepler-545 b","Kepler-546 b","Kepler-547 b","Kepler-548 b","Kepler-549 b","Kepler-549 c","Kepler-549 d","Kepler-55 b","Kepler-55 c","Kepler-55 d","Kepler-55 e","Kepler-55 f","Kepler-550 b","Kepler-551 b","Kepler-552 b","Kepler-553 b","Kepler-553 c","Kepler-554 b","Kepler-555 b","Kepler-556 b","Kepler-557 b","Kepler-558 b","Kepler-559 b","Kepler-56 b","Kepler-56 c","Kepler-56 d","Kepler-560 b","Kepler-561 b","Kepler-561 c","Kepler-562 b","Kepler-563 b","Kepler-564 b","Kepler-565 b","Kepler-566 b","Kepler-567 b","Kepler-568 b","Kepler-569 b","Kepler-57 b","Kepler-57 c","Kepler-570 b","Kepler-571 b","Kepler-572 b","Kepler-573 b","Kepler-574 b","Kepler-575 b","Kepler-576 b","Kepler-577 b","Kepler-578 b","Kepler-579 b","Kepler-58 b","Kepler-58 c","Kepler-58 d","Kepler-58 e","Kepler-580 b","Kepler-581 b","Kepler-582 b","Kepler-583 b","Kepler-584 b","Kepler-585 b","Kepler-586 b","Kepler-587 b","Kepler-588 b","Kepler-589 b","Kepler-589 c","Kepler-59 b","Kepler-59 c","Kepler-590 b","Kepler-591 b","Kepler-592 b","Kepler-593 b","Kepler-594 b","Kepler-595 b","Kepler-595 c","Kepler-596 b","Kepler-597 b","Kepler-598 b","Kepler-598 c","Kepler-599 b","Kepler-6 b","Kepler-60 b","Kepler-60 c","Kepler-60 d","Kepler-600 b","Kepler-601 b","Kepler-602 b","Kepler-603 b","Kepler-603 c","Kepler-603 d","Kepler-604 b","Kepler-605 b","Kepler-605 c","Kepler-606 b","Kepler-607 b","Kepler-607 c","Kepler-608 b","Kepler-609 b","Kepler-61 b","Kepler-610 b","Kepler-610 c","Kepler-611 b","Kepler-612 b","Kepler-613 b","Kepler-614 b","Kepler-615 b","Kepler-616 b","Kepler-616 c","Kepler-616 d","Kepler-617 b","Kepler-618 b","Kepler-619 b","Kepler-619 c","Kepler-619 d","Kepler-62 b","Kepler-62 c","Kepler-62 d","Kepler-62 e","Kepler-62 f","Kepler-620 b","Kepler-621 b","Kepler-622 b","Kepler-623 b","Kepler-624 b","Kepler-625 b","Kepler-625 c","Kepler-626 b","Kepler-627 b","Kepler-629 b","Kepler-63 b","Kepler-630 b","Kepler-631 b","Kepler-632 b","Kepler-633 b","Kepler-633 c","Kepler-634 b","Kepler-635 b","Kepler-636 b","Kepler-637 b","Kepler-638 b","Kepler-639 b","Kepler-640 b","Kepler-641 b","Kepler-642 b","Kepler-643 b","Kepler-644 b","Kepler-645 b","Kepler-646 b","Kepler-647 b","Kepler-647 c","Kepler-648 b","Kepler-649 b","Kepler-65 b","Kepler-65 c","Kepler-65 d","Kepler-65 e","Kepler-650 b","Kepler-651 b","Kepler-652 b","Kepler-653 b","Kepler-653 c","Kepler-654 b","Kepler-655 b","Kepler-656 b","Kepler-656 c","Kepler-657 b","Kepler-658 b","Kepler-659 b","Kepler-66 b","Kepler-660 b","Kepler-661 b","Kepler-662 b","Kepler-663 b","Kepler-664 b","Kepler-665 b","Kepler-666 b","Kepler-667 b","Kepler-668 b","Kepler-669 b","Kepler-67 b","Kepler-670 b","Kepler-671 b","Kepler-672 b","Kepler-673 b","Kepler-674 b","Kepler-675 b","Kepler-676 b","Kepler-677 b","Kepler-678 b","Kepler-679 b","Kepler-68 b","Kepler-68 c","Kepler-68 d","Kepler-68 e","Kepler-680 b","Kepler-681 b","Kepler-682 b","Kepler-683 b","Kepler-684 b","Kepler-685 b","Kepler-686 b","Kepler-687 b","Kepler-688 b","Kepler-689 b","Kepler-69 b","Kepler-69 c","Kepler-690 b","Kepler-691 b","Kepler-692 b","Kepler-693 b","Kepler-694 b","Kepler-695 b","Kepler-696 b","Kepler-697 b","Kepler-698 b","Kepler-7 b","Kepler-700 b","Kepler-701 b","Kepler-702 b","Kepler-703 b","Kepler-704 b","Kepler-705 b","Kepler-707 b","Kepler-708 b","Kepler-709 b","Kepler-710 b","Kepler-711 b","Kepler-712 b","Kepler-712 c","Kepler-713 b","Kepler-714 b","Kepler-715 b","Kepler-716 b","Kepler-716 c","Kepler-717 b","Kepler-718 b","Kepler-719 b","Kepler-720 b","Kepler-721 b","Kepler-722 b","Kepler-722 c","Kepler-723 b","Kepler-724 b","Kepler-725 b","Kepler-726 b","Kepler-727 b","Kepler-728 b","Kepler-729 b","Kepler-730 b","Kepler-730 c","Kepler-731 b","Kepler-732 b","Kepler-732 c","Kepler-733 b","Kepler-734 b","Kepler-735 b","Kepler-736 b","Kepler-737 b","Kepler-738 b","Kepler-739 b","Kepler-74 b","Kepler-740 b","Kepler-741 b","Kepler-742 b","Kepler-743 b","Kepler-744 b","Kepler-745 b","Kepler-746 b","Kepler-747 b","Kepler-748 b","Kepler-749 b","Kepler-75 b","Kepler-750 b","Kepler-750 c","Kepler-751 b","Kepler-752 b","Kepler-753 b","Kepler-754 b","Kepler-755 b","Kepler-755 c","Kepler-756 b","Kepler-757 b","Kepler-758 b","Kepler-758 c","Kepler-758 d","Kepler-758 e","Kepler-759 b","Kepler-76 b","Kepler-760 b","Kepler-760 c","Kepler-761 b","Kepler-762 b","Kepler-763 b","Kepler-763 c","Kepler-763 d","Kepler-764 b","Kepler-765 b","Kepler-766 b","Kepler-767 b","Kepler-768 b","Kepler-769 b","Kepler-769 c","Kepler-77 b","Kepler-770 b","Kepler-770 c","Kepler-770 d","Kepler-771 b","Kepler-772 b","Kepler-773 b","Kepler-774 b","Kepler-775 b","Kepler-776 b","Kepler-777 b","Kepler-778 b","Kepler-779 b","Kepler-78 b","Kepler-780 b","Kepler-781 b","Kepler-782 b","Kepler-783 b","Kepler-783 c","Kepler-784 b","Kepler-784 c","Kepler-785 b","Kepler-786 b","Kepler-787 b","Kepler-788 b","Kepler-789 b","Kepler-79 b","Kepler-79 c","Kepler-79 d","Kepler-79 e","Kepler-790 b","Kepler-791 b","Kepler-792 b","Kepler-793 b","Kepler-794 b","Kepler-795 b","Kepler-796 b","Kepler-797 b","Kepler-798 b","Kepler-799 b","Kepler-799 c","Kepler-8 b","Kepler-80 b","Kepler-80 c","Kepler-80 d","Kepler-80 e","Kepler-80 f","Kepler-80 g","Kepler-800 b","Kepler-801 b","Kepler-802 b","Kepler-803 b","Kepler-804 b","Kepler-804 c","Kepler-805 b","Kepler-806 b","Kepler-808 b","Kepler-809 b","Kepler-81 b","Kepler-81 c","Kepler-81 d","Kepler-810 b","Kepler-811 b","Kepler-812 b","Kepler-813 b","Kepler-814 b","Kepler-815 b","Kepler-816 b","Kepler-817 b","Kepler-818 b","Kepler-819 b","Kepler-82 b","Kepler-82 c","Kepler-82 d","Kepler-82 e","Kepler-82 f","Kepler-820 b","Kepler-821 b","Kepler-822 b","Kepler-823 b","Kepler-824 b","Kepler-825 b","Kepler-825 c","Kepler-826 b","Kepler-827 b","Kepler-828 b","Kepler-829 b","Kepler-83 b","Kepler-83 c","Kepler-83 d","Kepler-830 b","Kepler-831 b","Kepler-832 b","Kepler-833 b","Kepler-834 b","Kepler-835 b","Kepler-836 b","Kepler-837 b","Kepler-838 b","Kepler-839 b","Kepler-84 b","Kepler-84 c","Kepler-84 d","Kepler-84 e","Kepler-84 f","Kepler-841 b","Kepler-842 b","Kepler-843 b","Kepler-844 b","Kepler-845 b","Kepler-846 b","Kepler-847 b","Kepler-848 b","Kepler-849 b","Kepler-85 b","Kepler-85 c","Kepler-85 d","Kepler-85 e","Kepler-850 b","Kepler-851 b","Kepler-852 b","Kepler-853 b","Kepler-855 b","Kepler-856 b","Kepler-857 b","Kepler-858 b","Kepler-859 b","Kepler-860 b","Kepler-861 b","Kepler-862 b","Kepler-863 b","Kepler-864 b","Kepler-864 c","Kepler-865 b","Kepler-865 c","Kepler-866 b","Kepler-867 b","Kepler-868 b","Kepler-869 b","Kepler-87 b","Kepler-87 c","Kepler-870 b","Kepler-871 b","Kepler-872 b","Kepler-873 b","Kepler-874 b","Kepler-875 b","Kepler-876 b","Kepler-877 b","Kepler-878 b","Kepler-879 b","Kepler-88 d","Kepler-880 b","Kepler-880 c","Kepler-881 b","Kepler-882 b","Kepler-883 b","Kepler-884 b","Kepler-885 b","Kepler-886 b","Kepler-887 b","Kepler-887 c","Kepler-888 b","Kepler-889 b","Kepler-890 b","Kepler-891 b","Kepler-892 b","Kepler-893 b","Kepler-894 b","Kepler-895 b","Kepler-896 b","Kepler-896 c","Kepler-897 b","Kepler-898 b","Kepler-899 b","Kepler-9 b","Kepler-9 c","Kepler-9 d","Kepler-90 i","Kepler-900 b","Kepler-901 b","Kepler-902 b","Kepler-903 b","Kepler-903 c","Kepler-904 b","Kepler-905 b","Kepler-906 b","Kepler-907 b","Kepler-908 b","Kepler-909 b","Kepler-91 b","Kepler-910 b","Kepler-911 b","Kepler-912 b","Kepler-913 b","Kepler-913 c","Kepler-914 b","Kepler-915 b","Kepler-916 b","Kepler-917 b","Kepler-918 b","Kepler-919 b","Kepler-92 b","Kepler-92 c","Kepler-92 d","Kepler-920 b","Kepler-920 c","Kepler-921 b","Kepler-922 b","Kepler-923 b","Kepler-924 b","Kepler-925 b","Kepler-926 b","Kepler-927 b","Kepler-928 b","Kepler-929 b","Kepler-93 b","Kepler-93 c","Kepler-930 b","Kepler-931 b","Kepler-932 b","Kepler-933 b","Kepler-934 b","Kepler-935 b","Kepler-936 b","Kepler-937 b","Kepler-937 c","Kepler-938 b","Kepler-939 b","Kepler-94 b","Kepler-94 c","Kepler-940 b","Kepler-941 b","Kepler-942 b","Kepler-943 b","Kepler-944 b","Kepler-945 b","Kepler-946 b","Kepler-947 b","Kepler-948 b","Kepler-949 b","Kepler-949 c","Kepler-95 b","Kepler-950 b","Kepler-951 b","Kepler-952 b","Kepler-953 b","Kepler-953 c","Kepler-954 b","Kepler-955 b","Kepler-956 b","TOI-1052 c","Kepler-957 b","Kepler-958 b","Kepler-959 b","Kepler-96 b","Kepler-960 b","Kepler-961 b","Kepler-962 b","Kepler-963 b","Kepler-964 b","Kepler-965 b","Kepler-966 b","Kepler-967 b","Kepler-967 c","Kepler-968 b","Kepler-968 c","Kepler-969 b","Kepler-969 c","Kepler-97 b","Kepler-97 c","Kepler-970 b","Kepler-971 b","Kepler-972 b","Kepler-973 b","Kepler-974 b","Kepler-975 b","Kepler-975 c","Kepler-976 b","Kepler-977 b","Kepler-978 b","Kepler-979 b","Kepler-98 b","Kepler-980 b","Kepler-981 b","Kepler-982 b","Kepler-983 b","Kepler-984 b","Kepler-985 b","Kepler-986 b","Kepler-987 b","Kepler-988 b","Kepler-989 b","Kepler-99 b","Kepler-990 b","Kepler-990 c","Kepler-991 b","Kepler-992 b","Kepler-993 b","Kepler-994 b","Kepler-995 b","Kepler-996 b","Kepler-997 b","Kepler-998 b","Kepler-999 b","L 168-9 b","L 363-38 b","L 98-59 b","L 98-59 c","L 98-59 d","L 98-59 e","LHS 1140 b","LHS 1140 c","LHS 1478 b","LHS 1678 b","LHS 1678 c","LHS 1678 d","LHS 1815 b","LHS 3154 b","LHS 3844 b","LHS 475 b","LP 714-47 b","LP 791-18 b","LP 791-18 c","LP 791-18 d","LP 890-9 b","LP 890-9 c","LSPM J2116+0234 b","LTT 1445 A b","LTT 1445 A c","LTT 3780 b","LTT 3780 c","LTT 9779 b","LkCa 15 b","LkCa 15 c","Lupus-TR-3 b","MASCARA-1 b","MASCARA-4 b","MOA-2007-BLG-192L b","MOA-2007-BLG-400L b","MOA-2008-BLG-310L b","MOA-2008-BLG-379L b","MOA-2009-BLG-266L b","MOA-2009-BLG-319L b","MOA-2009-BLG-387L b","MOA-2010-BLG-073L b","MOA-2010-BLG-117L b","MOA-2010-BLG-328L b","MOA-2010-BLG-353L b","MOA-2010-BLG-477L b","MOA-2011-BLG-028L b","MOA-2011-BLG-262L b","MOA-2011-BLG-291L b","MOA-2011-BLG-293L b","MOA-2011-BLG-322L b","MOA-2012-BLG-006L b","MOA-2012-BLG-505L b","MOA-2013-BLG-220L b","MOA-2013-BLG-605L b","MOA-2015-BLG-337L b","MOA-2016-BLG-227L b","MOA-2016-BLG-319L b","MOA-2019-BLG-008L b","MOA-2020-BLG-135L b","MOA-2020-BLG-208L b","MOA-2022-BLG-249L b","MOA-2022-BLG-563L b","MOA-bin-1L b","MOA-bin-29 b","MWC 758 c","NGC 2682 Sand 1429 b","NGC 2682 Sand 364 b","NGC 2682 Sand 978 b","NGC 2682 YBP 1194 b","NGC 2682 YBP 1514 b","NGC 2682 YBP 401 b","NGTS-1 b","NGTS-10 b","NGTS-11 b","NGTS-12 b","NGTS-13 b","NGTS-14 A b","NGTS-15 b","NGTS-16 b","NGTS-17 b","NGTS-18 b","NGTS-2 b","NGTS-20 b","NGTS-21 b","NGTS-23 b","NGTS-24 b","NGTS-25 b","NGTS-26 b","NGTS-27 b","NGTS-3 A b","NGTS-30 b","NGTS-4 b","NGTS-5 b","NGTS-6 b","NGTS-8 b","NGTS-9 b","NN Ser c","NN Ser d","NSVS 14256825 b","NY Vir b","NY Vir c","OGLE-2003-BLG-235L b","OGLE-2005-BLG-071L b","OGLE-2005-BLG-169L b","OGLE-2005-BLG-390L b","OGLE-2006-BLG-109L b","OGLE-2006-BLG-109L c","OGLE-2006-BLG-284L A b","OGLE-2007-BLG-349L AB c","OGLE-2007-BLG-368L b","OGLE-2008-BLG-092L b","OGLE-2008-BLG-355L b","OGLE-2011-BLG-0173L b","OGLE-2011-BLG-0251L b","OGLE-2011-BLG-0265L b","OGLE-2012-BLG-0026L b","OGLE-2012-BLG-0026L c","OGLE-2012-BLG-0358L b","OGLE-2012-BLG-0406L b","OGLE-2012-BLG-0563L b","OGLE-2012-BLG-0724L b","OGLE-2012-BLG-0838L b","OGLE-2012-BLG-0950L b","OGLE-2013-BLG-0102L b","OGLE-2013-BLG-0132L b","OGLE-2013-BLG-0341L B b","OGLE-2013-BLG-0911L b","OGLE-2013-BLG-1721L b","OGLE-2013-BLG-1761L b","OGLE-2014-BLG-0124L b","OGLE-2014-BLG-0221L b","OGLE-2014-BLG-0319L b","OGLE-2014-BLG-0676L b","OGLE-2014-BLG-1722L b","OGLE-2014-BLG-1722L c","OGLE-2014-BLG-1760L b","OGLE-2015-BLG-0051L b","OGLE-2015-BLG-0954L b","OGLE-2015-BLG-0966L b","OGLE-2015-BLG-1649L b","OGLE-2015-BLG-1670L b","OGLE-2015-BLG-1771L b","OGLE-2016-BLG-0263L b","OGLE-2016-BLG-0613L AB b","OGLE-2016-BLG-1067L b","OGLE-2016-BLG-1093L b","OGLE-2016-BLG-1190L b","OGLE-2016-BLG-1195L b","OGLE-2017-BLG-0173L b","OGLE-2017-BLG-0373L b","OGLE-2017-BLG-0406L b","OGLE-2017-BLG-0448L b","OGLE-2017-BLG-0482L b","OGLE-2017-BLG-0604L b","OGLE-2017-BLG-0640L b","OGLE-2017-BLG-1049L b","OGLE-2017-BLG-1099L b","OGLE-2017-BLG-1237L b","OGLE-2017-BLG-1275L b","OGLE-2017-BLG-1375L b","OGLE-2017-BLG-1434L b","OGLE-2017-BLG-1522L b","OGLE-2017-BLG-1691L b","OGLE-2017-BLG-1806L b","OGLE-2018-BLG-0298L b","OGLE-2018-BLG-0383L b","OGLE-2018-BLG-0506L b","OGLE-2018-BLG-0516L b","OGLE-2018-BLG-0532L b","OGLE-2018-BLG-0567L b","OGLE-2018-BLG-0596L b","OGLE-2018-BLG-0677L b","OGLE-2018-BLG-0740L b","OGLE-2018-BLG-0799L b","OGLE-2018-BLG-0932L b","OGLE-2018-BLG-0962L b","OGLE-2018-BLG-0977L b","OGLE-2018-BLG-1011L b","OGLE-2018-BLG-1011L c","OGLE-2018-BLG-1119L b","OGLE-2018-BLG-1126L b","OGLE-2018-BLG-1185L b","OGLE-2018-BLG-1212L b","OGLE-2018-BLG-1269L b","OGLE-2018-BLG-1367L b","OGLE-2018-BLG-1428L b","OGLE-2018-BLG-1647L b","OGLE-2018-BLG-1700L b","OGLE-2019-BLG-0249L b","OGLE-2019-BLG-0299L b","OGLE-2019-BLG-0304L b","OGLE-2019-BLG-0362L b","OGLE-2019-BLG-0468L b","OGLE-2019-BLG-0468L c","OGLE-2019-BLG-0679L b","OGLE-2019-BLG-0954L b","OGLE-2019-BLG-0960L b","OGLE-2019-BLG-1053L b","OGLE-2019-BLG-1180L b","OGLE-2019-BLG-1470L AB c","OGLE-2019-BLG-1492L b","OGLE-2023-BLG-0836L b","OGLE-TR-10 b","OGLE-TR-111 b","OGLE-TR-113 b","OGLE-TR-132 b","OGLE-TR-182 b","OGLE-TR-211 b","OGLE-TR-56 b","OGLE2-TR-L9 b","Oph 11 b","PDS 70 b","PDS 70 c","PH1 b","PH2 b","POTS-1 b","PSR B0329+54 b","PSR B1257+12 b","PSR B1257+12 c","PSR B1257+12 d","PSR J1719-1438 b","PSR J2322-2650 b","PZ Tel b","Pr0201 b","Pr0211 b","Pr0211 c","Proxima Cen b","Qatar-1 b","Qatar-10 b","Qatar-2 b","Qatar-3 b","Qatar-4 b","Qatar-5 b","Qatar-6 b","Qatar-7 b","Qatar-8 b","Qatar-9 b","ROXs 12 b","ROXs 42 B b","RR Cae b","Ross 128 b","Ross 458 c","Ross 508 b","SR 12 AB c","SWEEPS-11 b","SWEEPS-4 b","TAP 26 b","TCP J05074264+2447555 b","TIC 139270665 b","TIC 139270665 c","TIC 172900988 b","TIC 237913194 b","TIC 241249530 b","TIC 257060897 b","TIC 279401253 b","TIC 279401253 c","TIC 365102760 b","TIC 393818343 b","TIC 46432937 b","TIC 4672985 b","TOI-1052 b","TOI-1062 b","TOI-1062 c","TOI-1064 b","TOI-1064 c","TOI-1075 b","TOI-1107 b","TOI-1130 b","TOI-1130 c","TOI-1135 b","TOI-1136 b","TOI-1136 c","TOI-1136 d","TOI-1136 e","TOI-1136 f","TOI-1136 g","TOI-1173 b","TOI-1174 b","TOI-1180 b","TOI-1181 b","TOI-1184 b","TOI-1194 b","TOI-1199 b","TOI-1201 b","TOI-122 b","TOI-1221 b","TOI-1224 b","TOI-1224 c","TOI-1227 b","TOI-1231 b","TOI-1235 b","TOI-1244 b","TOI-1246 b","TOI-1246 c","TOI-1246 d","TOI-1246 e","TOI-1248 b","TOI-1249 b","TOI-125 b","TOI-125 c","TOI-125 d","TOI-1259 A b","TOI-1260 b","TOI-1260 c","TOI-1260 d","TOI-1266 b","TOI-1266 c","TOI-1268 b","TOI-1269 b","TOI-1272 b","TOI-1272 c","TOI-1273 b","TOI-1278 b","TOI-1279 b","TOI-128.01","TOI-1288 b","TOI-1288 c","TOI-1294 b","TOI-1294 c","TOI-1296 b","TOI-1298 b","TOI-132 b","TOI-1333 b","TOI-1338 b","TOI-1338 c","TOI-1347 b","TOI-1347 c","TOI-1386 b","TOI-1386 c","TOI-139 b","TOI-1408 b","TOI-1408 c","TOI-1410 c","TOI-1410.01","TOI-1411 b","TOI-1416 b","TOI-1420 b","TOI-1422 b","TOI-1431 b","TOI-1437 b","TOI-1439 b","TOI-1442 b","TOI-1443 b","TOI-1444 b","TOI-1448 b","TOI-1450 A b","TOI-1450 A c","TOI-1451 b","TOI-1452 b","TOI-1467 b","TOI-1468 b","TOI-1468 c","TOI-1470 b","TOI-1470 c","TOI-1472 b","TOI-1478 b","TOI-150.01","TOI-1516 b","TOI-1518 b","TOI-157 b","TOI-1601 b","TOI-163 b","TOI-1634 b","TOI-1634 c","TOI-1669 b","TOI-1669 c","TOI-1670 b","TOI-1670 c","TOI-1680 b","TOI-1683.01","TOI-1685 b","TOI-169 b","TOI-1691 b","TOI-1693 b","TOI-1694 b","TOI-1694 c","TOI-1695 b","TOI-1696 b","TOI-1710 b","TOI-172 b","TOI-1723 b","TOI-1728 b","TOI-1736 b","TOI-1736 c","TOI-1739 b","TOI-1742 b","TOI-1749 b","TOI-1749 c","TOI-1749 d","TOI-1751 b","TOI-1753 b","TOI-1758 b","TOI-1759 b","TOI-1775 b","TOI-1776 b","TOI-178 b","TOI-178 c","TOI-178 d","TOI-178 e","TOI-178 f","TOI-178 g","TOI-1789 b","TOI-1794 b","TOI-1798.01","TOI-1798.02","TOI-1799 b","TOI-1801 b","TOI-1806.01","TOI-1807 b","TOI-181 b","TOI-1811 b","TOI-1820 b","TOI-1823 b","TOI-1824 b","TOI-1836 b","TOI-1836 c","TOI-1842 b","TOI-1853 b","TOI-1855 b","TOI-1859 b","TOI-1860 b","TOI-1898 b","TOI-1899 b","TOI-1937 A b","TOI-198 b","TOI-199 b","TOI-199 c","TOI-1994 b","TOI-2000 b","TOI-2000 c","TOI-201 b","TOI-2010 b","TOI-2015 b","TOI-2018 b","TOI-2019 b","TOI-2025 b","TOI-2046 b","TOI-2048 b","TOI-206 b","TOI-2068 b","TOI-2076 b","TOI-2076 c","TOI-2076 d","TOI-2081 b","TOI-2084 b","TOI-2088 b","TOI-2095 b","TOI-2095 c","TOI-2096 b","TOI-2096 c","TOI-2107 b","TOI-2109 b","TOI-2120 b","TOI-2128 b","TOI-2134 b","TOI-2134 c","TOI-2136 b","TOI-2141 b","TOI-2145 b","TOI-2152 A b","TOI-2154 b","TOI-2158 b","TOI-216.01","TOI-216.02","TOI-2180 b","TOI-2184 b","TOI-2193 A b","TOI-2194 b","TOI-2196 b","TOI-220 b","TOI-2202 b","TOI-2202 c","TOI-2207 b","TOI-2236 b","TOI-2257 b","TOI-2260 b","TOI-2266 b","TOI-2285 b","TOI-2337 b","TOI-2338 b","TOI-2364 b","TOI-2368 b","TOI-237 b","TOI-2373 b","TOI-2374 b","TOI-2379 b","TOI-238 b","TOI-238 c","TOI-2384 b","TOI-2406 b","TOI-2411 b","TOI-2416 b","TOI-2421 b","TOI-2427 b","TOI-244 b","TOI-2443 b","TOI-2445 b","TOI-2447 b","TOI-2459 b","TOI-2497 b","TOI-2498 b","TOI-251 b","TOI-2524 b","TOI-2525 b","TOI-2525 c","TOI-2529 b","TOI-2545 b","TOI-2567 b","TOI-257 b","TOI-2570 b","TOI-2583 A b","TOI-2587 A b","TOI-2589 b","TOI-260 b","TOI-261.01","TOI-262 b","TOI-2641 b","TOI-2669 b","TOI-269 b","TOI-270 b","TOI-270 c","TOI-270 d","TOI-2714 b","TOI-277 b","TOI-2796 b","TOI-2803 A b","TOI-2818 b","TOI-2842 b","TOI-286 b","TOI-286 c","TOI-2981 b","TOI-3023 b","TOI-3071 b","TOI-3082 b","TOI-3235 b","TOI-3261 b","TOI-329 b","TOI-332 b","TOI-3321 b","TOI-3331 A b","TOI-3353.01","TOI-3362 b","TOI-3364 b","TOI-3568 b","TOI-3629 b","TOI-3688 A b","TOI-3693 b","TOI-3714 b","TOI-3757 b","TOI-3785 b","TOI-3807 b","TOI-3819 b","TOI-3884 b","TOI-3894 b","TOI-3912 b","TOI-3919 b","TOI-3976 A b","TOI-3984 A b","TOI-4010 b","TOI-4010 c","TOI-4010 d","TOI-4010 e","TOI-406.01","TOI-4087 b","TOI-411 b","TOI-411 c","TOI-4127 b","TOI-4137 b","TOI-4145 A b","TOI-4153 b","TOI-4184 b","TOI-4201 b","TOI-421 b","TOI-421 c","TOI-4308 b","TOI-431 b","TOI-431 c","TOI-431 d","TOI-4329 b","TOI-4336 A b","TOI-4342 b","TOI-4342 c","TOI-4377 b","TOI-4379 b","TOI-4406 b","TOI-4438 b","TOI-444 b","TOI-4443.01","TOI-4463 A b","TOI-4479 b","TOI-4495.01","TOI-451 b","TOI-451 c","TOI-451 d","TOI-4515 b","TOI-4527.01","TOI-4551 b","TOI-4559 b","TOI-4562 b","TOI-4562 c","TOI-4582 b","TOI-4600 b","TOI-4600 c","TOI-4602.01","TOI-4603 b","TOI-4633 c","TOI-4641 b","TOI-470 b","TOI-4791 b","TOI-480 b","TOI-481 b","TOI-4860 b","TOI-4914 b","TOI-500 b","TOI-500 c","TOI-500 d","TOI-500 e","TOI-5076 b","TOI-5082.01","TOI-5126 b","TOI-5126 c","TOI-5153 b","TOI-5174 b","TOI-519 b","TOI-5205 b","TOI-5218 b","TOI-5232 b","TOI-5238 b","TOI-5293 A b","TOI-530 b","TOI-5301 b","TOI-532 b","TOI-5344 b","TOI-5388.01","TOI-5398 b","TOI-5398 c","TOI-540 b","TOI-544 b","TOI-544 c","TOI-5542 b","TOI-558 b","TOI-559 b","TOI-561 b","TOI-561 c","TOI-561 d","TOI-561 e","TOI-5616 b","TOI-5634 A b","TOI-564 b","TOI-5678 b","TOI-5704 b","TOI-5720 b","TOI-5799 b","TOI-5803 b","TOI-6008 b","TOI-6029 b","TOI-6034 b","TOI-6086 b","TOI-615 b","TOI-620 b","TOI-622 b","TOI-6255 b","TOI-628 b","TOI-640 b","TOI-654.01","TOI-663 b","TOI-663 c","TOI-663 d","TOI-669 b","TOI-672 b","TOI-674 b","TOI-677 b","TOI-700 b","TOI-700 c","TOI-700 d","TOI-700 e","TOI-712 b","TOI-712 c","TOI-712 d","TOI-715 b","TOI-733 b","TOI-757 b","TOI-762 A b","TOI-763 b","TOI-763 c","TOI-771 b","TOI-776 b","TOI-776 c","TOI-778 b","TOI-782 b","TOI-784 b","TOI-813 b","TOI-815 b","TOI-815 c","TOI-824 b","TOI-833 b","TOI-836 b","TOI-836 c","TOI-837 b","TOI-849 b","TOI-858 B b","TOI-871 b","TOI-880.02","TOI-892 b","TOI-904 b","TOI-904 c","TOI-905 b","TOI-907.01","TOI-908 b","TOI-913 b","TOI-942 b","TOI-942 c","TOI-954 b","TOI-969 b","TOI-969 c","TRAPPIST-1 b","TRAPPIST-1 c","TRAPPIST-1 d","TRAPPIST-1 e","TRAPPIST-1 f","TRAPPIST-1 g","TRAPPIST-1 h","TYC 0434-04538-1 b","TYC 1422-614-1 b","TYC 1422-614-1 c","TYC 2187-512-1 b","TYC 3318-01333-1 b","TYC 3667-1280-1 b","TYC 4282-00605-1 b","TYC 8998-760-1 b","TYC 8998-760-1 c","Teegarden's Star b","Teegarden's Star c","Teegarden's Star d","TrES-1 b","TrES-2 b","TrES-3 b","TrES-4 b","TrES-5 b","UCAC3 113-933 b","UCAC4 328-061594 b","UKIRT-2017-BLG-001L b","USco CTIO 108 b","USco1556 b","USco1621 b","UZ For b","UZ For c","V0391 Peg b","V1298 Tau b","V1298 Tau c","V1298 Tau d","V1298 Tau e","V830 Tau b","VHS J125601.92-125723.9 b","WASP-1 b","WASP-10 b","WASP-100 b","WASP-101 b","WASP-103 b","WASP-104 b","WASP-105 b","WASP-106 b","WASP-107 b","WASP-107 c","WASP-11 b","WASP-110 b","WASP-113 b","WASP-114 b","WASP-117 b","WASP-118 b","WASP-119 b","WASP-12 b","WASP-120 b","WASP-121 b","WASP-123 b","WASP-124 b","WASP-126 b","WASP-126 c","WASP-127 b","WASP-129 b","WASP-13 b","WASP-130 b","WASP-131 b","WASP-132 b","WASP-132 c","WASP-133 b","WASP-135 b","WASP-136 b","WASP-138 b","WASP-139 b","WASP-14 b","WASP-140 b","WASP-141 b","WASP-142 b","WASP-144 b","WASP-145 A b","WASP-147 b","WASP-148 b","WASP-148 c","WASP-15 b","WASP-150 b","WASP-151 b","WASP-153 b","WASP-156 b","WASP-157 b","WASP-158 b","WASP-159 b","WASP-16 b","WASP-160 B b","WASP-161 b","WASP-162 b","WASP-163 b","WASP-164 b","WASP-165 b","WASP-166 b","WASP-167 b","WASP-168 b","WASP-169 b","WASP-17 b","WASP-170 b","WASP-171 b","WASP-172 b","WASP-173 A b","WASP-174 b","WASP-175 b","WASP-176 b","WASP-177 b","WASP-178 b","WASP-18 b","WASP-18 c","WASP-180 A b","WASP-181 b","WASP-182 b","WASP-183 b","WASP-184 b","WASP-185 b","WASP-186 b","WASP-187 b","WASP-189 b","WASP-19 b","WASP-190 b","WASP-192 b","WASP-193 b","WASP-2 b","WASP-20 b","WASP-21 b","WASP-22 b","WASP-23 b","WASP-24 b","WASP-25 b","WASP-26 b","WASP-28 b","WASP-29 b","WASP-3 b","WASP-31 b","WASP-32 b","WASP-33 b","WASP-34 b","WASP-35 b","WASP-36 b","WASP-37 b","WASP-38 b","WASP-39 b","WASP-4 b","WASP-41 b","WASP-41 c","WASP-42 b","WASP-43 b","WASP-44 b","WASP-45 b","WASP-46 b","WASP-47 b","WASP-47 c","WASP-47 d","WASP-47 e","WASP-48 b","WASP-49 b","WASP-5 b","WASP-50 b","WASP-52 b","WASP-53 b","WASP-53 c","WASP-54 b","WASP-55 b","WASP-56 b","WASP-57 b","WASP-58 b","WASP-59 b","WASP-6 b","WASP-60 b","WASP-61 b","WASP-62 b","WASP-63 b","WASP-64 b","WASP-65 b","WASP-66 b","WASP-67 b","WASP-68 b","WASP-69 b","WASP-7 b","WASP-70 A b","WASP-71 b","WASP-72 b","WASP-73 b","WASP-74 b","WASP-75 b","WASP-76 b","WASP-77 A b","WASP-78 b","WASP-79 b","WASP-8 b","WASP-8 c","WASP-80 b","WASP-81 b","WASP-82 b","WASP-83 b","WASP-84 b","WASP-84 c","WASP-85 A b","WASP-87 b","WASP-88 b","WASP-89 b","WASP-90 b","WASP-91 b","WASP-92 b","WASP-93 b","WASP-94 A b","WASP-94 B b","WASP-95 b","WASP-96 b","WASP-97 b","WASP-98 b","WASP-99 b","WD 0806-661 b","WD 1856+534 b","WISEP J121756.91+162640.2 A b","WTS-1 b","WTS-2 b","Wendelstein-1 b","Wendelstein-2 b","Wolf 1061 b","Wolf 1061 c","Wolf 1061 d","Wolf 1069 b","Wolf 327 b","Wolf 503 b","XO-1 b","XO-2 N b","XO-2 S b","XO-2 S c","XO-3 b","XO-4 b","XO-5 b","XO-6 b","XO-7 b","YSES 2 b","YZ Cet b","YZ Cet c","YZ Cet d","alf Ari b","alf Tau b","b Cen AB b","bet Cnc b","bet Pic b","bet Pic c","bet UMi b","eps CrB b","eps Eri b","eps Ind A b","eps Tau b","gam Cep b","gam Lib b","gam Lib c","gam Psc b","gam1 Leo b","iot Dra b","iot Dra c","kap And b","kap CrB b","mu Leo b","nu Oct A b","nu Oph b","nu Oph c","ome Ser b","omi CrB b","omi UMa b","pi Men c","pi Men d","psi1 Dra B b","rho CrB b","rho CrB c","rho CrB d","rho CrB e","tau Boo b","tau Cet e","tau Cet f","tau Cet g","tau Cet h","tau Gem b","ups And b","ups And c","ups And d","ups Leo b","xi Aql b","Earth"];class ld{constructor(e,t){this.id=e;const{x:r,y:i,z:s,color:a}=t;this.x=r,this.y=i,this.z=s,this.color=a;const o=new ma(1,32,32),l=new da({color:a});this.sprite=new Xt(o,l);const u=10;this.sprite.position.set(u*r,u*i,u*s),this.sprite.type="star",this.sprite.starId=e}}class ud{constructor(e,t){this.id=e,this.name=t,this.edges=[]}addEdge(e,t){this.edges.push([e,t])}destroy(){this.id=null,this.name=null,this.edges.splice(0,this.edges.length)}}class cd{constructor(e){this.n=e,this.time=0,this.p=[],this.sz=[],this.st=[];for(let t=0;t<e;++t)this.p.push(t),this.sz.push(1)}find(e){return e!=this.p[e]&&(this.p[e]=this.find(this.p[e])),this.p[e]}join(e,t){if(e=this.find(e),t=this.find(t),e==t)return e;if(this.sz[e]<this.sz[t]){const r=e;e=t,t=r}return this.p[t]=e,this.sz[e]+=this.sz[t],this.st.push([e,t]),++this.time,e}rollback(e){for(;this.time>e;){const[t,r]=this.st[this.time-1];this.sz[t]-=this.sz[r],this.p[r]=r,--this.time}}}class pd{constructor(e){this.constellations=[],this.nStars=e,this.starC=[];for(let t=0;t<e;++t)this.starC.push(null);this.dsu=new cd(e)}addEdge(e,t){if(e==t)return;let r=null;const i=this.dsu.find(e),s=this.dsu.find(t),a=this.dsu.join(e,t);if(this.starC[a]===null){const o=this.constellations.length;r=new ud(o,`Constellation ${o}`),this.starC[a]=r,this.constellations.push(r)}else{r=this.starC[a];let o=null;if(this.starC[i]!=r?o=this.starC[i]:this.starC[s]!=r&&(o=this.starC[s]),o!==null){for(let l of o.edges){const[u,p]=l;r.addEdge(u,p)}this.constellations[o.id]=null,o.destroy()}}r.addEdge(e,t)}}const fl=n=>n.edges[0][0],bd=(n,e)=>{const{x:t,y:r,z:i}=e,s=(t*t+r*r+i*i)*-10;n.position.set(t/s,r/s,i/s)};class hd{constructor(e,t,r){this.constellationController=e,this.stars=t,this.camera=r;const i=document.createElement("button");i.id="menu-button",i.innerHTML="Constellations",document.body.appendChild(i),this.el=document.createElement("div"),this.el.id="menu",this.el.innerHTML=`
            <h3>Constellations</h3>
            <ul>
            </ul>
        `,document.body.appendChild(this.el),i.addEventListener("click",()=>{this.el.classList.toggle("show")})}update(){const e=this.el.querySelector("ul");e.innerHTML="",this.constellationController.constellations.forEach(t=>{if(t!==null){const r=document.createElement("li");r.textContent=t.name,r.style.cursor="pointer",r.addEventListener("click",i=>{const s=fl(t),{sprite:a}=this.stars[s];bd(this.camera,a.position)}),e.appendChild(r)}})}}const Yt=new Vh,dt=new Ht(60,window.innerWidth/window.innerHeight,.1,1e4),Ot=new Wh({antialias:!0});Ot.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ot.domElement);const mn=new Jh(dt,Ot.domElement);mn.enableRotate=!0;mn.rotateSpeed=.2;mn.enableZoom=!1;mn.enablePan=!1;mn.panSpeed=5;dt.position.x=0;dt.position.y=0;dt.position.z=.1;const Pt=[],dn=document.createElement("div");dn.id="loading-display";dn.textContent="Loading...";dn.style.display="block";document.body.appendChild(dn);let ir=null,ra=null;function na(n){return new URLSearchParams(window.location.search).get(n)}function Kl(){return ta[Math.floor(Math.random()*ta.length)]}const Ro=na("planet"),ga=od[Ro]?Ro:Kl(),dd=`${ga}.json`,fd=`https://raw.githubusercontent.com/Thiago4532/teste-teste-teste/refs/heads/main/${dd}`,Ta=[];let Lt=null;const ml=14209023,hs=new Pe,oi=new hl;fetch(fd).then(n=>n.json()).then(n=>{Pt.push(...n.map((r,i)=>new ld(i,r))),Pt.forEach(r=>Yt.add(r.sprite)),dn.style.display="none",ir=new pd(Pt.length),ra=new hd(ir,Pt,dt);const e=na("edges");e&&e.split(";").forEach(i=>{const[s,a]=i.split(",").map(d=>parseInt(d));ir.addEdge(s,a),Ta.push({u:s,v:a});const o=new yi({color:ml}),l=[new H(Pt[s].sprite.position.x,Pt[s].sprite.position.y,Pt[s].sprite.position.z),new H(Pt[a].sprite.position.x,Pt[a].sprite.position.y,Pt[a].sprite.position.z)],u=new Rt().setFromPoints(l),p=new Ka(u,o);Yt.add(p)});const t=na("names");t&&t.split(";").forEach((i,s)=>{ir.constellations[s]&&(ir.constellations[s].name=i)}),ra.update()}).catch(n=>{console.error("Error loading stars:",n),dn.textContent="Error loading stars"});const Sa=document.createElement("div");Sa.id="planet-name";Sa.textContent=`Planet: ${ga}`;document.body.appendChild(Sa);function Kd(){dt.aspect=window.innerWidth/window.innerHeight,dt.updateProjectionMatrix(),Ot.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Kd);const md=1,wo=120;function _d(n){let e=dt.fov,t=Math.max(.1,e/wo);e+=n.deltaY*.05*t,e=Math.min(wo,Math.max(md,e)),dt.fov=e,dt.updateProjectionMatrix()}function gd(n){const e=new H,t=.5*Ot.domElement.width,r=.5*Ot.domElement.height;return n.updateWorldMatrix(!0,!0),e.setFromMatrixPosition(n.matrixWorld),e.project(dt),e.x=e.x*t+t,e.y=-(e.y*r)+r,{x:e.x,y:e.y}}document.addEventListener("wheel",_d);var ct=null;function Td(n){const e=n.key;if(["1","2","3","4","5","6","7","8","9"].includes(e)){const t=parseInt(e)-1;t<sprites.length?(console.log(`Sprite ${e}:`,sprites[t]),ct!==null&&(ct.material.color.set(16777215),ct=null),sprites[t].material.color.set(16711680),ct=sprites[t]):console.log(`No sprite at index ${t}`)}}document.addEventListener("keydown",Td);const Sd=new ad(Ot.domElement,dt,Yt);Sd.addListener(n=>{if(ct!==null){const e=new yi({color:ml}),t=[new H(ct.position.x,ct.position.y,ct.position.z),new H(n.position.x,n.position.y,n.position.z)],r=new Rt().setFromPoints(t),i=new Ka(r,e);Yt.add(i),ir.addEdge(ct.starId,n.starId),Ta.push({u:ct.starId,v:n.starId}),ra.update(),Lt&&(Yt.remove(Lt),Lt=null)}ct=n});const _l=n=>{const e=Ot.domElement.getBoundingClientRect();hs.x=(n.clientX-e.left)/e.width*2-1,hs.y=-((n.clientY-e.top)/e.height)*2+1,oi.setFromCamera(hs,dt);const t=oi.intersectObjects(Yt.children);document.body.style.cursor="auto";for(let r=0;r<t.length;r++)if(t[r].object.type==="star"){document.body.style.cursor="pointer";break}if(ct!==null){const r=oi.ray.origin.clone().add(oi.ray.direction.clone().multiplyScalar(10));if(Lt){const i=[ct.position.clone(),r];Lt.geometry.setFromPoints(i)}else{const i=new yi({color:16776960}),s=[ct.position.clone(),r],a=new Rt().setFromPoints(s);Lt=new Ka(a,i),Yt.add(Lt)}}else Lt&&(Yt.remove(Lt),Lt=null)};Ot.domElement.addEventListener("mousemove",_l);Ot.domElement.addEventListener("wheel",_l);Ot.domElement.addEventListener("contextmenu",n=>{ct!==null&&(ct.material.color.set(16777215),ct=null),Lt&&(Yt.remove(Lt),Lt=null)});const va=document.createElement("div");va.id="control-box";va.innerHTML=`
    <h3>Controls</h3>
    <ul>
        <li>Scroll: Zoom in/out</li>
        <li>Click and drag: Rotate camera</li>
        <li>Left-click on star: Connect stars</li>
        <li>Right-click: Cancel connection</li>
    </ul>
    <p>Use these controls to interact with the star map.</p>
`;document.body.appendChild(va);const vi=document.createElement("div");vi.id="constellation-names-div";document.body.appendChild(vi);function vd(n){const e=new H;return dt.getWorldDirection(e),n.position.clone().sub(dt.position).dot(e)>0}const Md=()=>{if(ir!==null){vi.innerHTML="";for(let n of ir.constellations){if(n===null)continue;const e=fl(n);if(vd(Pt[e].sprite)){const t=gd(Pt[e].sprite),r=document.createElement("p");r.innerHTML=n.name,r.style.left=t.x+"px",r.style.top=t.y+"px",vi.appendChild(r)}}}},Ii=document.createElement("button");Ii.id="copy-button";Ii.textContent="Export to clipboard";document.body.appendChild(Ii);Ii.addEventListener("click",()=>{const n=new URL(window.location.href);n.searchParams.set("planet",ga);const e=Ta.map(r=>`${r.u},${r.v}`).join(";");n.searchParams.set("edges",e);const t=ir.constellations.filter(r=>r!==null).map(r=>r.name).join(";");console.log("Constellation names:",t),n.searchParams.set("names",t),navigator.clipboard.writeText(n.toString()).then(()=>{alert("URL copied to clipboard!")}).catch(r=>{console.error("Failed to copy URL: ",r)})});function gl(){requestAnimationFrame(gl),mn.update(),Md(),Ot.render(Yt,dt)}gl();const Pi=document.createElement("button");Pi.id="travel-button";Pi.textContent="Travel to another planet";document.body.appendChild(Pi);const qt=document.createElement("select");qt.id="planet-dropdown";qt.style.display="none";document.body.appendChild(qt);const Cn=document.createElement("option");Cn.value="";Cn.textContent="Select your planet";Cn.hidden=!0;Cn.selected=!0;qt.appendChild(Cn);const Ma=document.createElement("option");Ma.value="random";Ma.textContent="Random Planet";qt.appendChild(Ma);ta.forEach(n=>{const e=document.createElement("option");e.value=n,e.textContent=n,qt.appendChild(e)});Pi.addEventListener("click",()=>{qt.style.display=qt.style.display==="none"?"block":"none"});qt.addEventListener("change",()=>{let n=qt.value;n==="random"&&(n=Kl());const e=new URL(window.location.href);e.searchParams.set("planet",n),window.location.href=e.toString()});
