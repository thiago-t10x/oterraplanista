var answers = [
    "Lansing", "A",
    "Richmond", "B",
    "Little Rock", "C",
    "Phoenix", "C",
    "Tallahassee", "C",
    "Lincoln", "B",
    "Austin", "C",
    "Juneau", "D",
    "Honolulu", "B",
    "Columbus", "D"
];

function calcScore() {
    var results = {right: 0, wrong: 0, answered: [], unanswered: [], missed: []};
    $("form .tab").each(function(index) {
        var chosen = $(this).find("input:checked");
        if (chosen.length) {
            results.answered.push(index);
            if (chosen.val() == answers[(index * 2) + 1]) {
                results.right++;
                results.answered.push(index);
            } else {
                results.wrong++;
                results.missed.push(index);
            }
        } else {
            results.unanswered.push(index);
        }
    });
    return(results);
}

$("#buttonDiv").click(function() {
    var results = calcScore();
    var str = "Correct: " + results.right + ", Wrong: " + results.wrong + ", Unanswered: " + results.unanswered.length;
    $("#results").html(str);
});
