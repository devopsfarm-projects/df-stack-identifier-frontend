import Jankins from './Jankins'; // Assuming your component file is named 'Jankins.jsx'

const course = {
  title: "Jenkins Course",
  instructor: "John Doe",
  rating: 4.5,
  ratingsCount: 100,
  isBestseller: true,
  originalPrice: 1999,
  price: 999,
  discount: 50
};

// Render the Jankins component with the course data as props
<Jankins course={course} />;
