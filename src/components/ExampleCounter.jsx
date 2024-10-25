import { useState } from "react";

export default function ExampleCounter() {
  const newsArray = ["Harris will participate in national gathering", "Mohammad Hassan will go to Kandahar", "Baidan is going to taravel to New York to participate in Ecnomic reform"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    //setCurrentIndex((prevIndex) => (prevIndex + 1) % newsArray.length);
    setCurrentIndex((prevInd)=>(prevInd+1)% newsArray.length);
  };

  return (
    <div className="details">
      <h3>You will see the news headlines when click on button</h3>
      <p><strong>News:</strong> {newsArray[currentIndex]}</p>
      <button onClick={handleClick}>Click here to see breaking News</button>
    </div>
  );
}
