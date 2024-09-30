const Story = () => {
    return (
        <div className="relative w-full h-[39rem] sm:h-[130vh] px-8 sm:pl-32 bg-black text-[#E0CCBB]">
            <div className="w-full sm:h-[70vh] pt-16 sm:pt-40 flex sm:gap-16">
                <div className="w-[28%] sm:w-auto text-7xl sm:text-[153.6px] sm:font-medium tracking-tight z-10">
                    <h1>Our</h1>
                    <h1>Story</h1>
                </div>

                <video src="../../public/video-6.mp4" type="video/mp4" autoPlay loop muted className="w-[77%] sm:w-full aspect-video" />
            </div>

            <div className="w-full mt-11 sm:my-11 text-xl sm:text-[26px] flex justify-center items-center">
                <p className="w-76 sm:mr-32">The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
            </div>

            <div className="mt-7 sm:mb-12 sm:text-lg flex items-center gap-2.5">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline w-3 h-3 bg-[#E0CCBB]"><circle cx="25" cy="25" r="23" /></svg>
                <p className="underline underline-offset-4">Our Story</p>
            </div>

            <hr className="my-10 sm:mr-32" />

            <div className="w-full sm:text-[17px] flex justify-between items-center">
                <div className="w-full flex flex-col gap-2.5">
                    <a className="w-fit">Work</a>
                    <a className="w-fit">Studio</a>
                    <a className="w-fit">News</a>
                    <a className="w-fit">Contact</a>
                </div>

                <div className="w-full sm:mr-32 flex flex-col gap-2.5">
                    <a className="w-fit">Behance</a>
                    <a className="w-fit">Dribbble</a>
                    <a className="w-fit">Twitter</a>
                    <a className="w-fit">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Story;