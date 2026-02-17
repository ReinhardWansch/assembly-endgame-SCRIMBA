
export default function Languages({ languages }) {
    const style = "px-2 py-1 relative"
    return (
        <div className="w-[365px] flex justify-center gap-1 flex-wrap">
            {languages.map(lang =>
                <div
                    key={lang.id}
                    className={style}
                    style={{ backgroundColor: lang.color, color: lang.textColor }}
                >
                    {lang.name}
                    {lang.isDead && <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/75">
                        &#x1F480;
                    </div>}


                </div>
            )}
        </div>
    );
}