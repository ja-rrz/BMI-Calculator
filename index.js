function calculate(){
    let bmi;
    let result = document.getElementById("result")
    
    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent =
    weight + " kg";

    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent =
    height + " cm";

    bmi = (weight / Math.pow((height / 100), 2)).toFixed
    (1);

    result.textContent = bmi;

    if(bmi < 18.5){
        result.style.color = "#ffc44d";
        category = "Underweight";
    }

    else if(bmi >= 18.5 && bmi <= 24.9){
        result.style.color = "#0be881";
        category = "Normal weight";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        result.style.color = "#ff884d";
        category = "Overweight"
    }
    else{
        result.style.color = "#ff5e57"
        category = "Obese"
    }
 
    document.getElementById("category").textContent = 
    category; 
}