import React from 'react'
import styles from './Contact.module.css'
function Contact() {
  return (
    <div>
      <footer id='contact' className={styles.conatiner}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href='shrikantjk3@gmail.com'>shrikantjk3@gmail.com</a>
            </li>
            <li className={styles.link}>
                <a href='https://www.linkedin.com/in/shrikant-jakanur-7a2a69284/'>Linkedin</a>
            </li>
            {/* <li className={styles.link}>
                <a href='github'>github</a>
            </li> */}
        </ul>
      </footer>
    </div>
  )
}

export default Contact
