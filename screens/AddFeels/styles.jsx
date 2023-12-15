import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    marginLeft:'2%',
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 100,
  },
  imagePickerButton: {
    marginRight: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  cameraButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#06D6A0",
    borderRadius: 5,
    padding: 10,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 20,
    marginLeft: 30,
  },
  addButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  addButtonText: {
    color: "#052B38",
    textAlign: "center",
  },
  listItemTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
