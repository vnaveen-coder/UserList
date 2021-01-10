/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch(
      'https://d1cl7xhtppugmt.cloudfront.net/dashboard/api/userlist/',
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          dataSource: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let dataloaded = this.state.dataSource.map((val, key) => {
        return (
          <View style={styles.item} key={key}>
            <View style={{flexDirection: 'row'}}>
              <Text>Id: </Text>
              <Text style={{color: 'blue'}}>{val.id}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Name: </Text>
              <Text style={{color: 'blue'}}>{val.name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Amount: </Text>
              <Text style={{color: 'blue'}}>{val.amount}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Address: </Text>
              <Text style={{color: 'blue'}}>{val.address}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Created Date: </Text>
              <Text style={{color: 'blue'}}>{val.created_at}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Category: </Text>
              <Text style={{color: 'blue'}}>{val.category}</Text>
            </View>
          </View>
        );
      });
      return <View style={styles.container}>{dataloaded}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eaeaea',
    // flexDirection: 'row'
  },
  item: {
    padding: 15,
    marginTop: 10,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    shadowOpacity: 1,
  },
});
