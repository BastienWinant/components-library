# Components Library

![Generator](/screenshots/Screenshot%202024-12-13%20at%2014.13.39.png)
![Colors](/screenshots/Screenshot%202024-12-13%20at%2014.15.29.png)

[Demo link](https://color-scheme-generator-8ec07.web.app/)

The Components Library is a set of modular React components to be used in other project
- __Badge:__ small count and labeling component that scales to the size of the text content
- __Banner:__ resizing colored text cell that draws the user eye
- __Card:__ content container including text and an user-supplied logo image
- __Testimonial:__ component for displaying a quote along with an optional image

# Tech Stack

  - Node.js
  - Vite
  - React

# Installation
To install the Components Library locally, please follow the steps below:
  1. Clone the repo to your machine: `git clone ...`
  2. Navigate to the root of the project and install all dependencies with `npm i` / `yarn`
  3. Start the test server: `npm run dev`

# What I have learned
## Compound Components
With this project, I got a lot of practice leveraging React compound components to create complex structures. I learned how to balance the use of props and subcomponents to allow for flexibility in my components while maintaining code usability and maintainability.

# What issues have I faced and how I resolved them
The Testimonial is rendered in one of two possible styles depending on whether the user nests a Headshot subcomponent. I needed to find a way to determine whether a Headshot component was included from inside the parent Testimonial component so that the proper styling could be applied.

My initial solution was to add a `withImg` boolean prop on the Testimonial to indicate whether a `Headshot` would be included. With this approach, a user could potentially set `withImg` to `True` without actually including a `Headshot` component (or vice versa). This would have led to the wrong CSS rules getting applied and the `Testimonial` not rendering as intended.

After a long trial-and-error process, I turned to the React Children API which allows for parsing and manipulating the JSX passed as a `children` prop the a component. Using this, I am checking for a `Headshot` instance in the children of the `Testimonial` component, and using the result of that check to determine which CSS classes to apply.

# Extensions/improvements
Below is a list of feasible extensions/improvements I have identified:
1. Testimonial component responsiveness

I renounced on implementing any of the above to allow myself to continue my learning journey and focus on React.

# Source

This project was completed as part of Scrimba's Front-End Developer Career Path curriculum.