/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        primary_color: "#20639B",
        primary_color_light:"#ADE6FF",
        text_color:"#ADE6FF",
        secondary_color: "#EAEFEE",
        tertiary_color:"#0EAFEE",
        deep_text_color:"#2339AB",
        
        regular_text:"rgba(256,256,256,1)",
      },
      backgroundImage: {
        bg_gradient:"linear-gradient(90deg, rgba(99, 104, 167, 0.8) 50%, rgba(186, 186, 186, 0.6) 130%)",
        second_gradient:"linear-gradient(90deg, rgba(14, 18, 136, 0.3) 50%, rgba(99, 104, 167, 0.6) 130%)",
        third_gradient:"linear-gradient(45deg, rgba(186, 186, 186, 0.9) 50%, rgba(99, 104, 167, 1) 130%)",
     
     
     
      },

      keyframes:{


        moveBackground:{
          '0%':{backgroundPosition:'0 0'},
          '50%':{backgroundPosition:'-100% 0'},
          '100%':{backgroundPosition:'-200% 0'},
        },
        grow:{
          '0':{width :'0'},
          '100':{width :'100%'}
        },

        growheight:{
          '0':{height:"0"},
          '100':{height:"100%"}
        },

        smallRotation:{
          '0%':{transform: 'rotateZ(0deg)'},
          '50%':{transform: 'rotateZ(4deg)'},
          '100%':{transform: 'rotateZ(0deg)'},
        },

        scaleUp:{
          '0%':{transform: 'scaleY(1)'},
          '50%':{transform: 'scaleY(1.6)'},
          '100%':{transform: 'scaleY(1)'},
        }



      },

      animation:{
        grow: 'grow 2s ease-in-out',
        moveBackground: 'moveBackground 10s linear infinite',
        scaleUp: "scaleUp 2s ease-in-out infinite", // 2s duration, loops infinitely

        smallRotation: 'smallRotation 3s linear infinite'
      },


      
      
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      backdropFilter: {},
    },
  },
  plugins: [],
};
