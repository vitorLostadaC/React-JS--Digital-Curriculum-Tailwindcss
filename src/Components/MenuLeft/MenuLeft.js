import perfilPhoto from "../../Assets/images/displayPhoto.jpeg";
import { BiMapPin } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import {
  BsTelephone,
  BsFillLightbulbFill,
  BsFillMoonFill,
} from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { useTheme } from "../hooks/useTheme/useTheme";

export function MenuLeft() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sm:bg-menuLeftColor bg-menuRightColor sm:dark:bg-darkMenuLeftColor dark:bg-darkMenuRightColor p-6">
      <section>
        {theme === "dark" ? (
          <BsFillLightbulbFill
            color="#fff"
            size={25}
            onClick={() =>
              theme === "ligth" ? setTheme("dark") : setTheme("ligth")
            }
            className="cursor-pointer ml-auto"
          />
        ) : (
          <BsFillMoonFill
            size={25}
            onClick={() =>
              theme === "ligth" ? setTheme("dark") : setTheme("ligth")
            }
            className="cursor-pointer ml-auto"
          />
        )}

        <div className="w-32 h-32 overflow-hidden rounded-full mx-auto flex justify-center items-center ">
          <img src={perfilPhoto} />
        </div>

        <h1 className="mt-2 font text-2xl text-center font-semibold text-titleColor dark:text-darkTitleColor">
          Vitor Lostada da Cunha
        </h1>
        <h3 className="mt-2 text-center font-medium text-titleColor dark:text-darkTitleColor">
          Programador
        </h3>

        <div className="mt-4 flex flex-col gap-4 text-base">
          <div className="flex gap-2 items-center">
            <BiMapPin
              size={20}
              className="text-textColor dark:text-darkTextColor"
            />
            <p className="text-textColor dark:text-darkTextColor">
              Santa Catarina, SC
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <MdOutlineEmail
              size={19}
              className="text-textColor dark:text-darkTextColor"
            />
            <p className="text-textColor dark:text-darkTextColor">
              vitorlostada@hotmail.com
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephone
              size={18}
              className="text-textColor dark:text-darkTextColor"
            />
            <p className="text-textColor dark:text-darkTextColor">
              +55 (48) 99634-1180
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor dark:text-darkTitleColor  text-xl font-semibold tracking-widest">
          SOCIAL
        </h1>

        <div className="flex gap-2 items-center mt-4 group hover:cursor-pointer">
          <FiYoutube
            size={19}
            className="text-textColor dark:text-darkTextColor group-hover:text-hoverLink"
          />
          <a
            className="text-textColor dark:text-darkTextColor text-sm group-hover:text-hoverLink"
            href="https://www.youtube.com/channel/UCSWhO4BUp3e8WjFv35gtxag"
            target="_blank"
          >
            Vitor Cunha Code
          </a>
        </div>
        <div className="flex gap-2 items-center mt-2 group hover:cursor-pointer">
          <AiFillGithub
            size={19}
            className="group-hover:text-hoverLink text-textColor dark:text-darkTextColor"
          />
          <a
            className="group-hover:text-hoverLink text-textColor dark:text-darkTextColor text-sm "
            href="https://github.com/vitorLostadaC"
            target="_blank"
          >
            vitorLostadaC
          </a>
        </div>
        <div className="flex gap-2 items-center mt-2 group hover:cursor-pointer">
          <IoLogoLinkedin
            size={19}
            className="text-textColor dark:text-darkTextColor group-hover:text-hoverLink"
          />
          <a
            className="text-textColor dark:text-darkTextColor text-sm group-hover:text-hoverLink"
            href="https://www.linkedin.com/in/vitorlostada/"
            target="_blank"
          >
            vitorlostada
          </a>
        </div>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor dark:text-darkTitleColor  text-xl font-semibold tracking-widest">
          PERFIL
        </h1>

        <p className="text-textColor dark:text-darkTextColor text-justify mt-4">
          Olá me chamo Vitor. Atualmente estou cursando a faculdade e
          estagiando. Adoro aprender e sempre me colocar em situações de
          desconforto, pois acredito que assim aprendo melhor assim.
        </p>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor dark:text-darkTitleColor  text-xl font-semibold tracking-widest mb-4">
          FORMAÇÃO
        </h1>

        <div>
          <div className="flex ">
            <div className="pr-2">
              <span className="relative block w-4 h-4 bg-assets rounded-full mt-1"></span>
              <span className="block w-0.5 h-full bg-assets translate-x-[7px]"></span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="font-bold text-titleColor dark:text-darkTitleColor">
                Ensino médio integrado - Técnico em programação
              </h3>
              <p className="text-base text-textColor dark:text-darkTextColor">
                Sesi Senai
              </p>
              <p className="text-xs text-textColor dark:text-darkTextColor">
                2018 - 2020
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="pr-2">
              <span className="relative block w-4 h-4 bg-assets rounded-full mt-1"></span>
              <span className="block w-0.5 h-16 bg-assets translate-x-[7px]"></span>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold text-titleColor dark:text-darkTitleColor">
                Ciências da Computação
              </h3>
              <p className="text-base text-textColor dark:text-darkTextColor">
                Univali
              </p>
              <p className="text-xs text-textColor dark:text-darkTextColor">
                2021 - 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
