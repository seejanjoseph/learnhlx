export default function decorate(block) { 
    console.log(block);
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const avatar = document.createElement("div");
            avatar.innerText = "AV";
            avatar.classList.add('avatar')
            col.appendChild(avatar);
        });
      });
}
  