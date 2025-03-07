import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
  },
  productText: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#555",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  cartTotalContainer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  cartTotalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },

  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },

});
