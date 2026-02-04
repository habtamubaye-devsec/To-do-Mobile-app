import { View, Text, Switch } from "react-native";
import { useState } from "react";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Preferences = () => {
  const [isAutosync, setIsAutosync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.title}>Preferences</Text>
      {/* Dark Mode */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="moon" size={24} color="#ffffff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={isDarkMode ? "#fff" : colors.textMuted}
          ios_backgroundColor={"red"}
        />
      </View>

      {/* Notifications */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="notifications" size={24} color="#ffffff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
          trackColor={{ false: colors.border, true: colors.warning }}
          thumbColor={isDarkMode ? "#fff" : colors.textMuted}
          ios_backgroundColor={"red"}
        />
      </View>

      {/* AUTO-SYNC */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="sync" size={24} color="#ffffff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto-Sync</Text>
        </View>
        <Switch
          value={isAutosync}
          onValueChange={setIsAutosync}
          trackColor={{ false: colors.border, true: colors.success }}
          thumbColor={isDarkMode ? "#fff" : colors.textMuted}
          ios_backgroundColor={"red"}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
