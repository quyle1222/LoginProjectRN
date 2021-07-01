import { StyleSheet } from 'react-native';

export default function ({ Colors, Gutters, Layout, FontSize, MetricsSizes }) {
  const configTextHeader = {
    ...Gutters.smallTMargin,
    ...Gutters.smallLMargin,
  };

  const configCardView = {
    ...Gutters.regularLMargin,
    ...Gutters.regularRMargin,
  };
  const configFieldContainer = {
    ...Layout.fullWidth,
    ...Layout.row,
    ...Gutters.smallHPadding,
    ...Gutters.smallVPadding,
  };

  return StyleSheet.create({
    textHeader: {
      ...configTextHeader,
      color: Colors.white,
      fontSize: FontSize.large,
    },
    avatar: {
      marginTop: MetricsSizes.large,
      width: MetricsSizes.large + 100,
      height: MetricsSizes.large + 105,
      borderRadius: MetricsSizes.large + 45,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      borderWidth: 1,
      borderColor: Colors.grey,
    },
    cardView: {
      ...configCardView,
      backgroundColor: Colors.white,
      borderWidth: 2,
      marginTop: MetricsSizes.large,
      borderColor: Colors.grey,
      borderRadius: MetricsSizes.regular + 10,
      height: `${MetricsSizes.large + 40}%`,
    },
    fieldContainer: {
      ...configFieldContainer,
    },
    textField: {
      marginLeft: MetricsSizes.small,
      marginTop: MetricsSizes.large + 20,
      color: Colors.grey,
    },
    textFullName: {
      alignSelf: 'center',
      marginTop: '20%',
      fontSize: FontSize.regular,
    },
    textEmail: {
      alignSelf: 'center',
      fontSize: FontSize.regular,
    },
  });
}
