---
title: "Windowsで最初に行う設定メモ"
date: 2022-11-04
layout: 'memo'
cover: /posts/my-windows-settings/cover.jpg
id: my-windows-settings.md
tags:
  - Windows
  - 初期設定
---

## はじめに
Windowの初期設定メモ。  
WSL周りの設定以外は[Macで最初に行う設定メモ](/posts/my-mac-settings)と同じかもしれない。

## 大まかな流れ
1. Windowsのテーマをダークモードに変更
2. とりあえず必要なソフトをダウンロード
    - ブラウザ
      - Firefox Developer Edition, Google Chrome, Brave
    - ターミナル
      - Windows Terminal
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
      - Trading View
      - Poker Stars, Poker Snowieもお好みで




















2. 各種設定
    - ブラウザの設定
      - Dark Reader, Multi account container, Notion Web Clipperをインストール
      - 検索言語を英語にしておく（「いかがでしたか？」対策）
      - [勝手にパスワードを保存しないようにしておく(Firefox)](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-edit-logins#w_disable-the-firefox-password-management-feature)
    - ターミナル周りの設定
      -Windows Terminalの設定
    - 開発周り
      - Github関連
        - [名前](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer)と[メール](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)の設定
        - [SSHの設定](#githubのssh接続設定)
      - [Python関連](#pythonの環境構築)
        - pyenv, poetryの導入
      - Scala関連
        - sbtの導入
      - JavaScript関連
        - nとyarn入れるが、まあ入れなくてもいいか（使用頻度低）
      - Editor関連
        - [`code`でVScodeが起動するようにする](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
        - File > Auto Saveにチェックを入れる
        - VScodeのプラグイン関連
          - Theme
            - [MonokaiEasyForRetina Theme](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-MonokaiEasyForRetina)か[Darcula Theme](https://marketplace.visualstudio.com/items?itemName=rokoroku.vscode-theme-darcula)が個人的に好み
          - EvilInspector
            - 全角スペース可視化、拡張入れなくてもできる気がする
          - GitLens
            - クソコードを書いた犯人を探す拡張、大体`You, 3 month ago`と書かれている
          - Indent-rainbow
            - カッコのマッチングを可視化できる、多分これも拡張入れなくてもできる気がする

















## 詳細な設定内容
### Windowsのテーマをダークモードに変更
デスクトップで右クリック > Personalize > Colors > Choose your color をDarkに変更。

### WSLの設定
最近`wsl --install`で諸々の設定無しに使えるようになったらしい。
詳細は[Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install)にて。  
完了したら、Microsoft Storeから好きなLinux Distributionを入れる（基本Ubuntuの22.04をメインで使って、環境が破壊されでも問題ないような環境として20.04を使う）。

### Windows Terminalの設定
- フォントのインストール
  - [ここ](https://www.nerdfonts.com/font-downloads)から[Caskaydia Cove Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.2.2/CascadiaCode.zip)をダウンロード
  - ダウンロードしたZipを展開すると複数のフォントが入っているが、Caskaydia Cove Nerd Font Complete Windows Compatible Regular を入れる
  - Windows Terminalで Settings > Ubuntu 22.04 > Appearance > Font face を CaskaydiaCove NF に変える
    - 候補として出て来ない時は、show all fontsにチェックを入れると出現する
  - Save ボタンを押さないと保存されないので要注意
    - 保存時になにか警告が出るが、とりあえず無視でOK
### Ubuntuの設定
- 以下Windows TerminalでUbuntuを開いているという前提
- デフォルトのshellがbashなのでzshに変更する
  ```
  # zshをインストール
  sudo apt install zsh
  # デフォルトのshellをzshに変更
  
  ```
  - `sudo apt install zsh`でzshをインストール
  - 


















### Slack
現状20以上のワークスペースに入っているが、半分ぐらい機能不全に陥っている。無料プランだと90日以前のデータが見えなくなっているため、ほとんど動いていないものはメール通知を飛ばすようにして、アプリ上には入れない方針にしてもいいかもしれない。Discordの方がログインや通話諸々使い勝手がよい。

### GitHubのSSH接続設定
公式ddocumentは"[Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)"だが、「[GitHubでssh接続する手順~公開鍵・秘密鍵の生成から](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)」の方がわかりやすい。

### Pythonの環境構築
- pyenvの導入
- poetryの導入

### Oh My Zshで改良する場合