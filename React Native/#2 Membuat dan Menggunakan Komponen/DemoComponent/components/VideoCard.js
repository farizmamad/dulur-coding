import React, { Component } from 'react';
import { StyleSheet, Text, View,
  TextInput, Image, ScrollView
} from 'react-native';

const VideoCard = ({imageSource, title}) => {
    return(
        <View style={{ borderWidth: 1 }}>
            <Image
                style={{height: 175, width: 300}}
                resizeMode={"center"}
                source={imageSource} 
            />
            <Text>{title}</Text>
        </View>
    )
}

export default VideoCard;