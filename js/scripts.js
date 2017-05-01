function drawTree(x) {
    for (var i = 1; i < x; i++) {
        var star = '*';
        for (j = 1; j < i; j++) {
            star = star + '*';
        }
        console.log(star);
    }
}
drawTree(11)
