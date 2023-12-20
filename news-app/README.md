# news-app

https://udemy.benesse.co.jp/development/app/react-native.html

cd news-app
npx expo start
react-native run-ios

- Expo: React Native の開発を楽にしてくれるライブラリ群と周辺ツール。

  - XCode, Android Studio 不要。
  - 証明書の管理もしてくれる。
  - Managed workflow: ネイティブコードを触らなくて良い。
  - Bare workflow: ネイティブコードを直接触れる。
  - QR コードを読み込んで自身の smartphone で確認できる。

- Expo:https://docs.expo.dev/get-started/installation/

- JSX: React で HTML を書くための構文

  - JSX 内で変数(JavaScript コード)を描くときは中括弧{}で囲む

- props: 性質。親から与えられ不変。
- state: 状態。自ら変更できる。

```
npx expo install expo-constants
npx expo install react-native-webview
yarn add @react-navigation/bottom-tabs
yarn add @reduxjs/toolkit
yarn add react-redux
yarn add redux-persist
yarn add @react-native-async-storage/async-storage
```

## 注意

API の query で日付が古すぎると無料枠を超過するため、日付の修正が必要。

https://newsapi.org/v2/everything?q=tesla&from=2023-12-01

## 参考

- https://redux-toolkit.js.org/tutorials/quick-start
- https://github.com/takahi5/news-app-v2/tree/master

## 学習メモ

```
export const ClipScreen= ({route}) => {
  const clips = useSelector((state) => state.user.clips)
  return (
    <SafeAreaView style={styles.container}>
        <Text>Clip Screen</Text>
    </SafeAreaView>
  );
};
```

- 1. ()（丸括弧）
  - 関数の引数
  - 関数を定義する際に、引数を丸括弧で囲みます。
  - 例: function add(a, b) { return a + b; }
  - ここでは a と b が引数です。
  - 矢印関数
  - ES6 の矢印関数では、引数を丸括弧で囲みます。
  - 例: const add = (a, b) => { return a + b; }
  - ただし、引数が一つだけの場合、丸括弧は省略可能です。例: const square = x => { return x \* x; }
  - 式のグループ化
  - 丸括弧は、複数の式を一つの式として扱うために使われます。
  - 例: const total = (a + b) \* c;
  - ここでは a + b が先に評価され、その後 c と乗算されます。
- 2. {}（波括弧）
  - オブジェクトリテラル
  - オブジェクトを作成する際に使用します。
  - 例: const person = { name: "Alice", age: 25 };
  - ここで person は name と age というプロパティを持つオブジェクトです。
  - JSX での使用
  - React Native では、JSX の中で JavaScript の式を書くために波括弧を使います。
  - 例: <Text>{person.name}</Text>
  - ここで {person.name} は JavaScript の式で、person オブジェクトの name プロパティの値を表示します。
  - 関数の本体
  - 関数の本体を示すためにも使います。
  - 例: const add = (a, b) => { return a + b; }
  - ここで { return a + b; } が関数の本体です。
- 3. =>（アロー関数）
  - ES6 で導入された、function キーワードを使う代わりの関数定義方法です。
  - より簡潔な構文を提供します。
  - 例: const add = (a, b) => a + b;
  - ここで add は、a と b を引数として受け取り、その和を返す関数です。
- 4. <>（角括弧）
  - JSX でコンポーネントを定義する際に使用されます。
  - 例: <View><Text>Hello</Text></View>
  - ここで <View> と <Text> は React Native のコンポーネントを表します。
  - これらの記号は、React Native（および JavaScript 全般）で非常に一般的であり、多くの異なる文脈で使用されます。各記号の用途を理解することは、コードの読み書きにおいて非常に重要です。
