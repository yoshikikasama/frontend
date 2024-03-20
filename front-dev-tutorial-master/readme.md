# VSCode の拡張機能のインストール

- Prettier - Code formatter  
  `esbenp.prettier-vscode`

  様々な言語の整形を行ってくれる

- Live Server  
  `ritwickdey.LiveServer`

  簡易的なサーバーを簡単に起動することができる

- Live Sass Compiler  
  `glenn2223.live-sass`

  Sass -> CSS への変換（トランスパイル）を行ってくれる

## HTML の記法

- <!DOCTYPE html>: HTMLでこのdocumentはHTMLですよと認識させる。
- <head>: メタ的な情報
- tag: html では全てが tag で表示されている。開始タグと終了タグ。
- 空 tag: 開始タグのみのタグのこと。
- ブロック要素:
  - span。
  - 改行される。
  - 上下に要素を配置したい場合に使用。
  - 横幅と縦幅を style で定義できる。
- インライン要素:
  - div。
  - 改行されない。
  - 横並びに要素を配置したい場合に使用。
  - 横幅と縦幅を定義できない。

## CSS の記法

- html の style 要素を宣言する。design を css という拡張子に分けて html に適用するファイル。
- 文末はセミコロン(;)が必要

- .: css で.は class を表す。
- #: css で#は id を表す。
- 親要素+ 半角スペース + 子要素:
  - .parent span{}
- :hover: 要素の上にマウスのポインタを要素の上に置いたときに実行されるクラスです。

## SCSS の記法

- &
- .: class
- #: id

SCSS での & は親セレクタを参照するための特殊な記号です。親セレクタを含む子セレクタを生成するのに使用されます。一方、 . は通常の CSS と同様に、クラスを表します。

具体的に説明すると：

&：親セレクタを参照するためのものです。例えば、.try の中にある .btn の中の .cubic というセレクタは、 .try .btn.cubic としてコンパイルされます。& を使うことで、ネストされたセレクタの中で親セレクタを簡潔に参照できます。「&」は親要素に変換される。
