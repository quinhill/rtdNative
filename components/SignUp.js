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
import signUpThunk from './thunks/signUpThunk';
import { signUpUrl } from '../urlGenerator';


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email,
      passwordOne,
      error
    } = this.state;
    if (!error) {
      try {
        const authUser = await auth.doCreatUserWithEmailAndPassword(email, passwordOne);
        const signUpObj = signUpUrl(this.state, authUser);
        await this.props.signInUser(signUpObj);
      }
      catch (err) {
        this.setState({ error: err });
        console.log(this.state.error)
      }
    }
  }
  
  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      username === '' ||
      email === '' ||
      passwordOne.length < 6 ||
      passwordOne !== passwordTwo ||
      error.length > 0;

    return (
      <View>
        <Text>Sign In</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          clearButtonMode='while-editing'
        />
        <TextInput 
          keyboardType='email-address'
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          clearButtonMode='while-editing'
        />
        <TextInput 
          style={styles.input}
          onChangeText={(passwordOne) => this.setState({passwordOne})}
          clearButtonMode='while-editing'
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.input}
          onChangeText={(passwordTwo) => this.setState({passwordTwo})}
          clearButtonMode='while-editing'
          secureTextEntry={true}
        />
        <Button
          disabled={isInvalid}
          title='Sign Up'
          onPress={this.handleSubmit}
        />
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
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  signUpUser: (signUpObj) => dispatch(signUpThunk(signUpObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);