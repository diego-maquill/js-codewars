// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var amount = 0;
    var forbiddenChar = 'a';

    if (S.includes("aaa")) {
        amount = -1
    }
    else {
        if (S.Length == 1) {
            if (S[0] == forbiddenChar)
                amount = 1; //A - > aA || Aa
            else
                amount = 4; // B - > aaBaa
        }
        else if (S.Length == 2) {
            if ((S[0] == forbiddenChar && S[1] != forbiddenChar) || (S[0] != forbiddenChar && S[1] == forbiddenChar))
                amount = 3; // A B || B A -> aABaa || aaBAa
        }

        else if (S.Length > 2)//prevnet  against empty Sing
        {
            if (S[0] != forbiddenChar)
                amount += 2;
            if (S[S.Length - 1] != forbiddenChar)
                amount += 2;

            for (var i = 0; i < S.Length - 2; i += 2) //search insert between
            {
                first = S[i];
                middle = S[i + 1];
                last = S[i + 2];


                if (first == forbiddenChar && middle == forbiddenChar && last == forbiddenChar)
                    amount += 0; // A A A - > cant


                else if (first == forbiddenChar && middle == forbiddenChar && last != forbiddenChar)
                    amount += 0;  // A A B  -> cant


                else if (first == forbiddenChar && middle != forbiddenChar && last == forbiddenChar)
                    amount += 2; // A B A  -> AaBaA


                else if (first == forbiddenChar && middle != forbiddenChar && last == forbiddenChar)
                    amount += 0; // B A A   -> cant


                else if (first == forbiddenChar && middle != forbiddenChar && last != forbiddenChar)
                    amount += 3; // A B B -> AaBaaB


                else if (first != forbiddenChar && middle == forbiddenChar && last != forbiddenChar)
                    amount += 1; // B A B  - > BaAB || BAaB


                else if (first != forbiddenChar && middle != forbiddenChar && last == forbiddenChar)
                    amount += 3;  // B B A  -> BaaBaA || BaaBAa


                else if (first != forbiddenChar && middle != forbiddenChar && last != forbiddenChar)
                    amount += 4; // B B B -> BaaBaa
            }
        }
    }
    return amount;
}

console.log(solution('dog'));
