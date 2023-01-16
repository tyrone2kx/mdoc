import { ImgIcon } from "assets/icons";

interface IProps {
    image: any;
    name: string;
    occupation: string
}

const Card = ({image, occupation, name}: IProps) => {
  return (
    <div className="rounded bg-white flex-none p-10 py-12 w-[312px] ">
      <ImgIcon />

      <p className="text-darkBlue my-12">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </p>

      <div className="flex">
        <img src={image} />
        <div className="ml-4">
            <p className="font-bold text-darkBlue"> {name} </p>
            <p className="font-thin"> {occupation} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
