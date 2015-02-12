//luke Grube
//infix to postfix

var TEST = false;

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

//print("before i prompt you for input");

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

//print("after prompt is done");
//print(operatorstack + "here is oper Stack");
//print(numberstack + "number stack is here");
function evaluate() {
	var pop1 = 0;
	var pop2 = 0;
	var operand = '+';
	var result;


	var token  = userinput.split(" ");
	print(token);
	for(var i=0; i<token.length; ++i) {
		var var1 = token[i];
	//	print(var1);
		var res = var1.charAt(0);
		if(res >= '0' && res <= '9') {
			numberstack.push(var1);
		//	print(numberstack.peek() + "pushing numbers");
		}
		else {
			if(res == '+' || res == '-' || res == '*'|| res == '/') {
				operatorstack.push(var1);	
	//			print(operatorstack.peek() + "pushing operators");
			}//end of if
		}//end of else if
	} //end of for loop
	if(TEST) {
		print(var1);
		print(operatorstack.peek() + "op");
		print(operatorstack.pop() + "operator first pop");
		print(numberstack.peek() + "num");
		print(numberstack.pop() + "num first pop");
		print(numberstack.pop() + "num second pop");
		print(numberstack.peek());
		}//end of test if
	for(var i=0; i<userinput.length; ++i) {
		if(operatorstack.peek() == ('*')) {
			operand  = operatorstack.pop();
			pop1 = parseInt(numberstack.pop());
			pop2 = parseInt(numberstack.pop());
			result = pop2 * pop1;
			print(result);
			numberstack.push(result);
		}// end of math if
		else if(operatorstack.peek() == ('/')) {
			operand = operatorstack.pop();
			pop1 = parseInt(numberstack.pop());
			pop2 = parseInt(numberstack.pop());
			result = pop2 / pop1;
			print(result);
			numberstack.push(result);
		}//end of math if
		else if(operatorstack.peek() == ('-')) {
			operand = operatorstack.pop();
			pop1 = parseInt(numberstack.pop());
			pop2 =parseInt(numberstack.pop());
			result = pop2 - pop1;
			print(result);
			numberstack.push(result);
		}//end of math if
		else if(operatorstack.peek() == ('+')) {
			operand = operatorstack.pop();
			pop1 = parseInt(numberstack.pop());
			pop2 = parseInt(numberstack.pop());
			result = pop2 + pop1;
			print("zombie");
			print(result);
			numberstack.push(result);
		}//end of math if
	}//end of for loop
	print(result);
}//end of evalutate


var userinput = "2 + 2 + 5";
evaluate(userinput);
//var token = userinput.split(" ");
//print(evaluate(userinput));
//print(token);
