{
	/**
	 * @cfg {String{[ "\}"]} applicationName
	 * @required
	 * This is the name of your application, which is displayed on the device when the app is installed. On IOS, this should match
	 * the name of your application in the Apple Provisioning Portal.
	 */
	"applicationName":"My Application",

	/**
	 * @cfg {String{[ "\}"]} applicationId
	 * This is the name namespace for your application. On IOS, this should match the name of your application in the Apple Provisioning Portal.
	 */
	"applicationId":"com.mycompany.myAppID",

	/**
	 * @cfg {String{[ "\}"]} versionString
	 * @required
	 * This is the version of your application.
	 */
	"versionString":"1.0",

	/**
	 * @cfg {String{[ "\}"]} iconName
	 * This is file name of your icon. This should be in the same directory of this configuration file.
	 *
	 * For iOS, please refer to their documentation about icon sizes:
	 * https://developer.apple.com/library/ios/#documentation/userexperience/conceptual/mobilehig/IconsImages/IconsImages.html
	 *
	 * For Android, please refer to the Google Launcher icons guide:
	 * http://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html
	 */
	"iconName":"resources/icons/Icon~ipad.png",

	/**
	 * @cfg {String{[ "\}"]} inputPath
	 * @required
	 * This is location of your Sencha Touch 2 application, relative to this configuration file.
	 */
	"inputPath":"build/native",

	/**
	 * @cfg {String{[ "\}"]} outputPath
	 * @required
	 * This is where the built application file with be saved.
	 */
	"outputPath":"build/",

	/**
	 * @cfg {String{[ "\}"]} configuration
	 * @required
	 * This is configuration for your application. `Debug` should always be used unless you are submitting your app to an online
	 * store - in which case `Release` should be specified.
	 */
	"configuration":"Debug",

	/**
	 * @cfg {String{[ "\}"]} platform
	 * @required
	 * This is the platform where you will be running your application. Available options are:
	 *  - iOSSimulator
	 *  - iOS
	 *  - Android
	 *  - AndroidEmulator
	 */
	"platform":"iOSSimulator",

	/**
	 * @cfg {String{[ "\}"]} deviceType
	 * @required
	 * This is device type that your application will be running on.
	 *
	 * If you are developing for Android, this is not necessary.
	 *
	 * Available options are:
	 *  - iPhone
	 *  - iPad
	 *  - Universal
	 */
	"deviceType":"Universal",

	/**
	 * @cfg {String{[ "\}"]} certificatePath
	 * This is the location of your certificate.
	 * This is required when you are developing for Android or you are developing on Windows.
	 */
	"certificatePath":"/path/to/certificate.file",

	/**
	 * @cfg {String{[ "\}"]} certificateAlias
	 * This is the name of your certificate.
	 *
	 * IF you do not specify this on OSX, we will try and automatically find the certificate for you using the applicationId.
	 *
	 * This can be just a simple matcher. For example, if your certificate name is "iPhone Developer: Robert Dougan (ABCDEFGHIJ)", you
	 * can just put "iPhone Developer".
	 *
	 * When using a certificatePath on Windows, you do not need to specify this.
	 */
	"certificateAlias":"",
	
	/**
	 * @cfg {String{[ "\}"]} sdkPath
	 * This is the path to the Android SDK, if you are developing an Android application.
	 */
	"sdkPath":"/path/to/android-sdk",
	
	/**
	 * @cfg {String} androidAPILevel
	 * This is android API level, the version of Android SDK to use, you can read more about it here: http://developer.android.com/guide/appendix/api-levels.html.
	 * Be sure to install corresponding platform API in android SDK manager (android_sdk/tools/android)
	 */
	"androidAPILevel":"15",

	/**
	 * @cfg {Array[String]} orientations
	 * @required
	 * This is orientations that this application can run.
	 */
	"orientations": [
		"portrait",
		"landscapeLeft",
		"landscapeRight",
		"portraitUpsideDown"
	]
{[ "\}"]}
