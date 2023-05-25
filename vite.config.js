import handlebars from 'vite-plugin-handlebars';

const basicContext = {
        title : "Hello this is some text",
        show : false,
        fruits : [
            "apples",
            "oranges",
            "bananas"
        ],
        isClient : true,
        fruitSales : [
            {
              day : "Monday", 
              apples : 13, 
              oranges : 34
            },
            {
              day : "Tuesday", 
              apples : 17, 
              oranges : 28
            },
            {
              day : "Thursday",
               apples : 7, 
               oranges : 45
              },
        ]
    };

export default {
  base : '/responsive_webpages/',
  plugins: [handlebars({
    context : basicContext
  })]
};