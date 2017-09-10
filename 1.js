//задание №1//

var wardrobe = ['dress', 'shirt', 'costume', 'trousers'];

outArray ();

function outArray () {
	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++)  {
		new_1 += i + ')' + wardrobe [i] + '<br>';
	}
	document.getElementById ('new_1'). innerHTML = new_1;
}

//задание №2//

function putArray () {
	var	index = document.getElementById('index').value
	var mas = document.getElementById ('mas').value
	wardrobe[index] = mas;

	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++) {
		new_1 += i + ')' + wardrobe [i] + '<br>' ;
	}
	
	document.getElementById ('new_1'). innerHTML = new_1;
}
document.getElementById('btn').onclick = putArray;

//Задание №3//

function popArray() {
	var delt = document.getElementById('delt');
	wardrobe.pop();

	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++) {
		new_1 += i + ')' + wardrobe [i] + '<br>' ;
	}
	
	delt. innerHTML = new_1;
}
document.getElementById('pop').onclick = popArray;

//Задание №4//

function shiftArray() {
	var del_f_e = document.getElementById('delsh');
	wardrobe.shift();

	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++) {
		new_1 += i + ')' + wardrobe [i] + '<br>' ;
	}
	
	del_f_e. innerHTML = new_1;
}
document.getElementById('shift').onclick = shiftArray;

//Задание №5//

function pushArray() {
	var pushh = document.getElementById('pushh');
	var putmas = document.getElementById('putmas').value;
	wardrobe.push(putmas);

	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++) {
		new_1 += i + ')' + wardrobe [i] + '<br>' ;
	}
	
	pushh. innerHTML = new_1;
}
document.getElementById('push').onclick = pushArray;

//Задание №6//
function unshiftArray() {
	var noshift = document.getElementById('noshift');
	var putmasfirst = document.getElementById('putmasfirst').value;
	wardrobe.unshift(putmasfirst);

	var  new_1 = '';
	for (var i = 0; i<wardrobe.length; i++) {
		new_1 += i + ')' + wardrobe [i] + '<br>' ;
	}
	
	noshift. innerHTML = new_1;
}
document.getElementById('unshift').onclick = unshiftArray;
