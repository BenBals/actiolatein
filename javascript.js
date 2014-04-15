function stammformenGoTo () {
	window.location.href = "stammformen/index.html";
}
function vokabelnGoTo () {
	window.location.href = "vokabeln/index.html";
}
function konjugationGoTo () {
	window.location.href = "konjugation/index.html";
}
function dlapp () {
	window.open('https://s3-eu-west-1.amazonaws.com/stammformenapp/Actiolatein.apk', '_blank');
}
function home () {
	window.location.href = "index.html";
}

//DictTable
$(document).ready(function() {
	$('#dictTable').dataTable();
} );


//GOOGLE ANALYTICS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49782176-1', 'benbals.github.io');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
