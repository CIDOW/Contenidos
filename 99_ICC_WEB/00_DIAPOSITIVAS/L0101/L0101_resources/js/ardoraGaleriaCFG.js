var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD";colorText="#000000";colorSele="#FF8000";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var itemHelp=["","","","","","","","","",""];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_01.jpg","i_02.jpg","i_03.jpg","i_04.jpg","i_05.jpg","i_06.jpg","i_07.jpg","i_08.jpg","i_09.jpg","i_10.jpg"];
var fileX=["800","800","800","800","800","800","800","800","800","800"];
var fileY=["384","384","384","384","384","384","384","384","384","384"];
var txt=["","","","","","","","","",""];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","","","","","",""];
var conLink=["","","","","","","","","",""];
