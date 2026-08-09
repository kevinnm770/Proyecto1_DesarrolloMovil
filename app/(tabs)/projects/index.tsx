import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Folder } from "lucide-react-native";

const PROJECTS = [
  { id: "1", title: "Project #1", tools: ["Tool 1", "Tool 2", "Tool 3"] },
  { id: "2", title: "Project #2", tools: ["Tool 1", "Tool 2", "Tool 3"] },
  { id: "3", title: "Project #3", tools: ["Tool 1", "Tool 2", "Tool 3"] },
  { id: "4", title: "Project #4", tools: ["Tool 1", "Tool 2", "Tool 3"] },
  { id: "5", title: "Project #5", tools: ["Tool 1", "Tool 2", "Tool 3"] },
];

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DevKev</Text>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <Folder size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>My projects</Text>
      </View>

      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push(`/projects/${item.id}`)}
          >
            <LinearGradient
              colors={["#0A0925", "#25228B"]}
              start={{ x: 0.67, y: 0.97 }}
              end={{ x: 0.33, y: 0.03 }}
              style={styles.card}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.toolsRow}>
                {item.tools.map((tool) => (
                  <Text key={tool} style={styles.toolText}>
                    {tool}
                  </Text>
                ))}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700" as const,
    fontStyle: "italic" as const,
    color: "#1e1b4b",
    marginBottom: 16,
  },
  sectionTitleRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 16,
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
  list: {
    paddingBottom: 100,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700" as const,
    marginBottom: 10,
  },
  toolsRow: {
    flexDirection: "row" as const,
  },
  toolText: {
    color: "#c7c7e0",
    fontSize: 12,
    marginRight: 16,
  },
};
