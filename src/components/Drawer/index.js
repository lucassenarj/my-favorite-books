import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Icon } from "./../";
import colors from "./../../utils/colors";

class Drawer extends Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            size={16}
            name="shop"
            family="GalioExtra"
            color={focused ? "white" : colors.MUTED}
          />
        );
      case "Details":
        return (
          <Icon
            size={16}
            name="md-woman"
            family="ionicon"
            color={focused ? "white" : colors.MUTED}
          />
        );
      default:
        return null;
    }
  };

  renderLabel = () => {
    const { title } = this.props;
    return null;
  };

  render() {
    const { focused, title, navigation } = this.props;
    return (
      <TouchableOpacity style={{ height: 55 }} onPress={() => {navigation.navigate(title)}}>
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null
          ]}
        >
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={18}
              color={
                focused ? "white" : "black"
              }
            >
              {title}
            </Text>
            {this.renderLabel()}
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default Drawer;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: colors.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  pro: {
    backgroundColor: colors.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36
  }
});
