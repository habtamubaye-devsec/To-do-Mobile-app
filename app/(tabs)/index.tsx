import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorScheme, useTheme } from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/images/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const { toggleDarkMode } = useTheme();
  const colors = useTheme();
  const homeStyles = createHomeStyles(colors.colors);

  return (
    <SafeAreaView style={homeStyles.safeArea}>
    <View style={homeStyles.container}>
        <View >
        <Text>Welcome to the App!</Text>
      </View>
      <View >
        <Text>Get started by editing app/index.tsx</Text>
      </View>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text >Tap here to toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}

