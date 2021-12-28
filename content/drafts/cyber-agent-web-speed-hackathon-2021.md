---
title: "フロントエンド未履修の状態でCyberAgentのWebSpeedHackathonに参加した話"
date: 2021-02-07
cover: /posts/cyber-agent-web-speed-hackathon-2021/cover.jpg
id: cyber-agent-web-speed-hackathon-2021
tags:
  - 参加記録
---

## TL;DR
- 2/6,7に開催されたCyberAgentのWeb Speed Hackathon 2021に参加しました
- フロントエンド未履修です（webpack=なんかまとめるやつぐらいの知識量）
- 割と何とかなりました（？）

## とりあえず結果
![CyberAgentWebSpeedHackathonの結果](/posts/cyber-agent-web-speed-hackathon-2021/result.png)

一日目は最大瞬間風速9位を観測して、一日目終了時には10位、二日目のイベント終了時のレギュレーションチェック後の最終的な順位が11位という結果になりました（上位陣がレギュレーション違反で9人はじかれたので元々20位くらい）。  
<!--more-->
１位をとった方に関しては６００点台でぶっちぎり優勝だったので「ひぇーーー」と思いました（後でありがた～くリポジトリを眺めさせてもらいます）。  
正直特にこれといって色々できたわけではなかったので、11位という結果を見て「おっ、意外とできる子じゃん」という感想はなく、「なんかテキトーにやったら意外に順位がついたけど、なんもわからんかった」という感想です。  
基本的にフロントエンドをいじいじしたことがない人間にとってかなり勉強になる会でした。最後に解説があったのですが、あれはお金を払って聞きに行くレベルだったので参加した甲斐がありました。  
ちなみにどうやら１位と２位をとった方は同じ[traP](https://trap.jp/)という団体に所属している方らしく、同日開催されていた[NTT Performance Tuning Contest](https://nttcom.connpass.com/event/201413/)でも優勝チームが所属していた団体らしいです（バケモノ……）。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本日、オンラインで開催されたNTT Performance Tuning Contestにて、本サークルから出場したチーム(チームA)が優勝を果たしました！おめでとうございます🎉🎉🎉 <a href="https://t.co/E6uUCe2tAB">pic.twitter.com/E6uUCe2tAB</a></p>&mdash; 東工大デジタル創作同好会traP (@traPtitech) <a href="https://twitter.com/traPtitech/status/1358013425402585088?ref_src=twsrc%5Etfw">February 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">2/6,7に開催された、サイバーエージェント様主催「Web Speed hackathon Online Vol.2」にて、traPのメンバーが1位及び2位を獲得しました！おめでとうございます！！！🎉 <a href="https://t.co/O7MNKohwOh">pic.twitter.com/O7MNKohwOh</a></p>&mdash; 東工大デジタル創作同好会traP (@traPtitech) <a href="https://twitter.com/traPtitech/status/1358368987415908353?ref_src=twsrc%5Etfw">February 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## やったこと
- webpack-bundle-analyzerで悪霊を可視化
- buildをproductionモードに変更
- webpackもproductionモードに変更
- source mapをはがす
- 画像の拡張子をwebpに変換
- 画像のloading属性をlazyに変更
- webfontのminify化
- cssnanoでCSSをminify化（これで上のwebfontのminifyが必要なくなった）
- tailwindの設定にpurgeオプションを追加
- 何個かライブラリをはがす
- deferをつけてJavaScriptを遅延実行
- 明らかに作問者がいたずらで作ったJavaScript部分を何個か修正
  
コミットを見る限りこんな感じです（どのライブラリをはがしたとか、細かいことはそもそもまだ競技に使用したコードが公開されてない状態で書いても意味が分からないと思うので割愛します）。  
基本的に去年の解説やら、そのた参加者のブログを参考にいじったので、一つ一つの動作を完璧に理解しているわけではなくただこうしたら最適化されるだろうというのを真似しました（tailwindの設定部分とJavaScriptのいたずら部分以外は多分去年誰かが書いてた内容だと思う）。

## 感想
謙遜ではなくほんとに何もわからない（普段はデータベースの改修とか画像処理しかやってないので）状態で、物は試しという気持ちで申し込んだ結果11位だったので、意外と「順位的には」何とかなりました。ただこれは付け焼刃で対処した結果、なんか順位だけ出たというだけで、実際はまったく手が動かないことが露見しただけなので今後要精進案件です。  
ちなみに[超速!Webページ速度改善ガイド](https://www.amazon.co.jp/Web%E3%83%9A%E3%83%BC%E3%82%B8%E9%80%9F%E5%BA%A6%E6%94%B9%E5%96%84%E3%82%AC%E3%82%A4%E3%83%89-%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%95%E3%81%AF%E3%80%8C%E9%80%9F%E3%81%95%E3%80%8D%E3%81%8B%E3%82%89%E5%A7%8B%E3%81%BE%E3%82%8B-WEB-PRESS-plus/dp/477419400X)を最後の講評時に作問者がおすすめしてたのですぐぽちりました（以下参考サイトに書いた[Web Frontend Performance Tuning](https://speakerdeck.com/shinyaigeek/web-frontend-performance-tuning)でもおすすめされてたので多分鉄板の本だと思います）。  
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">積みます（読みます）。 <a href="https://t.co/j0hMhquBee">pic.twitter.com/j0hMhquBee</a></p>&mdash; kmly (@kmly267) <a href="https://twitter.com/kmly267/status/1358380520879476742?ref_src=twsrc%5Etfw">February 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 合わせて読むとためになる（だろう）サイト
[Web Speed Hackathon Online 出題のねらいと解説](https://github.com/CyberAgentHack/web-speed-hackathon-online/wiki/Web-Speed-Hackathon-Online-%E5%87%BA%E9%A1%8C%E3%81%AE%E3%81%AD%E3%82%89%E3%81%84%E3%81%A8%E8%A7%A3%E8%AA%AC)  
とりあえず去年の傾向を知るために事前に読みました。  
基本的に競技中もこれを参考に改良しました。

<br/>

[CyberAgent主催『Web Speed Hackathon Online』参加ログ](https://shinyaigeek.dev/post/log-ca-web-speed-hackathon)  
これは去年の参加者でフロントエンドつよつよの方が書いた記事です（この方は[サマーインターン前にツヨツヨになっちゃおうの会](https://connpass.com/event/181419/)でパフォーマンスチューニングの話をしていた記憶があったので、この手の分野でかなり信頼できる情報だと考えて参考にしました）。  
webpack-bundle-analyzerで可視化する案を採用したのはこのブログから。  

<br/>

[Web Frontend Performance Tuning](https://speakerdeck.com/shinyaigeek/web-frontend-performance-tuning)  
上述した方が[サマーインターン前にツヨツヨになっちゃおうの会](https://connpass.com/event/181419/)で発表していたスライドです。 

<br/>

[リクルートスピードハッカソンに参加したのでその感想や勉強したことまとめ](https://qiita.com/takehanKosuke/items/2f102a069c627c41c907)  
これはリクルートが行っていたフロントエンドのパフォーマンスチューニングの記事で、これでパフォーマンスチューニングの流れをつかみました（普段フロントエンド周りのコードを書かない人間で、ましてやパフォーマンスチューニングなどやったことあるはずもなく、そもそもどうしたらいいかわかっていなかったので）。 

<br/>

[Optimizing for Production - Tailwind CSS](https://tailwindcss.com/docs/optimizing-for-production)  
去年の傾向からクソデカCSSとクソデカJSがやってくるのはおおよそ予測がついてました。見た感じクソデカCSSの原因の一つがtailwindの全読み込みだと思ったので最適化方法を調べたら、公式が紹介してくれていたので採用しました。

<br/>

[CA主催のスピードハッカソンに参加してきた話](https://kaaazu.hateblo.jp/entry/2021/02/07/184428)  
フロントつよつよの方が書いた今回のイベントの参加記です。こっちの記事のほうが技術的にもうちょっと詳しいことを書いてます。

<br/>

[Front-End-Performance-Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)  
作問者曰く読むといいらしい（読んでない）。

<br/>

[Webpackのdocumentation](https://webpack.js.org/concepts/)  
作問者曰く、これもまとまっていて読むといいらしい（読んでない）。








