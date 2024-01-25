import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { SelectedPage, BenefitType } from '../../shared/types';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

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
                        seSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
}

export default Benefits