document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".open-window");

    const popupWindow = document.querySelector(".window");
    const closePopupButton = document.querySelector(".close-popup");

    const projectDetails = {
        1: {
            title: "To-Do List",
            description: `
                <p class="description-text"> 
                    In this project I have built a To-Do List with different functionalities:
                    <ul class="function-list">
                        <li>
                            Creating a task
                        </li>     
                        <li>
                            Deleting a task, after it has been checked/crossed out
                        </li>
                        <li>
                            Keeping the tasks in a local storage, which keeps the state of the tasks saved.
                         </li>
                     </ul>
                    It involves using various technologies such as HTML, CSS, and JavaScript.
                </p> 
            `
        },

        2: {
            title: "Placeholder Project 2",
            description: ""
        },

        3: {
            title: "Placeholder Project 3",
            description: ""
        },

        4: {
            title: "Placeholder Project 4",
            description: ""
        }
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.closest('.project').getAttribute('data-project');

            const project = projectDetails[projectId];

            document.querySelector(".popup-title").textContent = project.title;
            document.querySelector(".popup-description").innerHTML = project.description;

            popupWindow.style.display = "flex";
        });
    });

    closePopupButton.addEventListener("click", () => {
        popupWindow.style.display = "none";
    })

    popupWindow.addEventListener("click", (event) => {
        if (event.target === popupWindow) {
            popupWindow.style.display = "none";
        }
    })
})