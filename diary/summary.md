# UI/UX　勉強メモ
目標：UI/UXの基礎を学び、ラフデザイン・モック作成時に、ユーザー体験の高いものを構築する基礎を学ぶ
　　　Figmaなどの使い方にもなれる

##HTML入門
 1. 概要
  HTMLはプログラミング言語でなくマークアップ言語。コンテンツの構造を定義。要素の集まり。要素はタグで囲まれ、タグには様々な種類があり、それによって要素の役割が変わる。
 2. タグ
  - <!DOCTYPE html>     : 文書型宣言
  - <html>              : ルート要素	
  - <head>              : 閲覧者に向けて表示されない情報。要素は検索エンジン向けのキーワードや説明書き、CSS、文字コードの情報など。	
  - <body>              : 要素はページの閲覧者に対して見せたいものすべて
  - <title>             : 文書のタイトル、ブラウザのタブに表示	
  - <meta>              : 文書に関する情報（メタ情報）、多くの <meta> 機能はもう使われてない。例えば、 keyword の <meta> 要素 (<meta name="keywords" content="fill, in, your, keywords, here">) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。
   - name               : meta 要素の種類を指定。含まれる情報の種類。
   - content            : 実際のメタコンテンツを指定,SEOにも効果
  - <div>               : 範囲の指定（ブロックレベル）
  - <span>              : 範囲の指定（インライン）
  - <h1>                : 見出し	
  - <img>               : 画像
   - src (source)       : 画像ファイルのパスを値
   - alt (alternative)  : 画像を見られない人(障害、画像取得失敗)に向けて文字で説明
  - <p>                 : 段落
  - <li>                : リスト
   - <ul>               : 番号なしリスト
   - <ol>               : 番号付きリスト
   - <dl>  <dd>         : 説明リスト 
  - <a>                 : リンク
   - href               : hypertext reference
 3. 注意
 - サイトリンクは、Google's webmaster tools で設定できる
 - 安全なコードを書くために、必ず属性値にはクォーテーションマークを。そうすれば、コードの可読性も向上
 - 実際の文字	等価な文字参照
   - <	        &lt;
   - >	        &gt;
   - "	        &quot;
   - '      	&apos;
   - &  	    &amp;
4. その他
 - リンク
  - できるだけ相対リンクを使う
   可能な限り相対 URL を使用するほうが効率的です。絶対 URL を使用すると、ブラウザーはドメインネームシステム (DNS; 詳細はウェブの仕組みをご覧ください) 上のサーバーの実際の場所を検索することから開始し、次にそのサーバーに移動して要求されているファイルを見つけます。一方相対 URL では、ブラウザーは要求されているファイルを同じサーバー上で検索するだけです。そのため、相対 URL のように絶対 URL を使用する場合は、常にブラウザーに余分な作業を行わせることになります。つまりブラウザーの効率が低下します。
  - HTML 以外のリソースへのリンク - 明確な道標を残す
   (PDF や Word 文書のように) ダウンロードされたり (ビデオやオーディオのように) ストリーミングされたり、ポップアップウィンドウを開いたり、Flash ムービーを読み込んだりするなど、予期せぬ効果をもたらすリソースにリンクする場合は、混乱を避けるために明確な表現を追加。例えば、それはかなりいらいらさせることができます。(低帯域幅の接続を使用している場合は、リンクをクリックすると、数メガバイトのダウンロードが突然開始されます。Flash プレーヤーがインストールされていない場合は、リンクをクリックすると突然 Flash が必要なページに移動します。)
ここではどのような種類のテキストを使用できるかを見るために、いくつかの例を見てみましょう。
##CSS入門
 1. 概要
  スタイルシート言語。HTMLの要素に選択的にスタイルを適用。
 2. ルールセット構造
 - セレクタ               : ルールセットの先頭にあるHTML要素名で、スタイルを設定する要素を選択
  - IDセレクタ            : 特定のHTMLページでは、1つのIDにつき1つの要素のみ
  - クラスセレクタ         : 指定されたクラスを持つページの要素、複数可
  - 属性セレクタ           : 指定された属性を持つページ上の要素	
  - 擬似クラスセレクタ      : 指定された要素だが指定された状態にあるとき(例えば、ホバー)
 - 宣言                  : 要素のプロパティのうちどの要素をスタイルするかを指定
  - プロパティ            : スタイルを設定するHTML要素のスタイルを指定
  - プロパティ値          : プロパティの右側にはコロンの後のやつ、value

##JavaScript入門(言語の基本機能については学習済みのため省略)
 1. 概要
  動的プログラミング言語であり、HTML文書に適用すると、Webサイトに動的な操作が可能
 2. メソッド
  - querySelector()      : CSSセレクタでマッチした最初の要素を取得し、要素が多数取得できる可能性があっても最初の1つしか取得しない(https://qiita.com/amamamaou/items/25e8b4e1b41c8d3211f4#documentqueryselector-elementqueryselector)
   - prompt()            : ユーザにデータを入力するよう求め、ユーザがOKを押した後に変数にそのデータを格納
## Webデザイン入門
 1. 計画
   - 何について書かれたものか
   - テーマについて
   - どんな見た目にするか（高い抽象度から考える。背景の色は・フォントの種類 etc.)
 2. デザインを大まかに描き出く
   - 