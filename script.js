const container = document.querySelector(".container");
divide_div(16);


const button = document.querySelector("button");
button.addEventListener("click", () => {
    const input = document.querySelector("input");
    const no_of_div = input.value;
    console.log(no_of_div);
    divide_div(no_of_div);
});

function divide_div(no_of_div) {
    container.innerHTML = '';

    for (let i = 0; i < no_of_div; i++) {
        for (let j = 0; j < no_of_div; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "boxes");
            div.style.border = "1px solid black";
            div.style.boxSizing= "border-box";
            div.style.width = `${Math.floor(800 / no_of_div)}px`;
            div.style.height = `${Math.floor(800 / no_of_div)}px`;
            container.appendChild(div);

    
            div.addEventListener("mouseenter", () => {
                let color = getColor();
                div.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            });
        }
    }
}

function get_num() {
    return Math.floor(Math.random() * 255) + 1;
}

const getColor = function () {
    let red = get_num();
    let blue = get_num();
    let green = get_num();
    return [red, blue, green];
}
