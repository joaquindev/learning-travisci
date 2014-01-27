module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'hello.js']
    },
    coveralls: {
      options: {
        // LCOV coverage file relevant to every target
        src: 'coverage-results/lcov.info'
      },
      your_target: {
        //Target-specific LCOV coverage file
        src: 'coverage-results/extra-results-*.info'
      }
    }
    
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-coveralls');
  
  grunt.registerTask('default', 'jshint');
};
