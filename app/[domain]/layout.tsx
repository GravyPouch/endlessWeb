export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-gradient-to-r from-indigo-400 to-cyan-400 max-w-screen-lg my-5 mx-auto p-10 border-2 border-dashed ">
      {children}
    </div>
  );
}
