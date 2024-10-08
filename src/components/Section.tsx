import { Element } from "react-scroll";

export function Section({ id, children, title, subtitle, white }: any) {
  return (
    <section
      id={id}
      // custom-padding
      className={`bg-${
        white ? "white" : "[#fafafa]"
      }  relative custom800:pt-[6rem] custom800:pb-[2rem] custom800:pr-[200px] custom800:pl-[200px] custom600:pr-[70px] custom600:pl-[70px] pr-[20px]  pl-[20px] pt-[6rem]
pb-[2rem]  `}
    >
      <Element name={`${{ id }}`}>
        <h2 className="text-center font-semibold  text-4xl">{title}</h2>
        <p className="text-center  text-[#757575] pt-3 mb-20">{subtitle}</p>
        {/* max-w-[968px] 1300px */}
        <div
          className="
      max-w-[968px] flex flex-col items-center justify-center
     mr-auto ml-auto"
        >
          {children}
        </div>
      </Element>
    </section>
  );
}
