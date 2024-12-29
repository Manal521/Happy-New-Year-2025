let h1 = document.getElementById("old");
let h2 = document.getElementById("new");
let para = document.getElementById("para")





h1.onclick = () => {

    h2.textContent = "2025";
    para.textContent = "HAPPY NEW YEAR..."
    h2.style.color = "white";
    h1.style.display = "none"


}