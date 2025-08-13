import{S as wn,i as _n,s as Rn,n as kn,d as m,p as Bn,q as En,r as In,b as q,c as n,u as Ln,e as s,v as M,B as Y,f as a,k as d,j as r,g as Kt,h as i,w as An,x as Mn,l,m as o,t as p,y as Dn}from"../chunks/81mQ-QQd.js";import"../chunks/IHki7fMi.js";import{b as Tn}from"../chunks/C9hs-srY.js";import{b as xn}from"../chunks/CATdmPBR.js";import{S as Gn}from"../chunks/CM4zS6sr.js";const On=""+new URL("../assets/step1.2b_17yWx.png",import.meta.url).href,Un=""+new URL("../assets/step2.CiY_EIS-.png",import.meta.url).href,jn=""+new URL("../assets/step3.RMUM8rKu.png",import.meta.url).href,Hn=""+new URL("../assets/step4.DAR7kCj5.png",import.meta.url).href,Pn=""+new URL("../assets/step5.CVHOeoia.png",import.meta.url).href,Yn=""+new URL("../assets/step6.BWb0zP84.png",import.meta.url).href;function Sn(vn){let c,Vt=`<div class="centered"><h1>Installing/Deleting .deb Packages on Linux</h1> <p>Download your favorite desktop apps<br/>
            Blog Entry 3<br/>
            2024-07-17</p></div>`,S,e,K,V,z,W,J,b,zt="Install",Q,f,Wt="Uninstall",X,Z,ee,te,ne,g,Jt="Installing a .deb package",ae,le,re,D,Qt="1. Find the File",oe,se,ie,y,Xt,pe,de,he,ce,ue,me,be,fe,ge,T,Zt="2. Get the File Name",ye,Ce,xe,C,en,ve,we,_e,G,tn="Properties",Re,ke,Be,Ee,Ie,Le,Ae,O,nn="3. Open the Command Line",Me,De,Te,x,an,Ge,Oe,Ue,U,ln="Open in Terminal",je,He,Pe,Ye,Se,Fe,Ne,j,rn="4. Install the Debian Package",$e,qe,Ke,v,on,Ve,ze,We,w,sn="sudo apt install ./",Je,Qe,Xe,Ze,et,tt,nt,H,pn="5. Record the Real Name of the Package",at,lt,rt,_,dn,ot,st,it,R,hn="Note, selecting 'REAL_PACKAGE_NAME' instead of './FILENAME'",pt,dt,ht,ct,ut,mt,bt,ft,gt,yt,Ct,u,xt,cn="(deleting)",vt,wt,_t,Rt,kt,k,un,Bt,Et,It,B,mn=`sudo apt purge\r
    REAL_PACKAGE_NAME`,Lt,E,At,bn="[Y/n]",Mt,Dt,I,fn="y",Tt,Gt,Ot,Ut,jt,Ht,Pt,P,gn="If you liked this article, feel free to share it on social media!",Yt,St,Ft,Nt,$t,L,yn="Back to the blog",F,A,N;return A=new Gn({props:{title:"Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics",desc:"Download your favorite desktop apps on Linux.",imgURL:xn,pageURL:"https://lunalgraphics.com",imgAlt:"Installing a deb package on Ubuntu"}}),{c(){c=l("div"),c.innerHTML=Vt,S=o(),e=l("div"),K=p(`If you're trying to download Linux apps from the web, such as Lunal Graphics\r
    products, .deb packages are probably the best file format to work with. They\r
    contain all of the app's assets, and you can extract them for usage in a few\r
    simple steps.\r
    `),V=l("br"),z=o(),W=l("br"),J=o(),b=l("a"),b.textContent=zt,Q=p(` |\r
    `),f=l("a"),f.textContent=Wt,X=o(),Z=l("br"),ee=o(),te=l("br"),ne=o(),g=l("h1"),g.textContent=Jt,ae=o(),le=l("br"),re=o(),D=l("h2"),D.textContent=Qt,oe=o(),se=l("br"),ie=o(),y=l("img"),pe=o(),de=l("br"),he=p(`\r
    Once you've downloaded the .deb file, locate it in your Files app. If you downloaded\r
    the file from a web browser, it probably went to the Downloads folder.\r
    `),ce=l("br"),ue=o(),me=l("br"),be=o(),fe=l("br"),ge=o(),T=l("h2"),T.textContent=Zt,ye=o(),Ce=l("br"),xe=o(),C=l("img"),ve=o(),we=l("br"),_e=p(`\r
    Once you've found the file, right click its thumbnail and press `),G=l("b"),G.textContent=tn,Re=p(`.\r
    This will open up some additional information including the name of the file. Select\r
    the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,\r
    including the .deb file extension.\r
    `),ke=l("br"),Be=o(),Ee=l("br"),Ie=o(),Le=l("br"),Ae=o(),O=l("h2"),O.textContent=nn,Me=o(),De=l("br"),Te=o(),x=l("img"),Ge=o(),Oe=l("br"),Ue=p(`\r
    Make sure your Files app is still opened to the folder containing the .deb file.\r
    Click the three dots next to the searchbar and press `),U=l("b"),U.textContent=ln,je=p(`.\r
    This will open your computer's command line app. You will see the folder's path\r
    next to the prompt, meaning that the command line is opened within a specific folder.\r
    `),He=l("br"),Pe=o(),Ye=l("br"),Se=o(),Fe=l("br"),Ne=o(),j=l("h2"),j.textContent=rn,$e=o(),qe=l("br"),Ke=o(),v=l("img"),Ve=o(),ze=l("br"),We=p(`\r
    In the command line, type `),w=l("code"),w.textContent=sn,Je=p(`,\r
    then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install\r
    the application. You may need to type your password and press Enter again.\r
    `),Qe=l("br"),Xe=o(),Ze=l("br"),et=o(),tt=l("br"),nt=o(),H=l("h2"),H.textContent=pn,at=o(),lt=l("br"),rt=o(),_=l("img"),ot=o(),st=l("br"),it=p(`\r
    The filename of the .deb package may be different from the actual package name.\r
    When you use the installation command, the real package name will appear in a message\r
    saying `),R=l("code"),R.textContent=hn,pt=p(`.\r
    Copy that REAL_PACKAGE_NAME and make sure to write it down somewhere, in case you need\r
    to delete the package at any time. `),dt=l("br"),ht=o(),ct=l("br"),ut=p(` Your new app should appear in your computer's Applications menu.\r
    `),mt=l("br"),bt=o(),ft=l("br"),gt=o(),yt=l("br"),Ct=o(),u=l("h1"),xt=p("Uninstalling "),vt=p(cn),wt=p(" a .deb package"),_t=o(),Rt=l("br"),kt=o(),k=l("img"),Bt=o(),Et=l("br"),It=p(`\r
    Remember when I had you copy the real package name of the .deb? You can use it to\r
    uninstall the package. Simply open your Terminal app, type `),B=l("code"),B.textContent=mn,Lt=p(`, and hit Enter. You may need to type in your password and hit\r
    Enter again. The command prompt will ask `),E=l("code"),At=p("Do you want to continue? "),Mt=p(bn),Dt=p(`\r
    Type in `),I=l("code"),I.textContent=fn,Tt=p(` and press Enter.\r
    `),Gt=l("br"),Ot=o(),Ut=l("br"),jt=o(),Ht=l("br"),Pt=o(),P=l("i"),P.textContent=gn,Yt=o(),St=l("br"),Ft=o(),Nt=l("br"),$t=o(),L=l("a"),L.textContent=yn,F=o(),Dn(A.$$.fragment),this.h()},l(h){c=a(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),d(c)!=="svelte-11zqms9"&&(c.innerHTML=Vt),S=r(h),e=a(h,"DIV",{class:!0});var t=Kt(e);K=i(t,`If you're trying to download Linux apps from the web, such as Lunal Graphics\r
    products, .deb packages are probably the best file format to work with. They\r
    contain all of the app's assets, and you can extract them for usage in a few\r
    simple steps.\r
    `),V=a(t,"BR",{}),z=r(t),W=a(t,"BR",{}),J=r(t),b=a(t,"A",{href:!0,"data-svelte-h":!0}),d(b)!=="svelte-1ey43kx"&&(b.textContent=zt),Q=i(t,` |\r
    `),f=a(t,"A",{href:!0,"data-svelte-h":!0}),d(f)!=="svelte-1u3j9h3"&&(f.textContent=Wt),X=r(t),Z=a(t,"BR",{}),ee=r(t),te=a(t,"BR",{}),ne=r(t),g=a(t,"H1",{id:!0,"data-svelte-h":!0}),d(g)!=="svelte-1goqnpm"&&(g.textContent=Jt),ae=r(t),le=a(t,"BR",{}),re=r(t),D=a(t,"H2",{"data-svelte-h":!0}),d(D)!=="svelte-ejo9eb"&&(D.textContent=Qt),oe=r(t),se=a(t,"BR",{}),ie=r(t),y=a(t,"IMG",{src:!0,alt:!0}),pe=r(t),de=a(t,"BR",{}),he=i(t,`\r
    Once you've downloaded the .deb file, locate it in your Files app. If you downloaded\r
    the file from a web browser, it probably went to the Downloads folder.\r
    `),ce=a(t,"BR",{}),ue=r(t),me=a(t,"BR",{}),be=r(t),fe=a(t,"BR",{}),ge=r(t),T=a(t,"H2",{"data-svelte-h":!0}),d(T)!=="svelte-1ipm5i8"&&(T.textContent=Zt),ye=r(t),Ce=a(t,"BR",{}),xe=r(t),C=a(t,"IMG",{src:!0,alt:!0}),ve=r(t),we=a(t,"BR",{}),_e=i(t,`\r
    Once you've found the file, right click its thumbnail and press `),G=a(t,"B",{"data-svelte-h":!0}),d(G)!=="svelte-mkcykb"&&(G.textContent=tn),Re=i(t,`.\r
    This will open up some additional information including the name of the file. Select\r
    the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,\r
    including the .deb file extension.\r
    `),ke=a(t,"BR",{}),Be=r(t),Ee=a(t,"BR",{}),Ie=r(t),Le=a(t,"BR",{}),Ae=r(t),O=a(t,"H2",{"data-svelte-h":!0}),d(O)!=="svelte-1rpz6rj"&&(O.textContent=nn),Me=r(t),De=a(t,"BR",{}),Te=r(t),x=a(t,"IMG",{src:!0,alt:!0}),Ge=r(t),Oe=a(t,"BR",{}),Ue=i(t,`\r
    Make sure your Files app is still opened to the folder containing the .deb file.\r
    Click the three dots next to the searchbar and press `),U=a(t,"B",{"data-svelte-h":!0}),d(U)!=="svelte-12b4tn"&&(U.textContent=ln),je=i(t,`.\r
    This will open your computer's command line app. You will see the folder's path\r
    next to the prompt, meaning that the command line is opened within a specific folder.\r
    `),He=a(t,"BR",{}),Pe=r(t),Ye=a(t,"BR",{}),Se=r(t),Fe=a(t,"BR",{}),Ne=r(t),j=a(t,"H2",{"data-svelte-h":!0}),d(j)!=="svelte-14sbxkj"&&(j.textContent=rn),$e=r(t),qe=a(t,"BR",{}),Ke=r(t),v=a(t,"IMG",{src:!0,alt:!0}),Ve=r(t),ze=a(t,"BR",{}),We=i(t,`\r
    In the command line, type `),w=a(t,"CODE",{class:!0,"data-svelte-h":!0}),d(w)!=="svelte-zfnrg0"&&(w.textContent=sn),Je=i(t,`,\r
    then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install\r
    the application. You may need to type your password and press Enter again.\r
    `),Qe=a(t,"BR",{}),Xe=r(t),Ze=a(t,"BR",{}),et=r(t),tt=a(t,"BR",{}),nt=r(t),H=a(t,"H2",{"data-svelte-h":!0}),d(H)!=="svelte-311at8"&&(H.textContent=pn),at=r(t),lt=a(t,"BR",{}),rt=r(t),_=a(t,"IMG",{src:!0,alt:!0}),ot=r(t),st=a(t,"BR",{}),it=i(t,`\r
    The filename of the .deb package may be different from the actual package name.\r
    When you use the installation command, the real package name will appear in a message\r
    saying `),R=a(t,"CODE",{class:!0,"data-svelte-h":!0}),d(R)!=="svelte-3cov6e"&&(R.textContent=hn),pt=i(t,`.\r
    Copy that REAL_PACKAGE_NAME and make sure to write it down somewhere, in case you need\r
    to delete the package at any time. `),dt=a(t,"BR",{}),ht=r(t),ct=a(t,"BR",{}),ut=i(t,` Your new app should appear in your computer's Applications menu.\r
    `),mt=a(t,"BR",{}),bt=r(t),ft=a(t,"BR",{}),gt=r(t),yt=a(t,"BR",{}),Ct=r(t),u=a(t,"H1",{id:!0});var $=Kt(u);xt=i($,"Uninstalling "),vt=i($,cn),wt=i($," a .deb package"),$.forEach(m),_t=r(t),Rt=a(t,"BR",{}),kt=r(t),k=a(t,"IMG",{src:!0,alt:!0}),Bt=r(t),Et=a(t,"BR",{}),It=i(t,`\r
    Remember when I had you copy the real package name of the .deb? You can use it to\r
    uninstall the package. Simply open your Terminal app, type `),B=a(t,"CODE",{class:!0,"data-svelte-h":!0}),d(B)!=="svelte-bb0e1k"&&(B.textContent=mn),Lt=i(t,`, and hit Enter. You may need to type in your password and hit\r
    Enter again. The command prompt will ask `),E=a(t,"CODE",{class:!0});var qt=Kt(E);At=i(qt,"Do you want to continue? "),Mt=i(qt,bn),qt.forEach(m),Dt=i(t,`\r
    Type in `),I=a(t,"CODE",{class:!0,"data-svelte-h":!0}),d(I)!=="svelte-rbmw5f"&&(I.textContent=fn),Tt=i(t,` and press Enter.\r
    `),Gt=a(t,"BR",{}),Ot=r(t),Ut=a(t,"BR",{}),jt=r(t),Ht=a(t,"BR",{}),Pt=r(t),P=a(t,"I",{"data-svelte-h":!0}),d(P)!=="svelte-5r453"&&(P.textContent=gn),Yt=r(t),St=a(t,"BR",{}),Ft=r(t),Nt=a(t,"BR",{}),$t=r(t),L=a(t,"A",{href:!0,"data-svelte-h":!0}),d(L)!=="svelte-j6el6n"&&(L.textContent=yn),t.forEach(m),F=r(h);const Cn=An("svelte-8y7sg0",document.head);Mn(A.$$.fragment,Cn),Cn.forEach(m),this.h()},h(){s(c,"class","titlesection"),M(c,"background-image","url("+xn+")"),s(b,"href","#install"),s(f,"href","#uninstall"),s(g,"id","install"),Y(y.src,Xt=On)||s(y,"src",Xt),s(y,"alt","Finding the .deb file in my file manager app"),M(y,"width","100%"),Y(C.src,en=Un)||s(C,"src",en),s(C,"alt","Copying the filename"),M(C,"width","100%"),Y(x.src,an=jn)||s(x,"src",an),s(x,"alt","Opening the CLI from the correct folder"),M(x,"width","100%"),Y(v.src,on=Hn)||s(v,"src",on),s(v,"alt","Typing in the command prompt"),M(v,"width","100%"),s(w,"class","svelte-ajdueu"),Y(_.src,dn=Pn)||s(_,"src",dn),s(_,"alt","Copying the package name"),M(_,"width","100%"),s(R,"class","svelte-ajdueu"),s(u,"id","uninstall"),Y(k.src,un=Yn)||s(k,"src",un),s(k,"alt","Deleting the package using CLI"),M(k,"width","100%"),s(B,"class","svelte-ajdueu"),s(E,"class","svelte-ajdueu"),s(I,"class","svelte-ajdueu"),s(L,"href",Tn+"/blog"),s(e,"class","infosection"),document.title="Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics"},m(h,t){q(h,c,t),q(h,S,t),q(h,e,t),n(e,K),n(e,V),n(e,z),n(e,W),n(e,J),n(e,b),n(e,Q),n(e,f),n(e,X),n(e,Z),n(e,ee),n(e,te),n(e,ne),n(e,g),n(e,ae),n(e,le),n(e,re),n(e,D),n(e,oe),n(e,se),n(e,ie),n(e,y),n(e,pe),n(e,de),n(e,he),n(e,ce),n(e,ue),n(e,me),n(e,be),n(e,fe),n(e,ge),n(e,T),n(e,ye),n(e,Ce),n(e,xe),n(e,C),n(e,ve),n(e,we),n(e,_e),n(e,G),n(e,Re),n(e,ke),n(e,Be),n(e,Ee),n(e,Ie),n(e,Le),n(e,Ae),n(e,O),n(e,Me),n(e,De),n(e,Te),n(e,x),n(e,Ge),n(e,Oe),n(e,Ue),n(e,U),n(e,je),n(e,He),n(e,Pe),n(e,Ye),n(e,Se),n(e,Fe),n(e,Ne),n(e,j),n(e,$e),n(e,qe),n(e,Ke),n(e,v),n(e,Ve),n(e,ze),n(e,We),n(e,w),n(e,Je),n(e,Qe),n(e,Xe),n(e,Ze),n(e,et),n(e,tt),n(e,nt),n(e,H),n(e,at),n(e,lt),n(e,rt),n(e,_),n(e,ot),n(e,st),n(e,it),n(e,R),n(e,pt),n(e,dt),n(e,ht),n(e,ct),n(e,ut),n(e,mt),n(e,bt),n(e,ft),n(e,gt),n(e,yt),n(e,Ct),n(e,u),n(u,xt),n(u,vt),n(u,wt),n(e,_t),n(e,Rt),n(e,kt),n(e,k),n(e,Bt),n(e,Et),n(e,It),n(e,B),n(e,Lt),n(e,E),n(E,At),n(E,Mt),n(e,Dt),n(e,I),n(e,Tt),n(e,Gt),n(e,Ot),n(e,Ut),n(e,jt),n(e,Ht),n(e,Pt),n(e,P),n(e,Yt),n(e,St),n(e,Ft),n(e,Nt),n(e,$t),n(e,L),q(h,F,t),Ln(A,document.head,null),N=!0},p:kn,i(h){N||(In(A.$$.fragment,h),N=!0)},o(h){En(A.$$.fragment,h),N=!1},d(h){h&&(m(c),m(S),m(e),m(F)),Bn(A)}}}class Vn extends wn{constructor(c){super(),_n(this,c,null,Sn,Rn,{})}}export{Vn as component};
