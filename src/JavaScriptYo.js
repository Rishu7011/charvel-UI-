let btn = document.querySelector(".LOAD-MORE");
let connect = document.querySelectorAll("#LOAD-MORE");

btn.addEventListener("click", () => {
    let par = btn.parentElement;
    console.log("clicked");

    // Create spinner element
    let spinner = document.createElement("i");
    spinner.className = "fa-solid fa-spinner fa-spin fa-2xl text-[#fa0000]";

    // Replace button with spinner
    par.replaceChild(spinner, btn);

    // After 1 second, remove spinner and show hidden cards
    setTimeout(() => {
        par.remove(); // Remove the parent (button container)

        connect.forEach(el => {
            el.style.display = "flex";
        });
    }, 1000);
});
