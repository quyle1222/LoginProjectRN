import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import { FontSize } from './Variables';

export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      textHeader: {
        margin: 10,
        fontWeight: 'bold',
      },
      textInputLogin: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        paddingLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
      },
      LoginInputContainer: {
        marginTop: '5%',
      },
      LoginImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: '40%',
      },
      LoginButton: {
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
      detailsTextHeader: {
        color: Colors.white,
        marginLeft: 10,
        marginTop: '5%',
        fontSize: FontSize.large,
      },
      detailsCardView: {
        marginTop: '13%',
        marginLeft: '5%',
        height: '80%',
        marginRight: '5%',
        borderColor: Colors.white,
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: 'white',
      },
      detailsAvatar: {
        width: 150,
        height: 115,
        borderRadius: 75,
        alignSelf: 'center',
        marginTop: '12%',
        zIndex: 1,
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'grey',
      },
      topCardView: {
        margin: 10,
      },
      fieldContainer: {
        // marginTop: 50,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
      },
      textField: {
        marginLeft: 10,
        marginTop: 50,
        color: Colors.grey,
      },
    }),
  };
}
