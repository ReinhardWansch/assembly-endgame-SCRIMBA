import { nanoid } from "nanoid";

/*##########*/
/*## DATA ##*/
/*##########*/

const BASE_URL = "https://random-words-api.kushcreates.com/api"; 
const OPTIONS = "?language=de&length=5&type=uppercase&words=20"

export async function getWord() {
    return fetch(BASE_URL + OPTIONS)
        .then(res => res.json())
        .then(data => data.filter(wordObj=> !isContainingUmlauts(wordObj.word)))
        .then(filtered => filtered[0].word);
}

const textColorWhite = "#F9F4DA";
const textColorBlack = "#1E1E1E";

/*** LANGUAGES ***/
/*****************/

export const codingLanguages = [
    {
        id: nanoid(),
        name: "HTML",
        isDead: false,
        color: "#E2680F",
        textColor: textColorWhite
    },
    {
        id: nanoid(),
        name: "CSS",
        isDead: false,
        color: "#328AF1",
        textColor: textColorWhite
    },
    {
        id: nanoid(),
        name: "Javascript",
        isDead: false,
        color: "#F4EB13",
        textColor: textColorBlack
    },
    {
        id: nanoid(),
        name: "React",
        isDead: false,
        color: "#2ED3E9",
        textColor: textColorBlack
    },
    {
        id: nanoid(),
        name: "Typescript",
        isDead: false,
        color: "#298EC6",
        textColor: textColorWhite
    },
    {
        id: nanoid(),
        name: "Node.js",
        isDead: false,
        color: "#599137",
        textColor: textColorWhite
    },
    {
        id: nanoid(),
        name: "Python",
        isDead: false,
        color: "#FFD742",
        textColor: textColorBlack
    },
    {
        id: nanoid(),
        name: "Ruby",
        isDead: false,
        color: "#D02B2B",
        textColor: textColorWhite
    },
    {
        id: nanoid(),
        name: "Assembly",
        isDead: false,
        color: "#2D519F",
        textColor: textColorWhite
    }
];


/*###########*/
/*## UTILS ##*/
/*###########*/

function isContainingUmlauts(text) {
    const textUpper= text.toUpperCase()
    return textUpper.includes("Ä") || textUpper.includes("Ö") || textUpper.includes("Ü")
}

export function getAlphabetChars() {
    let chars = [];
    for (let i = 65; i <= 90; i++) {
        chars.push({
            id: nanoid(),
            char: String.fromCharCode(i),
            status: "open" //open, hit, fail
        });
    }
    return chars;
}

export function getWordLetters(word) {
    const wordArray = Array.from(word);
    return wordArray.map(charI => ({
        id: nanoid(),
        char: charI,
        discovered: false
    }));
}