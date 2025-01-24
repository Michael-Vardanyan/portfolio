document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".open-window");

    const popupWindow = document.querySelector(".window");
    const closePopupButton = document.querySelector(".close-popup");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const projectId = button.closest('.project').getAttribute('data-project');

            const project = await fetchProjectData(projectId);

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


const fetchProjectData = async (projectId) => {
    try {
        const response = await fetch(`https://portfolio-backend-z867.onrender.com/api/project/${projectId}`);
        if (!response.ok) {
            new Error('Failed to fetch project data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching project data:', error);
        return { title: "Unknown Project" };
    }
};

