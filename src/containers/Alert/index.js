import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../component/common/Header';
import styles from './style';

const AlertScreen = () => {
  return (
    <View>
      <Header
        showBack
        showText={'Alert'}
      />
      <View>
            <Text style={styles.userName}>Hello, Anuj</Text>
           
        </View>
    </View>
  );
};

export default AlertScreen;
