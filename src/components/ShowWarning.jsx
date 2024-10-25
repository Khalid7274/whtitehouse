import { useState } from "react";


export default function GettingWarning() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const showWarning = () => {
    setIsAlertVisible(true);
  };

  const hideWarning = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="show-warning">
      {isAlertVisible && (
        <div id='alert'>
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted.</p>
          <button onClick={hideWarning}>Proceed</button>
        </div>
      )}
      {!isAlertVisible && (
        <button onClick={showWarning}>Delete</button>
      )}
    </div>
  );
}
