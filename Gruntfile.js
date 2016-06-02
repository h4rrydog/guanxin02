module.exports = function(grunt) {
 
  //Checks the dependencies associated with Grunt and autoloads
  //& requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
 
  // Project configuration.
  grunt.initConfig({





    // Sass configuration
    compass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.css': 'css/scss/main.scss'
        }
      }
    },





    // Copy font awesome fonts into relative project
    copy: {
      font_awesome: {
        expand: true,
        flatten: true,
        src: ['bower_components/font-awesome/fonts/*'],
        dest: 'fonts'
      }
    },





    //Use PostCSS Autoprefixer to apply browser prefixes for certain styles
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({
              browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
 




    //Watches files and folders for us
    watch: {
      files: [
        '*.html',
        'js/**/*.js',
        'css/**/*.scss',
        'img/**/*.{png,jpg,gif,svg}'
      ],
      tasks: [
        'copy',
        'compass',
        'postcss'
      ]
    }
 
  });
 
  //grunt serve
  grunt.registerTask('default', ['watch']);
};
