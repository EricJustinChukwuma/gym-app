import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitImage from "@/assets/man-removebg-2.png";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita id consequuntur, quas explicabo eaque commodi quae eligendi unde nobis."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita id consequuntur, quas explicabo eaque commodi quae eligendi unde nobis."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita id consequuntur, quas explicabo eaque commodi quae eligendi unde nobis."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="benefits" 
        className="mx-auto min-h-full w-5/6 py-20 md:mt-48"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER  */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <HText>MORE THAN JUST GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goal with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {
                    benefits?.map((benefit: BenefitType) => (
                        <Benefit 
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))
                }
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 justify-between items-center gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    src={BenefitImage} 
                    alt="benefits-page-graphic" 
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  before:content-abstractwaves before:-rotate-45">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5}}
                                transition={{ duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, x: 50},
                                    visible: { opacity: 1, x: 0}
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>.
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.3, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis exercitationem minus nobis deleniti dicta similique excepturi ut ipsum, tempore vero accusamus doloribus nesciunt adipisci atque explicabo cupiditate facilis maiores nihil ipsam voluptatum, iure officia. Facilis at ipsa odio assumenda recusandae?</p>

                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor amet nostrum nihil reprehenderit impedit ex libero. Molestias ab maiores odit eveniet temporibus alias reprehenderit?</p>
                    </motion.div>

                    
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits