const Landing = () => {
    return (
        <div className="relative w-full h-[135vh] sm:h-[250vh]">
            <div className="picture fixed w-full h-full">
                <img src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            <div className="absolute top-0 w-full px-4 sm:px-16">
                <div className="text w-max-screen-2xl h-full mx-auto px-5 sm:px-10 text-white">
                    <div className="para mt-72 sm:mt-[35rem] sm:px-5 text-lg sm:text-3xl">
                        <p>Global digital design studio partnering</p>
                        <p>with brands and businesses that create</p>
                        <p> exceptional experiences where people </p>
                        <p>live, work, and unwind.</p>
                    </div>

                    <div className="headings mt-5 sm:mt-16 text-6xl sm:text-[15.5rem] font-medium tracking-tight leading-none">
                        <h1>Digital</h1>
                        <h1>Design</h1>
                        <h1>Experience</h1>
                    </div>

                    <div className="para2 sm:w-1/3 mt-10 sm:mt-20 sm:px-5 sm:text-xl">
                        <p>
                            We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand
                            and product in the digital space. Unforgettable journeys start with a click.
                        </p>

                        <a href="#" className="inline-block mt-10 border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1">The Studio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;