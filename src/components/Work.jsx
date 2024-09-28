import { useState } from "react";

const Work = () => {
    const [elems, setElems] = useState([
        {
            name: "Columbia Pictures",
            description: "Celebrating a Century of Cinema",
            image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
            video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
        },
        {
            name: "Cambium",
            description: "Pioneering Sustainable Solutions",
            image: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
            video: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
        },
        {
            name: "Pixelflakes",
            description: "Architectural marketing agency",
            image: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
            video: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
        },
        {
            name: "Studio D",
            description: "Urban and Landscape Design",
            image: "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)",
            video: "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f"
        },
    ]);

    return (
        <div className="relative w-full bg-white">
            <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
                <div className="featured flex gap-2">
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-5">
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
                    </svg>

                    <h3 className="capitalize">Featured Projects</h3>
                </div>

                <div>
                    <h1 className="heading my-6 text-6xl sm:text-[15rem] tracking-tighter">Work</h1>
                    <p className="text-lg">Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                </div>

                <div className="elements mt-10 sm:flex sm:flex-wrap gap-5">
                    {elems.map(({ name, description, image, video }, index) =>
                        <div key={index} className="element w-full sm:w-[48%] mt-14">
                            <div className="video relative w-full h-[104vw] sm:h-[50vw] overflow-hidden">
                                <img src={image} className="w-full h-full object-cover hidden sm:block" />

                                <video src={video} type="video/mp4" autoPlay muted loop
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-[1.5] block sm:hidden"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold">{name}</h3>
                                <p className="capitalize opacity-40">{description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Work;