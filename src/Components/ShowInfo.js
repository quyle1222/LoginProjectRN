import React from 'react';
import { Text, View } from 'react-native';

const ShowInfo = ({ title, textInfo, styleContainer, styleText }) => {
  return (
    <View style={styleContainer}>
      <Text style={styleText}>
        {title}: {textInfo}
      </Text>
    </View>
  );
};
ShowInfo.defaultProps = {
  title: 'text',
  textInfo: 'text Info',
};
export default ShowInfo;
