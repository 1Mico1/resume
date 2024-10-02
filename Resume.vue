<template>
  <div class="resume">
    <header>
      <h1 class="title">My Resume</h1>
      <p class="subtitle">Software Engineer</p>
    </header>
    <section class="profile">
      <h2>Profile</h2>
      <p>{{ profile }}</p>
      <ul class="social-links">
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
    <section class="education">
      <h2>Education</h2>
      <ul>
        <li v-for="education in educations" :key="education.id">
          {{ education.degree }} - {{ education.institution }}
          <span class="duration">{{ education.duration }}</span>
        </li>
      </ul>
    </section>
    <section class="skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.id">
          {{ skill.name }}
          <span class="level">{{ skill.level }}</span>
        </li>
      </ul>
    </section>
    <section class="experience">
      <h2>Experience</h2>
      <ul>
        <li v-for="experience in experiences" :key="experience.id">
          {{ experience.company }} - {{ experience.position }}
          <span class="duration">{{ experience.duration }}</span>
          <p>{{ experience.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: 'Software Engineer',
      educations: [
        { id: 1, degree: 'Bachelor of Science in Computer Science', institution: 'University of Technology', duration: '2015-2019' },
        { id: 2, degree: 'Master of Science in Software Engineering', institution: 'University of Technology', duration: '2019-2021' }
      ],
      skills: [
        { id: 1, name: 'JavaScript', level: 'Advanced' },
        { id: 2, name: 'Vue.js', level: 'Intermediate' },
        { id: 3, name: 'Node.js', level: 'Basic' }
      ],
      experiences: [
        { id: 1, company: 'ABC Corporation', position: 'Software Engineer', duration: '2020-2022', description: 'Developed multiple web applications using Vue.js and Node.js' },
        { id: 2, company: 'XYZ Startups', position: 'Frontend Developer', duration: '2018-2020', description: 'Built responsive and interactive UI components using JavaScript and CSS' }
      ]
    }
  }
}
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.profile, .education, .skills, .experience {
  margin-bottom: 20px;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

li:before {
  content: "\2022";
  font-size: 18px;
  color: #666;
  margin-right: 10px;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.social-links li {
  margin-right: 20px;
}

.social-links a {
  color: #666;
  transition: color 0.2 s ease;
}

.social-links a:hover {
  color: #333;
}

.duration {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}

.level {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}
</style>