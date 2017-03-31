var ds=750;
function resize(){
	var cw=document.documentElement.clientWidth;
	var scale=cw/ds*100;
	document.documentElement.style.fontSize=scale+'px';
}
window.addEventListener('resize',resize);
resize();
