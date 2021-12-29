OpenMenu = () => {
    document.getElementById("Dropdown").classList.toggle("show");
}
SelectColor = (color) => {
    document.body.removeAttribute("Class");
    document.body.classList.toggle( color);
    document.getElementById("Dropdown").classList.toggle("show");
}