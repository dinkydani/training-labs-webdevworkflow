module.exports = function( grunt ) {
  
  grunt.initConfig({

    clean: {
      dist: {
        src: ['dist/']
      },
      vendor: {
        src: ['src/js/vendor']
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
      data: {
        expand: true,
        cwd: 'src/',
        src: ['data.json'],
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
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },
    uglify: { 
      app: {
        options: {
          mangle: true,
          sourceMap: true,
          sourceMapName: "dist/js/app-source.map",
          sourceMapIncludeSources: true
        },
        files: {
          "dist/js/app.min.js": ["src/js/app.js", "src/**/*.js", "!src/js/vendor/**/*.js"]
        }
      },
      vendor: {
        options: {
          mangle: false
        },
        files: {
          "dist/js/vendor.min.js": [
            "src/js/vendor/underscore/underscore.js",
            "src/js/vendor/jquery/dist/jquery.js"]
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'jshint', 'bower', 'uglify', 'copy']);
    
};