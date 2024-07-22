const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault(); //You need to call e.preventDefault() in the event listener to prevent the form from submitting and refreshing the page.
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector(".results");

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `PLease give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `PLease give a valid weight ${weight}`;
  } else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let bodyType = "";
    if(bmi < 18.6){
        bodyType = "UnderWeight";
    } else if (bmi > 18.6 && bmi < 24.9){
        bodyType = "Healthy Weight";
    } else{
        bodyType = "OverWeight";
    }
    results.innerHTML = `<span>Your bmi is: ${bmi} and your body type is: ${bodyType}</span>`;
  }
});


