
const myBox = document.getElementById("boxas");
let moveAmount = 20;
let x = 0;
let y = 0;


document.addEventListener("keydown", vyksmasOn);
document.addEventListener("keyup", vyksmasOf);


function vyksmasOn()
{
    myBox.textContent = "HIH";
    myBox.style.backgroundColor = "Blue";
}

function vyksmasOf()
{
    myBox.textContent = "HIH";
    myBox.style.backgroundColor = "Yellow"
}

document.addEventListener("keydown", event =>
{
    if(event.key.startsWith("Arrow"))
    {
        switch(event.key)
        {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
}
)