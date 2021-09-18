define({ "api": [
  {
    "type": "delete",
    "url": "/banners/:id",
    "title": "1- Banner Delete",
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
    "title": "4- Car Makes Delete",
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
    "title": "4- Car Models Delete",
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
    "title": "1- Categories Delete",
    "description": "<p>Delete Category</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "DeleteCategoriesId"
  },
  {
    "type": "delete",
    "url": "/regions/:id",
    "title": "5- Regions Delete",
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
    "title": "5- Reject Reasons Delete",
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
    "title": "2- SubCategories Delete",
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
    "url": "/banners/",
    "title": "6- Banners Get",
    "description": "<p>Get Banners</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetBanners"
  },
  {
    "type": "get",
    "url": "/car-makes/",
    "title": "4- Car Makes Get",
    "description": "<p>Get Car Makes</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCarMakes"
  },
  {
    "type": "get",
    "url": "/car-makes/:carMakeId/car-models/",
    "title": "4- Car Models Get",
    "description": "<p>Get Car Models By carMakeId</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCarMakesCarmakeidCarModels"
  },
  {
    "type": "get",
    "url": "/categories/",
    "title": "1- Categories Get",
    "description": "<p>Get Categories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/:categoryId/subcategories/",
    "title": "2- SubCategories Get",
    "description": "<p>Get Categories</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategoriesCategoryidSubcategories"
  },
  {
    "type": "get",
    "url": "/categories/:categoryId/types/",
    "title": "3- Types Get",
    "description": "<p>Get Types By Category Id</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetCategoriesCategoryidTypes"
  },
  {
    "type": "get",
    "url": "/regions/",
    "title": "5- Regions Get",
    "description": "<p>Get Regions</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetRegions"
  },
  {
    "type": "get",
    "url": "/reject-reasons/all/",
    "title": "5- Reject Reasons Get All",
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
    "title": "5- Reject Reasons Get  Available",
    "description": "<p>Get Available Reject Reasons</p>",
    "group": "Admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "GetRejectReasonsAvailable"
  },
  {
    "type": "post",
    "url": "/Banners",
    "title": "6- Banner Create",
    "description": "<p>Create Banner</p>",
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
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "name": "PostBanners"
  },
  {
    "type": "post",
    "url": "/car-makes/",
    "title": "4- Car Makes Create",
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
    "title": "4- Car Models Create",
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
    "title": "1- Categories Create",
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
    "url": "/regions/",
    "title": "5- Regions Create",
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
    "url": "/reject-reasons/",
    "title": "5- Reject Reasons Create",
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
    "title": "2- SubCategories Create",
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
    "type": "put",
    "url": "/Banners/:id",
    "title": "6- Banner Update",
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
    "title": "4- Car Makes Update",
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
    "title": "4- Car Models Update",
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
    "title": "1- Categories Update",
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
    "title": "1- Categories Sort",
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
    "url": "/regions/:id",
    "title": "5- Regions Update",
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
    "title": "5- Regions Sort",
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
    "title": "5- Reject Reasons Sort",
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
    "title": "5- Reject Reasons Update",
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
    "title": "2- SubCategories Update",
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
    "title": "2- SubCategories Sort",
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
  }
] });