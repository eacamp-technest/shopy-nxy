import React, {Fragment, useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {TabView, SceneMap} from 'react-native-tab-view';

type Route = {
  key: string;
  title: string;
};
interface ITabView {
  screens: Route[];
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  focusTitle?: StyleProp<ViewStyle>;
  disabledFocusTitle?: StyleProp<ViewStyle>;
  renderSceneProps: {[key: string]: React.ComponentType<any>};
}

export const TabViewExample: React.FC<ITabView> = ({
  style,
  screens,
  titleStyle,
  renderSceneProps,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(screens);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleIndexChange = (index: number) => setIndex(index);

  const renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: {interpolate: (arg0: {inputRange: any; outputRange: any}) => any};
  }) => {
    const inputRange = props.navigationState.routes.map((_, i) => i);

    return (
      <View style={[styles.tabBar, style]}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? colors.white : colors.skyBlue.base,
            ),
          });

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[titleStyle, {color}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap(renderSceneProps);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    // paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },

  opacity: {
    color: 'red', // Вы можете установить и другие свойства здесь, если нужно
  },
});
