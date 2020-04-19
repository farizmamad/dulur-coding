import React, { Component } from 'react';
import { StyleSheet, Text, View,
  TextInput, Image, ScrollView
} from 'react-native';

import myImage from "./assets/ThumbnailVideo002.png";
import VideoCard from "./components/VideoCard";

export default class App extends Component {
  render() {
    const title = "Videoku";
    const videoTitle = "Membuat dan Menggunakan Komponen"
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 16 }} >
          <Text style={{ fontSize: 32 }}>{title}</Text>
        </View>
        <View style={{ marginTop: 16, width: "100%", alignItems: "center" }}>
          <TextInput 
            style={{ width: "80%", borderWidth: 1, borderColor: "gray" }}
            placeholder={"Cari video di sini"}
          />
        </View>
        <ScrollView style={{ marginTop: 16 }}>
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />
          <VideoCard 
            imageSource={require("D://Dulur Coding/DemoComponent/assets/ThumbnailVideo002.png")} 
            title={"Video 001"} 
          />        
          
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
