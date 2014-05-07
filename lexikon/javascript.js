$('div.content div div').css('display', 'none');

function home () {
	window.location.href = '../index.html';
}

function showHide (number) {
	if ($('div.'+number+' div').css('display') === "none") {
		$('div.'+number+' div').fadeIn(200);
	}
	else {
		$('div.'+number+' div').fadeOut('200');
	}
}