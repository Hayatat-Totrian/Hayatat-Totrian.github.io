# Tomoki Hayata — Personal Academic Website

GitHub Pages で公開する静的サイトです（<https://sites.google.com/view/hayatat/home> からの移行）。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | Home（自己紹介・Email・SNSアイコン・Spotlight・研究関心） |
| `cv.html` | CV の要約と PDF ダウンロード |
| `research.html` | 業績（年別の出版物・学会報告・データセット） |
| `teaching.html` | 担当講義 |
| `others.html` | データセットなど |
| `ja.html` | 日本語ページ |
| `cv.pdf` | CV 本体（PDF） |
| `assets/style.css` | 全ページ共通のスタイル（色・レイアウト） |
| `images/profile.svg` | プロフィール写真のプレースホルダ |

## 公開手順（GitHub Pages）

1. <https://github.com> にログインし、右上の「+」→「New repository」。
2. リポジトリ名を **`<ユーザー名>.github.io`** にする（例：ユーザー名が `hayatat` なら `hayatat.github.io`）。**Public** を選んで作成。
3. このフォルダでターミナルを開き、以下を実行して push する：

   ```sh
   git remote add origin https://github.com/<ユーザー名>/<ユーザー名>.github.io.git
   git push -u origin main
   ```

4. 1〜2分後に `https://<ユーザー名>.github.io/` で公開される。
   （リポジトリ名が `<ユーザー名>.github.io` なら Pages は自動で有効。反映されない場合は
   リポジトリの Settings → Pages → Source を「Deploy from a branch / main」に設定。）

## 自分で修正する方法

基本の流れ：**ファイルをテキストエディタで編集 → ブラウザで確認 → コミットして push**

1. 編集：HTML ファイルを VS Code やテキストエディットで開いて書き換える。
2. 確認：`index.html` をダブルクリックするとブラウザでそのまま表示できる。
3. 反映：

   ```sh
   git add -A
   git commit -m "Update"
   git push
   ```

   ※ GitHub のサイト上でファイルを開き、鉛筆アイコン（Edit）から直接編集して
   「Commit changes」でも反映できます（push 不要）。

### よくある編集

- **Spotlight の入れ替え**：`index.html`（英語）と `ja.html`（日本語）の
  `<div class="spotlight-card">〜</div>` を書き換える（最大3枚）。
- **論文の追加**：`research.html` に `<h2>年</h2>` と `<div class="pub-entry">〜</div>` を追加。
  書式は既存の 2026 年のエントリをコピーして使う。
- **プロフィール写真**：`images/` に写真（例 `profile.jpg`）を置き、
  `index.html` と `ja.html` の `images/profile.svg` を `images/profile.jpg` に書き換える。
- **CV の更新**：新しい PDF で `cv.pdf` を上書きする。
- **色やレイアウト**：`assets/style.css` の先頭 `:root` にある `--accent` などを変更。
