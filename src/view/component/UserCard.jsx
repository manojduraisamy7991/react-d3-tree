// import Package
import React, { useMemo } from 'react';
import '../container/styles.css';
import { userCardStyle } from './styles';
import clsx from 'clsx';

function UserCard({ className, nodeData }) {
  return useMemo(
    () => (
      <div className={clsx(className, 'card')} style={userCardStyle}>
        <img
          src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_24.jpg"
          className="my-img"
          alt="pic"
        />
        <br></br>
        <span>{nodeData.name}</span>
        <br></br>
        <span>Goals: {nodeData.depth}</span>
      </div>
    ),
    [className, nodeData.name, nodeData.depth]
  );
}

export default UserCard;
