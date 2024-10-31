import { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
  clas?: string;
};

const Container = ({children,clas} : ContainerProps) => {
  return (
    <div className={`${clas}" max-w-7xl 3xl:max-w-[100rem] mx-auto px-4"`} >
      {children}
    </div>
  );
};

export default Container;
