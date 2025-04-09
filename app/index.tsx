import { View, Text, ImageBackground, Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import Animated, {
    FadeInDown,
    withSpring,
} from "react-native-reanimated";


const App = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={require('@/assets/meditation-images/beach.webp')}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className="flex flex-1 px-1 justify-between">
                        <Animated.View
                            entering={FadeInDown.delay(300).springify(20)}
                        >
                    <Image source={require('@/assets/meditation-images/zenflow.png')}
                        style={{
                            width: '100%',
                            height: 300,
                            marginBottom:5,
                            marginTop:30
                        }}
                    />
                        <Text style={{
                                    fontFamily: 'PD2', 
                                    fontSize: 22,
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    color: 'white'
                                }}
                        >
                                Simplifying Meditation for Everyone
                            </Text>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(300).springify(20)}
                         style={{ marginBottom: 10 }} >
                            <CustomButton
                                onPress={() => router.push("/nature-meditate")}
                                title="Get Started"
                            />
                        </Animated.View>

                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default App;
