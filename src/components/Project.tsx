import { FiGithub } from "react-icons/fi";

type ProjectProps = {
  imgLeft: Boolean;
  title: String;
  text: String;
  technologies: string[];
  link: String;
  img: String;
};

export function Project({
  imgLeft,
  title,
  text,
  technologies,
  link,
  img,
}: ProjectProps) {
  return (
    <div className=" custom800:w-full w-[90px] custom600:ml-[0px] ml-[-50px]  mb-[125px] grid grid-cols-12 gap-2 ">
      <div
        className={`${imgLeft ? "project_image" : "project_image2"}  
     flex items-center justify-end`}
      >
        <a className="block   " target="_blank" href={`${link}`}>
          <div className="relative     ">
            <img
              className="  shadow-custom  rounded block w-full"
              src={`${img}`}
              alt="imagem do projeto"
            />
            <div className="absolute rounded inset-0 bg-black opacity-50 hover:opacity-0 transition duration-500"></div>
          </div>
        </a>
      </div>

      <div
        className={`${
          imgLeft ? "project_content text-right" : "project_content2"
        }  flex flex-col items-center justify-center   `}
      >
        <div>
          <p className="mb-2   text-[#BF9E69]">Destaque</p>
          <div
            className={`flex mb-9   items-center ${
              imgLeft ? "justify-end" : "justify-start"
            }  gap-2   `}
          >
            <p className="   text-2xl font-semibold items-center flex gap-2 ">
              {imgLeft ? (
                <a
                  className="block duration-300 transition hover:text-[#BF9E69]"
                  target="_blank"
                  href={`${link}`}
                >
                  <FiGithub size={30} />
                </a>
              ) : (
                ""
              )}{" "}
              {title}
              {imgLeft ? (
                ""
              ) : (
                <a
                  className="block duration-300 transition hover:text-[#BF9E69]"
                  target="_blank"
                  href={`${link}`}
                >
                  <FiGithub size={34} />
                </a>
              )}
            </p>
          </div>
          <div className=" shadow-custom bg-[#201809] mb-7 rounded p-8 pl-14 text-white relative text-[17px]">
            <p>{text}</p>
          </div>
          <div>
            <ul
              className={`flex ${
                imgLeft ? "justify-end" : "justify-start"
              }  gap-4 text-[16px] text-[#A1A1A1] `}
            >
              {technologies.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
