import { useEffect, useState , useRef} from 'react';
import { StyleSheet, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {ListItem} from "../components/ListItem";
// import dummyArticles from "./dummies/articles";
import axios from "axios" ;
import Constants from "expo-constants";

const URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-12-01&sortBy=publishedAt&apiKey=${Constants.manifest.extra.newsApiKey}`;

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const pageRef = useRef(1)
  const fetchAllRef = useRef(false)

  const fetchArticles = async(page) => {
    try{
      const response = await axios.get(`${URL}&page=${page}`);
      if (response.data.articles.length > 0){
        setArticles(prevArticles => [...prevArticles, ...response.data.articles] );
      }else{
        fetchAllRef.current = true;
      }
      
    }catch(error){
      console.error(error.response)
    }
  }
  useEffect(() => {
    fetchArticles()
  },[])
  const onEndReached = () => {
    if (!fetchAllRef.current){
      pageRef.current = pageRef.current + 1;
      fetchArticles(pageRef.current);
    }
  };
  const onRefresh = async() => {
    setRefreshing(true)
    setArticles([])
    pageRef.current = 1
    fetchAllRef.current = false
    await fetchArticles(1)
    setRefreshing(false)
  };
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
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } 
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
