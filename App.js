import React, { Component } from 'react';
import { StyteSheet, View, Text, Button, TextInput} from 'react-native';
import firebase from 'react—native—firebase';

export default class Home extends Component{
constructor() {
super( );
this.state = {
    title : '',
    description: ''
}
}

handleLogout = async () => {
await firebase.auth().signOut();
this.props.navigation.replace('Login');
};

handleTextInput = field => text => {
this.setState({ [field] : text });
}

handleSave = () => {
firebase.firestore().collection('posts' ).add(this.state);
this.setState({title:'', description: '' });
}
render() {
return (
<View style={styles.wrapper}>
<Text>Home</Text>
<Text>Title</Text>
<TextInput onChangeText={this.handteTextInput( 'title')} placeholder="description" value={this.state.title}
/>

<Text>Descriptions</Text>
<Textlnput onChangeText={this.handieTextInput('description')} placeholder='description' value=
{this.state.description}/>
<Button title="Save" color="green" onPress={this.handleSave}></Button>
<Button title="LOGOUT" color="blue" onPress={this.handleLogout} />
</View>
);
}
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%'
    }
});
