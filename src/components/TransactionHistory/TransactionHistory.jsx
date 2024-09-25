import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transaction }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transaction) => (
            <tr key={transaction.id} className={styles.tr}>
              <td className={styles.td}>{transaction.type}</td>
              <td className={styles.td}>{transaction.amount}</td>
              <td className={styles.td}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
