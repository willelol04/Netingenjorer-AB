

const DEPARTMENTS = {
    0: 
    {
        "heading" : "CAD/BERÄKNING",
        "about" : "CAD-avdelningen fokuserar på design och tekniska ritningar för produkter och projekt. De använder datorstödd design (CAD) för att skapa och modifiera tekniska ritningar och modeller.",
        "hardware" : "Avdelningen använder kraftfulla arbetsstationer med avancerade grafikkort och stora bildskärmar för att möjliggöra detaljerade och komplexa designuppgifter.",
        "software" : "Programvaran AutoCAD används för design i 2D och 3D.",
        "amountOfEmployees": 4,
        "img": "../img/departments/cad.jpg",
        EMPLOYEES : {
            0: {
                firstName : "Ahmed",
                img : "../img/employees/ahmed.jpg",
                title : "CAD-ritare"
    
            },
            1: {
                firstName : "Christina",
                img : "../img/employees/christina.jpg",
                title : "CAD-ritare"
            },
            2: {
                firstName : "Jakob",
                img : "../img/employees/jakob.jpg",
                title : "Projektledare"
            },
            3: {
                firstName : "Charles",
                img : "../img/employees/charles.jpg",
                title : "Konstruktör"
            }
        }

    },
    1: {
        "heading" : "WEBB/BILD",
        "about" : "WEB-avdelningen hanterar utvecklingen och underhållet av företagets webbplatser och webbapplikationer. De ansvarar för att säkerställa en användarvänlig och attraktiv online-närvaro. Dessutom utförs en del bildmanipulering och fotografering åt företag.",
        "hardware" : "Vanligtvis använder avdelningen relativt kraftfulla stationära datorer med tillräcklig processor- och minneskapacitet för webbutvecklingsuppgifter samt bildmanipulering.",
        "software" : "Webbutveckling sker i Visual Studio Code. För fotografering och bildmanipulation använder vi program från Adobe, främst Photoshop och Lightroom.",
        "amountOfEmployees": 3,
        "img": "../img/departments/web.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Ahmed",
                img : "../img/employees/ahmed.jpg",
                title : "CAD-ritare"
    
            },
            1: {
                firstName : "Christina",
                img : "../img/employees/christina.jpg",
                title : "CAD-ritare"
            },
            2: {
                firstName : "Jakob",
                img : "../img/employees/jakob.jpg",
                title : "Projektledare"
            }
            
        }
    },
    2: {
        "heading" : "LÖN",
        "about" : "LÖN-avdelningen ansvarar för hanteringen av företagets löner och personalrelaterade ekonomiska frågor, inklusive skatter, bonusar och förmåner.",
        "hardware" : "Avdelningen använder vanligtvis datorer och kanske skrivare för att skriva ut rapporter och dokument relaterade till lönehantering.",
        "software" : "Programvaran som används för att hantera de anställdas löner är Visma Lön.",
        "amountOfEmployees": 2,
        "img": "../img/departments/salary.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Ahmed",
                img : "../img/employees/ahmed.jpg",
                title : "CAD-ritare"
    
            },
            1: {
                firstName : "Christina",
                img : "../img/employees/christina.jpg",
                title : "CAD-ritare"
            }
        }
    },
    3: {
        "heading" : "LAGER OCH INKÖP",
        "about" : " LAGER-avdelningen ansvarar för att hantera företagets lager, inklusive mottagande, lagring, plockning, packning och leverans av varor.",
        "hardware" : "Avdelningen använder kanske streckkodsskannrar, handdatorer, gaffeltruckar och andra lagerhanteringsutrustningar beroende på verksamhetens storlek och behov.",
        "software" : "Bokföring i lagret görs genom Microsoft Excel.",
        "amountOfEmployees": 2,
        "img": "../img/departments/inventory.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Ahmed",
                img : "../img/employees/ahmed.jpg",
                title : "CAD-ritare"
    
            },
            1: {
                firstName : "Christina",
                img : "../img/employees/christina.jpg",
                title : "CAD-ritare"
            }
        }
    },
    4: {
        "heading" : "RECEPTION",
        "about" : "WEB-avdelningen hanterar utvecklingen och underhållet av företagets webbplatser och webbapplikationer. De ansvarar för att säkerställa en användarvänlig och attraktiv online-närvaro. Dessutom utförs en del bildmanipulering och fotografering åt företag.",
        "hardware" : "Vanligtvis använder avdelningen relativt kraftfulla stationära datorer med tillräcklig processor- och minneskapacitet för webbutvecklingsuppgifter samt bildmanipulering.",
        "software" : "Mjukvaror som HTML, CSS, JavaScript, och ramverk som React, Angular eller Vue.js används för att utveckla och designa webbplatser och webbapplikationer. För fotografering och bildmanipulation använder vi program från Adobe, främst Photoshop och Lightroom.",
        "amountOfEmployees": 2,
        "img": "../img/departments/reception.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Ahmed",
                img : "../img/employees/ahmed.jpg",
                title : "CAD-ritare"
    
            },
            1: {
                firstName : "Christina",
                img : "../img/employees/christina.jpg",
                title : "CAD-ritare"
            }
        }
    }
}

