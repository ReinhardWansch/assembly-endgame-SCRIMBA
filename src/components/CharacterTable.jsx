
export default function CharacterTable({ characters, handleClick }) {
    const style= "h-[2.5rem] w-[2.5rem] border border-char-border flex justify-center items-center";

    return (
        <div className="w-[480px] flex justify-center gap-2 flex-wrap">
            {characters.map((character) =>
                <button
                    className= {style + ` bg-char-${character.status}`}
                    key={character.id}
                    onClick= {()=>handleClick(character.id)}
                >
                    {character.char}
                </button>
            )}
        </div>
    );
}