import { Contact as ContactIcon, Mail, Phone, Send } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

const CONTACT_INFO = [
  { id: "email", icon: Mail, value: "kevinnm770@gmail.com"},
  { id: "phone", icon: Phone, value: "8548-8532"},
  { id: "address", icon: ContactIcon, value: "La Lima, Cartago, Costa Rica" },
];

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DevKev</Text>

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionIcon}>
          <Send size={18} color="#4338ca" />
        </View>
        <Text style={styles.sectionTitle}>Contact</Text>
      </View>

      {CONTACT_INFO.map((item) => {
        const Icon = item.icon;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.row}
          >
            <Icon size={18} color="#312e81" />
            <Text style={styles.rowText}>{item.value}</Text>
          </TouchableOpacity>
        );
      })}
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
  row: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    borderWidth: 1.5,
    borderColor: "#312e81",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  rowText: {
    color: "#1e1b4b",
    fontSize: 14,
    marginLeft: 12,
  },
};
