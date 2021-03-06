import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import { StyleSheet } from 'react-native';
import {useAuth} from './AuthProvider';
import {LogInView} from './LogInView';
import {AuthProvider} from './AuthProvider';
import {TasksProvider} from './TasksProvider';
import {UsersProvider} from './UsersProvider';
import {TasksView} from './TasksView';
import { ProfileView } from './ProfileView';

const App = () => {
  return (

    <AuthProvider>

      <AppBody />

    </AuthProvider>

  );
};

// The AppBody is the main view within the App. If a user is not logged in, it
// renders the login view. Otherwise, it renders the tasks view. It must be
// within an AuthProvider.
function AppBody() {

  const {user, logOut, currentView} = useAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {user == null ? (
            <LogInView />
          ) : (
            <TasksProvider projectId="Home">
              {(currentView == "TasksView") ?
                (<TasksView />)
                :
                (<ProfileView />)
              }
            </TasksProvider>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  }
});


export default App;
