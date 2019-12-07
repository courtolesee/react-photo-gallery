- create a gallery
<!-- - Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.js`. -->
- use git branching for each feature separately 
- Components
  - App
    - represents the overall application or site 
  - GalleryList
    <!-- - represents the gallery of images. By componentizing, we could reuse this component in different applications -->
    <!-- - pass it the gallery data stored in `App` via `props` -->
    <!-- - Iterate (loop over) the list of gallery data -->
    <!-- - Display all of the images on the screen. -->
  - GalleryItem
    <!-- - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image. -->
    <!-- - pass it the individual gallery item via `props` -->
    <!-- - Update the `GalleryList` to use this component to display an image.
    - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html). -->
    <!-- - Display the number likes for each item and include a like button. -->
    <!-- - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked. -->
