import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head className="w-[100%] h-[100%]" />
      <title>Art list</title>
      
      <body className="antialiased bg-black w-[100%] h-[100%] selection:bg-white selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
