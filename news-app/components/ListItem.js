import { StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
/**
 * 
 * @param {
 * imageUrl: 画像URL(string)
 * title: タイトル(string)
 * author: ニュース提供元(string)
 * onPress: タップされた時のイベント
 * *} props 
 * @returns 
 */
export const ListItem = (props) =>{
  return (
      <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
        <View style={styles.leftContainer}>
          <Image
            style={{width:100, height: 100}}
            source={{uri: props.imageUrl}}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subText}>{props.author}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer:{
    height: 100,
    width: "100%",
    backgroundColor: "white",
    // 配下のコンポーネントが横に並ぶ
    // columnとすると縦に並ぶ
    flexDirection: "row",
    // 上下に隙間を与える
    marginVertical:5,
    // 横幅の中央に配置する
    // alighnItems: "center"

  },
  leftContainer: {
    width: 100,
  },
  rightContainer:{
    // 余白全体を使用
    flex: 1,
    // 隙間を配置
    padding: 10,
    // 上下の並びを均等に
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: "gray"
  }
});
