document.querySelector("textarea").focus();
document.querySelector("textarea").select();


function lowerCase() {
    let element = document.querySelector("textarea")
    let value = element.value.toLowerCase()

    element.value = value.replace(/[^a-z]/g, "")
}


