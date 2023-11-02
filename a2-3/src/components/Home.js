import React from 'react';
// import {View, Image, Text,StyleSheet} from 'react-native-web';
// function Home() {
//   return (
//    <View style={styles.container}> 
//    <View>
//     <Image style={{resizeMode: 'center'}} 
//         source={require("https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg")} />
//     <Text>COMPANY MOTTO AND SLOGAN</Text>
//    </View>
//    </View>
//   );
// };
// const styles = StyleSheet.create({
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       height: '100%',
//       textAlign: 'center',
//     },
//   });  
function Home() {
    return (
      <div style={{textAlign:'center', padding:'2%'}} > 
          <img src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg" alt='company'/>
          <p><i>Company Slogan and Motto</i></p>
      </div>
    );
  }

export default Home;