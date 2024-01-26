import { SelectedPage, ClassesType } from "@/shared/types";
import image1 from "@/assets/Gym-Barbell.webp"
import image2 from "@/assets/Gym-Barbell-2.jpeg"
import image3 from "@/assets/Barbell-On-Floor.jpg";
import image4 from "@/assets/Gym-Packs-Man.jpeg"
import image5 from "@/assets/Six-Packs-Man.jpeg";
import image6 from "@/assets/Gym-Barbell-2.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassesType> = [
    {
        name: "Weight Training",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error debitis qui, at earum hic, nobis tempore, animi perspiciatis ab dolores! Veniam quod quasi distinctio!",
        image: image1,
    },
    {
        name: "Yoga Class",
        image: image2,
    },
    {
        name: "Abs Core Training",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error debitis qui, at earum hic, nobis tempore, animi perspiciatis ab dolores! Veniam quod quasi distinctio!",
        image: image3,
    },
    {
        name: "Strength Training",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error debitis qui, at earum hic, nobis tempore, animi perspiciatis ab dolores! Veniam quod quasi distinctio!",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error debitis qui, at earum hic, nobis tempore, animi perspiciatis ab dolores! Veniam quod quasi distinctio!",
        image: image6,
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage)=> void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum excepturi ea deserunt ullam, modi nemo, dolore debitis, ipsa ducimus sequi est vel incidunt doloribus.
                    </p>
                </div>
            </motion.div>

            <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap flex mr-10">
                    {
                        classes.map((item: ClassesType, index) => (
                            <Class 
                                key={`${item.name}-${index}`} 
                                name={item.name} 
                                description={item.description} 
                                image={item.image} 
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses