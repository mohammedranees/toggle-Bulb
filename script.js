function Bulb(){
    var  image = document.getElementById('image');
    if(image.src.match("download.png")){
        image.src = "download2.png";
        document.getElementById("switch").value = "Turn Off";
    }else{
        document.getElementById("switch").value = "Turn On";
        image.src = "download.png";
    }
}