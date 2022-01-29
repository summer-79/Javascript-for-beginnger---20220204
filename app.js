const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const current = h1.className;
    
    if(current === "sexy-font active")
        newClass = "sexy-font";
    else
        newClass = "sexy-font active";
    h1.className = newClass;
}

h1.addEventListener("click", handleTitleClick);

