import React from 'react';
import { StyleSheet, Image, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: require('./images/profile.png')}, { key: require('./images/Orders.jpeg')}, { key: require('./images/cart.png')}, { key: require('./images/coupon.png') },
];

const formatData = (data) => {
  return data;
};

const numColumns = 2;
export default class App extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
         <Image source = {item.key}
        style = {styles.imageStyle}
        ></Image>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({

    bgImageStyle: {
        width: "100%",
        height: "100%", 
        alignItems: 'center',
        justifyContent: 'center',
      },
  imageStyle: {
        width: "90%",
        height: "90%", 
        alignItems: 'center',
        justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 0,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  
 
});