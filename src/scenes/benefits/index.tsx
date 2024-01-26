import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { SelectedPage, BenefitType } from '../../shared/types';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BeneficPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="size-6" />,
        title: "State of ..",
        description: "NEdsajfhsdfgsduyfgsd tu mamá"
    },
    {
        icon: <UserGroupIcon className="size-6" />,
        title: "100's of ..",
        description: "NEdsajfhsdfgsduyfgsd tu  dasd uyaWE "
    },
    {
        icon: <AcademicCapIcon className="size-6" />,
        title: "Expert on ..",
        description: "NEdsajfhsdfgsduyfgsd tasasa asda sdat gsd"
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>More than Just...</HText>
                <p className="my-5 ">
                    djkghasygdiquydgyasud cualquier wqea po weon
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto"
                    alt="Benefits-page-graphic"
                    src={BeneficPageGraphic}
                />
                {/* DESCRIPTION */}
                <div className="">
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:-[1] before:content-abstractwaves">
                            <motion.div
                                className="md:my-5 md:w-3/5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>
                                    Millions of happy...ad.asdasd getting... {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPT */}
                    <motion.div
                        className="md:my-5 md:w-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-5">jhzsdtfiaw asieury qwer qwet rqwer q9w dsfapo8etr liqwgfuyasd 7weqtr qwoeyrt wq0dfy8gqw08e7trqwpe87rtwq0e8 tgclisdaytflashdfgpo8qwye tfñsadufyaspd8fty</p>
                        <p className="mb-5">jhzsdtfiaw asieury qwer qwet rqwer q9w dsfapo8etr liqwgfuyasd 7weqtr qwoeyrt wq0dfy8gqw08e7trqwpe87rtwq0e8 tgclisdaytflashdfgpo8qwye tfñsadufyaspd8fty</p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:place-content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage} >
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits