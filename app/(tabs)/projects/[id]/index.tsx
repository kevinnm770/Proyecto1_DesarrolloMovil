import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { FileText, Link as LinkIcon, Menu, Wrench } from "lucide-react-native";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
          >
            <Text style={styles.toolText}>{tool}</Text>
          </LinearGradient>
        ))}
      </View>

      <View style={[styles.sectionTitleRow, { marginTop: 20 }]}>
        <View style={styles.sectionIcon}>
          <LinkIcon size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Link</Text>
      </View>
      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => Linking.openURL(project.link)}
      >
        <LinkIcon size={16} color="#312e81" />
        <Text style={styles.linkText}>{project.link.replace(/^https?:\/\//, "")}</Text>
      </TouchableOpacity>
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
    marginTop: 20,
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
    flexWrap: "wrap" as const,
    justifyContent: "center" as const,
    gap: 14,
  },
  toolBox: {
    width: 90,
    height: 70,
    borderRadius: 14,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    paddingHorizontal: 6,
  },
  toolText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  },
  linkRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    borderWidth: 1.5,
    borderColor: "#312e81",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  linkText: {
    color: "#1e1b4b",
    fontSize: 14,
    marginLeft: 12,
  },
};
