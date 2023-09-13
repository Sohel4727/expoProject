import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { burgerApi } from "../Api/Api";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const HomeScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    burgerApi()
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Nearest Restaurant</Text>
        <Text style={styles.viewMore_Text}>View More</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {product.map((item, index) => (
          <TouchableOpacity style={styles.card} key={index}>
            <Image style={styles.productImage} source={{ uri: item.img }} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
    width: "100%",
  },
  headingContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
  },
  viewMore_Text: {
    color: "orange",
  },
  card: {
    borderRadius: responsiveWidth(4),
    width: 150,
    height: 200,
    marginHorizontal: responsiveWidth(1),
    marginVertical:responsiveHeight(2),
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5, // Add elevation for the shadow effect
    shadowColor: "rgba(0, 0, 0, 0.1)", // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset (x, y)
    shadowOpacity: 5, // Shadow opacity (0 to 1)
    shadowRadius: 10, // Shadow radius
  },
  productImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    marginVertical: responsiveHeight(2),
  },
  productName: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: responsiveFontSize(2),
  },
});
