import { Collapse } from "@mantine/core";
import "../assets/styles/patches.scss";
import Patches from "./Patches";
import { useState } from "react";

const CategoryButton = ({ category, selectPatch }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <div>
      <div className="category-button" onClick={() => setCollapseOpen(!collapseOpen)}>
        <div className="category-button_title">
          {category}
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
