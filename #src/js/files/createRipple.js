function createRipple(event) {
    const button = event.currentTarget;
 
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
 
    const radius = diameter / 2;
 
    circle.style.left = event.clientX - button.getBoundingClientRect().x - radius + 'px'
    circle.style.top = event.clientY - button.getBoundingClientRect().y - radius + 'px'
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
 
    const ripple = button.getElementsByClassName("ripple")[0];
 
    if (ripple) {
       ripple.remove();
    }
 
    button.appendChild(circle);
 }
 
 const buttons = document.querySelector('.tickets__button');
 
 buttons.addEventListener("click", createRipple);