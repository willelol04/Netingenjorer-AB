

const DEPARTMENTS = {
    0: 
    {
        "heading" : "CAD",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 4,
        "img": "../img/banner.jpg",
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
        "heading" : "WEB",
        "about" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 3,
        "img": "../img/banner.jpg",

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
        "heading" : "SALARY",
        "about" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
        "img": "../img/banner.jpg",

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
        "heading" : "INVENTORY",
        "about" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
        "img": "../img/banner.jpg",

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
        "about" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
        "img": "../img/banner.jpg",

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

showEmployees();
