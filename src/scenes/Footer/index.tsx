import Logo from "@/assets/heart-removebg-1.png";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div 
            className="justify-between mx-auto w-5/6 gap-16 md:flex"
        >
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Footer-Image-Logo" className="h-[60px] w-[150px] -ml-8"/>
                <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt omnis, neque id vero similique, amet adipisci perferendis reprehenderit aliquid deleniti maiores non vitae nihil!</p>
                <p>&copy; Evogym All Rights Reserved.</p>
            </div>

            <div className=" mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold text-xl">Links</h4>
                <p className="mt-5">Massa Orci Senectus</p>
                <p className="mt-5">Et gravida id et etiam</p>
                <p className="mt-5">Lorem, ipsum dolor.</p>
            </div>

            <div className=" mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold text-xl">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
                <p>(333)456-3489</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer