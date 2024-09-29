const Spread = () => {
    return (
        <div className="relative w-full h-[29rem] bg-white">
            <div className="max-w-screen-2xl h-32 mx-auto px-5 sm:px-10">
                <div className="w-full pt-5 flex justify-center items-start gap-2">
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-5">
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
                    </svg>

                    <h3>In the media</h3>
                </div>

                <div className="heading mt-10 text-6xl text-center font-medium tracking-tight leading-11">
                    <h1>Spread</h1>
                    <h1>the News</h1>
                </div>

                <div className="w-full mt-10 text-center text-[1.4rem] leading-7 flex justify-center items-center">
                    <p className="w-80">Find out more about our work on these leading design and technology platforms.</p>
                </div>

                <div className="mt-10 text-[19px] w-full flex justify-center items-center gap-2">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline w-2 h-2"><circle cx="25" cy="25" r="23" /></svg>
                    <span className="underline underline-offset-2 decoration-zinc-300">Browse all news</span>
                </div>
            </div>
        </div>
    )
}

export default Spread;