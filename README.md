# A Simple React - Prismic App

This is a simple app built with [React](https://reactjs.org/) JavaScript library, [Prismic](https://prismic.io/https://) headless API content management system and [Hagura](http://webjeda.com/hagura) Jekyll theme.

This app is built for personal experiment. If you would like to run it, follow the steps below. Feedback is always welcome!

## Customization

Copy the following files to where they should be and edit them with your own configuration.

* `default/public/index.html` to `public/index.html`
* `default/src/Components/Footer/Footer.js` to `src/Components/Footer/Footer.js`
* `default/src/Config.js` to `src/Config.js`
* `default/src/prismic-configuration.js` to `src/prismic-configuration.js`


## Create Prismic custom types

### Home Page

This custom type is used for home page. Enter this custom type's API ID in `src/Config.js` (`home_page_api_id`). Here is its JSON:

```
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "slug"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "Title"
      }
    },
    "image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 800,
          "height" : 300
        },
        "thumbnails" : [ ],
        "label" : "Image"
      }
    },
    "content" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label" : "Content"
      }
    }
  }
}
```

### Blog Post

Create a custom type for blog post with the JSON below. Enter its API ID in `src/Config.js` (`blog_post_api_id`).

```
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "slug"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "Title"
      }
    },
    "image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 800,
          "height" : 300
        },
        "thumbnails" : [ ],
        "label" : "Image"
      }
    },
    "description" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "strong, em",
        "label" : "Description"
      }
    },
    "content" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label" : "Content"
      }
    },
    "created_date" : {
      "type" : "Timestamp",
      "config" : {
        "label" : "Created Date"
      }
    }
  }
}
```

## Install dependencies

```
> $ npm install
```

## Runs the app in the development mode

Build and open your browser to http://localhost:3000.

```
> $ npm start
```

### Builds the app for production to the build folder
```
> $ npm run build
```
