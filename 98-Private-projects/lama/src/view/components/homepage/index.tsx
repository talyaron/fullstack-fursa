
import  './index.scss';
import * as React from 'react';
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// function MyTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     );
//   }
//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }

//   function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }

function Homepage() {
    return (
        <div>
            <h3 className="h">Welcome to "    "</h3>
            <h4 className="h">About us</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni deleniti deserunt, accusamus distinctio et minus similique! Officia quae, alias natus optio temporibus saepe voluptates in nostrum reiciendis vitae, facilis ex.</p>
<img src="data:image/jpeg;base64,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" alt="" />
<div className="header">
            <div className="header_left">
        {/* <div className="logo"></div> */}
        <div className="header_menu">
          <div className="header_menu_item">home</div>
          <div className="header_menu_item">menu</div>
          <div className="header_menu_item">profile</div>
          
        </div>
      </div>
      {/* <div className="header_right">
        <div className="header_rightmenu">
          <div className="header_rightmenu_item">JOIN A MEETING</div>
       
        </div>
      </div> */}
        </div>
        </div>

   

    );
}

export default Homepage;