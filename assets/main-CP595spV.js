const ts={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,al=1,Lu=2,Ic=1,Du=2,Wn=3,ai=0,tn=1,Tn=2,ri=0,es=1,ll=2,cl=3,ul=4,Iu=5,vi=100,Uu=101,Nu=102,Fu=103,Ou=104,Bu=200,zu=201,ku=202,Hu=203,Bo=204,zo=205,Gu=206,Vu=207,Wu=208,Xu=209,Yu=210,qu=211,$u=212,ju=213,Zu=214,ko=0,Ho=1,Go=2,is=3,Vo=4,Wo=5,Xo=6,Yo=7,Fa=0,Ku=1,Ju=2,oi=0,Qu=1,th=2,eh=3,Uc=4,nh=5,ih=6,sh=7,Nc=300,ss=301,rs=302,qo=303,$o=304,Br=306,jo=1e3,yi=1001,Zo=1002,gn=1003,rh=1004,Vs=1005,In=1006,qr=1007,Si=1008,Fn=1009,Fc=1010,Oc=1011,Ls=1012,Oa=1013,Ti=1014,Un=1015,Gs=1016,Ba=1017,za=1018,Ds=1020,Bc=35902,zc=35899,kc=1021,Hc=1022,Rn=1023,Is=1026,Us=1027,ka=1028,Ha=1029,Gc=1030,Ga=1031,Va=1033,yr=33776,Sr=33777,Er=33778,br=33779,Ko=35840,Jo=35841,Qo=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ua=37814,ha=37815,fa=37816,da=37817,pa=37818,ma=37819,ga=37820,_a=37821,xa=36492,va=36494,Ma=36495,ya=36283,Sa=36284,Ea=36285,ba=36286,oh=3200,ah=3201,Wa=0,lh=1,si="",Mn="srgb",os="srgb-linear",Rr="linear",Se="srgb",Ii=7680,hl=519,ch=512,uh=513,hh=514,Vc=515,fh=516,dh=517,ph=518,mh=519,fl=35044,dl=35048,pl="300 es",Nn=2e3,Cr=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const ws=Math.PI/180,Ns=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Xa(i,t){return(i%t+t)%t}function gh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _h(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function xh(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function vh(i,t=1){return t-Math.abs(Xa(i,t*2)-t)}function Mh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Eh(i,t){return i+Math.random()*(t-i)}function bh(i){return i*(.5-Math.random())}function Th(i){i!==void 0&&(ml=i);let t=ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ah(i){return i*ws}function wh(i){return i*Ns}function Rh(i){return(i&i-1)===0&&i!==0}function Ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ph(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:ws,RAD2DEG:Ns,generateUUID:Pi,clamp:ae,euclideanModulo:Xa,mapLinear:gh,inverseLerp:_h,lerp:Rs,damp:xh,pingpong:vh,smoothstep:Mh,smootherstep:yh,randInt:Sh,randFloat:Eh,randFloatSpread:bh,seededRandom:Th,degToRad:Ah,radToDeg:wh,isPowerOfTwo:Rh,ceilPowerOfTwo:Ch,floorPowerOfTwo:Ph,setQuaternionFromProperEuler:Lh,normalize:Je,denormalize:ji};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),R=Math.atan2(A,p*S);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const x=a*S;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new B,gl=new Ai;class oe{constructor(t,e,n,s,r,o,a,c,l){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],x=s[7],A=s[2],R=s[5],I=s[8];return r[0]=o*_+a*S+c*A,r[3]=o*m+a*v+c*R,r[6]=o*p+a*x+c*I,r[1]=l*_+h*S+u*A,r[4]=l*m+h*v+u*R,r[7]=l*p+h*x+u*I,r[2]=d*_+f*S+g*A,r[5]=d*m+f*v+g*R,r[8]=d*p+f*x+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new oe;function Wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){const i=Pr("canvas");return i.style.display="block",i}const _l={};function Fs(i){i in _l||(_l[i]=!0,console.warn(i))}function Ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const xl=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uh(){const i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}const ge=Uh();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Nh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=Pr("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class Ya{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zr(s[o].image)):r.push(Zr(s[o]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;const Kr=new B;class en extends Ci{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=yi,s=yi,r=In,o=Si,a=Rn,c=Fn,l=en.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Pi(),this.name="",this.source=new Ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Nc;en.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,A=(p+1)/2,R=(h+d)/4,I=(u+_)/4,F=(g+m)/4;return v>x&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=I/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=F/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=I/r,s=F/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new en(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ya(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Bh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Xs.subVectors(this.max,ps),Ni.subVectors(t.a,ps),Fi.subVectors(t.b,ps),Oi.subVectors(t.c,ps),Zn.subVectors(Fi,Ni),Kn.subVectors(Oi,Fi),ui.subVectors(Ni,Oi);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-ui.y,ui.x,0];return!Jr(e,Ni,Fi,Oi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Ni,Fi,Oi,Xs))?!1:(Ys.crossVectors(Zn,Kn),e=[Ys.x,Ys.y,Ys.z],Jr(e,Ni,Fi,Oi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new B,new B,new B,new B,new B,new B,new B,new B],Sn=new B,Ws=new jn,Ni=new B,Fi=new B,Oi=new B,Zn=new B,Kn=new B,ui=new B,ps=new B,Xs=new B,Ys=new B,hi=new B;function Jr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hi.fromArray(i,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const kh=new jn,ms=new B,Qr=new B;class us{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Qr)),this.expandByPoint(ms.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new B,to=new B,qs=new B,Jn=new B,eo=new B,$s=new B,no=new B;class zr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(to);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qs),a=Jn.dot(this.direction),c=-Jn.dot(qs),l=Jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(to).addScaledVector(qs,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){eo.subVectors(e,t),$s.subVectors(n,t),no.crossVectors(eo,$s);let o=this.direction.dot(no),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);const c=a*this.direction.dot($s.crossVectors(Jn,$s));if(c<0)return null;const l=a*this.direction.dot(eo.cross(Jn));if(l<0||c+l>o)return null;const h=-a*Jn.dot(no);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Gh)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Qn.crossVectors(n,hn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Qn.crossVectors(n,hn)),Qn.normalize(),js.crossVectors(hn,Qn),s[0]=Qn.x,s[4]=js.x,s[8]=hn.x,s[1]=Qn.y,s[5]=js.y,s[9]=hn.y,s[2]=Qn.z,s[6]=js.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],x=n[11],A=n[15],R=s[0],I=s[4],F=s[8],E=s[12],T=s[1],U=s[5],z=s[9],k=s[13],M=s[2],w=s[6],D=s[10],C=s[14],L=s[3],N=s[7],V=s[11],$=s[15];return r[0]=o*R+a*T+c*M+l*L,r[4]=o*I+a*U+c*w+l*N,r[8]=o*F+a*z+c*D+l*V,r[12]=o*E+a*k+c*C+l*$,r[1]=h*R+u*T+d*M+f*L,r[5]=h*I+u*U+d*w+f*N,r[9]=h*F+u*z+d*D+f*V,r[13]=h*E+u*k+d*C+f*$,r[2]=g*R+_*T+m*M+p*L,r[6]=g*I+_*U+m*w+p*N,r[10]=g*F+_*z+m*D+p*V,r[14]=g*E+_*k+m*C+p*$,r[3]=S*R+v*T+x*M+A*L,r[7]=S*I+v*U+x*w+A*N,r[11]=S*F+v*z+x*D+A*V,r[15]=S*E+v*k+x*C+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=e*S+n*v+s*x+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=S*I,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*I,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*I,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*I,t[4]=v*I,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*I,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*I,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*I,t[8]=x*I,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*I,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*I,t[12]=A*I,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*I,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=c*l,v=c*h,x=c*u,A=n.x,R=n.y,I=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+v)*I,s[9]=(m-S)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Nn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Nn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Cr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new B,En=new xe,Hh=new B(0,0,0),Gh=new B(1,1,1),Qn=new B,js=new B,hn=new B,Ml=new xe,yl=new Ai;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const Sl=new B,zi=new Ai,kn=new xe,Zs=new B,gs=new B,Wh=new B,Xh=new Ai,El=new B(1,0,0),bl=new B(0,1,0),Tl=new B(0,0,1),Al={type:"added"},Yh={type:"removed"},ki={type:"childadded",child:null},io={type:"childremoved",child:null};class Fe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new B,e=new Cn,n=new Ai,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new oe}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(gs,Zs,this.up):kn.lookAt(Zs,gs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yh),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new B(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new B,Hn=new B,so=new B,Gn=new B,Hi=new B,Gi=new B,wl=new B,ro=new B,oo=new B,ao=new B,lo=new be,co=new be,uo=new be;class An{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Hn.subVectors(n,e),so.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Hn),c=bn.dot(so),l=Hn.dot(Hn),h=Hn.dot(so),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return lo.setScalar(0),co.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(t,e),co.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lo,r.x),o.addScaledVector(co,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Hn.subVectors(t,e),bn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),ro.subVectors(t,n);const c=Hi.dot(ro),l=Gi.dot(ro);if(c<=0&&l<=0)return e.copy(n);oo.subVectors(t,s);const h=Hi.dot(oo),u=Gi.dot(oo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);ao.subVectors(t,r);const f=Hi.dot(ao),g=Gi.dot(ao);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Gi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return wl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(wl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Xa(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ho(o,r,t+1/3),this.g=ho(o,r,t),this.b=ho(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return ge.workingToColorSpace(je.copy(this),t),Math.round(ae(je.r*255,0,255))*65536+Math.round(ae(je.g*255,0,255))*256+Math.round(ae(je.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Mn){ge.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Ks);const n=Rs(ti.h,Ks.h,e),s=Rs(ti.s,Ks.s,e),r=Rs(ti.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new he;he.NAMES=Yc;let qh=0;class Li extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=es,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Os extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new B,Js=new it;let $h=0;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}}class qc extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $c extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jh=0;const vn=new xe,fo=new Fe,Vi=new B,fn=new jn,_s=new jn,Ve=new B;class Te extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?$c:qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(fn.min,_s.min),fn.expandByPoint(Ve),Ve.addVectors(fn.max,_s.max),fn.expandByPoint(Ve)):(fn.expandByPoint(_s.min),fn.expandByPoint(_s.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(t,l),Ve.add(Vi)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new B,c[F]=new B;const l=new B,h=new B,u=new B,d=new it,f=new it,g=new it,_=new B,m=new B;function p(F,E,T){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[F].add(_),a[E].add(_),a[T].add(_),c[F].add(m),c[E].add(m),c[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,E=S.length;F<E;++F){const T=S[F],U=T.start,z=T.count;for(let k=U,M=U+z;k<M;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const v=new B,x=new B,A=new B,R=new B;function I(F){A.fromBufferAttribute(s,F),R.copy(A);const E=a[F];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(R,E);const U=x.dot(c[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,U)}for(let F=0,E=S.length;F<E;++F){const T=S[F],U=T.start,z=T.count;for(let k=U,M=U+z;k<M;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,h=new B,u=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new xe,fi=new zr,Qs=new us,Cl=new B,tr=new B,er=new B,nr=new B,po=new B,ir=new B,Pl=new B,sr=new B;class Ne extends Fe{constructor(t=new Te,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(po.fromBufferAttribute(u,t),o?ir.addScaledVector(po,h):ir.addScaledVector(po.sub(e),h))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Qs.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Qs,Cl)===null||fi.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=v;x<A;x+=3){const R=a.getX(x),I=a.getX(x+1),F=a.getX(x+2);s=rr(this,p,t,n,l,h,u,R,I,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=rr(this,o,t,n,l,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=v;x<A;x+=3){const R=x,I=x+1,F=x+2;s=rr(this,p,t,n,l,h,u,R,I,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,x=m+2;s=rr(this,o,t,n,l,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zh(i,t,e,n,s,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ai,a),c===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,tr),i.getVertexPosition(c,er),i.getVertexPosition(l,nr);const h=Zh(i,t,e,n,tr,er,nr,Pl);if(h){const u=new B;An.getBarycoord(Pl,tr,er,nr,u),s&&(h.uv=An.getInterpolatedAttribute(s,a,c,l,u,new it)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,c,l,u,new it)),o&&(h.normal=An.getInterpolatedAttribute(o,a,c,l,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};An.getNormal(tr,er,nr,d.normal),h.face=d,h.barycoord=u}return h}class mn extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,p,S,v,x,A,R,I,F,E){const T=x/I,U=A/F,z=x/2,k=A/2,M=R/2,w=I+1,D=F+1;let C=0,L=0;const N=new B;for(let V=0;V<D;V++){const $=V*U-k;for(let K=0;K<w;K++){const rt=K*T-z;N[_]=rt*S,N[m]=$*v,N[p]=M,l.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[p]=R>0?1:-1,h.push(N.x,N.y,N.z),u.push(K/I),u.push(1-V/F),C+=1}}for(let V=0;V<F;V++)for(let $=0;$<I;$++){const K=d+$+w*V,rt=d+$+w*(V+1),bt=d+($+1)+w*(V+1),xt=d+($+1)+w*V;c.push(K,rt,xt),c.push(rt,bt,xt),L+=6}a.addGroup(f,L,E),f+=L,d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function Kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Jh={clone:as,merge:Qe};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new B,Ll=new it,Dl=new it;class pn extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class ef extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new pn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new pn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new pn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new pn(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new pn(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kc extends en{constructor(t=[],e=ss,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ri});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=In),new ef(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ke extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sf={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Jc extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rf extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=gn,h=gn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new xe,Ul=new xe,or=[],Nl=new jn,of=new xe,xs=new Ne,vs=new us;class Ta extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,of)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Nl.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),vs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Ul.multiplyMatrices(n,Yi),xs.matrixWorld=Ul,xs.raycast(t,or);for(let o=0,a=or.length;o<a;o++){const c=or[o];c.instanceId=r,c.object=this,e.push(c)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rf(new Float32Array(s*this.count),s,this.count,ka,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const go=new B,af=new B,lf=new oe;class Xn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lf.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new us,cf=new it(.5,.5),ar=new B;class $a{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],v=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-g,A-S).normalize(),s[1].setComponents(l+o,f+h,p+g,A+S).normalize(),s[2].setComponents(l+a,f+u,p+_,A+v).normalize(),s[3].setComponents(l-a,f-u,p-_,A-v).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,A-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,A-x).normalize(),e===Nn)s[5].setComponents(l+c,f+d,p+m,A+x).normalize();else if(e===Cr)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=cf.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hs extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new B,Dr=new B,Fl=new xe,Ms=new zr,lr=new us,_o=new B,Ol=new B;class kr extends Fe{constructor(t=new Te,e=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Dr);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Fl.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),S=h.getX(_+1),v=cr(this,t,Ms,c,p,S,_);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=cr(this,t,Ms,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=cr(this,t,Ms,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=cr(this,t,Ms,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Lr.fromBufferAttribute(a,s),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Lr,Dr,_o,Ol)>n)return;_o.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_o);if(!(l<t.near||l>t.far))return{distance:l,point:Ol.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new B,zl=new B;class Qc extends kr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bl.fromBufferAttribute(e,s),zl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bl.distanceTo(zl);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uf extends kr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class tu extends en{constructor(t,e,n=Ti,s,r,o,a=gn,c=gn,l,h=Is,u=1){if(h!==Is&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ya(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class eu extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ja extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new B,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yn extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function S(){const x=new B,A=new B;let R=0;const I=(e-t)/n;for(let F=0;F<=r;F++){const E=[],T=F/r,U=T*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,M=k*c+a,w=Math.sin(M),D=Math.cos(M);A.x=U*w,A.y=-T*n+m,A.z=U*D,u.push(A.x,A.y,A.z),x.set(w,I,D).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-T),E.push(g++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){const T=_[E][F],U=_[E+1][F],z=_[E+1][F+1],k=_[E][F+1];(t>0||E!==0)&&(h.push(T,U,k),R+=3),(e>0||E!==r-1)&&(h.push(U,z,k),R+=3)}l.addGroup(p,R,0),p+=R}function v(x){const A=g,R=new it,I=new B;let F=0;const E=x===!0?t:e,T=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const U=g;for(let z=0;z<=s;z++){const M=z/s*c+a,w=Math.cos(M),D=Math.sin(M);I.x=E*D,I.y=m*T,I.z=E*w,u.push(I.x,I.y,I.z),d.push(0,T,0),R.x=w*.5+.5,R.y=D*.5*T+.5,f.push(R.x,R.y),g++}for(let z=0;z<s;z++){const k=A+z,M=U+z;x===!0?h.push(M,M+1,k):h.push(M+1,M,k),F+=3}l.addGroup(p,F,x===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Yn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Za(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new it:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],r=[],o=[],a=new B,c=new xe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends On{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hf extends Ka{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ja(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ur=new B,xo=new Ja,vo=new Ja,Mo=new Ja;class Hr extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),l=ur);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),vo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Mo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),vo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xo.calc(c),vo.calc(c),Mo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ff(i,t){const e=1-i;return e*e*t}function df(i,t){return 2*(1-i)*i*t}function pf(i,t){return i*i*t}function Cs(i,t,e,n){return ff(i,t)+df(i,e)+pf(i,n)}function mf(i,t){const e=1-i;return e*e*e*t}function gf(i,t){const e=1-i;return 3*e*e*i*t}function _f(i,t){return 3*(1-i)*i*i*t}function xf(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return mf(i,t)+gf(i,e)+_f(i,n)+xf(i,s)}class nu extends On{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vf extends On{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iu extends On{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tr extends On{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class su extends On{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends On{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(kl(a,c.x,l.x,h.x,u.x),kl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Ir=Object.freeze({__proto__:null,ArcCurve:hf,CatmullRomCurve3:Hr,CubicBezierCurve:nu,CubicBezierCurve3:vf,EllipseCurve:Ka,LineCurve:iu,LineCurve3:Tr,QuadraticBezierCurve:su,QuadraticBezierCurve3:ru,SplineCurve:ou});class Mf extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ir[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ir[s.type]().fromJSON(s))}return this}}class Ur extends Mf{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new iu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new su(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new nu(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ou(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ka(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qa extends Ur{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ur().fromJSON(s))}return this}}function yf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=au(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Af(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Bs(r,o,e,a,c,l,0),o}function au(i,t,e,n,s){let r;if(s===Of(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Hl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Hl(o/n|0,i[o],i[o+1],r);return r&&ls(r,r.next)&&(ks(r),r=r.next),r}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Ie(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Lf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Ef(i,n,s,r):Sf(i)){t.push(c.i,i.i,l.i),ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=bf(Ri(i),t),Bs(i,t,e,n,s,r,2)):o===2&&Tf(i,t,e,n,s,r):Bs(Ri(i),t,e,n,s,r,1);break}}}function Sf(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Es(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ef(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),p=Aa(f,g,t,e,n),S=Aa(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Es(a,h,c,u,l,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Es(a,h,c,u,l,d,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Es(a,h,c,u,l,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Es(a,h,c,u,l,d,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function bf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&cu(n,e,e.next,s)&&zs(n,s)&&zs(s,n)&&(t.push(n.i,e.i,s.i),ks(e),ks(e.next),e=i=s),e=e.next}while(e!==i);return Ri(e)}function Tf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uf(o,a)){let c=uu(o,a);o=Ri(o,o.next),c=Ri(c,c.next),Bs(o,t,e,n,s,r,0),Bs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Af(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=au(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(If(l))}s.sort(wf);for(let r=0;r<s.length;r++)e=Rf(s[r],e);return e}function wf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Rf(i,t){const e=Cf(i,t);if(!e)return t;const n=uu(e,i);return Ri(n,n.next),Ri(e,e.next)}function Cf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&lu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);zs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Pf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Pf(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Lf(i,t,e,n){let s=i;do s.z===0&&(s.z=Aa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Df(s)}function Df(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Aa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function If(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Es(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&lu(i,t,e,n,s,r,o,a)}function Uf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nf(i,t)&&(zs(i,t)&&zs(t,i)&&Ff(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||ls(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function cu(i,t,e,n){const s=fr(Ie(i,t,e)),r=fr(Ie(i,t,n)),o=fr(Ie(e,n,i)),a=fr(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&hr(i,e,t)||r===0&&hr(i,n,t)||o===0&&hr(e,i,n)||a===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fr(i){return i>0?1:i<0?-1:0}function Nf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Ff(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uu(i,t){const e=wa(i.i,i.x,i.y),n=wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hl(i,t,e,n){const s=wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Of(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Bf{static triangulate(t,e,n=2){return yf(t,e,n)}}class Ki{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gl(t),Vl(n,t);let o=t.length;e.forEach(Gl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vl(n,e[c]);const a=Bf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gr extends Te{constructor(t=new Qa([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:zf;let v,x=!1,A,R,I,F;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,A=p.computeFrenetFrames(h,!1),R=new B,I=new B,F=new B),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let T=E.shape;const U=E.holes;if(!Ki.isClockWise(T)){T=T.reverse();for(let at=0,st=U.length;at<st;at++){const nt=U[at];Ki.isClockWise(nt)&&(U[at]=nt.reverse())}}function k(at){const nt=10000000000000001e-36;let tt=at[0];for(let pt=1;pt<=at.length;pt++){const ht=pt%at.length,St=at[ht],jt=St.x-tt.x,Zt=St.y-tt.y,P=jt*jt+Zt*Zt,y=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(tt.x),Math.abs(tt.y)),q=nt*y*y;if(P<=q){at.splice(ht,1),pt--;continue}tt=St}}k(T),U.forEach(k);const M=U.length,w=T;for(let at=0;at<M;at++){const st=U[at];T=T.concat(st)}function D(at,st,nt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(st,nt)}const C=T.length;function L(at,st,nt){let tt,pt,ht;const St=at.x-st.x,jt=at.y-st.y,Zt=nt.x-at.x,P=nt.y-at.y,y=St*St+jt*jt,q=St*P-jt*Zt;if(Math.abs(q)>Number.EPSILON){const Q=Math.sqrt(y),G=Math.sqrt(Zt*Zt+P*P),et=st.x-jt/Q,kt=st.y+St/Q,yt=nt.x-P/G,zt=nt.y+Zt/G,Bt=((yt-et)*P-(zt-kt)*Zt)/(St*P-jt*Zt);tt=et+St*Bt-at.x,pt=kt+jt*Bt-at.y;const dt=tt*tt+pt*pt;if(dt<=2)return new it(tt,pt);ht=Math.sqrt(dt/2)}else{let Q=!1;St>Number.EPSILON?Zt>Number.EPSILON&&(Q=!0):St<-Number.EPSILON?Zt<-Number.EPSILON&&(Q=!0):Math.sign(jt)===Math.sign(P)&&(Q=!0),Q?(tt=-jt,pt=St,ht=Math.sqrt(y)):(tt=St,pt=jt,ht=Math.sqrt(y/2))}return new it(tt/ht,pt/ht)}const N=[];for(let at=0,st=w.length,nt=st-1,tt=at+1;at<st;at++,nt++,tt++)nt===st&&(nt=0),tt===st&&(tt=0),N[at]=L(w[at],w[nt],w[tt]);const V=[];let $,K=N.concat();for(let at=0,st=M;at<st;at++){const nt=U[at];$=[];for(let tt=0,pt=nt.length,ht=pt-1,St=tt+1;tt<pt;tt++,ht++,St++)ht===pt&&(ht=0),St===pt&&(St=0),$[tt]=L(nt[tt],nt[ht],nt[St]);V.push($),K=K.concat($)}let rt;if(m===0)rt=Ki.triangulateShape(w,U);else{const at=[],st=[];for(let nt=0;nt<m;nt++){const tt=nt/m,pt=f*Math.cos(tt*Math.PI/2),ht=g*Math.sin(tt*Math.PI/2)+_;for(let St=0,jt=w.length;St<jt;St++){const Zt=D(w[St],N[St],ht);_t(Zt.x,Zt.y,-pt),tt===0&&at.push(Zt)}for(let St=0,jt=M;St<jt;St++){const Zt=U[St];$=V[St];const P=[];for(let y=0,q=Zt.length;y<q;y++){const Q=D(Zt[y],$[y],ht);_t(Q.x,Q.y,-pt),tt===0&&P.push(Q)}tt===0&&st.push(P)}}rt=Ki.triangulateShape(at,st)}const bt=rt.length,xt=g+_;for(let at=0;at<C;at++){const st=d?D(T[at],K[at],xt):T[at];x?(I.copy(A.normals[0]).multiplyScalar(st.x),R.copy(A.binormals[0]).multiplyScalar(st.y),F.copy(v[0]).add(I).add(R),_t(F.x,F.y,F.z)):_t(st.x,st.y,0)}for(let at=1;at<=h;at++)for(let st=0;st<C;st++){const nt=d?D(T[st],K[st],xt):T[st];x?(I.copy(A.normals[at]).multiplyScalar(nt.x),R.copy(A.binormals[at]).multiplyScalar(nt.y),F.copy(v[at]).add(I).add(R),_t(F.x,F.y,F.z)):_t(nt.x,nt.y,u/h*at)}for(let at=m-1;at>=0;at--){const st=at/m,nt=f*Math.cos(st*Math.PI/2),tt=g*Math.sin(st*Math.PI/2)+_;for(let pt=0,ht=w.length;pt<ht;pt++){const St=D(w[pt],N[pt],tt);_t(St.x,St.y,u+nt)}for(let pt=0,ht=U.length;pt<ht;pt++){const St=U[pt];$=V[pt];for(let jt=0,Zt=St.length;jt<Zt;jt++){const P=D(St[jt],$[jt],tt);x?_t(P.x,P.y+v[h-1].y,v[h-1].x+nt):_t(P.x,P.y,u+nt)}}}Y(),J();function Y(){const at=s.length/3;if(d){let st=0,nt=C*st;for(let tt=0;tt<bt;tt++){const pt=rt[tt];wt(pt[2]+nt,pt[1]+nt,pt[0]+nt)}st=h+m*2,nt=C*st;for(let tt=0;tt<bt;tt++){const pt=rt[tt];wt(pt[0]+nt,pt[1]+nt,pt[2]+nt)}}else{for(let st=0;st<bt;st++){const nt=rt[st];wt(nt[2],nt[1],nt[0])}for(let st=0;st<bt;st++){const nt=rt[st];wt(nt[0]+C*h,nt[1]+C*h,nt[2]+C*h)}}n.addGroup(at,s.length/3-at,0)}function J(){const at=s.length/3;let st=0;gt(w,st),st+=w.length;for(let nt=0,tt=U.length;nt<tt;nt++){const pt=U[nt];gt(pt,st),st+=pt.length}n.addGroup(at,s.length/3-at,1)}function gt(at,st){let nt=at.length;for(;--nt>=0;){const tt=nt;let pt=nt-1;pt<0&&(pt=at.length-1);for(let ht=0,St=h+m*2;ht<St;ht++){const jt=C*ht,Zt=C*(ht+1),P=st+tt+jt,y=st+pt+jt,q=st+pt+Zt,Q=st+tt+Zt;Vt(P,y,q,Q)}}}function _t(at,st,nt){c.push(at),c.push(st),c.push(nt)}function wt(at,st,nt){Yt(at),Yt(st),Yt(nt);const tt=s.length/3,pt=S.generateTopUV(n,s,tt-3,tt-2,tt-1);O(pt[0]),O(pt[1]),O(pt[2])}function Vt(at,st,nt,tt){Yt(at),Yt(st),Yt(tt),Yt(st),Yt(nt),Yt(tt);const pt=s.length/3,ht=S.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);O(ht[0]),O(ht[1]),O(ht[3]),O(ht[1]),O(ht[2]),O(ht[3])}function Yt(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function O(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ir[s.type]().fromJSON(s)),new Gr(n,t.options)}}const zf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new it(r,o),new it(a,c),new it(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new it(o,1-c),new it(l,1-u),new it(d,1-g),new it(_,1-p)]:[new it(a,1-c),new it(h,1-u),new it(f,1-g),new it(m,1-p)]}};function kf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wn extends Te{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new B,d=new it,f=new B,g=new B,_=new B;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const v=n+S*h*s,x=Math.sin(v),A=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*x,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),d.x=S/e,d.y=R/(t.length-1),a.push(d.x,d.y);const I=c[3*R+0]*x,F=c[3*R+1],E=c[3*R+0]*A;l.push(I,F,E)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const x=v+S*t.length,A=x,R=x+t.length,I=x+t.length+1,F=x+1;r.push(A,R,F),r.push(I,F,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.points,t.segments,t.phiStart,t.phiLength)}}class Vr extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const v=S+l*p,x=S+l*(p+1),A=S+1+l*(p+1),R=S+1+l*p;f.push(v,x,R),f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.widthSegments,t.heightSegments)}}class tl extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new B,d=new B,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const v=h[p][S+1],x=h[p][S],A=h[p+1][S],R=h[p+1][S+1];(p!==0||o>0)&&f.push(v,x,R),(p!==n-1||c<Math.PI)&&f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nr extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new B,u=new B,d=new B;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ei extends Te{constructor(t=new ru(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,c=new B,l=new it;let h=new B;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);const x=o.normals[v],A=o.binormals[v];for(let R=0;R<=s;R++){const I=R/s*Math.PI*2,F=Math.sin(I),E=-Math.cos(I);c.x=E*x.x+F*A.x,c.y=E*x.y+F*A.y,c.z=E*x.z+F*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const A=(s+1)*(v-1)+(x-1),R=(s+1)*v+(x-1),I=(s+1)*v+x,F=(s+1)*(v-1)+x;g.push(A,R,F),g.push(R,I,F)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)l.x=v/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ei(new Ir[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ra extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hf extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gf extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vf extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wf extends hs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class el extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xf extends el{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yo=new xe,Wl=new B,Xl=new B;class hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yl=new xe,ys=new B,So=new B;class Yf extends hu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),So.copy(n.position),So.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(So),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl,n.coordinateSystem,n.reversedDepth)}}class qf extends el{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fu extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $f extends hu{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new $f}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jf extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $l=new xe;class jl{constructor(t,e,n=0,s=1/0){this.ray=new zr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(t,e=!0,n=[]){return Ca(t,this,n,e),n.sort(Zl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ca(t[s],this,n,e);return n.sort(Zl),n}}function Zl(i,t){return i.distance-t.distance}function Ca(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ca(r[o],t,e,!0)}}class Kl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zf extends Qc{constructor(t=10,e=10,n=4473924,s=8947848){n=new he(n),s=new he(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Te;h.setAttribute("position",new fe(c,3)),h.setAttribute("color",new fe(l,3));const u=new hs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Jl=new B;let dr,Eo;class Kf extends Fe{constructor(t=new B(0,0,1),e=new B(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",dr===void 0&&(dr=new Te,dr.setAttribute("position",new fe([0,0,0,0,1,0],3)),Eo=new Za(.5,1,5,1),Eo.translate(0,-.5,0)),this.position.copy(e),this.line=new kr(dr,new hs({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ne(Eo,new Os({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Jl.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Jl,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Jf extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ql(i,t,e,n){const s=Qf(n);switch(e){case kc:return i*t;case ka:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Hc:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Ko:case Qo:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xa:case va:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ya:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ea:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qf(i){switch(i){case Fn:case Fc:return{byteLength:1,components:1};case Ls:case Oc:case Gs:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case Ti:case Oa:case Un:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
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
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,tp=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
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
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,wm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:ud,begin_vertex:hd,beginnormal_vertex:fd,bsdfs:dd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:yd,color_pars_vertex:Sd,color_vertex:Ed,common:bd,cube_uv_reflection_fragment:Td,defaultnormal_vertex:Ad,displacementmap_pars_vertex:wd,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Ld,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:qd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:Yd,lights_toon_fragment:$d,lights_toon_pars_fragment:jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Kd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:up,metalnessmap_fragment:hp,metalnessmap_pars_fragment:fp,morphinstance_vertex:dp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:xp,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:yp,normal_vertex:Sp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:wp,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Ip,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:qp,transmission_fragment:$p,transmission_pars_fragment:jp,uv_pars_fragment:Zp,uv_pars_vertex:Kp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:tm,background_frag:em,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:om,depth_frag:am,distanceRGBA_vert:lm,distanceRGBA_frag:cm,equirect_vert:um,equirect_frag:hm,linedashed_vert:fm,linedashed_frag:dm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:_m,meshmatcap_vert:xm,meshmatcap_frag:vm,meshnormal_vert:Mm,meshnormal_frag:ym,meshphong_vert:Sm,meshphong_frag:Em,meshphysical_vert:bm,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:wm,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Im},Pt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Dn={basic:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new he(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Qe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Qe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new he(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Qe([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Qe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Qe([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Qe([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Qe([Pt.common,Pt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Qe([Pt.lights,Pt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Dn.physical={uniforms:Qe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const pr={r:0,b:0,g:0},pi=new Cn,Um=new xe;function Nm(i,t,e,n,s,r,o){const a=new he(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const A=g(v);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Br)?(h===void 0&&(h=new Ne(new mn(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:as(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(pi)),h.material.toneMapped=ge.getTransfer(A.colorSpace)!==Se,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ne(new Vr(2,2),new li({name:"BackgroundMaterial",uniforms:as(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ge.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(pr,jc(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:S}}function Fm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(T,U,z,k,M){let w=!1;const D=u(k,z,U);r!==D&&(r=D,l(r.object)),w=f(T,k,z,M),w&&g(T,k,z,M),M!==null&&t.update(M,i.ELEMENT_ARRAY_BUFFER),(w||o)&&(o=!1,x(T,U,z,k),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,U,z){const k=z.wireframe===!0;let M=n[T.id];M===void 0&&(M={},n[T.id]=M);let w=M[U.id];w===void 0&&(w={},M[U.id]=w);let D=w[k];return D===void 0&&(D=d(c()),w[k]=D),D}function d(T){const U=[],z=[],k=[];for(let M=0;M<e;M++)U[M]=0,z[M]=0,k[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,U,z,k){const M=r.attributes,w=U.attributes;let D=0;const C=z.getAttributes();for(const L in C)if(C[L].location>=0){const V=M[L];let $=w[L];if($===void 0&&(L==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),L==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;D++}return r.attributesNum!==D||r.index!==k}function g(T,U,z,k){const M={},w=U.attributes;let D=0;const C=z.getAttributes();for(const L in C)if(C[L].location>=0){let V=w[L];V===void 0&&(L==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),L==="instanceColor"&&T.instanceColor&&(V=T.instanceColor));const $={};$.attribute=V,V&&V.data&&($.data=V.data),M[L]=$,D++}r.attributes=M,r.attributesNum=D,r.index=k}function _(){const T=r.newAttributes;for(let U=0,z=T.length;U<z;U++)T[U]=0}function m(T){p(T,0)}function p(T,U){const z=r.newAttributes,k=r.enabledAttributes,M=r.attributeDivisors;z[T]=1,k[T]===0&&(i.enableVertexAttribArray(T),k[T]=1),M[T]!==U&&(i.vertexAttribDivisor(T,U),M[T]=U)}function S(){const T=r.newAttributes,U=r.enabledAttributes;for(let z=0,k=U.length;z<k;z++)U[z]!==T[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function v(T,U,z,k,M,w,D){D===!0?i.vertexAttribIPointer(T,U,z,M,w):i.vertexAttribPointer(T,U,z,k,M,w)}function x(T,U,z,k){_();const M=k.attributes,w=z.getAttributes(),D=U.defaultAttributeValues;for(const C in w){const L=w[C];if(L.location>=0){let N=M[C];if(N===void 0&&(C==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),C==="instanceColor"&&T.instanceColor&&(N=T.instanceColor)),N!==void 0){const V=N.normalized,$=N.itemSize,K=t.get(N);if(K===void 0)continue;const rt=K.buffer,bt=K.type,xt=K.bytesPerElement,Y=bt===i.INT||bt===i.UNSIGNED_INT||N.gpuType===Oa;if(N.isInterleavedBufferAttribute){const J=N.data,gt=J.stride,_t=N.offset;if(J.isInstancedInterleavedBuffer){for(let wt=0;wt<L.locationSize;wt++)p(L.location+wt,J.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let wt=0;wt<L.locationSize;wt++)m(L.location+wt);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let wt=0;wt<L.locationSize;wt++)v(L.location+wt,$/L.locationSize,bt,V,gt*xt,(_t+$/L.locationSize*wt)*xt,Y)}else{if(N.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)p(L.location+J,N.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let J=0;J<L.locationSize;J++)m(L.location+J);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let J=0;J<L.locationSize;J++)v(L.location+J,$/L.locationSize,bt,V,$*xt,$/L.locationSize*J*xt,Y)}}else if(D!==void 0){const V=D[C];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(L.location,V);break;case 3:i.vertexAttrib3fv(L.location,V);break;case 4:i.vertexAttrib4fv(L.location,V);break;default:i.vertexAttrib1fv(L.location,V)}}}}S()}function A(){F();for(const T in n){const U=n[T];for(const z in U){const k=U[z];for(const M in k)h(k[M].object),delete k[M];delete U[z]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const z in U){const k=U[z];for(const M in k)h(k[M].object),delete k[M];delete U[z]}delete n[T.id]}function I(T){for(const U in n){const z=n[U];if(z[T.id]===void 0)continue;const k=z[T.id];for(const M in k)h(k[M].object),delete k[M];delete z[T.id]}}function F(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Om(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const F=I===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Un&&!F)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function zm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xn,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,v=S*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function km(i){let t=new WeakMap;function e(o,a){return a===qo?o.mapping=ss:a===$o&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===$o)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ji=4,tc=[.125,.215,.35,.446,.526,.582],Mi=20,bo=new fu,ec=new he;let To=null,Ao=0,wo=0,Ro=!1;const xi=(1+Math.sqrt(5))/2,qi=1/xi,nc=[new B(-xi,qi,0),new B(xi,qi,0),new B(-qi,0,xi),new B(qi,0,xi),new B(0,xi,-qi),new B(0,xi,qi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Hm=new B;class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Hm}=r;To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ao,wo),this._renderer.xr.enabled=Ro,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Gs,format:Rn,colorSpace:os,depthBuffer:!1},s=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Vm(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s,r){const c=new pn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ec),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Os({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Ne(new mn,_);let p=!1;const S=t.background;S?S.isColor&&(_.color.copy(S),t.background=null,p=!0):(_.color.copy(ec),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):x===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const A=this._cubeSize;mr(s,x*A,v>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nc[(s-r-1)%nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let S=0;for(let I=0;I<Mi;++I){const F=I/_,E=Math.exp(-F*F/2);p.push(E),I===0?S+=E:I<m&&(S+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[s],A=3*x*(s>v-Ji?s-v+Ji:0),R=4*(this._cubeSize-x);mr(e,A,R,3*x,2*x),c.setRenderTarget(e),c.render(u,bo)}}function Gm(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ji?c=tc[o-i+Ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const I=R%3*2/3-1,F=R>2?0:-1,E=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];S.set(E,_*g*R),v.set(d,m*g*R);const T=[R,R,R,R,R,R];x.set(T,p*g*R)}const A=new Te;A.setAttribute("position",new an(S,_)),A.setAttribute("uv",new an(v,m)),A.setAttribute("faceIndex",new an(x,p)),t.push(A),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ic(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){const n=new Float32Array(Mi),s=new B(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function rc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Wm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===qo||c===$o,h=c===ss||c===rs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,x=S.length;v<x;v+=3){const A=S[v+0],R=S[v+1],I=S[v+2];d.push(A,R,R,I,I,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const A=v+0,R=v+1,I=v+2;d.push(A,R,R,I,I,A)}}else return;const m=new(Wc(d)?$c:qc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function qm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,t,e){const n=new WeakMap,s=new be;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const I=new Float32Array(A*R*4*u),F=new Xc(I,A,R,u);F.type=Un,F.needsUpdate=!0;const E=x*4;for(let U=0;U<u;U++){const z=p[U],k=S[U],M=v[U],w=A*R*4*U;for(let D=0;D<z.count;D++){const C=D*E;g===!0&&(s.fromBufferAttribute(z,D),I[w+C+0]=s.x,I[w+C+1]=s.y,I[w+C+2]=s.z,I[w+C+3]=0),_===!0&&(s.fromBufferAttribute(k,D),I[w+C+4]=s.x,I[w+C+5]=s.y,I[w+C+6]=s.z,I[w+C+7]=0),m===!0&&(s.fromBufferAttribute(M,D),I[w+C+8]=s.x,I[w+C+9]=s.y,I[w+C+10]=s.z,I[w+C+11]=M.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new it(A,R)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const pu=new en,oc=new tu(1,1),mu=new Xc,gu=new zh,_u=new Kc,ac=[],lc=[],cc=new Float32Array(16),uc=new Float32Array(9),hc=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),Ge(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),Ge(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),Ge(e,n)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=Vc,r=oc):r=pu,e.setTexture2D(t||r,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gu,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_u,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mu,s)}function g0(i){switch(i){case 5126:return Km;case 35664:return Jm;case 35665:return Qm;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return o0;case 35669:case 35673:return a0;case 5125:return l0;case 36294:return c0;case 36295:return u0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(i,t){i.uniform1fv(this.addr,t)}function x0(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function v0(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S0(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b0(i,t){i.uniform1iv(this.addr,t)}function T0(i,t){i.uniform2iv(this.addr,t)}function A0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function R0(i,t){i.uniform1uiv(this.addr,t)}function C0(i,t){i.uniform2uiv(this.addr,t)}function P0(i,t){i.uniform3uiv(this.addr,t)}function L0(i,t){i.uniform4uiv(this.addr,t)}function D0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pu,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gu,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_u,r[o])}function N0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mu,r[o])}function F0(i){switch(i){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return M0;case 35674:return y0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return w0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function k0(i,t,e){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fc(e,l===void 0?new O0(a,i,t):new B0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new z0(a),fc(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);k0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const H0=37297;let G0=0;function V0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pc=new oe;function W0(i){ge._getMatrix(pc,ge.workingColorSpace,i);const t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+V0(i.getShaderSource(t),a)}else return r}function X0(i,t){const e=W0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y0(i,t){let e;switch(t){case Qu:e="Linear";break;case th:e="Reinhard";break;case eh:e="Cineon";break;case Uc:e="ACESFilmic";break;case ih:e="AgX";break;case sh:e="Neutral";break;case nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new B;function q0(){ge.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function j0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(K0,Q0)}const J0=new Map;function Q0(i,t){let e=ce[t];if(e===void 0){const n=J0.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===rs&&(t="ENVMAP_MODE_REFRACTION"),t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ag(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ng(e),l=ig(e),h=sg(e),u=rg(e),d=og(e),f=$0(e),g=j0(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ce.tonemapping_pars_fragment:"",e.toneMapping!==oi?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=La(o),o=gc(o,e),o=_c(o,e),a=La(a),a=gc(a,e),a=_c(a,e),o=xc(o),a=xc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,x=S+p+a,A=dc(s,s.VERTEX_SHADER,v),R=dc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(U){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",M=s.getShaderInfoLog(R)||"",w=z.trim(),D=k.trim(),C=M.trim();let L=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,R);else{const V=mc(s,A,"vertex"),$=mc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+w+`
`+V+`
`+$)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||C==="")&&(N=!1);N&&(U.diagnostics={runnable:L,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:C,prefix:p}})}s.deleteShader(A),s.deleteShader(R),F=new Ar(s,_),E=Z0(s,_)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,H0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let lg=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ug(t),e.set(t,n)),n}}class ug{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}}function hg(i,t,e,n,s,r,o){const a=new qa,c=new cg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,T,U,z,k){const M=z.fog,w=k.geometry,D=E.isMeshStandardMaterial?z.environment:null,C=(E.isMeshStandardMaterial?e:t).get(E.envMap||D),L=C&&C.mapping===Br?C.image.height:null,N=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const V=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=V!==void 0?V.length:0;let K=0;w.morphAttributes.position!==void 0&&(K=1),w.morphAttributes.normal!==void 0&&(K=2),w.morphAttributes.color!==void 0&&(K=3);let rt,bt,xt,Y;if(N){const _e=Dn[N];rt=_e.vertexShader,bt=_e.fragmentShader}else rt=E.vertexShader,bt=E.fragmentShader,c.update(E),xt=c.getVertexShaderID(E),Y=c.getFragmentShaderID(E);const J=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),_t=k.isInstancedMesh===!0,wt=k.isBatchedMesh===!0,Vt=!!E.map,Yt=!!E.matcap,O=!!C,at=!!E.aoMap,st=!!E.lightMap,nt=!!E.bumpMap,tt=!!E.normalMap,pt=!!E.displacementMap,ht=!!E.emissiveMap,St=!!E.metalnessMap,jt=!!E.roughnessMap,Zt=E.anisotropy>0,P=E.clearcoat>0,y=E.dispersion>0,q=E.iridescence>0,Q=E.sheen>0,G=E.transmission>0,et=Zt&&!!E.anisotropyMap,kt=P&&!!E.clearcoatMap,yt=P&&!!E.clearcoatNormalMap,zt=P&&!!E.clearcoatRoughnessMap,Bt=q&&!!E.iridescenceMap,dt=q&&!!E.iridescenceThicknessMap,Lt=Q&&!!E.sheenColorMap,Kt=Q&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Rt=!!E.specularColorMap,ne=!!E.specularIntensityMap,H=G&&!!E.transmissionMap,vt=G&&!!E.thicknessMap,Tt=!!E.gradientMap,Ft=!!E.alphaMap,mt=E.alphaTest>0,lt=!!E.alphaHash,Ht=!!E.extensions;let te=oi;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(te=i.toneMapping);const Me={shaderID:N,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:bt,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&k._colorsTexture!==null,instancing:_t,instancingColor:_t&&k.instanceColor!==null,instancingMorph:_t&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:os,alphaToCoverage:!!E.alphaToCoverage,map:Vt,matcap:Yt,envMap:O,envMapMode:O&&C.mapping,envMapCubeUVHeight:L,aoMap:at,lightMap:st,bumpMap:nt,normalMap:tt,displacementMap:d&&pt,emissiveMap:ht,normalMapObjectSpace:tt&&E.normalMapType===lh,normalMapTangentSpace:tt&&E.normalMapType===Wa,metalnessMap:St,roughnessMap:jt,anisotropy:Zt,anisotropyMap:et,clearcoat:P,clearcoatMap:kt,clearcoatNormalMap:yt,clearcoatRoughnessMap:zt,dispersion:y,iridescence:q,iridescenceMap:Bt,iridescenceThicknessMap:dt,sheen:Q,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:Gt,specularColorMap:Rt,specularIntensityMap:ne,transmission:G,transmissionMap:H,thicknessMap:vt,gradientMap:Tt,opaque:E.transparent===!1&&E.blending===es&&E.alphaToCoverage===!1,alphaMap:Ft,alphaTest:mt,alphaHash:lt,combine:E.combine,mapUv:Vt&&_(E.map.channel),aoMapUv:at&&_(E.aoMap.channel),lightMapUv:st&&_(E.lightMap.channel),bumpMapUv:nt&&_(E.bumpMap.channel),normalMapUv:tt&&_(E.normalMap.channel),displacementMapUv:pt&&_(E.displacementMap.channel),emissiveMapUv:ht&&_(E.emissiveMap.channel),metalnessMapUv:St&&_(E.metalnessMap.channel),roughnessMapUv:jt&&_(E.roughnessMap.channel),anisotropyMapUv:et&&_(E.anisotropyMap.channel),clearcoatMapUv:kt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:yt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(E.sheenRoughnessMap.channel),specularMapUv:Gt&&_(E.specularMap.channel),specularColorMapUv:Rt&&_(E.specularColorMap.channel),specularIntensityMapUv:ne&&_(E.specularIntensityMap.channel),transmissionMapUv:H&&_(E.transmissionMap.channel),thicknessMapUv:vt&&_(E.thicknessMap.channel),alphaMapUv:Ft&&_(E.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(tt||Zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!w.attributes.uv&&(Vt||Ft),fog:!!M,useFog:E.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:k.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:Vt&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:ht&&E.emissiveMap.isVideoTexture===!0&&ge.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ht&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(S(T,E),v(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function S(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const T=g[E.type];let U;if(T){const z=Dn[T];U=Jh.clone(z.uniforms)}else U=E.uniforms;return U}function A(E,T){let U;for(let z=0,k=h.length;z<k;z++){const M=h[z];if(M.cacheKey===T){U=M,++U.usedTimes;break}}return U===void 0&&(U=new ag(i,T,E,r),h.push(U)),U}function R(E){if(--E.usedTimes===0){const T=h.indexOf(E);h[T]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:F}}function fg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||dg),n.length>1&&n.sort(d||Mc),s.length>1&&s.sort(d||Mc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yc,i.set(n,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new he};break;case"SpotLight":e={position:new B,direction:new B,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _g=0;function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vg(i){const t=new mg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,r=new xe,o=new xe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,x=0,A=0,R=0,I=0;l.sort(xg);for(let E=0,T=l.length;E<T;E++){const U=l[E],z=U.color,k=U.intensity,M=U.distance,w=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(U.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(U.sh.coefficients[D],k);I++}else if(U.isDirectionalLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const C=U.shadow,L=e.get(U);L.shadowIntensity=C.intensity,L.shadowBias=C.bias,L.shadowNormalBias=C.normalBias,L.shadowRadius=C.radius,L.shadowMapSize=C.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=w,n.directionalShadowMatrix[f]=U.shadow.matrix,S++}n.directional[f]=D,f++}else if(U.isSpotLight){const D=t.get(U);D.position.setFromMatrixPosition(U.matrixWorld),D.color.copy(z).multiplyScalar(k),D.distance=M,D.coneCos=Math.cos(U.angle),D.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),D.decay=U.decay,n.spot[_]=D;const C=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,C.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[_]=C.matrix,U.castShadow){const L=e.get(U);L.shadowIntensity=C.intensity,L.shadowBias=C.bias,L.shadowNormalBias=C.normalBias,L.shadowRadius=C.radius,L.shadowMapSize=C.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=w,x++}_++}else if(U.isRectAreaLight){const D=t.get(U);D.color.copy(z).multiplyScalar(k),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=D,m++}else if(U.isPointLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity),D.distance=U.distance,D.decay=U.decay,U.castShadow){const C=U.shadow,L=e.get(U);L.shadowIntensity=C.intensity,L.shadowBias=C.bias,L.shadowNormalBias=C.normalBias,L.shadowRadius=C.radius,L.shadowMapSize=C.mapSize,L.shadowCameraNear=C.camera.near,L.shadowCameraFar=C.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=w,n.pointShadowMatrix[g]=U.shadow.matrix,v++}n.point[g]=D,g++}else if(U.isHemisphereLight){const D=t.get(U);D.skyColor.copy(U.color).multiplyScalar(k),D.groundColor.copy(U.groundColor).multiplyScalar(k),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==S||F.numPointShadows!==v||F.numSpotShadows!==x||F.numSpotMaps!==A||F.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=S,F.numPointShadows=v,F.numSpotShadows=x,F.numSpotMaps=A,F.numLightProbes=I,n.version=_g++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const v=l[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Sc(i){const t=new vg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sc(i),t.set(s,[a])):r>=o.length?(a=new Sc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function Eg(i,t,e){let n=new $a;const s=new it,r=new it,o=new be,a=new Gf({depthPacking:ah}),c=new Vf,l={},h=e.maxTextureSize,u={[ai]:tn,[tn]:ai,[Tn]:Tn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let p=this.type;this.render=function(R,I,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ri),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Wn&&this.type===Wn,M=p===Wn&&this.type!==Wn;for(let w=0,D=R.length;w<D;w++){const C=R[w],L=C.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const N=L.getFrameExtents();if(s.multiply(N),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,L.mapSize.y=r.y)),L.map===null||k===!0||M===!0){const $=this.type!==Wn?{minFilter:gn,magFilter:gn}:{};L.map!==null&&L.map.dispose(),L.map=new wi(s.x,s.y,$),L.map.texture.name=C.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const V=L.getViewportCount();for(let $=0;$<V;$++){const K=L.getViewport($);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o),L.updateMatrices(C,$),n=L.getFrustum(),x(I,F,L.camera,C,this.type)}L.isPointLightShadow!==!0&&this.type===Wn&&S(L,F),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,U)};function S(R,I){const F=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,F,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,F,f,_,null)}function v(R,I,F,E){let T=null;const U=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)T=U;else if(T=F.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const z=T.uuid,k=I.uuid;let M=l[z];M===void 0&&(M={},l[z]=M);let w=M[k];w===void 0&&(w=T.clone(),M[k]=w,I.addEventListener("dispose",A)),T=w}if(T.visible=I.visible,T.wireframe=I.wireframe,E===Wn?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:u[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=i.properties.get(T);z.light=F}return T}function x(R,I,F,E,T){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const k=t.update(R),M=R.material;if(Array.isArray(M)){const w=k.groups;for(let D=0,C=w.length;D<C;D++){const L=w[D],N=M[L.materialIndex];if(N&&N.visible){const V=v(R,N,E,T);R.onBeforeShadow(i,R,I,F,k,V,L),i.renderBufferDirect(F,null,k,V,R,L),R.onAfterShadow(i,R,I,F,k,V,L)}}}else if(M.visible){const w=v(R,M,E,T);R.onBeforeShadow(i,R,I,F,k,w,null),i.renderBufferDirect(F,null,k,w,R,null),R.onAfterShadow(i,R,I,F,k,w,null)}}const z=R.children;for(let k=0,M=z.length;k<M;k++)x(z[k],I,F,E,T)}function A(R){R.target.removeEventListener("dispose",A);for(const F in l){const E=l[F],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const bg={[ko]:Ho,[Go]:Xo,[Vo]:Yo,[is]:Wo,[Ho]:ko,[Xo]:Go,[Yo]:Vo,[Wo]:is};function Tg(i,t){function e(){let H=!1;const vt=new be;let Tt=null;const Ft=new be(0,0,0,0);return{setMask:function(mt){Tt!==mt&&!H&&(i.colorMask(mt,mt,mt,mt),Tt=mt)},setLocked:function(mt){H=mt},setClear:function(mt,lt,Ht,te,Me){Me===!0&&(mt*=te,lt*=te,Ht*=te),vt.set(mt,lt,Ht,te),Ft.equals(vt)===!1&&(i.clearColor(mt,lt,Ht,te),Ft.copy(vt))},reset:function(){H=!1,Tt=null,Ft.set(-1,0,0,0)}}}function n(){let H=!1,vt=!1,Tt=null,Ft=null,mt=null;return{setReversed:function(lt){if(vt!==lt){const Ht=t.get("EXT_clip_control");lt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;const te=mt;mt=null,this.setClear(te)}},getReversed:function(){return vt},setTest:function(lt){lt?J(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(lt){Tt!==lt&&!H&&(i.depthMask(lt),Tt=lt)},setFunc:function(lt){if(vt&&(lt=bg[lt]),Ft!==lt){switch(lt){case ko:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=lt}},setLocked:function(lt){H=lt},setClear:function(lt){mt!==lt&&(vt&&(lt=1-lt),i.clearDepth(lt),mt=lt)},reset:function(){H=!1,Tt=null,Ft=null,mt=null,vt=!1}}}function s(){let H=!1,vt=null,Tt=null,Ft=null,mt=null,lt=null,Ht=null,te=null,Me=null;return{setTest:function(_e){H||(_e?J(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(_e){vt!==_e&&!H&&(i.stencilMask(_e),vt=_e)},setFunc:function(_e,ot,ut){(Tt!==_e||Ft!==ot||mt!==ut)&&(i.stencilFunc(_e,ot,ut),Tt=_e,Ft=ot,mt=ut)},setOp:function(_e,ot,ut){(lt!==_e||Ht!==ot||te!==ut)&&(i.stencilOp(_e,ot,ut),lt=_e,Ht=ot,te=ut)},setLocked:function(_e){H=_e},setClear:function(_e){Me!==_e&&(i.clearStencil(_e),Me=_e)},reset:function(){H=!1,vt=null,Tt=null,Ft=null,mt=null,lt=null,Ht=null,te=null,Me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,A=null,R=null,I=new he(0,0,0),F=0,E=!1,T=null,U=null,z=null,k=null,M=null;const w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,C=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(L)[1]),D=C>=1):L.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),D=C>=2);let N=null,V={};const $=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),rt=new be().fromArray($),bt=new be().fromArray(K);function xt(H,vt,Tt,Ft){const mt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(H,lt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<Tt;Ht++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(vt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return lt}const Y={};Y[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(is),nt(!1),tt(al),J(i.CULL_FACE),at(ri);function J(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function gt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function _t(H,vt){return u[H]!==vt?(i.bindFramebuffer(H,vt),u[H]=vt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function wt(H,vt){let Tt=f,Ft=!1;if(H){Tt=d.get(vt),Tt===void 0&&(Tt=[],d.set(vt,Tt));const mt=H.textures;if(Tt.length!==mt.length||Tt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ht=mt.length;lt<Ht;lt++)Tt[lt]=i.COLOR_ATTACHMENT0+lt;Tt.length=mt.length,Ft=!0}}else Tt[0]!==i.BACK&&(Tt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(Tt)}function Vt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const Yt={[vi]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};Yt[Fu]=i.MIN,Yt[Ou]=i.MAX;const O={[Bu]:i.ZERO,[zu]:i.ONE,[ku]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(H,vt,Tt,Ft,mt,lt,Ht,te,Me,_e){if(H===ri){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),H!==Iu){if(H!==m||_e!==E){if((p!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,x=vi),_e)switch(H){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,v=null,A=null,R=null,I.set(0,0,0),F=0,m=H,E=_e}return}mt=mt||vt,lt=lt||Tt,Ht=Ht||Ft,(vt!==p||mt!==x)&&(i.blendEquationSeparate(Yt[vt],Yt[mt]),p=vt,x=mt),(Tt!==S||Ft!==v||lt!==A||Ht!==R)&&(i.blendFuncSeparate(O[Tt],O[Ft],O[lt],O[Ht]),S=Tt,v=Ft,A=lt,R=Ht),(te.equals(I)===!1||Me!==F)&&(i.blendColor(te.r,te.g,te.b,Me),I.copy(te),F=Me),m=H,E=!1}function st(H,vt){H.side===Tn?gt(i.CULL_FACE):J(i.CULL_FACE);let Tt=H.side===tn;vt&&(Tt=!Tt),nt(Tt),H.blending===es&&H.transparent===!1?at(ri):at(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Ft=H.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){T!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),T=H)}function tt(H){H!==Pu?(J(i.CULL_FACE),H!==U&&(H===al?i.cullFace(i.BACK):H===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),U=H}function pt(H){H!==z&&(D&&i.lineWidth(H),z=H)}function ht(H,vt,Tt){H?(J(i.POLYGON_OFFSET_FILL),(k!==vt||M!==Tt)&&(i.polygonOffset(vt,Tt),k=vt,M=Tt)):gt(i.POLYGON_OFFSET_FILL)}function St(H){H?J(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function jt(H){H===void 0&&(H=i.TEXTURE0+w-1),N!==H&&(i.activeTexture(H),N=H)}function Zt(H,vt,Tt){Tt===void 0&&(N===null?Tt=i.TEXTURE0+w-1:Tt=N);let Ft=V[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},V[Tt]=Ft),(Ft.type!==H||Ft.texture!==vt)&&(N!==Tt&&(i.activeTexture(Tt),N=Tt),i.bindTexture(H,vt||Y[H]),Ft.type=H,Ft.texture=vt)}function P(){const H=V[N];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(H){rt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),rt.copy(H))}function Kt(H){bt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),bt.copy(H))}function Gt(H,vt){let Tt=l.get(vt);Tt===void 0&&(Tt=new WeakMap,l.set(vt,Tt));let Ft=Tt.get(H);Ft===void 0&&(Ft=i.getUniformBlockIndex(vt,H.name),Tt.set(H,Ft))}function Rt(H,vt){const Ft=l.get(vt).get(H);c.get(vt)!==Ft&&(i.uniformBlockBinding(vt,Ft,H.__bindingPointIndex),c.set(vt,Ft))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},N=null,V={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,A=null,R=null,I=new he(0,0,0),F=0,E=!1,T=null,U=null,z=null,k=null,M=null,rt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:gt,bindFramebuffer:_t,drawBuffers:wt,useProgram:Vt,setBlending:at,setMaterial:st,setFlipSided:nt,setCullFace:tt,setLineWidth:pt,setPolygonOffset:ht,setScissorTest:St,activeTexture:jt,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:Bt,texImage3D:dt,updateUBOMapping:Gt,uniformBlockBinding:Rt,texStorage2D:yt,texStorage3D:zt,texSubImage2D:Q,texSubImage3D:G,compressedTexSubImage2D:et,compressedTexSubImage3D:kt,scissor:Lt,viewport:Kt,reset:ne}}function Ag(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return f?new OffscreenCanvas(P,y):Pr("canvas")}function _(P,y,q){let Q=1;const G=Zt(P);if((G.width>q||G.height>q)&&(Q=q/Math.max(G.width,G.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(Q*G.width),kt=Math.floor(Q*G.height);u===void 0&&(u=g(et,kt));const yt=y?g(et,kt):u;return yt.width=et,yt.height=kt,yt.getContext("2d").drawImage(P,0,0,et,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+et+"x"+kt+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,y,q,Q,G=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=y;if(y===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),y===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),y===i.RGBA){const kt=G?Rr:ge.getTransfer(Q);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=kt===Se?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,y){let q;return P?y===null||y===Ti||y===Ds?q=i.DEPTH24_STENCIL8:y===Un?q=i.DEPTH32F_STENCIL8:y===Ls&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===Ds?q=i.DEPTH_COMPONENT24:y===Un?q=i.DEPTH_COMPONENT32F:y===Ls&&(q=i.DEPTH_COMPONENT16),q}function A(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function R(P){const y=P.target;y.removeEventListener("dispose",R),F(y),y.isVideoTexture&&h.delete(y)}function I(P){const y=P.target;y.removeEventListener("dispose",I),T(y)}function F(P){const y=n.get(P);if(y.__webglInit===void 0)return;const q=P.source,Q=d.get(q);if(Q){const G=Q[y.__cacheKey];G.usedTimes--,G.usedTimes===0&&E(P),Object.keys(Q).length===0&&d.delete(q)}n.remove(P)}function E(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const q=P.source,Q=d.get(q);delete Q[y.__cacheKey],o.memory.textures--}function T(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let G=0;G<y.__webglFramebuffer[Q].length;G++)i.deleteFramebuffer(y.__webglFramebuffer[Q][G]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=P.textures;for(let Q=0,G=q.length;Q<G;Q++){const et=n.get(q[Q]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[Q])}n.remove(P)}let U=0;function z(){U=0}function k(){const P=U;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function M(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function w(P,y){const q=n.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(q,P,y);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function D(P,y){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Y(q,P,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function C(P,y){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Y(q,P,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function L(P,y){const q=n.get(P);if(P.version>0&&q.__version!==P.version){J(q,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}const N={[jo]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},V={[gn]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},$={[ch]:i.NEVER,[mh]:i.ALWAYS,[uh]:i.LESS,[Vc]:i.LEQUAL,[hh]:i.EQUAL,[ph]:i.GEQUAL,[fh]:i.GREATER,[dh]:i.NOTEQUAL};function K(P,y){if(y.type===Un&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===qr||y.magFilter===Vs||y.magFilter===Si||y.minFilter===In||y.minFilter===qr||y.minFilter===Vs||y.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,N[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,N[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,N[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,V[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,V[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==Vs&&y.minFilter!==Si||y.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function rt(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",R));const Q=y.source;let G=d.get(Q);G===void 0&&(G={},d.set(Q,G));const et=M(y);if(et!==P.__cacheKey){G[et]===void 0&&(G[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),G[et].usedTimes++;const kt=G[P.__cacheKey];kt!==void 0&&(G[P.__cacheKey].usedTimes--,kt.usedTimes===0&&E(y)),P.__cacheKey=et,P.__webglTexture=G[et].texture}return q}function bt(P,y,q){return Math.floor(Math.floor(P/q)/y)}function xt(P,y,q,Q){const et=P.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,Q,y.data);else{et.sort((dt,Lt)=>dt.start-Lt.start);let kt=0;for(let dt=1;dt<et.length;dt++){const Lt=et[kt],Kt=et[dt],Gt=Lt.start+Lt.count,Rt=bt(Kt.start,y.width,4),ne=bt(Lt.start,y.width,4);Kt.start<=Gt+1&&Rt===ne&&bt(Kt.start+Kt.count-1,y.width,4)===Rt?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++kt,et[kt]=Kt)}et.length=kt+1;const yt=i.getParameter(i.UNPACK_ROW_LENGTH),zt=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let dt=0,Lt=et.length;dt<Lt;dt++){const Kt=et[dt],Gt=Math.floor(Kt.start/4),Rt=Math.ceil(Kt.count/4),ne=Gt%y.width,H=Math.floor(Gt/y.width),vt=Rt,Tt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,ne,H,vt,Tt,q,Q,y.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,yt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function Y(P,y,q){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const G=rt(P,y),et=y.source;e.bindTexture(Q,P.__webglTexture,i.TEXTURE0+q);const kt=n.get(et);if(et.version!==kt.__version||G===!0){e.activeTexture(i.TEXTURE0+q);const yt=ge.getPrimaries(ge.workingColorSpace),zt=y.colorSpace===si?null:ge.getPrimaries(y.colorSpace),Bt=y.colorSpace===si||yt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let dt=_(y.image,!1,s.maxTextureSize);dt=jt(y,dt);const Lt=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type);let Gt=v(y.internalFormat,Lt,Kt,y.colorSpace,y.isVideoTexture);K(Q,y);let Rt;const ne=y.mipmaps,H=y.isVideoTexture!==!0,vt=kt.__version===void 0||G===!0,Tt=et.dataReady,Ft=A(y,dt);if(y.isDepthTexture)Gt=x(y.format===Us,y.type),vt&&(H?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Lt,Kt,null));else if(y.isDataTexture)if(ne.length>0){H&&vt&&e.texStorage2D(i.TEXTURE_2D,Ft,Gt,ne[0].width,ne[0].height);for(let mt=0,lt=ne.length;mt<lt;mt++)Rt=ne[mt],H?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Lt,Kt,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,Gt,Rt.width,Rt.height,0,Lt,Kt,Rt.data);y.generateMipmaps=!1}else H?(vt&&e.texStorage2D(i.TEXTURE_2D,Ft,Gt,dt.width,dt.height),Tt&&xt(y,dt,Lt,Kt)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Lt,Kt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Gt,ne[0].width,ne[0].height,dt.depth);for(let mt=0,lt=ne.length;mt<lt;mt++)if(Rt=ne[mt],y.format!==Rn)if(Lt!==null)if(H){if(Tt)if(y.layerUpdates.size>0){const Ht=Ql(Rt.width,Rt.height,y.format,y.type);for(const te of y.layerUpdates){const Me=Rt.data.subarray(te*Ht/Rt.data.BYTES_PER_ELEMENT,(te+1)*Ht/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,te,Rt.width,Rt.height,1,Lt,Me)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,dt.depth,Lt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Gt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,dt.depth,Lt,Kt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Gt,Rt.width,Rt.height,dt.depth,0,Lt,Kt,Rt.data)}else{H&&vt&&e.texStorage2D(i.TEXTURE_2D,Ft,Gt,ne[0].width,ne[0].height);for(let mt=0,lt=ne.length;mt<lt;mt++)Rt=ne[mt],y.format!==Rn?Lt!==null?H?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Lt,Kt,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,Gt,Rt.width,Rt.height,0,Lt,Kt,Rt.data)}else if(y.isDataArrayTexture)if(H){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Gt,dt.width,dt.height,dt.depth),Tt)if(y.layerUpdates.size>0){const mt=Ql(dt.width,dt.height,y.format,y.type);for(const lt of y.layerUpdates){const Ht=dt.data.subarray(lt*mt/dt.data.BYTES_PER_ELEMENT,(lt+1)*mt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,dt.width,dt.height,1,Lt,Kt,Ht)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Lt,Kt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Lt,Kt,dt.data);else if(y.isData3DTexture)H?(vt&&e.texStorage3D(i.TEXTURE_3D,Ft,Gt,dt.width,dt.height,dt.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Lt,Kt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Lt,Kt,dt.data);else if(y.isFramebufferTexture){if(vt)if(H)e.texStorage2D(i.TEXTURE_2D,Ft,Gt,dt.width,dt.height);else{let mt=dt.width,lt=dt.height;for(let Ht=0;Ht<Ft;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Gt,mt,lt,0,Lt,Kt,null),mt>>=1,lt>>=1}}else if(ne.length>0){if(H&&vt){const mt=Zt(ne[0]);e.texStorage2D(i.TEXTURE_2D,Ft,Gt,mt.width,mt.height)}for(let mt=0,lt=ne.length;mt<lt;mt++)Rt=ne[mt],H?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt,Kt,Rt):e.texImage2D(i.TEXTURE_2D,mt,Gt,Lt,Kt,Rt);y.generateMipmaps=!1}else if(H){if(vt){const mt=Zt(dt);e.texStorage2D(i.TEXTURE_2D,Ft,Gt,mt.width,mt.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Kt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Lt,Kt,dt);m(y)&&p(Q),kt.__version=et.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function J(P,y,q){if(y.image.length!==6)return;const Q=rt(P,y),G=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const et=n.get(G);if(G.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+q);const kt=ge.getPrimaries(ge.workingColorSpace),yt=y.colorSpace===si?null:ge.getPrimaries(y.colorSpace),zt=y.colorSpace===si||kt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Bt=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let lt=0;lt<6;lt++)!Bt&&!dt?Lt[lt]=_(y.image[lt],!0,s.maxCubemapSize):Lt[lt]=dt?y.image[lt].image:y.image[lt],Lt[lt]=jt(y,Lt[lt]);const Kt=Lt[0],Gt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),ne=v(y.internalFormat,Gt,Rt,y.colorSpace),H=y.isVideoTexture!==!0,vt=et.__version===void 0||Q===!0,Tt=G.dataReady;let Ft=A(y,Kt);K(i.TEXTURE_CUBE_MAP,y);let mt;if(Bt){H&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ne,Kt.width,Kt.height);for(let lt=0;lt<6;lt++){mt=Lt[lt].mipmaps;for(let Ht=0;Ht<mt.length;Ht++){const te=mt[Ht];y.format!==Rn?Gt!==null?H?Tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,te.width,te.height,Gt,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,ne,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,te.width,te.height,Gt,Rt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,ne,te.width,te.height,0,Gt,Rt,te.data)}}}else{if(mt=y.mipmaps,H&&vt){mt.length>0&&Ft++;const lt=Zt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ne,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(dt){H?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt[lt].width,Lt[lt].height,Gt,Rt,Lt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ne,Lt[lt].width,Lt[lt].height,0,Gt,Rt,Lt[lt].data);for(let Ht=0;Ht<mt.length;Ht++){const Me=mt[Ht].image[lt].image;H?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,Me.width,Me.height,Gt,Rt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,ne,Me.width,Me.height,0,Gt,Rt,Me.data)}}else{H?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,Rt,Lt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ne,Gt,Rt,Lt[lt]);for(let Ht=0;Ht<mt.length;Ht++){const te=mt[Ht];H?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,Gt,Rt,te.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,ne,Gt,Rt,te.image[lt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),et.__version=G.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function gt(P,y,q,Q,G,et){const kt=r.convert(q.format,q.colorSpace),yt=r.convert(q.type),zt=v(q.internalFormat,kt,yt,q.colorSpace),Bt=n.get(y),dt=n.get(q);if(dt.__renderTarget=y,!Bt.__hasExternalTextures){const Lt=Math.max(1,y.width>>et),Kt=Math.max(1,y.height>>et);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?e.texImage3D(G,et,zt,Lt,Kt,y.depth,0,kt,yt,null):e.texImage2D(G,et,zt,Lt,Kt,0,kt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,G,dt.__webglTexture,0,pt(y)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,G,dt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(P,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const Q=y.depthTexture,G=Q&&Q.isDepthTexture?Q.type:null,et=x(y.stencilBuffer,G),kt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=pt(y);ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,P)}else{const Q=y.textures;for(let G=0;G<Q.length;G++){const et=Q[G],kt=r.convert(et.format,et.colorSpace),yt=r.convert(et.type),zt=v(et.internalFormat,kt,yt,et.colorSpace),Bt=pt(y);q&&ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,zt,y.width,y.height):ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,zt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,zt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),w(y.depthTexture,0);const G=Q.__webglTexture,et=pt(y);if(y.depthTexture.format===Is)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(y.depthTexture.format===Us)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Vt(P){const y=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const G=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",G)};Q.addEventListener("dispose",G),y.__depthDisposeCallback=G}y.__boundDepthTexture=Q}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?wt(y.__webglFramebuffer[0],P):wt(y.__webglFramebuffer,P)}else if(q){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),_t(y.__webglDepthbuffer[Q],P,!1);else{const G=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,et)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),_t(y.__webglDepthbuffer,P,!1);else{const G=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(P,y,q){const Q=n.get(P);y!==void 0&&gt(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Vt(P)}function O(P){const y=P.texture,q=n.get(P),Q=n.get(y);P.addEventListener("dispose",I);const G=P.textures,et=P.isWebGLCubeRenderTarget===!0,kt=G.length>1;if(kt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[yt]=[];for(let zt=0;zt<y.mipmaps.length;zt++)q.__webglFramebuffer[yt][zt]=i.createFramebuffer()}else q.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let yt=0;yt<y.mipmaps.length;yt++)q.__webglFramebuffer[yt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(kt)for(let yt=0,zt=G.length;yt<zt;yt++){const Bt=n.get(G[yt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ht(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let yt=0;yt<G.length;yt++){const zt=G[yt];q.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[yt]);const Bt=r.convert(zt.format,zt.colorSpace),dt=r.convert(zt.type),Lt=v(zt.internalFormat,Bt,dt,zt.colorSpace,P.isXRRenderTarget===!0),Kt=pt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,q.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),K(i.TEXTURE_CUBE_MAP,y);for(let yt=0;yt<6;yt++)if(y.mipmaps&&y.mipmaps.length>0)for(let zt=0;zt<y.mipmaps.length;zt++)gt(q.__webglFramebuffer[yt][zt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt);else gt(q.__webglFramebuffer[yt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let yt=0,zt=G.length;yt<zt;yt++){const Bt=G[yt],dt=n.get(Bt);let Lt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,dt.__webglTexture),K(Lt,Bt),gt(q.__webglFramebuffer,P,Bt,i.COLOR_ATTACHMENT0+yt,Lt,0),m(Bt)&&p(Lt)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Q.__webglTexture),K(yt,y),y.mipmaps&&y.mipmaps.length>0)for(let zt=0;zt<y.mipmaps.length;zt++)gt(q.__webglFramebuffer[zt],P,y,i.COLOR_ATTACHMENT0,yt,zt);else gt(q.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,yt,0);m(y)&&p(yt),e.unbindTexture()}P.depthBuffer&&Vt(P)}function at(P){const y=P.textures;for(let q=0,Q=y.length;q<Q;q++){const G=y[q];if(m(G)){const et=S(P),kt=n.get(G).__webglTexture;e.bindTexture(et,kt),p(et),e.unbindTexture()}}}const st=[],nt=[];function tt(P){if(P.samples>0){if(ht(P)===!1){const y=P.textures,q=P.width,Q=P.height;let G=i.COLOR_BUFFER_BIT;const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(P),yt=y.length>1;if(yt)for(let Bt=0;Bt<y.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const zt=P.texture.mipmaps;zt&&zt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Bt=0;Bt<y.length;Bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const dt=n.get(y[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,q,Q,0,0,q,Q,G,i.NEAREST),c===!0&&(st.length=0,nt.length=0,st.push(i.COLOR_ATTACHMENT0+Bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(st.push(et),nt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Bt=0;Bt<y.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const dt=n.get(y[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function pt(P){return Math.min(s.maxSamples,P.samples)}function ht(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(P){const y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function jt(P,y){const q=P.colorSpace,Q=P.format,G=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==os&&q!==si&&(ge.getTransfer(q)===Se?(Q!==Rn||G!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=w,this.setTexture2DArray=D,this.setTexture3D=C,this.setTextureCube=L,this.rebindTextures=Yt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ht}function wg(i,t){function e(n,s=si){let r;const o=ge.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Gs)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===Rn)return i.RGBA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===ka)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Er||n===br)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===va||n===Ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ya||n===Sa||n===Ea||n===ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Pg,p={},S=e.getContextAttributes();let v=null,x=null;const A=[],R=[],I=new it;let F=null;const E=new pn;E.viewport=new be;const T=new pn;T.viewport=new be;const U=[E,T],z=new jf;let k=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=A[Y];return J===void 0&&(J=new mo,A[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=A[Y];return J===void 0&&(J=new mo,A[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=A[Y];return J===void 0&&(J=new mo,A[Y]=J),J.getHandSpace()};function w(Y){const J=R.indexOf(Y.inputSource);if(J===-1)return;const gt=A[J];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,l||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",C);for(let Y=0;Y<A.length;Y++){const J=R[Y];J!==null&&(R[Y]=null,A[Y].disconnect(J))}k=null,M=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(v),f=null,d=null,u=null,s=null,x=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",D),s.addEventListener("inputsourceschange",C),S.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,_t=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=S.stencil?Us:Is,_t=S.stencil?Ds:Ti);const Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new wi(d.textureWidth,d.textureHeight,{format:Rn,type:Fn,depthTexture:new tu(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function C(Y){for(let J=0;J<Y.removed.length;J++){const gt=Y.removed[J],_t=R.indexOf(gt);_t>=0&&(R[_t]=null,A[_t].disconnect(gt))}for(let J=0;J<Y.added.length;J++){const gt=Y.added[J];let _t=R.indexOf(gt);if(_t===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=R.length){R.push(gt),_t=Vt;break}else if(R[Vt]===null){R[Vt]=gt,_t=Vt;break}if(_t===-1)break}const wt=A[_t];wt&&wt.connect(gt)}}const L=new B,N=new B;function V(Y,J,gt){L.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(gt.matrixWorld);const _t=L.distanceTo(N),wt=J.projectionMatrix.elements,Vt=gt.projectionMatrix.elements,Yt=wt[14]/(wt[10]-1),O=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],st=(wt[9]-1)/wt[5],nt=(wt[8]-1)/wt[0],tt=(Vt[8]+1)/Vt[0],pt=Yt*nt,ht=Yt*tt,St=_t/(-nt+tt),jt=St*-nt;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(jt),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Zt=Yt+St,P=O+St,y=pt-jt,q=ht+(_t-jt),Q=at*O/P*Zt,G=st*O/P*Zt;Y.projectionMatrix.makePerspective(y,q,Q,G,Zt,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,gt=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),z.near=T.near=E.near=J,z.far=T.far=E.far=gt,(k!==z.near||M!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,M=z.far),z.layers.mask=Y.layers.mask|6,E.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const _t=Y.parent,wt=z.cameras;$(z,_t);for(let Vt=0;Vt<wt.length;Vt++)$(wt[Vt],_t);wt.length===2?V(z,E,T):z.projectionMatrix.copy(E.projectionMatrix),K(Y,z,_t)};function K(Y,J,gt){gt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let rt=null;function bt(Y,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let _t=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,_t=!0);for(let O=0;O<gt.length;O++){const at=gt[O];let st=null;if(f!==null)st=f.getViewport(at);else{const tt=u.getViewSubImage(d,at);st=tt.viewport,O===0&&(t.setRenderTargetTextures(x,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(x))}let nt=U[O];nt===void 0&&(nt=new pn,nt.layers.enable(O),nt.viewport=new be,U[O]=nt),nt.matrix.fromArray(at.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(at.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(st.x,st.y,st.width,st.height),O===0&&(z.matrix.copy(nt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),_t===!0&&z.cameras.push(nt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const O=u.getDepthInformation(gt[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let O=0;O<gt.length;O++){const at=gt[O].camera;if(at){let st=p[at];st||(st=new eu,p[at]=st);const nt=u.getCameraImage(at);st.sourceTexture=nt}}}}for(let gt=0;gt<A.length;gt++){const _t=R[gt],wt=A[gt];_t!==null&&wt!==void 0&&wt.update(_t,J,l||o)}rt&&rt(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const xt=new du;xt.setAnimationLoop(bt),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}}const mi=new Cn,Dg=new xe;function Ig(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(mi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const x=v.program;n.uniformBlockBinding(S,x)}function l(S,v){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(S,A);const R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){const v=u();S.__bindingPointIndex=v;const x=i.createBuffer(),A=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],x=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,I=x.length;R<I;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,T=F.length;E<T;E++){const U=F[E];if(f(U,R,E,A)===!0){const z=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let M=0;for(let w=0;w<k.length;w++){const D=k[w],C=_(D);typeof D=="number"||typeof D=="boolean"?(U.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,z+M,U.__data)):D.isMatrix3?(U.__data[0]=D.elements[0],U.__data[1]=D.elements[1],U.__data[2]=D.elements[2],U.__data[3]=0,U.__data[4]=D.elements[3],U.__data[5]=D.elements[4],U.__data[6]=D.elements[5],U.__data[7]=0,U.__data[8]=D.elements[6],U.__data[9]=D.elements[7],U.__data[10]=D.elements[8],U.__data[11]=0):(D.toArray(U.__data,M),M+=C.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,x,A){const R=S.value,I=v+"_"+x;if(A[I]===void 0)return typeof R=="number"||typeof R=="boolean"?A[I]=R:A[I]=R.clone(),!0;{const F=A[I];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return A[I]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(S){const v=S.uniforms;let x=0;const A=16;for(let I=0,F=v.length;I<F;I++){const E=Array.isArray(v[I])?v[I]:[v[I]];for(let T=0,U=E.length;T<U;T++){const z=E[T],k=Array.isArray(z.value)?z.value:[z.value];for(let M=0,w=k.length;M<w;M++){const D=k[M],C=_(D),L=x%A,N=L%C.boundary,V=L+N;x+=N,V!==0&&A-V<C.storage&&(x+=A-V),z.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=C.storage}}}const R=x%A;return R>0&&(x+=A-R),S.__size=x,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Ng{constructor(t={}){const{canvas:e=Dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Mn;let R=0,I=0,F=null,E=-1,T=null;const U=new be,z=new be;let k=null;const M=new he(0);let w=0,D=e.width,C=e.height,L=1,N=null,V=null;const $=new be(0,0,D,C),K=new be(0,0,D,C);let rt=!1;const bt=new $a;let xt=!1,Y=!1;const J=new xe,gt=new B,_t=new be,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Yt(){return F===null?L:1}let O=n;function at(b,W){return e.getContext(b,W)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",mt,!1),O===null){const W="webgl2";if(O=at(W,b),O===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,nt,tt,pt,ht,St,jt,Zt,P,y,q,Q,G,et,kt,yt,zt,Bt,dt,Lt,Kt,Gt,Rt,ne;function H(){st=new Xm(O),st.init(),Gt=new wg(O,st),nt=new Bm(O,st,t,Gt),tt=new Tg(O,st),nt.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),pt=new $m(O),ht=new fg,St=new Ag(O,st,tt,ht,nt,Gt,pt),jt=new km(x),Zt=new Wm(x),P=new td(O),Rt=new Fm(O,P),y=new Ym(O,P,pt,Rt),q=new Zm(O,y,P,pt),dt=new jm(O,nt,St),yt=new zm(ht),Q=new hg(x,jt,Zt,st,nt,Rt,yt),G=new Ig(x,ht),et=new pg,kt=new Mg(st),Bt=new Nm(x,jt,Zt,tt,q,f,c),zt=new Eg(x,q,nt),ne=new Ug(O,pt,nt,tt),Lt=new Om(O,st,pt),Kt=new qm(O,st,pt),pt.programs=Q.programs,x.capabilities=nt,x.extensions=st,x.properties=ht,x.renderLists=et,x.shadowMap=zt,x.state=tt,x.info=pt}H();const vt=new Lg(x,O);this.xr=vt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize(D,C,!1))},this.getSize=function(b){return b.set(D,C)},this.setSize=function(b,W,j=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,C=W,e.width=Math.floor(b*L),e.height=Math.floor(W*L),j===!0&&(e.style.width=b+"px",e.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(D*L,C*L).floor()},this.setDrawingBufferSize=function(b,W,j){D=b,C=W,L=j,e.width=Math.floor(b*j),e.height=Math.floor(W*j),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,W,j,Z){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,W,j,Z),tt.viewport(U.copy($).multiplyScalar(L).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,W,j,Z){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,W,j,Z),tt.scissor(z.copy(K).multiplyScalar(L).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){tt.setScissorTest(rt=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,j=!0){let Z=0;if(b){let X=!1;if(F!==null){const ft=F.texture.format;X=ft===Va||ft===Ga||ft===Ha}if(X){const ft=F.texture.type,Ct=ft===Fn||ft===Ti||ft===Ls||ft===Ds||ft===Ba||ft===za,Ot=Bt.getClearColor(),Nt=Bt.getClearAlpha(),$t=Ot.r,Qt=Ot.g,qt=Ot.b;Ct?(g[0]=$t,g[1]=Qt,g[2]=qt,g[3]=Nt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=$t,_[1]=Qt,_[2]=qt,_[3]=Nt,O.clearBufferiv(O.COLOR,0,_))}else Z|=O.COLOR_BUFFER_BIT}W&&(Z|=O.DEPTH_BUFFER_BIT),j&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Bt.dispose(),et.dispose(),kt.dispose(),ht.dispose(),jt.dispose(),Zt.dispose(),q.dispose(),Rt.dispose(),ne.dispose(),Q.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",ut),vt.removeEventListener("sessionend",Dt),At.stop()};function Tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=pt.autoReset,W=zt.enabled,j=zt.autoUpdate,Z=zt.needsUpdate,X=zt.type;H(),pt.autoReset=b,zt.enabled=W,zt.autoUpdate=j,zt.needsUpdate=Z,zt.type=X}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const W=b.target;W.removeEventListener("dispose",lt),Ht(W)}function Ht(b){te(b),ht.remove(b)}function te(b){const W=ht.get(b).programs;W!==void 0&&(W.forEach(function(j){Q.releaseProgram(j)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,j,Z,X,ft){W===null&&(W=wt);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,Ot=It(b,W,j,Z,X);tt.setMaterial(Z,Ct);let Nt=j.index,$t=1;if(Z.wireframe===!0){if(Nt=y.getWireframeAttribute(j),Nt===void 0)return;$t=2}const Qt=j.drawRange,qt=j.attributes.position;let de=Qt.start*$t,ye=(Qt.start+Qt.count)*$t;ft!==null&&(de=Math.max(de,ft.start*$t),ye=Math.min(ye,(ft.start+ft.count)*$t)),Nt!==null?(de=Math.max(de,0),ye=Math.min(ye,Nt.count)):qt!=null&&(de=Math.max(de,0),ye=Math.min(ye,qt.count));const Ue=ye-de;if(Ue<0||Ue===1/0)return;Rt.setup(X,Z,Ot,j,Nt);let Pe,Ae=Lt;if(Nt!==null&&(Pe=P.get(Nt),Ae=Kt,Ae.setIndex(Pe)),X.isMesh)Z.wireframe===!0?(tt.setLineWidth(Z.wireframeLinewidth*Yt()),Ae.setMode(O.LINES)):Ae.setMode(O.TRIANGLES);else if(X.isLine){let Jt=Z.linewidth;Jt===void 0&&(Jt=1),tt.setLineWidth(Jt*Yt()),X.isLineSegments?Ae.setMode(O.LINES):X.isLineLoop?Ae.setMode(O.LINE_LOOP):Ae.setMode(O.LINE_STRIP)}else X.isPoints?Ae.setMode(O.POINTS):X.isSprite&&Ae.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Jt=X._multiDrawStarts,Le=X._multiDrawCounts,me=X._multiDrawCount,cn=Nt?P.get(Nt).bytesPerElement:1,Di=ht.get(Z).currentProgram.getUniforms();for(let un=0;un<me;un++)Di.setValue(O,"_gl_DrawID",un),Ae.render(Jt[un]/cn,Le[un])}else if(X.isInstancedMesh)Ae.renderInstances(de,Ue,X.count);else if(j.isInstancedBufferGeometry){const Jt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Le=Math.min(j.instanceCount,Jt);Ae.renderInstances(de,Ue,Le)}else Ae.render(de,Ue)};function Me(b,W,j){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Ce(b,W,j),b.side=ai,b.needsUpdate=!0,Ce(b,W,j),b.side=Tn):Ce(b,W,j)}this.compile=function(b,W,j=null){j===null&&(j=b),p=kt.get(j),p.init(W),v.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==j&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ft=X.material;if(ft)if(Array.isArray(ft))for(let Ct=0;Ct<ft.length;Ct++){const Ot=ft[Ct];Me(Ot,j,X),Z.add(Ot)}else Me(ft,j,X),Z.add(ft)}),p=v.pop(),Z},this.compileAsync=function(b,W,j=null){const Z=this.compile(b,W,j);return new Promise(X=>{function ft(){if(Z.forEach(function(Ct){ht.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){X(b);return}setTimeout(ft,10)}st.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let _e=null;function ot(b){_e&&_e(b)}function ut(){At.stop()}function Dt(){At.start()}const At=new du;At.setAnimationLoop(ot),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(b){_e=b,vt.setAnimationLoop(b),b===null?At.stop():At.start()},vt.addEventListener("sessionstart",ut),vt.addEventListener("sessionend",Dt),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(W),W=vt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,W,F),p=kt.get(b,v.length),p.init(W),v.push(p),J.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),bt.setFromProjectionMatrix(J,Nn,W.reversedDepth),Y=this.localClippingEnabled,xt=yt.init(this.clippingPlanes,Y),m=et.get(b,S.length),m.init(),S.push(m),vt.enabled===!0&&vt.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Mt(ft,W,-1/0,x.sortObjects)}Mt(b,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(N,V),Vt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Vt&&Bt.addToRenderList(m,b),this.info.render.frame++,xt===!0&&yt.beginShadows();const j=p.state.shadowsArray;zt.render(j,b,W),xt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const ft=W.cameras;if(X.length>0)for(let Ct=0,Ot=ft.length;Ct<Ot;Ct++){const Nt=ft[Ct];ie(Z,X,b,Nt)}Vt&&Bt.render(b);for(let Ct=0,Ot=ft.length;Ct<Ot;Ct++){const Nt=ft[Ct];Wt(m,b,Nt,Nt.viewport)}}else X.length>0&&ie(Z,X,b,W),Vt&&Bt.render(b),Wt(m,b,W);F!==null&&I===0&&(St.updateMultisampleRenderTarget(F),St.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(x,b,W),Rt.resetDefaultState(),E=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],xt===!0&&yt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Mt(b,W,j,Z){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||bt.intersectsSprite(b)){Z&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const Ct=q.update(b),Ot=b.material;Ot.visible&&m.push(b,Ct,Ot,j,_t.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||bt.intersectsObject(b))){const Ct=q.update(b),Ot=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),_t.copy(Ct.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(Ot)){const Nt=Ct.groups;for(let $t=0,Qt=Nt.length;$t<Qt;$t++){const qt=Nt[$t],de=Ot[qt.materialIndex];de&&de.visible&&m.push(b,Ct,de,j,_t.z,qt)}}else Ot.visible&&m.push(b,Ct,Ot,j,_t.z,null)}}const ft=b.children;for(let Ct=0,Ot=ft.length;Ct<Ot;Ct++)Mt(ft[Ct],W,j,Z)}function Wt(b,W,j,Z){const X=b.opaque,ft=b.transmissive,Ct=b.transparent;p.setupLightsView(j),xt===!0&&yt.setGlobalState(x.clippingPlanes,j),Z&&tt.viewport(U.copy(Z)),X.length>0&&se(X,W,j),ft.length>0&&se(ft,W,j),Ct.length>0&&se(Ct,W,j),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function ie(b,W,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new wi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Gs:Fn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||U;ft.setSize(Ct.z*x.transmissionResolutionScale,Ct.w*x.transmissionResolutionScale);const Ot=x.getRenderTarget(),Nt=x.getActiveCubeFace(),$t=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(M),w=x.getClearAlpha(),w<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Bt.render(j);const Qt=x.toneMapping;x.toneMapping=oi;const qt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),xt===!0&&yt.setGlobalState(x.clippingPlanes,Z),se(b,j,Z),St.updateMultisampleRenderTarget(ft),St.updateRenderTargetMipmap(ft),st.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let ye=0,Ue=W.length;ye<Ue;ye++){const Pe=W[ye],Ae=Pe.object,Jt=Pe.geometry,Le=Pe.material,me=Pe.group;if(Le.side===Tn&&Ae.layers.test(Z.layers)){const cn=Le.side;Le.side=tn,Le.needsUpdate=!0,ve(Ae,j,Z,Jt,Le,me),Le.side=cn,Le.needsUpdate=!0,de=!0}}de===!0&&(St.updateMultisampleRenderTarget(ft),St.updateRenderTargetMipmap(ft))}x.setRenderTarget(Ot,Nt,$t),x.setClearColor(M,w),qt!==void 0&&(Z.viewport=qt),x.toneMapping=Qt}function se(b,W,j){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ft=b.length;X<ft;X++){const Ct=b[X],Ot=Ct.object,Nt=Ct.geometry,$t=Ct.group;let Qt=Ct.material;Qt.allowOverride===!0&&Z!==null&&(Qt=Z),Ot.layers.test(j.layers)&&ve(Ot,W,j,Nt,Qt,$t)}}function ve(b,W,j,Z,X,ft){b.onBeforeRender(x,W,j,Z,X,ft),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(x,W,j,Z,b,ft),X.transparent===!0&&X.side===Tn&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,x.renderBufferDirect(j,W,Z,X,b,ft),X.side=ai,X.needsUpdate=!0,x.renderBufferDirect(j,W,Z,X,b,ft),X.side=Tn):x.renderBufferDirect(j,W,Z,X,b,ft),b.onAfterRender(x,W,j,Z,X,ft)}function Ce(b,W,j){W.isScene!==!0&&(W=wt);const Z=ht.get(b),X=p.state.lights,ft=p.state.shadowsArray,Ct=X.state.version,Ot=Q.getParameters(b,X.state,ft,W,j),Nt=Q.getProgramCacheKey(Ot);let $t=Z.programs;Z.environment=b.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(b.isMeshStandardMaterial?Zt:jt).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",lt),$t=new Map,Z.programs=$t);let Qt=$t.get(Nt);if(Qt!==void 0){if(Z.currentProgram===Qt&&Z.lightsStateVersion===Ct)return ct(b,Ot),Qt}else Ot.uniforms=Q.getUniforms(b),b.onBeforeCompile(Ot,x),Qt=Q.acquireProgram(Ot,Nt),$t.set(Nt,Qt),Z.uniforms=Ot.uniforms;const qt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=yt.uniform),ct(b,Ot),Z.needsLights=re(b),Z.lightsStateVersion=Ct,Z.needsLights&&(qt.ambientLightColor.value=X.state.ambient,qt.lightProbe.value=X.state.probe,qt.directionalLights.value=X.state.directional,qt.directionalLightShadows.value=X.state.directionalShadow,qt.spotLights.value=X.state.spot,qt.spotLightShadows.value=X.state.spotShadow,qt.rectAreaLights.value=X.state.rectArea,qt.ltc_1.value=X.state.rectAreaLTC1,qt.ltc_2.value=X.state.rectAreaLTC2,qt.pointLights.value=X.state.point,qt.pointLightShadows.value=X.state.pointShadow,qt.hemisphereLights.value=X.state.hemi,qt.directionalShadowMap.value=X.state.directionalShadowMap,qt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qt.spotShadowMap.value=X.state.spotShadowMap,qt.spotLightMatrix.value=X.state.spotLightMatrix,qt.spotLightMap.value=X.state.spotLightMap,qt.pointShadowMap.value=X.state.pointShadowMap,qt.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Qt,Z.uniformsList=null,Qt}function we(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Ar.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function ct(b,W){const j=ht.get(b);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function It(b,W,j,Z,X){W.isScene!==!0&&(W=wt),St.resetTextureUnits();const ft=W.fog,Ct=Z.isMeshStandardMaterial?W.environment:null,Ot=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:os,Nt=(Z.isMeshStandardMaterial?Zt:jt).get(Z.envMap||Ct),$t=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!j.morphAttributes.position,de=!!j.morphAttributes.normal,ye=!!j.morphAttributes.color;let Ue=oi;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const Pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ae=Pe!==void 0?Pe.length:0,Jt=ht.get(Z),Le=p.state.lights;if(xt===!0&&(Y===!0||b!==T)){const Ke=b===T&&Z.id===E;yt.setState(Z,b,Ke)}let me=!1;Z.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Le.state.version||Jt.outputColorSpace!==Ot||X.isBatchedMesh&&Jt.batching===!1||!X.isBatchedMesh&&Jt.batching===!0||X.isBatchedMesh&&Jt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Jt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Jt.instancing===!1||!X.isInstancedMesh&&Jt.instancing===!0||X.isSkinnedMesh&&Jt.skinning===!1||!X.isSkinnedMesh&&Jt.skinning===!0||X.isInstancedMesh&&Jt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Jt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Jt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Jt.instancingMorph===!1&&X.morphTexture!==null||Jt.envMap!==Nt||Z.fog===!0&&Jt.fog!==ft||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==yt.numPlanes||Jt.numIntersection!==yt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==Qt||Jt.morphTargets!==qt||Jt.morphNormals!==de||Jt.morphColors!==ye||Jt.toneMapping!==Ue||Jt.morphTargetsCount!==Ae)&&(me=!0):(me=!0,Jt.__version=Z.version);let cn=Jt.currentProgram;me===!0&&(cn=Ce(Z,W,X));let Di=!1,un=!1,ds=!1;const De=cn.getUniforms(),_n=Jt.uniforms;if(tt.useProgram(cn.program)&&(Di=!0,un=!0,ds=!0),Z.id!==E&&(E=Z.id,un=!0),Di||T!==b){tt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),De.setValue(O,"projectionMatrix",b.projectionMatrix),De.setValue(O,"viewMatrix",b.matrixWorldInverse);const sn=De.map.cameraPosition;sn!==void 0&&sn.setValue(O,gt.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&De.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&De.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,un=!0,ds=!0)}if(X.isSkinnedMesh){De.setOptional(O,X,"bindMatrix"),De.setOptional(O,X,"bindMatrixInverse");const Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),De.setValue(O,"boneTexture",Ke.boneTexture,St))}X.isBatchedMesh&&(De.setOptional(O,X,"batchingTexture"),De.setValue(O,"batchingTexture",X._matricesTexture,St),De.setOptional(O,X,"batchingIdTexture"),De.setValue(O,"batchingIdTexture",X._indirectTexture,St),De.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&De.setValue(O,"batchingColorTexture",X._colorsTexture,St));const xn=j.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&dt.update(X,j,cn),(un||Jt.receiveShadow!==X.receiveShadow)&&(Jt.receiveShadow=X.receiveShadow,De.setValue(O,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(_n.envMap.value=Nt,_n.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),un&&(De.setValue(O,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&ee(_n,ds),ft&&Z.fog===!0&&G.refreshFogUniforms(_n,ft),G.refreshMaterialUniforms(_n,Z,L,C,p.state.transmissionRenderTarget[b.id]),Ar.upload(O,we(Jt),_n,St)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ar.upload(O,we(Jt),_n,St),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&De.setValue(O,"center",X.center),De.setValue(O,"modelViewMatrix",X.modelViewMatrix),De.setValue(O,"normalMatrix",X.normalMatrix),De.setValue(O,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ke=Z.uniformsGroups;for(let sn=0,Yr=Ke.length;sn<Yr;sn++){const ci=Ke[sn];ne.update(ci,cn),ne.bind(ci,cn)}}return cn}function ee(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function re(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,W,j){const Z=ht.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ht.get(b.texture).__webglTexture=W,ht.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const j=ht.get(b);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const pe=O.createFramebuffer();this.setRenderTarget=function(b,W=0,j=0){F=b,R=W,I=j;let Z=!0,X=null,ft=!1,Ct=!1;if(b){const Nt=ht.get(b);if(Nt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(Nt.__webglFramebuffer===void 0)St.setupRenderTarget(b);else if(Nt.__hasExternalTextures)St.rebindTextures(b,ht.get(b.texture).__webglTexture,ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&ht.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Qt=ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?X=Qt[W][j]:X=Qt[W],ft=!0):b.samples>0&&St.useMultisampledRTT(b)===!1?X=ht.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[j]:X=Qt,U.copy(b.viewport),z.copy(b.scissor),k=b.scissorTest}else U.copy($).multiplyScalar(L).floor(),z.copy(K).multiplyScalar(L).floor(),k=rt;if(j!==0&&(X=pe),tt.bindFramebuffer(O.FRAMEBUFFER,X)&&Z&&tt.drawBuffers(b,X),tt.viewport(U),tt.scissor(z),tt.setScissorTest(k),ft){const Nt=ht.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,j)}else if(Ct){const Nt=W;for(let $t=0;$t<b.textures.length;$t++){const Qt=ht.get(b.textures[$t]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+$t,Qt.__webglTexture,j,Nt)}}else if(b!==null&&j!==0){const Nt=ht.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,j)}E=-1},this.readRenderTargetPixels=function(b,W,j,Z,X,ft,Ct,Ot=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){tt.bindFramebuffer(O.FRAMEBUFFER,Nt);try{const $t=b.textures[Ot],Qt=$t.format,qt=$t.type;if(!nt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-Z&&j>=0&&j<=b.height-X&&(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot),O.readPixels(W,j,Z,X,Gt.convert(Qt),Gt.convert(qt),ft))}finally{const $t=F!==null?ht.get(F).__webglFramebuffer:null;tt.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(b,W,j,Z,X,ft,Ct,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt)if(W>=0&&W<=b.width-Z&&j>=0&&j<=b.height-X){tt.bindFramebuffer(O.FRAMEBUFFER,Nt);const $t=b.textures[Ot],Qt=$t.format,qt=$t.type;if(!nt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot),O.readPixels(W,j,Z,X,Gt.convert(Qt),Gt.convert(qt),0);const ye=F!==null?ht.get(F).__webglFramebuffer:null;tt.bindFramebuffer(O.FRAMEBUFFER,ye);const Ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ih(O,Ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(de),O.deleteSync(Ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,j=0){const Z=Math.pow(2,-j),X=Math.floor(b.image.width*Z),ft=Math.floor(b.image.height*Z),Ct=W!==null?W.x:0,Ot=W!==null?W.y:0;St.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Ct,Ot,X,ft),tt.unbindTexture()};const qe=O.createFramebuffer(),nn=O.createFramebuffer();this.copyTextureToTexture=function(b,W,j=null,Z=null,X=0,ft=null){ft===null&&(X!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=X,X=0):ft=0);let Ct,Ot,Nt,$t,Qt,qt,de,ye,Ue;const Pe=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(j!==null)Ct=j.max.x-j.min.x,Ot=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,$t=j.min.x,Qt=j.min.y,qt=j.isBox3?j.min.z:0;else{const xn=Math.pow(2,-X);Ct=Math.floor(Pe.width*xn),Ot=Math.floor(Pe.height*xn),b.isDataArrayTexture?Nt=Pe.depth:b.isData3DTexture?Nt=Math.floor(Pe.depth*xn):Nt=1,$t=0,Qt=0,qt=0}Z!==null?(de=Z.x,ye=Z.y,Ue=Z.z):(de=0,ye=0,Ue=0);const Ae=Gt.convert(W.format),Jt=Gt.convert(W.type);let Le;W.isData3DTexture?(St.setTexture3D(W,0),Le=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(St.setTexture2DArray(W,0),Le=O.TEXTURE_2D_ARRAY):(St.setTexture2D(W,0),Le=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const me=O.getParameter(O.UNPACK_ROW_LENGTH),cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Di=O.getParameter(O.UNPACK_SKIP_PIXELS),un=O.getParameter(O.UNPACK_SKIP_ROWS),ds=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);const De=b.isDataArrayTexture||b.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const xn=ht.get(b),Ke=ht.get(W),sn=ht.get(xn.__renderTarget),Yr=ht.get(Ke.__renderTarget);tt.bindFramebuffer(O.READ_FRAMEBUFFER,sn.__webglFramebuffer),tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let ci=0;ci<Nt;ci++)De&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ht.get(b).__webglTexture,X,qt+ci),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,ft,Ue+ci)),O.blitFramebuffer($t,Qt,Ct,Ot,de,ye,Ct,Ot,O.DEPTH_BUFFER_BIT,O.NEAREST);tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||ht.has(b)){const xn=ht.get(b),Ke=ht.get(W);tt.bindFramebuffer(O.READ_FRAMEBUFFER,qe),tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,nn);for(let sn=0;sn<Nt;sn++)De?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,X,qt+sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,X),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,ft,Ue+sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ke.__webglTexture,ft),X!==0?O.blitFramebuffer($t,Qt,Ct,Ot,de,ye,Ct,Ot,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(Le,ft,de,ye,Ue+sn,$t,Qt,Ct,Ot):O.copyTexSubImage2D(Le,ft,de,ye,$t,Qt,Ct,Ot);tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Le,ft,de,ye,Ue,Ct,Ot,Nt,Ae,Jt,Pe.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,ft,de,ye,Ue,Ct,Ot,Nt,Ae,Pe.data):O.texSubImage3D(Le,ft,de,ye,Ue,Ct,Ot,Nt,Ae,Jt,Pe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,de,ye,Ct,Ot,Ae,Jt,Pe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,de,ye,Pe.width,Pe.height,Ae,Pe.data):O.texSubImage2D(O.TEXTURE_2D,ft,de,ye,Ct,Ot,Ae,Jt,Pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Di),O.pixelStorei(O.UNPACK_SKIP_ROWS,un),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ds),ft===0&&W.generateMipmaps&&O.generateMipmap(Le),tt.unbindTexture()},this.initRenderTarget=function(b){ht.get(b).__webglFramebuffer===void 0&&St.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?St.setTextureCube(b,0):b.isData3DTexture?St.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?St.setTexture2DArray(b,0):St.setTexture2D(b,0),tt.unbindTexture()},this.resetState=function(){R=0,I=0,F=null,tt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}const Ec={type:"change"},il={type:"start"},xu={type:"end"},_r=new zr,bc=new Xn,Fg=Math.cos(70*Ye.DEG2RAD),ze=new B,rn=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Po=1e-6;class Og extends Jf{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ai,this._lastTargetPosition=new B,this._quat=new Ai().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kl,this._sphericalDelta=new Kl,this._scale=1,this._panOffset=new B,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new B,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerUp=kg.bind(this),this._onContextMenu=qg.bind(this),this._onMouseWheel=Vg.bind(this),this._onKeyDown=Wg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=Yg.bind(this),this._onMouseDown=Hg.bind(this),this._onMouseMove=Gg.bind(this),this._interceptControlDown=$g.bind(this),this._interceptControlUp=jg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ec),this.update(),this.state=Ee.NONE}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ze.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<Fg?this.object.lookAt(this.target):(bc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(bc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Po||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Po||this._lastTargetPosition.distanceToSquared(this.target)>Po?(this.dispatchEvent(Ec),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=Ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ee.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(il)}function Gg(i){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xu))}function Wg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ee.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ee.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(il)}function Yg(i){switch(this._trackPointer(i),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ee.NONE}}function qg(i){this.enabled!==!1&&i.preventDefault()}function $g(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zg extends Jc{constructor(){super();const t=new mn;t.deleteAttribute("uv");const e=new Ra({side:tn}),n=new Ra,s=new qf(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ne(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ta(t,n,6),a=new Fe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new Ne(t,$i(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Ne(t,$i(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Ne(t,$i(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ne(t,$i(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Ne(t,$i(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Ne(t,$i(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function $i(i){return new Hf({color:0,emissive:16777215,emissiveIntensity:i})}function Fr(i,t,e,n=.7){const s=[],r=[];for(let u=0;u<2;u++)for(let d=0;d<=12;d++)for(let f=0;f<=18;f++){const g=d/12,_=(1-Math.cos(Math.PI*f/18))/2,m=e*(1-.24*g),p=Math.sign(n)*.48+n*(.55-g),S=m*.11*Math.sin(Math.PI*_),v=5*m*(.13-.045*g)*(.2969*Math.sqrt(_)-.126*_-.3516*_*_+.2843*_*_*_-.1036*_*_*_*_),x=(_-.43)*m,A=S+(u?-1:1)*v;s.push(x*Math.cos(p)-A*Math.sin(p)+e*.22*g*g,i+(t-i)*g,x*Math.sin(p)+A*Math.cos(p))}const c=19,l=13*c;for(let u=0;u<2;u++)for(let d=0;d<12;d++)for(let f=0;f<18;f++){const g=u*l+d*c+f,_=g+c;u?r.push(g,g+1,_,_,g+1,_+1):r.push(g,_,g+1,_,_+1,g+1)}for(const u of[0,12])for(let d=0;d<18;d++){const f=u*c+d;u?r.push(f,f+1,f+l,f+1,f+l+1,f+l):r.push(f,f+l,f+1,f+1,f+l,f+l+1)}const h=new Te;return h.setAttribute("position",new fe(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function $n(i,t,e,n,s=.009,r=Math.PI/6){const o=r*e,a=t-i,c=new Qa;c.moveTo(0,0),c.lineTo(a,0),c.lineTo(a,o),c.lineTo(0,o),c.closePath();for(const[u,d,f]of[[.16,3,.018],[.4,2,.034],[.68,2,.042],[.86,3,.014]])for(let g=0;g<d;g++){const _=new Ur,m=f*Math.min(1,e/.6);_.absellipse(a*u,o*(g+.5)/d,m,m,0,Math.PI*2,!0),c.holes.push(_)}const l=new Gr(c,{depth:s,bevelEnabled:!1,curveSegments:8,steps:1}),h=l.attributes.position;for(let u=0;u<h.count;u++){const d=h.getX(u),f=h.getY(u)/e,g=e+(n-e)*d/a+h.getZ(u);h.setXYZ(u,i+d,g*Math.cos(f),g*Math.sin(f))}return l.computeVertexNormals(),l}const sl=[-5,-3.5,-1.4,-.15,.35,.85,1.4,3.75,4.89],Ze=[-5,-3,-1.94,-1.1,-.72,-.25,.35,2.45,4.89];function vu(i,t,e){let n=t.findIndex((s,r)=>r<t.length-1&&i>=s&&i<t[r+1]);return n<0&&(n=i<t[0]?0:t.length-2),e[n]+(i-t[n])/(t[n+1]-t[n])*(e[n+1]-e[n])}const Kg=i=>vu(i,sl,Ze),Mu=i=>vu(i,Ze,sl),yu=[{name:"低压压气机",tag:"LPC · 4 STAGES",short:"低压压气机",desc:"四级轴流低压压气机。与后方低压涡轮通过内侧长轴连接；级间静子固定，转子叶排随轴转动。叶片数、扭转和轴向尺寸为可视化重建。"},{name:"高压压气机",tag:"HPC · 9 STAGES",short:"高压压气机",desc:"九级轴流高压压气机，由高压涡轮通过外侧同心轴驱动。逐级压缩使核心气流升温；外涵气流从这一段外侧绕过核心机。"},{name:"环形燃烧室",tag:"ANNULAR COMBUSTOR",short:"主燃烧室",desc:"内外火焰筒形成连续环形燃烧空间。图中喷油位置、稀释孔和火焰形态为示意；核心气流在这里获得热量，外涵空气仍沿外围通过。"},{name:"高压涡轮",tag:"HPT · 1 STAGE",short:"高压涡轮",desc:"一级高压涡轮，先经过固定导向叶片，再经过转子叶片。提取燃气能量以驱动九级高压压气机；叶片冷却孔道未作真实几何复原。"},{name:"低压涡轮",tag:"LPT · 1 STAGE",short:"低压涡轮",desc:"一级低压涡轮，与四级低压压气机同轴联动。高低压转子独立转动；动画转速经大幅降低，以便观察叶排。"},{name:"混合段",tag:"CORE / BYPASS MIXER",short:"混合段",desc:"涡轮之后，核心热气流与外涵空气混合，再进入共同的加力燃烧室。混合器瓣形及混合长度仅作构型表达。"},{name:"加力燃烧室",tag:"AFTERBURNER",short:"加力燃烧室",desc:"共同加力燃烧室位于混合段之后。开启加力后再次加热气流；关闭加力时仍有主燃烧、转子运转和尾喷气流。稳定器与喷油环为简化几何。"},{name:"可调收扩喷管",tag:"VARIABLE C–D NOZZLE",short:"收扩喷管",desc:"基础型 AL-31F 使用可调面积超声速喷管。这里展示收敛段、喉部和扩张段，随加力开关调整开度。基础型不添加 AL-31FP 的推力矢量偏转。"}];function Su(i=85,t=!0){const e=Math.max(0,Math.min(1,(i-30)/70));return[288,360+90*e,580+180*e,1100+550*e,900+400*e,780+280*e,630+220*e,t?1500+600*e:620+220*e,t?1150+450*e:490+170*e]}function Jg(i,t,e,n,s){const r=s||Su(e,n);if(t&&i>Ze[1]&&i<Ze[5])return r[1]+22*(i-Ze[1])/(Ze[5]-Ze[1]);let o=Ze.findIndex((l,h)=>h<Ze.length-1&&i>=l&&i<Ze[h+1]);if(o<0)return i<-5?r[0]:r[8];const a=(i-Ze[o])/(Ze[o+1]-Ze[o]),c=t&&o===5?r[1]+22:r[o];return c+(r[o+1]-c)*a}function Qg(i,t=!1,e=!0){if(i=Mu(i),i<-3.5)return[.28+.075*(i+5),.85-.05*(i+5)/1.5];if(t&&i<1.15)return[.79,.88];if(t&&i<1.4){const s=(i-1.15)/.25;return[.79*(1-s)+.24*s,.88*(1-s)+.8*s]}if(i<-1.4){const s=(i+3.5)/2.1;return[.38+.11*s,.72-.11*s]}if(i<-.15)return[.37,.67];if(i<.85)return[.37,.64];if(i<1.4)return[.38-.055*(i-.85)/.55,.8];if(i<2.5)return[.325*(2.5-i)/1.1+.035,.79];if(i<3.75)return[.035,.79];const n=e?.6:.43;return i<4.37?[.02,.79+(n-.79)*(i-3.75)/.62]:i<4.89?[.02,n+(.69-n)*(i-4.37)/.52]:[0,.66+(i-4.89)*.14]}const t_=Object.freeze(Object.defineProperty({__proto__:null,boundaries:Ze,constructionBounds:sl,fromLayout:Mu,parts:yu,passage:Qg,stationTemperatures:Su,temperatureAt:Jg,toLayout:Kg},Symbol.toStringTag,{value:"Module"})),Ts={cfm56:{fanDiameterM:1.5494,fanRadius:2.65,bounds:[[-5,-2.8],[-3.3,-1.2],[-1.2,.65],[.65,1.55],[1.55,2.02],[2.02,3.8],[-2.8,2.2],[3.8,4.89]],fan:{count:24,x:-4,hub:.8,chord:.95,statorX:-2.95,splitter:1.42,spinner:[[-5,.005],[-4.82,.24],[-4.42,.6],[-4,.79],[-3.3,.74]]},stages:{1:{hub:[.74,.68],tip:[1.37,1.15],activeFraction:.65},2:{hub:[.68,.64],tip:[1.13,.82]},4:{hub:[.68,.69],tip:[1.13,1.27]},5:{hub:[.69,.85],tip:[1.27,1.72]}},combustor:{inner:.62,outer:1.12,caseRadius:1.27},bypass:{outer:[[-2.8,2.69],[-1.7,2.65],[0,2.49],[1.2,2.29],[2.2,2.09]],inner:[[-2.8,1.47],[-1.2,1.48],[.65,1.5],[2.2,1.6]]},exhaust:{outer:[[3.8,1.79],[4.01,1.72],[4.38,1.5],[4.89,1.22]],plug:[[3.8,.85],[4.05,.72],[4.5,.38],[4.89,.008]]},caseColor:10987925},ge90:{fanDiameterM:3.2512,fanRadius:3.05,bounds:[[-5,-2.65],[-3.35,-1.5],[-1.5,.47],[.47,1.23],[1.23,1.99],[1.99,3.85],[-2.65,2.1],[3.85,4.89]],fan:{count:22,x:-4,hub:.82,chord:1.1,statorX:-2.83,splitter:1.36,spinner:[[-5.4,.005],[-5.18,.19],[-4.51,.55],[-4.03,.8],[-3.35,.72]]},stages:{1:{hub:[.72,.7],tip:[1.32,1.08],activeFraction:.77},2:{hub:[.7,.72],tip:[1.06,.92]},4:{hub:[.59,.6],tip:[.96,1.1]},5:{hub:[.6,.91],tip:[1.1,1.91]}},combustor:{inner:.51,outer:1.04,caseRadius:1.18},bypass:{outer:[[-2.65,3.1],[-1.8,3.08],[-.3,2.9],[1.15,2.58],[2.1,2.39]],inner:[[-2.65,1.41],[-1.5,1.44],[.47,1.44],[2.1,1.47]]},exhaust:{outer:[[3.85,1.98],[4.02,1.92],[4.42,1.64],[4.89,1.38]],plug:[[3.85,.91],[4.04,.79],[4.51,.43],[4.89,.008]]},caseColor:8687975}};function As(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>o+(s[a+1]-o)*r)}return i.at(-1).slice(1)}function e_(i){const{fan:t,bounds:e,stages:n,combustor:s,exhaust:r}=i,o=[[-5.5,.01,t.splitter],[t.x,t.hub+.03,t.splitter]];for(const l of[1,2]){const[h,u]=e[l],d=n[l];o.push([h,d.hub[0]+.025,d.tip[0]-.025],[h+(u-h)*(d.activeFraction||1)-.035,d.hub[1]+.025,d.tip[1]-.025]),d.activeFraction&&o.push([u-.035,d.hub[1]+.025,d.tip[1]-.025])}const[a,c]=e[3];o.push([a+.1,s.inner+.035,s.outer-.035],[c-.1,s.inner+.035,s.outer-.035]);for(const l of[4,5]){const[h,u]=e[l],d=n[l];o.push([h,d.hub[0]+.025,d.tip[0]-.025],[u-.025,d.hub[1]+.025,d.tip[1]-.025])}for(const[l,h]of r.outer)o.push([l,As(r.plug,l)[0]+.025,h-.045]);return o.push([6.1,0,r.outer.at(-1)[1]+.15]),o}const bi={rb211:{fanRadius:2.3,bounds:[[-5,-3.75],[-3.75,-1.6],[-1.6,.15],[.15,1.05],[1.05,1.48],[1.48,1.95],[1.95,3.3],[-3.75,3.45],[3.3,3.95],[3.95,4.89]],core:[[-5.3,.15,1.23],[-4.3,.66,1.23],[-3.75,.48,1.28],[-1.6,.54,1],[.15,.57,.78],[.35,.48,.88],[.95,.48,.88],[1.05,.43,.78],[1.48,.43,.82],[1.5,.43,.84],[1.95,.43,.9],[2,.43,.92],[3.3,.5,1.21],[3.95,.38,1.47],[4.34,.23,1.34],[4.89,.02,1.06],[6.1,.02,1.26]],bypass:[[-5.3,1.46,2.23],[-3.75,1.46,2.27],[-2.2,1.25,2.18],[-1.6,1.17,2.13],[.1,1.18,1.98],[1.15,1.12,1.9],[1.6,1.08,1.82],[3.3,1.37,1.55],[3.45,1.25,1.52],[3.95,.38,1.47],[4.34,.23,1.34],[4.89,.02,1.06],[6.1,.02,1.26]],stationX:[-5,-3.75,-1.6,.15,1.05,1.48,1.95,3.3,3.95,4.89]},pt6a:{fanRadius:.72,propellerRadius:2.55,bounds:[[-5.15,-4.75],[-4.7,-3.2],[-2.7,-1.55],[-1.2,-.45],[-.25,1.3],[1.35,1.95],[1.95,3.45],[3.5,4.5],[-3.35,-2.65]],flow:[[0,4.65,.36,.7],[.1,3.45,.29,.66],[.28,1.95,.38,.61],[.36,1.65,.4,.65],[.43,1.53,.96,1.04],[.48,1.64,1.1,1.22],[.53,2.05,1.11,1.23],[.57,1.4,1.1,1.22],[.61,1.26,.82,1.04],[.66,.4,.73,.95],[.69,-.15,.72,.93],[.73,-.45,.32,.64],[.78,-1.2,.32,.65],[.85,-2.7,.32,.65]],stationProgress:[0,.28,.43,.73,.78,.85,1],stationX:[4.65,1.95,1.53,-.45,-1.2,-2.7,-4.35]},pegasus:{fanRadius:1.65,bounds:[[-5,-2.5],[-2.5,-.25],[-.25,.65],[.65,1.42],[1.42,2.4],[-2.3,-1.3],[2.45,3.4]],core:[[-5.2,.23,1.5],[-4.65,.49,1.5],[-2.7,.59,1.48],[-2.5,.59,.93],[-.25,.52,.72],[.05,.41,.8],[.57,.41,.8],[.65,.38,.71],[1.42,.38,.77],[1.46,.39,.78],[2.4,.39,.91],[2.8,.3,.99]],bypass:[[-5.2,.98,1.5],[-2.5,.99,1.35],[-1.8,1.05,1.32]],stationX:[-5,-2.5,-.25,.65,1.42,2.4,3.45],stationProgress:[0,.25,.47,.56,.64,.73,1]}};function ni(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>o+(s[a+1]-o)*r)}return i.at(-1).slice(1)}function Eu(i,t=1,e=0){t=t<0?-1:1;const n=Math.max(0,Math.min(90,Number(e)||0))*Math.PI/180,s=Math.cos(n),r=Math.sin(n),o=[i?-1.8:2.8,0,t*(i?1.7:1.3)],a=[[0,0,0],[.03,0,t*.3],[.28,0,t*.57],[.65,0,t*.7]].map(([c,l,h])=>[o[0]+c*s+l*r,-c*r+l*s,o[2]+h]);return{pivot:o,exit:a.at(-1),direction:[s,-r,0],points:a,radius:i?.36:.33}}const le={rb:["EASA E.061 第 6–7 页：RB211-535 构型、级数与共同喷口","https://www.easa.europa.eu/en/downloads/7699/en#page=6"],rr:["Rolls-Royce：RB211-535E4 与 Boeing 757","https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/rb211-535e4.aspx"],pt:["NTSB ENG11IA032 第 3 页：PT6A-27 纵剖与轴系","https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=pdf&FileName=ENG11IA032-fac-j-Rel.pdf&ID=9986803#page=3"],tc:["FAA E4EA 型号合格证：PT6A-27 级数","https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=.PDF&FileName=Excerpts+from+Engine+Type+Certificate+Data+Sheet-Master.PDF&ID=40335459#page=1"],pw:["Pratt & Whitney：PT6A 回流式与自由动力涡轮","https://www.prattwhitney.com/products/general-aviation-engines/pt6a"],nasa:["NASA TM-82770 第 4 页与图 1：Pegasus 11 轴系、级数和四喷口","https://ntrs.nasa.gov/api/citations/19820005271/downloads/19820005271.pdf#page=4"],peg:["Rolls-Royce：Pegasus 11-61 型号说明","https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/pegasus.aspx"],museum:["Science Museum 第 118 页：Pegasus 实物与压气机级数","https://www.sciencemuseum.org.uk/sites/default/files/2025-11/Flight-Large%20Print%20Book%202%20of%203-DIGITAL.pdf#page=118"]},n_="轴向位置、半径、叶型、叶片数及安装细节是教学重建，不能作为制造尺寸。";function Re(i,t,e,n,s,r,o=0,a=null,c=0,l=[],h=[]){return{id:i,name:t,short:t,tag:e,kind:n,bounds:s,desc:r,stages:o,spool:a,spin:c,evidence:{facts:l,approximation:n_,sources:h}}}const Ln=bi.rb211.bounds,Vn=bi.pt6a.bounds,gi=bi.pegasus.bounds,i_=[{id:"rb211",name:"RB211-535E4",variant:"RB211-535E4-37",classic:!0,subtitle:"三转子 · 高涵道比涡扇 · 混合排气",family:"THREE-SPOOL TURBOFAN",summary:"1 + 6 + 6 级压缩系统 · 三根独立同心轴 · 共同喷口",facts:["1 + 6 + 6 级压缩系统","三转子","1 + 1 + 3 级涡轮"],spools:3,afterburner:!1,hasBypass:!0,exhaustType:"mixed",fanRadius:2.3,classicLayout:bi.rb211,parts:[Re("fan","低压风扇","LP FAN · 1 STAGE","fan",Ln[0],"单级风扇与三级低压涡轮由最长的内轴连接。叶片数与宽弦轮廓为教学近似。",1,"lp",1,["单级低压风扇；由三级低压涡轮驱动。"],[le.rb]),Re("ipc","中压压气机","IPC · 6 STAGES","compressor",Ln[1],"六级中压压气机由独立的中压涡轮驱动，形成第三套轴系。不能按双转子风扇增压级处理。",6,"ip",1.2,["六级中压压气机；与一级中压涡轮同轴。"],[le.rb]),Re("hpc","高压压气机","HPC · 6 STAGES","compressor",Ln[2],"六级高压压气机和一级高压涡轮共用最外层的短轴。三套转子可以以不同速度运行。",6,"hp",1.45,["六级高压压气机；与一级高压涡轮同轴。"],[le.rb]),Re("combustor","环形燃烧室","ANNULAR COMBUSTOR","combustor",Ln[3],"环形燃烧室提高核心气流总温。火焰、喷嘴和衬筒孔排列为教学重建。",0,null,0,["单环形燃烧室。"],[le.rb]),Re("hpt","高压涡轮","HPT · 1 STAGE","hpt",Ln[4],"一级高压涡轮驱动高压压气机；高压系统以同一颜色关联。",1,"hp",1.45,["一级高压涡轮。"],[le.rb]),Re("ipt","中压涡轮","IPT · 1 STAGE","ipt",Ln[5],"一级中压涡轮位于高压与低压涡轮之间，单独驱动六级中压压气机。",1,"ip",1.2,["一级中压涡轮。"],[le.rb]),Re("lpt","低压涡轮","LPT · 3 STAGES","lpt",Ln[6],"三级低压涡轮驱动单级风扇，独立于中压和高压系统。",3,"lp",1,["三级低压涡轮。"],[le.rb]),Re("bypass","外涵通道","BYPASS TO MIXER","bypass",Ln[7],"外涵冷流沿核心机外围到达后方混合区，再由共同喷口排出。粒子数量比例不表示真实涵道比。",0,null,0,["EASA 给出 -535E4 名义涵道比 4.40；后方采用共同喷口。"],[le.rb]),Re("mixer","内外涵混合区","COMMON EXHAUST MIXING","mixer",Ln[8],"这里将冷、热两股流路汇合。花瓣轮廓只表示混合器功能；总温按等比热、给定质量比的能量混合近似。",0,null,0,["共同喷口由 EASA 型号数据单支持。"],[le.rb]),Re("exhaust","共同排气喷口","COMMON NOZZLE · NO REHEAT","exhaust",Ln[9],"混合气流经共同喷口排出，无加力燃烧。绝热喷口内总温保持不变，未求解静温和速度场。",0,null,0,["EASA 长度定义为整流锥前端至共同喷口后缘。"],[le.rb])],sources:[le.rb,le.rr],evidence:"采用 -535E4-37。EASA 约束三转子、1/6/6 压缩级数、1/1/3 涡轮级数与共同喷口；叶片数、叶型、混合器花瓣和内部比例为教学重建。不同发动机整机长度口径不统一，模型各自适配窗口。"},{id:"pt6a",name:"PT6A-27",classic:!0,subtitle:"回流式涡桨 · 自由动力涡轮 · 减速传动",family:"REVERSE-FLOW TURBOPROP",summary:"3 级轴流 + 1 级离心压气机 · 独立动力涡轮 · 两级减速齿轮",facts:["3 轴流 + 1 离心","自由动力涡轮","两级减速齿轮"],spools:2,afterburner:!1,hasBypass:!1,exhaustType:"side",fanRadius:.72,classicLayout:bi.pt6a,parts:[Re("propeller","螺旋桨（安装示意）","PROPELLER · ILLUSTRATIVE","propeller",Vn[0],"动力涡轮经减速齿轮驱动螺旋桨。这里的四叶桨仅作安装示意；桨型和叶片数由飞机安装方案决定。",0,"prop",.8/9,["发动机通过齿轮箱驱动可变距恒速螺旋桨。"],[le.pt]),Re("gearbox","两级减速齿轮箱","2-STAGE REDUCTION","gearbox",Vn[1],"将自由动力涡轮转速降低后传给桨轴。模型每级按 3:1、总计 9:1 联动；齿数、齿形和 9:1 减速比为演示假设，不是真机参数。",0,"power",.8,["PT6A-27 使用两级减速齿轮箱；厂家实际齿数与传动比未在此复原。"],[le.pt]),Re("power","自由动力涡轮","FREE POWER TURBINE · 1 STAGE","power",Vn[2],"一级自由动力涡轮与燃气发生器机械上独立；燃气把能量传给它，再经减速机构输出轴功。",1,"power",.8,["一级自由动力涡轮；与燃气发生器分轴。"],[le.pt,le.tc]),Re("gas-turbine","燃气发生器涡轮","GAS-GENERATOR TURBINE · 1","hpt",Vn[3],"一级涡轮驱动后三个轴流级及一个离心级。热气流在这里朝螺旋桨方向流动。",1,"hp",1.45,["一级燃气发生器涡轮驱动四级压气机。"],[le.pt,le.tc]),Re("combustor","回流式环形燃烧室","REVERSE-FLOW ANNULAR","combustor",Vn[4],"压缩空气从离心叶轮外缘进入外部通道，绕至头部后折返燃烧，再向前进入涡轮。示踪流线明确显示该转弯。",0,null,0,["PT6A-27 采用回流式环形燃烧室。"],[le.pt]),Re("centrifugal","离心压气机","CENTRIFUGAL · 1 STAGE","centrifugal",Vn[5],"从轴向叶排进入叶轮中心，沿径向向外压缩，再经扩压通道进入燃烧室外部。",1,"hp",1.45,["压气机末级为一个离心级。"],[le.pt,le.tc]),Re("axial","轴流压气机","AXIAL COMPRESSOR · 3","compressor",Vn[6],"空气从发动机后部进气，向前通过三级轴流压气机，再到离心叶轮。",3,"hp",1.45,["三个轴流压气机级。"],[le.pt,le.tc]),Re("inlet","后部进气口","REAR AIR INLET","inlet",Vn[7],"后部进气与前端输出桨轴形成鲜明区别。气流不穿过螺旋桨、齿轮箱或实心转轴。",0,null,0,["PT6A 回流式构型与后部进气。"],[le.pw,le.pt]),Re("exhaust","两侧排气管","SIDE EXHAUST DUCTS","exhaust",Vn[8],"做功后的燃气从动力涡轮前方汇入两侧排气管。管路形状和安装角度为教学近似。",0,null,0,["NTSB 的 PT6A-27 剖面显示动力段与前部排气位置。"],[le.pt])],sources:[le.pt,le.tc,le.pw],evidence:"具体选择 PT6A-27；NTSB 实机调查与 FAA 型号证支持 3 轴流+1 离心、一级燃气发生器涡轮、一级自由动力涡轮和两级减速。四叶桨为安装示意，未声称真实传动比。内部流路与回流环转弯按示意图重建，非 CFD。"},{id:"pegasus",name:"Pegasus 11-61",classic:!0,subtitle:"双转子反向旋转 · 四喷口矢量推力",family:"VECTORED-THRUST TURBOFAN",summary:"3 + 8 级压气机 · 2 + 2 级涡轮 · 前冷后热四喷口",facts:["3 + 8 级压气机","双转子反向旋转","四个联动喷口"],spools:2,afterburner:!1,hasBypass:!0,exhaustType:"side",fanRadius:1.65,classicLayout:bi.pegasus,parts:[Re("fan","低压风扇","LP FAN · 3 STAGES","fan",gi[0],"三级低压系统压缩全部进气；外涵部分分配到前方一对冷喷口，核心气流继续进入高压压气机。",3,"lp",1,["Pegasus 11 采用三级风扇，由两级低压涡轮驱动。"],[le.nasa,le.museum]),Re("hpc","高压压气机","HPC · 8 STAGES","compressor",gi[1],"八级高压压气机与低压系统反向旋转。转速减慢用于观察，同一轴上的涡轮保持联动。",8,"hp",-1.4,["Pegasus 11 的八级高压压气机；两个轴系独立、同轴、反向旋转。"],[le.nasa]),Re("combustor","环形燃烧室","ANNULAR COMBUSTOR","combustor",gi[2],"核心气流在环形燃烧室升温；前方冷喷口的气流不经过燃烧室。",0,null,0,["NASA Pegasus 11 图 1 给出核心燃烧室与分流布局。"],[le.nasa]),Re("hpt","高压涡轮","HPT · 2 STAGES","hpt",gi[3],"两级高压涡轮带动八级高压压气机，以相同速度和方向旋转。",2,"hp",-1.4,["Pegasus 11 高压轴由两级涡轮驱动。"],[le.nasa]),Re("lpt","低压涡轮","LPT · 2 STAGES","lpt",gi[4],"两级低压涡轮经内轴驱动三级风扇，随后热气流分至后方左右两个喷口。",2,"lp",1,["Pegasus 11 低压轴由两级涡轮驱动。"],[le.nasa]),Re("cold-nozzles","前部冷流喷口","FRONT PAIR · FAN AIR","cold-nozzle",gi[5],"前方两只转动喷口接收风扇外涵气流。改变角度时，与后方两只热喷口保持同向联动。",0,null,0,["风扇与核心分流；四个喷口机械联动，使推力方向一致。"],[le.nasa]),Re("hot-nozzles","后部热流喷口","REAR PAIR · CORE GAS","hot-nozzle",gi[6],"后方两只喷口接收经过燃烧室和涡轮的热气流。角度 0° 表示向后排气，90° 表示向下排气。",0,null,0,["NASA Pegasus 11 报告描述四喷口 0–98.5° 偏转；本演示限定 0–90°。"],[le.nasa])],sources:[le.peg,le.nasa,le.museum],evidence:"11-61 型号身份由 Rolls-Royce 产品页支持；级数、反向轴系与四喷口原理按 NASA 的 Pegasus 11 同族公开报告重建，未将报告中的旧型推力、转速或温度冒充 11-61 性能数据。喷口联动演示不含整机飞行动力学、水喷射或姿态控制。"}],on=(i,t,e,n,s,r=0,o=0)=>({name:i,short:i,tag:t,kind:e,bounds:n,desc:s,stages:r,spin:o}),Tc=(i,t,e,n)=>[on("风扇","FAN · 1 STAGE","fan",[-5,-3.65],n?"直径 3.2512 m，22 片弯曲复合材料叶片，带钛前缘保护。径向中部宽腹与外段弯钩参考 GE / MoMA 实物图；叶型截面、扭转和扫掠量为外形近似。":"直径 1.5494 m，24 片宽弦钛合金叶片，配锥椭圆整流锥。24 片依据 NTSB 实机调查修正早期宣传中的 22 片；叶型、扭转和尺寸分布为外形近似。",1,1),on("低压增压级",`BOOSTER · ${i} STAGES`,"booster",[-3.65,-2.4],`${i} 级低压增压级，仅进一步压缩核心气流。与风扇、低压涡轮同轴旋转。`,i,1),on("高压压气机","HPC · 9 STAGES","compressor",[-2.4,-.45],"九级高压压气机，经独立的高压轴由高压涡轮驱动。外涵空气从核心机外围绕过。",9,1.45),on(n?"双环燃烧室":"单环燃烧室",n?"DOUBLE ANNULAR · DAC":"SINGLE ANNULAR · SAC","combustor",[-.45,.65],n?"GE90-115B 采用双环燃烧室。模型以径向两圈喷嘴头部表达 DAC 构型；实际穹顶形状、分区配油和燃烧过程未复原。":"这里选用 CFM56-7B26 的 SAC 单环版本；不与 /2 的双环版本混用。喷油头部、火焰筒通孔与尺度为示意。"),on("高压涡轮",`HPT · ${t} STAGES`,"hpt",[.65,1.4],`${t} 级高压涡轮，通过高压轴驱动九级高压压气机。导向叶排固定，转子叶排旋转；内部冷却通道未复原。`,t,1.45),on("低压涡轮",`LPT · ${e} STAGES`,"lpt",[1.4,3.45],`${e} 级低压涡轮，驱动前方风扇和增压级。沿程逐级做功降温；叶片数和叶型为教学重建。`,e,1),on("外涵道与风扇喷口","BYPASS · SEPARATE EXHAUST","bypass",[-3.65,.8],"大部分示踪线沿外围冷流通道前行，从风扇喷口独立排出。此机型为分流排气，不设置 AL-31F 式共同混合加力段；示踪线比例不等于真实涵道比。"),on("核心排气喷口","CORE EXHAUST · NO REHEAT","exhaust",[3.45,4.89],"核心燃气通过低压涡轮后，经尾锥外围独立排出。无加力燃烧，也不采用军用可调收扩喷管。尾锥与短舱轮廓为示意。")].map((s,r)=>({...s,bounds:Ts[n?"ge90":"cfm56"].bounds[r]})),yn=[{id:"al31f",name:"AL-31F",subtitle:"双转子 · 加力式涡扇发动机",family:"LOW-BYPASS TURBOFAN",summary:"4 + 9 级压气机 · 双轴 · 混合排气与共同加力",facts:["4 + 9 级压气机","双转子","1 + 1 级涡轮"],spools:2,afterburner:!0,fanRadius:1,parts:yu.map((i,t)=>({...i,bounds:[Ze[t],Ze[t+1]],stages:{0:4,1:9,3:1,4:1}[t]||0})),sources:[["MAI / Saturn / Lyulka，2008 AL-31F 图册","https://djvu.online/file/IF4LC5NA9fozh"],["AL-31F 原始纵剖图","https://djvu.online/jpg1/I/F/4/IF4LC5NA9fozh/004.webp"],["Rosoboronexport 官方产品说明","https://roe.ru/pdfs/pdf_4785.pdf"]],evidence:"主要轴向比例按公开纵剖估计。图册全长 4,990 mm 与官方 4,945 mm 存在口径差异；基础 AL-31F 不加入 AL-31FP 动态矢量偏转或 AL-31FN 附件布局。"},{id:"j79",name:"J79-GE-15",subtitle:"单转子 · 加力式涡喷发动机",family:"AFTERBURNING TURBOJET",summary:"17 级压气机 · 单轴 · 管环式燃烧室 · 无外涵道",facts:["17 级压气机","单转子","3 级涡轮"],spools:1,afterburner:!0,fanRadius:1,parts:[on("轴流压气机","COMPRESSOR · 17 STAGES","compressor",[-5,-1.75],"十七级轴流压气机。全部转子叶排与后方三级涡轮由同一根轴联动；没有独立低压转子或外涵道。可变静子机构未复原。",17,1),on("管环式燃烧室","CAN-ANNULAR · 10 CANS","combustor",[-1.75,-.45],"十个独立火焰筒沿圆周布置于公共机匣内。十筒结构参考公开 XJ79 同族原始报告，不声称这是 GE-15 的厂家尺寸图纸。"),on("三级涡轮","TURBINE · 3 STAGES","turbine",[-.45,.85],"三级涡轮驱动前方十七级压气机，全部转子叶排归属同一转子系统；导向叶排保持固定。",3,1),on("涡轮后支承与尾锥","REAR FRAME","frame",[.85,1.4],"涡轮出口的固定支承与尾锥。该位置没有内外涵混合器，因为 J79 是涡喷发动机。"),on("加力燃烧室","AFTERBURNER","afterburner",[1.4,3.55],"涡轮后的加力段可再次加热核心气流。火焰稳定器、喷油环和衬筒为近似几何，未求解燃烧化学。"),on("可调面积喷口","VARIABLE-AREA NOZZLE","nozzle",[3.55,4.89],"随演示工况调整开度的喷口。仅表达可调面积特征，不把 AL-31F 的详细收扩机构当作 J79 真实机构。")],sources:[["美国空军国家博物馆：J79-GE-15、17/3 级数","https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/197630/general-electric-j79-turbojet/"],["NACA 1957 XJ79 原始报告，第 3 页：十筒与加力构型","https://digital.library.unt.edu/ark:/67531/metadc63906/m1/3/"]],evidence:"型号与级数按美国空军博物馆 GE-15 馆藏资料。管环式十筒结构参考同族 XJ79 报告，内部尺寸和喷口机构为教学布局。"},{id:"cfm56",name:"CFM56-7B26",subtitle:"双转子 · 高涵道比涡扇 · SAC",family:"HIGH-BYPASS TURBOFAN",summary:"Ø 1.55 m · 24 片宽弦钛风扇 · 3 级增压 + 9 级高压压气机 · 1 + 4 级涡轮",facts:["1 + 3 + 9 级压缩系统","双转子","1 + 4 级涡轮"],spools:2,afterburner:!1,layout:Ts.cfm56,fanRadius:Ts.cfm56.fanRadius,parts:Tc(3,1,4,!1),sources:[["NTSB CFM56-7B 实机调查：24 片风扇叶片","https://www.ntsb.gov/investigations/pages/DCA18MA142.aspx"],["NTSB / CFM 纵剖图与叶片图：报告第 6–8 页","https://data.ntsb.gov/carol-repgen/api/Aviation/ReportMain/GenerateFinalReport/93897/pdf"],["EASA E.004 型号合格证：CFM56-7B 级数与 SAC/DAC 变型","https://www.easa.europa.eu/en/downloads/7795/en"],["CFM 历史资料：61 英寸与钛宽弦叶片；叶片数按 NTSB 修正","https://www.cfmaeroengines.com/press-articles/thats-not-something-you-see-every-day"],["FAA CLEEN 评估报告：CFM56-7B 分流排气","https://ascent.aero/documents/2020/02/environmental-design-space-assessment-of-continuous-lower-energy-emissions-and-noise-cleen-technologies.pdf/"]],evidence:"具体采用 -7B26 单环燃烧室版本；不采用 /2 双环版本。一级风扇、三级增压级、九级高压压气机、一级高压和四级低压涡轮由 EASA 数据单约束；风扇直径 61 英寸由 CFM 约束；叶片数采用 NTSB 实机调查的 24 片，修正早期宣传页的 22 片。风扇、核心机与涡轮的轮廓分别参考公开图重建，内部位置与径向比例为图像估计。"},{id:"ge90",name:"GE90-115B",subtitle:"双转子 · 高涵道比涡扇 · DAC",family:"HIGH-BYPASS TURBOFAN",summary:"Ø 3.25 m · 22 片弯曲复材风扇 · 钛前缘 · 4 级增压 · 2 + 6 级涡轮",facts:["1 + 4 + 9 级压缩系统","双转子","2 + 6 级涡轮"],spools:2,afterburner:!1,layout:Ts.ge90,fanRadius:Ts.ge90.fanRadius,dac:!0,parts:Tc(4,2,6,!0),sources:[["MoMA：GE90-115B 实物弯曲复材叶片","https://www.moma.org/collection/works/93637"],["Stanford / GE 纵剖与实机图：第 56 页图 4.19","https://ihmegroup.github.io/assets/pdf/ME257.pdf"],["GE 官方产品对比：GE90-115B 级数","https://www.geaerospace.com/commercial/aircraft-engines/ge90"],["GE 官方历史：128 英寸、22 片复材风扇","https://www.geaerospace.com/pl/node/5315"],["GE 官方：GE90-115B 双环燃烧室","https://www.geaerospace.com/news/press-releases/commercial-engines/delivering-2000th-ge90-engine-and-counting"],["辛辛那提大学研究：GE90 分流排气示意","https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ucin1085666850&disposition=inline"]],evidence:"采用 -115B 的四级增压级和九级高压压气机，不混入早期 -94B 的 3/10 配置。128 英寸为风扇直径，135 英寸最大外径不是同一参数。双环构型以径向两圈头部表达，未重建真实穹顶和配油系统。"}];yn.push(...i_);const Ac={al31f:[["四级低压压气机，与低压涡轮同轴。",0],["九级高压压气机，由独立高压轴驱动。",0],["连续环形燃烧室。",0],["一级高压涡轮，驱动高压压气机。",0],["一级低压涡轮，驱动低压压气机。",0],["涡轮后内外涵混合，随后进入共同加力段。",0],["混合气流的共同加力燃烧室。",0],["基础 AL-31F 可调面积收扩喷管；不加入 AL-31FP 矢量偏转。",0]],j79:[["J79-GE-15：十七级压气机、单转子构型。",0],["十筒管环式布局由同族 XJ79 原始报告支持，非 GE-15 尺寸图。",1],["J79-GE-15：三级涡轮驱动同一根轴上的压气机。",0],["J79 是无外涵的涡喷；此处后支承与尾锥的具体结构属于教学重建。",0],["J79 的加力式涡喷构型由博物馆资料支持。",0],["加力涡喷尾部喷口为可视化重建；本模型未复原真实作动机构。",0]],cfm56:[["61 英寸风扇；NTSB 实机调查确认 24 片钛风扇叶片。",0],["三级低压增压级，与风扇和低压涡轮同轴。",2],["九级高压压气机。",2],["具体采用 CFM56-7B26 的 SAC 单环版本，不与 /2 DAC 版本混用。",2],["一级高压涡轮。",2],["四级低压涡轮。",2],["独立外涵喷口，外涵流不经过核心燃烧室。",4],["核心气流独立排气，没有加力段。",4]],ge90:[["GE90-115B 风扇直径 128 英寸、22 片复合材料叶片；实物叶片图见 MoMA。",3],["-115B 采用四级低压增压级。",2],["-115B 采用九级高压压气机。",2],["GE90-115B 采用双环燃烧室；模型用两圈头部表达。",4],["两级高压涡轮。",2],["六级低压涡轮。",2],["核心与外涵采用分流排气。",5],["核心燃气独立排气，不设置加力段。",5]]};for(const i of yn)Ac[i.id]&&i.parts.forEach((t,e)=>{const[n,s]=Ac[i.id][e],r=i.id==="al31f"||i.id==="cfm56"||i.id==="ge90"?i.sources[1]:null;t.evidence={facts:[n],approximation:"内部位置、半径、叶型、零件间隙和附属结构按公开图示或教学布局重建，未验证每一项细节；只有明确列出的级数、轴系和构型属于资料约束。",sources:[i.sources[s],...r?[r]:[]]}});const Xr=i=>yn.find(t=>t.id===i)||yn[0],Da=(i,t,e)=>i+(t-i)*e;function Ss(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>Da(o,s[a+1],r))}return i.at(-1).slice(1)}function s_(i){const t=i.id==="j79",e=i.fanRadius,n=i.layout,s=n?e_(n):null,r=t?[-5,-1.75,-.45,.85,1.4,3.55,4.89]:[n.bounds[0][0],n.fan.x+n.fan.chord*.55+.025,...n.bounds.filter((u,d)=>d>0&&d!==6).map(u=>u[1])],o=t?["进气","压气机出口","燃烧室出口","涡轮出口","加力进口","加力出口","喷口出口"]:["进气","风扇出口","增压级出口","高压压气机出口","燃烧室出口","高压涡轮出口","低压涡轮出口","核心喷口出口"];function a(u=85,d=!0){const f=Math.max(0,Math.min(1,(u-30)/70));return t?[288,600+180*f,1100+410*f,760+290*f,750+270*f,d?1450+530*f:740+260*f,d?1100+440*f:550+170*f]:[288,315+45*f,410+100*f,660+210*f,1200+520*f,990+400*f,620+230*f,450+170*f]}function c(u,d,f,g,_){const m=_||a(f,g);return d&&!t?u<r[1]?Ss([[r[0],288],[r[1],m[1]]],u)[0]:m[1]:Ss(r.map((p,S)=>[p,m[S]]),u)[0]}function l(u,d=!1,f=!0){if(n){if(d){const{inner:_,outer:m}=n.bypass,p=m.at(-1)[0];if(u<_[0][0])return[n.fan.splitter+.045,e-.035];if(u<=p)return[As(_,u)[0]+.06,As(m,u)[0]-.045];const S=n.exhaust.outer[0];return Ss([[p,_.at(-1)[1]+.06,m.at(-1)[1]-.045],[S[0],Math.max(_.at(-1)[1]+.1,S[1]+.13),m.at(-1)[1]+.13],[6.1,S[1]+.15,m.at(-1)[1]+.32]],u)}const g=As(s,u);return u<n.fan.x&&(g[0]=As(n.fan.spinner,u)[0]+.025),g}return Ss(t?[[-5.5,.25,.86],[-4.8,.25,.86],[-1.8,.46,.67],[-1.62,.35,.76],[-.55,.35,.76],[-.4,.35,.72],[.83,.34,.75],[1.5,.28,.8],[2.7,.02,.8],[3.55,.02,.8],[4.89,.02,f?.71:.49],[6.1,0,f?.88:.65]]:[[-5.5,.56,1.06],[-3.7,.4,1.06],[-2.4,.46,.87],[-.5,.5,.65],[-.3,.36,.75],[.6,.36,.75],[.7,.37,.72],[1.4,.36,.77],[3.4,.36,1.01],[3.5,.35,1.02],[4.1,.25,.85],[4.89,.02,.67],[6.1,0,.85]],u)}function h(u,d,f){const[g,_]=l(u,d.bypass,f),m=Math.sqrt(g*g+(_*_-g*g)*d.f),p=d.theta+Math.max(0,Math.min(u+5,5))*.08;if(t&&u>=-1.85&&u<=-.37){const S=Math.PI/5,v=Math.round(p/S)*S,x=(p-v)*10,A=.135*Math.sqrt(d.f),R=Math.max(0,Math.min(1,(u+1.85)/.2,(-.37-u)/.16)),I=R*R*(3-2*R);return[Da(m*Math.cos(p),.54*Math.cos(v)+A*Math.cos(x),I),Da(m*Math.sin(p),.54*Math.sin(v)+A*Math.sin(x),I)]}return[m*Math.cos(p),m*Math.sin(p)]}return{boundaries:r,stationLabels:o,stationTemperatures:a,temperatureAt:c,passage:l,flowPosition:h,toLayout:u=>u,constructionBounds:r}}function r_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Te;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=wc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=wc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function wc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new an(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function o_(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,v=a.length;S<v;S++){const x=a[S],A=i.attributes[x];c[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const R=i.morphAttributes[x];R&&(l[x]||(l[x]=[]),R.forEach((I,F)=>{const E=new I.array.constructor(I.count*I.itemSize);l[x][F]=new I.constructor(E,I.itemSize,I.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let S=0;S<r;S++){const v=n?n.getX(S):S;let x="";for(let A=0,R=a.length;A<R;A++){const I=a[A],F=i.getAttribute(I),E=F.itemSize;for(let T=0;T<E;T++)x+=`${~~(F[u[T]](v)*_+m)},`}if(x in e)h.push(e[x]);else{for(let A=0,R=a.length;A<R;A++){const I=a[A],F=i.getAttribute(I),E=i.morphAttributes[I],T=F.itemSize,U=c[I],z=l[I];for(let k=0;k<T;k++){const M=u[k],w=d[k];if(U[w](o,F[M](v)),E)for(let D=0,C=E.length;D<C;D++)z[D][w](o,E[D][M](v))}}e[x]=o,h.push(o),o++}}const p=i.clone();for(const S in i.attributes){const v=c[S];if(p.setAttribute(S,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),S in l)for(let x=0;x<l[S].length;x++){const A=l[S][x];p.morphAttributes[S][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}function a_(i,t){const{root:e,groups:n,shells:s,mesh:r,lathe:o,tube:a,ring:c,row:l,radialInstances:h,boltCircle:u,strut:d,mat:f,steel:g,dark:_,light:m,titanium:p,hot:S,copper:v,black:x}=t,A=i.id==="j79",R=i.fanRadius,I=f(3688528,.4,.36);i.parts.forEach((z,k)=>{const M=new ke;M.userData.part=k,M.name=z.name,e.add(M),n.push(M)});const F=(z,...k)=>{const M=l(...k);return M.userData.label=z,M},E=(z,k,M,w,D)=>{s.push(a(z,k,M,w,g,D,.025));for(const[C,L]of[[z+.03,M],[k-.03,w]])c(C,L+.018,.055,_,D),u(C,L+.05,24,D)},T=(z,k,M,w)=>{const D=new wn([new it(.039,-.035),new it(.056,-.025),new it(.056,.025),new it(.035,.035)],16);D.rotateZ(-Math.PI/2),D.translate(0,k,0),h(D,M,m,w,z)};i.parts.forEach((z,k)=>{const M=n[k],[w,D]=z.bounds,C=D-w;if(z.kind==="fan"){E(w,D,R*1.025,R*1.005,M),o([[-5.38,.002],[-5.18,.19],[-4.85,.42],[-4.55,.57],[-3.65,.4]],_,M);const L=i.id==="ge90"?I:p;F("一级风扇 · 转子叶盘",-4.6,.56,R*.96,22,.68,L,M,1,1.15),F("风扇出口 · 固定导流叶排",-3.9,1.15,R*.96,32,.26,g,M,0,-.4),c(-4.6,.57,.16,_,M)}if(["compressor","booster","hpt","lpt","turbine"].includes(z.kind)){let L,N,V,$;z.kind==="booster"?[L,N,V,$]=[.4,.46,1.06,.89]:z.kind==="compressor"?[L,N,V,$]=A?[.25,.46,.86,.67]:[.46,.5,.87,.65]:z.kind==="hpt"?[L,N,V,$]=[.37,.36,.72,.77]:z.kind==="lpt"?[L,N,V,$]=[.36,.36,.77,1.01]:[L,N,V,$]=[.35,.34,.72,.75],E(w+.012,D-.012,V+.055,$+.055,M);const K=C/(z.stages+.28),rt=Math.min(.2,K*.56),bt=["hpt","lpt","turbine"].includes(z.kind);for(let xt=0;xt<z.stages;xt++){const Y=xt/Math.max(1,z.stages-1),J=Ye.lerp(L,N,Y),gt=Ye.lerp(V,$,Y),_t=w+K*(xt+.55);F(`第 ${xt+1} 级 · 静子叶排`,_t-K*.3,J,gt,36+xt%6*2,rt*.65,_,M,0,-.7),F(`第 ${xt+1} 级 · 转子叶盘`,_t,J,gt,42+xt%7*2,rt,bt?S:m,M,z.spin,bt?.9:.7)}}if(z.kind==="combustor"&&A){E(w,D,.83,.83,M);const L=Array.from({length:12},(V,$)=>$n(w+.1,D-.08,.145,.145,.008).rotateX($*Math.PI/6)),N=r_(L,!1);L.forEach(V=>V.dispose()),N.translate(0,.54,0),h(N,10,S,M);for(let V=0;V<10;V++){const $=V*Math.PI/5,K=new ke;K.position.set(0,.54*Math.cos($),.54*Math.sin($)),M.add(K);for(const rt of[w+.1,w+.43,w+.76,D-.08])c(rt,.145,.022,v,K);o([[w+.04,.02],[w+.1,.13],[w+.15,.145]],_,K)}}if(z.kind==="combustor"&&!A){E(w,D,.88,.88,M),h($n(w+.04,D-.04,.78,.78),12,S,M),h($n(w+.04,D-.04,.34,.34),12,v,M);for(const L of[w+.04,w+.35,w+.7,D-.04])c(L,.78,.022,v,M),c(L,.34,.022,S,M);i.dac?(T(w+.09,.46,20,M),T(w+.09,.65,20,M)):T(w+.09,.56,20,M),o([[w+.08,.34],[w+.02,.38]],v,M),o([[w+.02,.73],[w+.08,.78]],v,M)}if(z.kind==="frame"&&(E(w,D,.84,.84,M),d(w+.15,.32,.81,8,M),o([[w,.34],[w+.18,.32],[D+.4,.2],[D+1.2,.001]],_,M)),z.kind==="afterburner"){E(w,D,.9,.9,M);const L=[];for(let N=0;N<=64;N++)L.push([w+N*C/64,.844+N%2*.011]);o(L,S,M);for(const N of[w+.22,w+.53])for(const V of[.32,.58,.74])c(N,V,.025,v,M),o([[N-.04,V-.02],[N,V],[N-.04,V+.02]],_,M);d(w+.25,.16,.81,8,M)}if(z.kind==="bypass"){a(w,.8,R*1.005,R*.81,g,M,.025),a(w,.8,1.15,1.16,_,M,.022);for(const[L,N]of[[w,R*1.005],[.75,R*.817]])c(L,N,.045,m,M);d(-3.55,1.17,R*.94,8,M)}z.kind==="exhaust"&&(a(w,D,1.075,.72,S,M,.025),o([[w,.35],[w+.55,.25],[D,.001]],_,M),c(w,1.08,.07,p,M),d(w+.04,.36,1.02,8,M))}),A?(a(-4.95,.8,.115,.115,m,n[0],.04).userData.spool="single",o([[-5.3,.001],[-5.14,.12],[-4.87,.25]],_,n[0])):(a(-4.65,3.4,.115,.115,m,n[0],.04),a(-2.4,1.35,.178,.178,v,n[2],.035));let U=()=>{};if(A){const z=n.at(-1),[k,M]=i.parts.at(-1).bounds;c(k,.91,.1,_,z),u(k,.945,24,z);const w=C=>{const L=C?.74:.52,N=new wn([new it(.88,k),new it(L,M),new it(L+.02,M),new it(.9,k)],8,.008,Math.PI/10-.016);return N.rotateZ(-Math.PI/2),N},D=h(w(!0),20,S,z).children[0];U=C=>{const L=D.geometry;D.geometry=w(C),L.dispose()}}return{nozzle:U}}const xr=24,vr=24,Lo=i=>{const t=Ye.clamp(i,0,1);return t*t*(3-2*t)};function l_(i,t,e,n){if(![i,t,e].every(Number.isFinite)||i<=0||t<=i||e<=0)throw new RangeError("Fan geometry needs finite 0 < hub < tip and chord > 0.");if(!["cfm56","ge90"].includes(n))throw new RangeError(`Unsupported civil fan: ${n}`);const s=n==="ge90",r=[],o=[],a=[],c=vr*2,l=Array.from({length:c},(f,g)=>{const _=g<=vr,m=_?g:c-g;return{u:(1-Math.cos(Math.PI*m/vr))/2,side:_?1:-1}});for(let f=0;f<=xr;f++){const g=f/xr,_=i+(t-i)*g,m=s?.43+.69*Math.sin(Math.PI*Math.pow(g,.73)*.77):.48+.52*Math.sin(Math.PI*g*.53),p=e*m,S=s?.48+.65*Lo(g):.43+.67*Lo(g),v=s?e*(.08*Math.sin(Math.PI*g)-.34*Lo((g-.34)/.66)):e*.055*g*g,x=s?e*(.06*g+.2*Math.sin(Math.PI*g)-.58*Math.pow(g,5)):e*.065*g*g;for(const{u:A,side:R}of l){const I=p*(s?.072:.055)*Math.sin(Math.PI*A),F=A===0||A===1?0:.2969*Math.sqrt(A)-.126*A-.3516*A*A+.2843*A*A*A-.1036*A*A*A*A,E=5*p*(s?.1-.035*g:.095-.038*g)*F,T=(A-.46)*p,U=I+R*E,z=T*Math.cos(S)-U*Math.sin(S)+v,M=(T*Math.sin(S)+U*Math.cos(S)+x)/_;r.push(z,_*Math.cos(M),_*Math.sin(M))}}for(let f=0;f<xr;f++)for(let g=0;g<c;g++){const _=(g+1)%c,m=f*c+g,p=m+c,S=f*c+_,v=S+c;(s&&Math.max(l[g].u,l[_].u)<=.067?a:o).push(m,S,p,S,v,p)}const h=f=>(c-f)%c;for(const f of[0,xr])for(let g=0;g<vr;g++){const _=f*c,m=_+g,p=_+g+1,S=_+h(g+1),v=_+h(g),x=s&&l[g+1].u<=.067?a:o,A=(R,I,F)=>{R===I||I===F||F===R||(f===0?x.push(R,F,I):x.push(R,I,F))};A(m,p,S),A(m,S,v)}const u=new Te;u.setAttribute("position",new fe(r,3)),u.setIndex([...o,...a]),u.addGroup(0,o.length,0),a.length&&u.addGroup(o.length,a.length,1),u.computeBoundingBox();const d=(u.boundingBox.min.x+u.boundingBox.max.x)/2;return u.translate(-d,0,0),u.computeVertexNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),u.userData={modelId:n,approximation:"Photograph-informed silhouette; illustrative airfoil, twist and sweep."},u}function c_(i,t){const{root:e,groups:n,shells:s,mesh:r,lathe:o,ring:a,row:c,radialInstances:l,boltCircle:h,strut:u,mat:d,steel:f,dark:g,light:_,titanium:m,hot:p,copper:S}=t,v=i.layout,x=v.fanRadius,A=i.id==="ge90",R=d(2569272,.5,.22),I=d(v.caseColor,.57,.4);i.parts.forEach((M,w)=>{const D=new ke;D.name=M.name,D.userData.part=w,e.add(D),n.push(D)});const F=(M,w,D,C=.03)=>{const L=M.map(([V,$])=>[V,$+C]),N=o([...M,...L.reverse(),M[0]],w,D);return N.userData.annotationOccluder=!0,N},E=(M,...w)=>{const D=c(...w);return D.userData.label=M,D},T=(M,w)=>{s.push(F(M,f,w));for(const[D,C]of[M[0],M.at(-1)])a(D,C+.025,.055,g,w),h(D,C+.055,24,w)},{fan:U}=v,z=n[0],k=[[-5,x+.065],[-4.91,x+.025],[-4.5,x+.025],[v.bounds[0][1],x+.025]];s.push(F(k,I,z,.075));for(const M of[-4.97,-4.57,v.bounds[0][1]])a(M,x+.1,.055,g,z);h(-4.98,x+.12,44,z),o(U.spinner,g,z),E("一级风扇 · 转子叶盘",U.x,U.hub,x,U.count,U.chord,m,z,1,1,{geometry:l_(U.hub,x,U.chord,i.id),material:A?[R,m]:m}),E("风扇出口 · 固定导流叶排",U.statorX,U.splitter,x-.035,32,.26,f,z,0,-.4),a(U.x,U.hub,.16,g,z);for(const M of[1,2,4,5]){const w=i.parts[M],D=n[M],[C,L]=w.bounds,N=v.stages[M],V=w.stages,$=C+(L-C)*(N.activeFraction||1),K=($-C)/(V+.38),rt=Math.min(M===5?.23:.19,K*.57),bt=M>=4;T([[C+.014,N.tip[0]+.055],[(C+$)/2,(N.tip[0]+N.tip[1])/2+.075],[$-.02,N.tip[1]+.055],[L-.014,N.tip[1]+.055]],D);const xt=[[C,N.hub[0]-.025],[$,N.hub[1]-.025]];$<L-1e-6&&xt.push([L,N.hub[1]-.025]),o(xt,g,D);for(let Y=0;Y<V;Y++){const J=(Y+.55)/(V+.38),gt=C+($-C)*J,_t=Ye.lerp(...N.hub,J),wt=Ye.lerp(...N.tip,J);E(`第 ${Y+1} 级 · 静子叶排`,gt-K*.32,_t,wt,36+Y%6*2,rt*.68,g,D,0,-.7),E(`第 ${Y+1} 级 · 转子叶盘`,gt,_t,wt,42+Y%7*2,rt,bt?p:_,D,w.spin,bt?.9:.7),(M===2||M===5)&&a(gt,wt+.07,.025,M===5?S:m,D)}if(N.activeFraction&&u($+(L-$)*.55,N.hub[1],N.tip[1],8,D),M===2)for(let Y=0;Y<3;Y++){const J=(Y+.5)/V,gt=C+(L-C)*J,_t=Ye.lerp(...N.tip,J)+.095;a(gt,_t,.027,g,D),h(gt,_t+.025,12,D)}}{const M=n[3],[w,D]=v.bounds[3],{inner:C,outer:L,caseRadius:N}=v.combustor;T([[w,v.stages[2].tip[1]+.055],[w+.19,N],[D-.2,N],[D,v.stages[4].tip[0]+.055]],M),l($n(w+.1,D-.1,L,L-.025),12,p,M),l($n(w+.1,D-.1,C,C),12,S,M);for(const $ of[w+.1,(w+D)/2,D-.1])a($,L,.02,S,M),a($,C,.02,p,M);const V=A?[C+(L-C)*.29,C+(L-C)*.75]:[(C+L)/2];for(const $ of V){const K=new wn([new it(.041,-.035),new it(.075,-.02),new it(.075,.025),new it(.042,.045)],18);K.rotateZ(-Math.PI/2),K.translate(0,$,0),l(K,20,_,M,w+.11),o([[w+.08,$-.085],[w+.025,$],[w+.08,$+.085]],p,M)}}{const M=n[6],{outer:w,inner:D}=v.bypass,C=F(w,f,M,.035);C.userData.bypassCowl=!0,F(D,g,M,.025);for(const[L,N]of[w[0],w.at(-1)])a(L,N+.04,.05,m,M);u(w[0][0]+.14,D[0][1]+.03,w[0][1]-.045,8,M)}{const M=n[7],{outer:w,plug:D}=v.exhaust;F(w,p,M,.03),o(D,g,M),a(w[0][0],w[0][1]+.03,.07,m,M),u(w[0][0]+.07,D[0][1],w[0][1]-.035,8,M)}return t.tube(U.x,v.bounds[5][1],.16,.16,_,n[0],.045).userData.spool="lp",t.tube(v.bounds[2][0],v.bounds[4][1],.235,.235,S,n[2],.04).userData.spool="hp",{nozzle:()=>{}}}function Rc(i=.35,t=1.02,e=.34){const n=[],s=[];if(!(t>i&&i>0&&e>0))throw new RangeError("Invalid impeller dimensions");for(let c=0;c<=20;c++){const l=c/20,h=i+(t-i)*l,u=-.62*l*l,d=.17*(1-l)**2-.09*l,f=e*(1-.69*l),g=.015/h;for(const[_,m]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.push(d+_*f/2,h*Math.cos(u+m*g),h*Math.sin(u+m*g))}for(let c=0;c<20;c++)for(let l=0;l<4;l++){const h=c*4+l,u=c*4+(l+1)%4,d=h+4,f=u+4;s.push(h,u,d,u,f,d)}s.push(0,2,1,0,3,2);const o=80;s.push(o,o+1,o+2,o,o+2,o+3);const a=new Te;return a.setAttribute("position",new fe(n,3)),a.setIndex(s),a.computeVertexNormals(),a.computeBoundingSphere(),a}function Do(i,t=.38,e=.035,n=28){const s=new Hr(i.map(u=>new B(...u))),r=s.computeFrenetFrames(n,!1),o=[],a=[],c=32;for(let u=0;u<2;u++)for(let d=0;d<=n;d++){const f=s.getPointAt(d/n),g=t-u*e;for(let _=0;_<c;_++){const m=_/c*Math.PI*2,p=f.clone().addScaledVector(r.normals[d],g*Math.cos(m)).addScaledVector(r.binormals[d],g*Math.sin(m));o.push(p.x,p.y,p.z)}}const l=(n+1)*c;for(let u=0;u<2;u++)for(let d=0;d<n;d++)for(let f=0;f<c;f++){const g=u*l+d*c+f,_=u*l+d*c+(f+1)%c,m=g+c,p=_+c;u?a.push(g,m,_,_,m,p):a.push(g,_,m,_,p,m)}for(const u of[0,n])for(let d=0;d<c;d++){const f=u*c+d,g=u*c+(d+1)%c,_=f+l,m=g+l;u?a.push(f,g,_,g,m,_):a.push(f,_,g,g,_,m)}const h=new Te;return h.setAttribute("position",new fe(o,3)),h.setIndex(a),h.computeVertexNormals(),h.computeBoundingSphere(),h}function u_(i,t,e=1.28,n=12){const s=[],r=[];for(let h=0;h<2;h++)for(let u=0;u<=12;u++)for(let d=0;d<144;d++){const f=u/12,g=d/144*Math.PI*2,_=e+f*.16*Math.cos(g*n)+h*.022;s.push(Ye.lerp(i,t,f),_*Math.cos(g),_*Math.sin(g))}const c=1872;for(let h=0;h<2;h++)for(let u=0;u<12;u++)for(let d=0;d<144;d++){const f=h*c+u*144+d,g=h*c+u*144+(d+1)%144,_=f+144,m=g+144;h?r.push(f,g,_,g,m,_):r.push(f,_,g,g,_,m)}for(const h of[0,12])for(let u=0;u<144;u++){const d=h*144+u,f=h*144+(u+1)%144,g=d+c,_=f+c;r.push(d,f,g,f,_,g)}const l=new Te;return l.setAttribute("position",new fe(s,3)),l.setIndex(r),l.computeVertexNormals(),l.computeBoundingSphere(),l}function Cc(i,t,e,n=.035){const s=i[0][0],r=i.at(-1)[0],o=i.reduce((m,p)=>m+p[1],0)/i.length,a=new Qa;a.moveTo(0,0),a.lineTo(r-s,0),a.lineTo(r-s,Math.PI*2*o),a.lineTo(0,Math.PI*2*o),a.closePath();for(const m of[Math.PI/2,Math.PI*1.5]){const p=new Ur;p.absellipse(t-s,m*o,e,e,0,Math.PI*2,!0),a.holes.push(p)}const c=new Gr(a,{depth:n,bevelEnabled:!1,steps:1,curveSegments:24}),l=[],h=c.attributes.position,u=(m,p,S,v=0)=>{const x=[[m,p,S],[p,S,m],[S,m,p]],A=x.map(([I,F])=>Math.max(Math.abs(I[0]-F[0])/.18,Math.abs(I[1]-F[1])/(o*.12))),R=Math.max(...A);if(R>1&&v<16){const[I,F,E]=x[A.indexOf(R)],T=I.map((U,z)=>(U+F[z])/2);u(I,T,E,v+1),u(T,F,E,v+1)}else l.push(...m,...p,...S)};for(let m=0;m<h.count;m+=3)u(...[m,m+1,m+2].map(p=>[h.getX(p),h.getY(p),h.getZ(p)]));c.dispose();const d=new Te;d.setAttribute("position",new fe(l,3));const f=d.attributes.position,g=m=>{for(let p=1;p<i.length;p++)if(m<=i[p][0]){const S=i[p-1],v=i[p];return Ye.lerp(S[1],v[1],(m-S[0])/(v[0]-S[0]))}return i.at(-1)[1]};for(let m=0;m<f.count;m++){const p=s+f.getX(m),S=f.getY(m)/o,v=g(p)+f.getZ(m);f.setXYZ(m,p,v*Math.cos(S),v*Math.sin(S))}const _=o_(d,1e-5);return d.dispose(),_.computeVertexNormals(),_.computeBoundingSphere(),_}function h_(i,t){const{root:e,groups:n,rotors:s,shells:r,mesh:o,lathe:a,tube:c,ring:l,row:h,radialInstances:u,boltCircle:d,strut:f,mat:g,steel:_,dark:m,light:p,titanium:S,hot:v,copper:x,black:A}=t,R=g(8560300,.43,.66),I=g(8690584,.42,.65),F=g(15055705,.42,.35);i.parts.forEach((C,L)=>{const N=new ke;N.name=C.name,N.userData.part=L,C.spool&&(N.userData.spool=C.spool),e.add(N),n.push(N)});const E=(C,L,N=_,V=.032)=>{const $=C.map(([rt,bt])=>[rt,bt+V]),K=a([...C,...$.reverse(),C[0]],N,L);return K.userData.annotationOccluder=!0,r.push(K),K},T=(C,L,N,V,$,K=_)=>{const rt=E([[C,N],[L,V]],$,K);for(const[bt,xt]of[[C,N],[L,V]])l(bt,xt+.028,.055,m,$),d(bt,xt+.052,20,$);return rt},U=(C,L,N,V,$,K,rt=p)=>{const bt=new ke;bt.userData.spool=V,bt.userData.label=`${V.toUpperCase()} 同心传动轴`,K.add(bt);const xt=c(C,L,N,N,rt,bt,.025);return xt.userData.spool=V,xt.userData.shaft=!0,s.push({g:bt,spin:$,spool:V}),xt},z=(C,L,N,V,$,K,rt,bt,xt,Y,J=.7,gt)=>{const _t=i.id==="rb211"?{lp:.14,ip:.225,hp:.305}:i.id==="pegasus"?{lp:.15,hp:.24}:{hp:.145,power:.205},wt=xt?{...gt,bore:_t[Y]}:gt,Vt=h(L,N,V,$,K,rt,bt,xt,J,wt);if(Vt.userData.label=C,xt){Vt.userData.spool=Y;const Yt=s.find(O=>O.g===Vt);Yt&&(Yt.spool=Y)}return Vt},k=(C,L,N,V,$,K,rt=!1)=>{const bt=i.parts[C],xt=n[C],[Y,J]=bt.bounds,gt=bt.stages||1,_t=J-Y,wt=_t/(gt+.42),Vt=/turbine|hpt|ipt|lpt/.test(bt.kind);T(Y+.014,J-.014,rt?$+.065:V+.065,rt?V+.065:$+.065,xt),a([[Y,rt?N-.02:L-.02],[J,rt?L-.02:N-.02]],m,xt);for(let Yt=0;Yt<gt;Yt++){const O=(Yt+.58)/(gt+.42),at=rt?J-_t*O:Y+_t*O,st=Ye.lerp(L,N,O),nt=Ye.lerp(V,$,O),tt=Math.min(.23,wt*.51);z(`第 ${Yt+1} 级 · 固定导向叶排`,at+(rt?1:-1)*wt*.33,st,nt,32+Yt%5*2,tt*.65,m,xt,0,null,-.65),z(`第 ${Yt+1} 级 · ${K.toUpperCase()} 转子`,at,st,nt,38+Yt%7*2,tt,Vt?v:p,xt,bt.spin,K,Vt?.85:.7),l(at,nt+.07,.022,Vt?x:S,xt)}},M=(C,L,N,V,$,K)=>{u($n(L,N,$,$-.015),12,v,C),u($n(L,N,V,V),12,x,C);for(const bt of[L,(L+N)/2,N])l(bt,V,.025,x,C),l(bt,$,.025,v,C);const rt=new wn([new it(.038,-.05),new it(.065,-.025),new it(.065,.04),new it(.035,.06)],14);rt.rotateZ(-Math.PI/2),rt.translate(0,(V+$)/2,0),u(rt,16,p,C,K)},w=(C,L,N,V,$=p)=>{const K=o(new Nr(N,.036,8,40),$,V);K.position.set(C,0,L);const rt=o(new Yn(N,N,.11,40,1,!0),$,V);rt.rotation.x=Math.PI/2,rt.position.copy(K.position)},D=(C,L,N,V,$)=>{const K=new ke;return K.position.x=L,K.userData.spool=N,K.userData.label=$,K.userData.rotating=!0,K.userData.rotorAssembly=!0,C.add(K),s.push({g:K,spin:V,spool:N}),K};if(i.id==="rb211"){const C=i.fanRadius,L=n[0];E([[-5,C+.045],[-4.9,C+.025],[-4.25,C+.025],[-3.75,C+.035]],L,R,.06),l(-4.96,C+.095,.06,m,L),d(-4.96,C+.12,40,L),a([[-5.32,.002],[-5.18,.18],[-4.81,.5],[-4.3,.66],[-3.77,.5]],m,L),z("一级宽弦风扇 · LP 转子",-4.3,.66,C,i.classicLayout?.fanBladeCount||22,.92,S,L,1,"lp",.9),z("风扇出口 · 固定导流叶排",-3.84,1.39,C-.02,32,.23,m,L,0,null,-.5),k(1,.45,.5,1.32,1.04,"ip"),k(2,.51,.54,1.02,.82,"hp");const N=n[3];E([[.15,.89],[.36,1.03],[.85,1.02],[1.05,.88]],N),M(N,.24,.96,.44,.92,.3),k(4,.39,.4,.82,.86,"hp"),k(5,.39,.39,.88,.94,"ip"),k(6,.39,.46,.96,1.25,"lp");const V=n[7],$=E([[-3.75,C+.035],[-2.2,C-.06],[1.15,1.96],[3.45,1.59]],V,_,.035);$.userData.bypassCowl=!0,E([[-3.75,1.41],[-1.6,1.11],[.1,1.12],[1.6,1.02],[3.3,1.31]],V,m,.025),f(-3.57,1.44,C-.03,8,V),l(3.45,1.63,.06,S,V);const K=n[8];o(u_(3.33,3.93,1.28),v,K),l(3.35,1.3,.06,x,K),f(3.36,.47,1.27,8,K);const rt=n[9];return E([[3.95,1.53],[4.34,1.4],[4.89,1.12]],rt,v),a([[3.3,.46],[3.78,.37],[4.4,.18],[4.87,.005]],m,rt),l(3.96,1.57,.065,S,rt),U(-4.29,3.22,.12,"lp",1,L),U(-3.66,1.88,.2,"ip",1.2,n[1],S),U(-1.52,1.43,.28,"hp",1.45,n[2],x),{nozzle:()=>{}}}if(i.id==="pt6a"){const C=i.classicLayout?.propellerRadius||2.55,L=.8,N=L/9,V=D(n[0],-4.96,"prop",N,"螺旋桨 · 安装示意");u(Fr(.38,C,.59,1.02),4,A,V),u(Fr(C-.22,C+.01,.25,.6),4,F,V),a([[-.5,.004],[-.36,.19],[0,.36],[.17,.37]],p,V),l(.1,.38,.13,m,V);const $=n[1];E([[-4.7,.48],[-4.5,.64],[-3.5,.74],[-3.2,.57]],$,I,.04);for(const[Y,J]of[-3.61,-4.48].entries()){const gt=L/3**Y,_t=gt/3;l(J,.61,.17,m,$),d(J,.7,24,$);const wt=new mn(.16,.04,.038);wt.translate(0,.565,0),u(wt,48,m,$,J);const Vt=D($,J,"power",gt,`第 ${Y+1} 级太阳轮 · 24 齿示意`);c(-.09,.09,.268,.268,x,Vt,.17);const Yt=new mn(.18,.042,.038);Yt.translate(0,.28,0),u(Yt,24,x,Vt);const O=new ke;O.position.x=J,O.userData.spool="prop",$.add(O),s.push({g:O,spin:_t,spool:"prop"});const at=new mn(.045,.45,.07);at.translate(.13,.22,0),u(at,3,m,O);for(let st=0;st<3;st++){const nt=st*Math.PI*2/3,tt=new ke;tt.position.set(0,.42*Math.cos(nt),.42*Math.sin(nt)),tt.rotation.x=nt+Math.PI/12,O.add(tt),c(-.085,.085,.128,.128,p,tt,.085);const pt=new mn(.17,.042,.038);pt.translate(0,.14,0),u(pt,12,p,tt),s.push({g:tt,spin:-2*(gt-_t),spool:"power"})}}U(-4.82,-4.48,.13,"prop",N,n[0]),U(-3.61,-1.64,.18,"power",L,n[2],x),U(-4.47,-3.61,.105,"power",L/3,$,S),k(2,.29,.31,.7,.66,"power",!0),k(3,.3,.33,.68,.64,"hp",!0),U(-1.03,3.38,.12,"hp",1.45,n[6]);const K=n[4];E([[-.38,.72],[-.14,1.17],[1.3,1.17],[1.36,1.26]],K,_),M(K,-.2,1.12,.7,1.1,1.16),a([[1.12,.7],[1.26,.71],[1.32,.76]],v,K),a([[1.3,1.04],[1.25,1.09],[1.12,1.1]],v,K);const rt=D(n[5],1.62,"hp",1.45,"离心叶轮 · 轴向进气 / 径向排气");rt.userData.bladeRow=!0,rt.userData.rotorAssembly=!1,u(Rc(),18,S,rt),a([[-.26,.16],[-.26,.98],[-.22,1.035],[-.17,1.035],[-.12,.69],[.11,.36],[.29,.29]],m,rt),l(1.44,1.08,.065,x,n[5]);const bt=Rc(1.02,1.13,.1);bt.translate(1.53,0,0),u(bt,24,p,n[5]),E([[1.36,1.26],[2.09,1.26],[2.17,.75]],n[5],_),k(6,.28,.38,.68,.63,"hp",!0);const xt=n[7];E([[3.48,.75],[3.9,.87],[4.45,.8]],xt,R),a([[3.46,.28],[3.9,.23],[4.35,.1],[4.52,.002]],m,xt),f(4.12,.2,.8,6,xt);for(const Y of[-1,1]){const J=[[-2.47,0,Y*.4],[-2.84,0,Y*.83],[-3.05,0,Y*1.37],[-3.35,0,Y*1.7]],gt=o(Do(J,.33,.025),v,n[8]);gt.userData.annotationOccluder=!0,w(-2.84,Y*.83,.35,n[8])}return{nozzle:()=>{}}}if(i.id==="pegasus"){const C=i.fanRadius,L=g(11451584,.3,.77),N=g(9204581,.42),V=g(5793642,.36);for(const Y of[L,N,V])Y.userData.keepUncut=!0;k(0,.46,.57,C-.07,C-.12,"lp"),a([[-5.3,.002],[-5.07,.22],[-4.61,.48]],m,n[0]),k(1,.4,.49,.97,.76,"hp");const $=n[2];E([[-.25,.82],[-.1,.93],[.5,.93],[.65,.81]],$),M($,-.16,.57,.37,.84,-.08),k(3,.34,.34,.75,.81,"hp"),k(4,.33,.35,.82,.95,"lp"),U(-4.79,2.34,.13,"lp",1,n[0]),U(-2.43,1.36,.215,"hp",-1.4,n[1],x);const K=o(Cc([[-2.49,C-.05],[-2.1,C-.08],[-1.3,1.08]],-1.9,.49),R,n[5]),rt=o(Cc([[2.4,1.01],[2.92,1.08],[3.3,.75]],2.82,.41),v,n[6]);for(const Y of[K,rt])Y.userData.annotationOccluder=!0,r.push(Y);E([[3.3,.75],[3.43,.59],[3.53,.31],[3.57,.005]],n[6],v),a([[2.35,.35],[2.9,.25],[3.25,.001]],m,n[6]);const bt=[];for(const Y of[!0,!1])for(const J of[-1,1]){const gt=Y?5:6,_t=n[gt],wt=Eu(Y,J,0),Vt=wt.pivot,[Yt,O,at]=Vt,st=Y?.46:.37,nt=[Yt-.21,O,J*(Y?1.04:.79)],tt=o(Do([nt,[Yt-.08,O,at-J*.17],Vt],st,.036,16),Y?L:N,_t);tt.userData.annotationOccluder=!0,w(Yt,at,st+.035,_t,V);const pt=new ke;pt.position.set(...Vt),pt.userData.label=Y?"冷流可转喷口":"热流可转喷口",_t.add(pt);const ht=wt.points.map(P=>P.map((y,q)=>y-Vt[q])),St=o(Do(ht,st,.036),Y?L:N,pt);St.userData.annotationOccluder=!0;for(const P of[-.18,0,.18]){const y=ht.map(([q,Q,G])=>new B(q,Q+P,G));o(new Ei(new Hr(y),24,.011,6,!1),V,pt)}const jt=ht.at(-1),Zt=o(new Nr(st,.025,8,40),V,pt);Zt.rotation.y=Math.PI/2,Zt.position.set(...jt),bt.push(pt)}const xt=Y=>{const J=Ye.clamp(Number(Y.nozzleAngle)||0,0,90)*Math.PI/180;bt.forEach(gt=>{gt.rotation.z=-J})};return xt({nozzleAngle:0}),{nozzle:()=>{},updateMechanism:xt}}return{nozzle:()=>{}}}const dn=(i,t=0,e=1)=>Math.max(t,Math.min(e,Number(i)||0)),Oe=(i,t,e)=>i+(t-i)*e,bu=(i,t,e)=>i.map((n,s)=>Oe(n,t[s],e)),ii=(i,t,e,n)=>{const s=Math.sqrt(t*t+(e*e-t*t)*dn(n.f??.5));return[i,s*Math.cos(n.theta??0),s*Math.sin(n.theta??0)]},f_=i=>(i.side??Math.sin(i.theta??1))<0?-1:1,Pc=i=>Math.atan2(Math.sin(i),Math.cos(i));function Io(i,t){const e=dn(t)*(i.length-1),n=Math.min(i.length-2,Math.floor(e));return bu(i[n],i[n+1],e-n)}function d_(i){const t=i.id,e=bi[t];if(!e)throw new Error(`Unknown classic engine: ${t}`);const n=t==="rb211",s=t==="pt6a",r=!s,o=_=>(_+5.3)/11.4,a=n?e.stationX.map((_,m)=>m===0?0:m===e.stationX.length-1?1:o(_)):e.stationProgress,c=n?["进气","风扇出口","中压压气机出口","高压压气机出口","燃烧室出口","高压涡轮出口","中压涡轮出口","低压涡轮出口","混合器出口","共同喷口出口"]:s?["后部进气","轴流压气机出口","离心压气机出口","燃烧室出口","燃气发生器涡轮出口","自由动力涡轮出口","侧排气出口"]:["进气","低压风扇出口","高压压气机出口","燃烧室出口","高压涡轮出口","低压涡轮出口","后部热喷口出口"];function l(_=85){const m=dn((_-30)/70);if(n){const S=Oe(318,365,m),v=Oe(710,890,m),x=(v+4.4*S)/5.4;return[288,S,Oe(450,580,m),Oe(690,865,m),Oe(1200,1660,m),Oe(1040,1400,m),Oe(910,1200,m),v,x,x]}if(s){const S=Oe(620,810,m);return[288,Oe(410,480,m),Oe(560,675,m),Oe(1030,1320,m),Oe(790,1010,m),S,S]}const p=Oe(690,890,m);return[288,Oe(360,425,m),Oe(610,800,m),Oe(1120,1490,m),Oe(910,1160,m),p,p]}function h(_,m={},p={},S){const v=S||l(p.throttle??85),x=dn(_);if(m.bypass&&r){const A=n?a[1]:.25,R=ni([[0,v[0]],[A,v[1]]],x)[0];return!n||x<a[7]?R:ni([[a[7],v[1]],[a[8],v[8]],[1,v[9]]],x)[0]}return ni(a.map((A,R)=>[A,v[R]]),x)[0]}function u(_,m=!1){return s?[.28,.68]:ni(m?e.bypass:e.core,_)}function d(_,m={},p={}){const S=dn(_),v=f_(m);if(n){const C=Oe(-5.3,6.1,S),[L,N]=u(C,!!m.bypass);if(C>=3.3&&C<=4.08){const V=dn((C-3.33)/.6),$=1.28+.16*V*Math.cos(12*(m.theta??0)),K=m.bypass?Math.max(L,$+.05):L,rt=m.bypass?Math.max(N,K+.025):Math.min(N,$-.035),bt=ii(C,Math.min(K,rt-.015),rt,m);return bu(bt,ii(C,L,N,m),dn((C-3.94)/.14))}return ii(C,L,N,m)}if(s){if(S<=.85){const[K,rt,bt]=ni(e.flow,S);return ii(K,rt,bt,m)}const C=m.theta??0,L=Pc(v*Math.PI/2-C);if(S<.89)return ii(-2.7,.32,.65,{...m,theta:C+L*(S-.85)/.04});const N=ii(-2.7,.32,.65,{...m,theta:v*Math.PI/2}),V=(dn(m.f??.5)-.5)*.24,$=[N,[-2.84,V,v*.83],[-3.05,V,v*1.37],[-3.35,V,v*1.7],[-4.35,V,v*2.8]];return Io($,(S-.89)/.11)}const x=!!m.bypass,A=x?.3:.73,R=.85,I=.94,F=x?-1.8:2.4;if(S<=A){const C=x?ni([[0,-5.2],[.25,-2.5],[.3,F]],S)[0]:ni([[0,-5.2],[.25,-2.5],[.47,-.25],[.56,.65],[.64,1.42],[.73,2.4]],S)[0],[L,N]=u(C,x);return ii(C,L,N,m)}const E=Eu(x,v,p.nozzleAngle??0),[T,U]=u(F,x),z=ii(F,T,U,m),k=(dn(m.f??.5)-.5)*E.radius*1.3,M=[0,k,0];if(S<R){const C=(S-A)/(R-A),L=[E.pivot[0]-.21,0,v*(x?1.04:.79)];if(C<.6){const N=C/.6,V=m.theta??0,$=Math.hypot(z[1],z[2]),K=V+Pc(v*Math.PI/2-V)*N,rt=Oe($,Math.abs(L[2]),N);return[Oe(z[0],L[0],N),rt*Math.cos(K),rt*Math.sin(K)]}return Io([L,[E.pivot[0]-.08,0,E.pivot[2]-v*.17],E.pivot],(C-.6)/.4)}let w;S<=I?w=Io(E.points,(S-R)/(I-R)):w=E.exit.map((C,L)=>C+E.direction[L]*(S-I)/.06*1.65);const D=dn(p.nozzleAngle??0,0,90)*Math.PI/180;return M[0]=k*Math.sin(D),M[1]=k*Math.cos(D),w.map((C,L)=>C+M[L]*dn((S-R)/.02))}function f(_,m=!1,p=85,S=!1,v){const x=v||l(p);if(s){const A=e.stationX.reduce((R,I,F)=>Math.abs(I-_)<Math.abs(e.stationX[R]-_)?F:R,0);return x[A]}if(m){const A=n?o(_):dn((_+5.2)/10);return h(A,{bypass:!0},{throttle:p},x)}return ni(e.stationX.map((A,R)=>[A,x[R]]),_)[0]}function g(_,m=!1){const p=dn(_);return s?p<.1?7:p<.32?6:p<.43?5:p<.73?4:p<.78?3:p<.85?2:8:n?p>=a[8]?9:p>=a[7]?8:m&&p>=a[1]?7:Math.max(0,a.findIndex(S=>S>p)-1):m?p<.25?0:5:p<.25?0:p<.47?1:p<.56?2:p<.64?3:p<.73?4:6}return{boundaries:e.stationX,constructionBounds:e.stationX,stationLabels:c,stationProgress:a,hasBypass:r,bypassFraction:s?0:n?.65:.5,stationTemperatures:l,flowTemperature:h,flowPoint:d,temperatureAt:f,passage:u,partAtProgress:g,toLayout:_=>_,mixingStationIndex:n?8:void 0,bypassMergeProgress:n?a[7]:void 0,bypassMergeEndProgress:n?a[8]:void 0,bypassRatio:n?4.4:void 0,bypassStationProgress:s?void 0:n?a:[0,.25,1]}}const p_="总温 Tt / 总压 Pt 的教学站位模型：入口 288 K、101.325 kPa；预设各部件温升/温降，压气机等熵效率 0.86、涡轮等熵效率 0.90、定比热比 γ=1.4，燃烧室总压损失 5%、喷口总压损失 1%。绝热喷口总温保持不变；未计算静温、静压、马赫数、流量或轴功匹配，不能用于性能预测。",m_=[["NASA Glenn · Compressor Thermodynamics","https://www.grc.nasa.gov/www/k-12/airplane/compth.html"],["NASA Glenn · Power Turbine Thermodynamics","https://www.grc.nasa.gov/WWW/K-12/airplane/powtrbth.html"]],Ia=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),Lc=(i,t,e)=>i+(t-i)*e;function g_(i){return i.stationProgress||i.boundaries.map(t=>Ia((t+5.5)/11.6))}function Hs(i,t,e={},n=!1){const s=t.stationLabels||["进气","低压压气机出口","高压压气机出口","主燃烧室出口","高压涡轮出口","低压涡轮出口","混合段出口","加力段出口","喷管出口"],r=t.stationTemperatures(e.throttle??85,!!e.afterburner),o=g_(t),a=[];for(let u=0;u<r.length;u++){const d=s[u]||`站位 ${u+1}`,f=a.at(-1);let g=r[u],_=101.325;if(f){const m=g/f.temperature;/喷口|喷管|排气/.test(d)?(g=f.temperature,_=f.pressure*.99):/燃烧|加力/.test(d)&&m>1?_=f.pressure*.95:/压气|风扇|增压|离心/.test(d)&&m>1?_=f.pressure*Math.pow(1+.86*(m-1),3.5):/涡轮/.test(d)&&m<1?_=f.pressure*Math.pow(Math.max(.05,1-(1-m)/.9),3.5):_=f.pressure*.98}a.push({progress:o[u],temperature:g,pressure:_,stationLabel:d})}if(!n||i.id==="j79"||i.id==="pt6a")return a;const c=i.id==="pegasus"?t.bypassFanStationIndex??1:1,l=a[c],h=t.bypassStationProgress?.[1]??l.progress;if(t.mixingStationIndex!=null){const u=t.mixingStationIndex;return[a[0],l,{...l,progress:t.bypassMergeProgress?.[0]??a[u-1].progress,stationLabel:"外涵 · 混合前"},...a.slice(u)]}return i.id==="al31f"?[a[0],l,{...l,progress:a[5].progress,stationLabel:"外涵 · 混合前"},...a.slice(6)]:[{...a[0],progress:t.bypassStationProgress?.[0]??a[0].progress},{...l,progress:h,stationLabel:"风扇 / 低压系统出口"},{...l,progress:t.bypassStationProgress?.at(-1)??1,pressure:l.pressure*.98,stationLabel:"外涵独立喷口"}]}function Tu(i,t){const e=Ia(t);if(e<=i[0].progress)return{...i[0],progress:e};for(let n=1;n<i.length;n++)if(e<=i[n].progress){const s=i[n-1],r=i[n],o=Ia((e-s.progress)/Math.max(1e-8,r.progress-s.progress));return{progress:e,temperature:Lc(s.temperature,r.temperature,o),pressure:Lc(s.pressure,r.pressure,o),stationLabel:o<.03?s.stationLabel:`${s.stationLabel} → ${r.stationLabel}`}}return{...i.at(-1),progress:e}}function __(i,t,e,n,s=!1){return Tu(Hs(i,t,e,s),n)}const Uo={lp:["低压轴 LP","#168aa1"],ip:["中压轴 IP","#ae791d"],hp:["高压轴 HP","#a14f9c"],single:["单转子轴","#168aa1"],gas:["燃气发生器轴","#a14f9c"],power:["自由动力轴","#168aa1"],prop:["螺旋桨输出轴","#ae791d"]};function x_({preset:i,physics:t,root:e,scene:n,camera:s,controls:r,groups:o,rotors:a,materials:c,modelRadius:l,flowPoint:h}){const u=new Map,d=new Map,f=M=>{for(let w=M;w;w=w.parent)if(Number.isInteger(w.userData.part))return w.userData.part;return-1},g=M=>M.spool||M.g.userData.spool||i.parts[f(M.g)]?.spool||(i.id==="j79"?"single":Math.abs(M.spin)>1.2?"hp":"lp");a.forEach(M=>{M.spool=g(M),M.g.userData.spool=M.spool});const _=[...new Set(a.map(M=>M.spool))].map(M=>({id:M,label:Uo[M]?.[0]||M,color:Uo[M]?.[1]||"#168aa1",parts:[...new Set(a.filter(w=>w.spool===M).map(w=>f(w.g)).filter(w=>w>=0))]}));let m="";function p(M){const w=`${M.shaftMode}/${M.selected}`;if(w===m)return;m=w;const D=_.filter(C=>C.parts.includes(M.selected)).map(C=>C.id);e.traverse(C=>{if(!C.isMesh)return;if(u.has(C)||u.set(C,C.material),!M.shaftMode){C.material=u.get(C);return}let L;for(let rt=C;rt&&rt!==e;rt=rt.parent){if(rt.userData.spool&&!o.includes(rt)){L=rt.userData.spool;break}if(rt.userData.bladeRow&&!rt.userData.rotating)break}const N=L&&(!D.length||D.includes(L)),V=Uo[L],$=rt=>{const bt=`${rt.uuid}/${L||"fixed"}/${!!N}`;if(!d.has(bt)){const xt=rt.clone();xt.color.set(V?.[1]||"#77867c"),xt.transparent=!N,xt.forceSinglePass=!0,xt.opacity=L?N?1:.36:.1,xt.depthWrite=!!N,xt.metalness=.25,xt.roughness=.48,L&&xt.emissive.set(V?.[1]||"#168aa1").multiplyScalar(N?.1:.02),c.push(xt),d.set(bt,xt)}return d.get(bt)},K=u.get(C);C.material=Array.isArray(K)?K.map($):$(K)})}const S=new ke;n.add(S);const v=new Ne(new ja(1,64),new Os({color:1666441,transparent:!0,opacity:.1,side:Tn,depthWrite:!1})),x=new uf(new Te().setFromPoints(Array.from({length:80},(M,w)=>new B(Math.cos(w*Math.PI/40),Math.sin(w*Math.PI/40),0))),new hs({color:1666441,transparent:!0,opacity:.8,depthTest:!1}));S.add(v,x),S.visible=!1;const A=new Ne(new tl(.075,14,10),new Os({color:1661538,depthTest:!1}));A.renderOrder=8,n.add(A),A.visible=!1;const R=new Kf(new B(1,0,0),new B,.6,1661538,.16,.08);n.add(R),R.visible=!1;let I={};function F(M,w=!1,D=I){const C=Ye.clamp(M,0,1),L=w&&(t.hasBypass??!["j79","pt6a"].includes(i.id)),V=h(C,{theta:1.1,f:.48,bypass:L},D),$=__(i,t,D,C,L),K=t.partAtProgress?t.partAtProgress(C,L):i.parts.findIndex(rt=>V[0]>=rt.bounds[0]&&V[0]<=rt.bounds[1]&&(L?rt.kind==="bypass":rt.kind!=="bypass"));return{...$,position:V,partIndex:Math.max(0,K)}}function E(M){I=M,p(M);const w=M.mode!=="exploded"&&!M.isolate;if(S.visible=!!M.probeEnabled&&w,A.visible=M.tourProgress!=null&&w,R.visible=A.visible,S.visible){const D=Ye.clamp(M.probeProgress??.5,0,1),C=!!M.probeBypass,L=F(D,C,M),N=h(Math.max(0,D-.002),{theta:1.1,f:.48,bypass:C},M),V=h(Math.min(1,D+.002),{theta:1.1,f:.48,bypass:C},M),$=new B(...V).sub(new B(...N)).normalize();!i.classic||i.id==="rb211"?(S.position.set(L.position[0],0,0),S.scale.setScalar(C?l:Math.max(.5,Math.hypot(...L.position.slice(1))*1.25)),S.quaternion.setFromUnitVectors(new B(0,0,1),new B(1,0,0))):(S.position.fromArray(L.position),S.scale.setScalar(.25),S.quaternion.setFromUnitVectors(new B(0,0,1),$))}if(A.visible){const D=M.tourProgress,C=!!M.tourBypass,L=h(D,{theta:1.1,f:.48,bypass:C},M),N=h(Math.min(1,D+.004),{theta:1.1,f:.48,bypass:C},M);A.position.fromArray(L),R.position.copy(A.position);const V=new B(...N).sub(A.position);V.lengthSq()>1e-10&&R.setDirection(V.normalize())}}function T(M,w=!1){const D=F(M,w),C=new B(...D.position),L=s.position.clone().sub(r.target).normalize().multiplyScalar(Math.max(4,l*2.6));r.target.copy(C),s.position.copy(C).add(L),r.update()}const U=()=>Math.max(5.6/(Math.tan(34*Math.PI/360)*s.aspect*.82),l*1.3/(Math.tan(34*Math.PI/360)*.65));function z(){const M=U();return{offset:s.position.clone().sub(r.target).divideScalar(M).toArray(),target:r.target.clone().divideScalar(5.5).toArray(),zoom:s.zoom}}function k(M){if(!M?.offset?.every(Number.isFinite)||!M?.target?.every(Number.isFinite))return;const w=r.enableDamping;r.enableDamping=!1,r.update(),r.target.fromArray(M.target).multiplyScalar(5.5),s.position.fromArray(M.offset).multiplyScalar(U()).add(r.target),s.zoom=M.zoom||1,s.updateProjectionMatrix(),r.update(),r.enableDamping=w}return{tick:E,setState:M=>{I=M},sampleFlow:F,focusFlow:T,getCameraPose:z,setCameraPose:k,spoolInfo:()=>_.map(M=>({...M,parts:[...M.parts]}))}}function Au(i,t,e=Xr("al31f")){const n=e.id==="al31f",s=n?t_:e.classic?d_(e):s_(e),{boundaries:r,constructionBounds:o,toLayout:a,passage:c,temperatureAt:l}=s,h=e.parts.map(ot=>ot.bounds);let u=Math.max(1.05,e.fanRadius*1.08),d=()=>{},f={};const g=new Jc,_=new Ng({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),_.localClippingEnabled=!0,_.toneMapping=Uc,_.toneMappingExposure=1,i.appendChild(_.domElement),_.domElement.setAttribute("aria-label",e.name+" 可交互三维构型；拖动旋转，滚轮缩放，点击部件选取");const m=new Pa(_),p=new Zg,S=m.fromScene(p,.025);g.environment=S.texture,p.dispose(),m.dispose();const v=new pn(34,1,.1,150),x=new Og(v,_.domElement);x.enableDamping=!0,x.minDistance=3,x.maxDistance=110;const A=new Xf(15398143,5985611,1.4);g.add(A);const R=new ql(16777215,2.2);R.position.set(-3,6,5),g.add(R);const I=new ql(12245483,2);I.position.set(4,2,-4),g.add(I);const F=new ke;g.add(F);const E=new Xn(new B(0,0,-1),.12),T=[];function U(ot,ut=.35,Dt=.78,At={}){const Mt=new Ra({color:ot,roughness:ut,metalness:Dt,side:Tn,clippingPlanes:[E],...At});return T.push(Mt),Mt}const z=U(10267314),k=U(4608347,.42),M=U(12700624,.26),w=U(10923952,.3),D=U(9204581,.42),C=U(11702891,.38),L=U(3423037,.5),N=[],V=[],$=[],K=[[-5,.905],[-4.8,.915],[-3.6,.89],[-3.5,.93],[-1.4,.91],[-.15,.91],[.85,.91],[1.4,.9],[3.75,.88],[4.89,.74]];function rt(ot){let ut=K.findIndex((Mt,Wt)=>Wt<K.length-1&&ot>=Mt[0]&&ot<=K[Wt+1][0]);if(ut<0)return .9;const Dt=K[ut],At=K[ut+1];return Dt[1]+(At[1]-Dt[1])*(ot-Dt[0])/(At[0]-Dt[0])}function bt(ot,ut,Dt){const At=new Ne(ot,ut);return Dt.add(At),At}function xt(ot,ut,Dt,At=96){const Mt=new wn(ot.map(Wt=>new it(Wt[1],Wt[0])),At);return Mt.rotateZ(-Math.PI/2),bt(Mt,ut,Dt)}function Y(ot,ut,Dt,At,Mt){return xt([[ot-Dt/2,ut-.016],[ot-Dt/2,ut+.018],[ot+Dt/2,ut+.018],[ot+Dt/2,ut-.016]],At,Mt)}function J(ot,ut,Dt,At,Mt,Wt,ie=.018){const se=xt([[ot,Dt-ie],[ot,Dt],[ut,At],[ut,At-ie],[ot,Dt-ie]],Mt,Wt);return se.userData.annotationOccluder=!0,se}function gt(ot,ut,Dt,At,Mt,Wt,ie){const se=bt(new Yn(Mt,Mt,At,10),Wt,ie);return se.position.set(ot,ut*Math.cos(Dt),ut*Math.sin(Dt)),se.rotation.x=Dt,se}function _t(ot,ut,Dt,At,Mt=0,Wt=0){const ie=new ke;ie.position.x=Mt,At.add(ie);const se=new Ta(ot,Dt,ut),ve=new Fe;for(let Ce=0;Ce<ut;Ce++)ve.rotation.x=Wt+Ce*Math.PI*2/ut,ve.updateMatrix(),se.setMatrixAt(Ce,ve.matrix);return ie.add(se),ie}function wt(ot,ut,Dt,At){const Mt=new Yn(.018,.018,.026,6);Mt.translate(0,ut,0),_t(Mt,Dt,M,At,ot);const Wt=new Yn(.025,.025,.008,12);Wt.translate(0,ut-.016,0),_t(Wt,Dt,k,At,ot)}function Vt(ot,ut,Dt,At,Mt){const Wt=Fr(ut,Dt,.14,.05);_t(Wt,At,k,Mt,ot)}function Yt(ot,ut,Dt,At,Mt,Wt,ie,se=0,ve=.7,Ce){const we=new ke;we.position.x=ot,we.userData.bladeRow=!0,we.userData.rotating=!!se,ie.add(we);const ct=new Ta(Ce?.geometry||Fr(ut,Dt,Mt,ve),Ce?.material||Wt,At),It=new Fe;for(let re=0;re<At;re++)It.rotation.x=2*Math.PI*re/At,It.updateMatrix(),ct.setMatrixAt(re,It.matrix);we.add(ct);const ee=new wn([new it(ut-.022,-Mt*.41),new it(ut+.004,-Mt*.41),new it(ut+.004,Mt*.41),new it(ut-.022,Mt*.41)],5,.008,Math.PI*2/At-.016);if(ee.rotateZ(-Math.PI/2),_t(ee,At,k,we),se){const re=Ce?.bore??(se>1?.182:.12);xt([[-Mt*.28,re],[-Mt*.28,ut*.72],[-Mt*.12,ut],[Mt*.12,ut],[Mt*.28,ut*.72],[Mt*.28,re],[-Mt*.28,re]],Wt,we),Y(-Mt*.25,ut*.73,.018,k,we),Y(Mt*.25,ut*.73,.018,k,we),Y(0,re+.028,Mt*.62,M,we),V.push({g:we,spin:se})}else Y(0,Dt,.025,k,we);return we}if(n){let ve=function(ct){for(const X of se)N[7].remove(X),X.traverse(ft=>{ft.geometry&&ft.geometry.dispose()});const It=new ke;N[7].add(It),se=[It];const ee=ct?.65:.48,re=a(3.77),pe=a(4.37),qe=a(4.89),nn=20;for(const[X,ft,Ct,Ot]of[[re,pe,.87,ee],[pe,qe,ee,.74]]){const Nt=new wn([new it(Ct,X),new it(Ot,ft),new it(Ot+.016,ft),new it(Ct+.016,X),new it(Ct,X)],10,.008,Math.PI*2/nn-.016);Nt.rotateZ(-Math.PI/2),_t(Nt,nn,D,It);const $t=new wn([new it(Ct+.02,X),new it(Ot+.02,ft)],3,-.025,.05);$t.rotateZ(-Math.PI/2),_t($t,nn,L,It);const Qt=[new B(X,Ct+.036,0),new B(ft,Ot+.036,0)];_t(new Ei(new Tr(...Qt),1,.012,6,!1),nn,w,It,0,Math.PI/nn)}Y(re,.885,.11,k,It),Y(re-.13,.916,.08,M,It);const b=new Yn(.032,.032,.083,12);b.rotateX(Math.PI/2),b.translate(pe,ee+.04,0),_t(b,nn,M,It);const W=new B(re-.1,.96,0),j=new B(pe-.2,ee+.11,0);_t(new Ei(new Tr(W,j),1,.021,8,!1),10,M,It);const Z=W.clone().lerp(j,.46);_t(new Ei(new Tr(W,Z),1,.044,10,!1),10,k,It)};var _e=ve;for(let ct=0;ct<8;ct++){const It=new ke;It.userData.part=ct,F.add(It),N.push(It);const ee=o[ct],re=o[ct+1];if(ct<7){const pe=rt(ee),qe=rt(re);$.push(J(ee+.012,re-.012,pe,qe,ct===6?D:z,It,.025))}for(const pe of ct===7?[ee+.04]:[ee+.04,re-.04])Y(pe,rt(pe)+.017,.065,k,It),wt(pe,rt(pe)+.049,24,It);if(ct<7){const pe=ct===6?7:ct<2?3:2;for(let qe=1;qe<=pe;qe++){const nn=ee+(re-ee)*qe/(pe+1);Y(nn,rt(nn)+.004,.025,ct===6?D:w,It)}for(const qe of[-1,1])bt(new mn(re-ee-.16,.035,.07),k,It).position.set((ee+re)/2,qe*(rt((ee+re)/2)+.02),0)}}J(-4.95,.75,.115,.115,M,N[0],.04).userData.spool="lp",J(-3.45,.22,.178,.178,C,N[1],.035).userData.spool="hp",xt([[-5.38,.002],[-5.28,.08],[-5.06,.2],[-4.83,.285],[-4.63,.3]],k,N[0]);for(let ct=0;ct<4;ct++){const It=-4.75+ct*.325,ee=.29+ct*.024,re=.85-ct*.013;Yt(It-.13,ee,re,32,.105,k,N[0],0,-.7),Yt(It,ee,re,36+ct*4,.19,w,N[0],1)}for(let ct=0;ct<9;ct++){const It=-3.33+ct*.21,ee=.385+ct*.011,re=.713-ct*.011;Yt(It-.085,ee,re,40+ct*2,.09,k,N[1],0,-.7),Yt(It,ee,re,44+ct*2,.125,ct>5?D:M,N[1],1.45)}$.push(J(-3.49,-1.4,.758,.68,z,N[1])),_t($n(-1.32,-.22,.724,.694),12,D,N[2]),_t($n(-1.32,-.22,.355,.355),12,C,N[2]);for(const ct of[-1.32,-1.13,-.91,-.66,-.22])Y(ct,.724+(ct+1.32)/1.1*-.03,.023,C,N[2]),Y(ct,.355,.019,D,N[2]);xt([[-1.32,.355],[-1.41,.365],[-1.43,.4]],C,N[2]),xt([[-1.43,.665],[-1.41,.71],[-1.32,.724]],C,N[2]);const ot=new wn([new it(.04,-.035),new it(.055,-.025),new it(.055,.025),new it(.039,.035)],16);ot.rotateZ(-Math.PI/2),ot.translate(0,.535,0),_t(ot,18,M,N[2],-1.35);const ut=new Yn(.014,.021,.075,12);ut.rotateZ(-Math.PI/2),ut.translate(0,.535,0),_t(ut,18,k,N[2],-1.39),Vt(-3.47,.77,.875,8,N[1]),Yt(-.035,.36,.64,42,.16,C,N[3],0,-.85),Yt(.18,.37,.65,54,.17,D,N[3],1.45,.9),$.push(J(-.13,.34,.7,.71,z,N[3])),Yt(.445,.36,.65,44,.15,C,N[4],0,-.8),Yt(.65,.35,.66,58,.17,D,N[4],1,.85),$.push(J(.36,.84,.71,.73,z,N[4])),Vt(.9,.34,.73,8,N[5]),Y(.94,.345,.13,M,N[5]),xt([[.83,.35],[1.02,.32],[1.9,.24],[2.35,.12],[2.5,.001]],k,N[5]);const Dt=[],At=[];for(let ct=0;ct<=1;ct++)for(let It=0;It<=144;It++){const ee=It/144*Math.PI*2,re=ct?.74+.09*Math.cos(ee*12):.735;Dt.push(.85+ct*.48,re*Math.cos(ee),re*Math.sin(ee))}for(let ct=0;ct<144;ct++)At.push(ct,ct+1,ct+145,ct+1,ct+146,ct+145);const Mt=new Te;Mt.setAttribute("position",new fe(Dt,3)),Mt.setIndex(At),Mt.computeVertexNormals(),bt(Mt,C,N[5]);for(const ct of[1.64,2.02])for(const It of[.3,.55,.74])Y(ct,It,.035,C,N[6]);for(let ct=0;ct<8;ct++)gt(1.65,.43,ct*Math.PI/4,.72,.018,k,N[6]);const Wt=[];for(let ct=0;ct<=72;ct++){const It=1.45+ct*2.28/72;Wt.push([It,.838+ct%2*.01])}xt(Wt,D,N[6]);for(const ct of[1.64,2.02])for(const It of[.3,.55,.74])xt([[ct-.045,It-.022],[ct,It],[ct-.045,It+.022]],k,N[6]);bt(new mn(.85,.19,.39),k,N[1]).position.set(-2.45,.99,-.1);for(let ct=0;ct<4;ct++)bt(new mn(.14,.13,.31),z,N[1]).position.set(-2.75+ct*.2,1.12,-.1);for(let ct=0;ct<5;ct++){const It=-.5-ct*.31,ee=.97,re=[new B(-3.6,ee*Math.cos(It),ee*Math.sin(It)),new B(-3.25,(ee+.03)*Math.cos(It),(ee+.03)*Math.sin(It)),new B(-1.6,(ee+.01)*Math.cos(It),(ee+.01)*Math.sin(It)),new B(-1.28,.86*Math.cos(It),.86*Math.sin(It))];bt(new Ei(new Hr(re),24,.014,7,!1),ct%2?C:M,N[1])}let se=[];F.updateMatrixWorld(!0);const Ce=new Set,we=new Map;F.traverse(ct=>{const It=ct.getWorldPosition(new B).x;we.set(ct,{old:It,next:ct===F||N.includes(ct)||se.includes(ct)?0:a(It)})}),F.traverse(ct=>{if(!ct.geometry||se.includes(ct)||Ce.has(ct.geometry))return;Ce.add(ct.geometry);const It=we.get(ct),ee=ct.geometry.attributes.position;for(let re=0;re<ee.count;re++)ee.setX(re,a(ee.getX(re)+It.old)-It.next);ee.needsUpdate=!0,ct.geometry.computeVertexNormals(),ct.geometry.computeBoundingSphere()}),F.traverse(ct=>{ct!==F&&(ct.position.x=we.get(ct).next-(we.get(ct.parent)?.next||0))}),ve(!0),d=ve}else f=(e.classic?h_:e.layout?c_:a_)(e,{root:F,groups:N,rotors:V,shells:$,mesh:bt,lathe:xt,tube:J,ring:Y,row:Yt,radialInstances:_t,boltCircle:wt,strut:Vt,mat:U,steel:z,dark:k,light:M,titanium:w,hot:D,copper:C,black:L}),d=f.nozzle||(()=>{});if(e.classic){const ot=new jn().setFromObject(F);u=Math.max(u,Math.abs(ot.min.y),Math.abs(ot.max.y),Math.abs(ot.min.z),Math.abs(ot.max.z))}const O=N.map(ot=>{const ut=new jn().setFromObject(ot);return Math.max(.55,(ut.max.y-ut.min.y)/2,(ut.max.z-ut.min.z)/2)}),at=[new B(-5.7,0,0),new B(5.8,0,0)],st=new kr(new Te().setFromPoints(at),new Wf({color:8427150,dashSize:.1,gapSize:.1,transparent:!0,opacity:.38}));st.computeLineDistances(),g.add(st);const nt=new Zf(24,48,12634563,14475740);nt.position.y=-u-.22,nt.material.transparent=!0,nt.material.opacity=.3,g.add(nt);const tt=3e3,pt=new Float32Array(tt*6),ht=new Float32Array(tt*6),St=[];for(let ot=0;ot<tt;ot++)St.push({progress:Math.random(),theta:Math.random()*Math.PI*2,f:.12+Math.random()*.76,bypass:ot/tt<(s.bypassFraction??(e.id==="j79"?0:n?.37:.75))});const jt=new Te;jt.setAttribute("position",new an(pt,3).setUsage(dl)),jt.setAttribute("color",new an(ht,3).setUsage(dl));const Zt=new hs({vertexColors:!0,transparent:!0,opacity:.83,depthWrite:!1}),P=new Qc(jt,Zt);P.frustumCulled=!1,g.add(P);const y=new he,q=[[288,2260432],[600,567471],[1e3,14268458],[1500,16089127],[2100,15348788]].map(([ot,ut])=>[ot,new he(ut)]);function Q(ot){let ut=0;for(;ut<q.length-2&&ot>q[ut+1][0];)ut++;return y.copy(q[ut][1]).lerp(q[ut+1][1],Ye.clamp((ot-q[ut][0])/(q[ut+1][0]-q[ut][0]),0,1))}let G={mode:"cutaway",cut:.12,explode:.6,throttle:85,afterburner:e.afterburner,flow:!0,playing:!0,selected:0,isolate:!1,subpart:-1,animationSpeed:1,shaftMode:!1,nozzleAngle:0,probeEnabled:!1,probeProgress:.5,probeBypass:!1,tourProgress:null,tourBypass:!1},et=0;function kt(ot,ut,Dt=G){if(s.flowPoint)return s.flowPoint(ot,ut,Dt);const At=-5.5+ot*11.6,Mt=c(At,ut.bypass,Dt.afterburner),Wt=Math.sqrt(Mt[0]**2+(Mt[1]**2-Mt[0]**2)*ut.f),ie=ut.theta+Math.max(0,Math.min(At+5,5))*.08;return[At,...s.flowPosition?s.flowPosition(At,ut,Dt.afterburner):[Wt*Math.cos(ie),Wt*Math.sin(ie)]]}const yt=x_({preset:e,physics:s,root:F,scene:g,camera:v,controls:x,groups:N,rotors:V,materials:T,modelRadius:u,flowPoint:kt});let zt=e.afterburner,Bt="perspective";function dt(ot="perspective"){Bt=ot;const Dt=G.mode==="exploded"&&!G.isolate?1.5:1;if(x.target.set(G.isolate?(h[G.selected][0]+h[G.selected][1])/2:0,0,0),G.isolate&&G.subpart>=0){const ve=N[G.selected].children.filter(Ce=>Ce.userData.bladeRow)[G.subpart];ve&&(x.target.x=ve.position.x)}const At=x.target.x;let Mt=Math.max(5.6/(Math.tan(34*Math.PI/360)*v.aspect*.82),u*1.3/(Math.tan(34*Math.PI/360)*.65))*Dt;const Wt=e.parts[G.selected].kind,ie=e.layout,se=e.classic?O[G.selected]:!n&&["fan","bypass"].includes(Wt)?u:ie?ie.stages[G.selected]?Math.max(...ie.stages[G.selected].tip)+.15:Wt==="combustor"?ie.combustor.caseRadius+.1:ie.exhaust.outer[0][1]+.1:1.05;if(G.isolate&&(Mt=Math.max(4.8,3.1/v.aspect,se*3.7)),ot==="front"){const Ce=(G.isolate?(h[G.selected][1]-h[G.selected][0])/2:5.6)+(G.isolate?se:u)/(Math.tan(34*Math.PI/360)*Math.min(1,v.aspect)*.82);v.position.set(At-Ce*Dt,.02,.02)}else ot==="side"?v.position.set(At,.1,Mt):e.id==="pegasus"?v.position.set(At-Mt*.35,Mt*.65,Mt*.6):e.layout?v.position.set(At-Mt*.48,Mt*.21,Mt*.852):v.position.set(At-Mt*.3,Mt*.18,Mt*.936);G.isolate&&G.subpart>=0&&ot==="perspective"&&v.position.set(At-se*2.8,se*.9,se*2.5),x.update()}function Lt(ot){const ut=G.mode,Dt=G.isolate,At=G.selected,Mt=G.subpart;G={...G,...ot},e.afterburner||(G.afterburner=!1),yt.setState(G),E.constant=G.cut,T.forEach(Wt=>{Wt.clippingPlanes=G.mode==="cutaway"&&!Wt.userData.keepUncut?[E]:[]}),Zt.clippingPlanes=G.mode==="cutaway"&&e.id!=="pegasus"?[E]:[],P.visible=G.flow&&G.mode!=="exploded"&&!G.isolate&&!G.shaftMode,f.updateMechanism?.(G),G.afterburner!==zt&&(d(G.afterburner),zt=G.afterburner),N.forEach((Wt,ie)=>{Wt.visible=!G.isolate||ie===G.selected;const se=Wt.children.filter(ve=>ve.userData.bladeRow);Wt.children.forEach(ve=>{ve.visible=(!(G.isolate&&G.subpart>=0)||ve===se[G.subpart])&&!(ve.userData.bypassCowl&&G.mode==="exploded"&&!G.isolate)})}),$.forEach(Wt=>{Wt.visible=G.mode!=="exploded"&&!G.isolate}),(ut!==G.mode||Dt!==G.isolate||Mt!==G.subpart||G.isolate&&At!==G.selected)&&dt(Bt)}const Kt=new jl,Gt=new it;let Rt=null;_.domElement.addEventListener("pointerdown",ot=>Rt={x:ot.clientX,y:ot.clientY}),_.domElement.addEventListener("pointerup",ot=>{if(!Rt||Math.hypot(ot.clientX-Rt.x,ot.clientY-Rt.y)>5)return;const ut=_.domElement.getBoundingClientRect();Gt.set((ot.clientX-ut.left)/ut.width*2-1,-(ot.clientY-ut.top)/ut.height*2+1),Kt.setFromCamera(Gt,v);const Dt=Kt.intersectObjects(N,!0);for(const At of Dt){let Mt=At.object,Wt=!0;for(;Mt&&Mt!==F;)Mt.visible||(Wt=!1),Mt=Mt.parent;if(!(!Wt||G.mode==="cutaway"&&E.distanceToPoint(At.point)<0)){for(Mt=At.object;Mt.parent&&Mt.userData.part===void 0;)Mt=Mt.parent;if(Mt.userData.part!==void 0){t(Mt.userData.part);break}}}});function ne(ot,ut){N.forEach((At,Mt)=>{const Wt=G.mode==="exploded"&&!G.isolate,ie=Wt?(Mt-(N.length-1)/2)*G.explode*.95:0;At.position.x=Ye.damp(At.position.x,ie,9,ot),At.position.y=Ye.damp(At.position.y,Wt&&e.layout&&e.parts[Mt].kind==="bypass"?u*1.4*G.explode:0,9,ot)});const Dt=(G.playing?ot:et)*Math.max(.01,G.animationSpeed??1);if(et=0,V.forEach(({g:At,spin:Mt})=>At.rotation.x+=Dt*Mt*.36),f.tickMechanism?.(Dt,G),yt.tick(G),P.visible){const At=Hs(e,s,G),Mt=Hs(e,s,G,!0);for(let Wt=0;Wt<tt;Wt++){const ie=St[Wt],se=(.7+G.throttle/90)*(ie.progress>.78?1.6:ie.progress>.45?1.25:1);ie.progress=(ie.progress+Dt*se/11.6)%1;for(let ve=0;ve<2;ve++){const Ce=Math.max(0,ie.progress-ve*.0053*se),we=kt(Ce,ie),ct=Wt*6+ve*3;pt.set(we,ct);const It=Q(Tu(ie.bypass?Mt:At,Ce).temperature);ht[ct]=It.r,ht[ct+1]=It.g,ht[ct+2]=It.b}}jt.attributes.position.needsUpdate=!0,jt.attributes.color.needsUpdate=!0}x.update(),_.render(g,v)}function H(){const ot=i.clientWidth,ut=i.clientHeight;_.setSize(ot,ut),v.aspect=ot/Math.max(ut,1),v.updateProjectionMatrix(),dt(Bt)}const vt=new ResizeObserver(H);vt.observe(i),H(),dt(),Lt({});let Tt="",Ft=[];const mt=new jl,lt=[];F.traverse(ot=>{ot.userData.annotationOccluder&&lt.push(ot)});function Ht(){const ot=[G.mode,G.cut,G.isolate,G.selected,G.subpart,G.afterburner].join("/");ot!==Tt&&(Tt=ot,F.updateMatrixWorld(!0),Ft=N.map((ut,Dt)=>{if(!ut.visible)return null;const At=ut.children.filter(pe=>pe.userData.bladeRow&&pe.visible),Mt=G.isolate&&G.subpart>=0?At[0]:At.filter(pe=>!pe.userData.rotating)[Math.floor(At.filter(pe=>!pe.userData.rotating).length/2)],[Wt,ie]=h[Dt],se=Mt?Mt.position.x:(Wt+ie)/2,ve=e.parts[Dt].kind==="bypass"?e.fanRadius*.86:e.parts[Dt].kind==="fan"?e.fanRadius*.67:.64,Ce=new B(se,ve,Math.min(-.08,G.mode==="cutaway"?G.cut-.04:0));let we=null,ct=1/0;const It=new B,ee=new xe,re=ut.matrixWorld.clone().invert();return(Mt||ut).traverse(pe=>{if(!pe.isMesh)return;for(let b=pe;b&&b!==ut;b=b.parent)if(!b.visible)return;const qe=pe.geometry.attributes.position;if(!qe)return;const nn=new xe().multiplyMatrices(re,pe.matrixWorld);for(let b=0;b<(pe.isInstancedMesh?pe.count:1);b++){pe.isInstancedMesh&&pe.getMatrixAt(b,ee);for(let W=0;W<qe.count;W+=Math.max(1,Math.floor(qe.count/96))){if(It.fromBufferAttribute(qe,W),pe.isInstancedMesh&&It.applyMatrix4(ee),It.applyMatrix4(nn),It.x<Wt-.05||It.x>ie+.05||G.mode==="cutaway"&&It.z>G.cut)continue;const j=It.distanceToSquared(Ce);j<ct&&(ct=j,we=It.clone())}}}),we}))}function te(ot){Ht();const ut=Ft[ot];if(!ut)return{visible:!1,x:0,y:0};const Dt=N[ot].localToWorld(ut.clone()),At=Dt.clone().project(v);mt.set(v.position,Dt.clone().sub(v.position).normalize()),mt.far=v.position.distanceTo(Dt)-.025;const Mt=mt.intersectObjects(lt,!1).some(ie=>{for(let se=ie.object;se;se=se.parent)if(!se.visible)return!1;return G.mode!=="cutaway"||E.distanceToPoint(ie.point)>=0}),Wt=N[ot].localToWorld(new B(ut.x,u,0)).project(v);return{x:(At.x*.5+.5)*i.clientWidth,y:(-At.y*.5+.5)*i.clientHeight,labelY:(-Wt.y*.5+.5)*i.clientHeight,occluded:Mt,visible:N[ot].visible&&At.z>=-1&&At.z<=1&&Math.abs(At.x)<1&&Math.abs(At.y)<1}}function Me(){vt.disconnect(),x.dispose();const ot=new Set,ut=new Set(T);g.traverse(Dt=>{if(Dt.geometry&&ot.add(Dt.geometry),Dt.material)for(const At of Array.isArray(Dt.material)?Dt.material:[Dt.material])ut.add(At)}),ot.forEach(Dt=>Dt.dispose()),ut.forEach(Dt=>Dt.dispose()),S.dispose(),g.clear(),_.dispose(),_.forceContextLoss(),_.domElement.remove()}return{dispose:Me,preset:e,physics:s,update:Lt,tick:ne,setView:dt,project:te,renderer:_,scene:g,camera:v,groups:N,rotors:V,step:(ot=1/30)=>{et+=ot},...Object.fromEntries(["sampleFlow","focusFlow","getCameraPose","setCameraPose","spoolInfo"].map(ot=>[ot,yt[ot]])),getState:()=>({...G}),stats:()=>({drawCalls:_.info.render.calls,triangles:_.info.render.triangles,geometries:_.info.memory.geometries,rotorRows:V.filter(ot=>ot.g.userData.bladeRow).length,engineId:e.id,particleCount:tt,fanBladeCount:e.layout?V[0]?.g.children.find(ot=>ot.isInstancedMesh)?.count:void 0,spoolSpeeds:[...new Set(V.map(ot=>ot.spin))],spools:yt.spoolInfo(),flowVisible:P.visible,particleChecksum:St.slice(0,5).map(ot=>ot.progress),particleFinite:pt.every(Number.isFinite)})}}const Et=i=>document.querySelector(i),We=i=>String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;"),No=([i,t])=>`<a href="${We(t)}" target="_blank" rel="noreferrer">${We(i)} ↗</a>`,Mr=i=>Number.isFinite(i)?Math.round(i).toLocaleString("zh-CN"):"—";function v_({state:i,getPrimary:t,getPreset:e,sync:n,selectPart:s}){let r,o,a=0,c=!1,l="primary",h=!1,u=0,d="",f="",g="",_="";const m=yn.map(M=>`<option value="${M.id}">${We(M.name)} · ${We(M.subtitle)}</option>`).join("");Et("#engine-select").innerHTML=m,Et("#compare-select").innerHTML=m,Et("#engine-library-count").textContent=`SELECT ENGINE / ${String(yn.length).padStart(2,"0")}`,Et("#compare-select").value=yn.find(M=>M.id!==e().id)?.id||yn[0].id;const p=M=>t()?.physics.hasBypass??M.hasBypass??!["j79","pt6a"].includes(M.id),S=(M,w=!1)=>t()?.sampleFlow?.(M,w);function v(M){document.querySelectorAll("[data-view]").forEach(w=>{const D=w.dataset.view===M;w.classList.toggle("active",D),w.setAttribute("aria-pressed",D)})}function x(){h=!1,i.tourProgress=null,d=""}function A(){const M=e();return{...i,engineId:o.id,cut:i.cut/(M.fanRadius||1)*(o.fanRadius||1),selected:Math.min(i.selected,o.parts.length-1),isolate:!1,subpart:-1,labels:!1,afterburner:o.afterburner&&i.afterburner,tourProgress:null,probeEnabled:!1}}function R(){if(!o)return;const M=e(),w=M.id+"|"+o.id;if(w===_)return;_=w,Et("#compare-caption").textContent=o.name+" / SYNCHRONIZED VIEW";const D=M.layout?.fanDiameterM&&o.layout?.fanDiameterM?`<p class="verified-diameter">已核实风扇直径：${M.name} ${M.layout.fanDiameterM.toFixed(2)} m / ${o.name} ${o.layout.fanDiameterM.toFixed(2)} m</p>`:"";Et("#compare-facts").innerHTML=`<table><caption>构型对比</caption><thead><tr><th>项目</th><th>${We(M.name)}</th><th>${We(o.name)}</th></tr></thead><tbody><tr><th>轴系</th><td>${We(M.facts.find(C=>/转子|轴/.test(C))||M.spools+" 轴")}</td><td>${We(o.facts.find(C=>/转子|轴/.test(C))||o.spools+" 轴")}</td></tr><tr><th>构型</th><td>${We(M.facts.filter(C=>!/转子|轴/.test(C)).join(" / "))}</td><td>${We(o.facts.filter(C=>!/转子|轴/.test(C)).join(" / "))}</td></tr><tr><th>加力</th><td>${M.afterburner?"有":"无"}</td><td>${o.afterburner?"有":"无"}</td></tr></tbody></table>${D}`}async function I(M){const w=++a;if(c=!1,Et("#compare-loading").hidden=!1,Et("#compare-loading").textContent="正在构建对比模型…",Et("#compare-select").disabled=!0,Et("#compare-viewport").setAttribute("aria-busy","true"),await new Promise(D=>requestAnimationFrame(()=>requestAnimationFrame(D))),!(w!==a||!i.comparing)){r?.dispose(),r=void 0;try{o=Xr(M),r=Au(Et("#compare-viewport"),()=>{},o),r.update(A());const D=t()?.getCameraPose?.();D&&r.setCameraPose?.(D),l="primary",_="",R(),Et("#compare-loading").hidden=!0}catch(D){c=!0,Et("#compare-loading").textContent="对比模型构建失败，请重新选择机型。",console.error(D)}finally{Et("#compare-select").disabled=!1,Et("#compare-viewport").setAttribute("aria-busy","false")}}}function F(){i.comparing=!i.comparing,Et("#compare-pane").hidden=!i.comparing,Et("#viewer-grid").classList.toggle("comparing",i.comparing),Et("#compare-toggle").setAttribute("aria-pressed",i.comparing),Et("#compare-toggle").classList.toggle("active",i.comparing),Et("#compare-toggle").textContent=i.comparing?"关闭双机对比":"双机对比",i.comparing?I(Et("#compare-select").value):(++a,r?.dispose(),r=void 0,Et("#compare-select").disabled=!1,c=!1,Et("#compare-viewport").setAttribute("aria-busy","false"))}Et("#compare-toggle").addEventListener("click",F),Et("#compare-select").addEventListener("change",M=>I(M.target.value));for(const M of["pointerdown","wheel"])Et("#viewport").addEventListener(M,()=>{l="primary",h&&(h=!1,Et("#tour-play").textContent="继续导览")},{passive:!0}),Et("#compare-viewport").addEventListener(M,()=>{l="comparison",h&&(h=!1,T())},{passive:!0});Et("#animation-speed").addEventListener("input",M=>{i.animationSpeed=+M.target.value,n()}),Et("#step-frame").addEventListener("click",()=>{i.playing=!1,h=!1,n(),t()?.step?.(1/30),r?.step?.(1/30)}),Et("#shaft-mode").addEventListener("change",M=>{x(),i.shaftMode=M.target.checked,n()}),Et("#spool-legend").addEventListener("click",M=>{const w=M.target.closest("[data-spool-part]");w&&(i.shaftMode=!0,Et("#shaft-mode").checked=!0,s(+w.dataset.spoolPart))}),Et("#nozzle-angle").addEventListener("input",M=>{i.nozzleAngle=+M.target.value,n()});function E(){(i.tourProgress===null||i.tourProgress>=1)&&(i.tourProgress=0),i.mode="cutaway",i.isolate=!1,i.shaftMode=!1,i.flow=!0,Et("#flow").checked=!0,i.playing=!0,h=!0,l="primary",u=0,n(),v(null),t()?.focusFlow?.(i.tourProgress,i.tourBypass),Et("#primary-stage").scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}Et("#tour-play").addEventListener("click",()=>{h?(h=!1,n()):E()}),Et("#tour-overlay-play").addEventListener("click",()=>Et("#tour-play").click()),Et("#tour-overlay-stop").addEventListener("click",()=>Et("#tour-stop").click()),Et("#tour-stop").addEventListener("click",()=>{x(),t()?.setView("perspective"),l="primary",n(),v("perspective")}),Et("#tour-progress").addEventListener("input",M=>{h=!1,i.tourProgress=+M.target.value,i.mode="cutaway",i.isolate=!1,i.shaftMode=!1,l="primary",n(),v(null),t()?.focusFlow?.(i.tourProgress,i.tourBypass)}),Et("#tour-route").addEventListener("change",M=>{i.tourBypass=M.target.value==="bypass",i.tourProgress!==null?(i.tourProgress=0,n(),v(null),t()?.focusFlow?.(0,i.tourBypass)):n()}),Et("#probe-enabled").addEventListener("change",M=>{i.probeEnabled=M.target.checked,i.probeEnabled&&(i.isolate=!1,i.mode="cutaway"),n()}),Et("#probe-progress").addEventListener("input",M=>{i.probeProgress=+M.target.value,i.probeEnabled=!0,Et("#probe-enabled").checked=!0,(i.isolate||i.mode==="exploded")&&(i.isolate=!1,i.mode="cutaway"),n()}),Et("#probe-route").addEventListener("change",M=>{i.probeBypass=M.target.value==="bypass",f="",n()});function T(){const M=i.tourProgress??0,w=S(M,i.tourBypass);if(Et("#tour-progress").value=M,Et("#tour-progress-value").textContent=Math.round(M*100)+"%",Et("#tour-play").textContent=h?"暂停导览":i.tourProgress!==null&&M<1?"继续导览":"开始导览",Et("#tour-overlay").hidden=i.tourProgress===null,Et("#tour-overlay-play").textContent=h?"暂停":M>=1?"重播":"继续",!w||i.tourProgress===null){Et("#tour-station").textContent="选择流路，沿公开构型的近似通道前进。",Et("#tour-explanation").textContent="镜头跟随示踪标记；按流经部位讲解工作过程。导览位置并非实际驻留时间。",d="";return}const D=e().parts[w.partIndex],C=w.stationLabel||D?.name||"沿流路前进";d!==C&&(Et("#tour-station").textContent=C,d=C);const L=e().id==="rb211"?"风扇给外涵气流增压；冷流绕过核心燃烧区，在后方混合区与热流汇合，再由共同喷口排出。":e().id==="pegasus"?"低压风扇给外涵气流增压；气流绕过核心燃烧区，直接分到前部左右一对冷喷口。":e().id==="al31f"?"低压系统给外涵气流增压；冷流绕过核心燃烧区，在涡轮后混合，并通过共同加力段和喷管。":"风扇给外涵气流增压；这股气流绕过核心燃烧区，由风扇喷口独立排出。";Et("#tour-explanation").textContent=i.tourBypass?L:D?.desc||"气流沿模型预设通道前进，颜色表示教学总温。",Et("#tour-overlay-label").textContent=`${Math.round(M*100)}% · ${C}`,Et("#tour-overlay-copy").textContent=Et("#tour-explanation").textContent.split("。")[0]+"。"}function U(){const M=S(i.probeProgress,i.probeBypass);Et("#probe-progress").value=i.probeProgress,Et("#probe-progress-value").textContent=Math.round(i.probeProgress*100)+"%",Et("#probe-temperature").textContent=Mr(M?.temperature),Et("#probe-pressure").textContent=Mr(M?.pressure),Et("#probe-station").textContent=M?.stationLabel||"等待模型";const w=[e().id,i.throttle,i.afterburner,i.probeBypass].join("|");if(w!==f){f=w;const D=Array.from({length:65},(K,rt)=>S(rt/64,i.probeBypass));if(D.some(K=>!K||!Number.isFinite(K.pressure))){f="";return}const C=Math.ceil(Math.max(...D.map(K=>K.temperature))/200)*200,L=Math.ceil(Math.max(...D.map(K=>K.pressure))/200)*200,N=K=>36+K*288,V=(K,rt)=>136-K/rt*112,$=(K,rt)=>D.map(bt=>`${N(bt.progress).toFixed(1)},${V(bt[K],rt).toFixed(1)}`).join(" ");Et("#probe-chart").innerHTML=`<svg viewBox="0 0 360 158" role="img" aria-label="教学总温与总压沿流路曲线，温度峰值 ${Mr(Math.max(...D.map(K=>K.temperature)))} K，总压峰值 ${Mr(Math.max(...D.map(K=>K.pressure)))} kPa。左轴温度，右轴压力；非实测。"><path d="M36 24H324M36 80H324M36 136H324" stroke="#cdd7c6" stroke-dasharray="3 4" fill="none"/><polyline points="${$("temperature",C)}" fill="none" stroke="#bb6539" stroke-width="2.2"/><polyline points="${$("pressure",L)}" fill="none" stroke="#287e99" stroke-width="2" stroke-dasharray="5 3"/><path id="probe-cursor" d="M180 20V138" stroke="#40553d" stroke-width="1.5"/><text x="32" y="14" text-anchor="end" fill="#9e4d2a">${C}</text><text x="328" y="14" fill="#256e87">${L}</text><text x="32" y="139" text-anchor="end">0</text><text x="328" y="139">0</text><text x="36" y="153">进气</text><text x="324" y="153" text-anchor="end">排气</text></svg>`}Et("#probe-cursor")?.setAttribute("d",`M${36+i.probeProgress*288} 20V138`)}function z(){const M=t()?.spoolInfo?.()||[],w=e().id+"|"+i.selected+"|"+i.shaftMode;if(w!==g){g=w,Et("#spool-legend").innerHTML=M.map(C=>`<button class="spool-chip${i.shaftMode&&C.parts.includes(i.selected)?" active":""}" data-spool-part="${C.parts[0]}" aria-pressed="${i.shaftMode&&C.parts.includes(i.selected)}"><i style="--spool-color:${We(C.color)}"></i>${We(C.label)}</button>`).join("");const D=M.filter(C=>C.parts.includes(i.selected));Et("#spool-description").textContent=(D.length?D.map(C=>`${C.label}：${C.parts.map(L=>e().parts[L]?.short||e().parts[L]?.name).join(" ↔ ")}`).join("；"):"当前为固定结构或流道。选择一个轴系，查看与它联动的转动部件。")+" 轴系着色时隐藏气流。"}}function k(){const M=e(),w=M.parts[i.selected],D=w.evidence,C=typeof D=="string"?D:Array.isArray(D)?D.join("；"):D?.verified||D?.supported||D?.facts,L=Array.isArray(C)?C.join("；"):C,N=Array.isArray(D?.sources)?D.sources:M.sources,V=M.reference||w.reference,$=V?.imageUrl?`<figure class="reference-figure"><img src="${We(V.imageUrl)}" alt="${We(V.caption||M.name+" 公开参考图")}" loading="lazy"/><figcaption>${We(V.caption||"外部公开参考图")} · ${No([V.title||"查看原始资料",V.url||V.imageUrl])}</figcaption></figure>`:M.id==="al31f"?`<figure class="reference-figure"><img src="https://djvu.online/jpg1/I/F/4/IF4LC5NA9fozh/004.webp" alt="AL-31F 公开图册纵剖参考图，外部资料" loading="lazy"/><figcaption>AL-31F 图册纵剖 · ${No(M.sources[1])}</figcaption></figure>`:"";Et("#evidence-title").textContent=M.name+" · "+w.name,Et("#part-evidence-content").innerHTML=`<div class="evidence-facts"><span class="eyebrow">PUBLIC STRUCTURE</span><h3>资料约束的构型</h3><p>${We(L||M.evidence)}</p>${L?"":'<p class="evidence-caveat">以上为当前机型的公开构型约束。此部件的具体尺寸与每项细节，并非均有独立图纸验证。</p>'}</div><div class="evidence-approx"><span class="eyebrow">RECONSTRUCTION</span><h3>当前模型怎样表达</h3><p>${We(w.desc)}</p><p>${We(D?.approximation||D?.approximate||"内部轴向位置、半径、叶型、装配间隙及附属细节采用教学重建。模型不是厂家 CAD；流线、总温和总压为预设流路及教学站位计算，非实测或 CFD。")}</p></div>${$}<h3>原始图、照片与文字资料</h3><p class="evidence-caveat">图像与 PDF 在原始资料中打开；按标题注明的页面、图号核对，避免将三维重建当作实物照片。</p><ul class="evidence-links">${N.map(K=>`<li>${No(Array.isArray(K)?K:[K.title,K.url])}</li>`).join("")}</ul>`,Et("#evidence-dialog").showModal()}return Et("#part-evidence-open").addEventListener("click",k),Et("#evidence-close").addEventListener("click",()=>Et("#evidence-dialog").close()),Et("#evidence-dialog").addEventListener("click",M=>{if(M.target===M.currentTarget){const w=M.currentTarget.getBoundingClientRect();(M.clientX<w.left||M.clientX>w.right||M.clientY<w.top||M.clientY>w.bottom)&&M.currentTarget.close()}}),{sync(){const M=e();Et("#animation-speed-value").textContent=i.animationSpeed.toFixed(2)+"×",Et("#animation-speed").value=i.animationSpeed,Et("#shaft-mode").checked=i.shaftMode,Et("#probe-enabled").checked=i.probeEnabled;const w=p(M);for(const D of["tour-route","probe-route"])Et("#"+D+' option[value="bypass"]').disabled=!w;w||(i.tourBypass=!1,i.probeBypass=!1),Et("#tour-route").value=i.tourBypass?"bypass":"core",Et("#probe-route").value=i.probeBypass?"bypass":"core",Et("#vector-control").hidden=M.id!=="pegasus",Et("#nozzle-angle").value=i.nozzleAngle,Et("#nozzle-angle-value").textContent=`${Math.round(i.nozzleAngle)}° · ${i.nozzleAngle===0?"向后":i.nozzleAngle===90?"向下":"偏转"}`,i.playing||(h=!1),z(),T(),U(),r&&(r.update(A()),R())},changed(){x(),i.probeProgress=.5,i.tourBypass=!1,i.probeBypass=!1,l="primary",f="",g="",_=""},tick(M,w){if(h&&t()&&(i.tourProgress=Math.min(1,(i.tourProgress??0)+M*.045*i.animationSpeed),u+=M,t().update(i),t().focusFlow?.(i.tourProgress,i.tourBypass),l="primary",(u>.15||i.tourProgress>=1)&&(u=0,i.tourProgress>=1&&(h=!1),T())),r)if(l==="comparison"){r.tick(M,w);const D=r.getCameraPose?.();D&&t()?.setCameraPose?.(D)}else{const D=t()?.getCameraPose?.();D&&r.setCameraPose?.(D),r.tick(M,w)}},cameraPrimary(){l="primary"},interruptTour:x,qa(){return{comparing:i.comparing,comparisonId:o?.id,comparisonError:c,comparisonStats:r?.stats(),primaryPose:t()?.getCameraPose?.(),comparisonPose:r?.getCameraPose?.(),tourPlaying:h,probe:S(i.probeProgress,i.probeBypass),spools:t()?.spoolInfo?.()||[]}}}}const Ut=i=>document.querySelector(i),cs=i=>[...document.querySelectorAll(i)],rl=matchMedia("(prefers-reduced-motion: reduce)").matches;let ue=Xr(new URL(location.href).searchParams.get("engine"));const Xt={engineId:ue.id,mode:"cutaway",cut:.12,explode:.6,throttle:85,afterburner:ue.afterburner,flow:!0,labels:!0,playing:!rl,selected:0,isolate:!1,subpart:-1,animationSpeed:1,shaftMode:!1,nozzleAngle:0,probeEnabled:!1,probeProgress:.5,probeBypass:!1,tourProgress:null,tourBypass:!1,comparing:!1};let Xe,Or,ln,Qi=ue.parts,wu=[],Ru=[],Dc=0,Ua="";const _i=i=>i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;");function ol(i){ln?.interruptTour(),Xt.selected=i,Xt.subpart=-1,Pn()}function M_(){return Xe?.groups[Xt.selected]?.children.filter(i=>i.userData.bladeRow)||[]}function Pn(){if(!Xe)return;Xe.update(Xt),cs("[data-mode]").forEach(r=>{const o=r.dataset.mode===Xt.mode;r.classList.toggle("active",o),r.setAttribute("aria-pressed",o)}),cs("[data-part]").forEach(r=>{const o=+r.dataset.part===Xt.selected;r.classList.toggle("active",o),r.setAttribute("aria-pressed",o)});const i=Qi[Xt.selected];Ut("#part-title").textContent=i.name,Ut("#part-tag").textContent=i.tag,Ut("#part-desc").textContent=i.desc;const t=M_();Ut("#subpart-control").hidden=!Xt.isolate||!t.length;const e=`${ue.id}-${Xt.selected}`;e!==Ua&&(Ut("#subpart").innerHTML='<option value="-1">全部叶排与支承结构</option>'+t.map((r,o)=>`<option value="${o}">${r.userData.label||`第 ${Math.floor(o/2)+1} 级 · ${r.userData.rotating?"转子叶盘":"静子叶排"}`}</option>`).join(""),Ua=e),Ut("#subpart").value=String(Xt.subpart),Ut("#isolate").setAttribute("aria-pressed",Xt.isolate),Ut("#isolate").classList.toggle("active",Xt.isolate),Ut("#cut-value").textContent=`z = ${Xt.cut>=0?"+":""}${Xt.cut.toFixed(2)}`,Ut("#explode-value").textContent=`${Math.round(Xt.explode*100)}%`,Ut("#throttle-value").textContent=`${Xt.throttle}%`,Ut("#play").textContent=Xt.playing?"暂停运行":"继续运行",Ut("#play").setAttribute("aria-label",Xt.playing?"暂停发动机和流动动画":"继续发动机和流动动画"),Ut("#play").setAttribute("aria-pressed",!Xt.playing),Ut("#status-text").textContent=`${Xt.playing?"运行中":"已暂停"} · ${Xt.isolate?"部件观察":Xt.mode==="exploded"?"部件分解":"近似模型"}`,Ut("#flow-value").textContent=Xt.shaftMode?"轴系模式隐藏":Xt.mode==="exploded"||Xt.isolate?"拆解时隐藏":Xt.flow?Xt.playing?"实时示踪":"示踪已暂停":"已隐藏";const n=Hs(ue,Or,Xt),s=n.map(r=>r.temperature);Ut("#temp-value").innerHTML=`${Math.round(Math.max(...s))}<small>K</small>`,Ut("#label-layer").hidden=!Xt.labels,y_(n),ln?.sync()}function y_(i){const t=a=>18+a*318,e=a=>110-(a-288)/1812*91,n=i.map(a=>`${t(a.progress)},${e(a.temperature)}`).join(" "),s=Or.hasBypass??!["j79","pt6a"].includes(ue.id),r=s?Hs(ue,Or,Xt,!0):[],o=r.length?`<polyline points="${r.map(a=>`${t(a.progress)},${e(a.temperature)}`).join(" ")}" fill="none" stroke="#168daf" stroke-width="1.4" stroke-dasharray="4 3"><title>外涵流路教学总温</title></polyline>`:"";Ut("#station-chart").innerHTML=`<svg viewBox="0 0 354 125" role="img" aria-label="${ue.name} 核心流路教学总温，峰值 ${Math.round(Math.max(...i.map(a=>a.temperature)))} K，非实测"><defs><linearGradient id="heat" x1="0" x2="1"><stop offset="0" stop-color="#227dd0"/><stop offset=".24" stop-color="#08a8af"/><stop offset=".4" stop-color="#f58027"/><stop offset=".6" stop-color="#d9b82a"/><stop offset="1" stop-color="#ea3434"/></linearGradient></defs><path d="M18 20H336M18 65H336M18 110H336" stroke="#bdc8bf" stroke-width=".6" stroke-dasharray="3 4" fill="none"/><path d="M${n.replaceAll(" "," L")} L336 110 L18 110 Z" fill="url(#heat)" opacity=".09"/><polyline points="${n}" fill="none" stroke="url(#heat)" stroke-width="2.5" stroke-linejoin="round"/>${o}${i.map(a=>`<circle cx="${t(a.progress)}" cy="${e(a.temperature)}" r="2.7" fill="#f6f7ef" stroke="#616f66"><title>${a.stationLabel}：${Math.round(a.temperature)} K（教学总温）</title></circle>`).join("")}<text x="18" y="13" fill="#68756c" font-size="9">2100 K</text><text x="18" y="122" fill="#68756c" font-size="9">288 K</text>${s?'<text x="230" y="104" fill="#168daf" font-size="9">虚线：外涵流路</text>':""}</svg>`}function S_(){document.title=`${ue.name} · 航空发动机交互图谱`,Ut("#engine-name").textContent=ue.name,Ut("#engine-name").dataset.long=String(ue.name.length>9),Ut("#engine-subtitle").textContent=ue.subtitle,Ut("#engine-family").textContent=ue.family,Ut("#topbar-engine").textContent=ue.name,Ut(".model-id").textContent=ue.name+" / 3D STUDY",Ut("#engine-summary").textContent=ue.summary+"。三维模型分别适配窗口，非同尺度；内部比例为参考图估计。",Ut(".model-facts").innerHTML=ue.facts.map(e=>`<span>${e}</span>`).join(""),Ut("#viewport").setAttribute("aria-label",ue.name+" 三维发动机模型，可拖动旋转、滚轮缩放"),Ut("#component-count").textContent=String(Qi.length).padStart(2,"0")+" COMPONENTS",Ut("#parts").innerHTML=Qi.map((e,n)=>`<button data-part="${n}" class="part-button${n===Xt.selected?" active":""}" aria-pressed="${n===Xt.selected}"><span class="part-number">${String(n+1).padStart(2,"0")}</span><span class="part-name">${e.name}<small>${e.tag}</small></span><span class="stage-count">${e.stages?e.stages+" 级":"↗"}</span></button>`).join(""),Ut("#engine-select").value=ue.id;const i=Ut("#fan-scale");if(i.hidden=!Number.isFinite(ue.layout?.fanDiameterM),Number.isFinite(ue.layout?.fanDiameterM)){const e=yn.filter(s=>Number.isFinite(s.layout?.fanDiameterM)),n=Math.max(...e.map(s=>s.layout.fanDiameterM));i.innerHTML=`<svg viewBox="0 0 380 48" role="img" aria-label="真实风扇直径同尺度比较：CFM56-7B 为 1.55 米，GE90-115B 为 3.25 米，约为前者的 2.10 倍"><text x="0" y="10" fill="#64725c" font-size="9">真实风扇直径 · 同尺度</text>${e.map((s,r)=>{const o=s.id===ue.id,a=25+r*18;return`<text x="0" y="${a}" font-size="10" fill="${o?"#24572e":"#64725c"}">${s.id==="cfm56"?"CFM56-7B":"GE90-115B"}</text><rect x="80" y="${a-7}" width="${s.layout.fanDiameterM/n*205}" height="6" rx="2" fill="${o?"#367647":"#b9c5b1"}"/><text x="${85+s.layout.fanDiameterM/n*205}" y="${a}" font-size="10" fill="#52634c">${s.layout.fanDiameterM.toFixed(2)} m</text>`}).join("")}</svg>`}Ut("#afterburner-control").hidden=!ue.afterburner,Ut("#afterburner").disabled=!ue.afterburner,Ut("#afterburner").checked=Xt.afterburner,Ut("#chart-exit-label").textContent=ue.afterburner?"加力 / 排气":ue.id==="rb211"?"混合排气":ue.id==="pegasus"?"偏转排气":"排气",Ut("#cut").min=-Math.max(1,ue.fanRadius*1.05),Ut("#cut").max=Math.max(1,ue.fanRadius*1.05),Ut("#cut").value=Xt.cut,Ut("#label-layer").replaceChildren();const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("label-leaders"),t.innerHTML='<defs><marker id="label-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8 L2 4 Z" fill="#617960"/></marker><marker id="label-arrow-active" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8 L2 4 Z" fill="#286735"/></marker></defs>',Ut("#label-layer").appendChild(t),Ru=Qi.map(()=>{const e=document.createElementNS(t.namespaceURI,"g");return e.classList.add("label-leader"),e.innerHTML='<path class="leader-halo"/><path class="leader-line"/><circle r="3"/>',t.appendChild(e),e}),wu=Qi.map((e,n)=>{const s=document.createElement("div");return s.className="model-label",s.innerHTML=`<span>${String(n+1).padStart(2,"0")}</span> ${e.short}`,Ut("#label-layer").appendChild(s),s}),Ut("#source-content").innerHTML=`<div class="source-intro"><strong>${ue.name} · 公开构型重建</strong><p>${ue.evidence}</p></div><h3>01 / 当前机型资料</h3>${ue.sources.map(([e,n])=>`<p><a href="${_i(n)}" target="_blank" rel="noreferrer">${e} ↗</a></p>`).join("")}<h3>02 / ${yn.length} 款发动机构型</h3><table><thead><tr><th>机型</th><th>系统构型</th><th>主要特征</th></tr></thead><tbody>${yn.map(e=>`<tr><td>${_i(e.name)}</td><td>${_i(e.subtitle)}</td><td>${_i(e.facts.join(" · "))}</td></tr>`).join("")}</tbody></table><h3>03 / 几何与资料对照</h3><p>主要级数、轴系与燃烧室类型由公开资料约束。每款机型具有独立构型；内部轴向位置、径向比例、叶型、装配间隙和附属细节仍为参考图估计或教学布局。各模型分别适配窗口，不能直接比较实际尺寸，不是厂家 CAD 或数字孪生。</p><p>在结构目录选中部件，点击“这个部件的资料依据”，可对照原始图、照片或技术资料，并区分资料约束和几何近似。仅按主要模块分解，不代表真实 BOM；剖切不生成 CAD 实体封口。</p><p>已核实 CFM56-7B 的 24 片钛风扇叶片（采用 NTSB 实机调查，修正早期宣传中的 22 片）与 GE90-115B 的 22 片复材风扇叶片；两者风扇直径为 1.5494 m 与 3.2512 m。尺寸对比只使用定义一致的公开参数。</p><h3>04 / 流动与热力边界</h3><p>${_i(p_)}</p>${m_.map(([e,n])=>`<p><a href="${_i(n)}" target="_blank" rel="noreferrer">${_i(e)} ↗</a></p>`).join("")}<p>粒子、截面探针与沿程曲线使用同一组教学总温。总压沿流路由简化压缩、加热损失与膨胀关系估算；不提供局部静压、静温或速度场。所有示踪沿预设通道运动，未求解守恒方程、湍流、燃烧化学或叶片局部绕流，不能用于性能预测。</p><p>观察速度独立于教学工况；转子速度大幅降低，真实转速与旋向未校准。轴系着色时隐藏气流；分解或单独查看时隐藏连续流动。导览进度是流路位置，不是实际驻留时间。Pegasus 喷流箭头表达方向，不计算升力、姿态或悬停能力。</p><h3>05 / 各机型的流路区别</h3><p>J79 无外涵；CFM56 与 GE90 分流排气；RB211-535E4 采用混合排气；PT6A 为回流式涡桨，采用独立动力涡轮和减速齿轮箱；Pegasus 的前部喷口排出外涵冷流，后部喷口排出核心热流。每个模型的细节与型号适用边界见当前机型资料。</p>`}async function Cu(i,t=!0){const e=++Dc,n=Xr(i);if(Ut("#loading").innerHTML='<span class="loading-orbit"></span><strong>正在构建 '+n.name+"</strong><span>加载构型与流路</span>",Ut("#loading").hidden=!1,Ut("#viewport").setAttribute("aria-busy","true"),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),e===Dc){Xe?.dispose(),Xe=void 0;try{if(ue=n,Qi=ue.parts,Ua="",Object.assign(Xt,{engineId:ue.id,selected:0,isolate:!1,subpart:-1,cut:.12,afterburner:ue.afterburner}),Xe=Au(Ut("#viewport"),ol,ue),Or=Xe.physics,ln?.changed(),S_(),Pn(),cs("[data-view]").forEach(s=>{const r=s.dataset.view==="perspective";s.classList.toggle("active",r),s.setAttribute("aria-pressed",r)}),clearTimeout(window.engineLoadingTimeout),Ut("#loading").hidden=!0,Ut("#viewport").setAttribute("aria-busy","false"),t){const s=new URL(location.href);s.searchParams.set("engine",ue.id),history.replaceState(null,"",s)}}catch(s){Ut("#viewport").setAttribute("aria-busy","false"),window.showEngineLoadError(),console.error(s)}}}Ut("#engine-select").addEventListener("change",i=>Cu(i.target.value));Ut("#parts").addEventListener("click",i=>{const t=i.target.closest("[data-part]");t&&ol(+t.dataset.part)});cs("[data-mode]").forEach(i=>i.addEventListener("click",()=>{ln?.interruptTour(),Xt.mode=i.dataset.mode,Xt.isolate=!1,Pn()}));for(const i of["cut","explode","throttle"])Ut("#"+i).addEventListener("input",t=>{Xt[i]=+t.target.value,i==="cut"&&(ln?.interruptTour(),Xt.mode="cutaway",Xt.isolate=!1),i==="explode"&&(ln?.interruptTour(),Xt.mode="exploded",Xt.isolate=!1),Pn()});for(const i of["flow","labels","afterburner"])Ut("#"+i).addEventListener("change",t=>{Xt[i]=t.target.checked,Pn()});Ut("#play").addEventListener("click",()=>{Xt.playing=!Xt.playing,Pn()});Ut("#isolate").addEventListener("click",()=>{ln?.interruptTour(),Xt.isolate=!Xt.isolate,Xt.subpart=-1,Pn(),Ut(".stage").scrollIntoView({block:"center",behavior:rl?"instant":"smooth"})});Ut("#subpart").addEventListener("change",i=>{ln?.interruptTour(),Xt.subpart=+i.target.value,Xt.subpart>=0&&(Xt.mode="assembled"),Pn(),Ut(".stage").scrollIntoView({block:"center",behavior:rl?"instant":"smooth"})});Ut("#show-all").addEventListener("click",()=>{ln?.interruptTour(),Xt.isolate=!1,Pn()});cs("[data-view]").forEach(i=>i.addEventListener("click",()=>{ln?.interruptTour(),Pn(),Xe?.setView(i.dataset.view),ln?.cameraPrimary(),cs("[data-view]").forEach(t=>{t.classList.toggle("active",t===i),t.setAttribute("aria-pressed",t===i)})}));Ut("#reset").addEventListener("click",()=>{Ut('[data-view="perspective"]').click()});Ut("#sources-open").addEventListener("click",()=>Ut("#sources-dialog").showModal());Ut("#sources-close").addEventListener("click",()=>Ut("#sources-dialog").close());Ut("#sources-dialog").addEventListener("click",i=>{if(i.target===Ut("#sources-dialog")){const t=i.target.getBoundingClientRect();(i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom)&&i.target.close()}});let wr=performance.now(),Fo=0,Oo=wr;function Na(i){if(i-wr<1e3/60){requestAnimationFrame(Na);return}const t=Math.min((i-wr)/1e3,.06);wr=i,Xe&&(Xe.tick(t,i/1e3),ln?.tick(t,i/1e3),Xt.labels&&E_(),Fo++,i-Oo>1e3&&(Ut("#fps").textContent=Math.round(Fo*1e3/(i-Oo)),Fo=0,Oo=i)),requestAnimationFrame(Na)}function E_(){const i=Ut("#label-layer"),t=i.clientWidth,e=i.clientHeight,n=wu.map((a,c)=>({el:a,i:c,p:Xe.project(c)})).sort((a,c)=>a.p.x-c.p.x);for(const a of n)a.el.hidden=!a.p.visible,a.p.visible&&(a.el.classList.toggle("occluded",!!a.p.occluded),a.width=a.el.offsetWidth,a.height=a.el.offsetHeight);const s=n.filter(a=>a.p.visible);let r=[s];for(let a=1;a<=s.length&&(r=Array.from({length:a},()=>[]),s.forEach((c,l)=>r[l%a].push(c)),!r.every(c=>c.reduce((l,h)=>l+h.width+10,0)-10<=t-24));a++);const o=Math.max(108,Math.min(e-150,...s.map(a=>Math.min(a.p.labelY-38,a.p.y-55))));r.forEach((a,c)=>{const l=a.reduce((d,f)=>d+f.width,0)+Math.max(0,a.length-1)*10,h=a.reduce((d,f)=>d+f.p.x,0)/Math.max(1,a.length);let u=Math.max(12,Math.min(t-12-l,h-l/2));a.forEach(d=>{d.labelX=u+d.width/2,d.labelY=o+c*32,u+=d.width+10})});for(const{el:a,i:c,p:l,width:h,height:u,labelX:d,labelY:f}of n){const g=Ru[c],_=c===Xt.selected;if(a.hidden=!l.visible,g.style.display=l.visible?"":"none",!l.visible)continue;a.classList.toggle("active",_),g.classList.toggle("active",_),g.classList.toggle("occluded",!!l.occluded),a.style.left=`${d}px`,a.style.top=`${f}px`;const m=l.x-d,p=l.y-f,S=Math.min(h/2/Math.max(Math.abs(m),.001),u/2/Math.max(Math.abs(p),.001)),v=d+m*S,x=f+p*S,A=`M ${v.toFixed(1)} ${x.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`;g.querySelectorAll("path").forEach(I=>I.setAttribute("d",A)),g.querySelector(".leader-line").setAttribute("marker-end",`url(#label-arrow${_?"-active":""})`);const R=g.querySelector("circle");R.setAttribute("cx",l.x),R.setAttribute("cy",l.y)}}window.engineAtlas={state:()=>({...Xt}),stats:()=>Xe?.stats(),rotations:()=>Xe?.rotors.map(i=>i.g.rotation.x),visibleParts:()=>Xe?.groups.map(i=>i.visible),rows:()=>Xe?.groups.map(i=>i.children.filter(t=>t.userData.bladeRow).map(t=>({label:t.userData.label,rotating:t.userData.rotating}))),available:()=>yn.map(i=>i.id),explorer:()=>ln?.qa(),sampleFlow:(i,t=!1)=>Xe?.sampleFlow?.(i,t)};ln=v_({state:Xt,getPrimary:()=>Xe,getPreset:()=>ue,sync:Pn,selectPart:ol});requestAnimationFrame(Na);Cu(ue.id,!1);
