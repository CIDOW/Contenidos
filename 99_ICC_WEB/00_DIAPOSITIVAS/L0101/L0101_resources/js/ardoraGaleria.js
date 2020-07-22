//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function loadPage() {if (tiAval){parent.iniciaActividade()} $(".photoContainer").mouseover(function(){var indexHelp = parseInt($(this).attr("id").substring(4));if ($.trim(itemHelp[indexHelp - 1])){
paintHelp($("#item"+indexHelp.toString()));}}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"] = "hidden";});cssColors();
}
function unloadPage(){}
function showIma(num) {
var imaN="ima"+num.toString();var titN="tit"+num.toString();var nextN="next"+num.toString();var prevN="prev"+num.toString();var musN="mus"+num.toString();var txtN="txt"+num.toString();
var upN = "up" + num.toString();var upTxtN = "upTxt" + num.toString();
var wImaN = fileX[num-1]; var hImaN = fileY[num-1];
$("#ardoraMain").append("<div id='"+imaN+"' class='photoMG'><img src='L0101_resources/media/imaMG/" + fileIma[num-1] + "'/></div>");
if ($.trim(itemHelp[num - 1])) {$("#"+imaN).append("<div class='titleIma'><p>"+itemHelp[num - 1]+"</p></div>");}
$("#"+imaN).append("<div  id='"+titN+"' class='bClose' title='Cerrar'>E</div>");
$("#"+imaN).append("<div  id='"+nextN+"' class='bNext' title='Siguiente'>C</div>");
$("#"+imaN).append("<div  id='"+prevN+"' class='bPrev' title='Previo'>A</div>");
if (($.trim(fileMP3[num - 1])) || ($.trim(fileOgg[num - 1]))) {audioCreate(num);}
if ($.trim(conType[num-1])){showCon(num)}
fullS(num);
if ($.trim(txt[num-1])){
$("#" + imaN).append("<div  id='" + upN + "' class='bUp' title='Comments'>I</div>");
$("#" + imaN).append("<div  id='" + upTxtN + "' class='bUpTxt'><p>"+txt[num-1]+"</p></div>");
$("#" + upTxtN).css("visibility","hidden");
$("#" + upN).click(function () {
if ($("#" + upTxtN).css("visibility")=="hidden"){
$("#" + upTxtN).css("visibility","visible");
}else{
$("#" + upTxtN).css("visibility","hidden");
}});
}
$("#"+nextN).click(function() {
$("#"+imaN).animate({
left: ($("#item" + num.toString()).position().left+$("#item" + num.toString()).width()/2).toString() + "px",
top: ($("#item" + num.toString()).position().top+$("#item" + num.toString()).height()/2).toString()+"px",
width: "0px",
height: "0px"
}, 500, function () {
$("#"+imaN).remove();
if (num > fileIma.length - 1) {if (($("#ima1").length)==0){showIma(1);}
} else {if (($("#ima"+(num+1).toString()).length)==0){showIma(num + 1)};}
});});
$("#" + prevN).click(function () {
$("#" + imaN).animate({
left: ($("#item" + num.toString()).position().left + $("#item" + num.toString()).width() / 2).toString() + "px",
top: ($("#item" + num.toString()).position().top + $("#item" + num.toString()).height() / 2).toString() + "px",
width: "0px", height: "0px"}, 500, function () {$("#" + imaN).remove();
if (num < 2) {if (($("#ima"+(fileIma.length).toString()).length)==0){showIma(fileIma.length)};
}else {if (($("#ima"+(num-1).toString()).length)==0){showIma(num - 1)};}});});
$("#"+titN).click(function() {
$("#"+imaN).animate({
left: ($("#item" + num.toString()).position().left+$("#item" + num.toString()).width()/2).toString() + "px",
top: ($("#item" + num.toString()).position().top+$("#item" + num.toString()).height()/2).toString()+"px",
width: "0px",
height: "0px"
}, 500, function () {$("#"+imaN).remove();});
});
var vTop = $("#item" + num.toString()).position().top + $("#ardoraAct").position().top;
var cssObj = {
"top": vTop.toString() + "px",
"left": $("#item" + num.toString()).position().left.toString() + "px",
"width": "10px",
"height": "10px", 
"z-index":giveZindex("div"), 
"background": colorBack 
}; 
$("#"+imaN).css(cssObj);
$("#"+imaN).click(function() {
$("#"+imaN).css("z-index",giveZindex("div")+1);
});
var posX = ($(window).width() - 800) / 2;
if (posX < 0) {posX = 0}
var posY = ($(window).height() - 600) / 2;
if (posY < 0) {posY = 0}
$("#"+imaN).animate({
left: posX,
top: posY,
width: wImaN+"px",
height: hImaN+"px"
}, 500, function () {});
$(".photoMG").draggable({
handle: "img",
cursor: "move"
});
cssColors();
}
function showCon(num){
var objN = "obj" + num.toString(); var imaN="ima"+num.toString();var txtN="txt"+num.toString();
$("#"+imaN).append("<div  id='"+txtN+"' class='bTxt' title=' Contenido'>N</div>");
$("#" + txtN).click(function () {if ($("#"+objN).length){$("#"+objN).remove();
$("#"+imaN).append("<img src='L0101_resources/media/imaMG/" + fileIma[num-1] + "'/>");
}else{
$("#"+imaN+ " img").remove();
if (conType[num-1]=="0"){
$("#"+imaN).append("<object id='"+objN+"' class='obj' type='text/html' data='"+conLink[num-1]+"'></object>")
}if (conType[num-1]=="1"){
$("#"+imaN).append("<div id='"+objN+"' class='obj'>"+conLink[num-1]+"</div>");}
if (conType[num - 1] == "2") {
var cTy="text/html";
var ext=(conLink[num - 1].substring(conLink[num - 1].lastIndexOf("."))).toLowerCase();
if (ext==".pdf"){ cTy="application/pdf"}
if (ext==".swf"){ cTy="application/x-shockwave-flash"}
if (ext==".jar"){ cTy="application/x-java-applet"}
if (ext==".mov"){ cTy="video/quicktime"}
if (ext==".flv"){ cTy="image/x-flv"}
if (ext==".mp4"){ cTy="image/mp4"}
if (ext==".mpg"){ cTy="image/mpeg"}
if (ext==".jpg"){ cTy="image/jpeg"}
if (ext==".gif"){ cTy="image/gif"}
if (ext==".png"){ cTy="image/png"}
if (ext==".svg"){ cTy="image/svg+xml"}
if (ext==".png"){ cTy="image/png"}
if (ext==".tiff") {cTy="image/tiff"}
if (ext==".xml"){ cTy="image/xml"}
$("#" + imaN).append("<object id='" + objN + "' class='obj' type='"+cTy+"' data='" + conLink[num - 1] + "'></object>")
}
if (conType[num-1]=="3"){
$("#"+imaN).append("<object id='"+objN+"' class='obj' type='text/html' data='"+conLink[num-1]+"'></object>")}
}});}
function fullS(num){
var imaN = "ima" + num.toString();
var fullN = "full"  + num.toString();
$("#" + imaN).append("<div  id='" + fullN + "' class='bFull' title='Pantalla completa'>H</div>");
$("#" + fullN).click(function () {showImaFull(num);});}
function showImaFull(num){
$("#ardoraMain").append("<div id='imaFull'><img src='L0101_resources/media/imaFull/f_" + fileIma[num-1].substring(2) + "'/></div>");
cssColors();
$("#imaFull").css("left","0px");$("#imaFull").css("top","0px");$("#imaFull").css("width","auto");$("#imaFull").css("height","auto");
$("#imaFull").append("<div  id='titF' class='bClose' title='Close'>E</div>");
$("#imaFull").append("<div  id='nextF' class='bNext' title='Next'>C</div>");
$("#imaFull").append("<div  id='prevF' class='bPrev' title='Previous'>A</div>");
if ($.trim(conType[num-1])){$("#imaFull").append("<div  id='txtF' class='bTxt' title='Text'>N</div>");}
$("#titF").click(function () {if (document.cancelFullScreen) {document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();}});
$("#nextF").click(function () {num++;if (num > fileIma.length) {num=1}fullEvents(num);});
$("#prevF").click(function () {num--;if (num < 1) {num=fileIma.length}fullEvents(num);});
$("#txtF").click(function () {
if ($("#objF").length) {$("#objF").remove();
$("#imaFull").append("<img src='gal06_resources/media/imaFull/f_"+fileIma[num - 1].substring(2)+ "'/>");
} else {$("#imaFull img").remove();
if (conType[num - 1] == "0") {
$("#imaFull").append("<object id='objF' class='obj' type='text/html' data='" + conLink[num - 1] + "'></object>")
}if (conType[num - 1] == "1") {$("#imaFull").append("<div id='objF' class='obj'>" + conLink[num - 1] + "</div>");}
if (conType[num - 1] == "2") {var cTy = "text/html";var ext = (conLink[num - 1].substring(conLink[num - 1].lastIndexOf("."))).toLowerCase();
if (ext == ".pdf") {cTy = "application/pdf"}if (ext == ".swf") {cTy = "application/x-shockwave-flash"}if (ext == ".jar") {cTy = "application/x-java-applet"}
if (ext == ".mov") {cTy = "video/quicktime"}if (ext == ".flv") {cTy = "image/x-flv"}if (ext == ".mp4") {cTy = "image/mp4"}
if (ext == ".mpg") {cTy = "image/mpeg"}if (ext == ".jpg") {cTy = "image/jpeg"}if (ext == ".gif") {cTy = "image/gif"}
if (ext == ".png") {cTy = "image/png"}if (ext == ".svg") {cTy = "image/svg+xml"}if (ext == ".png") {cTy = "image/png"}
if (ext == ".tiff") {cTy = "image/tiff"}if (ext == ".xml") {cTy = "image/xml"}
$("#imaFull").append("<object id='objF' class='obj' type='" + cTy + "' data='" +conLink[num - 1]+ "'></object>")
}if (conType[num - 1] == "3") {
$("#imaFull").append("<object id='objF' class='obj' type='text/html' data='" +conLink[num-1]+ "'></object>")
}}});
fullEvents(num);var e= document.getElementById("imaFull");
if (e.requestFullscreen) {e.requestFullscreen();}
else if (e.mozRequestFullScreen) {e.mozRequestFullScreen();}
else if (e.webkitRequestFullScreen) {e.webkitRequestFullScreen();}
document.addEventListener("fullscreenchange", function () {
if (!document.fullscreen){$("#imaFull").remove();}}, false);
document.addEventListener("mozfullscreenchange", function (){if (!document.mozFullScreen){$("#imaFull").remove();}}, false);
document.addEventListener("webkitfullscreenchange", function () {if (!document.webkitIsFullScreen){$("#imafull").remove();;}}, false);}
function fullEvents(num){
if ($.trim(itemHelp[num - 1])) {$("#imaFull").append("<div class='titleIma'><p>" + itemHelp[num - 1] + "</p></div>");}
$(".obj").remove();$("#imaFull img").remove();
$("#imaFull").append("<img src='L0101_resources/media/imaFull/f_"+fileIma[num-1].substring(2)+"'/>");
$(".titleIma").remove();$("#musF").remove();$("#upF").remove();$("#upTxtF").remove();$("#playF").remove();
$("#txtF").css("visibility","hidden");
if ($.trim(conType[num - 1])){$("#txtF").css("visibility","visible");}
if (($.trim(fileMP3[num - 1])) || ($.trim(fileOgg[num - 1]))) {
var sourceLine="";
$("#imaFull").append("<div  id='musF' class='bMus' title='Audio'>K</div>");
$("#musF").click(function () {if ($("#playF").length){ $("#playF").remove();}else{
if ($.trim(fileMP3[num-1])){sourceLine=sourceLine+"<source src='L0101_resources/media/"+fileMP3[num-1]+"' type='audio/mp3' />";}
if ($.trim(fileOgg[num-1])) {sourceLine=sourceLine+"<source src='L0101_resources/media/"+fileOgg[num-1]+"' type='audio/ogg' />";}
$("#imaFull").append("<div  id='playF' class='playerAudio'><audio controls='controls'>"+sourceLine+"</audio></div>");}});}
if ($.trim(itemHelp[num - 1])) {$("#imaFull").append("<div class='titleIma'><p>" + itemHelp[num - 1] + "</p></div>");}
if ($.trim(txt[num - 1])) {$("#imaFull").append("<div  id='upF' class='bUp' title='Comments'>I</div>");
$("#imaFull").append("<div  id='upTxtF' class='bUpTxt'><p>" + txt[num - 1] + "</p></div>");
$("#upTxtF").css("visibility", "hidden");
$("#upF").click(function () {if ($("#upTxtF").css("visibility") == "hidden") {$("#upTxtF").css("visibility", "visible");
} else {$("#upTxtF").css("visibility", "hidden");}});}}
function audioCreate(num){var imaN = "ima" + num.toString();var musN = "mus" + num.toString();var playN = "player" + num.toString();var sourceLine="";
$("#"+imaN).append("<div  id='"+musN+"' class='bMus' title='Audio'>K</div>");
$("#" + musN).click(function () {
if ($("#"+playN).length){ $("#" + playN).remove();}
else{if ($.trim(fileMP3[num-1])) {
sourceLine=sourceLine+"<source src='L0101_resources/media/"+fileMP3[num-1]+"' type='audio/mp3' />";}
if ($.trim(fileOgg[num-1])) {
sourceLine=sourceLine+"<source src='L0101_resources/media/"+fileOgg[num-1]+"' type='audio/ogg'/>";}
$("#"+imaN).append("<div  id='" +playN+ "' class='playerAudio'><audio controls='controls'>"+sourceLine+"</audio></div>");}});}
function paintHelp(item){document.getElementById("ardoraHelpCanvas").style.zIndex=3;var canvas = document.getElementById("ardoraHelpCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.font="10px fActi";var indexHelp=parseInt($(item).attr("id").substring(4));var metricsW = contexto.measureText(itemHelp[indexHelp-1]).width+20;
var metricsH = 20+10+10;$("#ardoraHelpCanvas").attr({"width": metricsW,"height": metricsH});var topHelp=Math.round($(item).position().top)-metricsH;
var leftHelp=Math.round($(item).position().left)+10-(canvas.width/2);var xPoint=0;if (leftHelp<5){leftHelp=5;xPoint=Math.round($(item).position().left)+10;};
document.getElementById("ardoraHelpCanvas").style["visibility"]="visible";document.getElementById("ardoraHelpCanvas").style["position"]="absolute";document.getElementById("ardoraHelpCanvas").style["top"]=topHelp.toString()+"px";
document.getElementById("ardoraHelpCanvas").style["left"]=leftHelp.toString()+"px";
contexto.fillStyle=colorSele;paintBubble(contexto,0,0,canvas.width-10, canvas.height-3,xPoint,10);
contexto.beginPath();contexto.lineWidth="1";contexto.textAlign="left";
contexto.font="10px fActi";contexto.shadowBlur = 0;contexto.shadowOffsetX = 0;contexto.shadowOffsetY = 0;
contexto.fillStyle=colorText;contexto.fillText(itemHelp[indexHelp-1], 5, 20);contexto.fill();}
function cssColors(){
$("body").css("backgroundColor","#FFFFFF");
$("#imaFull").css("backgroundColor","#FFFFFF");
$(".photoContainer").css("background-color",colorSele);
$(".photoMG").css("background-color",colorSele);
$("#ardoraMain").css("color",colorText);
if ($(".photoContainer").length !=0) {var color1=colorSele;var color2=colorBack;
$(".photoContainer").css("background","-webkit-gradient(linear, left top, left bottom, from("+color1+"), to("+color2+"))");
$(".photoContainer").css("background","-webkit-linear-gradient("+color1+", "+color2+")");
$(".photoContainer").css("background","-moz-linear-gradient(top, "+color1+", "+color2+")");
$(".photoContainer").css("background","-ms-linear-gradient("+color1+", "+color2+")");
$(".photoContainer").css("background","-o-linear-gradient("+color1+", "+color2+")");
$(".photoContainer").css("background","linear-gradient("+color1+", "+color2+")");
$(".photoContainer").css("filter","progid:DXImageTransform.Microsoft.Alpha(startColorstr='"+color1+"', endColorstr='"+color2+"')");}
if ($(".photoMG").length !=0) {var color1=colorSele;var color2=colorBack;
$(".photoMG").css("background","-webkit-gradient(linear, left top, left bottom, from("+color1+"), to("+color2+"))");
$(".photoMG").css("background","-webkit-linear-gradient("+color1+", "+color2+")");
$(".photoMG").css("background","-moz-linear-gradient(top, "+color1+", "+color2+")");
$(".photoMG").css("background","-ms-linear-gradient("+color1+", "+color2+")");
$(".photoMG").css("background","-o-linear-gradient("+color1+", "+color2+")");
$(".photoMG").css("background","linear-gradient("+color1+", "+color2+")");
$(".photoMG").css("filter","progid:DXImageTransform.Microsoft.Alpha(startColorstr='"+color1+"', endColorstr='"+color2+"')");}
$("#ardoraMain").css("font-family",fEnun); $(".photoMG").css("font-family",fActi);
}
