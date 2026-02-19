
export default function GameInfo({ isWon, isLost, isGameOver, isLoading, languages }) {
    const isSomeLanguageDead = languages.some(lang => lang.isDead);
    const gameOverText = isWon ? "You win!" : "Game over!";
    const styleCtnBase = "h-[50px] flex flex-col justify-center items-center text-letter ";
    const styleCtnBg = getBgColorStyle();


    function getStatusText() {
        const deadLanguagesTex = languages.filter(lang => lang.isDead)
            .map(lang => lang.name)
            .reduce((acc, current) => acc + " & " + current,);
        return "\"Farewell " + deadLanguagesTex + "\"";
    }

    function getBgColorStyle() {
        if (!isLoading && isWon) return "bg-info-bg-won";
        if (isLost) return "bg-info-bg-lost";
        if (isSomeLanguageDead) return "bg-info-bg-ingame";
        return "";
    }

    return (
        <div className={styleCtnBase + styleCtnBg}>
            {!isLoading && isGameOver && <p>{gameOverText}</p>}
            {isSomeLanguageDead && !isGameOver &&
                <p>{getStatusText()} &#x1FAE1; </p>}
            {isWon && !isLoading && <p>Well done! &#x1F389; </p>}
            {isLost && <p>You lose! Better start learning Assembly &#x1F62D; </p>}
        </div>
    )
}