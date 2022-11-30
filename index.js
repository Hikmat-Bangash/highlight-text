

let input = document.querySelector('#input');
let p = document.querySelector('p');
let original = p;

console.log(original)

// function definition
const highlight = ()=>{

  let inputValue = input.value;
  if(inputValue){

    let textToSearch = inputValue.replace(/[.*+?^${}()|\\]/g, "\\$&");  
    
    let pattern = new RegExp(`${textToSearch}`, "gi");
    
    p.innerHTML = p.textContent.replace(pattern, match=> `<span>${match}</span>`);
  }
  else{
    p.innerHTML = original.textContent;
  }
}

// onchange input event handler
input.addEventListener('input', highlight);