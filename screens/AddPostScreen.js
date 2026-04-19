import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { COLORS } from "../utils/colors";
import { useState } from "react";
import { apiClient } from "../utils/api";

export default function AddPostScreen() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  async function handleSubmit(){
    try{
     const response = await apiClient.post("/posts",{title,content});
     
     //testing(will be shown in command prompt)
     console.log("Post created: ", response.data);

     //clear the text
     setTitle("");
     setContent("");
     Alert.alert("Success", "Post Added successfully")
  } catch(error) {
    Alert.alert("Error","Failed to submit the post")
  }
}


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Post</Text>

      {/* This is for Title */}
      <TextInput
      style={styles.input}
      placeholder="Title"
      value={title}
      onChangeText={setTitle}
      />

      {/* This is for Content */}
      <TextInput
      style={styles.input}
      placeholder="Content"
      value={content}
      onChangeText={setContent}
      />

      {/* This is the submit button */}
      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
