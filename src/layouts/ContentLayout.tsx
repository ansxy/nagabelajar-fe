import { ReactNode } from "react";
export const ContentLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex  flex-col justify-center items-center">{children}</div>
  );
};
