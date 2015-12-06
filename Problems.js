$(document).ready(function(){
	//returns sum of all multiples of 3 and 5 up to the input
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

		$("#getSolution2").click(function() {
			var n = parseInt(document.getElementById("inputText2").value);
			var total = 0;
			var fibonacciSequence =[1,2];
			for (var i=1; fibonacciSequence[i]<n; i++) {
				var val = fibonacciSequence[i] + fibonacciSequence[i-1];
				fibonacciSequence.push(val);
			};
			for (var i=0; i<fibonacciSequence.length; i++) {
				if (fibonacciSequence[i] % 2 == 0) {
					total += fibonacciSequence[i];
				}
			}
  		$("#solution2").html(total);
  });

});