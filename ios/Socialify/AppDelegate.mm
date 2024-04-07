#import "AppDelegate.h"
#import "RNSplashScreen.h" // for react-native-splash-screen

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Socialify";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  // React Native “0.72.0” splash screen not hiding AppDelegate.mm 
  // That;’s why we’ve written the following code in iOS, 
  // otherwise just [RNSplashScreen show]; would have been enough
  BOOL ret = [super application:application didFinishLaunchingWithOptions:launchOptions];
  if (ret == YES)
  { 
    [RNSplashScreen show];
  }
  return ret;

}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
