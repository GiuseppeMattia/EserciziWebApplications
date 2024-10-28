document.getElementById("Form").addEventListener("submit",function(event){
    event.preventDefault();
    const checkBox = document.getElementById("gridCheck");

    if(!checkBox.checked){
        alert("ATTENZIONE: Devi essere sicuro di volermi contattare dall'oltretomba");
    }
})

document.getElementById("Form").addEventListener("submit",function(event){
    event.preventDefault();
    const question = document.getElementById("question").value;

    if(question === ""){
        alert("Non mi hai fatto nessuna domanda");
    }
})
