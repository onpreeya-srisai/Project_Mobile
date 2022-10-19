import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const DATA = [
  {
    id: "1",
    name: "A",
    review: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    type: "A",
    conutry: "A",
    abstract: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    category: ["A", "B", "C"],
  },
  {
    id: "2",
    name: "B",
    review: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    type: "B",
    conutry: "B",
    abstract: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    category: ["A", "B", "D"],
  },
  {
    id: "3",
    name: "C",
    review: "ccccccccccccccccccccccccccccccccccc",
    type: "A",
    conutry: "B",
    abstract: "aaaaaaaaaaaaaaaaadddertergeaaaaaaaaaaaaaaaaaa",
    category: ["A", "C", "D"],
  },
  {
    id: "3",
    name: "frde",
    review: "bbbbbbbbbbbbbbbhyttttttttttttttttttttttttt",
    type: "B",
    conutry: "B",
    abstract: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    category: ["A", "B", "D"],
  },
];

const IMG = [
  {
    id: 1,
    img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
  },
  {
    id: 2,
    img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
  },
  {
    id: 3,
    img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
  },
];

const c = ["A", "B"];
const t = ["A", "B"];
const ca = ["A", "B", "D", "C"];

export const Search = (props) => {
  const navigation = props.nav;
  const [conutry, setCountry] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [pushCountry, setPushCountry] = useState(1);
  const [pushType, setPushType] = useState(1);
  const [pushCategory, setPushCategory] = useState(1);
  const [Search, setSearch] = useState([{ data: [] }]);

  const cc = c.map((item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (pushCountry === 1) {
            setCountry(item);
          }
          setPushCountry(-1 * pushCountry);
        }}
      >
        <Text>item</Text>
      </TouchableOpacity>
    );
  });

  const ct = t.map((item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (pushType === 1) {
            setType(item);
          }
          setPushType(-1 * pushType);
        }}
      >
        <Text>item</Text>
      </TouchableOpacity>
    );
  });

  const cca = ca.map((item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (pushCategory === 1) {
            setCategory(item);
          }
          setPushCountry(-1 * pushCategory);
        }}
      >
        <Text>item</Text>
      </TouchableOpacity>
    );
  });

  const show_data = () => {
    const data = DATA.map((item) => {
      if (conutry !== "" && type === "" && category === "") {
        if (item.conutry === conutry) {
          return item;
        }
      } else if (conutry === "" && type !== "" && category === "") {
        if (item.type === type) {
          return item;
        }
      } else if (conutry === "" && type === "" && category !== "") {
        if (item.category === category) {
          return item;
        }
      } else if (conutry !== "" && type !== "" && category === "") {
        if (item.conutry === conutry && item.type === type) {
          return item;
        }
      } else if (conutry !== "" && type === "" && category !== "") {
        if (item.conutry === conutry && item.category === category) {
          return item;
        }
      } else if (conutry === "" && type !== "" && category !== "") {
        if (item.category === category && item.type === type) {
          return item;
        }
      } else if (
        conutry !== "" &&
        type !== "" &&
        category !== "" &&
        type !== ""
      ) {
        if (item.conutry === conutry && item.category === category) {
          return item;
        }
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#191919", "#006262"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.6 }}
        style={styles.background}
      >
        {/* <View>
          <Text>ประเทศ :</Text>
          {cc}
        </View>
        <View>
          <Text>ประเภท :</Text>
          {ct}
        </View>
        <View>
          <Text>แนว :</Text>
          {cca}
        </View>

        <FlatList
            data={IMG}
            renderItem={renderIMG}
            keyExtractor={(item) => item.id}
            horizontal={true}
          /> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'orange',
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  box: {
    backgroundColor: "white",
    borderWidth: 2,
    flex: 1,
    margin: 20,
  },
});
