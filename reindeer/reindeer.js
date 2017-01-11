var colors= ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth" ];
var flyingBeast= ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen" ];


var hohohoElement= document.getElementById("coloredReindeer" );

function change(it ){
	var reinbow= []
	var quitCondition
	if (flyingBeast.length > colors.length )
		quitCondition= colors.length
	else
		quitCondition= flyingBeast.length
	//With this code, 'flyingBeast' should come out the larger
	console.log(quitCondition );

	for (i= 0; i< quitCondition; i++ ){
		reinbow.push(colors[i] + " " + flyingBeast[i] );
		var coloredFlyingBeast= reinbow.join(", " );
		console.log(i );
	}
	console.log(it );
	it.innerHTML= coloredFlyingBeast
}

change(hohohoElement );