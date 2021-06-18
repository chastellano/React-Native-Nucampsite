# React Native Nucampsite

This is a cross-platform mobile app developed using React Native, Expo, and Android Studio. The app’s principal resources are kept in an external JSON server, it uses Redux for managing state data. CRUD operations are performed on database resources using the Fetch API. Redux's Persist library is used to take a snapshot of state data that is saved to the user’s local storage each time a reducer function is called.

![Screenshot (68)](https://user-images.githubusercontent.com/73765884/122509630-1a85f300-cfd2-11eb-9a12-7ed62588bccb.png)
<br><br><br>

## Structure & Style

The app's navigation structure includes stack, drawer, and tab navigators.

![DrawerNavigator](https://user-images.githubusercontent.com/73765884/122510866-5621bc80-cfd4-11eb-8148-48f72a283401.png)
![TabNavigator](https://user-images.githubusercontent.com/73765884/122515739-e0215380-cfdb-11eb-8248-8d7c8945e232.png)
<br><br><br>

The Stylesheet API and React Native Elements library are used for the basic styling. The Animated and Animatable libraries provide animations for rendering various visual components. React Native’s ActivityIndicator component is used throughout the app to let the user know when resources are loading.

![NetInfo](https://user-images.githubusercontent.com/73765884/122515176-0db9cd00-cfdb-11eb-9f0e-0a63c4629205.png)
<br><br><br>

## Forms
Users can rate & submit comments on campsites, reserve a campsite, register or log-in with a user account, and more. Form components include React Native's Switch, Picker, TextInput, and Datepicker.

![ReserveForm](https://user-images.githubusercontent.com/73765884/122512244-94b87680-cfd6-11eb-8542-f23d96d8ce48.png)
![DatePicker](https://user-images.githubusercontent.com/73765884/122512247-95510d00-cfd6-11eb-928f-be9d026d11e2.png)
<br><br><br>

In the CampsiteInfo component, clicking the pencil icon opens the comment form modal, where the user can also rate the campsite out of 5 stars. This functionality was provided by React Native Element’s Rating component.

![pencilIcon](https://user-images.githubusercontent.com/73765884/122596564-0d035400-d038-11eb-8a67-dd25cb27013c.png)
![CommentForm](https://user-images.githubusercontent.com/73765884/122596562-0c6abd80-d038-11eb-9c9b-9b9040211527.png)
<br><br><br>

Clicking the heart icon marks the campsite as a favorite, which will cause it to appear in My Favorites.

![MarkFavorite](https://user-images.githubusercontent.com/73765884/122513250-2b396780-cfd8-11eb-86b5-bc96b4b836d2.png)
![MyFavorites](https://user-images.githubusercontent.com/73765884/122513252-2bd1fe00-cfd8-11eb-84ba-86f74cc9218f.png)
<br><br><br>

## Gestures

The user can alternatively use gestures in the CampsiteInfo component to access the comment form and mark favorite campsites. Swiping left on the campsite picture triggers an alert dialog to confirm if the user wants to add it as a favorite. Swiping right on the picture is an alternate way to open the comment form modal. This functionality was provided by the PanResponder API.

![FavoriteAlert](https://user-images.githubusercontent.com/73765884/122513596-9b47ed80-cfd8-11eb-87f1-0962d4393e33.png)
<br><br><br>

In My Favorites, swiping left on a favorited campsite reveals a Swipe Option Button where the user can delete the campsite from their favorites. This functionality was provided by the SwipeListView library.

![FavoritesDelete](https://user-images.githubusercontent.com/73765884/122514155-7dc75380-cfd9-11eb-8381-008e9b098093.png)
<br><br><br>

## Native Device Functionality 

Expo SDK’s libraries provide access to some of the device’s native capabilities.

- The Secure Store API is used to locally store encrypted data so that the user can safely save their username and password when “Remember Me” is checked in the Login component.

- The Notifications API gives access to the device’s underlying operating system to send a local notification whenever a user submits a reservation for a campsite. 

- The Share API is used in the CampsiteInfo component so that when the user clicks the share button in the CampsiteInfo component, a menu appears with all user’s apps that have sharing options. 

![sharebutton](https://user-images.githubusercontent.com/73765884/122605833-ff54cb00-d045-11eb-91ef-017b12937342.png)
![Share](https://user-images.githubusercontent.com/73765884/122514356-db5ba000-cfd9-11eb-8823-8c2f0c9668e8.png)
<br><br><br>

- The NetInfo library is used to monitor the devices network connectivity information and generates a Toast (Android) or Alert (iOS) letting the user know whenever there is a change to their network connection.

- The MailComposer API is used in the Contact component so that clicking the “Send Email” button will open the default email client. 

- The ImagePicker API is used in the LogIn component so the user can select an image when they register a new account. The user can choose an existing image from their photo library or take a new picture. Once a picture is chosen, they are prompted to crop the image to a preset aspect ratio.

![Register](https://user-images.githubusercontent.com/73765884/122516453-cc2a2180-cfdc-11eb-9e29-a7236fd11f07.png)
![ImagePickerLibrary](https://user-images.githubusercontent.com/73765884/122516922-5ecac080-cfdd-11eb-9200-c995ae3bcd6c.png)
![ImagePickerCrop](https://user-images.githubusercontent.com/73765884/122516927-5ecac080-cfdd-11eb-9d02-988f41f974f3.png)

