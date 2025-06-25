localStorage.setItem("name","shubham");
console.log(localStorage.getItem("name"));

const obj = {
  name:"shubham",
  arr:[1,2,3,"4"]
}

console.log(JSON.stringify(obj));
localStorage.setItem("obj",JSON.stringify(obj));

console.log("Storage - ",localStorage.getItem("obj"));
let storedObj = JSON.parse(localStorage.getItem("obj"));
console.log(storedObj);

const h1 = document.getElementsByTagName("h1")[0];

const getQR = async(url) => {
    console.log('Making request for URL:', url);
    
    const response = await fetch(`https://api.api-ninjas.com/v1/qrcode?format=png&data=${encodeURIComponent(url)}`, {
      headers: {
        "X-Api-Key": "oWvhBozQpsGJvIWsKjasXQ==9aK8PtOh597Lchmg"
      }
    });
    
    const blob = await response.blob();
    
    const imageUrl = URL.createObjectURL(blob);
    console.log('Object URL created:', imageUrl);
    
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "QR Code";
    img.style.maxWidth = "300px";
    
    h1.after(img);
  }

getQR("https://ai-inerview-prep.vercel.app/")