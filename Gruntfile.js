module.exports = function(grunt) {
    // Do grunt-related things in here


    grunt.initConfig({
        sass: {
            dist: {
                options:{
                    //sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'], //!* means not. not any !*.min.css
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            css: {
                files: ['css/style.css'],
                tasks: ['cssmin']
            },
            sass: {
                files: ['sass/style.scss'],
                tasks:['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('compile',['sass']);
    grunt.registerTask('min',['cssmin']);
    grunt.registerTask('default',['sass', 'cssmin']);
    grunt.registerTask('w', 'watch');



  };