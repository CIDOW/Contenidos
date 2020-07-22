//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
 function printJustify(context, text, x, y, lineHeight, fitWidth) { fitWidth = fitWidth || 0; lineHeight = lineHeight || 20; var outLines=[]; var currentLine = 0;
var lines = text.split(/\r\n|\r|\n/); for (var line = 0; line < lines.length; line++) { if (fitWidth <= 0) { context.fillText(lines[line], x, y + (lineHeight * currentLine));
} else { var words = lines[line].split(" "); var idx = 1; while (words.length > 0 && idx <= words.length) { var str = words.slice(0, idx).join(" ");
var w = context.measureText(str).width; if (w > fitWidth) { if (idx == 1) { idx = 2;} outLines.push(words.slice(0, idx - 1).join(" "));
currentLine++; words = words.splice(idx - 1); idx = 1;} else { idx++; }} if (idx > 0){ outLines.push(words.join(" "));}} currentLine++;}
var maxW=0; for (i=0; i<outLines.length; i++){ if (context.measureText(outLines[i]).width>maxW){maxW=context.measureText(outLines[i]).width}}
for (i=0; i<outLines.length-1; i++){ var wordsLine = outLines[i].split(" "); var indexB=1; var space="  "; while (context.measureText(outLines[i]).width<maxW){ var newLine=""; for (j=0; j<wordsLine.length; j++){ if (j<indexB){
newLine=newLine+wordsLine[j]+space;} else{ newLine=newLine+wordsLine[j]+" ";}} outLines[i]=$.trim(newLine);indexB+=1;if (indexB>wordsLine.length){
indexB=1; space=space+" "}}} return outLines;}
function roundedRect(ctx,x,y,width,height,radius,color){ ctx.beginPath(); ctx.moveTo(x,y+radius); ctx.lineTo(x,y+height-radius); ctx.quadraticCurveTo(x,y+height,x+radius,y+height);ctx.lineTo(x+width-radius,y+height);
ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius); ctx.lineTo(x+width,y+radius); ctx.quadraticCurveTo(x+width,y,x+width-radius,y); ctx.lineTo(x+radius,y); ctx.quadraticCurveTo(x,y,x,y+radius);ctx.closePath();ctx.stroke();
if (color!=""){ if (color.substr(0,9)=="gradient_"){ var my_gradient=ctx.createLinearGradient(x+width/2,y,x+width/2,y+height); my_gradient.addColorStop(0,color.substr(9,20)); my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient; ctx.fill();} else{ ctx.fillStyle=color; ctx.fill();}}}
function drawDashedLine(context, fromX, fromY, toX, toY, dashPattern) {context.beginPath();var dx = toX - fromX;var dy = toY - fromY;
var angle = Math.atan2(dy, dx);var x = fromX;var y = fromY;context.moveTo(fromX, fromY);var idx = 0;var draw = true;
while (!((dx < 0 ? x <= toX : x >= toX) && (dy < 0 ? y <= toY : y >= toY))) {var dashLength = dashPattern[idx++ % dashPattern.length];var nx = x + (Math.cos(angle) * dashLength);x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
var ny = y + (Math.sin(angle) * dashLength);y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
if (draw) {context.lineTo(x, y);} else {context.moveTo(x, y);}draw = !draw;}context.closePath();context.stroke();};
function paintBubble(ctx,x,y,w,h,xPointer,radius){if (xPointer==0){var xP=x+w/2;}else{var xP=xPointer;}ctx.fillStyle=colorSele;
ctx.globalAlpha=1;ctx.beginPath();ctx.strokeStyle=colorSele;ctx.lineWidth="2";roundedRect(ctx, x, y, w, h-10, 10, colorSele);ctx.moveTo(xP,y+h-10);
ctx.lineTo(xP+10,y+h-10);ctx.lineTo(xP+5,y+h);ctx.lineTo(xP,y+h-10);ctx.shadowColor = "#999";
ctx.shadowBlur=5;ctx.shadowOffsetX = 3;ctx.shadowOffsetY = 3;ctx.fill();ctx.stroke();}
