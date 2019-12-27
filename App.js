import React, {Component} from 'react';

import {StyleSheet, View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';


export default class App extends Component<{}> {
render() {
    return (
 <View style={{ height: 300 }}>

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/watch?v=eN6AYHAT8UM'}}
            />

        </View>

    );
  }
}

const styles = StyleSheet.create({
WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  }
  
});