export default async function decorate(block) {
    
    const resp = await fetch('query-index.json');
    const json = await resp.json();
    const ulEl = document.createElement("ul");
    json.data.forEach(element => {
        console.log(element);
        
        const liEl = document.createElement("li");
        liEl.innerText = element.title;
           // avatar.classList.add('avatar')
           ulEl.appendChild(liEl);
           
    });
    block.appendChild(ulEl);
}