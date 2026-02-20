
export default function ResetButton({ onClick }) {
    return (
        <button
            className="py-1 px-2 bg-resetButton cursor-pointer"
            onClick={onClick}
        >
            New Game
        </button>
    );
}