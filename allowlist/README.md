# Add extension (crx) to allowlist

* [Windows](#windows)
* [macOS](#macOS)
* [Linux](#linux)

### Windows

Run as administrator one of the reg-files in [allowlist-downloads](https://gitlab.com/magnolia1234/bypass-paywalls-chrome-clean/-/tree/master/allowlist)\
If you already added extensions to the allowlist than you should change "1" to a new value (also change name of HLM-key for beta/developer versions of browsers).\
To add more extensions to the allowlist you can add more lines.\
Example Chrome-regfile:
```
Windows Registry Editor Version 5.00  
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallAllowlist]  
"1"="lkbebcjgcmobigpeffafkodonchffocl"
"2"="extension-id2"
```

### macOS

Run one of the .mobileconfig files in [allowlist-downloads](https://gitlab.com/magnolia1234/bypass-paywalls-chrome-clean/-/tree/master/allowlist) (requires admin rights)\
Finally restart the browser's process (in the Dock: right click on Chrome, 'Quit', reopen).\
This assumes your device is not being managed by MDM software and you don't have any profile related to the 'ExtensionInstallAllowlist' policy already active.\
To add more extensions to the allowlist you can add more lines.
```
<key>ExtensionInstallAllowlist</key>
<array>
<string>lkbebcjgcmobigpeffafkodonchffocl</string>
<string>extension-id2</string>
</array>
```

### Linux

[Chromium-based browsers allow local installations of extensions](https://developer.chrome.com/docs/extensions/mv3/hosting/#hosting), so not necessary :)
