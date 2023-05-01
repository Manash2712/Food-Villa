import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ?
                <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button> :
                <button onClick={() => setIsVisible(true)} className="cursor-pointer underline">Show</button>
            }

            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareers: true,
        showProduct: true,
        showDetails: true,
    })
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={sectionConfig.showAbout}
                setIsVisible={() => {
                    setSectionConfig({
                        showAbout: true,
                        showTeam: false,
                        showCareers: false,
                        showProduct: false,
                        showDetails: false,
                    })
                }}
            />

            <Section
                title={"Team Instamart"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={sectionConfig.showTeam}
                setIsVisible={() => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: true,
                        showCareers: false,
                        showProduct: false,
                        showDetails: false,
                    })
                }}
            />

            <Section
                title={"Careers"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={sectionConfig.showCareers}
                setIsVisible={() => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareers: true,
                        showProduct: false,
                        showDetails: false,
                    })
                }}
            />
            <Section
                title={"Product"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={sectionConfig.showProduct}
                setIsVisible={() => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareers: false,
                        showProduct: true,
                        showDetails: false,
                    })
                }}
            />

            <Section
                title={"Details "}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={sectionConfig.showDetails}
                setIsVisible={() => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareers: false,
                        showProduct: false,
                        showDetails: true,
                    })
                }}
            />
        </div>
    )
}

export default Instamart;