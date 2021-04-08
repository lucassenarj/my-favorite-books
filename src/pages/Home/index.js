import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";

import { Books, Icon } from "./../../components";

const { width } = Dimensions.get("screen");
const products = [
  {
    title: 'Hardly Anything Takes More Coura...',
    image: 'https://source.unsplash.com/dS2hi__ZZMk/840x840',
    price: 180,
    horizontal: true,
  },
  {
    title: 'Find the cheapest deals on our range...',
    image: 'https://source.unsplash.com/tb6ulgGY5Zc/840x840',
    price: 220,
  },
  {
    title: 'Adidas Tango Terry Jersey',
    image: 'https://source.unsplash.com/YHbcum51JB0/840x840',
    price: 40,
  },
  {
    title: 'Internet of Things (IoT) is Here to Stay',
    image: 'https://source.unsplash.com/I7BSOoPa5hM/840x840',
    price: 188,
    horizontal: true,
  },
  {
    title: 'Coffee - A Drop of Happiness in a Cup',
    image: 'https://source.unsplash.com/Ws4wd-vJ9M0/840x840',
    price: 180,
  },
];

export default class Home extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate("Pro")}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate("Pro")}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate("Pro")}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Books product={products[0]} horizontal />
          <Block flex row>
            <Books product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Books product={products[2]} />
          </Block>
          <Books product={products[3]} horizontal />
          <Books product={products[4]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        { this.renderTabs() }
        { this.renderProducts() }
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    marginTop: 40,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300"
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
