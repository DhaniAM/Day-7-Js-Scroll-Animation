const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", animate);

// Invoke immediately to show first 3 box
animate();

function animate() {
    const bottomLimit = window.innerHeight - 100; // 100 is half box height
        
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            box.innerHTML = "position from top: " + boxTop + "px";
    
            if(boxTop < bottomLimit) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
}