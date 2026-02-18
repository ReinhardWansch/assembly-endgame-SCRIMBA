
export default function GameInfo({ isWon, isLost, isGameOver, languages }) {
    const style = "flex flex-col items-center bg-red-900";
    let isLanguageDead= false;
    const gameOverText = getGameOverText();
    const statusText = getStatusText();

    function getGameOverText() {
        if (isLost) return "Game over!";
        if (isWon) return ("You win!");
        return " ";
    }

    function getStatusText() {
        let statusText = "Farewell ";
        languages.forEach((lang, i) => {
            if (lang.isDead) {
                isLanguageDead= true;
                if (i > 0) statusText += "& ";
                statusText += lang.name + " ";
            }
        });
        return statusText;
    }

    return (
        <div className={style}>
            <p>{isGameOver && gameOverText}</p>
            <p>
                {statusText}
                {isLanguageDead && <span>&#x1FAE1;</span>}
            </p>
        </div>
    )
}