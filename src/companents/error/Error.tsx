import React from "react";
import { View, Button, Text } from "react-native";
import LottieView from "lottie-react-native";

const Error = ({ onPress,errorMessage }: { onPress: () => void,errorMessage:string }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                source={require("../../assets/Error.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
            />
            <Text style={{ color: 'red', marginBottom: 20 }}>{errorMessage}</Text>

            <Button title="Try Again" onPress={onPress} />
        </View>
    );
};

export default Error;
