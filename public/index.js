window.onkeydown = (event) => {
    if (event.key == "Enter") {
        const reminder = event.target.value;
        if (reminder != "") {
            const content = document.querySelector("#content");
            const reminderEl = document.createElement("div");
            reminderEl.classList.add("reminder");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            const span = document.createElement("span");
            span.innerHTML = reminder;
    
            reminderEl.appendChild(checkbox);
            reminderEl.appendChild(span);
            content.appendChild(reminderEl);

            event.target.value = "";
        }
    }
}