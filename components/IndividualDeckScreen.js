import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';
import Button from './Button';

class IndividualDeckScreen extends Component {
  render() {
    return (
      <View style={styles.deckCard}>
        <View>
          <Text style={styles.deckTitle}>Deck Title</Text>
          <Text style={styles.cardNumber}>This deck has X cards</Text>
        </View>
        <View>
          <Button text='Start Quiz'/>
          <Button text='Add Card'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckCard: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15,
    padding: 25,
    backgroundColor: gray,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  deckTitle: {
    fontSize: 23,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardNumber: {
    fontSize: 15,
    textAlign: 'center'
  }
});

export default IndividualDeckScreen;