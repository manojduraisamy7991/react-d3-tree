// import Package
import React from "react";
import Tree from "react-d3-tree";
import UserCard from '../component/UserCard';
import {UserData} from '../../constants/UserData';
import "./styles.css";

const test = {
  shape: "rect",
  shapeProps: {
    width: 0,
    height: 0,
    x: -20,
    y: 20,
    stroke: "#2F80ED"
  }
};

function OrganizationBoard() {
const MemoizedNodeLabel = React.memo(UserCard);
  return (
    <div className="App">
      <h1>Tech Team Chart</h1>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={UserData}
          nodeSvgShape={test}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          translate={{ x: 900, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <MemoizedNodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -100
            }
          }}
          initialDepth={0.02}
        />
      </div>
    </div>
  );
}

export default OrganizationBoard
