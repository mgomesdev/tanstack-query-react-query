import { Metadata } from "next";
import Provider from "../core/Provider";

export const metadata: Metadata = { title: "React Simple", description: "React Example: Simple" };

interface LayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return <Provider>{children}</Provider>;
}

export default Layout;
