   			var leftOverPercent = 100;
    		
    		function autoCalculate(){
				var guests = document.getElementById('guests').value;
				var autoBill = document.getElementById('autoBill').value;		
				var tipQuality = document.getElementById('autoTip').value;

				if(tipQuality === 0){
					tipQuality = 1;
				}
				if(guests === "" || guests <= 1){
					guests = 1;
				}
				 
				if(autoBill === ""){
					return window.alert('Please Input Bill'); //ask how to call a modal, also how to enter the background picture to make the plate in the middle
				} 

				var total1 = ( (autoBill * tipQuality) + Number(autoBill) ) / guests;
				total1 = Math.round(total1 * 100) / 100; 
				total1 = total1.toFixed(2); 

				document.getElementById('autoDisplayNames').innerHTML = '$' + total1 + ' is owed per person'
			}


			function autoReset(){
				document.getElementById('guests').value = "";
				document.getElementById('autoBill').value = "";
				document.getElementById('autoTip').value = 0;
				document.getElementById('autoDisplayNames').innerHTML = "";
			}
			
			
			
			function add(){
				var percentages = [];
				var guests = document.getElementById('guests').value;
				var bill = document.getElementById('bill').value;
				var names = document.getElementById('names').value;
				var percents = document.getElementById('percents').value;

				var tipQuality = document.getElementById('tip').value;
				var percentageTotal =  Number(percents) * 0.01 * Number(bill);
				leftOverPercent = leftOverPercent - percents;

				if(tipQuality === 0){
					tipQuality = 1;
				}
				if(bill === "" && percents === ""){
					return window.alert('Please input values');
				}
				if(percents === ""){
					// ('#autoCalculate').modal('show');
					return window.alert ('Please input percentage');
				}
				if(bill === ""){
					return window.alert ('Please input bill');
				}
				if(names === ""){
					names = 'This person ';
				}

				var total = percentageTotal * tipQuality + percentageTotal;
				total = Math.round(total * 100) / 100; 
				total = total.toFixed(2); 

				document.getElementById('addedNames').innerHTML += '<li>' + names + ' owes $' + total + '</li>'

				var balance = bill - percentageTotal;
				balance = Number(leftOverPercent) * 0.01 * Number(bill);
				balance = balance.toFixed(2); 

				document.getElementById('balanceDisplay').innerHTML ='<li>' + 'Balance = $' +  balance + '(' + leftOverPercent + '%)' + ' left to pay' + '</li>';
			} 
		

			function reset(){	
				document.getElementById('guests').value = "";
				document.getElementById('bill').value = "";
				document.getElementById('percents').value = "";
				document.getElementById('names').value = "";
				document.getElementById('tip').value = 0;
				document.getElementById('addedNames').innerHTML = "";
				document.getElementById('balanceDisplay').innerHTML = "";
				leftOverPercent = 100;
			}
		