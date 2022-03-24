const images = [];

const imgOfBrad = document.createElement("img");
imgOfBrad.id = "headshot";
imgOfBrad.src = "images/headshot.jpg";
images.push(imgOfBrad)
document.querySelector("#imageOfBrad").appendChild(images[0]);

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const myName = document.getElementById("name");
myName.addEventListener("click", function onClick(event) {
    let color = generateRandomColor();
    event.target.style.color = color;
})

const aboutTitle = document.createElement("h2");
aboutTitle.className = "aboutTitle";
