import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {fetchedHomepage, fetchHomepage} from '../../redux/actions/homepage';

const HomeScreen = props => {
  const usersData = useSelector(
    state => (state.homepageReducer || {}).data || [],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepage());
  }, []);

  useEffect(() => {
    console.log('usersData', usersData);
  }, [usersData]);
  return (
    <View style={styles.home}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
