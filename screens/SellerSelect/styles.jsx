import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    navigationArea:{
        zIndex: 1,
        borderRadius: 15,
        marginTop: '-40%',
        backgroundColor: '#ffffff',
        height:'100%',
        padding: 10
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      },
      pageTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      addButton: {
        backgroundColor: "#E0BE36",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      },
      addButtonText: {
        color: "#052B38",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      searchInput: {
        backgroundColor: "#fff",
        height: 40,
        borderColor: "#052B38",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
 
})