document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".open-window");

    const popupWindow = document.querySelector(".window");
    const closePopupButton = document.querySelector(".close-popup");

    const projectDetails = {
        1: {
            title: "To-Do List",
            description: `
                <div class="project-details">
                    <p class="description-text">
                        This project is a simple and functional To-Do List application with the following features:
                    </p>
                    <ul class="function-list">
                        <li>Create tasks to stay organized</li>
                        <li>Delete tasks after they are checked off</li>
                        <li>Persist tasks using local storage to save their state</li>
                    </ul>
                    <p class="technology-text">
                        Built using: <strong>HTML, CSS, and JavaScript</strong>.
                    </p>
                    <ul class="links-list">
                        <li>
                            <a href="https://github.com/Michael-Vardanyan/todo-list" target="_blank">
                                Source Code: View on GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://todo.bymichael.dev" target="_blank">
                                Live Demo: Play around with it
                            </a>
                        </li>
                    </ul>
                </div>   
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