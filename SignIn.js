import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { auth } from './firebase';
import signInThunk from './thunks/signInThunk';


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email,
      password,
      error
    } = this.state;
    if (!error) {
      try {
        const authUser = await auth.doSignInWithEmailAndPassword(email, password);
        const uid = authUser.user.uid;
        await this.props.signInUser(uid);
        console.log(this.props.state);
      }
      catch (err) {
        this.setState({ error: err });
        console.log(this.state.error)
      }
    }
  }
  
  render() {
    return (
      <View>
        <Text>Sign In</Text>
        <TextInput 
          keyboardType='email-address'
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          clearButtonMode='while-editing'
        />
        <TextInput 
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          clearButtonMode='while-editing'
          secureTextEntry={true}
        />
        <Button
          title='Sign In'
          onPress={this.handleSubmit}
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    height: 40
  }
})

export const mapStateToProps = state => ({
  state
})

export const mapDispatchToProps = dispatch => ({
  signInUser: (uid) => dispatch(signInThunk(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);