
import "./App.css";

import Directory from "./components/directory/directory-component";

const App = () => {
  const categories = require("./categories");
  console.log(categories);
  return (

    <Directory categories = {categories} />
    // <div className="categories-container">
    //   {categories.map((cat) => (
    //     <CategoryItem key = {cat.id} categories = {cat}/>
    //   ))}
    // </div>
  );
};

export default App;
