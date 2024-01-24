type Props = {
    name: string,
    description: string,
    image: string,
}

const Class = ({ name, description, image}: Props) => {
  return (
    <div className="mr-8">
        <img src={image} alt="" className="h-[350px] w-[450px]"/>
    </div>
  )
}

export default Class