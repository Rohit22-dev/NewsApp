import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectType = ({setValue, initial, type}) => {
  return (
    <View style={{flex: 1}}>
      {/* <View style={styles.option}> */}
      <SelectList
        setSelected={setValue}
        data={type}
        fontFamily="lato"
        arrowicon={<Icon name="chevron-down" size={14} color={'black'} />}
        searchicon={<Icon name="search" size={14} color={'black'} />}
        search={true}
        boxStyles={styles.box}
        defaultOption={initial}
        dropdownStyles={{backgroundColor: '#00000040'}}
        dropdownTextStyles={{fontWeight: '800', fontSize: 15}}
        inputStyles={{
          fontWeight: '800',
          fontSize: 15,
          color: 'black',
        }}
      />
    </View>
  );
};

export default SelectType;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    margin: 3,
  },
});
