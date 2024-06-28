import * as React from 'react';
import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {TabView, SceneMap} from 'react-native-tab-view';
import {ALLStoresScreenTab} from 'screens/homeTabView/ALLStores.Screen';
import {InStoresScreenTab} from 'screens/homeTabView/InStores.Screen';

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'All Stores'},
      {key: 'second', title: 'In-Store'},
    ],
  };

  _handleIndexChange = (index: any) => this.setState({index});

  _renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: {interpolate: (arg0: {inputRange: any; outputRange: any}) => any};
  }) => {
    const inputRange = props.navigationState.routes.map((_, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text style={[{opacity}, styles.title]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: ALLStoresScreenTab,
    second: InStoresScreenTab,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

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
  title: {
    paddingHorizontal: normalize('horizontal', 20),
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.white,
  },
});
