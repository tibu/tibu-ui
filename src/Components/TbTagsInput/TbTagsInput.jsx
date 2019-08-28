import React from "react";
import { Tag } from "antd";

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
}
function TbTags(props) {
  const { portalName = "Big Ben" } = props;

  return (
    <div>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Patience
      </Tag>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Dependability
      </Tag>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Compassion
      </Tag>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Attentiveness
      </Tag>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Trustworthiness
      </Tag>
      <Tag style={{ marginBottom: "8px" }} closable onClose={log}>
        Empathetic
      </Tag>
    </div>
  );
}

export default TbTags;
