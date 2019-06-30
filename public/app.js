var serviceTopology = {
  cacheKillerVersion: '1',
  staticServerUrl: 'https://static.parastorage.com/',
  usersScriptsRoot: '//static.parastorage.com/services/wix-users/2.660.0',
  biServerUrl: 'https://frog.wix.com/',
  userServerUrl: 'https://users.wix.com/',
  billingServerUrl: 'https://premium.wix.com/',
  mediaRootUrl: 'https://static.wixstatic.com/',
  logServerUrl: 'https://frog.wix.com/plebs',
  monitoringServerUrl: 'https://TODO/',
  usersClientApiUrl: 'https://users.wix.com/wix-users',
  publicStaticBaseUri: '//static.parastorage.com/services/wix-public/1.253.0',
  basePublicUrl: 'https://www.wix.com/',
  postLoginUrl: 'https://www.wix.com/my-account',
  postSignUpUrl: 'https://www.wix.com/new/account',
  baseDomain: 'wix.com',
  staticMediaUrl: 'https://static.wixstatic.com/media',
  staticAudioUrl: 'https://music.wixstatic.com/mp3',
  staticDocsUrl: 'https://docs.wixstatic.com/ugd',
  emailServer: 'https://assets.wix.com/common-services/notification/invoke',
  blobUrl: 'https://static.parastorage.com/wix_blob',
  htmlEditorUrl: 'http://editor.wix.com/html',
  siteMembersUrl: 'https://users.wix.com/wix-sm',
  scriptsLocationMap: {
    automation: 'https://static.parastorage.com/services/automation/1.23.0',
    bootstrap: 'https://static.parastorage.com/services/bootstrap/2.1229.80',
    'ck-editor': 'https://static.parastorage.com/services/ck-editor/1.87.3',
    core: 'https://static.parastorage.com/services/core/2.1229.80',
    'dbsm-editor-app':
      'https://static.parastorage.com/services/dbsm-editor-app/1.687.0',
    'dbsm-viewer-app':
      'https://static.parastorage.com/services/dbsm-viewer-app/1.529.0',
    ecommerce: 'https://static.parastorage.com/services/ecommerce/1.203.0',
    'fallback-viewer-app':
      'https://static.parastorage.com/services/fallback-viewer-app/1.0.0',
    'js-platform-apps-configuration':
      'https://static.parastorage.com/services/js-platform-apps-configuration/1.80.0',
    'js-wixcode-sdk':
      'https://static.parastorage.com/services/js-wixcode-sdk/1.383.0',
    langs: 'https://static.parastorage.com/services/langs/2.577.0',
    'linguist-flags':
      'https://static.parastorage.com/services/linguist-flags/1.38.0',
    'promote-analytics-adapter':
      'https://static.parastorage.com/services/promote-analytics-adapter/2.117.0',
    'promote-seo-renderer':
      'https://static.parastorage.com/services/promote-seo-renderer/1.2.0',
    santa: 'https://static.parastorage.com/services/santa/1.7477.2',
    'santa-langs':
      'https://static.parastorage.com/services/santa-langs/1.4966.0',
    'santa-resources':
      'https://static.parastorage.com/services/santa-resources/1.2.0',
    'santa-site-auth-module':
      'https://static.parastorage.com/services/santa-site-auth-module/1.9.0',
    'semi-native-sdk':
      'https://static.parastorage.com/services/semi-native-sdk/1.8.0',
    sitemembers: 'https://static.parastorage.com/services/sm-js-sdk/1.31.0',
    skins: 'https://static.parastorage.com/services/skins/2.1229.80',
    tpa: 'https://static.parastorage.com/services/tpa/2.1065.0',
    web: 'https://static.parastorage.com/services/web/2.1229.80',
    'wix-bolt': 'https://static.parastorage.com/services/wix-bolt/1.2888.0',
    'wix-code-platform':
      'https://static.parastorage.com/services/wix-code-platform/1.172.0',
    'wix-code-viewer-app':
      'https://static.parastorage.com/services/wix-code-viewer-app/1.120.0',
    'wix-music-embed':
      'https://static.parastorage.com/services/wix-music-embed/1.26.0',
    'wix-ui-santa':
      'https://static.parastorage.com/services/wix-ui-santa/1.134.0',
    wixapps: 'https://static.parastorage.com/services/wixapps/2.486.0',
    'wixcode-namespaces':
      'https://static.parastorage.com/services/wixcode-namespaces/1.145.0'
  },
  developerMode: false,
  productionMode: true,
  staticServerFallbackUrl: 'https://sslstatic.wix.com/',
  staticVideoUrl: 'https://video.wixstatic.com/',
  cloudStorageUrl: 'https://static.wixstatic.com/',
  usersDomainUrl: 'https://users.wix.com/wix-users',
  scriptsDomainUrl: 'https://static.parastorage.com/',
  userFilesUrl: 'https://static.parastorage.com/',
  staticHTMLComponentUrl: 'https://si2omjt-wixsite-com.filesusr.com/',
  secured: true,
  ecommerceCheckoutUrl: 'https://www.safer-checkout.com/',
  premiumServerUrl: 'https://premium.wix.com/',
  digitalGoodsServerUrl: 'https://dgs.wixapps.net/',
  wixCloudBaseDomain: 'wix-code.com',
  mailServiceSuffix: '/_api/common-services/notification/invoke',
  staticVideoHeadRequestUrl:
    'https://storage.googleapis.com/video.wixstatic.com',
  protectedPageResolverUrl:
    'https://site-pages.wix.com/_api/wix-public-html-info-webapp/resolve_protected_page_urls',
  mediaUploadServerUrl: 'https://files.wix.com/',
  siteAssetsServerUrl: 'https://siteassets.parastorage.com/pages',
  staticServerWixDomainUrl: 'https://www.wix.com/_partials',
  adaptiveVideoDomain: 'https://files.wix.com/',
  scriptsVersionsMap: {
    'santa-data-fixer': '1.446.0',
    'santa-site-metadata': '1.337.0',
    'santa-main-r': '1.100.0',
    'stylable-santa-flatten': '1.0.7',
    'ghostable-structure-builder': '1.16.0',
    'viewer-view-mode-json': '1.5.0'
  },
  publicStaticsUrl: '//static.parastorage.com/services/wix-public/1.253.0'
}
var santaModels = true
var isStreaming = true
var rendererModel = {
  metaSiteId: '66f668b0-7169-4d7b-bb2d-97df592b0656',
  siteInfo: {
    documentType: 'UGC',
    applicationType: 'HtmlWeb',
    siteId: '3e100bcd-868c-45df-9961-335a0ef35b8d',
    siteTitleSEO: 'mysite-2'
  },
  clientSpecMap: {
    '1955': {
      type: 'public',
      applicationId: 1955,
      appDefinitionId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
      appDefinitionName: 'Wix Events',
      instance:
        'wO-WACmw0cOzcRZTObUwtT1FAE_7h2L8mjK0GIp_T7s.eyJpbnN0YW5jZUlkIjoiZWY1OWU1NzEtNGY0Ny00MmJjLWFiNjctNWEwZWE1MjZhZGIwIiwiYXBwRGVmSWQiOiIxNDA2MDNhZC1hZjhkLTg0YTUtMmM4MC1hMGY2MGNiNDczNTEiLCJtZXRhU2l0ZUlkIjoiNjZmNjY4YjAtNzE2OS00ZDdiLWJiMmQtOTdkZjU5MmIwNjU2Iiwic2lnbkRhdGUiOiIyMDE5LTA2LTI3VDEzOjUzOjA2Ljc2MloiLCJ1aWQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpcEFuZFBvcnQiOiIyMDIuMjQ2LjkuMjI1LzM4MjM2IiwidmVuZG9yUHJvZHVjdElkIjpudWxsLCJkZW1vTW9kZSI6ZmFsc2UsIm9yaWdpbkluc3RhbmNlSWQiOiI2YTFjZTMyNy1lNGNjLTQ3NTgtYmI3Mi0xNTQ4NGNiNWJhZmMiLCJhaWQiOiI5Y2FlZjg4MS00YmYyLTQzNTktYTExMy1jNjExYmI3ZDExZGYiLCJiaVRva2VuIjoiODlhZjhkYzEtM2UyZS0wZmM3LTEwNGEtY2RkMWZjMGRhYmU2Iiwic2l0ZU93bmVySWQiOiIzOGU0MjQ4Yi1lZDdlLTRkM2UtODM0ZC1lZGEyMTNkMjMzNDEifQ',
      instanceId: 'ef59e571-4f47-42bc-ab67-5a0ea526adb0',
      sectionPublished: true,
      sectionMobilePublished: false,
      sectionSeoEnabled: true,
      widgets: {
        '14d2abc2-5350-6322-487d-8c16ff833c8a': {
          widgetUrl: 'https://events.wix.com/event',
          widgetId: '14d2abc2-5350-6322-487d-8c16ff833c8a',
          refreshOnWidthChange: true,
          mobileUrl: 'https://events.wix.com/event',
          appPage: {
            id: 'events',
            name: 'Events',
            defaultPage: '',
            hidden: true,
            multiInstanceEnabled: false,
            order: 1,
            indexable: true,
            fullPage: false,
            landingPageInMobile: false,
            hideFromMenu: true
          },
          published: true,
          mobilePublished: true,
          seoEnabled: true,
          preFetch: false,
          shouldBeStretchedByDefault: true,
          shouldBeStretchedByDefaultMobile: false,
          componentFields: { useSsrSeo: true },
          default: false
        },
        '405eb115-a694-4e2b-abaa-e4762808bb93': {
          widgetUrl: 'https://events.wix.com/events-server/html/members-page',
          widgetId: '405eb115-a694-4e2b-abaa-e4762808bb93',
          refreshOnWidthChange: true,
          appPage: {
            id: 'events_members_page',
            name: 'Events Members Page',
            defaultPage: '',
            hidden: true,
            multiInstanceEnabled: false,
            order: 2,
            indexable: true,
            fullPage: false,
            landingPageInMobile: false,
            hideFromMenu: false
          },
          published: true,
          mobilePublished: true,
          seoEnabled: false,
          preFetch: false,
          shouldBeStretchedByDefault: false,
          shouldBeStretchedByDefaultMobile: false,
          componentFields: {},
          default: false
        },
        '1440e92d-47d8-69be-ade7-e6de40127106': {
          widgetUrl: 'https://events.wix.com/events-server/html/widget',
          widgetId: '1440e92d-47d8-69be-ade7-e6de40127106',
          refreshOnWidthChange: true,
          mobileUrl: 'https://events.wix.com/events-server/html/widget',
          published: true,
          mobilePublished: true,
          seoEnabled: true,
          preFetch: false,
          shouldBeStretchedByDefault: false,
          shouldBeStretchedByDefaultMobile: false,
          componentFields: { useSsrSeo: true },
          tpaWidgetId: 'wix_events',
          default: true
        },
        '79018288-7ad9-4e82-888b-9259918012ec': {
          widgetUrl: 'https://events.wix.com/events-server/html/members-widget',
          widgetId: '79018288-7ad9-4e82-888b-9259918012ec',
          refreshOnWidthChange: true,
          published: true,
          mobilePublished: true,
          seoEnabled: false,
          preFetch: false,
          shouldBeStretchedByDefault: false,
          shouldBeStretchedByDefaultMobile: false,
          componentFields: {},
          tpaWidgetId: 'events_members_widget',
          default: false
        }
      },
      appRequirements: { requireSiteMembers: false },
      isWixTPA: true,
      installedAtDashboard: true,
      permissions: { revoked: false },
      appFields: {
        platform: {
          baseUrls: {
            staticsBaseUrl:
              'https://static.parastorage.com/services/wix-events-frameless-widget/1.11.0/',
            baseUrl: 'https://events.wix.com/_api/wix-one-events-server'
          },
          editorScriptUrl:
            'https://static.parastorage.com/services/editor-script/1.7.0/editor-script.bundle.js'
        }
      }
    },
    '4': {
      type: 'public',
      applicationId: 4,
      appDefinitionId: '14d7032a-0a65-5270-cca7-30f599708fed',
      appDefinitionName: 'WixCoupons',
      instance:
        'oALCzSJVGUOuvDCT_mxYapuxS6JPOH2BiEtLx-ep9EY.eyJpbnN0YW5jZUlkIjoiM2FjZjQyNjgtNTgyYi00NGRlLTljZTUtNmQxNzE5MjM0OWYwIiwiYXBwRGVmSWQiOiIxNGQ3MDMyYS0wYTY1LTUyNzAtY2NhNy0zMGY1OTk3MDhmZWQiLCJtZXRhU2l0ZUlkIjoiNjZmNjY4YjAtNzE2OS00ZDdiLWJiMmQtOTdkZjU5MmIwNjU2Iiwic2lnbkRhdGUiOiIyMDE5LTA2LTI3VDEzOjUzOjA2Ljc2MloiLCJ1aWQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpcEFuZFBvcnQiOiIyMDIuMjQ2LjkuMjI1LzM4MjM2IiwidmVuZG9yUHJvZHVjdElkIjpudWxsLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6IjljYWVmODgxLTRiZjItNDM1OS1hMTEzLWM2MTFiYjdkMTFkZiIsImJpVG9rZW4iOiI1YzM5MmFkOC0yOTQyLTA5YTUtMjdjOC1mYWM4NDAwODRmYTYiLCJzaXRlT3duZXJJZCI6IjM4ZTQyNDhiLWVkN2UtNGQzZS04MzRkLWVkYTIxM2QyMzM0MSJ9',
      instanceId: '3acf4268-582b-44de-9ce5-6d17192349f0',
      sectionPublished: true,
      sectionMobilePublished: false,
      sectionSeoEnabled: true,
      widgets: {},
      appRequirements: { requireSiteMembers: false },
      isWixTPA: true,
      installedAtDashboard: true,
      permissions: { revoked: false },
      appFields: { nonDiscoverable: true }
    },
    '13': {
      type: 'sitemembers',
      applicationId: 13,
      collectionType: 'Open',
      collectionFormFace: 'Register',
      collectionExposure: 'Public',
      smcollectionId: '463f8437-bcf9-44df-9cb8-dd7d11065d29'
    },
    '-666': {
      type: 'metasite',
      metaSiteId: '66f668b0-7169-4d7b-bb2d-97df592b0656',
      appDefId: '22bef345-3c5b-4c18-b782-74d4085112ff',
      instance:
        '6pT5bBjixY-GLjO2Blh7W_QcXRNc6A6t5oeJtOj-0CA.eyJpbnN0YW5jZUlkIjoiNjZmNjY4YjAtNzE2OS00ZDdiLWJiMmQtOTdkZjU5MmIwNjU2IiwiYXBwRGVmSWQiOiIyMmJlZjM0NS0zYzViLTRjMTgtYjc4Mi03NGQ0MDg1MTEyZmYiLCJtZXRhU2l0ZUlkIjoiNjZmNjY4YjAtNzE2OS00ZDdiLWJiMmQtOTdkZjU5MmIwNjU2Iiwic2lnbkRhdGUiOiIyMDE5LTA2LTI3VDEzOjUzOjA2Ljc2MloiLCJ1aWQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpcEFuZFBvcnQiOm51bGwsInZlbmRvclByb2R1Y3RJZCI6bnVsbCwiZGVtb01vZGUiOmZhbHNlLCJhaWQiOiI5Y2FlZjg4MS00YmYyLTQzNTktYTExMy1jNjExYmI3ZDExZGYiLCJzaXRlT3duZXJJZCI6IjM4ZTQyNDhiLWVkN2UtNGQzZS04MzRkLWVkYTIxM2QyMzM0MSJ9',
      appDefinitionId: '22bef345-3c5b-4c18-b782-74d4085112ff',
      applicationId: -666
    }
  },
  premiumFeatures: [],
  geo: 'JPN',
  languageCode: 'ja',
  locale: 'ja-jp',
  previewMode: false,
  userId: '38e4248b-ed7e-4d3e-834d-eda213d23341',
  siteMetaData: {
    preloader: { uri: '', enabled: false },
    adaptiveMobileOn: true,
    quickActions: {
      socialLinks: [],
      colorScheme: 'dark',
      configuration: {
        quickActionsMenuEnabled: false,
        navigationMenuEnabled: true,
        phoneEnabled: false,
        emailEnabled: false,
        addressEnabled: false,
        socialLinksEnabled: false
      }
    },
    contactInfo: {
      companyName: '',
      phone: '',
      fax: '',
      email: '',
      address: ''
    },
    renderHints: {
      containsTPA: true,
      isMeshReady: true,
      containsAppPart: false,
      containsAppPart2: false
    }
  },
  runningExperiments: {
    sv_includeRavenInPreview: 'new',
    useEarlyLinkCheck: 'new',
    helveticaCssInRenderer: 'new',
    sv_ssrLoadProGallery: 'new',
    sv_loginSocialBarSelect: 'new',
    sv_blogStudioExperiment: 'old',
    sv_removeTestNode: 'new',
    preloadBoltScript: 'new',
    sv_reportIframeStartLoadingInWarmup: 'new',
    sv_ampLinkTag: 'new',
    sv_allowStylable: 'new',
    bv_layout_props: 'new',
    sv_newTPANativeDataFlow: 'new',
    sv_contactFormUseFormBuilderSubmit: 'new',
    sv_wixSiteUrlFallback: 'new',
    sv_ssrNoPagesData: 'new',
    sv_twitterMetaTags: 'new',
    sv_dontDeleteSvSessionCookieOnLogout: 'new',
    sv_addSiteRevisionToMembersCalls: 'new',
    sv_googleMapsRevamp: 'new',
    earlyLoadJSEx: 'new',
    preconnectTPA: 'new',
    bv_runtimeEventsStore: 'new',
    newLoginTheme: 'new',
    sv_fontsByAgent: 'new',
    sv_fixedMobileHeader: 'new',
    sv_ssrLoadArtStore: 'new',
    preconnectApps: 'new',
    sv_tpaInnerRouteNavigation: 'new',
    sv_blogSocialCounters: 'new',
    sv_meshReadyFallback: 'new',
    sv_meshLayout: 'new',
    sv_loadUserGeneratedAppsAfterBootstrap: 'new',
    sv_ssr_image_src: 'new',
    ssrFontShortcut: 'new',
    sv_ssrLoadBookings: 'new',
    sv_tpaStateChangedEvent: 'new',
    sv_controllerScripts: 'new',
    wixCodeNoIframe: 'new',
    useRegExpForFontsParse: 'new',
    sv_orphanSlideDataFixer: 'new',
    sv_moveRouterDataToRGI: 'new',
    sv_tpaInnerRouteWorker: 'new',
    sv_nativeComponents: 'new',
    bv_test_shtaweem: 'new',
    useFontFaceSet: 'new',
    useModernBundle: 'old',
    sv_postmessage_security: 'new',
    sv_enableBackgroundVideoOnTablet: 'new',
    sv_tpaAddChatApp: 'new',
    sv_restoreAutosaveWhenMobileFails: 'new',
    sv_ssrLoadRestaurants: 'new',
    sv_ssrLoadGetSubscrbers: 'new',
    ssrCompPrefetch: 'new',
    displayWixAdsNewVersion: 'new',
    sv_useBackendGoogleOAuthFlow: 'new',
    sv_bookingsFES: 'new',
    bv_nativeComponents: 'new',
    sv_videobox_mobile: 'new',
    oneAppWixAds: 'true',
    sv_image_name_url: 'new',
    earlyLoadJS: 'new',
    xsrfHeaderOnPostRequests: 'new',
    preloadBoltScriptExtra: 'new',
    sv_tpaSectionUrlByWidget: 'new',
    sv_loadGhostStructure: 'new',
    sv_includeBlankUrl: 'new',
    fontCssInRenderer: 'new',
    sv_contactFormAscendEmail: 'new',
    sv_ssrCache: 'new'
  },
  urlFormatModel: {
    format: 'slash',
    forbiddenPageUriSEOs: [
      'app',
      'apps',
      '_api',
      'robots.txt',
      'sitemap.xml',
      'feed.xml',
      'sites'
    ],
    pageIdToResolvedUriSEO: {}
  },
  passwordProtectedPages: [],
  useSandboxInHTMLComp: true,
  routers: { configMap: {} },
  siteMediaToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcHA6MzQ2NjQ5MDcwMDI5NzIwNiIsInN1YiI6InVzZXI6MzhlNDI0OGItZWQ3ZS00ZDNlLTgzNGQtZWRhMjEzZDIzMzQxIiwiYXVkIjoidXJuOnNlcnZpY2U6ZmlsZS51cGxvYWQiLCJleHAiOjE1NjIyNDgyMjgsImlhdCI6MTU2MTY0MzQyOCwianRpIjoia3R2Tm8xMWFudWQtanlvUWNUQmNyQSJ9.F6PkpYXEajwhiEZTa6CdgfzbeEPFhyIuyHxN6iNVjVA',
  mediaAuthToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcHA6MzQ2NjQ5MDcwMDI5NzIwNiIsInN1YiI6InNpdGU6NjZmNjY4YjAtNzE2OS00ZDdiLWJiMmQtOTdkZjU5MmIwNjU2IiwiYXVkIjoidXJuOnNlcnZpY2U6ZmlsZS51cGxvYWQiLCJleHAiOjE1NjE3Mjk5ODYsImlhdCI6MTU2MTY0MzU4NiwianRpIjoiaHFGR1B1NlRkRXgzWkprZG1JOExyQSIsImFkZGVkQnkiOiJhbm9ueW1vdXM6OWNhZWY4ODEtNGJmMi00MzU5LWExMTMtYzYxMWJiN2QxMWRmIn0.QxSVkvolhFQv0e9A30PEu03T-Rr4R7E0lt47Ldo_Nuc',
  pagesPlatformApplications: {},
  sitePropertiesInfo: {
    siteDisplayName: 'Mysite 2',
    locale: 'ja-jp',
    currency: 'JPY',
    timeZone: 'Asia/Tokyo'
  },
  seo: false,
  pageList: {
    pages: [
      {
        pageId: 'c1dmp',
        title: 'HOME',
        pageUriSEO: 'home',
        pageJsonFileName: '38e424_cc2ea53b69c2dc405fe51166b3bad29f_1.json'
      },
      {
        pageId: 'xijzv',
        title: 'Events',
        pageUriSEO: 'events',
        pageJsonFileName: '38e424_51dcedde7fad90cda14201e88a14e1f6_1.json'
      }
    ],
    mainPageId: 'c1dmp',
    masterPageJsonFileName: '38e424_6ed50e97050db2bd4e4adcdebce9536d_1.json',
    topology: [
      {
        baseUrl: 'https://static.wixstatic.com/',
        parts: 'sites/{filename}.z?v=3'
      },
      {
        baseUrl: 'https://staticorigin.wixstatic.com/',
        parts: 'sites/{filename}.z?v=3'
      },
      {
        baseUrl: 'https://fallback.wix.com/',
        parts: 'wix-html-editor-pages-webapp/page/{filename}'
      }
    ],
    fixedPagePath: {
      baseUrl: 'siteassets.parastorage.com/pages',
      parts:
        '/fixedData?ck={ck}&experiments={experiments}&isHttps={isHttps}&isUrlMigrated={isUrlMigrated}&metaSiteId={metaSiteId}&pageId={pageId}&quickActionsMenuEnabled={quickActionsMenuEnabled}&siteId=3e100bcd-868c-45df-9961-335a0ef35b8dv=3&version={version}'
    }
  }
}
var publicModel = {
  domain: 'wixsite.com',
  externalBaseUrl: 'https://si2omjt.wixsite.com/mysite-2',
  unicodeExternalBaseUrl: 'https://si2omjt.wixsite.com/mysite-2',
  timeSincePublish: 115121,
  favicon: '',
  deviceInfo: { deviceType: 'Other', browserType: 'Other', browserVersion: 0 },
  siteRevision: 2,
  sessionInfo: {
    hs: 396933369,
    svSession:
      '1637d0752ebaa4426e7b2c624fda8084eb006263cad04a54257e40e32ed68ae3807059dc222bee7a9d00a2e2a0960ce41e60994d53964e647acf431e4f798bcdc0d70231a05646bd357664c52d39c4bca0657555523f81f745b4af474455b2ee',
    ctToken:
      'UzdvMlh5RnZldXZ0RGRVc2todDNBTXp3TkFhb2NoTG1EMEpjclFfSlVuc3x7InVzZXJBZ2VudCI6ImN1cmwvNy41NC4wIiwidmFsaWRUaHJvdWdoIjoxNTYyMjQ4Mzg2NzU5fQ',
    isAnonymous: false,
    visitorId: '9caef881-4bf2-4359-a113-c611bb7d11df',
    siteMemberId: null
  },
  metaSiteFlags: [],
  siteMembersProtectedPages: [],
  indexable: true,
  hasBlogAmp: false,
  renderTime: 1561643428610,
  siteDisplayName: 'Mysite 2',
  siteAssets: { cacheVersions: { dataFixer: 1 } },
  siteMeshReady: true,
  layoutMechanism: 'MESH',
  requestId: '1561643586.6324283484732621334'
}

