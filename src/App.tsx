import { useEffect, useState } from "react";
import { Section } from "./components/Section";
import { FiGithub } from "react-icons/fi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { Project } from "./components/Project";

import perfilImg from "./assets/perfil.jpeg";
import reactImg from "./assets/reactIcon.png";
import nextImg from "./assets/nextIcon.png";
import tailwindImg from "./assets/tailwindIcon.png";
import sassImg from "./assets/sassIcon.png";
import jsImg from "./assets/jsIcon.png";
import tsImg from "./assets/typeIcon.png";
import nodeImg from "./assets/nodeIcon.png";
import graphqlImg from "./assets/graphqlIcon.png";

import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";
import { LogoImg } from "./components/LogoImg";

function App() {
  const [exitBox, setExitBox] = useState("h-[100vh] ");
  const [nameExit, setNameExit] = useState({
    first: "nameRotate ",
    second: "nameRotate2 ",
  });
  const [arrRight, setArrRight] = useState({
    item1: false,
    item2: false,
  });

  const btnCSS = [
    "duration-200 transition hover:text-[#BF9E69] ",
    "duration-500 transition hover:bg-[#BF9E69] hover:-translate-y-1 hover:scale-105 bg-[#201809] py-5 px-8 rounded-xl text-white",
  ];

  useEffect(() => {
    // setTimeout(() => ,)
    const timer = setTimeout(() => {
      // myFunction();
      setExitBox("boxToExit h-[0vh] ");
      setNameExit({
        first: "nameRotateReverse  ",
        second: "nameRotateReverse2  ",
      });

      setTimeout(() => {
        // myFunction();
        setExitBox("boxToExit h-[0vh] ");
        setNameExit({
          first: "  hidden",
          second: "  hidden",
        });
      }, 500);
    }, 3000);
  }, []);

  return (
    <div className={`relative  bg-[#fafafa] min-h-screen font-custom `}>
      <div
        // ${exitBox ? "boxToExit" : ""}
        className={`
          ${exitBox} z-40
        fixed  transition ease-in-out duration-500
        bg-black w-[100vw] flex items-center justify-center`}
      >
        <p className="z-50 h-[50px] text-white text-2xl font-semibold flex gap-2 overflow-hidden">
          <span className={`${nameExit.first} `}>Rodrigo Andrade,</span>
          <span className={`${nameExit.second}`}>Desenvolvedor</span>
        </p>
      </div>
      <div className="fixed bg-white w-screen z-30 flex justify-center py-4 ">
        <div className="max-w-[968px] w-full flex justify-between  ">
          <p className="font-semibold">Rodrigo Andrade</p>

          <ul className="flex items-center gap-5">
            <li>
              <a href="#home">a</a>
            </li>
            <li>
              <a href="#projects">a</a>
            </li>
            <li>
              <a href="#home">a</a>
            </li>
          </ul>
        </div>
      </div>
      <Section id="home">
        {/* grid-rows-[min-content_1fr_min-content] */}
        <div className="grid gap-4 grid-cols-[120px_1fr_1fr]">
          <div className=" ">
            <ul className="h-full flex flex-col gap-8 justify-center">
              <li className="flex w-[25px] ">
                <a
                  className={` ${btnCSS[0]}   hover:-translate-y-1 `}
                  href="https://contate.me/rodrigoandradecm"
                  target="_blank"
                >
                  <MdOutlineWhatsapp size={27} />
                </a>
              </li>
              <li className="flex w-[25px]">
                <a
                  className={` ${btnCSS[0]}    hover:-translate-y-1`}
                  target="_blank"
                  href="https://www.linkedin.com/in/rodrigo-andrade-5420b2277/"
                >
                  <SlSocialLinkedin size={27} />
                </a>
              </li>
              <li className="flex w-[25px]">
                <a
                  className={` ${btnCSS[0]}  hover:-translate-y-1  `}
                  target="_blank"
                  href="https://github.com/rodrigoacm10"
                >
                  <FiGithub size={27} />
                </a>
              </li>
            </ul>
          </div>

          <div className=" ">
            <h2 className="font-semibold text-5xl leading-snug mb-2">
              Rodrigo Andrade
            </h2>
            <p className="flex items-center gap-2 text-xl mb-4  ">
              <span className="block w-[100px] h-[1px] bg-black"></span>{" "}
              Front-End Developer
            </p>
            <p className="text-[#757575] mb-14">
              Bem-vindo ao meu site portfolio! Tenho 20 anos, sou desenvolvedor
              Full Stack apaixonado por tecnologia.
            </p>

            <button className={`${btnCSS[1]} `}>Fale Comigo</button>
          </div>

          <div className="  flex items-center justify-center">
            <img
              src={perfilImg}
              className="rounded"
              alt="foto Rodrigo Andrade"
            />
          </div>
        </div>
      </Section>

      <Section id="me" title="Sobre mim" subtitle="Introdução">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-start">
            <img src={perfilImg} className="rounded" alt="perfil" />
          </div>
          <div className="flex gap-10 flex-col">
            <p className="text-[#757575]">
              Olá, sou Thiago Paiva, um desenvolvedor Full Stack sempre em busca
              de aprendizado contínuo e pronto para enfrentar desafios
              tecnológicos. Minha paixão pela programação, habilidades de equipe
              e motivação para aprender me capacitam a entregar soluções de alta
              qualidade tanto no front-end quanto no back-end.
            </p>

            <p className="text-[#757575]">
              Além disso, também trabalho como freelancer, o que me permite
              colaborar em projetos empolgantes fora do meu trabalho principal.
              Estou ansioso para contribuir em projetos desafiadores, combinando
              minha paixão, habilidades e determinação para entregar soluções
              digitais de qualidade.
            </p>

            <div>
              <button className={`${btnCSS[1]}`}>Baixar Currículo</button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Habilidades" subtitle="Minhas habilidades">
        <div className=" py-10 flex flex-col items-center w-full bg-white rounded-xl border-[1.75px]">
          <h2 className="text-center font-semibold text-[21px] mb-6">
            Ferramentas que utilizo
          </h2>

          <div className="w-[80%] gap-10  flex items-center justify-center">
            {/* reactImg
nextImg
tailwindImg
sassImg
jsImg
tsImg
 nodeImg
graphqlImg */}
            <LogoImg img={reactImg} name={"reactJs"} />
            <LogoImg img={nextImg} name={"NextJs"} />
            <LogoImg img={tailwindImg} name={"TailwindCSS"} />
            <LogoImg img={sassImg} name={"SASS"} />
          </div>

          <div className="w-[80%] gap-10 mt-8 flex items-center justify-center">
            <LogoImg img={nodeImg} name={"Node"} />
            <LogoImg img={graphqlImg} name={"Graphql"} />
            <LogoImg img={jsImg} name={"JavaScript"} />
            <LogoImg img={tsImg} name={"TypeScript"} />
          </div>

          {/* <h2 className="text-center font-semibold text-[21px] mb-6">
            Front-end
          </h2>

          <div className="w-[80%] gap-10  flex items-center justify-center">
            

            <LogoImg img={tailwindImg} name={"TailwindCSS"} />
            <LogoImg img={sassImg} name={"SASS"} />
          </div> */}
        </div>
      </Section>

      <Section id="projects" title={"Projetos"} subtitle={"Meus projetos"}>
        <Project
          imgLeft={true}
          title="Sistema de Gerenciamento"
          text="Sistema de autenticação manualmente, que inclui funcionalidades como login, cadastro, recuperação de senha e um dashboard básico com a opção de alterar a senha do usuário."
          technologies={["a1", "a2"]}
          img={
            "https://thiagopaiva.vercel.app/static/media/imagem.114c1a593630b962b4a9.jpg"
          }
          link={"https://www.youtube.com/watch?v=-FONyYPsiCs&t=70s"}
        />

        <Project
          imgLeft={false}
          title="treste"
          text="aaaaaaaaaaaaaaaa"
          technologies={["a1", "a2"]}
          img={
            "https://thiagopaiva.vercel.app/static/media/imagem.114c1a593630b962b4a9.jpg"
          }
          link={"https://www.youtube.com/watch?v=-FONyYPsiCs&t=70s"}
        />
      </Section>

      <div className="-mt-20"></div>
      <Section title="Experiência" subtitle="Minha jornada pessoal">
        <div className="mb-20   ">
          <div className="w-full grid grid-cols-2  mb-10 ">
            {/*
             */}
            <p
              className={`${btnCSS[0]} text-xl font-medium flex items-center gap-2 place-self-end mr-5`}
            >
              <BsSuitcaseLg />
              Experiência
            </p>
            <p
              className={`${btnCSS[0]} text-xl font-medium ml-4 flex items-center gap-2 `}
            >
              <RiGraduationCapLine />
              Educação
            </p>
          </div>{" "}
          <div className="grid h-20 grid-cols-[1fr_80px_1fr] w-full">
            <div className="bg-slate-20 flex -mr-10 justify-end">
              <div className="max-w-[190px]">
                <h3 className="font-medium mb-1">Ciências da Computação</h3>
                <p className="text-[#757575] mb-4">Universidade Uninassau</p>
                <p className="flex items-center gap-2">
                  &#128197; Jan de 2023 - atualmente
                </p>
              </div>
            </div>
            <div className="bg-slate-40 relative flex flex-col items-center">
              <div className="rounded-full  bg-[#757575] w-[12px] h-[12px]"></div>
              <div className="bg-[#757575] h-full  absolute w-[1px]"></div>
            </div>
            <div className="bg-slate-60 flex justify-start">
              <div className="max-w-[190px]">
                <h3 className="font-medium mb-1">Ciências da Computação</h3>
                <p className="text-[#757575] mb-4">Universidade Uninassau</p>
                <p className="flex items-center gap-2">
                  &#128197; Jan de 2023 - atualmente
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="relative pt-10">
        <div className="absolute left-0 bg-[#757575] opacity-15 w-full h-[0.5px] bottom-0"></div>{" "}
      </div>

      <Section title="Contato" subtitle="Formas de contato" white={true}>
        <div className="grid gap-10 grid-cols-2 min-w-[600px]  mb-[475px]">
          <div className="flex flex-col items-center justify-start  bg-slate-20 min-w-[300px]">
            <h3 className="text-center text-[18px] mb-7 font-medium ">
              Entre em contato
            </h3>
            <div className="flex flex-col items-center justify-center mb-5 p-5 w-[300px] bg-white rounded-xl border-[1.75px]">
              <MdOutlineEmail size={28} className="mb-1" />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-[#757575] mb-5">
                thiagofellipe151@gmail.com
              </p>

              <a
                href="#"
                onMouseEnter={(e) =>
                  setArrRight({
                    item1: true,
                    item2: false,
                  })
                }
                onMouseLeave={(e) =>
                  setArrRight({
                    item1: false,
                    item2: false,
                  })
                }
                className={`text-[#757575] transition duration-200 flex text-sm items-center gap-2`}
              >
                Entrar em contato{" "}
                <FaArrowRight
                  className={`transition duration-200 ${
                    arrRight.item1 ? "translate-x-1 " : ""
                  }`}
                  size={12}
                />
              </a>
            </div>

            <div className="flex flex-col items-center justify-center mb-5 p-5 w-[300px] bg-white rounded-xl border-[1.75px]">
              <MdOutlineEmail size={28} className="mb-1" />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-[#757575] mb-5">
                thiagofellipe151@gmail.com
              </p>

              <a
                href="#"
                onMouseEnter={(e) =>
                  setArrRight({
                    item1: false,
                    item2: true,
                  })
                }
                onMouseLeave={(e) =>
                  setArrRight({
                    item1: false,
                    item2: false,
                  })
                }
                className={`text-[#757575] transition duration-200 flex text-sm items-center gap-2`}
              >
                Entrar em contato{" "}
                <FaArrowRight
                  className={`transition duration-200 ${
                    arrRight.item2 ? "translate-x-1 " : ""
                  }`}
                  size={12}
                />
              </a>
            </div>
          </div>
          <div className="bg-slate-40 min-w-[360px]">
            <form className="flex flex-col justify-start items-start      ">
              {/* w-72 rounded-md*/}
              <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="text-center text-[18px] font-medium ">
                  Envie-me uma mensagem
                </h3>

                <div className="relative">
                  <label className="absolute bg-white px-1 rounded left-5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className="rounded-xl mt-2 px-6 min-w-[360px] p-5 border-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <label className="absolute bg-white px-1 rounded left-5">
                    Nome
                  </label>
                  <input
                    placeholder="Digite seu nome"
                    className="rounded-xl mt-2 px-6 min-w-[360px] p-5 border-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div className="relative h-[175px]  ">
                  <label className="absolute bg-white px-1 rounded left-5">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Digite sua mensagem"
                    className="min-h-20 rounded-xl h-[175px] mt-2 px-6 min-w-[360px] p-5 border-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-start w-full mt-4">
                  <button type="submit" className={`${btnCSS}`}>
                    Enviar
                  </button>
                </div>
                {/* <textarea /> */}
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
