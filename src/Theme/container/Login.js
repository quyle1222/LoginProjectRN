import { StyleSheet } from 'react-native';

export default function ({ Colors, Gutters, Layout, MetricsSizes }) {
  return StyleSheet.create({
    textInputLogin: {
      borderWidth: 1,
      borderColor: Colors.text,
      backgroundColor: Colors.inputBackground,
      color: Colors.text,
      height: 50,
      paddingLeft: 30,
      marginTop: MetricsSizes.small,
      marginBottom: MetricsSizes.small,
      borderRadius: 25,
    },
    textHeader: {
      margin: MetricsSizes.small,
      fontWeight: 'bold',
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: '40%',
    },
    button: {
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      height: 50,
      borderRadius: 25,
      marginTop: 20,
      backgroundColor: Colors.backgroundButtonLogin,
      borderColor: 'white',
    },
    inputContainer: {
      marginTop: '5%',
    },
  });
}
