const ss={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,ll=1,Du=2,Uc=1,Iu=2,Yn=3,ci=0,sn=1,wn=2,ai=0,rs=1,cl=2,ul=3,hl=4,Uu=5,yi=100,Nu=101,Fu=102,Ou=103,Bu=104,zu=200,ku=201,Hu=202,Gu=203,zo=204,ko=205,Vu=206,Wu=207,Xu=208,Yu=209,qu=210,$u=211,ju=212,Zu=213,Ku=214,Ho=0,Go=1,Vo=2,as=3,Wo=4,Xo=5,Yo=6,qo=7,Oa=0,Ju=1,Qu=2,li=0,th=1,eh=2,nh=3,Nc=4,ih=5,sh=6,rh=7,Fc=300,ls=301,cs=302,$o=303,jo=304,zr=306,Zo=1e3,Ei=1001,Ko=1002,xn=1003,oh=1004,Ys=1005,Un=1006,$r=1007,bi=1008,Bn=1009,Oc=1010,Bc=1011,Us=1012,Ba=1013,Ci=1014,Nn=1015,Xs=1016,za=1017,ka=1018,Ns=1020,zc=35902,kc=35899,Hc=1021,Gc=1022,Cn=1023,Fs=1026,Os=1027,Ha=1028,Ga=1029,Vc=1030,Va=1031,Wa=1033,br=33776,Tr=33777,Ar=33778,wr=33779,Jo=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37808,oa=37809,aa=37810,la=37811,ca=37812,ua=37813,ha=37814,fa=37815,da=37816,pa=37817,ma=37818,ga=37819,_a=37820,xa=37821,va=36492,Ma=36494,ya=36495,Sa=36283,Ea=36284,ba=36285,Ta=36286,ah=3200,lh=3201,Xa=0,ch=1,ri="",Sn="srgb",us="srgb-linear",Pr="linear",Se="srgb",Oi=7680,fl=519,uh=512,hh=513,fh=514,Wc=515,dh=516,ph=517,mh=518,gh=519,dl=35044,pl=35048,ml="300 es",Fn=2e3,Lr=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const Ps=Math.PI/180,Bs=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Ya(i,t){return(i%t+t)%t}function _h(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function vh(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function Mh(i,t=1){return t-Math.abs(Ya(i,t*2)-t)}function yh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Eh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bh(i,t){return i+Math.random()*(t-i)}function Th(i){return i*(.5-Math.random())}function Ah(i){i!==void 0&&(gl=i);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wh(i){return i*Ps}function Rh(i){return i*Bs}function Ch(i){return(i&i-1)===0&&i!==0}function Ph(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:Ps,RAD2DEG:Bs,generateUUID:Ui,clamp:ae,euclideanModulo:Ya,mapLinear:_h,inverseLerp:xh,lerp:Ls,damp:vh,pingpong:Mh,smoothstep:yh,smootherstep:Sh,randInt:Eh,randFloat:bh,randFloatSpread:Th,seededRandom:Ah,degToRad:wh,radToDeg:Rh,isPowerOfTwo:Ch,ceilPowerOfTwo:Ph,floorPowerOfTwo:Lh,setQuaternionFromProperEuler:Dh,normalize:en,denormalize:Qi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),R=Math.atan2(A,p*y);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const x=a*y;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new U,_l=new Pi;class oe{constructor(t,e,n,s,r,o,a,c,l){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],A=s[2],R=s[5],L=s[8];return r[0]=o*_+a*y+c*A,r[3]=o*m+a*v+c*R,r[6]=o*p+a*x+c*L,r[1]=l*_+h*y+u*A,r[4]=l*m+h*v+u*R,r[7]=l*p+h*x+u*L,r[2]=d*_+f*y+g*A,r[5]=d*m+f*v+g*R,r[8]=d*p+f*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new oe;function Xc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ih(){const i=Dr("canvas");return i.style.display="block",i}const xl={};function zs(i){i in xl||(xl[i]=!0,console.warn(i))}function Uh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const vl=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}const ge=Nh();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Fh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=Dr("canvas")),Bi.width=t.width,Bi.height=t.height;const s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oh=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kr(s[o].image)):r.push(Kr(s[o]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;const Jr=new U;class rn extends Ii{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Ei,s=Ei,r=Un,o=bi,a=Cn,c=Bn,l=rn.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ui(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Fc;rn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,A=(p+1)/2,R=(h+d)/4,L=(u+_)/4,N=(g+m)/4;return v>x&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=L/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=N/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=L/r,s=N/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new rn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new qa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yc extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),$s.subVectors(this.max,xs),zi.subVectors(t.a,xs),ki.subVectors(t.b,xs),Hi.subVectors(t.c,xs),Kn.subVectors(ki,zi),Jn.subVectors(Hi,ki),fi.subVectors(zi,Hi);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!Qr(e,zi,ki,Hi,$s)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,zi,ki,Hi,$s))?!1:(js.crossVectors(Kn,Jn),e=[js.x,js.y,js.z],Qr(e,zi,ki,Hi,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,qs=new Zn,zi=new U,ki=new U,Hi=new U,Kn=new U,Jn=new U,fi=new U,xs=new U,$s=new U,js=new U,di=new U;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hh=new Zn,vs=new U,to=new U;class ps{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(to)),this.expandByPoint(vs.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hn=new U,eo=new U,Zs=new U,Qn=new U,no=new U,Ks=new U,io=new U;class kr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=Qn.dot(this.direction),c=-Qn.dot(Zs),l=Qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eo).addScaledVector(Zs,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Ks.subVectors(n,t),io.crossVectors(no,Ks);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const c=a*this.direction.dot(Ks.crossVectors(Qn,Ks));if(c<0)return null;const l=a*this.direction.dot(no.cross(Qn));if(l<0||c+l>o)return null;const h=-a*Qn.dot(io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Vh)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ti.crossVectors(n,dn),ti.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ti.crossVectors(n,dn)),ti.normalize(),Js.crossVectors(dn,ti),s[0]=ti.x,s[4]=Js.x,s[8]=dn.x,s[1]=ti.y,s[5]=Js.y,s[9]=dn.y,s[2]=ti.z,s[6]=Js.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],A=n[15],R=s[0],L=s[4],N=s[8],E=s[12],T=s[1],F=s[5],k=s[9],H=s[13],S=s[2],P=s[6],O=s[10],D=s[14],B=s[3],V=s[7],rt=s[11],$=s[15];return r[0]=o*R+a*T+c*S+l*B,r[4]=o*L+a*F+c*P+l*V,r[8]=o*N+a*k+c*O+l*rt,r[12]=o*E+a*H+c*D+l*$,r[1]=h*R+u*T+d*S+f*B,r[5]=h*L+u*F+d*P+f*V,r[9]=h*N+u*k+d*O+f*rt,r[13]=h*E+u*H+d*D+f*$,r[2]=g*R+_*T+m*S+p*B,r[6]=g*L+_*F+m*P+p*V,r[10]=g*N+_*k+m*O+p*rt,r[14]=g*E+_*H+m*D+p*$,r[3]=y*R+v*T+x*S+A*B,r[7]=y*L+v*F+x*P+A*V,r[11]=y*N+v*k+x*O+A*rt,r[15]=y*E+v*H+x*D+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=e*y+n*v+s*x+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=y*L,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*L,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*L,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*L,t[4]=v*L,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*L,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*L,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*L,t[8]=x*L,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*L,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*L,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*L,t[12]=A*L,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*L,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*L,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,v=c*h,x=c*u,A=n.x,R=n.y,L=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+v)*L,s[9]=(m-y)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Fn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Fn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Fn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new U,Tn=new xe,Gh=new U(0,0,0),Vh=new U(1,1,1),ti=new U,Js=new U,dn=new U,yl=new xe,Sl=new Pi;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wh=0;const El=new U,Vi=new Pi,Gn=new xe,Qs=new U,Ms=new U,Xh=new U,Yh=new Pi,bl=new U(1,0,0),Tl=new U(0,1,0),Al=new U(0,0,1),wl={type:"added"},qh={type:"removed"},Wi={type:"childadded",child:null},so={type:"childremoved",child:null};class Oe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new U,e=new Pn,n=new Pi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new oe}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return El.copy(t).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ms,Qs,this.up):Gn.lookAt(Qs,Ms,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qh),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new U(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new U,Vn=new U,ro=new U,Wn=new U,Xi=new U,Yi=new U,Rl=new U,oo=new U,ao=new U,lo=new U,co=new be,uo=new be,ho=new be;class Rn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Vn.subVectors(n,e),ro.subVectors(t,e);const o=An.dot(An),a=An.dot(Vn),c=An.dot(ro),l=Vn.dot(Vn),h=Vn.dot(ro),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,n),ho.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(ho,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Vn.subVectors(t,e),An.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),An.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),Yi.subVectors(r,n),oo.subVectors(t,n);const c=Xi.dot(oo),l=Yi.dot(oo);if(c<=0&&l<=0)return e.copy(n);ao.subVectors(t,s);const h=Xi.dot(ao),u=Yi.dot(ao);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xi,o);lo.subVectors(t,r);const f=Xi.dot(lo),g=Yi.dot(lo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Rl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Xi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},tr={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Ya(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=qc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ge.workingToColorSpace(Je.copy(this),t),Math.round(ae(Je.r*255,0,255))*65536+Math.round(ae(Je.g*255,0,255))*256+Math.round(ae(Je.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Sn){ge.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(tr);const n=Ls(ei.h,tr.h,e),s=Ls(ei.s,tr.s,e),r=Ls(ei.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new he;he.NAMES=qc;let $h=0;class Ni extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=rs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=ko,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ks extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new U,er=new ut;let jh=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class $c extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zh=0;const yn=new xe,po=new Oe,qi=new U,pn=new Zn,ys=new Zn,$e=new U;class Te extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?jc:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(pn.min,ys.min),pn.expandByPoint($e),$e.addVectors(pn.max,ys.max),pn.expandByPoint($e)):(pn.expandByPoint(ys.min),pn.expandByPoint(ys.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$e.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),$e.add(qi)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new U,c[N]=new U;const l=new U,h=new U,u=new U,d=new ut,f=new ut,g=new ut,_=new U,m=new U;function p(N,E,T){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),a[N].add(_),a[E].add(_),a[T].add(_),c[N].add(m),c[E].add(m),c[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,E=y.length;N<E;++N){const T=y[N],F=T.start,k=T.count;for(let H=F,S=F+k;H<S;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const v=new U,x=new U,A=new U,R=new U;function L(N){A.fromBufferAttribute(s,N),R.copy(A);const E=a[N];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(R,E);const F=x.dot(c[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,F)}for(let N=0,E=y.length;N<E;++N){const T=y[N],F=T.start,k=T.count;for(let H=F,S=F+k;H<S;H+=3)L(t.getX(H+0)),L(t.getX(H+1)),L(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new xe,pi=new kr,nr=new ps,Pl=new U,ir=new U,sr=new U,rr=new U,mo=new U,or=new U,Ll=new U,ar=new U;class Fe extends Oe{constructor(t=new Te,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(mo.fromBufferAttribute(u,t),o?or.addScaledVector(mo,h):or.addScaledVector(mo.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(nr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(nr,Pl)===null||pi.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Cl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=v;x<A;x+=3){const R=a.getX(x),L=a.getX(x+1),N=a.getX(x+2);s=lr(this,p,t,n,l,h,u,R,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=lr(this,o,t,n,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=v;x<A;x+=3){const R=x,L=x+1,N=x+2;s=lr(this,p,t,n,l,h,u,R,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;s=lr(this,o,t,n,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Kh(i,t,e,n,s,r,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ir),i.getVertexPosition(c,sr),i.getVertexPosition(l,rr);const h=Kh(i,t,e,n,ir,sr,rr,Ll);if(h){const u=new U;Rn.getBarycoord(Ll,ir,sr,rr,u),s&&(h.uv=Rn.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=Rn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Rn.getNormal(ir,sr,rr,d.normal),h.face=d,h.barycoord=u}return h}class Ve extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,p,y,v,x,A,R,L,N,E){const T=x/L,F=A/N,k=x/2,H=A/2,S=R/2,P=L+1,O=N+1;let D=0,B=0;const V=new U;for(let rt=0;rt<O;rt++){const $=rt*F-H;for(let K=0;K<P;K++){const ot=K*T-k;V[_]=ot*y,V[m]=$*v,V[p]=S,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=R>0?1:-1,h.push(V.x,V.y,V.z),u.push(K/L),u.push(1-rt/N),D+=1}}for(let rt=0;rt<N;rt++)for(let $=0;$<L;$++){const K=d+$+P*rt,ot=d+$+P*(rt+1),ft=d+($+1)+P*(rt+1),G=d+($+1)+P*rt;c.push(K,ot,G),c.push(ot,ft,G),B+=6}a.addGroup(f,B,E),f+=B,d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function Jh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Qh={clone:hs,merge:nn};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kc extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new U,Dl=new ut,Il=new ut;class gn extends Kc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Il),e.subVectors(Il,Dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,ji=1;class nf extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn($i,ji,t,e);s.layers=this.layers,this.add(s);const r=new gn($i,ji,t,e);r.layers=this.layers,this.add(r);const o=new gn($i,ji,t,e);o.layers=this.layers,this.add(o);const a=new gn($i,ji,t,e);a.layers=this.layers,this.add(a);const c=new gn($i,ji,t,e);c.layers=this.layers,this.add(c);const l=new gn($i,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jc extends rn{constructor(t=[],e=ls,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ai});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Un),new nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class We extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qc extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class of extends rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=xn,h=xn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new xe,Nl=new xe,cr=[],Fl=new Zn,af=new xe,Ss=new Fe,Es=new ps;class Aa extends Fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,af)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Fl.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Fl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Es.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Nl.multiplyMatrices(n,Zi),Ss.matrixWorld=Nl,Ss.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){const c=cr[o];c.instanceId=r,c.object=this,e.push(c)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new of(new Float32Array(s*this.count),s,this.count,Ha,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _o=new U,lf=new U,cf=new oe;class qn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_o.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new ps,uf=new ut(.5,.5),ur=new U;class ja{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],v=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-g,A-y).normalize(),s[1].setComponents(l+o,f+h,p+g,A+y).normalize(),s[2].setComponents(l+a,f+u,p+_,A+v).normalize(),s[3].setComponents(l-a,f-u,p-_,A-v).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,A-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,A-x).normalize(),e===Fn)s[5].setComponents(l+c,f+d,p+m,A+x).normalize();else if(e===Lr)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=uf.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ms extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ir=new U,Ur=new U,Ol=new xe,bs=new kr,hr=new ps,xo=new U,Bl=new U;class Hr extends Oe{constructor(t=new Te,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ir.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ir.distanceTo(Ur);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;Ol.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Ol);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),v=fr(this,t,bs,c,p,y,_);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=fr(this,t,bs,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=fr(this,t,bs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=fr(this,t,bs,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ir.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),e.distanceSqToSegment(Ir,Ur,xo,Bl)>n)return;xo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xo);if(!(l<t.near||l>t.far))return{distance:l,point:Bl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const zl=new U,kl=new U;class tu extends Hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zl.fromBufferAttribute(e,s),kl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zl.distanceTo(kl);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hf extends Hr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class eu extends rn{constructor(t,e,n=Ci,s,r,o,a=xn,c=xn,l,h=Fs,u=1){if(h!==Fs&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nu extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Za extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function y(){const x=new U,A=new U;let R=0;const L=(e-t)/n;for(let N=0;N<=r;N++){const E=[],T=N/r,F=T*(e-t)+t;for(let k=0;k<=s;k++){const H=k/s,S=H*c+a,P=Math.sin(S),O=Math.cos(S);A.x=F*P,A.y=-T*n+m,A.z=F*O,u.push(A.x,A.y,A.z),x.set(P,L,O).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-T),E.push(g++)}_.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){const T=_[E][N],F=_[E+1][N],k=_[E+1][N+1],H=_[E][N+1];(t>0||E!==0)&&(h.push(T,F,H),R+=3),(e>0||E!==r-1)&&(h.push(F,k,H),R+=3)}l.addGroup(p,R,0),p+=R}function v(x){const A=g,R=new ut,L=new U;let N=0;const E=x===!0?t:e,T=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const F=g;for(let k=0;k<=s;k++){const S=k/s*c+a,P=Math.cos(S),O=Math.sin(S);L.x=E*O,L.y=m*T,L.z=E*P,u.push(L.x,L.y,L.z),d.push(0,T,0),R.x=P*.5+.5,R.y=O*.5*T+.5,f.push(R.x,R.y),g++}for(let k=0;k<s;k++){const H=A+k,S=F+k;x===!0?h.push(S,S+1,H):h.push(S+1,S,H),N+=3}l.addGroup(p,N,x===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ka extends He{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ka(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,c=new xe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ja extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ff extends Ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const dr=new U,vo=new Qa,Mo=new Qa,yo=new Qa;class Gr extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(dr.subVectors(s[0],s[1]).add(s[0]),l=dr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Mo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),yo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vo.calc(c),Mo.calc(c),yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function df(i,t){const e=1-i;return e*e*t}function pf(i,t){return 2*(1-i)*i*t}function mf(i,t){return i*i*t}function Ds(i,t,e,n){return df(i,t)+pf(i,e)+mf(i,n)}function gf(i,t){const e=1-i;return e*e*e*t}function _f(i,t){const e=1-i;return 3*e*e*i*t}function xf(i,t){return 3*(1-i)*i*i*t}function vf(i,t){return i*i*i*t}function Is(i,t,e,n,s){return gf(i,t)+_f(i,e)+xf(i,n)+vf(i,s)}class iu extends zn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Is(t,s.x,r.x,o.x,a.x),Is(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mf extends zn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Is(t,s.x,r.x,o.x,a.x),Is(t,s.y,r.y,o.y,a.y),Is(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class su extends zn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ai extends zn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends zn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends zn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y),Ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hl(a,c.x,l.x,h.x,u.x),Hl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Nr=Object.freeze({__proto__:null,ArcCurve:ff,CatmullRomCurve3:Gr,CubicBezierCurve:iu,CubicBezierCurve3:Mf,EllipseCurve:Ja,LineCurve:su,LineCurve3:Ai,QuadraticBezierCurve:ru,QuadraticBezierCurve3:ou,SplineCurve:au});class yf extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Nr[s.type]().fromJSON(s))}return this}}class Fr extends yf{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new su(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ru(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new iu(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ja(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tl extends Fr{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fr().fromJSON(s))}return this}}function Sf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=wf(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Hs(r,o,e,a,c,l,0),o}function lu(i,t,e,n,s){let r;if(s===Bf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gl(o/n|0,i[o],i[o+1],r);return r&&fs(r,r.next)&&(Vs(r),r=r.next),r}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Df(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?bf(i,n,s,r):Ef(i)){t.push(c.i,i.i,l.i),Vs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Tf(Di(i),t),Hs(i,t,e,n,s,r,2)):o===2&&Af(i,t,e,n,s,r):Hs(Di(i),t,e,n,s,r,1);break}}}function Ef(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ws(s,a,r,c,o,l,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),p=wa(f,g,t,e,n),y=wa(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,h,c,u,l,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,h,c,u,l,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,h,c,u,l,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,h,c,u,l,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Tf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!fs(n,s)&&uu(n,e,e.next,s)&&Gs(n,s)&&Gs(s,n)&&(t.push(n.i,e.i,s.i),Vs(e),Vs(e.next),e=i=s),e=e.next}while(e!==i);return Di(e)}function Af(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nf(o,a)){let c=hu(o,a);o=Di(o,o.next),c=Di(c,c.next),Hs(o,t,e,n,s,r,0),Hs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=lu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Uf(l))}s.sort(Rf);for(let r=0;r<s.length;r++)e=Cf(s[r],e);return e}function Rf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cf(i,t){const e=Pf(i,t);if(!e)return t;const n=hu(e,i);return Di(n,n.next),Di(e,e.next)}function Pf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(fs(i,e))return e;do{if(fs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&cu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Gs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Lf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Lf(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Df(i,t,e,n){let s=i;do s.z===0&&(s.z=wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,If(s)}function If(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ws(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&cu(i,t,e,n,s,r,o,a)}function Nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ff(i,t)&&(Gs(i,t)&&Gs(t,i)&&Of(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||fs(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fs(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){const s=mr(Ue(i,t,e)),r=mr(Ue(i,t,n)),o=mr(Ue(e,n,i)),a=mr(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&pr(i,e,t)||r===0&&pr(i,n,t)||o===0&&pr(e,i,n)||a===0&&pr(e,t,n))}function pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mr(i){return i>0?1:i<0?-1:0}function Ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Of(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){const e=Ra(i.i,i.x,i.y),n=Ra(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gl(i,t,e,n){const s=Ra(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ra(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class zf{static triangulate(t,e,n=2){return Sf(t,e,n)}}class es{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return es.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Vl(t),Wl(n,t);let o=t.length;e.forEach(Vl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Wl(n,e[c]);const a=zf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vr extends Te{constructor(t=new tl([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:kf;let v,x=!1,A,R,L,N;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,A=p.computeFrenetFrames(h,!1),R=new U,L=new U,N=new U),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let T=E.shape;const F=E.holes;if(!es.isClockWise(T)){T=T.reverse();for(let tt=0,Z=F.length;tt<Z;tt++){const J=F[tt];es.isClockWise(J)&&(F[tt]=J.reverse())}}function H(tt){const J=10000000000000001e-36;let Q=tt[0];for(let mt=1;mt<=tt.length;mt++){const ht=mt%tt.length,_t=tt[ht],Wt=_t.x-Q.x,$t=_t.y-Q.y,w=Wt*Wt+$t*$t,M=Math.max(Math.abs(_t.x),Math.abs(_t.y),Math.abs(Q.x),Math.abs(Q.y)),j=J*M*M;if(w<=j){tt.splice(ht,1),mt--;continue}Q=_t}}H(T),F.forEach(H);const S=F.length,P=T;for(let tt=0;tt<S;tt++){const Z=F[tt];T=T.concat(Z)}function O(tt,Z,J){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Z,J)}const D=T.length;function B(tt,Z,J){let Q,mt,ht;const _t=tt.x-Z.x,Wt=tt.y-Z.y,$t=J.x-tt.x,w=J.y-tt.y,M=_t*_t+Wt*Wt,j=_t*w-Wt*$t;if(Math.abs(j)>Number.EPSILON){const lt=Math.sqrt(M),Y=Math.sqrt($t*$t+w*w),ct=Z.x-Wt/lt,Gt=Z.y+_t/lt,vt=J.x-w/Y,Nt=J.y+$t/Y,Ot=((vt-ct)*w-(Nt-Gt)*$t)/(_t*w-Wt*$t);Q=ct+_t*Ot-tt.x,mt=Gt+Wt*Ot-tt.y;const Mt=Q*Q+mt*mt;if(Mt<=2)return new ut(Q,mt);ht=Math.sqrt(Mt/2)}else{let lt=!1;_t>Number.EPSILON?$t>Number.EPSILON&&(lt=!0):_t<-Number.EPSILON?$t<-Number.EPSILON&&(lt=!0):Math.sign(Wt)===Math.sign(w)&&(lt=!0),lt?(Q=-Wt,mt=_t,ht=Math.sqrt(M)):(Q=_t,mt=Wt,ht=Math.sqrt(M/2))}return new ut(Q/ht,mt/ht)}const V=[];for(let tt=0,Z=P.length,J=Z-1,Q=tt+1;tt<Z;tt++,J++,Q++)J===Z&&(J=0),Q===Z&&(Q=0),V[tt]=B(P[tt],P[J],P[Q]);const rt=[];let $,K=V.concat();for(let tt=0,Z=S;tt<Z;tt++){const J=F[tt];$=[];for(let Q=0,mt=J.length,ht=mt-1,_t=Q+1;Q<mt;Q++,ht++,_t++)ht===mt&&(ht=0),_t===mt&&(_t=0),$[Q]=B(J[Q],J[ht],J[_t]);rt.push($),K=K.concat($)}let ot;if(m===0)ot=es.triangulateShape(P,F);else{const tt=[],Z=[];for(let J=0;J<m;J++){const Q=J/m,mt=f*Math.cos(Q*Math.PI/2),ht=g*Math.sin(Q*Math.PI/2)+_;for(let _t=0,Wt=P.length;_t<Wt;_t++){const $t=O(P[_t],V[_t],ht);nt($t.x,$t.y,-mt),Q===0&&tt.push($t)}for(let _t=0,Wt=S;_t<Wt;_t++){const $t=F[_t];$=rt[_t];const w=[];for(let M=0,j=$t.length;M<j;M++){const lt=O($t[M],$[M],ht);nt(lt.x,lt.y,-mt),Q===0&&w.push(lt)}Q===0&&Z.push(w)}}ot=es.triangulateShape(tt,Z)}const ft=ot.length,G=g+_;for(let tt=0;tt<D;tt++){const Z=d?O(T[tt],K[tt],G):T[tt];x?(L.copy(A.normals[0]).multiplyScalar(Z.x),R.copy(A.binormals[0]).multiplyScalar(Z.y),N.copy(v[0]).add(L).add(R),nt(N.x,N.y,N.z)):nt(Z.x,Z.y,0)}for(let tt=1;tt<=h;tt++)for(let Z=0;Z<D;Z++){const J=d?O(T[Z],K[Z],G):T[Z];x?(L.copy(A.normals[tt]).multiplyScalar(J.x),R.copy(A.binormals[tt]).multiplyScalar(J.y),N.copy(v[tt]).add(L).add(R),nt(N.x,N.y,N.z)):nt(J.x,J.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const Z=tt/m,J=f*Math.cos(Z*Math.PI/2),Q=g*Math.sin(Z*Math.PI/2)+_;for(let mt=0,ht=P.length;mt<ht;mt++){const _t=O(P[mt],V[mt],Q);nt(_t.x,_t.y,u+J)}for(let mt=0,ht=F.length;mt<ht;mt++){const _t=F[mt];$=rt[mt];for(let Wt=0,$t=_t.length;Wt<$t;Wt++){const w=O(_t[Wt],$[Wt],Q);x?nt(w.x,w.y+v[h-1].y,v[h-1].x+J):nt(w.x,w.y,u+J)}}}I(),z();function I(){const tt=s.length/3;if(d){let Z=0,J=D*Z;for(let Q=0;Q<ft;Q++){const mt=ot[Q];st(mt[2]+J,mt[1]+J,mt[0]+J)}Z=h+m*2,J=D*Z;for(let Q=0;Q<ft;Q++){const mt=ot[Q];st(mt[0]+J,mt[1]+J,mt[2]+J)}}else{for(let Z=0;Z<ft;Z++){const J=ot[Z];st(J[2],J[1],J[0])}for(let Z=0;Z<ft;Z++){const J=ot[Z];st(J[0]+D*h,J[1]+D*h,J[2]+D*h)}}n.addGroup(tt,s.length/3-tt,0)}function z(){const tt=s.length/3;let Z=0;et(P,Z),Z+=P.length;for(let J=0,Q=F.length;J<Q;J++){const mt=F[J];et(mt,Z),Z+=mt.length}n.addGroup(tt,s.length/3-tt,1)}function et(tt,Z){let J=tt.length;for(;--J>=0;){const Q=J;let mt=J-1;mt<0&&(mt=tt.length-1);for(let ht=0,_t=h+m*2;ht<_t;ht++){const Wt=D*ht,$t=D*(ht+1),w=Z+Q+Wt,M=Z+mt+Wt,j=Z+mt+$t,lt=Z+Q+$t;bt(w,M,j,lt)}}}function nt(tt,Z,J){c.push(tt),c.push(Z),c.push(J)}function st(tt,Z,J){St(tt),St(Z),St(J);const Q=s.length/3,mt=y.generateTopUV(n,s,Q-3,Q-2,Q-1);C(mt[0]),C(mt[1]),C(mt[2])}function bt(tt,Z,J,Q){St(tt),St(Z),St(Q),St(Z),St(J),St(Q);const mt=s.length/3,ht=y.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);C(ht[0]),C(ht[1]),C(ht[3]),C(ht[1]),C(ht[2]),C(ht[3])}function St(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function C(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nr[s.type]().fromJSON(s)),new Vr(n,t.options)}}const kf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(d,1-g),new ut(_,1-p)]:[new ut(a,1-c),new ut(h,1-u),new ut(f,1-g),new ut(m,1-p)]}};function Hf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _n extends Te{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new U,d=new ut,f=new U,g=new U,_=new U;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const v=n+y*h*s,x=Math.sin(v),A=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*x,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),d.x=y/e,d.y=R/(t.length-1),a.push(d.x,d.y);const L=c[3*R+0]*x,N=c[3*R+1],E=c[3*R+0]*A;l.push(L,N,E)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const x=v+y*t.length,A=x,R=x+t.length,L=x+t.length+1,N=x+1;r.push(A,R,N),r.push(L,N,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.points,t.segments,t.phiStart,t.phiLength)}}class Wr extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+l*p,x=y+l*(p+1),A=y+1+l*(p+1),R=y+1+l*p;f.push(v,x,R),f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=h[p][y+1],x=h[p][y],A=h[p+1][y],R=h[p+1][y+1];(p!==0||o>0)&&f.push(v,x,R),(p!==n-1||c<Math.PI)&&f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ti extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class On extends Te{constructor(t=new ou(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new ut;let h=new U;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),p()}function m(v){h=t.getPointAt(v/e,h);const x=o.normals[v],A=o.binormals[v];for(let R=0;R<=s;R++){const L=R/s*Math.PI*2,N=Math.sin(L),E=-Math.cos(L);c.x=E*x.x+N*A.x,c.y=E*x.y+N*A.y,c.z=E*x.z+N*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const A=(s+1)*(v-1)+(x-1),R=(s+1)*v+(x-1),L=(s+1)*v+x,N=(s+1)*(v-1)+x;g.push(A,R,N),g.push(R,L,N)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)l.x=v/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new On(new Nr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ca extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gf extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vf extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wf extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xf extends ms{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class nl extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yf extends nl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const So=new xe,Xl=new U,Yl=new U;class fu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ql=new xe,Ts=new U,Eo=new U;class qf extends fu{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ts),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql,n.coordinateSystem,n.reversedDepth)}}class $f extends nl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class du extends Kc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jf extends fu{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $l extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zf extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jl=new xe;class Zl{constructor(t,e,n=0,s=1/0){this.ray=new kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Kl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pa(t[s],this,n,e);return n.sort(Kl),n}}function Kl(i,t){return i.distance-t.distance}function Pa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,e,!0)}}class Jl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kf extends tu{constructor(t=10,e=10,n=4473924,s=8947848){n=new he(n),s=new he(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Te;h.setAttribute("position",new fe(c,3)),h.setAttribute("color",new fe(l,3));const u=new ms({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ql=new U;let gr,bo;class Jf extends Oe{constructor(t=new U(0,0,1),e=new U(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",gr===void 0&&(gr=new Te,gr.setAttribute("position",new fe([0,0,0,0,1,0],3)),bo=new Ka(.5,1,5,1),bo.translate(0,-.5,0)),this.position.copy(e),this.line=new Hr(gr,new ms({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Fe(bo,new ks({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ql.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ql,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Qf extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function tc(i,t,e,n){const s=td(n);switch(e){case Hc:return i*t;case Ha:return i*t/s.components*s.byteLength;case Ga:return i*t/s.components*s.byteLength;case Vc:return i*t*2/s.components*s.byteLength;case Va:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Wa:return i*t*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case va:case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ba:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function td(i){switch(i){case Bn:case Oc:return{byteLength:1,components:1};case Us:case Bc:case Xs:return{byteLength:2,components:1};case za:case ka:return{byteLength:2,components:4};case Ci:case Ba:case Nn:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function pu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ed(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ld=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,md=`#ifdef USE_IRIDESCENCE
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
#endif`,gd=`#ifdef USE_BUMPMAP
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vd=`#ifdef USE_GRADIENTMAP
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
}`,Wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qd=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
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
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
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
#endif`,bp=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,bm=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:nd,alphahash_pars_fragment:id,alphamap_fragment:sd,alphamap_pars_fragment:rd,alphatest_fragment:od,alphatest_pars_fragment:ad,aomap_fragment:ld,aomap_pars_fragment:cd,batching_pars_vertex:ud,batching_vertex:hd,begin_vertex:fd,beginnormal_vertex:dd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:Md,color_fragment:yd,color_pars_fragment:Sd,color_pars_vertex:Ed,color_vertex:bd,common:Td,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:wd,displacementmap_pars_vertex:Rd,displacementmap_vertex:Cd,emissivemap_fragment:Pd,emissivemap_pars_fragment:Ld,colorspace_fragment:Dd,colorspace_pars_fragment:Id,envmap_fragment:Ud,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Fd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:$d,envmap_vertex:Bd,fog_vertex:zd,fog_pars_vertex:kd,fog_fragment:Hd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Vd,lightmap_pars_fragment:Wd,lights_lambert_fragment:Xd,lights_lambert_pars_fragment:Yd,lights_pars_begin:qd,lights_toon_fragment:jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Qd,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:up,map_particle_pars_fragment:hp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:dp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:Mp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:Ep,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:kp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:qp,tonemapping_pars_fragment:$p,transmission_fragment:jp,transmission_pars_fragment:Zp,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:um,equirect_vert:hm,equirect_frag:fm,linedashed_vert:dm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:vm,meshmatcap_frag:Mm,meshnormal_vert:ym,meshnormal_frag:Sm,meshphong_vert:Em,meshphong_frag:bm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:wm,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},Ut={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},In={basic:{uniforms:nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new he(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new he(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:nn([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:nn([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:nn([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:nn([Ut.lights,Ut.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};In.physical={uniforms:nn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const _r={r:0,b:0,g:0},gi=new Pn,Nm=new xe;function Fm(i,t,e,n,s,r,o){const a=new he(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const A=g(v);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===zr)?(h===void 0&&(h=new Fe(new Ve(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:hs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(x.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(gi)),h.material.toneMapped=ge.getTransfer(A.colorSpace)!==Se,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Fe(new Wr(2,2),new ui({name:"BackgroundMaterial",uniforms:hs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ge.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(_r,Zc(i)),n.buffers.color.setClear(_r.r,_r.g,_r.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:y}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(T,F,k,H,S){let P=!1;const O=u(H,k,F);r!==O&&(r=O,l(r.object)),P=f(T,H,k,S),P&&g(T,H,k,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,x(T,F,k,H),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,F,k){const H=k.wireframe===!0;let S=n[T.id];S===void 0&&(S={},n[T.id]=S);let P=S[F.id];P===void 0&&(P={},S[F.id]=P);let O=P[H];return O===void 0&&(O=d(c()),P[H]=O),O}function d(T){const F=[],k=[],H=[];for(let S=0;S<e;S++)F[S]=0,k[S]=0,H[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:H,object:T,attributes:{},index:null}}function f(T,F,k,H){const S=r.attributes,P=F.attributes;let O=0;const D=k.getAttributes();for(const B in D)if(D[B].location>=0){const rt=S[B];let $=P[B];if($===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),rt===void 0||rt.attribute!==$||$&&rt.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function g(T,F,k,H){const S={},P=F.attributes;let O=0;const D=k.getAttributes();for(const B in D)if(D[B].location>=0){let rt=P[B];rt===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(rt=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(rt=T.instanceColor));const $={};$.attribute=rt,rt&&rt.data&&($.data=rt.data),S[B]=$,O++}r.attributes=S,r.attributesNum=O,r.index=H}function _(){const T=r.newAttributes;for(let F=0,k=T.length;F<k;F++)T[F]=0}function m(T){p(T,0)}function p(T,F){const k=r.newAttributes,H=r.enabledAttributes,S=r.attributeDivisors;k[T]=1,H[T]===0&&(i.enableVertexAttribArray(T),H[T]=1),S[T]!==F&&(i.vertexAttribDivisor(T,F),S[T]=F)}function y(){const T=r.newAttributes,F=r.enabledAttributes;for(let k=0,H=F.length;k<H;k++)F[k]!==T[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function v(T,F,k,H,S,P,O){O===!0?i.vertexAttribIPointer(T,F,k,S,P):i.vertexAttribPointer(T,F,k,H,S,P)}function x(T,F,k,H){_();const S=H.attributes,P=k.getAttributes(),O=F.defaultAttributeValues;for(const D in P){const B=P[D];if(B.location>=0){let V=S[D];if(V===void 0&&(D==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),D==="instanceColor"&&T.instanceColor&&(V=T.instanceColor)),V!==void 0){const rt=V.normalized,$=V.itemSize,K=t.get(V);if(K===void 0)continue;const ot=K.buffer,ft=K.type,G=K.bytesPerElement,I=ft===i.INT||ft===i.UNSIGNED_INT||V.gpuType===Ba;if(V.isInterleavedBufferAttribute){const z=V.data,et=z.stride,nt=V.offset;if(z.isInstancedInterleavedBuffer){for(let st=0;st<B.locationSize;st++)p(B.location+st,z.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<B.locationSize;st++)m(B.location+st);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let st=0;st<B.locationSize;st++)v(B.location+st,$/B.locationSize,ft,rt,et*G,(nt+$/B.locationSize*st)*G,I)}else{if(V.isInstancedBufferAttribute){for(let z=0;z<B.locationSize;z++)p(B.location+z,V.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let z=0;z<B.locationSize;z++)m(B.location+z);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let z=0;z<B.locationSize;z++)v(B.location+z,$/B.locationSize,ft,rt,$*G,$/B.locationSize*z*G,I)}}else if(O!==void 0){const rt=O[D];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(B.location,rt);break;case 3:i.vertexAttrib3fv(B.location,rt);break;case 4:i.vertexAttrib4fv(B.location,rt);break;default:i.vertexAttrib1fv(B.location,rt)}}}}y()}function A(){N();for(const T in n){const F=n[T];for(const k in F){const H=F[k];for(const S in H)h(H[S].object),delete H[S];delete F[k]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const F=n[T.id];for(const k in F){const H=F[k];for(const S in H)h(H[S].object),delete H[S];delete F[k]}delete n[T.id]}function L(T){for(const F in n){const k=n[F];if(k[T.id]===void 0)continue;const H=k[T.id];for(const S in H)h(H[S].object),delete H[S];delete k[T.id]}}function N(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Bm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Cn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Bn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Nn&&!N)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function km(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new qn,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,v=y*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hm(i){let t=new WeakMap;function e(o,a){return a===$o?o.mapping=ls:a===jo&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$o||a===jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ns=4,ec=[.125,.215,.35,.446,.526,.582],Si=20,To=new du,nc=new he;let Ao=null,wo=0,Ro=0,Co=!1;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,ic=[new U(-Mi,Ki,0),new U(Mi,Ki,0),new U(-Ki,0,Mi),new U(Ki,0,Mi),new U(0,Mi,-Ki),new U(0,Mi,Ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Gm=new U;class La{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Gm}=r;Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ao,wo,Ro),this._renderer.xr.enabled=Co,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Xs,format:Cn,colorSpace:us,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Wm(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s,r){const c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new ks({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Fe(new Ve,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(nc),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):x===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const A=this._cubeSize;xr(s,x*A,v>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Fe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let y=0;for(let L=0;L<Si;++L){const N=L/_,E=Math.exp(-N*N/2);p.push(E),L===0?y+=E:L<m&&(y+=2*E)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[s],A=3*x*(s>v-ns?s-v+ns:0),R=4*(this._cubeSize-x);xr(e,A,R,3*x,2*x),c.setRenderTarget(e),c.render(u,To)}}function Vm(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ns?c=ec[o-i+ns-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,N=R>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];y.set(E,_*g*R),v.set(d,m*g*R);const T=[R,R,R,R,R,R];x.set(T,p*g*R)}const A=new Te;A.setAttribute("position",new cn(y,_)),A.setAttribute("uv",new cn(v,m)),A.setAttribute("faceIndex",new cn(x,p)),t.push(A),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wm(i,t,e){const n=new Float32Array(Si),s=new U(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function rc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function oc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$o||c===jo,h=c===ls||c===cs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new La(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new La(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const A=y[v+0],R=y[v+1],L=y[v+2];d.push(A,R,R,L,L,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const A=v+0,R=v+1,L=v+2;d.push(A,R,R,L,L,A)}}else return;const m=new(Xc(d)?jc:$c)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $m(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t,e){const n=new WeakMap,s=new be;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*R*4*u),N=new Yc(L,A,R,u);N.type=Nn,N.needsUpdate=!0;const E=x*4;for(let F=0;F<u;F++){const k=p[F],H=y[F],S=v[F],P=A*R*4*F;for(let O=0;O<k.count;O++){const D=O*E;g===!0&&(s.fromBufferAttribute(k,O),L[P+D+0]=s.x,L[P+D+1]=s.y,L[P+D+2]=s.z,L[P+D+3]=0),_===!0&&(s.fromBufferAttribute(H,O),L[P+D+4]=s.x,L[P+D+5]=s.y,L[P+D+6]=s.z,L[P+D+7]=0),m===!0&&(s.fromBufferAttribute(S,O),L[P+D+8]=s.x,L[P+D+9]=s.y,L[P+D+10]=s.z,L[P+D+11]=S.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new ut(A,R)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Km(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const mu=new rn,ac=new eu(1,1),gu=new Yc,_u=new kh,xu=new Jc,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),fc=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),qe(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),qe(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),qe(e,n)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=Wc,r=ac):r=mu,e.setTexture2D(t||r,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xu,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function _0(i){switch(i){case 5126:return Jm;case 35664:return Qm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function y0(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function S0(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E0(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b0(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function w0(i,t){i.uniform3iv(this.addr,t)}function R0(i,t){i.uniform4iv(this.addr,t)}function C0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mu,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_u,r[o])}function N0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xu,r[o])}function F0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gu,r[o])}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return y0;case 35674:return S0;case 35675:return E0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return w0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}}class k0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function dc(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){const n=i.name,s=n.length;for(Po.lastIndex=0;;){const r=Po.exec(n),o=Po.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){dc(e,l===void 0?new B0(a,i,t):new z0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new k0(a),dc(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);H0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const G0=37297;let V0=0;function W0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const mc=new oe;function X0(i){ge._getMatrix(mc,ge.workingColorSpace,i);const t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+W0(i.getShaderSource(t),a)}else return r}function Y0(i,t){const e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q0(i,t){let e;switch(t){case th:e="Linear";break;case eh:e="Reinhard";break;case nh:e="Cineon";break;case Nc:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case ih:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new U;function $0(){ge.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Z0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function _c(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(J0,tg)}const Q0=new Map;function tg(i,t){let e=ce[t];if(e===void 0){const n=Q0.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(t="ENVMAP_MODE_REFRACTION"),t}function og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case Qu:t="ENVMAP_BLENDING_ADD";break}return t}function ag(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ig(e),l=sg(e),h=rg(e),u=og(e),d=ag(e),f=j0(e),g=Z0(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ce.tonemapping_pars_fragment:"",e.toneMapping!==li?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),$0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Da(o),o=_c(o,e),o=xc(o,e),a=Da(a),a=_c(a,e),a=xc(a,e),o=vc(o),a=vc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,A=pc(s,s.VERTEX_SHADER,v),R=pc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(F){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",S=s.getShaderInfoLog(R)||"",P=k.trim(),O=H.trim(),D=S.trim();let B=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,R);else{const rt=gc(s,A,"vertex"),$=gc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+P+`
`+rt+`
`+$)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||D==="")&&(V=!1);V&&(F.diagnostics={runnable:B,programLog:P,vertexShader:{log:O,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(A),s.deleteShader(R),N=new Rr(s,_),E=K0(s,_)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,G0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let cg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hg(t),e.set(t,n)),n}}class hg{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}}function fg(i,t,e,n,s,r,o){const a=new $a,c=new ug,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,T,F,k,H){const S=k.fog,P=H.geometry,O=E.isMeshStandardMaterial?k.environment:null,D=(E.isMeshStandardMaterial?e:t).get(E.envMap||O),B=D&&D.mapping===zr?D.image.height:null,V=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const rt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=rt!==void 0?rt.length:0;let K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let ot,ft,G,I;if(V){const _e=In[V];ot=_e.vertexShader,ft=_e.fragmentShader}else ot=E.vertexShader,ft=E.fragmentShader,c.update(E),G=c.getVertexShaderID(E),I=c.getFragmentShaderID(E);const z=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),nt=H.isInstancedMesh===!0,st=H.isBatchedMesh===!0,bt=!!E.map,St=!!E.matcap,C=!!D,tt=!!E.aoMap,Z=!!E.lightMap,J=!!E.bumpMap,Q=!!E.normalMap,mt=!!E.displacementMap,ht=!!E.emissiveMap,_t=!!E.metalnessMap,Wt=!!E.roughnessMap,$t=E.anisotropy>0,w=E.clearcoat>0,M=E.dispersion>0,j=E.iridescence>0,lt=E.sheen>0,Y=E.transmission>0,ct=$t&&!!E.anisotropyMap,Gt=w&&!!E.clearcoatMap,vt=w&&!!E.clearcoatNormalMap,Nt=w&&!!E.clearcoatRoughnessMap,Ot=j&&!!E.iridescenceMap,Mt=j&&!!E.iridescenceThicknessMap,It=lt&&!!E.sheenColorMap,Kt=lt&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Lt=!!E.specularColorMap,ie=!!E.specularIntensityMap,W=Y&&!!E.transmissionMap,Tt=Y&&!!E.thicknessMap,Rt=!!E.gradientMap,kt=!!E.alphaMap,Et=E.alphaTest>0,gt=!!E.alphaHash,Vt=!!E.extensions;let ne=li;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Me={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:ft,defines:E.defines,customVertexShaderID:G,customFragmentShaderID:I,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:st,batchingColor:st&&H._colorsTexture!==null,instancing:nt,instancingColor:nt&&H.instanceColor!==null,instancingMorph:nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:us,alphaToCoverage:!!E.alphaToCoverage,map:bt,matcap:St,envMap:C,envMapMode:C&&D.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:Z,bumpMap:J,normalMap:Q,displacementMap:d&&mt,emissiveMap:ht,normalMapObjectSpace:Q&&E.normalMapType===ch,normalMapTangentSpace:Q&&E.normalMapType===Xa,metalnessMap:_t,roughnessMap:Wt,anisotropy:$t,anisotropyMap:ct,clearcoat:w,clearcoatMap:Gt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Nt,dispersion:M,iridescence:j,iridescenceMap:Ot,iridescenceThicknessMap:Mt,sheen:lt,sheenColorMap:It,sheenRoughnessMap:Kt,specularMap:Xt,specularColorMap:Lt,specularIntensityMap:ie,transmission:Y,transmissionMap:W,thicknessMap:Tt,gradientMap:Rt,opaque:E.transparent===!1&&E.blending===rs&&E.alphaToCoverage===!1,alphaMap:kt,alphaTest:Et,alphaHash:gt,combine:E.combine,mapUv:bt&&_(E.map.channel),aoMapUv:tt&&_(E.aoMap.channel),lightMapUv:Z&&_(E.lightMap.channel),bumpMapUv:J&&_(E.bumpMap.channel),normalMapUv:Q&&_(E.normalMap.channel),displacementMapUv:mt&&_(E.displacementMap.channel),emissiveMapUv:ht&&_(E.emissiveMap.channel),metalnessMapUv:_t&&_(E.metalnessMap.channel),roughnessMapUv:Wt&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:Gt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(E.sheenRoughnessMap.channel),specularMapUv:Xt&&_(E.specularMap.channel),specularColorMapUv:Lt&&_(E.specularColorMap.channel),specularIntensityMapUv:ie&&_(E.specularIntensityMap.channel),transmissionMapUv:W&&_(E.transmissionMap.channel),thicknessMapUv:Tt&&_(E.thicknessMap.channel),alphaMapUv:kt&&_(E.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Q||$t),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!P.attributes.uv&&(bt||kt),fog:!!S,useFog:E.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:et,skinning:H.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:ht&&E.emissiveMap.isVideoTexture===!0&&ge.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&E.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)T.push(F),T.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(y(T,E),v(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function y(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const T=g[E.type];let F;if(T){const k=In[T];F=Qh.clone(k.uniforms)}else F=E.uniforms;return F}function A(E,T){let F;for(let k=0,H=h.length;k<H;k++){const S=h[k];if(S.cacheKey===T){F=S,++F.usedTimes;break}}return F===void 0&&(F=new lg(i,T,E,r),h.push(F)),F}function R(E){if(--E.usedTimes===0){const T=h.indexOf(E);h[T]=h[h.length-1],h.pop(),E.destroy()}}function L(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:N}}function dg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||pg),n.length>1&&n.sort(d||yc),s.length>1&&s.sort(d||yc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function mg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sc,i.set(n,[o])):s>=r.length?(o=new Sc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new he};break;case"SpotLight":e={position:new U,direction:new U,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function _g(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xg=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mg(i){const t=new gg,e=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new xe,o=new xe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,A=0,R=0,L=0;l.sort(vg);for(let E=0,T=l.length;E<T;E++){const F=l[E],k=F.color,H=F.intensity,S=F.distance,P=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=k.r*H,u+=k.g*H,d+=k.b*H;else if(F.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(F.sh.coefficients[O],H);L++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const D=F.shadow,B=e.get(F);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=P,n.directionalShadowMatrix[f]=F.shadow.matrix,y++}n.directional[f]=O,f++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(k).multiplyScalar(H),O.distance=S,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,n.spot[_]=O;const D=F.shadow;if(F.map&&(n.spotLightMap[A]=F.map,A++,D.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[_]=D.matrix,F.castShadow){const B=e.get(F);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=P,x++}_++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(k).multiplyScalar(H),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=O,m++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const D=F.shadow,B=e.get(F);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,B.shadowCameraNear=D.camera.near,B.shadowCameraFar=D.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=P,n.pointShadowMatrix[g]=F.shadow.matrix,v++}n.point[g]=O,g++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(H),O.groundColor.copy(F.groundColor).multiplyScalar(H),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==A||N.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=A,N.numLightProbes=L,n.version=xg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ec(i){const t=new Mg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ec(i),t.set(s,[a])):r>=o.length?(a=new Ec(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function bg(i,t,e){let n=new ja;const s=new ut,r=new ut,o=new be,a=new Vf({depthPacking:lh}),c=new Wf,l={},h=e.maxTextureSize,u={[ci]:sn,[sn]:ci,[wn]:wn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Sg,fragmentShader:Eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(R,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ai),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==Yn&&this.type===Yn,S=p===Yn&&this.type!==Yn;for(let P=0,O=R.length;P<O;P++){const D=R[P],B=D.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const V=B.getFrameExtents();if(s.multiply(V),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,B.mapSize.y=r.y)),B.map===null||H===!0||S===!0){const $=this.type!==Yn?{minFilter:xn,magFilter:xn}:{};B.map!==null&&B.map.dispose(),B.map=new Li(s.x,s.y,$),B.map.texture.name=D.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const rt=B.getViewportCount();for(let $=0;$<rt;$++){const K=B.getViewport($);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),k.viewport(o),B.updateMatrices(D,$),n=B.getFrustum(),x(L,N,B.camera,D,this.type)}B.isPointLightShadow!==!0&&this.type===Yn&&y(B,N),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,F)};function y(R,L){const N=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Li(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,N,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,N,f,_,null)}function v(R,L,N,E){let T=null;const F=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)T=F;else if(T=N.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const k=T.uuid,H=L.uuid;let S=l[k];S===void 0&&(S={},l[k]=S);let P=S[H];P===void 0&&(P=T.clone(),S[H]=P,L.addEventListener("dispose",A)),T=P}if(T.visible=L.visible,T.wireframe=L.wireframe,E===Yn?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:u[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=i.properties.get(T);k.light=N}return T}function x(R,L,N,E,T){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const H=t.update(R),S=R.material;if(Array.isArray(S)){const P=H.groups;for(let O=0,D=P.length;O<D;O++){const B=P[O],V=S[B.materialIndex];if(V&&V.visible){const rt=v(R,V,E,T);R.onBeforeShadow(i,R,L,N,H,rt,B),i.renderBufferDirect(N,null,H,rt,R,B),R.onAfterShadow(i,R,L,N,H,rt,B)}}}else if(S.visible){const P=v(R,S,E,T);R.onBeforeShadow(i,R,L,N,H,P,null),i.renderBufferDirect(N,null,H,P,R,null),R.onAfterShadow(i,R,L,N,H,P,null)}}const k=R.children;for(let H=0,S=k.length;H<S;H++)x(k[H],L,N,E,T)}function A(R){R.target.removeEventListener("dispose",A);for(const N in l){const E=l[N],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const Tg={[Ho]:Go,[Vo]:Yo,[Wo]:qo,[as]:Xo,[Go]:Ho,[Yo]:Vo,[qo]:Wo,[Xo]:as};function Ag(i,t){function e(){let W=!1;const Tt=new be;let Rt=null;const kt=new be(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!W&&(i.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,gt,Vt,ne,Me){Me===!0&&(Et*=ne,gt*=ne,Vt*=ne),Tt.set(Et,gt,Vt,ne),kt.equals(Tt)===!1&&(i.clearColor(Et,gt,Vt,ne),kt.copy(Tt))},reset:function(){W=!1,Rt=null,kt.set(-1,0,0,0)}}}function n(){let W=!1,Tt=!1,Rt=null,kt=null,Et=null;return{setReversed:function(gt){if(Tt!==gt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const ne=Et;Et=null,this.setClear(ne)}},getReversed:function(){return Tt},setTest:function(gt){gt?z(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!W&&(i.depthMask(gt),Rt=gt)},setFunc:function(gt){if(Tt&&(gt=Tg[gt]),kt!==gt){switch(gt){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}kt=gt}},setLocked:function(gt){W=gt},setClear:function(gt){Et!==gt&&(Tt&&(gt=1-gt),i.clearDepth(gt),Et=gt)},reset:function(){W=!1,Rt=null,kt=null,Et=null,Tt=!1}}}function s(){let W=!1,Tt=null,Rt=null,kt=null,Et=null,gt=null,Vt=null,ne=null,Me=null;return{setTest:function(_e){W||(_e?z(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(_e){Tt!==_e&&!W&&(i.stencilMask(_e),Tt=_e)},setFunc:function(_e,pt,xt){(Rt!==_e||kt!==pt||Et!==xt)&&(i.stencilFunc(_e,pt,xt),Rt=_e,kt=pt,Et=xt)},setOp:function(_e,pt,xt){(gt!==_e||Vt!==pt||ne!==xt)&&(i.stencilOp(_e,pt,xt),gt=_e,Vt=pt,ne=xt)},setLocked:function(_e){W=_e},setClear:function(_e){Me!==_e&&(i.clearStencil(_e),Me=_e)},reset:function(){W=!1,Tt=null,Rt=null,kt=null,Et=null,gt=null,Vt=null,ne=null,Me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,A=null,R=null,L=new he(0,0,0),N=0,E=!1,T=null,F=null,k=null,H=null,S=null;const P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,D=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=D>=1):B.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=D>=2);let V=null,rt={};const $=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ot=new be().fromArray($),ft=new be().fromArray(K);function G(W,Tt,Rt,kt){const Et=new Uint8Array(4),gt=i.createTexture();i.bindTexture(W,gt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<Rt;Vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Tt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return gt}const I={};I[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(i.DEPTH_TEST),o.setFunc(as),J(!1),Q(ll),z(i.CULL_FACE),tt(ai);function z(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function et(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function nt(W,Tt){return u[W]!==Tt?(i.bindFramebuffer(W,Tt),u[W]=Tt,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function st(W,Tt){let Rt=f,kt=!1;if(W){Rt=d.get(Tt),Rt===void 0&&(Rt=[],d.set(Tt,Rt));const Et=W.textures;if(Rt.length!==Et.length||Rt[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Vt=Et.length;gt<Vt;gt++)Rt[gt]=i.COLOR_ATTACHMENT0+gt;Rt.length=Et.length,kt=!0}}else Rt[0]!==i.BACK&&(Rt[0]=i.BACK,kt=!0);kt&&i.drawBuffers(Rt)}function bt(W){return g!==W?(i.useProgram(W),g=W,!0):!1}const St={[yi]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};St[Ou]=i.MIN,St[Bu]=i.MAX;const C={[zu]:i.ZERO,[ku]:i.ONE,[Hu]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(W,Tt,Rt,kt,Et,gt,Vt,ne,Me,_e){if(W===ai){_===!0&&(et(i.BLEND),_=!1);return}if(_===!1&&(z(i.BLEND),_=!0),W!==Uu){if(W!==m||_e!==E){if((p!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,x=yi),_e)switch(W){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,v=null,A=null,R=null,L.set(0,0,0),N=0,m=W,E=_e}return}Et=Et||Tt,gt=gt||Rt,Vt=Vt||kt,(Tt!==p||Et!==x)&&(i.blendEquationSeparate(St[Tt],St[Et]),p=Tt,x=Et),(Rt!==y||kt!==v||gt!==A||Vt!==R)&&(i.blendFuncSeparate(C[Rt],C[kt],C[gt],C[Vt]),y=Rt,v=kt,A=gt,R=Vt),(ne.equals(L)===!1||Me!==N)&&(i.blendColor(ne.r,ne.g,ne.b,Me),L.copy(ne),N=Me),m=W,E=!1}function Z(W,Tt){W.side===wn?et(i.CULL_FACE):z(i.CULL_FACE);let Rt=W.side===sn;Tt&&(Rt=!Rt),J(Rt),W.blending===rs&&W.transparent===!1?tt(ai):tt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const kt=W.stencilWrite;a.setTest(kt),kt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ht(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function Q(W){W!==Lu?(z(i.CULL_FACE),W!==F&&(W===ll?i.cullFace(i.BACK):W===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),F=W}function mt(W){W!==k&&(O&&i.lineWidth(W),k=W)}function ht(W,Tt,Rt){W?(z(i.POLYGON_OFFSET_FILL),(H!==Tt||S!==Rt)&&(i.polygonOffset(Tt,Rt),H=Tt,S=Rt)):et(i.POLYGON_OFFSET_FILL)}function _t(W){W?z(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function Wt(W){W===void 0&&(W=i.TEXTURE0+P-1),V!==W&&(i.activeTexture(W),V=W)}function $t(W,Tt,Rt){Rt===void 0&&(V===null?Rt=i.TEXTURE0+P-1:Rt=V);let kt=rt[Rt];kt===void 0&&(kt={type:void 0,texture:void 0},rt[Rt]=kt),(kt.type!==W||kt.texture!==Tt)&&(V!==Rt&&(i.activeTexture(Rt),V=Rt),i.bindTexture(W,Tt||I[W]),kt.type=W,kt.texture=Tt)}function w(){const W=rt[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(W){ot.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ot.copy(W))}function Kt(W){ft.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ft.copy(W))}function Xt(W,Tt){let Rt=l.get(Tt);Rt===void 0&&(Rt=new WeakMap,l.set(Tt,Rt));let kt=Rt.get(W);kt===void 0&&(kt=i.getUniformBlockIndex(Tt,W.name),Rt.set(W,kt))}function Lt(W,Tt){const kt=l.get(Tt).get(W);c.get(Tt)!==kt&&(i.uniformBlockBinding(Tt,kt,W.__bindingPointIndex),c.set(Tt,kt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,rt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,A=null,R=null,L=new he(0,0,0),N=0,E=!1,T=null,F=null,k=null,H=null,S=null,ot.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:et,bindFramebuffer:nt,drawBuffers:st,useProgram:bt,setBlending:tt,setMaterial:Z,setFlipSided:J,setCullFace:Q,setLineWidth:mt,setPolygonOffset:ht,setScissorTest:_t,activeTexture:Wt,bindTexture:$t,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:Ot,texImage3D:Mt,updateUBOMapping:Xt,uniformBlockBinding:Lt,texStorage2D:vt,texStorage3D:Nt,texSubImage2D:lt,texSubImage3D:Y,compressedTexSubImage2D:ct,compressedTexSubImage3D:Gt,scissor:It,viewport:Kt,reset:ie}}function wg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):Dr("canvas")}function _(w,M,j){let lt=1;const Y=$t(w);if((Y.width>j||Y.height>j)&&(lt=j/Math.max(Y.width,Y.height)),lt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ct=Math.floor(lt*Y.width),Gt=Math.floor(lt*Y.height);u===void 0&&(u=g(ct,Gt));const vt=M?g(ct,Gt):u;return vt.width=ct,vt.height=Gt,vt.getContext("2d").drawImage(w,0,0,ct,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ct+"x"+Gt+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,M,j,lt,Y=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=M;if(M===i.RED&&(j===i.FLOAT&&(ct=i.R32F),j===i.HALF_FLOAT&&(ct=i.R16F),j===i.UNSIGNED_BYTE&&(ct=i.R8)),M===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.R8UI),j===i.UNSIGNED_SHORT&&(ct=i.R16UI),j===i.UNSIGNED_INT&&(ct=i.R32UI),j===i.BYTE&&(ct=i.R8I),j===i.SHORT&&(ct=i.R16I),j===i.INT&&(ct=i.R32I)),M===i.RG&&(j===i.FLOAT&&(ct=i.RG32F),j===i.HALF_FLOAT&&(ct=i.RG16F),j===i.UNSIGNED_BYTE&&(ct=i.RG8)),M===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RG8UI),j===i.UNSIGNED_SHORT&&(ct=i.RG16UI),j===i.UNSIGNED_INT&&(ct=i.RG32UI),j===i.BYTE&&(ct=i.RG8I),j===i.SHORT&&(ct=i.RG16I),j===i.INT&&(ct=i.RG32I)),M===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),j===i.UNSIGNED_INT&&(ct=i.RGB32UI),j===i.BYTE&&(ct=i.RGB8I),j===i.SHORT&&(ct=i.RGB16I),j===i.INT&&(ct=i.RGB32I)),M===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),j===i.UNSIGNED_INT&&(ct=i.RGBA32UI),j===i.BYTE&&(ct=i.RGBA8I),j===i.SHORT&&(ct=i.RGBA16I),j===i.INT&&(ct=i.RGBA32I)),M===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),M===i.RGBA){const Gt=Y?Pr:ge.getTransfer(lt);j===i.FLOAT&&(ct=i.RGBA32F),j===i.HALF_FLOAT&&(ct=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ct=Gt===Se?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(w,M){let j;return w?M===null||M===Ci||M===Ns?j=i.DEPTH24_STENCIL8:M===Nn?j=i.DEPTH32F_STENCIL8:M===Us&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===Ns?j=i.DEPTH_COMPONENT24:M===Nn?j=i.DEPTH_COMPONENT32F:M===Us&&(j=i.DEPTH_COMPONENT16),j}function A(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==xn&&w.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){const M=w.target;M.removeEventListener("dispose",R),N(M),M.isVideoTexture&&h.delete(M)}function L(w){const M=w.target;M.removeEventListener("dispose",L),T(M)}function N(w){const M=n.get(w);if(M.__webglInit===void 0)return;const j=w.source,lt=d.get(j);if(lt){const Y=lt[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(w),Object.keys(lt).length===0&&d.delete(j)}n.remove(w)}function E(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const j=w.source,lt=d.get(j);delete lt[M.__cacheKey],o.memory.textures--}function T(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(M.__webglFramebuffer[lt]))for(let Y=0;Y<M.__webglFramebuffer[lt].length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[lt][Y]);else i.deleteFramebuffer(M.__webglFramebuffer[lt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[lt])}else{if(Array.isArray(M.__webglFramebuffer))for(let lt=0;lt<M.__webglFramebuffer.length;lt++)i.deleteFramebuffer(M.__webglFramebuffer[lt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let lt=0;lt<M.__webglColorRenderbuffer.length;lt++)M.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[lt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=w.textures;for(let lt=0,Y=j.length;lt<Y;lt++){const ct=n.get(j[lt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(j[lt])}n.remove(w)}let F=0;function k(){F=0}function H(){const w=F;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function S(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function P(w,M){const j=n.get(w);if(w.isVideoTexture&&_t(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&j.__version!==w.version){const lt=w.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(j,w,M);return}}else w.isExternalTexture&&(j.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+M)}function O(w,M){const j=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){I(j,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+M)}function D(w,M){const j=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){I(j,w,M);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+M)}function B(w,M){const j=n.get(w);if(w.version>0&&j.__version!==w.version){z(j,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+M)}const V={[Zo]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},rt={[xn]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},$={[uh]:i.NEVER,[gh]:i.ALWAYS,[hh]:i.LESS,[Wc]:i.LEQUAL,[fh]:i.EQUAL,[mh]:i.GEQUAL,[dh]:i.GREATER,[ph]:i.NOTEQUAL};function K(w,M){if(M.type===Nn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===$r||M.magFilter===Ys||M.magFilter===bi||M.minFilter===Un||M.minFilter===$r||M.minFilter===Ys||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,V[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,V[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,V[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,rt[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==Ys&&M.minFilter!==bi||M.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(w,M){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const lt=M.source;let Y=d.get(lt);Y===void 0&&(Y={},d.set(lt,Y));const ct=S(M);if(ct!==w.__cacheKey){Y[ct]===void 0&&(Y[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Y[ct].usedTimes++;const Gt=Y[w.__cacheKey];Gt!==void 0&&(Y[w.__cacheKey].usedTimes--,Gt.usedTimes===0&&E(M)),w.__cacheKey=ct,w.__webglTexture=Y[ct].texture}return j}function ft(w,M,j){return Math.floor(Math.floor(w/j)/M)}function G(w,M,j,lt){const ct=w.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,j,lt,M.data);else{ct.sort((Mt,It)=>Mt.start-It.start);let Gt=0;for(let Mt=1;Mt<ct.length;Mt++){const It=ct[Gt],Kt=ct[Mt],Xt=It.start+It.count,Lt=ft(Kt.start,M.width,4),ie=ft(It.start,M.width,4);Kt.start<=Xt+1&&Lt===ie&&ft(Kt.start+Kt.count-1,M.width,4)===Lt?It.count=Math.max(It.count,Kt.start+Kt.count-It.start):(++Gt,ct[Gt]=Kt)}ct.length=Gt+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,It=ct.length;Mt<It;Mt++){const Kt=ct[Mt],Xt=Math.floor(Kt.start/4),Lt=Math.ceil(Kt.count/4),ie=Xt%M.width,W=Math.floor(Xt/M.width),Tt=Lt,Rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,ie,W,Tt,Rt,j,lt,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ot)}}function I(w,M,j){let lt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=i.TEXTURE_3D);const Y=ot(w,M),ct=M.source;e.bindTexture(lt,w.__webglTexture,i.TEXTURE0+j);const Gt=n.get(ct);if(ct.version!==Gt.__version||Y===!0){e.activeTexture(i.TEXTURE0+j);const vt=ge.getPrimaries(ge.workingColorSpace),Nt=M.colorSpace===ri?null:ge.getPrimaries(M.colorSpace),Ot=M.colorSpace===ri||vt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let Mt=_(M.image,!1,s.maxTextureSize);Mt=Wt(M,Mt);const It=r.convert(M.format,M.colorSpace),Kt=r.convert(M.type);let Xt=v(M.internalFormat,It,Kt,M.colorSpace,M.isVideoTexture);K(lt,M);let Lt;const ie=M.mipmaps,W=M.isVideoTexture!==!0,Tt=Gt.__version===void 0||Y===!0,Rt=ct.dataReady,kt=A(M,Mt);if(M.isDepthTexture)Xt=x(M.format===Os,M.type),Tt&&(W?e.texStorage2D(i.TEXTURE_2D,1,Xt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,It,Kt,null));else if(M.isDataTexture)if(ie.length>0){W&&Tt&&e.texStorage2D(i.TEXTURE_2D,kt,Xt,ie[0].width,ie[0].height);for(let Et=0,gt=ie.length;Et<gt;Et++)Lt=ie[Et],W?Rt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,It,Kt,Lt.data):e.texImage2D(i.TEXTURE_2D,Et,Xt,Lt.width,Lt.height,0,It,Kt,Lt.data);M.generateMipmaps=!1}else W?(Tt&&e.texStorage2D(i.TEXTURE_2D,kt,Xt,Mt.width,Mt.height),Rt&&G(M,Mt,It,Kt)):e.texImage2D(i.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,It,Kt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Xt,ie[0].width,ie[0].height,Mt.depth);for(let Et=0,gt=ie.length;Et<gt;Et++)if(Lt=ie[Et],M.format!==Cn)if(It!==null)if(W){if(Rt)if(M.layerUpdates.size>0){const Vt=tc(Lt.width,Lt.height,M.format,M.type);for(const ne of M.layerUpdates){const Me=Lt.data.subarray(ne*Vt/Lt.data.BYTES_PER_ELEMENT,(ne+1)*Vt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,ne,Lt.width,Lt.height,1,It,Me)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Mt.depth,It,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Xt,Lt.width,Lt.height,Mt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Mt.depth,It,Kt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,Xt,Lt.width,Lt.height,Mt.depth,0,It,Kt,Lt.data)}else{W&&Tt&&e.texStorage2D(i.TEXTURE_2D,kt,Xt,ie[0].width,ie[0].height);for(let Et=0,gt=ie.length;Et<gt;Et++)Lt=ie[Et],M.format!==Cn?It!==null?W?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,It,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,It,Kt,Lt.data):e.texImage2D(i.TEXTURE_2D,Et,Xt,Lt.width,Lt.height,0,It,Kt,Lt.data)}else if(M.isDataArrayTexture)if(W){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Xt,Mt.width,Mt.height,Mt.depth),Rt)if(M.layerUpdates.size>0){const Et=tc(Mt.width,Mt.height,M.format,M.type);for(const gt of M.layerUpdates){const Vt=Mt.data.subarray(gt*Et/Mt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,It,Kt,Vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Kt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,Mt.width,Mt.height,Mt.depth,0,It,Kt,Mt.data);else if(M.isData3DTexture)W?(Tt&&e.texStorage3D(i.TEXTURE_3D,kt,Xt,Mt.width,Mt.height,Mt.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Kt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,Mt.width,Mt.height,Mt.depth,0,It,Kt,Mt.data);else if(M.isFramebufferTexture){if(Tt)if(W)e.texStorage2D(i.TEXTURE_2D,kt,Xt,Mt.width,Mt.height);else{let Et=Mt.width,gt=Mt.height;for(let Vt=0;Vt<kt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,Xt,Et,gt,0,It,Kt,null),Et>>=1,gt>>=1}}else if(ie.length>0){if(W&&Tt){const Et=$t(ie[0]);e.texStorage2D(i.TEXTURE_2D,kt,Xt,Et.width,Et.height)}for(let Et=0,gt=ie.length;Et<gt;Et++)Lt=ie[Et],W?Rt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,It,Kt,Lt):e.texImage2D(i.TEXTURE_2D,Et,Xt,It,Kt,Lt);M.generateMipmaps=!1}else if(W){if(Tt){const Et=$t(Mt);e.texStorage2D(i.TEXTURE_2D,kt,Xt,Et.width,Et.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Kt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,It,Kt,Mt);m(M)&&p(lt),Gt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function z(w,M,j){if(M.image.length!==6)return;const lt=ot(w,M),Y=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+j);const ct=n.get(Y);if(Y.version!==ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+j);const Gt=ge.getPrimaries(ge.workingColorSpace),vt=M.colorSpace===ri?null:ge.getPrimaries(M.colorSpace),Nt=M.colorSpace===ri||Gt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Ot=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!Ot&&!Mt?It[gt]=_(M.image[gt],!0,s.maxCubemapSize):It[gt]=Mt?M.image[gt].image:M.image[gt],It[gt]=Wt(M,It[gt]);const Kt=It[0],Xt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),ie=v(M.internalFormat,Xt,Lt,M.colorSpace),W=M.isVideoTexture!==!0,Tt=ct.__version===void 0||lt===!0,Rt=Y.dataReady;let kt=A(M,Kt);K(i.TEXTURE_CUBE_MAP,M);let Et;if(Ot){W&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,ie,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){Et=It[gt].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ne=Et[Vt];M.format!==Cn?Xt!==null?W?Rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ne.width,ne.height,Xt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ne.width,ne.height,Xt,Lt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,ie,ne.width,ne.height,0,Xt,Lt,ne.data)}}}else{if(Et=M.mipmaps,W&&Tt){Et.length>0&&kt++;const gt=$t(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){W?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Xt,Lt,It[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,It[gt].width,It[gt].height,0,Xt,Lt,It[gt].data);for(let Vt=0;Vt<Et.length;Vt++){const Me=Et[Vt].image[gt].image;W?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Me.width,Me.height,Xt,Lt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,ie,Me.width,Me.height,0,Xt,Lt,Me.data)}}else{W?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Xt,Lt,It[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Xt,Lt,It[gt]);for(let Vt=0;Vt<Et.length;Vt++){const ne=Et[Vt];W?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Xt,Lt,ne.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,ie,Xt,Lt,ne.image[gt])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),ct.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function et(w,M,j,lt,Y,ct){const Gt=r.convert(j.format,j.colorSpace),vt=r.convert(j.type),Nt=v(j.internalFormat,Gt,vt,j.colorSpace),Ot=n.get(M),Mt=n.get(j);if(Mt.__renderTarget=M,!Ot.__hasExternalTextures){const It=Math.max(1,M.width>>ct),Kt=Math.max(1,M.height>>ct);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ct,Nt,It,Kt,M.depth,0,Gt,vt,null):e.texImage2D(Y,ct,Nt,It,Kt,0,Gt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,Y,Mt.__webglTexture,0,mt(M)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,Y,Mt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,M,j){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const lt=M.depthTexture,Y=lt&&lt.isDepthTexture?lt.type:null,ct=x(M.stencilBuffer,Y),Gt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=mt(M);ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ct,M.width,M.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Gt,i.RENDERBUFFER,w)}else{const lt=M.textures;for(let Y=0;Y<lt.length;Y++){const ct=lt[Y],Gt=r.convert(ct.format,ct.colorSpace),vt=r.convert(ct.type),Nt=v(ct.internalFormat,Gt,vt,ct.colorSpace),Ot=mt(M);j&&ht(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Nt,M.width,M.height):ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Nt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(M.depthTexture);lt.__renderTarget=M,(!lt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const Y=lt.__webglTexture,ct=mt(M);if(M.depthTexture.format===Fs)ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Os)ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function bt(w){const M=n.get(w),j=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const lt=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",Y)};lt.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=lt}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const lt=w.texture.mipmaps;lt&&lt.length>0?st(M.__webglFramebuffer[0],w):st(M.__webglFramebuffer,w)}else if(j){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[lt],w,!1);else{const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}else{const lt=w.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(w,M,j){const lt=n.get(w);M!==void 0&&et(lt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&bt(w)}function C(w){const M=w.texture,j=n.get(w),lt=n.get(M);w.addEventListener("dispose",L);const Y=w.textures,ct=w.isWebGLCubeRenderTarget===!0,Gt=Y.length>1;if(Gt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=M.version,o.memory.textures++),ct){j.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[vt]=[];for(let Nt=0;Nt<M.mipmaps.length;Nt++)j.__webglFramebuffer[vt][Nt]=i.createFramebuffer()}else j.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)j.__webglFramebuffer[vt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Gt)for(let vt=0,Nt=Y.length;vt<Nt;vt++){const Ot=n.get(Y[vt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ht(w)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let vt=0;vt<Y.length;vt++){const Nt=Y[vt];j.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[vt]);const Ot=r.convert(Nt.format,Nt.colorSpace),Mt=r.convert(Nt.type),It=v(Nt.internalFormat,Ot,Mt,Nt.colorSpace,w.isXRRenderTarget===!0),Kt=mt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,It,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,j.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(j.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),K(i.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Nt=0;Nt<M.mipmaps.length;Nt++)et(j.__webglFramebuffer[vt][Nt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt);else et(j.__webglFramebuffer[vt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let vt=0,Nt=Y.length;vt<Nt;vt++){const Ot=Y[vt],Mt=n.get(Ot);let It=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(It=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Mt.__webglTexture),K(It,Ot),et(j.__webglFramebuffer,w,Ot,i.COLOR_ATTACHMENT0+vt,It,0),m(Ot)&&p(It)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(vt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,lt.__webglTexture),K(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let Nt=0;Nt<M.mipmaps.length;Nt++)et(j.__webglFramebuffer[Nt],w,M,i.COLOR_ATTACHMENT0,vt,Nt);else et(j.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,vt,0);m(M)&&p(vt),e.unbindTexture()}w.depthBuffer&&bt(w)}function tt(w){const M=w.textures;for(let j=0,lt=M.length;j<lt;j++){const Y=M[j];if(m(Y)){const ct=y(w),Gt=n.get(Y).__webglTexture;e.bindTexture(ct,Gt),p(ct),e.unbindTexture()}}}const Z=[],J=[];function Q(w){if(w.samples>0){if(ht(w)===!1){const M=w.textures,j=w.width,lt=w.height;let Y=i.COLOR_BUFFER_BIT;const ct=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(w),vt=M.length>1;if(vt)for(let Ot=0;Ot<M.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Nt=w.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Ot=0;Ot<M.length;Ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ot]);const Mt=n.get(M[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,j,lt,0,0,j,lt,Y,i.NEAREST),c===!0&&(Z.length=0,J.length=0,Z.push(i.COLOR_ATTACHMENT0+Ot),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Z.push(ct),J.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Ot=0;Ot<M.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ot]);const Mt=n.get(M[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,Mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(w){return Math.min(s.maxSamples,w.samples)}function ht(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Wt(w,M){const j=w.colorSpace,lt=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||j!==us&&j!==ri&&(ge.getTransfer(j)===Se?(lt!==Cn||Y!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function $t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=P,this.setTexture2DArray=O,this.setTexture3D=D,this.setTextureCube=B,this.rebindTextures=St,this.setupRenderTarget=C,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ht}function Rg(i,t){function e(n,s=ri){let r;const o=ge.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Cn)return i.RGBA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===Vc)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===wr)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===Ea||n===ba||n===Ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new nu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ui({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Lg,p={},y=e.getContextAttributes();let v=null,x=null;const A=[],R=[],L=new ut;let N=null;const E=new gn;E.viewport=new be;const T=new gn;T.viewport=new be;const F=[E,T],k=new Zf;let H=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let z=A[I];return z===void 0&&(z=new go,A[I]=z),z.getTargetRaySpace()},this.getControllerGrip=function(I){let z=A[I];return z===void 0&&(z=new go,A[I]=z),z.getGripSpace()},this.getHand=function(I){let z=A[I];return z===void 0&&(z=new go,A[I]=z),z.getHandSpace()};function P(I){const z=R.indexOf(I.inputSource);if(z===-1)return;const et=A[z];et!==void 0&&(et.update(I.inputSource,I.frame,l||o),et.dispatchEvent({type:I.type,data:I.inputSource}))}function O(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",D);for(let I=0;I<A.length;I++){const z=R[I];z!==null&&(R[I]=null,A[I].disconnect(z))}H=null,S=null,m.reset();for(const I in p)delete p[I];t.setRenderTarget(v),f=null,d=null,u=null,s=null,x=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",O),s.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,nt=null,st=null;y.depth&&(st=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=y.stencil?Os:Fs,nt=y.stencil?Ns:Ci);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Li(d.textureWidth,d.textureHeight,{format:Cn,type:Bn,depthTexture:new eu(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Li(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D(I){for(let z=0;z<I.removed.length;z++){const et=I.removed[z],nt=R.indexOf(et);nt>=0&&(R[nt]=null,A[nt].disconnect(et))}for(let z=0;z<I.added.length;z++){const et=I.added[z];let nt=R.indexOf(et);if(nt===-1){for(let bt=0;bt<A.length;bt++)if(bt>=R.length){R.push(et),nt=bt;break}else if(R[bt]===null){R[bt]=et,nt=bt;break}if(nt===-1)break}const st=A[nt];st&&st.connect(et)}}const B=new U,V=new U;function rt(I,z,et){B.setFromMatrixPosition(z.matrixWorld),V.setFromMatrixPosition(et.matrixWorld);const nt=B.distanceTo(V),st=z.projectionMatrix.elements,bt=et.projectionMatrix.elements,St=st[14]/(st[10]-1),C=st[14]/(st[10]+1),tt=(st[9]+1)/st[5],Z=(st[9]-1)/st[5],J=(st[8]-1)/st[0],Q=(bt[8]+1)/bt[0],mt=St*J,ht=St*Q,_t=nt/(-J+Q),Wt=_t*-J;if(z.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Wt),I.translateZ(_t),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),st[10]===-1)I.projectionMatrix.copy(z.projectionMatrix),I.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const $t=St+_t,w=C+_t,M=mt-Wt,j=ht+(nt-Wt),lt=tt*C/w*$t,Y=Z*C/w*$t;I.projectionMatrix.makePerspective(M,j,lt,Y,$t,w),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function $(I,z){z===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(z.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let z=I.near,et=I.far;m.texture!==null&&(m.depthNear>0&&(z=m.depthNear),m.depthFar>0&&(et=m.depthFar)),k.near=T.near=E.near=z,k.far=T.far=E.far=et,(H!==k.near||S!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,S=k.far),k.layers.mask=I.layers.mask|6,E.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const nt=I.parent,st=k.cameras;$(k,nt);for(let bt=0;bt<st.length;bt++)$(st[bt],nt);st.length===2?rt(k,E,T):k.projectionMatrix.copy(E.projectionMatrix),K(I,k,nt)};function K(I,z,et){et===null?I.matrix.copy(z.matrixWorld):(I.matrix.copy(et.matrixWorld),I.matrix.invert(),I.matrix.multiply(z.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(z.projectionMatrix),I.projectionMatrixInverse.copy(z.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Bs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(I){c=I,d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(I){return p[I]};let ot=null;function ft(I,z){if(h=z.getViewerPose(l||o),g=z,h!==null){const et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let nt=!1;et.length!==k.cameras.length&&(k.cameras.length=0,nt=!0);for(let C=0;C<et.length;C++){const tt=et[C];let Z=null;if(f!==null)Z=f.getViewport(tt);else{const Q=u.getViewSubImage(d,tt);Z=Q.viewport,C===0&&(t.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(x))}let J=F[C];J===void 0&&(J=new gn,J.layers.enable(C),J.viewport=new be,F[C]=J),J.matrix.fromArray(tt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(tt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Z.x,Z.y,Z.width,Z.height),C===0&&(k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),nt===!0&&k.cameras.push(J)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(et[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<et.length;C++){const tt=et[C].camera;if(tt){let Z=p[tt];Z||(Z=new nu,p[tt]=Z);const J=u.getCameraImage(tt);Z.sourceTexture=J}}}}for(let et=0;et<A.length;et++){const nt=R[et],st=A[et];nt!==null&&st!==void 0&&st.update(nt,z,l||o)}ot&&ot(I,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const G=new pu;G.setAnimationLoop(ft),this.setAnimationLoop=function(I){ot=I},this.dispose=function(){}}}const _i=new Pn,Ig=new xe;function Ug(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,_i.copy(x),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(_i)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(y,A);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,L=x.length;R<L;R++){const N=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,T=N.length;E<T;E++){const F=N[E];if(f(F,R,E,A)===!0){const k=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let S=0;for(let P=0;P<H.length;P++){const O=H[P],D=_(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,k+S,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,x,A){const R=y.value,L=v+"_"+x;if(A[L]===void 0)return typeof R=="number"||typeof R=="boolean"?A[L]=R:A[L]=R.clone(),!0;{const N=A[L];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[L]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(y){const v=y.uniforms;let x=0;const A=16;for(let L=0,N=v.length;L<N;L++){const E=Array.isArray(v[L])?v[L]:[v[L]];for(let T=0,F=E.length;T<F;T++){const k=E[T],H=Array.isArray(k.value)?k.value:[k.value];for(let S=0,P=H.length;S<P;S++){const O=H[S],D=_(O),B=x%A,V=B%D.boundary,rt=B+V;x+=V,rt!==0&&A-rt<D.storage&&(x+=A-rt),k.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=D.storage}}}const R=x%A;return R>0&&(x+=A-R),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Fg{constructor(t={}){const{canvas:e=Ih(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Sn;let R=0,L=0,N=null,E=-1,T=null;const F=new be,k=new be;let H=null;const S=new he(0);let P=0,O=e.width,D=e.height,B=1,V=null,rt=null;const $=new be(0,0,O,D),K=new be(0,0,O,D);let ot=!1;const ft=new ja;let G=!1,I=!1;const z=new xe,et=new U,nt=new be,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function St(){return N===null?B:1}let C=n;function tt(b,X){return e.getContext(b,X)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),C===null){const X="webgl2";if(C=tt(X,b),C===null)throw tt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,J,Q,mt,ht,_t,Wt,$t,w,M,j,lt,Y,ct,Gt,vt,Nt,Ot,Mt,It,Kt,Xt,Lt,ie;function W(){Z=new Ym(C),Z.init(),Xt=new Rg(C,Z),J=new zm(C,Z,t,Xt),Q=new Ag(C,Z),J.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),mt=new jm(C),ht=new dg,_t=new wg(C,Z,Q,ht,J,Xt,mt),Wt=new Hm(x),$t=new Xm(x),w=new ed(C),Lt=new Om(C,w),M=new qm(C,w,mt,Lt),j=new Km(C,M,w,mt),Mt=new Zm(C,J,_t),vt=new km(ht),lt=new fg(x,Wt,$t,Z,J,Lt,vt),Y=new Ug(x,ht),ct=new mg,Gt=new yg(Z),Ot=new Fm(x,Wt,$t,Q,j,f,c),Nt=new bg(x,j,J),ie=new Ng(C,mt,J,Q),It=new Bm(C,Z,mt),Kt=new $m(C,Z,mt),mt.programs=lt.programs,x.capabilities=J,x.extensions=Z,x.properties=ht,x.renderLists=ct,x.shadowMap=Nt,x.state=Q,x.info=mt}W();const Tt=new Dg(x,C);this.xr=Tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(O,D,!1))},this.getSize=function(b){return b.set(O,D)},this.setSize=function(b,X,it=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,D=X,e.width=Math.floor(b*B),e.height=Math.floor(X*B),it===!0&&(e.style.width=b+"px",e.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(O*B,D*B).floor()},this.setDrawingBufferSize=function(b,X,it){O=b,D=X,B=it,e.width=Math.floor(b*it),e.height=Math.floor(X*it),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,X,it,at){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,X,it,at),Q.viewport(F.copy($).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,X,it,at){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,X,it,at),Q.scissor(k.copy(K).multiplyScalar(B).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(b){Q.setScissorTest(ot=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,it=!0){let at=0;if(b){let q=!1;if(N!==null){const yt=N.texture.format;q=yt===Wa||yt===Va||yt===Ga}if(q){const yt=N.texture.type,Dt=yt===Bn||yt===Ci||yt===Us||yt===Ns||yt===za||yt===ka,Ht=Ot.getClearColor(),zt=Ot.getClearAlpha(),Zt=Ht.r,te=Ht.g,jt=Ht.b;Dt?(g[0]=Zt,g[1]=te,g[2]=jt,g[3]=zt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Zt,_[1]=te,_[2]=jt,_[3]=zt,C.clearBufferiv(C.COLOR,0,_))}else at|=C.COLOR_BUFFER_BIT}X&&(at|=C.DEPTH_BUFFER_BIT),it&&(at|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Ot.dispose(),ct.dispose(),Gt.dispose(),ht.dispose(),Wt.dispose(),$t.dispose(),j.dispose(),Lt.dispose(),ie.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",xt),Tt.removeEventListener("sessionend",Ft),Ct.stop()};function Rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=mt.autoReset,X=Nt.enabled,it=Nt.autoUpdate,at=Nt.needsUpdate,q=Nt.type;W(),mt.autoReset=b,Nt.enabled=X,Nt.autoUpdate=it,Nt.needsUpdate=at,Nt.type=q}function Et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const X=b.target;X.removeEventListener("dispose",gt),Vt(X)}function Vt(b){ne(b),ht.remove(b)}function ne(b){const X=ht.get(b).programs;X!==void 0&&(X.forEach(function(it){lt.releaseProgram(it)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,it,at,q,yt){X===null&&(X=st);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,Ht=Pt(b,X,it,at,q);Q.setMaterial(at,Dt);let zt=it.index,Zt=1;if(at.wireframe===!0){if(zt=M.getWireframeAttribute(it),zt===void 0)return;Zt=2}const te=it.drawRange,jt=it.attributes.position;let pe=te.start*Zt,ye=(te.start+te.count)*Zt;yt!==null&&(pe=Math.max(pe,yt.start*Zt),ye=Math.min(ye,(yt.start+yt.count)*Zt)),zt!==null?(pe=Math.max(pe,0),ye=Math.min(ye,zt.count)):jt!=null&&(pe=Math.max(pe,0),ye=Math.min(ye,jt.count));const Ne=ye-pe;if(Ne<0||Ne===1/0)return;Lt.setup(q,at,Ht,it,zt);let Pe,we=It;if(zt!==null&&(Pe=w.get(zt),we=Kt,we.setIndex(Pe)),q.isMesh)at.wireframe===!0?(Q.setLineWidth(at.wireframeLinewidth*St()),we.setMode(C.LINES)):we.setMode(C.TRIANGLES);else if(q.isLine){let Jt=at.linewidth;Jt===void 0&&(Jt=1),Q.setLineWidth(Jt*St()),q.isLineSegments?we.setMode(C.LINES):q.isLineLoop?we.setMode(C.LINE_LOOP):we.setMode(C.LINE_STRIP)}else q.isPoints?we.setMode(C.POINTS):q.isSprite&&we.setMode(C.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,De=q._multiDrawCounts,me=q._multiDrawCount,hn=zt?w.get(zt).bytesPerElement:1,Fi=ht.get(at).currentProgram.getUniforms();for(let fn=0;fn<me;fn++)Fi.setValue(C,"_gl_DrawID",fn),we.render(Jt[fn]/hn,De[fn])}else if(q.isInstancedMesh)we.renderInstances(pe,Ne,q.count);else if(it.isInstancedBufferGeometry){const Jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,De=Math.min(it.instanceCount,Jt);we.renderInstances(pe,Ne,De)}else we.render(pe,Ne)};function Me(b,X,it){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Ce(b,X,it),b.side=ci,b.needsUpdate=!0,Ce(b,X,it),b.side=wn):Ce(b,X,it)}this.compile=function(b,X,it=null){it===null&&(it=b),p=Gt.get(it),p.init(X),v.push(p),it.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),b!==it&&b.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const at=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const yt=q.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const Ht=yt[Dt];Me(Ht,it,q),at.add(Ht)}else Me(yt,it,q),at.add(yt)}),p=v.pop(),at},this.compileAsync=function(b,X,it=null){const at=this.compile(b,X,it);return new Promise(q=>{function yt(){if(at.forEach(function(Dt){ht.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){q(b);return}setTimeout(yt,10)}Z.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let _e=null;function pt(b){_e&&_e(b)}function xt(){Ct.stop()}function Ft(){Ct.start()}const Ct=new pu;Ct.setAnimationLoop(pt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(b){_e=b,Tt.setAnimationLoop(b),b===null?Ct.stop():Ct.start()},Tt.addEventListener("sessionstart",xt),Tt.addEventListener("sessionend",Ft),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,X,N),p=Gt.get(b,v.length),p.init(X),v.push(p),z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ft.setFromProjectionMatrix(z,Fn,X.reversedDepth),I=this.localClippingEnabled,G=vt.init(this.clippingPlanes,I),m=ct.get(b,y.length),m.init(),y.push(m),Tt.enabled===!0&&Tt.isPresenting===!0){const yt=x.xr.getDepthSensingMesh();yt!==null&&At(yt,X,-1/0,x.sortObjects)}At(b,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(V,rt),bt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,bt&&Ot.addToRenderList(m,b),this.info.render.frame++,G===!0&&vt.beginShadows();const it=p.state.shadowsArray;Nt.render(it,b,X),G===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const yt=X.cameras;if(q.length>0)for(let Dt=0,Ht=yt.length;Dt<Ht;Dt++){const zt=yt[Dt];se(at,q,b,zt)}bt&&Ot.render(b);for(let Dt=0,Ht=yt.length;Dt<Ht;Dt++){const zt=yt[Dt];Yt(m,b,zt,zt.viewport)}}else q.length>0&&se(at,q,b,X),bt&&Ot.render(b),Yt(m,b,X);N!==null&&L===0&&(_t.updateMultisampleRenderTarget(N),_t.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(x,b,X),Lt.resetDefaultState(),E=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],G===!0&&vt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function At(b,X,it,at){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ft.intersectsSprite(b)){at&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(z);const Dt=j.update(b),Ht=b.material;Ht.visible&&m.push(b,Dt,Ht,it,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ft.intersectsObject(b))){const Dt=j.update(b),Ht=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),nt.copy(Dt.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(z)),Array.isArray(Ht)){const zt=Dt.groups;for(let Zt=0,te=zt.length;Zt<te;Zt++){const jt=zt[Zt],pe=Ht[jt.materialIndex];pe&&pe.visible&&m.push(b,Dt,pe,it,nt.z,jt)}}else Ht.visible&&m.push(b,Dt,Ht,it,nt.z,null)}}const yt=b.children;for(let Dt=0,Ht=yt.length;Dt<Ht;Dt++)At(yt[Dt],X,it,at)}function Yt(b,X,it,at){const q=b.opaque,yt=b.transmissive,Dt=b.transparent;p.setupLightsView(it),G===!0&&vt.setGlobalState(x.clippingPlanes,it),at&&Q.viewport(F.copy(at)),q.length>0&&re(q,X,it),yt.length>0&&re(yt,X,it),Dt.length>0&&re(Dt,X,it),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function se(b,X,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new Li(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Xs:Bn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const yt=p.state.transmissionRenderTarget[at.id],Dt=at.viewport||F;yt.setSize(Dt.z*x.transmissionResolutionScale,Dt.w*x.transmissionResolutionScale);const Ht=x.getRenderTarget(),zt=x.getActiveCubeFace(),Zt=x.getActiveMipmapLevel();x.setRenderTarget(yt),x.getClearColor(S),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),bt&&Ot.render(it);const te=x.toneMapping;x.toneMapping=li;const jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),G===!0&&vt.setGlobalState(x.clippingPlanes,at),re(b,it,at),_t.updateMultisampleRenderTarget(yt),_t.updateRenderTargetMipmap(yt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let ye=0,Ne=X.length;ye<Ne;ye++){const Pe=X[ye],we=Pe.object,Jt=Pe.geometry,De=Pe.material,me=Pe.group;if(De.side===wn&&we.layers.test(at.layers)){const hn=De.side;De.side=sn,De.needsUpdate=!0,ve(we,it,at,Jt,De,me),De.side=hn,De.needsUpdate=!0,pe=!0}}pe===!0&&(_t.updateMultisampleRenderTarget(yt),_t.updateRenderTargetMipmap(yt))}x.setRenderTarget(Ht,zt,Zt),x.setClearColor(S,P),jt!==void 0&&(at.viewport=jt),x.toneMapping=te}function re(b,X,it){const at=X.isScene===!0?X.overrideMaterial:null;for(let q=0,yt=b.length;q<yt;q++){const Dt=b[q],Ht=Dt.object,zt=Dt.geometry,Zt=Dt.group;let te=Dt.material;te.allowOverride===!0&&at!==null&&(te=at),Ht.layers.test(it.layers)&&ve(Ht,X,it,zt,te,Zt)}}function ve(b,X,it,at,q,yt){b.onBeforeRender(x,X,it,at,q,yt),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(x,X,it,at,b,yt),q.transparent===!0&&q.side===wn&&q.forceSinglePass===!1?(q.side=sn,q.needsUpdate=!0,x.renderBufferDirect(it,X,at,q,b,yt),q.side=ci,q.needsUpdate=!0,x.renderBufferDirect(it,X,at,q,b,yt),q.side=wn):x.renderBufferDirect(it,X,at,q,b,yt),b.onAfterRender(x,X,it,at,q,yt)}function Ce(b,X,it){X.isScene!==!0&&(X=st);const at=ht.get(b),q=p.state.lights,yt=p.state.shadowsArray,Dt=q.state.version,Ht=lt.getParameters(b,q.state,yt,X,it),zt=lt.getProgramCacheKey(Ht);let Zt=at.programs;at.environment=b.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(b.isMeshStandardMaterial?$t:Wt).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",gt),Zt=new Map,at.programs=Zt);let te=Zt.get(zt);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===Dt)return dt(b,Ht),te}else Ht.uniforms=lt.getUniforms(b),b.onBeforeCompile(Ht,x),te=lt.acquireProgram(Ht,zt),Zt.set(zt,te),at.uniforms=Ht.uniforms;const jt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(jt.clippingPlanes=vt.uniform),dt(b,Ht),at.needsLights=ee(b),at.lightsStateVersion=Dt,at.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),at.currentProgram=te,at.uniformsList=null,te}function Ae(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function dt(b,X){const it=ht.get(b);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function Pt(b,X,it,at,q){X.isScene!==!0&&(X=st),_t.resetTextureUnits();const yt=X.fog,Dt=at.isMeshStandardMaterial?X.environment:null,Ht=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:us,zt=(at.isMeshStandardMaterial?$t:Wt).get(at.envMap||Dt),Zt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),jt=!!it.morphAttributes.position,pe=!!it.morphAttributes.normal,ye=!!it.morphAttributes.color;let Ne=li;at.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ne=x.toneMapping);const Pe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,we=Pe!==void 0?Pe.length:0,Jt=ht.get(at),De=p.state.lights;if(G===!0&&(I===!0||b!==T)){const tn=b===T&&at.id===E;vt.setState(at,b,tn)}let me=!1;at.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==De.state.version||Jt.outputColorSpace!==Ht||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==zt||at.fog===!0&&Jt.fog!==yt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==vt.numPlanes||Jt.numIntersection!==vt.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==te||Jt.morphTargets!==jt||Jt.morphNormals!==pe||Jt.morphColors!==ye||Jt.toneMapping!==Ne||Jt.morphTargetsCount!==we)&&(me=!0):(me=!0,Jt.__version=at.version);let hn=Jt.currentProgram;me===!0&&(hn=Ce(at,X,q));let Fi=!1,fn=!1,_s=!1;const Ie=hn.getUniforms(),vn=Jt.uniforms;if(Q.useProgram(hn.program)&&(Fi=!0,fn=!0,_s=!0),at.id!==E&&(E=at.id,fn=!0),Fi||T!==b){Q.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ie.setValue(C,"projectionMatrix",b.projectionMatrix),Ie.setValue(C,"viewMatrix",b.matrixWorldInverse);const on=Ie.map.cameraPosition;on!==void 0&&on.setValue(C,et.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&Ie.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,fn=!0,_s=!0)}if(q.isSkinnedMesh){Ie.setOptional(C,q,"bindMatrix"),Ie.setOptional(C,q,"bindMatrixInverse");const tn=q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ie.setValue(C,"boneTexture",tn.boneTexture,_t))}q.isBatchedMesh&&(Ie.setOptional(C,q,"batchingTexture"),Ie.setValue(C,"batchingTexture",q._matricesTexture,_t),Ie.setOptional(C,q,"batchingIdTexture"),Ie.setValue(C,"batchingIdTexture",q._indirectTexture,_t),Ie.setOptional(C,q,"batchingColorTexture"),q._colorsTexture!==null&&Ie.setValue(C,"batchingColorTexture",q._colorsTexture,_t));const Mn=it.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Mt.update(q,it,hn),(fn||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Ie.setValue(C,"receiveShadow",q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(vn.envMap.value=zt,vn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),fn&&(Ie.setValue(C,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&Qt(vn,_s),yt&&at.fog===!0&&Y.refreshFogUniforms(vn,yt),Y.refreshMaterialUniforms(vn,at,B,D,p.state.transmissionRenderTarget[b.id]),Rr.upload(C,Ae(Jt),vn,_t)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Rr.upload(C,Ae(Jt),vn,_t),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(C,"center",q.center),Ie.setValue(C,"modelViewMatrix",q.modelViewMatrix),Ie.setValue(C,"normalMatrix",q.normalMatrix),Ie.setValue(C,"modelMatrix",q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const tn=at.uniformsGroups;for(let on=0,qr=tn.length;on<qr;on++){const hi=tn[on];ie.update(hi,hn),ie.bind(hi,hn)}}return hn}function Qt(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function ee(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,X,it){const at=ht.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ht.get(b.texture).__webglTexture=X,ht.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const it=ht.get(b);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0};const de=C.createFramebuffer();this.setRenderTarget=function(b,X=0,it=0){N=b,R=X,L=it;let at=!0,q=null,yt=!1,Dt=!1;if(b){const zt=ht.get(b);if(zt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(C.FRAMEBUFFER,null),at=!1;else if(zt.__webglFramebuffer===void 0)_t.setupRenderTarget(b);else if(zt.__hasExternalTextures)_t.rebindTextures(b,ht.get(b.texture).__webglTexture,ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const jt=b.depthTexture;if(zt.__boundDepthTexture!==jt){if(jt!==null&&ht.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Dt=!0);const te=ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[X])?q=te[X][it]:q=te[X],yt=!0):b.samples>0&&_t.useMultisampledRTT(b)===!1?q=ht.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[it]:q=te,F.copy(b.viewport),k.copy(b.scissor),H=b.scissorTest}else F.copy($).multiplyScalar(B).floor(),k.copy(K).multiplyScalar(B).floor(),H=ot;if(it!==0&&(q=de),Q.bindFramebuffer(C.FRAMEBUFFER,q)&&at&&Q.drawBuffers(b,q),Q.viewport(F),Q.scissor(k),Q.setScissorTest(H),yt){const zt=ht.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,zt.__webglTexture,it)}else if(Dt){const zt=X;for(let Zt=0;Zt<b.textures.length;Zt++){const te=ht.get(b.textures[Zt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Zt,te.__webglTexture,it,zt)}}else if(b!==null&&it!==0){const zt=ht.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,zt.__webglTexture,it)}E=-1},this.readRenderTargetPixels=function(b,X,it,at,q,yt,Dt,Ht=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){Q.bindFramebuffer(C.FRAMEBUFFER,zt);try{const Zt=b.textures[Ht],te=Zt.format,jt=Zt.type;if(!J.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-at&&it>=0&&it<=b.height-q&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ht),C.readPixels(X,it,at,q,Xt.convert(te),Xt.convert(jt),yt))}finally{const Zt=N!==null?ht.get(N).__webglFramebuffer:null;Q.bindFramebuffer(C.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,X,it,at,q,yt,Dt,Ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt)if(X>=0&&X<=b.width-at&&it>=0&&it<=b.height-q){Q.bindFramebuffer(C.FRAMEBUFFER,zt);const Zt=b.textures[Ht],te=Zt.format,jt=Zt.type;if(!J.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,pe),C.bufferData(C.PIXEL_PACK_BUFFER,yt.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ht),C.readPixels(X,it,at,q,Xt.convert(te),Xt.convert(jt),0);const ye=N!==null?ht.get(N).__webglFramebuffer:null;Q.bindFramebuffer(C.FRAMEBUFFER,ye);const Ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Uh(C,Ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,pe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,yt),C.deleteBuffer(pe),C.deleteSync(Ne),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,it=0){const at=Math.pow(2,-it),q=Math.floor(b.image.width*at),yt=Math.floor(b.image.height*at),Dt=X!==null?X.x:0,Ht=X!==null?X.y:0;_t.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,it,0,0,Dt,Ht,q,yt),Q.unbindTexture()};const Le=C.createFramebuffer(),Be=C.createFramebuffer();this.copyTextureToTexture=function(b,X,it=null,at=null,q=0,yt=null){yt===null&&(q!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=q,q=0):yt=0);let Dt,Ht,zt,Zt,te,jt,pe,ye,Ne;const Pe=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(it!==null)Dt=it.max.x-it.min.x,Ht=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,Zt=it.min.x,te=it.min.y,jt=it.isBox3?it.min.z:0;else{const Mn=Math.pow(2,-q);Dt=Math.floor(Pe.width*Mn),Ht=Math.floor(Pe.height*Mn),b.isDataArrayTexture?zt=Pe.depth:b.isData3DTexture?zt=Math.floor(Pe.depth*Mn):zt=1,Zt=0,te=0,jt=0}at!==null?(pe=at.x,ye=at.y,Ne=at.z):(pe=0,ye=0,Ne=0);const we=Xt.convert(X.format),Jt=Xt.convert(X.type);let De;X.isData3DTexture?(_t.setTexture3D(X,0),De=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(_t.setTexture2DArray(X,0),De=C.TEXTURE_2D_ARRAY):(_t.setTexture2D(X,0),De=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);const me=C.getParameter(C.UNPACK_ROW_LENGTH),hn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fi=C.getParameter(C.UNPACK_SKIP_PIXELS),fn=C.getParameter(C.UNPACK_SKIP_ROWS),_s=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,jt);const Ie=b.isDataArrayTexture||b.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const Mn=ht.get(b),tn=ht.get(X),on=ht.get(Mn.__renderTarget),qr=ht.get(tn.__renderTarget);Q.bindFramebuffer(C.READ_FRAMEBUFFER,on.__webglFramebuffer),Q.bindFramebuffer(C.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let hi=0;hi<zt;hi++)Ie&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ht.get(b).__webglTexture,q,jt+hi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ht.get(X).__webglTexture,yt,Ne+hi)),C.blitFramebuffer(Zt,te,Dt,Ht,pe,ye,Dt,Ht,C.DEPTH_BUFFER_BIT,C.NEAREST);Q.bindFramebuffer(C.READ_FRAMEBUFFER,null),Q.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||ht.has(b)){const Mn=ht.get(b),tn=ht.get(X);Q.bindFramebuffer(C.READ_FRAMEBUFFER,Le),Q.bindFramebuffer(C.DRAW_FRAMEBUFFER,Be);for(let on=0;on<zt;on++)Ie?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mn.__webglTexture,q,jt+on):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mn.__webglTexture,q),vn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,tn.__webglTexture,yt,Ne+on):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,tn.__webglTexture,yt),q!==0?C.blitFramebuffer(Zt,te,Dt,Ht,pe,ye,Dt,Ht,C.COLOR_BUFFER_BIT,C.NEAREST):vn?C.copyTexSubImage3D(De,yt,pe,ye,Ne+on,Zt,te,Dt,Ht):C.copyTexSubImage2D(De,yt,pe,ye,Zt,te,Dt,Ht);Q.bindFramebuffer(C.READ_FRAMEBUFFER,null),Q.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else vn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(De,yt,pe,ye,Ne,Dt,Ht,zt,we,Jt,Pe.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(De,yt,pe,ye,Ne,Dt,Ht,zt,we,Pe.data):C.texSubImage3D(De,yt,pe,ye,Ne,Dt,Ht,zt,we,Jt,Pe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,yt,pe,ye,Dt,Ht,we,Jt,Pe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,yt,pe,ye,Pe.width,Pe.height,we,Pe.data):C.texSubImage2D(C.TEXTURE_2D,yt,pe,ye,Dt,Ht,we,Jt,Pe);C.pixelStorei(C.UNPACK_ROW_LENGTH,me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,hn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fi),C.pixelStorei(C.UNPACK_SKIP_ROWS,fn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_s),yt===0&&X.generateMipmaps&&C.generateMipmap(De),Q.unbindTexture()},this.initRenderTarget=function(b){ht.get(b).__webglFramebuffer===void 0&&_t.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_t.setTextureCube(b,0):b.isData3DTexture?_t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_t.setTexture2DArray(b,0):_t.setTexture2D(b,0),Q.unbindTexture()},this.resetState=function(){R=0,L=0,N=null,Q.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}const bc={type:"change"},sl={type:"start"},vu={type:"end"},Mr=new kr,Tc=new qn,Og=Math.cos(70*Xe.DEG2RAD),Ge=new U,an=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lo=1e-6;class Bg extends Qf{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Pi,this._lastTargetPosition=new U,this._quat=new Pi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jl,this._sphericalDelta=new Jl,this._scale=1,this._panOffset=new U,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new U,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kg.bind(this),this._onPointerDown=zg.bind(this),this._onPointerUp=Hg.bind(this),this._onContextMenu=$g.bind(this),this._onMouseWheel=Wg.bind(this),this._onKeyDown=Xg.bind(this),this._onTouchStart=Yg.bind(this),this._onTouchMove=qg.bind(this),this._onMouseDown=Gg.bind(this),this._onMouseMove=Vg.bind(this),this._interceptControlDown=jg.bind(this),this._interceptControlUp=Zg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bc),this.update(),this.state=Ee.NONE}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ge.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mr.origin.copy(this.object.position),Mr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mr.direction))<Og?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mr.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lo||this._lastTargetPosition.distanceToSquared(this.target)>Lo?(this.dispatchEvent(bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function kg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vu),this.state=Ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ee.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(sl)}function Vg(i){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(i.preventDefault(),this.dispatchEvent(sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vu))}function Xg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ee.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ee.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(sl)}function qg(i){switch(this._trackPointer(i),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ee.NONE}}function $g(i){this.enabled!==!1&&i.preventDefault()}function jg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wi(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Te;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Ac(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Ac(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ac(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new cn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Kg(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){const x=a[y],A=i.attributes[x];c[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const R=i.morphAttributes[x];R&&(l[x]||(l[x]=[]),R.forEach((L,N)=>{const E=new L.array.constructor(L.count*L.itemSize);l[x][N]=new L.constructor(E,L.itemSize,L.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){const v=n?n.getX(y):y;let x="";for(let A=0,R=a.length;A<R;A++){const L=a[A],N=i.getAttribute(L),E=N.itemSize;for(let T=0;T<E;T++)x+=`${~~(N[u[T]](v)*_+m)},`}if(x in e)h.push(e[x]);else{for(let A=0,R=a.length;A<R;A++){const L=a[A],N=i.getAttribute(L),E=i.morphAttributes[L],T=N.itemSize,F=c[L],k=l[L];for(let H=0;H<T;H++){const S=u[H],P=d[H];if(F[P](o,N[S](v)),E)for(let O=0,D=E.length;O<D;O++)k[O][P](o,E[O][S](v))}}e[x]=o,h.push(o),o++}}const p=i.clone();for(const y in i.attributes){const v=c[y];if(p.setAttribute(y,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in l)for(let x=0;x<l[y].length;x++){const A=l[y][x];p.morphAttributes[y][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}class Jg extends Qc{constructor(){super();const t=new Ve;t.deleteAttribute("uv");const e=new Ca({side:sn}),n=new Ca,s=new $f(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Aa(t,n,6),a=new Oe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new Fe(t,Ji(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Fe(t,Ji(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Fe(t,Ji(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Fe(t,Ji(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Fe(t,Ji(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Fe(t,Ji(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ji(i){return new Gf({color:0,emissive:16777215,emissiveIntensity:i})}function Or(i,t,e,n=.7){const s=[],r=[];for(let u=0;u<2;u++)for(let d=0;d<=12;d++)for(let f=0;f<=18;f++){const g=d/12,_=(1-Math.cos(Math.PI*f/18))/2,m=e*(1-.24*g),p=Math.sign(n)*.48+n*(.55-g),y=m*.11*Math.sin(Math.PI*_),v=5*m*(.13-.045*g)*(.2969*Math.sqrt(_)-.126*_-.3516*_*_+.2843*_*_*_-.1036*_*_*_*_),x=(_-.43)*m,A=y+(u?-1:1)*v;s.push(x*Math.cos(p)-A*Math.sin(p)+e*.22*g*g,i+(t-i)*g,x*Math.sin(p)+A*Math.cos(p))}const c=19,l=13*c;for(let u=0;u<2;u++)for(let d=0;d<12;d++)for(let f=0;f<18;f++){const g=u*l+d*c+f,_=g+c;u?r.push(g,g+1,_,_,g+1,_+1):r.push(g,_,g+1,_,_+1,g+1)}for(const u of[0,12])for(let d=0;d<18;d++){const f=u*c+d;u?r.push(f,f+1,f+l,f+1,f+l+1,f+l):r.push(f,f+l,f+1,f+1,f+l,f+l+1)}const h=new Te;return h.setAttribute("position",new fe(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function jn(i,t,e,n,s=.009,r=Math.PI/6){const o=r*e,a=t-i,c=new tl;c.moveTo(0,0),c.lineTo(a,0),c.lineTo(a,o),c.lineTo(0,o),c.closePath();for(const[u,d,f]of[[.16,3,.018],[.4,2,.034],[.68,2,.042],[.86,3,.014]])for(let g=0;g<d;g++){const _=new Fr,m=f*Math.min(1,e/.6);_.absellipse(a*u,o*(g+.5)/d,m,m,0,Math.PI*2,!0),c.holes.push(_)}const l=new Vr(c,{depth:s,bevelEnabled:!1,curveSegments:8,steps:1}),h=l.attributes.position;for(let u=0;u<h.count;u++){const d=h.getX(u),f=h.getY(u)/e,g=e+(n-e)*d/a+h.getZ(u);h.setXYZ(u,i+d,g*Math.cos(f),g*Math.sin(f))}return l.computeVertexNormals(),l}const rl=[-5,-3.5,-1.4,-.15,.35,.85,1.4,3.75,4.89],Qe=[-5,-3,-1.94,-1.1,-.72,-.25,.35,2.45,4.89];function Mu(i,t,e){let n=t.findIndex((s,r)=>r<t.length-1&&i>=s&&i<t[r+1]);return n<0&&(n=i<t[0]?0:t.length-2),e[n]+(i-t[n])/(t[n+1]-t[n])*(e[n+1]-e[n])}const Qg=i=>Mu(i,rl,Qe),yu=i=>Mu(i,Qe,rl),Su=[{name:"低压压气机",tag:"LPC · 4 STAGES",short:"低压压气机",desc:"四级轴流低压压气机。与后方低压涡轮通过内侧长轴连接；级间静子固定，转子叶排随轴转动。叶片数、扭转和轴向尺寸为可视化重建。"},{name:"高压压气机",tag:"HPC · 9 STAGES",short:"高压压气机",desc:"九级轴流高压压气机，由高压涡轮通过外侧同心轴驱动。逐级压缩使核心气流升温；外涵气流从这一段外侧绕过核心机。"},{name:"环形燃烧室",tag:"ANNULAR COMBUSTOR",short:"主燃烧室",desc:"内外火焰筒形成连续环形燃烧空间。图中喷油位置、稀释孔和火焰形态为示意；核心气流在这里获得热量，外涵空气仍沿外围通过。"},{name:"高压涡轮",tag:"HPT · 1 STAGE",short:"高压涡轮",desc:"一级高压涡轮，先经过固定导向叶片，再经过转子叶片。提取燃气能量以驱动九级高压压气机；叶片冷却孔道未作真实几何复原。"},{name:"低压涡轮",tag:"LPT · 1 STAGE",short:"低压涡轮",desc:"一级低压涡轮，与四级低压压气机同轴联动。高低压转子独立转动；动画转速经大幅降低，以便观察叶排。"},{name:"混合段",tag:"CORE / BYPASS MIXER",short:"混合段",desc:"涡轮之后，核心热气流与外涵空气混合，再进入共同的加力燃烧室。混合器瓣形及混合长度仅作构型表达。"},{name:"加力燃烧室",tag:"AFTERBURNER",short:"加力燃烧室",desc:"共同加力燃烧室位于混合段之后。开启加力后再次加热气流；关闭加力时仍有主燃烧、转子运转和尾喷气流。稳定器与喷油环为简化几何。"},{name:"可调收扩喷管",tag:"VARIABLE C–D NOZZLE",short:"收扩喷管",desc:"基础型 AL-31F 使用可调面积超声速喷管。这里展示收敛段、喉部和扩张段，随加力开关调整开度。基础型不添加 AL-31FP 的推力矢量偏转。"}];function Eu(i=85,t=!0){const e=Math.max(0,Math.min(1,(i-30)/70));return[288,360+90*e,580+180*e,1100+550*e,900+400*e,780+280*e,630+220*e,t?1500+600*e:620+220*e,t?1150+450*e:490+170*e]}function t_(i,t,e,n,s){const r=s||Eu(e,n);if(t&&i>Qe[1]&&i<Qe[5])return r[1]+22*(i-Qe[1])/(Qe[5]-Qe[1]);let o=Qe.findIndex((l,h)=>h<Qe.length-1&&i>=l&&i<Qe[h+1]);if(o<0)return i<-5?r[0]:r[8];const a=(i-Qe[o])/(Qe[o+1]-Qe[o]),c=t&&o===5?r[1]+22:r[o];return c+(r[o+1]-c)*a}function e_(i,t=!1,e=!0){if(i=yu(i),i<-3.5)return[.28+.075*(i+5),.85-.05*(i+5)/1.5];if(t&&i<1.15)return[.79,.88];if(t&&i<1.4){const s=(i-1.15)/.25;return[.79*(1-s)+.24*s,.88*(1-s)+.8*s]}if(i<-1.4){const s=(i+3.5)/2.1;return[.38+.11*s,.72-.11*s]}if(i<-.15)return[.37,.67];if(i<.85)return[.37,.64];if(i<1.4)return[.38-.055*(i-.85)/.55,.8];if(i<2.5)return[.325*(2.5-i)/1.1+.035,.79];if(i<3.75)return[.035,.79];const n=e?.6:.43;return i<4.37?[.02,.79+(n-.79)*(i-3.75)/.62]:i<4.89?[.02,n+(.69-n)*(i-4.37)/.52]:[0,.66+(i-4.89)*.14]}const n_=Object.freeze(Object.defineProperty({__proto__:null,boundaries:Qe,constructionBounds:rl,fromLayout:yu,parts:Su,passage:e_,stationTemperatures:Eu,temperatureAt:t_,toLayout:Qg},Symbol.toStringTag,{value:"Module"})),Cs={cfm56:{fanDiameterM:1.5494,fanRadius:2.65,bounds:[[-5,-2.8],[-3.3,-1.2],[-1.2,.65],[.65,1.55],[1.55,2.02],[2.02,3.8],[-2.8,2.2],[3.8,4.89]],fan:{count:24,x:-4,hub:.8,chord:.95,statorX:-2.95,splitter:1.42,spinner:[[-5,.005],[-4.82,.24],[-4.42,.6],[-4,.79],[-3.3,.74]]},stages:{1:{hub:[.74,.68],tip:[1.37,1.15],activeFraction:.65},2:{hub:[.68,.64],tip:[1.13,.82]},4:{hub:[.68,.69],tip:[1.13,1.27]},5:{hub:[.69,.85],tip:[1.27,1.72]}},combustor:{inner:.62,outer:1.12,caseRadius:1.27},bypass:{outer:[[-2.8,2.69],[-1.7,2.65],[0,2.49],[1.2,2.29],[2.2,2.09]],inner:[[-2.8,1.47],[-1.2,1.48],[.65,1.5],[2.2,1.6]]},exhaust:{outer:[[3.8,1.79],[4.01,1.72],[4.38,1.5],[4.89,1.22]],plug:[[3.8,.85],[4.05,.72],[4.5,.38],[4.89,.008]]},caseColor:10987925},ge90:{fanDiameterM:3.2512,fanRadius:3.05,bounds:[[-5,-2.65],[-3.35,-1.5],[-1.5,.47],[.47,1.23],[1.23,1.99],[1.99,3.85],[-2.65,2.1],[3.85,4.89]],fan:{count:22,x:-4,hub:.82,chord:1.1,statorX:-2.83,splitter:1.36,spinner:[[-5.4,.005],[-5.18,.19],[-4.51,.55],[-4.03,.8],[-3.35,.72]]},stages:{1:{hub:[.72,.7],tip:[1.32,1.08],activeFraction:.77},2:{hub:[.7,.72],tip:[1.06,.92]},4:{hub:[.59,.6],tip:[.96,1.1]},5:{hub:[.6,.91],tip:[1.1,1.91]}},combustor:{inner:.51,outer:1.04,caseRadius:1.18},bypass:{outer:[[-2.65,3.1],[-1.8,3.08],[-.3,2.9],[1.15,2.58],[2.1,2.39]],inner:[[-2.65,1.41],[-1.5,1.44],[.47,1.44],[2.1,1.47]]},exhaust:{outer:[[3.85,1.98],[4.02,1.92],[4.42,1.64],[4.89,1.38]],plug:[[3.85,.91],[4.04,.79],[4.51,.43],[4.89,.008]]},caseColor:8687975}};function oi(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>o+(s[a+1]-o)*r)}return i.at(-1).slice(1)}function i_(i){const{fan:t,bounds:e,stages:n,combustor:s,exhaust:r}=i,o=[[-5.5,.01,t.splitter],[t.x,t.hub+.03,t.splitter]];for(const l of[1,2]){const[h,u]=e[l],d=n[l];o.push([h,d.hub[0]+.025,d.tip[0]-.025],[h+(u-h)*(d.activeFraction||1)-.035,d.hub[1]+.025,d.tip[1]-.025]),d.activeFraction&&o.push([u-.035,d.hub[1]+.025,d.tip[1]-.025])}const[a,c]=e[3];o.push([a+.1,s.inner+.035,s.outer-.035],[c-.1,s.inner+.035,s.outer-.035]);for(const l of[4,5]){const[h,u]=e[l],d=n[l];o.push([h,d.hub[0]+.025,d.tip[0]-.025],[u-.025,d.hub[1]+.025,d.tip[1]-.025])}for(const[l,h]of r.outer)o.push([l,oi(r.plug,l)[0]+.025,h-.045]);return o.push([6.1,0,r.outer.at(-1)[1]+.15]),o}const Ri={rb211:{fanRadius:2.3,bounds:[[-5,-3.75],[-3.75,-1.6],[-1.6,.15],[.15,1.05],[1.05,1.48],[1.48,1.95],[1.95,3.3],[-3.75,3.45],[3.3,3.95],[3.95,4.89]],core:[[-5.3,.15,1.23],[-4.3,.66,1.23],[-3.75,.48,1.28],[-1.6,.54,1],[.15,.57,.78],[.35,.48,.88],[.95,.48,.88],[1.05,.43,.78],[1.48,.43,.82],[1.5,.43,.84],[1.95,.43,.9],[2,.43,.92],[3.3,.5,1.21],[3.95,.38,1.47],[4.34,.23,1.34],[4.89,.02,1.06],[6.1,.02,1.26]],bypass:[[-5.3,1.46,2.23],[-3.75,1.46,2.27],[-2.2,1.25,2.18],[-1.6,1.17,2.13],[.1,1.18,1.98],[1.15,1.12,1.9],[1.6,1.08,1.82],[3.3,1.37,1.55],[3.45,1.25,1.52],[3.95,.38,1.47],[4.34,.23,1.34],[4.89,.02,1.06],[6.1,.02,1.26]],stationX:[-5,-3.75,-1.6,.15,1.05,1.48,1.95,3.3,3.95,4.89]},pt6a:{fanRadius:.72,propellerRadius:2.55,bounds:[[-5.15,-4.75],[-4.7,-3.2],[-2.7,-1.55],[-1.2,-.45],[-.25,1.3],[1.35,1.95],[1.95,3.45],[3.5,4.5],[-3.35,-2.65]],flow:[[0,4.65,.36,.7],[.1,3.45,.29,.66],[.28,1.95,.38,.61],[.36,1.65,.4,.65],[.43,1.53,.96,1.04],[.48,1.64,1.1,1.22],[.53,2.05,1.11,1.23],[.57,1.4,1.1,1.22],[.61,1.26,.82,1.04],[.66,.4,.73,.95],[.69,-.15,.72,.93],[.73,-.45,.32,.64],[.78,-1.2,.32,.65],[.85,-2.7,.32,.65]],stationProgress:[0,.28,.43,.73,.78,.85,1],stationX:[4.65,1.95,1.53,-.45,-1.2,-2.7,-4.35]},pegasus:{fanRadius:1.65,bounds:[[-5,-2.5],[-2.5,-.25],[-.25,.65],[.65,1.42],[1.42,2.4],[-2.3,-1.3],[2.45,3.4]],core:[[-5.2,.23,1.5],[-4.65,.49,1.5],[-2.7,.59,1.48],[-2.5,.59,.93],[-.25,.52,.72],[.05,.41,.8],[.57,.41,.8],[.65,.38,.71],[1.42,.38,.77],[1.46,.39,.78],[2.4,.39,.91],[2.8,.3,.99]],bypass:[[-5.2,.98,1.5],[-2.5,.99,1.35],[-1.8,1.05,1.32]],stationX:[-5,-2.5,-.25,.65,1.42,2.4,3.45],stationProgress:[0,.25,.47,.56,.64,.73,1]}};function ii(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>o+(s[a+1]-o)*r)}return i.at(-1).slice(1)}function bu(i,t=1,e=0){t=t<0?-1:1;const n=Math.max(0,Math.min(90,Number(e)||0))*Math.PI/180,s=Math.cos(n),r=Math.sin(n),o=[i?-1.8:2.8,0,t*(i?1.7:1.3)],a=[[0,0,0],[.03,0,t*.3],[.28,0,t*.57],[.65,0,t*.7]].map(([c,l,h])=>[o[0]+c*s+l*r,-c*r+l*s,o[2]+h]);return{pivot:o,exit:a.at(-1),direction:[s,-r,0],points:a,radius:i?.36:.33}}const le={rb:["EASA E.061 第 6–7 页：RB211-535 构型、级数与共同喷口","https://www.easa.europa.eu/en/downloads/7699/en#page=6"],rr:["Rolls-Royce：RB211-535E4 与 Boeing 757","https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/rb211-535e4.aspx"],pt:["NTSB ENG11IA032 第 3 页：PT6A-27 纵剖与轴系","https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=pdf&FileName=ENG11IA032-fac-j-Rel.pdf&ID=9986803#page=3"],tc:["FAA E4EA 型号合格证：PT6A-27 级数","https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=.PDF&FileName=Excerpts+from+Engine+Type+Certificate+Data+Sheet-Master.PDF&ID=40335459#page=1"],pw:["Pratt & Whitney：PT6A 回流式与自由动力涡轮","https://www.prattwhitney.com/products/general-aviation-engines/pt6a"],nasa:["NASA TM-82770 第 4 页与图 1：Pegasus 11 轴系、级数和四喷口","https://ntrs.nasa.gov/api/citations/19820005271/downloads/19820005271.pdf#page=4"],peg:["Rolls-Royce：Pegasus 11-61 型号说明","https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/pegasus.aspx"],museum:["Science Museum 第 118 页：Pegasus 实物与压气机级数","https://www.sciencemuseum.org.uk/sites/default/files/2025-11/Flight-Large%20Print%20Book%202%20of%203-DIGITAL.pdf#page=118"]},s_="轴向位置、半径、叶型、叶片数及安装细节是教学重建，不能作为制造尺寸。";function Re(i,t,e,n,s,r,o=0,a=null,c=0,l=[],h=[]){return{id:i,name:t,short:t,tag:e,kind:n,bounds:s,desc:r,stages:o,spool:a,spin:c,evidence:{facts:l,approximation:s_,sources:h}}}const Dn=Ri.rb211.bounds,Xn=Ri.pt6a.bounds,xi=Ri.pegasus.bounds,r_=[{id:"rb211",name:"RB211-535E4",variant:"RB211-535E4-37",classic:!0,subtitle:"三转子 · 高涵道比涡扇 · 混合排气",family:"THREE-SPOOL TURBOFAN",summary:"1 + 6 + 6 级压缩系统 · 三根独立同心轴 · 共同喷口",facts:["1 + 6 + 6 级压缩系统","三转子","1 + 1 + 3 级涡轮"],spools:3,afterburner:!1,hasBypass:!0,exhaustType:"mixed",fanRadius:2.3,classicLayout:Ri.rb211,parts:[Re("fan","低压风扇","LP FAN · 1 STAGE","fan",Dn[0],"单级风扇与三级低压涡轮由最长的内轴连接。叶片数与宽弦轮廓为教学近似。",1,"lp",1,["单级低压风扇；由三级低压涡轮驱动。"],[le.rb]),Re("ipc","中压压气机","IPC · 6 STAGES","compressor",Dn[1],"六级中压压气机由独立的中压涡轮驱动，形成第三套轴系。不能按双转子风扇增压级处理。",6,"ip",1.2,["六级中压压气机；与一级中压涡轮同轴。"],[le.rb]),Re("hpc","高压压气机","HPC · 6 STAGES","compressor",Dn[2],"六级高压压气机和一级高压涡轮共用最外层的短轴。三套转子可以以不同速度运行。",6,"hp",1.45,["六级高压压气机；与一级高压涡轮同轴。"],[le.rb]),Re("combustor","环形燃烧室","ANNULAR COMBUSTOR","combustor",Dn[3],"环形燃烧室提高核心气流总温。火焰、喷嘴和衬筒孔排列为教学重建。",0,null,0,["单环形燃烧室。"],[le.rb]),Re("hpt","高压涡轮","HPT · 1 STAGE","hpt",Dn[4],"一级高压涡轮驱动高压压气机；高压系统以同一颜色关联。",1,"hp",1.45,["一级高压涡轮。"],[le.rb]),Re("ipt","中压涡轮","IPT · 1 STAGE","ipt",Dn[5],"一级中压涡轮位于高压与低压涡轮之间，单独驱动六级中压压气机。",1,"ip",1.2,["一级中压涡轮。"],[le.rb]),Re("lpt","低压涡轮","LPT · 3 STAGES","lpt",Dn[6],"三级低压涡轮驱动单级风扇，独立于中压和高压系统。",3,"lp",1,["三级低压涡轮。"],[le.rb]),Re("bypass","外涵通道","BYPASS TO MIXER","bypass",Dn[7],"外涵冷流沿核心机外围到达后方混合区，再由共同喷口排出。粒子数量比例不表示真实涵道比。",0,null,0,["EASA 给出 -535E4 名义涵道比 4.40；后方采用共同喷口。"],[le.rb]),Re("mixer","内外涵混合区","COMMON EXHAUST MIXING","mixer",Dn[8],"这里将冷、热两股流路汇合。花瓣轮廓只表示混合器功能；总温按等比热、给定质量比的能量混合近似。",0,null,0,["共同喷口由 EASA 型号数据单支持。"],[le.rb]),Re("exhaust","共同排气喷口","COMMON NOZZLE · NO REHEAT","exhaust",Dn[9],"混合气流经共同喷口排出，无加力燃烧。绝热喷口内总温保持不变，未求解静温和速度场。",0,null,0,["EASA 长度定义为整流锥前端至共同喷口后缘。"],[le.rb])],sources:[le.rb,le.rr],evidence:"采用 -535E4-37。EASA 约束三转子、1/6/6 压缩级数、1/1/3 涡轮级数与共同喷口；叶片数、叶型、混合器花瓣和内部比例为教学重建。不同发动机整机长度口径不统一，模型各自适配窗口。"},{id:"pt6a",name:"PT6A-27",classic:!0,subtitle:"回流式涡桨 · 自由动力涡轮 · 减速传动",family:"REVERSE-FLOW TURBOPROP",summary:"3 级轴流 + 1 级离心压气机 · 独立动力涡轮 · 两级减速齿轮",facts:["3 轴流 + 1 离心","自由动力涡轮","两级减速齿轮"],spools:2,afterburner:!1,hasBypass:!1,exhaustType:"side",fanRadius:.72,classicLayout:Ri.pt6a,parts:[Re("propeller","螺旋桨（安装示意）","PROPELLER · ILLUSTRATIVE","propeller",Xn[0],"动力涡轮经减速齿轮驱动螺旋桨。螺旋桨采用独立的 8 倍视觉加速，不与内部减速比同步。这里的四叶桨仅作安装示意；桨型和叶片数由飞机安装方案决定。",0,"prop",.8/9,["发动机通过齿轮箱驱动可变距恒速螺旋桨。"],[le.pt]),Re("gearbox","两级减速齿轮箱","2-STAGE REDUCTION","gearbox",Xn[1],"将自由动力涡轮转速降低后传给桨轴。模型每级按 3:1、总计 9:1 联动；齿数、齿形和 9:1 减速比为演示假设，不是真机参数。",0,"power",.8,["PT6A-27 使用两级减速齿轮箱；厂家实际齿数与传动比未在此复原。"],[le.pt]),Re("power","自由动力涡轮","FREE POWER TURBINE · 1 STAGE","power",Xn[2],"一级自由动力涡轮与燃气发生器机械上独立；燃气把能量传给它，再经减速机构输出轴功。",1,"power",.8,["一级自由动力涡轮；与燃气发生器分轴。"],[le.pt,le.tc]),Re("gas-turbine","燃气发生器涡轮","GAS-GENERATOR TURBINE · 1","hpt",Xn[3],"一级涡轮驱动后三个轴流级及一个离心级。热气流在这里朝螺旋桨方向流动。",1,"hp",1.45,["一级燃气发生器涡轮驱动四级压气机。"],[le.pt,le.tc]),Re("combustor","回流式环形燃烧室","REVERSE-FLOW ANNULAR","combustor",Xn[4],"压缩空气从离心叶轮外缘进入外部通道，绕至头部后折返燃烧，再向前进入涡轮。示踪流线明确显示该转弯。",0,null,0,["PT6A-27 采用回流式环形燃烧室。"],[le.pt]),Re("centrifugal","离心压气机","CENTRIFUGAL · 1 STAGE","centrifugal",Xn[5],"从轴向叶排进入叶轮中心，沿径向向外压缩，再经扩压通道进入燃烧室外部。",1,"hp",1.45,["压气机末级为一个离心级。"],[le.pt,le.tc]),Re("axial","轴流压气机","AXIAL COMPRESSOR · 3","compressor",Xn[6],"空气从发动机后部进气，向前通过三级轴流压气机，再到离心叶轮。",3,"hp",1.45,["三个轴流压气机级。"],[le.pt,le.tc]),Re("inlet","后部进气口","REAR AIR INLET","inlet",Xn[7],"后部进气与前端输出桨轴形成鲜明区别。气流不穿过螺旋桨、齿轮箱或实心转轴。",0,null,0,["PT6A 回流式构型与后部进气。"],[le.pw,le.pt]),Re("exhaust","两侧排气管","SIDE EXHAUST DUCTS","exhaust",Xn[8],"做功后的燃气从动力涡轮前方汇入两侧排气管。管路形状和安装角度为教学近似。",0,null,0,["NTSB 的 PT6A-27 剖面显示动力段与前部排气位置。"],[le.pt])],sources:[le.pt,le.tc,le.pw],evidence:"具体选择 PT6A-27；NTSB 实机调查与 FAA 型号证支持 3 轴流+1 离心、一级燃气发生器涡轮、一级自由动力涡轮和两级减速。四叶桨为安装示意，未声称真实传动比。内部流路与回流环转弯按示意图重建，非 CFD。"},{id:"pegasus",name:"Pegasus 11-61",classic:!0,subtitle:"双转子反向旋转 · 四喷口矢量推力",family:"VECTORED-THRUST TURBOFAN",summary:"3 + 8 级压气机 · 2 + 2 级涡轮 · 前冷后热四喷口",facts:["3 + 8 级压气机","双转子反向旋转","四个联动喷口"],spools:2,afterburner:!1,hasBypass:!0,exhaustType:"side",fanRadius:1.65,classicLayout:Ri.pegasus,parts:[Re("fan","低压风扇","LP FAN · 3 STAGES","fan",xi[0],"三级低压系统压缩全部进气；外涵部分分配到前方一对冷喷口，核心气流继续进入高压压气机。",3,"lp",1,["Pegasus 11 采用三级风扇，由两级低压涡轮驱动。"],[le.nasa,le.museum]),Re("hpc","高压压气机","HPC · 8 STAGES","compressor",xi[1],"八级高压压气机与低压系统反向旋转。转速减慢用于观察，同一轴上的涡轮保持联动。",8,"hp",-1.4,["Pegasus 11 的八级高压压气机；两个轴系独立、同轴、反向旋转。"],[le.nasa]),Re("combustor","环形燃烧室","ANNULAR COMBUSTOR","combustor",xi[2],"核心气流在环形燃烧室升温；前方冷喷口的气流不经过燃烧室。",0,null,0,["NASA Pegasus 11 图 1 给出核心燃烧室与分流布局。"],[le.nasa]),Re("hpt","高压涡轮","HPT · 2 STAGES","hpt",xi[3],"两级高压涡轮带动八级高压压气机，以相同速度和方向旋转。",2,"hp",-1.4,["Pegasus 11 高压轴由两级涡轮驱动。"],[le.nasa]),Re("lpt","低压涡轮","LPT · 2 STAGES","lpt",xi[4],"两级低压涡轮经内轴驱动三级风扇，随后热气流分至后方左右两个喷口。",2,"lp",1,["Pegasus 11 低压轴由两级涡轮驱动。"],[le.nasa]),Re("cold-nozzles","前部冷流喷口","FRONT PAIR · FAN AIR","cold-nozzle",xi[5],"前方两只转动喷口接收风扇外涵气流。改变角度时，与后方两只热喷口保持同向联动。",0,null,0,["风扇与核心分流；四个喷口机械联动，使推力方向一致。"],[le.nasa]),Re("hot-nozzles","后部热流喷口","REAR PAIR · CORE GAS","hot-nozzle",xi[6],"后方两只喷口接收经过燃烧室和涡轮的热气流。角度 0° 表示向后排气，90° 表示向下排气。",0,null,0,["NASA Pegasus 11 报告描述四喷口 0–98.5° 偏转；本演示限定 0–90°。"],[le.nasa])],sources:[le.peg,le.nasa,le.museum],evidence:"11-61 型号身份由 Rolls-Royce 产品页支持；级数、反向轴系与四喷口原理按 NASA 的 Pegasus 11 同族公开报告重建，未将报告中的旧型推力、转速或温度冒充 11-61 性能数据。喷口联动演示不含整机飞行动力学、水喷射或姿态控制。"}],ln=(i,t,e,n,s,r=0,o=0)=>({name:i,short:i,tag:t,kind:e,bounds:n,desc:s,stages:r,spin:o}),wc=(i,t,e,n)=>[ln("风扇","FAN · 1 STAGE","fan",[-5,-3.65],n?"直径 3.2512 m，22 片弯曲复合材料叶片，带钛前缘保护。径向中部宽腹与外段弯钩参考 GE / MoMA 实物图；叶型截面、扭转和扫掠量为外形近似。":"直径 1.5494 m，24 片宽弦钛合金叶片，配锥椭圆整流锥。24 片依据 NTSB 实机调查修正早期宣传中的 22 片；叶型、扭转和尺寸分布为外形近似。",1,1),ln("低压增压级",`BOOSTER · ${i} STAGES`,"booster",[-3.65,-2.4],`${i} 级低压增压级，仅进一步压缩核心气流。与风扇、低压涡轮同轴旋转。`,i,1),ln("高压压气机","HPC · 9 STAGES","compressor",[-2.4,-.45],"九级高压压气机，经独立的高压轴由高压涡轮驱动。外涵空气从核心机外围绕过。",9,1.45),ln(n?"双环燃烧室":"单环燃烧室",n?"DOUBLE ANNULAR · DAC":"SINGLE ANNULAR · SAC","combustor",[-.45,.65],n?"GE90-115B 采用双环燃烧室。模型以径向两圈喷嘴头部表达 DAC 构型；实际穹顶形状、分区配油和燃烧过程未复原。":"这里选用 CFM56-7B26 的 SAC 单环版本；不与 /2 的双环版本混用。喷油头部、火焰筒通孔与尺度为示意。"),ln("高压涡轮",`HPT · ${t} STAGES`,"hpt",[.65,1.4],`${t} 级高压涡轮，通过高压轴驱动九级高压压气机。导向叶排固定，转子叶排旋转；内部冷却通道未复原。`,t,1.45),ln("低压涡轮",`LPT · ${e} STAGES`,"lpt",[1.4,3.45],`${e} 级低压涡轮，驱动前方风扇和增压级。沿程逐级做功降温；叶片数和叶型为教学重建。`,e,1),ln("外涵道与风扇喷口","BYPASS · SEPARATE EXHAUST","bypass",[-3.65,.8],"大部分示踪线沿外围冷流通道前行，从风扇喷口独立排出。此机型为分流排气，不设置 AL-31F 式共同混合加力段；示踪线比例不等于真实涵道比。"),ln("核心排气喷口","CORE EXHAUST · NO REHEAT","exhaust",[3.45,4.89],"核心燃气通过低压涡轮后，经尾锥外围独立排出。无加力燃烧，也不采用军用可调收扩喷管。尾锥与短舱轮廓为示意。")].map((s,r)=>({...s,bounds:Cs[n?"ge90":"cfm56"].bounds[r]})),En=[{id:"al31f",name:"AL-31F",subtitle:"双转子 · 加力式涡扇发动机",family:"LOW-BYPASS TURBOFAN",summary:"4 + 9 级压气机 · 双轴 · 混合排气与共同加力",facts:["4 + 9 级压气机","双转子","1 + 1 级涡轮"],spools:2,afterburner:!0,fanRadius:1,parts:Su.map((i,t)=>({...i,bounds:[Qe[t],Qe[t+1]],stages:{0:4,1:9,3:1,4:1}[t]||0})),sources:[["MAI / Saturn / Lyulka，2008 AL-31F 图册","https://djvu.online/file/IF4LC5NA9fozh"],["AL-31F 原始纵剖图","https://djvu.online/jpg1/I/F/4/IF4LC5NA9fozh/004.webp"],["Rosoboronexport 官方产品说明","https://roe.ru/pdfs/pdf_4785.pdf"]],evidence:"主要轴向比例按公开纵剖估计。图册全长 4,990 mm 与官方 4,945 mm 存在口径差异；基础 AL-31F 不加入 AL-31FP 动态矢量偏转或 AL-31FN 附件布局。"},{id:"j79",name:"J79-GE-15",subtitle:"单转子 · 加力式涡喷发动机",family:"AFTERBURNING TURBOJET",summary:"17 级压气机 · 单轴 · 管环式燃烧室 · 无外涵道",facts:["17 级压气机","单转子","3 级涡轮"],spools:1,afterburner:!0,fanRadius:1,parts:[ln("轴流压气机","COMPRESSOR · 17 STAGES","compressor",[-5,-1.75],"十七级轴流压气机。全部转子叶排与后方三级涡轮由同一根轴联动；没有独立低压转子或外涵道。可变静子机构未复原。",17,1),ln("管环式燃烧室","CAN-ANNULAR · 10 CANS","combustor",[-1.75,-.45],"十个独立火焰筒沿圆周布置于公共机匣内。十筒结构参考公开 XJ79 同族原始报告，不声称这是 GE-15 的厂家尺寸图纸。"),ln("三级涡轮","TURBINE · 3 STAGES","turbine",[-.45,.85],"三级涡轮驱动前方十七级压气机，全部转子叶排归属同一转子系统；导向叶排保持固定。",3,1),ln("涡轮后支承与尾锥","REAR FRAME","frame",[.85,1.4],"涡轮出口的固定支承与尾锥。该位置没有内外涵混合器，因为 J79 是涡喷发动机。"),ln("加力燃烧室","AFTERBURNER","afterburner",[1.4,3.55],"涡轮后的加力段可再次加热核心气流。火焰稳定器、喷油环和衬筒为近似几何，未求解燃烧化学。"),ln("可调面积喷口","VARIABLE-AREA NOZZLE","nozzle",[3.55,4.89],"随演示工况调整开度的喷口。仅表达可调面积特征，不把 AL-31F 的详细收扩机构当作 J79 真实机构。")],sources:[["美国空军国家博物馆：J79-GE-15、17/3 级数","https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/197630/general-electric-j79-turbojet/"],["NACA 1957 XJ79 原始报告，第 3 页：十筒与加力构型","https://digital.library.unt.edu/ark:/67531/metadc63906/m1/3/"]],evidence:"型号与级数按美国空军博物馆 GE-15 馆藏资料。管环式十筒结构参考同族 XJ79 报告，内部尺寸和喷口机构为教学布局。"},{id:"cfm56",name:"CFM56-7B26",subtitle:"双转子 · 高涵道比涡扇 · SAC",family:"HIGH-BYPASS TURBOFAN",summary:"Ø 1.55 m · 24 片宽弦钛风扇 · 3 级增压 + 9 级高压压气机 · 1 + 4 级涡轮",facts:["1 + 3 + 9 级压缩系统","双转子","1 + 4 级涡轮"],spools:2,afterburner:!1,layout:Cs.cfm56,fanRadius:Cs.cfm56.fanRadius,parts:wc(3,1,4,!1),sources:[["NTSB CFM56-7B 实机调查：24 片风扇叶片","https://www.ntsb.gov/investigations/pages/DCA18MA142.aspx"],["NTSB / CFM 纵剖图与叶片图：报告第 6–8 页","https://data.ntsb.gov/carol-repgen/api/Aviation/ReportMain/GenerateFinalReport/93897/pdf"],["EASA E.004 型号合格证：CFM56-7B 级数与 SAC/DAC 变型","https://www.easa.europa.eu/en/downloads/7795/en"],["CFM 历史资料：61 英寸与钛宽弦叶片；叶片数按 NTSB 修正","https://www.cfmaeroengines.com/press-articles/thats-not-something-you-see-every-day"],["FAA CLEEN 评估报告：CFM56-7B 分流排气","https://ascent.aero/documents/2020/02/environmental-design-space-assessment-of-continuous-lower-energy-emissions-and-noise-cleen-technologies.pdf/"]],evidence:"具体采用 -7B26 单环燃烧室版本；不采用 /2 双环版本。一级风扇、三级增压级、九级高压压气机、一级高压和四级低压涡轮由 EASA 数据单约束；风扇直径 61 英寸由 CFM 约束；叶片数采用 NTSB 实机调查的 24 片，修正早期宣传页的 22 片。风扇、核心机与涡轮的轮廓分别参考公开图重建，内部位置与径向比例为图像估计。"},{id:"ge90",name:"GE90-115B",subtitle:"双转子 · 高涵道比涡扇 · DAC",family:"HIGH-BYPASS TURBOFAN",summary:"Ø 3.25 m · 22 片弯曲复材风扇 · 钛前缘 · 4 级增压 · 2 + 6 级涡轮",facts:["1 + 4 + 9 级压缩系统","双转子","2 + 6 级涡轮"],spools:2,afterburner:!1,layout:Cs.ge90,fanRadius:Cs.ge90.fanRadius,dac:!0,parts:wc(4,2,6,!0),sources:[["MoMA：GE90-115B 实物弯曲复材叶片","https://www.moma.org/collection/works/93637"],["Stanford / GE 纵剖与实机图：第 56 页图 4.19","https://ihmegroup.github.io/assets/pdf/ME257.pdf"],["GE 官方产品对比：GE90-115B 级数","https://www.geaerospace.com/commercial/aircraft-engines/ge90"],["GE 官方历史：128 英寸、22 片复材风扇","https://www.geaerospace.com/pl/node/5315"],["GE 官方：GE90-115B 双环燃烧室","https://www.geaerospace.com/news/press-releases/commercial-engines/delivering-2000th-ge90-engine-and-counting"],["辛辛那提大学研究：GE90 分流排气示意","https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ucin1085666850&disposition=inline"]],evidence:"采用 -115B 的四级增压级和九级高压压气机，不混入早期 -94B 的 3/10 配置。128 英寸为风扇直径，135 英寸最大外径不是同一参数。双环构型以径向两圈头部表达，未重建真实穹顶和配油系统。"}];En.push(...r_);const Rc={al31f:[["四级低压压气机，与低压涡轮同轴。",0],["九级高压压气机，由独立高压轴驱动。",0],["连续环形燃烧室。",0],["一级高压涡轮，驱动高压压气机。",0],["一级低压涡轮，驱动低压压气机。",0],["涡轮后内外涵混合，随后进入共同加力段。",0],["混合气流的共同加力燃烧室。",0],["基础 AL-31F 可调面积收扩喷管；不加入 AL-31FP 矢量偏转。",0]],j79:[["J79-GE-15：十七级压气机、单转子构型。",0],["十筒管环式布局由同族 XJ79 原始报告支持，非 GE-15 尺寸图。",1],["J79-GE-15：三级涡轮驱动同一根轴上的压气机。",0],["J79 是无外涵的涡喷；此处后支承与尾锥的具体结构属于教学重建。",0],["J79 的加力式涡喷构型由博物馆资料支持。",0],["加力涡喷尾部喷口为可视化重建；本模型未复原真实作动机构。",0]],cfm56:[["61 英寸风扇；NTSB 实机调查确认 24 片钛风扇叶片。",0],["三级低压增压级，与风扇和低压涡轮同轴。",2],["九级高压压气机。",2],["具体采用 CFM56-7B26 的 SAC 单环版本，不与 /2 DAC 版本混用。",2],["一级高压涡轮。",2],["四级低压涡轮。",2],["独立外涵喷口，外涵流不经过核心燃烧室。",4],["核心气流独立排气，没有加力段。",4]],ge90:[["GE90-115B 风扇直径 128 英寸、22 片复合材料叶片；实物叶片图见 MoMA。",3],["-115B 采用四级低压增压级。",2],["-115B 采用九级高压压气机。",2],["GE90-115B 采用双环燃烧室；模型用两圈头部表达。",4],["两级高压涡轮。",2],["六级低压涡轮。",2],["核心与外涵采用分流排气。",5],["核心燃气独立排气，不设置加力段。",5]]};for(const i of En)Rc[i.id]&&i.parts.forEach((t,e)=>{const[n,s]=Rc[i.id][e],r=i.id==="al31f"||i.id==="cfm56"||i.id==="ge90"?i.sources[1]:null;t.evidence={facts:[n],approximation:"内部位置、半径、叶型、零件间隙和附属结构按公开图示或教学布局重建，未验证每一项细节；只有明确列出的级数、轴系和构型属于资料约束。",sources:[i.sources[s],...r?[r]:[]]}});const Yr=i=>En.find(t=>t.id===i)||En[0],Ia=(i,t,e)=>i+(t-i)*e;function As(i,t){if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],r=(t-n[0])/(s[0]-n[0]);return n.slice(1).map((o,a)=>Ia(o,s[a+1],r))}return i.at(-1).slice(1)}function o_(i){const t=i.id==="j79",e=i.fanRadius,n=i.layout,s=n?i_(n):null,r=t?[-5,-1.75,-.45,.85,1.4,3.55,4.89]:[n.bounds[0][0],n.fan.x+n.fan.chord*.55+.025,...n.bounds.filter((u,d)=>d>0&&d!==6).map(u=>u[1])],o=t?["进气","压气机出口","燃烧室出口","涡轮出口","加力进口","加力出口","喷口出口"]:["进气","风扇出口","增压级出口","高压压气机出口","燃烧室出口","高压涡轮出口","低压涡轮出口","核心喷口出口"];function a(u=85,d=!0){const f=Math.max(0,Math.min(1,(u-30)/70));return t?[288,600+180*f,1100+410*f,760+290*f,750+270*f,d?1450+530*f:740+260*f,d?1100+440*f:550+170*f]:[288,315+45*f,410+100*f,660+210*f,1200+520*f,990+400*f,620+230*f,450+170*f]}function c(u,d,f,g,_){const m=_||a(f,g);return d&&!t?u<r[1]?As([[r[0],288],[r[1],m[1]]],u)[0]:m[1]:As(r.map((p,y)=>[p,m[y]]),u)[0]}function l(u,d=!1,f=!0){if(n){if(d){const{inner:_,outer:m}=n.bypass,p=m.at(-1)[0];if(u<_[0][0])return[n.fan.splitter+.045,e-.035];if(u<=p)return[oi(_,u)[0]+.06,oi(m,u)[0]-.045];const y=n.exhaust.outer[0];return As([[p,_.at(-1)[1]+.06,m.at(-1)[1]-.045],[y[0],Math.max(_.at(-1)[1]+.1,y[1]+.13),m.at(-1)[1]+.13],[6.1,y[1]+.15,m.at(-1)[1]+.32]],u)}const g=oi(s,u);return u<n.fan.x&&(g[0]=oi(n.fan.spinner,u)[0]+.025),g}return As(t?[[-5.5,.25,.86],[-4.8,.25,.86],[-1.8,.46,.67],[-1.62,.35,.76],[-.55,.35,.76],[-.4,.35,.72],[.83,.34,.75],[1.5,.28,.8],[2.7,.02,.8],[3.55,.02,.8],[4.89,.02,f?.71:.49],[6.1,0,f?.88:.65]]:[[-5.5,.56,1.06],[-3.7,.4,1.06],[-2.4,.46,.87],[-.5,.5,.65],[-.3,.36,.75],[.6,.36,.75],[.7,.37,.72],[1.4,.36,.77],[3.4,.36,1.01],[3.5,.35,1.02],[4.1,.25,.85],[4.89,.02,.67],[6.1,0,.85]],u)}function h(u,d,f){const[g,_]=l(u,d.bypass,f),m=Math.sqrt(g*g+(_*_-g*g)*d.f),p=d.theta+Math.max(0,Math.min(u+5,5))*.08;if(t&&u>=-1.85&&u<=-.37){const y=Math.PI/5,v=Math.round(p/y)*y,x=(p-v)*10,A=.135*Math.sqrt(d.f),R=Math.max(0,Math.min(1,(u+1.85)/.2,(-.37-u)/.16)),L=R*R*(3-2*R);return[Ia(m*Math.cos(p),.54*Math.cos(v)+A*Math.cos(x),L),Ia(m*Math.sin(p),.54*Math.sin(v)+A*Math.sin(x),L)]}return[m*Math.cos(p),m*Math.sin(p)]}return{boundaries:r,stationLabels:o,stationTemperatures:a,temperatureAt:c,passage:l,flowPosition:h,toLayout:u=>u,constructionBounds:r}}function a_(i,t){const{root:e,groups:n,shells:s,mesh:r,lathe:o,tube:a,ring:c,row:l,radialInstances:h,boltCircle:u,strut:d,mat:f,steel:g,dark:_,light:m,titanium:p,hot:y,copper:v,black:x}=t,A=i.id==="j79",R=i.fanRadius,L=f(3688528,.4,.36);i.parts.forEach((k,H)=>{const S=new We;S.userData.part=H,S.name=k.name,e.add(S),n.push(S)});const N=(k,...H)=>{const S=l(...H);return S.userData.label=k,S},E=(k,H,S,P,O)=>{s.push(a(k,H,S,P,g,O,.025));for(const[D,B]of[[k+.03,S],[H-.03,P]])c(D,B+.018,.055,_,O),u(D,B+.05,24,O)},T=(k,H,S,P)=>{const O=new _n([new ut(.039,-.035),new ut(.056,-.025),new ut(.056,.025),new ut(.035,.035)],16);O.rotateZ(-Math.PI/2),O.translate(0,H,0),h(O,S,m,P,k)};if(i.parts.forEach((k,H)=>{const S=n[H],[P,O]=k.bounds,D=O-P;if(k.kind==="fan"){E(P,O,R*1.025,R*1.005,S),o([[-5.38,.002],[-5.18,.19],[-4.85,.42],[-4.55,.57],[-3.65,.4]],_,S);const B=i.id==="ge90"?L:p;N("一级风扇 · 转子叶盘",-4.6,.56,R*.96,22,.68,B,S,1,1.15),N("风扇出口 · 固定导流叶排",-3.9,1.15,R*.96,32,.26,g,S,0,-.4),c(-4.6,.57,.16,_,S)}if(["compressor","booster","hpt","lpt","turbine"].includes(k.kind)){let B,V,rt,$;k.kind==="booster"?[B,V,rt,$]=[.4,.46,1.06,.89]:k.kind==="compressor"?[B,V,rt,$]=A?[.25,.46,.86,.67]:[.46,.5,.87,.65]:k.kind==="hpt"?[B,V,rt,$]=[.37,.36,.72,.77]:k.kind==="lpt"?[B,V,rt,$]=[.36,.36,.77,1.01]:[B,V,rt,$]=[.35,.34,.72,.75],E(P+.012,O-.012,rt+.055,$+.055,S);const K=D/(k.stages+.28),ot=Math.min(.2,K*.56),ft=["hpt","lpt","turbine"].includes(k.kind);for(let G=0;G<k.stages;G++){const I=G/Math.max(1,k.stages-1),z=Xe.lerp(B,V,I),et=Xe.lerp(rt,$,I),nt=P+K*(G+.55);N(`第 ${G+1} 级 · 静子叶排`,nt-K*.3,z,et,36+G%6*2,ot*.65,_,S,0,-.7),N(`第 ${G+1} 级 · 转子叶盘`,nt,z,et,42+G%7*2,ot,ft?y:m,S,k.spin,ft?.9:.7)}}if(k.kind==="combustor"&&A){E(P,O,.83,.83,S);const B=Array.from({length:12},(rt,$)=>jn(P+.1,O-.08,.145,.145,.008).rotateX($*Math.PI/6)),V=wi(B,!1);B.forEach(rt=>rt.dispose()),V.translate(0,.54,0),h(V,10,y,S);for(let rt=0;rt<10;rt++){const $=rt*Math.PI/5,K=new We;K.position.set(0,.54*Math.cos($),.54*Math.sin($)),S.add(K);for(const ot of[P+.1,P+.43,P+.76,O-.08])c(ot,.145,.022,v,K);o([[P+.04,.02],[P+.1,.13],[P+.15,.145]],_,K)}}if(k.kind==="combustor"&&!A){E(P,O,.88,.88,S),h(jn(P+.04,O-.04,.78,.78),12,y,S),h(jn(P+.04,O-.04,.34,.34),12,v,S);for(const B of[P+.04,P+.35,P+.7,O-.04])c(B,.78,.022,v,S),c(B,.34,.022,y,S);i.dac?(T(P+.09,.46,20,S),T(P+.09,.65,20,S)):T(P+.09,.56,20,S),o([[P+.08,.34],[P+.02,.38]],v,S),o([[P+.02,.73],[P+.08,.78]],v,S)}if(k.kind==="frame"&&(E(P,O,.84,.84,S),d(P+.15,.32,.81,8,S),o([[P,.34],[P+.18,.32],[O+.4,.2],[O+1.2,.001]],_,S)),k.kind==="afterburner"){E(P,O,.9,.9,S);const B=[];for(let V=0;V<=64;V++)B.push([P+V*D/64,.844+V%2*.011]);o(B,y,S);for(const V of[P+.22,P+.53])for(const rt of[.32,.58,.74])c(V,rt,.025,v,S),o([[V-.04,rt-.02],[V,rt],[V-.04,rt+.02]],_,S);d(P+.25,.16,.81,8,S)}if(k.kind==="bypass"){a(P,.8,R*1.005,R*.81,g,S,.025),a(P,.8,1.15,1.16,_,S,.022);for(const[B,V]of[[P,R*1.005],[.75,R*.817]])c(B,V,.045,m,S);d(-3.55,1.17,R*.94,8,S)}k.kind==="exhaust"&&(a(P,O,1.075,.72,y,S,.025),o([[P,.35],[P+.55,.25],[O,.001]],_,S),c(P,1.08,.07,p,S),d(P+.04,.36,1.02,8,S))}),A?(a(-4.95,.8,.115,.115,m,n[0],.04).userData.spool="single",o([[-5.3,.001],[-5.14,.12],[-4.87,.25]],_,n[0])):(a(-4.65,3.4,.115,.115,m,n[0],.04),a(-2.4,1.35,.178,.178,v,n[2],.035)),A){i.parts.slice(0,-1).forEach((P,O)=>{const[D,B]=P.bounds,V=P.kind==="compressor"?.933:P.kind==="turbine"?.793:P.kind==="afterburner"?.918:P.kind==="frame"?.858:.848,rt=[],$=P.kind==="compressor"?-.19/(B-D):P.kind==="turbine"?.03/(B-D):0;for(const ot of[-1,1]){const ft=new Ve(B-D-.12,.035,.07);ft.rotateZ(ot*Math.atan($)),ft.translate((D+B)/2,ot*(V+$*(B-D)/2),0),rt.push(ft);for(let G=0;G<8;G++){const I=new He(.023,.023,.04,6),z=D+.1+(B-D-.2)*G/7;I.translate(z,ot*(V+$*(z-D)+.03),0),rt.push(I)}}const K=wi(rt,!1);rt.forEach(ot=>ot.dispose()),r(K,m,n[O])});const k=n[i.parts.findIndex(P=>P.kind==="combustor")],H=i.parts.find(P=>P.kind==="combustor").bounds[0];T(H+.03,.54,10,k);const S=new He(.016,.022,.065,12);S.rotateZ(Math.PI/2),S.translate(H-.005,.54,0),h(S,10,v,k)}let F=()=>{};if(A){const k=n.at(-1),[H,S]=i.parts.at(-1).bounds;c(H,.91,.1,_,k),u(H,.945,24,k);const P=D=>{const B=D?.74:.52,V=new _n([new ut(.88,H),new ut(B,S),new ut(B+.02,S),new ut(.9,H)],8,.008,Math.PI/10-.016);V.rotateZ(-Math.PI/2);const rt=Math.PI/20,$=new U(H,.91*Math.cos(rt),.91*Math.sin(rt)),K=new U(S,(B+.03)*Math.cos(rt),(B+.03)*Math.sin(rt)),ot=new On(new Ai($,K),1,.013,6,!1),ft=wi([V,ot],!1);return V.dispose(),ot.dispose(),ft},O=h(P(!0),20,y,k).children[0];F=D=>{const B=O.geometry;O.geometry=P(D),B.dispose()}}return{nozzle:F}}const yr=24,Sr=24,Do=i=>{const t=Xe.clamp(i,0,1);return t*t*(3-2*t)};function l_(i,t,e,n){if(![i,t,e].every(Number.isFinite)||i<=0||t<=i||e<=0)throw new RangeError("Fan geometry needs finite 0 < hub < tip and chord > 0.");if(!["cfm56","ge90"].includes(n))throw new RangeError(`Unsupported civil fan: ${n}`);const s=n==="ge90",r=[],o=[],a=[],c=Sr*2,l=Array.from({length:c},(f,g)=>{const _=g<=Sr,m=_?g:c-g;return{u:(1-Math.cos(Math.PI*m/Sr))/2,side:_?1:-1}});for(let f=0;f<=yr;f++){const g=f/yr,_=i+(t-i)*g,m=s?.43+.69*Math.sin(Math.PI*Math.pow(g,.73)*.77):.48+.52*Math.sin(Math.PI*g*.53),p=e*m,y=s?.48+.65*Do(g):.43+.67*Do(g),v=s?e*(.08*Math.sin(Math.PI*g)-.34*Do((g-.34)/.66)):e*.055*g*g,x=s?e*(.06*g+.2*Math.sin(Math.PI*g)-.58*Math.pow(g,5)):e*.065*g*g;for(const{u:A,side:R}of l){const L=p*(s?.072:.055)*Math.sin(Math.PI*A),N=A===0||A===1?0:.2969*Math.sqrt(A)-.126*A-.3516*A*A+.2843*A*A*A-.1036*A*A*A*A,E=5*p*(s?.1-.035*g:.095-.038*g)*N,T=(A-.46)*p,F=L+R*E,k=T*Math.cos(y)-F*Math.sin(y)+v,S=(T*Math.sin(y)+F*Math.cos(y)+x)/_;r.push(k,_*Math.cos(S),_*Math.sin(S))}}for(let f=0;f<yr;f++)for(let g=0;g<c;g++){const _=(g+1)%c,m=f*c+g,p=m+c,y=f*c+_,v=y+c;(s&&Math.max(l[g].u,l[_].u)<=.067?a:o).push(m,y,p,y,v,p)}const h=f=>(c-f)%c;for(const f of[0,yr])for(let g=0;g<Sr;g++){const _=f*c,m=_+g,p=_+g+1,y=_+h(g+1),v=_+h(g),x=s&&l[g+1].u<=.067?a:o,A=(R,L,N)=>{R===L||L===N||N===R||(f===0?x.push(R,N,L):x.push(R,L,N))};A(m,p,y),A(m,y,v)}const u=new Te;u.setAttribute("position",new fe(r,3)),u.setIndex([...o,...a]),u.addGroup(0,o.length,0),a.length&&u.addGroup(o.length,a.length,1),u.computeBoundingBox();const d=(u.boundingBox.min.x+u.boundingBox.max.x)/2;return u.translate(-d,0,0),u.computeVertexNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),u.userData={modelId:n,approximation:"Photograph-informed silhouette; illustrative airfoil, twist and sweep."},u}function c_(i,t){const{root:e,groups:n,shells:s,mesh:r,lathe:o,ring:a,row:c,radialInstances:l,boltCircle:h,strut:u,mat:d,steel:f,dark:g,light:_,titanium:m,hot:p,copper:y}=t,v=i.layout,x=v.fanRadius,A=i.id==="ge90",R=d(2569272,.5,.22),L=d(v.caseColor,.57,.4);i.parts.forEach((G,I)=>{const z=new We;z.name=G.name,z.userData.part=I,e.add(z),n.push(z)});const N=[],E=(G,I,z,et=!1)=>{let nt=N.find(st=>st.material===I&&st.parent===z&&st.caseOnly===et);nt||(nt={material:I,parent:z,caseOnly:et,geometries:[]},N.push(nt)),nt.geometries.push(G)},T=(G,I,z,et,nt,st,bt,St=!1)=>{const C=G-z/2,tt=G+z/2,Z=oi(I,C)[0]+et,J=oi(I,tt)[0]+et,Q=[[C,Z],[C,Z+nt],[tt,J+nt],[tt,J],[C,Z]],mt=new _n(Q.map(([ht,_t])=>new ut(_t,ht)),48);mt.rotateZ(-Math.PI/2),E(mt,st,bt,St)},F=(G,I,z,et,nt,st,bt=!1)=>{for(let St=0;St<I;St++)for(let C=1;C<G.length;C++){const[tt,Z]=G[C-1],[J,Q]=G[C],mt=Math.hypot(J-tt,Q-Z);if(mt<1e-5)continue;const ht=St*Math.PI*2/I,_t=new Ve(mt,.012,et);_t.rotateZ(Math.atan2(Q-Z,J-tt)),_t.translate((tt+J)/2,(Z+Q)/2+z,0),_t.rotateX(ht),E(_t,nt,st,bt)}},k=(G,I,z,et,nt,st,bt=!1)=>{const St=new He(et,et,.014,6);for(let C=0;C<z;C++){const tt=St.clone();tt.translate(G,I,0),tt.rotateX(C*Math.PI*2/z),E(tt,nt,st,bt)}St.dispose()},H=(G,I,z,et)=>{const nt=I+.008,st=I+.063,bt=[[G-.065,nt],[G-.065,st-.018],[G-.045,st],[G+.045,st],[G+.065,st-.018],[G+.065,nt],[G-.065,nt]],St=new _n(bt.map(([C,tt])=>new ut(tt,C)),48);St.rotateZ(-Math.PI/2),E(St,z,et)},S=(G,I,z,et=.03)=>{const nt=G.map(([bt,St])=>[bt,St+et]),st=o([...G,...nt.reverse(),G[0]],I,z);return st.userData.annotationOccluder=!0,st},P=(G,...I)=>{const z=c(...I);return z.userData.label=G,z},O=(G,I)=>{s.push(S(G,f,I));for(const[z,et]of[G[0],G.at(-1)])a(z,et+.025,.055,g,I),h(z,et+.055,24,I);F(G,2,.045,.042,g,I,!0)},{fan:D}=v,B=n[0],V=[[-5,x+.065],[-4.91,x+.025],[-4.5,x+.025],[v.bounds[0][1],x+.025]];s.push(S(V,L,B,.075));for(const G of[-4.97,-4.57,v.bounds[0][1]])a(G,x+.1,.055,g,B);h(-4.98,x+.12,44,B),F(V.slice(1),2,.089,.06,g,B,!0),k(v.bounds[0][1]-.075,x+.112,24,.019,_,B,!0);const rt=o(D.spinner,g,B),$=P("一级风扇 · 转子叶盘",D.x,D.hub,x,D.count,D.chord,m,B,1,1,{geometry:l_(D.hub,x,D.chord,i.id),material:A?[R,m]:m});$.attach(rt);const K=D.spinner.map(([G,I])=>[G-D.x,I]),ot=-D.chord*.72;T(ot,K,.021,.004,.008,m,$),k(ot+.055,oi(K,ot+.055)[0]+.009,12,.013,_,$);const ft=new Ve(.1,.013,Math.PI*2*D.hub/D.count*.32);for(let G=0;G<D.count;G++){const I=ft.clone();I.translate(-.115,D.hub+.003,0),I.rotateX((G+.5)*Math.PI*2/D.count),E(I,m,$)}ft.dispose(),P("风扇出口 · 固定导流叶排",D.statorX,D.splitter,x-.035,32,.26,f,B,0,-.4),a(D.x,D.hub,.16,g,B),H(D.statorX+.14,.16,_,n[1]);for(const G of[1,2,4,5]){const I=i.parts[G],z=n[G],[et,nt]=I.bounds,st=v.stages[G],bt=I.stages,St=et+(nt-et)*(st.activeFraction||1),C=(St-et)/(bt+.38),tt=Math.min(G===5?.23:.19,C*.57),Z=G>=4;O([[et+.014,st.tip[0]+.055],[(et+St)/2,(st.tip[0]+st.tip[1])/2+.075],[St-.02,st.tip[1]+.055],[nt-.014,st.tip[1]+.055]],z);const J=[[et,st.hub[0]-.025],[St,st.hub[1]-.025]];St<nt-1e-6&&J.push([nt,st.hub[1]-.025]),o(J,g,z);for(let Q=0;Q<bt;Q++){const mt=(Q+.55)/(bt+.38),ht=et+(St-et)*mt,_t=Xe.lerp(...st.hub,mt),Wt=Xe.lerp(...st.tip,mt);P(`第 ${Q+1} 级 · 静子叶排`,ht-C*.32,_t,Wt,36+Q%6*2,tt*.68,g,z,0,-.7),P(`第 ${Q+1} 级 · 转子叶盘`,ht,_t,Wt,42+Q%7*2,tt,Z?p:_,z,I.spin,Z?.9:.7),(G===2||G===5)&&a(ht,Wt+.07,.025,G===5?y:m,z)}if(st.activeFraction&&u(St+(nt-St)*.55,st.hub[1],st.tip[1],8,z),G===2)for(let Q=0;Q<3;Q++){const mt=(Q+.5)/bt,ht=et+(nt-et)*mt,_t=Xe.lerp(...st.tip,mt)+.095;a(ht,_t,.027,g,z),h(ht,_t+.025,12,z)}(G===2||G===4||G===5)&&H(G===2?et+.075:nt-.085,G===5?.16:.235,_,z)}{const G=n[3],[I,z]=v.bounds[3],{inner:et,outer:nt,caseRadius:st}=v.combustor;O([[I,v.stages[2].tip[1]+.055],[I+.19,st],[z-.2,st],[z,v.stages[4].tip[0]+.055]],G),l(jn(I+.1,z-.1,nt,nt-.025),12,p,G),l(jn(I+.1,z-.1,et,et),12,y,G);for(const St of[I+.1,(I+z)/2,z-.1])a(St,nt,.02,y,G),a(St,et,.02,p,G);const bt=A?[et+(nt-et)*.29,et+(nt-et)*.75]:[(et+nt)/2];for(const St of bt){const C=new _n([new ut(.041,-.035),new ut(.075,-.02),new ut(.075,.025),new ut(.042,.045)],18);C.rotateZ(-Math.PI/2),C.translate(0,St,0),l(C,20,_,G,I+.11),o([[I+.08,St-.085],[I+.025,St],[I+.08,St+.085]],p,G);const tt=new Ti(.054,.007,5,14);tt.rotateY(Math.PI/2);for(let Z=0;Z<20;Z++){const J=tt.clone();J.translate(I+.076,St,0),J.rotateX(Z*Math.PI/10),E(J,y,G)}tt.dispose()}for(let St=0;St<4;St++){const C=(St+.5)*Math.PI/2,tt=new He(.065,.065,.023,6);tt.translate((I+z)/2,st+.045,0),tt.rotateX(C),E(tt,f,G,!0);const Z=new He(.031,.035,.055,10);Z.translate((I+z)/2,st+.077,0),Z.rotateX(C),E(Z,f,G,!0)}}{const G=n[6],{outer:I,inner:z}=v.bypass,et=S(I,f,G,.035);et.userData.bypassCowl=!0,S(z,g,G,.025);for(const[nt,st]of[I[0],I.at(-1)])a(nt,st+.04,.05,m,G);F(I,2,.047,.026,g,G);for(const nt of[I[1][0],I.at(-2)[0]])T(nt,I,.027,.035,.01,m,G);u(I[0][0]+.14,z[0][1]+.03,I[0][1]-.045,8,G)}{const G=n[7],{outer:I,plug:z}=v.exhaust;S(I,p,G,.03),o(z,g,G),a(I[0][0],I[0][1]+.03,.07,m,G),u(I[0][0]+.07,z[0][1],I[0][1]-.035,8,G),F(I,12,.037,.013,g,G),T(I[1][0],I,.024,.03,.008,m,G);for(const[et]of z.slice(1,-1))T(et,z,.02,.004,.007,m,G)}t.tube(D.x,v.bounds[5][1],.16,.16,_,n[0],.045).userData.spool="lp",t.tube(v.bounds[2][0],v.bounds[4][1],.235,.235,y,n[2],.04).userData.spool="hp";for(const G of N){const I=wi(G.geometries,!1);G.geometries.forEach(et=>et.dispose());const z=r(I,G.material,G.parent);z.userData.illustrativeHardware=!0,G.caseOnly&&s.push(z)}return{nozzle:()=>{}}}function Cc(i=.35,t=1.02,e=.34){const n=[],s=[];if(!(t>i&&i>0&&e>0))throw new RangeError("Invalid impeller dimensions");for(let c=0;c<=20;c++){const l=c/20,h=i+(t-i)*l,u=-.62*l*l,d=.17*(1-l)**2-.09*l,f=e*(1-.69*l),g=.015/h;for(const[_,m]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.push(d+_*f/2,h*Math.cos(u+m*g),h*Math.sin(u+m*g))}for(let c=0;c<20;c++)for(let l=0;l<4;l++){const h=c*4+l,u=c*4+(l+1)%4,d=h+4,f=u+4;s.push(h,u,d,u,f,d)}s.push(0,2,1,0,3,2);const o=80;s.push(o,o+1,o+2,o,o+2,o+3);const a=new Te;return a.setAttribute("position",new fe(n,3)),a.setIndex(s),a.computeVertexNormals(),a.computeBoundingSphere(),a}function Io(i,t=.38,e=.035,n=28){const s=new Gr(i.map(u=>new U(...u))),r=s.computeFrenetFrames(n,!1),o=[],a=[],c=32;for(let u=0;u<2;u++)for(let d=0;d<=n;d++){const f=s.getPointAt(d/n),g=t-u*e;for(let _=0;_<c;_++){const m=_/c*Math.PI*2,p=f.clone().addScaledVector(r.normals[d],g*Math.cos(m)).addScaledVector(r.binormals[d],g*Math.sin(m));o.push(p.x,p.y,p.z)}}const l=(n+1)*c;for(let u=0;u<2;u++)for(let d=0;d<n;d++)for(let f=0;f<c;f++){const g=u*l+d*c+f,_=u*l+d*c+(f+1)%c,m=g+c,p=_+c;u?a.push(g,m,_,_,m,p):a.push(g,_,m,_,p,m)}for(const u of[0,n])for(let d=0;d<c;d++){const f=u*c+d,g=u*c+(d+1)%c,_=f+l,m=g+l;u?a.push(f,g,_,g,m,_):a.push(f,_,g,g,_,m)}const h=new Te;return h.setAttribute("position",new fe(o,3)),h.setIndex(a),h.computeVertexNormals(),h.computeBoundingSphere(),h}function u_(i,t,e=1.28,n=12){const s=[],r=[];for(let h=0;h<2;h++)for(let u=0;u<=12;u++)for(let d=0;d<144;d++){const f=u/12,g=d/144*Math.PI*2,_=e+f*.16*Math.cos(g*n)+h*.022;s.push(Xe.lerp(i,t,f),_*Math.cos(g),_*Math.sin(g))}const c=1872;for(let h=0;h<2;h++)for(let u=0;u<12;u++)for(let d=0;d<144;d++){const f=h*c+u*144+d,g=h*c+u*144+(d+1)%144,_=f+144,m=g+144;h?r.push(f,g,_,g,m,_):r.push(f,_,g,g,_,m)}for(const h of[0,12])for(let u=0;u<144;u++){const d=h*144+u,f=h*144+(u+1)%144,g=d+c,_=f+c;r.push(d,f,g,f,_,g)}const l=new Te;return l.setAttribute("position",new fe(s,3)),l.setIndex(r),l.computeVertexNormals(),l.computeBoundingSphere(),l}function Pc(i,t,e,n=.035){const s=i[0][0],r=i.at(-1)[0],o=i.reduce((m,p)=>m+p[1],0)/i.length,a=new tl;a.moveTo(0,0),a.lineTo(r-s,0),a.lineTo(r-s,Math.PI*2*o),a.lineTo(0,Math.PI*2*o),a.closePath();for(const m of[Math.PI/2,Math.PI*1.5]){const p=new Fr;p.absellipse(t-s,m*o,e,e,0,Math.PI*2,!0),a.holes.push(p)}const c=new Vr(a,{depth:n,bevelEnabled:!1,steps:1,curveSegments:24}),l=[],h=c.attributes.position,u=(m,p,y,v=0)=>{const x=[[m,p,y],[p,y,m],[y,m,p]],A=x.map(([L,N])=>Math.max(Math.abs(L[0]-N[0])/.18,Math.abs(L[1]-N[1])/(o*.12))),R=Math.max(...A);if(R>1&&v<16){const[L,N,E]=x[A.indexOf(R)],T=L.map((F,k)=>(F+N[k])/2);u(L,T,E,v+1),u(T,N,E,v+1)}else l.push(...m,...p,...y)};for(let m=0;m<h.count;m+=3)u(...[m,m+1,m+2].map(p=>[h.getX(p),h.getY(p),h.getZ(p)]));c.dispose();const d=new Te;d.setAttribute("position",new fe(l,3));const f=d.attributes.position,g=m=>{for(let p=1;p<i.length;p++)if(m<=i[p][0]){const y=i[p-1],v=i[p];return Xe.lerp(y[1],v[1],(m-y[0])/(v[0]-y[0]))}return i.at(-1)[1]};for(let m=0;m<f.count;m++){const p=s+f.getX(m),y=f.getY(m)/o,v=g(p)+f.getZ(m);f.setXYZ(m,p,v*Math.cos(y),v*Math.sin(y))}const _=Kg(d,1e-5);return d.dispose(),_.computeVertexNormals(),_.computeBoundingSphere(),_}function h_(i,t){const{root:e,groups:n,rotors:s,shells:r,mesh:o,lathe:a,tube:c,ring:l,row:h,radialInstances:u,boltCircle:d,strut:f,mat:g,steel:_,dark:m,light:p,titanium:y,hot:v,copper:x,black:A}=t,R=g(8560300,.43,.66),L=g(8690584,.42,.65),N=g(15055705,.42,.35);i.parts.forEach(($,K)=>{const ot=new We;ot.name=$.name,ot.userData.part=K,$.spool&&(ot.userData.spool=$.spool),e.add(ot),n.push(ot)});const E=($,K,ot,ft)=>{K.forEach(z=>{z.deleteAttribute("uv"),z.clearGroups()});const G=wi(K,!1);K.forEach(z=>z.dispose());const I=o(G,ot,ft);return I.userData.detail=$,I},T=($,K,ot,ft=.021,G=.026,I="y")=>{const z=new He(ft,ft,G,6);return I==="x"&&z.rotateZ(-Math.PI/2),I==="z"&&z.rotateX(Math.PI/2),z.translate($,K,ot)},F=($,K,ot,ft,G)=>{const I=[],z=[];for(const et of[-1,1]){const nt=new U($,et*(ot+.05),0),st=new U(K,et*(ft+.05),0);I.push(new On(new Ai(nt,st),1,.019,6,!1));for(let bt=0;bt<6;bt++){const St=(bt+.5)/6,C=Xe.lerp($,K,St),tt=Xe.lerp(ot,ft,St);z.push(T(C,et*(tt+.074),0,.024,.035))}}E("机匣分半连接边 · 示意",I,m,G),E("机匣连接螺栓 · 示意",z,p,G)},k=($,K,ot,ft)=>{const G=[],I=[],z=(K+ot)/2,et=(ot-K)*.24;for(const nt of[K+.008,ot-.008]){const st=new Ti(nt,.015,6,32);st.rotateY(Math.PI/2),st.translate($,0,0),G.push(st)}for(let nt=0;nt<12;nt++){const st=nt*Math.PI/6,bt=new He(et,et,.072,8);bt.rotateZ(-Math.PI/2),bt.translate($,z*Math.cos(st),z*Math.sin(st)),I.push(bt)}E("轮毂内轴承套圈 · 示意",G,m,ft),E("轮毂内滚子 · 示意",I,x,ft)},H=($,K,ot=_,ft=.032)=>{const G=$.map(([z,et])=>[z,et+ft]),I=a([...$,...G.reverse(),$[0]],ot,K);return I.userData.annotationOccluder=!0,r.push(I),I},S=($,K,ot,ft,G,I=_)=>{const z=H([[$,ot],[K,ft]],G,I);for(const[et,nt]of[[$,ot],[K,ft]])l(et,nt+.028,.055,m,G),d(et,nt+.052,20,G);return F($+.08,K-.08,ot,ft,G),z},P=($,K,ot,ft,G,I,z=p)=>{const et=new We;et.userData.spool=ft,et.userData.label=`${ft.toUpperCase()} 同心传动轴`,I.add(et);const nt=c($,K,ot,ot,z,et,.025);return nt.userData.spool=ft,nt.userData.shaft=!0,s.push({g:et,spin:G,spool:ft}),nt},O=($,K,ot,ft,G,I,z,et,nt,st,bt=.7,St)=>{const C=i.id==="rb211"?{lp:.14,ip:.225,hp:.305}:i.id==="pegasus"?{lp:.15,hp:.24}:{hp:.145,power:.205},tt=nt?{...St,bore:C[st]}:St,Z=h(K,ot,ft,G,I,z,et,nt,bt,tt);if(Z.userData.label=$,nt){Z.userData.spool=st;const J=s.find(Q=>Q.g===Z);J&&(J.spool=st)}return Z},D=($,K,ot,ft,G,I,z=!1)=>{const et=i.parts[$],nt=n[$],[st,bt]=et.bounds,St=et.stages||1,C=bt-st,tt=C/(St+.42),Z=/turbine|hpt|ipt|lpt/.test(et.kind);S(st+.014,bt-.014,z?G+.065:ft+.065,z?ft+.065:G+.065,nt),a([[st,z?ot-.02:K-.02],[bt,z?K-.02:ot-.02]],m,nt);for(let J=0;J<St;J++){const Q=(J+.58)/(St+.42),mt=z?bt-C*Q:st+C*Q,ht=Xe.lerp(K,ot,Q),_t=Xe.lerp(ft,G,Q),Wt=Math.min(.23,tt*.51);O(`第 ${J+1} 级 · 固定导向叶排`,mt+(z?1:-1)*tt*.33,ht,_t,32+J%5*2,Wt*.65,m,nt,0,null,-.65),O(`第 ${J+1} 级 · ${I.toUpperCase()} 转子`,mt,ht,_t,38+J%7*2,Wt,Z?v:p,nt,et.spin,I,Z?.85:.7),l(mt,_t+.07,.022,Z?x:y,nt)}},B=($,K,ot,ft,G,I)=>{u(jn(K,ot,G,G-.015),12,v,$),u(jn(K,ot,ft,ft),12,x,$);for(const bt of[K,(K+ot)/2,ot])l(bt,ft,.025,x,$),l(bt,G,.025,v,$);const z=new _n([new ut(.038,-.05),new ut(.065,-.025),new ut(.065,.04),new ut(.035,.06)],14);z.rotateZ(-Math.PI/2),z.translate(0,(ft+G)/2,0),u(z,16,p,$,I);const et=[],nt=[],st=(ft+G)/2;for(let bt=0;bt<16;bt++){const St=bt*Math.PI/8,C=st*Math.cos(St),tt=st*Math.sin(St),Z=new He(.012,.016,.07,8);Z.rotateZ(-Math.PI/2),Z.translate(I-.005,C,tt),nt.push(Z);for(let J=0;J<8;J++){const Q=J*Math.PI/4,mt=new Ve(.023,.021,.006);mt.rotateX(Q+.48),mt.translate(I+.023,C+.044*Math.cos(Q),tt+.044*Math.sin(Q)),et.push(mt)}}E("喷油嘴与旋流片 · 数量和叶型示意",et,x,$),E("喷油嘴头部 · 示意",nt,m,$)},V=($,K,ot,ft,G=p)=>{const I=o(new Ti(ot,.036,8,40),G,ft);I.position.set($,0,K);const z=o(new He(ot,ot,.11,40,1,!0),G,ft);z.rotation.x=Math.PI/2,z.position.copy(I.position)},rt=($,K,ot,ft,G)=>{const I=new We;return I.position.x=K,I.userData.spool=ot,I.userData.label=G,I.userData.rotating=!0,I.userData.rotorAssembly=!0,$.add(I),s.push({g:I,spin:ft,spool:ot}),I};if(i.id==="rb211"){const $=i.fanRadius,K=n[0];H([[-5,$+.045],[-4.9,$+.025],[-4.25,$+.025],[-3.75,$+.035]],K,R,.06),l(-4.96,$+.095,.06,m,K),d(-4.96,$+.12,40,K),a([[-5.32,.002],[-5.18,.18],[-4.81,.5],[-4.3,.66],[-3.77,.5]],m,K);const ot=O("一级宽弦风扇 · LP 转子",-4.3,.66,$,i.classicLayout?.fanBladeCount||22,.92,y,K,1,"lp",.9),ft=[];for(let st=0;st<(i.classicLayout?.fanBladeCount||22);st++){const bt=st*Math.PI*2/(i.classicLayout?.fanBladeCount||22),St=new Ve(.15,.045,.095);St.translate(-.3,.638,0),St.rotateX(bt),ft.push(St)}E("风扇叶根压板 · 示意",ft,m,ot),l(-4.63,.571,.048,p,K),F(-4.89,-3.89,$+.025,$+.035,K),O("风扇出口 · 固定导流叶排",-3.84,1.39,$-.02,32,.23,m,K,0,null,-.5),D(1,.45,.5,1.32,1.04,"ip"),D(2,.51,.54,1.02,.82,"hp");const G=n[3];H([[.15,.89],[.36,1.03],[.85,1.02],[1.05,.88]],G),B(G,.24,.96,.44,.92,.3),D(4,.39,.4,.82,.86,"hp"),D(5,.39,.39,.88,.94,"ip"),D(6,.39,.46,.96,1.25,"lp");const I=n[7],z=H([[-3.75,$+.035],[-2.2,$-.06],[1.15,1.96],[3.45,1.59]],I,_,.035);z.userData.bypassCowl=!0,H([[-3.75,1.41],[-1.6,1.11],[.1,1.12],[1.6,1.02],[3.3,1.31]],I,m,.025),f(-3.57,1.44,$-.03,8,I),l(3.45,1.63,.06,y,I);const et=n[8];o(u_(3.33,3.93,1.28),v,et),l(3.35,1.3,.06,x,et),f(3.36,.47,1.27,8,et);const nt=n[9];return H([[3.95,1.53],[4.34,1.4],[4.89,1.12]],nt,v),a([[3.3,.46],[3.78,.37],[4.4,.18],[4.87,.005]],m,nt),l(3.96,1.57,.065,y,nt),P(-4.29,3.22,.12,"lp",1,K),P(-3.66,1.88,.2,"ip",1.2,n[1],y),P(-1.52,1.43,.28,"hp",1.45,n[2],x),k(-3.69,.227,.405,n[1]),k(-1.54,.307,.465,n[2]),k(3.24,.146,.4,n[6]),{nozzle:()=>{}}}if(i.id==="pt6a"){const $=i.classicLayout?.propellerRadius||2.55,K=.8,ot=K/9,ft=rt(n[0],-4.96,"prop",ot,"螺旋桨 · 安装示意");ft.userData.independentPropeller=!0,u(Or(.38,$,.59,1.02),4,A,ft),u(Or($-.22,$+.01,.25,.6),4,N,ft),a([[-.5,.004],[-.36,.19],[0,.36],[.17,.37]],p,ft),l(.1,.38,.13,m,ft);const G=[],I=[];for(let C=0;C<4;C++){const tt=C*Math.PI/2,Z=new He(.13,.145,.16,16,1,!0);Z.translate(.025,.45,0),Z.rotateX(tt),G.push(Z);for(const J of[-.1,.1]){const Q=T(.025,.485,J,.025,.047);Q.rotateX(tt),I.push(Q)}}E("桨叶根部夹环 · 安装示意",G,y,ft),E("桨毂夹紧螺栓 · 示意",I,m,ft);const z=n[1];H([[-4.7,.48],[-4.5,.64],[-3.5,.74],[-3.2,.57]],z,L,.04);const et=[];for(let C=0;C<10;C++){const tt=C*Math.PI/5,Z=new U(-4.46,.702*Math.cos(tt),.702*Math.sin(tt)),J=new U(-3.56,.758*Math.cos(tt),.758*Math.sin(tt));et.push(new On(new Ai(Z,J),1,.026,6,!1))}E("减速机匣纵向加强筋 · 示意",et,_,z),F(-4.42,-3.63,.69,.745,z),k(-4.59,.16,.38,z);for(const[C,tt]of[-3.61,-4.48].entries()){const Z=K/3**C,J=Z/3;l(tt,.61,.17,m,z),d(tt,.7,24,z);const Q=new Ve(.16,.04,.038);Q.translate(0,.565,0),u(Q,48,m,z,tt);const mt=rt(z,tt,"power",Z,`第 ${C+1} 级太阳轮 · 24 齿示意`);c(-.09,.09,.268,.268,x,mt,.17);const ht=new Ve(.18,.042,.038);ht.translate(0,.28,0),u(ht,24,x,mt);const _t=new We;_t.position.x=tt,_t.userData.spool="prop",z.add(_t),s.push({g:_t,spin:J,spool:"prop"});const Wt=new Ve(.045,.45,.07);Wt.translate(.13,.22,0),u(Wt,3,m,_t);for(let $t=0;$t<3;$t++){const w=$t*Math.PI*2/3,M=new We;M.position.set(0,.42*Math.cos(w),.42*Math.sin(w)),M.rotation.x=w+Math.PI/12,_t.add(M),c(-.085,.085,.128,.128,p,M,.085);const j=new Ve(.17,.042,.038);j.translate(0,.14,0),u(j,12,p,M),s.push({g:M,spin:-2*(Z-J),spool:"power"})}}P(-4.82,-4.48,.13,"prop",ot,n[0]),P(-3.61,-1.64,.18,"power",K,n[2],x),P(-4.47,-3.61,.105,"power",K/3,z,y),D(2,.29,.31,.7,.66,"power",!0),D(3,.3,.33,.68,.64,"hp",!0),P(-1.03,3.38,.12,"hp",1.45,n[6]);const nt=n[4];H([[-.38,.72],[-.14,1.17],[1.3,1.17],[1.36,1.26]],nt,_),B(nt,-.2,1.12,.7,1.1,1.16),a([[1.12,.7],[1.26,.71],[1.32,.76]],v,nt),a([[1.3,1.04],[1.25,1.09],[1.12,1.1]],v,nt);const st=rt(n[5],1.62,"hp",1.45,"离心叶轮 · 轴向进气 / 径向排气");st.userData.bladeRow=!0,st.userData.rotorAssembly=!1,u(Cc(),18,y,st),a([[-.26,.16],[-.26,.98],[-.22,1.035],[-.17,1.035],[-.12,.69],[.11,.36],[.29,.29]],m,st),l(1.44,1.08,.065,x,n[5]);const bt=Cc(1.02,1.13,.1);bt.translate(1.53,0,0),u(bt,24,p,n[5]),H([[1.36,1.26],[2.09,1.26],[2.17,.75]],n[5],_),D(6,.28,.38,.68,.63,"hp",!0);const St=n[7];H([[3.48,.75],[3.9,.87],[4.45,.8]],St,R),a([[3.46,.28],[3.9,.23],[4.35,.1],[4.52,.002]],m,St),f(4.12,.2,.8,6,St),k(3.38,.149,.253,n[6]),k(-1.61,.207,.272,n[2]);for(const C of[-1,1]){const tt=[[-2.47,0,C*.4],[-2.84,0,C*.83],[-3.05,0,C*1.37],[-3.35,0,C*1.7]],Z=o(Io(tt,.33,.025),v,n[8]);Z.userData.annotationOccluder=!0,V(-2.84,C*.83,.35,n[8])}return{nozzle:()=>{}}}if(i.id==="pegasus"){const $=i.fanRadius,K=g(11451584,.3,.77),ot=g(9204581,.42),ft=g(5793642,.36);for(const st of[K,ot,ft])st.userData.keepUncut=!0;D(0,.46,.57,$-.07,$-.12,"lp"),a([[-5.3,.002],[-5.07,.22],[-4.61,.48]],m,n[0]),D(1,.4,.49,.97,.76,"hp");const G=n[2];H([[-.25,.82],[-.1,.93],[.5,.93],[.65,.81]],G),B(G,-.16,.57,.37,.84,-.08),D(3,.34,.34,.75,.81,"hp"),D(4,.33,.35,.82,.95,"lp"),P(-4.79,2.34,.13,"lp",1,n[0]),P(-2.43,1.36,.215,"hp",-1.4,n[1],x);const I=o(Pc([[-2.49,$-.05],[-2.1,$-.08],[-1.3,1.08]],-1.9,.49),R,n[5]),z=o(Pc([[2.4,1.01],[2.92,1.08],[3.3,.75]],2.82,.41),v,n[6]);for(const st of[I,z])st.userData.annotationOccluder=!0,r.push(st);H([[3.3,.75],[3.43,.59],[3.53,.31],[3.57,.005]],n[6],v),a([[2.35,.35],[2.9,.25],[3.25,.001]],m,n[6]);const et=[];for(const st of[!0,!1])for(const bt of[-1,1]){const St=st?5:6,C=n[St],tt=bu(st,bt,0),Z=tt.pivot,[J,Q,mt]=Z,ht=st?.46:.37,_t=[J-.21,Q,bt*(st?1.04:.79)],Wt=o(Io([_t,[J-.08,Q,mt-bt*.17],Z],ht,.036,16),st?K:ot,C);Wt.userData.annotationOccluder=!0,V(J,mt,ht+.035,C,ft);const $t=[];for(let vt=0;vt<16;vt++){const Nt=vt*Math.PI/8;$t.push(T(J+(ht+.075)*Math.cos(Nt),(ht+.075)*Math.sin(Nt),mt+bt*.065,.022,.046,"z"))}E("喷口回转支承法兰紧固件 · 示意",$t,ft,C);const w=new We;w.position.set(...Z),w.userData.label=st?"冷流可转喷口":"热流可转喷口",C.add(w);const M=new Ti(ht+.1,.028,6,32,Math.PI*1.5);M.translate(0,0,bt*.095);const j=[];for(let vt=0;vt<22;vt++){const Nt=vt*Math.PI*1.5/21,Ot=new Ve(.043,.043,.055);Ot.rotateZ(Nt),Ot.translate((ht+.12)*Math.cos(Nt),(ht+.12)*Math.sin(Nt),bt*.095),j.push(Ot)}E("喷口回转扇形齿圈 · 示意",[M,...j],ft,w);const lt=tt.points.map(vt=>vt.map((Nt,Ot)=>Nt-Z[Ot])),Y=o(Io(lt,ht,.036),st?K:ot,w);Y.userData.annotationOccluder=!0;for(const vt of[-.18,0,.18]){const Nt=lt.map(([Ot,Mt,It])=>new U(Ot,Mt+vt,It));o(new On(new Gr(Nt),24,.011,6,!1),ft,w)}const ct=lt.at(-1),Gt=o(new Ti(ht,.025,8,40),ft,w);Gt.rotation.y=Math.PI/2,Gt.position.set(...ct),et.push(w)}const nt=st=>{const bt=Xe.clamp(Number(st.nozzleAngle)||0,0,90)*Math.PI/180;et.forEach(St=>{St.rotation.z=-bt})};return k(-2.43,.242,.366,n[1]),k(2.35,.152,.3,n[4]),nt({nozzleAngle:0}),{nozzle:()=>{},updateMechanism:nt}}return{nozzle:()=>{}}}const mn=(i,t=0,e=1)=>Math.max(t,Math.min(e,Number(i)||0)),ze=(i,t,e)=>i+(t-i)*e,Tu=(i,t,e)=>i.map((n,s)=>ze(n,t[s],e)),si=(i,t,e,n)=>{const s=Math.sqrt(t*t+(e*e-t*t)*mn(n.f??.5));return[i,s*Math.cos(n.theta??0),s*Math.sin(n.theta??0)]},f_=i=>(i.side??Math.sin(i.theta??1))<0?-1:1,Lc=i=>Math.atan2(Math.sin(i),Math.cos(i));function Uo(i,t){const e=mn(t)*(i.length-1),n=Math.min(i.length-2,Math.floor(e));return Tu(i[n],i[n+1],e-n)}function d_(i){const t=i.id,e=Ri[t];if(!e)throw new Error(`Unknown classic engine: ${t}`);const n=t==="rb211",s=t==="pt6a",r=!s,o=_=>(_+5.3)/11.4,a=n?e.stationX.map((_,m)=>m===0?0:m===e.stationX.length-1?1:o(_)):e.stationProgress,c=n?["进气","风扇出口","中压压气机出口","高压压气机出口","燃烧室出口","高压涡轮出口","中压涡轮出口","低压涡轮出口","混合器出口","共同喷口出口"]:s?["后部进气","轴流压气机出口","离心压气机出口","燃烧室出口","燃气发生器涡轮出口","自由动力涡轮出口","侧排气出口"]:["进气","低压风扇出口","高压压气机出口","燃烧室出口","高压涡轮出口","低压涡轮出口","后部热喷口出口"];function l(_=85){const m=mn((_-30)/70);if(n){const y=ze(318,365,m),v=ze(710,890,m),x=(v+4.4*y)/5.4;return[288,y,ze(450,580,m),ze(690,865,m),ze(1200,1660,m),ze(1040,1400,m),ze(910,1200,m),v,x,x]}if(s){const y=ze(620,810,m);return[288,ze(410,480,m),ze(560,675,m),ze(1030,1320,m),ze(790,1010,m),y,y]}const p=ze(690,890,m);return[288,ze(360,425,m),ze(610,800,m),ze(1120,1490,m),ze(910,1160,m),p,p]}function h(_,m={},p={},y){const v=y||l(p.throttle??85),x=mn(_);if(m.bypass&&r){const A=n?a[1]:.25,R=ii([[0,v[0]],[A,v[1]]],x)[0];return!n||x<a[7]?R:ii([[a[7],v[1]],[a[8],v[8]],[1,v[9]]],x)[0]}return ii(a.map((A,R)=>[A,v[R]]),x)[0]}function u(_,m=!1){return s?[.28,.68]:ii(m?e.bypass:e.core,_)}function d(_,m={},p={}){const y=mn(_),v=f_(m);if(n){const D=ze(-5.3,6.1,y),[B,V]=u(D,!!m.bypass);if(D>=3.3&&D<=4.08){const rt=mn((D-3.33)/.6),$=1.28+.16*rt*Math.cos(12*(m.theta??0)),K=m.bypass?Math.max(B,$+.05):B,ot=m.bypass?Math.max(V,K+.025):Math.min(V,$-.035),ft=si(D,Math.min(K,ot-.015),ot,m);return Tu(ft,si(D,B,V,m),mn((D-3.94)/.14))}return si(D,B,V,m)}if(s){if(y<=.85){const[K,ot,ft]=ii(e.flow,y);return si(K,ot,ft,m)}const D=m.theta??0,B=Lc(v*Math.PI/2-D);if(y<.89)return si(-2.7,.32,.65,{...m,theta:D+B*(y-.85)/.04});const V=si(-2.7,.32,.65,{...m,theta:v*Math.PI/2}),rt=(mn(m.f??.5)-.5)*.24,$=[V,[-2.84,rt,v*.83],[-3.05,rt,v*1.37],[-3.35,rt,v*1.7],[-4.35,rt,v*2.8]];return Uo($,(y-.89)/.11)}const x=!!m.bypass,A=x?.3:.73,R=.85,L=.94,N=x?-1.8:2.4;if(y<=A){const D=x?ii([[0,-5.2],[.25,-2.5],[.3,N]],y)[0]:ii([[0,-5.2],[.25,-2.5],[.47,-.25],[.56,.65],[.64,1.42],[.73,2.4]],y)[0],[B,V]=u(D,x);return si(D,B,V,m)}const E=bu(x,v,p.nozzleAngle??0),[T,F]=u(N,x),k=si(N,T,F,m),H=(mn(m.f??.5)-.5)*E.radius*1.3,S=[0,H,0];if(y<R){const D=(y-A)/(R-A),B=[E.pivot[0]-.21,0,v*(x?1.04:.79)];if(D<.6){const V=D/.6,rt=m.theta??0,$=Math.hypot(k[1],k[2]),K=rt+Lc(v*Math.PI/2-rt)*V,ot=ze($,Math.abs(B[2]),V);return[ze(k[0],B[0],V),ot*Math.cos(K),ot*Math.sin(K)]}return Uo([B,[E.pivot[0]-.08,0,E.pivot[2]-v*.17],E.pivot],(D-.6)/.4)}let P;y<=L?P=Uo(E.points,(y-R)/(L-R)):P=E.exit.map((D,B)=>D+E.direction[B]*(y-L)/.06*1.65);const O=mn(p.nozzleAngle??0,0,90)*Math.PI/180;return S[0]=H*Math.sin(O),S[1]=H*Math.cos(O),P.map((D,B)=>D+S[B]*mn((y-R)/.02))}function f(_,m=!1,p=85,y=!1,v){const x=v||l(p);if(s){const A=e.stationX.reduce((R,L,N)=>Math.abs(L-_)<Math.abs(e.stationX[R]-_)?N:R,0);return x[A]}if(m){const A=n?o(_):mn((_+5.2)/10);return h(A,{bypass:!0},{throttle:p},x)}return ii(e.stationX.map((A,R)=>[A,x[R]]),_)[0]}function g(_,m=!1){const p=mn(_);return s?p<.1?7:p<.32?6:p<.43?5:p<.73?4:p<.78?3:p<.85?2:8:n?p>=a[8]?9:p>=a[7]?8:m&&p>=a[1]?7:Math.max(0,a.findIndex(y=>y>p)-1):m?p<.25?0:5:p<.25?0:p<.47?1:p<.56?2:p<.64?3:p<.73?4:6}return{boundaries:e.stationX,constructionBounds:e.stationX,stationLabels:c,stationProgress:a,hasBypass:r,bypassFraction:s?0:n?.65:.5,stationTemperatures:l,flowTemperature:h,flowPoint:d,temperatureAt:f,passage:u,partAtProgress:g,toLayout:_=>_,mixingStationIndex:n?8:void 0,bypassMergeProgress:n?a[7]:void 0,bypassMergeEndProgress:n?a[8]:void 0,bypassRatio:n?4.4:void 0,bypassStationProgress:s?void 0:n?a:[0,.25,1]}}const p_="总温 Tt / 总压 Pt 的教学站位模型：入口 288 K、101.325 kPa；预设各部件温升/温降，压气机等熵效率 0.86、涡轮等熵效率 0.90、定比热比 γ=1.4，燃烧室总压损失 5%、喷口总压损失 1%。绝热喷口总温保持不变；未计算静温、静压、马赫数、流量或轴功匹配，不能用于性能预测。",m_=[["NASA Glenn · Compressor Thermodynamics","https://www.grc.nasa.gov/www/k-12/airplane/compth.html"],["NASA Glenn · Power Turbine Thermodynamics","https://www.grc.nasa.gov/WWW/K-12/airplane/powtrbth.html"]],Ua=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),Dc=(i,t,e)=>i+(t-i)*e;function g_(i){return i.stationProgress||i.boundaries.map(t=>Ua((t+5.5)/11.6))}function Ws(i,t,e={},n=!1){const s=t.stationLabels||["进气","低压压气机出口","高压压气机出口","主燃烧室出口","高压涡轮出口","低压涡轮出口","混合段出口","加力段出口","喷管出口"],r=t.stationTemperatures(e.throttle??85,!!e.afterburner),o=g_(t),a=[];for(let u=0;u<r.length;u++){const d=s[u]||`站位 ${u+1}`,f=a.at(-1);let g=r[u],_=101.325;if(f){const m=g/f.temperature;/喷口|喷管|排气/.test(d)?(g=f.temperature,_=f.pressure*.99):/燃烧|加力/.test(d)&&m>1?_=f.pressure*.95:/压气|风扇|增压|离心/.test(d)&&m>1?_=f.pressure*Math.pow(1+.86*(m-1),3.5):/涡轮/.test(d)&&m<1?_=f.pressure*Math.pow(Math.max(.05,1-(1-m)/.9),3.5):_=f.pressure*.98}a.push({progress:o[u],temperature:g,pressure:_,stationLabel:d})}if(!n||i.id==="j79"||i.id==="pt6a")return a;const c=i.id==="pegasus"?t.bypassFanStationIndex??1:1,l=a[c],h=t.bypassStationProgress?.[1]??l.progress;if(t.mixingStationIndex!=null){const u=t.mixingStationIndex;return[a[0],l,{...l,progress:t.bypassMergeProgress?.[0]??a[u-1].progress,stationLabel:"外涵 · 混合前"},...a.slice(u)]}return i.id==="al31f"?[a[0],l,{...l,progress:a[5].progress,stationLabel:"外涵 · 混合前"},...a.slice(6)]:[{...a[0],progress:t.bypassStationProgress?.[0]??a[0].progress},{...l,progress:h,stationLabel:"风扇 / 低压系统出口"},{...l,progress:t.bypassStationProgress?.at(-1)??1,pressure:l.pressure*.98,stationLabel:"外涵独立喷口"}]}function Au(i,t){const e=Ua(t);if(e<=i[0].progress)return{...i[0],progress:e};for(let n=1;n<i.length;n++)if(e<=i[n].progress){const s=i[n-1],r=i[n],o=Ua((e-s.progress)/Math.max(1e-8,r.progress-s.progress));return{progress:e,temperature:Dc(s.temperature,r.temperature,o),pressure:Dc(s.pressure,r.pressure,o),stationLabel:o<.03?s.stationLabel:`${s.stationLabel} → ${r.stationLabel}`}}return{...i.at(-1),progress:e}}function __(i,t,e,n,s=!1){return Au(Ws(i,t,e,s),n)}const No={lp:["低压轴 LP","#168aa1"],ip:["中压轴 IP","#ae791d"],hp:["高压轴 HP","#a14f9c"],single:["单转子轴","#168aa1"],gas:["燃气发生器轴","#a14f9c"],power:["自由动力轴","#168aa1"],prop:["螺旋桨输出轴","#ae791d"]};function x_({preset:i,physics:t,root:e,scene:n,camera:s,controls:r,groups:o,rotors:a,materials:c,modelRadius:l,flowPoint:h}){const u=new Map,d=new Map,f=S=>{for(let P=S;P;P=P.parent)if(Number.isInteger(P.userData.part))return P.userData.part;return-1},g=S=>S.spool||S.g.userData.spool||i.parts[f(S.g)]?.spool||(i.id==="j79"?"single":Math.abs(S.spin)>1.2?"hp":"lp");a.forEach(S=>{S.spool=g(S),S.g.userData.spool=S.spool});const _=[...new Set(a.map(S=>S.spool))].map(S=>({id:S,label:No[S]?.[0]||S,color:No[S]?.[1]||"#168aa1",parts:[...new Set(a.filter(P=>P.spool===S).map(P=>f(P.g)).filter(P=>P>=0))]}));let m="";function p(S){const P=`${S.shaftMode}/${S.selected}`;if(P===m)return;m=P;const O=_.filter(D=>D.parts.includes(S.selected)).map(D=>D.id);e.traverse(D=>{if(!D.isMesh)return;if(u.has(D)||u.set(D,D.material),!S.shaftMode){D.material=u.get(D);return}let B;for(let ot=D;ot&&ot!==e;ot=ot.parent){if(ot.userData.spool&&!o.includes(ot)){B=ot.userData.spool;break}if(ot.userData.bladeRow&&!ot.userData.rotating)break}const V=B&&(!O.length||O.includes(B)),rt=No[B],$=ot=>{const ft=`${ot.uuid}/${B||"fixed"}/${!!V}`;if(!d.has(ft)){const G=ot.clone();G.color.set(rt?.[1]||"#77867c"),G.transparent=!V,G.forceSinglePass=!0,G.opacity=B?V?1:.36:.1,G.depthWrite=!!V,G.metalness=.25,G.roughness=.48,B&&G.emissive.set(rt?.[1]||"#168aa1").multiplyScalar(V?.1:.02),c.push(G),d.set(ft,G)}return d.get(ft)},K=u.get(D);D.material=Array.isArray(K)?K.map($):$(K)})}const y=new We;n.add(y);const v=new Fe(new Za(1,64),new ks({color:1666441,transparent:!0,opacity:.1,side:wn,depthWrite:!1})),x=new hf(new Te().setFromPoints(Array.from({length:80},(S,P)=>new U(Math.cos(P*Math.PI/40),Math.sin(P*Math.PI/40),0))),new ms({color:1666441,transparent:!0,opacity:.8,depthTest:!1}));y.add(v,x),y.visible=!1;const A=new Fe(new el(.075,14,10),new ks({color:1661538,depthTest:!1}));A.renderOrder=8,n.add(A),A.visible=!1;const R=new Jf(new U(1,0,0),new U,.6,1661538,.16,.08);n.add(R),R.visible=!1;let L={};function N(S,P=!1,O=L){const D=Xe.clamp(S,0,1),B=P&&(t.hasBypass??!["j79","pt6a"].includes(i.id)),rt=h(D,{theta:1.1,f:.48,bypass:B},O),$=__(i,t,O,D,B),K=t.partAtProgress?t.partAtProgress(D,B):i.parts.findIndex(ot=>rt[0]>=ot.bounds[0]&&rt[0]<=ot.bounds[1]&&(B?ot.kind==="bypass":ot.kind!=="bypass"));return{...$,position:rt,partIndex:Math.max(0,K)}}function E(S){L=S,p(S);const P=S.mode!=="exploded"&&!S.isolate;if(y.visible=!!S.probeEnabled&&P,A.visible=S.tourProgress!=null&&P,R.visible=A.visible,y.visible){const O=Xe.clamp(S.probeProgress??.5,0,1),D=!!S.probeBypass,B=N(O,D,S),V=h(Math.max(0,O-.002),{theta:1.1,f:.48,bypass:D},S),rt=h(Math.min(1,O+.002),{theta:1.1,f:.48,bypass:D},S),$=new U(...rt).sub(new U(...V)).normalize();!i.classic||i.id==="rb211"?(y.position.set(B.position[0],0,0),y.scale.setScalar(D?l:Math.max(.5,Math.hypot(...B.position.slice(1))*1.25)),y.quaternion.setFromUnitVectors(new U(0,0,1),new U(1,0,0))):(y.position.fromArray(B.position),y.scale.setScalar(.25),y.quaternion.setFromUnitVectors(new U(0,0,1),$))}if(A.visible){const O=S.tourProgress,D=!!S.tourBypass,B=h(O,{theta:1.1,f:.48,bypass:D},S),V=h(Math.min(1,O+.004),{theta:1.1,f:.48,bypass:D},S);A.position.fromArray(B),R.position.copy(A.position);const rt=new U(...V).sub(A.position);rt.lengthSq()>1e-10&&R.setDirection(rt.normalize())}}function T(S,P=!1){const O=N(S,P),D=new U(...O.position),B=s.position.clone().sub(r.target).normalize().multiplyScalar(Math.max(4,l*2.6));r.target.copy(D),s.position.copy(D).add(B),r.update()}const F=()=>Math.max(5.6/(Math.tan(34*Math.PI/360)*s.aspect*.82),l*1.3/(Math.tan(34*Math.PI/360)*.65));function k(){const S=F();return{offset:s.position.clone().sub(r.target).divideScalar(S).toArray(),target:r.target.clone().divideScalar(5.5).toArray(),zoom:s.zoom}}function H(S){if(!S?.offset?.every(Number.isFinite)||!S?.target?.every(Number.isFinite))return;const P=r.enableDamping;r.enableDamping=!1,r.update(),r.target.fromArray(S.target).multiplyScalar(5.5),s.position.fromArray(S.offset).multiplyScalar(F()).add(r.target),s.zoom=S.zoom||1,s.updateProjectionMatrix(),r.update(),r.enableDamping=P}return{tick:E,setState:S=>{L=S},sampleFlow:N,focusFlow:T,getCameraPose:k,setCameraPose:H,spoolInfo:()=>_.map(S=>({...S,parts:[...S.parts]}))}}function wu(i,t,e=Yr("al31f")){const n=e.id==="al31f",s=n?n_:e.classic?d_(e):o_(e),{boundaries:r,constructionBounds:o,toLayout:a,passage:c,temperatureAt:l}=s,h=e.parts.map(pt=>pt.bounds);let u=Math.max(1.05,e.fanRadius*1.08),d=()=>{},f={};const g=new Qc,_=new Fg({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),_.localClippingEnabled=!0,_.toneMapping=Nc,_.toneMappingExposure=1,i.appendChild(_.domElement),_.domElement.setAttribute("aria-label",e.name+" 可交互三维构型；拖动旋转，滚轮缩放，点击部件选取");const m=new La(_),p=new Jg,y=m.fromScene(p,.025);g.environment=y.texture,p.dispose(),m.dispose();const v=new gn(34,1,.1,150),x=new Bg(v,_.domElement);x.enableDamping=!0,x.minDistance=3,x.maxDistance=110;const A=new Yf(15398143,5985611,1.4);g.add(A);const R=new $l(16777215,2.2);R.position.set(-3,6,5),g.add(R);const L=new $l(12245483,2);L.position.set(4,2,-4),g.add(L);const N=new We;g.add(N);const E=new qn(new U(0,0,-1),.12),T=[];function F(pt,xt=.35,Ft=.78,Ct={}){const At=new Ca({color:pt,roughness:xt,metalness:Ft,side:wn,clippingPlanes:[E],...Ct});return T.push(At),At}const k=F(10267314),H=F(4608347,.42),S=F(12700624,.26),P=F(10923952,.3),O=F(9204581,.42),D=F(11702891,.38),B=F(3423037,.5),V=[],rt=[],$=[],K=[[-5,.905],[-4.8,.915],[-3.6,.89],[-3.5,.93],[-1.4,.91],[-.15,.91],[.85,.91],[1.4,.9],[3.75,.88],[4.89,.74]];function ot(pt){let xt=K.findIndex((At,Yt)=>Yt<K.length-1&&pt>=At[0]&&pt<=K[Yt+1][0]);if(xt<0)return .9;const Ft=K[xt],Ct=K[xt+1];return Ft[1]+(Ct[1]-Ft[1])*(pt-Ft[0])/(Ct[0]-Ft[0])}function ft(pt,xt,Ft){const Ct=new Fe(pt,xt);return Ft.add(Ct),Ct}function G(pt,xt,Ft,Ct=96){const At=new _n(pt.map(Yt=>new ut(Yt[1],Yt[0])),Ct);return At.rotateZ(-Math.PI/2),ft(At,xt,Ft)}function I(pt,xt,Ft,Ct,At){return G([[pt-Ft/2,xt-.016],[pt-Ft/2,xt+.018],[pt+Ft/2,xt+.018],[pt+Ft/2,xt-.016]],Ct,At)}function z(pt,xt,Ft,Ct,At,Yt,se=.018){const re=G([[pt,Ft-se],[pt,Ft],[xt,Ct],[xt,Ct-se],[pt,Ft-se]],At,Yt);return re.userData.annotationOccluder=!0,re}function et(pt,xt,Ft,Ct,At,Yt,se){const re=ft(new He(At,At,Ct,10),Yt,se);return re.position.set(pt,xt*Math.cos(Ft),xt*Math.sin(Ft)),re.rotation.x=Ft,re}function nt(pt,xt,Ft,Ct,At=0,Yt=0){const se=new We;se.position.x=At,Ct.add(se);const re=new Aa(pt,Ft,xt),ve=new Oe;for(let Ce=0;Ce<xt;Ce++)ve.rotation.x=Yt+Ce*Math.PI*2/xt,ve.updateMatrix(),re.setMatrixAt(Ce,ve.matrix);return se.add(re),se}function st(pt,xt,Ft,Ct){const At=new He(.018,.018,.026,6);At.translate(0,xt,0),nt(At,Ft,S,Ct,pt);const Yt=new He(.025,.025,.008,12);Yt.translate(0,xt-.016,0),nt(Yt,Ft,H,Ct,pt)}function bt(pt,xt,Ft,Ct,At){const Yt=Or(xt,Ft,.14,.05);nt(Yt,Ct,H,At,pt)}function St(pt,xt,Ft,Ct,At,Yt,se,re=0,ve=.7,Ce){const Ae=new We;Ae.position.x=pt,Ae.userData.bladeRow=!0,Ae.userData.rotating=!!re,se.add(Ae);const dt=new Aa(Ce?.geometry||Or(xt,Ft,At,ve),Ce?.material||Yt,Ct),Pt=new Oe;for(let ee=0;ee<Ct;ee++)Pt.rotation.x=2*Math.PI*ee/Ct,Pt.updateMatrix(),dt.setMatrixAt(ee,Pt.matrix);Ae.add(dt);const Qt=new _n([new ut(xt-.022,-At*.41),new ut(xt+.004,-At*.41),new ut(xt+.004,At*.41),new ut(xt-.022,At*.41)],5,.008,Math.PI*2/Ct-.016);if(Qt.rotateZ(-Math.PI/2),nt(Qt,Ct,H,Ae),re){const ee=Ce?.bore??(re>1?.182:.12);G([[-At*.28,ee],[-At*.28,xt*.72],[-At*.12,xt],[At*.12,xt],[At*.28,xt*.72],[At*.28,ee],[-At*.28,ee]],Yt,Ae),I(-At*.25,xt*.73,.018,H,Ae),I(At*.25,xt*.73,.018,H,Ae),I(0,ee+.028,At*.62,S,Ae);const de=(ee+xt*.7)/2,Le=Math.min(.014,(xt*.7-ee)*.12);if(Le>.002){const Be=[-1,1].map(X=>{const it=new He(Le,Le,.012,6);return it.rotateZ(Math.PI/2),it.translate(X*(At*.28+.004),de,0),it}),b=wi(Be,!1);Be.forEach(X=>X.dispose()),nt(b,12,S,Ae)}rt.push({g:Ae,spin:re})}else I(0,Ft,.025,H,Ae);return Ae}if(n){let ve=function(dt){for(const q of re)V[7].remove(q),q.traverse(yt=>{yt.geometry&&yt.geometry.dispose()});const Pt=new We;V[7].add(Pt),re=[Pt];const Qt=dt?.65:.48,ee=a(3.77),de=a(4.37),Le=a(4.89),Be=20;for(const[q,yt,Dt,Ht]of[[ee,de,.87,Qt],[de,Le,Qt,.74]]){const zt=new _n([new ut(Dt,q),new ut(Ht,yt),new ut(Ht+.016,yt),new ut(Dt+.016,q),new ut(Dt,q)],10,.008,Math.PI*2/Be-.016);zt.rotateZ(-Math.PI/2),nt(zt,Be,O,Pt);const Zt=new _n([new ut(Dt+.02,q),new ut(Ht+.02,yt)],3,-.025,.05);Zt.rotateZ(-Math.PI/2),nt(Zt,Be,B,Pt);const te=[new U(q,Dt+.036,0),new U(yt,Ht+.036,0)];nt(new On(new Ai(...te),1,.012,6,!1),Be,P,Pt,0,Math.PI/Be)}I(ee,.885,.11,H,Pt),I(ee-.13,.916,.08,S,Pt);const b=new He(.032,.032,.083,12);b.rotateX(Math.PI/2),b.translate(de,Qt+.04,0),nt(b,Be,S,Pt);const X=new U(ee-.1,.96,0),it=new U(de-.2,Qt+.11,0);nt(new On(new Ai(X,it),1,.021,8,!1),10,S,Pt);const at=X.clone().lerp(it,.46);nt(new On(new Ai(X,at),1,.044,10,!1),10,H,Pt)};var _e=ve;for(let dt=0;dt<8;dt++){const Pt=new We;Pt.userData.part=dt,N.add(Pt),V.push(Pt);const Qt=o[dt],ee=o[dt+1];if(dt<7){const de=ot(Qt),Le=ot(ee);$.push(z(Qt+.012,ee-.012,de,Le,dt===6?O:k,Pt,.025))}for(const de of dt===7?[Qt+.04]:[Qt+.04,ee-.04])I(de,ot(de)+.017,.065,H,Pt),st(de,ot(de)+.049,24,Pt);if(dt<7){const de=dt===6?7:dt<2?3:2;for(let Le=1;Le<=de;Le++){const Be=Qt+(ee-Qt)*Le/(de+1);I(Be,ot(Be)+.004,.025,dt===6?O:P,Pt)}for(const Le of[-1,1])ft(new Ve(ee-Qt-.16,.035,.07),H,Pt).position.set((Qt+ee)/2,Le*(ot((Qt+ee)/2)+.02),0)}}for(let dt=0;dt<7;dt++){const Pt=o[dt],Qt=o[dt+1],ee=[];for(const Le of[-1,1])for(let Be=0;Be<8;Be++){const b=Pt+.12+(Qt-Pt-.24)*Be/7,X=new He(.021,.021,.035,6);X.translate(b,Le*(ot(b)+.052),0),ee.push(X)}const de=wi(ee,!1);ee.forEach(Le=>Le.dispose()),ft(de,S,V[dt])}for(const[dt,Pt,Qt]of[[-4.85,.23,0],[-3.4,.27,1],[.82,.27,5]])G([[dt-.055,Pt-.04],[dt-.055,Pt],[dt+.055,Pt],[dt+.055,Pt-.04]],S,V[Qt]),I(dt,Pt,.02,H,V[Qt]);z(-4.95,.75,.115,.115,S,V[0],.04).userData.spool="lp",z(-3.45,.22,.178,.178,D,V[1],.035).userData.spool="hp",G([[-5.38,.002],[-5.28,.08],[-5.06,.2],[-4.83,.285],[-4.63,.3]],H,V[0]);for(let dt=0;dt<4;dt++){const Pt=-4.75+dt*.325,Qt=.29+dt*.024,ee=.85-dt*.013;St(Pt-.13,Qt,ee,32,.105,H,V[0],0,-.7),St(Pt,Qt,ee,36+dt*4,.19,P,V[0],1)}for(let dt=0;dt<9;dt++){const Pt=-3.33+dt*.21,Qt=.385+dt*.011,ee=.713-dt*.011;St(Pt-.085,Qt,ee,40+dt*2,.09,H,V[1],0,-.7),St(Pt,Qt,ee,44+dt*2,.125,dt>5?O:S,V[1],1.45)}$.push(z(-3.49,-1.4,.758,.68,k,V[1])),nt(jn(-1.32,-.22,.724,.694),12,O,V[2]),nt(jn(-1.32,-.22,.355,.355),12,D,V[2]);for(const dt of[-1.32,-1.13,-.91,-.66,-.22])I(dt,.724+(dt+1.32)/1.1*-.03,.023,D,V[2]),I(dt,.355,.019,O,V[2]);G([[-1.32,.355],[-1.41,.365],[-1.43,.4]],D,V[2]),G([[-1.43,.665],[-1.41,.71],[-1.32,.724]],D,V[2]);const pt=new _n([new ut(.04,-.035),new ut(.055,-.025),new ut(.055,.025),new ut(.039,.035)],16);pt.rotateZ(-Math.PI/2),pt.translate(0,.535,0),nt(pt,18,S,V[2],-1.35);const xt=new He(.014,.021,.075,12);xt.rotateZ(-Math.PI/2),xt.translate(0,.535,0),nt(xt,18,H,V[2],-1.39),bt(-3.47,.77,.875,8,V[1]),St(-.035,.36,.64,42,.16,D,V[3],0,-.85),St(.18,.37,.65,54,.17,O,V[3],1.45,.9),$.push(z(-.13,.34,.7,.71,k,V[3])),St(.445,.36,.65,44,.15,D,V[4],0,-.8),St(.65,.35,.66,58,.17,O,V[4],1,.85),$.push(z(.36,.84,.71,.73,k,V[4])),bt(.9,.34,.73,8,V[5]),I(.94,.345,.13,S,V[5]),G([[.83,.35],[1.02,.32],[1.9,.24],[2.35,.12],[2.5,.001]],H,V[5]);const Ft=[],Ct=[];for(let dt=0;dt<=1;dt++)for(let Pt=0;Pt<=144;Pt++){const Qt=Pt/144*Math.PI*2,ee=dt?.74+.09*Math.cos(Qt*12):.735;Ft.push(.85+dt*.48,ee*Math.cos(Qt),ee*Math.sin(Qt))}for(let dt=0;dt<144;dt++)Ct.push(dt,dt+1,dt+145,dt+1,dt+146,dt+145);const At=new Te;At.setAttribute("position",new fe(Ft,3)),At.setIndex(Ct),At.computeVertexNormals(),ft(At,D,V[5]);for(const dt of[1.64,2.02])for(const Pt of[.3,.55,.74])I(dt,Pt,.035,D,V[6]);for(let dt=0;dt<8;dt++)et(1.65,.43,dt*Math.PI/4,.72,.018,H,V[6]);const Yt=[];for(let dt=0;dt<=72;dt++){const Pt=1.45+dt*2.28/72;Yt.push([Pt,.838+dt%2*.01])}G(Yt,O,V[6]);for(const dt of[1.64,2.02])for(const Pt of[.3,.55,.74])G([[dt-.045,Pt-.022],[dt,Pt],[dt-.045,Pt+.022]],H,V[6]);ft(new Ve(.85,.19,.39),H,V[1]).position.set(-2.45,.99,-.1);for(let dt=0;dt<4;dt++)ft(new Ve(.14,.13,.31),k,V[1]).position.set(-2.75+dt*.2,1.12,-.1);for(let dt=0;dt<5;dt++){const Pt=-.5-dt*.31,Qt=.97,ee=[new U(-3.6,Qt*Math.cos(Pt),Qt*Math.sin(Pt)),new U(-3.25,(Qt+.03)*Math.cos(Pt),(Qt+.03)*Math.sin(Pt)),new U(-1.6,(Qt+.01)*Math.cos(Pt),(Qt+.01)*Math.sin(Pt)),new U(-1.28,.86*Math.cos(Pt),.86*Math.sin(Pt))];ft(new On(new Gr(ee),24,.014,7,!1),dt%2?D:S,V[1])}let re=[];N.updateMatrixWorld(!0);const Ce=new Set,Ae=new Map;N.traverse(dt=>{const Pt=dt.getWorldPosition(new U).x;Ae.set(dt,{old:Pt,next:dt===N||V.includes(dt)||re.includes(dt)?0:a(Pt)})}),N.traverse(dt=>{if(!dt.geometry||re.includes(dt)||Ce.has(dt.geometry))return;Ce.add(dt.geometry);const Pt=Ae.get(dt),Qt=dt.geometry.attributes.position;for(let ee=0;ee<Qt.count;ee++)Qt.setX(ee,a(Qt.getX(ee)+Pt.old)-Pt.next);Qt.needsUpdate=!0,dt.geometry.computeVertexNormals(),dt.geometry.computeBoundingSphere()}),N.traverse(dt=>{dt!==N&&(dt.position.x=Ae.get(dt).next-(Ae.get(dt.parent)?.next||0))}),ve(!0),d=ve}else f=(e.classic?h_:e.layout?c_:a_)(e,{root:N,groups:V,rotors:rt,shells:$,mesh:ft,lathe:G,tube:z,ring:I,row:St,radialInstances:nt,boltCircle:st,strut:bt,mat:F,steel:k,dark:H,light:S,titanium:P,hot:O,copper:D,black:B}),d=f.nozzle||(()=>{});if(e.classic){const pt=new Zn().setFromObject(N);u=Math.max(u,Math.abs(pt.min.y),Math.abs(pt.max.y),Math.abs(pt.min.z),Math.abs(pt.max.z))}const C=V.map(pt=>{const xt=new Zn().setFromObject(pt);return Math.max(.55,(xt.max.y-xt.min.y)/2,(xt.max.z-xt.min.z)/2)}),tt=[new U(-5.7,0,0),new U(5.8,0,0)],Z=new Hr(new Te().setFromPoints(tt),new Xf({color:8427150,dashSize:.1,gapSize:.1,transparent:!0,opacity:.38}));Z.computeLineDistances(),g.add(Z);const J=new Kf(24,48,12634563,14475740);J.position.y=-u-.22,J.material.transparent=!0,J.material.opacity=.3,g.add(J);const Q=3e3,mt=new Float32Array(Q*6),ht=new Float32Array(Q*6),_t=[];for(let pt=0;pt<Q;pt++)_t.push({progress:Math.random(),theta:Math.random()*Math.PI*2,f:.12+Math.random()*.76,bypass:pt/Q<(s.bypassFraction??(e.id==="j79"?0:n?.37:.75))});const Wt=new Te;Wt.setAttribute("position",new cn(mt,3).setUsage(pl)),Wt.setAttribute("color",new cn(ht,3).setUsage(pl));const $t=new ms({vertexColors:!0,transparent:!0,opacity:.83,depthWrite:!1}),w=new tu(Wt,$t);w.frustumCulled=!1,g.add(w);const M=new he,j=[[288,2260432],[600,567471],[1e3,14268458],[1500,16089127],[2100,15348788]].map(([pt,xt])=>[pt,new he(xt)]);function lt(pt){let xt=0;for(;xt<j.length-2&&pt>j[xt+1][0];)xt++;return M.copy(j[xt][1]).lerp(j[xt+1][1],Xe.clamp((pt-j[xt][0])/(j[xt+1][0]-j[xt][0]),0,1))}let Y={mode:"cutaway",cut:.12,explode:.6,throttle:85,afterburner:e.afterburner,flow:!0,playing:!0,selected:0,isolate:!1,subpart:-1,animationSpeed:1,shaftMode:!1,nozzleAngle:0,probeEnabled:!1,probeProgress:.5,probeBypass:!1,tourProgress:null,tourBypass:!1},ct=0;function Gt(pt,xt,Ft=Y){if(s.flowPoint)return s.flowPoint(pt,xt,Ft);const Ct=-5.5+pt*11.6,At=c(Ct,xt.bypass,Ft.afterburner),Yt=Math.sqrt(At[0]**2+(At[1]**2-At[0]**2)*xt.f),se=xt.theta+Math.max(0,Math.min(Ct+5,5))*.08;return[Ct,...s.flowPosition?s.flowPosition(Ct,xt,Ft.afterburner):[Yt*Math.cos(se),Yt*Math.sin(se)]]}const vt=x_({preset:e,physics:s,root:N,scene:g,camera:v,controls:x,groups:V,rotors:rt,materials:T,modelRadius:u,flowPoint:Gt});let Nt=e.afterburner,Ot="perspective";function Mt(pt="perspective"){Ot=pt;const Ft=Y.mode==="exploded"&&!Y.isolate?1.5:1;if(x.target.set(Y.isolate?(h[Y.selected][0]+h[Y.selected][1])/2:0,0,0),Y.isolate&&Y.subpart>=0){const ve=V[Y.selected].children.filter(Ce=>Ce.userData.bladeRow)[Y.subpart];ve&&(x.target.x=ve.position.x)}const Ct=x.target.x;let At=Math.max(5.6/(Math.tan(34*Math.PI/360)*v.aspect*.82),u*1.3/(Math.tan(34*Math.PI/360)*.65))*Ft;const Yt=e.parts[Y.selected].kind,se=e.layout,re=e.classic?C[Y.selected]:!n&&["fan","bypass"].includes(Yt)?u:se?se.stages[Y.selected]?Math.max(...se.stages[Y.selected].tip)+.15:Yt==="combustor"?se.combustor.caseRadius+.1:se.exhaust.outer[0][1]+.1:1.05;if(Y.isolate&&(At=Math.max(4.8,3.1/v.aspect,re*3.7)),pt==="front"){const Ce=(Y.isolate?(h[Y.selected][1]-h[Y.selected][0])/2:5.6)+(Y.isolate?re:u)/(Math.tan(34*Math.PI/360)*Math.min(1,v.aspect)*.82);v.position.set(Ct-Ce*Ft,.02,.02)}else pt==="side"?v.position.set(Ct,.1,At):e.id==="pegasus"?v.position.set(Ct-At*.35,At*.65,At*.6):e.layout?v.position.set(Ct-At*.48,At*.21,At*.852):v.position.set(Ct-At*.3,At*.18,At*.936);Y.isolate&&Y.subpart>=0&&pt==="perspective"&&v.position.set(Ct-re*2.8,re*.9,re*2.5),x.update()}function It(pt){const xt=Y.mode,Ft=Y.isolate,Ct=Y.selected,At=Y.subpart;Y={...Y,...pt},e.afterburner||(Y.afterburner=!1),vt.setState(Y),E.constant=Y.cut,T.forEach(Yt=>{Yt.clippingPlanes=Y.mode==="cutaway"&&!Yt.userData.keepUncut?[E]:[]}),$t.clippingPlanes=Y.mode==="cutaway"&&e.id!=="pegasus"?[E]:[],w.visible=Y.flow&&Y.mode!=="exploded"&&!Y.isolate&&!Y.shaftMode,f.updateMechanism?.(Y),Y.afterburner!==Nt&&(d(Y.afterburner),Nt=Y.afterburner),V.forEach((Yt,se)=>{Yt.visible=!Y.isolate||se===Y.selected;const re=Yt.children.filter(ve=>ve.userData.bladeRow);Yt.children.forEach(ve=>{ve.visible=(!(Y.isolate&&Y.subpart>=0)||ve===re[Y.subpart])&&!(ve.userData.bypassCowl&&Y.mode==="exploded"&&!Y.isolate)})}),$.forEach(Yt=>{Yt.visible=Y.mode!=="exploded"&&!Y.isolate}),(xt!==Y.mode||Ft!==Y.isolate||At!==Y.subpart||Y.isolate&&Ct!==Y.selected)&&Mt(Ot)}const Kt=new Zl,Xt=new ut;let Lt=null;_.domElement.addEventListener("pointerdown",pt=>Lt={x:pt.clientX,y:pt.clientY}),_.domElement.addEventListener("pointerup",pt=>{if(!Lt||Math.hypot(pt.clientX-Lt.x,pt.clientY-Lt.y)>5)return;const xt=_.domElement.getBoundingClientRect();Xt.set((pt.clientX-xt.left)/xt.width*2-1,-(pt.clientY-xt.top)/xt.height*2+1),Kt.setFromCamera(Xt,v);const Ft=Kt.intersectObjects(V,!0);for(const Ct of Ft){let At=Ct.object,Yt=!0;for(;At&&At!==N;)At.visible||(Yt=!1),At=At.parent;if(!(!Yt||Y.mode==="cutaway"&&E.distanceToPoint(Ct.point)<0)){for(At=Ct.object;At.parent&&At.userData.part===void 0;)At=At.parent;if(At.userData.part!==void 0){t(At.userData.part);break}}}});function ie(pt,xt){V.forEach((Ct,At)=>{const Yt=Y.mode==="exploded"&&!Y.isolate,se=Yt?(At-(V.length-1)/2)*Y.explode*.95:0;Ct.position.x=Xe.damp(Ct.position.x,se,9,pt),Ct.position.y=Xe.damp(Ct.position.y,Yt&&e.layout&&e.parts[At].kind==="bypass"?u*1.4*Y.explode:0,9,pt)});const Ft=(Y.playing?pt:ct)*Math.max(.01,Y.animationSpeed??1);if(ct=0,rt.forEach(({g:Ct,spin:At})=>Ct.rotation.x+=Ft*At*.54*(Ct.userData.independentPropeller?8:1)),f.tickMechanism?.(Ft,Y),vt.tick(Y),w.visible){const Ct=Ws(e,s,Y),At=Ws(e,s,Y,!0);for(let Yt=0;Yt<Q;Yt++){const se=_t[Yt],re=(.7+Y.throttle/90)*(se.progress>.78?1.6:se.progress>.45?1.25:1);se.progress=(se.progress+Ft*re/11.6)%1;for(let ve=0;ve<2;ve++){const Ce=Math.max(0,se.progress-ve*.0053*re),Ae=Gt(Ce,se),dt=Yt*6+ve*3;mt.set(Ae,dt);const Pt=lt(Au(se.bypass?At:Ct,Ce).temperature);ht[dt]=Pt.r,ht[dt+1]=Pt.g,ht[dt+2]=Pt.b}}Wt.attributes.position.needsUpdate=!0,Wt.attributes.color.needsUpdate=!0}x.update(),_.render(g,v)}function W(){const pt=i.clientWidth,xt=i.clientHeight;_.setSize(pt,xt),v.aspect=pt/Math.max(xt,1),v.updateProjectionMatrix(),Mt(Ot)}const Tt=new ResizeObserver(W);Tt.observe(i),W(),Mt(),It({});let Rt="",kt=[];const Et=new Zl,gt=[];N.traverse(pt=>{pt.userData.annotationOccluder&&gt.push(pt)});function Vt(){const pt=[Y.mode,Y.cut,Y.isolate,Y.selected,Y.subpart,Y.afterburner].join("/");pt!==Rt&&(Rt=pt,N.updateMatrixWorld(!0),kt=V.map((xt,Ft)=>{if(!xt.visible)return null;const Ct=xt.children.filter(de=>de.userData.bladeRow&&de.visible),At=Y.isolate&&Y.subpart>=0?Ct[0]:Ct.filter(de=>!de.userData.rotating)[Math.floor(Ct.filter(de=>!de.userData.rotating).length/2)],[Yt,se]=h[Ft],re=At?At.position.x:(Yt+se)/2,ve=e.parts[Ft].kind==="bypass"?e.fanRadius*.86:e.parts[Ft].kind==="fan"?e.fanRadius*.67:.64,Ce=new U(re,ve,Math.min(-.08,Y.mode==="cutaway"?Y.cut-.04:0));let Ae=null,dt=1/0;const Pt=new U,Qt=new xe,ee=xt.matrixWorld.clone().invert();return(At||xt).traverse(de=>{if(!de.isMesh)return;for(let b=de;b&&b!==xt;b=b.parent)if(!b.visible)return;const Le=de.geometry.attributes.position;if(!Le)return;const Be=new xe().multiplyMatrices(ee,de.matrixWorld);for(let b=0;b<(de.isInstancedMesh?de.count:1);b++){de.isInstancedMesh&&de.getMatrixAt(b,Qt);for(let X=0;X<Le.count;X+=Math.max(1,Math.floor(Le.count/96))){if(Pt.fromBufferAttribute(Le,X),de.isInstancedMesh&&Pt.applyMatrix4(Qt),Pt.applyMatrix4(Be),Pt.x<Yt-.05||Pt.x>se+.05||Y.mode==="cutaway"&&Pt.z>Y.cut)continue;const it=Pt.distanceToSquared(Ce);it<dt&&(dt=it,Ae=Pt.clone())}}}),Ae}))}function ne(pt){Vt();const xt=kt[pt];if(!xt)return{visible:!1,x:0,y:0};const Ft=V[pt].localToWorld(xt.clone()),Ct=Ft.clone().project(v);Et.set(v.position,Ft.clone().sub(v.position).normalize()),Et.far=v.position.distanceTo(Ft)-.025;const At=Et.intersectObjects(gt,!1).some(se=>{for(let re=se.object;re;re=re.parent)if(!re.visible)return!1;return Y.mode!=="cutaway"||E.distanceToPoint(se.point)>=0}),Yt=V[pt].localToWorld(new U(xt.x,u,0)).project(v);return{x:(Ct.x*.5+.5)*i.clientWidth,y:(-Ct.y*.5+.5)*i.clientHeight,labelY:(-Yt.y*.5+.5)*i.clientHeight,occluded:At,visible:V[pt].visible&&Ct.z>=-1&&Ct.z<=1&&Math.abs(Ct.x)<1&&Math.abs(Ct.y)<1}}function Me(){Tt.disconnect(),x.dispose();const pt=new Set,xt=new Set(T);g.traverse(Ft=>{if(Ft.geometry&&pt.add(Ft.geometry),Ft.material)for(const Ct of Array.isArray(Ft.material)?Ft.material:[Ft.material])xt.add(Ct)}),pt.forEach(Ft=>Ft.dispose()),xt.forEach(Ft=>Ft.dispose()),y.dispose(),g.clear(),_.dispose(),_.forceContextLoss(),_.domElement.remove()}return{dispose:Me,preset:e,physics:s,update:It,tick:ie,setView:Mt,project:ne,renderer:_,scene:g,camera:v,groups:V,rotors:rt,step:(pt=1/30)=>{ct+=pt},...Object.fromEntries(["sampleFlow","focusFlow","getCameraPose","setCameraPose","spoolInfo"].map(pt=>[pt,vt[pt]])),getState:()=>({...Y}),stats:()=>({drawCalls:_.info.render.calls,triangles:_.info.render.triangles,geometries:_.info.memory.geometries,rotorRows:rt.filter(pt=>pt.g.userData.bladeRow).length,engineId:e.id,particleCount:Q,fanBladeCount:e.layout?rt[0]?.g.children.find(pt=>pt.isInstancedMesh)?.count:void 0,spoolSpeeds:[...new Set(rt.map(pt=>pt.spin))],spools:vt.spoolInfo(),flowVisible:w.visible,particleChecksum:_t.slice(0,5).map(pt=>pt.progress),particleFinite:mt.every(Number.isFinite)})}}const wt=i=>document.querySelector(i),je=i=>String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;"),Fo=([i,t])=>`<a href="${je(t)}" target="_blank" rel="noreferrer">${je(i)} ↗</a>`,Er=i=>Number.isFinite(i)?Math.round(i).toLocaleString("zh-CN"):"—";function v_({state:i,getPrimary:t,getPreset:e,sync:n,selectPart:s}){let r,o,a=0,c=!1,l="primary",h=!1,u=0,d="",f="",g="",_="";const m=En.map(S=>`<option value="${S.id}">${je(S.name)} · ${je(S.subtitle)}</option>`).join("");wt("#engine-select").innerHTML=m,wt("#compare-select").innerHTML=m,wt("#engine-library-count").textContent=`SELECT ENGINE / ${String(En.length).padStart(2,"0")}`,wt("#compare-select").value=En.find(S=>S.id!==e().id)?.id||En[0].id;const p=S=>t()?.physics.hasBypass??S.hasBypass??!["j79","pt6a"].includes(S.id),y=(S,P=!1)=>t()?.sampleFlow?.(S,P);function v(S){document.querySelectorAll("[data-view]").forEach(P=>{const O=P.dataset.view===S;P.classList.toggle("active",O),P.setAttribute("aria-pressed",O)})}function x(){h=!1,i.tourProgress=null,d=""}function A(){const S=e();return{...i,engineId:o.id,cut:i.cut/(S.fanRadius||1)*(o.fanRadius||1),selected:Math.min(i.selected,o.parts.length-1),isolate:!1,subpart:-1,labels:!1,afterburner:o.afterburner&&i.afterburner,tourProgress:null,probeEnabled:!1}}function R(){if(!o)return;const S=e(),P=S.id+"|"+o.id;if(P===_)return;_=P,wt("#compare-caption").textContent=o.name+" / SYNCHRONIZED VIEW";const O=S.layout?.fanDiameterM&&o.layout?.fanDiameterM?`<p class="verified-diameter">已核实风扇直径：${S.name} ${S.layout.fanDiameterM.toFixed(2)} m / ${o.name} ${o.layout.fanDiameterM.toFixed(2)} m</p>`:"";wt("#compare-facts").innerHTML=`<table><caption>构型对比</caption><thead><tr><th>项目</th><th>${je(S.name)}</th><th>${je(o.name)}</th></tr></thead><tbody><tr><th>轴系</th><td>${je(S.facts.find(D=>/转子|轴/.test(D))||S.spools+" 轴")}</td><td>${je(o.facts.find(D=>/转子|轴/.test(D))||o.spools+" 轴")}</td></tr><tr><th>构型</th><td>${je(S.facts.filter(D=>!/转子|轴/.test(D)).join(" / "))}</td><td>${je(o.facts.filter(D=>!/转子|轴/.test(D)).join(" / "))}</td></tr><tr><th>加力</th><td>${S.afterburner?"有":"无"}</td><td>${o.afterburner?"有":"无"}</td></tr></tbody></table>${O}`}async function L(S){const P=++a;if(c=!1,wt("#compare-loading").hidden=!1,wt("#compare-loading").textContent="正在构建对比模型…",wt("#compare-select").disabled=!0,wt("#compare-viewport").setAttribute("aria-busy","true"),await new Promise(O=>requestAnimationFrame(()=>requestAnimationFrame(O))),!(P!==a||!i.comparing)){r?.dispose(),r=void 0;try{o=Yr(S),r=wu(wt("#compare-viewport"),()=>{},o),r.update(A());const O=t()?.getCameraPose?.();O&&r.setCameraPose?.(O),l="primary",_="",R(),wt("#compare-loading").hidden=!0}catch(O){c=!0,wt("#compare-loading").textContent="对比模型构建失败，请重新选择机型。",console.error(O)}finally{wt("#compare-select").disabled=!1,wt("#compare-viewport").setAttribute("aria-busy","false")}}}function N(){i.comparing=!i.comparing,wt("#compare-pane").hidden=!i.comparing,wt("#viewer-grid").classList.toggle("comparing",i.comparing),wt("#compare-toggle").setAttribute("aria-pressed",i.comparing),wt("#compare-toggle").classList.toggle("active",i.comparing),wt("#compare-toggle").textContent=i.comparing?"关闭双机对比":"双机对比",i.comparing?L(wt("#compare-select").value):(++a,r?.dispose(),r=void 0,wt("#compare-select").disabled=!1,c=!1,wt("#compare-viewport").setAttribute("aria-busy","false"))}wt("#compare-toggle").addEventListener("click",N),wt("#compare-select").addEventListener("change",S=>L(S.target.value));for(const S of["pointerdown","wheel"])wt("#viewport").addEventListener(S,()=>{l="primary",h&&(h=!1,wt("#tour-play").textContent="继续导览")},{passive:!0}),wt("#compare-viewport").addEventListener(S,()=>{l="comparison",h&&(h=!1,T())},{passive:!0});wt("#animation-speed").addEventListener("input",S=>{i.animationSpeed=+S.target.value,n()}),wt("#step-frame").addEventListener("click",()=>{i.playing=!1,h=!1,n(),t()?.step?.(1/30),r?.step?.(1/30)}),wt("#shaft-mode").addEventListener("change",S=>{x(),i.shaftMode=S.target.checked,n()}),wt("#spool-legend").addEventListener("click",S=>{const P=S.target.closest("[data-spool-part]");P&&(i.shaftMode=!0,wt("#shaft-mode").checked=!0,s(+P.dataset.spoolPart))}),wt("#nozzle-angle").addEventListener("input",S=>{i.nozzleAngle=+S.target.value,n()});function E(){(i.tourProgress===null||i.tourProgress>=1)&&(i.tourProgress=0),i.mode="cutaway",i.isolate=!1,i.shaftMode=!1,i.flow=!0,wt("#flow").checked=!0,i.playing=!0,h=!0,l="primary",u=0,n(),v(null),t()?.focusFlow?.(i.tourProgress,i.tourBypass),wt("#primary-stage").scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}wt("#tour-play").addEventListener("click",()=>{h?(h=!1,n()):E()}),wt("#tour-overlay-play").addEventListener("click",()=>wt("#tour-play").click()),wt("#tour-overlay-stop").addEventListener("click",()=>wt("#tour-stop").click()),wt("#tour-stop").addEventListener("click",()=>{x(),t()?.setView("perspective"),l="primary",n(),v("perspective")}),wt("#tour-progress").addEventListener("input",S=>{h=!1,i.tourProgress=+S.target.value,i.mode="cutaway",i.isolate=!1,i.shaftMode=!1,l="primary",n(),v(null),t()?.focusFlow?.(i.tourProgress,i.tourBypass)}),wt("#tour-route").addEventListener("change",S=>{i.tourBypass=S.target.value==="bypass",i.tourProgress!==null?(i.tourProgress=0,n(),v(null),t()?.focusFlow?.(0,i.tourBypass)):n()}),wt("#probe-enabled").addEventListener("change",S=>{i.probeEnabled=S.target.checked,i.probeEnabled&&(i.isolate=!1,i.mode="cutaway"),n()}),wt("#probe-progress").addEventListener("input",S=>{i.probeProgress=+S.target.value,i.probeEnabled=!0,wt("#probe-enabled").checked=!0,(i.isolate||i.mode==="exploded")&&(i.isolate=!1,i.mode="cutaway"),n()}),wt("#probe-route").addEventListener("change",S=>{i.probeBypass=S.target.value==="bypass",f="",n()});function T(){const S=i.tourProgress??0,P=y(S,i.tourBypass);if(wt("#tour-progress").value=S,wt("#tour-progress-value").textContent=Math.round(S*100)+"%",wt("#tour-play").textContent=h?"暂停导览":i.tourProgress!==null&&S<1?"继续导览":"开始导览",wt("#tour-overlay").hidden=i.tourProgress===null,wt("#tour-overlay-play").textContent=h?"暂停":S>=1?"重播":"继续",!P||i.tourProgress===null){wt("#tour-station").textContent="选择流路，沿公开构型的近似通道前进。",wt("#tour-explanation").textContent="镜头跟随示踪标记；按流经部位讲解工作过程。导览位置并非实际驻留时间。",d="";return}const O=e().parts[P.partIndex],D=P.stationLabel||O?.name||"沿流路前进";d!==D&&(wt("#tour-station").textContent=D,d=D);const B=e().id==="rb211"?"风扇给外涵气流增压；冷流绕过核心燃烧区，在后方混合区与热流汇合，再由共同喷口排出。":e().id==="pegasus"?"低压风扇给外涵气流增压；气流绕过核心燃烧区，直接分到前部左右一对冷喷口。":e().id==="al31f"?"低压系统给外涵气流增压；冷流绕过核心燃烧区，在涡轮后混合，并通过共同加力段和喷管。":"风扇给外涵气流增压；这股气流绕过核心燃烧区，由风扇喷口独立排出。";wt("#tour-explanation").textContent=i.tourBypass?B:O?.desc||"气流沿模型预设通道前进，颜色表示教学总温。",wt("#tour-overlay-label").textContent=`${Math.round(S*100)}% · ${D}`,wt("#tour-overlay-copy").textContent=wt("#tour-explanation").textContent.split("。")[0]+"。"}function F(){const S=y(i.probeProgress,i.probeBypass);wt("#probe-progress").value=i.probeProgress,wt("#probe-progress-value").textContent=Math.round(i.probeProgress*100)+"%",wt("#probe-temperature").textContent=Er(S?.temperature),wt("#probe-pressure").textContent=Er(S?.pressure),wt("#probe-station").textContent=S?.stationLabel||"等待模型";const P=[e().id,i.throttle,i.afterburner,i.probeBypass].join("|");if(P!==f){f=P;const O=Array.from({length:65},(K,ot)=>y(ot/64,i.probeBypass));if(O.some(K=>!K||!Number.isFinite(K.pressure))){f="";return}const D=Math.ceil(Math.max(...O.map(K=>K.temperature))/200)*200,B=Math.ceil(Math.max(...O.map(K=>K.pressure))/200)*200,V=K=>36+K*288,rt=(K,ot)=>136-K/ot*112,$=(K,ot)=>O.map(ft=>`${V(ft.progress).toFixed(1)},${rt(ft[K],ot).toFixed(1)}`).join(" ");wt("#probe-chart").innerHTML=`<svg viewBox="0 0 360 158" role="img" aria-label="教学总温与总压沿流路曲线，温度峰值 ${Er(Math.max(...O.map(K=>K.temperature)))} K，总压峰值 ${Er(Math.max(...O.map(K=>K.pressure)))} kPa。左轴温度，右轴压力；非实测。"><path d="M36 24H324M36 80H324M36 136H324" stroke="#cdd7c6" stroke-dasharray="3 4" fill="none"/><polyline points="${$("temperature",D)}" fill="none" stroke="#bb6539" stroke-width="2.2"/><polyline points="${$("pressure",B)}" fill="none" stroke="#287e99" stroke-width="2" stroke-dasharray="5 3"/><path id="probe-cursor" d="M180 20V138" stroke="#40553d" stroke-width="1.5"/><text x="32" y="14" text-anchor="end" fill="#9e4d2a">${D}</text><text x="328" y="14" fill="#256e87">${B}</text><text x="32" y="139" text-anchor="end">0</text><text x="328" y="139">0</text><text x="36" y="153">进气</text><text x="324" y="153" text-anchor="end">排气</text></svg>`}wt("#probe-cursor")?.setAttribute("d",`M${36+i.probeProgress*288} 20V138`)}function k(){const S=t()?.spoolInfo?.()||[],P=e().id+"|"+i.selected+"|"+i.shaftMode;if(P!==g){g=P,wt("#spool-legend").innerHTML=S.map(D=>`<button class="spool-chip${i.shaftMode&&D.parts.includes(i.selected)?" active":""}" data-spool-part="${D.parts[0]}" aria-pressed="${i.shaftMode&&D.parts.includes(i.selected)}"><i style="--spool-color:${je(D.color)}"></i>${je(D.label)}</button>`).join("");const O=S.filter(D=>D.parts.includes(i.selected));wt("#spool-description").textContent=(O.length?O.map(D=>`${D.label}：${D.parts.map(B=>e().parts[B]?.short||e().parts[B]?.name).join(" ↔ ")}`).join("；"):"当前为固定结构或流道。选择一个轴系，查看与它联动的转动部件。")+" 轴系着色时隐藏气流。"}}function H(){const S=e(),P=S.parts[i.selected],O=P.evidence,D=typeof O=="string"?O:Array.isArray(O)?O.join("；"):O?.verified||O?.supported||O?.facts,B=Array.isArray(D)?D.join("；"):D,V=Array.isArray(O?.sources)?O.sources:S.sources,rt=S.reference||P.reference,$=rt?.imageUrl?`<figure class="reference-figure"><img src="${je(rt.imageUrl)}" alt="${je(rt.caption||S.name+" 公开参考图")}" loading="lazy"/><figcaption>${je(rt.caption||"外部公开参考图")} · ${Fo([rt.title||"查看原始资料",rt.url||rt.imageUrl])}</figcaption></figure>`:S.id==="al31f"?`<figure class="reference-figure"><img src="https://djvu.online/jpg1/I/F/4/IF4LC5NA9fozh/004.webp" alt="AL-31F 公开图册纵剖参考图，外部资料" loading="lazy"/><figcaption>AL-31F 图册纵剖 · ${Fo(S.sources[1])}</figcaption></figure>`:"";wt("#evidence-title").textContent=S.name+" · "+P.name,wt("#part-evidence-content").innerHTML=`<div class="evidence-facts"><span class="eyebrow">PUBLIC STRUCTURE</span><h3>资料约束的构型</h3><p>${je(B||S.evidence)}</p>${B?"":'<p class="evidence-caveat">以上为当前机型的公开构型约束。此部件的具体尺寸与每项细节，并非均有独立图纸验证。</p>'}</div><div class="evidence-approx"><span class="eyebrow">RECONSTRUCTION</span><h3>当前模型怎样表达</h3><p>${je(P.desc)}</p><p>${je(O?.approximation||O?.approximate||"内部轴向位置、半径、叶型、装配间隙及附属细节采用教学重建。模型不是厂家 CAD；流线、总温和总压为预设流路及教学站位计算，非实测或 CFD。")}</p></div>${$}<h3>原始图、照片与文字资料</h3><p class="evidence-caveat">图像与 PDF 在原始资料中打开；按标题注明的页面、图号核对，避免将三维重建当作实物照片。</p><ul class="evidence-links">${V.map(K=>`<li>${Fo(Array.isArray(K)?K:[K.title,K.url])}</li>`).join("")}</ul>`,wt("#evidence-dialog").showModal()}return wt("#part-evidence-open").addEventListener("click",H),wt("#evidence-close").addEventListener("click",()=>wt("#evidence-dialog").close()),wt("#evidence-dialog").addEventListener("click",S=>{if(S.target===S.currentTarget){const P=S.currentTarget.getBoundingClientRect();(S.clientX<P.left||S.clientX>P.right||S.clientY<P.top||S.clientY>P.bottom)&&S.currentTarget.close()}}),{sync(){const S=e();wt("#animation-speed-value").textContent=i.animationSpeed.toFixed(2)+"×",wt("#animation-speed").value=i.animationSpeed,wt("#shaft-mode").checked=i.shaftMode,wt("#probe-enabled").checked=i.probeEnabled;const P=p(S);for(const O of["tour-route","probe-route"])wt("#"+O+' option[value="bypass"]').disabled=!P;P||(i.tourBypass=!1,i.probeBypass=!1),wt("#tour-route").value=i.tourBypass?"bypass":"core",wt("#probe-route").value=i.probeBypass?"bypass":"core",wt("#vector-control").hidden=S.id!=="pegasus",wt("#nozzle-angle").value=i.nozzleAngle,wt("#nozzle-angle-value").textContent=`${Math.round(i.nozzleAngle)}° · ${i.nozzleAngle===0?"向后":i.nozzleAngle===90?"向下":"偏转"}`,i.playing||(h=!1),k(),T(),F(),r&&(r.update(A()),R())},changed(){x(),i.probeProgress=.5,i.tourBypass=!1,i.probeBypass=!1,l="primary",f="",g="",_=""},tick(S,P){if(h&&t()&&(i.tourProgress=Math.min(1,(i.tourProgress??0)+S*.045*i.animationSpeed),u+=S,t().update(i),t().focusFlow?.(i.tourProgress,i.tourBypass),l="primary",(u>.15||i.tourProgress>=1)&&(u=0,i.tourProgress>=1&&(h=!1),T())),r)if(l==="comparison"){r.tick(S,P);const O=r.getCameraPose?.();O&&t()?.setCameraPose?.(O)}else{const O=t()?.getCameraPose?.();O&&r.setCameraPose?.(O),r.tick(S,P)}},cameraPrimary(){l="primary"},interruptTour:x,qa(){return{comparing:i.comparing,comparisonId:o?.id,comparisonError:c,comparisonStats:r?.stats(),primaryPose:t()?.getCameraPose?.(),comparisonPose:r?.getCameraPose?.(),tourPlaying:h,probe:y(i.probeProgress,i.probeBypass),spools:t()?.spoolInfo?.()||[]}}}}const Bt=i=>document.querySelector(i),ds=i=>[...document.querySelectorAll(i)],ol=matchMedia("(prefers-reduced-motion: reduce)").matches;let ue=Yr(new URL(location.href).searchParams.get("engine"));const qt={engineId:ue.id,mode:"cutaway",cut:.12,explode:.6,throttle:85,afterburner:ue.afterburner,flow:!0,labels:!1,playing:!ol,selected:0,isolate:!1,subpart:-1,animationSpeed:1,shaftMode:!1,nozzleAngle:0,probeEnabled:!1,probeProgress:.5,probeBypass:!1,tourProgress:null,tourBypass:!1,comparing:!1};let Ze,Br,un,is=ue.parts,Ru=[],Cu=[],Ic=0,Na="";const vi=i=>i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;");function al(i){un?.interruptTour(),qt.selected=i,qt.subpart=-1,Ln()}function M_(){return Ze?.groups[qt.selected]?.children.filter(i=>i.userData.bladeRow)||[]}function Ln(){if(!Ze)return;Ze.update(qt),ds("[data-mode]").forEach(r=>{const o=r.dataset.mode===qt.mode;r.classList.toggle("active",o),r.setAttribute("aria-pressed",o)}),ds("[data-part]").forEach(r=>{const o=+r.dataset.part===qt.selected;r.classList.toggle("active",o),r.setAttribute("aria-pressed",o)});const i=is[qt.selected];Bt("#part-title").textContent=i.name,Bt("#part-tag").textContent=i.tag,Bt("#part-desc").textContent=i.desc;const t=M_();Bt("#subpart-control").hidden=!qt.isolate||!t.length;const e=`${ue.id}-${qt.selected}`;e!==Na&&(Bt("#subpart").innerHTML='<option value="-1">全部叶排与支承结构</option>'+t.map((r,o)=>`<option value="${o}">${r.userData.label||`第 ${Math.floor(o/2)+1} 级 · ${r.userData.rotating?"转子叶盘":"静子叶排"}`}</option>`).join(""),Na=e),Bt("#subpart").value=String(qt.subpart),Bt("#isolate").setAttribute("aria-pressed",qt.isolate),Bt("#isolate").classList.toggle("active",qt.isolate),Bt("#cut-value").textContent=`z = ${qt.cut>=0?"+":""}${qt.cut.toFixed(2)}`,Bt("#explode-value").textContent=`${Math.round(qt.explode*100)}%`,Bt("#throttle-value").textContent=`${qt.throttle}%`,Bt("#play").textContent=qt.playing?"暂停运行":"继续运行",Bt("#play").setAttribute("aria-label",qt.playing?"暂停发动机和流动动画":"继续发动机和流动动画"),Bt("#play").setAttribute("aria-pressed",!qt.playing),Bt("#status-text").textContent=`${qt.playing?"运行中":"已暂停"} · ${qt.isolate?"部件观察":qt.mode==="exploded"?"部件分解":"近似模型"}`,Bt("#flow-value").textContent=qt.shaftMode?"轴系模式隐藏":qt.mode==="exploded"||qt.isolate?"拆解时隐藏":qt.flow?qt.playing?"实时示踪":"示踪已暂停":"已隐藏";const n=Ws(ue,Br,qt),s=n.map(r=>r.temperature);Bt("#temp-value").innerHTML=`${Math.round(Math.max(...s))}<small>K</small>`,Bt("#label-layer").hidden=!qt.labels,y_(n),un?.sync()}function y_(i){const t=a=>18+a*318,e=a=>110-(a-288)/1812*91,n=i.map(a=>`${t(a.progress)},${e(a.temperature)}`).join(" "),s=Br.hasBypass??!["j79","pt6a"].includes(ue.id),r=s?Ws(ue,Br,qt,!0):[],o=r.length?`<polyline points="${r.map(a=>`${t(a.progress)},${e(a.temperature)}`).join(" ")}" fill="none" stroke="#168daf" stroke-width="1.4" stroke-dasharray="4 3"><title>外涵流路教学总温</title></polyline>`:"";Bt("#station-chart").innerHTML=`<svg viewBox="0 0 354 125" role="img" aria-label="${ue.name} 核心流路教学总温，峰值 ${Math.round(Math.max(...i.map(a=>a.temperature)))} K，非实测"><defs><linearGradient id="heat" x1="0" x2="1"><stop offset="0" stop-color="#227dd0"/><stop offset=".24" stop-color="#08a8af"/><stop offset=".4" stop-color="#f58027"/><stop offset=".6" stop-color="#d9b82a"/><stop offset="1" stop-color="#ea3434"/></linearGradient></defs><path d="M18 20H336M18 65H336M18 110H336" stroke="#bdc8bf" stroke-width=".6" stroke-dasharray="3 4" fill="none"/><path d="M${n.replaceAll(" "," L")} L336 110 L18 110 Z" fill="url(#heat)" opacity=".09"/><polyline points="${n}" fill="none" stroke="url(#heat)" stroke-width="2.5" stroke-linejoin="round"/>${o}${i.map(a=>`<circle cx="${t(a.progress)}" cy="${e(a.temperature)}" r="2.7" fill="#f6f7ef" stroke="#616f66"><title>${a.stationLabel}：${Math.round(a.temperature)} K（教学总温）</title></circle>`).join("")}<text x="18" y="13" fill="#68756c" font-size="9">2100 K</text><text x="18" y="122" fill="#68756c" font-size="9">288 K</text>${s?'<text x="230" y="104" fill="#168daf" font-size="9">虚线：外涵流路</text>':""}</svg>`}function S_(){document.title=`${ue.name} · 航空发动机交互图谱`,Bt("#engine-name").textContent=ue.name,Bt("#engine-name").dataset.long=String(ue.name.length>9),Bt("#engine-subtitle").textContent=ue.subtitle,Bt("#engine-family").textContent=ue.family,Bt("#topbar-engine").textContent=ue.name,Bt(".model-id").textContent=ue.name+" / 3D STUDY",Bt("#engine-summary").textContent=ue.summary+"。三维模型分别适配窗口，非同尺度；内部比例为参考图估计。",Bt(".model-facts").innerHTML=ue.facts.map(e=>`<span>${e}</span>`).join(""),Bt("#viewport").setAttribute("aria-label",ue.name+" 三维发动机模型，可拖动旋转、滚轮缩放"),Bt("#component-count").textContent=String(is.length).padStart(2,"0")+" COMPONENTS",Bt("#parts").innerHTML=is.map((e,n)=>`<button data-part="${n}" class="part-button${n===qt.selected?" active":""}" aria-pressed="${n===qt.selected}"><span class="part-number">${String(n+1).padStart(2,"0")}</span><span class="part-name">${e.name}<small>${e.tag}</small></span><span class="stage-count">${e.stages?e.stages+" 级":"↗"}</span></button>`).join(""),Bt("#engine-select").value=ue.id;const i=Bt("#fan-scale");if(i.hidden=!Number.isFinite(ue.layout?.fanDiameterM),Number.isFinite(ue.layout?.fanDiameterM)){const e=En.filter(s=>Number.isFinite(s.layout?.fanDiameterM)),n=Math.max(...e.map(s=>s.layout.fanDiameterM));i.innerHTML=`<svg viewBox="0 0 380 48" role="img" aria-label="真实风扇直径同尺度比较：CFM56-7B 为 1.55 米，GE90-115B 为 3.25 米，约为前者的 2.10 倍"><text x="0" y="10" fill="#64725c" font-size="9">真实风扇直径 · 同尺度</text>${e.map((s,r)=>{const o=s.id===ue.id,a=25+r*18;return`<text x="0" y="${a}" font-size="10" fill="${o?"#24572e":"#64725c"}">${s.id==="cfm56"?"CFM56-7B":"GE90-115B"}</text><rect x="80" y="${a-7}" width="${s.layout.fanDiameterM/n*205}" height="6" rx="2" fill="${o?"#367647":"#b9c5b1"}"/><text x="${85+s.layout.fanDiameterM/n*205}" y="${a}" font-size="10" fill="#52634c">${s.layout.fanDiameterM.toFixed(2)} m</text>`}).join("")}</svg>`}Bt("#afterburner-control").hidden=!ue.afterburner,Bt("#afterburner").disabled=!ue.afterburner,Bt("#afterburner").checked=qt.afterburner,Bt("#chart-exit-label").textContent=ue.afterburner?"加力 / 排气":ue.id==="rb211"?"混合排气":ue.id==="pegasus"?"偏转排气":"排气",Bt("#cut").min=-Math.max(1,ue.fanRadius*1.05),Bt("#cut").max=Math.max(1,ue.fanRadius*1.05),Bt("#cut").value=qt.cut,Bt("#label-layer").replaceChildren();const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("label-leaders"),t.innerHTML='<defs><marker id="label-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8 L2 4 Z" fill="#617960"/></marker><marker id="label-arrow-active" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4 L0 8 L2 4 Z" fill="#286735"/></marker></defs>',Bt("#label-layer").appendChild(t),Cu=is.map(()=>{const e=document.createElementNS(t.namespaceURI,"g");return e.classList.add("label-leader"),e.innerHTML='<path class="leader-halo"/><path class="leader-line"/><circle r="3"/>',t.appendChild(e),e}),Ru=is.map((e,n)=>{const s=document.createElement("div");return s.className="model-label",s.innerHTML=`<span>${String(n+1).padStart(2,"0")}</span> ${e.short}`,Bt("#label-layer").appendChild(s),s}),Bt("#source-content").innerHTML=`<div class="source-intro"><strong>${ue.name} · 公开构型重建</strong><p>${ue.evidence}</p></div><h3>01 / 当前机型资料</h3>${ue.sources.map(([e,n])=>`<p><a href="${vi(n)}" target="_blank" rel="noreferrer">${e} ↗</a></p>`).join("")}<h3>02 / ${En.length} 款发动机构型</h3><table><thead><tr><th>机型</th><th>系统构型</th><th>主要特征</th></tr></thead><tbody>${En.map(e=>`<tr><td>${vi(e.name)}</td><td>${vi(e.subtitle)}</td><td>${vi(e.facts.join(" · "))}</td></tr>`).join("")}</tbody></table><h3>03 / 几何与资料对照</h3><p>主要级数、轴系与燃烧室类型由公开资料约束。每款机型具有独立构型；内部轴向位置、径向比例、叶型、装配间隙和附属细节仍为参考图估计或教学布局。各模型分别适配窗口，不能直接比较实际尺寸，不是厂家 CAD 或数字孪生。</p><p>在结构目录选中部件，点击“这个部件的资料依据”，可对照原始图、照片或技术资料，并区分资料约束和几何近似。仅按主要模块分解，不代表真实 BOM；剖切不生成 CAD 实体封口。</p><p>已核实 CFM56-7B 的 24 片钛风扇叶片（采用 NTSB 实机调查，修正早期宣传中的 22 片）与 GE90-115B 的 22 片复材风扇叶片；两者风扇直径为 1.5494 m 与 3.2512 m。尺寸对比只使用定义一致的公开参数。</p><h3>04 / 流动与热力边界</h3><p>${vi(p_)}</p>${m_.map(([e,n])=>`<p><a href="${vi(n)}" target="_blank" rel="noreferrer">${vi(e)} ↗</a></p>`).join("")}<p>粒子、截面探针与沿程曲线使用同一组教学总温。总压沿流路由简化压缩、加热损失与膨胀关系估算；不提供局部静压、静温或速度场。所有示踪沿预设通道运动，未求解守恒方程、湍流、燃烧化学或叶片局部绕流，不能用于性能预测。</p><p>观察速度独立于教学工况；转子速度大幅降低，真实转速与旋向未校准。PT6A 螺旋桨单独采用 8 倍视觉加速，不表示其与内部轴系的实际转速关系。轴系着色时隐藏气流；分解或单独查看时隐藏连续流动。导览进度是流路位置，不是实际驻留时间。Pegasus 喷流箭头表达方向，不计算升力、姿态或悬停能力。</p><h3>05 / 各机型的流路区别</h3><p>J79 无外涵；CFM56 与 GE90 分流排气；RB211-535E4 采用混合排气；PT6A 为回流式涡桨，采用独立动力涡轮和减速齿轮箱；Pegasus 的前部喷口排出外涵冷流，后部喷口排出核心热流。每个模型的细节与型号适用边界见当前机型资料。</p>`}async function Pu(i,t=!0){const e=++Ic,n=Yr(i);if(Bt("#loading").innerHTML='<span class="loading-orbit"></span><strong>正在构建 '+n.name+"</strong><span>加载构型与流路</span>",Bt("#loading").hidden=!1,Bt("#viewport").setAttribute("aria-busy","true"),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),e===Ic){Ze?.dispose(),Ze=void 0;try{if(ue=n,is=ue.parts,Na="",Object.assign(qt,{engineId:ue.id,selected:0,isolate:!1,subpart:-1,cut:.12,afterburner:ue.afterburner}),Ze=wu(Bt("#viewport"),al,ue),Br=Ze.physics,un?.changed(),S_(),Ln(),ds("[data-view]").forEach(s=>{const r=s.dataset.view==="perspective";s.classList.toggle("active",r),s.setAttribute("aria-pressed",r)}),clearTimeout(window.engineLoadingTimeout),Bt("#loading").hidden=!0,Bt("#viewport").setAttribute("aria-busy","false"),t){const s=new URL(location.href);s.searchParams.set("engine",ue.id),history.replaceState(null,"",s)}}catch(s){Bt("#viewport").setAttribute("aria-busy","false"),window.showEngineLoadError(),console.error(s)}}}Bt("#engine-select").addEventListener("change",i=>Pu(i.target.value));Bt("#parts").addEventListener("click",i=>{const t=i.target.closest("[data-part]");t&&al(+t.dataset.part)});ds("[data-mode]").forEach(i=>i.addEventListener("click",()=>{un?.interruptTour(),qt.mode=i.dataset.mode,qt.isolate=!1,Ln()}));for(const i of["cut","explode","throttle"])Bt("#"+i).addEventListener("input",t=>{qt[i]=+t.target.value,i==="cut"&&(un?.interruptTour(),qt.mode="cutaway",qt.isolate=!1),i==="explode"&&(un?.interruptTour(),qt.mode="exploded",qt.isolate=!1),Ln()});for(const i of["flow","labels","afterburner"])Bt("#"+i).addEventListener("change",t=>{qt[i]=t.target.checked,Ln()});Bt("#play").addEventListener("click",()=>{qt.playing=!qt.playing,Ln()});Bt("#isolate").addEventListener("click",()=>{un?.interruptTour(),qt.isolate=!qt.isolate,qt.subpart=-1,Ln(),Bt(".stage").scrollIntoView({block:"center",behavior:ol?"instant":"smooth"})});Bt("#subpart").addEventListener("change",i=>{un?.interruptTour(),qt.subpart=+i.target.value,qt.subpart>=0&&(qt.mode="assembled"),Ln(),Bt(".stage").scrollIntoView({block:"center",behavior:ol?"instant":"smooth"})});Bt("#show-all").addEventListener("click",()=>{un?.interruptTour(),qt.isolate=!1,Ln()});ds("[data-view]").forEach(i=>i.addEventListener("click",()=>{un?.interruptTour(),Ln(),Ze?.setView(i.dataset.view),un?.cameraPrimary(),ds("[data-view]").forEach(t=>{t.classList.toggle("active",t===i),t.setAttribute("aria-pressed",t===i)})}));Bt("#reset").addEventListener("click",()=>{Bt('[data-view="perspective"]').click()});Bt("#sources-open").addEventListener("click",()=>Bt("#sources-dialog").showModal());Bt("#sources-close").addEventListener("click",()=>Bt("#sources-dialog").close());Bt("#sources-dialog").addEventListener("click",i=>{if(i.target===Bt("#sources-dialog")){const t=i.target.getBoundingClientRect();(i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom)&&i.target.close()}});let Cr=performance.now(),Oo=0,Bo=Cr;function Fa(i){if(i-Cr<1e3/60){requestAnimationFrame(Fa);return}const t=Math.min((i-Cr)/1e3,.06);Cr=i,Ze&&(Ze.tick(t,i/1e3),un?.tick(t,i/1e3),qt.labels&&E_(),Oo++,i-Bo>1e3&&(Bt("#fps").textContent=Math.round(Oo*1e3/(i-Bo)),Oo=0,Bo=i)),requestAnimationFrame(Fa)}function E_(){const i=Bt("#label-layer"),t=i.clientWidth,e=i.clientHeight,n=Ru.map((a,c)=>({el:a,i:c,p:Ze.project(c)})).sort((a,c)=>a.p.x-c.p.x);for(const a of n)a.el.hidden=!a.p.visible,a.p.visible&&(a.el.classList.toggle("occluded",!!a.p.occluded),a.width=a.el.offsetWidth,a.height=a.el.offsetHeight);const s=n.filter(a=>a.p.visible);let r=[s];for(let a=1;a<=s.length&&(r=Array.from({length:a},()=>[]),s.forEach((c,l)=>r[l%a].push(c)),!r.every(c=>c.reduce((l,h)=>l+h.width+10,0)-10<=t-24));a++);const o=Math.max(108,Math.min(e-150,...s.map(a=>Math.min(a.p.labelY-38,a.p.y-55))));r.forEach((a,c)=>{const l=a.reduce((d,f)=>d+f.width,0)+Math.max(0,a.length-1)*10,h=a.reduce((d,f)=>d+f.p.x,0)/Math.max(1,a.length);let u=Math.max(12,Math.min(t-12-l,h-l/2));a.forEach(d=>{d.labelX=u+d.width/2,d.labelY=o+c*32,u+=d.width+10})});for(const{el:a,i:c,p:l,width:h,height:u,labelX:d,labelY:f}of n){const g=Cu[c],_=c===qt.selected;if(a.hidden=!l.visible,g.style.display=l.visible?"":"none",!l.visible)continue;a.classList.toggle("active",_),g.classList.toggle("active",_),g.classList.toggle("occluded",!!l.occluded),a.style.left=`${d}px`,a.style.top=`${f}px`;const m=l.x-d,p=l.y-f,y=Math.min(h/2/Math.max(Math.abs(m),.001),u/2/Math.max(Math.abs(p),.001)),v=d+m*y,x=f+p*y,A=`M ${v.toFixed(1)} ${x.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`;g.querySelectorAll("path").forEach(L=>L.setAttribute("d",A)),g.querySelector(".leader-line").setAttribute("marker-end",`url(#label-arrow${_?"-active":""})`);const R=g.querySelector("circle");R.setAttribute("cx",l.x),R.setAttribute("cy",l.y)}}window.engineAtlas={state:()=>({...qt}),stats:()=>Ze?.stats(),rotations:()=>Ze?.rotors.map(i=>i.g.rotation.x),visibleParts:()=>Ze?.groups.map(i=>i.visible),rows:()=>Ze?.groups.map(i=>i.children.filter(t=>t.userData.bladeRow).map(t=>({label:t.userData.label,rotating:t.userData.rotating}))),available:()=>En.map(i=>i.id),explorer:()=>un?.qa(),sampleFlow:(i,t=!1)=>Ze?.sampleFlow?.(i,t)};un=v_({state:qt,getPrimary:()=>Ze,getPreset:()=>ue,sync:Ln,selectPart:al});requestAnimationFrame(Fa);Pu(ue.id,!1);
