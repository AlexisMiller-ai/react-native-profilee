import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/images/Alexis.jpeg")}
        style={styles.image}
      />

      <Text style={styles.name}>Alexis Gonçalves</Text>

      <Text style={styles.bio}>
        Sou estudante de tecnologia e desenvolvimento mobile.
        Estou aprendendo React Native e criando meus primeiros aplicativos.
        Gosto de programar e explorar novas tecnologias.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  bio: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 30,
    color: "white",
  },
});