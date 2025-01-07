import { Metadata } from "next";
import Provider from "../core/Provider";

export const metadata: Metadata = {
   title: "React Basic",
   description: "React Example: Basic",
};

interface LayoutReactBasicProps {
   children: React.ReactNode;
}

function LayoutReactBasic({ children }: LayoutReactBasicProps) {
   return <Provider>{children}</Provider>;
}

export default LayoutReactBasic;
