

	
		let numberInput = document.getElementById("numberInput");
		let square = document.querySelector(".square");
		let clickTimes = [];

		function handleSquareClick() {
			let value = Number(numberInput.value);
			if (value >= 1 && value <= 20) {
				if (value === 1) {
					numberInput.disabled = true;
					numberInput.value = "1";
					square.style.borderColor = "green";
					square.style.backgroundColor = "red";
					document.getElementById("endMessage").classList.remove("hidden");
					clickTimes.push(new Date());
					displayClickTimes();
					document.getElementById("resetButton").classList.remove("hidden");
				} else {
					numberInput.value = String(value - 1);
					numberInput.select();
					clickTimes.push(new Date());
				}
			} else {
				alert("Error");
			}
		}

		function displayClickTimes() {
			let clickTimesDiv = document.getElementById("clickTimes");
			clickTimesDiv.innerHTML = "";
			clickTimes.forEach(function(time) {
				clickTimesDiv.innerHTML += time.toLocaleString() + "<br>";
			});
			setTimeout(function() {
				document.getElementById("endMessage").classList.add("hidden");
				clickTimesDiv.innerHTML = "";
			}, 5000);
		}

		function resetPage() {
			numberInput.disabled = false;
			numberInput.value = "";
			square.style.borderColor = "red";
			square.style.backgroundColor = "white";
			document.getElementById("endMessage").classList.add("hidden");
			clickTimes = [];
			document.getElementById("clickTimes").innerHTML = "";
			document.getElementById("resetButton").classList.add("hidden");
		}
	
        function handleSquareClick() {
            let value = Number(numberInput.value);
            if (value >= 1 && value <= 20) {
              if (value === 1) {
                numberInput.disabled = true;
                square.style.backgroundColor = "red";
                square.style.borderColor = "green";
                title.innerHTML = "Clicks Ended";
                recordClicks();
              } else {
                numberInput.value = value - 1;
                numberInput.select();
              }
            } else {
              alert("Error");
            }
          }
          square.style.backgroundColor = "red";
          square.style.borderColor = "green";
          title.innerHTML = "Clicks Ended";
          recordClicks();
          
