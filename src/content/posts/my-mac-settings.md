---
title: "Macで最初に行う設定メモ"
date: 2022-11-03
layout: 'article'
cover: /posts/my-mac-settings/cover.jpg
id: my-mac-settings.md
tags:
  - Mac
  - 初期設定
---

## はじめに
大体初期設定で何するか固まってきたのでメモ。  
便利な設定があれば随時更新する予定。  
基本的にWindowsをメインマシンとしていて、手持ちのMacはスペックが低めなのでヘビーなものはあまり入れないような方針にしている。

## 大まかな流れ
順番に関しては特に気にせず書かれているが、iTermとHomebrewの項目にに時間がかかる気がするので先に実行しておいた方がいいかもしれない（Xcodeが途中必要になり、これに時間がかかる）。
1. とりあえず必要なソフトをダウンロード
    - ブラウザ
      - Firefox Developer Edition, Google Chrome, Brave
    - ターミナル
      - iTerm
    - 開発に必要なソフトを入れる
      - VScode, IntelliJ IDEA, Docker Desktop
    - 連絡ツールを入れる
      - Slack, Discord入れる
    - 会議系ツールを入れる
      - WebEX, Zoom
      - Teamsは使用頻度低めなので、入れなくていいかも
    - その他
      - Google 日本語入力
      - OBS
        - 手持ちのWindowsの方がスペックが高いのでMacではほぼ使わない
      - Trading View
        - Windowsの方で使うが、Macではほぼ使わない
      - Poker Stars, Poker Snowieもお好みで
        - Windowsの方で（以下略
2. 各種設定
    - ブラウザの設定
      - Dark Reader, Multi account container, Notion Web Clipperをインストール
      - 検索言語を英語にしておく（「いかがでしたか？」対策）
    - [トラックパッドの設定](#トラックパッドの設定)
    - [Dockを下側から左側に表示させるように変更](https://support.apple.com/guide/mac-help/open-apps-from-the-dock-mh35859/mac)
    - [バッテリーの残量を％表示で出力](#バッテリーの残量を％表示で出力)
    - ターミナル周りの設定
      - zplug入れるパターン
      - Oh My Zsh入れるパターン
      - [iTerm本体の設定](#iterm本体の設定)
    - 開発周り
      - Github関連
        - [名前](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer)と[メール](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)の設定
        - [SSHの設定](#githubのssh接続設定)
      - [Homebrewのインストール](https://brew.sh/)
        - 先にXcodeを入れておかないとコケるので要注意（加えてインストールするまでに時間がかかる）
      - [Python関連](#pythonの環境構築)
        - pyenv, poetryの導入
      - Scala関連
        - sbtの導入
      - JavaScript関連
        - yarn入れるが、まあ入れんでもいいか（使用頻度低）
      - Editor関連
        - VScodeのプラグイン関連
          - Darcula Theme
            - VScodeのテーマ設定、そろそろ青とオレンジベースのテーマに乗り換えたい
          - EvilInspector
            - 全角スペース可視化、拡張入れんでもできる気がする
          - GitLens
            - クソコードを書いた犯人を探す拡張、大体`You, 3 month ago`と書かれている
          - Indent-rainbow
            - カッコのマッチングを可視化できる、多分これも拡張入れんでもできる気がする

## 詳細な設定内容

### Slack
現状20以上のワークスペースに入っているが、半分ぐらい機能不全に陥っている。無料プランだと90日以前のデータが見えなくなっているため、ほとんど動いていないものはメール通知を飛ばすようにして、アプリ上には入れない方針にしてもいいかもしれない。Discordの方がログインや通話諸々使い勝手がよい。

### トラックパッドの設定
設定項目は以下。
  - Tracking Speedを最大値の3/4ぐらいまで引き上げる
  - [3本指のドラッグを有効にする](https://support.apple.com/en-us/HT204609)
    - これはTrackpadの設定項目ではなくAccessibilityの項目にあるので注意

### バッテリーの残量を％表示で出力
[Monitor your Mac notebook computer’s battery](https://support.apple.com/en-ie/guide/mac-help/mchlp1115/11.0/mac/11.0)に設定方法が書かれている。左上にOS指定のPull Downがあったが気が付かずに「情報古いやんけっ！」と思ってしまった。後々OSが更新されたら左上の確認するようにするべし。

### GitHubのSSH接続設定
公式ddocumentは"[Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)"だが、「[GitHubでssh接続する手順~公開鍵・秘密鍵の生成から](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)」の方がわかりやすい。

### iTerm本体の設定
元々色々いじっていたが設定が思い出せない。  
思い出し次第随時加筆予定。  
- 半透明
  - Preferences > Profiles > Window > Transparency を60に設定
- 初期起動をフルスクリーン状態にする
  - Preferences > Profiles > Window > Settings for New Windows
    - Style: Full Screen
    - Screen: Screen with Cursor
    - Spaces: All Spaces
- Hotkeyで表示/非表示の切り替え
  - Preferences > General > Window > Native full screen windows のチェックボックスを外す
  - Preferences > Keys > Hotkey > Show/hide all windows with a system-wide hotkeyでoption+spaceに設定
    - 「ctrl + Enter」か「Space + Enter」に設定している人が多いのでお好みで

### Pythonの環境構築
- pyenvの導入
  - [Homebrew Formulae: pyenv](https://formulae.brew.sh/formula/pyenv)
  - とりあえず`brew install pyenv`でインストール
  - .zshrcに以下の記述を追加（デフォルトのzshを使っている想定）
    ```
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"
    ```
  - `pyenv install X.X.X`でお好みのPythonのバージョンをダウンロード
  - `pyenv global X.X.X`で使用するPythonのバージョンを固定
- poetryの導入
  - [公式ドキュメント](https://python-poetry.org/docs/)
  - ドキュメントに反して`brew install poetry`で入れるのが恐らく正解
    - とりあえず `curl -sSL https://install.python-poetry.org | python3 -`でインストールしようと思ったらコケた
    - ちなみに有志が作って公開してある日本語版のドキュメントもあるが、翻訳が間に合っていなくて`get-poetry.py`を使ってダウンロードする記述のままなので見るべからず（もしくはPR投げてあげるといいかも）
