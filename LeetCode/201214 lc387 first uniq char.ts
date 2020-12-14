// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// SOLUTION 1:
// Runtime: 104 ms, faster than 91.11% of TypeScript online submissions for First Unique Character in a String.
// Memory Usage: 42.3 MB, less than 60.00% of TypeScript online submissions for First Unique Character in a String.

function firstUniqChar(s: string): number {
    // let index = new Array<number>(s.length).fill(0);
    // let chars = new Array<number>(s.length)

    for (let i = 0; i<s.length; i++) {
        let char = s.charAt(i);
        let f = s.indexOf(char);
        let l = s.lastIndexOf(char);
        if (f === l) {
            return f;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"))