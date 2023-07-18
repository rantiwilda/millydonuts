/*! For license information please see landbot-3.0.0.js.LICENSE.txt */
  z-index: ${({theme:e})=>e.zIndex.header};
  width: 100%;
  height: ${e=>e.theme.header.height.default};
  top: 0;
  left: 0;
  padding: 10px 30px;
  border-bottom: 1px solid transparent;
  transition: 0.25s height ease-in-out;
  color: ${({theme:e})=>e.design.header_text};

  ${()=>kg()===n.NATIVE?"position: fixed;\n      ":"position: absolute;"}

  @media ${zg} {
    padding: 22px 34px;
    margin: auto;
  }

  &.is-transparent {
    padding: 12px 10px;
    .custom-buttons {
      align-items: flex-start;
    }
  }

  &:not(.Header--hasPersistentMenu),
  &.Header--isAgentActive {
    .Header__Row {
      height: 100%;
    }
  }

  &.Header--isAgentActive {
    .Header__NavigationButton--Menu,
    .PersistentMenu .buttons {
      display: none;
    }

    .Header__BotInfo {
      transform: translateY(-100%);
      opacity: 0;
    }

    .Header__AgentInfo {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.Header--isSticky {
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.16);
  }

  &:not(.is-transparent) {
    background-color: ${({theme:e})=>e.design.header_background_color};
  }

  &.Header--hasSeparator {
    border-bottom-color: ${({theme:e})=>e.design.top_bar_separator_color};
  }

  .custom-buttons {
    .Header__NavigationButton {
      &.custom-button {
        width: 44px;
        height: 37px;
        min-width: initial;
        min-height: initial;
        max-width: initial;
        max-height: initial;
        padding: 0 0.6rem 0 0.5rem;
        color: ${({theme:e})=>e.design.header_text};
      }

      &.custom-button:hover {
        ${Yg("var(--header_text)",.1)};
        color: ${({theme:e})=>e.design.header_text};

      }

      &--Menu {
        /* The navigation button menu will have a fixed border radius and no border color */
        border-radius: 3px !important;
        border: hidden !important;
        flex-wrap: wrap;
        align-content: center;
      }

      &--Menu span {
        height: 2px;
        display: block;
        width: 100%;
        margin: 1px;
        border-radius: 1px;
        background-color: currentColor;
      }

      &--Menu span:not(:first-child) {
        margin-top: 3px;
      }

      &--Close {
        &:after,
        &:not(:hover):before {
          display: none;
        }
        &:before {
          transform: none;
        }
        position: relative;
      }
      &--Close span:first-child {
        transform: rotate(45deg);
      }

      &--Close span:last-child {
        transform: rotate(-45deg);
      }

      &--Close span {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background-color: currentColor;
      }
    }
  }

  /* Mobile */
  @media ${Wg} {
    &:not(.Header--hasPersistentMenu) {
      height: ${e=>e.theme.header.height.not_persistent_mobile};
    }

    &.Header--isSticky.Header--hasPersistentMenu {
      height: ${e=>e.theme.header.height.sticky};

      .custom-buttons {
        transform: translate(12px, 54px) scale(0.8);
        transform-origin: center right;
      }

      &.Header--isAgentActive {
        .custom-buttons {
          transform: translate(12px, -2px) scale(0.8);
        }
      }
    }

    &.Header--hasPersistentMenu:not(.Header--isAgentActive):not(.Header--isSticky) {
      height: ${e=>e.theme.header.height.with_menu};
    }

    &.Header--hasPersistentMenu {
      .Header__Row:first-child {
        z-index: ${({theme:e})=>e.zIndex.Header__Row};
        position: relative;
        .custom-buttons {
          transition: transform 0.25s ease-in-out;
        }
      }

      &.Header--isSticky.Header--hasPersistentMenu {
        .Header__Row {
          transform: translateY(-58px);
        }
      }

      &.Header--hasPersistentMenu.Header--isAgentActive {
        .Header__Row:first-child {
          transform: translateY(0);
        }

        .Header__Row:nth-child(2) {
          display: none;
        }
      }
    }
  }

  ${e=>{const{hasOffsetMenu:t,hasCloseButton:n,theme:r}=e;return!0===n&&!0===t?Br`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_and_close_button_width};
        }
      `:!0===t?Br`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_width};
        }
      `:null}}
`,Gg=uo.div`
  display: flex;
  align-items: stretch;
  transition: transform 0.25s ease-in-out;

  &:not(:first-child) {
    margin-top: 18px;
  }
`,Kg=uo.div`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  transition: 0.25s transform ease-in-out;
`,Xg=uo.div`
  display: inline-flex;
  justify-content: center;
  transition: 0.25s transform ease-in-out;

  @media ${Wg} {
    width: 100%;
  }
`;function Zg(){return(Zg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Jg=t.forwardRef(((e,n)=>t.createElement("div",Zg({},e,{ref:n,className:_o()({[e.className]:!!e.className,"custom-buttons":!String(e.className).includes("input-buttons"),buttons:!0})}))));Jg.propTypes={className:o().string},Jg.defaultProps={className:""};var $g=uo(Jg)`
  .custom-button,
  .input-button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    border: ${e=>qg(e.theme.initial_vars.vertical_unit,4)}
      solid transparent;
    padding: ${e=>Vg(e.theme.initial_vars.vertical_unit,2)}
      ${e=>Vg(e.theme.initial_vars.horizontal_unit,2)};
  }

  .custom-button:hover:not([disabled]),
  .input-button:hover:not([disabled]) {
    box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
      0 13px 17px -16px rgba(47, 49, 72, 0.3);
  }
`;function ev({isAgentActive:e,isSticky:n,hasPersistentMenu:r,persistentMenu:o,hasSeparator:i,description:a,navigation:s,hasOffsetMenu:l,hasCloseButton:c}){return t.createElement(Qg,{className:_o()({Header:!0,"Header--isAgentActive":e,"Header--isSticky":n,"Header--hasPersistentMenu":r,"Header--hasSeparator":i}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:l,hasCloseButton:c},t.createElement(Gg,{className:"Header__Row"},t.createElement(Kg,{className:"Header__Info is-relative is-overflow-ellipsis"},a),r&&t.createElement(Xg,{className:"Header__Menu is-hidden-mobile"},o),t.createElement($g,{className:"custom-buttons is-inline-flex are-transparent"},s)),t.createElement(Gg,{className:"Header__Row is-hidden-tablet"},r&&t.createElement(Xg,{className:"Header__Menu"},o)))}ev.propTypes={description:o().element,navigation:o().element,hasSeparator:o().bool,persistentMenu:o().element,isAgentActive:o().bool,isSticky:o().bool,hasPersistentMenu:o().bool,hasOffsetMenu:o().bool,hasCloseButton:o().bool},ev.defaultProps={description:null,navigation:null,hasSeparator:!1,persistentMenu:null,isAgentActive:!1,isSticky:!1,hasPersistentMenu:!1,hasOffsetMenu:!1,hasCloseButton:!1};const tv=t.createContext({isOpen:!1,setIsOpen:null,src:null}),nv=e=>t.createElement(tv.Provider,{value:e.value},e.children);nv.propTypes={value:o().object,children:o().node},nv.defaultProps={value:{},children:null};const rv=()=>(0,t.useContext)(tv),ov=t.createContext(!1),{Provider:iv}=ov,av=()=>(0,t.useContext)(ov),sv=e=>{switch(e){case"1x1":return"is-1by1";case"5x4":return"is-5by4";case"4x3":return"is-4by3";case"3x2":return"is-3by2";case"5x3":return"is-5by3";case"16x9":return"is-16by9";case"2x1":return"is-2by1";case"3x1":return"is-3by1";case"4x5":return"is-4by5";case"3x4":return"is-3by4";case"2x3":return"is-2by3";case"3x5":return"is-3by5";case"9x16":return"is-9by16";case"1x2":return"is-1by2";case"1x3":return"is-1by3";default:return null}};function lv(e){const{setIsOpen:n,setSrc:r}=rv(),o=av();return t.createElement("figure",{className:_o()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[sv(e.ratio)]:!!e.ratio,[e.className]:!!e.className,"u-pointer":e.openModal}),onClick:e.openModal&&!o?()=>{r(e.src),n(!0)}:null,style:e.figureStyle},e.src&&t.createElement("img",{alt:e.alt||e.src,className:_o()({Media:!0,[e.imgClassName]:!!e.imgClassName,"is-rounded":e.rounded,"is-contain":e.contain}),onLoad:e.onLoad,src:e.src,style:e.style}))}lv.propTypes={contain:o().bool,className:o().string,imgClassName:o().string,figureStyle:o().object,openModal:o().bool,ratio:o().string,rounded:o().bool,size:o().number,src:o().string,alt:o().string,style:o().object,onLoad:o().func},lv.defaultProps={contain:!1,className:"",imgClassName:"",figureStyle:{},openModal:!1,ratio:null,rounded:!1,size:null,src:null,alt:null,style:{},onLoad:()=>{}};const cv=uo.div`
  position: relative;
  display: inline-block;
  height: inherit;
  max-width: 40%;
  margin-right: 15px;

  .image {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image img {
    width: auto;
    height: ${e=>e.theme.header.logo_size.mobile};
    min-width: ${e=>e.theme.header.logo_size.mobile};
    display: block;

    @media ${zg} {
      height: ${e=>e.theme.header.logo_size.mobile};
      min-width: ${e=>e.theme.header.logo_size.mobile};
    }
  }
`;function uv(e){return e.src?t.createElement(cv,{className:"Header__Logo"},t.createElement(lv,Zg({contain:!0,src:e.src},e.imageProps,{rounded:e.rounded}))):null}uv.propTypes={imageProps:o().object,src:o().string,rounded:o().bool},uv.defaultProps={imageProps:{},src:null,rounded:!1};const dv=uo.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
`,fv=uo(dv)`
  opacity: 1;
  width: 100%;
`,pv=uo(dv)`
  position: absolute;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;

  .image img {
    width: ${e=>e.theme.header.logo_size.mobile};
  }
`,hv=uo.hgroup`
  flex: 1;
  min-width: 0;
`,mv=uo.h1`
  letter-spacing: -0.75px;
  font-size: ${e=>e.theme.header.brand_font_size.mobile};

  @media ${zg} {
    font-size: ${e=>e.theme.header.brand_font_size.tablet};
  }
`,bv=uo.h3`
  letter-spacing: -0.25px;
  font-size: ${e=>e.theme.header.subtitle_font_size.mobile};

  @media ${zg} {
    font-size: ${e=>e.theme.header.subtitle_font_size.tablet};
  }
`;function gv({isBotInfo:e,title:n,subtitle:r,avatar:o,avatarRounded:i}){const a=e?fv:pv,s=e?"Header__BotInfo":"Header__AgentInfo";return t.createElement(a,{className:s},t.createElement(uv,{src:o,rounded:i}),t.createElement(hv,{className:"Header__Description"},n&&t.createElement(mv,{className:"Header__Title has-text-weight-bold"},n),r&&t.createElement(bv,{className:"Header__Subtitle is-overflow-ellipsis"},r)))}gv.propTypes={isBotInfo:o().bool,avatar:o().string,avatarRounded:o().bool,title:o().string,subtitle:o().string},gv.defaultProps={isBotInfo:!0,avatar:null,avatarRounded:!1,title:null,subtitle:null};const vv=t.createContext(new(g())({})),yv=e=>t.createElement(vv.Provider,{value:e.value},e.children);yv.propTypes={value:o().object,children:o().node},yv.defaultProps={value:{},children:null};const wv=()=>(0,t.useContext)(vv);var _v="database.connection",xv="custom_data",kv="init",Ev="load",Sv="new_message",Cv="proactive_close",Ov="proactive_open",Tv="send_message",Pv="set_config",Av="set_config_context",Iv="widget_open",Nv="widget_close";const Dv=e=>{const{item:n,className:r,isVerticalVersion:o}=e;return t.createElement(Io,Zg({},e,{className:_o()({"button--PersistentMenu is-overflow-ellipsis":!0,"is-transparent":!o&&"text"===n.style,[r]:!0}),href:n.href,isAnchor:!0,key:n.payload,label:n.text,onClick:()=>(e=>{"keyword"===e.action&&(e.events.emit(Tv,{type:"button",message:e.text,payload:e.payload}),e.setDisabled(!0),setTimeout((()=>e.setDisabled(!1)),500)),e.closeMenu()})(n)}))};Dv.propTypes={item:o().object,className:o().string,isVerticalVersion:o().bool},Dv.defaultProps={item:null,className:null,isVerticalVersion:!1};const Mv=uo(Dv)`
  padding: 10px 16px;
  border-radius: calc(var(--border_radius) * 0.1rem);
  justify-content: flex-start;
  max-width: 250px;

  @media ${Wg} {
    max-width: 50%;
  }

  .label {
    font-size: ${e=>e.theme.header.font_size};
    width: 100%;
  }

  &:hover {
    border-color: transparent;
    ${Yg("var(--header_text)",.1)}
  }

  &.is-transparent {
    color: ${({theme:e})=>e.design.header_text};
  }

  ${e=>e.isVerticalVersion&&"\n    margin-bottom: 2px;\n    margin-right: 0;\n    border-radius: 3px;\n    max-width: 100% !important;\n  \n    &:first-child {\n      border-radius: 16px 16px 3px 3px;\n    }\n  \n    &:last-child {\n      border-radius: 3px 3px 16px 16px;\n    }\n"}
`,jv=uo.nav`
  flex: 0;
  order: 1;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  box-shadow: none;
  position: relative;
  align-items: center;

  @media ${zg} {
    padding: 0;
    border: initial;
    background-color: transparent;
  }

  &:not(.PersistentMenu--VerticalVersion) {
    @media ${zg} {
      margin: 0 ${e=>Vg(e.theme.initial_vars.horizontal_unit,1.25)};
    }
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${e=>e.verticalVersion&&"\n    width: 100%;\n  "}
`;function Rv(e){return t.createElement(jv,{"aria-expanded":e.ariaExpanded,className:_o()({PersistentMenu:!0,"navbar-menu":!0,"PersistentMenu--VerticalVersion":e.isVerticalVersion}),id:"navigation__persistent__menu"},t.createElement("div",{className:_o()({"is-vertically-centered is-horizontally-centered":!e.isVerticalVersion,"is-layout-vertical":e.isVerticalVersion,buttons:!e.isVerticalVersion}),ref:e.menuRef},e.children))}function Lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fv(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Lv(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Lv(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Bv({closeMenu:e,isVerticalVersion:n,ariaExpanded:r}){const{events:o}=wv(),[i,a]=(0,t.useState)(!1),s=(0,t.useRef)(null),{persistent_menu:l}=d(),c=l.map((t=>Fv(Fv({},t),{},{action:t.action||"keyword",style:t.style||"text",href:t.href||null,isKeyword:"link"!==t.action,closeMenu:e,events:o,disabled:i,setDisabled:a}))).map(((e,r)=>(n||r<2)&&t.createElement(Mv,{item:e,key:e.payload,isVerticalVersion:n})));return t.createElement(Rv,{isVerticalVersion:n,menuRef:s,ariaExpanded:null!==r?r:null},c)}function zv(){const e=wv();return t.createElement(Io,{ariaLabel:"close",className:"Header__NavigationButton Header__NavigationButton--Close delete",onClick:()=>e.events.emit(Nv)},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}Rv.propTypes={menuRef:o().object,isVerticalVersion:o().bool,children:o().any,ariaExpanded:o().bool},Rv.defaultProps={menuRef:null,isVerticalVersion:!1,children:null,ariaExpanded:null},Bv.propTypes={closeMenu:o().func,isVerticalVersion:o().bool,ariaExpanded:o().bool},Bv.defaultProps={closeMenu:()=>{},isVerticalVersion:!1,ariaExpanded:null};const Uv=t.createContext({isOpen:!1,setIsOpen:null}),Wv=e=>t.createElement(Uv.Provider,{value:e.value},e.children);Wv.propTypes={value:o().object,children:o().node},Wv.defaultProps={value:{},children:null};const Hv=()=>(0,t.useContext)(Uv);function Vv(){const{setIsOpen:e}=Hv();return t.createElement(Io,{ariaLabel:"Open Menu",className:"Header__NavigationButton Header__NavigationButton--Menu is-relative",onClick:()=>e(!0)},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}function qv(e){const n=d(),r=Ag(),{agent:o}=Og(),i=jg(),a=Lg(),s=Mg(),l=Rg(),{hasHeader:c,hideHeader:u}=Fg(),[f,p]=(0,t.useState)(!1),h={name:oe()(r,`[${o}].name`,""),avatar:oe()(r,`[${o}].avatar`,"")};return!c||u?null:t.createElement(ev,{menuActive:f,openMenu:()=>p(!0),closeMenu:()=>p(!1),isAgentActive:i,isSticky:e.isSticky,hasOffsetMenu:l,hasCloseButton:s,hasPersistentMenu:a,hasSeparator:oe()(n,"design.top_bar_separator"),persistentMenu:t.createElement(Bv,null),navigation:t.createElement(t.Fragment,null,l&&t.createElement(Vv,null),s&&t.createElement(zv,null)),description:t.createElement(t.Fragment,null,t.createElement(gv,{title:n.brand_name,subtitle:n.tagline,avatar:n.logo}),t.createElement(gv,{isBotInfo:!1,title:h.name,subtitle:n.text.hto_agent_profile_text.replace(/@brand/i,n.brand_name),avatar:h.avatar,avatarRounded:!0}))})}function Yv({navigation:e,hasOffsetMenu:n,hasCloseButton:r}){return t.createElement(Qg,{className:_o()({"Header is-transparent":!0}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:n,hasCloseButton:r},t.createElement(Gg,{className:"Header__Row is-pulled-right"},t.createElement($g,{className:"is-inline-flex are-transparent"},e)))}function Qv(){const e=d(),n=Rg(),r=Mg(),[o,i]=(0,t.useState)(!1);return e.design.header_visible||!r&&!n?null:t.createElement(Yv,{menuActive:o,openMenu:()=>i(!0),closeMenu:()=>i(!1),hasOffsetMenu:n,hasCloseButton:r,navigation:t.createElement(t.Fragment,null,n&&t.createElement(Vv,null),r&&t.createElement(zv,null))})}qv.propTypes={isSticky:o().bool},qv.defaultProps={isSticky:!1},Yv.propTypes={navigation:o().element,hasOffsetMenu:o().bool,hasCloseButton:o().bool},Yv.defaultProps={navigation:null,hasOffsetMenu:!1,hasCloseButton:!1};const Gv=t.createContext({}),Kv=e=>t.createElement(Gv.Provider,{value:e.value},e.children);Kv.propTypes={value:o().object,children:o().node},Kv.defaultProps={value:{},children:null};const Xv=()=>(0,t.useContext)(Gv),Zv="last_action_idle",Jv={lastAction:null,isOpen:!1,isInitialized:!1,type:"notification_type_error",hasCloseButton:!1,hasRetryButton:!1,hasResetButton:!1,message:null,retryCb:null,retryInterval:0},$v=t.createContext({cfg:Jv,showNotification:()=>{},closeNotification:()=>{}}),{Provider:ey}=$v,ty=()=>(0,t.useContext)($v);function ny(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ry(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ny(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ny(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const oy="MSG_ACTION_TYPE_SET_MESSAGES",iy="MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES",ay="MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION",sy="MSG_ACTION_TYPE_NEW_MESSAGE",ly="MSG_ACTION_TYPE_CLEAN",cy="MSG_ACTION_TYPE_ADD_MESSAGES",uy="MSG_ACTION_TYPE_PREPEND_MESSAGES",dy="MSG_ACTION_TYPE_MARK_AS_FAILED",fy={messages:[],previousMessages:[],messagesWrapper:{data:[]},prependMessages:e=>null};function py(e,t){switch(t.type){case ly:return ry(ry({},e),{},{messages:[]});case oy:return ry(ry({},e),{},{messages:[...t.messages]});case cy:return ry(ry({},e),{},{messages:[...e.messages,...t.messages]});case uy:return ry(ry({},e),{},{messages:[...t.messages,...e.messages]});case iy:return ry(ry({},e),{},{previousMessages:[...t.messages]});case ay:return ry(ry({},e),{},{messages:[...e.previousMessages]});case sy:{const n=[...e.messages],r=ry({},t.message);return fe.updateMessage(n,r)||n.push(r),ry(ry({},e),{},{messages:n})}case dy:{const{message:n,retryCb:r}=t,o=ry(ry({},n),{},{failed:!0,retryCb:r}),i=[...e.messages];return fe.updateMessage(i,o),ry(ry({},e),{},{messages:i})}}return e}const hy=t.createContext(fy),my=({value:e,children:n})=>t.createElement(hy.Provider,{value:e},n);my.propTypes={value:o().object,children:o().node},my.defaultProps={value:{},children:null};const by=()=>(0,t.useContext)(hy);function gy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vy(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?gy(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gy(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const yy={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class wy{constructor(e){this.raw=vy({},e),this.data=vy(vy({},e),{},{hasCountryFlag:oe()(e,"extra.hasCountryFlag",!1),isRevisit:null!==oe()(e,"extra.revisit",null),isWelcome:null!==oe()(e,"extra.welcome",null),isTyping:Boolean(e&&e.evaluate&&void 0!==e.samurai),isGhost:Boolean(e&&e.ghost),isEval:Boolean(e&&e.evaluate),isInsideForm:Boolean(e&&e.isInsideForm),isFirstInput:Boolean(e&&e.isFirstInput),isFinishBot:Boolean(e&&e.type===P.HIDDEN&&"finish"===e.action),isActionUnassign:Boolean(e&&"unassign"===e.action),failed:e&&!0===e.failed,hasGDPR:oe()(e,"extra.legal.state",!1),gdpr:{text:oe()(e,"extra.legal.text",""),link:ae.Z.getHref(oe()(e,"extra.legal.link","")),linkText:oe()(e,"extra.legal.linkText","")},customSubmitFn:oe()(e,"extra.input.onSubmit",null),minValue:Number(oe()(e,"extra.textarea.minValue",null)),maxValue:Number(oe()(e,"extra.textarea.maxValue",null)),prefix:oe()(e,"extra.textarea.prefix"),multiple:oe()(e,"extra.textarea.multiple",!1),buttonsAlignment:oe()(e,"extra.buttons.alignment","horizontal"),buttonsMinOptions:oe()(e,"extra.buttons.minOptions",null),buttonsMaxOptions:oe()(e,"extra.buttons.maxOptions",null),errorMessage:oe()(e,"extra.errorMessage",void 0),buttonsRandomize:oe()(e,"extra.buttons.randomize",!1),isCumulative:oe()(e,"extra.buttons.cumulative",!1),buttonsLeftTag:oe()(e,"extra.buttons.tags[0]",""),buttonsRightTag:oe()(e,"extra.buttons.tags[1]",""),mustMatchSuggestion:oe()(e,"extra.buttons.must_match_suggestion",!0),markRequired:Boolean(oe()(e,"extra.markRequired",!0)),responsiveLayout:Boolean(oe()(e,"extra.responsiveLayout",!1)),key:e?e.ui_key||e.key:"",url:e?e.url:"",inputType:ie.getInputType(e),author:fe.getAuthor(e?e.samurai:null),date:e&&e.timestamp?_t.getMessageDate(e.timestamp):null,blockID:oe()(e,"extra.id",""),className:oe()(e,"extra.className",""),submitButtonLabel:oe()(e,"send_label"),skipButtonLabel:oe()(e,"skip_label"),hasSkipButton:oe()(e,"has_skip_button")}),this.initMessageText(),this.data.hasInput=null!==this.data.inputType;const t=oe()(e,"extra.textarea.dateOptions",null);this.initDateOptions(t),this.data.isInputBubbleStyled=ie.isBubbleStyled(this.data.inputType)}getValue(e){if("raw"===e)return this.raw;if(e in this.data)return this.data[e];if("string"==typeof e&&e.startsWith("isAuthor")){const t=e.substr("isAuthor".length).toLowerCase();return this.isAuthor(t)}}setValue(e,t){this.data[e]=t}toJSON(){return this.data}getRawValue(e){return this.raw[e]}getMessageType(e){const t=fe.getMessageType(this.raw,e);return t===P.INPUT?null:t}getInputInlineMessageType(){return this.getValue("hasInput")?P.INPUT:null}getPlaceholder(e){return ie.getFieldPlaceholder({message:this.raw,text:e})}getAvatar({config:e,agents:t}){return fe.getAvatar({config:e,message:this.raw,agents:t})}getButtons(){const e=ie.getButtonsFromMessage(this.raw);return this.getValue("buttonsRandomize")?e.sort((()=>Math.random()-.5)):e}getAutocompleteOptions(){return ie.getAutocompleteOptions(this.raw)}getCards(){return ie.getCards(this.raw)}isAuthor(e){return this.getValue("author")===e}isEmpty(){return 0===Object.keys(this.raw).length}getVideoUrl(){return fe.getVideoUrl(this.getValue("url"))}initMessageText(){const e=this.getMessageType(!0),{data:t}=this,{invite_message:n,message:r,rich_text:o,title:i}=t;if(e===P.STRUCTURED_DATA&&r)return t.messageText=ae.Z.bold(r),void(t.messageTextIsHTML=!0);if(e===P.DIALOG)return t.messageText=t&&(n||o||i)||"",void(t.messageTextIsHTML=!1);if(!o&&r&&"string"==typeof r)try{const e=/(((https?:\/\/)|(www\.))[^\s]+)/g;if(r.search(e)>-1)return t.messageText=r.replace(e,(e=>{let t=e;return t.match("^https?://")||(t=`http://${t}`),`<a href="${t}" target="_blank" rel="noopener noreferrer">${e}</a>`})),void(t.messageTextIsHTML=!0)}catch(e){console.error("Link replacement failed: ",e.message)}t.messageText=t&&(n||o||i||r)||"",t.messageTextIsHTML=!1}initDateOptions(e){const{data:t}=this;this.dateInputLogic=new Ud(e),t.showDatePicker=this.dateInputLogic.getShowDatePicker(),t.dateFormat=this.dateInputLogic.dateFormat,t.enabledDaysOfWeek=this.dateInputLogic.enabledDaysOfWeek}getDateFnsFormat(){return this.dateInputLogic.getDateFnsFormat()}isValidDate(e,t=!1){return!(e||!t)||this.dateInputLogic.isValidDate(e)}applyDateFormat(e){return this.dateInputLogic.applyDateFormat(e)}parseDate(e){return this.dateInputLogic.parseDate(e)}getDatePickerInitialMonth(e){return this.dateInputLogic.getInitialMonth(e)}isValidNumber(e,t,n){return ie.validNumberHelper({value:e,minText:t,minValue:this.getValue("minValue"),maxText:n,maxValue:this.getValue("maxValue")})}isValidText(e){return ie.validText(e,{pattern:oe()(this.raw,"extra.textarea.pattern"),errorMessage:oe()(this.raw,"extra.textarea.errorMessage"),minChars:oe()(this.raw,"extra.textarea.minChars"),maxChars:oe()(this.raw,"extra.textarea.maxChars")})}}function _y(e,t){if(e instanceof wy)throw new Error("TypeError: invalid arguments supplied to messageWrapper. Attempt to wrap an already wrapped message.");return new Proxy(new wy(e,t),yy)}const xy={MSGFILTER_SUPPORTED:fe.supportedMessageFilter,MSGFILTER_VISIBLE:fe.visibleMessageFilter,MSGFILTER_BRANDMESSAGE:fe.brandMessageFilter};function ky(e){return e.map((e=>_y(e)))}class Ey{constructor(e){this.raw=e,this.data=ky(e),this.filteredData={}}getLastMessage(){return this.data.length>0?this.data.slice(-1)[0]:_y({})}getLastVisibleMessage(){const e=this.getSupportedMessages();return e.length>0?e.slice(-1)[0]:_y({})}getLast2VisibleMessages(){const e=this.getSupportedMessages(),[t]=e.slice(-1);return[(e.length>1?e.slice(-2)[0]:_y(null))||_y(null),t||_y(null)]}getLastBrandMessage(){const e=this.getBrandMessages();return e.length>0?e.slice(-1)[0]:_y({})}replaceVariables(e){return ky(this.raw.map((t=>fe.withVariablesReplaced(t,e))))}getBrandMessages(){return this._filterMessages("MSGFILTER_BRANDMESSAGE")}getSupportedMessages(){return this._filterMessages("MSGFILTER_SUPPORTED")}getVisibleMessages(){return this._filterMessages("MSGFILTER_VISIBLE")}_filterMessages(e){return e in this.filteredData||(this.filteredData[e]=this.data.filter(xy[e])),this.filteredData[e]}}function Sy(e){if(e instanceof Ey)throw new Error("TypeError: invalid arguments supplied to messagesWrapper. Attempt to wrap an already wrapped messages.");return new Ey(e)}function Cy(e){return Sy(fe.createSortedMessagesArray(e))}var Oy={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ty={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Py=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ay={CSS:{},springs:{}};function Iy(e,t,n){return Math.min(Math.max(e,t),n)}function Ny(e,t){return e.indexOf(t)>-1}function Dy(e,t){return e.apply(null,t)}var My={arr:function(e){return Array.isArray(e)},obj:function(e){return Ny(Object.prototype.toString.call(e),"Object")},pth:function(e){return My.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||My.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return My.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return My.hex(e)||My.rgb(e)||My.hsl(e)},key:function(e){return!Oy.hasOwnProperty(e)&&!Ty.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function jy(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function Ry(e,t){var n=jy(e),r=Iy(My.und(n[0])?1:n[0],.1,100),o=Iy(My.und(n[1])?100:n[1],.1,100),i=Iy(My.und(n[2])?10:n[2],.1,100),a=Iy(My.und(n[3])?0:n[3],.1,100),s=Math.sqrt(o/r),l=i/(2*Math.sqrt(o*r)),c=l<1?s*Math.sqrt(1-l*l):0,u=l<1?(l*s-a)/c:-a+s;function d(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*s)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?d:function(){var t=Ay.springs[e];if(t)return t;for(var n=1/6,r=0,o=0;;)if(1===d(r+=n)){if(++o>=16)break}else o=0;var i=r*n*1e3;return Ay.springs[e]=i,i}}function Ly(e){return void 0===e&&(e=10),function(t){return Math.ceil(Iy(t,1e-6,1)*e)*(1/e)}}var Fy,By,zy=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function o(e,o,i){return((t(o,i)*e+n(o,i))*e+r(o))*e}function i(e,o,i){return 3*t(o,i)*e*e+2*n(o,i)*e+r(o)}return function(t,n,r,a){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==a)for(var l=0;l<11;++l)s[l]=o(l*e,t,r);return function(e){return t===n&&r===a||0===e||1===e?e:o(c(e),n,a)}}function c(n){for(var a=0,l=1;10!==l&&s[l]<=n;++l)a+=e;--l;var c=a+(n-s[l])/(s[l+1]-s[l])*e,u=i(c,t,r);return u>=.001?function(e,t,n,r){for(var a=0;a<4;++a){var s=i(t,n,r);if(0===s)return t;t-=(o(t,n,r)-e)/s}return t}(n,c,t,r):0===u?c:function(e,t,n,r,i){var a,s,l=0;do{(a=o(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s}while(Math.abs(a)>1e-7&&++l<10);return s}(n,a,a+e,t,r)}}}(),Uy=(Fy={linear:function(){return function(e){return e}}},By={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=Iy(e,1,10),r=Iy(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){By[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(By).forEach((function(e){var t=By[e];Fy["easeIn"+e]=t,Fy["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},Fy["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},Fy["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),Fy);function Wy(e,t){if(My.fnc(e))return e;var n=e.split("(")[0],r=Uy[n],o=jy(e);switch(n){case"spring":return Ry(e,t);case"cubicBezier":return Dy(zy,o);case"steps":return Dy(Ly,o);default:return Dy(r,o)}}function Hy(e){try{return document.querySelectorAll(e)}catch(e){return}}function Vy(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,o=[],i=0;i<n;i++)if(i in e){var a=e[i];t.call(r,a,i,e)&&o.push(a)}return o}function qy(e){return e.reduce((function(e,t){return e.concat(My.arr(t)?qy(t):t)}),[])}function Yy(e){return My.arr(e)?e:(My.str(e)&&(e=Hy(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Qy(e,t){return e.some((function(e){return e===t}))}function Gy(e){var t={};for(var n in e)t[n]=e[n];return t}function Ky(e,t){var n=Gy(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function Xy(e,t){var n=Gy(e);for(var r in t)n[r]=My.und(e[r])?t[r]:e[r];return n}function Zy(e){return My.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:My.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):My.hsl(e)?function(e){var t,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(o[1],10)/360,a=parseInt(o[2],10)/100,s=parseInt(o[3],10)/100,l=o[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==a)t=n=r=s;else{var u=s<.5?s*(1+a):s+a-s*a,d=2*s-u;t=c(d,u,i+1/3),n=c(d,u,i),r=c(d,u,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}function Jy(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function $y(e,t){return My.fnc(e)?e(t.target,t.id,t.total):e}function ew(e,t){return e.getAttribute(t)}function tw(e,t,n){if(Qy([n,"deg","rad","turn"],Jy(t)))return t;var r=Ay.CSS[t+n];if(!My.und(r))return r;var o=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(o),o.style.position="absolute",o.style.width=100+n;var a=100/o.offsetWidth;i.removeChild(o);var s=a*parseFloat(t);return Ay.CSS[t+n]=s,s}function nw(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?tw(e,o,n):o}}function rw(e,t){return My.dom(e)&&!My.inp(e)&&(!My.nil(ew(e,t))||My.svg(e)&&e[t])?"attribute":My.dom(e)&&Qy(Py,t)?"transform":My.dom(e)&&"transform"!==t&&nw(e,t)?"css":null!=e[t]?"object":void 0}function ow(e){if(My.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;t=r.exec(n);)o.set(t[1],t[2]);return o}}function iw(e,t,n,r){var o=Ny(t,"scale")?1:0+function(e){return Ny(e,"translate")||"perspective"===e?"px":Ny(e,"rotate")||Ny(e,"skew")?"deg":void 0}(t),i=ow(e).get(t)||o;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?tw(e,i,r):i}function aw(e,t,n,r){switch(rw(e,t)){case"transform":return iw(e,t,r,n);case"css":return nw(e,t,n);case"attribute":return ew(e,t);default:return e[t]||0}}function sw(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=Jy(e)||0,o=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return o+i+r;case"-":return o-i+r;case"*":return o*i+r}}function lw(e,t){if(My.col(e))return Zy(e);if(/\s/g.test(e))return e;var n=Jy(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function cw(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function uw(e){for(var t,n=e.points,r=0,o=0;o<n.numberOfItems;o++){var i=n.getItem(o);o>0&&(r+=cw(t,i)),t=i}return r}function dw(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*ew(e,"r")}(e);case"rect":return function(e){return 2*ew(e,"width")+2*ew(e,"height")}(e);case"line":return function(e){return cw({x:ew(e,"x1"),y:ew(e,"y1")},{x:ew(e,"x2"),y:ew(e,"y2")})}(e);case"polyline":return uw(e);case"polygon":return function(e){var t=e.points;return uw(e)+cw(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function fw(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;My.svg(t)&&My.svg(t.parentNode);)t=t.parentNode;return t}(e),o=r.getBoundingClientRect(),i=ew(r,"viewBox"),a=o.width,s=o.height,l=n.viewBox||(i?i.split(" "):[0,0,a,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:s,vW:l[2],vH:l[3]}}function pw(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var o=fw(e.el,e.svg),i=r(),a=r(-1),s=r(1),l=n?1:o.w/o.vW,c=n?1:o.h/o.vH;switch(e.property){case"x":return(i.x-o.x)*l;case"y":return(i.y-o.y)*c;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function hw(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=lw(My.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:My.str(e)||t?r.split(n):[]}}function mw(e){return Vy(e?qy(My.arr(e)?e.map(Yy):Yy(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function bw(e){var t=mw(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:ow(e)}}}))}function gw(e,t){var n=Gy(t);if(/^spring/.test(n.easing)&&(n.duration=Ry(n.easing)),My.arr(e)){var r=e.length;2===r&&!My.obj(e[0])?e={value:e}:My.fnc(t.duration)||(n.duration=t.duration/r)}var o=My.arr(e)?e:[e];return o.map((function(e,n){var r=My.obj(e)&&!My.pth(e)?e:{value:e};return My.und(r.delay)&&(r.delay=n?0:t.delay),My.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r})).map((function(e){return Xy(e,n)}))}function vw(e,t){var n=[],r=t.keyframes;for(var o in r&&(t=Xy(function(e){for(var t=Vy(qy(e.map((function(e){return Object.keys(e)}))),(function(e){return My.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var o=t[r];n[o]=e.map((function(e){var t={};for(var n in e)My.key(n)?n==o&&(t.value=e[n]):t[n]=e[n];return t}))},o=0;o<t.length;o++)r(o);return n}(r),t)),t)My.key(o)&&n.push({name:o,tweens:gw(t[o],e)});return n}function yw(e,t){var n;return e.tweens.map((function(r){var o=function(e,t){var n={};for(var r in e){var o=$y(e[r],t);My.arr(o)&&1===(o=o.map((function(e){return $y(e,t)}))).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=o.value,a=My.arr(i)?i[1]:i,s=Jy(a),l=aw(t.target,e.name,s,t),c=n?n.to.original:l,u=My.arr(i)?i[0]:c,d=Jy(u)||Jy(l),f=s||d;return My.und(a)&&(a=c),o.from=hw(u,f),o.to=hw(sw(a,u),f),o.start=n?n.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=Wy(o.easing,o.duration),o.isPath=My.pth(i),o.isPathTargetInsideSVG=o.isPath&&My.svg(t.target),o.isColor=My.col(o.from.original),o.isColor&&(o.round=1),n=o,o}))}var ww={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,o){if(r.list.set(t,n),t===r.last||o){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function _w(e,t){bw(e).forEach((function(e){for(var n in t){var r=$y(t[n],e),o=e.target,i=Jy(r),a=aw(o,n,i,e),s=sw(lw(r,i||Jy(a)),a),l=rw(o,n);ww[l](o,n,s,e.transforms,!0)}}))}function xw(e,t){return Vy(qy(e.map((function(e){return t.map((function(t){return function(e,t){var n=rw(e.target,t.name);if(n){var r=yw(t,e),o=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}(e,t)}))}))),(function(e){return!My.und(e)}))}function kw(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,o.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,o.endDelay=n?o.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,o}var Ew=0;var Sw=[],Cw=function(){var e;function t(n){for(var r=Sw.length,o=0;o<r;){var i=Sw[o];i.paused?(Sw.splice(o,1),r--):(i.tick(n),o++)}e=o>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){Tw.suspendWhenDocumentHidden&&(Ow()?e=cancelAnimationFrame(e):(Sw.forEach((function(e){return e._onDocumentVisibility()})),Cw()))})),function(){e||Ow()&&Tw.suspendWhenDocumentHidden||!(Sw.length>0)||(e=requestAnimationFrame(t))}}();function Ow(){return!!document&&document.hidden}function Tw(e){void 0===e&&(e={});var t,n=0,r=0,o=0,i=0,a=null;function s(e){var t=window.Promise&&new Promise((function(e){return a=e}));return e.finished=t,t}var l=function(e){var t=Ky(Oy,e),n=Ky(Ty,e),r=vw(n,e),o=bw(e.targets),i=xw(o,r),a=kw(i,n),s=Ew;return Ew++,Xy(t,{id:s,children:[],animatables:o,animations:i,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}(e);s(l);function c(){var e=l.direction;"alternate"!==e&&(l.direction="normal"!==e?"normal":"reverse"),l.reversed=!l.reversed,t.forEach((function(e){return e.reversed=l.reversed}))}function u(e){return l.reversed?l.duration-e:e}function d(){n=0,r=u(l.currentTime)*(1/Tw.speed)}function f(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=l.animations,r=n.length;t<r;){var o=n[t],i=o.animatable,a=o.tweens,s=a.length-1,c=a[s];s&&(c=Vy(a,(function(t){return e<t.end}))[0]||c);for(var u=Iy(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(u)?1:c.easing(u),f=c.to.strings,p=c.round,h=[],m=c.to.numbers.length,b=void 0,g=0;g<m;g++){var v=void 0,y=c.to.numbers[g],w=c.from.numbers[g]||0;v=c.isPath?pw(c.value,d*y,c.isPathTargetInsideSVG):w+d*(y-w),p&&(c.isColor&&g>2||(v=Math.round(v*p)/p)),h.push(v)}var _=f.length;if(_){b=f[0];for(var x=0;x<_;x++){f[x];var k=f[x+1],E=h[x];isNaN(E)||(b+=k?E+k:E+" ")}}else b=h[0];ww[o.type](i.target,o.property,b,i.transforms),o.currentValue=b,t++}}function h(e){l[e]&&!l.passThrough&&l[e](l)}function m(e){var d=l.duration,m=l.delay,b=d-l.endDelay,g=u(e);l.progress=Iy(g/d*100,0,100),l.reversePlayback=g<l.currentTime,t&&function(e){if(l.reversePlayback)for(var n=i;n--;)f(e,t[n]);else for(var r=0;r<i;r++)f(e,t[r])}(g),!l.began&&l.currentTime>0&&(l.began=!0,h("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,h("loopBegin")),g<=m&&0!==l.currentTime&&p(0),(g>=b&&l.currentTime!==d||!d)&&p(d),g>m&&g<b?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,h("changeBegin")),h("change"),p(g)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,h("changeComplete")),l.currentTime=Iy(g,0,d),l.began&&h("update"),e>=d&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=o,h("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,h("loopComplete"),h("complete"),!l.passThrough&&"Promise"in window&&(a(),s(l)))))}return l.reset=function(){var e=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===e,l.remaining=l.loop,t=l.children;for(var n=i=t.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===e&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(e,t){return _w(e,t),l},l.tick=function(e){o=e,n||(n=o),m((o+(r-n))*Tw.speed)},l.seek=function(e){m(u(e))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Sw.push(l),d(),Cw())},l.reverse=function(){c(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(e){Aw(mw(e),l)},l.reset(),l.autoplay&&l.play(),l}function Pw(e,t){for(var n=t.length;n--;)Qy(e,t[n].animatable.target)&&t.splice(n,1)}function Aw(e,t){var n=t.animations,r=t.children;Pw(e,n);for(var o=r.length;o--;){var i=r[o],a=i.animations;Pw(e,a),a.length||i.children.length||r.splice(o,1)}n.length||r.length||t.pause()}Tw.version="3.2.1",Tw.speed=1,Tw.suspendWhenDocumentHidden=!0,Tw.running=Sw,Tw.remove=function(e){for(var t=mw(e),n=Sw.length;n--;){Aw(t,Sw[n])}},Tw.get=aw,Tw.set=_w,Tw.convertPx=tw,Tw.path=function(e,t){var n=My.str(e)?Hy(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:fw(n),totalLength:dw(n)*(r/100)}}},Tw.setDashoffset=function(e){var t=dw(e);return e.setAttribute("stroke-dasharray",t),t},Tw.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?Wy(t.easing):null,o=t.grid,i=t.axis,a=t.from||0,s="first"===a,l="center"===a,c="last"===a,u=My.arr(e),d=u?parseFloat(e[0]):parseFloat(e),f=u?parseFloat(e[1]):0,p=Jy(u?e[1]:e)||0,h=t.start||0+(u?d:0),m=[],b=0;return function(e,t,g){if(s&&(a=0),l&&(a=(g-1)/2),c&&(a=g-1),!m.length){for(var v=0;v<g;v++){if(o){var y=l?(o[0]-1)/2:a%o[0],w=l?(o[1]-1)/2:Math.floor(a/o[0]),_=y-v%o[0],x=w-Math.floor(v/o[0]),k=Math.sqrt(_*_+x*x);"x"===i&&(k=-_),"y"===i&&(k=-x),m.push(k)}else m.push(Math.abs(a-v));b=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/b)*b}))),"reverse"===n&&(m=m.map((function(e){return i?e<0?-1*e:-e:Math.abs(b-e)})))}return h+(u?(f-d)/b:d)*(Math.round(100*m[t])/100)+p}},Tw.timeline=function(e){void 0===e&&(e={});var t=Tw(e);return t.duration=0,t.add=function(n,r){var o=Sw.indexOf(t),i=t.children;function a(e){e.passThrough=!0}o>-1&&Sw.splice(o,1);for(var s=0;s<i.length;s++)a(i[s]);var l=Xy(n,Ky(Ty,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=My.und(r)?c:sw(r,c),a(t),t.seek(l.timelineOffset);var u=Tw(l);a(u),i.push(u);var d=kw(i,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},Tw.easing=Wy,Tw.penner=Uy,Tw.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Iw=Tw;class Nw{constructor({document:e,filterSelector:t,mutatingElement:n,targetSelector:r,window:o}){this.document=e,this.filterSelector=t,this.mutatingElement=n,this.targetSelector=r,this.window=o,this._onMutation=this._onMutation.bind(this);const i=new MutationObserver(this._onMutation);this.observer=i.observe(n,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e&&e.matches(this.filterSelector)){const t=e.querySelector(this.targetSelector);if(t){const e=t.offsetHeight+t.offsetTop+3;Iw({targets:t,translateY:[-e,0],duration:500,easing:"easeInOutQuad"})}}}))}))}}class Dw{constructor({scrollingElement:e,mutatingElement:t,inputInlineRef:n,spacerRef:r,bodyRef:o,isModeNative:i,autoScrollHandler:a}){this.scrollingElement=e,this.mutatingElement=t,this.inputInlineRef=n,this.spacerRef=r,this.bodyRef=o,this.isModeNative=i,this.autoScrollHandler=a,this.auto=!0,this.behavior="smooth",this._onUserScroll=this._onUserScroll.bind(this),this._onMutation=this._onMutation.bind(this),this._attachScrollEvents=this._attachScrollEvents.bind(this),this._dettachScrollEvents=this._dettachScrollEvents.bind(this),this._onResize=this._onResize.bind(this),this._scrollTo=this._scrollTo.bind(this);const s=new MutationObserver(this._onMutation);this.observer=s.observe(t,{attributes:!1,childList:!1,characterData:!0,subtree:!0}),this.animation=null,this._attachScrollEvents(),window.addEventListener("resize",this._onResize)}setBehavior(e){this.behavior=e}destroy(){this.observer&&this.observer.disconnect(),this._dettachScrollEvents(),window.removeEventListener("resize",this._onResize)}_attachScrollEvents(){this.scrollingElement.addEventListener("wheel",this._onUserScroll),this.scrollingElement.addEventListener("touchmove",this._onUserScroll)}_dettachScrollEvents(){this.scrollingElement.removeEventListener("wheel",this._onUserScroll),this.scrollingElement.removeEventListener("touchmove",this._onUserScroll)}_onUserScroll(){this.animation&&this.animation.pause(),this.auto=!1,this._dettachScrollEvents(),setTimeout((()=>{this.auto=!0,this._attachScrollEvents()}),1e3)}_onMutation(){this.auto&&(this.animation&&!this.animation.completed&&this.animation.pause(),setTimeout((()=>this._doAutoScroll()),200))}_onResize(){this.auto&&this._doAutoScroll()}_doAutoScroll(){var e,t,n,r,o,i;const a=this.scrollingElement.scrollHeight,s=this.isModeNative?window.innerHeight:(null===(e=this.bodyRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0,l=a-s-((null===(n=this.spacerRef)||void 0===n||null===(r=n.current)||void 0===r?void 0:r.clientHeight)||0)-((null===(o=this.inputInlineRef)||void 0===o||null===(i=o.current)||void 0===i?void 0:i.scrollHeight)||0)+Math.round(.6*s);a>s+150&&l>this.scrollingElement.scrollTop&&l>=0&&this.scrollingElement.scrollTop>=0&&this._scrollTo(l)}_scrollTo(e){this.animation=Iw({targets:this.scrollingElement,scrollTop:e,duration:1e3,easing:"easeOutQuad"}),this.autoScrollHandler&&this.autoScrollHandler(e)}}const Mw="Header--isSticky",jw="Body--isSticky";class Rw{constructor({scrollingElement:e,header:t,body:n}){this.scrollingElement=e,this.header=t,this.body=n,this.clientY=null,this.onUserScroll=this.onUserScroll.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onAutoScroll=this.onAutoScroll.bind(this),this.scrollingElement.addEventListener("wheel",this.onUserScroll,!1),this.scrollingElement.addEventListener("touchstart",this.onTouchStart,!1),this.scrollingElement.addEventListener("touchend",this.onTouchEnd,!1)}getAutoScrollHandler(){return this.onAutoScroll}onAutoScroll(e){this.onUserScroll({deltaY:e})}onUserScroll(e){e.deltaY>=0?(this.header.classList.add(Mw),this.body.classList.add(jw)):(this.header.classList.remove(Mw),this.body.classList.remove(jw))}onTouchStart(e){this.clientY=e.touches[0].clientY}onTouchEnd(e){const t=e.changedTouches[0].clientY-this.clientY;this.onUserScroll({deltaY:-t})}destroy(){this.scrollingElement.removeEventListener("wheel",this.onUserScroll),this.scrollingElement.removeEventListener("touchstart",this.onTouchStart),this.scrollingElement.removeEventListener("touchend",this.onTouchEnd)}}class Lw{constructor({document:e,iframe:t,selector:n,window:r}){this.document=e,this.iframe=t,this.selector=n,this.window=r,this._onMutation=this._onMutation.bind(this);const o=new MutationObserver(this._onMutation);this.observer=o.observe(e,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){this._landbotFrameHasFocus()&&e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e){const t=e.querySelector(this.selector);t&&setTimeout((()=>{t.focus()}),200)}}))}))}_landbotFrameHasFocus(){return window.top===this.window||window.top.document.activeElement===this.iframe}}var Fw=__webpack_require__(5893);const Bw=uo.div`
  margin: 0 auto;
  text-align: center;

  .button {
    display: inline-block;
    background-color: var(--message_background_color_user);
    color: var(--message_color_user);
  }
  .button.button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    box-shadow: none;
  }
`;function zw({visible:e,isFetching:t,onClick:n,label:r}){return(0,Fw.jsx)(Fw.Fragment,{children:e&&(0,Fw.jsx)(Bw,Object.assign({className:"mt-6 mb-5 LoadMore__container"},{children:(0,Fw.jsx)("button",Object.assign({className:_o()("LoadMore__button","button","has-text-weight-bold","is-small","px-4",t&&"is-loading"),onClick:n,type:"button"},{children:r}),void 0)}),void 0)},void 0)}function Uw(){const{isFetchingMore:e,fetchMoreMessages:n,hasMoreMessages:r}=function(){const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(!0),{prependMessages:i}=by(),a=wv();return{isFetchingMore:e,fetchMoreMessages:()=>{n(!0),a.getMoreMessages(20).then((e=>{e?(o(20===Object.keys(e).length),i(e)):o(!1)})).catch(console.error).finally((()=>n(!1)))},hasMoreMessages:r}}(),{messagesWrapper:o}=by(),i=d(),a=!i.storage_off;return(0,Fw.jsx)(zw,{isFetching:e,label:i.text.load_more_button_label,onClick:n,visible:a&&r&&o.data.length>=20},void 0)}zw.propTypes={isFetching:o().bool,label:o().string,onClick:o().func,visible:o().bool},zw.defaultProps={isFetching:!1,label:"",onClick:()=>{},visible:!1};const Ww=55,Hw=95,Vw=({hasNavBarFixedTop:e,hasPersistentMenu:t},n)=>{let r=50;return e&&(r+=n?Ww:Hw),n&&t&&(r+=55),`${r}px`},qw=uo.div`
  -webkit-overflow-scrolling: touch;
  ${()=>kg()===n.NATIVE?"max-height: auto;\n       overflow: visible;\n      ":"max-height: 100%;\n     overflow: auto;"}

  @media ${Wg} {
    padding-top: ${e=>Vw(e,!0)};
    padding-bottom: ${0}px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media ${zg} {
    padding-top: ${e=>Vw(e,!1)};
  }
  ${e=>e.hasInputFixed?Br`
          padding-bottom: ${0};
        `:null}
`;function Yw({hasHeader:e,hasAgentAssigned:n,hasPersistentMenu:r,isConnectionOk:o,children:i}){return t.createElement(qw,{className:_o()({Chat:!0,"Chat--hasNavBarFixedTop":e,"Chat--hasInputFixed":n,"Chat--hasPersistentMenu":r,"js-auto-scroll":!0,"js-revisit-fade":!0,"is-autoscroll-mutation-target":!0,"are-disabled":!o}),hasNavBarFixedTop:e,hasPersistentMenu:r},i)}Yw.propTypes={hasHeader:o().bool,hasAgentAssigned:o().bool,hasPersistentMenu:o().bool,isConnectionOk:o().bool,children:o().node},Yw.defaultProps={hasHeader:!1,hasAgentAssigned:!1,hasPersistentMenu:!1,isConnectionOk:!0,children:null};const Qw=uo.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${zg} {  
    height: 300px;
  }
`;function Gw(e){return t.createElement(Qw,{className:"ChatLoaderContainer"},e.children)}Gw.propTypes={children:o().node},Gw.defaultProps={children:null};const Kw=ro`
  0%,
  80%,
  100% {
    box-shadow: 0 1em 0 -1em;
  }
  40% {
    box-shadow: 0 1em 0 -0.2em;
  }
`,Xw=uo.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  pointer-events: none;

  &::before,
  &::after,
  & {
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${Kw} 1.8s infinite ease-in-out;
  }

  & {
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
    top: -1em;

    &::before {
      right: 100%;
      animation-delay: -0.32s;
    }

    &::after {
      left: 100%;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: inherit;
      height: inherit;
    }
  }

  color: ${({theme:e})=>e.design.form_buttons_background_color};
`;function Zw(e){return t.createElement(Xw,{className:_o()("lb-loader",e.className)})}Zw.propTypes={className:o().string},Zw.defaultProps={className:""};var Jw=Zw,$w=function(e,t){return($w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function e_(e,t){function n(){this.constructor=e}$w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function t_(e){return"function"==typeof e}var n_=!1,r_={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;n_=e},get useDeprecatedSynchronousErrorHandling(){return n_}};function o_(e){setTimeout((function(){throw e}),0)}var i_={closed:!0,next:function(e){},error:function(e){if(r_.useDeprecatedSynchronousErrorHandling)throw e;o_(e)},complete:function(){}},a_=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();function s_(e){return null!==e&&"object"==typeof e}var l_=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),c_=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this,r=n._parentOrParents,o=n._ctorUnsubscribe,i=n._unsubscribe,a=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var s=0;s<r.length;++s){r[s].remove(this)}if(t_(i)){o&&(this._unsubscribe=void 0);try{i.call(this)}catch(e){t=e instanceof l_?u_(e.errors):[e]}}if(a_(a)){s=-1;for(var l=a.length;++s<l;){var c=a[s];if(s_(c))try{c.unsubscribe()}catch(e){t=t||[],e instanceof l_?t=t.concat(u_(e.errors)):t.push(e)}}}if(t)throw new l_(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function u_(e){return e.reduce((function(e,t){return e.concat(t instanceof l_?t.errors:t)}),[])}var d_=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),f_=function(e){function t(n,r,o){var i=e.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=i_;break;case 1:if(!n){i.destination=i_;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new p_(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new p_(i,n,r,o)}return i}return e_(t,e),t.prototype[d_]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(c_),p_=function(e){function t(t,n,r,o){var i,a=e.call(this)||this;a._parentSubscriber=t;var s=a;return t_(n)?i=n:n&&(i=n.next,r=n.error,o=n.complete,n!==i_&&(t_((s=Object.create(n)).unsubscribe)&&a.add(s.unsubscribe.bind(s)),s.unsubscribe=a.unsubscribe.bind(a))),a._context=s,a._next=i,a._error=r,a._complete=o,a}return e_(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;r_.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=r_.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):o_(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;o_(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};r_.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),r_.useDeprecatedSynchronousErrorHandling)throw e;o_(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!r_.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return r_.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(o_(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(f_);var h_=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function m_(e){return e}function b_(e){return 0===e.length?m_:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var g_=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,o=function(e,t,n){if(e){if(e instanceof f_)return e;if(e[d_])return e[d_]()}return e||t||n?new f_(e,t,n):new f_(i_)}(e,t,n);if(r?o.add(r.call(o,this.source)):o.add(this.source||r_.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),r_.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){r_.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,r=t.destination,o=t.isStopped;if(n||o)return!1;e=r&&r instanceof f_?r:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=v_(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),o&&o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[h_]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:b_(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=v_(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function v_(e){if(e||(e=r_.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var y_=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),w_=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return e_(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(c_),__=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return e_(t,e),t}(f_),x_=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e_(t,e),t.prototype[d_]=function(){return new __(this)},t.prototype.lift=function(e){var t=new k_(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new y_;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new y_;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new y_;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new y_;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new y_;return this.hasError?(e.error(this.thrownError),c_.EMPTY):this.isStopped?(e.complete(),c_.EMPTY):(this.observers.push(e),new w_(this,e))},t.prototype.asObservable=function(){var e=new g_;return e.source=this,e},t.create=function(e,t){return new k_(e,t)},t}(g_),k_=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return e_(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):c_.EMPTY},t}(x_),E_=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return e_(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return e_(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(c_)),S_=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),C_=new(function(e){function t(n,r){void 0===r&&(r=S_.now);var o=e.call(this,n,(function(){return t.delegate&&t.delegate!==o?t.delegate.now():r()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return e_(t,e),t.prototype.schedule=function(n,r,o){return void 0===r&&(r=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,r,o):e.prototype.schedule.call(this,n,r,o)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(S_))(E_);var O_=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new T_(e,this.dueTime,this.scheduler))},e}(),T_=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.dueTime=n,o.scheduler=r,o.debouncedSubscription=null,o.lastValue=null,o.hasValue=!1,o}return e_(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(P_,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(f_);function P_(e){e.debouncedNext()}function A_(){const[e,n]=(0,t.useState)(!1),r=wv(),{awaiting_loader:o}=d();(0,t.useEffect)((()=>{const e=()=>n(!1);return r.events.on(Tv,e),r.events.on(Sv,e),()=>{r.events.off(Tv,e),r.events.off(Sv,e)}}),[n,r.pipelines.$readableSequence,r.events]),(0,t.useEffect)((()=>{const e=new x_,t=r.pipelines.$readableSequence.pipe((o=2e3,void 0===i&&(i=C_),function(e){return e.lift(new O_(o,i))})).subscribe((()=>e.next(!0)));var o,i;const a=e.subscribe((()=>n(!0)));return()=>{t.unsubscribe(),a.unsubscribe(),n(!1)}}),[n,r.pipelines.$readableSequence]);const{messagesWrapper:i}=by(),a=i.getLastMessage(),s=jg();return o&&e&&!s&&!a.isEmpty()&&!a.hasInput&&!a.isFinishBot&&!a.isActionUnassign}var I_=uo.div`
  ${Xw} {
    left: 1em;
  }
`;const N_=uo.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${zg} {
    margin: 0 auto;
    max-width: ${e=>e.theme.messages_max_width};
  }
`,D_=uo.div`
  display: flex;
  width: 100%;
  margin-bottom: 6px;

  &.is-end {
    margin-bottom: 10px;
  }

  @media ${zg} {
    padding-right: 10px;
  }

  &.is-medium-width {
    width: 100%;

    .msg-grid-row {
      width: 100%;
    }

    .msg-grid-center {
      width: 410px;
    }
  }

  &.is-reverse {
    justify-content: flex-end;
    padding-right: 0;

    .msg-grid-left {
      display: none;
      margin-left: 1rem;
      margin-right: 0;
    }
  }
  &.Message__message-failed-text,
  &.Message__message-failed-retry-link {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,M_=uo.article`
  display: inline-flex;
  position: relative;
  align-items: flex-end;
  max-width: 100%;

  &.is-full-width-content {
    @media ${Wg} {
      display: block;
    }
    flex-grow: 1;
    .msg-grid-center {
      flex-grow: 1;
    }
  }
`,j_=uo.div`
  margin-right: ${e=>Vg(e.theme.initial_vars.horizontal_unit)};
  text-align: center;
  position: relative;
  &.is-invisible {
    visibility: hidden;
  }

  @media ${zg} {
    margin-right: ${e=>e.theme.message_left_margin_right};
    &.has-fixed-width {
      width: ${e=>e.theme.msg_grid_left_fixed_width};
    }
  }
`,R_=uo.div`
  position: relative;
  min-width: 0;
`,L_=uo.div`
  align-self: center;
`,F_=uo.div`
  position: relative;
  width: 100%;
  margin-top: ${e=>Vg(e.theme.initial_vars.vertical_unit,10)};
  margin-bottom: ${e=>Vg(e.theme.initial_vars.vertical_unit,1.5)};

  @media ${zg} {
    margin-top: ${e=>Vg(e.theme.initial_vars.vertical_unit,4.75)};
    margin-bottom: ${e=>Vg(e.theme.initial_vars.vertical_unit,1.5)};
  }
`,B_=(e,t)=>{const[n,...r]=e;return _o()([n,t,...r])},z_=({className:e,classNames:n,containerRef:r,children:o})=>t.createElement(N_,{className:B_([...n,e],"msg-grid-container"),ref:r},o);z_.propTypes={classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),className:o().string,children:o().node,containerRef:o().object},z_.defaultProps={classNames:[],className:"",children:null,containerRef:null};const U_=({containerClassNames:e,classNames:n,id:r,author:o,type:i,block:a,inputType:s,children:l})=>t.createElement(D_,{id:r,className:B_(e,"msg-grid-row-container"),"data-author":o,"data-type":i,"data-block":a,"data-input":s},t.createElement(M_,{className:B_(n,"msg-grid-row")},l));U_.propTypes={containerClassNames:o().arrayOf(o().oneOfType([o().string,o().bool])),classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),id:o().string,author:o().string,type:o().string,block:o().string,inputType:o().string,children:o().node},U_.defaultProps={containerClassNames:[],classNames:[],id:null,author:null,type:null,block:null,inputType:null,children:null};const W_=({classNames:e,children:n})=>t.createElement(j_,{className:B_(e,"msg-grid-left")},n);W_.propTypes={classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),children:o().node},W_.defaultProps={classNames:[],children:null};const H_=({classNames:e,children:n})=>t.createElement(R_,{className:B_(e,"msg-grid-center")},n);H_.propTypes={classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),children:o().node},H_.defaultProps={classNames:[],children:null};const V_=({classNames:e,children:n})=>t.createElement(L_,{className:B_(e,"msg-grid-right")},n);V_.propTypes={classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),children:o().node},V_.defaultProps={classNames:[],children:null};const q_=({classNames:e,children:n})=>t.createElement(F_,{className:B_([...e],"msg-grid-fullwidth-row")},n);q_.propTypes={classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),children:o().node},q_.defaultProps={classNames:[],children:null};const Y_=({children:e,hasLeftColumn:n})=>t.createElement(U_,null,n&&t.createElement(W_,{classNames:["has-fixed-width","is-hidden-mobile"]}),t.createElement(H_,null,e));function Q_(){const{design:{avatar_enabled:e}}=d();return A_()&&t.createElement(z_,{className:"is-autoscroll-mutation-target"},t.createElement(Y_,{hasLeftColumn:e},t.createElement(I_,{className:"AwaitLoaderContainer"},t.createElement(Jw,null))))}Y_.propTypes={children:o().node,hasLeftColumn:o().bool},Y_.defaultProps={children:null,hasLeftColumn:!0};const G_="90px",K_="150px",X_="150px",Z_="180px",J_=uo.div`
  width: 100%;

  @media ${Wg} {
    height: ${e=>e.hasInputFixed?X_:G_};
  }

  @media ${zg} {
    height: ${e=>e.hasInputFixed?Z_:K_};
  }
`;function $_({hasInputFixed:e,spacerRef:n}){return t.createElement(J_,{hasInputFixed:e,className:"Chat__spacer",ref:n})}function ex({children:e}){return t.createElement(z_,{classNames:["Messages","is-autoscroll-mutation-target"]},e)}$_.propTypes={hasInputFixed:o().bool,spacerRef:o().object},$_.defaultProps={hasInputFixed:!1,spacerRef:null},ex.propTypes={children:o().node},ex.defaultProps={children:null};const tx=uo.span`
  margin-left: 34px;
`,nx=uo.span`
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  font-size: 23px;
  margin-left: -1px;
  position: absolute;
  margin-top: -4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
`,rx=uo.hr`
  background: transparent;
  ${e=>Br`
      margin: 0 auto ${Vg(e.theme.initial_vars.vertical_unit,3)};
    `}

  border-top: 1px dashed rgba(0, 0, 0, 0.16);
`,ox=({className:e,children:n})=>t.createElement(q_,{classNames:["htomessage",e]},n);ox.propTypes={children:o().node,className:o().string},ox.defaultProps={children:null,className:null};const ix=uo(ox)`
  .MessageBubble {
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  }
`,ax=({agentName:e})=>{const{text:n}=d(),r=n.hto_assignation_message.includes("@agent"),o=n.hto_assignation_message.split("@agent");return t.createElement(tx,null,o[0],r&&t.createElement(t.Fragment,null,t.createElement("b",{className:"htomessage__AgentName"},e)," ",o[1]))};function sx({action:e,agents:n,agent_id:r}){const o="assign"===e,i={name:oe()(n,`[${r}].name`,"")};return t.createElement(ix,null,t.createElement(rx,{className:"htomessage__lineseparator u-fullwidth-avoiding-container"}),o?t.createElement(Rh,{shape:tn.SQUARED},t.createElement(nx,{"aria-label":"wave",className:"htomessage__notificationIcon",role:"img"},t.createElement(ff,null))," ",t.createElement(ax,{agentName:i.name})):null)}function lx({message:e}){const n=Ag(),{action:r,agent_id:o}=e;return t.createElement(sx,{agents:n,action:r,agent_id:o})}function cx(){const{animate_buttons:e,animate_messages:t,animate_on_mobile:n}=d(),r=n||!E.isMobile;return{has_buttons_animation_on:r&&e,has_messages_animation_on:r&&t}}ax.propTypes={agentName:o().string},ax.defaultProps={agentName:""},sx.propTypes={action:o().string,agent_id:o().number,agents:o().object},sx.defaultProps={action:"assign",agent_id:null,agents:{}},lx.propTypes={message:o().object},lx.defaultProps={message:{}};var ux=function(){function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e}();function dx(e,t){return function(n){return n.lift(new fx(e,t))}}var fx=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new px(e,this.predicate,this.thisArg))},e}(),px=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.predicate=n,o.thisArg=r,o.count=0,o}return e_(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(f_),hx=function(){function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e}(),mx=new g_((function(e){return e.complete()}));function bx(e){return e?function(e){return new g_((function(t){return e.schedule((function(){return t.complete()}))}))}(e):mx}function gx(e){return function(t){return 0===e?bx():t.lift(new vx(e))}}var vx=function(){function e(e){if(this.total=e,this.total<0)throw new hx}return e.prototype.call=function(e,t){return t.subscribe(new yx(e,this.total))},e}(),yx=function(e){function t(t,n){var r=e.call(this,t)||this;return r.total=n,r.count=0,r}return e_(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(f_);function wx(e){return void 0===e&&(e=null),function(t){return t.lift(new _x(e))}}var _x=function(){function e(e){this.defaultValue=e}return e.prototype.call=function(e,t){return t.subscribe(new xx(e,this.defaultValue))},e}(),xx=function(e){function t(t,n){var r=e.call(this,t)||this;return r.defaultValue=n,r.isEmpty=!0,r}return e_(t,e),t.prototype._next=function(e){this.isEmpty=!1,this.destination.next(e)},t.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},t}(f_);function kx(e){return void 0===e&&(e=Cx),function(t){return t.lift(new Ex(e))}}var Ex=function(){function e(e){this.errorFactory=e}return e.prototype.call=function(e,t){return t.subscribe(new Sx(e,this.errorFactory))},e}(),Sx=function(e){function t(t,n){var r=e.call(this,t)||this;return r.errorFactory=n,r.hasValue=!1,r}return e_(t,e),t.prototype._next=function(e){this.hasValue=!0,this.destination.next(e)},t.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var e=void 0;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)},t}(f_);function Cx(){return new ux}function Ox(e){return e&&"function"==typeof e.schedule}var Tx;function Px(e,t){return new g_((function(n){var r=new c_,o=0;return r.add(t.schedule((function(){o!==e.length?(n.next(e[o++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function Ax(e,t){return t?Px(e,t):new g_((n=e,function(e){for(var t=0,r=n.length;t<r&&!e.closed;t++)e.next(n[t]);e.complete()}));var n}function Ix(e){var t=e.error;e.subscriber.error(t)}Tx||(Tx={});var Nx=function(){function e(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}},e.prototype.accept=function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[e.length-1];return Ox(n)?(e.pop(),Px(e,n)):Ax(e)}(this.value);case"E":return e=this.error,new g_(t?function(n){return t.schedule(Ix,0,{error:e,subscriber:n})}:function(t){return t.error(e)});case"C":return bx()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function Dx(e,t){void 0===t&&(t=C_);var n,r=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return function(e){return e.lift(new Mx(r,t))}}var Mx=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new jx(e,this.delay,this.scheduler))},e}(),jx=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.delay=n,o.scheduler=r,o.queue=[],o.active=!1,o.errored=!1,o}return e_(t,e),t.dispatch=function(e){for(var t=e.source,n=t.queue,r=e.scheduler,o=e.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(o);if(n.length>0){var i=Math.max(0,n[0].time-r.now());this.schedule(e,i)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,n=new Rx(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification(Nx.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification(Nx.createComplete()),this.unsubscribe()},t}(f_),Rx=function(){return function(e,t){this.time=e,this.notification=t}}();function Lx(e,n){const r=wv(),[o,i]=(0,t.useState)(e);return(0,t.useEffect)((()=>{let e;return n&&(e=r.pipelines.$typingSequence.pipe(function(e,t){var n=arguments.length>=2;return function(r){return r.pipe(e?dx((function(t,n){return e(t,n,r)})):m_,gx(1),n?wx(t):kx((function(){return new ux})))}}((e=>Boolean(e)&&!1===e.state)),Dx(1e3)).subscribe((()=>i(!1)))),()=>{e&&e.unsubscribe()}}),[r.pipelines.$typingSequence,n]),o}function Fx({children:e,classNames:n,message:r,showBubble:o,showText:i}){const{design:{message_shape:a}}=d();return o?t.createElement(Rh,{author:r.author,classNames:n,isReverse:r.isAuthorUser,shape:a},i&&r.messageText&&t.createElement(Vh,{allowHTMLContent:r.messageTextIsHTML||!r.isAuthorUser,text:r.messageText}),e):e}Fx.propTypes={children:o().node,classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),message:o().object,showBubble:o().bool,showText:o().bool},Fx.defaultProps={children:null,classNames:["is-autoscroll-mutation-target"],message:{},showBubble:!0,showText:!1};function Bx({message:e,openModal:n}){return t.createElement(Fx,{message:e},t.createElement("div",{style:{width:e.url?300:null,maxWidth:"100%"}},e.url&&t.createElement(lv,{figureStyle:{backgroundColor:"black",width:300,marginBottom:e.messageText?"1rem":null,maxWidth:"100%"},openModal:n,ratio:"16x9",src:e.url}),e.messageText&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.messageText}})))}Bx.propTypes={message:o().object,openModal:o().bool},Bx.defaultProps={message:{},openModal:!0};const zx="26px",Ux=(e,t=!1)=>{const n=Vg(e.theme.initial_vars.horizontal_unit,1.5),r=qg(e.theme.initial_vars.horizontal_unit,4);return t?Br`
      border-radius: ${n} ${n}
        ${r} ${n};
    `:Br`
      border-radius: ${n} ${n}
        ${n} ${r};
    `},Wx=uo.div`
  display: flex;
  overflow: visible;
  ${e=>Ux(e)}

  ${e=>Br`
      padding: ${Vg(e.theme.initial_vars.vertical_unit,2)} ${Vg(e.theme.initial_vars.horizontal_unit,3)};
    `}

  max-width: 100%;
  background-color: ${({theme:e})=>e.design.message_background_color_bot};
  color: ${({theme:e})=>e.design.message_color_bot};

  &.is-author-user {
    background-color: ${({theme:e})=>e.design.message_background_color_user};
    color: ${({theme:e})=>e.design.message_color_user};
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: ${zx};
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: ${"4px"};
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: ${({theme:e})=>e.design.message_background_color_bot};
  }

  &.is-reverse {
    ${e=>Ux(e,!0)}

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: ${({theme:e})=>e.design.message_background_color_user};
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }
`;function Hx({classNames:e,shape:n,isReverse:r,author:o,children:i}){return t.createElement(Wx,{className:_o()(["MessageBubble",r&&"is-reverse",`is-shape-${n}`,`is-author-${o}`,...e])},n===tn.ROUNDED&&t.createElement(_f,null),t.createElement("div",{className:"MessageBubble__content"},i))}Hx.propTypes={shape:o().string,classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),isReverse:o().bool,author:o().string,children:o().node},Hx.defaultProps={shape:tn.SEMI,classNames:[],isReverse:!1,author:"",children:null};const Vx=uo(Wx)`
  padding: 0;
  box-shadow: none;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Safari Video Fix */
  &--isSafari .Media {
    object-fit: initial !important;
    border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
    border: 4px transparent solid;
  }
`;function qx({classNames:e,shape:n,isReverse:r,isSafari:o,children:i}){return t.createElement(Vx,{className:_o()(["MessageMediaBubble",r&&"is-reverse",`is-shape-${n}`,o&&"MessageMediaBubble--isSafari",...e])},i)}function Yx({message:e,classNames:n,children:r}){const{isSafari:o}=E,{design:{message_shape:i}}=d();return t.createElement(qx,{shape:i,classNames:n,isReverse:e.isAuthorUser,isSafari:o},r)}qx.propTypes={shape:o().string,classNames:o().arrayOf(o().oneOfType([o().string,o().bool])),isReverse:o().bool,isSafari:o().bool,children:o().node},qx.defaultProps={shape:tn.SEMI,classNames:[],isReverse:!1,isSafari:!1,children:null},Yx.propTypes={message:o().object,classNames:o().arrayOf(o().string),children:o().node},Yx.defaultProps={message:{},classNames:["is-autoscroll-mutation-target"],children:null};const Qx=uo.a`
  justify-content: flex-start;

  &.is-shape-rounded,
  &.is-shape-transparent {
    border-radius: ${zx};
  }
`;function Gx({url:e}){const{setIsOpen:n,setSrc:r}=rv(),{design:{message_shape:o},text:i}=d(),a=fe.isSupportedDocumentType(e);return t.createElement("p",{className:"content is-marginless"},t.createElement(Qx,{className:_o()(["button",`is-shape-${o}`]),href:e||null,onClick:a&&!E.isIos?t=>{t.preventDefault(),r(e),n(!0)}:void 0,rel:"noopener noreferrer",target:"_blank"},t.createElement("span",{className:"icon pt-1 pl-1"},t.createElement(wf,{fill:"currentColor",fillRule:null,height:"24",viewBox:"0 0 24 24",width:"24"})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},i.open_file)))}Gx.propTypes={url:o().string},Gx.defaultProps={url:""};const Kx=uo.video`
  max-height: 400px;
`;function Xx({url:e}){return t.createElement(Kx,{controls:!0},t.createElement("source",{src:e,type:"video/mp4"}),t.createElement("source",{src:e,type:"video/ogg"}),t.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}function Zx({url:e}){return t.createElement("audio",{controls:!0},t.createElement("source",{src:e,type:"audio/ogg"}),t.createElement("source",{src:e,type:"audio/mpeg"}),t.createElement("source",{src:e,type:"audio/wav"}),"Your browser does not support the audio element.")}function Jx({message:e}){const n=fe.isSupportedVideoType(e.url),r=fe.isSupportedAudioType(e.url);return t.createElement(t.Fragment,null,n&&t.createElement(Yx,{message:e},t.createElement(Xx,{url:e.url})),r&&t.createElement(Zx,{url:e.url}),!n&&!r&&t.createElement(Fx,{message:e},t.createElement(Gx,{url:e.url})))}Xx.propTypes={url:o().string},Xx.defaultProps={url:""},Zx.propTypes={url:o().string},Zx.defaultProps={url:""},Jx.propTypes={message:o().object},Jx.defaultProps={message:{}};const $x=uo.iframe`
  border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;$x.displayName="IframeStyled";function ek(e){const[n,r]=(0,t.useState)(!1);return t.createElement("figure",{className:_o()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[sv(e.ratio)]:!!e.ratio,[e.figureClassName]:!!e.figureClassName}),style:e.figureStyle},t.createElement($x,{allowFullScreen:!0,className:_o()({[e.className]:!!e.className,"is-rounded":e.rounded,"is-contain":e.contain,"has-loaded":n,"is-overlay":!0}),frameBorder:"0",onLoad:()=>r(!0),src:e.src,style:e.style,title:"lb-iframe",type:"text/html"}))}function tk({message:e}){return t.createElement(Yx,{message:e},t.createElement(ek,{src:e.getVideoUrl()}))}ek.propTypes={className:o().string,contain:o().bool,figureClassName:o().string,figureStyle:o().object,ratio:o().string,rounded:o().bool,size:o().number,src:o().string.isRequired,style:o().object},ek.defaultProps={className:"",contain:!1,figureClassName:"",figureStyle:{backgroundColor:"black",width:640,maxWidth:"100%"},ratio:"16x9",rounded:!1,size:null,style:{}},tk.propTypes={message:o().object},tk.defaultProps={message:{}};function nk({message:e}){const n=`https://maps.googleapis.com/maps/api/staticmap?center=${e.latitude},${e.longitude}&size=600x300&zoom=15&markers=color:red%7C${e.latitude},${e.longitude}&key=AIzaSyCjznqz7l3S1OQcQNJDPkG2e8-LWgVFukc`,r=`https://www.google.com/maps/search/?api=1&query=${e.latitude},${e.longitude}`;return t.createElement(Fx,{message:e},t.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t.createElement(lv,{figureStyle:{width:300,marginBottom:e.message?"1rem":null,maxWidth:"100%"},ratio:"16x9",src:n,style:{backgroundColor:"gray",borderRadius:4}})))}nk.propTypes={message:o().object},nk.defaultProps={message:{}};const rk=uo(lv)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>Vg(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>Vg(e.theme.initial_vars.vertical_unit,25)};

    @media ${zg} {
      max-width: ${e=>Vg(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>Vg(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function ok({url:e,openModal:n}){return t.createElement(rk,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:n,src:e})}function ik({message:e,openModal:n}){return t.createElement(Yx,{message:e},e.url&&t.createElement(ok,{openModal:n,url:e.url}))}function ak({message:e}){const n=fe.isSupportedImageType(e.url);return"image"===e.media_type?n?t.createElement(ik,{message:e}):t.createElement(Jx,{message:e}):"iframe"===e.media_type?t.createElement(tk,{message:e}):null}ok.propTypes={url:o().string,openModal:o().bool},ok.defaultProps={url:"",openModal:!0},ik.propTypes={message:o().object,openModal:o().bool},ik.defaultProps={message:{},openModal:!0},ak.propTypes={message:o().object},ak.defaultProps={message:{}};function sk({message:e}){return t.createElement(Fx,{message:e},t.createElement("div",{style:{width:300,maxWidth:"100%"}},e.urls.filter(Boolean).map(((e,n,r)=>t.createElement(lv,{figureStyle:{width:300,marginBottom:n!==r.length-1?3:null,maxWidth:"100%"},openModal:!0,ratio:"16x9",src:e,style:{backgroundColor:"gray",borderRadius:4}})))))}function lk({message:e}){return t.createElement(Fx,{message:e,showText:!0})}function ck(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function uk(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ck(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ck(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}sk.propTypes={message:o().object},sk.defaultProps={message:{}},lk.propTypes={message:o().object},lk.defaultProps={message:{}};const dk=(e,t)=>e.replace(/\{timeout\}/i,t);function fk({message:e}){const n=wv(),{url:r,evaluate:o}=e,i=oe()(e,"extra.redirect.timeout",3),a={message:e.messageText,timeout:i,redirectionURL:ae.Z.getHref(r)},{startRedirect:s,stopRedirect:l,timeMessage:c}=function({message:e,timeout:n,redirectionURL:r}){const[o,i]=(0,t.useState)(n),[a,s]=(0,t.useState)(!1),[l,c]=(0,t.useState)(dk(e,o)),u=(0,t.useCallback)((()=>{s(!1)}),[]),d=(0,t.useCallback)((()=>{i(n),s(!0)}),[n]);return(0,t.useEffect)((()=>{a&&o>0&&setTimeout((()=>{i((e=>e-1))}),1e3)}),[a,o]),(0,t.useEffect)((()=>{0===o&&(u(),window.location.href=r),c(dk(e,o))}),[o,r,e,u,d]),{startRedirect:d,stopRedirect:u,timeMessage:l}}(a);return(0,t.useEffect)((()=>{o&&(s(),n.events.once(Tv,l))}),[o,n.events,s,l]),t.createElement(lk,{message:uk(uk({},e),{},{messageText:c})})}fk.propTypes={message:o().object},fk.defaultProps={message:{}};const pk={facebook:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"}))),twitter:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}))),linkedin:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"}))),whatsapp:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"})))},hk={facebook:"#3b5998",twitter:"#1da1f2",linkedin:"#2E77B0",whatsapp:"#0DC143"},mk=({className:e,href:n,type:r,label:o})=>t.createElement("a",{className:_o()({button:!0,"social-button":!0,[e]:!!e}),href:n,style:{backgroundColor:hk[r],color:"white"},target:"_blank",rel:"noopener noreferrer"},pk[r],t.createElement("span",{className:"social-button-label "},o));mk.propTypes={className:o().string,href:o().string,type:o().string,label:o().string},mk.defaultProps={className:"",href:"",type:"",label:""};const bk=uo(mk)`
  display: inline-flex;
  padding: 8px 10px;
  font-size: 0.75rem;

  .social-button-label {
    padding-top: 2px;
  }
`;function gk({message:e}){const n=ae.Z.getReferralUrl(ae.Z.getHref(oe()(e.raw,"extra.socialUrl")),e.description),r=t.createElement("p",{className:"buttons"},t.createElement(bk,{type:"facebook",href:n.facebook,label:"Facebook"}),t.createElement(bk,{type:"twitter",href:n.twitter,label:"Twitter"}),t.createElement(bk,{type:"linkedin",href:n.linkedin,label:"LinkedIN"}),t.createElement(bk,{type:"whatsapp",href:n.whatsapp,label:"Whatsapp"}));return t.createElement(t.Fragment,null,e.messageText&&(e.rich_text?t.createElement("p",{className:"content is-marginless",style:{marginBottom:10},dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("p",{style:{marginBottom:10}},e.title||e.message)),r)}function vk({message:e}){return t.createElement(Fx,{message:e},t.createElement(gk,{message:e}))}function yk({message:e}){const{text:n}=d();return t.createElement(Fx,{message:e},t.createElement("div",null,e.rich_text&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}),!e.rich_text&&t.createElement("p",null,e.title||e.message),t.createElement(Pf,{name:"email",placeholder:ie.getFieldPlaceholder({message:e.message,text:n}),type:"email"})))}gk.propTypes={message:o().object},gk.defaultProps={message:{}},vk.propTypes={message:o().object},vk.defaultProps={message:{}},yk.propTypes={message:o().object},yk.defaultProps={message:{}};const wk=t.createContext({isSubmitted:!1,setIsSubmitted:()=>{}}),{Provider:_k}=wk,xk=()=>(0,t.useContext)(wk);function kk({bubbleClassName:e,children:n,className:r,hasAutofocus:o,hasNoBorder:i,hasSearchButton:a,helpText:s,message:l,onSubmit:c,prefix:u,renderAs:f,sendButtonType:p,selectedValue:h,showBubble:m,submitOnEnter:b,validate:g}){const v=h||l.default,y=(0,t.useMemo)((()=>v),[]),{error:w,setValue:_,value:x}=function({messageError:e="",originalValue:n="",selectedValue:r="",validate:o}){const[i,a]=(0,t.useState)(""),[s,l]=(0,t.useState)("");return(0,t.useEffect)((()=>{l(e&&n===i?e:o&&n!==i?o(i):"")}),[e,n,o,i]),(0,t.useEffect)((()=>{a(r)}),[r]),{error:s,setValue:a,value:i}}({messageError:null==l?void 0:l.error,originalValue:y,selectedValue:v,validate:l.isInsideForm?null:g}),{text:k}=d(),[E,S]=(0,t.useState)(!1),{has_messages_animation_on:C}=cx(),O=(0,t.useCallback)((()=>{""===w&&c({type:"text",message:x})}),[w,x,c]);(0,t.useEffect)((()=>(E&&O(),()=>{S(!1)})),[E,O]);const T={name:l.name,onChange:e=>_(e),onSubmit:O,value:x,hasAutofocus:o,hasNoBorder:!1,required:!!l.required&&!l.isInsideForm};b&&(T.onKeyDown=e=>{13===(e.keyCode||e.which)&&(e.preventDefault(),x&&setTimeout((()=>{S(!0)})))});const P=l.markRequired&&l.required&&l.label?"*":"";t.isValidElement(n)&&!n.props.placeholder&&(T.placeholder=l&&l.getPlaceholder(k),l.markRequired&&l.required&&!P&&T.placeholder&&(T.placeholder+="*"));const A=l.help||(null!==s||l.isInsideForm?s:k.input_text_help),I=l.markRequired&&l.required&&!P&&!T.placeholder&&A?"*":"";return t.createElement(Fx,{className:e,message:l,showBubble:m&&!l.isInsideForm,showText:!0},t.createElement(Th,{className:r,error:w,hasNoBorder:i,hasSearchButton:a,help:A&&`${A}${I}`,isAnimateMessagesOn:C,isMinimalMobile:!l.isInsideForm,isRequired:l.required,label:l.label&&`${l.label}${P}`,onSubmit:O,prefix:u,renderAs:f,sendButtonType:p,sendLabel:k.send,value:x},t.cloneElement(n,T)))}kk.propTypes={bubbleClassName:o().string,children:o().node.isRequired,className:o().string,hasAutofocus:o().bool,hasNoBorder:o().bool,hasSearchButton:o().bool,helpText:o().string,label:o().string,message:o().object,onSubmit:o().func,prefix:o().string,renderAs:o().any,selectedValue:o().string,sendButtonType:o().string,showBubble:o().bool,submitOnEnter:o().bool,validate:o().func},kk.defaultProps={bubbleClassName:"",className:"",label:null,hasNoBorder:!1,hasAutofocus:!0,hasSearchButton:!1,helpText:null,prefix:null,message:null,onSubmit:()=>{},submitOnEnter:!0,selectedValue:"",sendButtonType:"inline",showBubble:!0,renderAs:null,validate:null};const Ek=({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:r})=>({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:t.isInsideForm?null:r,hasAutofocus:t.isInsideForm?t.isFirstInput:void 0});function Sk(e){const{message:n,onSubmit:r}=e,{text:o}=d(),i=h(),a=n.getAutocompleteOptions(),s=(0,t.useRef)(null);return t.createElement(kk,Zg({className:"InputAutocomplete",renderAs:qf},Ek(e),{hasAutofocus:!1,hasSearchButton:!0,onSubmit:({message:e})=>{const t=n.mustMatchSuggestion?null:e,o=ie.getPayloadFromOptions(e,a,t);null!==o&&r({type:"button",message:e,payload:o})},showBubble:!1}),t.createElement(dp,{autocompleteRef:s,autoHighlight:n.mustMatchSuggestion,help:o.input_autocomplete_help,isInsideForm:n.isInsideForm,noResultsText:o.no_results_found,onMenuVisibilityChange:e=>{s.current&&ae.Z.getElementOffset(s.current).top<350&&i&&i.setConfig({header_hidden:e})},options:a,placeholder:n.isInsideForm?n.getPlaceholder():n.getPlaceholder()||o.autocomplete_input_placeholder}))}Sk.propTypes={message:o().object,onSubmit:o().func},Sk.defaultProps={message:null,onSubmit:()=>{}};const Ck=({children:e})=>t.createElement("span",{className:"icon is-marginless is-size-1"},e);Ck.propTypes={children:o().string},Ck.defaultProps={children:""};const Ok=({icon:e,isBig:n})=>t.createElement("span",{className:_o()({"icon fi is-marginless":!0,[e]:!0,"is-size-3":n})});Ok.propTypes={icon:o().string,isBig:o().bool},Ok.defaultProps={icon:"",isBig:!1};function Tk({data:e,className:n,onClick:r,isAnimated:o,isDirectionColumn:i,isDisabled:a}){const{label:s}=e,l=e.href&&ae.Z.getHref(e.href),[c,u]=(0,t.useState)(!1),d=oe()(e,"attachment.type"),f=oe()(e,"attachment.value"),p="icon"===d,h="image"===d,m="emoji"===d,b=!!l;return(0,t.useEffect)((()=>{c&&setTimeout((()=>u(!1)),200)}),[c]),t.createElement(Io,{className:_o()({"input-button":!0,[n]:!!n,"u-white-space-normal":!0,"is-image-button":h,"is-icon-button":p,"is-emoji-button":m,"is-flex-direction-column":i,"u-fullwidth":!i,"is-animated":o}),href:l,isAnchor:b,isDisabled:c||a,onClick:t=>{r(e),u(!0)}},p&&t.createElement(Ok,{icon:f,isBig:!0}),m&&t.createElement(Ck,null,f),h&&t.createElement(lv,{src:f}),t.createElement("span",{className:"input-button-label",dangerouslySetInnerHTML:{__html:`${ae.Z.bold(ae.Z.escapeHTML(s))} ${b?'<ButtonIcon icon="chains" />':""}`}}))}Tk.propTypes={data:o().object,className:o().string,onClick:o().func,isAnimated:o().bool,isDirectionColumn:o().bool,isDisabled:o().bool},Tk.defaultProps={data:{},className:"",onClick:()=>{},isAnimated:!1,isDirectionColumn:!1,isDisabled:!1};var Pk=(e=>uo(e)`
  width: calc(50% - 0.5rem);
  transition: box-shadow 0.1s linear;

  @media ${Ug} {
    width: calc(33% - 0.5rem);

    &.is-four-cols {
      span.icon {
        font-size: 2rem !important;
      }
      width: calc(25% - 0.5rem);
    }
  }

  &.is-image-button {
    overflow: hidden;
    padding: 0 0 14px 0;
    position: relative;

    .image {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      margin: 0;
    }

    .image .Media {
      transform: scale(1);
      transition: transform 0.2s;
    }

    &:hover .image .Media {
      transform: scale(1.1);
    }

    .input-button-label {
      display: flex;
      position: absolute;
      align-items: center;
    }
  }

  /* Button with image
     Layout horizontal, button content vertical */
  &.is-image-button:not(.is-flex-direction-column) {
    height: 65px;
    max-width: 400px;

    .image {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100%;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    .input-button-label {
      justify-content: flex-start;
      padding-left: 39px;
      top: 0;
      left: 100px;
      width: 100%;
      max-width: 300px;
      height: 100%;
    }
  }

  /* Button with image
     Layout vertical, button content horizontal */
  &.is-image-button.is-flex-direction-column {
    height: 160px;

    .image {
      width: 100%;
      height: 100px;
      border-top-right-radius: $radius;
    }

    .input-button-label {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      justify-content: center;
    }
  }

  /* Button with icon/emoji
     Layout horizontal, button content vertical */
  &.is-icon-button:not(.is-flex-direction-column),
  &.is-emoji-button:not(.is-flex-direction-column) {
    height: 84px;

    .icon {
      padding: 0 52px 0 37px;
    }

    .input-button-label {
      text-align: left;
    }
  }

  .input-button-label {
    width: 100%;

    .chains {
      margin-left: $horizontal-unit;
    }
  }
`)(Tk);const Ak=uo.p`
  margin-bottom: ${({theme:{initial_vars:{vertical_unit:{qty:e,unit:t}}}})=>String(1.5*e)+t};
  color: ${({theme:e})=>e.design.form_help_color};
`;function Ik({children:e}){return t.createElement(Ak,{className:"input-small-header is-size-7 is-uppercase is-unselectable"},e)}Ik.propTypes={children:o().node.isRequired};const Nk=t.forwardRef(((e,n)=>t.createElement($g,Zg({},e,{className:_o()({[e.className]:!!e.className,"input-buttons":!0}),ref:n}))));Nk.propTypes={className:o().string},Nk.defaultProps={className:""};var Dk=uo(Nk)`
  align-items: stretch;

  .input-button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .input-button.is-multiple {
    color: ${({theme:e})=>e.design.message_color_bot};
    background-color: ${({theme:e})=>"transparent"===e.design.message_shape?e.design.background_color:e.design.message_background_color_bot};
    border-color: transparent;

    &.is-selected {
      color: ${({theme:e})=>e.design.form_buttons_color};
      background-color: ${({theme:e})=>e.design.form_buttons_background_color};
      border-color: ${({theme:e})=>e.design.form_buttons_border_color};
      box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
        0 13px 17px -16px rgba(47, 49, 72, 0.3);
    }
  }

  &.has-vertical-scroll {
    max-height: 180px;
    overflow-y: auto;

    @media ${zg} {
      max-height: 300px;
    }
  }

  &.is-layout-vertical .input-button {
    max-width: 500px;
    margin: 0 0 3px 0;
  }
`;const Mk=uo.div`
  margin-top: ${e=>qg(e.theme.initial_vars.vertical_unit,4)};

  @media ${zg} {
    margin: ${e=>qg(e.theme.initial_vars.vertical_unit,4)}
      auto 0 0;
  }

  @media ${Wg} {
    .has-margin-left {
      margin-left: calc(${e=>e.theme.avatar.mobile_width} + ${e=>Vg(e.theme.initial_vars.horizontal_unit)})};
    }
  }

  /* Buttons with search input
     Input and input icon styles */
  .control.has-icons-right {
    .icon.is-right {
      right: 15px;
    }
  }

  .field .control input {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }

  .InputButtons .button svg path,
  .InputButtons .custom-button svg path,
  .InputButtons .input-button svg path {
    fill: ${({theme:e})=>e.design.form_buttons_color};
  }
`;function jk({help:e,buttons:n,alignment:r,buttonsRef:o,onSubmit:i,searchInput:a,isAnimated:s}){return t.createElement(Mk,{className:"InputButtons"},n.length>1&&t.createElement(Ik,null,e),a&&t.createElement("div",{className:"field has-addons"},a),t.createElement(Dk,{className:_o()({"is-layout-vertical":"vertical"===r,"has-vertical-scroll":!!a,"has-margin-left":"vertical"!==r&&1===n.length}),ref:o},n.map((e=>t.createElement(Pk,{key:e.payload,onClick:i,data:e,isAnimated:s,isDirectionColumn:"horizontal"===r,className:_o()({"is-four-cols":n.length>=4})})))))}function Rk(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Lk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fk(n){let{buttons:r,children:o,defaultResults:i}=n,a=Rk(n,["buttons","children","defaultResults"]);const s=(0,t.useRef)(null),[l,c]=(0,t.useState)(!1),{has_buttons_animation_on:u}=cx();return(0,t.useEffect)((()=>{if(!u||!r||!s.current||l)return()=>{};const e=Array.from(s.current.querySelectorAll(".is-animated"));return Iw({targets:e,translateY:[20,0],opacity:[0,1],delay:Iw.stagger(120,{from:"first"}),duration:300,easing:"easeInOutSine",complete(){c(!0)}}),()=>{Iw.remove(e)}}),[r,l,u]),t.cloneElement(o,function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Lk(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Lk(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({buttons:r,buttonsRef:s,isAnimated:r.length<9&&!l&&!1!==u},a))}function Bk({onSubmit:e,animateOnSubmit:n,message:r}){const o=t=>{e({type:"button",message:t.label,payload:t.payload})},{text:i}=d(),a=(0,t.useMemo)((()=>r.getButtons()),[r]);return t.createElement(Fk,{buttons:a},t.createElement(jk,{alignment:r.buttonsAlignment,onSubmit:e=>{n?(e=>{Iw({targets:[".InputInline .input-buttons .input-button"],translateY:[0,20],opacity:[1,0],duration:300,easing:"easeInOutSine",complete:()=>{o(e)}})})(e):o(e)},help:i.input_menu_help}))}jk.propTypes={alignment:o().oneOf(["horizontal","vertical"]),buttons:o().arrayOf(o().shape({label:o().string,payload:o().string,attachment:o().shape({type:o().string,value:o().string}),href:o().string})),help:o().string,buttonsRef:o().object,onSubmit:o().func,searchInput:o().node,isAnimated:o().bool},jk.defaultProps={alignment:"horizontal",buttons:[],help:"",buttonsRef:null,onSubmit:()=>{},searchInput:null,isAnimated:!1},Fk.propTypes={children:o().object.isRequired,buttons:o().arrayOf(o().shape({label:o().string,payload:o().string})),defaultResults:o().bool},Fk.defaultProps={buttons:[],defaultResults:!0},Bk.propTypes={message:o().object,onSubmit:o().func,animateOnSubmit:o().bool},Bk.defaultProps={message:null,onSubmit:()=>{},animateOnSubmit:!1};const zk=uo.div`
  ${e=>e.searchInput&&"\n  max-width: 100%;\n  "}

  .buttons-container-full-width {
    margin-bottom: 32px;

    .button,
    .input-button {
      padding: 20px;
      text-align: left;
      width: calc(50% - 0.5rem);
    }
  }
`;function Uk({searchInput:e,help:n,buttons:r,onChange:o,disabled:i,onSubmit:a,sendLabel:s,isAnimated:l,buttonsRef:c,alignment:u}){return t.createElement(zk,{className:_o()({InputButtonsMultiple:!e,InputButtonsMultiSearch:!!e}),searchInput:e},r.length>1&&t.createElement(Ik,null,n),e&&t.createElement("div",{className:"field has-addons "},e),r.length>0&&t.createElement(Dk,{className:_o()({"is-layout-vertical":"vertical"===u,"has-vertical-scroll":!!e}),ref:c},r.map((e=>t.createElement(Pk,{className:_o()({"is-multiple":!0,"is-selected":e.isSelected,"is-four-cols":r.length>=4}),data:e,isAnimated:l,isDirectionColumn:"horizontal"===u,isDisabled:e.isDisabled,key:e.payload,onClick:e=>o(e,!e.isSelected)})))),t.createElement("div",{className:"field is-marginless"},t.createElement(Xm,{disabled:i,onClick:a},s)))}function Wk({onChange:e,placeholder:n,value:r}){return t.createElement("div",{className:"control is-expanded has-icons-right"},t.createElement("input",{className:"input js-auto-focus",onChange:e,placeholder:n,type:"search",value:r}),t.createElement("div",{className:"icon is-right"},t.createElement(hf,null)))}function Hk({buttons:e,children:n}){const{text:r}=d(),[o,i]=(0,t.useState)(""),[a,s]=(0,t.useState)([]);(0,t.useEffect)((()=>{s(e.filter((e=>!o||(e.label.toLowerCase().indexOf(o.toLowerCase())>-1||e.isSelected))))}),[o,e]);const l={buttons:a,searchInput:t.createElement(Wk,{onChange:e=>i(e.target.value),placeholder:r.input_instant_search_help||"Filter the options",value:o})};return t.cloneElement(n,l)}function Vk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qk(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Vk(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Vk(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Yk({message:e,onSubmit:n,hasSearch:r}){const{text:o}=d(),i=(0,t.useMemo)((()=>e.getButtons()),[e]),[a,s,l]=(0,t.useMemo)((()=>{let t=1,n=i.length,r=o.input_multi_help;return e.buttonsMinOptions&&Number(e.buttonsMinOptions)<=n&&(t=Number(e.buttonsMinOptions)),e.buttonsMaxOptions&&Number(e.buttonsMaxOptions)>0&&(n=Number(e.buttonsMaxOptions)),r=o.input_multi_range_help.replace("@min_options",t).replace("@max_options",99===n?i.length:n),[t,n,r]}),[i,e,o]),[c,u]=(0,t.useState)([]),f=i.map((e=>{const t=ce()(c,e.payload);return qk(qk({},e),{},{isSelected:t,isDisabled:!t&&c.length===s})})),p=(e,t)=>{if(t&&c.length===s)return;const n=new Set(c);t?n.add(e.payload):n.delete(e.payload),u(Array.from(n))},h=()=>n({type:"structured_data",message:c.map((e=>f.find((t=>t.payload===e)))).map((e=>e.label)).join(", "),data:{items:c.map((e=>f.find((t=>t.payload===e)))).map((e=>e.label))}});return r?t.createElement(Hk,{buttons:f},t.createElement(Fk,null,t.createElement(Uk,{alignment:e.buttonsAlignment,disabled:c.length<a,help:l,onChange:p,onSubmit:h,sendLabel:o.send}))):t.createElement(Fk,{buttons:f},t.createElement(Uk,{alignment:e.buttonsAlignment,disabled:c.length<a,help:l,onChange:p,onSubmit:h,sendLabel:o.send}))}function Qk({message:e,onSubmit:n}){const{text:r}=d(),o=(0,t.useMemo)((()=>e.getButtons()),[e]);return t.createElement(Hk,{buttons:o},t.createElement(Fk,null,t.createElement(jk,{alignment:e.buttonsAlignment,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help})))}function Gk({message:e,onSubmit:n}){return t.createElement(Yk,{message:e,onSubmit:n,hasSearch:!0})}Uk.propTypes={alignment:o().oneOf(["horizontal","vertical"]),buttons:o().arrayOf(o().shape({label:o().string,payload:o().string})),disabled:o().bool,help:o().string,onChange:o().func,onSubmit:o().func,sendLabel:o().string,searchInput:o().node,isAnimated:o().bool,buttonsRef:o().object},Uk.defaultProps={alignment:"horizontal",buttons:[],disabled:!1,help:"",onChange:()=>{},onSubmit:()=>{},sendLabel:"Send",searchInput:null,isAnimated:!1,buttonsRef:null},Wk.propTypes={onChange:o().func,placeholder:o().string,value:o().string},Wk.defaultProps={onChange:()=>{},placeholder:"",value:""},Hk.propTypes={children:o().object.isRequired,buttons:o().arrayOf(o().shape({label:o().string,payload:o().string}))},Hk.defaultProps={buttons:[]},Yk.propTypes={message:o().object,onSubmit:o().func,hasSearch:o().bool},Yk.defaultProps={message:null,onSubmit:()=>{},hasSearch:!1},Qk.propTypes={message:o().object,onSubmit:o().func},Qk.defaultProps={message:null,onSubmit:()=>{}},Gk.propTypes={message:o().object,onSubmit:o().func},Gk.defaultProps={message:o().object,onSubmit:()=>{}};var Kk=__webpack_require__(6066);const Xk=e=>t.createElement("button",{className:_o()(["button InputCards__Arrow",e.isPrev?"InputCards__ArrowPrev":"InputCards__ArrowNext"]),"data-label":e.isPrev?"":e.nextText,onClick:e.onClick,type:"button"},t.createElement("span",{className:"icon"},t.createElement(yf,null)));Xk.propTypes={onClick:o().func,isPrev:o().bool,nextText:o().string},Xk.defaultProps={onClick:()=>{},isPrev:!1,nextText:"Next"};var Zk=Xk;var Jk=uo.div`
  .InputCards__Slider {
    max-width: 100%;
  }

  .slick-slide {
    transform-origin: left;
    width: ${e=>e.theme.input_cards.card_width};
  }

  .InputCards__Arrow {
    position: absolute;
    top: calc(
      (${e=>e.theme.input_cards.card_height} / 2) -
        (${e=>e.theme.input_cards.button_size} / 2)
    );
    z-index: 1;
    border-radius: calc(var(--border_radius) * 0.1rem);
  }

  .InputCards__ArrowPrev {
    left: calc(
      50% -
        (
          (${e=>e.theme.input_cards.card_width} / 2) +
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );
    @media ${zg} {
      left: calc(-1 * (${e=>e.theme.input_cards.button_size} / 2));
    }
  }

  .InputCards__ArrowNext {
    left: calc(
      50% +
        (
          (${e=>e.theme.input_cards.card_width} / 2) -
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );

    @media ${zg} {
      right: initial;
      left: calc(
        (${e=>e.theme.input_cards.card_width}) -
          (${e=>e.theme.input_cards.button_size})
      );
    }

    svg {
      transform: rotate(180deg);
    }
  }

  .InputCards__ArrowNext::before {
    display: none;
    content: attr(data-label);
    margin-right: 26px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

    @media ${zg} {
      display: inherit;
    }
  }

  a.InputCards__Slide:not(.button):not(.tag):not(.dropdown-item) {
    text-decoration: none;
  }

  .InputCards__Slide .card {
    display: flex;
    justify-content: left;
    position: relative;
    background-color: initial;
    box-shadow: none;
    height: 100%;
    margin: 0 auto;
    max-width: ${e=>e.theme.input_cards.card_width};
  }

  .card .button,
  .card .custom-button,
  .card .input-button {
    @media ${zg} {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  .slick-current .card:hover .button,
  .slick-current .card:hover .custom-button,
  .slick-current .card:hover .input-button {
    @media ${zg} {
      opacity: 1;
    }
  }

  .card-image {
    width: ${e=>e.theme.input_cards.card_width};
    height: ${e=>e.theme.input_cards.card_height};
    background-size: cover;
    background-position: center;
    border-radius: 0.25rem;
    overflow: hidden;
    margin: auto;
  }
  .card-image-active-background {
    transition: opacity 200ms;
  }

  .InputCards__SlideInfo {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .InputCards__SlideInfoContent {
    padding: 33px 30px 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1) 57%,
      transparent
    );
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .InputCards__CardDescription {
    color: white;
    margin-right: 10px;
    flex: 1;
  }

  /* NOT Extra Fields version */
  .slick-slide:not(.slick-current) {
    .card-content,
    .card-footer {
      display: none;
    }
  }

  /* Extra Fields Version - The extra fields are only visible when slick-slide is the current one */
  /* The rest of these selectors are fixes for animations as at the end of this file (fake current slide) */
  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    .InputCards__Slide--ExtraFields {
      .card {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 6px;
        overflow: hidden;
      }

      /* Hide thumbnail design */
      .InputCards__SlideInfo {
        display: none;
      }

      .InputCards__ExtraFieldsImage,
      .InputCards__ExtraContent {
        height: auto;
        margin: 0;
        border-radius: 0;
        color: var(--message_color_bot);
      }

      .InputCards__ExtraContent {
        background-color: var(--message_background_color_bot);
      }

      .InputCards__ExtraFieldsImage {
        min-height: 190px;
      }

      .card-content {
        padding: 24px 28px 12px;
        display: block;
      }

      .card-footer {
        display: flex;
      }

      .card-footer-item {
        padding-bottom: 24px;
      }

      .card-footer-item:first-of-type {
        padding-left: 28px;
        padding-right: 8px;
        justify-content: flex-start;
      }

      .card-footer-item:last-of-type {
        padding-left: 8px;
        padding-right: 28px;
        justify-content: flex-end;
      }

      .InputCards__Title {
        margin-bottom: 8px;
        font-size: 1.27rem;
      }

      .InputCards__Description {
        margin-bottom: 4px;
        font-size: 1.12rem;
        opacity: 0.8;
      }

      .InputCards__Details {
        font-size: 1rem;
        opacity: 0.6;
      }

      .card-footer-item .InputCards__HighLighted {
        font-size: 1.12rem;
      }

      .card-footer-item .InputCards__CTA {
        opacity: 1;
        font-size: 1rem;
        padding: 6px 12px;
        color: var(--message_color_bot);
        border-color: var(--message_color_bot);
      }
    }
  }

  /* FIXES */
  /* ANIMATIONS - needed for animations */
  .slick-list {
    @media ${zg} {
      width: calc((${e=>e.theme.input_cards.card_width}) * 2);
    }
  }

  .slick-slide {
    @media ${zg} {
      display: block;
      transform: scale(0.7);
      transition: transform 0.2s ease-in-out;
      padding-left: 10px;
      opacity: 0.9;
    }
  }

  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    @media ${zg} {
      display: block;
      transform: scale(1);
      opacity: 1;
      padding-left: 0;
    }
  }

  /* FIX - When there's only one card */
  ${e=>e.totalSlides<=1&&"\n    .slick-slide.slick-active.slick-cloned {\n      display: none;\n    }\n  "}
`;const $k=({active:e,card:n,onSubmit:r,children:o})=>t.createElement("a",{className:_o()(["InputCards__Slide",n.hasExtraFields&&"InputCards__Slide--ExtraFields"]),key:n.payload,href:e&&n.href||null,target:"_blank",onClick:()=>{e&&r(n)},rel:"noopener noreferrer"},o);$k.propTypes={active:o().bool,card:o().object,onSubmit:o().func,children:o().object},$k.defaultProps={active:!1,card:{},onSubmit:()=>{},children:{}};const eE=({active:e,card:n})=>{const{text:r}=d();return t.createElement("div",{className:"card"},t.createElement("div",{className:_o()(["card-image is-relative",n.hasExtraFields&&"InputCards__ExtraFieldsImage"]),style:{backgroundImage:`url(%24%7bn.html)`}},n.hasExtraFields&&n.imageWithFooter&&t.createElement("div",{style:{backgroundImage:`url(%24%7bn-2.html)`,opacity:e?1:0},className:"card-image is-relative InputCards__ExtraFieldsImage  card-image-active-background"}),t.createElement("div",{className:"InputCards__SlideInfo is-overlay"},t.createElement("div",{className:"InputCards__SlideInfoContent"},t.createElement("p",{className:"InputCards__CardDescription is-size-6"},n.title),!n.hasExtraFields&&t.createElement("button",{type:"button",className:"button is-pulled-right"},r.select)))),n.hasExtraFields&&t.createElement("div",{className:"InputCards__ExtraContent"},t.createElement("div",{className:"card-content"},t.createElement("h1",{className:"InputCards__Title title is-spaced"},n.title),t.createElement("h2",{className:"InputCards__Description subtitle has-text-weight-medium"},n.description),t.createElement("p",{className:"InputCards__Details description has-text-weight-medium"},n.details)),(n.highlighted||n.button)&&t.createElement("footer",{className:"card-footer"},t.createElement("div",{className:"card-footer-item"},t.createElement("h3",{className:"has-text-weight-bold InputCards__HighLighted"},n.highlighted)),t.createElement("div",{className:"card-footer-item"},n.button&&t.createElement("button",{type:"button",className:"button button--bordered InputCards__CTA"},n.button)))))};function tE(e){const{text:n}=d(),r=(0,t.useRef)(),{window:o,document:i}=s(),a=o.innerWidth>768?2:1,l=e.cards.length,[c,u]=(0,t.useState)(0),f=ae.Z.appendUIKey(e.cards);return t.createElement(Jk,{className:"InputButtons",totalSlides:l},l>1&&t.createElement(Ik,null,e.help),t.createElement("div",{className:"field is-relative is-marginless"},t.createElement(Kk.Z,{beforeChange:(e,t)=>{setTimeout((()=>{u(t)}),0),((e,t)=>{const n=i.querySelector("[is-last-slide]");null!==n&&n.removeAttribute("is-last-slide");const r=i.querySelector(".slick-slide.slick-active.slick-cloned");null!==r&&(t>e||e===l-1&&0===t)&&r.setAttribute("is-last-slide",!0)})(e,t)},className:"InputCards__Slider",focusOnSelect:!0,infinite:!0,nextArrow:t.createElement(Zk,{nextText:n.next}),onSwipe:()=>{r&&(r.current.innerSlider.clickable=!0)},prevArrow:t.createElement(Zk,{isPrev:!0}),ref:r,responsive:[{breakpoint:768,settings:{slidesToShow:1}}],slidesToScroll:1,slidesToShow:a},f.map(((n,r)=>{const o={card:n};return t.createElement($k,{active:c===r,card:n,key:o,onSubmit:e.onSubmit},t.createElement(eE,{active:c===r,card:n}))})))))}function nE({message:e,onSubmit:n}){const{text:r}=d(),o=e.getCards();return o.length>0?t.createElement(tE,{cards:o,onSubmit:e=>n({type:"button",message:e.title,payload:e.payload}),help:r.input_menu_help}):null}eE.propTypes={active:o().bool,card:o().object},eE.defaultProps={active:!1,card:{}},tE.propTypes={cards:o().arrayOf(o().shape({title:o().string,payload:o().string,image:o().string,href:o().string,hasExtraFields:o().bool,uiKey:o().string})),help:o().string,onSubmit:o().func},tE.defaultProps={cards:[],help:"",onSubmit:()=>{}},nE.propTypes={message:o().object,onSubmit:o().func},nE.defaultProps={message:null,onSubmit:()=>{}};const rE="booked",oE="skipped";function iE({message:e,onSubmit:n}){const{window:r}=s(),{scheduling_url:o,button_message:i,skip_message:a}=e,l=a||"Skip";return function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("link");return t.rel="stylesheet",t.href=e,n.head.append(t),()=>t.remove()}),[n,e])}("../assets.calendly.com/assets/external/widget.css"),function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("script");return t.src=e,t.type="text/javascript",n.head.append(t),()=>t.remove()}),[n,e])}("../assets.calendly.com/assets/external/widget.js"),(0,t.useEffect)((()=>{const e=e=>{if(e.data.event&&0===e.data.event.indexOf("calendly"))switch(e.data.event){case"calendly.profile_page_viewed":case"calendly.event_type_viewed":case"calendly.date_and_time_selected":return;case"calendly.event_scheduled":return n({type:P.CALENDLY,action:rE,message:i,payload:e.data.payload}),void r.Calendly.closePopupWidget()}};return r.addEventListener("message",e),()=>r.removeEventListener("message",e)}),[r]),t.createElement(Fx,{message:e,showText:!0},t.createElement("div",{className:"is-block has-text-centered"},t.createElement(Co,{className:"is-fullwidth",onClick:()=>{r.Calendly.initPopupWidget({url:o})},label:i})),t.createElement("div",{className:"is-block has-text-centered mt-2"},t.createElement("a",{className:"is-inline-block py-2 px-4",onClick:()=>{n({type:P.CALENDLY,action:oE,message:l,payload:{}})}},l)))}function aE(e){const{text:{error_input_date:n}}=d(),{message:r}=e,o=r.getDateFnsFormat(),i=(0,t.useRef)(null);return t.createElement(kk,Zg({bubbleClassName:"is-relative",className:"InputDate"},Ek(e),{hasAutofocus:!1,onSubmit:({type:t,message:n})=>{e.onSubmit({type:t,message:r.applyDateFormat(n),extra:{timestamp:n.valueOf()/1e3}})},validate:e=>r.isValidDate(e)?"":n.replace(/@format/i,r.dateFormat)}),t.createElement($d,{format:o,initialMonth:r.getDatePickerInitialMonth(),inputRef:i,isInsideForm:r.isInsideForm,isMobile:E.isMobile,modifiers:{disabled:e=>!r.isValidDate(e)},showDatePicker:r.showDatePicker}))}function sE(e){const{text:{error_input_email:n}}=d();return t.createElement(kk,Zg({className:"InputEmail"},Ek(e),{validate:e=>ie.validEmail(e,n)}),t.createElement(Pf,{name:"email",type:"email"}))}iE.propTypes={message:o().shape({url:o().string}),onSubmit:o().func},iE.defaultProps={message:{},onSubmit:()=>{}},aE.propTypes={onSubmit:o().func,message:o().object},aE.defaultProps={onSubmit:()=>{},message:null},sE.propTypes={message:o().object},sE.defaultProps={message:null};const lE="max_size",cE="maxnumber_files",uE="fetch";function dE(e){const{text:{input_file_instructions_help:n,input_files_instructions_help:r,input_file_help:o,input_files_help:i,select_file:a,select_files:s,send:l}}=d(),c={input_file_instructions_help:n,input_files_instructions_help:r,input_file_help:o,input_files_help:i,select_file:a,select_files:s,send:l},[u,f]=(0,t.useState)(!1),p=e=>{e.preventDefault(),f(!0)},h=e=>{e.preventDefault(),f(!1)},m=t=>{const{dataTransfer:n}=t;t.preventDefault(),f(!1),n.effectAllowed="none",n.dropEffect="none",e.onDropUpload(n.files)};return e.multiple?t.createElement(Op,Zg({},e,{dragOver:u,onDragLeave:h,onDragOver:p,onDrop:m,text:c})):t.createElement(Tp,Zg({},e,{dragOver:u,onDragLeave:h,onDragOver:p,onDrop:m,text:c}))}function fE(e){const{multiple:n}=e.message,r=n?6:1,{uploadedFiles:o,error:i,removeUploadedFile:a,isFetching:s,uploadFile:l,uploadFiles:c,setError:u}=function(e){const[n,r]=(0,t.useState)([]),[o,i]=(0,t.useState)(null),[a,s]=(0,t.useState)(!1),l=wv(),{text:c}=d(),u=1===e?c.input_file_max_help.replace("@maxfiles",e):c.input_files_max_help.replace("@maxfiles",e),f=(e,n)=>{switch(e){case lE:return t.createElement(Pp,{content:n.name,filesize:`${ae.Z.bytesToMegaBytes(n.size)}MB`,setError:i});case cE:return t.createElement(Pp,{content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},u),setError:i});case uE:return t.createElement(Pp,{content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},"Error! Please, try again."),setError:i});default:return null}},p=e=>e.size<=1e7?(s(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:l.config.channelToken,customerToken:l.customerToken,serverUrl:l.config.serverUrl,file:e}).then((({url:t})=>{const n={url:t,name:e.name,size:e.size,key:g().utils.utils.randomKey()};r((e=>[...e,n]))})).catch((e=>{i(f(uE,null)),console.error(e)})).finally((()=>s(!1)))):(i(f(lE,e)),null);return{uploadedFiles:n,removeUploadedFile:e=>{i(null);const{key:t}=e.target.dataset,o=n.findIndex((e=>e.key===t));r([...n.slice(0,o),...n.slice(o+1)])},error:o,isFetching:a,uploadFiles:t=>{i(null);const r=Object.values(t);r.length+n.length>e?i(f(cE)):r.forEach((e=>{p(e)}))},uploadFile:p,setError:i}}(r);return t.createElement(dE,{error:i,loading:s,multiple:n,onDropUpload:c,onRemoveFile:a,onSubmit:()=>!0===n?(()=>{const t=o.map((e=>({url:e.url}))),n=o.map((e=>e.name)).join(", ");e.onSubmit({type:"multiple_files",urls:t,message:n})})():(()=>{const t=o[0];e.onSubmit({type:"file",url:t.url,message:t.name})})(),setError:u,uploadedFiles:o,uploadFile:l,uploadFiles:c})}dE.propTypes={multiple:o().bool,onDropUpload:o().func,uploadedFiles:o().array},dE.defaultProps={multiple:!1,onDropUpload:()=>{},uploadedFiles:null},fE.propTypes={onSubmit:o().func,message:o().object},fE.defaultProps={onSubmit:()=>{},message:null};var pE=fE,hE=e=>null==e,mE=e=>Array.isArray(e);const bE=e=>"object"==typeof e;var gE=e=>!hE(e)&&!mE(e)&&bE(e),vE=e=>gE(e)&&e.nodeType===Node.ELEMENT_NODE;const yE={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit"},wE="undefined",_E="blur",xE="change",kE="input",EE="max",SE="min",CE="maxLength",OE="minLength",TE="pattern",PE="required",AE="validate",IE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,NE=/^\w*$/,DE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ME=/\\(\\)?/g;var jE=e=>!mE(e)&&(NE.test(e)||!IE.test(e)),RE=e=>{const t=[];return e.replace(DE,((e,n,r,o)=>{t.push(r?o.replace(ME,"$1"):n||e)})),t};function LE(e,t,n){let r=-1;const o=jE(t)?[t]:RE(t),i=o.length,a=i-1;for(;++r<i;){const t=o[r];let i=n;if(r!==a){const n=e[t];i=gE(n)||mE(n)?n:isNaN(+o[r+1])?{}:[]}e[t]=i,e=e[t]}return e}var FE=e=>Object.entries(e).reduce(((e,[t,n])=>jE(t)?Object.assign(Object.assign({},e),{[t]:n}):(LE(e,t,n),e)),{}),BE=e=>void 0===e,zE=(e,t,n)=>{const r=t.split(/[,[\].]+?/).filter(Boolean).reduce(((e,t)=>hE(e)?e:e[t]),e);return BE(r)||r===e?BE(e[t])?n:e[t]:r},UE=(e,t)=>{vE(e)&&e.removeEventListener&&(e.removeEventListener(kE,t),e.removeEventListener(xE,t),e.removeEventListener(_E,t))},WE=e=>"radio"===e.type,HE=e=>"checkbox"===e.type;function VE(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&VE(e.parentNode)}var qE=e=>gE(e)&&!Object.keys(e).length;function YE(e){return mE(e)?e:RE(e)}function QE(e,t){return 1==t.length?e:function(e,t){const n=jE(t)?[t]:YE(t),r=t.length;let o=0;for(;o<r;)e=BE(e)?o++:e[n[o++]];return o==r?e:void 0}(e,function(e,t,n){let r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t;const i=Array(o);for(;++r<o;)i[r]=e[r+t];return i}(t,0,-1))}function GE(e,t){return t.forEach((t=>{!function(e,t){const n=jE(t)?[t]:YE(t),r=QE(e,n),o=n[n.length-1],i=!(null!=r)||delete r[o];let a;for(let t=0;t<n.slice(0,-1).length;t++){let r,o=-1;const i=n.slice(0,-(t+1)),s=i.length-1;for(t>0&&(a=e);++o<i.length;){const t=i[o];r=r?r[t]:e[t],s===o&&(gE(r)&&qE(r)||mE(r)&&!r.filter((e=>gE(e)&&!qE(e))).length)&&(a?delete a[t]:delete e[t]),a=r}}}(e,t)})),e}const KE=(e,t)=>e&&e.ref===t;const XE={isValid:!1,value:""};var ZE=e=>mE(e)?e.reduce(((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e),XE):XE,JE=e=>"file"===e.type,$E=e=>"select-multiple"===e.type,eS=e=>""===e;const tS={value:!1,isValid:!1},nS={value:!0,isValid:!0};var rS=e=>{if(mE(e)){if(e.length>1){const t=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:t,isValid:!!t.length}}const{checked:t,value:n,attributes:r}=e[0].ref;return t?r&&!BE(r.value)?BE(n)||eS(n)?nS:{value:n,isValid:!0}:nS:tS}return tS};function oS(e,t){const{name:n,value:r}=t,o=e[n];return JE(t)?t.files:WE(t)?o?ZE(o.options).value:"":$E(t)?(i=t.options,[...i].filter((({selected:e})=>e)).map((({value:e})=>e))):HE(t)?!!o&&rS(o.options).value:r;var i}var iS=e=>"string"==typeof e,aS=(e,t)=>{const n={};for(const r in e)(BE(t)||(iS(t)?r.startsWith(t):mE(t)?t.find((e=>r.startsWith(e))):t&&t.nest))&&(n[r]=oS(e,e[r].ref));return n},sS=(e,{type:t,types:n,message:r})=>gE(e)&&e.type===t&&e.message===r&&((e={},t={})=>{const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>t[n]&&t[n]===e[n]))})(e.types,n);var lS=e=>e instanceof RegExp,cS=e=>{return gE(t=e)&&!lS(t)?e:{value:e,message:""};var t},uS=e=>"function"==typeof e,dS=e=>"boolean"==typeof e,fS=e=>iS(e)||gE(e)&&(0,t.isValidElement)(e);function pS(e,t,n="validate"){if(fS(e)||dS(e)&&!e)return{type:n,message:fS(e)?e:"",ref:t}}var hS=(e,t,n,r,o)=>{if(t){const t=n[e];return Object.assign(Object.assign({},t),{types:Object.assign(Object.assign({},t&&t.types?t.types:{}),{[r]:o||!0})})}return{}},mS=async(e,t,{ref:n,ref:{type:r,value:o,name:i},options:a,required:s,maxLength:l,minLength:c,min:u,max:d,pattern:f,validate:p})=>{var h;const m=e.current,b={},g=WE(n),v=HE(n),y=g||v,w=eS(o),_=hS.bind(null,i,t,b),x=(e,r,o,a=CE,s=OE)=>{const l=e?r:o;if(b[i]=Object.assign({type:e?a:s,message:l,ref:n},_(e?a:s,l)),!t)return b};if(s&&(!g&&!v&&(w||hE(o))||dS(o)&&!o||v&&!rS(a).isValid||g&&!ZE(a).isValid)){const{value:e,message:r}=fS(s)?{value:!!s,message:s}:cS(s);if(e&&(b[i]=Object.assign({type:PE,message:r,ref:y?null===(h=m[i].options)||void 0===h?void 0:h[0].ref:n},_(PE,r)),!t))return b}if(!hE(u)||!hE(d)){let e,i;const{value:a,message:s}=cS(d),{value:l,message:c}=cS(u);if("number"===r||!r&&!isNaN(o)){const t=n.valueAsNumber||parseFloat(o);hE(a)||(e=t>a),hE(l)||(i=t<l)}else{const t=n.valueAsDate||new Date(o);iS(a)&&(e=t>new Date(a)),iS(l)&&(i=t<new Date(l))}if((e||i)&&(x(!!e,s,c,EE,SE),!t))return b}if(iS(o)&&!w&&(l||c)){const{value:e,message:n}=cS(l),{value:r,message:i}=cS(c),a=o.toString().length,s=!hE(e)&&a>e,u=!hE(r)&&a<r;if((s||u)&&(x(!!s,n,i),!t))return b}if(f&&!w){const{value:e,message:r}=cS(f);if(lS(e)&&!e.test(o)&&(b[i]=Object.assign({type:TE,message:r,ref:n},_(TE,r)),!t))return b}if(p){const e=oS(m,n),r=y&&a?a[0].ref:n;if(uS(p)){const n=pS(await p(e),r);if(n&&(b[i]=Object.assign(Object.assign({},n),_(AE,n.message)),!t))return b}else if(gE(p)){let n={};for(const[o,a]of Object.entries(p)){if(!qE(n)&&!t)break;const s=pS(await a(e),r,o);s&&(n=Object.assign(Object.assign({},s),_(o,s.message)),t&&(b[i]=n))}if(!qE(n)&&(b[i]=Object.assign({ref:r},n),!t))return b}}return b};const bS=(e,t)=>mE(e.inner)?e.inner.reduce(((e,{path:n,message:r,type:o})=>Object.assign(Object.assign({},e),n?e[n]&&t?{[n]:hS(n,t,e,o,r)}:{[n]:e[n]||Object.assign({message:r,type:o},t?{types:{[o]:r||!0}}:{})}:{})),{}):{[e.path]:{message:e.message,type:e.type}};async function gS(e,t,n,r,o){if(r)return r(n,o);try{return{values:await e.validate(n,{abortEarly:!1,context:o}),errors:{}}}catch(e){return{values:{},errors:FE(bS(e,t))}}}var vS=e=>hE(e)||!bE(e);const yS=(e,t)=>{const n=(t,n,r)=>{const o=r?`${e}.${n}`:`${e}[${n}]`;return vS(t)?o:yS(o,t)};return mE(t)?t.map(((e,t)=>n(e,t))):Object.entries(t).map((([e,t])=>n(t,e,!0)))};var wS=(e,t,n,r,o)=>{let i;return n.add(t),qE(e)?i=void 0:BE(e[t])?(i=zE(FE(e),t),BE(i)||((e,t)=>yS(e,t).flat(1/0))(t,i).forEach((e=>n.add(e)))):(i=e[t],n.add(t)),BE(i)?o?r:zE(r,t):i},_S=({isOnChange:e,hasError:t,isBlurEvent:n,isOnSubmit:r,isReValidateOnSubmit:o,isOnBlur:i,isReValidateOnBlur:a,isSubmitted:s})=>e&&n||r&&o||r&&!s||i&&!n&&!t||a&&!n&&t||o&&s,xS=e=>e.substring(0,e.indexOf("[")),kS=(e,t)=>{const n=FE(aS(e));return t?zE(n,t,n):n};function ES(e,t){let n=!1;if(!mE(e)||!mE(t)||e.length!==t.length)return!0;for(let r=0;r<e.length&&!n;r++){const o=e[r],i=t[r];if(BE(i)||Object.keys(o).length!==Object.keys(i).length){n=!0;break}for(const e in o)if(o[e]!==i[e]){n=!0;break}}return n}const SS=(e,t)=>RegExp(`^${t}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var CS=(e,t)=>[...e].some((e=>SS(t,e)));var OS=e=>({isOnSubmit:!e||e===yE.onSubmit,isOnBlur:e===yE.onBlur,isOnChange:e===yE.onChange}),TS=e=>WE(e)||HE(e);function PS({mode:e=yE.onSubmit,reValidateMode:n=yE.onChange,validationSchema:r,validationResolver:o,validationContext:i,defaultValues:a={},submitFocusError:s=!0,validateCriteriaMode:l}={}){const c=(0,t.useRef)({}),u=(0,t.useRef)({}),d=(0,t.useRef)({}),f=(0,t.useRef)({}),p=(0,t.useRef)(new Set),h=(0,t.useRef)(new Set),m=(0,t.useRef)(new Set),b=(0,t.useRef)(new Set),g=(0,t.useRef)(!0),v=(0,t.useRef)(a),y=(0,t.useRef)({}),w=(0,t.useRef)(!1),_=(0,t.useRef)(!1),x=(0,t.useRef)(!1),k=(0,t.useRef)(!1),E=(0,t.useRef)(0),S=(0,t.useRef)(!1),C=(0,t.useRef)(),O=(0,t.useRef)({}),T=(0,t.useRef)(i),P=(0,t.useRef)(new Set),[,A]=(0,t.useState)(),{isOnBlur:I,isOnSubmit:N,isOnChange:D}=(0,t.useRef)(OS(e)).current,M="all"===l,j=typeof window===wE,R=!(!r&&!o),L=typeof document!==wE&&!j&&!BE(window.HTMLElement),F=L?"Proxy"in window:typeof Proxy!==wE,B=(0,t.useRef)({dirty:!F,dirtyFields:!F,isSubmitted:N,submitCount:!F,touched:!F,isSubmitting:!F,isValid:!F}),{isOnBlur:z,isOnSubmit:U}=(0,t.useRef)(OS(n)).current;T.current=i;const W=(0,t.useCallback)((()=>{w.current||A({})}),[]),H=(0,t.useCallback)(((e,t,n=!1)=>{let r=n||function({errors:e,name:t,error:n,validFields:r,fieldsWithValidation:o}){const i=qE(n),a=qE(e),s=zE(n,t),l=zE(e,t);return!(i&&r.has(t)||l&&l.isManual)&&(!!(a!==i||!a&&!l||i&&o.has(t)&&!r.has(t))||s&&!sS(l,s))}({errors:u.current,error:t,name:e,validFields:b.current,fieldsWithValidation:m.current});if(qE(t))(m.current.has(e)||R)&&(b.current.add(e),r=r||zE(u.current,e)),u.current=GE(u.current,[e]);else{const n=zE(u.current,e);b.current.delete(e),r=r||!n||!sS(n,t[e]),LE(u.current,e,t[e])}if(r&&!hE(n))return W(),!0}),[W,R]),V=(0,t.useCallback)(((e,t)=>{const{ref:n,options:r}=e,o=L&&vE(n)&&hE(t)?"":t;WE(n)&&r?r.forEach((({ref:e})=>e.checked=e.value===o)):JE(n)?iS(o)?n.value=o:n.files=o:$E(n)?[...n.options].forEach((e=>e.selected=o.includes(e.value))):HE(n)&&r?r.length>1?r.forEach((({ref:e})=>e.checked=o.includes(e.value))):r[0].ref.checked=!!o:n.value=o}),[L]),q=(0,t.useCallback)((e=>{if(!c.current[e]||!B.current.dirty&&!B.current.dirtyFields)return!1;let t=y.current[e]!==oS(c.current,c.current[e].ref);const n=CS(P.current,e),r=h.current.size;if(n){const n=xS(e);t=ES(kS(c.current,n),zE(v.current,n))}const o=(n?k.current:h.current.has(e))!==t;return t?h.current.add(e):h.current.delete(e),k.current=n?t:!!h.current.size,B.current.dirty?o:r!==h.current.size}),[]),Y=(0,t.useCallback)(((e,t,n)=>{const r=mE(t);for(const o in t){const i=`${n||e}${r?`[${o}]`:`.${o}`}`,a=c.current[i];gE(t[o])&&Y(e,t[o],i),a&&(V(a,t[o]),q(i))}}),[V,q]),Q=(0,t.useCallback)(((e,t)=>{const n=c.current[e];if(n){V(n,t);const r=q(e);if(dS(r))return r}else vS(t)||Y(e,t)}),[q,V,Y]),G=(0,t.useCallback)((async(e,t)=>{const n=c.current[e];if(n){const r=await mS(c,M,n);return H(e,r,!!t&&null),qE(r)}return!1}),[H,M]),K=(0,t.useCallback)((async e=>{const{errors:t}=await gS(r,M,kS(c.current),o,T.current),n=g.current;if(g.current=qE(t),mE(e))e.forEach((e=>{const n=zE(t,e);n?LE(u.current,e,n):GE(u.current,[e])})),W();else{const r=zE(t,e);H(e,r?{[e]:r}:{},n!==g.current)}return qE(u.current)}),[W,H,M,o,r]),X=(0,t.useCallback)((async e=>{const t=e||Object.keys(c.current);if(R)return K(t);if(mE(t)){const e=await Promise.all(t.map((async e=>await G(e,!0))));return W(),e.every(Boolean)}return await G(t)}),[K,G,W,R]),Z=e=>_.current||p.current.has(e)||p.current.has((e.match(/\w+/)||[])[0]);C.current=C.current?C.current:async({type:e,target:t})=>{const n=t?t.name:"",i=c.current,a=u.current,s=i[n],l=zE(a,n);let f;if(!s)return;const p=e===_E,h=_S({hasError:!!l,isOnChange:D,isBlurEvent:p,isOnSubmit:N,isReValidateOnSubmit:U,isOnBlur:I,isReValidateOnBlur:z,isSubmitted:x.current}),m=q(n);let b=Z(n)||m;if(p&&!zE(d.current,n)&&B.current.touched&&(LE(d.current,n,!0),b=!0),h)return b&&W();if(R){const{errors:e}=await gS(r,M,kS(i),o,T.current),t=g.current;g.current=qE(e),f=zE(e,n)?{[n]:zE(e,n)}:{},t!==g.current&&(b=!0)}else f=await mS(c,M,s);!H(n,f)&&b&&W()};const J=(0,t.useCallback)(((e={})=>{const t=qE(v.current)?aS(c.current):v.current;gS(r,M,FE(Object.assign(Object.assign({},t),e)),o,T.current).then((({errors:e})=>{const t=g.current;g.current=qE(e),t!==g.current&&W()}))}),[W,M,o]),$=(0,t.useCallback)(((e,t)=>{C.current&&e&&function(e,t,n,r){const{ref:o,ref:{name:i,type:a},mutationWatcher:s}=n,l=e[i];if(a)if((WE(o)||HE(o))&&l){const{options:n}=l;mE(n)&&n.length?(n.filter(Boolean).forEach(((e,o)=>{const{ref:i,mutationWatcher:a}=e;(i&&VE(i)&&KE(e,i)||r)&&(UE(i,t),a&&a.disconnect(),GE(n,[`[${o}]`]))})),n&&!n.filter(Boolean).length&&delete e[i]):delete e[i]}else(VE(o)&&KE(l,o)||r)&&(UE(o,t),s&&s.disconnect(),delete e[i]);else delete e[i]}(c.current,C.current,e,t)}),[]),ee=(0,t.useCallback)(((e,t)=>{if(!e||e&&CS(P.current,e.ref.name)&&!t)return;$(e,t);const{name:n}=e.ref;u.current=GE(u.current,[n]),d.current=GE(d.current,[n]),y.current=GE(y.current,[n]),[h,m,b,p].forEach((e=>e.current.delete(n))),(B.current.isValid||B.current.touched)&&(W(),R&&J())}),[W,R,J,$]);const te=({name:e,type:t,types:n,message:r,shouldRender:o})=>{const i=c.current[e];sS(zE(u.current,e),{type:t,message:r,types:n})||(LE(u.current,e,{type:t,types:n,message:r,ref:i?i.ref:{},isManual:!0}),o&&W())};function ne(e,t={}){if(!e.name)return console.warn("Missing name @",e);const{name:n,type:r,value:o}=e,i=Object.assign({ref:e},t),a=c.current,s=TS(e);let l,u,d=a[n],f=!0;if(s?d&&mE(d.options)&&d.options.filter(Boolean).find((t=>o===t.ref.value&&t.ref===e)):d&&e===d.ref)a[n]=Object.assign(Object.assign({},d),t);else{if(r){const o=function(e,t){const n=new MutationObserver((()=>{VE(e)&&(n.disconnect(),t())}));return n.observe(window.document,{childList:!0,subtree:!0}),n}(e,(()=>ee(d)));d=s?Object.assign({options:[...d&&d.options||[],{ref:e,mutationWatcher:o}],ref:{type:r,name:n}},t):Object.assign(Object.assign({},i),{mutationWatcher:o})}else d=i;var p;a[n]=d,qE(v.current)||(u=zE(v.current,n),f=BE(u),l=CS(P.current,n),f||l||V(d,u)),R&&!l&&B.current.isValid?J():qE(t)||(m.current.add(n),!N&&B.current.isValid&&mS(c,M,d).then((e=>{const t=g.current;qE(e)?b.current.add(n):g.current=!1,t!==g.current&&W()}))),y.current[n]||l&&f||(y.current[n]=f?oS(a,d.ref):u),r&&function({field:{ref:e},handleChange:t,isRadioOrCheckbox:n}){vE(e)&&t&&(e.addEventListener(n?xE:kE,t),e.addEventListener(_E,t))}({field:s&&d.options?d.options[d.options.length-1]:d,isRadioOrCheckbox:s||(p=e,"select-one"===p.type),handleChange:C.current})}}const re=(0,t.useCallback)((e=>async t=>{t&&(t.preventDefault(),t.persist());let n={};const i=c.current;let a=aS(i);B.current.isSubmitting&&(S.current=!0,W());try{if(R){const{errors:e,values:t}=await gS(r,M,FE(a),o,T.current);u.current=e,n=e,a=t}else for(const e of Object.values(i))if(e){const{ref:{name:t}}=e,r=await mS(c,M,e);r[t]?(LE(n,t,r[t]),b.current.delete(t)):m.current.has(t)&&b.current.add(t)}qE(n)?(u.current={},W(),await e(FE(a),t)):(u.current=n,s&&L&&((e,t)=>{for(const n in e)if(zE(t,n)){const t=e[n];if(t){if(t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}})(i,n))}finally{x.current=!0,S.current=!1,E.current=E.current+1,W()}}),[L,W,R,s,M,o,r]);(0,t.useEffect)((()=>()=>{w.current=!0,c.current&&Object.values(c.current).forEach((e=>ee(e,!0)))}),[ee]),R||(g.current=b.current.size>=m.current.size&&qE(u.current));const oe={dirty:k.current,dirtyFields:h.current,isSubmitted:x.current,submitCount:E.current,touched:d.current,isSubmitting:S.current,isValid:N?x.current&&qE(u.current):g.current},ie={triggerValidation:X,setValue:(0,t.useCallback)((function(e,t,n){let r=!1;const o=mE(e);(o?e:[e]).forEach((e=>{const n=iS(e);r=!(!Q(n?e:Object.keys(e)[0],n?t:Object.values(e)[0])&&!o)||Z(e)})),(r||o)&&W(),(n||o&&t)&&X(o?void 0:e)}),[W,Q,X]),register:(0,t.useCallback)((function(e,t){if(!j)if(iS(e))ne({name:e},t);else{if(!gE(e)||!("name"in e))return t=>t&&ne(t,e);ne(e,t)}}),[v.current,y.current]),unregister:(0,t.useCallback)((function(e){c.current&&(mE(e)?e:[e]).forEach((e=>ee(c.current[e],!0)))}),[]),getValues:(0,t.useCallback)((function(e){if(iS(e))return c.current[e]?oS(c.current,c.current[e].ref):zE(v.current,e);const t=aS(c.current),n=qE(t)?v.current:t;return e&&e.nest?FE(n):n}),[]),formState:F?new Proxy(oe,{get:(e,t)=>{if(t in e)return B.current[t]=!0,e[t]}}):oe},ae=Object.assign(Object.assign(Object.assign({removeFieldEventListener:$,reRender:W},R?{validateSchemaIsValid:J}:{}),{mode:{isOnBlur:I,isOnSubmit:N,isOnChange:D},reValidateMode:{isReValidateOnBlur:z,isReValidateOnSubmit:U},errorsRef:u,touchedFieldsRef:d,fieldsRef:c,isWatchAllRef:_,watchFieldsRef:p,resetFieldArrayFunctionRef:O,fieldArrayDefaultValues:f,validFieldsRef:b,dirtyFieldsRef:h,fieldsWithValidationRef:m,fieldArrayNamesRef:P,isDirtyRef:k,readFormStateRef:B,defaultValuesRef:v}),ie);return Object.assign({watch:function(e,t){const n=p.current,r=BE(t),o=r?v.current:t,i=aS(c.current,e);if(iS(e))return wS(i,e,n,r?zE(o,e):t,!0);if(mE(e))return e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:wS(i,t,n,o)})),{});_.current=!0;const a=!qE(i)&&i||o;return e&&e.nest?FE(a):a},control:ae,handleSubmit:re,reset:(0,t.useCallback)(((e,t={})=>{if(L)for(const e of Object.values(c.current))if(e){const{ref:t,options:n}=e,r=TS(t)&&mE(n)?n[0].ref:t;if(vE(r))try{r.closest("form").reset();break}catch(e){}}e&&(v.current=e),Object.values(O.current).forEach((e=>uS(e)&&e())),(({errors:e,dirty:t,isSubmitted:n,touched:r,isValid:o,submitCount:i,dirtyFields:a})=>{c.current={},e||(u.current={}),r||(d.current={}),o||(b.current=new Set,m.current=new Set,g.current=!0),t||(k.current=!1),a||(h.current=new Set),n||(x.current=!1),i||(E.current=0),y.current={},f.current={},p.current=new Set,_.current=!1})(t),W()}),[]),clearError:(0,t.useCallback)((function(e){e?GE(u.current,mE(e)?e:[e]):u.current={},W()}),[]),setError:(0,t.useCallback)((function(e,t="",n){iS(e)?te(Object.assign(Object.assign({name:e},gE(t)?{types:t,type:""}:{type:t,message:n}),{shouldRender:!0})):mE(e)&&(e.forEach((e=>te(Object.assign({},e)))),W())}),[]),errors:u.current},ie)}(0,t.createContext)(null);function AS(e){return t.createElement("div",{className:_o()("select",e.className)},t.createElement("select",{ref:e.inputRef,name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,value:e.value,className:e.hasAutofocus?"js-auto-focus":null},e.options.map((e=>t.createElement("option",{key:e.value,value:e.value},e.text)))))}function IS(e){return t.createElement("div",{className:_o()("control",e.className)},e.children)}AS.propTypes={className:o().string,inputRef:o().func,name:o().string,onChange:o().func,options:o().arrayOf(o().shape({text:o().string,value:o().any})),required:o().bool,value:o().any,hasAutofocus:o().bool},AS.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1},IS.propTypes={className:o().string,children:o().any},IS.defaultProps={className:"",children:null};var NS=uo.label`
  color: inherit !important;
  line-height: inherit;

  input {
    margin-right: 10px;
  }
`;function DS(e){return t.createElement("div",{className:_o()("CheckboxGroup control",e.className)},e.options.map(((n,r)=>t.createElement(IS,{key:r},t.createElement(NS,{className:"radio"},t.createElement("input",{type:"checkbox",name:e.name,ref:e.inputRef,defaultChecked:e.value===n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null,value:n.value,required:e.required}),n.text)))))}function MS(e){return t.createElement("div",{className:_o()("RadioGroup",e.className)},e.options.map(((n,r)=>t.createElement(IS,{key:r},t.createElement(NS,{className:"radio"},t.createElement("input",{type:"radio",name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,ref:e.inputRef,defaultChecked:e.value===n.value,value:n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null}),n.text)))))}DS.propTypes={className:o().string,inputRef:o().func,name:o().string,options:o().arrayOf(o().shape({text:o().string,value:o().any})),value:o().any,hasAutofocus:o().bool,required:o().bool},DS.defaultProps={className:"",inputRef:null,name:null,options:[],value:void 0,hasAutofocus:!1,required:!1},MS.propTypes={className:o().string,inputRef:o().func,name:o().string,onChange:o().func,options:o().arrayOf(o().shape({text:o().string,value:o().any})),required:o().bool,value:o().any,hasAutofocus:o().bool},MS.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1};const jS=uo.form`
  max-width: 420px;

  .help {
    margin-bottom: 0.5rem;
  }

  textarea {
    margin: 2px 0;
  }

  /* Positioning submit button */
  .input-send-button {
    margin: 12px 1px 7px;

    &:hover {
      color: ${({theme:e})=>e.design.form_buttons_color};
    }
  }

  .label:not(:last-child) {
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
  }

  @media ${zg} {
    .label:not(:last-child) {
      /* This min-height ensures two inputs ( */
      min-height: 1.34rem;
    }
  }
`;function RS(e){const{message:n}=e,{text:r}=d(),{register:o,handleSubmit:i}=PS(),a=oe()(n,"extra.form.sendLabel",r.send);const s=oe()(n,"extra.form.elements",[]);return t.createElement(Fx,{message:n,showText:!0},t.createElement(jS,{className:"InputForm columns is-multiline",onSubmit:i((t=>{e.onSubmit({type:"text",message:a,custom_data:t})}))},s.map((function(e,n){const{element:r,label:i,help:a,options:s,className:l,attributes:c={}}=e,u=ae.Z.nullifyStrings(c);let d=null;switch(r){case"input":switch(u.type){case"checkbox":d=t.createElement(DS,Zg({inputRef:o,options:s},u,{hasAutofocus:0===n}));break;case"radio":d=t.createElement(MS,Zg({},u,{hasAutofocus:0===n,inputRef:o,options:s}));break;default:d=t.createElement(Pf,Zg({},u,{hasAutofocus:0===n,inputRef:o}))}break;case"select":d=t.createElement(AS,Zg({},u,{className:"is-block",hasAutofocus:0===n,inputRef:o,options:s}));break;case"textarea":d=t.createElement(nb,Zg({},u,{hasAutofocus:0===n,inputRef:o}));break;case"label":case"button":case"progress":default:return null}return t.createElement("div",{className:_o()("column",l),key:n},i&&t.createElement("label",{className:"label"},i),d,a&&t.createElement("p",{className:"help"},a))})),t.createElement("div",{className:"column is-full"},t.createElement("div",{className:"control"},t.createElement(Xm,null,a)))))}let LS;RS.propTypes={onSubmit:o().func,message:o().object},RS.defaultProps={onSubmit:()=>{},message:{}};function FS(e,t,n,r){LS=new e.google.maps.places.Autocomplete(n.current,{}),LS.addListener("place_changed",(()=>async function(e,t){e(LS.getPlace().formatted_address),t(!0)}(t,r)))}function BS(e){const{design:{google_api_key:n}}=d(),{document:r,window:o}=s(),i=(0,t.useRef)(null),[a,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>FS(o,l,i,u);"google"in o?e():((e,t,n)=>{const r=t.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=()=>n(),r.src=e,t.getElementsByTagName("head")[0].appendChild(r)})(`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,r,e)}),[n,o,r]),t.createElement(kk,Zg({className:"InputLocation",selectedValue:a,submitOnEnter:c},Ek(e)),t.createElement(Pf,{inputRef:i,type:"text"}))}BS.propTypes={message:o().object,onSubmit:o().func},BS.defaultProps={message:null,onSubmit:()=>{}};const zS=uo.form`
  margin-bottom: 28px;
`;function US(e){const{text:n}=d(),{message:r,message:{minValue:o,maxValue:i,prefix:a}}=e,s=n.input_number_help_min,l=n.input_number_help_max;return t.createElement(kk,Zg({className:"InputNumber",prefix:a,renderAs:zS,validate:e=>r.isValidNumber(e,s,l)},Ek(e)),t.createElement(Pf,{max:i,min:o,type:"number"}))}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function HS(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?WS(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):WS(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}US.propTypes={message:o().object,onSubmit:o().func},US.defaultProps={message:null,onSubmit:()=>{}};const VS=uo.form`
  overflow: hidden;

  &.is-animate-messages-on {
    animation-name: showTextarea;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
  }
`;function qS(e){return t.createElement(kk,Zg({className:"InputTextLong",renderAs:VS},Ek(HS(HS({},e),{},{sendButtonType:"button"})),{helpText:"",validate:t=>e.message.isValidText(t)}),t.createElement(nb,{className:"InputTextLong__TextArea"}))}qS.propTypes={message:o().object,onSubmit:o().func},qS.defaultProps={message:null,onSubmit:()=>{}};const YS=uo.form`
  overflow: hidden;
`,QS=uo.div`
  overflow: hidden;
`;function GS(e){return t.createElement(kk,Zg({className:"InputText",renderAs:e.message.isInsideForm?QS:YS},Ek(e),{validate:t=>e.message.isValidText(t)}),t.createElement(Pf,{type:"text"}))}function KS(e){const{text:{error_input_phone:n}}=d(),{hasCountryFlag:r}=e.message;return t.createElement(kk,Zg({className:"InputTel"},Ek(e),{validate:e=>ie.validPhoneNumber(e,n)}),r?t.createElement(Wp,null):t.createElement(Pf,{name:"phone",type:"tel"}))}function XS(e){return t.createElement(kk,Zg({className:"InputUrl"},Ek(e)),t.createElement(Pf,{pattern:"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",placeholder:"https://",required:!0,type:"url"}))}GS.propTypes={message:o().object,onSubmit:o().func},GS.defaultProps={message:null,onSubmit:()=>{}},KS.propTypes={message:o().object},KS.defaultProps={message:null},XS.propTypes={message:o().object},XS.defaultProps={message:null};var ZS={default:null,[A]:Sk,[L]:aE,[F]:sE,[U]:BS,[H]:US,[G]:KS,[K]:GS,[X]:qS,[Z]:XS};const JS=()=>"",$S={default:JS,[A]:JS,[L]:(e,t,{error_input_date:n})=>{const r=t.message.parseDate(e);return t.message.isValidDate(r,!0)?"":(null==n?void 0:n.replace(/@format/i,t.message.dateFormat))||""},[F]:(e,t,{error_input_email:n})=>e?ie.validEmail(e,n):"",[U]:JS,[H]:(e,t,{input_number_help_min:n,input_number_help_max:r})=>t.message.isValidNumber(e,n,r),[G]:(e,t,{error_input_phone:n})=>e?ie.validPhoneNumber(e,n):"",[K]:(e,t)=>t.message.isValidText(e),[X]:JS,[Z]:JS};function eC({message:e}){const t=ZS[e.inputType]||ZS.default;return(0,Fw.jsx)(t,{message:e},void 0)}function tC(e,t,n="This field is required",r){let o=!0;const i=e.map((e=>Object.assign(Object.assign({},e),{inputs:e.inputs.map((e=>{const i=t[e.name],a=function({input:e,reqErrorMessage:t,text:n,value:r}){let o="";const i=!e.required||!!r;if(!e.required&&!r)return o;o=i?(0,$S[e.message.inputType])(r,e,n):t;return o}({input:e,value:"string"==typeof i?i:"",text:r,reqErrorMessage:n});return o=o&&!a,Object.assign(Object.assign({},e),{default:t[e.name],error:a,uiKey:a?g().utils.utils.randomKey():e.uiKey})}))})));return[o,i]}function nC(e,t){const n={};return e.forEach((({inputs:e})=>{e.forEach((e=>{var r;const o=e.message.inputType===G&&(null===(r=null==e?void 0:e.extra)||void 0===r?void 0:r.hasCountryFlag);n[e.name]=o?t[e.name].replace(/[^0-9]+/g,""):t[e.name]}))})),n}function rC(e,t){return function(e,t){const n=[];return e.forEach((({inputs:e})=>{e.forEach((e=>{var r;const o=e.message.inputType===G&&(null===(r=null==e?void 0:e.extra)||void 0===r?void 0:r.hasCountryFlag),i=e.label||(null==e?void 0:e.placeholder)||(null==e?void 0:e.help)||"",a=o?t[e.name].replace(/[^0-9]+/g,""):t[e.name];a&&i&&"string"==typeof a&&n.push({label:i,value:a})}))})),n}(e,t).reduce(((e,{label:t,value:n})=>`${e}\n**${t}:** ${n}`),"").trim()}const oC=uo.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;var iC=function({message:e,onSubmit:n}){const{text:r}=d(),[o,i]=(0,t.useState)([]);return(0,t.useEffect)((()=>{i(e.rows?((e,t)=>e.map((e=>Object.assign(Object.assign({},e),{inputs:e.inputs.map((e=>Object.assign(Object.assign({},e),{message:_y(Object.assign(Object.assign({},e),{isInsideForm:!0,samurai:t}))})))}))))((e=>ae.Z.appendUIKey(e).map((e=>Object.assign(Object.assign({},e),{inputs:ae.Z.appendUIKey(e.inputs)}))))(Object.values(e.rows)),e.samurai):[])}),[e.rows,e.samurai]),(0,Fw.jsx)(Fx,Object.assign({message:e,showText:!0},{children:(0,Fw.jsxs)("form",Object.assign({onSubmit:t=>{t.preventDefault();const a=function(e){const t=new FormData(e),n={};for(let[e,r]of t.entries())n[e]=r;return n}(t.target),[s,l]=tC(o,a,e.errorMessage,r);s?n({type:P.STRUCTURED_DATA,message:rC(o,a),data:nC(o,a)}):i(l)},noValidate:!0},{children:[o.map(((t,n)=>(0,Fw.jsx)(em,{disposition:t.disposition,inputMapper:(e,t)=>(0,Fw.jsx)(eC,{message:_y(Object.assign(Object.assign({},e),{isFirstInput:0===n&&0===t}))},void 0),inputsUid:t.inputs,markRequired:e.markRequired,responsiveLayout:e.responsiveLayout,samurai:e.samurai},t.uiKey))),(0,Fw.jsxs)(oC,{children:[e.hasSkipButton&&(0,Fw.jsx)(eb,Object.assign({onClick:t=>{t.preventDefault(),n({type:"button",message:e.skipButtonLabel,payload:"$skip"})}},{children:e.skipButtonLabel}),void 0),(0,Fw.jsx)(Xm,{children:e.submitButtonLabel||r.send},void 0)]},void 0)]}),void 0)}),void 0)};const aC=uo.div`
  &:not(:first-child) .custom-button {
    padding-left: 0.4rem;
  }

  &:not(:last-child) .custom-button {
    padding-right: 0.4rem;
  }

  .InputRating__button-label {
    filter: grayscale(100%);
    opacity: 0.44;
    transition: filter 0.25s, opacity 0.25s;
  }

  .custom-button[data-color='1'] {
    .InputRating__button-label {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .button {
    background-color: ${({theme:e})=>e.design.message_background_color_bot};
  }
`;function sC(e){const[n,r]=(0,t.useState)(-1),o=e.buttons,i=(0,t.useMemo)((()=>o.map((({label:e})=>t.createElement(Of,null,e)))),[o]);return t.createElement("div",{className:"InputRating"},t.createElement(Ik,null,e.help),t.createElement("div",{className:_o()({"field has-addons is-marginless is-inline-flex":!0,"is-cumulative":e.cumulative}),style:{maxWidth:"100%"}},o.map(((o,a,s)=>t.createElement(aC,{className:"InputRating__button control",key:o.payload},t.createElement(No,{className:_o()({"is-rounded":0===a||a===s.length-1}),"data-color":n>=a?"1":"0","data-key":a,onClick:()=>e.onSubmit(o),onMouseLeave:()=>r(-1),onMouseOver:()=>r(a),type:"button"},t.createElement("span",{className:_o()({"InputRating__button-label":!0,"is-size-3":s.length<=5,"is-size-6":s.length>5})},i[a])))))))}function lC({message:e,onSubmit:n}){const{text:r}=d(),o=e.getButtons();return t.createElement(sC,{buttons:o,onSubmit:t=>{if(e.isCumulative){const e=o.indexOf(t);n({type:"button",message:o.map((e=>e.label)).slice(0,e+1).join(""),payload:t.payload})}else n({type:"button",message:t.label,payload:t.payload})},cumulative:e.isCumulative,help:r.input_rating_help})}sC.propTypes={buttons:o().arrayOf(o().shape({label:o().string,payload:o().string})),cumulative:o().bool,help:o().string,onSubmit:o().func},sC.defaultProps={buttons:[],cumulative:!1,help:"",onSubmit:()=>{}},lC.propTypes={message:o().object,onSubmit:o().func},lC.defaultProps={message:null,onSubmit:()=>{}};const cC=uo.a`
  height: auto;
`;const uC=uo.div`
  position: relative;
  display:flex;
  flex-direction: column;

  @media ${zg} {
    width: calc(100% - 50px);
  }
  .columns {
    align-items: start;
    align-self: center;
    flex-grow:1;
  
    @media ${zg} {
      &.has-avatar, &:not(.has-arrows) {
        align-self: auto;
      }
      &.has-arrows.has-avatar {
        margin-left: -62px;
      }
    }

    .InputScale_Buttons__container {
        flex-direction: column;
        flex-grow:1;
        .InputScale_Buttons__row {
          display:flex;
          align-content: stretch;
        }
      }
  }

  .control {
    margin-left: 2px;
    margin-right: -1px;
    height: 100%;
    flex-grow: 1;
    border-radius: 0;
    border: 1px solid transparent;
    width: 50px;
    max-width: 50px;

    &:first-of-type {
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
    }

    &:last-of-type {
      border-top-right-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }
  
    &:hover {
      .InputScale__hoverelement {
        opacity: 1;
        transform: scaleY(1.5);
      }

      .InputScale__number {
        color: ${({theme:e})=>e.design.form_inputs_color};
      }
    }
  }

  .InputScale__number {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputScale__Tags {
    color: ${({theme:e})=>e.design.form_help_color};
    }
  }

  .InputScale__hoverelement {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,dC=uo.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  span:first-child {
    margin-right: 20px;
  }
  @media ${Wg} {
    span {
      white-space: normal;
      max-width: 100px;
    }
  }
`,fC=uo.div`
  top: 0;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
  transition: 0.2s ease-in-out transform, 0.2s ease-in-out opacity;
  box-shadow: 0 0 18px -3px rgba(0, 0, 0, 0.1);
`,pC=uo.span`
  z-index: 5;
  position: relative;
  font-size: 17px;
`,hC=uo.button`
  && {
    padding: 3;
    flex-grow: 0;
  }
  &.is-scale-arrow-right,
  &.is-scale-arrow-left {
    margin-top: 7%;
  }

  &.is-scale-arrow-right {
    margin-left: 10px;
  }
  &.is-scale-arrow-left {
    margin-right: 10px;
  }
`,mC=({onClick:e,isVisible:n,isRightArrow:r=!1})=>t.createElement(hC,{className:_o()({"is-scale-arrow-left":!r,"is-scale-arrow-right":r,"is-invisible":!n,"button has-text-weight-bold is-inverted":!0}),onClick:e,type:"button"},t.createElement(yf,{isRightArrow:r}));function bC({inputScaleRef:e,buttons:n,help:r,prevButtonHandler:o,nextButtonHandler:i,onSubmit:a,leftTag:s,rightTag:l,firstValue:c,lastValue:u}){const f=o||i,{design:{avatar_enabled:p}}=d();return t.createElement(uC,{className:"InputScale",ref:e},t.createElement(Ik,null,r),t.createElement("div",{className:_o()({"columns is-mobile":!0,"has-avatar":p,"has-arrows":f})},f&&t.createElement("div",{className:"column is-narrow"},t.createElement(mC,{isVisible:!!o,onClick:o})),t.createElement("div",{className:"column is-narrow InputScale_Buttons__container"},t.createElement("div",{className:"InputScale_Buttons__row "},n.map((e=>t.createElement("button",{className:_o()({"control button has-text-weight-bold is-medium":!0}),key:e.payload,onClick:()=>a(e),type:"button"},t.createElement(pC,{className:"InputScale__number"},e.label),t.createElement(fC,{className:"InputScale__hoverelement"}))))),t.createElement(dC,{className:"InputScale__Tags is-flex is-size-7 is-uppercase is-unselectable"},t.createElement("span",null,`${c} - ${s}`),t.createElement("span",null,`${u} - ${l}`))),f&&t.createElement("div",{className:"column is-narrow"},t.createElement(mC,{isRightArrow:!0,isVisible:!!i,onClick:i}))))}mC.propTypes={isVisible:o().bool,isRightArrow:o().bool,onClick:o().func},mC.defaultProps={isVisible:!1,isRightArrow:!1,onClick:null},bC.propTypes={buttons:o().arrayOf(o().shape({label:o().string,payload:o().string})),help:o().string,leftTag:o().string,onSubmit:o().func,rightTag:o().string,prevButtonHandler:o().func,nextButtonHandler:o().func,firstValue:o().string,lastValue:o().string,inputScaleRef:o().object},bC.defaultProps={buttons:[],help:"",leftTag:"",onSubmit:()=>{},rightTag:"",prevButtonHandler:null,nextButtonHandler:null,firstValue:null,lastValue:null,inputScaleRef:null};function gC({message:e,onSubmit:n}){const{text:r}=d(),o=(0,t.useMemo)((()=>e.getButtons()),[e]),i=(0,t.useRef)(null),[a,s]=(0,t.useState)(0);(0,t.useEffect)((()=>{i&&i.current&&s(((e,t)=>{const n=Math.floor(e/50),r=Math.floor((e-120)/50);return e>550?10:n>=t?n:r})(i.current.clientWidth,o.length))}),[i,o]);const{currentPageItems:l,prevButtonHandler:c,nextButtonHandler:u}=function(e,n){const[r,o]=(0,t.useState)(0),[i,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]);return(0,t.useEffect)((()=>{u(e.slice(r*n,r*n+n)),a(r>0),l((r+1)*n<e.length)}),[e,n,r]),(0,t.useEffect)((()=>{o(0)}),[n]),{currentPageItems:c,prevButtonHandler:i?()=>o((e=>e-1)):null,nextButtonHandler:s?()=>o((e=>e+1)):null}}(o,a);return t.createElement(bC,{inputScaleRef:i,buttons:l,leftTag:e.buttonsLeftTag,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help,rightTag:e.buttonsRightTag,prevButtonHandler:c,nextButtonHandler:u,firstValue:o[0].label,lastValue:o[o.length-1].label})}gC.propTypes={message:o().object,onSubmit:o().func},gC.defaultProps={message:null,onSubmit:()=>{}};var vC=__webpack_require__(2558);const yC=uo.form`
  width: 300px;
  max-width: 100%;

  @media ${Wg} {
    margin: 0 auto;
  }

  .InputStripe__card-element {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,wC=uo.div`
  position: static;
  font-size: $size-6;
`,_C=({isLoading:e,isDisabled:n,label:r,className:o})=>t.createElement(Co,{className:_o()({[o]:!0,"InputStripe__pay-button button":!0,"is-loading":e}),isDisabled:n,label:r,type:"submit"});_C.propTypes={className:o().string,label:o().string,isLoading:o().bool,isDisabled:o().bool},_C.defaultProps={className:"",label:"Pay",isLoading:!1,isDisabled:!1};const xC=uo(_C)`
  width: 100%;
  padding: 0.75rem;
  height: inherit;
`;function kC({amount:e,currency:n,email:r,setEmail:o,errorMessage:i,onInputChange:a,onSubmit:s,isLoading:l,isDisabled:c}){const u={base:{fontSize:"16px"}},{text:f}=d(),p=f.stripe_pay_button_label.replace(/@amount/i,`${n} ${e}`);return t.createElement(yC,{className:_o()({"InputStripe ":!0}),onSubmit:s},t.createElement("div",{className:"columns is-multiline"},t.createElement("div",{className:"column is-full"},t.createElement(Pf,{name:"email",onChange:o,placeholder:"Email",required:!0,type:"email",value:r})),t.createElement("div",{className:"column is-full"},t.createElement(vC.Ke,{className:"input is-block",disabled:l,onChange:a,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(vC.Oh,{className:"input is-block",disabled:l,onChange:a,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(vC._e,{className:"input is-block",disabled:l,onChange:a,style:u}))),t.createElement(xC,{isDisabled:c,isLoading:l,label:p,type:"submit"}),t.createElement(wC,{className:"help is-danger",role:"alert"},i))}kC.propTypes={errorMessage:o().string,currency:o().string,amount:o().oneOfType([o().string,o().number]),email:o().string,setEmail:o().func,onSubmit:o().func,onInputChange:o().func,isLoading:o().bool,isDisabled:o().bool},kC.defaultProps={errorMessage:"",currency:"USD",amount:0,email:"",setEmail:()=>{},onSubmit:()=>{},onInputChange:()=>{},isLoading:!1,isDisabled:!1};var EC=kC;function SC({amount:e,currency:n,elements:r,stripe:o,intent_secret:i,onSubmit:a}){const[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,f]=(0,t.useState)("");return t.createElement(EC,{amount:e,currency:n,email:d,errorMessage:s,isDisabled:!o,isLoading:c,onSubmit:e=>{e.preventDefault(),u(!0);const t=r.getElement("cardNumber");o.confirmCardPayment(i,{payment_method:{card:t,billing_details:{email:d}},receipt_email:d}).then((e=>{e.error?l(e.error.message):a(),u(!1)}))},setEmail:f})}SC.propTypes={currency:o().string,intent_secret:o().string,amount:o().oneOfType([o().string,o().number]),elements:o().object,stripe:o().object,onSubmit:o().func},SC.defaultProps={currency:"",intent_secret:"",amount:0,elements:null,stripe:null,onSubmit:()=>{}};var CC=(0,vC.kv)(SC);function OC({message:{stripe_key:e,intent_secret:n,currency:r,amount:o,payment_id:i},onSubmit:a}){const{document:l,window:c}=s(),[u,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{if(c.Stripe)d(c.Stripe(e));else{const t=l.createElement("script");t.type="text/javascript",t.src="https://js.stripe.com/v3/",t.onload=()=>{d(c.Stripe(e))},l.getElementsByTagName("head")[0].appendChild(t)}}),[e,l,c]),t.createElement(vC.vw,{stripe:u},t.createElement(vC.eK,null,t.createElement(CC,{intent_secret:n,currency:r,amount:o,onSubmit:()=>{a({type:"stripe",action:"submit",message:"Payment success",payload:{payment_id:i}})}})))}OC.propTypes={message:o().shape({stripe_key:o().string,currency:o().string,intent_secret:o().string,payment_id:o().number,amount:o().oneOfType([o().string,o().number])}),onSubmit:o().func},OC.defaultProps={message:{},onSubmit:()=>{}};const TC=uo.div`
  padding-bottom: 1.5rem;

  .custom-buttons {
    width: 50%;

    &:hover {
      .icon {
        transform: none;
      }
    }

    @media ${zg} {
      width: 50%;
    }

    .custom-button {
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      &:hover {
        .InputYesNo__button-label {
          opacity: 1 !important;
        }
      }

      &:not(:last-child) {
        margin-right: 25px !important;
      }
    }

    .icon {
      font-size: 25px !important;
      transform: scale(0.9);
    }
  }

  .buttons .button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .InputYesNo__button-label {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,PC=uo.span`
  position: absolute;
  bottom: -1.5rem;
  font-size: 0.8rem !important;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
`;function AC({help:e,buttons:n,onSubmit:r,buttonsRef:o,isAnimated:i}){return t.createElement(TC,{className:"InputYesNo"},t.createElement(Ik,null,e),t.createElement("div",{className:"field is-marginless"},t.createElement($g,{ref:o},n.map((e=>t.createElement(Io,{className:_o()({"is-rounded":!0,"is-animated":i}),key:e.payload,onClick:()=>r(e)},(e=>{const n=oe()(e,"attachment.type",null),r=oe()(e,"attachment.value",null);switch(n){case"icon":return t.createElement(Ok,{icon:r,isBig:!0});case"emoji":return t.createElement(Ck,null,r);case"image":return t.createElement(lv,{className:"is-overlay",figureStyle:{position:"absolute"},rounded:!0,src:r});default:return null}})(e),t.createElement(PC,{className:"InputYesNo__button-label is-size-7"},e.label)))))))}function IC({message:e,onSubmit:n}){const{text:r}=d(),o=e.getButtons();return t.createElement(Fk,{buttons:o},t.createElement(AC,{onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help}))}AC.propTypes={buttons:o().arrayOf(o().shape({label:o().string,payload:o().string,attachment:o().shape({type:o().string,value:o().string})})),help:o().string,onSubmit:o().func,isAnimated:o().bool,buttonsRef:o().object},AC.defaultProps={buttons:[],help:"",onSubmit:()=>{},isAnimated:!1,buttonsRef:null},IC.propTypes={message:o().object,onSubmit:o().func},IC.defaultProps={message:null,onSubmit:()=>{}};var NC={default:null,[A]:Sk,[I]:Bk,[N]:Yk,[D]:Qk,[M]:Gk,[j]:iE,[R]:nE,[L]:aE,[z]:RS,[F]:sE,[B]:pE,[U]:BS,[W]:iC,[H]:US,[V]:lC,[q]:function(){const{brand_name:e}=d(),n=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(e)}&utm_medium=landbot&utm_campaign=goodbye`;return t.createElement("div",{className:"InputReferral "},t.createElement(Ik,null,"Want to create your own? It's easy, beautiful and free"),t.createElement("div",{className:"buttons"},t.createElement(cC,{className:"button py-3 px-5",href:n,rel:"noopener noreferrer",target:"_blank"},t.createElement("span",{className:"icon is-size-4"},t.createElement(xf,null)),t.createElement("span",{className:"ml-3"},"Create a Landbot"))))},[Y]:gC,[Q]:OC,[G]:KS,[K]:GS,[X]:qS,[Z]:XS,[J]:IC};function DC({message:e}){const{customSubmitFn:n}=e,r=(o=e.inputType,NC[o]||NC.default);var o;const i=wv(),{setIsSubmitted:a,isSubmitted:s}=xk();return(0,t.useEffect)((()=>()=>{a(!1)}),[a]),t.createElement(t.Fragment,null,!s&&t.createElement(r,{onSubmit:e=>{let t=e;n&&"function"==typeof window[n]&&(t=window[n](e)),a(!0),i.events.emit(Tv,t)},message:e}))}DC.propTypes={message:o().object},DC.defaultProps={message:{}};const MC=uo(lv)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>Vg(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>Vg(e.theme.initial_vars.vertical_unit,25)};

    @media ${zg} {
      max-width: ${e=>Vg(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>Vg(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function jC({message:e,fileIndex:n,openModal:r}){const{url:o}=e.files[n];return t.createElement(Yx,{message:e,classNames:["is-inline-flex","mb-2"]},o&&t.createElement(MC,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:r,src:o}))}function RC({message:e,fileIndex:n}){const{url:r}=e.files[n];return t.createElement(Fx,{classNames:["is-inline-flex","mb-2"],message:e},t.createElement("p",{className:"content is-marginless"},t.createElement("a",{className:"button",href:r||null,rel:"noopener noreferrer",style:{justifyContent:"flex-start",maxWidth:"330px",textDecoration:"underline"},target:"_blank"},t.createElement("span",{className:"icon"},t.createElement(wf,{fill:"currentColor",fillRule:null,height:"24",rotate45:!1,viewBox:"0 0 24 24",width:"24"})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},r))))}function LC({message:e}){const n=ae.Z.appendUIKey(e.files).map(((n,r)=>"image"===n.type?t.createElement(jC,{key:n.uiKey,message:e,fileIndex:r}):t.createElement(RC,{key:n.uiKey,message:e,fileIndex:r})));return t.createElement("div",{className:"is-flex is-flex-direction-column is-align-items-flex-end"},n)}jC.propTypes={message:o().object,openModal:o().bool,fileIndex:o().number},jC.defaultProps={message:{},openModal:!0,fileIndex:null},RC.propTypes={message:o().object,fileIndex:o().number},RC.defaultProps={message:{},fileIndex:null},LC.propTypes={message:o().object},LC.defaultProps={message:{}};var FC={[P.BUTTON]:lk,[P.CALENDLY]:lk,[P.CARDS]:lk,[P.DIALOG]:Bx,[P.DOCUMENT]:Jx,[P.AUDIO]:Jx,[P.VIDEO]:Jx,[P.IFRAME]:tk,[P.IMAGE]:ik,[P.INPUT]:DC,[P.MULTI_QUESTION]:lk,[P.LOCATION]:nk,[P.MEDIA_DIALOG]:ak,[P.MULTIPLE_IMAGES]:sk,[P.REDIRECT]:fk,[P.REFERRAL]:vk,[P.STRIPE]:lk,[P.STRIPE_INTENT]:lk,[P.TEXT]:lk,[P.MESSAGEWITHINPUT]:yk,[P.MULTIPLE_FILES]:LC,[P.STRUCTURED_DATA]:lk,default:null};function BC(e){return t.createElement(lv,{className:_o()({[e.className]:!!e.className,Avatar:!0}),contain:e.shape===nn.ORIGINAL,imgClassName:_o()({[`is-${e.shape}`]:!0,"is-unselectable":!0}),rounded:"circle"===e.shape,size:e.size,src:e.src})}BC.propTypes={className:o().string,shape:o().string,size:o().number,src:o().string},BC.defaultProps={className:null,shape:"circle",size:35,src:""};const zC=uo(BC)`
  transform-origin: bottom;
  transform: scale(${e=>e.scale});

  .is-squared {
    border-radius: 3px;
  }

  .Media {
    width: 100%;
    height: 100%;
  }
`;zC.propTypes={scale:o().number},zC.defaultProps={scale:1};var UC=zC;function WC({message:e}){const n=Ag(),r=d(),{design:{avatar_shape:o,avatar_scale:i}}=r,a=e.getAvatar({config:r,agents:n});return t.createElement(t.Fragment,null,t.createElement(UC,{scale:i,shape:e.isAuthorAgent?nn.ROUNDED:o,src:a}))}WC.propTypes={message:o().object},WC.defaultProps={message:{}};const HC=uo.div`
  position: absolute;
  top: calc(
    100% + ${e=>Vg(e.theme.initial_vars.vertical_unit,1)}
  );
  left: 50%;
  height: ${e=>Vg(e.theme.initial_vars.vertical_unit,2)};
  transform: translateX(-50%) scale(0.6);
`;function VC(e){return t.createElement(HC,null,e.children)}function qC(e){let{leftContent:n,centerContent:r,rightContent:o,className:i,isAnimateMessagesOn:a,messageShape:s,hasLeftContent:l,isBubbleStyled:c}=e,u=Rk(e,["leftContent","centerContent","rightContent","className","isAnimateMessagesOn","messageShape","hasLeftContent","isBubbleStyled"]);const{isAuthorUser:d,isGhost:f,isEval:p,author:h,blockID:m,className:b,type:g,inputType:v}=u.message,{isStart:y,isEnd:w,isInputInline:_,isAvatarVisible:x}=u.groupProps;return t.createElement(t.Fragment,null,t.createElement(U_,{author:h,block:m,classNames:["Message__message","message",_&&!c&&"is-full-width-content"],containerClassNames:["Message",!!i&&i,b,r&&r.url&&"u-no-padding",d&&"is-reverse",y&&"is-start",w&&"is-end",p&&"is-eval",f&&"is-ghost",a&&"is-animate-messages-on",s===tn.TRANSPARENT&&"Message--is-shape-transparent",_&&c&&"is-medium-width"],inputType:v,type:g},l&&t.createElement(W_,{classNames:["Message__message-left","message-left","is-autoscroll-mutation-target",!c&&"is-hidden-mobile",_&&"is-hidden-small-device",!x&&"is-invisible"]},n),t.createElement(H_,{classNames:["Message__message-content","message-content"]},r),t.createElement(V_,{classNames:["Message__message-right","message-right"]},o)))}VC.propTypes={children:o().node},VC.defaultProps={children:null},qC.propTypes={leftContent:o().element,centerContent:o().element,rightContent:o().element,message:o().object,className:o().string,groupProps:o().shape({isEnd:o().bool,isStart:o().bool,isLastMessage:o().bool,isInputInline:o().bool,isAvatarVisible:o().bool}),isAnimateMessagesOn:o().bool,messageShape:o().string,hasLeftContent:o().bool,isBubbleStyled:o().bool},qC.defaultProps={leftContent:null,centerContent:null,rightContent:null,message:{},className:"",groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!0},isAnimateMessagesOn:!0,messageShape:tn.SEMI,hasLeftContent:!0,isBubbleStyled:!0};var YC=uo(qC)`
  transition: opacity 0.2s;

  @media ${zg} {
    .Avatar {
      height: 40px;
      width: ${e=>e.theme.avatar.width};
    }
  }

  /* Position date for bot message */
  .message-left .MessageDate {
    position: absolute;

    ${e=>Br`
        top: calc(100% + ${Vg(e.theme.initial_vars.horizontal_unit)});
      `};
  }

  .message-right .MessageDate {
    padding-left: 11px;
  }

  &.is-ghost {
    opacity: 0.6;
  }

  /* Animations */
  &.is-eval.is-animate-messages-on {
    .MessageBubble,
    .MessageMediaBubble {
      animation: message-bubble-in 0.3s ease-in-out;
    }

    .MessageBubble__content {
      opacity: 0;
      animation: message-content-in 0.6s ease-in-out 0.1s forwards;
    }
  }

  &.is-start.is-eval[data-author='bot'].is-animate-messages-on,
  &.is-start.is-eval[data-author='agent'].is-animate-messages-on {
    animation: message-avatar-left-in 0.2s ease-in-out forwards;
  }

  @media ${zg} {
    &[data-author='user'] .MessageDate {
      position: relative;
      margin-right: ${e=>Vg(e.theme.initial_vars.horizontal_unit,-5)};
    }
  }

  /* MULTIMEDIA MESSAGE */
  @media ${Wg} {
    &[data-type='image'],
    &[data-type='iframe'],
    &[data-type='media_dialog'] {
      figure {
        max-width: 279px;
      }
    }
  }

  &.Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='image'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='iframe'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='media_dialog'][data-author='bot'],
  .Message--is-shape-transparent[data-author='bot'] + &[data-author='user'] {
    /* Un mensaje de tipo imagen/iframe que es posterior a un mensaje de texto de bot tiene un espaciado mayor
     que entre los mensajes de tipo texto. Lo mismo para un mensaje de usuario. */
    margin-top: 20px;
  }

  &.Message--is-shape-transparent .InputButtons,
  &.Message--is-shape-transparent .InputButtonsMultiple,
  &.Message--is-shape-transparent .InputButtonsMultiSearch {
    margin-top: 15px;
  }

  &.Message--is-shape-transparent .MessageMediaBubble .image {
    margin-bottom: 20px;
  }

  /* Decorator only visible for group ending messages */
  &:not(.is-end) .MessageBubble__Decorator {
    display: none;
  }
`;const QC=uo.span`
  margin-right: 0.2rem;
  margin-top: 0.8rem;
  line-height: 36px;
  color: ${({theme:e})=>e.design.message_color_bot};

  + .Message__message-failed-retry-link,
  + .Message__message-failed-retry-link:hover {
    color: ${({theme:e})=>e.design.message_color_bot};
  }
`;function GC({hasRetry:e,retrying:n,onClickRetry:r,failedMessage:o,retryingMessage:i,retryButtonLabel:a}){return t.createElement(U_,{classNames:["Message__message","Message__message-failed","message"],containerClassNames:["Message","is-reverse","FailedMessage"]},t.createElement(QC,{className:"Message__message-failed-text"},n?i:o),e&&!n&&t.createElement(Co,{className:"Message__message-failed-retry-link is-link-style is-not-disabled",onClick:r},a))}function KC({retryCb:e}){const{text:{error_send_message:n,error_retry_button_label:r,error_retrying_message:o}}=d(),[i,a]=(0,t.useState)(!1);return t.createElement(GC,{hasRetry:"function"==typeof e,onClickRetry:()=>{a(!0);const t=()=>{setTimeout((()=>{a(!1)}),1e3)},n=e();n instanceof Promise?n.finally(t):t()},failedMessage:n,retryButtonLabel:r,retryingMessage:o,retrying:i})}GC.propTypes={hasRetry:o().bool,retrying:o().bool,onClickRetry:o().func,failedMessage:o().string,retryingMessage:o().string,retryButtonLabel:o().string},GC.defaultProps={hasRetry:!1,retrying:!1,onClickRetry:null,failedMessage:"We couldn't send this message",retryingMessage:"Retrying...",retryButtonLabel:"Try again"},KC.propTypes={retryCb:o().func},KC.defaultProps={retryCb:null};const XC=uo.span`
  display: none;
  width: ${({theme:{avatar:e}})=>e.width};
  text-align: center;
  line-height: 0.8rem;
  color: ${({theme:e})=>e.design.form_help_color};

  @media ${zg} {
    display: block;
  }
`,ZC=uo.b`
  font-weight: normal;
`;function JC({children:e}){return t.createElement(XC,{className:"MessageDate is-unselectable is-size-7"},t.createElement(ZC,{className:"MessageDate__text"},e))}function $C({timestamp:e}){return e?t.createElement(JC,null,_t.getMessageDate(e)):null}function eO({message:e,groupProps:n}){const{isLastMessage:r,isInputInline:o}=n,i=av(),{failed:a,retryCb:s,timestamp:l,rich_text:c,isEval:u,isWelcome:f,isGhost:p,isInputBubbleStyled:m,isAuthorUser:b}=e,g=o?e.getInputInlineMessageType():e.getMessageType(r),v=g?function(e){return FC[e]||FC.default}(g):null,y=!o||m,{design:{avatar_enabled:w,message_shape:_}}=d(),{has_messages_animation_on:x}=cx();!function(e,n){const r=h();(0,t.useEffect)((()=>{e&&n&&ae.Z.extractScriptsfromString(e).forEach((e=>{ae.Z.evalScriptTag(e,{context:r})}))}),[e,n,r])}(c,u);const k=Lx(e.isTyping,y),E=!e.hasInput&&k;return t.createElement(t.Fragment,null,v&&t.createElement(YC,{centerContent:t.createElement(v,{message:e}),groupProps:n,hasLeftContent:w&&!i,isAnimateMessagesOn:x&&r,isBubbleStyled:y,leftContent:!i&&w?t.createElement(t.Fragment,null,t.createElement(WC,{message:e}),E?t.createElement(VC,null,t.createElement(Jw,null)):!b&&!f&&t.createElement($C,{timestamp:l})):null,message:e,messageShape:_,rightContent:b&&!p?t.createElement($C,{timestamp:l}):null}),a&&!o&&t.createElement(KC,{retryCb:s}))}function tO({previousMessage:e,currentMessage:n,nextMessage:r,isInputInline:o,children:i}){const a=null===r,s=(0,t.useMemo)((()=>{const t=e&&oe()(e.raw,"samurai"),r=oe()(n.raw,"samurai");return!e||t!==r}),[n,e]),l=(0,t.useMemo)((()=>{const e=oe()(n.raw,"samurai"),t=r&&oe()(r.raw,"samurai");return a?o?n.isInputBubbleStyled:!n.hasInput||!n.isInputBubbleStyled||n.isAuthorAgent:t!==e}),[n,r,a,o]),c=(0,t.useMemo)((()=>o?n.isInputBubbleStyled:[P.IMAGE,P.IFRAME].includes(n.type)?l&&(!a||a&&!n.hasInput):l),[l,o,n,a]);return t.cloneElement(i,{groupProps:{isStart:s,isEnd:l,isAvatarVisible:c,isInputInline:o,isLastMessage:a}})}JC.propTypes={children:o().node},JC.defaultProps={children:null},$C.propTypes={timestamp:o().number},$C.defaultProps={timestamp:null},eO.propTypes={message:o().object,groupProps:o().shape({isEnd:o().bool,isStart:o().bool,isLastMessage:o().bool,isInputInline:o().bool,isAvatarVisible:o().bool})},eO.defaultProps={message:null,groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!1}};const nO={timestamp:o().number,samurai:o().oneOfType([o().number,o().string])};function rO(){const{messagesWrapper:e}=by();return t.createElement(ex,null,e.getSupportedMessages().map(((e,n,r)=>e.type===P.EVENT?t.createElement(lx,{key:e.key,message:e}):t.createElement(tO,{key:e.ui_key||e.key,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(eO,{message:e})))))}function oO(){const{messagesWrapper:e}=by(),t=jg(),n=e.getLastVisibleMessage(),r=e.getLastMessage(),{design:{back_button_visible:o}}=d();return o&&!t&&!n.isEmpty()&&!n.isRevisit&&!n.isWelcome&&!n.isAuthorUser&&!r.isFinishBot}tO.propTypes={previousMessage:o().shape(nO),currentMessage:o().shape(nO),nextMessage:o().shape(nO),isInputInline:o().bool},tO.defaultProps={previousMessage:null,currentMessage:null,nextMessage:null,isInputInline:!1};const iO=uo.div`
  /******************************
    Desktop version
  *******************************/
  display: none;

  @media ${zg} {
    display: block;
    padding-top: 20px;
  }

  /******************************
    Mobile version
  *******************************/
  &.BackButton--Mobile {
    @media ${zg} {
      display: none;
    }

    @media ${Wg} {
      display: block;
    }

    height: ${e=>e.theme.footer.mobile_height};
    z-index: ${({theme:e})=>e.zIndex.BackButton__Mobile};

    @media ${Hg} {
      transform: scale(0.8);
      transform-origin: left;
    }
  }

  /*******************************
    SubComponents Styles - Desktop
  ********************************/
  .BackButton__Button.custom-button {
    height: 30px;
    width: 86px;
    opacity: ${E.isIos?1:0};
    background-color: transparent;
    transition: opacity 0.25s ease-in-out, padding 0.25s ease-in-out;
    border-radius: 1rem;
    border-width: 0;

    &:hover {
      padding-right: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      border-width: 0;
      box-shadow: none;
    }

    ${!E.isIos&&"\n      .InputInline:hover & {\n        opacity: 1;\n      }\n    "}

    span {
      color: var(--form_help_color) !important;

      svg path {
        fill: var(--form_help_color) !important;
      }
    }
  }

  .BackButton__Label {
    text-transform: uppercase;
    font-size: ${e=>e.theme.font_sizes.size_7};
  }

  .BackButton__Icon {
    padding-right: 8px;
    font-size: ${e=>e.theme.font_sizes.size_7};

    .icon {
      transform: rotate(${E.isIos?"0":"180deg"});
      transition: transform 0.25s;
    }
    ${!E.isIos&&"\n      .InputInline:hover & .icon {\n        transform: rotate(0);\n      }\n    "}
  }

  /*******************************
    SubComponents Styles - Mobile
  ********************************/
  &.BackButton--Mobile {
    button.BackButton__Button.custom-button {
      background-color: white !important;
      box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
      height: 1.95rem;
      font-size: 13.5px;
      width: inherit;
      padding: 4px 16px;
      transition: transform 0.15s ease-in-out;
      border-radius: 4px;
      opacity: 1;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
          0 3px 5px -5px rgba(47, 49, 73, 0.35);
      }

      .BackButton__Label {
        color: #6a6b7c !important;
        text-transform: none;
        font-size: 13.5px;
      }

      .BackButton__Icon {
        padding-right: 12px;
        .icon {
          transform: none;
        }
        svg path {
          fill: #2f3149 !important;
          font-size: 13.5px;
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(0deg);
      }
    }
  }
`;function aO({label:e,onClick:n,containerClassName:r}){return t.createElement(iO,{className:_o()(["BackButton",r]),onClick:n},t.createElement(Io,{className:"BackButton__Button"},t.createElement("span",{className:"BackButton__Icon"},t.createElement("span",{className:"icon"},t.createElement(yf,null))),t.createElement("span",{className:"BackButton__Label is-unselectable"},e)))}function sO({containerClassName:e}){const{text:n}=d(),{setIsSubmitted:r}=xk(),o=wv();return t.createElement(aO,{onClick:()=>{r(!0),o.events.emit(Tv,{type:"button",message:n.back,payload:"#back"})},label:n.back,className:"BackButton",containerClassName:e})}aO.propTypes={label:o().string,onClick:o().func,containerClassName:o().string},aO.defaultProps={label:"Back",onClick:()=>{},containerClassName:null},sO.propTypes={containerClassName:o().string},sO.defaultProps={containerClassName:null};const lO=uo.p`
  margin-top: 1em;
  font-size: 14px;
  animation: 'fade-in 1.5s ease-out';
  color: ${({theme:e})=>e.design.form_help_color};

  .GdprLink__link {
    margin-left: 0.2rem;
    text-decoration: underline;
  }
`;function cO(e){return t.createElement(lO,{className:"GdprLink"},e.text,t.createElement("a",{className:"GdprLink__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkText))}cO.propTypes={link:o().string,text:o().string,linkText:o().string},cO.defaultProps={link:"",text:"",linkText:""};const uO=uo(z_)`
  min-height: ${e=>e.theme.input.mobile_height};

  .input-small-header {
    margin-top: ${e=>Vg(2*e.theme.initial_vars.vertical_unit)};
  }

  @media ${zg} {
    min-height: ${e=>e.theme.input.height};
  }

  .Chat--hasInputFixed & {
    min-height: 0;
  }
`;function dO({children:e,inputInlineRef:n}){return t.createElement(uO,{classNames:["InputInline","is-relative","is-autoscroll-mutation-target"],containerRef:n},e)}function fO({children:e}){return t.createElement(q_,null,t.createElement("div",{className:"columns is-centered"},t.createElement(Rh,{shape:tn.SQUARED},e)))}function pO({isConnectionOk:e,inputInlineRef:n}){const r=jg(),{messagesWrapper:o}=by(),i=av(),[a,s]=o.getLast2VisibleMessages(),{hasGDPR:l,gdpr:c}=s,{text:u,design:{avatar_enabled:f}}=d(),p=oO();return t.createElement(dO,{inputInlineRef:n},r?null:t.createElement(t.Fragment,null,t.createElement(tO,{previousMessage:a,currentMessage:s,nextMessage:null,isInputInline:!0},t.createElement(eO,{message:s})),e&&p&&t.createElement(Y_,{hasLeftColumn:f},t.createElement(sO,null)),l&&!i&&t.createElement(Y_,{hasLeftColumn:f},t.createElement(cO,{link:c.link,linkText:c.linkText,text:c.text}))),!e&&t.createElement(fO,null,u.error_inline_connection_message))}dO.propTypes={children:o().node,inputInlineRef:o().object},dO.defaultProps={children:null,inputInlineRef:null},fO.propTypes={children:o().node.isRequired},pO.propTypes={isConnectionOk:o().bool,inputInlineRef:o().object},pO.defaultProps={isConnectionOk:!0,inputInlineRef:null};const hO=uo.div`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`;function mO({bodyRef:e}){const{isFetching:r,status:o}=function(){const[e,n]=(0,t.useState)(!0),[r,o]=(0,t.useState)(!0),i=Xv(),a=wv(),{showNotification:s,closeNotification:l}=ty(),{setPreviousSessionMessages:c,newMessage:u,setMessages:f}=by(),{text:p,revisit_off:h,revisit:m,warning_connection:b,offline_detect_database:g}=d();return(0,t.useEffect)((()=>{i.init().then((e=>{!e.isNewSession&&!h&&fe.getAssignationAgentID(Cy(e.messages))<=0&&m.length>0?(c(e.messages),m.forEach((e=>u(fe.withRevisit(e))))):f(e.messages)})).catch(console.error).finally((()=>n(!1)))}),[]),(0,t.useEffect)((()=>{const t=e=>{e!==r&&(e?l():b&&s(p.error_offline_message,{lastAction:Zv,hasCloseButton:!0}),o(e))};return!1===e&&g&&a.events.on(_v,t),()=>a.events.off(_v,t)}),[e,r,a.events,l,s,o,p.error_offline_message,b,g]),{isFetching:e,status:r}}(),i=function(){const{window:e}=s(),[n,r]=(0,t.useState)(!0),{showNotification:o,closeNotification:i}=ty(),{text:a,warning_connection:l,offline_detect_navigator:c}=d();return(0,t.useEffect)((()=>{const t=()=>{r(!1),l&&o(a.error_offline_message,{lastAction:Zv,hasCloseButton:!0})};return c&&e.addEventListener("offline",t),()=>{e.removeEventListener("offline",t)}}),[e,o,l,a.error_offline_message,c]),(0,t.useEffect)((()=>{const t=()=>{r(!0),i()};return c&&e.addEventListener("online",t),()=>{e.removeEventListener("online",t)}}),[e,i,c]),c||n}(),{hasHeader:a,hideHeader:l}=Fg(),c=Lg(),u=jg(),f=(0,t.useRef)(null),p=(0,t.useRef)(null),{lastTimestamp:h}=by();!function(){const{document:e,window:n}=s();(0,t.useEffect)((()=>{const t=new Nw({document:e,filterSelector:".Message.is-eval:not(.is-start)",mutatingElement:e.querySelector(".Chat"),targetSelector:".message-left",window:n});return()=>t.destroy()}),[e,n])}();return function(e,r,o,i){const a=kg(),{document:l}=s();(0,t.useEffect)((()=>{const t=a===n.NATIVE?l.scrollingElement:l.querySelector(".js-auto-scroll"),s=new Dw({mutatingElement:l.querySelector(".js-new-message-mutating-element"),scrollingElement:t,inputInlineRef:e,spacerRef:r,bodyRef:o,isModeNative:a===n.NATIVE,autoScrollHandler:i});return()=>s.destroy()}),[l,a,e,r,o,i])}(f,p,e,function(){const{document:e}=s(),{design:r}=d(),o=kg(),[i,a]=(0,t.useState)(null),l=o===n.NATIVE?e.scrollingElement:e.querySelector(".js-auto-scroll");return(0,t.useEffect)((()=>(r.header_visible&&l&&!i&&a(new Rw({scrollingElement:l,header:e.querySelector(".Header"),body:e.querySelector(".Body")})),()=>{i&&i.destroy()})),[e,r.header_visible,l,i]),null==i?void 0:i.getAutoScrollHandler()}()),function(){const{document:e,iframe:n,window:r}=s();(0,t.useEffect)((()=>{const t=new Lw({document:e,iframe:n,selector:".js-auto-focus",window:r});return()=>t.destroy()}),[e,n,r])}(),t.createElement(Yw,{hasAgentAssigned:u,hasHeader:a||l,hasPersistentMenu:c,isConnectionOk:i&&o},r?t.createElement(Gw,null,t.createElement(Jw,null)):t.createElement(t.Fragment,null,t.createElement(Uw,null),t.createElement(rO,null),t.createElement(Q_,null),t.createElement(pO,{inputInlineRef:f,isConnectionOk:i&&o}),t.createElement($_,{hasInputFixed:u,spacerRef:p})),t.createElement(hO,{className:"js-new-message-mutating-element"},h))}mO.propTypes={bodyRef:o().object},mO.defaultProps={bodyRef:null};const bO=uo.div`
  && {
    z-index: ${({theme:e})=>e.zIndex.body};
    overflow: hidden;

    ${()=>kg()===n.NATIVE?"height: auto;\n         overflow-y: visible;\n         min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function gO({className:e,bodyRef:n,children:r}){return t.createElement(bO,{className:_o()({Body:!0,[e]:!!e}),ref:n},r)}function vO(){const e=(0,t.useRef)(null);return t.createElement(gO,{bodyRef:e},t.createElement(mO,{bodyRef:e}))}gO.propTypes={className:o().string,bodyRef:o().object,children:o().node},gO.defaultProps={className:null,bodyRef:null,children:null};const yO=uo.footer`
  z-index: ${({theme:e})=>e.zIndex.footer}; /* The input icon and the input fixed have a (z-index: 4) */
  bottom: 0;
  max-height: ${e=>e.theme.footer.max_height.desktop};
  width: 100%;
  pointer-events: none;
  a, button, input, textarea {
    pointer-events: auto;
  }

  ${()=>kg()===n.NATIVE?"position: fixed;\n         left: 0;\n      ":"position: absolute;"}

  @media ${Wg} {
    max-height: ${e=>e.theme.footer.max_height.mobile};
    background-color: rgba(0, 0, 0, 0.02);
  }

  ${({hasInputFixed:e})=>e&&Br`
      max-height: ${e=>e.theme.footer.max_height.desktop_hto};

      @media ${Wg} {
        max-height: ${e=>e.theme.footer.max_height.mobile_hto};
      }
    `}
`;function wO({hasInputFixed:e,isConnectionOk:n,children:r}){return t.createElement(yO,{className:_o()({Footer:!0,"Footer--hasInputFixed":e,"are-disabled":!n}),hasInputFixed:e},r)}wO.propTypes={hasInputFixed:o().bool,isConnectionOk:o().bool,children:o().node},wO.defaultProps={hasInputFixed:!1,isConnectionOk:!0,children:null};var _O=t.createElement("svg",{viewBox:"0 0 128 28",width:"63px",height:"26px",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,"Landbot"),t.createElement("g",{id:"Symbols",stroke:"none",fill:"none"},t.createElement("path",{d:"M12.98,20.1 L12.98,25 L0.345,25 L0.345,0.5 L6.015,0.5 L6.015,20.1 L12.98,20.1 Z M23.725,20.87 C24.3316697,20.87 24.8799975,20.7533345 25.37,20.52 C25.8600025,20.2866655 26.2799983,19.9775019 26.63,19.5925 C26.9800017,19.2074981 27.2541657,18.7525026 27.4525,18.2275 C27.6508343,17.7024974 27.75,17.1483362 27.75,16.565 C27.75,15.9816637 27.6508343,15.4333359 27.4525,14.92 C27.2541657,14.4066641 26.9800017,13.9516686 26.63,13.555 C26.2799983,13.1583314 25.8600025,12.8433345 25.37,12.61 C24.8799975,12.3766655 24.3316697,12.26 23.725,12.26 C23.1183303,12.26 22.5700025,12.3766655 22.08,12.61 C21.5899976,12.8433345 21.1700017,13.1583314 20.82,13.555 C20.4699983,13.9516686 20.1958343,14.4066641 19.9975,14.92 C19.7991657,15.4333359 19.7,15.9816637 19.7,16.565 C19.7,17.1483362 19.7991657,17.7024974 19.9975,18.2275 C20.1958343,18.7525026 20.4699983,19.2074981 20.82,19.5925 C21.1700017,19.9775019 21.5899976,20.2866655 22.08,20.52 C22.5700025,20.7533345 23.1183303,20.87 23.725,20.87 Z M33.105,8.13 L33.105,25 L27.75,25 L27.75,22.62 C27.5399989,23.0166686 27.2600018,23.384165 26.91,23.7225 C26.5599983,24.060835 26.1575023,24.3524988 25.7025,24.5975 C25.2474977,24.8425012 24.7516693,25.0408326 24.215,25.1925 C23.6783307,25.3441674 23.1416694,25.42 22.605,25.42 C21.3916606,25.42 20.2775051,25.1925023 19.2625,24.7375 C18.2474949,24.2824977 17.378337,23.6641706 16.655,22.8825 C15.931663,22.1008294 15.3716687,21.1675054 14.975,20.0825 C14.5783314,18.9974946 14.38,17.8250063 14.38,16.565 C14.38,15.3049937 14.5783314,14.1325054 14.975,13.0475 C15.3716687,11.9624946 15.931663,11.0291706 16.655,10.2475 C17.378337,9.46582942 18.2474949,8.84750228 19.2625,8.3925 C20.2775051,7.93749773 21.3916606,7.71 22.605,7.71 C23.1416694,7.71 23.6783307,7.78583257 24.215,7.9375 C24.7516693,8.08916743 25.2474977,8.29333205 25.7025,8.55 C26.1575023,8.80666795 26.5599983,9.10999825 26.91,9.46 C27.2600018,9.81000175 27.5399989,10.1716648 27.75,10.545 L27.75,8.13 L33.105,8.13 Z M35.415,8.13 L40.77,8.13 L40.77,10.58 C41.236669,9.66999545 41.9424953,8.96416917 42.8875,8.4625 C43.8325047,7.96083083 44.9699933,7.71 46.3,7.71 C47.3966722,7.71 48.3416627,7.87916497 49.135,8.2175 C49.9283373,8.55583503 50.558331,9.0283303 51.025,9.635 C51.5616693,10.2883366 51.9174991,11.0408291 52.0925,11.8925 C52.2675009,12.7441709 52.355,13.7766606 52.355,14.99 L52.355,25 L47,25 L47,16.355 C47,15.1416606 46.7841688,14.1558371 46.3525,13.3975 C45.9208312,12.6391629 45.1450056,12.26 44.025,12.26 C42.9283279,12.26 42.1116693,12.6449961 41.575,13.415 C41.0383307,14.1850038 40.77,15.2233268 40.77,16.53 L40.77,25 L35.415,25 L35.415,8.13 Z M63.2062281,20.87 C63.8128978,20.87 64.3612256,20.7533345 64.8512281,20.52 C65.3412305,20.2866655 65.7612263,19.9775019 66.1112281,19.5925 C66.4612298,19.2074981 66.7353937,18.7525026 66.9337281,18.2275 C67.1320624,17.7024974 67.2312281,17.1483362 67.2312281,16.565 C67.2312281,15.9816637 67.1320624,15.4333359 66.9337281,14.92 C66.7353937,14.4066641 66.4612298,13.9516686 66.1112281,13.555 C65.7612263,13.1583314 65.3412305,12.8433345 64.8512281,12.61 C64.3612256,12.3766655 63.8128978,12.26 63.2062281,12.26 C62.5995584,12.26 62.0512305,12.3766655 61.5612281,12.61 C61.0712256,12.8433345 60.6512298,13.1583314 60.3012281,13.555 C59.9512263,13.9516686 59.6770624,14.4066641 59.4787281,14.92 C59.2803937,15.4333359 59.1812281,15.9816637 59.1812281,16.565 C59.1812281,17.1483362 59.2803937,17.7024974 59.4787281,18.2275 C59.6770624,18.7525026 59.9512263,19.2074981 60.3012281,19.5925 C60.6512298,19.9775019 61.0712256,20.2866655 61.5612281,20.52 C62.0512305,20.7533345 62.5995584,20.87 63.2062281,20.87 Z M67.2312281,22.62 C67.021227,23.0166686 66.7412298,23.384165 66.3912281,23.7225 C66.0412263,24.060835 65.6387303,24.3524988 65.1837281,24.5975 C64.7287258,24.8425012 64.2328974,25.0408326 63.6962281,25.1925 C63.1595587,25.3441674 62.6228974,25.42 62.0862281,25.42 C60.8728887,25.42 59.7587331,25.1925023 58.7437281,24.7375 C57.728723,24.2824977 56.859565,23.6641706 56.1362281,22.8825 C55.4128911,22.1008294 54.8528967,21.1675054 54.4562281,20.0825 C54.0595594,18.9974946 53.8612281,17.8250063 53.8612281,16.565 C53.8612281,15.3049937 54.0595594,14.1325054 54.4562281,13.0475 C54.8528967,11.9624946 55.4128911,11.0291706 56.1362281,10.2475 C56.859565,9.46582942 57.728723,8.84750228 58.7437281,8.3925 C59.7587331,7.93749773 60.8728887,7.71 62.0862281,7.71 C62.6228974,7.71 63.1595587,7.78583257 63.6962281,7.9375 C64.2328974,8.08916743 64.7287258,8.29333205 65.1837281,8.55 C65.6387303,8.80666795 66.0412263,9.10999825 66.3912281,9.46 C66.7412298,9.81000175 67.021227,10.1716648 67.2312281,10.545 L67.2312281,0.5 L72.5862281,0.5 L72.5862281,25 L67.2312281,25 L67.2312281,22.62 Z M80.3740351,25 L75.0190351,25 L75.0190351,0.5 L80.3740351,0.5 L80.3740351,10.545 C80.5840361,10.1716648 80.8640333,9.81000175 81.2140351,9.46 C81.5640368,9.10999825 81.9723661,8.80666795 82.4390351,8.55 C82.9057041,8.29333205 83.4015325,8.08916743 83.9265351,7.9375 C84.4515377,7.78583257 84.9940323,7.71 85.5540351,7.71 C86.7673745,7.71 87.88153,7.93749773 88.8965351,8.3925 C89.9115402,8.84750228 90.7806981,9.46582942 91.5040351,10.2475 C92.227372,11.0291706 92.7873664,11.9624946 93.1840351,13.0475 C93.5807037,14.1325054 93.7790351,15.3049937 93.7790351,16.565 C93.7790351,17.8250063 93.5807037,18.9974946 93.1840351,20.0825 C92.7873664,21.1675054 92.227372,22.1008294 91.5040351,22.8825 C90.7806981,23.6641706 89.9115402,24.2824977 88.8965351,24.7375 C87.88153,25.1925023 86.7673745,25.42 85.5540351,25.42 C84.9940323,25.42 84.4515377,25.3441674 83.9265351,25.1925 C83.4015325,25.0408326 82.9057041,24.8425012 82.4390351,24.5975 C81.9723661,24.3524988 81.5640368,24.060835 81.2140351,23.7225 C80.8640333,23.384165 80.5840361,23.0166686 80.3740351,22.62 L80.3740351,25 Z M84.4340351,20.87 C85.0173713,20.87 85.5540326,20.7533345 86.0440351,20.52 C86.5340375,20.2866655 86.9540333,19.9775019 87.3040351,19.5925 C87.6540368,19.2074981 87.9282008,18.7525026 88.1265351,18.2275 C88.3248694,17.7024974 88.4240351,17.1483362 88.4240351,16.565 C88.4240351,15.9816637 88.3248694,15.4333359 88.1265351,14.92 C87.9282008,14.4066641 87.6540368,13.9516686 87.3040351,13.555 C86.9540333,13.1583314 86.5340375,12.8433345 86.0440351,12.61 C85.5540326,12.3766655 85.0173713,12.26 84.4340351,12.26 C83.8273654,12.26 83.2732043,12.3766655 82.7715351,12.61 C82.2698659,12.8433345 81.8440368,13.1583314 81.4940351,13.555 C81.1440333,13.9516686 80.8698694,14.4066641 80.6715351,14.92 C80.4732008,15.4333359 80.3740351,15.9816637 80.3740351,16.565 C80.3740351,17.1483362 80.4732008,17.7024974 80.6715351,18.2275 C80.8698694,18.7525026 81.1440333,19.2074981 81.4940351,19.5925 C81.8440368,19.9775019 82.2698659,20.2866655 82.7715351,20.52 C83.2732043,20.7533345 83.8273654,20.87 84.4340351,20.87 Z M104.645614,25.455 C103.19894,25.455 101.89812,25.2158357 100.743114,24.7375 C99.5881083,24.2591643 98.6081181,23.617504 97.803114,22.8125 C96.99811,22.007496 96.3797829,21.0683387 95.948114,19.995 C95.5164452,18.9216613 95.300614,17.7783394 95.300614,16.565 C95.300614,15.3516606 95.5164452,14.2083387 95.948114,13.135 C96.3797829,12.0616613 96.99811,11.122504 97.803114,10.3175 C98.6081181,9.51249597 99.5881083,8.87083573 100.743114,8.3925 C101.89812,7.91416428 103.19894,7.675 104.645614,7.675 C106.115621,7.675 107.428108,7.91416428 108.583114,8.3925 C109.73812,8.87083573 110.71811,9.51249597 111.523114,10.3175 C112.328118,11.122504 112.946445,12.0616613 113.378114,13.135 C113.809783,14.2083387 114.025614,15.3516606 114.025614,16.565 C114.025614,17.7783394 113.809783,18.9216613 113.378114,19.995 C112.946445,21.0683387 112.328118,22.007496 111.523114,22.8125 C110.71811,23.617504 109.73812,24.2591643 108.583114,24.7375 C107.428108,25.2158357 106.115621,25.455 104.645614,25.455 Z M104.645614,20.87 C105.252284,20.87 105.806445,20.7591678 106.308114,20.5375 C106.809783,20.3158322 107.235612,20.0066686 107.585614,19.61 C107.935616,19.2133313 108.20978,18.7583359 108.408114,18.245 C108.606448,17.7316641 108.705614,17.1716697 108.705614,16.565 C108.705614,15.9816637 108.606448,15.4275026 108.408114,14.9025 C108.20978,14.3774974 107.935616,13.9225019 107.585614,13.5375 C107.235612,13.1524981 106.809783,12.8433345 106.308114,12.61 C105.806445,12.3766655 105.252284,12.26 104.645614,12.26 C104.038944,12.26 103.490616,12.3766655 103.000614,12.61 C102.510612,12.8433345 102.090616,13.1524981 101.740614,13.5375 C101.390612,13.9225019 101.122282,14.3774974 100.935614,14.9025 C100.748946,15.4275026 100.655614,15.9816637 100.655614,16.565 C100.655614,17.1716697 100.748946,17.7316641 100.935614,18.245 C101.122282,18.7583359 101.390612,19.2133313 101.740614,19.61 C102.090616,20.0066686 102.510612,20.3158322 103.000614,20.5375 C103.490616,20.7591678 104.038944,20.87 104.645614,20.87 Z M127.018596,20.905 L127.018596,25 L126.588874,25.0680556 C126.280356,25.1121297 125.927765,25.1536109 125.531096,25.1925 C124.936094,25.2508336 124.241934,25.28 123.448596,25.28 C122.818593,25.28 122.1536,25.2333338 121.453596,25.14 C120.753593,25.0466662 120.106099,24.8075019 119.511096,24.4225 C118.916094,24.0374981 118.426098,23.442504 118.041096,22.6375 C117.656095,21.832496 117.463596,20.730007 117.463596,19.33 L117.463596,12.12 L114.803596,12.12 L114.803596,8.13 L117.463596,8.13 L117.463596,3.125 L122.783596,3.125 L122.783596,8.13 L126.633596,8.13 L126.633596,12.12 L122.783596,12.12 L122.783596,18.14 C122.783596,18.7700031 122.841929,19.2716648 122.958596,19.645 C123.075264,20.0183352 123.238595,20.3041657 123.448596,20.5025 C123.658598,20.7008343 123.903595,20.8349996 124.183596,20.905 C124.463598,20.9750004 124.766928,21.01 125.093596,21.01 C125.420265,21.01 125.758595,21.0041667 126.108596,20.9925 C126.458598,20.9808333 126.761929,20.9516669 127.018596,20.905 Z",id:"Landbot",fill:"#333366"})));const xO=uo.div`
  font-size: 13.5px;
  color: #6a6b7c;
  line-height: 1;
`,kO=uo(xO)`
  path {
    fill: #2f3149;
  }
  svg {
    margin: 2px 0 0 6px;
  }
`,EO=uo.a`
  background: white;
  box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
  padding: 8px 15px;
  border-radius: 3px;
  height: 1.95rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
      0 3px 5px -5px rgba(47, 49, 73, 0.35);
    transform: translateY(-1px);
  }

  /* stylelint-disable */
  &[data-tooltip]::before {
    font-family: var(--font_family), BlinkMacSystemFont, -apple-system, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    background-color: #2f3048;
    font-size: 13px;
  }
  /* stylelint-enable */

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    margin-top: -9px;
  }

  &,
  &[data-tooltip]::after {
    border-top-color: #2f2f47;
  }

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    transition: opacity 0.25s ease-in-out;
    transition-delay: 0.35s;
  }
`,SO=uo.div`
  @media ${Wg} {
    margin: 0 auto;
    max-width: 700px;
    text-align: left;
    height: ${e=>e.theme.footer.mobile_height};
  }
`,CO=uo.div`
  width: 100%;
  text-align: center;
  z-index: ${({theme:e})=>e.zIndex.Branding};

  @media ${Wg} {
    margin: 0 auto;
    width: auto;
  }
  @media ${Hg} {
    transform: scale(0.8);
  }

  ${({hasInputFixed:e})=>e?Br`
          margin-bottom: 10px;
        `:Br`
          margin-bottom: 20px;
        `}
`;function OO(e){return t.createElement(CO,{className:_o()({Branding:!0,"has-tooltip-right":e.hasToolTipRight,"has-input-fixed":e.hasInputFixed}),hasInputFixed:e.hasInputFixed},t.createElement(SO,{className:"Branding__Container is-inline-flex"},t.createElement(EO,{className:"button Branding__Button",href:e.referralUrl,target:"_blank",rel:"noopener noreferrer","data-tooltip":e.isMobile?null:"Build a chatbot with no code 🤖"},t.createElement(xO,{className:"Branding__Text Branding__TextItem"},"Made with"),t.createElement(kO,{className:"Branding__Logo Branding__TextItem"},_O),t.createElement("span",{className:"Branding__Background"}))))}function TO({hasInputFixed:e,hasToolTipRight:n}){const{brand_name:r}=d(),o=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(r)}&utm_medium=landbot&utm_campaign=header`;return t.createElement(OO,{referralUrl:o,hasToolTipRight:n,hasInputFixed:e,isMobile:E.isMobile})}OO.propTypes={referralUrl:o().string,hasToolTipRight:o().bool,hasInputFixed:o().bool,isMobile:o().bool},OO.defaultProps={referralUrl:null,hasToolTipRight:!1,hasInputFixed:!1,isMobile:!1},TO.propTypes={hasInputFixed:o().bool,hasToolTipRight:o().bool},TO.defaultProps={hasInputFixed:!1,hasToolTipRight:!1};const PO=uo.div`
  z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
  position: relative;
  bottom: 0;
  text-align: center;
  background-color: #ffffff;
  margin: 0 auto;
  width: 100%;

  @media ${zg} {
    min-height: 100px;
    background-color: transparent;
    bottom: 4px;
  }

  @media ${Wg} {
    box-shadow: 0 -1px 1px 0 rgba(47, 49, 73, 0.08);
    max-height: 96px;
  }

  .InputFullWidth__Container {
    position: relative;
  }

  .InputFullWidth__Content {
    z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    position: relative;

    @media ${zg} {
      height: auto;
      min-height: 100%;
    }

    .Input--Text,
    .Input--Text .field {
      height: 100%;
    }

    > input,
    > textarea {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  .InputText__SendButton {
    @media ${Wg} {
      height: 60px !important;
    }
  }

  .InputText {
    overflow: visible;
    position: relative;
    box-shadow: 0 0 60px -17px rgba(0, 0, 0, 0.07);
  }

  .InputText textarea {
    line-height: 24px;
    background: $white;
    max-height: 96px !important;

    @media ${Wg} {
      padding: 1rem 7.3rem 1rem 1.25rem;
      border: hidden;
    }
  }

  .InputText textarea:not(:focus) {
    border-color: transparent;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2) !important;

    @media ${Wg} {
      box-shadow: none !important;
    }
  }

  .hu-images-preview__container {
    border: hidden;

    @media ${zg} {
      height: 60px;
      max-height: 96px;
      border-radius: 4px;
      border: 2px solid var(--form_inputs_border_color);
      background-color: var(--textarea_background);
    }
  }

  .hu-images-preview {
    flex: 1;
    display: flex;
    padding: 4px;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
  }

  .thumbnail {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-size: cover;
    position: relative;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .thumbnail-button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
  }
`;function AO(e){return t.createElement(PO,{className:_o()({InputFullWidth:!0,"InputFullWidth--is-Active":e.isactive})},t.createElement("div",{className:"InputFullWidth__Container"},t.createElement("div",{className:"InputFullWidth__Content"},e.input)))}AO.propTypes={isactive:o().bool,input:o().object},AO.defaultProps={isactive:o().false,input:null};const IO=1e7;function NO({images:e,removeImage:n}){return t.createElement("div",{className:"hu-images-preview__container"},t.createElement("div",{className:"hu-images-preview"},e.map(((e,r)=>t.createElement("div",{className:"thumbnail",key:e.name,style:e.url&&{backgroundImage:`url(${e.url})`}},t.createElement("div",{className:"thumbnail-button"},t.createElement("svg",{className:"hu-fill_accent",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",x:"3650",y:"3688",viewBox:"0 0 610 610",onClick:()=>n(r)},t.createElement("path",{d:"M387.128,170.748L306,251.915l-81.128-81.167l-54.124,54.124L251.915,306l-81.128,81.128l54.085,54.086L306,360.086 l81.128,81.128l54.086-54.086L360.086,306l81.128-81.128L387.128,170.748z M522.38,89.62 c-119.493-119.493-313.267-119.493-432.76,0c-119.493,119.493-119.493,313.267,0,432.76 c119.493,119.493,313.267,119.493,432.76,0C641.873,402.888,641.873,209.113,522.38,89.62z M468.295,468.295 c-89.62,89.619-234.932,89.619-324.551,0c-89.62-89.62-89.62-234.932,0-324.551c89.62-89.62,234.931-89.62,324.551,0 C557.914,233.363,557.914,378.637,468.295,468.295z"}))))))))}NO.propTypes={images:o().arrayOf(o().object),removeImage:o().func},NO.defaultProps={images:[],removeImage:()=>{}};const DO=uo.button`
  margin: 0 6px;
  padding-top: 1em;
`,MO=uo.ul`
  top: 0;
  right: 51px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  @media ${Wg} {
    right: 45px;
  }
`,jO=uo.button`
  border: 0;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;

  svg path {
    fill: var(--message_color_bot);
  }
`,RO=uo(jO)`
  font-size: 1.3rem;
`;function LO({onSelectEmoji:e,uploadFile:n,hasAttachButton:r}){const{document:o}=s(),i=(0,t.useRef)(null),[a,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(!1),d=e=>{i.current.contains(e.target)||(u(!1),o.removeEventListener("click",d))};return t.createElement(t.Fragment,null,t.createElement(MO,{className:"inputaddons"},r&&t.createElement("li",null,t.createElement(BO,{uploadFile:n})),t.createElement("li",null,c&&!a&&t.createElement(DO,{className:"button is-loading is-transparent"})||t.createElement(zO,{onClick:e=>(async()=>{u(!0);const e=await Promise.all([__webpack_require__.e(949),__webpack_require__.e(640)]).then(__webpack_require__.bind(__webpack_require__,4644));l(e.default),o.addEventListener("click",d)})()}))),t.createElement("div",{className:"emoji-mart__container",ref:i},c&&a&&t.createElement(a,{onSelect:t=>e(t),style:{position:"absolute",bottom:"62px",right:"0px"}})))}LO.propTypes={hasAttachButton:o().bool,onSelectEmoji:o().func,uploadFile:o().func},LO.defaultProps={hasAttachButton:!1,onSelectEmoji:()=>{},uploadFile:()=>{}};const FO=uo.input`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`,BO=({uploadFile:e})=>t.createElement(jO,{className:"inputaddons__addonitem inputaddons__filebutton is-relative",type:"button"},t.createElement(FO,{onChange:t=>e(t.target.files[0]),type:"file"}),t.createElement(wf,null));BO.propTypes={uploadFile:o().func.isRequired};const zO=({onClick:e})=>t.createElement(RO,{className:"inputaddons__addonitem inputaddons__emojisbutton",onClick:e,type:"button"},t.createElement("span",{"aria-label":"slightly_smiling_face",role:"img"},t.createElement(pf,null)));zO.propTypes={onClick:o().func.isRequired};const UO=uo.button`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media ${Wg} {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
}
`;function WO({onClick:e,disabled:n,children:r,hasError:o}){let i;return i=r||(o?t.createElement("span",{"aria-label":"⚠️",className:"is-size-4",role:"img"},"⚠️"):t.createElement(mf,null)),t.createElement(UO,{className:"input-icon-send-button button is-text icon is-right",disabled:n||o,onClick:e,type:"button"},i)}WO.propTypes={onClick:o().func,disabled:o().bool,children:o().node,hasError:o().bool},WO.defaultProps={onClick:()=>{},disabled:!1,children:null,hasError:!1};const HO=uo.p`
  right: 0;
  bottom: ${e=>Vg(e.theme.initial_vars.vertical_unit,-3)};
  position: absolute;
  color: ${({theme:e})=>e.design.form_help_color};
`;function VO({hiddenWhenFullWidth:e,children:n}){return t.createElement(HO,{className:_o()({"input-help-text is-hidden-mobile is-size-7 is-pulled-right is-uppercase is-unselectable":!0,"is-hidden":e})},n)}function qO(e){const{uploadedFile:n,uploadFile:r,removeUploadedFile:o}=function(){const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)(!1),s=wv();return{uploadedFile:e,removeUploadedFile:()=>{n(null)},error:r,isFetching:i,uploadFile:e=>e.size<=IO?(a(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:s.config.channelToken,customerToken:s.customerToken,serverUrl:s.config.serverUrl,file:e}).then((({url:t})=>n({url:t,name:e.name,size:e.size}))).catch((e=>{o("Error!"),console.error(e)})).then((()=>a(!1)))):(o("MAX. 10MB"),Promise.reject(new Error(`Size limit exceeded: "${e.size}" > "10000000"`)))}}(),{onFileUploadedChange:i}=e;(0,t.useEffect)((()=>{i(n)}),[n,i]);const a=n?t.createElement(NO,{images:[n],removeImage:o}):t.createElement(Sn.Z,{className:"textarea js-auto-focus",maxRows:e.maxRows,onChange:t=>e.onChange(t.target.value),onKeyDown:t=>{13===(t.keyCode||t.which)&&(t.shiftKey||(t.preventDefault(),e.value&&e.onSubmit()))},placeholder:e.placeholder,rows:1,value:e.value});return t.createElement("div",{className:_o()({"u-no-border":e.hasNoBorder,InputText:!0})},t.createElement("div",{className:"field has-addons is-marginless"},t.createElement("div",{className:"control is-expanded has-icons-right"},a,e.hasAddOns&&!n&&t.createElement(LO,{hasAttachButton:""===e.value,onSelectEmoji:t=>e.onSelectEmoji(t),uploadFile:r}),t.createElement(WO,{disabled:""===e.value&&null===n,onClick:()=>{e.onSubmit(),o()}}))),t.createElement(VO,{hiddenWhenFullWidth:""!==e.value},e.help))}function YO(e){const[n,r]=(0,t.useState)({}),{text:o}=d(),i=e=>{r({type:"text",message:e})},a=(0,t.useCallback)((e=>{r(e?{type:"file",url:e.url,message:e.name}:e=>({type:"text",message:"file"===e.type?"":e.message}))}),[]);return t.createElement(AO,{input:t.createElement(qO,{help:o.input_text_help,placeholder:o.text_input_placeholder,value:n.message,onChange:e=>i(e),onSelectEmoji:e=>(e=>{const t=n.message||"";i(t+e.native)})(e),onFileUploadedChange:a,onSubmit:()=>(e.onSubmit(n),void r({})),hasAddOns:!0})})}VO.propTypes={children:o().node.isRequired,hiddenWhenFullWidth:o().bool},VO.defaultProps={hiddenWhenFullWidth:!1},qO.propTypes={help:o().oneOfType([o().element,o().string]),placeholder:o().string,onChange:o().func,onSubmit:o().func,onFileUploadedChange:o().func,onSelectEmoji:o().func,value:o().string,hasAddOns:o().bool,hasNoBorder:o().bool,maxRows:o().number},qO.defaultProps={help:"",placeholder:"",onChange:()=>{},onSubmit:()=>{},onFileUploadedChange:()=>{},onSelectEmoji:()=>{},value:"",hasAddOns:!1,hasNoBorder:!1,maxRows:3},YO.propTypes={onSubmit:o().func},YO.defaultProps={onSubmit:()=>{}};const QO=uo.div`
  display: flex;
  padding: 8px 12px;
`;function GO(){const{branding:e}=d(),{messages:n}=by(),r=wv(),o=jg(),[i,a]=(0,t.useState)(!0),s=oO();return(0,t.useEffect)((()=>{const e=e=>{a(!!e)};return r.events.on(_v,e),()=>{r.events.off(_v,e)}}),[r.events]),o||e||s?t.createElement(wO,{hasInputFixed:o,isConnectionOk:i},(i&&s||e)&&t.createElement(QO,{className:"Footer__Row"},i&&s&&t.createElement(sO,{containerClassName:"BackButton--Mobile"}),e&&t.createElement(TO,{hasInputFixed:o})),o&&t.createElement(QO,{className:"Footer__Row is-paddingless"},t.createElement(YO,{messages:n,onSubmit:e=>{r.events.emit(Tv,e)}}))):null}const KO=uo.div`
  ${()=>kg()===n.NATIVE?"position: fixed;\n       width: 100%;\n       height: 100vh;":"position: absolute;"}

  .modal-close {
    ${()=>kg()===n.NATIVE?"position: fixed;":"position: absolute;"}
  }

  .modal-close [data-tooltip] {
    width: 100%;
    height: 100%;

    &:hover {
      &::before,
      &::after {
        opacity: 0;
        animation-delay: 0.1s;
        animation-name: opacityAnimation;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
      }
    }

    @keyframes opacityAnimation {
      from {
        opacity: 0;
      }

      50% {
        opacity: 0.5;
      }

      to {
        opacity: 1;
      }
    }
  }
`;function XO(e){return t.createElement(KO,{className:_o()({"modal fade-in":!0,"is-active":e.isOpen,[e.className]:!!e.className})},t.createElement("div",{className:"modal-background",onClick:e.canCloseOnClickOverlay?e.onClose:null}),t.createElement("div",{className:_o()({"modal-content":!0,[e.contentClassName]:!!e.contentClassName}),style:{width:"auto"}},e.children),t.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:e.onClose,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}XO.propTypes={className:o().string,canCloseOnClickOverlay:o().bool,isOpen:o().bool,onClose:o().func,contentClassName:o().string,children:o().node},XO.defaultProps={className:null,canCloseOnClickOverlay:!1,isOpen:!1,onClose:()=>{},contentClassName:null,children:null};const ZO=uo.iframe`
  height: 90vh;
  width: 90vw;
`;function JO(){const{isOpen:e,setIsOpen:n,src:r}=rv(),{document:o}=s(),i=fe.isSupportedDocumentType(r||"");return(0,t.useEffect)((()=>{if(!e)return;const t=e=>{27===e.keyCode&&n(!1)};return o.addEventListener("keydown",t,!1),()=>o.removeEventListener("keydown",t,!1)}),[e,n,o]),t.createElement(XO,{contentClassName:"has-text-centered",isOpen:e,onClose:()=>n(!1),canCloseOnClickOverlay:!0},i?t.createElement(ZO,{type:"text/html",src:r,frameBorder:"0",allowFullScreen:!0,title:"lb-iframe"}):t.createElement(lv,{className:"is-inline-block",src:r}))}const $O=uo.div`
  z-index: ${({theme:e})=>e.zIndex.NotificationsPanel};
  ${()=>kg()===n.NATIVE?"position: fixed;":"position: absolute;"}
  top: 0;
  left: 0;
  padding: 10px 30px;
  height: ${e=>e.theme.header.height.default};
  width: 100%;
  color: white;
  background-color: #fc4c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${zg} {
    padding: 22px 34px;
    margin: auto;
  }
`,eT=uo.div`
  display: none;

  &.is-active {
    display: block;
  }

  .modal-close {
    z-index: 41;
  }
`;function tT({message:e,retryMessage:n,isOpen:r,hasCloseButton:o,onClose:i,buttons:a}){return t.createElement(eT,{className:_o()({NotificationsPanel:!0,"fade-in":!0,"is-active":r})},t.createElement($O,{className:_o()({"panel-container":!0})},t.createElement("p",null,e),t.createElement("p",null,a.length>0?a.map((({label:e,retryMessageLabel:r,onClick:o})=>t.createElement(Co,{key:r?n:e,label:r?n:e,onClick:o}))):n)),o&&t.createElement("button",{"aria-label":"close",className:"modal-close is-large",onClick:i,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}function nT(){const{cfg:{isOpen:e,isInitialized:n,hasCloseButton:r,hasRetryButton:o,hasResetButton:i,message:a,retryCb:l,retryInterval:c},closeNotification:u,setIsInitialized:f}=ty(),{text:p}=d(),[h,m]=(0,t.useState)([]),{document:b}=s();(0,t.useEffect)((()=>{if(!e||!r)return()=>{};const t=e=>{27===e.keyCode&&u()};return b.addEventListener("keydown",t,!1),()=>b.removeEventListener("keydown",t,!1)}),[e,u,r,b]);const[g,v]=(0,t.useState)(-1),[y,w]=(0,t.useState)(""),[_,x]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{if(e&&!n){const e=[];"function"==typeof l&&c>0?(v(c),x(!0),o&&e.push({retryMessageLabel:!0,onClick:()=>{x(!1),l()}})):o&&e.push({label:p.error_retry_button_label,onClick:l}),i&&e.push({label:p.error_reset_button_label,onClick:()=>{alert("RESET")}}),m(e),w(""),f(!0)}else e||x(!1)}),[e,n,l,c,f,o,i,p]),(0,t.useEffect)((()=>{if(!e||!n||!_)return()=>{};const t=setInterval((()=>{v((e=>e-1))}),1e3);return()=>{clearInterval(t)}}),[e,n,_]),(0,t.useEffect)((()=>{e&&n&&_&&(g>0?w(p.error_retry_countdown_message.replace("{countdown}",g)):0===g&&(w(p.error_retrying_message),x(!1),l()))}),[e,n,_,g,l,p.error_retry_countdown_message,p.error_retrying_message]),t.createElement(tT,{isOpen:e,onClose:()=>u(),hasCloseButton:r,message:a,retryMessage:y,buttons:h})}tT.propTypes={hasCloseButton:o().bool,isOpen:o().bool,onClose:o().func,message:o().string,retryMessage:o().string,buttons:o().arrayOf(o().objectOf)},tT.defaultProps={hasCloseButton:!1,isOpen:!1,onClose:()=>{},message:"",retryMessage:"",buttons:[]};const rT=uo.div`
  /* Positioning */
  top: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.OffsetMenuContent};
  ${()=>kg()===n.NATIVE?"position: fixed;":"position: absolute;"}

  /* Display & Box Model */
  width: 240px;
  height: 100%;
  padding: 18px 15px;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;

  /* Color */
  opacity: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 27px 0 rgba(32, 20, 104, 0.2);
  background-color: white; // --base_color_message

  /* Other */
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;

  &.OffsetMenu__Content--isActive {
    opacity: 1;
    transform: translateX(0);
  }
`,oT=({className:e,onClick:n})=>t.createElement(Io,{ariaLabel:"Close Menu",className:_o()({[e]:!0,OffsetMenu__CloseButton:!0,delete:!0}),onClick:n});oT.propTypes={className:o().string,onClick:o().func},oT.defaultProps={className:null,onClick:()=>{}};const iT=uo(oT)`
  align-self: flex-end;
  height: 37px;
  width: 37px;
  min-width: initial;
  min-height: initial;
  max-width: initial;
  max-height: initial;
  margin-bottom: 20px;
  background-color: transparent !important;

  &:hover,
  &:active {
    border-color: transparent;
    box-shadow: none;
    background-image: none;
  }

  &:before,
  &:after {
    background-color: ${({theme:e})=>e.design.message_color_bot};
  }
`,aT=uo.div`
  .modal-background {
    z-index: ${({theme:e})=>e.zIndex.OffsetMenu};
  }
`;function sT({menuActive:e,closeMenu:n}){return t.createElement(aT,{className:"OffsetMenu"},t.createElement(rT,{className:_o()({OffsetMenu__Content:!0,"OffsetMenu__Content--isActive":e})},t.createElement(iT,{onClick:n}),t.createElement("div",{className:"OffsetMenu__ContentSection"},t.createElement(Bv,{ariaExpanded:e,closeMenu:n,isVerticalVersion:!0}))),e&&t.createElement("div",{className:"modal-background",onClick:n}))}function lT(){const{isOpen:e,setIsOpen:n}=Hv();return t.createElement(sT,{menuActive:e,closeMenu:()=>{n(!1)}})}sT.propTypes={menuActive:o().bool,closeMenu:o().func},sT.defaultProps={menuActive:!1,closeMenu:()=>{}};const cT=uo.div`
  && {
    position: relative;
    overflow: hidden;

    ${()=>kg()===n.NATIVE?"height: auto\n        overflow-y: visible;\n        min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function uT({children:e}){return t.createElement(cT,{id:"Main"},e)}uT.propTypes={children:o().node.isRequired};var dT=[P.BUTTON,P.CALENDLY,P.CARDS,P.DIALOG,P.DOCUMENT,P.IFRAME,P.IMAGE,P.REDIRECT,P.REFERRAL,P.STRIPE,P.STRIPE_INTENT,P.TEXT,P.MEDIA_DIALOG,P.AUDIO,P.VIDEO];function fT(e){return"image"===e.media_type?t.createElement(ok,e):"iframe"===e.media_type?t.createElement(ek,e):null}function pT(e){return e.rich_text?t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("div",{className:"content is-marginless"},e.text)}function hT(e){const{time:n}=function(e){const[n,r]=(0,t.useState)(oe()(e.extra,"redirect.timeout",3)),{window:o}=s();return(0,t.useEffect)((()=>{e.evaluate&&(n?setTimeout((()=>{r((e=>e-1))}),1e3):o.location.href=ae.Z.getHref(e.url))}),[n,e.evaluate,e.url,o.location.href]),n}(e),r=e.rich_text.replace(/\{timeout\}/i,n);return t.createElement(pT,Zg({},e,{rich_text:r}))}fT.propTypes={media_type:o().oneOf(["image","iframe"])},fT.defaultProps={media_type:null},pT.propTypes={rich_text:o().string,text:o().string},pT.defaultProps={rich_text:"",text:""},hT.propTypes={evaluate:o().bool,extra:o().object,rich_text:o().string},hT.defaultProps={evaluate:!1,extra:{},rich_text:""};var mT={[P.BUTTON]:pT,[P.CARDS]:pT,[P.DIALOG]:pT,[P.DOCUMENT]:Gx,[P.AUDIO]:Gx,[P.VIDEO]:Gx,[P.IFRAME]:ek,[P.IMAGE]:ok,[P.MEDIA_DIALOG]:fT,[P.REDIRECT]:hT,[P.REFERRAL]:gk,[P.STRIPE]:pT,[P.STRIPE_INTENT]:pT,[P.TEXT]:pT};const bT={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class gT extends wy{constructor(e){super(e),this.data.messageText=null}}function vT(e,t){if(e instanceof gT)throw new Error("TypeError: invalid arguments supplied to slideWrapper. Attempt to wrap an already wrapped slide.");return new Proxy(new gT(e,t),bT)}function yT(e){const n=mT[e.type];return n?t.createElement(n,e):null}function wT(e,n){const r=ie.getInputType(e),o=NC[r];return o?t.createElement("div",{className:"mt-5"},t.createElement(o,{message:vT(e),onSubmit:n})):null}function _T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xT(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_T(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function kT(){const[e,n]=(0,t.useState)([]),r=(0,t.useRef)(),o=wv(),[i,a]=(0,t.useState)(0);return(0,t.useEffect)((()=>{const e=o.pipelines.$readableSequence.subscribe((e=>{var t;void 0!==(t=e).samurai&&dT.includes(t.type)&&n((t=>t.concat(e)))}));return()=>e.unsubscribe()}),[o.pipelines.$readableSequence]),(0,t.useEffect)((()=>{setTimeout((()=>{a(e.length-1)}),500)}),[e.length]),(0,t.useEffect)((()=>{r.current&&r.current.slickGoTo(i)}),[i]),{slides:e,sliderRef:r,goToSlide:e=>r.current.slickGoTo(e),onSubmit:e=>{n((e=>[...e.slice(0,-1),xT(xT({},e[e.length-1]),{},{readOnly:!0})])),o.events.emit(Tv,e)}}}const ET=uo.div`
  display: flex;
  height: 4px;
`,ST=uo.div`
  flex: 1;
  width: 100%;
  min-width: 0;
  border-radius: 2px;
  background-color: rgba(198, 200, 210, 0.6);
  position: relative;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({value:e})=>e?`${e}%`:0};
    content: '';
    display: inline-block;
    height: 100%;
    border-radius: 2px;
    background-color: var(--form_buttons_background_color);
  }
`;function CT({progress:e}){return e?t.createElement(ET,{className:"Progress"},Array(e.total).fill(null).map(((t,n)=>n+1<=e.current?100:0)).map((e=>t.createElement(ST,{value:e})))):null}CT.propTypes={progress:o().shape({total:o().number,current:o().number})},CT.defaultProps={progress:null};const OT=ro`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,TT=uo.article`
  height: 100%;
  overflow-y: auto;
  padding: 50px 60px;
`,PT=uo.div`
  width: 100%;
  height: 100%;
  color: var(--message_color_bot);
  background-color: var(--message_background_color_bot);
  box-shadow: 0 32px 64px 0 rgba(14, 86, 124, 8%);
  border-radius: 18px;
  animation: ${OT} 0.5s 0.5s ease-in-out forwards;
  opacity: 0;

  img {
    object-fit: cover;
    height: 100%;
  }

  ${ET} {
    position: absolute;
    width: 100%;
    padding: 0 40px;
    top: 16px;
  }

  @media ${zg} {
    max-height: 430px;
  }

  &.has-background ${TT} {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    // El peligro de esto es que a lo mejor la imagen es de fondo claro, y por tanto el texto no
    // sería prácticamente visible.
    h1, h2, h3, p {
      color: white;
    }
  }
`;function AT(e){const{id:n,className:r,content:o,background:i,progress:a}=e,s={background:i,backgroundSize:"cover",backgroundPosition:"center"};return t.createElement(PT,{id:n,className:_o()("Slide is-relative",i&&"has-background",r),onClick:e.onClick,style:s},t.createElement(CT,{progress:a}),t.createElement(TT,{className:"SlideContent","data-type":e.type},o))}AT.propTypes={background:o().string,className:o().string,content:o().node,id:o().string,onClick:o().func,progress:o().object,type:o().string},AT.defaultProps={background:null,className:"",content:null,id:null,onClick:void 0,progress:null,type:null};function IT(e){return e<670?"10px":(e-650)/2+"px"}const NT=uo.div`
  /* LAN-5805: Este cambio es peligroso, los paddings tienen un objetivo.
  padding: 100px 0;
  
  @media ${zg} {
    padding: 100px 0;
  } */
  padding: 0;

  ${()=>kg()===n.NATIVE?Br`
          height: 100vh;
        `:Br`
          height: 100%;
        `}
  }
`,DT=uo(Kk.Z)`
  width: 100%;

  &,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide {
    opacity: 0.4;
    transition: opacity 0.5s, transform 0.5s;
    transform: scale(0.9);
    transform-origin: right center;

    &.slick-active {
      opacity: 1;
      transform: scale(1);

      + .slick-slide {
        transform: scale(0.9);
        transform-origin: left center;
      }
    }

    &:not(.slick-active) {
      cursor: pointer;
    }
  }

  .slick-slide > div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;var MT=function(){const e=s().window.innerWidth,{slides:n,sliderRef:r,goToSlide:o,onSubmit:i}=kT(),{isFetching:a,error:l}=function(){const[e,n]=(0,t.useState)(!0),[r,o]=(0,t.useState)(null),i=Xv();return(0,t.useEffect)((()=>{i.init().catch((e=>o(e))).finally((()=>n(!1)))}),[]),{isFetching:e,error:r}}();return t.createElement(NT,{className:"Body"},!a&&!l&&t.createElement(DT,{className:"Slider",infinite:!1,dots:!1,arrows:!1,centerMode:!0,centerPadding:IT(e),ref:r},n.map(((e,n)=>{var r,a,s,l;return t.createElement(AT,{key:n,id:null===(r=e.extra)||void 0===r?void 0:r.id,className:null===(a=e.extra)||void 0===a?void 0:a.className,onClick:()=>o(n),background:null===(s=e.extra)||void 0===s?void 0:s.background,type:e.type,progress:null===(l=e.extra)||void 0===l?void 0:l.steps,content:t.createElement(t.Fragment,null,yT(e),wT(e,e.readOnly?void 0:i))})}))),l&&t.createElement("p",{className:"is-size-4",style:{color:"var(--form_help_color)"}},"ERROR!"))};function jT(){return t.createElement(uT,null,t.createElement(Eg,null),t.createElement(nT,null),t.createElement(RT,null),t.createElement(JO,null),t.createElement(lT,null))}function RT(){const{experience:e}=d();switch(e){case $:return t.createElement(t.Fragment,null,t.createElement(qv,null),t.createElement(Qv,null),t.createElement(MT,null),t.createElement(GO,null));case ee:default:return t.createElement(t.Fragment,null,t.createElement(qv,null),t.createElement(Qv,null),t.createElement(vO,null),t.createElement(GO,null))}}var LT=__webpack_require__(419);function FT(e){console.error(`Landbot: You're using a deprecated function "${e}".`)}function BT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function zT(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?BT(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):BT(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function UT({core:e,config:n,children:r}){const[o,i]=(0,t.useState)({}),[a,s]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const t=()=>{i(e.storage.get("agents")||{})};return e.events.on(kv,t),()=>e.events.off(kv,t)}),[e.events,e.storage]),(0,t.useEffect)((()=>{const t=async t=>{const r=t.agent_id||t.samurai;!r||ce()(a,r)||o[r]||(s((e=>[...e,r])),"-1"!==r&&r>0&&await v.fetchAgentData({channelToken:n.channelToken,serverUrl:n.serverUrl,agentID:r}).then((t=>{i((n=>{const o=zT(zT({},n),{},{[r]:{name:t.name,avatar:t.avatar}});return e.storage.set("agents",o),o}))})))};return e.events.on(Sv,t),()=>e.events.off(Sv,t)}),[e.events,e.storage,o,a,n]),t.createElement(Pg,{value:o},r)}function WT(e){const[n,r]=(0,t.useState)(null);return t.createElement(Cg,{value:{agent:n,setAssignation:r}},e.children)}function HT(e){const[n,r]=(0,t.useState)(!1),[o,i]=(0,t.useState)(null);return t.createElement(nv,{value:{isOpen:n,setIsOpen:r,src:o,setSrc:i}},e.children)}function VT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qT(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?VT(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):VT(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function YT(e){const[n,r]=(0,t.useState)(Jv),[o,i]=(0,t.useState)(null);return t.createElement(ey,{value:{cfg:n,showNotification:(e,t={})=>{if(n.isOpen)return r((t=>qT(qT({},t),{},{message:e}))),null;const o=(new Date).getTime();return i(o),r(qT(qT(qT({},Jv),{},{message:e},t),{},{isOpen:!0,isInitialized:!1})),o},closeNotification:(e=-1)=>{-1!==e&&e!==o||r((e=>{const{lastAction:t,retryCb:n}=e;return t!==Zv&&"function"==typeof n&&n(),qT(qT({},e),{},{isOpen:!1,lastAction:null,retryCb:null})}))},setIsInitialized:e=>{r((t=>qT(qT({},t),{},{isInitialized:e})))}}},e.children)}function QT(e){const[n,r]=(0,t.useState)(!1);return t.createElement(Wv,{value:{isOpen:n,setIsOpen:r}},e.children)}function GT(e,n){const r=(0,t.useRef)(n),[o,i]=(0,t.useReducer)(e,n),{debug:a}=d(),s=(0,t.useMemo)((()=>a?function(e){return t=>(console.groupCollapsed("Action:",t),e(t))}(i):i),[i,a]);return(0,t.useEffect)((()=>{a&&o!==n&&(console.log("Prev state: ",r.current),console.log("Next state: ",o),console.groupEnd()),r.current=o}),[o,o.messages,n,a]),[o,s]}function KT({children:e}){const n=wv(),r=Og(),[o,i]=GT(py,fy),a=Sy(o.messages),s=h(),{customData:l}=d();return(0,t.useEffect)((()=>{const e=n.pipelines.$typingSequence.subscribe((e=>{if(null===e||e&&!0===e.state)return;const{message:t}=e;"hidden"===t.type&&"script"===t.action&&ae.Z.evalCode(t.script,s),i({type:sy,message:ae.Z.compose(fe.withEvaluate,fe.withVariablesReplaced.bind(fe))(t,l),options:{}})}));return()=>{e.unsubscribe()}}),[n.pipelines.$typingSequence,s,l,i]),(0,t.useEffect)((()=>{r.setAssignation(fe.getAssignationAgentID(a))}),[r,a]),t.createElement(my,{value:{messagesWrapper:a,lastTimestamp:a.getLastMessage().timestamp||0,setMessages:e=>{const t=fe.createSortedMessagesArray(e);i({type:oy,messages:t})},setPreviousSessionMessages:e=>{const t=fe.createSortedMessagesArray(e);i({type:iy,messages:t})},resumePreviousSession:()=>{i({type:ay})},newMessage:(e,t={})=>{i({type:sy,message:e,options:t})},clean:()=>{i({type:ly}),i({type:ly})},addMessages:e=>{const t=fe.createSortedMessagesArray(e);i({type:cy,messages:t})},prependMessages:e=>{const t=fe.createSortedMessagesArray(e);i({type:uy,messages:t})},markAsFailed:(e,t=null)=>{i({type:dy,message:e,retryCb:t})}}},e)}function XT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ZT(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?XT(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):XT(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function JT({children:e}){const[n,r]=(0,t.useState)(!1),{customData:o}=d(),[i,a]=(0,t.useState)(o),{lastTimestamp:l,newMessage:c,markAsFailed:u,resumePreviousSession:f,clean:p}=by(),{document:h}=s(),m=wv(),b=Xv();return(0,t.useEffect)((()=>{const e=e=>{Iw({targets:h.querySelector(".js-revisit-fade"),opacity:[1,0],duration:250,easing:"easeInExpo",complete:()=>{if(p(),Iw({targets:h.querySelector(".js-revisit-fade"),opacity:[0,1],duration:0}),"function"==typeof e)return e()}})},t=async t=>{if(r(!0),"#continue"===t.payload||"#_continue"===t.payload)return void e(f);const n=ZT(ZT({},t),{},{custom_data:ZT(ZT({},i),t.custom_data||{}),ui_key:ae.Z.randomKey(),version:"3.0.0"}),o=ae.Z.compose(fe.withGhost,fe.withEvaluate)(fe.getMessageFromSendingData(ZT(ZT({},n),{},{timestamp:l+1})));"#init"===t.payload?await new Promise((t=>e(t))):c(o),b.sendMessage(n).catch((e=>{u(o,(()=>b.sendMessage(ZT(ZT({},n),{},{extra:ZT(ZT({},n.extra),{},{retried:!0})}))))})),a({})},n=(e={})=>{a((t=>ZT(ZT({},t),e)))},o=()=>{r(!1)};return m.events.on(Tv,t),m.events.on(xv,n),m.events.on(Sv,o),()=>{m.events.off(Tv,t),m.events.off(xv,n),m.events.off(Sv,o)}}),[i,m.events,b,l,u,c,f,p,h]),t.createElement(_k,{value:{isSubmitted:n,setIsSubmitted:r}},e)}function $T(e){const{document:n,window:r}=s(),o=d(),i=wv(),a=h();return function(){const{document:e}=s();(0,t.useLayoutEffect)((()=>{const t=e.createElement("style");return t.type="text/css",t.id="dynamic-styles",t.appendChild(e.createTextNode(LT.Z)),e.head.prepend(t),()=>{e.getElementById("dynamic-styles").remove()}}),[e])}(),function(){const e=kg(),{document:n}=s(),{experience:r}=d();(0,t.useLayoutEffect)((()=>{const t=`Landbot${e}`,o=`LandbotExperience--${r}`;return n.documentElement.classList.add(t),n.documentElement.classList.add(o),()=>{n.documentElement.classList.remove(t),n.documentElement.classList.remove(o)}}),[e,n,r])}(),(0,t.useEffect)((()=>{a.document=n,a.window=r,(({widget:e,document:t,window:n})=>{const{core:r}=e;n.Landbot=n.Landbot||{};const{Landbot:o}=n;o.send=function(e,t){switch(e){case"landbot-msg-send":r.sendMessage(t);break;case"landbot-custom-data":r.events.emit(xv,t);break;default:r.events.emit(e,t)}FT("Landbot.send")},o.exec=o.send,o.on=function(e,t){switch(e){case"landbot-msg-receive":r.events.on(Sv,t);break;default:r.events.on(e,t)}FT("Landbot.on")},o.off=r.events.off})({widget:a,document:n,window:r}),function(e,t){const n=e.Element;n.prototype.matches||(n.prototype.matches=n.prototype.matchesSelector||n.prototype.mozMatchesSelector||n.prototype.msMatchesSelector||n.prototype.oMatchesSelector||n.prototype.webkitMatchesSelector||function(e){for(var n=t.querySelectorAll(e),r=n.length;--r>=0&&n.item(r)!==this;);return r>-1})}(r,n),function(e,t){var n=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame;e.requestAnimationFrame=n}(r),function(e,t){const n=e.NodeList;n&&!n.prototype.forEach&&(n.prototype.forEach=function(t,n){n=n||e;for(var r=0;r<this.length;r++)t.call(n,this[r],r,this)})}(r),i.events.emit(Ev)}),[n,r,a,i.events]),y([[UT,{core:i,config:o}],[WT],[YT],[HT],[QT],[KT],[JT]],e.children)}function eP(e){return t.createElement($T,null,t.createElement(En,null,t.createElement(jT,null)))}UT.propTypes={children:o().node,core:o().object,config:o().object},UT.defaultProps={children:null,core:{},config:{}},WT.propTypes={children:o().node},WT.defaultProps={children:null},HT.propTypes={children:o().node},HT.defaultProps={children:null},YT.propTypes={children:o().node},YT.defaultProps={children:null},QT.propTypes={children:o().node},QT.defaultProps={children:null},KT.propTypes={children:o().node},KT.defaultProps={children:null},JT.propTypes={children:o().node},JT.defaultProps={children:null},$T.propTypes={},$T.defaultProps={};var tP=__webpack_require__(6561);function nP({children:e,frameRef:n}){return t.createElement(tP.ZP,{initialContent:'\n  <!DOCTYPE html>\n  <html>\n    <head></head>\n    <body>\n      <div id="frame-content"></div>\n    </body>\n  </html>',mountTarget:"#frame-content",frameBorder:"0",ref:n,style:{width:"100%",height:"100%"},"data-cy":null},e)}nP.propTypes={frameRef:o().object,children:o().node.isRequired},nP.defaultProps={frameRef:()=>{}};var rP=nP;function oP({children:e}){const n=(0,t.useRef)(null);return t.createElement(rP,{frameRef:n},t.createElement(tP.Kr,null,(({document:r,window:o})=>{var i;return t.createElement(a,{value:{document:r,iframe:null===(i=n.current)||void 0===i?void 0:i.node,window:o}},t.createElement(Ar,{target:r.head},e))})))}oP.propTypes={children:o().node.isRequired},oP.defaultProps={};const iP=uo.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.Widget};
`;function aP({children:e}){return t.createElement(iP,{className:"LandbotFullpage"},e)}aP.propTypes={children:o().node.isRequired};var sP=__webpack_require__(3935),lP=["firebase","apiKey","authDomain","databaseURL","storageBucket","serverUrl","welcomeUrl","brandID","channelToken","customerToken","welcome","typing_options","storage_off","forceWebsockets"],cP=["welcome","revisit","persistent_menu"];function uP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dP(e,t,n,r,o,i){return"revisit"===n&&0===t.length?l.revisit:cP.includes(n)?t:void 0}function fP(...t){return function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?uP(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):uP(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},cn()({},...t,dP))}function pP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function hP(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?pP(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pP(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}class mP{constructor(e){this.localConfig=xn()({},e)}async init(){let e={};try{e=await this._fetchConfig()}catch(e){console.warn("landbot-3: Could not fetch remote config",e)}return this.rawConfig=fP(l,e,this.localConfig),this.rawConfig.customData=hP(hP({},ae.Z.getHiddenFields(this.rawConfig.hidden_fields,window.location.search)),this.rawConfig.customData),this.applyConfig()}async _fetchConfig(){return this.localConfig.configUrl?v.fetchConfigJSON({configUrl:ae.Z.appendTimestampToUrl(this.localConfig.configUrl)}):Promise.reject()}applyConfig(e=null){return e&&(this.rawConfig=fP(this.rawConfig,e)),hP(hP({},this.rawConfig),{},{design:bn(this.rawConfig)})}}var bP=__webpack_require__(1923),gP=(__webpack_require__(8818),__webpack_require__(4707),__webpack_require__(5030)),vP=__webpack_require__.n(gP);function yP(e){const n=d(),r=xn()({},Lm,{design:n.design});return t.createElement(Zr,{theme:r},e.children)}function wP({config:e,core:n,children:r}){const[o,i]=(0,t.useState)(e);return(0,t.useEffect)((()=>{const e=e=>i(e);return n.events.on(Av,e),()=>n.events.off(Av,e)}),[n]),t.createElement(u,{value:o},r)}yP.propTypes={children:o().node},yP.defaultProps={children:null},wP.propTypes={config:o().object,core:o().object.isRequired,children:o().node},wP.defaultProps={config:{},children:null};class _P{constructor(t){(0,e.Z)(this,"MODE",null),(0,e.Z)(this,"VERSION",{type:"minor",channel:null,gitHead:"1983205c6bff48ad805a7a5730bbbdee0df4f142",version:"1.15.0",gitTag:"v1.15.0",name:"v1.15.0",notes:""}),this.core=new(g())({firebase:bP}),this.configManager=new mP(t),this.setup()}async setup(){this.config=await this.configManager.init(),this.core.setConfig(vP()(this.config,lP)),this.api=this._getApi(),this._create(),this._render(),this._applyConfig=this._applyConfig.bind(this),this.core.events.on(Pv,this._applyConfig)}onLoad(e){this.core.events.on(Ev,e)}setConfig(e={}){this.core.events.emit(Pv,e)}_applyConfig(e){this.config=this.configManager.applyConfig(e),this.core.events.emit(Av,this.config)}setCustomData(e={}){this.core.events.emit(xv,e)}sendMessage(e){return this.core.sendMessage(e)}destroy(){this.core.events.off(Pv,this._applyConfig),sP.unmountComponentAtNode(this.container),this.container.remove(),this.container=null,this.core.destroy()}_create(){this.container=document.createElement("div"),document.body.appendChild(this.container)}_getApi(){return{init:this.core.init.bind(this.core),getMoreMessages:this.core.getMoreMessages.bind(this.core),sendMessage:this.core.sendMessage.bind(this.core)}}_render(){sP.render(y([[p,{value:this}],[xg,{value:this.MODE}],[yv,{value:this.core}],[wP,{core:this.core,config:this.config}],[Kv,{value:this.api}],[yP]],this._contentRenderer()),this.container)}_contentRenderer(){return null}}class xP extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.FULLPAGE)}_contentRenderer(){return t.createElement(aP,null,t.createElement(oP,null,t.createElement(eP,null)))}}function kP({children:e}){const[n,r]=(0,t.useState)(!1),[o,i]=(0,t.useState)(!1),[a,s]=(0,t.useState)(null),[l,c]=(0,t.useState)(0),u=wv();return(0,t.useEffect)((()=>{const e=()=>{r(!0),i(!1),u.storage.set("proactive",{closed:!0})},t=()=>r(!1);return u.events.on(Iv,e),u.events.on(Nv,t),()=>{u.events.off(Iv,e),u.events.off(Nv,t)}}),[u.events,u.storage]),(0,t.useEffect)((()=>{const e=e=>{n||(s(e),i(!0))},t=()=>i(!1);return u.events.on(Ov,e),u.events.on(Cv,t),()=>{u.events.off(Ov,e),u.events.off(Cv,t)}}),[n,u.events]),(0,t.useEffect)((()=>{o||s(null)}),[o]),t.createElement(Ng,{value:{isProactiveOpen:o,isOpen:n,proactiveMessages:a,proactiveHeight:l,setProactiveHeight:c}},e)}kP.propTypes={children:o().node},kP.defaultProps={children:null};var EP=uo.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatLauncher};
  right: 0;
  bottom: 0;
  position: absolute;
  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  padding: ${e=>e.theme.launcher.shadow_length};
`,SP=uo.div`
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  max-width: 350px;

  .InputInline {
    margin: 0 !important;
    min-height: initial !important;
  }

  .BackButton {
    display: none !important;
  }

  .Message[data-type='dialog'],
  .Message[data-type='text'] {
    .MessageBubble {
      padding: 7px 13px 9px;
    }
  }

  .MessageMediaBubble {
    max-width: 150px;

    figure {
      background: transparent;
    }
    img {
      max-height: 105px;
    }
  }

  .input-small-header {
    display: none;
  }

  &__card-content {
    padding: 1rem 1rem 0.2rem 1rem;
  }

  .Message .MessageBubble {
    box-shadow: 0 11px 23px -5px rgba(0, 0, 0, 0.06);
  }
`;function CP({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(SP,{className:"LivechatProactive"},r),t.createElement(EP,{className:_o()({LivechatLauncher:!0})},n),t.createElement(kn,null))}CP.propTypes={children:o().node.isRequired,launcher:o().element,proactive:o().element},CP.defaultProps={launcher:null,proactive:null};const OP=({src:e,className:n})=>t.createElement(lv,{className:_o()({[n]:!0,"is-launcher__avatar":!0}),contain:!0,src:e});OP.propTypes={src:o().string,className:o().string},OP.defaultProps={src:null,className:""};const TP=uo(OP)`
  position: relative;
  height: 60%;

  img {
    height: 100%;
    width: auto;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`,PP=({className:e})=>t.createElement("div",{className:_o()({[e]:!0,launcher__bubble__close:!0,delete:!0})});PP.propTypes={className:o().string},PP.defaultProps={className:""};const AP=uo(PP)`
  min-width: 50px;
  min-height: 50px;
  background-color: transparent !important;
`,IP=uo.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  animation: fade-in 0.4s forwards;
  border-radius: ${e=>e.theme.launcher.bubble.height};
  box-shadow: rgba(0, 0, 0, 0.06) 0 1px 6px 0,
    rgba(0, 0, 0, 0.16) 0 2px 24px -5px;
  background-color: var(--launcher_background);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;function NP({isOpen:e,isTransparent:n,avatarImage:r,isTyping:o,iconImage:i,onClick:a}){return e?null:t.createElement(IP,{className:_o()({launcher__bubble:!0,"is-transparent":n}),onClick:a},e?t.createElement(AP,null):t.createElement(t.Fragment,null,t.createElement(TP,{src:r}),o&&t.createElement(lv,{className:"launcher__loadericon",src:i})))}function DP(){const e=wv(),{isOpen:n}=Dg(),r=d(),{launcher_custom:o,launcher_image:i,launcher_type:a}=r.design,s=o&&a===an.ONLY_ICON,l=o&&i?i:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png";return t.createElement(NP,{avatarImage:l,isOpen:n,isTransparent:s,onClick:()=>{!1===n?e.events.emit(Iv):e.events.emit(Nv)}})}function MP(){const e=wv(),{conditional_proactives:t}=d(),n=e.storage.get("proactive")||{},r=e.storage.get("sessionStarted");return Boolean(!r&&!n.closed&&t.enabled)}function jP({children:e}){const n=MP(),{isOpen:r}=Dg(),[o,i]=(0,t.useState)(n||r);return(0,t.useEffect)((()=>{!0===r&&!1===o&&i(!0)}),[r,o]),o?e:null}NP.propTypes={isOpen:o().bool,isTransparent:o().bool,avatarImage:o().string,isTyping:o().bool,iconImage:o().string,onClick:o().func},NP.defaultProps={isOpen:!1,isTransparent:!1,avatarImage:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",isTyping:!1,iconImage:"https://static.landbot.io/landbot/files/bubble.svg",onClick:()=>{}},jP.propTypes={children:o().node},jP.defaultProps={children:null};var RP=__webpack_require__(5800);const LP=uo.div`
  flex: 1;
  opacity: 0;
  min-height: 30px;
  transition: opacity 0.25s;

  &.Proactive__close--isMobile {
    opacity: 1;
  }

  .Proactive__close__button {
    right: 16px;
    bottom: 0px;
    min-width: 30px;
    min-height: 30px;
    position: absolute;
  }
`,FP=uo.div`
  cursor: pointer;
  border-radius: 8px;
  max-height: calc(100% - 25px);
  background-color: transparent;

  .Proactive__card-content {
    padding: 1rem;
  }

  .Proactive__messages {
    padding-top: 0;
  }
`,BP=({className:e,onClick:n,children:r})=>t.createElement("div",{className:_o()({Proactive:!0,"fade-in":!0,"is-flex":!0,[e]:!0}),onClick:n},r);BP.propTypes={children:o().node.isRequired,onClick:o().func,className:o().string},BP.defaultProps={onClick:()=>{},className:null};const zP=uo(BP)`
  flex-direction: column;
  cursor: pointer;

  &:hover .Proactive__close {
    opacity: 1;
  }
`;function UP(e){const n=(0,t.useRef)(null),{setProactiveHeight:r}=Dg();return(0,t.useEffect)((()=>{var e;const t=new MutationObserver((()=>{var e;r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight)}));return t.observe(null==n?void 0:n.current,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight),()=>t.disconnect()}),[n,r,e.messages]),t.createElement(zP,{onClick:e.onClick},t.createElement(LP,{className:_o()({"Proactive__close is-relative":!0,"Proactive__close--isMobile":E.isMobile})},t.createElement("button",{type:"submit","aria-label":"delete",className:"Proactive__close__button delete",onClick:t=>{t.stopPropagation(),e.onClose()}})),t.createElement(FP,{className:"Proactive__card",ref:n},t.createElement("div",{className:"Proactive__card-content card-content"},t.createElement("div",{className:"Proactive__messages Messages"},e.messages),e.input)))}UP.propTypes={onClick:o().func,onClose:o().func,input:o().node,messages:o().arrayOf(o().node)},UP.defaultProps={onClick:()=>{},onClose:()=>{},input:null,messages:[]};var WP=(0,RP.withErrorBoundary)((function(){const e=wv(),{conditional_proactives:n,welcome:r,customData:o}=d(),{isProactiveOpen:i,proactiveMessages:a}=Dg(),s=MP();(0,t.useEffect)((()=>{const t=setTimeout((function(){s&&e.events.emit(Ov)}),1e3*n.timeout);return()=>clearTimeout(t)}),[n,s,e.events]);const l=(0,t.useCallback)((()=>{e.events.emit(Cv),e.storage.set("proactive",{closed:!0})}),[e.events,e.storage]),c=(0,t.useCallback)((()=>{e.events.emit(Iv)}),[e.events]),u=(0,t.useMemo)((()=>Cy(ae.Z.appendUIKey(a||n.messages||r))),[a,r,n.messages]);return i?t.createElement(iv,{value:!0},t.createElement(my,{value:{messagesWrapper:u}},t.createElement(UP,{onClose:l,onClick:c,messages:u.replaceVariables(o).map(((e,n,r)=>t.createElement(tO,{key:e.uiKey,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(eO,{message:e})))),input:t.createElement(pO,null)}))):null}),{FallbackComponent:function(){return null},onError(e,t){console.error("Catched error in ProactiveWrapper"),console.error(e,t)}}),HP=uo.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatContent};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${e=>e.theme.chat.shadow_length};
  display: none;

  &.is-open {
    display: block;
  }

  #Main {
    border-radius: 5px;
    box-shadow: 0 -1px ${e=>e.theme.chat.shadow_length} 0 rgba(0, 0, 0, 0.2);
  }
`;function VP(){const{isOpen:e}=Dg();return t.createElement($T,null,t.createElement(CP,{launcher:t.createElement(DP,null),proactive:t.createElement(WP,null)},t.createElement(jP,null,t.createElement(HP,{className:_o()({"LivechatContent fade-in":!0,"is-open":e})},t.createElement(jT,null)))))}var qP=uo.div`
  right: 0;
  bottom: 0;
  position: fixed;

  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  z-index: ${({theme:e})=>e.zIndex.Widget};

  /* open / close state */
  &.is-open {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
  }

  /* Proactive state */
  &.is-proactive {
    width: ${e=>e.theme.proactive.width};
    height: ${e=>e.proactiveHeight?`${e.proactiveHeight+118}px`:e.theme.proactive.height};
    /* height: ${e=>e.theme.proactive.height}; */
    flex-direction: column;
    transform: scale(0.8);
    transform-origin: bottom right;
  }
`;const YP=uo(qP)`
  @media ${zg} {
    max-height: 800px;

    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }
  &.is-open {
    @media ${zg} {
      top: initial;
      width: ${e=>e.theme.widget_chat.width};
      left: initial;
      height: calc(100vh - 2 * ${e=>e.theme.widget_offset.vertical});
    }
  }
`;function QP({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:o}=Dg();return t.createElement(YP,{className:_o()({LandbotLivechat:!0,"is-open":n,"is-proactive":r}),proactiveHeight:o},e)}QP.propTypes={children:o().node.isRequired};class GP extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.LIVECHAT)}open(){this.core.events.emit(Iv)}close(){this.core.events.emit(Nv)}showProactive(e){this.core.events.emit(Ov,e)}hideProactive(){this.core.events.emit(Cv)}_contentRenderer(){return t.createElement(kP,null,t.createElement(QP,null,t.createElement(oP,null,t.createElement(VP,null))))}}class KP extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.NATIVE)}_contentRenderer(){return t.createElement(eP,null)}}function XP({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(SP,{className:"LivechatProactive"},r),t.createElement(EP,{className:_o()({LivechatLauncher:!0})},n),t.createElement(kn,null))}XP.propTypes={children:o().node.isRequired,launcher:o().element,proactive:o().element},XP.defaultProps={launcher:null,proactive:null};const ZP=uo.div`
  animation: fade-in 0.8s forwards;
  background-color: rgba(0, 0, 0, 0.7);
`;function JP({onClick:e}){return t.createElement(ZP,{className:"PopupOverlay is-overlay",onClick:e})}function $P(){const e=wv(),{isOpen:n}=Dg();return t.createElement($T,null,t.createElement(XP,{launcher:t.createElement(DP,null),proactive:t.createElement(WP,null)},t.createElement(jP,null,t.createElement(HP,{className:_o()({"LivechatContent PopupContent fade-in":!0,"is-open":n})},t.createElement(JP,{onClick:()=>{e.events.emit(Nv)}}),t.createElement(jT,null)))))}JP.propTypes={onClick:o().func},JP.defaultProps={onClick:()=>{}};const eA=uo(qP)`
  @media ${zg} {
    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }

  &.is-open {
    @media ${zg} {
      right: 0;
      bottom: 0;
    }
  }
`;function tA({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:o}=Dg();return t.createElement(eA,{className:_o()({LandbotPopup:!0,"is-open":n,"is-proactive":r}),proactiveHeight:o},e)}tA.propTypes={children:o().node.isRequired};class nA extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.POPUP)}open(){this.core.events.emit(Iv)}close(){this.core.events.emit(Nv)}showProactive(e){this.core.events.emit(Ov,e)}hideProactive(){this.core.events.emit(Cv)}_contentRenderer(){return t.createElement(kP,null,t.createElement(tA,null,t.createElement(oP,null,t.createElement($P,null))))}}const rA=uo.div`
  width: 100%;
  height: 100%;
`;function oA({children:e}){return t.createElement(rA,{modeClassName:"LandbotContainer"},e)}oA.propTypes={children:o().node.isRequired};class iA extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("Container element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(oA,null,t.createElement(oP,null,t.createElement(eP,null)))}}const aA=uo(HP)`
  :not(.is-open) {
    z-index: auto;
    padding: 0;
  }
`;function sA({isOpen:e,onClick:n,onClickOpensPopup:r,children:o}){return t.createElement(t.Fragment,null,t.createElement(aA,{className:_o()({"LivechatContent fade-in":!0,"is-block":!0,"is-open":e}),onClick:n},r&&t.createElement(JP,null),o),t.createElement(kn,null))}function lA(){const e=wv(),{isOpen:n}=Dg(),r=!E.isDesktop;return t.createElement($T,null,t.createElement(sA,{onClickOpensPopup:r,onClick:!n&&r?()=>e.events.emit(Iv,!0):null,isOpen:n},t.createElement(jT,null)))}sA.propTypes={isOpen:o().bool,onClickOpensPopup:o().bool,onClick:o().func,children:o().node.isRequired},sA.defaultProps={isOpen:!1,onClickOpensPopup:!1,onClick:()=>{}};const cA=uo.div`
  width: 100%;
  height: 100%;

  &.is-open {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: ${({theme:e})=>e.zIndex.Widget};
  }
`;function uA({children:e}){const{isOpen:n}=Dg();return t.createElement(cA,{className:_o()({LandbotContainerPopup:!0,"is-open":n})},e)}uA.propTypes={children:o().node.isRequired};class dA extends _P{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER_POPUP)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("ContainerPopup element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(kP,null,t.createElement(uA,null,t.createElement(oP,null,t.createElement(lA,null))))}}function fA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pA(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?fA(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):fA(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const hA=window.Landbot||{};window.Landbot=pA(pA({},hA),{},{Fullpage:xP,Livechat:GP,Native:KP,Popup:nA,Container:iA,ContainerPopup:dA,anime:Iw})}(),__webpack_exports__}()}));