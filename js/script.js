departments = document.querySelectorAll(".department");


departments.forEach((dep) => {
    dep.addEventListener("click", () => {
        dep.style.backgroundColor = "red";
    });
});