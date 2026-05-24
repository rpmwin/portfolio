export const skills = {
  devops: [
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    { name: 'Jenkins', icon: 'SiJenkins', color: '#D24939' },
    { name: 'Terraform', icon: 'SiTerraform', color: '#7B42BC' },
    { name: 'Ansible', icon: 'SiAnsible', color: '#EE0000' },
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'GitHub Actions', icon: 'SiGithubactions', color: '#2088FF' },
    { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
  ],
  cloud: [
    { name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900' },
    { name: 'GCP', icon: 'SiGooglecloud', color: '#4285F4' },
    { name: 'Azure', icon: 'SiMicrosoftazure', color: '#0078D4' },
  ],
  languages: [
    { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'Bash', icon: 'SiGnubash', color: '#4EAA25' },
    { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
  ],
  frameworks: [
    { name: 'React', icon: 'SiReact', color: '#61DAFB' },
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express', icon: 'SiExpress', color: '#000000' },
    { name: 'Django', icon: 'SiDjango', color: '#092E20' },
    { name: 'Flask', icon: 'SiFlask', color: '#000000' },
  ],
  databases: [
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
  ],
};

export const allSkills = [
  ...skills.devops,
  ...skills.cloud,
  ...skills.languages,
  ...skills.frameworks,
  ...skills.databases,
];
