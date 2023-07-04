# My Blog App [Click here](https://my-blog-webdev.netlify.app/).

This is a blog application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to view articles, read individual articles, and navigate through different pages of the blog.

The Blog App is a platform designed for bloggers to share their thoughts, ideas, and knowledge with the online community. It provides a user-friendly interface for both readers and writers, making it easy to explore articles and create engaging content.

## Technologies Used

**Frontend**: HTML, CSS, JavaScript, React Js, Tailwind CSS

**Backend**: Node.js, Express.js

**Database**: MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mayuryalij/My-Blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables and provide appropriate values:

     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/blog
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the blog app.

## Folder Structure

The project structure is organized as follows:

- `pages/`: Contains the different pages of the blog.
- `components/`: Contains reusable components used across the pages.
- `App.js`: The main entry point of the application.


## Routes

The app uses the following routes:

- `/`: Home page.
- `/about`: About page.
- `/articles-list`: List of all articles.
- `/article/:name`: Individual article page.
- `*`: Not found page.

