Rick and morty Explorer

a Simple react app thats lets users search and view details fo characters from the Rick & Morty Tv show. This project demonstrates using React, Reacts Router, and fetching datat from an external API

Technologies Used

React – for building the UI and components.
React Router – for navigation between pages (home & character details).
JavaScript  – core language features like async/await, fetch, and array methods.
CSS – basic styling for layout, cards, and buttons.
Rick & Morty API – external data source for character information.
Netlify – hosting the live app online.

Approach

1. Components – The app is broken into reusable components:
   `Home.jsx` – main page with search bar and character list.
   `CharacterCard.jsx` – individual character card with image and basic info.
   `CharacterList.jsx` – renders a list of cards.
   `CharacterDetails.jsx` – detailed view for a single character.
   `SearchBar.jsx` – input field to filter characters by name.

2. State Management – Using `useState` and `useEffect` to:
    Store characters fetched from the API.
   keep track of search input.
   Update UI dynamically as the user types.

3. Routing – Using React Router to navigate:
   `/`  Home page with character list.
   `/character/:id`  Details page for selected character.

4. Fetching Data (AJAX) – Using `fetch()` to get data from the Rick & Morty API asynchronously and display it in the DOM.

5. Navigation – Clicking a character card opens the details page. A “Back” button takes the user back to the home page.


Live Site

[View app on Netlify](https://rick-morty-explorerr.netlify.app/)




Usage

1. Open the app.
2. Type a character name in the search bar to filter results.
3. Click a character card to view detailed info.
4. Click the "Back" button to return to the home page.


Unsolved Problems / To-Do
Add a loading indicator while fetching characters so users know the app is working.

Handle API errors more clearly, like showing a message if no characters are found.

Make the app mobile-friendly so it looks good on phones and tablets.

Add pagination for when there are a lot of characters from the API.

Add more filters or search options to help users find characters faster.

Improve design and layout for a cleaner, more user-friendly look.


 GitHub Repository

[Link to GitHub Repo](https://github.com/tymairp96/Rick-morty-explorer-)