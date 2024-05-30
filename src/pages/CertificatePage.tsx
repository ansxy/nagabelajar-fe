import { useState } from "react";

export const CertificatePage: React.FC = () => {
  const [tab, setTab] = useState<string>("file");

  return (
    <div className="h-screen bg-[#ebd461] w-full flex items-center justify-center">
      <div className="w-[50%] h-[60%] bg-white flex flex-col border-2 border-black">
        <section className="flex border-b-2 border-black ">
          <ul className="flex flex-row gap-5 ">
            <li
              onClick={() => setTab("file")}
              className="flex border-r-2 border-black p-2"
            >
              <span>Upload File</span>
            </li>
            <li
              onClick={() => setTab("MD5")}
              className="border-r-2 border-black p-2 flex items-center"
            >
              <span>Blockchain Address</span>
            </li>
          </ul>
        </section>
        <section className=""></section>
      </div>
    </div>
  );
};
