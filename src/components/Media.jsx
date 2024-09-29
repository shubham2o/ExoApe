const Media = () => {
    return (
        <div className="relative w-full h-[71vh] bg-white flex justify-center items-center overflow-hidden">
            <div className="relative w-[42%] h-[48%]">
                <div className="absolute -right-1/3 top-7 w-20 h-[7rem]">
                    <img src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -left-[62.5%] top-24 w-[8.9rem] h-[5.5rem]">
                    <video src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4" type="video/mp4" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -left-[68.5%] -bottom-[20%] w-[8.5rem] h-[6rem]">
                    <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" className="w-full h-full object-cover aspect-video" />
                </div>

                <div className="absolute -right-[68%] -bottom-[35.8%] w-36 h-[9rem]">
                    <video src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4" type="video/mp4" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
                </div>

                <img src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Media;