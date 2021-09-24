define({ "api": [
  {
    "type": "put",
    "url": "/api/profile/update/:id/",
    "title": "R- Profile Update",
    "description": "<p>Update Profile</p>",
    "group": "API",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "API",
    "name": "PutApiProfileUpdateId"
  },
  {
    "type": "delete",
    "url": "/admin/ads/:id",
    "title": "H- Ad Delete",
    "description": "<p>Delete Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminAdsId"
  },
  {
    "type": "delete",
    "url": "/admin/banners/:id",
    "title": "F- Banner Delete",
    "description": "<p>Delete Banner</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminBannersId"
  },
  {
    "type": "delete",
    "url": "/admin/car-makes/:id",
    "title": "D- Car Makes Delete",
    "description": "<p>Delete Car Make</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminCarMakesId"
  },
  {
    "type": "delete",
    "url": "/admin/car-models/:id",
    "title": "D- Car Models Delete",
    "description": "<p>Delete Car Model</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminCarModelsId"
  },
  {
    "type": "delete",
    "url": "/admin/categories/:id",
    "title": "A- Categories Delete",
    "description": "<p>Delete Category</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminCategoriesId"
  },
  {
    "type": "delete",
    "url": "/admin/comments/:id",
    "title": "I- Ad Comments Delete",
    "description": "<p>Delete Ad Comment</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminCommentsId"
  },
  {
    "type": "delete",
    "url": "/admin/regions/:id",
    "title": "E- Regions Delete",
    "description": "<p>Delete Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminRegionsId"
  },
  {
    "type": "delete",
    "url": "/admin/reject-reasons/:id/",
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
    "name": "DeleteAdminRejectReasonsId"
  },
  {
    "type": "delete",
    "url": "/admin/subcategories/:id",
    "title": "B- SubCategories Delete",
    "description": "<p>Delete Sub Category</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminSubcategoriesId"
  },
  {
    "type": "delete",
    "url": "/admin/types/:id",
    "title": "C- Types Delete",
    "description": "<p>Delete Type</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteAdminTypesId"
  },
  {
    "type": "get",
    "url": "/admin/ad-logs/:id",
    "title": "H- Ad Logs Get",
    "description": "<p>Get Ad Logs By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminAdLogsId"
  },
  {
    "type": "get",
    "url": "/admin/ad-reports",
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
    "name": "GetAdminAdReports"
  },
  {
    "type": "get",
    "url": "/admin/ads/",
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
    "name": "GetAdminAds"
  },
  {
    "type": "get",
    "url": "/admin/ads/",
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
    "name": "GetAdminAds"
  },
  {
    "type": "get",
    "url": "/admin/ads/:id",
    "title": "H- Ad Get By Id",
    "description": "<p>Get Ad By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminAdsId"
  },
  {
    "type": "get",
    "url": "/admin/ads/:id/comments",
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
    "name": "GetAdminAdsIdComments"
  },
  {
    "type": "get",
    "url": "/admin/ads/:id/recent-comments",
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
    "name": "GetAdminAdsIdRecentComments"
  },
  {
    "type": "get",
    "url": "/admin/ads/:id/related",
    "title": "H- Ad Get Related By Id",
    "description": "<p>Get Related Ads By Ad Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/admin/banners/",
    "title": "F- Banners Get",
    "description": "<p>Get Banners</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminBanners"
  },
  {
    "type": "get",
    "url": "/admin/car-makes/",
    "title": "D- Car Makes Get",
    "description": "<p>Get Car Makes</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminCarMakes"
  },
  {
    "type": "get",
    "url": "/admin/car-makes/:carMakeId/car-models/",
    "title": "D- Car Models Get",
    "description": "<p>Get Car Models By carMakeId</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminCarMakesCarmakeidCarModels"
  },
  {
    "type": "get",
    "url": "/admin/categories/",
    "title": "A- Categories Get",
    "description": "<p>Get Categories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminCategories"
  },
  {
    "type": "get",
    "url": "/admin/categories/:categoryId/subcategories/",
    "title": "B- SubCategories Get",
    "description": "<p>Get SubCategories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminCategoriesCategoryidSubcategories"
  },
  {
    "type": "get",
    "url": "/admin/categories/:categoryId/types/",
    "title": "C- Types Get",
    "description": "<p>Get Types By Category Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminCategoriesCategoryidTypes"
  },
  {
    "type": "get",
    "url": "/admin/regions/",
    "title": "E- Regions Get",
    "description": "<p>Get Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminRegions"
  },
  {
    "type": "get",
    "url": "/admin/reject-reasons/all/",
    "title": "E- Reject Reasons Get All",
    "description": "<p>Get All Reject Reasons</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminRejectReasonsAll"
  },
  {
    "type": "get",
    "url": "/admin/reject-reasons/available/",
    "title": "E- Reject Reasons Get  Available",
    "description": "<p>Get Available Reject Reasons</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminRejectReasonsAvailable"
  },
  {
    "type": "get",
    "url": "/admin/stats",
    "title": "M- Stats Get",
    "description": "<p>Get Stats</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminStats"
  },
  {
    "type": "get",
    "url": "/admin/top-banners/",
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
    "name": "GetAdminTopBanners"
  },
  {
    "type": "get",
    "url": "/admin/user-logs/:id",
    "title": "K- Users Logs Get",
    "description": "<p>Get Users Logs By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminUserLogsId"
  },
  {
    "type": "get",
    "url": "/admin/user-managed-categories/:id",
    "title": "L- Managed Categories Get",
    "description": "<p>Get Categories Managed By User Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetAdminUserManagedCategoriesId"
  },
  {
    "type": "get",
    "url": "/admin/users/:id/fav-ads",
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
    "name": "GetAdminUsersIdFavAds"
  },
  {
    "type": "get",
    "url": "/admin/users/:id/followers",
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
    "name": "GetAdminUsersIdFollowers"
  },
  {
    "type": "get",
    "url": "/admin/users/:id/followings",
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
    "name": "GetAdminUsersIdFollowings"
  },
  {
    "type": "post",
    "url": "/admin/Banners",
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
    "name": "PostAdminBanners"
  },
  {
    "type": "post",
    "url": "/admin/car-makes/",
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
    "name": "PostAdminCarMakes"
  },
  {
    "type": "post",
    "url": "/admin/car-models/",
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
    "name": "PostAdminCarModels"
  },
  {
    "type": "post",
    "url": "/admin/categories/",
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
    "name": "PostAdminCategories"
  },
  {
    "type": "post",
    "url": "/admin/notify-all",
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
    "name": "PostAdminNotifyAll"
  },
  {
    "type": "post",
    "url": "/admin/notify-user/:userId",
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
    "name": "PostAdminNotifyUserUserid"
  },
  {
    "type": "post",
    "url": "/admin/regions/",
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
    "name": "PostAdminRegions"
  },
  {
    "type": "post",
    "url": "/admin/reject-reasons/",
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
    "name": "PostAdminRejectReasons"
  },
  {
    "type": "post",
    "url": "/admin/subcategories/:id",
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
    "name": "PostAdminSubcategoriesId"
  },
  {
    "type": "post",
    "url": "/admin/top-banners",
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
    "name": "PostAdminTopBanners"
  },
  {
    "type": "post",
    "url": "/admin/top-banners/:id",
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
    "name": "PostAdminTopBannersId"
  },
  {
    "type": "post",
    "url": "/admin/top-banners/:id",
    "title": "G- Top Banner Delete",
    "description": "<p>Delete Top Banner</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostAdminTopBannersId"
  },
  {
    "type": "post",
    "url": "/admin/types/",
    "title": "C- Types Create",
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
    "name": "PostAdminTypes"
  },
  {
    "type": "post",
    "url": "/admin/user-managed-categories/:id/add",
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
    "name": "PostAdminUserManagedCategoriesIdAdd"
  },
  {
    "type": "post",
    "url": "/admin/user-managed-categories/:id/remove",
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
    "name": "PostAdminUserManagedCategoriesIdRemove"
  },
  {
    "type": "post",
    "url": "/admin/users",
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
    "name": "PostAdminUsers"
  },
  {
    "type": "post",
    "url": "/admin/users/:id",
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
    "name": "PostAdminUsersId"
  },
  {
    "type": "put",
    "url": "/admin/ad-reports/toggle-complete/:id",
    "title": "J- Ad Toggle Complete",
    "description": "<p>Toggle Complete Ad Report</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdminAdReportsToggleCompleteId"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id",
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
    "name": "PutAdminAdsId"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id/approve",
    "title": "H- Ad Approve",
    "description": "<p>Approve Ad By Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdminAdsIdApprove"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id/fix",
    "title": "H- Ad Fix",
    "description": "<p>Fix Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdminAdsIdFix"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id/move",
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
    "name": "PutAdminAdsIdMove"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id/reject",
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
    "name": "PutAdminAdsIdReject"
  },
  {
    "type": "put",
    "url": "/admin/ads/:id/unfix",
    "title": "H- Ad Un-Fix",
    "description": "<p>Unfix Ad</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PutAdminAdsIdUnfix"
  },
  {
    "type": "put",
    "url": "/admin/Banners/:id",
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
    "name": "PutAdminBannersId"
  },
  {
    "type": "put",
    "url": "/admin/car-makes/:id",
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
    "name": "PutAdminCarMakesId"
  },
  {
    "type": "put",
    "url": "/admin/car-models/:id",
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
    "name": "PutAdminCarModelsId"
  },
  {
    "type": "put",
    "url": "/admin/categories/:id",
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
    "name": "PutAdminCategoriesId"
  },
  {
    "type": "put",
    "url": "/admin/categories-sort/",
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
    "name": "PutAdminCategoriesSort"
  },
  {
    "type": "put",
    "url": "/admin/comments/:id",
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
    "name": "PutAdminCommentsId"
  },
  {
    "type": "put",
    "url": "/admin/regions/:id",
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
    "name": "PutAdminRegionsId"
  },
  {
    "type": "put",
    "url": "/admin/regions-sort/",
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
    "name": "PutAdminRegionsSort"
  },
  {
    "type": "put",
    "url": "/admin/reject-reasons/sort",
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
    "name": "PutAdminRejectReasonsSort"
  },
  {
    "type": "put",
    "url": "/admin/reject-reasons/update/:id/",
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
    "name": "PutAdminRejectReasonsUpdateId"
  },
  {
    "type": "put",
    "url": "/admin/subcategories/:id",
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
    "name": "PutAdminSubcategoriesId"
  },
  {
    "type": "put",
    "url": "/admin/subcategories-sort/",
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
    "name": "PutAdminSubcategoriesSort"
  },
  {
    "type": "put",
    "url": "/admin/types/:id",
    "title": "C- Types Update",
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
    "name": "PutAdminTypesId"
  },
  {
    "type": "put",
    "url": "/admin/types-sort/",
    "title": "C- Types Sort",
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
    "name": "PutAdminTypesSort"
  },
  {
    "type": "delete",
    "url": "/api/comments/:id",
    "title": "O- Ad Comments Delete Comment",
    "description": "<p>Delete Comment</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "DeleteApiCommentsId"
  },
  {
    "type": "delete",
    "url": "/api/delete-token/:token",
    "title": "S- Delete Token",
    "description": "<p>Delete Token</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "DeleteApiDeleteTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/my-ads/:id",
    "title": "N- My Ads Delete Ad",
    "description": "<p>Delete Ad</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "DeleteApiMyAdsId"
  },
  {
    "type": "get",
    "url": "/api/ads/:id/recent-comments",
    "title": "O- Ad Comments Get Ad Recent comments",
    "description": "<p>Get Ad Recent comments</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiAdsIdRecentComments"
  },
  {
    "type": "get",
    "url": "/api/ads/:id/related",
    "title": "F- Ad Get Related By Id",
    "description": "<p>Get Related Ads By Ad Id</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/api/ads/:id/related",
    "title": "O- Ad Comments Get Ad comments",
    "description": "<p>Get Ad comments</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiAdsIdRelated"
  },
  {
    "type": "get",
    "url": "/api/banners",
    "title": "P- Banners Get Banners",
    "description": "<p>Get Banners</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiBanners"
  },
  {
    "type": "get",
    "url": "/api/block-list",
    "title": "I- Block Lis Get",
    "description": "<p>Get Current User Block List</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiBlockList"
  },
  {
    "type": "get",
    "url": "/api/car-makes/",
    "title": "B- Car Makes Get",
    "description": "<p>Get Car Makes</p>",
    "group": "Api",
    "header": {
      "fields": {
        "MyHeaderGroup": [
          {
            "group": "MyHeaderGroup",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiCarMakes"
  },
  {
    "type": "get",
    "url": "/api/car-makes/:carMakeId/car-models/",
    "title": "B- Car Models Get",
    "description": "<p>Get Car Models By carMakeId</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiCarMakesCarmakeidCarModels"
  },
  {
    "type": "get",
    "url": "/api/categories/",
    "title": "A- Categories Get",
    "description": "<p>Get Categories</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiCategories"
  },
  {
    "type": "get",
    "url": "/api/categories/",
    "title": "A- Categories Get By Id",
    "description": "<p>Get Category By Id</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiCategories"
  },
  {
    "type": "get",
    "url": "/api/channels",
    "title": "M- Chat Get Channels",
    "description": "<p>Get Chat Channels</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiChannels"
  },
  {
    "type": "get",
    "url": "/api/channels/:id",
    "title": "M- Chat Get Channel By Id",
    "description": "<p>Get Channel By Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiChannelsId"
  },
  {
    "type": "get",
    "url": "/api/channels/:id/messages",
    "title": "M- Chat Get Channel Messages",
    "description": "<p>Get Channel Messages By Channel Id</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiChannelsIdMessages"
  },
  {
    "type": "get",
    "url": "/api/followers-list",
    "title": "J- Followers Get Current User Followers",
    "description": "<p>Get Current User Followers</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiFollowersList"
  },
  {
    "type": "get",
    "url": "/api/followings-list",
    "title": "J- Follwings Get Current User Follwings",
    "description": "<p>Get Current User Follwings</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiFollowingsList"
  },
  {
    "type": "get",
    "url": "/api/home",
    "title": "Q- Home Get Data",
    "description": "<p>Get Home Page Data</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiHome"
  },
  {
    "type": "get",
    "url": "/api/my-ads",
    "title": "N- My Ads Get Ads",
    "description": "<p>Get Ads For Logged User</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiMyAds"
  },
  {
    "type": "get",
    "url": "/api/my-ads/:id",
    "title": "N- My Ads Get Ad By Id",
    "description": "<p>Get Ads For Logged User By Ad Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiMyAdsId"
  },
  {
    "type": "get",
    "url": "/api/my-favourite",
    "title": "K- Favourites Get Current User Ads Favourite",
    "description": "<p>Get Current User Ads Favourite</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiMyFavourite"
  },
  {
    "type": "get",
    "url": "/api/notifications",
    "title": "L- Notifications Get Current User Notifications",
    "description": "<p>Get Current User Notifications</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiNotifications"
  },
  {
    "type": "get",
    "url": "/api/profile",
    "title": "R- Profile Get Information",
    "description": "<p>Get Profile Information</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiProfile"
  },
  {
    "type": "get",
    "url": "/api/regions/",
    "title": "C- Regions Get",
    "description": "<p>Get Regions</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiRegions"
  },
  {
    "type": "get",
    "url": "/api/top-banners",
    "title": "P- Banners Get Top Banners",
    "description": "<p>Get Top Banners</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiTopBanners"
  },
  {
    "type": "get",
    "url": "/api/users/:id/",
    "title": "E- Users Get",
    "description": "<p>Get User By Id</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id/",
    "title": "F- Ads Recent Get",
    "description": "<p>Get Ads Recent</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id/",
    "title": "F- Ads Get",
    "description": "<p>Get Ads</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id/",
    "title": "F- Ads Get  By Id",
    "description": "<p>Get Ad By Id</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "GetApiUsersId"
  },
  {
    "type": "post",
    "url": "/ads/:id/new-view",
    "title": "F- Ad Add View By Ad Id",
    "description": "<p>Add New View On Ad By Ad Id</p>",
    "group": "Api",
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostAdsIdNewView"
  },
  {
    "type": "post",
    "url": "/ads/:id/report",
    "title": "F- Ad Add Report By Ad Id",
    "description": "<p>Add New Report On Ad By Ad Id</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostAdsIdReport"
  },
  {
    "type": "post",
    "url": "/ads/:id/toggle-favourite",
    "title": "F- Ad Toggle Favourite",
    "description": "<p>Make Or Remove Favourite From Ad For Current User</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostAdsIdToggleFavourite"
  },
  {
    "type": "post",
    "url": "/ads/:id/toggle-like",
    "title": "F- Ad Toggle Like",
    "description": "<p>Make Or Remove Like From Ad For Current User</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostAdsIdToggleLike"
  },
  {
    "type": "post",
    "url": "/block-user/:id",
    "title": "I- Block Lis Create Block For User",
    "description": "<p>Create Block For User By User Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostBlockUserId"
  },
  {
    "type": "post",
    "url": "/channels",
    "title": "M- Chat Create Channel",
    "description": "<p>Create Channel</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostChannels"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-audio",
    "title": "M- Chat Add New Audio",
    "description": "<p>Chat Add New Attachment Audio</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostChannelsIdNewMessageAudio"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-photo",
    "title": "M- Chat Add New Image",
    "description": "<p>Chat Add New Attachment Image</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostChannelsIdNewMessagePhoto"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-text",
    "title": "M- Chat Add New Message",
    "description": "<p>Chat Add New Message</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostChannelsIdNewMessageText"
  },
  {
    "type": "post",
    "url": "/channels/:id/new-message-video",
    "title": "M- Chat Add New Video",
    "description": "<p>Chat Add New Attachment Video</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostChannelsIdNewMessageVideo"
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "O- Ad Comments Create Comment",
    "description": "<p>Create Comment On Ad</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostComments"
  },
  {
    "type": "post",
    "url": "/follow-user/:id",
    "title": "J- Follwings Create Follow",
    "description": "<p>Create Follow By User Target Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostFollowUserId"
  },
  {
    "type": "post",
    "url": "/last-active",
    "title": "R- Profile Add Last Active",
    "description": "<p>Add Last Active</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostLastActive"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "R- Profile Login",
    "description": "<p>Login To App</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/my-ads",
    "title": "N- My Ads Create Ad",
    "description": "<p>Create New Ad</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostMyAds"
  },
  {
    "type": "post",
    "url": "/push-demo/id/:id",
    "title": "S- Demo Send Notification To Player Ids",
    "description": "<p>Send Notification To Player Id  By Plyer Id</p>",
    "group": "Api",
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
    "groupTitle": "Api",
    "name": "PostPushDemoIdId"
  },
  {
    "type": "post",
    "url": "/push-demo/user/:user",
    "title": "S- Demo Send Demo Notification To User",
    "description": "<p>Send Demo Notification To User</p>",
    "group": "Api",
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
    "groupTitle": "Api",
    "name": "PostPushDemoUserUser"
  },
  {
    "type": "post",
    "url": "/register-token/:token",
    "title": "S- Push Tokens Register Token",
    "description": "<p>Register Token For Current User</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostRegisterTokenToken"
  },
  {
    "type": "post",
    "url": "/unblock-user/:id",
    "title": "I- Block Lis Remove Block From User",
    "description": "<p>Remove Block From User By User Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostUnblockUserId"
  },
  {
    "type": "post",
    "url": "/unfollow-user/:id",
    "title": "J- Follwings Remove Follow",
    "description": "<p>Remove Follow By User Target Id</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PostUnfollowUserId"
  },
  {
    "type": "put",
    "url": "/api/comments/:id",
    "title": "O- Ad Comments Update Comment",
    "description": "<p>Update Comment</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PutApiCommentsId"
  },
  {
    "type": "put",
    "url": "/api/my-ads/:id",
    "title": "N- My Ads Update Ad",
    "description": "<p>Update Ad</p>",
    "group": "Api",
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PutApiMyAdsId"
  },
  {
    "type": "put",
    "url": "/api/my-ads/:id/activate",
    "title": "N- My Ads Activate Ad",
    "description": "<p>Activate Ad</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PutApiMyAdsIdActivate"
  },
  {
    "type": "put",
    "url": "/api/my-ads/:id/deactivate",
    "title": "N- My Ads Deactivate Ad",
    "description": "<p>Deactivate Ad</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PutApiMyAdsIdDeactivate"
  },
  {
    "type": "put",
    "url": "/api/my-ads/:id/republish",
    "title": "N- My Ads Republish Ad",
    "description": "<p>Republish Ad</p>",
    "group": "Api",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Api",
    "name": "PutApiMyAdsIdRepublish"
  }
] });
