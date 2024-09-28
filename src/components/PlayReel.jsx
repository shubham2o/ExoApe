const PlayReel = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-96 aspect-video overflow-hidden">
                <video src=" https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
                    type="video/mp4" autoPlay muted loop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-1.2 opacity-50 aspect-video"
                />

                <svg viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 text-white opacity-60">
                    <circle opacity="0.4" cx="43" cy="43" r="41" stroke="currentColor"></circle>
                    <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="overlay absolute w-full h-full py-14 text-white flex flex-col justify-between">
                <div className="w-full pt-5 flex justify-center items-start gap-2">
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-5">
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
                    </svg>

                    <h3>Work in motion</h3>
                </div>

                <h1 className="w-full flex justify-center gap-32 sm:gap-[28rem]">
                    <div className="text-6xl sm:text-9xl font-medium">Play</div>
                    <div className="text-6xl sm:text-9xl font-medium">Reel</div>
                </h1>

                <div className="w-full px-10 text-center">
                    <p>Our work is best experienced in motion. Don’t</p>
                    <p>forget to put on your headphones.</p>
                </div>
            </div>
        </div>
    )
}

export default PlayReel;

