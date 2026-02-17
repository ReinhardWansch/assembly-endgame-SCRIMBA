
export default function CharacterTable({ characters, handleClick }) {
    const style= "h-[2.5rem] w-[2.5rem] border border-char-border flex justify-center items-center";

    function createCharacterButton(character) {
        const statusBgClass= {
            open: "bg-char-open",
            hit: "bg-char-hit",
            fail: "bg-char-fail"
        }[character.status];
        return <button
                    className= {`${style} ${statusBgClass}`}
                    key={character.id}
                    onClick= {()=>handleClick(character.char, character.id)}
                >
                    {character.char}
                </button>
    }

    return (
        <div className="w-[480px] flex justify-center gap-2 flex-wrap">
            {characters.map(createCharacterButton)}
        </div>
    );
}