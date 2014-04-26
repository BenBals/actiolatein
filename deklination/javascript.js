window.klasse = "r";
window.allClasses = ["nom","gen","dat","akk","abl","vok"];
window.allClassesUp = ["Nom","Gen","Dat","Akk","Abl","Vok"];
window.upTo12 = 0;

function showQs (klasseZahl) {

	if (klasseZahl === 1) {window.klasse = "o";}

	$("#question0").css("display","none");
	$("#questionScreen").css("display","block");
	$(".back").css("display","inline");
	$("#questionHere").html($("#q_"+window.klasse).html());

	//A @ the end = Answer || I @ the end = Input

	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"SgA"] = $("#"+window.allClasses[i]+"_sg_"+window.klasse).html();
	}
	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"PlA"] = $("#"+window.allClasses[i]+"_pl_"+window.klasse).html();
	}
	
	//setting the html() of the answers that are shown
	for (var i = 0; i<6; i++) {
		$("#answer"+window.allClassesUp[i]+"Sg").html(window[window.allClasses[i]+"SgA"]);
	}
	for (var i = 0; i<6; i++) {
		$("#answer"+window.allClassesUp[i]+"Pl").html(window[window.allClasses[i]+"PlA"]);
	}
}

function back () {
	$("#question0").css("display","block");
	$("#questionScreen").css("display","none");
}

function checkDek () {
	//Declareing the input vars from fields
	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"SgI"] = $("#input"+window.allClassesUp[i]+"Sg").val().toLowerCase();
	}
	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"PlI"] = $("#input"+window.allClassesUp[i]+"Pl").val().toLowerCase();
	}
	for (var i = 0; i<6; i++) {
		if (window[window.allClasses[i]+"SgI"] == window[window.allClasses[i]+"SgA"]) {
			window.upTo12++;
			$("#input"+window.allClassesUp[i]+"Sg").css("border-color","#69BB9C");
		}
		else {
			$("#input"+window.allClassesUp[i]+"Sg").css("border-color","#CB4C39");
			$("#answer"+window.allClassesUp[i]+"Sg").css("display","inline");
		}
	}
	for (var i = 0; i<6; i++) {
		if (window[window.allClasses[i]+"PlI"] == window[window.allClasses[i]+"PlA"]) {
			window.upTo12++;
			$("#input"+window.allClassesUp[i]+"Pl").css("border-color","#69BB9C");
		}
		else {
			$("#input"+window.allClassesUp[i]+"Pl").css("border-color","#CB4C39");
			$("#answer"+window.allClassesUp[i]+"Pl").css("display","inline");
		}
	}

}