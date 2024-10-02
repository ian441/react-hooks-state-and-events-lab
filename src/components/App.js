import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
   const appClass = false ? 'app dark' : 'app light'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button >Dark mode</button>
      </header>
      <ShoppingList items={itemData} />
      
    </div>
  );
}

export default App;
