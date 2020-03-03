// powershell -ExecutionPolicy ByPass grunt --force
// powershell -ExecutionPolicy ByPass grunt bake
module.exports = function (grunt) {

    grunt.registerTask('deafult', function () {
        console.log("gg")
    });


    grunt.initConfig({
        bake: {
            target: {
                files: {
                    // to index.html : from (file with  <!--(bake XX.html)-->)
                    "client/index.html": "client/prod/index.html",
                }
            },
        },
        watch: {
            scripts: {
                files: ['client/**/*.html'],
                tasks: ['bake']
            }
        }
    })

    grunt.loadNpmTasks('grunt-bake')
    grunt.loadNpmTasks('grunt-contrib-watch')

}
