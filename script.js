const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('.result');

   if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
   }
   else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
   }
   else{
    const BMI = (weight/(height*height)*10000).toFixed(1);
    results.innerHTML = `<span>Result : ${BMI}</span>`;
    if(BMI<18.5){
        results.style.color = 'blue';
    }
    if(BMI>=18.5 && BMI<=24.9){
        results.style.color = '#3d9c25';
    }
    if(BMI>=25.0 && BMI<29.9){
        results.style.color = '#d6d306';
    }
    if(BMI>=30 && BMI<34.9){
        results.style.color = '#fa1919';
    }
    if(BMI>=35){
        results.style.color = '#cf0c0c';
    }

   }

})