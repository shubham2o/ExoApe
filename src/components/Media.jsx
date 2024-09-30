const Media = () => {
    return (
        <div className="relative w-full h-[71vh] sm:h-[160vh] bg-white sm:pb-48 flex justify-center items-center overflow-hidden">
            <div className="relative w-[42%] sm:w-[26%] h-[48%] sm:h-[60%]">
                <div className="absolute -right-1/3 top-7 sm:top-16 w-20 sm:w-44 h-[7rem] sm:h-[16.5rem]">
                    <img src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -left-[62.5%] sm:-left-[72%] top-24 sm:top-40 w-[8.9rem] sm:w-[25rem] h-[5.5rem] sm:h-[14.5rem]">
                    <video src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4" type="video/mp4" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -left-[68.5%] sm:-left-[80%] -bottom-[20%] sm:-bottom-[39%] w-[8.5rem] sm:w-[25rem] h-[6rem] sm:h-[17rem]">
                    <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -right-[68.5%] sm:-right-[80%] -bottom-[20%] sm:-bottom-[59%] w-36 sm:w-96 h-[9rem] sm:h-[26.9rem]">
                    <video src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4" type="video/mp4" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
                </div>

                <img src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Media;