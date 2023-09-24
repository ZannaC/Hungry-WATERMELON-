import React from "react";
import classes from "../MealItem/MealItemUpdate.module.css";

const MealItemUpdate = () => {
  const apiKey = "$2b$10$QicGxsrGEpmODOSNZP7Tlu5P8nENEG7zNy9kuQ94evxU4HFpIEErW";
  const putUrl = "https://api.jsonbin.io/v3/b/651068b40574da7622afb2d9";
  // const getUrl = "https://api.jsonbin.io/v3/b/651068b40574da7622afb2d9";

  const handleUpdateData = async () => {
    try {
      const postData = [
        {
          id: "th1",
          name: "🥗 Vegetarian Pasta",
          description:
            "A delicious bowl of pasta with a medley of fresh vegetables sautéed in garlic and olive oil, topped with Parmesan cheese.",
          price: 12.55,
        },
      ];

      const putResponse = await fetch(putUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": apiKey,
        },
        body: JSON.stringify(postData),
      });

      if (!putResponse.ok) {
        throw new Error("Failed to update data.");
      }

      console.log("Data posted successfully:", putResponse);

      const getResponse = await fetch(putUrl, {
        method: "GET",
        headers: {
          "X-Master-Key": apiKey,
        },
      });

      if (!getResponse.ok) {
        throw new Error("Failed to fetch updated data.");
      }

      const updatedData = await getResponse.json();
      console.log("Updated data for Thursday:", updatedData);

      // Handle the updated data as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleUpdateData}
        className={classes.mealItemUpdateButton}
      >
        New offer 📝
      </button>
    </div>
  );
};

export default MealItemUpdate;

// NOTE: data for url, first step
/*
[
    {
      "id": "w1",
      "name": "No offer",
      "description": "Please wait",
      "price": 0
    }
  ]*/
