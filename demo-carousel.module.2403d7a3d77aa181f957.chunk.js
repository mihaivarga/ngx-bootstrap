webpackJsonp(["demo-carousel.module"],{"2PDq":function(l,n){l.exports='<carousel>\n  <slide>\n    <img src="assets/images/nature/1.jpg" alt="First slide" style="display: block; width: 100%;">\n  </slide>\n  <slide>\n    <img src="assets/images/nature/2.jpg" alt="Second slide" style="display: block; width: 100%;">\n  </slide>\n  <slide>\n    <img src="assets/images/nature/3.jpg" alt="Third slide" style="display: block; width: 100%;">\n  </slide>\n</carousel>\n'},"67tn":function(l,n){l.exports='<carousel>\n  <slide>\n    <img src="assets/images/nature/7.jpg" alt="First slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src="assets/images/nature/8.jpg" alt="Second slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src="assets/images/nature/1.jpg" alt="Third slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </slide>\n</carousel>\n'},"6Qm1":function(l,n,e){"use strict";function u(l){return h._45(2,[(l()(),h._22(0,null,null,10,"demo-section",[],null,null,null,I.b,I.a)),h._20(49152,null,0,P.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,3,"p",[],null,null,null,null,null)),(l()(),h._43(null,["A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel. "])),(l()(),h._22(0,null,null,1,"em",[],null,null,null,null,null)),(l()(),h._43(null,["Nested\n  carousels are not supported."])),(l()(),h._43(0,["\n\n  "])),(l()(),h._22(0,null,0,1,"docs-section",[],null,null,null,w.b,w.a)),h._20(49152,null,0,N.a,[h.y],{content:[0,"content"]},null),(l()(),h._43(0,["\n"])),(l()(),h._43(null,["\n"]))],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,9,0,e.componentContent)},null)}function t(l){return h._45(0,[(l()(),h._43(null,["\n    "])),(l()(),h._22(0,null,null,3,"div",[["class","item"]],[[2,"active",null]],null,null,null,null)),(l()(),h._43(null,["\n      "])),h._34(null,0),(l()(),h._43(null,["\n    "])),(l()(),h._43(null,["\n  "]))],null,function(l,n){l(n,1,0,n.component.active)})}function i(l){return h._45(0,[(l()(),h._22(0,null,null,0,"li",[],[[2,"active",null]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.selectSlide(l.context.index)&&u),u},null,null))],null,function(l,n){l(n,0,0,!0===n.context.$implicit.active)})}function s(l){return h._45(0,[(l()(),h._22(0,null,null,4,"ol",[["class","carousel-indicators"]],null,null,null,null,null)),(l()(),h._43(null,[" "])),(l()(),h._16(16777216,null,null,1,null,i)),h._20(802816,null,0,B.m,[h._4,h.Z,h.A],{ngForOf:[0,"ngForOf"]},null),(l()(),h._43(null,[" "]))],function(l,n){l(n,3,0,n.component.slides)},null)}function o(l){return h._45(0,[(l()(),h._22(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),h._43(null,["Previous"]))],null,null)}function a(l){return h._45(0,[(l()(),h._22(0,null,null,6,"a",[["class","left carousel-control carousel-control-prev"]],[[2,"disabled",null]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.previousSlide()&&u),u},null,null)),(l()(),h._43(null,[" "])),(l()(),h._22(0,null,null,0,"span",[["aria-hidden","true"],["class","icon-prev carousel-control-prev-icon"]],null,null,null,null,null)),(l()(),h._43(null,[" "])),(l()(),h._16(16777216,null,null,1,null,o)),h._20(16384,null,0,B.n,[h._4,h.Z],{ngIf:[0,"ngIf"]},null),(l()(),h._43(null,[" "]))],function(l,n){l(n,5,0,n.component.isBs4)},function(l,n){var e=n.component;l(n,0,0,0===e.activeSlide&&e.noWrap)})}function r(l){return h._45(0,[(l()(),h._22(0,null,null,6,"a",[["class","right carousel-control carousel-control-next"]],[[2,"disabled",null]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.nextSlide()&&u),u},null,null)),(l()(),h._43(null,[" "])),(l()(),h._22(0,null,null,0,"span",[["aria-hidden","true"],["class","icon-next carousel-control-next-icon"]],null,null,null,null,null)),(l()(),h._43(null,[" "])),(l()(),h._22(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),h._43(null,["Next"])),(l()(),h._43(null,[" "]))],null,function(l,n){var e=n.component;l(n,0,0,e.isLast(e.activeSlide)&&e.noWrap)})}function c(l){return h._45(0,[(l()(),h._22(0,null,null,13,"div",[["class","carousel slide"]],null,[[null,"mouseenter"],[null,"mouseleave"],[null,"mouseup"]],function(l,n,e){var u=!0,t=l.component;return"mouseenter"===n&&(u=!1!==t.pause()&&u),"mouseleave"===n&&(u=!1!==t.play()&&u),"mouseup"===n&&(u=!1!==t.play()&&u),u},null,null)),(l()(),h._43(null,[" "])),(l()(),h._16(16777216,null,null,1,null,s)),h._20(16384,null,0,B.n,[h._4,h.Z],{ngIf:[0,"ngIf"]},null),(l()(),h._43(null,[" "])),(l()(),h._22(0,null,null,1,"div",[["class","carousel-inner"]],null,null,null,null,null)),h._34(null,0),(l()(),h._43(null,[" "])),(l()(),h._16(16777216,null,null,1,null,a)),h._20(16384,null,0,B.n,[h._4,h.Z],{ngIf:[0,"ngIf"]},null),(l()(),h._43(null,[" "])),(l()(),h._16(16777216,null,null,1,null,r)),h._20(16384,null,0,B.n,[h._4,h.Z],{ngIf:[0,"ngIf"]},null),(l()(),h._43(null,[" "])),(l()(),h._43(null,[" "]))],function(l,n){var e=n.component;l(n,3,0,e.slides.length>1),l(n,9,0,e.slides.length>1),l(n,12,0,e.slides.length>1)},null)}function d(l){return h._45(0,[(l()(),h._22(0,null,null,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","image slide"],["style","display: block; width: 100%;"]],[[8,"src",4]],null,null,null,null)),(l()(),h._43(0,["\n\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),h._43(null,["Slide ",""])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["",""])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,h._35(n,1).active,h._35(n,1).addClass,h._35(n,1).addClass),l(n,3,0,n.context.$implicit.image),l(n,8,0,n.context.index),l(n,11,0,n.context.$implicit.text)})}function _(l){return h._45(0,[(l()(),h._22(0,null,null,5,"carousel",[],null,[[null,"activeSlideChange"]],function(l,n,e){var u=!0,t=l.component;return"activeSlideChange"===n&&(u=!1!==(t.activeSlideIndex=e)&&u),u},c,X)),h._20(180224,null,0,U,[Z,h.I],{noWrap:[0,"noWrap"],activeSlide:[1,"activeSlide"],interval:[2,"interval"]},{activeSlideChange:"activeSlideChange"}),(l()(),h._43(0,["\n  "])),(l()(),h._16(16777216,null,0,1,null,d)),h._20(802816,null,0,B.m,[h._4,h.Z,h.A],{ngForOf:[0,"ngForOf"]},null),(l()(),h._43(0,["\n"])),(l()(),h._43(null,["\n"])),(l()(),h._22(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),h._43(null,["\n"])),(l()(),h._22(0,null,null,10,"div",[],null,null,null,null,null)),(l()(),h._43(null,["\n  "])),(l()(),h._22(0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.addSlide()&&u),u},null,null)),(l()(),h._43(null,["Add Slide\n  "])),(l()(),h._43(null,["\n  "])),(l()(),h._22(0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.removeSlide()&&u),u},null,null)),(l()(),h._43(null,["Remove Current\n  "])),(l()(),h._43(null,["\n  "])),(l()(),h._22(0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.removeSlide(2)&&u),u},null,null)),(l()(),h._43(null,["Remove #3\n  "])),(l()(),h._43(null,["\n"])),(l()(),h._43(null,["\n"])),(l()(),h._22(0,null,null,24,"div",[],null,null,null,null,null)),(l()(),h._43(null,["\n  "])),(l()(),h._22(0,null,null,10,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),h._43(null,["\n    "])),(l()(),h._22(0,null,null,7,"label",[],null,null,null,null,null)),(l()(),h._22(0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,t=l.component;return"change"===n&&(u=!1!==h._35(l,27).onChange(e.target.checked)&&u),"blur"===n&&(u=!1!==h._35(l,27).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(t.noWrapSlides=e)&&u),u},null,null)),h._20(16384,null,0,Q.b,[h.Q,h.p],null,null),h._40(1024,null,Q.m,function(l){return[l]},[Q.b]),h._20(671744,null,0,Q.r,[[8,null],[8,null],[8,null],[2,Q.m]],{model:[0,"model"]},{update:"ngModelChange"}),h._40(2048,null,Q.n,null,[Q.r]),h._20(16384,null,0,Q.o,[Q.n],null,null),(l()(),h._43(null,["Disable Slide Looping"])),(l()(),h._43(null,["\n  "])),(l()(),h._43(null,["\n\n  "])),(l()(),h._22(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._43(null,["Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): "])),(l()(),h._43(null,["\n  "])),(l()(),h._22(0,null,null,6,"input",[["class","form-control"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var u=!0,t=l.component;return"input"===n&&(u=!1!==h._35(l,39)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==h._35(l,39).onTouched()&&u),"compositionstart"===n&&(u=!1!==h._35(l,39)._compositionStart()&&u),"compositionend"===n&&(u=!1!==h._35(l,39)._compositionEnd(e.target.value)&&u),"change"===n&&(u=!1!==h._35(l,40).onChange(e.target.value)&&u),"input"===n&&(u=!1!==h._35(l,40).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==h._35(l,40).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(t.myInterval=e)&&u),u},null,null)),h._20(16384,null,0,Q.d,[h.Q,h.p,[2,Q.a]],null,null),h._20(16384,null,0,Q.x,[h.Q,h.p],null,null),h._40(1024,null,Q.m,function(l,n){return[l,n]},[Q.d,Q.x]),h._20(671744,null,0,Q.r,[[8,null],[8,null],[8,null],[2,Q.m]],{model:[0,"model"]},{update:"ngModelChange"}),h._40(2048,null,Q.n,null,[Q.r]),h._20(16384,null,0,Q.o,[Q.n],null,null),(l()(),h._43(null,["\n"])),(l()(),h._43(null,["\n"]))],function(l,n){var e=n.component;l(n,1,0,e.noWrapSlides,e.activeSlideIndex,e.myInterval),l(n,4,0,e.slides),l(n,29,0,e.noWrapSlides),l(n,42,0,e.myInterval)},function(l,n){l(n,26,0,h._35(n,31).ngClassUntouched,h._35(n,31).ngClassTouched,h._35(n,31).ngClassPristine,h._35(n,31).ngClassDirty,h._35(n,31).ngClassValid,h._35(n,31).ngClassInvalid,h._35(n,31).ngClassPending),l(n,38,0,h._35(n,44).ngClassUntouched,h._35(n,44).ngClassTouched,h._35(n,44).ngClassPristine,h._35(n,44).ngClassDirty,h._35(n,44).ngClassValid,h._35(n,44).ngClassInvalid,h._35(n,44).ngClassPending)})}function p(l){return h._45(0,[(l()(),h._22(0,null,null,20,"carousel",[],null,null,null,c,X)),h._20(180224,null,0,U,[Z,h.I],null,null),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,4,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","First slide"],["src","assets/images/nature/1.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,4,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Second slide"],["src","assets/images/nature/2.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,4,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Third slide"],["src","assets/images/nature/3.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n"])),(l()(),h._43(null,["\n"]))],function(l,n){l(n,4,0),l(n,10,0),l(n,16,0)},function(l,n){l(n,3,0,h._35(n,4).active,h._35(n,4).addClass,h._35(n,4).addClass),l(n,9,0,h._35(n,10).active,h._35(n,10).addClass,h._35(n,10).addClass),l(n,15,0,h._35(n,16).active,h._35(n,16).addClass,h._35(n,16).addClass)})}function m(l){return h._45(0,[(l()(),h._22(0,null,null,47,"carousel",[],null,null,null,c,X)),h._20(180224,null,0,U,[Z,h.I],null,null),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","First slide"],["src","assets/images/nature/4.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["First slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Nulla vitae elit libero, a pharetra augue mollis interdum."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Second slide"],["src","assets/images/nature/5.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["Second slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Third slide"],["src","assets/images/nature/6.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["Third slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Praesent commodo cursus magna, vel scelerisque nisl consectetur."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n"])),(l()(),h._43(null,["\n"]))],function(l,n){l(n,4,0),l(n,19,0),l(n,34,0)},function(l,n){l(n,3,0,h._35(n,4).active,h._35(n,4).addClass,h._35(n,4).addClass),l(n,18,0,h._35(n,19).active,h._35(n,19).addClass,h._35(n,19).addClass),l(n,33,0,h._35(n,34).active,h._35(n,34).addClass,h._35(n,34).addClass)})}function v(l){return h._45(0,[(l()(),h._22(0,null,null,47,"carousel",[],null,null,null,c,X)),h._20(180224,null,0,U,[Z,h.I],null,null),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","First slide"],["src","assets/images/nature/7.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["First slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Nulla vitae elit libero, a pharetra augue mollis interdum."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Second slide"],["src","assets/images/nature/8.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["Second slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n  "])),(l()(),h._22(0,null,0,13,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,0,"img",[["alt","Third slide"],["src","assets/images/nature/1.jpg"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(l()(),h._43(0,["\n    "])),(l()(),h._22(0,null,0,7,"div",[["class","carousel-caption d-none d-md-block"]],null,null,null,null,null)),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._43(null,["Third slide label"])),(l()(),h._43(null,["\n      "])),(l()(),h._22(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),h._43(null,["Praesent commodo cursus magna, vel scelerisque nisl consectetur."])),(l()(),h._43(null,["\n    "])),(l()(),h._43(0,["\n  "])),(l()(),h._43(0,["\n"])),(l()(),h._43(null,["\n"]))],function(l,n){l(n,4,0),l(n,19,0),l(n,34,0)},function(l,n){l(n,3,0,h._35(n,4).active,h._35(n,4).addClass,h._35(n,4).addClass),l(n,18,0,h._35(n,19).active,h._35(n,19).addClass,h._35(n,19).addClass),l(n,33,0,h._35(n,34).active,h._35(n,34).addClass,h._35(n,34).addClass)})}Object.defineProperty(n,"__esModule",{value:!0});var g,h=e("/oeL"),f=function(){return function(){}}(),y=e("urbl"),b=e("QUTT"),S=e("PJTy"),C=e("v1cn"),x=e("qEIf"),k=e("rNzy"),I=e("Jggs"),P=e("c+jj"),w=e("LfeD"),N=e("lgdf"),T=function(){return function(){}}(),j=function(){return function(){}}(),W=function(){return function(){}}(),O=function(){function l(){this.myInterval=1500,this.slides=[],this.activeSlideIndex=0,this.noWrapSlides=!1;for(var l=0;l<4;l++)this.addSlide()}return l.prototype.addSlide=function(){this.slides.push({image:"assets/images/nature/"+(this.slides.length%8+1)+".jpg"})},l.prototype.removeSlide=function(l){var n=l||this.activeSlideIndex;this.slides.splice(n,1)},l.ctorParameters=function(){return[]},l}(),A=e("SY0Y"),D=e("EWuz"),M=e("bZLq"),E=e("vN/N"),R=[{name:"Usage",anchor:"usage",outlet:A.a,content:{doc:e("Z7Kb")}},{name:"Examples",anchor:"examples",outlet:D.a,content:[{title:"Basic",anchor:"basic",component:e("yKkh"),html:e("2PDq"),outlet:T},{title:"Optional captions",anchor:"captions",description:"<p>Add captions to your slides easily with the <code>.carousel-caption</code>\n          element within any <code>&lt;slide></code>. Place just about any optional HTML within there\n          and it will be automatically aligned and formatted.</p>",component:e("OX9Y"),html:e("MRqn"),outlet:j},{title:"Configuring defaults",anchor:"config-defaults",component:e("y0SD"),html:e("67tn"),outlet:W},{title:"Dynamic Slides",anchor:"dynamic-slides",component:e("T9H2"),html:e("Ou97"),outlet:O}]},{name:"API Reference",anchor:"api-reference",outlet:M.a,content:[{title:"CarouselComponent",anchor:"carousel-component",outlet:E.b},{title:"SlideComponent",anchor:"slide-component",outlet:E.b},{title:"CarouselConfig",anchor:"carousel-config",outlet:E.c}]}],F=function(){return function(){this.name="Carousel",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/carousel",this.componentContent=R}}(),L=h._19({encapsulation:2,styles:[],data:{}}),q=h._17("carousel-section",F,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"carousel-section",[],null,null,null,u,L)),h._20(49152,null,0,F,[],null,null)],null,null)},{},{},[]),z=e("WJQO"),Z=function(){function l(){this.interval=5e3,this.noPause=!1,this.noWrap=!1}return l.decorators=[{type:h.w}],l.ctorParameters=function(){return[]},l}();!function(l){l[l.UNKNOWN=0]="UNKNOWN",l[l.NEXT=1]="NEXT",l[l.PREV=2]="PREV"}(g||(g={}));var U=function(){function l(l,n){this.ngZone=n,this.activeSlideChange=new h.r(!1),this._slides=new z.a,this.destroyed=!1,Object.assign(this,l)}return Object.defineProperty(l.prototype,"activeSlide",{get:function(){return this._currentActiveSlide},set:function(l){this._slides.length&&l!==this._currentActiveSlide&&this._select(l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"interval",{get:function(){return this._interval},set:function(l){this._interval=l,this.restartTimer()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"slides",{get:function(){return this._slides.toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isBs4",{get:function(){return!Object(z.b)()},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this.destroyed=!0},l.prototype.addSlide=function(l){this._slides.add(l),1===this._slides.length&&(this._currentActiveSlide=void 0,this.activeSlide=0,this.play())},l.prototype.removeSlide=function(l){var n=this,e=this._slides.indexOf(l);if(this._currentActiveSlide===e){var u=void 0;this._slides.length>1&&(u=this.isLast(e)?this.noWrap?e-1:0:e),this._slides.remove(e),setTimeout(function(){n._select(u)},0)}else{this._slides.remove(e);var t=this.getCurrentSlideIndex();setTimeout(function(){n._currentActiveSlide=t,n.activeSlideChange.emit(n._currentActiveSlide)},0)}},l.prototype.nextSlide=function(l){void 0===l&&(l=!1),this.activeSlide=this.findNextSlideIndex(g.NEXT,l)},l.prototype.previousSlide=function(l){void 0===l&&(l=!1),this.activeSlide=this.findNextSlideIndex(g.PREV,l)},l.prototype.selectSlide=function(l){this.activeSlide=l},l.prototype.play=function(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())},l.prototype.pause=function(){this.noPause||(this.isPlaying=!1,this.resetTimer())},l.prototype.getCurrentSlideIndex=function(){return this._slides.findIndex(function(l){return l.active})},l.prototype.isLast=function(l){return l+1>=this._slides.length},l.prototype.findNextSlideIndex=function(l,n){var e=0;if(n||!this.isLast(this.activeSlide)||l===g.PREV||!this.noWrap){switch(l){case g.NEXT:e=this.isLast(this._currentActiveSlide)?!n&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case g.PREV:e=this._currentActiveSlide>0?this._currentActiveSlide-1:!n&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return e}},l.prototype._select=function(l){if(isNaN(l))this.pause();else{var n=this._slides.get(this._currentActiveSlide);n&&(n.active=!1);var e=this._slides.get(l);e&&(this._currentActiveSlide=l,e.active=!0,this.activeSlide=l,this.activeSlideChange.emit(l))}},l.prototype.restartTimer=function(){var l=this;this.resetTimer();var n=+this.interval;!isNaN(n)&&n>0&&(this.currentInterval=this.ngZone.runOutsideAngular(function(){return setInterval(function(){var n=+l.interval;l.ngZone.run(function(){l.isPlaying&&!isNaN(l.interval)&&n>0&&l.slides.length?l.nextSlide():l.pause()})},n)}))},l.prototype.resetTimer=function(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)},l.decorators=[{type:h.l,args:[{selector:"carousel",template:'<div (mouseenter)="pause()" (mouseleave)="play()" (mouseup)="play()" class="carousel slide"> <ol class="carousel-indicators" *ngIf="slides.length > 1"> <li *ngFor="let slidez of slides; let i = index;" [class.active]="slidez.active === true" (click)="selectSlide(i)"></li> </ol> <div class="carousel-inner"><ng-content></ng-content></div> <a class="left carousel-control carousel-control-prev" [class.disabled]="activeSlide === 0 && noWrap" (click)="previousSlide()" *ngIf="slides.length > 1"> <span class="icon-prev carousel-control-prev-icon" aria-hidden="true"></span> <span *ngIf="isBs4" class="sr-only">Previous</span> </a> <a class="right carousel-control carousel-control-next" (click)="nextSlide()"  [class.disabled]="isLast(activeSlide) && noWrap" *ngIf="slides.length > 1"> <span class="icon-next carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> '}]}],l.ctorParameters=function(){return[{type:Z},{type:h.I}]},l.propDecorators={noWrap:[{type:h.z}],noPause:[{type:h.z}],activeSlideChange:[{type:h.K}],activeSlide:[{type:h.z}],interval:[{type:h.z}]},l}(),K=function(){function l(l){this.addClass=!0,this.carousel=l}return l.prototype.ngOnInit=function(){this.carousel.addSlide(this)},l.prototype.ngOnDestroy=function(){this.carousel.removeSlide(this)},l.decorators=[{type:h.l,args:[{selector:"slide",template:'\n    <div [class.active]="active" class="item">\n      <ng-content></ng-content>\n    </div>\n  '}]}],l.ctorParameters=function(){return[{type:U}]},l.propDecorators={active:[{type:h.t,args:["class.active"]},{type:h.z}],addClass:[{type:h.t,args:["class.item"]},{type:h.t,args:["class.carousel-item"]}]},l}(),V=h._19({encapsulation:2,styles:[],data:{}}),B=(h._17("slide",K,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"slide",[],[[2,"active",null],[2,"item",null],[2,"carousel-item",null]],null,null,t,V)),h._20(245760,null,0,K,[U],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,h._35(n,1).active,h._35(n,1).addClass,h._35(n,1).addClass)})},{active:"active"},{},["*"]),e("qbdv")),X=h._19({encapsulation:2,styles:[],data:{}}),Q=(h._17("carousel",U,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"carousel",[],null,null,null,c,X)),h._20(180224,null,0,U,[Z,h.I],null,null)],null,null)},{noWrap:"noWrap",noPause:"noPause",activeSlide:"activeSlide",interval:"interval"},{activeSlideChange:"activeSlideChange"},["*"]),e("bm2B")),H=h._19({encapsulation:2,styles:[],data:{}}),J=h._17("demo-carousel-dynamic",O,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"demo-carousel-dynamic",[],null,null,null,_,H)),h._20(49152,null,0,O,[],null,null)],null,null)},{},{},[]),Y=h._19({encapsulation:2,styles:[],data:{}}),$=h._17("demo-carousel-basic",T,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"demo-carousel-basic",[],null,null,null,p,Y)),h._20(49152,null,0,T,[],null,null)],null,null)},{},{},[]),G=h._19({encapsulation:2,styles:[],data:{}}),ll=h._17("demo-carousel-captions",j,function(l){return h._45(0,[(l()(),h._22(0,null,null,1,"demo-carousel-captions",[],null,null,null,m,G)),h._20(49152,null,0,j,[],null,null)],null,null)},{},{},[]),nl=h._19({encapsulation:2,styles:[],data:{}}),el=h._17("demo-carousel-config",W,function(l){return h._45(0,[(l()(),h._22(0,null,null,2,"demo-carousel-config",[],null,null,null,v,nl)),h._20(49152,null,0,W,[],null,null),h._40(256,null,Z,{interval:1500,noPause:!0},[])],null,null)},{},{},[]),ul=e("zNK2"),tl=e("BkNc"),il=e("5bcs"),sl=e("W6cK"),ol=function(){function l(){}return l.forRoot=function(){return{ngModule:l,providers:[]}},l.decorators=[{type:h.D,args:[{imports:[B.c],declarations:[K,U],exports:[K,U],providers:[Z]}]}],l.ctorParameters=function(){return[]},l}(),al=e("yroR"),rl=e("XH7w"),cl=e("bqLD");e.d(n,"DemoCarouselModuleNgFactory",function(){return dl});var dl=h._18(f,[],function(l){return h._32([h._33(512,h.m,h._14,[[8,[y.a,b.a,S.a,C.a,x.a,k.a,q,J,$,ll,el]],[3,h.m],h.G]),h._33(4608,B.p,B.o,[h.C]),h._33(4608,Z,Z,[]),h._33(4608,Q.z,Q.z,[]),h._33(4608,ul.a,ul.a,[B.i,tl.n]),h._33(4608,il.a,il.a,[]),h._33(4608,sl.a,sl.a,[]),h._33(512,B.c,B.c,[]),h._33(512,ol,ol,[]),h._33(512,Q.w,Q.w,[]),h._33(512,Q.k,Q.k,[]),h._33(512,al.a,al.a,[]),h._33(512,E.d,E.d,[]),h._33(512,tl.q,tl.q,[[2,tl.v],[2,tl.n]]),h._33(512,D.b,D.b,[]),h._33(512,M.b,M.b,[]),h._33(512,A.b,A.b,[]),h._33(512,rl.a,rl.a,[]),h._33(512,cl.a,cl.a,[]),h._33(512,f,f,[]),h._33(1024,tl.l,function(){return[[{path:"",component:F}]]},[])])})},MRqn:function(l,n){l.exports='<carousel>\n  <slide>\n    <img src="assets/images/nature/4.jpg" alt="First slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src="assets/images/nature/5.jpg" alt="Second slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src="assets/images/nature/6.jpg" alt="Third slide" style="display: block; width: 100%;">\n    <div class="carousel-caption d-none d-md-block">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </slide>\n</carousel>\n'},OX9Y:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-carousel-captions',\n  templateUrl: './captions.html'\n})\nexport class DemoCarouselCaptionsComponent {}\n"},Ou97:function(l,n){l.exports='<carousel [interval]="myInterval" [noWrap]="noWrapSlides" [(activeSlide)]="activeSlideIndex">\n  <slide *ngFor="let slide of slides; let index=index">\n    <img [src]="slide.image" alt="image slide" style="display: block; width: 100%;">\n\n    <div class="carousel-caption">\n      <h4>Slide {{index}}</h4>\n      <p>{{slide.text}}</p>\n    </div>\n  </slide>\n</carousel>\n<br/>\n<div>\n  <button type="button" class="btn btn-info"\n          (click)="addSlide()">Add Slide\n  </button>\n  <button type="button" class="btn btn-info"\n          (click)="removeSlide()">Remove Current\n  </button>\n  <button type="button" class="btn btn-info"\n          (click)="removeSlide(2)">Remove #3\n  </button>\n</div>\n<div>\n  <div class="checkbox">\n    <label><input type="checkbox" [(ngModel)]="noWrapSlides">Disable Slide Looping</label>\n  </div>\n\n  <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n  <input type="number" class="form-control" [(ngModel)]="myInterval">\n</div>\n'},T9H2:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-carousel-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoCarouselDynamicComponent {\n  myInterval: number = 1500;\n  slides: any[] = [];\n  activeSlideIndex: number = 0;\n  noWrapSlides: boolean = false;\n\n  constructor() {\n    for (let i = 0; i < 4; i++) {\n      this.addSlide();\n    }\n  }\n\n  addSlide(): void {\n    this.slides.push({\n      image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`\n    });\n  }\n\n  removeSlide(index?: number): void {\n    const toRemove = index ? index : this.activeSlideIndex;\n    this.slides.splice(toRemove, 1);\n  }\n}\n"},Z7Kb:function(l,n){l.exports="<pre class=\"prettyprint lang-typescript\">// RECOMMENDED (doesn't work with system.js)\nimport { CarouselModule } from 'ngx-bootstrap/carousel';\n// or\nimport { CarouselModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [CarouselModule.forRoot(),...]\n})\nexport class AppModule(){}</pre>"},y0SD:function(l,n){l.exports="import { Component } from '@angular/core';\nimport { CarouselConfig } from 'ngx-bootstrap/carousel';\n\n@Component({\n  selector: 'demo-carousel-config',\n  templateUrl: './config.html',\n  providers: [\n    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }\n  ]\n})\nexport class DemoCarouselConfigComponent {}\n"},yKkh:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-carousel-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoCarouseBasicComponent {}\n"}});