# React Props Task: Flower Details

Live Demo-https://react-props-drab.vercel.app/

This project demonstrates the use of React props to pass flower details from a parent component (`App.jsx`) to a child component (`Products.jsx`). The task showcases how data can flow unidirectionally in React using props.

## Features

1. **Props Usage**:
   - Flower details are passed from the `App.jsx` component to `Products.jsx`.
   - The `Products.jsx` component dynamically renders the flower details.
2. **Flower Details**:
   - Each flower has a name, price, and image.
   - Details are displayed in a structured format.
3. **Reusable Components**:
   - `Products.jsx` is designed to accept and render any flower data passed to it.

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-props-flowers.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-props-flowers
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Code Structure

### `App.jsx`

- The parent component that holds the flower data.
- Passes the data to `Products.jsx` via props.

### `Products.jsx`

- The child component that receives and displays the flower details.
- Uses props to dynamically render flower information.

### `components/FlowerCard.jsx`

- A reusable card component to display individual flower details.
- Displays the flower's name, price, and image in a visually appealing format.

## Usage

1. Open the application to view the list of flowers.
2. Each flower's name, price, and image are displayed in a card format.

## Example

### Flower Data in `App.jsx`

```jsx
const flowers = [
  { name: 'Rose', price: '$5', image: 'rose.jpg' },
  { name: 'Tulip', price: '$3', image: 'tulip.jpg' },
  { name: 'Lily', price: '$4', image: 'lily.jpg' }
];
```

### Passing Props

```jsx
<Products flowers={flowers} />
```

### Rendering in `Products.jsx`

```jsx
const Products = ({ flowers }) => (
  <div>
    {flowers.map((flower, index) => (
      <FlowerCard key={index} {...flower} />
    ))}
  </div>
);
```

## Contributing

Feel free to fork this repository and submit pull requests to enhance the functionality or fix issues.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
