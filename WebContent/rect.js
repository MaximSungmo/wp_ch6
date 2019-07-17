/**
 *   Rect 생성자 함수
 */

var Rect = function(x1, y1, x2, y2, bg){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.bg = bg;
}

Rect.prototype.show = function(){
	document.write(
		"<div style='position:absolute; " +
		"left:" + this.x1 + "px; " + 
		"top:"  + this.y1 + "px; " +
		"width:" + (this.x2-this.x1) + "px; " + 
		"height:" + (this.y2-this.y1) + "px; " + 
		"background-color:" + this.bg + "'>" +
		"</div>");
}