import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactPageGraphic from "@/assets/Six-Packs-Man.jpeg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 
    px-5 py-3 placeholder-white outline-none`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any)=> {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault()
        }
    };


    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span>{" "} TO GET IN SHAPE
                    </HText>
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat nostrum possimus quae laboriosam magnam amet alias consequuntur, dolore nam, magni laudantium vero doloremque omnis. Ullam, corrupti, veritatis minima mollita.</p>
                </motion.div>
                    
                {/* FORM & IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, y: 50},
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/f47fded9dbbd0d969f59bc209da99e87"
                            method="POST"
                        >
                            <input 
                                className={inputStyles} 
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This Field is Required"}
                                    {errors.name.type === "maxLength" && "Max length is a 100 characters"}
                                </p>
                            )}

                            <input 
                                className={inputStyles} 
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This Field is Required"}
                                    {errors.email.type === "pattern" && "Invalid email address"}
                                </p>
                            )}

                            <textarea 
                                className={inputStyles} 
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.Message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.Message.type === "required" && "This Field is Required"}
                                    {errors.Message.type === "maxLength" && "Max length is a 2000 characters"}
                                </p>
                            )}

                            {/* BUTTON */}
                            <button 
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div 
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, y: 50},
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <div className="md:before:content-evolveText w-full before:absolute before:-bottom-32 before:-right-10 before:z-[-1]">
                            <img src={ContactPageGraphic} alt="contact-us-page-graphic" className='w-full h-[400px]'/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs