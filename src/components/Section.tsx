export function Section({ id, children, title, subtitle, white }: any) {
  return (
    <section
      id={id}
      className={`bg-${white ? "white" : "[#fafafa]"}  relative custom-padding`}
    >
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
    </section>
  );
}
