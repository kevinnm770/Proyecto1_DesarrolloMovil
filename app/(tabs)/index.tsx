import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { GraduationCap, User, Wrench } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

const GRADES = [
  {
    degree:
      "Bachelor's Degree in Mathematics Teaching with Technological Environments",
    institution: "Costa Rica Institute of Technology (TEC)",
  },
  {
    degree: "Associate Degree in Software Application Development",
    institution: "FUNDATEC — 2024 - Present",
  },
];

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Python",
  "MySQL",
  "Oracle APEX",
  "C",
  "C++",
  "jQuery",
  "Bootstrap",
  "Laravel",
  "Java",
  "Spring Boot",
  "React Native",
];

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
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.avatar}
          contentFit="cover"
        />

        <Text style={styles.name}>Kevin Naranjo Mendoza</Text>
        <Text style={styles.role}>Software developer</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{SKILLS.length}</Text>
            <Text style={styles.statLabel}>Skills</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>Years old</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4</Text>
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
        Creativity and curiosity have always driven me to learn and
        understand what happens around me. When I discovered the world of
        programming, I found a way to put my knowledge into practice
        immediately and apply my creativity without limits. This passion
        drove me to train myself, first, as a self-taught learner in various
        programming languages and, later, formally.
        {"\n\n"}
        Besides programming, I have a deep interest in mathematics, not only
        from a learning standpoint, but also from a teaching one. That is why
        I earned a degree in Mathematics Teaching with Technological
        Environments from the Costa Rica Institute of Technology (TEC).
      </Text>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <Wrench size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Skills</Text>
      </View>
      <View style={styles.skillsRow}>
        {SKILLS.map((skill) => (
          <LinearGradient
            key={skill}
            colors={["#0A0925", "#25228B"]}
            start={{ x: 0.67, y: 0.97 }}
            end={{ x: 0.33, y: 0.03 }}
            style={styles.skillBox}
          >
            <Text style={styles.skillText}>{skill}</Text>
          </LinearGradient>
        ))}
      </View>

      <View style={[styles.sectionTitleRow, { marginTop: 20 }]}>
        <View style={styles.sectionIcon}>
          <GraduationCap size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Grades</Text>
      </View>
      {GRADES.map((grade) => (
        <View key={grade.degree} style={styles.gradeItem}>
          <Text style={styles.gradeDegree}>{grade.degree}</Text>
          <Text style={styles.gradeInstitution}>{grade.institution}</Text>
        </View>
      ))}
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
    paddingBottom: 120,
  },
  header: {
    fontSize: 22,
    fontWeight: "700" as const,
    fontStyle: "italic" as const,
    color: "#1e1b4b",
    marginTop: 20,
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
    flexWrap: "wrap" as const,
    justifyContent: "center" as const,
    gap: 12,
  },
  skillBox: {
    width: 90,
    height: 60,
    borderRadius: 14,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    paddingHorizontal: 6,
  },
  skillText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  },
  gradeItem: {
    marginBottom: 14,
  },
  gradeDegree: {
    fontSize: 13,
    fontWeight: "700" as const,
    color: "#1e1b4b",
    lineHeight: 18,
  },
  gradeInstitution: {
    fontSize: 12,
    color: "#666666",
    marginTop: 2,
  },
};
