function calcTotal(){
    console.log("ingreso a calTotal")

    let cant=document.getElementById("cant").value
    console.log(cant)

    let total=cant*1000
    console.log(total)

    document.getElementById("total").innerHTML=total



}