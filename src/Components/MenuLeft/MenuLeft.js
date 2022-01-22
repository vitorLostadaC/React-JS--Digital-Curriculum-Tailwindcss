import perfilPhoto from "../../Assets/images/displayPhoto.jpeg";
import { BiMapPin } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

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

      <section className="mt-8">
        <h1 className="text-titleColor  text-xl font-semibold tracking-widest">
          SOCIAL
        </h1>

        <div className="flex gap-2 items-center mt-4 group hover:cursor-pointer">
          <FiYoutube
            size={19}
            className="text-textColor group-hover:text-hoverLink"
          />
          <a
            className="text-textColor text-sm group-hover:text-hoverLink"
            href="https://www.youtube.com/channel/UCSWhO4BUp3e8WjFv35gtxag"
            target="_blank"
          >
            Vitor Cunha Code
          </a>
        </div>
        <div className="flex gap-2 items-center mt-2 group hover:cursor-pointer">
          <AiFillGithub
            size={19}
            className="group-hover:text-hoverLink text-textColor"
          />
          <a
            className="group-hover:text-hoverLink text-textColor text-sm "
            href="https://github.com/vitorLostadaC"
            target="_blank"
          >
            vitorLostadaC
          </a>
        </div>
        <div className="flex gap-2 items-center mt-2 group hover:cursor-pointer">
          <IoLogoLinkedin
            size={19}
            className="text-textColor group-hover:text-hoverLink"
          />
          <a
            className="text-textColor text-sm group-hover:text-hoverLink"
            href="https://www.linkedin.com/in/vitorlostada/"
            target="_blank"
          >
            vitorlostada
          </a>
        </div>
      </section>
    </div>
  );
}
