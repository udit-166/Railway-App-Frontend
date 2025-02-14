import { useTheme } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getFontSize, getHeight, getWidth } from '../../utils/pixelSizeCalc';

const CustomerSupportScreen = () => {
  const [message, setMessage] = useState('');
  const { colors, fonts } = useTheme();
  const [isTyping, setIsTyping] = useState(false); // For user typing indicator
  const [isBotTyping, setIsBotTyping] = useState(false); // For bot typing indicator
  const [chatMessages, setChatMessages] = useState([ { text: 'Hello! How can I assist you today?', from: 'chatbot' } ]);
  const scrollViewRef = useRef(); // Create a ref for ScrollView

  // Scroll to bottom whenever the chatMessages state changes
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatMessages]); // This will trigger every time chatMessages changes

  const handleSendMessage = () => {
    if (message.trim()) {
      // First add the user message
      setChatMessages(prevMessages => [
        ...prevMessages,
        { text: message, from: 'user' },
      ]);
      setMessage('');
      setIsTyping(true); // Set user typing animation to true

      // Start typing animation for bot after the user message
      setIsBotTyping(true);

      // Simulate bot's response after a slight delay (typing animation)
      setTimeout(() => {
        setChatMessages(prevMessages => [
          ...prevMessages,
          { text: 'Thank you for reaching out! How can I assist you further?', from: 'chatbot' },
        ]);
        setIsTyping(false); // Hide user typing animation
        setIsBotTyping(false); // Hide bot typing animation
      }, 2000); // You can adjust this timeout to control the bot's typing speed
    }
  };

  return (
    <View style={{ flex: 1, padding: getWidth(20) }}>
      {/* Heading and instruction */}
      <Text style={{ fontSize: getFontSize(22), fontWeight: '600', marginBottom: getWidth(10), color: colors.offWhite }}>
        Customer Care Support
      </Text>
      <Text style={{ fontSize: getFontSize(14), color: colors.label, marginBottom: getWidth(20) }}>
        Please communicate with the chatbot to mention your issues.
      </Text>
      
      {/* Chat Box */}
      <ScrollView
        ref={scrollViewRef} // Set the ref to ScrollView
        style={{ flex: 1, marginBottom: getWidth(20) }}
        contentContainerStyle={{ paddingBottom: getWidth(10) }}
      >
        {chatMessages.map((msg, index) => (
          <View 
            key={index} 
            style={[ 
              { flexDirection: msg.from === 'user' ? 'row-reverse' : 'row', 
                alignItems: 'center', 
                marginBottom: getWidth(10),
                gap:getWidth( 10)
              }]
            }
          >
            {/* Chatbot Icon or User Avatar */}
            {msg.from !== 'user' ? (
              <MaterialCommunityIcons name="robot" size={getFontSize(24)} color={colors.primary} />
            ) : (
              <Image source={require("../../Images/avatar.png")} style={styles.avatar} />
            )}
            
            {/* Message Bubble */}
            <View style={[styles.messageContainer, msg.from === 'user' ? styles.userMessage : styles.chatbotMessage]}>
              <Text style={msg.from === 'user' ? styles.userMessageText : styles.botMessageText}>{msg.text}</Text>
            </View>
          </View>
        ))}

        {/* Typing Indicator for bot */}
        {isBotTyping && (
          <View style={[styles.typingIndicatorContainer, { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }]}>
            <MaterialCommunityIcons name="robot" size={getFontSize(24)} color={colors.primary} />
            <FastImage 
              source={require('../../Images/Typing.gif')} // Ensure this is the correct path
              style={styles.gifImage} 
              resizeMode={FastImage.resizeMode.contain} // Make sure the GIF scales properly
            />
          </View>
        )}

        {/* Typing Indicator for user */}
        
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
          
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
        <Ionicons name="send-outline" size={getFontSize(24)} color={colors.offWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: getWidth(30),
    height: getHeight(30),
    borderRadius: getWidth(15),
  },
  gifImage: {
    width: getWidth(100), // Increased the size of the GIF for better visibility
    height: getHeight(100), // Increased the size of the GIF for better visibility
    // marginBottom: 20, // Space between GIF and text
  },
  messageContainer: {
    maxWidth: '80%',
    padding: getWidth(10),
    marginBottom: getWidth(10),
    borderRadius: getWidth(15),
  },
  userMessage: {
    backgroundColor: '#7b7d86',
    alignSelf: 'flex-end',
  },
  chatbotMessage: {
    backgroundColor: '#0e1419',
    alignSelf: 'flex-start',
  },
  userMessageText: {
    fontSize: getFontSize(16),
    color: '#fff',
  },
  botMessageText: {
    fontSize: getFontSize(16),
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: getWidth(1),
    borderTopColor: '#ddd',
    paddingTop: getWidth(10),
    paddingBottom: getWidth(10),
  },
  input: {
    flex: 1,
    height: getHeight(40),
    borderWidth: getWidth(1),
    borderColor: '#ddd',
    color:"#fff",
    borderRadius: getWidth(20),
    paddingLeft: getWidth(10),
    marginRight: getWidth(10),
  },
  sendButton: {
    backgroundColor: '#0078D4',
    paddingVertical: getHeight(8),
    paddingHorizontal: getWidth(8),
    borderRadius: getWidth(10),
  },
  sendButtonText: {
    color: '#fff',
    fontSize: getFontSize(16),
  },
  typingIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
});

export default CustomerSupportScreen;
