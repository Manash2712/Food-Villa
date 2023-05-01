import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ?
                <button onClick={() => setIsVisible("")} className="cursor-pointer underline">Hide</button> :
                <button onClick={() => setIsVisible(title)} className="cursor-pointer underline">Show</button>
            }

            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    // const [sectionConfig, setSectionConfig] = useState({
    //     showAbout: true,
    //     showTeam: false,
    //     showCareers: true,
    //     showProduct: true,
    //     showDetails: true,
    // })
    // const [isVisible, setIsVisible] = useState(false);

    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={visibleSection === "about"}
                setIsVisible={(title) => {
                    setVisibleSection(title.toLowerCase())
                }}
            />

            <Section
                title={"Team"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={visibleSection === "team"}
                setIsVisible={(title) => {
                    setVisibleSection(title.toLowerCase())
                }}
            />

            <Section
                title={"Careers"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={visibleSection === "careers"}
                setIsVisible={(title) => {
                    setVisibleSection(title.toLowerCase())
                }}
            />
            <Section
                title={"Product"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={visibleSection === "product"}
                setIsVisible={(title) => {
                    setVisibleSection(title.toLowerCase())
                }}
            />

            <Section
                title={"Details"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
                isVisible={visibleSection === "details"}
                setIsVisible={(title) => {
                    setVisibleSection(title.toLowerCase())
                }}
            />
        </div>
    )
}

export default Instamart;