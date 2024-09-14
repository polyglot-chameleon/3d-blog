# 3d blog

## Setup

1. Copy your favourite font in typeface/json format to `public` folder.

2. Set `VITE_FONT_PATH=/yourFont.typeface.json` in `.env`.
    ```sh
    cat .env.exmpl > .env
    ```

3. Install deps
    ```sh
    bun install
    ```

4. Run dev server
    ```sh
    bun dev
    ```