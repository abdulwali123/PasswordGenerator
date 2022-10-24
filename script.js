const slider_value=document.getElementById('slider-value');
const slider=document.getElementById('length-bar');
const generate_btn=document.getElementById('generate-btn');
const options=document.querySelectorAll('.eles');
const input_field=document.getElementById('pass-bar');
const passStrength=document.querySelector('.strength-bar')


slider.addEventListener('input',changeSlider);
generate_btn.addEventListener('click',generatePassword)


const character={
    lowercase:"abcdefghijklmnopqrstvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTVWXYZ",
    numbers:"1234567890",
    symbols:"@#$%^&*!+",
    include_space:" "
}


function changeSlider() {
    slider_lenghts=slider.value;
    slider_value.innerHTML=slider_lenghts;   
    passStrength.id=slider_lenghts<=10? "weak": slider_lenghts<=20?"medium": "strong";
    return slider_lenghts
   
}



function generatePassword() {
    
let static_password="";
let randomPassword=""
let excludeDuplicate=false
let randomChar
changeSlider()

    options.forEach(option => {
        if (option.checked) {
            
     
        if (option.id!=="exclude-duplicate" && option.id!=="include-space") {
            static_password+=character[option.id]
        }
        else if (option.id=="include-space") {
           static_password+=` ${static_password} `
        }else{
            excludeDuplicate=true
        }
    
        }

    });
        
    for (let i = 0; i < slider_lenghts; i++) {
        randomChar=static_password[Math.floor(Math.random()*static_password.length)]
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar==" " ? randomPassword+=randomChar :i--;
            
        }
        else{
            randomPassword+=randomChar;
        }
      
    }
 input_field.value=randomPassword
    }
  





