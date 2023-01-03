import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import React from "react";

export default function MyEditor(props) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        simpleUpload: {
          uploadUrl: "/api/upload",
          withCredentials: true,
        },
      }}
      onChange={(event, editor) => {
        console.log(editor.getData());
      }}
    />
  );
}
