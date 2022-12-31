import React from "react";
import "./App.css";
import Box from "./Box";

const img1 = (<svg width="100" height="100" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="113" height="113" rx="32" fill="#E9F3FF" />
    <rect x="29" y="29" width="55" height="55" rx="10" fill="#008DF5" />
</svg>
)

const img2 = (<svg width="100" height="100" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="113" height="113" rx="32" fill="#FFE9F3" />
    <circle cx="57" cy="57" r="33" fill="white" />
</svg>
)

const img3 = (<svg width="100" height="100" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="113" height="113" rx="56.5" fill="#FFE9E9" />
</svg>


)

const arrow = (<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6025 0.173739C10.388 -0.057913 10.031 -0.057913 9.809 0.173739C9.5945 0.397565 9.5945 0.770087 9.809 0.993391L13.8325 5.19183H0.5555C0.246 5.19235 0 5.44904 0 5.772C0 6.09496 0.246 6.36 0.5555 6.36H13.8325L9.809 10.5506C9.5945 10.7823 9.5945 11.1553 9.809 11.3786C10.031 11.6103 10.3885 11.6103 10.6025 11.3786L15.5785 6.18626C15.8005 5.96243 15.8005 5.58991 15.5785 5.36661L10.6025 0.173739Z" fill="#545D7A" />
</svg>
)
const App = () => {
    return (
        <>
            <div className="container__App">
                <div className="heading_and_pera">
                    <div className="heading">
                        <div>Startup Tools</div>
                    </div>
                    <div className="pera">
                        <p>There are a number of startup tools and resources available that help in minimizing the startup costs and assist in saving precious time.</p>
                    </div>
                </div>
                <div className="box__container_in_App">
                    <Box
                        img={img1}
                        heading='Intercom'
                        pera='A new and better way to acquire, engage and retain customers.'
                        button='Sing Up'
                        button_arrow={arrow}
                    />

                    <Box
                        img={img2}
                        heading='Hotjar'
                        pera='Everything your team needs to uncover insights and make the right changes.'
                        button='Try it free!'
                        button_arrow={arrow}
                    />

                    <Box
                        img={img3}
                        heading='Fullstory'
                        pera='Solve problems, find answers, and fine-tune your customer experience with FullStory.'
                        button='Get a demo'
                        button_arrow={arrow}
                    />
                </div>
                <div className="button_App">
                    <button>View All</button>
                    </div>
            </div>
        </>
    );
}

export default App;