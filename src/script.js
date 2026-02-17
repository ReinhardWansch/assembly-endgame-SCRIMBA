import { nanoid } from "nanoid";

/*##########*/
/*## DATA ##*/
/*##########*/

const BASE_URL = 'https://random-words-api.kushcreates.com/api';
const OPTION_GERMAN_WORD_ANINAL = '?language=de&category=animals&words=1&type=uppercase';

export async function getWord() {
    return fetch(BASE_URL + OPTION_GERMAN_WORD_ANINAL)
        .then(res => res.json())
        .then(data => data[0].word);
}

/*###########*/
/*## UTILS ##*/
/*###########*/

export function getAlphabetChars() {
    let chars = [];
    for (let i = 65; i <= 90; i++) {
        chars.push({
            id: nanoid(),
            char: String.fromCharCode(i),
            status: 'open' //open, hit, fail
        });
    }
    return chars;
}

export function getWordLetters(word) {
    const wordArray= Array.from(word);
    return wordArray.map(charI=>({
        id: nanoid(),
        char: charI,
        discovered: false
    }));
}