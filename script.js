var asd;
function qwert() {
	debugger;
	xmlhttp = new XMLHttpRequest ();
	xmlhttp.open("GET", "vehicles.xml", false); //this will open our XML file
	xmlhttp.send(); //this will send request to file
	xmlDoc=xmlhttp.responseXML;
	asd = xmlDoc.getElementsByTagName("cartype")[0].childNodes[1].nodeValue;
	alert(asd);
	// this will return the tag value
	xmlhttp.close("GET", "vehicles.xml", false);
}














/*
// WORKING CODE
var row = document.getElementById('type-row');
var packRow = document.getElementById('pack-row');
var addonRow = document.getElementById('add-row');
var createdBlock;

var carType1 = {
	type: "Sedan",
	packages: ["p1", "p2"],
	addons: ["addon1"]
};

var carType2 = {
	type: "SUV",
	packages: ["p1", "p2", "p3", "p4"],
	addons: ["addon1", "addon2"]
};


row.onclick = event => {
	if (event.target.id == "type2") {
		packRow.innerHTML = "";
		addonRow.innerHTML = "";

		for (var i = 0; i < carType2.packages.length; i++) {
			createdBlock = document.createElement('div');
			createdBlock.className = 'pack-block block';
			createdBlock.innerHTML = carType2.packages[i];
			packRow.appendChild(createdBlock);
		}
		for (var i = 0; i < carType2.addons.length; i++) {
			createdBlock = document.createElement('div');
			createdBlock.className = 'add-block block';
			createdBlock.innerHTML = carType2.addons[i];
			addonRow.appendChild(createdBlock);
		}
	};
};
*/


/*
// ADDING P/A FROM AN OBJECT
row.onclick = event => {
	if (event.target.id == "type2") {
		packRow.innerHTML = "";
		addonRow.innerHTML = "";

		for (var i = 0; i < carType2.packages.length; i++) {
			createdBlock = document.createElement('div');
			createdBlock.className = 'pack-block block';
			createdBlock.innerHTML = carType2.packages[i];
			packRow.appendChild(createdBlock);
		}
		for (var i = 0; i < carType2.addons.length; i++) {
			createdBlock = document.createElement('div');
			createdBlock.className = 'add-block block';
			createdBlock.innerHTML = carType2.addons[i];
			addonRow.appendChild(createdBlock);
		}
	};
};



// CREATE A NEW ELEMENT IN PACKAGE
row.onclick = event => {
	if (event.target.id == "type2") {
		package = document.createElement('div');
		package.className = 'pack-block block';
		package.innerHTML = "Package name";
		packRow.appendChild(package);
	}
};

// CLICK ACTION EXAMPLES
row.onclick = e => {
	alert(e.target);
	alert(e.target.id);
}

window.onclick = e => {
    alert(e.target);
    alert(e.target.id);
} */


