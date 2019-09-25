Check out this project at https://bakery-proj-react.netlify.com/

I started this project from a bootstrap layout project having no functionality. It is still not finished yet,
as I switched from simpler technology to more advanced.

**State management**: single **Context API** was replaced with **Redux**.
To separate selection logic in mapStateToProps and avoid unnecessary recalculations I used **Reselect**.
I also used **Redux Persist** to save user data in localStorage.

I gave a shot to **HOC** wrapping ProductContent and SingleProductContent components in WithSpinner HOC.

To implement **SPA** and for routing, I used **React Router**.

**Firestore** and **Firebase authentication** were utilized to store product data and handle user sign in and sign up.

Finally, responsiveness is ensured with **Bootstrap** and I also tried **Styled Components** to remove
classes from components to styles(not completely finished yet).
