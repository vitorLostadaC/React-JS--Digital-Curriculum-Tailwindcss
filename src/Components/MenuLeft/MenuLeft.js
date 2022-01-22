import perfilPhoto from "../../Assets/images/displayPhoto.jpeg";
import { BiMapPin } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export function MenuLeft() {
  return (
    <div className="bg-menuLeftColor p-6">
      <section>
        <div className="w-32 h-32 overflow-hidden rounded-full mx-auto flex justify-center items-center ">
          <img src={perfilPhoto} />
        </div>

        <h1 className="mt-2 font text-2xl text-center font-semibold text-titleColor">
          Vitor Lostada da Cunha
        </h1>
        <h3 className="mt-2 text-center font-medium text-titleColor">
          Programador
        </h3>

        <div className="mt-4 flex flex-col gap-4 text-base">
          <div className="flex gap-2 items-center">
            <BiMapPin size={20} className="text-textColor" />
            <p className="text-textColor">Santa Catarina, SC</p>
          </div>

          <div className="flex gap-2 items-center">
            <MdOutlineEmail size={19} className="text-textColor" />
            <p className="text-textColor">vitorlostada@hotmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephone size={18} className="text-textColor" />
            <p className="text-textColor">+55 (48) 99634-1180</p>
          </div>
        </div>
      </section>
    </div>
  );
}
