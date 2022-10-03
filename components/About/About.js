import styles from './About.module.css'


const About = () => {

  const skills = [
    'C# - .NET',
    'Java - Spring Boot',
    'React - Next.js',
    'SQL Server',
    'JavaScript',
    'Angular',
    'TypeScript',
    'Firebase',
  
    // 'Dart (Flutter)',
   
    
  ]

  return (
    <section id='about' className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>

        <div className={styles.description}>
          Hello, my name is Adel Kouaou and I am studying computer-science at 
         <span> <a href="https://www.cegepmontpetit.ca/"> Cegep&nbsp;Edouard-montpetit</a></span>.
          My interest in software development started when I realised I enjoy
          creating & troubleshooting things in general, turns out coding fits
          the description perfectly! Outside of coding, I also love gaming and
          the competitive side of it. The satisfaction of growing as a player
          and the sense of contributing to a team and community are the reasons
          im passionned by gaming.
          <br />
          <br />
          In my free time I put a lot of effort into creating my own projects in an attempt to expand my knowledge in this domain.
          I thrive in a team environment and am equally productive when given a task to complete on my own. My main focus these days
          is to keep learning and stay up to date with the newest technologies.
          <br />
          <br />
          <p>Here are a few ones I’ve been working with recently:</p>
          <ul className={styles.skills}>
            {skills.map((skill,i)=>(<li key={i}>{skill}</li>))}
          </ul>
        </div>


        {/* TODO: try to use Next.Js optimized Image component instead */}
        <div className={styles.image}>
          <div className={styles.img} > 
           <img src="images/pfp.png" alt="dsadas" />
          </div>
        </div>

      </div>
    </section>
    
  );
};

export default About;
