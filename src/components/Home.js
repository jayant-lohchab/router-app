import classes from './Home.module.css';

const Homepage = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>Welcome to</h1>
        <h2 className={classes.subtitle}>Our Event Management Platform</h2>
      </header>
      <main className={classes.main}>
        <section className={classes.featureSection}>
          <h2 className={classes.featureTitle}>Discover Exciting Events</h2>
          <p className={classes.featureDescription}>
            Browse through a wide range of events happening in your area.
          </p>
        </section>
        <section className={classes.featureSection}>
          <h2 className={classes.featureTitle}>Plan and Customize</h2>
          <p className={classes.featureDescription}>
            Edit existing events or create your own tailored experiences.
          </p>
        </section>
      </main>
      <footer className={classes.footer}>
        <p className={classes.footerText}>&copy; 2023 Event Management Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;