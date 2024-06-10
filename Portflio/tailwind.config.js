/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend:{
      keyframes:{
        'my-anim':{
          '0%':{transform:'perspective(1500px) rotateX(90deg)'},
          '50%':{transform:'perspective(1500px) rotateX(-50deg)'},
          '100%':{transform:'perspective(1500px) rotateX(0deg)'},
        }
      },
      animation:{
        'my-anim':'my-anim 1s'
      }
    },
  },
  plugins: [],
}

