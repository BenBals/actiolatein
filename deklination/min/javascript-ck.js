function showQs(s){1===s&&(window.klasse="o"),2===s&&(window.klasse="a"),$("#question0").css("display","none"),$("#questionScreen").css("display","block"),$(".back").css("display","inline"),$("#questionHere").html($("#q_"+window.klasse).html());for(var l=0;6>l;l++)window[window.allClasses[l]+"SgA"]=$("#"+window.allClasses[l]+"_sg_"+window.klasse).html();for(var l=0;6>l;l++)window[window.allClasses[l]+"PlA"]=$("#"+window.allClasses[l]+"_pl_"+window.klasse).html();for(var l=0;6>l;l++)$("#answer"+window.allClassesUp[l]+"Sg").html(window[window.allClasses[l]+"SgA"]);for(var l=0;6>l;l++)$("#answer"+window.allClassesUp[l]+"Pl").html(window[window.allClasses[l]+"PlA"])}function back(){$("#question0").css("display","block"),$("#questionScreen").css("display","none"),$(".back").css("display","none")}function home(){window.location.href="../"}function checkDek(){for(var s=0;6>s;s++)window[window.allClasses[s]+"SgI"]=$("#input"+window.allClassesUp[s]+"Sg").val().toLowerCase();for(var s=0;6>s;s++)window[window.allClasses[s]+"PlI"]=$("#input"+window.allClassesUp[s]+"Pl").val().toLowerCase();for(var s=0;6>s;s++)window[window.allClasses[s]+"SgI"]==window[window.allClasses[s]+"SgA"]?(window.upTo12++,$("#input"+window.allClassesUp[s]+"Sg").css("border-color","#69BB9C")):($("#input"+window.allClassesUp[s]+"Sg").css("border-color","#CB4C39"),$("#answer"+window.allClassesUp[s]+"Sg").css("display","inline"));for(var s=0;6>s;s++)window[window.allClasses[s]+"PlI"]==window[window.allClasses[s]+"PlA"]?(window.upTo12++,$("#input"+window.allClassesUp[s]+"Pl").css("border-color","#69BB9C")):($("#input"+window.allClassesUp[s]+"Pl").css("border-color","#CB4C39"),$("#answer"+window.allClassesUp[s]+"Pl").css("display","inline"));$(".ex").css("display","none"),12==window.upTo12?$(".allRight").css("display","block"):window.upTo12>0?$(".notAllRight").css("display","block"):$(".nothingRight").css("display","block"),window.location.hash="#top",window.upTo12=0}window.klasse="r",window.allClasses=["nom","gen","dat","akk","abl","vok"],window.allClassesUp=["Nom","Gen","Dat","Akk","Abl","Vok"],window.upTo12=0;
//# sourceMappingURL=./javascript-ck.map