var googleAnalytics = ''
var ipAnonymization = false

var googleRemarketing = ''
var googleTagManager = ''
var facebookRemarketing = ''
var yandexMetrika = ''
var wixBiSession = {
  initialTimestamp: Date.now(),
  requestId: publicModel.requestId,
  viewerSessionId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    }
  ),
  sessionId: '13ed58bf-f9fd-459c-92b9-198f30963f24',
  initialRequestTimestamp: performance.timeOrigin
    ? performance.timeOrigin
    : Date.now() - performance.now(),
  visitorId: publicModel.sessionInfo.visitorId,

  is_rollout: 1,
  is_platform_loaded: 0,
  suppressbi: false,
  dc: '208',
  renderType: 'bolt',
  wixBoltExclusionReason: '',
  wixBoltExclusionReasonMoreInfo: '',
  sendBeacon: function(url) {
    if (!wixBiSession.suppressbi) {
      var sent = false
      try {
        sent = navigator.sendBeacon(url)
      } catch (e) {}
      if (!sent) {
        new Image().src = url
      }
    }
  },
  sendBeat: (function() {
    var beatUrl =
      'https://frog.wix.com/bt?src=29&evid=3' +
      '&v=1.2888.0' +
      '&msid=66f668b0-7169-4d7b-bb2d-97df592b0656' +
      '&isp=0' +
      '&st=2' +
      '&dc=208' +
      '&iss=1' +
      '&url=' +
      encodeURIComponent(location.href.replace(/^http(s)?:\/\/(www\.)?/, ''))
    var referrer = document.referrer
    if (referrer) {
      beatUrl += '&ref=' + encodeURIComponent(referrer)
    }
    var match = document.cookie.match(/_wixCIDX=([^;]*)/)
    if (match) {
      beatUrl += '&client_id=' + match[1]
    }
    return function(et, name, extra, isPageEvent) {
      var tts = Math.round(performance.now())
      var ts = et === 1 ? 0 : Date.now() - wixBiSession.initialTimestamp
      if (name && performance.mark) {
        performance.mark(name + ' (beat ' + et + ')')
      }
      extra = extra || ''
      if (extra.indexOf('pn=') === -1) {
        extra = '&pn=1' + extra
      }
      if (isPageEvent) {
        beatUrl = beatUrl.replace('evid=3', 'evid=5')
      }
      wixBiSession.sendBeacon(
        beatUrl +
          '&et=' +
          et +
          (name ? '&event_name=' + encodeURIComponent(name) : '') +
          '&ts=' +
          ts +
          '&tts=' +
          tts +
          '&vsi=' +
          wixBiSession.viewerSessionId +
          '&rid=' +
          wixBiSession.requestId +
          '&viewer_name=' +
          encodeURIComponent(wixBiSession.renderType) +
          '&is_rollout=' +
          wixBiSession.is_rollout +
          (wixBiSession.sessionId
            ? '&sessionId=' + wixBiSession.sessionId
            : '') +
          (wixBiSession.visitorId ? '&vid=' + wixBiSession.visitorId : '') +
          (wixBiSession.siteMemberId
            ? '&mid=' + wixBiSession.siteMemberId
            : '') +
          '&is_cached=' +
          wixBiSession.isCached +
          '&caching=' +
          wixBiSession.caching +
          extra
      )
    }
  })()
}

