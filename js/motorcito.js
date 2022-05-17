var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if(estadoLicuadora =="apagado"){
        estadoLicuadora = "encendido";
        hacerBrr();
        licuadora.classList.add("active");
       // console.log("me prendiste");
        } else {
            estadoLicuadora = "apagado";
            hacerBrr();
            licuadora.classList.remove("active");
           // console.log("me apagaste");
        }

        function hacerBrr(){
            if(sonidoLicuadora.paused){
                botonLicuadora.play();
                sonidoLicuadora.play();
            }else{
                botonLicuadora.play();
                sonidoLicuadora.pause();
                sonidoLicuadora.currentTime = 0;
            }
        }
}