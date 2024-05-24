function enviar(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let documento = document.getElementById("document").value;
    let age = document.getElementById("age").value;
    if(name.length == 0 || last_name.length == 0 ||documento.length == 0 ||age.length == 0 ){
        Swal.fire({
        title: "Cajas de texto vacias",
        text: "Alguna de las cajas de texto esta vacia",
        icon: "error"
    });
        if( name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
        }
        else{
        document.getElementById("name").style.border = "2px solid green"
        }
        if( last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
        }  
        else{
        document.getElementById("last_name").style.border = "2px solid green"
        }   
        if( documento.length == 0){
        document.getElementById("documento").style.border = "2px solid red"
        }  
        else{
        document.getElementById("documento").style.border = "2px solid green"
        }
        if( age.length == 0){
        document.getElementById("age").style.border = "2px solid red"
        }  
        else{
        document.getElementById("age").style.border = "2px solid green"
        }

}
}