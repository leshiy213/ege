document.getElementById("submit-button").addEventListener("click", function() {
    var answers = ["a", "a", "c"];
    var form = document.getElementById("quiz-form");
    var score = 0;

    for (var i = 0; i < answers.length; i++) {
        var radios = form.elements["q" + (i + 1)];
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked && radios[j].value === answers[i]) {
                score++;
            }
        }
    }

    var results = document.getElementById("results");
    results.innerHTML = "Правильных ответов: " + score + " из " + answers.length;
});
