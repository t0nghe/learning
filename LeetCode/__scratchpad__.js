function firstUniqChar2(s) {
    let map;
    
    for (let i = 0; i <s.length; i++) {
        let char = s.charAt(i);
        if (char in map) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    for (let k in map) {
        if (map[k] == 1) {
            return s.indexOf(k);
        } else {
            return -1
        }
    }
}

console.log(firstUniqChar2("loveleetcode"))