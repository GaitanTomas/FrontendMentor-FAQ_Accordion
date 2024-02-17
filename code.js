let containers = document.querySelectorAll(".question-title-container");

containers.forEach(container => {
    container.addEventListener("click", function() {
        let article = container.closest("article");
        let answer = article.querySelector(".answer-container");
        let allAnswers = document.querySelectorAll(".answer-container");
        let img =  container.querySelector(".question-svg");
        if (answer.classList.contains("open")){
            answer.classList.replace("open", "close");
            img.setAttribute("src", "images/icon-plus.svg");
        }
        else{
            allAnswers.forEach(answer => {
                answer.classList.replace("open", "close");
                answer.previousElementSibling.querySelector(".question-svg").setAttribute("src", "images/icon-plus.svg");
            });
            answer.classList.replace("close", "open");
            img.setAttribute("src", "images/icon-minus.svg");
        };
    });
});
