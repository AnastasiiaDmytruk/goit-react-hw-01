// import styles from "./TransactionHistory.module.css";

// const TransactionHistory = ({ transaction }) => {
//   return (
//     <div>
//       <table className={styles.table}>
//         <thead>
//           <tr className={styles.lablerow}>
//             <th className={styles.lable}>Type</th>
//             <th className={styles.lable}>Amount</th>
//             <th className={styles.lable}>Currency</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transaction.map((transaction) => (
//             <tr key={transaction.id} className={styles.row}>
//               <td className={styles.valuerow}>{transaction.type}</td>
//               <td className={styles.value}>{transaction.amount}</td>
//               <td className={styles.value}>{transaction.currency}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionHistory;

import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transaction }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.header}>Type</th>
            <th className={styles.header}>Amount</th>
            <th className={styles.header}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transaction) => (
            <tr key={transaction.id} className={styles.row}>
              <td className={styles.data}>
                {transaction.type.charAt(0).toUpperCase() +
                  transaction.type.slice(1)}
              </td>
              <td className={styles.data}>{transaction.amount}</td>
              <td className={styles.data}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
