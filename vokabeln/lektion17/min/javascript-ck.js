function go(){$("#question0").css("display","none"),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$(".block").css("display","inline"),$(".answer").css("display","none")}function home(){window.location.href="../../index.html"}function backVokSelect(){$(".back").css("display","none"),$(".answer").css("display","none"),$("#question0").css("display","block"),$("#question"+window.random).css("display","none"),window.questionN=0,window.random=0,window.score=0,window.upTo2=0}function check1(){var o=$("#input1_"+window.random).val().toLowerCase(),n=$("#answer1_"+window.random).html();window.questionN++,o==n?(window.score++,window.upTo2++,$(".rightEx").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},400)):($(".wrongEx").css("display","block"),$(".answer").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},3500))}function check2(){window.upTo2=0;var o=$("#input1_"+window.random).val().toLowerCase(),n=$("#input2_"+window.random).val().toLowerCase(),s=$("#answer1_"+window.random).html(),w=$("#answer2_"+window.random).html();window.upTo2=0,window.questionN++,window.questionN++,(o==s||o==w)&&(window.score++,window.upTo2++),(n==s||n==w)&&(window.score++,window.upTo2++),2==window.upTo2?($(".rightEx").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),$("#input2_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},400)):(window.upTo2=0,$(".wrongEx").css("display","block"),$(".answer").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),$("#input2_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},2500))}function check3(){var o=$("#input1_"+window.random).val().toLowerCase(),n=$("#input2_"+window.random).val().toLowerCase(),s=$("#input3_"+window.random).val().toLowerCase(),w=$("#answer1_"+window.random).html(),i=$("#answer2_"+window.random).html(),d=$("#answer3_"+window.random).html();window.questionN++,window.questionN++,window.questionN++,(o==w||o==i||o==d)&&(window.score++,window.upTo3++),(n==w||n==i||n==d)&&(window.score++,window.upTo3++),(s==w||s==i||s==d)&&(window.score++,window.upTo3++),3==window.upTo3?(window.upTo3=0,$(".rightEx").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),$("#input2_"+window.random).val(""),$("#input3_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},400)):(window.upTo3=0,$(".wrongEx").css("display","block"),$(".answer").css("display","block"),window.setTimeout(function(){$("*").css("color","#000000"),$(".btn").css("color","#FFF"),$(".rightEx").css("color","#69BB9C"),$(".wrongEx").css("color","#e74c3c"),$(".rightEx").css("display","none"),$(".wrongEx").css("display","none"),$("#question"+window.random).css("display","none"),$("#input1_"+window.random).val(""),$("#input2_"+window.random).val(""),$("#input3_"+window.random).val(""),window.random=Math.floor(Math.random()*window.n+window.plusN),$("#question"+window.random).css("display","block"),$("#input1_"+window.random).focus(),$(".answer").css("display","none")},3500))}window.n=35,window.plusN=1,window.questionN=0,window.upTo3=0,window.upTo2=0,window.random=0,window.score=0;