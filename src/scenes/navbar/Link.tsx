import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

// In Other Code base you might se something like "interface" instead of "type" to specify the type of Props being received
// interface Props {
//     page: string
// }

// In TypeScript when you are receiving props, you must specify what the type of that prop is
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}



const Link = ({ page, selectedPage, setSelectedPage }: Props) => {9
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link