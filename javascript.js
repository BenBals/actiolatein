console.log("Up and runnging");

function stammformenGoTo () {
	window.location.href = "stammformen/index.html";
}
function vokabelnGoTo () {
	window.location.href = "vokabeln/index.html";
}
function konjugationGoTo () {
	window.location.href = "konjugation/index.html";
}
function betaGoTo () {
	window.location.href = "http://benbals.github.io/actiolatein";
}
function dlapp () {
	window.open('https://s3-eu-west-1.amazonaws.com/stammformenapp/Actiolatein.apk', '_blank');
}
function home () {
	window.location.href = "index.html";
}
function help () {
	window.location.href = "help.html";
}
function deklinationGoTo () {
	window.location.href = "deklination/index.html";
}

window.ckURL = document.URL;
window.splitCkURL = window.ckURL.split("?");
window.woCkURL = window.splitCkURL[0];


if (document.URL === "http://benbals.github.io/actiolatein/index.html" || document.URL === "http://benbals.github.io/actiolatein/" || window.woCkURL === "http://mbp.local:5757/") {
	$(".beta").css("display","none");
	$(".ansage").css("display","none");
}

$(function() {
    FastClick.attach(document.body);
});

//GOOGLE ANALYTICS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49782176-1', 'benbals.github.io');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
