 $(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
});


   
function onDeviceReady() {
    $('#scan').click(function () {
        Materialize.toast('Soy un Toast', 4000);
        document.getElementByID('Nombre').innerHTML = "Hola";
        document.getElementByID('Paterno').innerHTML = 'Has escogido  ';

    });
} 
*/
function escanear(){
    Materialize.toast('Soy un Toast', 4000);
    document.getElementByID('Nombre').innerHTML = "Hola";
    document.getElementByID('Paterno').innerHTML = 'Has escogido  ';
}
/*