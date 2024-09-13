let cityName=document.getElementById("city-name");
let cityTemp=document.getElementById("city-temp");
let form=document.getElementById('form');
let apiKey="c32ffa7ed91073f74307800f3b874058";


form.addEventListener("submit",(e)=>{
    

    e.preventDefault()  // form will update automaically it will not show 
   // console.log(e)
    console.log("city Name is",cityName.value)

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`    //here units and metrics is used to convert farenheit to celcius
    fetch(url)
    .then((res)=>{
        console.log(res)
        return res.json()
       
    })
    .then((res)=>{
        console.log(res) 
        if(res.cod==="404"){
            alert("city Not Found")
        }

    
     
    const div=document.createElement('div')  //creating div element using javascript
    div.classList.add("city")
    const {main,sys,name,weather}=res            //these is called destructuring it is eS6 concept    

   
      let a=weather[0].description
        if(a=="scattered clouds" || a=="overcast clouds"||a=="broken clouds"){
            cloud= "https://images.squarespace-cdn.com/content/v1/5d4c63022fdc0f0001a31f58/1565863565994-LP9GYCFKDA25XOATYMFI/cloud+dark+blue.jpg?format=2500w"
        }
        else if(a=="rainy"||a=="mist"){
            cloud= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCd0tBY4G6BKw6pgpkh0iKj0em-tflyx5rw&s"

        }
    
        else if(a=="clear sky"){
        cloud="https://t3.ftcdn.net/jpg/02/52/78/62/360_F_252786228_e62LiuTdi47kJ99c22jCaUTSYHoyuZsP.jpg"
        }

        else if(a=="few clouds"){
        cloud="https://www.shutterstock.com/image-photo/few-random-white-clouds-blue-260nw-1780046486.jpg"
        }
        else{
            cloud="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkAfE3gcPYxt6arLgflzgMTO9vbmUC5qbs-S9-6qdvRGK8wVXMcb7jLN4JhcK4-oFDUQ&usqp=CAU"
        }
    

    let result=`
        <div>
        <h1>${name}</h1>
        <p>
        ${main.temp}<sup>0</sup>C
        ${sys.country}
        ${weather[0].description}
        </p>

        </div>

    `
    div.innerHTML=result
    div.style.backgroundImage = `url('${cloud}')`;
    div.style.backgroundSize = "cover"; 
    cityTemp.appendChild(div)

})

})


