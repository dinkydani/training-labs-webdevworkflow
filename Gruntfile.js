module.exports = function( grunt ) {
  
  grunt.initConfig({

    clean: {
      dist: {
        src: ['dist/']
      }
    },

    copy: {
      assets: {
        expand: true,
        cwd: 'src/',
        src: ['assets/**/*'],
        dest: 'dist/'
      },
      html: {
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'dist/'
      },
      js: {
        expand: true,
        cwd: 'src/',
        src: ['js/**/*'],
        dest: 'dist/'
      }
    },
    jshint: {
      main: {
        options: {
          jshintrc: ".jshintrc",
          jshintignore: ".jshintignore"
        },
        files: {
          src: ["src/**/*.js"]
        }
      }
    },
    uglify: {
      options: {
        mangle: true,
      },
      
      myApp: {
        files: {
          "build/app-code.min.js": ["src/**/*.js"]
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'clean', 'copy']);
    
};