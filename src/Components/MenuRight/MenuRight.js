export function MenuRight() {
  return (
    <div className="bg-menuRightColor p-6">
      <section>
        <h1 className="text-titleColor  text-xl font-semibold tracking-widest mb-4">
          HABILIDADES TÉCINCAS
        </h1>

        <div className="flex flex-row gap-2 flex-wrap">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            className="w-8"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="w-8"
          />
        </div>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor  text-xl font-semibold tracking-widest mb-4">
          EXPERIÊNCIAS
        </h1>

        <div>
          <div className="flex ">
            <div className="pr-2">
              <span className="relative block w-4 h-4 bg-assets rounded-full mt-1"></span>
              <span className="block w-0.5 h-full bg-assets translate-x-[7px]"></span>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <h3 className="font-bold text-titleColor">
                Estagiário de analise e desenvolvimento de sistemas
              </h3>
              <p className="text-xs text-textColor">
                Canteiro Digital - Junho 2021
              </p>
              <p className="text-base text-textColor">
                Atual emprego, onde sou o único programador da startup, estou
                construindo seu web app com React Js e Firebase.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="pr-2">
              <span className="relative block w-4 h-4 bg-assets rounded-full mt-1"></span>
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold text-titleColor">Freelancer</h3>
              <p className="text-base text-textColor">
                Atuo como freelancer desde outubro, para ganhar uma renda extra,
                consequentemente ganhando mais conhecimento, pratica e
                experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor  text-xl font-semibold tracking-widest mb-4">
          CERTIFICAÇÕES
        </h1>

        <div>
          <div>
            <h1 className="font-medium text-titleColor text-lg">
              Programação para Web
            </h1>
            <p>Derhaus Treinamento - Palhoça - 72 horas - Agosto 2017</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h1 className="text-titleColor  text-xl font-semibold tracking-widest mb-4">
          IDIOMAS
        </h1>

        <div className="flex justify-around items-center">
          <p>Português | Nativo</p>
          <p>Inglês | Basico</p>
        </div>
      </section>
    </div>
  );
}
