function LSST1()
{
	if (localStorage["ST1num2word"]) {
    	document.getElementById("color1").value = localStorage.getItem("ST1num2word");;
	} else {
    	document.getElementById("color1").value = "#FFFF00";
	}
}
function LSST2()
{
	if (localStorage["ST2num2word"]) {
    	document.getElementById("color2").value = localStorage.getItem("ST2num2word");;
	} else {
    	document.getElementById("color2").value = "#00FF00";
	}
}
function LSST_create_write1()
{
	localStorage.setItem("ST1num2word", document.getElementById("color1").value);
}
function LSST_create_write2()
{
	localStorage.setItem("ST2num2word", document.getElementById("color2").value);
}
function LSST_clear()
{
	localStorage.clear()
	document.getElementById("color1").value = "#FFFF00";
	document.getElementById("color2").value = "#00FF00";
}