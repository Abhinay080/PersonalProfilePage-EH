import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const Flex = () => {
  return (
    <View
      style={[styles.container, ]}>
      <View style={{flex: 1, backgroundColor: 'lightblue'}} >
        <View style={[styles.ItemContainer]}>
                    <View style={{paddingRight:10,paddingLeft:10}}>
                      <TouchableOpacity style={styles.vectimgView}><Text style={styles.vectimg}>←</Text></TouchableOpacity></View>
                    <View  style={styles.item}>
                        <TouchableOpacity><Text style={styles.Text}>Personal</Text></TouchableOpacity>
                    </View>
                    <View  style={styles.item}>
                        <TouchableOpacity ><Text style={styles.Text}>Professional</Text></TouchableOpacity>
                    </View>
                    <View  style={styles.item}>
                        <TouchableOpacity><Text style={styles.Text}>Comapany</Text></TouchableOpacity>
                    </View>
        </View>
        <View style={styles.ProInfo}>
          <Text >Professional Information</Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'pale'}} ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    padding: 10,
    },
  item: {
    width: 110,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height : 35,
    padding : 7,
    borderRadius : 10,
},
vectimg: {
  fontSize: 30,
  color:'white',
  marginTop:-15,
},
vectimgView:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 10,
    height:35,
    width:50,
},
Text:{
  fontSize: 16,
  color:'white',
},
ProInfo:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft:10,
  backgroundColor:'white',
  height:'100%',
  width:'100%',
}

});

export default Flex;