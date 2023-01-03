import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import React from "react";

export default function MyEditor(props) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={
        {
          // input your configurations..
        }
      }
      data={props.data}
      onChange={props.onChange}
    />
  );
}
