type LogoImgProps = {
  img: String;
  name: String;
};

export function LogoImg({ img, name }: LogoImgProps) {
  return (
    <div className="flex lg:w-[100%] custom600:w-[65px] w-[52px] flex-col items-center gap-2">
      <img
        src={`${img}`}
        // className="rounded"
        alt="logo da tecnologia"
      />
      <p>{name}</p>
    </div>
  );
}
