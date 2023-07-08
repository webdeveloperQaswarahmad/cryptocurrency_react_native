import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline,
  high_24h,
  low_24h,

  price_change_24h,

  market_cap_rank,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";
  return (
    <View style={styles.chartWrapper}>
      <View style={styles.titlesWrapper}>
        <View>
          <Text style={styles.details}>{name} Detail</Text>
        </View>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subtitle}>
              {name} ({symbol.toUpperCase()})
            </Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>

          <Text style={[styles.title, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Text>Market Rank {market_cap_rank}</Text>
            </View>
            <Text>Price Change ${price_change_24h.toFixed(2)}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.maxPrice}>
              Max Price ${high_24h.toLocaleString("en-US", { currency: "USD" })}
            </Text>

            <Text style={[{ color: priceChangeColor }]}>
              Mini Price ${low_24h.toFixed(2)}
            </Text>
          </View>
        </View>
        <Image source={require("../assets/graph.png")}
         style={styles.graph} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  marketRank: {
    marginTop: 10,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1",
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  maxPrice: {
    fontSize: 16,
    fontWeight: "300",
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
  bottomPart: {
    marginTop: 40,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  details: {
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 90,
    fontWeight: "500",
  },
  graph:{
    width: 297,
    height: 154,
    marginRight: 4,
    marginTop:4
  }
});

export default Chart;
