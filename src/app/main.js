// @flow

import '../styles/main.scss' // eslint-disable-line

import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, TimelineLite } from "gsap";

import 'animation.gsap';
import 'debug.addIndicators';
import $ from "jquery";



function pathPrepare($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $hugs = $("path#hugs");
var $comma = $("path#comma");
var $kk1 = $("path#kk1");
var $ki2 = $("path#ki2");
var $ks3 = $("path#ks3");
var $ks4 = $("path#ks4");
var $ke5 = $("path#ke5");
var $ks6 = $("path#ks6");

var $and = $("path#and");

var $bday = $("path#bday");
var $dot = $("path#dot");

var $ww1 = $("path#ww1");
var $wi2 = $("path#wi2");
var $ws3 = $("path#ws3");
var $wh4 = $("path#wh4");
var $we5 = $("path#we5");
var $ws6 = $("path#ws6");
var $wdot7 = $("path#wdot7");

// prepare SVG
pathPrepare($hugs);
pathPrepare($comma);

pathPrepare($kk1);
pathPrepare($ki2);
pathPrepare($ks3);
pathPrepare($ks4);
pathPrepare($ke5);
pathPrepare($ks6);

pathPrepare($and);
pathPrepare($bday);
pathPrepare($dot);

pathPrepare($ww1);
pathPrepare($wi2);
pathPrepare($ws3);
pathPrepare($wh4);
pathPrepare($we5);
pathPrepare($ws6);
pathPrepare($wdot7);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
	.add(TweenMax.to($hugs, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9

	.add(TweenMax.to($comma, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	
	.add(TweenMax.to($kk1, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ki2, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ks3, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ks4, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ke5, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ks6, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	
	.add(TweenMax.to($and, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9

	.add(TweenMax.to($bday, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
		
	.add(TweenMax.to($dot, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9

	.add(TweenMax.to($ww1, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($wi2, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ws3, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($wh4, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($we5, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
	.add(TweenMax.to($ws6, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone, onComplete:onComplete })) // draw word for 0.9

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 300, tweenChanges: true })
	.setTween(tween)
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


scene.on("progress", function (event) {
	
   if(event.state != "AFTER"){
    	$(".black-letters").removeClass("fill-black"); 
		TweenMax.killTweensOf($('.st0,.st1,.st2'));

	 	$('.st0,.st1,.st2').hide();

	}
});

function onComplete(){
   $(".black-letters").addClass("fill-black"); 
   $('.st0,.st1,.st2').show();
	
	TweenMax.to($('.hbdheart'), 1.2, {scaleX:1.2,scaleY:1.3, repeat:-1, ease:Elastic.easeOut, yoyo:true}); 

	TweenMax.to($('.liplower'), 1.7, {scaleX:1.1,scaleY:1.1, repeat:-1, ease:Power2.easeInOut, yoyo:true}); 
	TweenMax.to($('.lipuper'), 1.7, {scaleX:1.2,scaleY:1.2, repeat:-1, ease:Power2.easeInOut, yoyo:true}); 

	TweenMax.to($('.st0:eq(1)'), 1.1, {rotationZ: 10,repeat:-1, transformOrigin: "top", ease:Power2.easeInOut, yoyo:true}); 
	TweenMax.to($('.st0:eq(2)'), 3.1, {rotationZ: 25, transformOrigin: "center", repeat:-1, ease:Power2.easeInOut, yoyo:true}); 
	TweenMax.to($('.st0:eq(0)'), 2.3, {rotationZ: 15,repeat:-1, transformOrigin: "center", ease:Power2.easeInOut, yoyo:true}); 
}







// This tells Webpack that this file and all of its dependencies can be replaced.
// http://andrewhfarmer.com/webpack-hmr-tutorial/#the-simple-way
if (module.hot) {
	module.hot.accept() // eslint-disable-line
}
