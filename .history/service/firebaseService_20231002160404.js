import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from '../config/firabase';
import {  addDoc,collection } from 'firebase/firestore';

export default function firebaseService() {
  return (
    <View>
      <Text>firebaseService</Text>
    </View>
  )
}

const styles = StyleSheet.create({})