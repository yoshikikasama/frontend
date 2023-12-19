import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {ListItem} from "../components/ListItem";
// import dummyArticles from "./dummies/articles";
import axios from "axios" ;
import Constants from "expo-constants";

const URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-12-01&sortBy=publishedAt&apiKey=${Constants.manifest.extra.newsApiKey}`;

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async() => {
    try{
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    }catch(error){
      console.error(error.response)
    }
  }
  useEffect(() => {
    fetchArticles()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        // Itemを描画する関数
        renderItem={({item}) => {
          return(
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              onPress = {() => navigation.navigate('Article',{article: item})}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
