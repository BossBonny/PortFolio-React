import { SelectedPage, ClassType } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import  Class  from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Whatever",
        description: "h sasdadfoiua sdg  awytasdasdr  aweotr ",
        image: image1,
    },
    {
        name: "Whatever1",
        image: image2,
    },
    {
        name: "Whatever2",
        description: "h sdfoiug a sdas da awytr  aweotr ",
        image: image3,
    },
    {
        name: "Whatever3",
        image: image4,
    },
    {
        name: "Whatever4",
        description: "h sdfoiug  awytr  a weotrasd  ",
        image: image5,
    },
    {
        name: "Whatever5",
        image: image6,
    },
]



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurProjects)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR PROJECTS</HText>
                        <p className="py-5">dcijwegi qwuery  qw8ert ghsdajsy dtfqwerijfbsdj
                            hftggqwreliy pq387rt asldifto8q3w fgpq84 brt80ps7dfs dad87 aosy dw68er
                            quwy 8eqwye q qw09ey q9w8 tkjzsadf oqw7 dgq789wt erlhxafgdo yqIUWRF 
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map( (item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses