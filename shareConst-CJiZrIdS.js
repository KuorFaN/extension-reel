var e=(E=>(E.INJECT_PAGE_QUERY_KEY="social-helper",E.DASHBOARD_URL="https://social-master.esuit.dev",E))(e||{}),R=(E=>(E.SUCCESS="SUCCESS",E.FAILED="FAILED",E))(R||{}),t=(E=>(E.FACEBOOK="FACEBOOK",E.INSTAGRAM="INSTAGRAM",E.MESSENGER="MESSENGER",E.BUSINESS_SUIT="BUSINESS_SUIT",E.THREADS="THREADS",E))(t||{}),A=(E=>(E.EXT_NEED_OPEN_A_PLATFORM_PAGE_TO_RUN_SCRIPT="Need open the Social Helper to run the script",E.EXT_MESSAGE_TO_INJECT_PAGE_ERROR="Send message to page error",E.EXT_UNABLE_READ_SENDER_TAB_ID="Unable to read sender tab.id",E.EXT_UNKNOWN_EVENT="Unknown event",E.EXT_PLATFORM_INJECT_PAGE_CLOSED_DURING_CREATING="Page closed during creating",E.EXT_PLATFORM_INJECT_PAGE_TIMEOUT_DURING_CREATING="Page timeout during creating try again later",E.EXT_SOCIAL_HELPER_DISCONNECTED="Social helper disconnected",E.EXT_SOCIAL_HELPER_PING_ERROR="Social helper ping error",E.EXT_USER_NO_LOGIN="You need login Facebook first!",E.PAGE_USER_DENIED_TO_OPEN_SOCIAL_HELPER="You have declined to open Social Helper Page. The program cannot continue running. try again please",E.PAGE_ROUTER_PARSING_ERROR="Router parsing error, please try again later.",E.PAGE_ROUTER_CANNOT_READ_INFO_FROM_LINK="Unable to read the router data from the link.",E.PAGE_NOT_SUPPORTS_DATA_HANDLER_FROM_THIS_LINK="Sorry, currently processing the data corresponding to this link is not supported.",E.PAGE_UNABLE_GET_USERINFO_FROM_ID="Unable to retrieve user information using the user ID.",E))(A||{});const _={[t.FACEBOOK]:["https://www.facebook.com","https://web.facebook.com"],[t.INSTAGRAM]:["https://www.instagram.com"],[t.MESSENGER]:["https://www.messenger.com"],[t.BUSINESS_SUIT]:["https://business.facebook.com"],[t.THREADS]:["https://www.threads.net"]},N={[t.FACEBOOK]:`${_[t.FACEBOOK][0]}/zuck#${e.INJECT_PAGE_QUERY_KEY}`,[t.INSTAGRAM]:`${_[t.INSTAGRAM][0]}#${e.INJECT_PAGE_QUERY_KEY}`,[t.MESSENGER]:`${_[t.MESSENGER][0]}#${e.INJECT_PAGE_QUERY_KEY}`,[t.BUSINESS_SUIT]:`${_[t.BUSINESS_SUIT][0]}#${e.INJECT_PAGE_QUERY_KEY}`,[t.THREADS]:`${_[t.THREADS][0]}#${e.INJECT_PAGE_QUERY_KEY}`},n=["https://*.esuit.dev/*","https://social-master.esuit.dev/*","http://localhost:3001/*",...S(_[t.FACEBOOK])],T=[...S(_[t.INSTAGRAM]),...S(_[t.MESSENGER]),...S(_[t.BUSINESS_SUIT]),...S(_[t.THREADS])],a=[...n,...T],I="https://social-master.esuit.dev/",s="ESUIT | Social Master for Facebook™",c="social-master-for-facebook";function S(E){return E.map(o=>`${o}/*`)}export{R as E,e as G,t as P,A as a,_ as b,I as d,s as e,a as h,c as p,N as s};
