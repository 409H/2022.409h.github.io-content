---
slug: "protect-yourself-against-2fa-hacks"
title: "Protect Yourself from 2FA Hacks"
date: 2021-07-21 00:00:00 +0100
type: blog
meta_img: /images/.common/meta.png
meta_desc: "Bolster your 2FA security controls"
comments: true
hidden: true
tags: "security,phishing,2fa"
---

In this article, we aim to explain to you how you can implement more security controls to better protect your authentication details against attacks we are seeing becoming more common to cryptocurrency users.

Two-factor authentication (commonly referred to as “2FA” or “MFA”) is a multi-factor authentication process that includes “something you have” (physical device) into the “something you know” (email and password) equation. It is a great way to boost the security of your account against attacks that target email/password combinations to perform an account takeover ([ATO](https://en.wikipedia.org/wiki/Credit_card_fraud#Account_takeover)) attack.

There are different ways in which you can enable 2FA into a supporting product (ie: Twitter, Discord). Some products support only time-based one-time password (TOTP) such as [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator), and some products offer support to FIDO U2F keys such as [Yubikey](https://www.yubico.com/) or [GoogleTitan](https://cloud.google.com/titan-security-key).

Although TOTP and FIDO U2F are not the only ways to introduce 2FA, the other methods are not so recommended. For example, a [2FA code sent to you via SMS](https://www.theverge.com/2017/9/18/16328172/sms-two-factor-authentication-hack-password-bitcoin) can be intercepted with a [sim hijack](https://medium.com/mycrypto/what-to-do-when-sim-swapping-happens-to-you-1367f296ef4d) whereby attackers assume your phone number and attempt to recover your online accounts, authenticating their requests with the 2FA SMS code.

By following the steps below, you’ll achieve a two-factor authentication setup that is offline-only and gives you the security of a FIDO U2F key from Yubikey. Your online accounts, with products that support this 2FA method, will be much more secure to an account-takeover attack.

### Things you’ll need to buy:

* NEW iPod nano - offline authenticator (no sim)
* Yubikey - physical 2FA device


### Setup

* Ensure your ipod nano is in a factory reset state (You can do the initial setup and then factory reset it to be extra sure).
* Set up ipod nano with a pin code
* Download Yubikey authenticator from the app store
* Set a password on your Yubikey authenticator from the app
* **Turn off** bluetooth (if it is not already off)
* **Turn on** airplane mode - from this moment, you will never connect your ipod nano to the internet, bluetooth, or to any other in-direct charging device ever again.
* You have now, essentially, air-gapped the device
* Pair your Yubikey with your Yubikey authenticator app
* Enable “touch required” for any addition you make (enabling touch-required means that the 2fa code is obfuscated until the touch is made)

🎉 Congrats! You now have an airgapped machine hosting a Yubikey authenticator app which is much more resilient to attacks that we have observed in the space targeting cryptocurrency users.


When we talk about security, we are creating a comparison against convenience. With this 2FA method implemented into your digital identities, there will be friction with the convenience you are likely used to. However, your security against account takeovers will be much better. It is a small trade-off.

We should mention that this method does protect against common threats, but it is still vulnerable to:
* **Service provider failure** - the platform you are using 2FA for is compromised or possibly socially engineered
* **In-person** - someone physically has your device, is able to get past your pin, and password, has your Yubikey, and is able to execute the touch. 

### What is SIM Swapping?
At its most basic level, during a SIM swap, a SIM hijacker convinces your mobile carrier to port your phone number over to a SIM card not in your control. Once they have it, they can receive and complete SMS based verification as well as impersonate you on services that authenticate you against your mobile number, such as Telegram.

If you are a victim of a SIM swap, you’ll suddenly get no cell service, meaning you won’t recieve SMS texts (important if you use SMS 2FA) and there are three phases in which you will need to act; What should you do before a SIM swap? What should you do during a SIM swap? And, what should you do after a SIM swap? You can familiarize yourself with action items from “[The SIM Swapping Bible: What to do when SIM-Swapping happens to you](https://medium.com/mycrypto/what-to-do-when-sim-swapping-happens-to-you-1367f296ef4d)”, co-authored by MyCrypto and CipherBlade.

### What is email jacking?
As most accounts are tied to your email address, it makes your email account extremely valuable and a high-value target to bad actors.

“Email Jacking” is where a bad actor would gain access to the email account to eventually pivot that access to others. They do this by initiating a “Forgot Password” flow on another account (ie: Twitter) and receiving an email to change your password to the third-party service.

### What is authenticator device hacking?
Your TOTP codes (or 2FA backup codes) are typically stored digitally, therefore it is a great target, as if a bad actor gets their eyes on these, then it nullifies your 2FA (in most instances).
 
By inadvertently downloading or installing malware that gives privilege to a bad actor in some way to read these, then you are compromised. Some people will store their backup and TOTP codes in a password manager, however if that device is compromised and internet-connected then they open themselves up to [have their secrets stolen if they are running out-dated managers or don’t have good security hygiene](https://www.welivesecurity.com/2020/03/19/security-flaws-found-in-popular-password-managers/).



*Co-authored by Zodd [@ZoddLooksRare](https://twitter.com/ZoddLooksRare) and Harry Denley [@sniko_](https://twitter.com/sniko_)*

*Check out Harry’s blog for more security tips and insights [here](https://harrydenley.com/).*

*(Note - This article may update in the future if this solution does not give enough security against the evolving threats in the space)*