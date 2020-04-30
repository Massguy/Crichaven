import React from "react";

const UserHistoryBlock = () => {
  const renderBlocks = () => {};
  return (
    <div className="history_blocks">
      <table>
        <thead>
          <tr>
            <th>Date of Purchase</th>
            <th>Product</th>
            <th>Price paid</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderBlocks()}</tbody>
      </table>
    </div>
  );
};

export default UserHistoryBlock;
