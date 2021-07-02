import { ShowInfo } from '@/Components';
import { Config } from '@/Config';
import { LocalStorage } from '@/Services/utils/LocalStorage';
import { navigationConstant } from '@/Services/utils/Navigation';
import { useTheme } from '@/Theme';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../../Store/UserInfo/UserActions';

const DetailsContainer = ({ navigation }) => {
  const { Common, Layout, Images, Container } = useTheme();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const locale = NativeModules.I18nManager.localeIdentifier;

  const User = useSelector(state => state.userInfo.userInfo);

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  const checkLanguage = () => {
    if (locale === 'jp_JP') {
      changeLanguage('jp');
    } else {
      changeLanguage('en');
    }
  };

  useEffect(async () => {
    () => checkLanguage();
    const token = await LocalStorage.getToken();
    if (token) {
      const id = await LocalStorage.getUserId();
      dispatch(UserActions.userInfo.action(id));
    } else {
      navigation.navigate(navigationConstant.LOGIN);
    }
  });
  const textInfo = [
    User ? User.userFullName : '',
    User ? User.userBirthDay : '',
    User ? User.userAge : '',
    User ? User.userAddress : '',
    User ? User.userShortIntroduction : '',
  ];

  const title = [
    t('fullName'),
    t('birthDay'),
    t('age'),
    t('address'),
    t('intro'),
  ];

  const showList = index => {
    return (
      <ShowInfo
        title={title[index]}
        textInfo={textInfo[index]}
        stylesContainer={Container.details.fieldContainer}
        styleText={Container.details.textField}
      />
    );
  };

  return (
    <View style={Layout.fullSize}>
      <ImageBackground
        source={Images.backgroundImageDetails}
        style={Layout.fill}>
        <Text style={Container.details.textHeader}>{t('profile')}</Text>
        <Image
          source={{
            uri: `${Config.BASE_URL}${User ? User.userAvatarPath : ''}`,
          }}
          style={Container.details.avatar}
        />
        <View style={Container.details.cardView}>
          <View>
            <View style={[Layout.row, Layout.fullWith, Common.topCardView]}>
              <Image source={Images.settingIcon} />
              <Image style={{ marginLeft: 'auto' }} source={Images.editIcon} />
            </View>
            <Text style={Container.details.textFullName}>
              {User ? User.userFullName : ''}
            </Text>
            <Text style={Container.details.textEmail}>
              {User ? User.userMail : ''}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ borderTopWidth: 2, marginTop: 20 }}>
            {showList(0)}
            {showList(1)}
            {showList(2)}
            {showList(3)}
            {showList(4)}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('jp')}>
          <Text>JP</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default DetailsContainer;
