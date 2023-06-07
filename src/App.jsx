import styles from './App.module.scss';
function App() {

  return (
    <div
      style={{backgroundColor: "hsl(204, 43%, 93%)"}}
      className={styles.container}
    >
      <div className={styles.blockContainer}>
        <div className={styles.blockUp}>
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>Gain acess to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className={styles.blockDown}>
          <div className={styles.blockDownLeft}>
            <h3>Monthly Subscription</h3>
            <p><span>$29</span> per month</p>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className={styles.blockDownRight}>
            <h3>Why Us</h3>
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
