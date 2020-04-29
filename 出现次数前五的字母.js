function kth(files) {
    let combine = files[0].split("");
    let splited = [];
    let countArray = [];

    for (let i = 1; i < files.length; i++) {
        splited = files[i].split("");
        combine.push.apply(combine, splited);
    }
    
    combine = combine.sort();

    for (let i = 0; i < combine.length; i ++) {
        if (countArray[combine[i]] === undefined) {
            countArray[combine[i]] = 1;
        } else if (countArray[combine[i]] !== undefined) {
            countArray[combine[i]] = countArray[combine[i]] + 1;
        }
    }
    let wrap = [];
    for (let item in countArray) {
        let tmp = [];
        tmp.push(item);
        tmp.push(countArray[item]);
        wrap.push(tmp);
    }
    console.log(wrap.sort((a, b) => b[1] - a[1]));
    // console.log(countArray)
}

kth(["safasf","poi","fsfds"]);