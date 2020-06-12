// var avatar = document.getElementsByClassName('avatar')[0];
// window.onscroll = function () { 
//     var avatar = document.getElementsByClassName('avatar')[0];
//     var my_avatar = document.getElementsByClassName('my_avatar')[0];
//     // avatar.setAttribute("src", "avatar3.png");
//     // avatar.style.height="50px";
//     // avatar.css("height","50px");
//     // alert(avatar.length);
//     // // "use strict";
//     if ($(window).scrollTop() >= 5 ) {
//         avatar.setAttribute("src", "avatar3.png");
//         // my_avatar.style.marginBottom="5px";


//         // my_avatar.style.transition="2s";
//         // my_avatar.style.marginTop="0px";
//         // my_avatar.style.marginBottom="80px";

//         // my_avatar.style.textAlign="left";

//         // my_avatar.style.float="left";
//     //     // alert("one");
//     //     // myNav.style.background="#323438";
//     //     // myNav.style.height="80px";
//     }else {
//         avatar.setAttribute("src", "avatar1.png");
//     }
// };


function animate_skills(){
	var scrollFromTop = $(".skills_outer").offset().top;
	if ($(document).scrollTop() + window.innerHeight  > scrollFromTop){
			// alert('scrollFromTop');
		// if($(document).scrollTop()>385){
		var skill = document.getElementsByClassName("skill");
		var time = 2000;
		// alert(skill.length);
		for (i = 0; i < skill.length; i++) {
			var skill_level_inner = skill[i].getElementsByClassName("skill_level_inner")[0];
			var skill_level = document.getElementsByClassName("skill_level")[0];
			var skill_percent = skill[i].getElementsByClassName("skill_percent")[0];
			// alert(skill_level_inner.length);
			
			// alert(skill_level_inner[i].getAttribute("value"));
			// $( ".skill_level_inner".+(i+1) ).animate({ width:skill_level_inner[i].getAttribute("value") }, 2000);
			// skill_level_inner[i].animate({ width:skill_level_inner[i].getAttribute("value") }, 2000);
			

			// alert(skill_level_inner);
			// alert("time");
			var skill_level_value = skill_level_inner.getAttribute("value");
			// alert(skill_level_inner.offsetWidth);

			// alert(Math.round((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100));
			
			// skill_percent.textContent = skill_level_value;
			// skill_percent.textContent = Math.round((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100);
			// skill_percent.textContent="dd";
			// alert(skill_level_value);
			// Math.round(5.964354)
			$(skill_level_inner).animate({ width:skill_level_value }, time);


			// setInterval(function(){skill_percent.textContent = Math.round((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100);}, 0);
			skill_percent.textContent = Math.round((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100)+"%";

			// setInterval(function(){alert("Hello");}, 3000);
			// setTimeout(function(){ alert("Hello"); }, 3000);

			// $( ".skill_level_inner" ).animate({ width:"50%" }, 2000);
			time+=100;
		}
	}
}

























// function highlight_portifolio(){
// 	$(".project_main").hover(function(){

		

// 		var the_this = this;
// 		var the_this_project = $(this).children(".project");
// 		// var the_this = $(".project_main");
// 		// var the_this_project = $(the_this).children(".project");

// 		$(the_this).children(".project_title").hover(function(){

// 			$(this).css("cursor", "pointer");

// 			$(the_this).children(".project_title").css("transition", ".4s");
// 			$(the_this).children(".project_title").css("color", "#ff5851");

// 			$(the_this_project).children(".project_image").css("border", "5px solid #ff5851");
// 			$(the_this_project).children(".project_image").css("filter", "brightness(100%)");

// 			$(the_this_project).children(".project_tag").css("border", "1px solid #ff5851");
// 			$(the_this_project).children(".project_tag").css("color", "#ff5851");
// 			$(the_this_project).children(".project_tag").css("transition", ".4s");

// 		}, function(){

// 			$(the_this).children(".project_title").css("transition", "");
// 			$(the_this).children(".project_title").css("color", "");

// 			$(the_this_project).children(".project_image").css("border", "");
// 			$(the_this_project).children(".project_image").css("filter", "");
			
// 			$(the_this_project).children(".project_tag").css("border", "");
// 			$(the_this_project).children(".project_tag").css("color", "");
// 			$(the_this_project).children(".project_tag").css("transition", "");

// 		});



// 		$(the_this_project).children(".project_image").hover(function(){
// 			// alert("one");

// 			$(this).css("cursor", "pointer");

// 			$(the_this).children(".project_title").css("transition", ".4s");
// 			$(the_this).children(".project_title").css("color", "#ff5851");

// 			$(the_this_project).children(".project_image").css("border", "5px solid #ff5851");
// 			$(the_this_project).children(".project_image").css("filter", "brightness(100%)");

// 			$(the_this_project).children(".project_tag").css("border", "1px solid #ff5851");
// 			$(the_this_project).children(".project_tag").css("color", "#ff5851");
// 			$(the_this_project).children(".project_tag").css("transition", ".4s");

// 		}, function(){
			
// 			$(the_this).children(".project_title").css("transition", "");
// 			$(the_this).children(".project_title").css("color", "");

// 			$(the_this_project).children(".project_image").css("border", "");
// 			$(the_this_project).children(".project_image").css("filter", "");
			
// 			$(the_this_project).children(".project_tag").css("border", "");
// 			$(the_this_project).children(".project_tag").css("color", "");
// 			$(the_this_project).children(".project_tag").css("transition", "");

// 		});


// 		// var the_this = this;
// 		// var the_this_project = $(this).children(".project");
		
// 	});
// }




// highlight_portifolio();

// $(".project_main").hover(function(){

	

	// var the_this = this;
	// var the_this_project = $(this).children(".project");
	// var the_this_project = this;
	// var the_this = $(".project_main");
	// var the_this_project = $(the_this).children(".project");

	// $(the_this).children(".project_title").hover(function(){


$(".project_title").hover(function(){
	$(this).css("cursor", "pointer");

	$(this).css("transition", ".4s");
	$(this).css("color", "#ff5851");

	$(this).siblings(".project_image").css("border", "5px solid #ff5851");
	$(this).siblings(".project_image").css("filter", "brightness(100%)");

	$(this).siblings(".project_tag").css("border", "1px solid #ff5851");
	$(this).siblings(".project_tag").css("color", "#ff5851");
	$(this).siblings(".project_tag").css("transition", ".4s");
}, function(){
	// $(this).css("transition", "");
	$(this).css("color", "");

	$(this).siblings(".project_image").css("border", "");
	$(this).siblings(".project_image").css("filter", "");

	$(this).siblings(".project_tag").css("border", "");
	$(this).siblings(".project_tag").css("color", "");
});



$(".project_image").hover(function(){
	$(this).css("cursor", "pointer");

	$(this).css("border", "5px solid #ff5851");
	$(this).css("filter", "brightness(100%)");

	$(this).siblings(".project_title").css("transition", ".4s");
	$(this).siblings(".project_title").css("color", "#ff5851");

	$(this).siblings(".project_tag").css("border", "1px solid #ff5851");
	$(this).siblings(".project_tag").css("color", "#ff5851");
	$(this).siblings(".project_tag").css("transition", ".4s");

}, function(){
	
	$(this).css("border", "");
	$(this).css("filter", "");

	// $(this).siblings(".project_title").css("transition", ".4s");
	$(this).siblings(".project_title").css("color", "");

	$(this).siblings(".project_tag").css("border", "");
	$(this).siblings(".project_tag").css("color", "");

});


	// var the_this = this;
	// var the_this_project = $(this).children(".project");
	
// });





// skills_inner
// animate_skills();
setInterval(() => {  animate_skills() }, 0);


// animate_skills();






























// var goup_state = 0;

if ($(window).width() > 800){
	var top_animation = 0;

	var my_contact = document.getElementsByClassName("contact")[0];
	window.onscroll = function () { 



		// var scrollFromTop = $("footer").offset().top;
		// if ($(document).scrollTop() + window.innerHeight  > scrollFromTop){
		// 	alert("footer");
		// }

		var scrollFromTop = $("footer").offset().top;
		if ($(document).scrollTop() + window.innerHeight  > scrollFromTop){
			$('.goup').css("opacity", "1");
			$('.goup').css("transition", "opacity 1s");
			$('.goup').css("display", "block");
		}else{

			// $('.goup').css("display", "none");
			$('.goup').css("opacity", "0");
		}

	// $(my_contact).click(function(){
		var title_stuff = document.getElementsByClassName("title_stuff")[0];
		var my_name = document.getElementsByClassName("my_name")[0];
		var my_logo = document.getElementsByClassName("my_logo")[0];
		// alert("one");
		var my_avatar = document.getElementsByClassName('my_avatar')[0];
		var avatar = document.getElementsByClassName('avatar')[0];
		my_avatar.style.transition="1.5s";
		title_stuff.style.transition="2s";
		
		my_avatar.style.marginLeft="70%";
		my_avatar.style.marginTop="0%";

		// my_avatar.style.marginRight="70%";
		// my_avatar.style.float="right";
		my_avatar.style.display="grid";
		my_avatar.style.width="min-content";

		// title_stuff.style.position="absolute";
		// title_stuff.style.float="right";
		// title_stuff.style.width="70%";
		title_stuff.style.marginRight="30%";
		// title_stuff.style.marginLeft="30%";
		// title_stuff.style.width="50%";
		title_stuff.style.marginBottom="-300px";
		// title_stuff.style.marginTop="100px";
		// title_stuff.style.backgroundColor="#ff5851";
		title_stuff.style.paddingTop="100px";
		title_stuff.style.paddingBottom="100px";
		title_stuff.style.marginTop="22px";
		// my_name.style.fontSize="40px";

		my_name.style.transition = "2s";
		my_name.style.textTransform="uppercase";
		// my_name.style.fontSize="40px";
		my_name.style.position="absolute";
		my_name.style.marginTop="200px";
		my_name.style.letterSpacing="15px";
		my_name.style.fontSize="25px";

		// setTimeout(() => {  
		// 	// my_name.style.fontSize="40px";
		// 	my_name.style.transition = ".4s";
		// 	my_name.style.marginLeft="200px";
		//  }, 2000);

		// my_name.style.transition = ".3s";
		my_name.style.marginLeft="150px";
		// my_name.style.marginLeft="200px";
		my_name.style.fontWeight="500";

		
		// my_name.style.color="#ff5851";
		// my_name.style.color="white";

		my_logo.style.marginLeft="40px";
		my_logo.style.display="block";
		setTimeout(() => {  my_logo.style.opacity="1"; }, 500);
		my_logo.style.transition="opacity 2s";



		top_animation = 1;
	// var overlap = !(rect1.right < rect2.left || 
	//                 rect1.left > rect2.right || 
	//                 rect1.bottom < rect2.top || 
	//                 rect1.top > rect2.bottom)

		// alert(title_stuff.right);
		// var link = $(element);
		// var offset = link.offset();
		// var top = offset.top;
		// var left = offset.left;
		// var bottom = $(window).height() - link.height();
		// bottom = offset.top - bottom;
		// var right = $(window).width() - link.width();
		// right = offset.left - right;

		// alert($(title_stuff).offset());

		// var tb = $(title_stuff).offset().top-($(window).height()-$(title_stuff).height())*-1;
		// var tr = $(title_stuff).offset().left-($(window).width()-$(title_stuff).width())*-1;

		// var at = $(avatar).offset().top-($(window).height()-$(avatar).height())*-1;
		// var al = $(avatar).offset().left-($(window).width()-$(avatar).width())*-1;

		// if(tr)
		// alert($(title_stuff).offset().left);
		// alert(title_stuff.offset().top-($(window).height()-title_stuff.height()));

		// title_stuff.offset().left-($(window).width()-title_stuff.width();

		// setTimeout(title_stuff.style.width="50%", 500);
		// setTimeout(() => {  title_stuff.style.width="50%"; }, 800);





		// var avatar = document.getElementsByClassName('avatar')[0];
		// avatar.setAttribute("src", "avatar3.png");
	// });
	// alert($(document).scrollTop());
	// alert($(".skills_outer").offset().top)
	// alert(window.innerHeight);
	// if($(document).scrollTop()>385){
		// setTimeout(() => {  animate_skills() }, 1000);
		// animate_skills();
		// highlight_portifolio();
		setInterval(() => {  animate_skills() }, 0);

	};

}































// var my_logo = document.getElementsByClassName("my_logo")[0];
// $(my_logo).click(function(){
//     // alert("one");
//     var my_avatar = document.getElementsByClassName('my_avatar')[0];
//     // $("#intro").animate({ scrollTop: 1000 }, "fast");
//     // $(window).scrollTop($(".my_name").offset().top);

//     $(window).scrollTop(175);
// });
// $('a.my_logo').scrollTop( 0 );

// alert("one");
var contact = document.getElementsByClassName("contact")[0];
// var contact_info = document.getElementsByClassName("")
$(contact).click(function(){
	var my_contact = $(this).children(".my_contact")
	my_contact.css("color", "#2f3337");
	my_contact.css("border", "2px solid #2f3337");
	// var skill_level_inner = document.getElementsByClassName("skill_level_inner")[0];
	// alert(skill_level_inner.length);
	// var skill_level = document.getElementsByClassName("skill_level")[0];
	// alert(skill_level_inner.style.width);
	// alert(5+parseInt($(skill_level_inner).css("border-right-width").replace('px','')));
	// alert($(skill_level_inner).css("width"));
	// alert(Math.round(5.964354));

	// alert(Math.round((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100));
	// alert((skill_level_inner.offsetWidth-parseInt($(skill_level_inner).css("border-right-width").replace('px','')))/skill_level.offsetWidth*100);

	// alert(((skill_level_inner.offsetWidth-4)/skill_level.offsetWidth)*100);
	// alert(skill_level.offsetWidth);

	// alert(top_animation);
	var contact_info = document.getElementsByClassName("contact_info")[0];
	var below_top = document.getElementsByClassName("below_top")[0];
	var my_name = document.getElementsByClassName("my_name")[0];
	var title_stuff = document.getElementsByClassName("title_stuff")[0];


	


	// body_exception = $('body>*:not(.contact_info)');
	body_exception = $('body>*:not(.contact_info)');

	// body_exception.css("position","relative");

	// title_stuff.stopPropagation(/);

	// background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) );
	// body_exception.css("background","linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) )");
	// body_exception.css("background","green");
	var body = document.getElementsByTagName("BODY")[0];
	// body.style.backgroundColor="green";
	body.style.background="linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) )";

	body_exception.css("opacity","0.5");
	// body_exception.css("zIndex","100");
	body_exception.css("pointerEvents","none");
	body_exception.css("content","");
	// body_exception.css("top","0");
	// body_exception.css("left","0");


	contact_info.style.position="absolute";
	contact_info.style.display="block";
	contact_info.style.zIndex="100";

	// document.getElementById("myBtn").onclick = function() {myFunction()}



// $('body>*:not(.contact_info)').css("filter","blur(3px)");
// $('body').css("background-color","green");
// $('body').style.backgroundColor="green";
	// var body = document.getElementsByTagName("body")[0];
	// body.style.backgroundColor="green";


// 	// var body = $("html, body").not('.entry-content');

// 	// var body = document.getElementByTag("body");
// 	var body = document.getElementsByTagName("BODY")[0];
// 	body.removeChild(contact_info);
// 	below_top.style.marginTop="257px";
// 	below_top.style.transition="2s";
// 	// below_top.style.marginTop="300px";

// 	my_name.style.marginTop="350px";
// 	// title_stuff.style.paddingTop="125px";
// 	// title_stuff.style.paddingBottom="0px";

	





// // 	body{
// //     position:absolute;
// //     top : 0;
// //     left: 0;
// //     /*bottom: 0;*/
// //     /*width: 100%;*/
// //     /*height: 100%;*/
// //     /*background-color: black;*/
// //     /*background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) );*/
// //     content:"";
// //     pointer-events: none;
// //     z-index:100;
// //     opacity: .5;

// // }

// 	body.style.position="absolute";
// 	body.style.top="0";
// 	body.style.left="0";
// 	body.style.content="";
// 	body.style.pointerEvents="none";
// 	body.style.zIndex="100";
// 	body.style.opacity="0.5";

	// contact_info.style.opacity="1";

	var avatar = document.getElementsByClassName('avatar')[0];
	// avatar.style.transition="5s";
	// $(avatar).animate({ avatar.setAttribute("src", "avatar3.png") }, 2000);
	avatar.setAttribute("src", "img/avatar3.png");
});





var contact_close = document.getElementsByClassName("contact_close")[0];
// var contact_info = document.getElementsByClassName("")
$(contact_close).click(function(){
	var contact_info = document.getElementsByClassName("contact_info")[0];
	contact_info.style.display="none";

	var my_contact = document.getElementsByClassName("my_contact")[0];
	// alert(my_contact.length);
	my_contact.style.color = "#ff5851";
	my_contact.style.border = "2px solid #ff5851";
	// my_contact.css("border", "2px solid #ff5851");


	var body = document.getElementsByTagName("BODY")[0];
	body.style.removeProperty("background");
	// body_exception = $('body');
	body_exception = $('body>*:not(.contact_info)');

	// body_exception.css("position","relative");

	body_exception.css("opacity","1");
	// body_exception.css("zIndex","100");
	body_exception.css("pointerEvents","all");

	var avatar = document.getElementsByClassName('avatar')[0];
	avatar.setAttribute("src", "img/avatar1.png");
	// body_exception.css("content","");
	// alert("one");
});









































// $( ".skill_level" ).animate({
// 	width:"100%"
// }, 5000);


// highlight_portifolio();
// alert("one");

// alert(skill_level_inner[0]);

// $(skill_level_inner[0]).style.backgroundColor="green";
// $( ".skill_level_inner" ).animate({ width:skill_level_inner[0].getAttribute("value") }, 2000);


// alert("one");
// $( ".skill_level_inner" ).animate({ width:50% }, 2000);

// skill_level_inner[0].animate({ width:"50%" }, 2000);
// skill_level_inner[0].style.width = "50%";


// var skill_level_inner = document.getElementsByClassName("skill_level_inner");
// var time = 2000;
// for (i = 0; i < skill_level_inner.length; i++) {
	
// 	// alert(skill_level_inner[i].getAttribute("value"));
// 	// $( ".skill_level_inner".+(i+1) ).animate({ width:skill_level_inner[i].getAttribute("value") }, 2000);
// 	// skill_level_inner[i].animate({ width:skill_level_inner[i].getAttribute("value") }, 2000);
	
// 	// alert(time);
// 	var skill_level_value = skill_level_inner[i].getAttribute("value");
// 	$(skill_level_inner[i]).animate({ width:skill_level_value }, time);
// 	// $( ".skill_level_inner" ).animate({ width:"50%" }, 2000);
// 	time+=100;
// }




// function isOnScreen(element)
// {
//     var curTop = element.offset().top;
//     var screenHeight = $(window).height();
//     return (curTop > screenHeight) ? false : true;
// }

// alert($('.skills_outer').offset().top);
// if($('.skills_outer').offset().top < $(window).height()){
// alert($(document).scrollTop());
// if(window.innerHeight+document.scrollTop() > 460){
// 	alert("one");
// }

// alert(window.pageYOffset);

// var scrollFromTop = $(".skills_outer").offset().top;
// alert($(document).scrollTop());
// alert(window.innerHeight);

// alert(scrollFromTop);







// $(".project_image").hover(function(){
//   // $(this).css("background-color", "yellow");
//   // $(this).css("height", "325px");
//   // $(this).css("height", "100%");

//   // $(this).css("position", "absolute");
//   // $(this).css("width", "650px");
//   // $(this).css("width", "auto");

// 	$(".project_title").css("transition", ".4s");
// 	$(".project_title").css("color", "#ff5851");
// 	$(".project_image").css("border", "5px solid #ff5851");
// 	$(".project_image").css("filter", "brightness(100%)");
// 	$(".project_tag").css("border", "1px solid #ff5851");
// 	$(".project_tag").css("color", "#ff5851");
// 	$(".project_tag").css("transition", ".4s");
// }, function(){
// 	$(".project_title").css("transition", ".4s");
// 	$(".project_title").css("color", "black");
// 	$(".project_image").css("border", "");
// 	$(".project_image").css("filter", "");

// 	$(".project_tag").css("border", "");
// 	$(".project_tag").css("color", "");

//   // $(this).css("background-color", "pink");
//   // $(this).css("height", "100px");
// });




// for (i in skill_level_inner) {
// 	// alert(i);
// 	// alert(skill_level_inner.length);
// 	// var i=skill_level_inner[0];
// 	// alert(i.getAttribute("value"));
// 	$( ".skill_level_inner" ).animate({ width:"50%" }, 2000);
// }


// .project_img

// $(".project_img").hover(function(){
//   // $(this).css("background-color", "yellow");
//   $(this).css("height", "325px");
//   // $(this).css("height", "100%");

//   // $(this).css("position", "absolute");
//   // $(this).css("width", "650px");
//   $(this).css("width", "auto");

//   }, function(){
//   // $(this).css("background-color", "pink");
//   // $(this).css("height", "100px");
// });

// .project_img:hover{
// 	/*width: 100%;*/
// 	/*height: 100%;*/
// 	/*transition: width 1s;*/
// 	transition: width 2s, height 2s;
// 	/*position: absolute;*/

// 	height: 325px;
// 	/*object-fit: cover;*/
// 	width: 650px;
// }






















function unanimate_top(){
// $('.goup').click(function(){
// $('.clicc').click(function(){
// $('.my_logo').click(function(){
	// alert("one");
	// $(window).scrollTop(0);
	// window.scroll({top: 0, left: 0, behavior: 'smooth' });
	var title_stuff = document.getElementsByClassName("title_stuff")[0];
	var my_name = document.getElementsByClassName("my_name")[0];
	var my_logo = document.getElementsByClassName("my_logo")[0];
	var my_avatar = document.getElementsByClassName('my_avatar')[0];
	var avatar = document.getElementsByClassName('avatar')[0];
	// my_avatar.style.transition="1.5s";
	// title_stuff.style.transition="2s";
	

	// my_avatar.style.marginLeft="79px";
	// my_avatar.style.marginTop="0";
	
	

	// my_avatar.removeProperty('marginLeft');
	// my_avatar.removeProperty('marginTop');

	// my_avatar.style.marginBottom="3px";
	// my_avatar.style.marginTop="79px";

	// $('.my_avatar').css("margin-bottom", "");
	$('.my_avatar').css("margin-left", "");
	$('.my_avatar').css("margin-top", "");





	// my_avatar.style.display="grid";
	// my_avatar.style.width="min-content";

	// my_avatar.removeProperty('display');
	// my_avatar.removeProperty('width');



	// title_stuff.style.marginRight="30%";
	// title_stuff.style.marginBottom="-300px";
	// title_stuff.style.paddingTop="100px";
	// title_stuff.style.paddingBottom="100px";
	// title_stuff.style.marginTop="22px";

	// title_stuff.removeProperty('marginRight');
	// title_stuff.removeProperty('marginBottom');
	// title_stuff.removeProperty('paddingTop');
	// title_stuff.removeProperty('paddingBottom');
	// title_stuff.removeProperty('marginTop');

	$('.title_stuff').css("margin-right", "");
	$('.title_stuff').css("margin-bottom", "");
	$('.title_stuff').css("padding-top", "");
	$('.title_stuff').css("padding-bottom", "");
	$('.title_stuff').css("margin-top", "");


	// title_stuff.style.marginRight="30%";
	// title_stuff.style.marginBottom="-300px";
	// title_stuff.style.paddingTop="100px";
	// title_stuff.style.paddingBottom="100px";
	// title_stuff.style.marginTop="22px";



	// my_name.style.transition = "2s";
	// my_name.style.textTransform="uppercase";
	// my_name.style.position="absolute";
	// my_name.style.marginTop="200px";
	// my_name.style.letterSpacing="15px";
	// my_name.style.fontSize="25px";
	// my_name.style.marginLeft="150px";
	// my_name.style.fontWeight="500";

	// my_name.removeProperty('textTransform');
	// my_name.removeProperty('position');
	// my_name.removeProperty('marginTop');
	// my_name.removeProperty('letterSpacing');
	// my_name.removeProperty('fontSize');
	// my_name.removeProperty('marginLeft');
	// my_name.removeProperty('fontWeight');
 	
 	$('.my_name').css("text-transform", "");
 	$('.my_name').css("position", "");
 	$('.my_name').css("margin-top", "");
 	$('.my_name').css("letter-spacing", "");
 	$('.my_name').css("font-size", "");
 	$('.my_name').css("margin-left", "");
 	$('.my_name').css("font-weight", "");



	// my_logo.style.marginLeft="40px";
	// my_logo.style.display="block";
	// setTimeout(() => {  my_logo.style.opacity="1"; }, 500);
	// my_logo.style.transition="opacity 2s";

	// $('.my_logo').css("margin-left", "");
	$('.my_logo').css("display", "none");
	// $('.my_logo').css("opacity", "0");
	// $('.my_logo').css("transition", "opacity 1s");
	// $('.my_logo').css("transition", "");

	// top_animation = 1;
// })
}



$('.goup').click(function(){
	// window.scroll({top: 0, left: 0, behavior: 'smooth' });
	// $(window).scrollTop(0);
	$('body').animate({scrollTop:0}, '500');
	// unanimate_top();
	// setInterval(() => {  unanimate_top() }, 0);
	setTimeout(() => {  unanimate_top() }, 500);

})



// function animate_skills(){
// var scrollFromTop = $("footer").offset().top;
// if ($(document).scrollTop() + window.innerHeight  > scrollFromTop){
// 	$('.goup').css("display", "block");
// }
