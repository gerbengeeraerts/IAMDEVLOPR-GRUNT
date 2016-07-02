module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        screwIE8: true
      },
      build: {
        src: './js/app.js',
        dest: './deploy/js/app.min.js'
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: './css',
          cssDir: './deploy/css/',
          environment: 'development'
        }
      }
    },

    watch: {
      css: {
        files: './css/**/*.scss',
        tasks: ['styles'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: './js/**/*.js',
        tasks: ['scripts'],
        options: {
          livereload: true,
        },
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-beep');

  // Default task(s).
  grunt.registerTask('styles', ['compass', 'beep']);
  grunt.registerTask('scripts', ['uglify', 'beep']);
  //grunt.registerTask('dev', ['uglify', 'compass', 'beep:error', 'watch']);

};
