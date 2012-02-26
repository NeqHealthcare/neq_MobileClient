# Get the directory that this configuration file exists in
sass_path = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(sass_path, '..', '..', '..', 'st2', 'resources', 'themes')

# Compass configurations
css_path     = File.join(sass_path, "..", "css")

# Require any additional compass plugins here
images_dir = File.join(sass_path, "..", "images")

environment  = :production
sass_options = {:debug_info=>true} # by Compass.app 
line_comments = true # by Compass.app 

output_style = :expanded # by Compass.app 