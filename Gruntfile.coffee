module.exports = (grunt) ->

  # config
  # ================================================================================
  grunt.initConfig

    # https://npmjs.org/package/grunt-clean
    clean:
      main: ["lib/*.js", "style/*.css"]

    # https://npmjs.org/package/grunt-contrib-coffee
    coffee:
      options:
        bare: true

      main:
        expand: true
        cwd: "src"
        src: ["**/*.coffee"]
        dest: "lib"
        ext: ".js"

    # https://npmjs.org/package/grunt-contrib-less
    less:
      main:
        files:
          "style/main.css": "style/*.less"


  # plugins
  # ================================================================================

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-less"


  # tasks
  # ================================================================================

  # default / build
  grunt.registerTask("default", "Build the application", ->
    grunt.task.run("clean", "less", "coffee")
  )
  grunt.registerTask "build", ["default"]