define({ "api": [
  {
    "type": "get",
    "url": "/categories/",
    "title": "A- Categories Get",
    "description": "<p>Get Categories</p>",
    "group": "API",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "API",
    "name": "GetCategories"
  },
  {
    "type": "delete",
    "url": "/ads/:id",
    "title": "H- Ad Delete",
    "description": "<p>Delete Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdsId"
  },
  {
    "type": "delete",
    "url": "/banners/:id",
    "title": "F- Banner Delete",
    "description": "<p>Delete Banner</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteBannersId"
  },
  {
    "type": "delete",
    "url": "/car-makes/:id",
    "title": "D- Car Makes Delete",
    "description": "<p>Delete Car Make</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteCarMakesId"
  },
  {
    "type": "delete",
    "url": "/car-models/:id",
    "title": "D- Car Models Delete",
    "description": "<p>Delete Car Model</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteCarModelsId"
  },
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "A- Categories Delete",
    "description": "<p>Delete Category</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteCategoriesId"
  },
  {
    "type": "delete",
    "url": "/comments/:id",
    "title": "I- Ad Comments Delete",
    "description": "<p>Delete Ad Comment</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteCommentsId"
  },
  {
    "type": "delete",
    "url": "/comments/:id",
    "title": "O- Ad Comments Delete Comment",
    "description": "<p>Delete Comment</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "DeleteCommentsId"
  },
  {
    "type": "delete",
    "url": "/delete-token/:token",
    "title": "S- Delete Token",
    "description": "<p>Delete Token</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "DeleteDeleteTokenToken"
  },
  {
    "type": "delete",
    "url": "/my-ads/:id",
    "title": "N- My Ads Delete Ad",
    "description": "<p>Delete Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "DeleteMyAdsId"
  },
  {
    "type": "delete",
    "url": "/regions/:id",
    "title": "E- Regions Delete",
    "description": "<p>Delete Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteRegionsId"
  },
  {
    "type": "delete",
    "url": "/reject-reasons/:id/",
    "title": "E- Reject Reasons Delete",
    "description": "<p>Delete Reject Reasons</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteRejectReasonsId"
  },
  {
    "type": "delete",
    "url": "/subcategories/:id",
    "title": "B- SubCategories Delete",
    "description": "<p>Delete Sub Category</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteSubcategoriesId"
  },
  {
    "type": "delete",
    "url": "/types/:id",
    "title": "3-Types Delete",
    "description": "<p>Delete Type</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteTypesId"
  },
  {
    "type": "get",
    "url": "/ad-logs/:id",
    "title": "H- Ad Logs Get",
    "description": "<p>Get Ad Logs By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdLogsId"
  },
  {
    "type": "get",
    "url": "/ad-reports",
    "title": "J- Ad Reports Get",
    "description": "<p>Get Ad Reports</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdReports"
  },
  {
    "type": "get",
    "url": "/ads/",
    "title": "H- Ads Get",
    "description": "<p>Get Ads</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAds"
  },
  {
    "type": "get",
    "url": "/ads/",
    "title": "K- Users Get",
    "description": "<p>Get users</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAds"
  },
  {
    "type": "get",
    "url": "/ads/:id",
    "title": "H- Ad Get By Id",
    "description": "<p>Get Ad By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdsId"
  },
  {
    "type": "get",
    "url": "/ads/:id/comments",
    "title": "I- Ad Comments Get",
    "description": "<p>Get Ad Comments</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdComments"
  },
  {
    "type": "get",
    "url": "/ads/:id/recent-comments",
    "title": "I- Ad Comments Get Recent",
    "description": "<p>Get Ad Recent Comments</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdRecentComments"
  },
  {
    "type": "get",
    "url": "/ads/:id/recent-comments",
    "title": "O- Ad Comments Get Ad Recent comments",
    "description": "<p>Get Ad Recent comments</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdRecentComments"
  },
  {
    "type": "get",
    "url": "/ads/:id/related",
    "title": "H- Ad Get Related By Id",
    "description": "<p>Get Related Ads By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/ads/:id/related",
    "title": "F- Ad Get Related By Id",
    "description": "<p>Get Related Ads By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/ads/:id/related",
    "title": "O- Ad Comments Get Ad comments",
    "description": "<p>Get Ad comments</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/banners/",
    "title": "F- Banners Get",
    "description": "<p>Get Banners</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetBanners"
  },
  {
    "type": "get",
    "url": "/banners",
    "title": "P- Banners Get Banners",
    "description": "<p>Get Banners</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetBanners"
  },
  {
    "type": "get",
    "url": "/block-list",
    "title": "I- Block Lis Get",
    "description": "<p>Get Current User Block List</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetBlockList"
  },
  {
    "type": "get",
    "url": "/car-makes/",
    "title": "D- Car Makes Get",
    "description": "<p>Get Car Makes</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCarMakes"
  },
  {
    "type": "get",
    "url": "/car-makes/",
    "title": "B- Car Makes Get",
    "description": "<p>Get Car Makes</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetCarMakes"
  },
  {
    "type": "get",
    "url": "/car-makes/:carMakeId/car-models/",
    "title": "D- Car Models Get",
    "description": "<p>Get Car Models By carMakeId</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCarMakesCarmakeidCarModels"
  },
  {
    "type": "get",
    "url": "/car-makes/:carMakeId/car-models/",
    "title": "B- Car Models Get",
    "description": "<p>Get Car Models By carMakeId</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetCarMakesCarmakeidCarModels"
  },
  {
    "type": "get",
    "url": "/categories/",
    "title": "A- Categories Get",
    "description": "<p>Get Categories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/",
    "title": "A- Categories Get By Id",
    "description": "<p>Get Category By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/:categoryId/subcategories/",
    "title": "B- SubCategories Get",
    "description": "<p>Get SubCategories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategoriesCategoryidSubcategories"
  },
  {
    "type": "get",
    "url": "/categories/:categoryId/types/",
    "title": "C- Types Get",
    "description": "<p>Get Types By Category Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategoriesCategoryidTypes"
  },
  {
    "type": "get",
    "url": "/channels",
    "title": "M- Chat Get Channels",
    "description": "<p>Get Chat Channels</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetChannels"
  },
  {
    "type": "get",
    "url": "/channels/:id",
    "title": "M- Chat Get Channel By Id",
    "description": "<p>Get Channel By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetChannelsId"
  },
  {
    "type": "get",
    "url": "/channels/:id/messages",
    "title": "M- Chat Get Channel Messages",
    "description": "<p>Get Channel Messages By Channel Id</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetChannelsIdMessages"
  },
  {
    "type": "get",
    "url": "/followers-list",
    "title": "J- Followers Get Current User Followers",
    "description": "<p>Get Current User Followers</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetFollowersList"
  },
  {
    "type": "get",
    "url": "/followings-list",
    "title": "J- Follwings Get Current User Follwings",
    "description": "<p>Get Current User Follwings</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetFollowingsList"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "Q- Home Get Data",
    "description": "<p>Get Home Page Data</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetHome"
  },
  {
    "type": "get",
    "url": "/my-ads",
    "title": "N- My Ads Get Ads",
    "description": "<p>Get Ads For Logged User</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetMyAds"
  },
  {
    "type": "get",
    "url": "/my-ads/:id",
    "title": "N- My Ads Get Ad By Id",
    "description": "<p>Get Ads For Logged User By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetMyAdsId"
  },
  {
    "type": "get",
    "url": "/my-favourite",
    "title": "K- Favourites Get Current User Ads Favourite",
    "description": "<p>Get Current User Ads Favourite</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetMyFavourite"
  },
  {
    "type": "get",
    "url": "/notifications",
    "title": "L- Notifications Get Current User Notifications",
    "description": "<p>Get Current User Notifications</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetNotifications"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "R- Profile Get Information",
    "description": "<p>Get Profile Information</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetProfile"
  },
  {
    "type": "get",
    "url": "/regions/",
    "title": "E- Regions Get",
    "description": "<p>Get Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetRegions"
  },
  {
    "type": "get",
    "url": "/regions/",
    "title": "C- Regions Get",
    "description": "<p>Get Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetRegions"
  },
  {
    "type": "get",
    "url": "/reject-reasons/all/",
    "title": "E- Reject Reasons Get All",
    "description": "<p>Get All Reject Reasons</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetRejectReasonsAll"
  },
  {
    "type": "get",
    "url": "/reject-reasons/available/",
    "title": "E- Reject Reasons Get  Available",
    "description": "<p>Get Available Reject Reasons</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetRejectReasonsAvailable"
  },
  {
    "type": "get",
    "url": "/stats",
    "title": "M- Stats Get",
    "description": "<p>Get Stats</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetStats"
  },
  {
    "type": "get",
    "url": "/top-banners/",
    "title": "G- Top Banners Get",
    "description": "<p>Get Top Banners</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetTopBanners"
  },
  {
    "type": "get",
    "url": "/top-banners",
    "title": "P- Banners Get Top Banners",
    "description": "<p>Get Top Banners</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetTopBanners"
  },
  {
    "type": "get",
    "url": "/user-logs/:id",
    "title": "K- Users Logs Get",
    "description": "<p>Get Users Logs By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetUserLogsId"
  },
  {
    "type": "get",
    "url": "/user-managed-categories/:id",
    "title": "L- Managed Categories Get",
    "description": "<p>Get Categories Managed By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetUserManagedCategoriesId"
  },
  {
    "type": "get",
    "url": "/users/:id/",
    "title": "E- Users Get",
    "description": "<p>Get User By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/",
    "title": "F- Ads Recent Get",
    "description": "<p>Get Ads Recent</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/",
    "title": "F- Ads Get",
    "description": "<p>Get Ads</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/",
    "title": "F- Ads Get  By Id",
    "description": "<p>Get Ad By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/fav-ads",
    "title": "K- Users Get Favourit Ads",
    "description": "<p>Get Favourit Ads By User Id</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetUsersIdFavAds"
  },
  {
    "type": "get",
    "url": "/users/:id/followers",
    "title": "K- Users Get Followers",
    "description": "<p>Get User Followers By User Id</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetUsersIdFollowers"
  },
  {
    "type": "get",
    "url": "/users/:id/followings",
    "title": "K- Users Get Followings",
    "description": "<p>Get User Followings By User Id</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetUsersIdFollowings"
  },
  {
    "type": "post",
    "url": "/ads/:id/new-view",
    "title": "F- Ad Add View By Ad Id",
    "description": "<p>Add New View On Ad By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostAdsIdNewView"
  },
  {
    "type": "post",
    "url": "/ads/:id/report",
    "title": "F- Ad Add Report By Ad Id",
    "description": "<p>Add New Report On Ad By Ad Id</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "text",
        "defaultValue": "details text",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostAdsIdReport"
  },
  {
    "type": "post",
    "url": "/ads/:id/toggle-favourite",
    "title": "F- Ad Toggle Favourite",
    "description": "<p>Make Or Remove Favourite From Ad For Current User</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostAdsIdToggleFavourite"
  },
  {
    "type": "post",
    "url": "/ads/:id/toggle-like",
    "title": "F- Ad Toggle Like",
    "description": "<p>Make Or Remove Like From Ad For Current User</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostAdsIdToggleLike"
  },
  {
    "type": "post",
    "url": "/Banners",
    "title": "F- Banner Create",
    "description": "<p>Create Banner</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>banner image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad infro",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "note",
        "defaultValue": "ad note",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad url",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostBanners"
  },
  {
    "type": "post",
    "url": "/block-user/:id",
    "title": "I- Block Lis Create Block For User",
    "description": "<p>Create Block For User By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostBlockUserId"
  },
  {
    "type": "post",
    "url": "/car-makes/",
    "title": "D- Car Makes Create",
    "description": "<p>Create Car make</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "car make title",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostCarMakes"
  },
  {
    "type": "post",
    "url": "/car-models/",
    "title": "D- Car Models Create",
    "description": "<p>Create Car Model</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "Model Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMakeId",
        "defaultValue": "Car Make Id",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostCarModels"
  },
  {
    "type": "post",
    "url": "/categories/",
    "title": "A- Categories Create",
    "description": "<p>Create Category</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>category Image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title.",
        "description": "<p>&quot;</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title.",
        "description": "<p>&quot;</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostCategories"
  },
  {
    "type": "post",
    "url": "/channels",
    "title": "M- Chat Create Channel",
    "description": "<p>Create Channel</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad target id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "user",
        "defaultValue": "user owner ad id",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostChannels"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-audio",
    "title": "M- Chat Add New Audio",
    "description": "<p>Chat Add New Attachment Audio</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "attachment",
            "description": "<p>Audio Attachment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostChannelsIdNewMessageAudio"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-photo",
    "title": "M- Chat Add New Image",
    "description": "<p>Chat Add New Attachment Image</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "attachment",
            "description": "<p>Image Attachment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostChannelsIdNewMessagePhoto"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-text",
    "title": "M- Chat Add New Message",
    "description": "<p>Chat Add New Message</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "body",
        "defaultValue": "message ",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostChannelsIdNewMessageText"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-video",
    "title": "M- Chat Add New Video",
    "description": "<p>Chat Add New Attachment Video</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "attachment",
            "description": "<p>Video Attachment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostChannelsIdNewMessageVideo"
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "O- Ad Comments Create Comment",
    "description": "<p>Create Comment On Ad</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad target id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "text",
        "defaultValue": "comment text",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostComments"
  },
  {
    "type": "post",
    "url": "/follow-user/:id",
    "title": "J- Follwings Create Follow",
    "description": "<p>Create Follow By User Target Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostFollowUserId"
  },
  {
    "type": "post",
    "url": "/last-active",
    "title": "R- Profile Add Last Active",
    "description": "<p>Add Last Active</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostLastActive"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "R- Profile Login",
    "description": "<p>Login To App</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "defaultValue": "user name",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "mobile",
        "defaultValue": "mobile",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "code",
        "defaultValue": "login code",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/my-ads",
    "title": "N- My Ads Create Ad",
    "description": "<p>Create New Ad</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File[]",
            "optional": false,
            "field": "photos",
            "description": "<p>array of photos.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "ad title (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "price",
        "defaultValue": "ad price (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "categoryId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "subcategory",
        "defaultValue": "subcategoryId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "typeId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "region",
        "defaultValue": "region id (required if properties)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMake",
        "defaultValue": "ad car make id (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carModel",
        "defaultValue": "ad car model id (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carYear",
        "defaultValue": "ad car year (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "km",
        "defaultValue": "ad car km (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "details",
        "defaultValue": "ad details (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "longitude",
        "defaultValue": "ad longitude ",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "latitude",
        "defaultValue": "ad latitude ",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostMyAds"
  },
  {
    "type": "post",
    "url": "/notify-all",
    "title": "n- Push Notification Create",
    "description": "<p>Create Notification</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "englishBody",
        "defaultValue": "Englis hBody",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "arabicBody",
        "defaultValue": "Arabic Body",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostNotifyAll"
  },
  {
    "type": "post",
    "url": "/notify-user/:userId",
    "title": "n- Push Notification Create",
    "description": "<p>Create Notification By User Id</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "englishBody",
        "defaultValue": "Englis hBody",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "arabicBody",
        "defaultValue": "Arabic Body",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostNotifyUserUserid"
  },
  {
    "type": "post",
    "url": "/push-demo/id/:id",
    "title": "S- Demo Send Notification To Player Ids",
    "description": "<p>Send Notification To Player Id  By Plyer Id</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ar_message",
        "defaultValue": "Arabic Message",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "en_message",
        "defaultValue": "English Message",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "data",
        "defaultValue": "any data",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "group_id",
        "defaultValue": "group id",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostPushDemoIdId"
  },
  {
    "type": "post",
    "url": "/push-demo/user/:user",
    "title": "S- Demo Send Demo Notification To User",
    "description": "<p>Send Demo Notification To User</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ar_message",
        "defaultValue": "Arabic Message",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "en_message",
        "defaultValue": "English Message",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostPushDemoUserUser"
  },
  {
    "type": "post",
    "url": "/regions/",
    "title": "E- Regions Create",
    "description": "<p>Create Regions</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostRegions"
  },
  {
    "type": "post",
    "url": "/register-token/:token",
    "title": "S- Push Tokens Register Token",
    "description": "<p>Register Token For Current User</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostRegisterTokenToken"
  },
  {
    "type": "post",
    "url": "/reject-reasons/",
    "title": "E- Reject Reasons Create",
    "description": "<p>Create Reject Reasons</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostRejectReasons"
  },
  {
    "type": "post",
    "url": "/subcategories/:id",
    "title": "B- SubCategories Create",
    "description": "<p>Create Sub Categories By Category Id</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": "<p>category id.</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostSubcategoriesId"
  },
  {
    "type": "post",
    "url": "/top-banners",
    "title": "G- Top Banner Create",
    "description": "<p>Create Top Banner</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>banner image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad infro",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "note",
        "defaultValue": "ad note",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad url",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "ad category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "type",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostTopBanners"
  },
  {
    "type": "post",
    "url": "/top-banners/:id",
    "title": "G- Top Banner Update",
    "description": "<p>Update Top Banner</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>banner image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad infro",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "note",
        "defaultValue": "ad note",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad url",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "ad category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "type",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostTopBannersId"
  },
  {
    "type": "post",
    "url": "/top-banners/:id",
    "title": "G- Top Banner Delete",
    "description": "<p>Delete Top Banner</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostTopBannersId"
  },
  {
    "type": "post",
    "url": "/types/",
    "title": "3-Types Create",
    "description": "<p>Create Type</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": "<p>category id.</p>"
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostTypes"
  },
  {
    "type": "post",
    "url": "/unblock-user/:id",
    "title": "I- Block Lis Remove Block From User",
    "description": "<p>Remove Block From User By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostUnblockUserId"
  },
  {
    "type": "post",
    "url": "/unfollow-user/:id",
    "title": "J- Follwings Remove Follow",
    "description": "<p>Remove Follow By User Target Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PostUnfollowUserId"
  },
  {
    "type": "post",
    "url": "/user-managed-categories/:id/add",
    "title": "L- Managed Categories Create",
    "description": "<p>Add Categories To User</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "categories",
        "defaultValue": "array of category Ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostUserManagedCategoriesIdAdd"
  },
  {
    "type": "post",
    "url": "/user-managed-categories/:id/remove",
    "title": "L- Managed Categories Delete",
    "description": "<p>Delete Categories From User</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "categories",
        "defaultValue": "array of category Ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostUserManagedCategoriesIdRemove"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "K- Users Create",
    "description": "<p>Create User</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "defaultValue": "User Name",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "mobile",
        "defaultValue": "User Mobile",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostUsers"
  },
  {
    "type": "post",
    "url": "/users/:id",
    "title": "K- Users Update",
    "description": "<p>Update User</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "isAdmin",
        "defaultValue": "isAdmin",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "isEnabled",
        "defaultValue": "isEnabled",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "managedByAdmin",
        "defaultValue": "managedByAdmin",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "role",
        "defaultValue": "role",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostUsersId"
  },
  {
    "type": "put",
    "url": "/ad-reports/toggle-complete/:id",
    "title": "J- Ad Toggle Complete",
    "description": "<p>Toggle Complete Ad Report</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdReportsToggleCompleteId"
  },
  {
    "type": "put",
    "url": "/ads/:id",
    "title": "H- Ads Update (deprecated)",
    "description": "<p>Update Ad (deprecated)</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "categoryId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "subcategory",
        "defaultValue": "subcategoryId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "typeId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "ad category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "region",
        "defaultValue": "regionId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMake",
        "defaultValue": "carMakeId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carModel",
        "defaultValue": "carModelId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carYear",
        "defaultValue": "carYear",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "isApproved",
        "defaultValue": "isApproved",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "isFixed",
        "defaultValue": "isFixed",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsId"
  },
  {
    "type": "put",
    "url": "/ads/:id/approve",
    "title": "H- Ad Approve",
    "description": "<p>Approve Ad By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsIdApprove"
  },
  {
    "type": "put",
    "url": "/ads/:id/fix",
    "title": "H- Ad Fix",
    "description": "<p>Fix Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsIdFix"
  },
  {
    "type": "put",
    "url": "/ads/:id/move",
    "title": "H- Ad Move",
    "description": "<p>Move Ad</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "subcategory",
        "defaultValue": "subcategoryId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "typeId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "ad category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "region",
        "defaultValue": "regionId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMake",
        "defaultValue": "carMakeId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carModel",
        "defaultValue": "carModelId",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carYear",
        "defaultValue": "carYear",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsIdMove"
  },
  {
    "type": "put",
    "url": "/ads/:id/reject",
    "title": "H- Ad Reject",
    "description": "<p>Reject Ad By Id</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "reason_ar",
        "defaultValue": "Arabic Reason",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "reason_en",
        "defaultValue": "English Reason",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsIdReject"
  },
  {
    "type": "put",
    "url": "/ads/:id/unfix",
    "title": "H- Ad Un-Fix",
    "description": "<p>Unfix Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdsIdUnfix"
  },
  {
    "type": "put",
    "url": "/Banners/:id",
    "title": "F- Banner Update",
    "description": "<p>Update Banner</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>banner image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "ad",
        "defaultValue": "ad infro",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "note",
        "defaultValue": "ad note",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "url",
        "defaultValue": "ad url",
        "description": ""
      },
      {
        "group": "Body",
        "type": "boolean",
        "optional": false,
        "field": "isEnabled",
        "defaultValue": "isEnabled boolean",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutBannersId"
  },
  {
    "type": "put",
    "url": "/car-makes/:id",
    "title": "D- Car Makes Update",
    "description": "<p>Update Car Make</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "car make title",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "isEnabled",
        "defaultValue": "false",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutCarMakesId"
  },
  {
    "type": "put",
    "url": "/car-models/:id",
    "title": "D- Car Models Update",
    "description": "<p>Update Car Model</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "Model Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMakeId",
        "defaultValue": "Car Make Id",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutCarModelsId"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "A- Categories Update",
    "description": "<p>Update Category</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Category",
            "description": "<p>Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>category Image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "title[ar]",
        "description": "<p>Arabic Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "title[en]",
        "description": "<p>English Title.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutCategoriesId"
  },
  {
    "type": "put",
    "url": "/categories-sort/",
    "title": "A- Categories Sort",
    "description": "<p>Sort Categories</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "categories",
        "defaultValue": "array of subcategory ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutCategoriesSort"
  },
  {
    "type": "put",
    "url": "/comments/:id",
    "title": "I- Ad Comment Update",
    "description": "<p>Update Ad Comment</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "isEnabled",
        "defaultValue": "isEnabled",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutCommentsId"
  },
  {
    "type": "put",
    "url": "/comments/:id",
    "title": "O- Ad Comments Update Comment",
    "description": "<p>Update Comment</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "text",
        "defaultValue": "comment text",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PutCommentsId"
  },
  {
    "type": "put",
    "url": "/my-ads/:id",
    "title": "N- My Ads Update Ad",
    "description": "<p>Update Ad</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File[]",
            "optional": false,
            "field": "photos",
            "description": "<p>array of photos.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title",
        "defaultValue": "ad title (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "price",
        "defaultValue": "ad price (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "categoryId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "subcategory",
        "defaultValue": "subcategoryId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "type",
        "defaultValue": "typeId (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "region",
        "defaultValue": "region id (required if properties)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carMake",
        "defaultValue": "ad car make id (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carModel",
        "defaultValue": "ad car model id (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "carYear",
        "defaultValue": "ad car year (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "km",
        "defaultValue": "ad car km (required if cars)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "details",
        "defaultValue": "ad details (required)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "longitude",
        "defaultValue": "ad longitude ",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "latitude",
        "defaultValue": "ad latitude ",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "thumbnailId",
        "defaultValue": "ad thumbnail id (required if old)",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "thumbnailType",
        "defaultValue": "ad thumbnail type (old(from ad photos), new(from new uploaded images))",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Number[]",
        "optional": false,
        "field": "deletePhotos",
        "defaultValue": "array of photes indexes need to delete",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PutMyAdsId"
  },
  {
    "type": "put",
    "url": "/my-ads/:id/activate",
    "title": "N- My Ads Activate Ad",
    "description": "<p>Activate Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PutMyAdsIdActivate"
  },
  {
    "type": "put",
    "url": "/my-ads/:id/deactivate",
    "title": "N- My Ads Deactivate Ad",
    "description": "<p>Deactivate Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PutMyAdsIdDeactivate"
  },
  {
    "type": "put",
    "url": "/my-ads/:id/republish",
    "title": "N- My Ads Republish Ad",
    "description": "<p>Republish Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Admin",
    "name": "PutMyAdsIdRepublish"
  },
  {
    "type": "put",
    "url": "/regions/:id",
    "title": "E- Regions Update",
    "description": "<p>Update Regions</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutRegionsId"
  },
  {
    "type": "put",
    "url": "/regions-sort/",
    "title": "E- Regions Sort",
    "description": "<p>Sort Regions</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "regions",
        "defaultValue": "array of regions ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutRegionsSort"
  },
  {
    "type": "put",
    "url": "/reject-reasons/sort",
    "title": "E- Reject Reasons Sort",
    "description": "<p>Sort Reject Reasons</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "reasons",
        "defaultValue": "array of reject reasons ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutRejectReasonsSort"
  },
  {
    "type": "put",
    "url": "/reject-reasons/update/:id/",
    "title": "E- Reject Reasons Update",
    "description": "<p>Update Reject Reasons</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutRejectReasonsUpdateId"
  },
  {
    "type": "put",
    "url": "/subcategories/:id",
    "title": "B- SubCategories Update",
    "description": "<p>Update Sub Category</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutSubcategoriesId"
  },
  {
    "type": "put",
    "url": "/subcategories-sort/",
    "title": "B- SubCategories Sort",
    "description": "<p>Sort Sub Categories</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "subcategories",
        "defaultValue": "array of subcategoriy ids",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutSubcategoriesSort"
  },
  {
    "type": "put",
    "url": "/types/:id",
    "title": "3-Types Update",
    "description": "<p>Update Type</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "Object",
        "optional": true,
        "field": "title",
        "description": "<p>category Title.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[ar]",
        "defaultValue": "Arabic Title",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "title[en]",
        "defaultValue": "English Title",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutTypesId"
  },
  {
    "type": "put",
    "url": "/types-sort/",
    "title": "3-Types Sort",
    "description": "<p>Sort Types</p>",
    "group": "Admin",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "category",
        "defaultValue": "category id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "types",
        "defaultValue": "array of ids by order",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutTypesSort"
  },
  {
    "type": "put",
    "url": "/profile/update/:id/",
    "title": "R- Profile Update",
    "description": "<p>Update Profile</p>",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>Profile Image.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "defaultValue": "Profile Name",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "defaultValue": "Profile Email",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "bio",
        "defaultValue": "Profile Bio",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "websiteUrl",
        "defaultValue": "Profile Website Url",
        "description": "<p>.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "facebookPageUrl",
        "defaultValue": "Profile Facebook Page Url",
        "description": "<p>.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Profile",
    "name": "PutProfileUpdateId"
  }
] });
