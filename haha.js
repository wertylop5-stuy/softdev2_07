"use strict";

const SVG_NS = "http://www.w3.org/2000/svg";

let svg, circle;

function Circle(x1, y1) {
	this.elem = null;
	this.x = x1;
	this.y = y1;
	
	this.next = null;
	this.line = null;
}

function addNext(e) {
	let x = e.offsetX;
	let y = e.offsetY;
	
	let n = new Circle(x, y);

	n.elem = document.createElementNS(SVG_NS, "circle");
	n.elem.setAttribute("cx", x);
	n.elem.setAttribute("cy", y);
	n.elem.setAttribute("r", 10);
	n.elem.setAttribute("fill", "BlanchedAlmond");
		
	if (circle !== undefined) {
		n.line = document.createElementNS(SVG_NS, "line");
		n.line.setAttribute("x1", x);
		n.line.setAttribute("y1", y);
		n.line.setAttribute("stroke", "black");
		n.line.setAttribute("x2", circle.x);
		n.line.setAttribute("y2", circle.y);
		
		svg.appendChild(n.line);
	}
	
	svg.appendChild(n.elem);
	
	n.next = circle;
	circle = n;
}

function clearAll() {
	let temp;
	while (circle !== undefined) {
		if (circle.line !== null) svg.removeChild(circle.line);
		svg.removeChild(circle.elem);
		circle = circle.next;
	}
}

(() => {
	let clear = document.getElementById("clear");
	
	svg = document.getElementById("boi");
	svg.addEventListener("click", addNext);
	clear.addEventListener("click", clearAll);
})()