;(function() {
  var microPop,
    caching = 'none'
  var match = document.cookie.match(
    /ssr-caching="cache,\s*desc=(\w+)(?:,\s*varnish=(\w+))?(?:,\s*dc,\s*desc=(\w+))?(?:"|;|$)/
  )
  if (!match && window.PerformanceServerTiming) {
    match = []
    var serverTiming = performance.getEntriesByType('navigation')[0]
      .serverTiming
    serverTiming.forEach(function(st) {
      switch (st.name) {
        case 'cache':
          match[1] = st.description
          break
        case 'varnish':
          match[2] = st.description
          break
        case 'dc':
          microPop = st.description
      }
    })
  }
  if (match && match.length) {
    caching = match[1] + ',' + (match[2] || 'none')
    if (!microPop) {
      microPop = match[3]
    }
  }
  wixBiSession.caching = caching
  wixBiSession.isCached = caching.indexOf('hit') === 0
  if (microPop) {
    wixBiSession.microPop = microPop
  }
})()

wixBiSession.sendBeat(1, 'Init')
;(function(x, e, o, s, n) {
  var a = window.fedops || {}
  a.apps = a.apps || {}
  a.apps[x] = { startLoadTime: e && e.now && e.now() }
  try {
    a.sessionId = o.getItem('fedops.logger.sessionId')
  } catch (x) {}
  a.sessionId = a.sessionId || wixBiSession.viewerSessionId
  window.fedops = a
  var d =
    '//frog.wix.com/bolt-performance?appName=' +
    x +
    '&src=72&evid=21' +
    '&dc=208' +
    '&is_rollout=' +
    wixBiSession.is_rollout +
    '&st=2' +
    '&isp=0' +
    '&session_id=' +
    a.sessionId +
    '&_=' +
    s()
  wixBiSession.sendBeacon(d)
})(
  'bolt-viewer',
  window.performance,
  window.localStorage,
  Math.random,
  window.navigator
)
var adData = {}
var mobileAdData = {}

