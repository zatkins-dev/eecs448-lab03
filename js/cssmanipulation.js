function updateFormat() {
    var borColors = `${document.getElementById("redBor").value}, ${document.getElementById("greenBor").value}, ${document.getElementById("blueBor").value}`;


    var borWidth = document.getElementById("widthBor").value;


    var backColors = `${document.getElementById("redBack").value}, ${document.getElementById("greenBack").value}, ${document.getElementById("blueBack").value}`;
     
    
    var text = document.getElementById("dummyText");
    text.style.border = `${borWidth}pt solid rgb(${borColors})`;
    text.style.backgroundColor = `rgb(${backColors})`;
}