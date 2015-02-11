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

print("before i prompt you for input");

//var n = prompt("enter infix equation here");
//alert(n);
//n = parseInt(n);
//if (isNaN(n)) {
//	n.push(operatorstack);
//}
//else {
//	if(n >='0' && n <= '9');
//	n.push(numberstack);
//}

print("after prompt is done");
print(operatorstack + "here is oper Stack");
print(numberstack + "number stack is here");
function evaluate() {

	for(var i=0; i<Stack.length; ++i) {
		var n = Stack.peek();
		print(Stack.length);
		if (isNaN(n)) {
			n.push(operatorstack);
			print(opeatorstack);
		} //end of if
		else {
			n.push(numberstack);
			print(numberstack)
		} //end of else
	} //end of for loop
}//end of evalutate
print(evaluate(2+1));
