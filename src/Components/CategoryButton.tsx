import { Collapse } from "@mantine/core";
import "../assets/styles/patches.scss";
import Patches from "./Patches";
import { useState } from "react";

const CategoryButton = ({ categoryName, selectPatch }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [category, setCategory] = useState("");

  const handleCategoryClick = () => {
    setCollapseOpen(!collapseOpen);
    setCategory(categoryName);
  };

  return (
    <div>
      <div className="category-button" onClick={() => handleCategoryClick()}>
        <div className="category-button_title">
          {categoryName}
          {!collapseOpen ? (
            <span style={{ color: "333333" }}>&#9660;</span>
          ) : (
            <span style={{ color: "333333" }}>&#9650;</span>
          )}
        </div>
        <Collapse in={collapseOpen}>
          <Patches category={category} selectPatch={selectPatch} />
        </Collapse>
      </div>
    </div>
  );
};

export default CategoryButton;