let divDepartments = document.querySelectorAll(".department");

let textGuide = document.querySelector(".department-text-guide");
let depHeading = document.querySelector(".department-heading");

let depEmployees = document.querySelector(".employees");
let depImg = document.querySelector(".dep-img");
let arrows = document.querySelectorAll(".fa-chevron-down");

let infoTexts = document.querySelectorAll(".info-text");
let aboutText = document.querySelector(".about");
let hwText = document.querySelector(".hw");
let swText = document.querySelector(".sw");


let currentDepartmentInd = 0;


function infoClick(ind) {
    arrows[ind].classList.toggle('spin');
    infoTexts[ind+1].classList.toggle('hidden');
    

}


function showInformation(ind) {
    depHeading.innerText = DEPARTMENTS[ind].heading;
    depImg.src = DEPARTMENTS[ind].img;
    depImg.alt = "Bild på " + DEPARTMENTS[ind].heading;
    aboutText.innerText = DEPARTMENTS[ind].about;
    hwText.innerText = DEPARTMENTS[ind].hardware;
    swText.innerText = DEPARTMENTS[ind].software;

}
    







divDepartments.forEach((dep) => {
    dep.addEventListener("click", () => {

        divDepartments.forEach((dep) => {
            dep.style.backgroundColor = "#1A1C20";
            dep.style.border = "2px solid white";
            dep.style.color = "white";
        })
        dep.style.backgroundColor = "#f4f4f4";
        dep.style.border = "2px solid black";
        dep.style.color = "black";

        
        for(let i = 0; i < divDepartments.length; i++) {
            if(divDepartments[i] === dep) {
                textGuide.remove();
                console.log(i);
                currentDepartmentInd = i;
                showInformation(i);

                

            }
        }        
    });
});


function showEmployees() {

    for(let i = 0; i < 4; i++) {
        for(let n = 0; n < DEPARTMENTS[i].amountOfEmployees; n++) {
            let empDiv = document.createElement("div");
            let empImg = document.createElement("img");
            let empName = document.createElement("p");
            let empTitle = document.createElement("p");


            empDiv.className = "employee";
            empImg.src = DEPARTMENTS[i].EMPLOYEES[n].img;
            empName.innerText = DEPARTMENTS[i].EMPLOYEES[n].firstName;
            empTitle.innerText = DEPARTMENTS[i].EMPLOYEES[n].title;

            empDiv.appendChild(empImg);
            empDiv.appendChild(empName);
            empDiv.appendChild(empTitle);
    
            depEmployees.appendChild(empDiv);
            
            console.log(DEPARTMENTS[i].EMPLOYEES[n].firstName);
        }
    }

    addDepartmentInfo(departmentInd);
}

showInformation(0);
