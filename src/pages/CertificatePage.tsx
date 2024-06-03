import { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSearchParams } from "react-router-dom";
import { BaseResponse } from "../types/BaseResponseType";
import axiosInstance from "../utils/axios";

export const CertificatePage: React.FC = () => {
  const [tab, setTab] = useState<string>("file");
  const [fileName, setFileName] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [validationResult, setValidationResult] = useState<string | null>(null);

  const getCertByAddress = async (address: string) => {
    setLoading(true);
    try {
      await axiosInstance
        .get(`/certificate/validate?address=${address}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data === "0x0000000000000000000000000000000000000000") {
            setValidationResult("Certificate is not valid");
          } else {
            setValidationResult("Certificate is valid");
          }
        })
        .catch((error: AxiosError<BaseResponse>) => {
          if (error.response) {
            setValidationResult(error.response.data.error.message);
          }
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    } catch (error) {
      console.error("Error getting certificate by address:", error);
      setLoading(false);
      setValidationResult("Certificate is not valid");
    }
  };

  useEffect(() => {
    if (searchParams.has("address")) {
      getCertByAddress(searchParams.get("address") || "");
    }
  }, [searchParams]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setLoading(true);
      setFileName(acceptedFiles[0].name);
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      axiosInstance
        .post<BaseResponse>("/certificate/validate", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setValidationResult(
            response.status === 200
              ? "Certificate is valid"
              : "Certificate is not valid"
          );
        })
        .catch((error: AxiosError<BaseResponse>) => {
          setValidationResult(
            error.response
              ? error.response.data.error.message
              : "Error verifying certificate"
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen  bg-[#ebd461] flex items-center w-full justify-center p-4">
      <div className="w-[50%] h-[20rem] bg-white flex flex-col border-2 border-black">
        <section className="flex border-b-2 border-black">
          <ul className="flex flex-row w-full">
            <li
              onClick={() => setTab("file")}
              className={`flex-1 p-2 cursor-pointer text-center ${
                tab === "file" ? "bg-gray-200" : ""
              }`}
            >
              Upload File
            </li>
            <li
              onClick={() => setTab("MD5")}
              className={`flex-1 p-2 cursor-pointer text-center ${
                tab === "MD5" ? "bg-gray-200" : ""
              }`}
            >
              Blockchain Address
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-full p-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p>Verifying certificate...</p>
            </div>
          ) : (
            <>
              {validationResult && (
                <div className="mb-4 text-center">
                  <p>{validationResult}</p>
                </div>
              )}
              {tab === "file" ? (
                <div
                  {...getRootProps()}
                  className={`flex justify-center items-center border-2 border-dashed w-full h-40 p-4 ${
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
              ) : (
                <div className="flex flex-col w-full">
                  <input
                    placeholder="Address Certificate"
                    onChange={(e) => setAddress(e.target.value)}
                    className="outline-none w-full border-gray-400 border-2 px-4 py-2 rounded mb-4"
                  />
                  <button
                    onClick={() => getCertByAddress(address)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Verify
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};
