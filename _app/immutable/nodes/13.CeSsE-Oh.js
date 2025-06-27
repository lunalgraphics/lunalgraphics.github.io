import{s as wn,a as Y,n as _n}from"../chunks/scheduler.CK06ib0F.js";import{S as Rn,i as kn,e as a,s as r,t as i,o as Bn,c as l,g as d,f as o,a as Kt,b as p,d as m,p as En,q as In,h as s,m as M,j as q,k as n,r as Ln,u as An,v as Mn,w as Dn}from"../chunks/index.B1Y3TgPi.js";import{b as Tn}from"../chunks/paths.DBeGCcAw.js";import{b as xn}from"../chunks/banner.CATdmPBR.js";import{S as Gn}from"../chunks/SocialMetadata.BR6PEy3b.js";const On=""+new URL("../assets/step1.2b_17yWx.png",import.meta.url).href,Un=""+new URL("../assets/step2.CiY_EIS-.png",import.meta.url).href,jn=""+new URL("../assets/step3.RMUM8rKu.png",import.meta.url).href,Hn=""+new URL("../assets/step4.DAR7kCj5.png",import.meta.url).href,Pn=""+new URL("../assets/step5.CVHOeoia.png",import.meta.url).href,Yn=""+new URL("../assets/step6.BWb0zP84.png",import.meta.url).href;function Sn(vn){let c,Vt=`<div class="centered"><h1>Installing/Deleting .deb Packages on Linux</h1> <p>Download your favorite desktop apps<br/>
            Blog Entry 3<br/>
            2024-07-17</p></div>`,S,e,K,V,z,W,J,b,zt="Install",Q,f,Wt="Uninstall",X,Z,ee,te,ne,g,Jt="Installing a .deb package",ae,le,re,D,Qt="1. Find the File",oe,se,ie,y,Xt,pe,de,he,ce,ue,me,be,fe,ge,T,Zt="2. Get the File Name",ye,Ce,xe,C,en,ve,we,_e,G,tn="Properties",Re,ke,Be,Ee,Ie,Le,Ae,O,nn="3. Open the Command Line",Me,De,Te,x,an,Ge,Oe,Ue,U,ln="Open in Terminal",je,He,Pe,Ye,Se,Fe,Ne,j,rn="4. Install the Debian Package",$e,qe,Ke,v,on,Ve,ze,We,w,sn="sudo apt install ./",Je,Qe,Xe,Ze,et,tt,nt,H,pn="5. Record the Real Name of the Package",at,lt,rt,_,dn,ot,st,it,R,hn="Note, selecting 'REAL_PACKAGE_NAME' instead of './FILENAME'",pt,dt,ht,ct,ut,mt,bt,ft,gt,yt,Ct,u,xt,cn="(deleting)",vt,wt,_t,Rt,kt,k,un,Bt,Et,It,B,mn=`sudo apt purge
    REAL_PACKAGE_NAME`,Lt,E,At,bn="[Y/n]",Mt,Dt,I,fn="y",Tt,Gt,Ot,Ut,jt,Ht,Pt,P,gn="If you liked this article, feel free to share it on social media!",Yt,St,Ft,Nt,$t,L,yn="Back to the blog",F,A,N;return A=new Gn({props:{title:"Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics",desc:"Download your favorite desktop apps on Linux.",imgURL:xn,pageURL:"https://lunalgraphics.com",imgAlt:"Installing a deb package on Ubuntu"}}),{c(){c=a("div"),c.innerHTML=Vt,S=r(),e=a("div"),K=i(`If you're trying to download Linux apps from the web, such as Lunal Graphics
    products, .deb packages are probably the best file format to work with. They
    contain all of the app's assets, and you can extract them for usage in a few
    simple steps.
    `),V=a("br"),z=r(),W=a("br"),J=r(),b=a("a"),b.textContent=zt,Q=i(` |
    `),f=a("a"),f.textContent=Wt,X=r(),Z=a("br"),ee=r(),te=a("br"),ne=r(),g=a("h1"),g.textContent=Jt,ae=r(),le=a("br"),re=r(),D=a("h2"),D.textContent=Qt,oe=r(),se=a("br"),ie=r(),y=a("img"),pe=r(),de=a("br"),he=i(`
    Once you've downloaded the .deb file, locate it in your Files app. If you downloaded
    the file from a web browser, it probably went to the Downloads folder.
    `),ce=a("br"),ue=r(),me=a("br"),be=r(),fe=a("br"),ge=r(),T=a("h2"),T.textContent=Zt,ye=r(),Ce=a("br"),xe=r(),C=a("img"),ve=r(),we=a("br"),_e=i(`
    Once you've found the file, right click its thumbnail and press `),G=a("b"),G.textContent=tn,Re=i(`.
    This will open up some additional information including the name of the file. Select
    the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,
    including the .deb file extension.
    `),ke=a("br"),Be=r(),Ee=a("br"),Ie=r(),Le=a("br"),Ae=r(),O=a("h2"),O.textContent=nn,Me=r(),De=a("br"),Te=r(),x=a("img"),Ge=r(),Oe=a("br"),Ue=i(`
    Make sure your Files app is still opened to the folder containing the .deb file.
    Click the three dots next to the searchbar and press `),U=a("b"),U.textContent=ln,je=i(`.
    This will open your computer's command line app. You will see the folder's path
    next to the prompt, meaning that the command line is opened within a specific folder.
    `),He=a("br"),Pe=r(),Ye=a("br"),Se=r(),Fe=a("br"),Ne=r(),j=a("h2"),j.textContent=rn,$e=r(),qe=a("br"),Ke=r(),v=a("img"),Ve=r(),ze=a("br"),We=i(`
    In the command line, type `),w=a("code"),w.textContent=sn,Je=i(`,
    then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install
    the application. You may need to type your password and press Enter again.
    `),Qe=a("br"),Xe=r(),Ze=a("br"),et=r(),tt=a("br"),nt=r(),H=a("h2"),H.textContent=pn,at=r(),lt=a("br"),rt=r(),_=a("img"),ot=r(),st=a("br"),it=i(`
    The filename of the .deb package may be different from the actual package name.
    When you use the installation command, the real package name will appear in a message
    saying `),R=a("code"),R.textContent=hn,pt=i(`.
    Copy that REAL_PACKAGE_NAME and make sure to write it down somewhere, in case you need
    to delete the package at any time. `),dt=a("br"),ht=r(),ct=a("br"),ut=i(` Your new app should appear in your computer's Applications menu.
    `),mt=a("br"),bt=r(),ft=a("br"),gt=r(),yt=a("br"),Ct=r(),u=a("h1"),xt=i("Uninstalling "),vt=i(cn),wt=i(" a .deb package"),_t=r(),Rt=a("br"),kt=r(),k=a("img"),Bt=r(),Et=a("br"),It=i(`
    Remember when I had you copy the real package name of the .deb? You can use it to
    uninstall the package. Simply open your Terminal app, type `),B=a("code"),B.textContent=mn,Lt=i(`, and hit Enter. You may need to type in your password and hit
    Enter again. The command prompt will ask `),E=a("code"),At=i("Do you want to continue? "),Mt=i(bn),Dt=i(`
    Type in `),I=a("code"),I.textContent=fn,Tt=i(` and press Enter.
    `),Gt=a("br"),Ot=r(),Ut=a("br"),jt=r(),Ht=a("br"),Pt=r(),P=a("i"),P.textContent=gn,Yt=r(),St=a("br"),Ft=r(),Nt=a("br"),$t=r(),L=a("a"),L.textContent=yn,F=r(),Bn(A.$$.fragment),this.h()},l(h){c=l(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),d(c)!=="svelte-11zqms9"&&(c.innerHTML=Vt),S=o(h),e=l(h,"DIV",{class:!0});var t=Kt(e);K=p(t,`If you're trying to download Linux apps from the web, such as Lunal Graphics
    products, .deb packages are probably the best file format to work with. They
    contain all of the app's assets, and you can extract them for usage in a few
    simple steps.
    `),V=l(t,"BR",{}),z=o(t),W=l(t,"BR",{}),J=o(t),b=l(t,"A",{href:!0,"data-svelte-h":!0}),d(b)!=="svelte-1ey43kx"&&(b.textContent=zt),Q=p(t,` |
    `),f=l(t,"A",{href:!0,"data-svelte-h":!0}),d(f)!=="svelte-1u3j9h3"&&(f.textContent=Wt),X=o(t),Z=l(t,"BR",{}),ee=o(t),te=l(t,"BR",{}),ne=o(t),g=l(t,"H1",{id:!0,"data-svelte-h":!0}),d(g)!=="svelte-1goqnpm"&&(g.textContent=Jt),ae=o(t),le=l(t,"BR",{}),re=o(t),D=l(t,"H2",{"data-svelte-h":!0}),d(D)!=="svelte-ejo9eb"&&(D.textContent=Qt),oe=o(t),se=l(t,"BR",{}),ie=o(t),y=l(t,"IMG",{src:!0,alt:!0}),pe=o(t),de=l(t,"BR",{}),he=p(t,`
    Once you've downloaded the .deb file, locate it in your Files app. If you downloaded
    the file from a web browser, it probably went to the Downloads folder.
    `),ce=l(t,"BR",{}),ue=o(t),me=l(t,"BR",{}),be=o(t),fe=l(t,"BR",{}),ge=o(t),T=l(t,"H2",{"data-svelte-h":!0}),d(T)!=="svelte-1ipm5i8"&&(T.textContent=Zt),ye=o(t),Ce=l(t,"BR",{}),xe=o(t),C=l(t,"IMG",{src:!0,alt:!0}),ve=o(t),we=l(t,"BR",{}),_e=p(t,`
    Once you've found the file, right click its thumbnail and press `),G=l(t,"B",{"data-svelte-h":!0}),d(G)!=="svelte-mkcykb"&&(G.textContent=tn),Re=p(t,`.
    This will open up some additional information including the name of the file. Select
    the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,
    including the .deb file extension.
    `),ke=l(t,"BR",{}),Be=o(t),Ee=l(t,"BR",{}),Ie=o(t),Le=l(t,"BR",{}),Ae=o(t),O=l(t,"H2",{"data-svelte-h":!0}),d(O)!=="svelte-1rpz6rj"&&(O.textContent=nn),Me=o(t),De=l(t,"BR",{}),Te=o(t),x=l(t,"IMG",{src:!0,alt:!0}),Ge=o(t),Oe=l(t,"BR",{}),Ue=p(t,`
    Make sure your Files app is still opened to the folder containing the .deb file.
    Click the three dots next to the searchbar and press `),U=l(t,"B",{"data-svelte-h":!0}),d(U)!=="svelte-12b4tn"&&(U.textContent=ln),je=p(t,`.
    This will open your computer's command line app. You will see the folder's path
    next to the prompt, meaning that the command line is opened within a specific folder.
    `),He=l(t,"BR",{}),Pe=o(t),Ye=l(t,"BR",{}),Se=o(t),Fe=l(t,"BR",{}),Ne=o(t),j=l(t,"H2",{"data-svelte-h":!0}),d(j)!=="svelte-14sbxkj"&&(j.textContent=rn),$e=o(t),qe=l(t,"BR",{}),Ke=o(t),v=l(t,"IMG",{src:!0,alt:!0}),Ve=o(t),ze=l(t,"BR",{}),We=p(t,`
    In the command line, type `),w=l(t,"CODE",{class:!0,"data-svelte-h":!0}),d(w)!=="svelte-zfnrg0"&&(w.textContent=sn),Je=p(t,`,
    then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install
    the application. You may need to type your password and press Enter again.
    `),Qe=l(t,"BR",{}),Xe=o(t),Ze=l(t,"BR",{}),et=o(t),tt=l(t,"BR",{}),nt=o(t),H=l(t,"H2",{"data-svelte-h":!0}),d(H)!=="svelte-311at8"&&(H.textContent=pn),at=o(t),lt=l(t,"BR",{}),rt=o(t),_=l(t,"IMG",{src:!0,alt:!0}),ot=o(t),st=l(t,"BR",{}),it=p(t,`
    The filename of the .deb package may be different from the actual package name.
    When you use the installation command, the real package name will appear in a message
    saying `),R=l(t,"CODE",{class:!0,"data-svelte-h":!0}),d(R)!=="svelte-3cov6e"&&(R.textContent=hn),pt=p(t,`.
    Copy that REAL_PACKAGE_NAME and make sure to write it down somewhere, in case you need
    to delete the package at any time. `),dt=l(t,"BR",{}),ht=o(t),ct=l(t,"BR",{}),ut=p(t,` Your new app should appear in your computer's Applications menu.
    `),mt=l(t,"BR",{}),bt=o(t),ft=l(t,"BR",{}),gt=o(t),yt=l(t,"BR",{}),Ct=o(t),u=l(t,"H1",{id:!0});var $=Kt(u);xt=p($,"Uninstalling "),vt=p($,cn),wt=p($," a .deb package"),$.forEach(m),_t=o(t),Rt=l(t,"BR",{}),kt=o(t),k=l(t,"IMG",{src:!0,alt:!0}),Bt=o(t),Et=l(t,"BR",{}),It=p(t,`
    Remember when I had you copy the real package name of the .deb? You can use it to
    uninstall the package. Simply open your Terminal app, type `),B=l(t,"CODE",{class:!0,"data-svelte-h":!0}),d(B)!=="svelte-bb0e1k"&&(B.textContent=mn),Lt=p(t,`, and hit Enter. You may need to type in your password and hit
    Enter again. The command prompt will ask `),E=l(t,"CODE",{class:!0});var qt=Kt(E);At=p(qt,"Do you want to continue? "),Mt=p(qt,bn),qt.forEach(m),Dt=p(t,`
    Type in `),I=l(t,"CODE",{class:!0,"data-svelte-h":!0}),d(I)!=="svelte-rbmw5f"&&(I.textContent=fn),Tt=p(t,` and press Enter.
    `),Gt=l(t,"BR",{}),Ot=o(t),Ut=l(t,"BR",{}),jt=o(t),Ht=l(t,"BR",{}),Pt=o(t),P=l(t,"I",{"data-svelte-h":!0}),d(P)!=="svelte-5r453"&&(P.textContent=gn),Yt=o(t),St=l(t,"BR",{}),Ft=o(t),Nt=l(t,"BR",{}),$t=o(t),L=l(t,"A",{href:!0,"data-svelte-h":!0}),d(L)!=="svelte-j6el6n"&&(L.textContent=yn),t.forEach(m),F=o(h);const Cn=En("svelte-8y7sg0",document.head);In(A.$$.fragment,Cn),Cn.forEach(m),this.h()},h(){s(c,"class","titlesection"),M(c,"background-image","url("+xn+")"),s(b,"href","#install"),s(f,"href","#uninstall"),s(g,"id","install"),Y(y.src,Xt=On)||s(y,"src",Xt),s(y,"alt","Finding the .deb file in my file manager app"),M(y,"width","100%"),Y(C.src,en=Un)||s(C,"src",en),s(C,"alt","Copying the filename"),M(C,"width","100%"),Y(x.src,an=jn)||s(x,"src",an),s(x,"alt","Opening the CLI from the correct folder"),M(x,"width","100%"),Y(v.src,on=Hn)||s(v,"src",on),s(v,"alt","Typing in the command prompt"),M(v,"width","100%"),s(w,"class","svelte-ajdueu"),Y(_.src,dn=Pn)||s(_,"src",dn),s(_,"alt","Copying the package name"),M(_,"width","100%"),s(R,"class","svelte-ajdueu"),s(u,"id","uninstall"),Y(k.src,un=Yn)||s(k,"src",un),s(k,"alt","Deleting the package using CLI"),M(k,"width","100%"),s(B,"class","svelte-ajdueu"),s(E,"class","svelte-ajdueu"),s(I,"class","svelte-ajdueu"),s(L,"href",Tn+"/blog"),s(e,"class","infosection"),document.title="Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics"},m(h,t){q(h,c,t),q(h,S,t),q(h,e,t),n(e,K),n(e,V),n(e,z),n(e,W),n(e,J),n(e,b),n(e,Q),n(e,f),n(e,X),n(e,Z),n(e,ee),n(e,te),n(e,ne),n(e,g),n(e,ae),n(e,le),n(e,re),n(e,D),n(e,oe),n(e,se),n(e,ie),n(e,y),n(e,pe),n(e,de),n(e,he),n(e,ce),n(e,ue),n(e,me),n(e,be),n(e,fe),n(e,ge),n(e,T),n(e,ye),n(e,Ce),n(e,xe),n(e,C),n(e,ve),n(e,we),n(e,_e),n(e,G),n(e,Re),n(e,ke),n(e,Be),n(e,Ee),n(e,Ie),n(e,Le),n(e,Ae),n(e,O),n(e,Me),n(e,De),n(e,Te),n(e,x),n(e,Ge),n(e,Oe),n(e,Ue),n(e,U),n(e,je),n(e,He),n(e,Pe),n(e,Ye),n(e,Se),n(e,Fe),n(e,Ne),n(e,j),n(e,$e),n(e,qe),n(e,Ke),n(e,v),n(e,Ve),n(e,ze),n(e,We),n(e,w),n(e,Je),n(e,Qe),n(e,Xe),n(e,Ze),n(e,et),n(e,tt),n(e,nt),n(e,H),n(e,at),n(e,lt),n(e,rt),n(e,_),n(e,ot),n(e,st),n(e,it),n(e,R),n(e,pt),n(e,dt),n(e,ht),n(e,ct),n(e,ut),n(e,mt),n(e,bt),n(e,ft),n(e,gt),n(e,yt),n(e,Ct),n(e,u),n(u,xt),n(u,vt),n(u,wt),n(e,_t),n(e,Rt),n(e,kt),n(e,k),n(e,Bt),n(e,Et),n(e,It),n(e,B),n(e,Lt),n(e,E),n(E,At),n(E,Mt),n(e,Dt),n(e,I),n(e,Tt),n(e,Gt),n(e,Ot),n(e,Ut),n(e,jt),n(e,Ht),n(e,Pt),n(e,P),n(e,Yt),n(e,St),n(e,Ft),n(e,Nt),n(e,$t),n(e,L),q(h,F,t),Ln(A,document.head,null),N=!0},p:_n,i(h){N||(An(A.$$.fragment,h),N=!0)},o(h){Mn(A.$$.fragment,h),N=!1},d(h){h&&(m(c),m(S),m(e),m(F)),Dn(A)}}}class Vn extends Rn{constructor(c){super(),kn(this,c,null,Sn,wn,{})}}export{Vn as component};
