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
    }

  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy']);
    
};