const h2 = document.createElement("h2");
h2.textContent = "..a website by Larswan Collider";

document.querySelector("body").appendChild(h2);

const swan = document.getElementById("swan");
const swanSrc = "https://previews.123rf.com/images/nataba/nataba1712/nataba171200045/91734319-portrait-of-a-beautiful-bird-swan-standing-on-an-isolated-white-background.jpg";
const gooseSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Birds_Illustrated_Canada_Goose_white_background.jpg/701px-Birds_Illustrated_Canada_Goose_white_background.jpg?20161103112757";


document.addEventListener('mouseover', toGoose());

//i think these are HTML events
//document.swan.onmouseover= toGoose(swan);
//document.swan.onmouseout= toSwan(swan);

function toGoose(img){
     img.setAttribute("src", `${gooseSrc}`);
   // return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Birds_Illustrated_Canada_Goose_white_background.jpg/701px-Birds_Illustrated_Canada_Goose_white_background.jpg?20161103112757"
    }

    
function toSwan(img){
    img.setAttribute("src", `${swanSrc}`)
}
*/