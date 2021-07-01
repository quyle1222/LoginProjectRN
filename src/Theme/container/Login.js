import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function ({ Colors, Gutters, Layout, MetricsSizes }) {
  const configButton = {
    ...Gutters.regularTMargin,
  };
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
      width: MetricsSizes.large + 120,
      height: MetricsSizes.large + 120,
      alignSelf: 'center',
      marginTop: '40%',
    },
    button: {
      ...configButton,
      ...Layout.center,
      width: MetricsSizes.large + 170,
      alignSelf: 'center',
      borderWidth: 2,
      height: MetricsSizes.large + 20,
      borderRadius: 25,

      backgroundColor: Colors.backgroundButtonLogin,
      borderColor: 'white',
    },
    inputContainer: {
      marginTop: '5%',
    },
  });
}
