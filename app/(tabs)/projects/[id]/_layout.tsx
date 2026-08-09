import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Folder } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const PROJECTS = [
  {
    id: "1",
    title: "Project #1",
    description:
      "Este primer proyecto programado se centra en la aplicación práctica de los principios de diseño de interfaces de usuario (UI) y experiencia de usuario (UX).",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    id: "2",
    title: "Project #2",
    description:
      "Este primer proyecto programado se centra en la aplicación práctica de los principios de diseño de interfaces de usuario (UI) y experiencia de usuario (UX).",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    id: "3",
    title: "Project #3",
    description:
      "Este primer proyecto programado se centra en la aplicación práctica de los principios de diseño de interfaces de usuario (UI) y experiencia de usuario (UX).",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    id: "4",
    title: "Project #4",
    description:
      "Este primer proyecto programado se centra en la aplicación práctica de los principios de diseño de interfaces de usuario (UI) y experiencia de usuario (UX).",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    id: "5",
    title: "Project #5",
    description:
      "Este primer proyecto programado se centra en la aplicación práctica de los principios de diseño de interfaces de usuario (UI) y experiencia de usuario (UX).",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => {
          props.navigation.closeDrawer();
          router.push("/projects");
        }}
      >
        <View style={styles.drawerItemRow}>
          <Folder size={16} color="#1e1b4b" />
          <Text style={styles.drawerItemText}>Projects</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
      {PROJECTS.map((project) => {
        const active = project.id === id;
        return (
          <TouchableOpacity
            key={project.id}
            style={[styles.drawerItem, active && styles.drawerItemActive]}
            onPress={() => {
              props.navigation.closeDrawer();
              router.replace(`/projects/${project.id}`);
            }}
          >
            <Text style={[styles.drawerItemText, active && styles.drawerItemTextActive]}>
              {project.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
}

export default function ProjectDetailLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawer,
      }}
    >
      <Drawer.Screen name="index" />
    </Drawer>
  );
}

const styles = {
  drawer: {
    backgroundColor: "#ffffff",
    width: 240,
  },
  drawerContent: {
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  drawerItem: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  drawerItemActive: {
    backgroundColor: "#e0e0f5",
  },
  drawerItemRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  drawerItemText: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: "#1e1b4b",
    marginLeft: 10,
  },
  drawerItemTextActive: {
    color: "#312e81",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0f5",
    marginVertical: 8,
  },
};
