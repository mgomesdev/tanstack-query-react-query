import { Metadata } from "next";

export const metadata: Metadata = {
   title: "React Basic",
   description: "React Example: Basic",
};

interface LayoutReactBasicProps {
   children: React.ReactNode;
}

function LayoutReactBasic({ children }: LayoutReactBasicProps) {
   return <>{children}</>;
}

export default LayoutReactBasic;
