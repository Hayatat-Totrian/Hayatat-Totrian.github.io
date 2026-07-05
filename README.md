# Tomoki Hayata — Personal Academic Website

GitHub Pages で公開する静的サイトです（<https://sites.google.com/view/hayatat/home> からの移行）。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | Home（自己紹介・研究関心・News・連絡先） |
| `cv.html` | CV の要約と PDF ダウンロード |
| `research.html` | 業績（論文・進行中の研究・学会報告） |
| `teaching.html` | 担当講義 |
| `others.html` | データセットなど |
| `ja.html` | 日本語ページ |
| `cv.pdf` | CV 本体（PDF） |
| `assets/style.css` | 全ページ共通のスタイル |
| `images/profile.svg` | プロフィール写真のプレースホルダ |

## 公開手順（GitHub Pages）

1. GitHub で **`<ユーザー名>.github.io`** という名前の公開リポジトリを作成する
   （例：ユーザー名が `hayatat` なら `hayatat.github.io`）。
2. このフォルダで以下を実行して push する：

   ```sh
   git remote add origin https://github.com/<ユーザー名>/<ユーザー名>.github.io.git
   git push -u origin main
   ```

3. 数分後に `https://<ユーザー名>.github.io/` で公開される。
   （リポジトリ名が `<ユーザー名>.github.io` であれば Pages の設定は自動で有効になります。
   有効にならない場合は Settings → Pages → Source を「Deploy from a branch / main」に設定。）

## 更新方法

- **プロフィール写真**：`images/` に写真（例 `profile.jpg`）を置き、
  `index.html` と `ja.html` の `images/profile.svg` を `images/profile.jpg` に書き換える。
- **CV**：新しい PDF で `cv.pdf` を上書きする。
- **業績・News**：`research.html` / `index.html` の該当リストに `<li>` を追加する。
- 編集後は `git add -A && git commit -m "Update" && git push` で反映。
