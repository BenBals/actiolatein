function showLekSelect(){$(".lekSelect").css("display","block")}function lekAlle(){go()}function lek1(){window.n=63,window.plusN=1,go(),console.log("rofl")}function lek3(){window.n=34,window.plusN=63,go()}function lek4(){window.n=18,window.plusN=97,go()}function lek5(){window.n=12,window.plusN=116,go()}function lek6(){window.n=38,window.plusN=128,go()}function lek7(){window.n=36,window.plusN=146,go()}function lek8(){window.n=36,window.plusN=182,go()}function lek9(){window.n=18,window.plusN=218,go()}function lek10(){window.n=43,window.plusN=236,go()}function lek11(){window.n=9,window.plusN=279,go()}function lek12(){window.n=30,window.plusN=288,go()}function lek13(){window.n=21,window.plusN=318,go()}function lek14(){window.n=27,window.plusN=339,go()}function lek15(){window.n=24,window.plusN=366,go()}function lek16(){window.n=20,window.plusN=390,go()}function lek17(){window.n=18,window.plusN=410,go()}function getCookies(){window.now=new Date,window.time=window.now.getTime(),window.expireTime=window.time+36e10,window.now.setTime(window.expireTime),window.tempExp="Wed, 31 Oct 2012 08:50:17 GMT";for(var o=document.cookie,n=o.split(";"),e={},i=0;i<n.length;i++){var t=n[i];t=t.trim();var w=t.split("=");e[w[0]]=w[1],console.log(e)}window.longestStreak=e.longestStreak,window.high1=e.high1,console.log("Streak: "+window.longestStreak),console.log("High1: "+window.high1)}function checkForCookies(){window.now=new Date,window.time=window.now.getTime(),window.expireTime=window.time+36e10,window.now.setTime(window.expireTime),window.tempExp="Wed, 31 Oct 2012 08:50:17 GMT";for(var o=document.cookie,n=o.split(";"),e={},i=0;i<n.length;i++){var t=n[i];t=t.trim();var w=t.split("=");e[w[0]]=w[1],console.log(e)}e.hasOwnProperty("high1")||(getCookies(),document.cookie="high1=0;expires="+window.now.toGMTString()+";path=/",getCookies(),window.location.reload()),e.hasOwnProperty("longestStreak")||(getCookies(),document.cookie="longestStreak=0;expires="+window.now.toGMTString()+";path=/",getCookies(),window.location.reload())}function checkIfHigherScore(){console.log("hey"),console.log("score: "+window.score),console.log("streak: "+window.currentStreak),getCookies(),window.score>window.high1&&(document.cookie="high1="+window.score+";expires="+window.now.toGMTString()+";path=/",getCookies(),alert("Neuer Highscore!!! Dein Highscore ist jetzt "+window.high1+"!")),window.currentStreak>window.longestStreak&&(document.cookie="longestStreak="+window.currentStreak+";expires="+window.now.toGMTString()+";path=/",getCookies(),alert("Neue längste Richtige-Antwort-Sere! Der Rekord ist jetzt "+window.longestStreak+"!"))}function showRecords(){getCookies(),$("#highscore").html(window.high1),$("#longestStreak").html(window.longestStreak),$("#records").css("display","block")}function hideRecords(){$("#records").css("display","none")}function go(){document.getElementById("question0").style.display="none",window.random=Math.floor(Math.random()*window.n+window.plusN),console.log("Frage: "+window.random),document.getElementById("navben").style.display="block",document.getElementById("question"+random).style.display="block",$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),checkForCookies(),getCookies()}function checkAnswer(){questionN++;var o=document.getElementById("input"+random).value.toLowerCase(),e=document.getElementById("answer"+random).innerHTML;o==e?400==showRight?($(".rightEx",$("#question"+random)).css("display","block"),window.score++,window.currentStreak++,checkIfHigherScore(),setTimeout(function(){console.log("Richtig!"),$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".fa-cog").css("color","white"),$(".fa-trophy").css("color","white"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),document.getElementById("question"+random).style.display="none",document.getElementById("input"+random).value="",window.random=Math.floor(Math.random()*n+plusN),console.log("Frage: "+window.random),document.getElementById("question"+random).style.display="block",document.getElementById("input"+random).focus(),$(".answer").css("display","none")},window.showRight)):(window.score++,window.currentStreak++,checkIfHigherScore(),console.log("Richtig!"),$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".fa-cog").css("color","white"),$(".fa-trophy").css("color","white"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),document.getElementById("question"+random).style.display="none",document.getElementById("input"+random).value="",window.random=Math.floor(Math.random()*n+plusN),console.log("Frage: "+window.random),document.getElementById("question"+random).style.display="block",document.getElementById("input"+random).focus(),$(".answer").css("display","none")):(window.currentStreak=0,checkIfHigherScore(),document.getElementById("answer"+window.random).style.display="block",$(".wrongEx",$("#question"+window.random)).css("display","block"),document.getElementById("answer"+window.random).style.color="#69BB9C",setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".fa-cog").css("color","white"),$(".fa-trophy").css("color","white"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),document.getElementById("question"+window.random).style.display="none",document.getElementById("input"+window.random).value="",window.random=Math.floor(Math.random()*window.n+window.plusN),console.log("Frage: "+window.random),document.getElementById("question"+window.random).style.display="block",document.getElementById("input"+window.random).focus(),$(".answer").css("display","none")},window.getCookiesSolution))}function points(){alert("Du hast bis jetzt "+window.score+" von "+window.questionN+" Fragen richtig beantwortet.")}function newG(){document.getElementById("question"+window.random).style.display="none",window.questionN=0,window.score=0,window.random=0,go()}function home(){window.location.href="../index.html"}function showSettings(){$("#settings").css("display","block"),$(".fa-cog").addClass("fa-spin"),$("#question"+window.random).css("display","none")}function hideSettings(){$("#settings").css("display","none"),$(".fa-cog").removeClass("fa-spin"),document.getElementById("question"+window.random).style.display="block"}function longSolution(){window.showSolution=4e3}function shortSolution(){window.showSolution=2e3}function showRight(){window.showRight=400}function dontShowRight(){window.showRight=0}window.n=427,window.questionN=0,window.plusN=1,window.score=0,window.random=0,window.showSolution=2e3,window.showRight=400,window.cookieExpire=1497582762093,window.currentStreak=0;