import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { Folder, Send, User } from "lucide-react-native";

const BAR_HEIGHT = 60;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#1e1b4b",
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          height: BAR_HEIGHT,
          borderRadius: BAR_HEIGHT / 2,
          borderTopWidth: 0,
          backgroundColor: "#C8D5FF",
          elevation: 0,
          marginLeft: 25,
          marginRight: 25,
        },
        tabBarItemStyle: {
          height: BAR_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          margin: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 11,
            marginLeft: 5,
          },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <LinearGradient
                colors={["#0A0925", "#25228B"]}
                start={{ x: 0.67, y: 0.97 }}
                end={{ x: 0.33, y: 0.03 }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <User color={color} size={size} />
              </LinearGradient>
            ) : (
              <User color={color} size={size} />
            ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 11
          },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <LinearGradient
                colors={["#0A0925", "#25228B"]}
                start={{ x: 0.67, y: 0.97 }}
                end={{ x: 0.33, y: 0.03 }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Folder color={color} size={size} />
              </LinearGradient>
            ) : (
              <Folder color={color} size={size} />
            ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: 11,
            marginRight: 5,
          },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <LinearGradient
                colors={["#0A0925", "#25228B"]}
                start={{ x: 0.67, y: 0.97 }}
                end={{ x: 0.33, y: 0.03 }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Send color={color} size={size} />
              </LinearGradient>
            ) : (
              <Send color={color} size={size} />
            ),
        }}
      />
    </Tabs>
  );
}
