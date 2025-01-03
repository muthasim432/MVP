import { StyleSheet } from 'react-native';

//Setting that applies to all three pages welcome, login and signup.
export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001B51', // Set the solid background color
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    //backgroundColor: '#fff',
    borderRadius: 30, // Increase the borderRadius for smoother edges
    padding: 40, // Reduce padding for a more compact layout
    //shadowOffset: { width: 0, height: 4 },
    //shadowOpacity: 0.3,
    //shadowRadius: 1,
    //elevation: 8,
    alignItems: 'center',
    position: 'absolute', // Use absolute positioning
    top: '15%', // Move the container lower on the screen
},

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 15,
    color: '#fff',
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: '#1a73e8',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  gradientButton: {
    width: '100%', // Full width of the container
    borderRadius: 25, // Rounded corners
    height: 45, // Match the button height
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#aaa',
  },
  signUpText: {
    color: '#1a73e8',
    fontWeight: 'bold',
  },

 //style for the welcome page
 logo: {
  width: 80,
  height: 80,
  resizeMode: 'contain',
  marginTop: 50,
  marginBottom: 20,
},

companyName: {
  alignItems: 'center', // Center logo and title horizontally
  marginTop: 50, // Space from the top of the screen
},



//style for header
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 50,
  paddingRight: 10,
  paddingLeft: 20,
  backgroundColor: '#001B51',
},
headerIcons: {
  flexDirection: 'row',
},
notificationIcon: {

},

iconContainer: {
  padding: 10,
},



//style for the bottom navigation




//style home page
backgroundHome: {
  flex: 1,
  backgroundColor: '#001B51',
  paddingHorizontal: 20,
},
warningContainer: {
  flexDirection: 'row',
  backgroundColor: '#E0EFFF',
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  marginVertical: 10,
  marginTop: 30,
},
warningText: {
  flex: 1,
  color: '#001B51',
  fontSize: 12,
},
closeButton: {
  color: '#001B51',
  fontSize: 16,
  fontWeight: 'bold',
},
searchContainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderRadius: 10,
  paddingHorizontal: 10,
  alignItems: 'center',
  marginVertical: 10,
},
searchInput: {
  flex: 1,
  height: 40,
},
searchButton: {
  backgroundColor: '#003396',
  padding: 10,
  borderRadius: 5,
},
searchButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},
sectionTitle: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
  marginVertical: 10,
},
servicesContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},
serviceCard: {
  width: '45%',
  backgroundColor: '#fff',
  borderRadius: 10,
  alignItems: 'center',
  padding: 15,
  marginBottom: 10,
},
serviceIcon: {
  width: 40,
  height: 40,
  marginBottom: 10,
},
serviceText: {
  color: '#001B51',
  fontSize: 12,
  textAlign: 'center',
},
seeAllText: {
  color: '#4A90E2',
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'right',
  marginRight: 10,
  marginBottom: 20,
},
historyContainer: {
  marginTop: 10,
  flexDirection: 'row',
},
historyCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#E0EFFF',
  padding: 15,
  marginRight: 10,
  borderRadius: 10,
  width: 200,
  height: 129,
},
historyCircle: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#A5C9FF',
  marginRight: 10,
},
historyText: {
  color: '#001B51',
  fontSize: 10,
  width: 120,
},

//styles for service page

});

