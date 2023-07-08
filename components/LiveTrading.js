import React, { useState,useEffect } from "react";
import { 
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Modal,
    Button,
    TouchableWithoutFeedback,
  } from "react-native";
//   import ListItem from "./components/ListItem";
//   import Chart from "./components/Chart";
//   import { getMarketData } from "./services/cryptoService";
      import Chart from "./Chart";
      import ListItem from "./ListItem"
      import { getMarketData } from "../services/cryptoService";
  
  const ListHeader = () => (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
    </>
  );
  
  export default function LiveTrading() {
    const [data, setData] = useState([]);
  
  
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
      const fetchMarketData = async () => {
        const marketData = await getMarketData();
        setData(marketData);
      }
  
      fetchMarketData();
    }, [])
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    const handleListItemPress = (item) => {
      setSelectedItem(item);
      toggleModal();
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
              onPress={() => handleListItemPress(item)}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          style={styles.bottomSheet}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View style={styles.modalBackground} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {selectedItem ? (
                <Chart
                  currentPrice={selectedItem.current_price}
                  logoUrl={selectedItem.image}
                  name={selectedItem.name}
                  symbol={selectedItem.symbol}
                  priceChangePercentage7d={
                    selectedItem.price_change_percentage_7d_in_currency
                  }
                  sparkline={selectedItem?.sparkline_in_7d.price}
                  market_cap_rank={selectedItem.market_cap_rank}
                  price_change_24h={selectedItem.price_change_24h}
                  high_24h={selectedItem.high_24h}
                  low_24h={selectedItem.low_24h}
                />
              ) : null}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: "#fff",
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "700",
    },
    titleWrapper: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: "#A9ABB1",
      marginHorizontal: 16,
      marginTop: 16,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-end",
    },
    modalBackground: {
      flex: 1,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: 16,
    },
    selectedItemText: {
      marginBottom: 16,
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  