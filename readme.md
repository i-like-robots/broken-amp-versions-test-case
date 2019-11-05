# No content or barrier visible on amp.ft.com

Users are reporting seeing blank pages when visiting https://amp.ft.com. We understand users are primarily driven to this domain by clicking links on Twitter's mobile apps which [will redirect users][1] via their link shortening service directly to our AMP pages.


## Investigation

We had access to two users able to consistently recreate the issue and enable us to debug. The console error we were able to extract from them was:

```
Render timeout waiting for service amp-subscription to be ready.
```

After confirming that the JavaScript was being loaded in each browser we began to search the [AMP source code][2] to find the source of this error and create an outline of the mechanism which registers AMP extensions on the page.

This error message itself is logged when an extension fails to register itself within 8 seconds (see [here][3]).

By adding breakpoints to the `amp-subscription-0.1.js` script we deduced that it was not being registered via `AMP.registerServiceForDoc()` and therefore not being initialised.

Adding breakpoints to the `.waitForExtension()` method within the AMP runtime revealed that it was being called for the `amp-subscriptions` extension but the promise returned for it never resolved.

Whilst investigating we happened to notice that the version (added by [this wrapper][4]) reported by the `amp-subscriptions` extension was different to that of the runtime (`window.AMP_CONFIG.v`) and other extensions.

By updating this version number to the same one used by the runtime the extension was able to load correctly.


## Test case

The files in this repo demonstrate that the version defined by the `amp-subscriptions` extension wrapper can prevent the extension from being registered and initialised if it is different to the one reported by the AMP runtime and result in no content being shown.

The only difference between `expected.html` and `broken.html` is that `broken.html` is loading an outdated version of the `amp-subscriptions` extension. The only difference between `amp-subscriptions-0.1.js` and `amp-subscriptions-0.1-outdated.js` is the version number.

The AMP extension and runtime files contained in the `assets/` directory were all saved from the AMP CDN. Formatting has been applied but no other changes have been made.


[1]: https://developer.twitter.com/en/docs/publisher-tools/amp/overview
[2]: https://github.com/ampproject/amphtml
[3]: https://github.com/ampproject/amphtml/blob/40fa29d8daacd92fbbcfda825f4b7f89dab25a34/src/service/extensions-impl.js#L177-L193
[4]: https://github.com/ampproject/amphtml/blob/db49f436b562d99df0d005bf12f8f61c11c4af80/build-system/compile/compile-wrappers.js#L66
