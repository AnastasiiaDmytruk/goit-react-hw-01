import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.wrapper}>
      {friends.map((friend) => (
        <div className={styles.item} key={friend.id}>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
          <p className={friend.isOnline ? styles.online : styles.offline}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
