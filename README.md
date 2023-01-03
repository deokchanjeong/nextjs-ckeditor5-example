# CKEditor5 Example App in Next.js(with additional plugins)

Example app using CKEditor5 with additional plugins in Next.js

## Tutorials

### Install `@ckeditor/ckeditor5-react`

```bash
yarn add @ckeditor/ckeditor5-react
```

### Download Custom Editor

Download the customized package through the [online builder](<(https://ckeditor.com/ckeditor-5/online-builder/)>) provided by CKEditor.

### Install Custom Package

1. Move the downloaded package to the bottom of the `custom_modules` directory.
2. Add the dependency of the package to package.json as follows.
   ```javascript
   // package.json
   "dependency": {
    ...
    "@ckeditor/ckeditor5-build-classic": "file:custom_modules/ckeditor5-build-classic-custom",
    ...
   }
   ```
3. Install

   ```bash
   yarn install
   ```

### Using Component

```javascript
// components/MyEditor/MyEditor.js
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
```

For only client-side rendering

```javascript
// component/MyEditor/index.js
import dynamic from "next/dynamic";

const MyEditorWithNoSSR = dynamic(import("./MyEditor"), { ssr: false });

export default MyEditorWithNoSSR;
```

```javascript
// pages/index.js
import styles from "../styles/Home.module.css";
import MyEditor from "../components/MyEditor";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>CKEditor5 Example App in Next.js</h1>
      <MyEditor
        data={"<p>Hello world!</p>"}
        onChange={(event, editor) => {
          console.log(editor.getData());
        }}
      />
    </main>
  );
}
```

## Author

[deokchanjeong](https://github.com/deokchanjeong)
