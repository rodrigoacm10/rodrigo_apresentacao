type LogoImgProps = {
  img: String;
  name: String;
};

export function LogoImg({ img, name }: LogoImgProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={`${img}`}
        // className="rounded"
        alt="logo da tecnologia"
      />
      <p>{name}</p>
    </div>
  );
}
