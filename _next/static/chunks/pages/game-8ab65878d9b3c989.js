(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{3790:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return o(701)}])},8418:function(e,t,o){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,a,n=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(u){s=!0,a=u}finally{try{i||null==o.return||o.return()}finally{if(s)throw a}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var n,i=(n=o(7294))&&n.__esModule?n:{default:n},s=o(6273),u=o(387),h=o(7190);var y={};function d(e,t,o,r){if(e&&s.isLocalURL(t)){e.prefetch(t,o,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+o+(a?"%"+a:"")]=!0}}var l=function(e){var t,o=!1!==e.prefetch,r=u.useRouter(),n=i.default.useMemo((function(){var t=a(s.resolveHref(r,e.href,!0),2),o=t[0],n=t[1];return{href:o,as:e.as?s.resolveHref(r,e.as):n||o}}),[r,e.href,e.as]),l=n.href,c=n.as,f=e.children,v=e.replace,m=e.shallow,g=e.scroll,p=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var w=(t=i.default.Children.only(f))&&"object"===typeof t&&t.ref,b=a(h.useIntersection({rootMargin:"200px"}),2),x=b[0],k=b[1],W=i.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);i.default.useEffect((function(){var e=k&&o&&s.isLocalURL(l),t="undefined"!==typeof p?p:r&&r.locale,a=y[l+"%"+c+(t?"%"+t:"")];e&&!a&&d(r,l,c,{locale:t})}),[c,l,k,p,o,r]);var H={ref:W,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,r,a,n,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(o))&&(e.preventDefault(),t[a?"replace":"push"](o,r,{shallow:n,locale:u,scroll:i}))}(e,r,l,c,v,m,g,p)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(l)&&d(r,l,c,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var D="undefined"!==typeof p?p:r&&r.locale,S=r&&r.isLocaleDomain&&s.getDomainLocale(c,D,r&&r.locales,r&&r.domainLocales);H.href=S||s.addBasePath(s.addLocale(c,D,r&&r.defaultLocale))}return i.default.cloneElement(t,H)};t.default=l},7190:function(e,t,o){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,a,n=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(u){s=!0,a=u}finally{try{i||null==o.return||o.return()}finally{if(s)throw a}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,r=e.disabled||!s,y=n.useRef(),d=a(n.useState(!1),2),l=d[0],c=d[1],f=a(n.useState(t?t.current:null),2),v=f[0],m=f[1],g=n.useCallback((function(e){y.current&&(y.current(),y.current=void 0),r||l||e&&e.tagName&&(y.current=function(e,t,o){var r=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},r=h.find((function(e){return e.root===o.root&&e.margin===o.margin}));r?t=u.get(r):(t=u.get(o),h.push(o));if(t)return t;var a=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return u.set(o,t={id:o,observer:n,elements:a}),t}(o),a=r.id,n=r.observer,i=r.elements;return i.set(e,t),n.observe(e),function(){if(i.delete(e),n.unobserve(e),0===i.size){n.disconnect(),u.delete(a);var t=h.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&h.splice(t,1)}}}(e,(function(e){return e&&c(e)}),{root:v,rootMargin:o}))}),[r,v,o,l]);return n.useEffect((function(){if(!s&&!l){var e=i.requestIdleCallback((function(){return c(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),n.useEffect((function(){t&&m(t.current)}),[t]),[g,l]};var n=o(7294),i=o(9311),s="undefined"!==typeof IntersectionObserver;var u=new Map,h=[]},701:function(e,t,o){"use strict";o.r(t);var r=o(5893),a=o(9008),n=o(1163),i=o(7294),s=o(1664);t.default=function(){var e=(0,n.useRouter)(),t="normal";e.query.mode&&(t=String(e.query.mode)),(0,i.useEffect)((function(){e.isReady}),[e.isReady]);var o=[["What's the most embarrassing thing you've ever done?","Have you ever broken the law? If so, why?","What is your biggest pet peeve?","What's the worst date you've been on?","What's the best date you've been on?","What is your favorite movie that you secretly know is actually terrible?","What was the last time you've laughed the hardest?","What's the most childish thing you still do?","What is the most gross thing you have done today?","What was your best moment in life so far?","Who has the best sense of humor in this room?","What's the most embarrassing music you listen to?","What is the weirdest trend you've ever participated in?","What's the last thing you Googled?","What's the most adventurous thing you've ever done?","Who's the last person you searched on Instagram?","What's the drunkest you've ever been?","Do you ever talk to yourself in the mirror?","What is the weirdest thing you've ever bought?"],["What's your most embarrassing fantasy?","What kind of porn do you search for?","When watching porn, what makes you turn it off?","Have you ever joined a hook-up app or any app associated with risky behavior?","How many \u201ctoys\u201d do you own?","What's the best sex you've ever had?","What's the weirdest role play you've ever done?","What's the raunchiest dream you've ever had?","What's the landscaping like \u201cdown there?\u201d","What's the dirtiest picture you've ever sent?","What's the dirtiest text you've sent?","Have you ever hooked up with someone you didn't know?","What's the most outrageous thing you can remember doing while \u201cunder the influence?\u201d","What is something \u201cscandalous\u201d and sex-related that you really want to try?","Are you more dominant or submissive?","If you were a sex worker, how much would each sex act cost?","Have you ever asked for a dirty pic?","How do you initiate sex with your partner?","Would you ever film yourself \u201cin the act?\u201d","How likely are you to ever consider being a stripper? What about a porn star?","What's the soonest you've ever had sex with someone after meeting them?","If you were going to write an erotic novel, what would it be about?","What was the last thing you masturbated to?","If you could have sex with one person in this room, who would it be?","What's your magic number now, and what do you wish it was?","What's the weirdest thing that's ever turned you on?","Which sexual act are you best at?","How many sex toys do you own?","How many orgasms have you faked?","What is your biggest sexual regret?","What's the dirtiest sext you've ever sent?","Who's the most scandalous person you've had sex with?","Have you ever slept with someone you met online?","Have you ever been caught masturbating?","What do you like to be called in bed?","What movie always turns you on?","What's your favorite body part on a girl?","Describe the most embarrassing time you got turned on.","Have you ever thought about sleeping with the same sex?","What is your strangest off-limits crush?","If you got to have a threesome with people in this room, who would you do it with and why?","Where is the weirdest place that you've ever masturbated?","Describe your \u201cI'm getting laid tonight\u201d outfit?","Have you ever slept with someone from work?","What is more thrilling, makeup or angry sex?","How many times a week do you touch yourself?","Have you ever done IT at work?","Do you like telling your partner what to do in bed, or do you prefer to be told what to do?","Have you ever walked in on your parents doing it?","Have you ever thought of someone else while you were sleeping with someone?","Describe your crush's personality.","Do you find your friend's sibling attractive?","If given the chance, would you sleep with your boss?","Have you ever farted while spooning with someone?","Have you ever done a striptease for someone?","What is the grossest thing you've done today?","Have you ever flirted with a friend's partner?"],["What's your biggest fantasy?","Where's the weirdest place you've had sex?","Do you enjoy dirty talk?","Have you ever had a 'friends with benefits' situation? If so, who with?","What's the best intimate experience you've ever had?","Do you have any fetishes?","What's your biggest turn on?","Who would you most like to kiss in this room?","What's your favorite body part on another person?","Have you ever read erotic fiction?","When did you lose your virginity?","What's the longest you've gone without sex?","Have you ever fallen asleep during sex?","What was your most embarrassing sexual experience?","What is your favorite sex position?","What's your biggest turn off?","Have you ever slept with someone then immediately regretted it?","Have you ever hooked up with a friend?","If you could only do one sex act for the rest of your life, what would it be?","What is the dirtiest text you've received?","What is the dirtiest text you've sent?","Have you faked an orgasm?","Describe your best orgasm. How long did it last?"],["Make your 'O' face.","Reenact your special move.","Make out with your pillow for 10 seconds.","Act out the last time you did it.","Act out the first time you did it.","Attempt to twerk.","Lap dance on a chair.","Do a sexy dance with a broom.","Reenact the opposite gender in bed.","Suck your finger passionately for 15 seconds.","Pretend you're giving a formal presentation about a detailed summary of how you like it in bed.","Try to take off your underwear/bra without flashing.","Give your best 'ready for you' face.","Incorporate a towel into a seductive dance.","Seductively shave one of your legs.","Fake an orgasm.","Crawl on the ground seductively.","Give the closest thing to your left a passionate kiss.","Make out with yourself in the mirror.","Give a speech like you're hitting on someone.","Take a video of you spanking yourself.","Pretend you're doing the deed with the closest thing to your right.","Put on your sexiest song and catwalk and send it as a video.","Demonstrate how to put a protection on and send it as a video.","Grind on a pillow for 20 seconds.","Take your pants off.","Send a sexy text to your third contact.","Change your Facebook status to 'single and ready to mingle' or 'ready for head tonight'","Leave a dirty voicemail for your ex.","Text your best friend and ask for sex tips.","Text your ex and ask if there's anything you can improve on in bed.","Take off your shirt and swing it in the air.","Put on the sexist outfit you own.","In a video, demonstrate the most flexible position you can do.","Change your Facebook status to 'wanting quick hookup'","Send your dirtiest text with three sexy emojis.","Describe yourself seductively.","Do the WAP dance and send it to your partner or ex.","Tell your partner or crush that they are a 'leg spreader'","Text a random person and ask them if they think you're hot.","Talk without opening your mouth.","Do your best moan or grunt.","Eat a banana in a seductive manner.","Write your ex's/ partner's name on your underwear in sharpie and send it to them.","Comment on your celebrity crush's post and say you get turned on by them.","Tweet your crush and explain to them that you think of them in bed.","Demonstrate your biggest turn-on.","Demonstrate your biggest turn-off.","Send a picture as if you were on top.","Send a picture of you praying on your knees to your ex.","Tell your partner or ex that you want to try a different position.","Call someone and explain your biggest turn-on.","Change your Facebook status to 'lonely tonight.'","Take a screenshot of your text log.","Send a link to your favorite adult site.","Explain your favorite videos and why.","Demonstrate your wildest fantasies.","Send a voice message of you moaning to your partner.","Drop an ice cube in your pants.","Send a winky face to your most recent contact.","Send the drooling emoji to your ex.","Send a voice message of your dirtiest thoughts.","Text like you are doing the deed right now.","Pour a drink into your mouth.","Send a video of you seductively dancing to a friend.","Create a sex playlist and share it with your most recent caller.","Send a video of you slowly picking up something to your partner.","Without you in the frame, send a video of you throwing your clothes across the room.","Send a video of you doing a sexy dance to a non-sexual song to your closest friend."],["What's the most embarrassing thing you've ever done?","Have you ever broken the law? If so, why?","What is your biggest pet peeve?","What's the worst date you've been on?","What's the best date you've been on?","What is your favorite movie that you secretly know is actually terrible?","What was the last time you've laughed the hardest?","What's the most childish thing you still do?","What is the most gross thing you have done today?","What was your best moment in life so far?","Who has the best sense of humor in this room?","What's the most embarrassing music you listen to?","What is the weirdest trend you've ever participated in?","What's the last thing you Googled?","What's the most adventurous thing you've ever done?","Who's the last person you searched on Instagram?","What's the drunkest you've ever been?","Do you ever talk to yourself in the mirror?","What is the weirdest thing you've ever bought?","What's your most embarrassing fantasy?","What kind of porn do you search for?","When watching porn, what makes you turn it off?","Have you ever joined a hook-up app or any app associated with risky behavior?","How many \u201ctoys\u201d do you own?","What's the best sex you've ever had?","What's the weirdest role play you've ever done?","What's the raunchiest dream you've ever had?","What's the landscaping like \u201cdown there?\u201d","What's the dirtiest picture you've ever sent?","What's the dirtiest text you've sent?","Have you ever hooked up with someone you didn't know?","What's the most outrageous thing you can remember doing while \u201cunder the influence?\u201d","What is something \u201cscandalous\u201d and sex-related that you really want to try?","Are you more dominant or submissive?","If you were a sex worker, how much would each sex act cost?","Have you ever asked for a dirty pic?","How do you initiate sex with your partner?","Would you ever film yourself \u201cin the act?\u201d","How likely are you to ever consider being a stripper? What about a porn star?","What's the soonest you've ever had sex with someone after meeting them?","If you were going to write an erotic novel, what would it be about?","What was the last thing you masturbated to?","If you could have sex with one person in this room, who would it be?","What's your magic number now, and what do you wish it was?","What's the weirdest thing that's ever turned you on?","Which sexual act are you best at?","How many sex toys do you own?","How many orgasms have you faked?","What is your biggest sexual regret?","What's the dirtiest sext you've ever sent?","Who's the most scandalous person you've had sex with?","Have you ever slept with someone you met online?","Have you ever been caught masturbating?","What do you like to be called in bed?","What movie always turns you on?","What's your favorite body part on a girl?","Describe the most embarrassing time you got turned on.","Have you ever thought about sleeping with the same sex?","What is your strangest off-limits crush?","If you got to have a threesome with people in this room, who would you do it with and why?","Where is the weirdest place that you've ever masturbated?","Describe your \u201cI'm getting laid tonight\u201d outfit?","Have you ever slept with someone from work?","What is more thrilling, makeup or angry sex?","How many times a week do you touch yourself?","Have you ever done IT at work?","Do you like telling your partner what to do in bed, or do you prefer to be told what to do?","Have you ever walked in on your parents doing it?","Have you ever thought of someone else while you were sleeping with someone?","Describe your crush's personality.","Do you find your friend's sibling attractive?","If given the chance, would you sleep with your boss?","Have you ever farted while spooning with someone?","Have you ever done a striptease for someone?","What is the grossest thing you've done today?","Have you ever flirted with a friend's partner?","What's your biggest fantasy?","Where's the weirdest place you've had sex?","Do you enjoy dirty talk?","Have you ever had a 'friends with benefits' situation? If so, who with?","What's the best intimate experience you've ever had?","Do you have any fetishes?","What's your biggest turn on?","Who would you most like to kiss in this room?","What's your favorite body part on another person?","Have you ever read erotic fiction?","When did you lose your virginity?","What's the longest you've gone without sex?","Have you ever fallen asleep during sex?","What was your most embarrassing sexual experience?","What is your favorite sex position?","What's your biggest turn off?","Have you ever slept with someone then immediately regretted it?","Have you ever hooked up with a friend?","If you could only do one sex act for the rest of your life, what would it be?","What is the dirtiest text you've received?","What is the dirtiest text you've sent?","Have you faked an orgasm?","Describe your best orgasm. How long did it last?","Make your 'O' face.","Reenact your special move.","Make out with your pillow for 10 seconds.","Act out the last time you did it.","Act out the first time you did it.","Attempt to twerk.","Lap dance on a chair.","Do a sexy dance with a broom.","Reenact the opposite gender in bed.","Suck your finger passionately for 15 seconds.","Pretend you're giving a formal presentation about a detailed summary of how you like it in bed.","Try to take off your underwear/bra without flashing.","Give your best 'ready for you' face.","Incorporate a towel into a seductive dance.","Seductively shave one of your legs.","Fake an orgasm.","Crawl on the ground seductively.","Give the closest thing to your left a passionate kiss.","Make out with yourself in the mirror.","Give a speech like you're hitting on someone.","Take a video of you spanking yourself.","Pretend you're doing the deed with the closest thing to your right.","Put on your sexiest song and catwalk and send it as a video.","Demonstrate how to put a protection on and send it as a video.","Grind on a pillow for 20 seconds.","Take your pants off.","Send a sexy text to your third contact.","Change your Facebook status to 'single and ready to mingle' or 'ready for head tonight'","Leave a dirty voicemail for your ex.","Text your best friend and ask for sex tips.","Text your ex and ask if there's anything you can improve on in bed.","Take off your shirt and swing it in the air.","Put on the sexist outfit you own.","In a video, demonstrate the most flexible position you can do.","Change your Facebook status to 'wanting quick hookup'","Send your dirtiest text with three sexy emojis.","Describe yourself seductively.","Do the WAP dance and send it to your partner or ex.","Tell your partner or crush that they are a 'leg spreader'","Text a random person and ask them if they think you're hot.","Talk without opening your mouth.","Do your best moan or grunt.","Eat a banana in a seductive manner.","Write your ex's/ partner's name on your underwear in sharpie and send it to them.","Comment on your celebrity crush's post and say you get turned on by them.","Tweet your crush and explain to them that you think of them in bed.","Demonstrate your biggest turn-on.","Demonstrate your biggest turn-off.","Send a picture as if you were on top.","Send a picture of you praying on your knees to your ex.","Tell your partner or ex that you want to try a different position.","Call someone and explain your biggest turn-on.","Change your Facebook status to 'lonely tonight.'","Take a screenshot of your text log.","Send a link to your favorite adult site.","Explain your favorite videos and why.","Demonstrate your wildest fantasies.","Send a voice message of you moaning to your partner.","Drop an ice cube in your pants.","Send a winky face to your most recent contact.","Send the drooling emoji to your ex.","Send a voice message of your dirtiest thoughts.","Text like you are doing the deed right now.","Pour a drink into your mouth.","Send a video of you seductively dancing to a friend.","Create a sex playlist and share it with your most recent caller.","Send a video of you slowly picking up something to your partner.","Without you in the frame, send a video of you throwing your clothes across the room.","Send a video of you doing a sexy dance to a non-sexual song to your closest friend."]],u="",h=0;"normal"==t?(u="bg-gradient-to-r from-[#00C5FF] to-[#009BFF]",h=0):"party"==t?(u="bg-gradient-to-r from-[#FFC300] to-[#FF8900]",h=1):"dirty"==t?(u="bg-gradient-to-r from-[#FF006D] to-[#FC0023]",h=2):"dares"==t?(u="bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]",h=3):"mix"==t&&(u="bg-black",h=4);var y=Math.floor(Math.random()*o[h].length),d=(0,i.useState)(o[h][y]),l=d[0],c=d[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Truth or Drink"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsxs)("div",{className:"cursor-pointer",children:[(0,r.jsxs)("div",{className:"text-4xl text-header font-semibold mx-auto text-center align-middle pt-4 pb-2",children:["TRUTH ",(0,r.jsx)("span",{className:"text-xl align-middle",children:"O R"})," DRINK"]}),(0,r.jsx)("div",{className:[u,"rounded-lg text-center text-white font-bold max-w-fit px-4 m-auto"].join(" "),children:t.toUpperCase().split("").join(" ")})]})}),(0,r.jsx)("div",{className:"p-4 flex flex-grow mx-auto",children:(0,r.jsx)("div",{className:"flex items-center justify-center text-5xl text-white text-header font-semibold text-center bg-black rounded-xl shadow-xl p-4",children:l})}),(0,r.jsx)("div",{onClick:function(){return c(o[h][Math.floor(Math.random()*o[h].length)])},className:"flex items-center justify-center text-3xl font-bold text-center rounded-xl mx-20 mb-8 py-4 cursor-pointer",children:"Next Question"}),(0,r.jsx)("footer",{className:"bg-gray-100 text-center lg:text-left",children:(0,r.jsxs)("div",{className:"text-center text-gray-700 p-4",children:["\xa9 2022 ",(0,r.jsx)("a",{className:"text-gray-800",href:"https://aravindnatch.me/",children:"Aravind Natchiappan"})]})})]})]})}},9008:function(e,t,o){e.exports=o(5443)},1664:function(e,t,o){e.exports=o(8418)},1163:function(e,t,o){e.exports=o(387)}},function(e){e.O(0,[774,888,179],(function(){return t=3790,e(e.s=t);var t}));var t=e.O();_N_E=t}]);