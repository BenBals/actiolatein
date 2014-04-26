window.klasse = "r";
window.allClasses = ["nom","gen","dat","akk","abl","vok"];
window.allClassesUp = ["Nom","Gen","Dat","Akk","Abl","Vok"];

function showQs (klasseZahl) {
	if (klasseZahl === 1) {window.klasse = "o";}

	$("#question0").css("display","none");
	$("#questionScreen").css("display","block");

	//A @ the end = Answer || I @ the end = Input

	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"SgA"] = $("#"+window.allClasses[i]+"_sg_"+window.klasse).html();
	}
	for (var i = 0; i<6; i++) {
		window[window.allClasses[i]+"PlA"] = $("#"+window.allClasses[i]+"_pl_"+window.klasse).html();
	}
	
	//setting the html() of the answers that are shown
	for (var i = 0; i<6; i++) {

	}
	$("#answerNomSg").html(window.nomSgA);
	$("#answerGenSg").html(window.genSgA);
	$("#answerDatSg").html(window.datSgA);
	$("#answerAkkSg").html(window.akkSgA);
	$("#answerAblSg").html(window.ablSgA);
	$("#answerVokSg").html(window.vokSgA);
	$("#answerNomPl").html(window.nomPlA);
	$("#answerGenPl").html(window.genPlA);
	$("#answerDatPl").html(window.datPlA);
	$("#answerAkkPl").html(window.akkPlA);
	$("#answerAblPl").html(window.ablPlA);
	$("#answerVokPl").html(window.vokPlA);
}

