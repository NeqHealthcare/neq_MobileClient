



# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', '..', 'st2', 'resources', 'themes')

# Look for any *.scss files in same directory as this file
# Place compiled *.css files in the parent directory
sass_path = dir
css_path     = File.join(dir, "..", "css")
output_style = :expanded
environment  = :development

# Require any additional compass plugins here
images_dir = File.join(dir, "..", "images")

sass_options = {:debug_info=>true} # by Compass.app
line_comments = true # by Compass.app

