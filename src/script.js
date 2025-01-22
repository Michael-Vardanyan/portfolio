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
                            <a href="https://todo-list.bymichael.dev" target="_blank">
                                Live Demo: Play around with it
                            </a>
                        </li>
                    </ul>
                </div>   
            `
        },

        2: {
            title: "Dog Glossary",
            description: `
                <div class="project-details">
                    <p class="description-text">
                        This project is a Dog Glossary using the <a href="https://dog.ceo/dog-api/" target="_blank"> Dog API </a>, allowing following features:
                    </p>
                    <ul class="function-list">
                        <li>Show Random Dog: Show a random dog image based in the glossary</li>
                        <li>Show Breed: Input a dog breed and click show breed</li>
                        <li>Show Sub-Breed: Showing sub-breeds of entered breed</li>
                        <li>Show All Breeds: Showing all breeds and sub-breeds in the glossary</li>
                    </ul>
                    <p class="technology-text">
                        Built using: <strong>HTML, CSS, and JavaScript</strong>.
                    </p>
                    <ul class="links-list">
                        <li>
                            <a href="https://github.com/Michael-Vardanyan/dog-glossary" target="_blank">
                                Source Code: View on GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://dog-glossary.bymichael.dev" target="_blank">
                                Live Demo: Play around with it
                            </a>
                        </li>
                    </ul>
                </div>   
            `
        },

        3: {
            title: "URL Shortener",
            description: `
                <div class="project-details">
                    <p class="description-text">
                        This project is a simple and functional URL Shortener application with the following features:
                    </p>
                    <ul class="function-list">
                        <li>Enter a valid URL and create a randomized shortened URL</li>
                        <li>Show the amount of times a link has been clicked with a counter</li>
                        <li>Delete a URL by pasting it in the input field and pressing delete</li>
                        <li>Delete all URLs by leaving the input field empty and pressing delete</li>
                        <li>Edit a URL by pressing the Edit button next to the link and saving it by pressing on save</li>
                    </ul>
                    <p class="technology-text">
                        Built using: <strong>HTML, CSS, and JavaScript</strong>.
                    </p>
                    <ul class="links-list">
                        <li>
                            <a href="https://github.com/Michael-Vardanyan/url-shortener" target="_blank">
                                Source Code: View on GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://url-shortener.bymichael.dev" target="_blank">
                                Live Demo: Play around with it
                            </a>
                        </li>
                    </ul>
                </div>   
            `
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