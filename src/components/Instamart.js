import { useState } from "react";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
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
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
            />

            <Section
                title={"Team Instamart"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos temporibus nulla quis voluptates minima minus laudantium exercitationem officiis culpa soluta eveniet nihil commodi molestiae, deserunt ducimus beatae praesentium iusto cupiditate. Vitae voluptate voluptatum, temporibus laboriosam nisi, repudiandae inventore hic incidunt quam corrupti sint. Recusandae a veniam necessitatibus optio culpa omnis cupiditate. Pariatur facere soluta voluptas quasi porro atque temporibus!"
                }
            />

            <Section
                title={"Careers"}

            />
        </div>
    )
}

export default Instamart;