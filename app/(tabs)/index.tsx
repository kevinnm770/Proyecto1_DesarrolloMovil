import { LinearGradient } from "expo-linear-gradient";
import { User, Wrench } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>DevKev</Text>

      <LinearGradient
        colors={["#0A0925", "#25228B"]}
          start={{ x: 0.67, y: 0.97 }}
          end={{ x: 0.33, y: 0.03 }}
        style={styles.card}
      >
        <View style={styles.avatar} />

        <Text style={styles.name}>Kevin Naranjo Mendoza</Text>
        <Text style={styles.role}>Software developer</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Skills</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>Years old</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <User size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>About me</Text>
      </View>
      <Text style={styles.aboutText}>
        Este primer proyecto programado se centra en la aplicación práctica de
        los principios de diseño de interfaces de usuario (UI) y experiencia
        de usuario (UX).
      </Text>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <Wrench size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Skills</Text>
      </View>
      <View style={styles.skillsRow}>
        <LinearGradient
          colors={["#0A0925", "#25228B"]}
          start={{ x: 0.67, y: 0.97 }}
          end={{ x: 0.33, y: 0.03 }}
          style={styles.skillBox}
        />
        <LinearGradient
          colors={["#0A0925", "#25228B"]}
          start={{ x: 0.67, y: 0.97 }}
          end={{ x: 0.33, y: 0.03 }}
          style={styles.skillBox}
        />
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
  header: {
    fontSize: 22,
    fontWeight: "700" as const,
    fontStyle: "italic" as const,
    color: "#1e1b4b",
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    alignItems: "center" as const,
    marginBottom: 24,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#d9d9e3",
    marginBottom: 16,
  },
  name: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700" as const,
  },
  role: {
    color: "#c7c7e0",
    fontSize: 13,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: "row" as const,
    alignSelf: "stretch" as const,
    justifyContent: "space-around" as const,
  },
  statItem: {
    alignItems: "center" as const,
  },
  statNumber: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700" as const,
  },
  statLabel: {
    color: "#c7c7e0",
    fontSize: 12,
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
  aboutText: {
    fontSize: 13,
    color: "#333333",
    lineHeight: 20,
    marginBottom: 24,
  },
  skillsRow: {
    flexDirection: "row" as const,
    justifyContent: "center" as const,
  },
  skillBox: {
    width: 90,
    height: 70,
    borderRadius: 14,
    marginHorizontal: 7,
  },
};
