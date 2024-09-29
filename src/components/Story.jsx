const Story = () => {
    return (
        <div className="relative w-full h-[39rem] px-8 bg-black text-[#E0CCBB]">
            <div className="w-full pt-16 flex">
                <div className="w-[40%] text-7xl z-10 tracking-tighter">
                    <h1>Our</h1>
                    <h1>Story</h1>
                </div>

                <video src="../../public/video-6.mp4" type="video/mp4" autoPlay loop muted className="w-[60%]  object-cover aspect-video" />
            </div>

            <div className="w-full mt-11 text-xl flex justify-center items-center">
                <p className="w-76">The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
            </div>

            <div className="mt-7 flex items-center gap-2">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline w-3 h-3 bg-[#E0CCBB]"><circle cx="25" cy="25" r="23" /></svg>
                <p className=" underline underline-offset-4">Our Story</p>
            </div>

            <hr className="my-10" />

            <div className="w-full flex justify-between items-center">
                <div className="w-full flex flex-col gap-2">
                    <a className="w-fit">Work</a>
                    <a className="w-fit">Studio</a>
                    <a className="w-fit">News</a>
                    <a className="w-fit">Contact</a>
                </div>

                <div className="w-full flex flex-col gap-2">
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