export const Footer: React.FC = () => {
  return (
    <footer className="flex py-20 w-full px-20 flex-col justify-center bg-[#1e1e1e] text-white">
      <h1 className="mr-20 flex items-center ">
        <span className="font-bold text-3xl tracking-widest">
          //NAGABELAJAR
        </span>
      </h1>
      <section className="flex flex-row border-b-2 border-t-2 border-l-2 border-white w-full justify-between">
        <div className="flex-row flex">
          <p className="flex items-center  border-r-2  border-white">
            <span className="px-12">Institut Teknologi Kalimantan</span>
          </p>
          <p className="flex items-center  border-r-2  border-white">
            <span className="px-12 font-bold text-[#bef000]">
              Ansar Fadillah
            </span>
          </p>
        </div>
        <div className="flex flex-row">
          <p className="flex items-center  border-r-2  border-white">
            <span className="p-2">Email</span>
          </p>
          <p className="flex items-center  border-r-2  border-white">
            <span className="px-24">LinkedIn</span>
          </p>
        </div>
      </section>
    </footer>
  );
};
