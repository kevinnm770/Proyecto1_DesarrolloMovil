import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { FileText, Menu, Wrench } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { PROJECTS } from "./_layout";

export default function ProjectDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const project = PROJECTS.find((item) => item.id === id) ?? PROJECTS[0];
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Menu size={22} color="#1e1b4b" />
        </TouchableOpacity>
        <Text style={styles.header}>DevKev</Text>
      </View>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <FileText size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>{project.title}</Text>
      </View>
      <Text style={styles.description}>{project.description}</Text>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <Wrench size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Tools</Text>
      </View>
      <View style={styles.toolsRow}>
        {project.tools.map((tool) => (
          <LinearGradient
            key={tool}
            colors={["#0A0925", "#25228B"]}
            start={{ x: 0.67, y: 0.97 }}
            end={{ x: 0.33, y: 0.03 }}
            style={styles.toolBox}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700" as const,
    fontStyle: "italic" as const,
    color: "#1e1b4b",
    marginLeft: 12,
  },
  sectionTitleRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 10,
  },
  sectionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#e0e0f5",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: "#1e1b4b",
  },
  description: {
    fontSize: 13,
    color: "#333333",
    lineHeight: 20,
    marginBottom: 24,
  },
  toolsRow: {
    flexDirection: "row" as const,
  },
  toolBox: {
    width: 90,
    height: 70,
    borderRadius: 14,
    marginRight: 14,
  },
};
