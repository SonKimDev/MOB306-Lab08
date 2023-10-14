import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 8,
    },
    title:{
      color: 'black',
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
    },
    input:{
      borderWidth: 1,
      paddingHorizontal: 8,
      fontSize: 20,
      color: 'black'
    },
    itemContainer:{
      padding: 20,
      backgroundColor: 'white',
      elevation: 8,
    },
    itemName:{
      textAlign: 'center',
    },
  })

export default Styles