import maskot from "../image/logo.png";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-orange-500">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    {/* <img src={maskot.src} height={40} width={100} alt="eye" /> 
                     */}
                </div>
            </div>
        </header>
    );
};
