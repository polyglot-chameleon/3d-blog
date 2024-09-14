# 3d blog

## Setup

1. Create `public` folder
    ```sh
    mkdir public
    ```

2. Copy your favourite font in typeface/json format to `public` folder.

3. Set `VITE_FONT_PATH=/yourFont.typeface.json` in `.env`.
    ```sh
    cat .env.exmpl > .env
    ```

4. Install deps
    ```sh
    bun install
    ```

5. Run dev server
    ```sh
    bun dev
    ```