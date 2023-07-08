import{c as Q,p as sn}from"./constant-b644328d-6af51708.js";import{bQ as en,bR as y,b6 as ln,bS as X,bT as P,bU as j,bV as k,bW as rn,bX as un,bY as t,bZ as an,b_ as on,b$ as tn}from"./index-7cae8a36.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,q,S,h,v,U,r){var s=q-l,n=S-x,m=U-h,i=r-v,u=i*s-m*n;if(!(u*u<y))return u=(m*(x-v)-i*(l-h))/u,[l+u*s,x+u*n]}function G(l,x,q,S,h,v,U){var r=l-q,s=x-S,n=(U?v:-v)/j(r*r+s*s),m=n*s,i=-n*r,u=l+m,f=x+i,c=q+m,w=S+i,o=(u+c)/2,D=(f+w)/2,p=c-u,g=w-f,R=p*p+g*g,E=h-v,T=u*w-c*f,I=(g<0?-1:1)*j(tn(0,E*E*R-T*T)),O=(T*g-p*I)/R,d=(-T*p-g*I)/R,A=(T*g+p*I)/R,b=(-T*p+g*I)/R,e=O-o,a=d-D,V=A-o,W=b-D;return e*e+a*a>V*V+W*W&&(O=A,d=b),{cx:O,cy:d,x01:-m,y01:-i,x11:O*(h/E-1),y11:d*(h/E-1)}}function hn(){var l=fn,x=cn,q=Q(0),S=null,h=yn,v=gn,U=mn,r=null;function s(){var n,m,i=+l.apply(this,arguments),u=+x.apply(this,arguments),f=h.apply(this,arguments)-en,c=v.apply(this,arguments)-en,w=rn(c-f),o=c>f;if(r||(r=n=sn()),u<i&&(m=u,u=i,i=m),!(u>y))r.moveTo(0,0);else if(w>ln-y)r.moveTo(u*X(f),u*P(f)),r.arc(0,0,u,f,c,!o),i>y&&(r.moveTo(i*X(c),i*P(c)),r.arc(0,0,i,c,f,o));else{var D=f,p=c,g=f,R=c,E=w,T=w,I=U.apply(this,arguments)/2,O=I>y&&(S?+S.apply(this,arguments):j(i*i+u*u)),d=k(rn(u-i)/2,+q.apply(this,arguments)),A=d,b=d,e,a;if(O>y){var V=an(O/i*P(I)),W=an(O/u*P(I));(E-=V*2)>y?(V*=o?1:-1,g+=V,R-=V):(E=0,g=R=(f+c)/2),(T-=W*2)>y?(W*=o?1:-1,D+=W,p-=W):(T=0,D=p=(f+c)/2)}var Y=u*X(D),Z=u*P(D),z=i*X(R),B=i*P(R);if(d>y){var C=u*X(p),F=u*P(p),H=i*X(g),J=i*P(g),$;if(w<un&&($=pn(Y,Z,H,J,C,F,z,B))){var K=Y-$[0],L=Z-$[1],M=C-$[0],N=F-$[1],_=1/P(on((K*M+L*N)/(j(K*K+L*L)*j(M*M+N*N)))/2),nn=j($[0]*$[0]+$[1]*$[1]);A=k(d,(i-nn)/(_-1)),b=k(d,(u-nn)/(_+1))}}T>y?b>y?(e=G(H,J,Y,Z,u,b,o),a=G(C,F,z,B,u,b,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),b<d?r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,u,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),!o),r.arc(a.cx,a.cy,b,t(a.y11,a.x11),t(a.y01,a.x01),!o))):(r.moveTo(Y,Z),r.arc(0,0,u,D,p,!o)):r.moveTo(Y,Z),!(i>y)||!(E>y)?r.lineTo(z,B):A>y?(e=G(z,B,C,F,i,-A,o),a=G(Y,Z,H,J,i,-A,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),A<d?r.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),o),r.arc(a.cx,a.cy,A,t(a.y11,a.x11),t(a.y01,a.x01),!o))):r.arc(0,0,i,R,g,o)}if(r.closePath(),n)return r=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-un/2;return[X(m)*n,P(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Q(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:Q(+n),s):x},s.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:Q(+n),s):q},s.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:Q(+n),s):S},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:Q(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Q(+n),s):v},s.padAngle=function(n){return arguments.length?(U=typeof n=="function"?n:Q(+n),s):U},s.context=function(n){return arguments.length?(r=n??null,s):r},s}export{hn as d};
