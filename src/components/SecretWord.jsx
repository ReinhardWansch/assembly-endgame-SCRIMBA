
export default function SecretWord({ letters, isGameOver }) {
    const style = "w-[2.5rem] h-[2.5rem] bg-letter-bg text-letter flex justify-center items-center border-b-1 border-color-letter";

    return (
        <div className="h-[2.5rem] flex gap-1">
            {letters.map(letterI => {
                const isShown = letterI.discovered || isGameOver;
                return <div key={letterI.id} className={style}>
                    {isShown && letterI.char}
                </div>
            })}
        </div>
    );
}