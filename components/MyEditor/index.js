import dynamic from "next/dynamic";

const MyEditorWithNoSSR = dynamic(import("./MyEditor"), { ssr: false });

export default MyEditorWithNoSSR;
