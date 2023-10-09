import { ActivityIndicator, StyleSheet , View } from 'react-native'
import React from 'react'

const Loader = ({loading}) => {
    if(!loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    },
    loader: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
})