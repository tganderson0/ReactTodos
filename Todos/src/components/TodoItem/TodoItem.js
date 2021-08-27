import React, {useState} from 'react';
import {View, Text} from 'react-native';

const component = (props) => {
    const [isComplete, setIsComplete] = useState(false);
    
    return (
      <View>
        <Text>{props.text}</Text>
      </View>
    );
  };
  
  
  
  export default component;