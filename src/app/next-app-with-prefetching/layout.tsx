import ReactQueryProvider from "./ReactQueryProvider";

export default function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
