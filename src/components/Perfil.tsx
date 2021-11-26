import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/vradriano.png" alt="Vitor Ricardo Adriano" />
      <div>
        <strong>Vitor R. Adriano</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile