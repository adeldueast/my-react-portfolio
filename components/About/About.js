import Image from 'next/image'
import styles from './About.module.css'


const About = () => {

  const skills = [
    'C# .NET',
    'SQL Server',
    'JavaScript (ES6)',
    'TypeScript',
    'Angular',
    'React',
    'Dart (Flutter)'
  ]

  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>

        <div className={styles.description}>
          Hello! My name is Adel Kouaou and I am studying computer-science at 
         <span> <a href="https://www.cegepmontpetit.ca/"> Cegep&nbsp;Edouard-montpetit</a></span>.
          My interest in software development started when I realised I enjoy
          creating & troubleshooting things in general, turns out coding fits
          the description perfectly! Outside of coding, I also love gaming and
          the competitive side of it. The satisfaction of growing as a player
          and the sense of contributing to a team and community are the reasons
          im passionned by Gaming. Learning programming would also allow me to
          create my own game if I ever wish to.
          <br />
          <br />
          My main focus these days is learning and bulding things I enjoy. This
          being said, I think I’ve always had a slight preference for back-end
          in general, but I’ve recently had a itch to learn front-end starting
          with the core fundamentals.. CSS. I think understanding css
          fundamentals is important before jumping into any type of front-end
          framework and this is why I built this portfolio with pure css. I
          would also like to mention that all the credits for this amazing
          design goes to
         <span> <a href="https://github.com/bchiang7"> Britanny&nbsp;Chiang</a></span>. Finally, I
          think its amazing to think of something and being able to bring it to
          life just by googling it.
          <br />
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
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
