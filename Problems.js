$(document).ready(function(){
	//returns sum of all multiples of 3 and 5 up to the input value
	$("#getSolution1").click(function() {
		var n = parseInt(document.getElementById("inputText").value);
		var total = 0;
		for (var i=0;i<n; i++) {
			if (i % 3 ==0 || i % 5 ==0) {
				total += i;
			};
		};
  		$("#solution1").html(total.toLocaleString());
  });
		//returns the sum of the even numbers of the Fibonacci sequence up to the input value
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
  		$("#solution2").html(total.toLocaleString());
  });

	$("#getSolution3").click(function() {
				var n = parseInt(document.getElementById("inputText3").value);
				var allFactors = [];
				var primeFactors = [];
				for (var i=0; i<n; i++) {
					if (n%i==0) {
						allFactors.push(i);
					};
				};

				function isPrime(n) {
					var primality = true;
					for (var i=2; i<Math.sqrt(n); i++) {
						if (n % i == 0) {
							primality = false;
						}
					};
					return primality;
				};

				for (var x=0; x<allFactors.length; x++) {
						if (isPrime(allFactors[x]) == true) {
								primeFactors.push(allFactors[x]);
							};
						};
	  		$("#solution3").html(primeFactors[primeFactors.length-1].toLocaleString());
  });

});