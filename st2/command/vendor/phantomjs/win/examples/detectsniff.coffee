page = require('webpage').create()

page.onInitialized = ->
  page.evaluate ->
    userAgent = window.navigator.userAgent
    platform = window.navigator.platform
    window.navigator =
      appCodeName: 'Mozilla'
      appName: 'Netscape'
      cookieEnabled: false
      sniffed: false

    window.navigator.__defineGetter__ 'userAgent', ->
      window.navigator.sniffed = true
      userAgent

    window.navigator.__defineGetter__ 'platform', ->
      window.navigator.sniffed = true
      platform

if phantom.args.length is 0
  console.log 'Usage: unsniff.js <some URL>'
  phantom.exit()
else
  address = phantom.args[0]
  console.log 'Checking ' + address + '...'
  page.open address, (status) ->
    if status isnt 'success'
      console.log 'FAIL to load the address'
    else
      window.setTimeout ->
        sniffed = page.evaluate(->
          navigator.sniffed
        )
        if sniffed
          console.log 'The page tried to sniff the user agent.'
        else
          console.log 'The page did not try to sniff the user agent.'
        phantom.exit()
      , 1500
