import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Drawer from '../Navigation/Drawer';
 
export default class MapScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }};
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }
  
  render() {
    return (
      <View>
        <Drawer/>
        <MapView
        style={{ flex: 3 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})

