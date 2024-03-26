const cursor = document.querySelector('.cursor');
let timeout;

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");

    // Clear the previous timeout to prevent hiding the cursor
    clearTimeout(timeout);

    // Set a new timeout to hide the cursor after 1000ms
    timeout = setTimeout(() => {
        cursor.style.display = "none";
    }, 1000);
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// Show the cursor again on mouse movement
document.addEventListener('mousemove', () => {
    cursor.style.display = "block";
});
