var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var loadModal = document.classList("inner-modal");
loadModal.addEventListener("click", function(){
	if (modal1) {
		document.getElementsByClassName("inner-modal")[1].innerHTML='<object type="text/html" data="bpi_shake.html" ></object>';
	}
	else (modal3) {
		document.getElementsByClassName("inner-modal")[1].innerHTML='<object type="text/html" data="bpi_shake.html" ></object>';
	}

}
	);