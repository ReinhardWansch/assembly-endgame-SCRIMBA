
export default function SecretWord({ letters, isGameOver }) {
    const style = "w-[2.5rem] h-[2.5rem] bg-letter-bg text-letter flex justify-center items-center border-b-1 border-color-letter";

    return (
        <div className="h-[2.5rem] flex gap-1">
            {letters.map(letterI => {
                // const isShown = !isLoading && (letterI.discovered || isGameOver);
                const isShown = letterI.discovered || isGameOver;
                console.log(letterI.char + ": " + isShown + ", discovered: " + letterI.discovered); ///DEBUG
                return <div key={letterI.id} className={style}>
                    {isShown && letterI.char}
                </div>
            })}
        </div>
    );
}