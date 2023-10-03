import React from "react";
import useFetch from "../service/useFetch";
import { Pressable, View, Text } from "react-native";

function TestingFetch() {
  const { data, isLoading, refetch } = useFetch();

  //check if function is responding correctly && cattch error before Clearance tests
  if (isLoading) {
    return <p>Loading...</p>;
  }

  <View>
    {/* pressable is the same as Touchable opacity */}
    <Pressable onPress={refetch}>Get Notes</Pressable>
    <View>
      
        {data.map((data) =>(
            <Text>
            {data.title}:
            {data.note}
           </Text> 
        ) )}
      
    </View>
  </View>;
}

export default TestingFetch;