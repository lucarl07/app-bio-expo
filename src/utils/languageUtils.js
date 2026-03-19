export const portuguese = {
  title: 'Luiz Carlos Jr.', 
  subtitle: 'Desenvolvedor Front-End',
  descriptions: [
    '📍 Natural de Maceió - AL',
    '💾 Entusiasta do mundo da T.I.',
    '👨‍💻 Estudante de Ciências da Computação'
  ],
  aboutMe: 'Sou Luiz, um jovem aspirante a desenvolvedor web com ênfase no front-end. Atualmente cursando Ciências da Computação na UNINASSAU Maceió/Farol, gosto de me desafiar e propor soluções digitais criativas, prezando por boas práticas de codificação, versionamento e colaboração.'
}

export const english = {
  title: 'Luiz Carlos Jr.', 
  subtitle: 'Front-End Developer',
  descriptions: [
    '📍 Born & raised in Maceió, Brazil',
    '👨‍💻 Computer Science Student',
    '💾 IT World Enthusiast',
  ],
  aboutMe: 'I am Luiz, a young student aspiring to be a professional front-end developer, currently studying Computer Science at UNINASSAU. I always look forward to exploring new grounds and pushing my limits on out-of-the-box thinking while still giving value to feedback and safe decision-making.'
}

export const translate = (state, lang) => {
  switch (lang) {
    case 'PT-BR':
      return { ...state, ...portuguese }
    case 'EN-US':
      return { ...state, ...english }
    default:
      throw new Error(`"${lang}" language option not found.`)
  } 
}