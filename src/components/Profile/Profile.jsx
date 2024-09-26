import styles from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.info}>
          <img className={styles.avatar} src={avatar} alt={tag} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.value}>{followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.value}>{views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.value}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
