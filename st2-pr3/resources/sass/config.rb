# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', 'themes')

# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")
environment  = :production
# output_style = :compressed
output_style = :expanded # by Compass.app 
sass_options = {:debug_info=>true} # by Compass.app 
line_comments = true # by Compass.app 