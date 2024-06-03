export const Footer: React.FC = () => {
  return (
    <footer className="flex py-10 md:py-20 w-full px-5 md:px-20 flex-col justify-center bg-[#1e1e1e]  text-white">
      <h1 className="flex items-center mb-5 md:mb-0">
        <span className="font-bold text-2xl md:text-3xl tracking-widest">
          //NAGABELAJAR
        </span>
      </h1>
      <section className="flex flex-col md:flex-row border-2 p-2 border-white w-full justify-between">
        <div className="flex flex-col md:flex-row mb-5 md:mb-0">
          <p className="flex items-center border-b-2 md:border-b-0 md:border-r-2 border-white">
            <span className="px-5 md:px-12">Institut Teknologi Kalimantan</span>
          </p>
          <p className="flex items-center border-b-2 md:border-b-0 md:border-r-2 border-white">
            <span className="px-5 md:px-12 font-bold text-[#bef000]">
              Ansar Fadillah
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="flex items-center border-b-2 md:border-b-0 md:border-r-2 border-white">
            <span className="px-5 md:px-12">Email</span>
          </p>
          <p className="flex items-center">
            <span className="px-5 md:px-24">LinkedIn</span>
          </p>
        </div>
      </section>
    </footer>
  );
};
