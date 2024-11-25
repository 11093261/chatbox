
const input = document.querySelector("input");
const form = document.querySelector("form");
const firstdiv = document.querySelector("#first");
const secondiv = document.querySelector("#second");


form.addEventListener("submit",(event) => {
    event.preventDefault();
    const text = input.value.trim();
    if(text !== ""){
        const p = document.createElement("p");
        p.textContent = text;
        firstdiv.appendChild(p);
        const usermessage = document.createElement("p");
        usermessage.textContent = text;
        secondiv.appendChild(usermessage);
        firstdiv.scrollTop = 23;

        

        
        
        
    };
    input.value = "";
    
})

const add = () =>{
    changetext = input.value.trim();
    if(changetext !== ""){
        const para = document.createElement("p");
        para.textContent = text;
        firstdiv.removeChild("para");
    }
}


