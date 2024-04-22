let divDepartments = document.querySelectorAll(".department");


const DEPARTMENTS = {
    0: 
    {
        "heading" : "CAD",
        "function" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 4,
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
        "function" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 3,
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
        "function" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
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
        "function" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
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
        "function" : "<qweqweqweqweqweqwe>",
        "hardware" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "software" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur, corrupti pariatur incidunt placeat cupiditate magnam iste earum doloremque ipsa sint esse ex. Consequuntur voluptatibus saepe adipisci optio illum maiores.",
        "amountOfEmployees": 2,
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
let textGuide = document.querySelector(".department-text-guide");


let depHeading = document.querySelector(".department-heading");
let depEmployees = document.querySelector(".department-employees");
let depInfo = document.querySelector(".department-info");

function clearDepartmentEmployees() {
    while(depEmployees.firstChild) {
        depEmployees.firstChild.remove();
    }
}

function addEmployees(departmentInd) {
    clearDepartmentEmployees();

    depEmployeesHeading = document.createElement("h3");


    for(let n = 0; n < DEPARTMENTS[departmentInd].amountOfEmployees; n++) {
        let empImg = document.createElement("img");
        let empName = document.createElement("p");
        let empTitle = document.createElement("p");
        empDiv = document.createElement("div");
        empDiv.className = "employee";
        empImg.src = DEPARTMENTS[departmentInd].EMPLOYEES[n].img;
        empName.innerText = DEPARTMENTS[departmentInd].EMPLOYEES[n].firstName;
        empTitle.innerText = DEPARTMENTS[departmentInd].EMPLOYEES[n].title;
        empDiv.appendChild(empImg);
        empDiv.appendChild(empName);
        empDiv.appendChild(empTitle);

        depEmployees.appendChild(empDiv);
    }

    addDepartmentInfo(departmentInd);

}

function addDepartmentInfo(departmentInd) {

    while(depInfo.firstChild) {
        depInfo.firstChild.remove();
    }

    
    let headingFunction = document.createElement("h3");
    headingFunction.innerText = "Det vi gör:";
    let textFunction = document.createElement("p");
    textFunction.innerText = DEPARTMENTS[departmentInd].function;

    depInfo.appendChild(headingFunction);
    depInfo.appendChild(textFunction);


    let headingHardware = document.createElement("h3");
    headingHardware.innerText = "Hårdvara:";
    let textHardware = document.createElement("p");
    textHardware.innerText = DEPARTMENTS[departmentInd].function;

    depInfo.appendChild(headingHardware);
    depInfo.appendChild(textHardware);


    let headingSoftware = document.createElement("h3");
    headingSoftware.innerText = "Mjukvara:";
    let textSoftware = document.createElement("p");
    textSoftware.innerText = DEPARTMENTS[departmentInd].function;

    depInfo.appendChild(headingSoftware);
    depInfo.appendChild(textSoftware);
}

function loadDepartmentDiv() {
    let initDiv = document.querySelector(".department-about");


    if(!initDiv) {
        depAboutDiv = document.createElement("div");
        depAboutDiv.className = "department-about";

        depEmpCont = document.createElement("div");
        depEmpCont.className = "emp-container";

        empHeading = document.createElement("h3");
        infoHeading = document.createElement("h3");
        empHeading.innerText = "Våra Anställda";
        infoHeading.innerText = "Om oss:";

        depInfoCont = document.createElement("div");
        depInfoCont.className = "info-container";


        depEmployees = document.createElement("div");
        depEmployees.className = "department-employees";

        depEmployeesHeading = document.createElement("div");
        depEmployeesHeading.innerText = "Anställda";
        depEmployeesHeading.className = "department-employees-heading";

        depEmpCont.appendChild(empHeading);
        depInfoCont.appendChild(infoHeading);

        depInfo = document.createElement("div");
        depInfo.className = "department-info";

        depEmpCont.appendChild(depEmployees);
        depInfoCont.appendChild(depInfo);


        depAboutDiv.appendChild(depEmpCont);
        depAboutDiv.appendChild(depInfoCont);

        let container = document.querySelector(".container");

        container.appendChild(depAboutDiv);
        

    }



}







divDepartments.forEach((dep) => {
    dep.addEventListener("click", () => {

        divDepartments.forEach((dep) => {
            dep.style.backgroundColor = "#1A1C20";
            dep.style.border = "1px solid white";
            dep.style.color = "white";
        })
        dep.style.backgroundColor = "#f4f4f4";
        dep.style.border = "1px solid black";
        dep.style.color = "black";

        
        for(let i = 0; i < divDepartments.length; i++) {
            if(divDepartments[i] === dep) {
                textGuide.remove();
                loadDepartmentDiv();
                //console.log(DEPARTMENTS[i]);
                depHeading.innerHTML = DEPARTMENTS[i].heading;
                addEmployees(i);
                break;

            }
        }        
    });
});