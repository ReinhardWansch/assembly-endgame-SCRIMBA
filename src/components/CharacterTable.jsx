
export default function CharacterTable({ characters, handleClick, isGameOver, isLoading }) {
    const isDisabled = isLoading || isGameOver;
    const styleBase = "h-[2.5rem] w-[2.5rem] border border-char-border flex justify-center items-center";
    const styleDisabled = isDisabled ? " opacity-20" : " cursor-pointer";
    const style = styleBase + styleDisabled;
    const bgStyles= {
        open: " bg-char-open",
        hit: " bg-char-hit",
        fail: " bg-char-fail"
    }

    return (
        <div className="w-[480px] flex justify-center gap-2 flex-wrap">
            {characters.map(charI => {
                const styleBg= bgStyles[charI.status];
                return <button
                    className={style + styleBg}
                    key={charI.id}
                    onClick={() => handleClick(charI.char, charI.id)}
                    disabled={isDisabled}
                >
                    {charI.char}
                </button>})}
        </div>
    );
}