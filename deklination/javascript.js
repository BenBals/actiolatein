window.klasse = "r";
window.allClasses = ["nom","gen","dat","akk","abl","vok"];
window.allClassesUp = ["Nom","Gen","Dat","Akk","Abl","Vok"];
window.upTo12 = 0;

function showQs (klasseZahl) {

	console.log(klasseZahl);

	if (klasseZahl === 1) {window.klasse = "o";}
	if (klasseZahl === 2) {window.klasse = "a";}
	if (klasseZahl === 3) {window.klasse = "k";}
	if (klasseZahl === 4) {window.klasse = "g";}
	if (klasseZahl === 5) {window.klasse = "u";}
	if (klasseZahl === 6) {window.klasse = "e";}
	if (klasseZahl === 7) {window.klasse = "i";}
	if (klasseZahl === 8) {window.klasse = "p_p_1";}
	if (klasseZahl === 9) {window.klasse = "p_p_2";}
	if (klasseZahl === 10) {window.klasse = "p_p_3_r";}
	if (klasseZahl === 11) {window.klasse = "p_p_3_nr_m";}
	if (klasseZahl === 12) {window.klasse = "p_p_3_nr_f";}
	if (klasseZahl === 13) {window.klasse = "p_p_3_nr_n";}
	if (klasseZahl === 14) {window.klasse = "p_d_is";}
	if (klasseZahl === 15) {window.klasse = "p_d_ea";}
	if (klasseZahl === 16) {window.klasse = "p_d_id";}
	if (klasseZahl === 17) {window.klasse = "p_d_hic";}
	if (klasseZahl === 18) {window.klasse = "p_d_haec";}
	if (klasseZahl === 19) {window.klasse = "p_d_hoc";}
	if (klasseZahl === 20) {window.klasse = "p_d_ille";}
	if (klasseZahl === 21) {window.klasse = "p_d_illa";}
	if (klasseZahl === 22) {window.klasse = "p_d_illud";}
	if (klasseZahl === 23) {window.klasse = "p_d_ipse";}
	if (klasseZahl === 24) {window.klasse = "p_d_ipsa";}
	if (klasseZahl === 25) {window.klasse = "p_d_ipsum";}

	console.log(window.klasse);

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

	if (window.vokSgA === "") {
		$("#answerVokSg").css("display","none");
		$("#inputVokSg").css("display","none");
		$("#vokSgQ").css("display","none");
		$("#answerVokPl").css("display","none");
		$("#inputVokPl").css("display","none");
		$("#vokPlQ").css("display","none");
	}
}

function back () {
	$("#question0").css("display","block");
	$("#questionScreen").css("display","none");
	$(".back").css("display","none");
}

function home () {window.location.href  = "../";}

function checkDek () {
	if (window.vokSgA === "") {window.upTo12 = 2;}
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
	$(".ex").css("display","none");
	if (window.upTo12 !== 0) {if (window.vokSgA === "") {window.upTo12 = window.upTo12 + 2;}}
	if (window.upTo12 == 12) {
		$(".allRight").css("display","block");
	}
	else {
		if (window.upTo12>0) {$(".notAllRight").css("display","block");}
		else {$(".nothingRight").css("display","block");}
	}
	window.location.hash = "#home";
	window.upTo12 = 0;
}