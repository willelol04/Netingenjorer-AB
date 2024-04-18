let departments = document.querySelectorAll(".department");
let texts = {
    "heading": ["CAD/BERÄKNING", "WEBB/BILD", "LÖN", "LAGER OCH INKÖP", "RECEPTION"],
    "text": ["0", "1", "2", "3", "4"]
}
let text = document.querySelector(".departments-text");
let heading = document.querySelector(".departments-heading");



departments.forEach((dep) => {
    dep.addEventListener("click", () => {

        departments.forEach((dep) => {
            dep.style.backgroundColor = "#1A1C20";
            dep.style.border = "1px solid white";
            dep.style.color = "white";
        })
        dep.style.backgroundColor = "#f4f4f4";
        dep.style.border = "1px solid black";
        dep.style.color = "black";

        for(let i = 0; i < departments.length; i++) {
            if(departments[i] === dep) {
                heading.innerText = texts.heading[i];
                text.innerText = texts.text[i];
                break;

            }
        }        
    });
});