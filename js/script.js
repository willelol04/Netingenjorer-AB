

const DEPARTMENTS = {
    0: 
    {
        "heading" : "CAD/BERÄKNING",
        "about" : "CAD-avdelningen fokuserar på design och tekniska ritningar för produkter och projekt. De använder datorstödd design (CAD) för att skapa och modifiera tekniska ritningar och modeller.",
        "hardware" : "Avdelningen använder kraftfulla arbetsstationer med avancerade grafikkort och stora bildskärmar för att möjliggöra detaljerade och komplexa designuppgifter.",
        "desktop" : `Processor	Intel Core i9 13900K 3.0 GHz 68MB
        Internminne	Kingston 32GB (2x16GB) DDR5 4800MHz CL38 FURY Beast
        Hårddisk	Samsung 990 PRO M.2 NVMe SSD 1TB
        Moderkort	ASUS Prime Z690-A
        Grafikkort	PNY RTX 4000 20GB Ada Generation
        Chassi	Corsair 4000D Airflow Svart
        Processorkylare	NZXT Kraken 360 Svart
        Nätaggregat	Phanteks  AMP 1000W v2 Svart
        Operativsystem	Windows 11 Home Svensk 64-bit OEM`,
        "laptop" : `Acer Predator Helios 18`,
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
        "desktop" : `Chassi	Lian Li LANCOOL 216 Mesh Svart
        Grafikkort	Gigabyte GeForce RTX 4060 8GB Windforce OC
        Hårddisk	WD Black SN850X 1TB Gen 4
        Internminne	Corsair 32GB (2x16GB) DDR4 3200MHz CL16 Vengeance LPX Svart B
        Processor	AMD Ryzen 7 5700X 3.4 GHz 36MB
        Processorkylare	Arctic Liquid Freezer II 240
        Moderkort	MSI B550-A Pro
        Nätaggregat	Corsair RM850e ATX 3.0 850W
        Operativsystem	Windows 11 Home Svensk 64-bit OEM`,
        "laptop" : `Lenovo Legion Slim 5`,
        "software" : "Webbutveckling sker i Visual Studio Code. För fotografering och bildmanipulation använder vi program från Adobe, främst Photoshop och Lightroom.",
        "amountOfEmployees": 3,
        "img": "../img/departments/web.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Carla",
                img : "../img/employees/carla.jpg",
                title : "Fotograf"
    
            },
            1: {
                firstName : "Kris",
                img : "../img/employees/kris.jpg",
                title : "Videoredigerare & Bildmanipulation"
            },
            2: {
                firstName : "Vincent",
                img : "../img/employees/vincent.jpg",
                title : "Bildmanipulation"
            }
            
        }
    },
    2: {
        "heading" : "LÖN",
        "about" : "LÖN-avdelningen ansvarar för hanteringen av företagets löner och personalrelaterade ekonomiska frågor, inklusive skatter, bonusar och förmåner.",
        "hardware" : "Avdelningen använder vanligtvis datorer och kanske skrivare för att skriva ut rapporter och dokument relaterade till lönehantering.",
        "desktop" : `CPU	AMD Ryzen 7 5700G
        Chassi	Fractal Design Focus 2 Svart Solid
        Moderkort	Gigabyte A520M H
        RAM	Kingston Fury 16GB (2x8GB) DDR4 3200MHz CL 16 Beast
        SSD	Kingston Fury Renegade M.2 NVMe SSD Gen 4 1TB
        CPU Kylare* (Ingår i CPU)	Wraith Stealth
        PSU	Corsair CV650 650W Dual EPS
        OS	Windows 11 Home Svensk 64-bit OEM`,
        "laptop" : `Lenovo IdeaPad 1 - 14" | Ryzen 5 | 8GB | 512GB`,
        "software" : "Programvaran som används för att hantera de anställdas löner är Visma Lön.",
        "amountOfEmployees": 2,
        "img": "../img/departments/salary.jpg",
        EMPLOYEES : {
            0: {
                firstName : "DavidAdministration",
                img : "../img/employees/david.jpg",
                title : "Administration"
    
            },
            1: {
                firstName : "Sofia",
                img : "../img/employees/sofia.jpg",
                title : "Administration"
            }
        }
    },
    3: {
        "heading" : "LAGER OCH INKÖP",
        "about" : " LAGER-avdelningen ansvarar för att hantera företagets lager, inklusive mottagande, lagring, plockning, packning och leverans av varor.",
        "hardware" : "Avdelningen använder kanske streckkodsskannrar, handdatorer, gaffeltruckar och andra lagerhanteringsutrustningar beroende på verksamhetens storlek och behov.",
        "desktop" : `CPU	AMD Ryzen 7 5700G
        Chassi	Fractal Design Focus 2 Svart Solid
        Moderkort	Gigabyte A520M H
        RAM	Kingston Fury 16GB (2x8GB) DDR4 3200MHz CL 16 Beast
        SSD	Kingston Fury Renegade M.2 NVMe SSD Gen 4 1TB
        CPU Kylare* (Ingår i CPU)	Wraith Stealth
        PSU	Corsair CV650 650W Dual EPS
        OS	Windows 11 Home Svensk 64-bit OEM`,
        "laptop" : `Lenovo IdeaPad 1 - 14" | Ryzen 5 | 8GB | 512GB`,
        "software" : "Bokföring i lagret görs genom Microsoft Excel.",
        "amountOfEmployees": 2,
        "img": "../img/departments/inventory.jpg",

        EMPLOYEES : {
            0: {
                firstName : "Fredrik",
                img : "../img/employees/fredrik.jpg",
                title : "Lager"
    
            },
            1: {
                firstName : "Alf",
                img : "../img/employees/alf.jpg",
                title : "Truckförare"
            }
        }
    },
    4: {
        "heading" : "RECEPTION",
        "about" : "WEB-avdelningen hanterar utvecklingen och underhållet av företagets webbplatser och webbapplikationer. De ansvarar för att säkerställa en användarvänlig och attraktiv online-närvaro. Dessutom utförs en del bildmanipulering och fotografering åt företag.",
        "hardware" : "Vanligtvis använder avdelningen relativt kraftfulla stationära datorer med tillräcklig processor- och minneskapacitet för webbutvecklingsuppgifter samt bildmanipulering.",
        "desktop" : `CPU	AMD Ryzen 7 5700G
        Chassi	Fractal Design Focus 2 Svart Solid
        Moderkort	Gigabyte A520M H
        RAM	Kingston Fury 16GB (2x8GB) DDR4 3200MHz CL 16 Beast
        SSD	Kingston Fury Renegade M.2 NVMe SSD Gen 4 1TB
        CPU Kylare* (Ingår i CPU)	Wraith Stealth
        PSU	Corsair CV650 650W Dual EPS
        OS	Windows 11 Home Svensk 64-bit OEM`,
        "laptop" : `-`,
        "software" : "Mjukvaror som HTML, CSS, JavaScript, och ramverk som React, Angular eller Vue.js används för att utveckla och designa webbplatser och webbapplikationer. För fotografering och bildmanipulation använder vi program från Adobe, främst Photoshop och Lightroom.",
        "amountOfEmployees": 2,
        "img": "../img/departments/reception.jpg",
        
        EMPLOYEES : {
            0: {
                firstName : "Elsa",
                img : "../img/employees/elsa.jpg",
                title : "Receptionist"
    
            },
            1: {
                firstName : "Albert",
                img : "../img/employees/albert.jpg",
                title : "Receptionist"
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
let desktop = document.querySelector(".desktop");
let laptop = document.querySelector(".laptop");
let swText = document.querySelector(".sw");

let hamburger = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");


let currentDepartmentInd = 0;


function infoClick(ind) {
    arrows[ind].classList.toggle('spin');
    infoTexts[ind].classList.toggle('hidden');
    

}


function showInformation(ind) {
    depHeading.innerText = DEPARTMENTS[ind].heading;
    depImg.src = DEPARTMENTS[ind].img;
    depImg.alt = "Bild på " + DEPARTMENTS[ind].heading;
    aboutText.innerText = DEPARTMENTS[ind].about;
    hwText.innerText = DEPARTMENTS[ind].hardware + "\n\n PC: \n" + DEPARTMENTS[ind].desktop + "\n\n Laptop: \n" + DEPARTMENTS[ind].laptop;

    swText.innerText = DEPARTMENTS[ind].software;

}
    







divDepartments.forEach((dep) => {
    dep.addEventListener("click", () => {
        arrows.forEach((arrow) => arrow.classList.add('spin'));
        infoTexts.forEach((text) => text.classList.add('hidden'));

        divDepartments.forEach((dep) => {
            dep.style.backgroundColor = "#1A1C20";
            dep.style.border = "2px solid #F4F4F4";
            dep.style.color = "white";
        })
        dep.style.backgroundColor = "#f4f4f4";
        dep.style.border = "2px solid #1A1C20";
        dep.style.color = "black";

        
        for(let i = 0; i < divDepartments.length; i++) {
            if(divDepartments[i] === dep) {
                textGuide.remove();
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
            empTitle.style.fontStyle = "italic";

            empDiv.className = "employee";
            empImg.src = DEPARTMENTS[i].EMPLOYEES[n].img;
            empName.innerText = DEPARTMENTS[i].EMPLOYEES[n].firstName;
            empTitle.innerText = DEPARTMENTS[i].EMPLOYEES[n].title;

            empDiv.appendChild(empImg);
            empDiv.appendChild(empName);
            empDiv.appendChild(empTitle);
    
            depEmployees.appendChild(empDiv);
            
        }
    }

}

if(depHeading) {
    showInformation(0);

}

if(depEmployees) {
    showEmployees();

}

if(hamburger) {
    hamburger.addEventListener("click", () => nav.classList.toggle("block"));
}