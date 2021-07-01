/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    LoginImage: require('@/Assets/Images/Image.png'),
    backgroundImageDetails: require('@/Assets/Images/background.jpg'),
    settingIcon: require('@/Assets/Images/setting.png'),
    editIcon: require('@/Assets/Images/edit.png'),
  };
}
