import React, { useState, useRef } from 'react';
import {ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, FlatList, Dimensions } from 'react-native';

const ProfileScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'Personal' | 'Professional' | 'Company'>('Personal');

  const flatListRef = useRef<FlatList<string> | null>(null);

  const personalImages = [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/2/200/300',
    'https://picsum.photos/id/3/200/300',
    'https://picsum.photos/id/4/200/300',
    'https://picsum.photos/id/5/200/300',
    'https://picsum.photos/id/6/200/300',
    'https://picsum.photos/id/21/200/300',
    'https://picsum.photos/id/22/200/300',
    'https://picsum.photos/id/23/200/300',
    'https://picsum.photos/id/24/200/300',
    'https://picsum.photos/id/25/200/300',
    'https://picsum.photos/id/26/200/300'
  ];

  const professionalImages = [
    'https://picsum.photos/id/37/200/300',
    'https://picsum.photos/id/38/200/300',
    'https://picsum.photos/id/39/200/300',
    'https://picsum.photos/id/40/200/300',
    'https://picsum.photos/id/41/200/300',
    'https://picsum.photos/id/42/200/300',
    'https://picsum.photos/id/47/200/300',
    'https://picsum.photos/id/48/200/300',
    'https://picsum.photos/id/49/200/300',
    'https://picsum.photos/id/50/200/300',
    'https://picsum.photos/id/51/200/300',
    'https://picsum.photos/id/52/200/300'
  ];

  const companyImages = [
    'https://picsum.photos/id/63/200/300',
    'https://picsum.photos/id/64/200/300',
    'https://picsum.photos/id/65/200/300',
    'https://picsum.photos/id/66/200/300',
    'https://picsum.photos/id/67/200/300',
    'https://picsum.photos/id/68/200/300',
    'https://picsum.photos/id/73/200/300',
    'https://picsum.photos/id/74/200/300',
    'https://picsum.photos/id/75/200/300',
    'https://picsum.photos/id/76/200/300',
    'https://picsum.photos/id/77/200/300',
    'https://picsum.photos/id/78/200/300'
  ];

  const getImages = () => {
    switch (activeTab) {
      case 'Personal':
        return personalImages;
      case 'Professional':
        return professionalImages;
      case 'Company':
        return companyImages;
      default:
        return [];
    }
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImageIndex(null);
  };

  const renderImage = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={styles.fullScreenImage}
      resizeMode="contain"
      onError={() => console.log(`Failed to load image: ${item}`)}
    />
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      
      <View style={styles.backgroundImageContainer}>
        <Image source={require('./src/assets/background.jpg')} style={styles.backgroundImage} />
      {/* Tabs Section */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.vectimgView}>
          <Text style={styles.vectimg}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Personal' && styles.activeTab]}
          onPress={() => setActiveTab('Personal')}
        >
          <Text style={[styles.tabText, activeTab === 'Personal' && styles.activeTabText]}>
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Professional' && styles.activeTab]}
          onPress={() => setActiveTab('Professional')}
        >
          <Text style={[styles.tabText, activeTab === 'Professional' && styles.activeTabText]}>
            Professional
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Company' && styles.activeTab]}
          onPress={() => setActiveTab('Company')}
        >
          <Text style={[styles.tabText, activeTab === 'Company' && styles.activeTabText]}>
            Company
          </Text>
        </TouchableOpacity>
      </View>
      {/* Follower Section*/}
      <View style={styles.follSec}>
      <Image
              source={require('./src/assets/icons8-heart-16.png')}
              style={styles.follImg}
            />
          <Text style={styles.follText}>
            
             9000 followers
          </Text>

          {/* Follow and Share Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.follText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.follText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View> 
        {/* Profile Section*/}
        <View style={styles.proSec}>
          <View style={styles.profileText}>
            <Text style={styles.proText1}>Aizen Souske</Text>
            <Text style={styles.proText}>Antagonist</Text>
            <Text style={styles.proText}><Image
                source={{uri: 'https://img.icons8.com/color/48/marker--v1.png'}}
                style={styles.followersImage}
              />{' '}
               Soul Society, Bleach</Text>
            <Text style={styles.description}>Hokyogu</Text>
            <Text style={styles.hashtags}>#Bleach #Manipulator</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('./src/assets/download.jpeg')}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png',
              }}
              style={styles.badgeImage}
            />
          </View>
        </View>

      {/* Content Section */}
      <View style={styles.content}>
        {getImages().map((image, index) => (
          <TouchableOpacity key={index} onPress={() => openImageModal(index)}>
            <Image
              style={styles.postImage}
              source={{ uri: image }}
              onError={() => console.log(`Failed to load image: ${image}`)}
              defaultSource={require('./src/assets/image.png')}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
      

      {/* Modal for Image Viewing */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeImageModal}
      >
        <TouchableWithoutFeedback onPress={closeImageModal}>
          <View style={styles.modalContainer}>
            <FlatList
              ref={flatListRef}
              data={getImages()}
              renderItem={renderImage}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              pagingEnabled
              initialScrollIndex={selectedImageIndex ?? 0}
              onScrollToIndexFailed={(info) => {
                console.log('Scroll failed', info);
                if (info.index >= 0) {
                  // Attempt to scroll to the index again
                  setTimeout(() => {
                    flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
                  }, 500);
                }
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  proText:{
    fontSize: 16,
    paddingVertical:2,
    color:'#fff',
  },
  profileText:{
    paddingLeft:20,
    color:'#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  occupation: {
    fontSize: 18,
    color: '#888',
  },
  location: {
    fontSize: 16,
    color: '#aaa',
  },
  followersImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  followers: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#888', // Change active tab color as needed
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff', // Change active tab text color as needed
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // backgroundColor:'#480badc'
  },
  postImage: {
    width: Dimensions.get('window').width / 3 - 15, // Adjust width to fit 3 images per row
    height: Dimensions.get('window').width / 3 - 15, // Keep the images square
    marginVertical: 10,
    // borderRadius: 10,
    backgroundColor: 'f63fff', // Light background to help with visibility
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fullScreenImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  vectimg: {
    fontSize: 30,
    color:'white',
    marginTop:-15,
  },
  vectimgView:{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
      borderRadius: 15,
      height:40,
      width:50,
  },
  follSec: {
    // flex:1,
    flexDirection: 'column', // Ensures items stack vertically
    // alignItems: 'left', // Center items horizontally
    marginBottom: 20, // Adjust this value to control the space
    paddingHorizontal: 20,
    width: '100%',
    // backgroundColor:'lightblue',
    
  },
  follImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  follText: {
    fontSize: 12,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor: 'transparent',

    width: '30%', // Decreased width
    alignSelf: 'flex-start', // Align to left
    // Added margin to separate from edge
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  proSec:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5, // Added padding
    marginBottom: 20, // Adjusted margin
    // backgroundColor:'pink',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    color: '#fff',
    textAlign: 'left',
  },
  hashtags: {
    fontSize: 16,
    marginTop: 5,
    color: '#fff',
  },
  profileImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    paddingRight:20,
  },
  badgeImage: {
    position: 'absolute',
    marginRight:20,
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  backgroundImageContainer: {
    position: 'relative',
    width: 'auto', // Adjust width as needed
    height: 'auto', // Adjust height as needed
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '39%',
  },
  proText1:{
    fontSize:25,
    color:'#fff'
  }
});

export default ProfileScreen;
