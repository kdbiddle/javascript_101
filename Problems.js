$(document).ready(function(){

	$("#getSolution1").click(function() {
		var n = parseInt(document.getElementById("inputText").value);
		var total = 0;
		for (var i=0;i<n; i++) {
			if (i % 3 ==0 || i % 5 ==0) {
				total += i;
			};
		};
  		$("#solution1").html(total);
  });
});