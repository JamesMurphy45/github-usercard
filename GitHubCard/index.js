import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const insertCard = document.querySelector('.cards')

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(link => {
  axios
  .get('https://api.github.com/users/'+ link)
  .then((res)=>{
    const user = res.data
    const userCard = cardMaker({
      html_url: user.html_url,
      name: user.name,
      username: user.username,
      location: user.location,
      followers: user.followers,
      following: user.following,
      bio:user.bio,
      image_url: user.avatar_url})

      insertCard.append(userCard)
    })
});

axios 
  .get('https://api.github.com/users/JamesMurphy45')
  .then((res)=>{
    const user = res.data
    const userCard = cardMaker({
      html_url: user.html_url,
      name: user.name,
      username: user.username,
      location: user.location,
      followers: user.followers,
      following: user.following,
      bio:user.bio,
      image_url: user.avatar_url})

      insertCard.append(userCard)
    })
   
  .catch((err)=>{
    console.log(err)
  })
//CardMaker
function cardMaker({html_url, name, username, location, followers, following, bio, image_url}){
//CreateElements
const userCard = document.createElement('div')
const userImage = document.createElement('img')
const cardInfo = document.createElement('div')
const userName = document.createElement('h3')
const userUsername = document.createElement('p')
const userLocation = document.createElement('p')
const userProfile = document.createElement('p')
const userLink = document.createElement('a')
const userFollowers = document.createElement('p')
const userFollowing = document.createElement('p')
const userBio = document.createElement('p')
//palcement
userCard.appendChild(userImage)
userCard.appendChild(cardInfo)
cardInfo.appendChild(userName)
cardInfo.appendChild(userUsername)
cardInfo.appendChild(userLocation)
cardInfo.appendChild(userProfile)
cardInfo.appendChild(userLink)
cardInfo.appendChild(userFollowers)
cardInfo.appendChild(userFollowing)
cardInfo.appendChild(userBio)
//Attrs
userCard.classList.add('card')
userImage.src = image_url
cardInfo.classList.add('card-info')
userName.classList.add('name')
userUsername.classList.add('username')
userLink.href = html_url
//Content
userName.textContent = name
userUsername.textContent = username
userLocation.textContent = `Location: ${location}`
userFollowers.textContent = `Followers: ${followers}`
userFollowing.textContent = `Following: ${following}`
userBio.textContent = `Bio: ${bio}`
userLink.textContent = html_url
//dont forget to return
return userCard

}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
