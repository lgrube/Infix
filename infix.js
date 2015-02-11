//luke Grube
//infix to postfix


function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}

var operatorstack = new Stack();
var numberstack = new Stack();
var n = prompt("enter infix equation here");
alert(n);
n = parseInt(n);
if (isNaN(n)) {
	n.push(operatorstack);
}
else {
	if(n >='0' && n <= '9');
	n.push(numberstack);
}
