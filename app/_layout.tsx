import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="(tabs)"
      options={{  title: "Home" }}
    />
    {/* <Stack.Screen
      name="about"
      options={{ title: "About Us" }}
    /> */}
  </Stack>
}
