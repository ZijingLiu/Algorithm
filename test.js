function test() {
    let sum = 0;
    for (let i=1; i < 109; i ++) {
        if (i / 4 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
}
test(108);