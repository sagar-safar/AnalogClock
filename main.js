
function time(){


   

    const dt = new Date();

    let sec = dt.getSeconds();
    let min = dt.getMinutes()
    let hr = dt.getHours()
    if(hr>12){

        hr = hr-12;
    }
    
     

    let secAngle = sec*6;
    let minAngle = min*6+0.1*sec;
    let hrAngle = hr*30+0.5*min;

    
    document.querySelector('.sec').style = `transform:rotate(${secAngle}deg)`
    document.querySelector('.min').style = `transform:rotate(${minAngle}deg)`
    document.querySelector('.hand').style = `transform:rotate(${hrAngle}deg)`
    




}


setInterval(time,1000)