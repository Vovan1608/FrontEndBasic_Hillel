cylinderRadius = +prompt('Enter a value for the radius of the cylinder: ', '');
cylinderHeight = +prompt('Enter a value for the height of the cylinder:', '');
const NUM_PI = Math.PI;
cylinderArea = NUM_PI * cylinderRadius**2;
cylinderVolume = cylinderArea * cylinderHeight;

document.write(
	'**************</br>' + 
	'Обьем цилиндра с площадью основы *' + [cylinderArea.toFixed(3)] + 
	'*, радиусом *' + [cylinderRadius] + 
	'* и высотой *' + [cylinderHeight] + 
	'* равен:</br>--------------------</br>' +
	' V = ' + [cylinderVolume.toFixed(3)] + 
	' .</br>-------------------</br>end.'
);
