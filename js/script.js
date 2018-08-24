$(document).ready(() => {
	$("#bars").click((e) => {
		e.preventDefault();
		$("#nav-id").toggleClass("show");
	});
});