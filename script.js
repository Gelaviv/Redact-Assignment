function redactText() {
    var originalText = document.getElementById("originalText").value;
    var wordsToScramble = document.getElementById("wordsToScramble").value.split(" ");
    var startTime = new Date().getTime();

    var regex = new RegExp(wordsToScramble.join("|"), "gi");
    var scrambledText = originalText.replace(regex, function(match) {
        var scrambledWord = "";
        for (var i = 0; i < match.length; i++) {
            if (match[i].match(/[a-z]/i)) {
                scrambledWord += "*";
            } else {
                scrambledWord += match[i];
            }
        }
        return scrambledWord;
    });

    var endTime = new Date().getTime();
    var timeTaken = (endTime - startTime) / 1000;

    document.getElementById("scrambledText").innerText = "Scrambled Text:\n" + scrambledText;
    document.getElementById("stats").innerHTML = "Statistics:<br>" +
        "Words Scanned: " + originalText.split(/\s+/).length + "<br>" +
        "Words Matched: " + wordsToScramble.length + "<br>" +
        "Characters Scrambled: " + (scrambledText.length - originalText.length) + "<br>" +
        "Time Taken: " + timeTaken + " seconds";
}
