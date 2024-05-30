import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const CertificatePage: React.FC = () => {
  const [tab, setTab] = useState<string>("file");
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFileName(acceptedFiles[0].name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="h-screen bg-[#ebd461] w-full flex items-center justify-center">
      <div className="w-[50%] h-[60%] bg-white flex flex-col border-2 border-black">
        <section className="flex border-b-2 border-black">
          <ul className="flex flex-row gap-5">
            <li
              onClick={() => setTab("file")}
              className="flex border-r-2 border-black p-2 cursor-pointer"
            >
              <span>Upload File</span>
            </li>
            <li
              onClick={() => setTab("MD5")}
              className="border-r-2 border-black p-2 flex items-center cursor-pointer"
            >
              <span>Blockchain Address</span>
            </li>
          </ul>
        </section>
        {tab === "file" ? (
          <section className="flex flex-col items-center justify-center w-full h-full">
            <div
              {...getRootProps()}
              className={`flex justify-center items-center border-2 border-dashed w-[80%] h-[80%] ${
                isDragActive ? "bg-gray-200" : ""
              }`}
            >
              <input {...getInputProps()} />
              <p>
                {fileName
                  ? fileName
                  : "Drop file here, or click to select file"}
              </p>
            </div>
          </section>
        ) : (
          <section className="flex flex-row items-center justify-center w-full h-full">
            <span className="flex">
              <input
                placeholder="Address Certificate"
                className="outline-none w-full border-gray-400 border-2 px-5 py-2 rounded-l-full"
              />
              <button className="bg-green-500 px-5">Verified</button>
            </span>
            {/* Add your blockchain address input form here */}
          </section>
        )}
      </div>
    </div>
  );
};
