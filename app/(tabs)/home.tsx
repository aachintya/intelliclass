import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AttendanceUploader from "../../components/Attendance/AttendanceUploader"; // Importing the Attendance Uploader component

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerbar}>
        <TouchableOpacity>
          <FontAwesome5 name="bars" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hello, User</Text>
        <TouchableOpacity>
          <Ionicons name="settings" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* AttendanceUploader Component - this will render the camera functionality for attendance */}
      <View style={styles.attendanceContainer}>
        <AttendanceUploader />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerbar: {
    backgroundColor: "#1c1c1c",
    width: wp("100%"),
    height: hp("8%"),
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
  },
  headerText: {
    color: "#ffffff",
    fontSize: hp("3%"),
    fontWeight: "400",
  },
  attendanceContainer: {
    flex: 1, // Taking up the remaining space after the header
    justifyContent: "center",
    alignItems: "center",
  },
});
