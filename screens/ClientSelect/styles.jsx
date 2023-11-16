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
        marginBottom: 20,
      },
      addButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#E0BE36",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
      },
      addButtonText: {
        color: '#052B38',
        fontSize: 16,
        marginLeft: 10,
      },
      icon: {
        width: 24,
        height: 24,
      },
      icon2: {
        width: 8,
        height: 8,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 10,
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
 
})