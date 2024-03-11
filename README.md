# NC News 💬

*Overview*

NC News is a CRUD web-app built during [Northcoders](https://northcoders.com/) Software Development Bootcamp November '23 to March '24

It is a News site with a social aspect, similar to Reddit, where users can:

- View a list of all available articles
- Sort all articles by Date, Comments and Votes
- Change the order of all articles (ascending or descending)
- Filter the articles by available article topics
- View a single article
- View a list of comments of a single article
- Post a comment to an article as the default logged in user
- Delete comments from the article that have been posted by the logged in user
- Up or down vote the article

If the user attempts to amend the /articles/ or /articles/topic/ urls with an article number or topic that is not found or compatible with the requirements of the API, they will see an error component displaying error information

To complete this project I:

1. Built a backend API https://github.com/alehow84/be-nc-news.git
2. Built a frontend utilising the backend https://ncnews-by-alex-howlett.netlify.app/

*Getting Started*

1. Clone this repo to your local machine

```
git clone https://github.com/alehow84/nc-news.git
```
  
2. Install Node.js - this project used Node v21.6.1 (please ensure you have this version or later)

3. Install dependencies

   ```
   npm install
   ```
   
4. Run the project!

   ```
   npm run dev
   ```
