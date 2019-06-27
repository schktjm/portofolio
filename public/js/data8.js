
      var warmupData = {
        layoutData: {
          displayedPagesData: {
            masterPage: {
              structure: {
                DESKTOP: {
                  SITE_FOOTER: {
                    id: 'SITE_FOOTER',
                    type: 'Container',
                    metaData: { pageId: 'masterPage' },
                    parent: 'masterPage',
                    componentType: 'wysiwyg.viewer.components.FooterContainer',
                    skin:
                      'wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen',
                    layout: {
                      width: 980,
                      height: 67,
                      x: 0,
                      y: 3055,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'style-jxeq08wy',
                    components: ['comp-is9bxrcx', 'comp-is9bxuvc']
                  },
                  'comp-is9bxuvc': {
                    id: 'comp-is9bxuvc',
                    type: 'Component',
                    metaData: { pageId: 'masterPage' },
                    parent: 'SITE_FOOTER',
                    componentType: 'wysiwyg.viewer.components.LinkBar',
                    skin: 'wysiwyg.viewer.skins.LinkBarNoBGSkin',
                    dataQuery: '#dataItem-is9bxuz1',
                    propertyQuery: 'propItem-is9bxuz22',
                    layout: {
                      width: 77,
                      height: 21,
                      x: 882,
                      y: 23,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'lb1'
                  },
                  SITE_BACKGROUND: {
                    id: 'SITE_BACKGROUND',
                    metaData: { pageId: 'masterPage' },
                    parent: 'BOLT_SITE',
                    componentType: 'wysiwyg.viewer.components.SiteBackground',
                    skin: 'wysiwyg.viewer.skins.siteBackgroundSkin',
                    layout: {},
                    styleId: 'siteBackground'
                  },
                  masterPage: {
                    id: 'masterPage',
                    type: 'Document',
                    metaData: { pageId: 'masterPage' },
                    parent: 'SITE_ROOT',
                    componentType: 'mobile.core.components.MasterPage',
                    dataQuery: '#masterPage',
                    modes: { definitions: [], overrides: [] },
                    layout: {
                      y: 0,
                      rotationInDegrees: 0,
                      anchors: [
                        {
                          distance: 0,
                          type: 'BOTTOM_TOP',
                          locked: false,
                          targetComponent: 'PAGES_CONTAINER'
                        }
                      ]
                    },
                    components: [
                      'SITE_HEADER',
                      'PAGES_CONTAINER',
                      'comp-iqq82m4g',
                      'SITE_FOOTER'
                    ]
                  },
                  SITE_HEADER: {
                    id: 'SITE_HEADER',
                    type: 'Container',
                    metaData: { pageId: 'masterPage' },
                    parent: 'masterPage',
                    componentType: 'wysiwyg.viewer.components.HeaderContainer',
                    skin:
                      'wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen',
                    layout: {
                      width: 980,
                      height: 41,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'style-jxeq08xl',
                    components: []
                  },
                  PAGES_CONTAINER: {
                    id: 'PAGES_CONTAINER',
                    type: 'Container',
                    metaData: { pageId: 'masterPage' },
                    parent: 'masterPage',
                    componentType: 'wysiwyg.viewer.components.PagesContainer',
                    skin:
                      'wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen',
                    layout: {
                      width: 980,
                      height: 3014,
                      x: 0,
                      y: 41,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'pc1',
                    components: ['SITE_PAGES']
                  },
                  'comp-iqq82m4g': {
                    id: 'comp-iqq82m4g',
                    type: 'Component',
                    metaData: { pageId: 'masterPage' },
                    parent: 'masterPage',
                    componentType:
                      'wysiwyg.viewer.components.menus.DropDownMenu',
                    skin:
                      'wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonSkin',
                    dataQuery: '#dataItem-jgkg50o6',
                    propertyQuery: 'propItem-iqq82m4r',
                    layout: {
                      width: 616,
                      height: 33,
                      x: 103,
                      y: 3,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: true,
                      docked: { top: { px: 3 }, left: { px: 103 } }
                    },
                    styleId: 'style-jxeq08wi'
                  },
                  SITE_PAGES: {
                    id: 'SITE_PAGES',
                    type: 'Container',
                    metaData: { pageId: 'masterPage' },
                    parent: 'PAGES_CONTAINER',
                    componentType: 'wysiwyg.viewer.components.PageGroup',
                    skin: 'wysiwyg.viewer.skins.PageGroupSkin',
                    propertyQuery: 'SITE_PAGES',
                    layout: {
                      width: 980,
                      height: 3014,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    components: []
                  },
                  'comp-is9bxrcx': {
                    id: 'comp-is9bxrcx',
                    type: 'Component',
                    metaData: { pageId: 'masterPage' },
                    parent: 'SITE_FOOTER',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-is9bxrcx1',
                    propertyQuery: 'propItem-is9bxrcy',
                    layout: {
                      width: 794,
                      height: 17,
                      x: 14,
                      y: 27,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  }
                }
              },
              data: {
                behaviors_data: {},
                connections_data: {},
                document_data: {
                  masterPage: {
                    type: 'Document',
                    id: 'masterPage',
                    metaData: {
                      pageId: 'masterPage',
                      isPreset: true,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    siteName: 'Template Base',
                    mainPage: {
                      type: 'Page',
                      id: 'c1dmp',
                      metaData: {
                        pageId: 'masterPage',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      title: 'HOME',
                      hideTitle: true,
                      icon: '',
                      descriptionSEO: '',
                      metaKeywordsSEO: '',
                      pageTitleSEO: '',
                      pageUriSEO: 'home',
                      hidePage: false,
                      isMobileLandingPage: false,
                      underConstruction: false,
                      tpaApplicationId: 0,
                      pageSecurity: { requireLogin: false },
                      isPopup: false,
                      indexable: true,
                      isLandingPage: false,
                      pageBackgrounds: {
                        desktop: {
                          custom: true,
                          ref: {
                            type: 'BackgroundMedia',
                            id: 'customBgImg3vn',
                            metaData: {
                              pageId: 'masterPage',
                              isPreset: false,
                              schemaVersion: '2.0',
                              isHidden: false
                            },
                            mediaRef: {
                              type: 'Image',
                              id: 'c1dmp_desktop_mediaRef',
                              metaData: {
                                pageId: 'masterPage',
                                isPreset: false,
                                schemaVersion: '2.0',
                                isHidden: false
                              },
                              title: 'pexels-photo-29243.jpg',
                              uri:
                                '9c608a_1ad30b59bcd54f9e93650384a5456ef7~mv2_d_5616_3744_s_4_2.jpg',
                              description: 'private\/',
                              width: 5616,
                              height: 3744,
                              alt: '',
                              artist: { id: '', name: '' }
                            },
                            color: '{color_11}',
                            alignType: 'center',
                            fittingType: 'fill',
                            scrollType: 'fixed',
                            colorOverlay: '',
                            colorOverlayOpacity: 0
                          },
                          isPreset: true
                        },
                        mobile: {
                          custom: true,
                          ref: {
                            type: 'BackgroundMedia',
                            id: 'customBgImg24ta',
                            metaData: {
                              pageId: 'masterPage',
                              isPreset: false,
                              schemaVersion: '2.0',
                              isHidden: false
                            },
                            mediaRef: {
                              type: 'Image',
                              id: 'c1dmp_mobile_mediaRef',
                              metaData: {
                                pageId: 'masterPage',
                                isPreset: false,
                                schemaVersion: '2.0',
                                isHidden: false
                              },
                              title: 'pexels-photo-29243.jpg',
                              uri:
                                '9c608a_1ad30b59bcd54f9e93650384a5456ef7~mv2_d_5616_3744_s_4_2.jpg',
                              description: 'private\/',
                              width: 5616,
                              height: 3744,
                              alt: '',
                              artist: { id: '', name: '' }
                            },
                            color: '{color_11}',
                            alignType: 'top',
                            fittingType: 'legacy_tile',
                            scrollType: 'scroll',
                            colorOverlay: '',
                            colorOverlayOpacity: 0
                          },
                          isPreset: true,
                          mediaSizing: 'viewport'
                        }
                      },
                      translationData: { uriSEOTranslated: false },
                      ignoreBottomBottomAnchors: true
                    },
                    mainPageId: 'c1dmp',
                    renderModifiers: { pageAutoShrink: true },
                    characterSets: ['japanese', 'latin'],
                    usedFonts: [],
                    smSettings: {
                      socialLoginGoogleEnabled: true,
                      socialLoginFacebookEnabled: true
                    },
                    ignoreBottomBottomAnchors: true,
                    accessibilitySettings: { visualFocusDisabled: false },
                    layoutSettings: {
                      useDesktopSectionsLayout: true,
                      mechanism: 'mesh',
                      soapCompsAroundPagesContainer: true
                    },
                    styleSettings: { stylesPerPage: '1.0' },
                    mobileSettings: { animationsEnabled: true }
                  },
                  c1dmp: {
                    type: 'Page',
                    id: 'c1dmp',
                    metaData: {
                      pageId: 'masterPage',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    title: 'HOME',
                    hideTitle: true,
                    icon: '',
                    descriptionSEO: '',
                    metaKeywordsSEO: '',
                    pageTitleSEO: '',
                    pageUriSEO: 'home',
                    hidePage: false,
                    isMobileLandingPage: false,
                    underConstruction: false,
                    tpaApplicationId: 0,
                    pageSecurity: { requireLogin: false },
                    isPopup: false,
                    indexable: true,
                    isLandingPage: false,
                    pageBackgrounds: {
                      desktop: {
                        custom: true,
                        ref: {
                          type: 'BackgroundMedia',
                          id: 'customBgImg3vn',
                          metaData: {
                            pageId: 'masterPage',
                            isPreset: false,
                            schemaVersion: '2.0',
                            isHidden: false
                          },
                          mediaRef: {
                            type: 'Image',
                            id: 'c1dmp_desktop_mediaRef',
                            metaData: {
                              pageId: 'masterPage',
                              isPreset: false,
                              schemaVersion: '2.0',
                              isHidden: false
                            },
                            title: 'pexels-photo-29243.jpg',
                            uri:
                              '9c608a_1ad30b59bcd54f9e93650384a5456ef7~mv2_d_5616_3744_s_4_2.jpg',
                            description: 'private\/',
                            width: 5616,
                            height: 3744,
                            alt: '',
                            artist: { id: '', name: '' }
                          },
                          color: '{color_11}',
                          alignType: 'center',
                          fittingType: 'fill',
                          scrollType: 'fixed',
                          colorOverlay: '',
                          colorOverlayOpacity: 0
                        },
                        isPreset: true
                      },
                      mobile: {
                        custom: true,
                        ref: {
                          type: 'BackgroundMedia',
                          id: 'customBgImg24ta',
                          metaData: {
                            pageId: 'masterPage',
                            isPreset: false,
                            schemaVersion: '2.0',
                            isHidden: false
                          },
                          mediaRef: {
                            type: 'Image',
                            id: 'c1dmp_mobile_mediaRef',
                            metaData: {
                              pageId: 'masterPage',
                              isPreset: false,
                              schemaVersion: '2.0',
                              isHidden: false
                            },
                            title: 'pexels-photo-29243.jpg',
                            uri:
                              '9c608a_1ad30b59bcd54f9e93650384a5456ef7~mv2_d_5616_3744_s_4_2.jpg',
                            description: 'private\/',
                            width: 5616,
                            height: 3744,
                            alt: '',
                            artist: { id: '', name: '' }
                          },
                          color: '{color_11}',
                          alignType: 'top',
                          fittingType: 'legacy_tile',
                          scrollType: 'scroll',
                          colorOverlay: '',
                          colorOverlayOpacity: 0
                        },
                        isPreset: true,
                        mediaSizing: 'viewport'
                      }
                    },
                    translationData: { uriSEOTranslated: false },
                    ignoreBottomBottomAnchors: true
                  }
                },
                design_data: {},
                mobile_hints: {},
                component_properties: {},
                breakpoints_data: {},
                layout_data: {},
                theme_data: {}
              }
            },
            c1dmp: {
              structure: {
                DESKTOP: {
                  c1dmp: {
                    id: 'c1dmp',
                    type: 'Page',
                    metaData: { pageId: 'c1dmp' },
                    componentType: 'mobile.core.components.Page',
                    skin: 'wysiwyg.viewer.skins.page.TransparentPageSkin',
                    dataQuery: '#c1dmp',
                    propertyQuery: 'propItem-j60jhf2a',
                    layout: {
                      width: 1440,
                      height: 3014,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'p1',
                    components: [
                      'comp-iqq5pu28',
                      'comp-iqq5ub0l',
                      'comp-iqq640nd',
                      'comp-iqq6cdgt',
                      'comp-iqq7y37x'
                    ]
                  },
                  'comp-iqq5pu28': {
                    id: 'comp-iqq5pu28',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'c1dmp',
                    componentType: 'mobile.core.components.Container',
                    skin: 'wysiwyg.viewer.skins.area.RectangleArea',
                    layout: {
                      width: 416,
                      height: 472,
                      x: 284,
                      y: 100,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'style-jxeq08xf',
                    components: [
                      'comp-iqq5s2jz',
                      'comp-iqq5qjea',
                      'comp-iquhpvh8',
                      'comp-iquh7l40'
                    ]
                  },
                  'comp-iqq5ub0l': {
                    id: 'comp-iqq5ub0l',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'c1dmp',
                    componentType:
                      'wysiwyg.viewer.components.StripColumnsContainer',
                    propertyQuery: 'propItem-ir1rs4ry',
                    layout: {
                      width: 1440,
                      height: 77,
                      x: 0,
                      y: 641,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-ir1rs4ry5',
                    styleId: 'strc1',
                    components: ['mediair1rs4ry1']
                  },
                  'comp-iqq640nd': {
                    id: 'comp-iqq640nd',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'c1dmp',
                    componentType:
                      'wysiwyg.viewer.components.StripColumnsContainer',
                    propertyQuery: 'propItem-ir1rs4rz',
                    layout: {
                      width: 1440,
                      height: 891,
                      x: 0,
                      y: 718,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-ir1rs4rz5',
                    styleId: 'strc1',
                    components: ['mediair1rs4rz1']
                  },
                  'comp-iqq6cdgt': {
                    id: 'comp-iqq6cdgt',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'c1dmp',
                    componentType:
                      'wysiwyg.viewer.components.StripColumnsContainer',
                    propertyQuery: 'propItem-ir1rs4rz6',
                    layout: {
                      width: 1440,
                      height: 852,
                      x: 0,
                      y: 1609,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-ir1rs4rz11',
                    styleId: 'strc1',
                    components: ['mediair1rs4rz7']
                  },
                  'comp-iqq7y37x': {
                    id: 'comp-iqq7y37x',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'c1dmp',
                    componentType: 'wysiwyg.viewer.components.GoogleMap',
                    dataQuery: '#dataItem-iqq7y38g',
                    propertyQuery: 'propItem-iqq7y38p',
                    layout: {
                      width: 1439,
                      height: 553,
                      x: -229,
                      y: 2461,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false,
                      docked: {
                        left: { px: 0.5, vw: 0 },
                        right: { px: 0, vw: 0 }
                      }
                    },
                    styleId: 'gm1'
                  },
                  'comp-iqq5s2jz': {
                    id: 'comp-iqq5s2jz',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq5pu28',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq5s2k4',
                    propertyQuery: 'propItem-iqq5s2k41',
                    layout: {
                      width: 393,
                      height: 29,
                      x: 12,
                      y: 58,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq5qjea': {
                    id: 'comp-iqq5qjea',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq5pu28',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq5qjed',
                    propertyQuery: 'propItem-iqq5qjee',
                    layout: {
                      width: 396,
                      height: 213,
                      x: 12,
                      y: 134,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iquhpvh8': {
                    id: 'comp-iquhpvh8',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq5pu28',
                    componentType: 'wysiwyg.viewer.components.FiveGridLine',
                    skin: 'wysiwyg.viewer.skins.line.SolidLine',
                    propertyQuery: 'propItem-iquhpvhj',
                    layout: {
                      width: 94,
                      height: 5,
                      x: 164,
                      y: 385,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'style-jxeq08xb'
                  },
                  'comp-iquh7l40': {
                    id: 'comp-iquh7l40',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq5pu28',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iquh7l4c',
                    propertyQuery: 'propItem-iquh7l4d',
                    layout: {
                      width: 400,
                      height: 22,
                      x: 8,
                      y: 413,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  mediair1rs4ry1: {
                    id: 'mediair1rs4ry1',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq5ub0l',
                    componentType: 'wysiwyg.viewer.components.Column',
                    propertyQuery: 'propItem-ir1rs4ry2',
                    layout: {
                      width: 980,
                      height: 77,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-iqq5ub0x',
                    styleId: 'strc1',
                    components: ['comp-irvps096']
                  },
                  mediair1rs4rz1: {
                    id: 'mediair1rs4rz1',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq640nd',
                    componentType: 'wysiwyg.viewer.components.Column',
                    propertyQuery: 'propItem-ir1rs4rz2',
                    layout: {
                      width: 980,
                      height: 891,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-iqq640no',
                    styleId: 'strc1',
                    components: [
                      'comp-iqq64bfc',
                      'comp-iqq66dhx',
                      'comp-iqq68617',
                      'comp-iua8e4x2',
                      'comp-iqq69n8k',
                      'comp-iqq6a9ib'
                    ]
                  },
                  mediair1rs4rz7: {
                    id: 'mediair1rs4rz7',
                    type: 'Container',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'comp-iqq6cdgt',
                    componentType: 'wysiwyg.viewer.components.Column',
                    propertyQuery: 'propItem-ir1rs4rz8',
                    layout: {
                      width: 980,
                      height: 852,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    designQuery: '#dataItem-iqq6cdhb',
                    behaviorQuery: 'behavior-irbn53gl',
                    styleId: 'strc1',
                    components: [
                      'comp-iqq6csuz',
                      'comp-iqq6dfth',
                      'comp-iqq6enuc',
                      'comp-iqq6eyt5',
                      'comp-iqq6fbp1'
                    ]
                  },
                  'comp-irvps096': {
                    id: 'comp-irvps096',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4ry1',
                    componentType: 'wysiwyg.viewer.components.tpapps.TPAWidget',
                    skin: 'wysiwyg.viewer.skins.TPAWidgetSkin',
                    dataQuery: '#dataItem-irvps0fy',
                    layout: {
                      width: 155,
                      height: 46,
                      x: 412,
                      y: 15,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'style-jxeq08x6'
                  },
                  'comp-iqq64bfc': {
                    id: 'comp-iqq64bfc',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq64bfp',
                    propertyQuery: 'propItem-iqq64bfq',
                    layout: {
                      width: 260,
                      height: 21,
                      x: 64,
                      y: 74,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq66dhx': {
                    id: 'comp-iqq66dhx',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq66di5',
                    propertyQuery: 'propItem-iqq66di51',
                    layout: {
                      width: 434,
                      height: 150,
                      x: 64,
                      y: 126,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq68617': {
                    id: 'comp-iqq68617',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6863v',
                    propertyQuery: 'propItem-iqq6863w',
                    layout: {
                      width: 258,
                      height: 21,
                      x: 512,
                      y: 74,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iua8e4x2': {
                    id: 'comp-iua8e4x2',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iua8e4xz',
                    propertyQuery: 'propItem-iua8e4y0',
                    layout: {
                      width: 473,
                      height: 75,
                      x: 510,
                      y: 126,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq69n8k': {
                    id: 'comp-iqq69n8k',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq69nb6',
                    propertyQuery: 'propItem-iqq69nb61',
                    layout: {
                      width: 554,
                      height: 21,
                      x: 214,
                      y: 406,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6a9ib': {
                    id: 'comp-iqq6a9ib',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz1',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6a9kz',
                    propertyQuery: 'propItem-iqq6a9kz1',
                    layout: {
                      width: 975,
                      height: 360,
                      x: 4,
                      y: 464,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6csuz': {
                    id: 'comp-iqq6csuz',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz7',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6csvc',
                    propertyQuery: 'propItem-iqq6csvd',
                    layout: {
                      width: 554,
                      height: 21,
                      x: 214,
                      y: 79,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6dfth': {
                    id: 'comp-iqq6dfth',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz7',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6dfun',
                    propertyQuery: 'propItem-iqq6dfun1',
                    layout: {
                      width: 468,
                      height: 134,
                      x: 258,
                      y: 146,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6enuc': {
                    id: 'comp-iqq6enuc',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz7',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6enwu',
                    propertyQuery: 'propItem-iqq6enwv',
                    layout: {
                      width: 476,
                      height: 134,
                      x: 254,
                      y: 348,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6eyt5': {
                    id: 'comp-iqq6eyt5',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz7',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6eytd',
                    propertyQuery: 'propItem-iqq6eytd1',
                    layout: {
                      width: 476,
                      height: 134,
                      x: 254,
                      y: 529,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  },
                  'comp-iqq6fbp1': {
                    id: 'comp-iqq6fbp1',
                    type: 'Component',
                    metaData: { pageId: 'c1dmp' },
                    parent: 'mediair1rs4rz7',
                    componentType: 'wysiwyg.viewer.components.WRichText',
                    dataQuery: '#dataItem-iqq6fbpa',
                    propertyQuery: 'propItem-iqq6fbpb',
                    layout: {
                      width: 470,
                      height: 134,
                      x: 256,
                      y: 708,
                      scale: 1,
                      rotationInDegrees: 0,
                      fixedPosition: false
                    },
                    styleId: 'txtNew'
                  }
                }
              },
              data: {
                behaviors_data: {},
                connections_data: {},
                document_data: {
                  'dataItem-irvps0fy': {
                    type: 'TPAWidget',
                    id: 'dataItem-irvps0fy',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: true,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    applicationId: '1955',
                    appDefinitionId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
                    widgetId: '1440e92d-47d8-69be-ade7-e6de40127106'
                  }
                },
                design_data: {
                  'dataItem-iqq5ub0x': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-iqq5ub0x',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-iqq5ub0x1',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '{color_12}',
                      colorOpacity: 1,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 0
                    }
                  },
                  'dataItem-iqq640no': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-iqq640no',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-iqq640no1',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '#FAFAFA',
                      colorOpacity: 1,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 0
                    }
                  },
                  'dataItem-iqq6cdhb': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-iqq6cdhb',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-iqq6cdhb1',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '{color_18}',
                      colorOpacity: 0.8,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 0
                    }
                  },
                  'dataItem-ir1rs4ry5': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-ir1rs4ry5',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-ir1rs4ry4',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '#FFFFFF',
                      colorOpacity: 0,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 1
                    }
                  },
                  'dataItem-ir1rs4rz11': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-ir1rs4rz11',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-ir1rs4rz10',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '#FFFFFF',
                      colorOpacity: 0,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 1
                    }
                  },
                  'dataItem-ir1rs4rz5': {
                    type: 'MediaContainerDesignData',
                    id: 'dataItem-ir1rs4rz5',
                    metaData: {
                      pageId: 'c1dmp',
                      isPreset: false,
                      schemaVersion: '1.0',
                      isHidden: false
                    },
                    background: {
                      type: 'BackgroundMedia',
                      id: 'dataItem-ir1rs4rz4',
                      metaData: {
                        pageId: 'c1dmp',
                        isPreset: false,
                        schemaVersion: '1.0',
                        isHidden: false
                      },
                      color: '#FFFFFF',
                      colorOpacity: 0,
                      alignType: 'center',
                      fittingType: 'fill',
                      scrollType: 'none',
                      colorOverlay: '',
                      colorOverlayOpacity: 1
                    }
                  }
                },
                mobile_hints: {},
                component_properties: {},
                breakpoints_data: {},
                layout_data: {},
                theme_data: {}
              }
            }
          },
          anchorsMap: null,
          ssr: { shouldRenderPage: true, aspectsComponentStructures: {} },
          currentUrl: {
            full: 'https:\/\/si2omjt.wixsite.com\/mysite-2',
            protocol: 'https:',
            host: 'si2omjt.wixsite.com',
            hostname: 'si2omjt.wixsite.com',
            port: '',
            path: '\/mysite-2',
            search: '',
            hash: '',
            query: {}
          },
          isMobileView: false,
          siteMemberDetails: null,
          isPageAllowed: true
        },
        svgShapes: {
          '3d84bae5ad4d4d8a96de15e9f4b79a08.svg': {
            content:
              '<svg data-bbox="0 0 50 50" data-type="shape" xmlns="http:\/\/www.w3.org\/2000\/svg" width="50" height="50" viewBox="0 0 50 50">\n    <g>\n        <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"\/>\n    <\/g>\n<\/svg>\n',
            info: { svgType: 'shape', viewBox: '0 0 50 50', bbox: '0 0 50 50' },
            boxBoundaries: {}
          }
        },
        animationData: {},
        rootNavigationInfo: { format: 'slash', pageId: 'c1dmp', title: 'home' },
        currentUrl: {
          full: 'https:\/\/si2omjt.wixsite.com\/mysite-2',
          protocol: 'https:',
          host: 'si2omjt.wixsite.com',
          hostname: 'si2omjt.wixsite.com',
          port: '',
          path: '\/mysite-2',
          search: '',
          hash: '',
          query: {}
        },
        userWarmup: {},
        runtime: {
          behaviors: [],
          data: {
            behaviors_data: {},
            connections_data: {},
            document_data: {},
            design_data: {},
            mobile_hints: {},
            component_properties: {},
            theme_data: {}
          },
          state: {}
        },
        tpaWidgetNativeInitData: {}
      }