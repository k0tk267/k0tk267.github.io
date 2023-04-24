---
title: "Macで最初に行う設定メモ"
date: 2022-11-03
layout: 'memo'
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
      - [勝手にパスワードを保存しないようにしておく(Firefox)](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-edit-logins#w_disable-the-firefox-password-management-feature)
    - Finderの設定
      - [サイドバーに表示する項目を追加する（ルートディレクトリ等）](https://support.apple.com/en-ie/guide/mac-help/mchlp3011/12.0/mac/12.0)
      - `command + shift + .`で隠しフォルダを表示
      - System Preferences > Dock & Menu Bar > Show recent applications in Dockのチェックを外す
    - [Caps Lock を Controlに変更](https://support.apple.com/guide/mac-help/change-the-behavior-of-the-modifier-keys-mchlp1011/mac)
    - [トラックパッドの設定](#トラックパッドの設定)
    - [Dockを下側から左側に表示させるように変更](https://support.apple.com/guide/mac-help/open-apps-from-the-dock-mh35859/mac)
      - ついでに非表示設定もしておく
    - [バッテリーの残量を％表示で出力](#バッテリーの残量を％表示で出力)
    - ターミナル周りの設定
      - [zplug入れるパターン](#zplugで改良する場合)
      - [Oh My Zsh入れるパターン](#oh-my-zshで改良する場合)
      - [iTerm本体の設定](#iterm本体の設定)
    - 開発周り
      - Github関連
        - [名前](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer)と[メール](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)の設定
        - [SSHの設定](#githubのssh接続設定)
      - [Homebrewのインストール](https://brew.sh/)
        - 先にXcodeを入れておかないとコケるので要注意（加えてインストールするまでに時間がかかる）
      - 開発用ディレクトリにシンボリックリンクを貼る
        - 大体デスクトップにdevディレクトリを作りたがるが、手癖でホームディレクトリ直下にdevディレクトリがほしいため
        - `ln -s ln -s /Users/<replace user name>/Desktop/dev /Users/<replace user name>`でOK
      - [Python関連](#pythonの環境構築)
        - pyenv, poetryの導入
      - [Scala関連](#scalaの環境構築)
        - Javaとsbtの導入
      - JavaScript関連
        - nとyarn入れるが、まあ入れなくてもいいか（使用頻度低）
      - Editor関連
        - [`code`でVScodeが起動するようにする](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
        - File > Auto Saveにチェックを入れる
        - 80文字のラインを入れる (editor.rulers)
        - View > Appearance > Render Whitespaceにチェックを入れる
        - VScodeのプラグイン関連
          - Theme
            - [MonokaiEasyForRetina Theme](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-MonokaiEasyForRetina)か[Darcula Theme](https://marketplace.visualstudio.com/items?itemName=rokoroku.vscode-theme-darcula)が個人的に好み
          - EvilInspector
            - 全角スペース可視化、拡張入れなくてもできる気がする
          - GitLens
            - クソコードを書いた犯人を探す拡張、大体`You, 3 month ago`と書かれている
          - Indent-rainbow
            - カッコのマッチングを可視化できる、多分これも拡張入れなくてもできる気がする
          - Python
            - とりあえず入れておけば、JupyterとかPylanceとか勝手に入れてくれて便利
          - black
            - PythonのFormatter
          - metals
            - ScalaのLanguage Server
          - Remote Development
            - これもとりあえず入れておけばSSHしたりDockerコンテナの中に入ったりするのに便利

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
- [Rosettaを使用して開く](https://support.apple.com/en-us/HT211861)
  - これをしないとArm対応していないものがコケる
- 無限にスクロールできるようにする
  - Preferences > Profiles > Terminal > Unlimited scrollbackにチェックを入れる
  - ログを無限に遡れる
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

### Scalaの環境構築
- Javaの導入
  - `brea install java11`でOK
    - どのディストリビューションのJavaが入るのか知らないが、とりあえずJava11が入っていれば不都合はない
  - なんか以下のコマンドを入力するように出力されるので、仰せのままに入力する（JDKとPATHの設定）
    ```
    # JDKのシンボリックリンクを張る
    sudo ln -sfn /opt/homebrew/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
    # JDKのパスを通す
    echo 'export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"' >> ~/.zshrc
    # よくわからんがコンパイラにJDKを認識させる設定な気がする
    export CPPFLAGS="-I/opt/homebrew/opt/openjdk@11/include"
    ```
  - `java --version`でなんか返ってくればOK
- sbtの導入
  - `brew install sbt`でOK

### zplugで改良する場合
- zplugの導入
  - `brew install zplug`でインストール
  - TODO: plugin周りの記載を追加
- [starship](https://starship.rs/)の導入
  - `brew install starship`でとりあえずインストール
  - `.zshrc`に`eval "$(starship init zsh)"`の記述を追加
  - NerdFontの追加
    ```
    # 全部loneすると容量が大きいので、特定のフォント（今回はCode New Roman）だけclone
    git clone --filter=blob:none --sparse git@github.com:ryanoasis/nerd-fonts
    cd nerd-fonts
    git sparse-checkout add patched-fonts/CodeNewRoman
    # インストール
    ./install.sh CodeNewRoman
    ```
  - 使用するFontの設定
    - Preferences > Profile > Text > Fontを `CodeNewRoman, Bold, 14`に設定
  - ~/.config/starship.tomlに以下の内容を追加
    ```
    [python]
    symbol = ":snake: "
    pyenv_version_name = true

    [time]
    disabled = false
    format = ':clock10:[\[ $time \]]($style) '
    ```

### Oh My Zshで改良する場合
- ohmyzshの導入
  - [Basic Installation](https://github.com/ohmyzsh/ohmyzsh#basic-installation)にかかれているコマンドを愚直に入れる
  - ohmyzshよりもPreztoのほうが軽量らしいが、特にこっちでも動作は重くないかつ、全部入りでなにか足りなくてコケるみたいない事が少なそうなのでこれを採用

- powerlevel10kの導入
  - powerlevel10kに[Oh My Zsh用の設定項目欄](https://github.com/romkatv/powerlevel10k#oh-my-zsh)があるので愚直に入れるだけ