var usersDomain = 'https://users.wix.com/wix-users'
var santaBase = 'https://static.parastorage.com/services/santa/1.7486.1'
var boltBase = 'https://static.parastorage.com/services/wix-bolt/1.2888.0'
var requirejs = {
  onNodeCreated: function(node) {
    var src = node.getAttribute('src')
    var shouldIgnore = [
      'googletagmanager.com',
      'google-analytics.com',
      'googleadservices.com',
      'doubleclick.net',
      'connect.facebook.net'
    ].some(function(domain) {
      return src.indexOf(domain) !== -1
    })
    if (!shouldIgnore) {
      node.setAttribute('crossorigin', 'anonymous')
    }
  }
}
window.messageBuffer = []
window.messageHandler = function(event) {
  messageBuffer.push(event)
}
window.addEventListener('message', window.messageHandler, false)
;(function(c, t, u, n, p, l, y, z, v) {
  function e(b) {
    if (!w) {
      w = !0
      var d = t.getElementsByTagName(u)[0],
        a = t.createElement(u)
      a.src = z
      a.crossorigin = 'anonymous'
      a.addEventListener('load', function() {
        try {
          c[n] = q
          c[p] = r
          var a = c[l],
            d = a.init
          a.init = function(a) {
            for (var b in a)
              Object.prototype.hasOwnProperty.call(a, b) && (v[b] = a[b])
            d(v)
          }
          B(b, a)
        } catch (A) {
          console.error(A)
        }
      })
      d.parentNode.insertBefore(a, d)
    }
  }
  function B(b, d) {
    try {
      for (var a = 0; a < b.length; a++) if ('function' === typeof b[a]) b[a]()
      var f = m.data,
        g = !1,
        h = !1
      for (a = 0; a < f.length; a++)
        if (f[a].f) {
          h = !0
          var e = f[a]
          !1 === g && 'init' !== e.f && d.init()
          g = !0
          d[e.f].apply(d, e.a)
        }
      !1 === h && d.init()
      var k = c[n],
        l = c[p]
      for (a = 0; a < f.length; a++)
        f[a].e && k ? k.apply(c, f[a].e) : f[a].p && l && l.apply(c, [f[a].p])
    } catch (C) {
      console.error(C)
    }
  }
  for (var g = !0, x = !1, k = 0; k < document.scripts.length; k++)
    if (-1 < document.scripts[k].src.indexOf(y)) {
      g = 'no' !== document.scripts[k].getAttribute('data-lazy')
      break
    }
  var w = !1,
    h = [],
    m = function(b) {
      ;(b.e ||
        b.p ||
        (b.f && -1 < b.f.indexOf('capture')) ||
        (b.f && -1 < b.f.indexOf('showReportDialog'))) &&
        g &&
        e(h)
      m.data.push(b)
    }
  m.data = []
  c[l] = {
    onLoad: function(b) {
      h.push(b)
      ;(g && !x) || e(h)
    },
    forceLoad: function() {
      x = !0
      g &&
        setTimeout(function() {
          e(h)
        })
    }
  }
  'init addBreadcrumb captureMessage captureException captureEvent configureScope withScope showReportDialog'
    .split(' ')
    .forEach(function(b) {
      c[l][b] = function() {
        m({ f: b, a: arguments })
      }
    })
  var q = c[n]
  c[n] = function(b, d, a, f, e) {
    m({ e: [].slice.call(arguments) })
    q && q.apply(c, arguments)
  }
  var r = c[p]
  c[p] = function(b) {
    m({ p: b.reason })
    r && r.apply(c, arguments)
  }
  g ||
    setTimeout(function() {
      e(h)
    })
})(
  window,
  document,
  'script',
  'onerror',
  'onunhandledrejection',
  'Sentry',
  '8b4e078a51d04e0e9efdf470027f0ec1',
  'https://browser.sentry-cdn.com/4.6.2/bundle.min.js',
  { dsn: 'https://8b4e078a51d04e0e9efdf470027f0ec1@sentry.wixpress.com/3' }
)
var htmlClassList = document.documentElement.classList
var clientSideRender = false
