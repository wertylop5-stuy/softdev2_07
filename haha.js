"use strict";

const SVG_NS = "https://www.w3.org/2000/svg";

let circle;

function Circle(x1, y1, e, n, l) {
	this.elem = e;
	this.x = x1;
	this.y = y1;
	
	this.next = n;
	this.line = l;
}

Circle.prototype.addNext = (e) => {
	let x = e.offsetX;
	let y = e.offsetY;
	
	let n = new Circle();
	n.elem = document.createElementNS(SVG_NS, "circle");
	n.elem.setAttribute("cx");
	n.elem.setAttribute("cy");
	n.elem.setAttribute("r");
	
	n.line = document.createElementNS(SVG_NS, "line");
	n.line.setAttribute("x1", x);
	n.line.setAttribute("y1", y);
	
	if (circle) {
		n.line.setAttribute("x2", circle.x);
		n.line.setAttribute("y2", circle.y);
	}
	
	n.next = circle;
	circle = n;
};

(() => {
	let svg = document.getElementById("boi");
	let clear = document.getElementById("clear");
	
	svg.addEventListener("click", circle.addNext);
})()

