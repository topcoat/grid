module.exports = function(grunt) {
    grunt.initConfig({

        autoprefixer: {
            dist: {
                options: {
                    /*
                     * Add target browsers here
                     * https://github.com/ai/autoprefixer#browsers
                     * browsers: ['android 4']
                     */
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/'
                }]
            }

        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['autoprefixer', 'cssmin']);
};
