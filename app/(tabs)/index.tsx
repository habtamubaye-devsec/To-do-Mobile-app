import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/todoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const colors = useTheme();
  const homeStyles = createHomeStyles(colors.colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const isLoading = todos === undefined;

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("error toggling todo:", error);
      Alert.alert("Error toggling todo:");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isComplete
                  ? colors.colors.gradients.success
                  : colors.colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isComplete
                    ? "transparent"
                    : colors.colors.border,
                },
              ]}
            >
              {item.isComplete && (
                <Ionicons name="checkmark" size={18} color="#ffffff" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                homeStyles.todoText,
                item.isComplete && {
                  textDecorationLine: "line-through",
                  color: colors.colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
            <View style={homeStyles.todoActions}>
              <TouchableOpacity onPress={() => {}}>
                <LinearGradient
                  colors={colors.colors.gradients.primary}
                  style={homeStyles.actionButton}
                >
                  <Ionicons name="pencil-outline" size={16} color="#ffffff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <LinearGradient
                  colors={colors.colors.gradients.warning}
                  style={homeStyles.actionButton}
                >
                  <Ionicons name="trash-outline" size={16} color="#ffffff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={colors.colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => String(item._id)}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
