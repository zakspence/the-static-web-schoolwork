var stateList = [AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY]

var stateSelector = document.getElementById("state-selector" );
for(var i= 0; i< 50; i++ ){
	var now = stateList[i ];
	console.log(now );
	var option = document.createElement("OPTION" );
	console.log(option );
	option.value = now
	console.log(option.value );
	stateSelector.appendChild(option );
	console.log(stateSelector.childNodes );
})